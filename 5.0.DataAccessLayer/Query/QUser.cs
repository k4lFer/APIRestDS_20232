using _0._0.DataTransferLayer.Objects;
using _4._0.RepositoryLayer.Repository;
using _5._0.DataAccessLayer.Connection;
using _5._0.DataAccessLayer.Entities;
using System.Reflection.Metadata;

namespace _5._0.DataAccessLayer.Query
{
    public class QUser : RepoUser
    {
        public int delete(string id)
        {
            using DataBaseContext dbc = new();
            User user = dbc.Users.Find(id);

            if (user is not null)
            {
                dbc.Users.Remove(user);
                dbc.SaveChanges();

                return 1;
            }

            return 0;
          
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
            using DataBaseContext dbc = new();

            if (dto is not null)
            {
                User user = new()
                {
                    idUser = Guid.NewGuid().ToString(),

                    userName = dto.userName,
                    firstName = dto.firstName,
                    surName = dto.surName,
                    dni = dto.dni,
                    password = dto.password,
                    birthDate = dto.birthDate,
                    gender = dto.gender,

                    registerDate = DateTime.Now,
                    modificationDate = DateTime.Now
                };

                dbc.Users.Add(user);
                dbc.SaveChanges();

                return 1;
            }
            return 0;


        }

        public int update(DtoUser dto)
        {
            throw new NotImplementedException();
        }

        public List<DtoUser> getAll()
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
