namespace _0._0.DataTransferLayer.ObjectOther
{
    public class DtoMessageObject
    {
        public List<string> listMessage {  get; set; }
        public string type { get; set; }

        public DtoMessageObject() { 
            listMessage = new List<string>();
            type = "error";
        }

        public bool exsistsMessage()
        {
            return listMessage.Count > 0;
        }
        public void addMessage(string message)
        {
            listMessage.Add(message);
        }
        public void success()
        {
            type = "success";
        }

        public void error()
        {
            type = "error";
        }

        public void warning()
        {
            type = "warning";
        }
        public void exception()
        {
            type = "exception";
        }
    }
}
