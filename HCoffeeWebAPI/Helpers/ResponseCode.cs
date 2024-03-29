namespace HCoffeeWebAPI.Helpers
{
    public class ResponseCode
    {
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
