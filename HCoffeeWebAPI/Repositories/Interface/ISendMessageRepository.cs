using HCoffeeWebAPI.Models;

namespace HCoffeeWebAPI.Repositories.Interface
{
    public interface ISendMessageRepository
    {
        public Task<string> sendMessageAsync(MessageRequestModel request);
    }
}
