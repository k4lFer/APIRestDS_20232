
using _0._0.DataTransferLayer.ObjectOther;
using _0._0.DataTransferLayer.Objects;

namespace _3._0.BusinessLayer.Business.User
{
    public partial class BusinessUser
    {
        private void insertValidation(DtoUser dtoUser)
        {
            if(repoUser.getByDni(dtoUser.dni) is not null)
            {
                _mo.addMessage("El usuario ya existe (DNI existe)");
            }
            if (repoUser.getByUsername(dtoUser.userName) is not null)
            {
                _mo.addMessage("El usuario ya existe (Nombre de usuario existente)");
            }
        }

        private void updateValidation(DtoUser dtoUser)
        {
            /*DtoUser dtoUserTempForDni = repoUser.getByDni(dtoUser.dni);

            if (dtoUserTempForDni is not null && dtoUserTempForDni.dni != dtoUser.dni)
            {
                _mo.addMessage("El usuario ya existe (DNI existente)");
            }*/

            /*DtoUser dtoUserTempUsername = repoUser.getByUsername(dtoUser.userName);

            if (dtoUserTempUsername is not null && dtoUserTempUsername.userName != dtoUser.userName)
            {
                _mo.addMessage("El usuario ya existe (Nombre de usuario existente)");
            }*/

            // Verifica si el DNI está siendo actualizado y si el nuevo DNI ya existe
            DtoUser currentUser = repoUser.getById(dtoUser.idUser);
            if (currentUser.dni != dtoUser.dni)
            {
                DtoUser dtoUserTempForDni = repoUser.getByDni(dtoUser.dni);
                if (dtoUserTempForDni is not null)
                {
                    _mo.addMessage("El usuario ya existe (DNI existente)");
                }
            }

            // Verifica si el nombre de usuario está siendo actualizado y si el nuevo nombre de usuario ya existe
            if (currentUser.userName != dtoUser.userName)
            {
                DtoUser dtoUserTempUsername = repoUser.getByUsername(dtoUser.userName);
                if (dtoUserTempUsername is not null)
                {
                    _mo.addMessage("El usuario ya existe (Nombre de usuario existente)");
                }
            }
        }
    }
}
