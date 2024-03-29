using FirebaseAdmin.Messaging;
using HCoffeeWebAPI.Helpers;
using HCoffeeWebAPI.Models;
using HCoffeeWebAPI.Repositories.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HCoffeeWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class NotificationController : ControllerBase
    {
        private readonly INotifyRepository _notifyRepo;

        public NotificationController(INotifyRepository notifyRepo) 
        {
            _notifyRepo = notifyRepo;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> getAllNotifyByPhone(string phoneNumber)
        {
            try
            {
                if(phoneNumber == null)
                {
                    return NotFound("PhoneNumber Not null");
                }
                var listNotify = await _notifyRepo.getAllNotifyByPhone(phoneNumber);
                if(listNotify != null && listNotify.Count > 0)
                {
                    var res = new ResponseCode.Success();
                    res.data = listNotify;
                    return Ok(res);
                }
                return BadRequest("No notify by phone");

            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> getNotifyByPhone(string phoneNumber)
        {
            try
            {
                if (phoneNumber == null)
                {
                    return NotFound("PhoneNumber Not null");
                }
                var notify = await _notifyRepo.getNotifyByPhone(phoneNumber);
                if (notify != null)
                {
                    var res = new ResponseCode.Success();
                    res.data = notify;
                    return Ok(res);
                }
                return BadRequest("No notify by phone");

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Authorize]
        public async Task <IActionResult> getCountNotWatch(string phoneNumber)
        {
            try
            {
                if (phoneNumber == null)
                {
                    return NotFound("PhoneNumber Not null");
                }
                var countNotify = await _notifyRepo.getCountNotWatch(phoneNumber);
                var res = new ResponseCode.Success();
                res.data = countNotify;
                return Ok(res);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> addNotifyByPhone(NotificationModel notifyModel, string phoneNumber)
        {
            try
            {
                if (phoneNumber == null || notifyModel.PhoneNumber == null)
                {
                    return NotFound("PhoneNumber Not null");
                }
                if(notifyModel.PhoneNumber != phoneNumber)
                {
                    return BadRequest("PhoneNumber unlike");
                }
                await _notifyRepo.addNotifyByPhone(notifyModel, phoneNumber);
                return Ok(new ResponseCode.Success());

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Authorize]
        public async Task<IActionResult> updateNotifyByPhone(NotificationModel notifyModel, string phoneNumber)
        {
            try
            {
                if (phoneNumber == null || notifyModel.PhoneNumber == null)
                {
                    return NotFound("PhoneNumber Not null");
                }
                if (notifyModel.PhoneNumber != phoneNumber)
                {
                    return BadRequest("PhoneNumber unlike");
                }
                await _notifyRepo.updateNotifyByPhone(notifyModel, phoneNumber);
                return Ok(new ResponseCode.Success());

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Authorize]
        public async Task<IActionResult> deleteNotifyByPhone(int notifyId, string phoneNumber)
        {
            try
            {
                if (phoneNumber == null)
                {
                    return NotFound("PhoneNumber Not null");
                }

                await _notifyRepo.deleteNotifyByPhone(notifyId, phoneNumber);
                return Ok(new ResponseCode.Success());

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> setSeenNotify(int notifyId, string phoneNumber)
        {
            try
            {
                if (phoneNumber == null)
                {
                    return NotFound("PhoneNumber Not null");
                }
                
                await _notifyRepo.setSeenNotify(notifyId, phoneNumber);
                return Ok(new ResponseCode.Success());

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
