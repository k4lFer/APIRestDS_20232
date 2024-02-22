using _0._0.DataTransferLayer.Objects;

namespace _2._0.ServiceLayer.ServiceObject
{
    public class SoUser
    {
        public DtoUser dtoUser {  get; set; }
        public List<DtoUser> allUsers { get; set; }

        public int InsertUser { get; set; }

        public int DeleteUser { get; set; } 
        public int UpdateUser { get; set; }
    }
}
