using _0._0.DataTransferLayer.Objects;
using _4._0.RepositoryLayer.Repository;

namespace _3._0.BusinessLayer.Business.User
{
    public partial class BusinessUser
    {
        public DtoUser getById(string pk)
        {
            return repoUser.getById(pk);
        }

        public List<DtoUser> getAll()
        {
            return repoUser.getAll();
        }
        public int insert(DtoUser dto)
        {
            return repoUser.insert(dto);
        }
        public int delete(string id)
        {
            return repoUser.delete(id);
        }
        public int update(DtoUser dto)
        {
            return repoUser.update(dto);
        }
    }
}
