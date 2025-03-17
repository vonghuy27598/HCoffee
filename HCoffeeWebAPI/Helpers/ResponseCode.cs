namespace HCoffeeWebAPI.Helpers
{
    public class ResponseCode
    {
        public Success _success;
        public Warning _warning;
        public Error _error;
        public NotFound _notFound;

        public ResponseCode()
        {
            _success = new Success();
            _warning = new Warning();
            _error = new Error();
            _notFound = new NotFound();
        }

        public class DefaultResponse
        {
            public string status { get; set; }
            public int resCode { get; set; }
            public string message { get; set; }
            public object data { get; set; }
        }

        public class Success
        {
            public string status { get; set; } = "Success";
            public int resCode { get; set; } = 1;
            public string message { get; set; }
            public object data { get; set; }
        }

        public class Warning
        {
            public string status { get; set; } = "Warning";
            public int resCode { get; set; } = 0;
            public string message { get; set; }
        }

        public class Error
        {
            public string status { get; set; } = "Error";
            public int resCode { get; set; } = -1;
            public string message { get; set; }
        }
        public class NotFound
        {
            public string status { get; set; } = "Not Foud";
            public int resCode { get; set; } = -1;
            public string message { get; set; }
        }
    }
}
