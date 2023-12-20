using _0._0.DataTransferLayer.Objects;
using _2._0.ServiceLayer.ServiceObject;
using _3._0.BusinessLayer.Business.User;
using _5._0.DataAccessLayer.Query;
using Microsoft.AspNetCore.Mvc;

namespace _2._0.ServiceLayer.Controllers
{
    [Route("[controller]")]
    public class UserController : Controller
    {
        [HttpGet]
        [Route("[action]")]
        public ActionResult<List<DtoUser>> GetAll(string idUser)
        {
            /*BusinessUser businessUser = new();
            SoUser soUser = new();

            soUser.dtoUser = businessUser.getById(idUser);
            return soUser;*/

            /* BusinessUser businessUser = new();
             SoUser soUser = new();

             QUser qUser = new();
             List<DtoUser> allUsers = qUser.getAll();

             soUser.dtoUser = businessUser.getById(idUser);

             return soUser;*/
            /*SoUser soUser = new();*/

            QUser qUser = new();
            List<DtoUser> allUsers = qUser.getAll();
            return allUsers;
        }
    }
}
