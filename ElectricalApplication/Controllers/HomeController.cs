using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Diagnostics;

//Electrical application
namespace ElectricalApplication.Controllers
{
    public class HomeController : Controller
    {
        // ----- Main Page -----
        public ActionResult Index()
        {
            // Display in the debugging section
            Debug.WriteLine("\n--------------------------");
            Debug.WriteLine("| Made it to this section");
            Debug.WriteLine("--------------------------\n");
            return View();
        }
        //----------------------
    }
}