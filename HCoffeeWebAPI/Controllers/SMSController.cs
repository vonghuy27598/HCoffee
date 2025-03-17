using HCoffeeWebAPI.Helpers;
using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;
using Infobip.Api.SDK.WhatsApp.Models;
using Infobip.Api.SDK;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Infobip.Api.SDK.SMS.Models;

namespace HCoffeeWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class SMSController : ControllerBase
    {
        private readonly ISMSService _smsService;
        private readonly IMemoryCache _cache;
        private readonly IConfiguration _configuration;

        public SMSController(ISMSService smsService, IMemoryCache cache, IConfiguration configuration)
        {
            _smsService = smsService;
            _cache = cache;
            _configuration = configuration;
        }

        [HttpPost]
        public IActionResult Send(SendSMSModel model)
        {
            var result = _smsService.Send(model.MobileNumber, model.Body);

            if (!string.IsNullOrEmpty(result.ErrorMessage))
                return BadRequest(result.ErrorMessage);

            return Ok(result);
        }

        [HttpPost]
        public IActionResult CreateOTP(string DeviceId, string numberPhone)
        {
            try
            {
                if (numberPhone == null || DeviceId == null)
                    return  BadRequest("Please provide full infor");
                var randomOTP = new GenerateRandomOTP().GenerateOTP(6);
                var saveOTP = new OTPModel
                {
                    Code = randomOTP.ToString(),
                    DeviceId = DeviceId,
                    PhoneNumber = numberPhone,
                };
                var expiredTime = DateTime.Now.AddMinutes(1);
                // Send verify OTP to user phone
                var configuration = new ApiClientConfiguration(_configuration["Infobip:BaseURL"], _configuration["Infobip:APIKey"]);
                var client = new InfobipApiClient(configuration);
                var message = new SmsMessage
                {
                    From = "HCoffee",
                    Destinations = new List<SmsDestination>()
                    {
                        new SmsDestination(to: numberPhone)
                    },
                    Text = "HCoffee gửi mã xác thực OTP của bạn là: " + randomOTP
                };
                var request = new SendSmsMessageRequest
                {
                    Messages = new List<SmsMessage>() { message },
                };
                client.Sms.SendSmsMessage(request);
                var saveCache = new CacheModel
                {
                    key = "OTP",
                    data = saveOTP,
                    exprie = expiredTime
                };
                //add OTP to cache
                _cache.Set("OTP", saveCache, expiredTime);
                return Ok("Request OTP success");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
         }
        [HttpPost]
        public IActionResult SendOTP(OTPModel model)
        {
            try
            {
                if (model.PhoneNumber == null || model.DeviceId == null || model.Code == null)
                    return BadRequest("Please provide full infor");
                var getOTP = _cache.Get<CacheModel>("OTP");
                //check expried
                if (DateTime.Now <= getOTP?.exprie)
                {
                    // get OTP in cache
                    var data =  getOTP?.data as OTPModel;
                    if(data!= null)
                    {
                        //check OTP + check number phone
                        if (data.PhoneNumber == model.PhoneNumber && data.Code == model.Code)
                        {
                            var response = new ResponseCode.Success();
                            response.message = "Verify OTP Success";
                            return Ok(response);
                        }
                        return BadRequest("Incorrect information");
                    }
                }
                return BadRequest("Expried OTP");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
