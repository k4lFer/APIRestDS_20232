using _0._0.DataTransferLayer.Objects;
using _2._0.ServiceLayer.ServiceObject;
using _3._0.BusinessLayer.Business.User;
using _5._0.DataAccessLayer.Entities;
using _5._0.DataAccessLayer.Query;
using Microsoft.AspNetCore.Mvc;

namespace _2._0.ServiceLayer.Controllers
{
    [Route("[controller]")]
    public class UserController : Controller
    {

        BusinessUser _businessUser = null;
        SoUser _soUser = null;

        public UserController()
        {
            _soUser = new();
            _businessUser = new();

        }


        [HttpGet]
        [Route("[action]")]
         
            public ActionResult<SoUser> GetById(string idUser)
            {

                _soUser.dtoUser = _businessUser.getById(idUser);

                return _soUser;
            }


        [HttpGet]
        [Route("[action]")]
        public ActionResult<SoUser> GetAll()
        {   

            _soUser.allUsers = _businessUser.getAll();

            return _soUser;
        }

        [HttpPost]
        [Route("[action]")]
        public ActionResult<SoUser> InsertUser(DtoUser insertUser)
        {
            _soUser.InsertUser = _businessUser.insert(insertUser);

            return _soUser;
        }

        [HttpPost]
        [Route("[action]")]
        public ActionResult<SoUser> DeleteUser(string id)
        {
            _soUser.DeleteUser = _businessUser.delete(id);

            return _soUser;
        }
    }
}
