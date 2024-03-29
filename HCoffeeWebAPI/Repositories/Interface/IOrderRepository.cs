using HCoffeeWebAPI.Models;

namespace HCoffeeWebAPI.Repositories.Interface
{
    public interface IOrderRepository
    {
        public Task<List<OrderModel>> getOrderbyPhone(string numberPhone);
        public Task<OrderModel> getOrderbyOrderId(int orderId);
        public Task addOrder(OrderModel order);
        public Task deleteOrder(int orderId, string numberPhone);
        public Task updateOrder (int  orderId, OrderModel order);
        public Task changeStatusOrder(int orderId, int status);
        public Task<string> getTokenNotifyByOrderId(int orderId);

    }
}
