using System;

namespace Server
{
    class Program
    {   
        static void Main(string[] args)
        {
            Console.WriteLine("Iniciando en el puerto 8080\n");
            HTTPServer server = HTTPServer.GetInstance();
            server.Start();
        }
    }
}
