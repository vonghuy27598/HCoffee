using AutoMapper;
using HCoffeeWebAPI.Data;
using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace HCoffeeWebAPI.Repositories
{
    public class NotifyRepository : INotifyRepository
    {
        private readonly HCoffeeContext _context;
        private readonly IMapper _mapper;

        public NotifyRepository(HCoffeeContext context, IMapper mapper)
        {
            _context = context; 
            _mapper = mapper;
        }
        public async Task addNotifyByPhone(NotificationModel notifyModel, string phoneNumber)
        {
            _context.Notification.Add(_mapper.Map<Notification>(notifyModel));
            await _context.SaveChangesAsync();
        }

        public async Task deleteNotifyByPhone(int notifyId, string phoneNumber)
        {
           var checkNoti = _context.Notification.SingleOrDefault(x=>x.NotifyId == notifyId && x.PhoneNumber == phoneNumber);
           if(checkNoti != null)
            {
                _context.Notification.Remove(checkNoti);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<NotificationModel>> getAllNotifyByPhone(string phoneNumber)
        {
            var listNotify = await _context.Notification.Where(x => x.PhoneNumber == phoneNumber).ToListAsync();
            return _mapper.Map<List<NotificationModel>>(listNotify);
        }

        public async Task<int> getCountNotWatch(string phoneNumber)
        {
            var getNotify = await _context.Notification.Where(x => x.PhoneNumber == phoneNumber && !x.IsSeen).ToListAsync();
            return getNotify.Count();
        }

        public async Task<NotificationModel> getNotifyByPhone(string phoneNumber)
        {
            var notify = await _context.Notification.SingleOrDefaultAsync(x => x.PhoneNumber == phoneNumber);
            return _mapper.Map<NotificationModel>(notify);
        }

        public async Task setSeenNotify(int notifyId, string phoneNumber)
        {
            var checkNotify = _context.Notification.SingleOrDefault(x => x.NotifyId == notifyId && x.PhoneNumber == phoneNumber);
            if(checkNotify != null)
            {
                checkNotify.IsSeen = true;
                _context.Notification.Update(checkNotify);
                await _context.SaveChangesAsync();
            }
        }

        public async Task updateNotifyByPhone(NotificationModel notifyModel, string phoneNumber)
        {
            var checkNotify = _context.Notification.SingleOrDefault(x => x.NotifyId == notifyModel.NotifyId && phoneNumber == x.PhoneNumber);
            if(checkNotify != null)
            {
                _context.Notification.Update(checkNotify);
                await _context.SaveChangesAsync();
            }
        }
    }
}
