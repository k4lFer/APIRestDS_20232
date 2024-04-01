using _0._0.DataTransferLayer.ObjectOther;
using _0._0.DataTransferLayer.Objects;
using _2._0.ServiceLayer.Generic;
using _2._0.ServiceLayer.ServiceObject;
using _3._0.BusinessLayer.Business.User;
using _5._0.DataAccessLayer.Entities;
using _5._0.DataAccessLayer.Query;
using Microsoft.AspNetCore.Mvc;

namespace _2._0.ServiceLayer.Controllers
{
    [Route("[controller]")]
    public class UserController : ControllerGeneric<BusinessUser, SoUser>
    {

        [HttpGet]
        [Route("[action]")]
        public ActionResult<SoUser> GetById(string idUser)
        {
            (_so.mo, _so.dtoUser) = _business.getById(idUser);
            return _so;
        }


        [HttpGet]
        [Route("[action]")]
        public ActionResult<SoUser> GetAll()
        {   

            (_so.mo, _so.allUsers) = _business.getAll();
            return _so;
        }

        [HttpPost]
        [Route("[action]")]
        public ActionResult<SoUser> InsertUser(SoUser so)
        {
            try
            {
                _so.mo = ValidatePartDto(so.dtoUser, new string[]
                {
                "userName",
                "password",
                "firstName",
                "surName",
                "dni",
                "birthDate",
                "gender",
              
                });
                if (_so.mo.exsistsMessage())
                {
                    return _so;
                }
                _so.mo = _business.insert(so.dtoUser);
            }
            catch(Exception ex)
            {
                _so.mo.listMessage.Add(ex.Message);
                _so.mo.exception();
            }
            return _so;
        }

        [HttpDelete]
        [Route("[action]")]
        public ActionResult<SoUser> DeleteUser(string idUser)
        {
            _so.mo = _business.delete(idUser);

            return _so;
        }

        [HttpPut]
        [Route("[action]")]
        public ActionResult<SoUser> UpdateUser(SoUser so)
        {
            try
            {
                _so.mo = ValidatePartDto(so.dtoUser, new string[] {
                    "idUser",
                    "username",
                    "firstName",
                    "surName",
                    "dni",
                    "birthDate",
                    "gender"
                });

                if (_so.mo.exsistsMessage())
                {
                    return _so;
                }

                _so.mo = _business.update(so.dtoUser);
            }
            catch (Exception ex)
            {
                _so.mo.listMessage.Add(ex.Message);
                _so.mo.exception();
            }

            return _so;
        }
    }
}
