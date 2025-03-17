using HCoffeeWebAPI.Helpers;
using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HCoffeeWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository _orderRepo;
        private readonly ISendMessageRepository _messageRepo;
        private readonly int STATUS_ORDER_PENDING = 101;
        private readonly int STATUS_ORDER_DELIVERY = 102;
        private readonly int STATUS_ORDER_SUCCESS = 103;
        private readonly int STATUS_ORDER_ERROR = -1;
        private ResponseCode response = new ResponseCode();
        public OrderController(IOrderRepository orderRepo, ISendMessageRepository messageRepo)
        {
            _orderRepo = orderRepo;
            _messageRepo = messageRepo;
        }
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> getOrderByPhone(string numberPhone)
        {
            try
            {
                if (numberPhone == null)
                {
                    response._notFound.message = "PhoneNumber not null";
                    return NotFound(response._notFound);
                }
                var listOrder = await _orderRepo.getOrderbyPhone(numberPhone);
                if (listOrder != null && listOrder.Count > 0)
                {
                    response._success.data = listOrder;
                    return Ok(response._success);
                }
                response._notFound.message = "Not Found Order";
                return NotFound(response._notFound);
            }
            catch (Exception ex)
            {
                response._error.message = ex.Message;
                return BadRequest(response._error);
            }
        }
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> addOrder(OrderModel orderModel)
        {
            try
            {
                if (orderModel == null)
                {
                    response._warning.message = "Order not null";
                    return BadRequest(response._warning);
                }
                if (orderModel.PhoneNumber == null)
                {
                    response._warning.message = "Phone number not null";
                    return BadRequest(response._warning);
                }
                await _orderRepo.addOrder(orderModel);
                response._success.message = "Add Order Success";
                return Ok(response._success);
            }
            catch (Exception ex)
            {
                response._error.message = ex.Message;
                return BadRequest(response._error);
            }
        }

        [HttpPut]
        [Authorize]
        public async Task<IActionResult> updateOrder(int orderId, OrderModel orderModel)
        {
            try
            {
                if (orderId != orderModel.OrderId)
                {
                    response._notFound.message = "Not Found Order";
                    return NotFound(new ResponseCode.NotFound().message = "Not Found Order");
                }
                var result = await _orderRepo.updateOrder(orderId, orderModel);
                if (result == "Success")
                {
                    response._success.message = "Update Success";
                    response._success.data = orderModel;
                    return Ok(response._success);
                }
                response._notFound.message = "Not Found Order";
                return NotFound(response._notFound);
            }
            catch (Exception ex)
            {
                response._error.message = ex.Message;
                return BadRequest(response._error);
            }

        }

        [HttpDelete]
        [Authorize]
        public async Task<IActionResult> deleteOrder(int orderId, string numberPhone)
        {
            try
            {
                if (numberPhone == null)
                {
                    response._warning.message = "Phone number not null";
                    return BadRequest(response._warning);
                }
                await _orderRepo.deleteOrder(orderId, numberPhone);
                response._success.message = "Delete Success";
                return Ok(response._success);
            }
            catch (Exception ex)
            {
                response._error.message = ex.Message;
                return BadRequest(response._error);
            }

        }

        [HttpPut]
        [Authorize]
        public async Task<IActionResult> changeStatusOrder(int orderId, int statusCode)
        {
            try
            {
                //get Token Notify by OrderId
                var tokenNotify = await _orderRepo.getTokenNotifyByOrderId(orderId);
                var messRequest = new MessageRequestModel();
                messRequest.DeviceToken = tokenNotify;
                if (orderId > 0)
                {
                    if (statusCode == STATUS_ORDER_PENDING)
                    {
                        await _orderRepo.changeStatusOrder(orderId, STATUS_ORDER_DELIVERY);
                        messRequest.Title = "Đơn hàng đã được duyệt";
                        messRequest.Body = "Shipper hiện đang giao hàng cho bạn! Hãy đợi nhé!";
                        await _messageRepo.sendMessageAsync(messRequest);
                    }
                    else if (statusCode == STATUS_ORDER_DELIVERY)
                    {
                        await _orderRepo.changeStatusOrder(orderId, STATUS_ORDER_SUCCESS);
                        messRequest.Title = "Đơn hàng thành công";
                        messRequest.Body = "Cảm ơn quý khách! Chúc quý khách ngon miệng!";
                        await _messageRepo.sendMessageAsync(messRequest);
                    }
                    else if (statusCode == STATUS_ORDER_ERROR)
                    {
                        await _orderRepo.changeStatusOrder(orderId, STATUS_ORDER_PENDING);
                        messRequest.Title = "Khôi phục đơn hàng";
                        messRequest.Body = "Đơn hàng của quý khách đã được khôi phục";
                        await _messageRepo.sendMessageAsync(messRequest);
                    }
                    else
                    {
                        await _orderRepo.changeStatusOrder(orderId, STATUS_ORDER_ERROR);
                        messRequest.Title = "Lỗi đơn hàng";
                        messRequest.Body = "Đơn hàng của quý khách bị lỗi, hãy liên hệ HCoffee để giải quyết!";
                        await _messageRepo.sendMessageAsync(messRequest);
                    }
                    response._success.message = "Order Status change success";
                    return Ok(response._success);
                }
                response._notFound.message = "Not Found Order";
                return NotFound(response._notFound);
            }
            catch (Exception ex)
            {
                response._error.message = ex.Message;
                return BadRequest(response._error);
            }
        }
    }
}
