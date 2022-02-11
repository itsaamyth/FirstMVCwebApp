using FirstMVCwebApp.Data;
using FirstMVCwebApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace FirstMVCwebApp.Controllers
{
    public class FormController : Controller
    {
        private readonly ApplicationDbContext _db;

        public FormController(ApplicationDbContext db)
        {
            _db = db;
        }
        //GET
        public IActionResult Index()
        {
            IEnumerable<Form> objFormList = _db.FormData;
            return View(objFormList);
        }

        //POST
        [HttpPost]
        public IActionResult FillForm(Form obj)
        {
            _db.FormData.Add(obj);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
