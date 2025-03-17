using AutoMapper;
using HCoffeeWebAPI.Data;
using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace HCoffeeWebAPI.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly HCoffeeContext _context;
        private readonly IMapper _mapper;

        public OrderRepository(HCoffeeContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task deleteOrder(int orderId, string numberPhone)
        {
            var checkOder = _context.Orders.Include(x => x.OrderDetail).ThenInclude(x => x.ListProductChooses).Where(x => x.OrderId == orderId && x.PhoneNumber == numberPhone).ToList();
            if (checkOder != null)
            {
                _context.Orders.RemoveRange(checkOder);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<OrderModel>> getOrderbyPhone(string numberPhone)
        {
            var order = await _context.Orders.Include(x => x.OrderDetail).ThenInclude(x => x.ListProductChooses).Where(x => x.PhoneNumber == numberPhone).ToListAsync();
            return _mapper.Map<List<OrderModel>>(order);

        }

        public async Task addOrder(OrderModel order)
        {
            order.OrderDate = DateTime.Now;
            _context.Orders.Add(_mapper.Map<Order>(order));
            await _context.SaveChangesAsync();
        }

        public async Task<string> updateOrder(int orderId, OrderModel order)
        {
            if (orderId == order.OrderId)
            {
                var checkOrder = _context.Orders.Include(x => x.OrderDetail).ThenInclude(x => x.ListProductChooses).FirstOrDefault(x => x.OrderId == orderId);
                if (checkOrder != null)
                {
                    checkOrder.OrderDate = DateTime.Now;
                    checkOrder.NoteOrder = order.NoteOrder;
                    checkOrder.Address = order.Address;
                    checkOrder.StatusCodeOrder = order.StatusCodeOrder;
                    checkOrder.DeviceId = order.DeviceId;
                    checkOrder.PhoneNumber = order.PhoneNumber;
                    checkOrder.OrderDetail[0].TotalPriceOrder = order.OrderDetail[0].TotalPriceOrder;
                    checkOrder.OrderDetail[0].TotalQuantityOrder = order.OrderDetail[0].TotalQuantityOrder;
                    checkOrder.OrderDetail[0].TotalPriceShip = order.OrderDetail[0].TotalPriceShip;
                    checkOrder.OrderDetail[0].ListProductChooses = [];
                    foreach (var item in order.OrderDetail[0].ListProductChooses)
                    {
                        checkOrder.OrderDetail[0].ListProductChooses.Add(_mapper.Map<ListProductChoose>(item));
                    }
                    _context.Orders.Update(_mapper.Map<Order>(checkOrder));
                    await _context.SaveChangesAsync();
                    return "Success";
                }
                return "Not Found";
            }
            return "Not Found";
        }

        public async Task changeStatusOrder(int orderId, int status)
        {
            var order = _context.Orders.Include(x => x.OrderDetail).ThenInclude(x => x.ListProductChooses).SingleOrDefault(x => x.OrderId == orderId);
            if (order != null)
            {
                order.StatusCodeOrder = status;
                _context.Orders.Update(order);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<string> getTokenNotifyByOrderId(int orderId)
        {
            //get order by orderId
            var order = await getOrderbyOrderId(orderId);
            //get user by phoneNumber
            var user = await _context.Users.SingleOrDefaultAsync(x => x.PhoneNumber == order.PhoneNumber);
            if (user != null)
                return user.TokenNotify;
            return String.Empty;
        }

        public async Task<OrderModel> getOrderbyOrderId(int orderId)
        {
            var order = await _context.Orders.Include(x => x.OrderDetail).ThenInclude(x => x.ListProductChooses).SingleOrDefaultAsync(x => x.OrderId == orderId);
            return _mapper.Map<OrderModel>(order);
        }
    }
}
