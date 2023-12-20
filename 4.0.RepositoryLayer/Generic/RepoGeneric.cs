
using _0._0.DataTransferLayer.Objects;

namespace _4._0.RepositoryLayer.Generic
{
    public interface RepoGeneric<Dto> 
    {
        public int insert(Dto dto);
        public int update(Dto dto);
        public int delete(string id);

        public Dto getById(string pk);
        //public List<DtoUser> getAll(string );


    }
}
