using _0._0.DataTransferLayer.Objects;

namespace _2._0.ServiceLayer.ServiceObject
{
    public class SoUser
    {
        public DtoUser dtoUser {  get; set; }
        public List<DtoUser> allUsers { get; set; }

        public DtoUser InsertUser { get; set; }

        public DtoUser DeleteUser { get; set; } 
    }
}
