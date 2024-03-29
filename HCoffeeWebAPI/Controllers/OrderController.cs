using HCoffeeWebAPI.Helpers;
using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
using System.IdentityModel.Tokens.Jwt;
using Twilio.Jwt.AccessToken;

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

        public OrderController(IOrderRepository orderRepo,ISendMessageRepository messageRepo)
        {
            _orderRepo = orderRepo;
            _messageRepo = messageRepo;
        }   
        [HttpGet("{numberPhone}")]
        [Authorize]
        public async Task<IActionResult> getOrderByPhone(string numberPhone) 
        {
            try
            {
                if (numberPhone == null)
                {
                    return NotFound(new ResponseCode.NotFound().message = "PhoneNumber not null");
                }
                var listOrder = await _orderRepo.getOrderbyPhone(numberPhone);
                if(listOrder != null && listOrder.Count > 0)
                {
                    return Ok(new ResponseCode.Success().data = listOrder);
                }
                return NotFound(new ResponseCode.NotFound().message = "Not Found Order");
            }
            catch (Exception ex)
            {
                return BadRequest(new ResponseCode.Error().message = ex.Message);
            }
        }
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> addOrder(OrderModel orderModel)
        {
            try
            {
                if(orderModel == null)
                    return BadRequest(new ResponseCode.Warning().message="Order not null");
                if(orderModel.PhoneNumber == null)
                    return BadRequest(new ResponseCode.Warning().message = "Phone number not null");
                await _orderRepo.addOrder(orderModel);
                return Ok(new ResponseCode.Success().message="Add Order Success");
            }
            catch (Exception ex)
            {
                return BadRequest(new ResponseCode.Error().message = ex.Message);
            }
        }

        [HttpPut("{orderId}")]
        [Authorize]
        public async Task<IActionResult> updateOrder(int orderId,  OrderModel orderModel)
        {
            try
            {
                if(orderId != orderModel.OrderId)
                {
                    return NotFound(new ResponseCode.NotFound().message = "Not Found Order");
                }
                await _orderRepo.updateOrder(orderId, orderModel);
                return Ok(new ResponseCode.Success().message = "Update Success");
            }
            catch (Exception ex)
            {
                return BadRequest(new ResponseCode.Error().message = ex.Message);
            }
            
        }

        [HttpDelete("{orderId},{numberPhone}")]
        [Authorize]
        public async Task<IActionResult> deleteOrder(int orderId, string numberPhone)
        {
            try
            {
                if(numberPhone == null)
                    return BadRequest(new ResponseCode.Warning().message = "Phone number not null");
                await _orderRepo.deleteOrder(orderId, numberPhone);
                return Ok(new ResponseCode.Success().message = "Delete Success");
            }
            catch (Exception ex)
            {
                return BadRequest(new ResponseCode.Error().message = ex.Message);
            }
            
        }
       
        [HttpPut("{orderId},{statusCode}")]
        [Authorize]
        public async Task<IActionResult> changeStatusOrder(int orderId, int statusCode)
        {
            try
            {           
                //get Token Notify by OrderId
                var tokenNotify = await _orderRepo.getTokenNotifyByOrderId(orderId);
                var messRequest = new MessageRequestModel();
                messRequest.DeviceToken = tokenNotify;
                if(orderId > 0)
                {
                    if(statusCode == STATUS_ORDER_PENDING)
                    {
                        await _orderRepo.changeStatusOrder(orderId, STATUS_ORDER_DELIVERY);
                        messRequest.Title = "Đơn hàng đã được duyệt";
                        messRequest.Body = "Shipper hiện đang giao hàng cho bạn! Hãy đợi nhé!";
                        await _messageRepo.sendMessageAsync(messRequest);
                    }
                    else if(statusCode == STATUS_ORDER_DELIVERY)
                    {
                        await _orderRepo.changeStatusOrder(orderId, STATUS_ORDER_SUCCESS);
                        messRequest.Title = "Đơn hàng thành công";
                        messRequest.Body = "Cảm ơn quý khách! Chúc quý khách ngon miệng!";
                        await _messageRepo.sendMessageAsync(messRequest);
                    }
                    else if(statusCode == STATUS_ORDER_ERROR)
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
                    return Ok("Order Status change success");
                }
                return NotFound("Not Found Order");
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
