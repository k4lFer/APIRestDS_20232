using _0._0.DataTransferLayer.ObjectOther;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace _2._0.ServiceLayer.Generic
{
    public abstract class ControllerGeneric<B, So> : Controller
    {
        private DtoMessageObject dtoMessage;
        protected B _business;
        public So _so;

        public ControllerGeneric()
        {
            _business = (B)Activator.CreateInstance(typeof(B), Array.Empty<object>());
            _so = (So)Activator.CreateInstance(typeof(So), Array.Empty<object>());
        }

        protected DtoMessageObject ValidatePartDto(object model, string[] listField)
        {
            dtoMessage = new DtoMessageObject();
            List<string> errors = new List<string>();

            ModelState.Clear();

            TryValidateModel(model);

            foreach (string item in listField)
            {
                ModelState.TryGetValue(item, out ModelStateEntry modelState);

                if (modelState is not null && modelState.Errors.Count > 0)
                {
                    errors.AddRange(modelState.Errors.Select(er => er.ErrorMessage).ToList());
                }
            }

            if (errors is not null && errors.Count > 0)
            {
                dtoMessage.listMessage = errors;
                dtoMessage.error();
            }

            return dtoMessage;

        }
    }
}
