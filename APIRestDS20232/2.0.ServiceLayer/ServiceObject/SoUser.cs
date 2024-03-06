using _0._0.DataTransferLayer.ObjectOther;
using _0._0.DataTransferLayer.Objects;
using _2._0.ServiceLayer.Generic;

namespace _2._0.ServiceLayer.ServiceObject
{
    public class SoUser : SoGeneric 
    {
        //public DtoMessageObject mo { get; set; }
        public DtoUser dtoUser {  get; set; }
        public List<DtoUser> allUsers { get; set; }

        //public bool InsertUser { get; set; }

        public int DeleteUser { get; set; } 
        public int UpdateUser { get; set; }
    }
}
