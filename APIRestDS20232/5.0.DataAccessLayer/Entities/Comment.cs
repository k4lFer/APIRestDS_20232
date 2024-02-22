using _5._0.DataAccessLayer.Generic;

namespace _5._0.DataAccessLayer.Entities
{
    public class Comment: EntityGeneric
    {
        public string idComment {  get; set; }
        public string idUser { get; set; }
        public string body {  get; set; }

    }
}
