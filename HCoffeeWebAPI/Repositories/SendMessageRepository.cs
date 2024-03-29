using FirebaseAdmin.Messaging;
using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;

namespace HCoffeeWebAPI.Repositories
{
    public class SendMessageRepository : ISendMessageRepository
    {
        public SendMessageRepository()
        {
        }
        public async Task<string> sendMessageAsync(MessageRequestModel request)
        {
            var message = new Message()
            {
                Notification = new Notification
                {
                    Title = request.Title,
                    Body = request.Body,
                },
                Token = request.DeviceToken
            };

            var messaging = FirebaseMessaging.DefaultInstance;
            var result = await messaging.SendAsync(message);

            if (!string.IsNullOrEmpty(result))
            {
                // Message was sent successfully
                return "Message sent successfully!";
            }
            else
            {
                // There was an error sending the message
                throw new Exception("Error sending the message.");
            }
        }
    }
}
