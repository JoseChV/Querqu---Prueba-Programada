using System;

namespace Server
{
    public class Request
    {
        public String Type { get; set; }
        public String URL { get; set; }
        public String Host { get; set; }
        public String Referer { get; set; }
        
        private Request(String type, String url, String host, String referer)
        {
            Type = type;
            URL = url;
            Host = host;
            Referer = referer;
        }

        public static Request GetRequest(String request)
        {
            if (String.IsNullOrEmpty(request))
            {
                return null;
            }

            String[] tokens = request.Split(' ');
            String type = tokens[0];
            String url = tokens[1];
            String host = tokens[3];
            String referer = "";

            for (int i = 0; i < tokens.Length; i++)
            {
                if (tokens[i] == "Referer:")
                {
                    referer = tokens[i+1];
                    break;
                }
            }
            Console.WriteLine(".............Type: " + type);
            Console.WriteLine(".............Url: " + url);
            Console.WriteLine(".............Host: " + host);
            Console.WriteLine(".............Referer: " + referer);
            return new Request(type, url, host, referer);
        }
    }
}
