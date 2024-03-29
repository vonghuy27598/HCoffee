using Twilio.Rest.Api.V2010.Account;

namespace HCoffeeWebAPI.Repositories.Interface
{
    public interface ISMSService
    {
        MessageResource Send(string mobileNumber, string body);
    }
}
