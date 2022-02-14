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
        [HttpGet]
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

        //PUT
        [HttpPost]
        public IActionResult EditForm(Form obj)
        {
            _db.FormData.Update(obj);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }

        //Delete
        [HttpPost]
        public IActionResult DeleteForm(Form obj)
        {
            _db.FormData.Remove(obj);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }

/*        [HttpGet("{id}")]*/
        public JsonResult GetAllData(int Id)
        {
            var obj = _db.FormData.Find(Id);
/*            if (obj == null)
           {
                return NotFound();
            }*/
       
            return Json(obj);
        }


    }
}
