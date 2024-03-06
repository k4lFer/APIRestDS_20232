using _0._0.DataTransferLayer.Objects;
using _4._0.RepositoryLayer.Generic;

namespace _4._0.RepositoryLayer.Repository
{
    public interface RepoUser : RepoGeneric<DtoUser> {
        public List<DtoUser> getAll();
        public DtoUser getByUsername(string username);
        public DtoUser getByDni(string dni);

    }
   
}
