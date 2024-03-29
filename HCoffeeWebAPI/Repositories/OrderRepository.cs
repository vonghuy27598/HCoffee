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
            var checkOder =  _context.Orders.SingleOrDefault(x=>x.OrderId == orderId && x.PhoneNumber == numberPhone);
            if(checkOder != null) 
            {
                _context.Orders.Remove(checkOder);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<OrderModel>> getOrderbyPhone(string numberPhone)
        {
            var order = await _context.Orders.Where(x => x.PhoneNumber == numberPhone).ToListAsync();
            return _mapper.Map<List<OrderModel>>(order);

        }

        public async Task addOrder(OrderModel order)
        {
            _context.Orders.Add(_mapper.Map<Order>(order));
            await _context.SaveChangesAsync();
        }

        public async Task updateOrder(int orderId, OrderModel order)
        {
            if(orderId == order.OrderId)
            {
                _context.Orders.Update(_mapper.Map<Order>(order));
                await _context.SaveChangesAsync();
            }
           
        }

        public async Task changeStatusOrder(int orderId, int status)
        {
            var order = _context.Orders.SingleOrDefault(x => x.OrderId == orderId);
            if(order != null)
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
            var user =  await _context.Users.SingleOrDefaultAsync(x => x.PhoneNumber == order.PhoneNumber);
            if(user != null)
                return user.TokenNotify;
            return String.Empty;
        }

        public async Task<OrderModel> getOrderbyOrderId(int orderId)
        {
            var order = await _context.Orders.SingleOrDefaultAsync(x => x.OrderId == orderId);
            return _mapper.Map<OrderModel>(order);
        }
    }
}
