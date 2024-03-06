using _0._0.DataTransferLayer.ObjectOther;
using _0._0.DataTransferLayer.Objects;
using _3._0.BusinessLayer.Generic;
using _4._0.RepositoryLayer.Repository;
using System.Transactions;

namespace _3._0.BusinessLayer.Business.User
{
    public partial class BusinessUser : BusinessGeneric
    {
        public (DtoMessageObject, DtoUser) getById(string pk)
        {
            _mo.success();

            return (_mo, repoUser.getById(pk));
        }

        public (DtoMessageObject, List<DtoUser>) getAll()
        {
            _mo.success();

            return (_mo, repoUser.getAll());
        }
        public DtoMessageObject insert(DtoUser dtoUser)
        {

            using TransactionScope transactionScope = new();

            insertValidation(dtoUser);
            if (_mo.exsistsMessage())
            {
                return _mo;
            }


            dtoUser.idUser = Guid.NewGuid().ToString();
            dtoUser.registerDate = DateTime.Now;
            dtoUser.modificationDate = DateTime.Now;
            
            repoUser.insert(dtoUser);

            transactionScope.Complete();
            //transactionScope.Dispose();

        
            _mo.addMessage("Operación realizada correctamente.");
            _mo.success();

            return _mo;
        }
        public DtoMessageObject delete(string idUser)
        {
            repoUser.delete(idUser);

            _mo.addMessage("Operación realizada correctamente.");
            _mo.success();

            return _mo;
        }
        public DtoMessageObject update(DtoUser dtoUser)
        {
            using TransactionScope transactionScope = new();

            updateValidation(dtoUser);

            if (_mo.exsistsMessage())
            {
                return _mo;
            }

            dtoUser.modificationDate = DateTime.Now;

            repoUser.update(dtoUser);

            transactionScope.Complete();

            _mo.addMessage("Operación realizada correctamente.");
            _mo.success();

            return _mo;
        }
    }
}
