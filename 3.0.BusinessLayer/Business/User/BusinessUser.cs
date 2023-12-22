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
        public DtoUser insert(DtoUser dto)
        {
            return repoUser.insert(dto);
        }
        public DtoUser delete(string id)
        {
            return repoUser.delete(id);
        }
    }
}
