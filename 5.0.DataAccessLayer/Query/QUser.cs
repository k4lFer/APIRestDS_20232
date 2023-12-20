using _0._0.DataTransferLayer.Objects;
using _4._0.RepositoryLayer.Repository;
using _5._0.DataAccessLayer.Connection;
using _5._0.DataAccessLayer.Entities;

namespace _5._0.DataAccessLayer.Query
{
    public class QUser : RepoUser
    {
        public int delete(string id)
        {
            throw new NotImplementedException();
        }

        public DtoUser getById(string pk)
        {
            using DataBaseContext dbc = new();
            User user = dbc.Users.Find(pk);
            DtoUser dtoUser = null;

            if(user is not null) 
            {
                dtoUser = new();
                dtoUser.idUser = user.idUser;
                dtoUser.userName = user.userName;
                dtoUser.firstName = user.firstName;
                dtoUser.surName = user.surName;
                dtoUser.dni = user.dni;
                dtoUser.birthDate = user.birthDate;
                dtoUser.gender = user.gender;
                dtoUser.registerDate = user.registerDate;
                dtoUser.modificationDate = user.modificationDate;

            }
            return dtoUser;

           // throw new NotImplementedException();
        }

        public int insert(DtoUser dto)
        {
            throw new NotImplementedException();
        }

        public int update(DtoUser dto)
        {
            throw new NotImplementedException();
        }

        public List<DtoUser> getAll(string pk)
        {
            using DataBaseContext dbc = new();
            List<User> users = dbc.Users.ToList();
            List<DtoUser> dtoUsers = new();

            foreach (User user in users)
            {
                DtoUser dtoUser = new();

                dtoUser.idUser = user.idUser;
                dtoUser.userName = user.userName;
                dtoUser.firstName = user.firstName;
                dtoUser.surName = user.surName;
                dtoUser.dni = user.dni;
                dtoUser.birthDate = user.birthDate;
                dtoUser.gender = user.gender;
                dtoUser.registerDate = user.registerDate;
                dtoUser.modificationDate = user.modificationDate;
                dtoUsers.Add(dtoUser);
            }

            return dtoUsers;

        }
    }
}
