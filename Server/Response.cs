using System;
using System.IO;
using System.Net.Sockets;


namespace Server
{
    public class Response
    {
        private Byte[] data = null;
        private String status;
        private String mime;

        private Response(String status, String mime, Byte[] data)
        {
            this.status = status;
            this.data = data;
            this.mime = mime;
        }

        public static Response From(Request request)
        {
            if(request == null)
            {
                return MakeNullRequest();
            }

            if(request.Type == "GET")
            {
                String file = Environment.CurrentDirectory + HTTPServer.WEB_DIR + request.URL;
                FileInfo fInfo = new FileInfo(file);

                if (fInfo.Exists && fInfo.Extension.Contains("."))
                {
                    return MakeFromFile(fInfo);
                }
                else
                {
                    DirectoryInfo dInfo = new DirectoryInfo(fInfo + "/");
                    if (!dInfo.Exists)
                    {
                        return MakePageNotFound();
                    }

                    FileInfo[] files = dInfo.GetFiles();
                    
                    foreach(FileInfo ff in files)
                    {
                        String fileName = ff.Name;  
                    
                        if(fileName.Contains("default.html") || fileName.Contains("default.htm") || fileName.Contains("index.htm") || fileName.Contains("index.html"))
                        {
                            return MakeFromFile(ff); 
                        }
                    }
                }
            }
            else if(request.Type == "POST")
            {
                return MakeNullRequest();
            }
            else
            {
                return MakePageNotFound();
            }
            return MakePageNotFound();
        }

        private static Response MakeFromFile(FileInfo fInfo)
        {
         
            FileStream fs = fInfo.OpenRead();
            BinaryReader reader = new BinaryReader(fs);
            Byte[] d = new byte[fs.Length];

            reader.Read(d, 0, d.Length);
            fs.Close(); 

            return new Response("200 OK", "html/text", d);
        }

        private static Response MakeNullRequest()
        {
            String file = Environment.CurrentDirectory + HTTPServer.MSG_DIR + "400.html";
            FileInfo fileInf = new FileInfo(file);
            FileStream fs = fileInf.OpenRead();
            BinaryReader reader = new BinaryReader(fs);
            Byte[] d = new byte[fs.Length];

            reader.Read(d, 0, d.Length);
            fs.Close();

            return new Response("400 Bad Request", "html/text", d);
        }

        private static Response MakePageNotFound()
        {
            String file = Environment.CurrentDirectory + HTTPServer.MSG_DIR + "404.html";
            FileInfo fileInf = new FileInfo(file);
            FileStream fs = fileInf.OpenRead();
            BinaryReader reader = new BinaryReader(fs);
            Byte[] d = new byte[fs.Length];

            reader.Read(d, 0, d.Length);
            fs.Close();

            return new Response("404 Not Found", "html/text", d);
        }

        public void Post(NetworkStream stream)
        {
            StreamWriter writer = new StreamWriter(stream);
            writer.WriteLine(String.Format("{0} {1}\r\nServer: {2}\r\nAccept-Ranges: bytes\r\nContent-Length: {4}\r\n", 
               HTTPServer.VERSION, status, HTTPServer.NAME, mime, data.Length));

            stream.Write(data, 0, data.Length);
        }
    }
}
