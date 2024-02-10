using _0._0.DataTransferLayer.Objects;
using _4._0.RepositoryLayer.Repository;
using _5._0.DataAccessLayer.Connection;
using _5._0.DataAccessLayer.Entities;
using Microsoft.IdentityModel.Tokens;
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
                try
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
                catch (Exception ex) 
                {
                    return 0;
                }
            }
            return 0;
        }

        public int update(DtoUser dto)
        {
            using DataBaseContext dbc = new();

            if (dto is not null)
            {
                User userToUpdate = dbc.Users.Find(dto.idUser);

                if (userToUpdate is not null)
                {
                    // Actualizar solo los campos que se proporcionan en el DtoUser
                    if (!string.IsNullOrEmpty(dto.userName))
                    {
                        userToUpdate.userName = dto.userName;
                    }

                    if (!string.IsNullOrEmpty(dto.firstName))
                    {
                        userToUpdate.firstName = dto.firstName;
                    }

                    if (!string.IsNullOrEmpty(dto.surName))
                    {
                        userToUpdate.surName = dto.surName;
                    }

                    if (!string.IsNullOrEmpty(dto.dni))
                    {
                        userToUpdate.dni = dto.dni;
                    }

                    if (!string.IsNullOrEmpty(dto.password))
                    {
                        userToUpdate.password = dto.password;
                    }

                    if (dto.birthDate != default) //
                    {
                        userToUpdate.birthDate = dto.birthDate;//
                    }

                    if (dto.gender != default ) //
                    {
                        userToUpdate.gender = dto.gender;//
                    }

                   
                    userToUpdate.modificationDate = DateTime.Now;

                    dbc.SaveChanges();
                    return 1;
                }
            }
            return 0;


            //throw new NotImplementedException();
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
