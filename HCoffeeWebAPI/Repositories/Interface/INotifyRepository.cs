using HCoffeeWebAPI.Models;

namespace HCoffeeWebAPI.Repositories.Interface
{
    public interface INotifyRepository
    {
        public Task<List<NotificationModel>> getAllNotifyByPhone(string phoneNumber);
        public Task<NotificationModel> getNotifyByPhone(string phoneNumber);
        public Task<int> getCountNotWatch(string phoneNumber);
        public Task addNotifyByPhone(NotificationModel notifyModel, string phoneNumber);
        public Task updateNotifyByPhone(NotificationModel notifyModel, string phoneNumber);
        public Task deleteNotifyByPhone(int notifyId, string phoneNumber);
        public Task setSeenNotify(int notifyId, string phoneNumber);
    }
}
