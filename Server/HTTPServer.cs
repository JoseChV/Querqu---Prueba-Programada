using System;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Threading;

namespace Server
{
    public class HTTPServer
    {
        public const String MSG_DIR = "\\root\\msg\\";
        public const String WEB_DIR = "\\root\\web\\";
        public const String VERSION = "HTTP\\1.1";
        public const String NAME = "ServidorP";

        private bool running = false;
        private TcpListener listener;
        private static HTTPServer instance = new HTTPServer(8080);
        
        private HTTPServer(int port)
        {
            listener = new TcpListener(IPAddress.Any, port);
        }

        public static HTTPServer GetInstance()
        {
            return instance;
        }

        public void Start()
        {
            Thread serverThread = new Thread(new ThreadStart(Run));
            serverThread.Start();
        }

        private void Run()
        {
            running = true;
            listener.Start();

            while (running)
            {
                Console.WriteLine("Esperando conección...");
                TcpClient client = listener.AcceptTcpClient();

                HandleClient(client);

                client.Close();
            }

            running = false;
            listener.Stop();
            
        }

        private void HandleClient(TcpClient client)
        {
            StreamReader reader = new StreamReader(client.GetStream());
            String message = "";

            while(reader.Peek() != -1)
            {
                message += reader.ReadLine() + "\n";
            }
                
            Console.WriteLine("Request: \n" + message);

            Request req = Request.GetRequest(message);
            Response resp = Response.From(req);

            resp.Post(client.GetStream());
        }
    }
}
