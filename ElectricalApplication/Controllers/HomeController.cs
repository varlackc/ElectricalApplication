using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Diagnostics;
using System.IO;

//Electrical application
namespace ElectricalApplication.Controllers
{
    public class HomeController : Controller
    {
        // ----- Main Page -----
        public ActionResult Index()
        {
            // Read data from file
            //string path = System.AppDomain.CurrentDomain.BaseDirectory + "JSON\\json.json";
            string path = "JSON\\json.json";
            Debug.WriteLine(path);
            string text = System.IO.File.ReadAllText(path);

            // Get location
            // Console.WriteLine(System.IO.Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location));
            Debug.WriteLine("\n--------------------------");
            Debug.WriteLine(System.AppDomain.CurrentDomain.BaseDirectory);
            Debug.WriteLine(System.Environment.CurrentDirectory);
            Debug.WriteLine(System.IO.Directory.GetCurrentDirectory());
            Debug.WriteLine(Environment.CurrentDirectory);
            Debug.WriteLine("--------------------------\n");

            // display the file content
            Debug.WriteLine("\n--------------------------");
            System.Console.WriteLine("Contents of the file: {0}", text);
            Debug.WriteLine("--------------------------\n");

            // Display in the debugging section
            Debug.WriteLine("\n--------------------------");
            Debug.WriteLine("| Made it to this section");
            Debug.WriteLine("--------------------------\n");
            return View();
        }
        //----------------------
    }
}