using _0._0.DataTransferLayer.Generic;

namespace _0._0.DataTransferLayer.Objects
{
    public class DtoComment: DtoGeneric
    {
        public string idComment { get; set; }
        public string idUser { get; set; }
        public string body { get; set; }

    }
}
