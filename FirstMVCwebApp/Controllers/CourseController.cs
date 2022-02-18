using FirstMVCwebApp.Data;
using FirstMVCwebApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace FirstMVCwebApp.Controllers
{
    public class CourseController : Controller
    {
        private readonly ApplicationDbContext _db;

        public CourseController(ApplicationDbContext db)
        {
            _db = db;
        }

        public IActionResult Index()
        {
            IEnumerable<Course> objCoursesList = _db.Course;
            return View(objCoursesList);
        }


        //Creating a Category
        //GET
        public IActionResult AddCourse()
        {
            return View();
        }

        //POST
        [HttpPost]
        public IActionResult AddCourse(Course obj)
        {
                _db.Course.Add(obj);
                _db.SaveChanges();
                TempData["success"] = "Course Addesd Successfully";
                return RedirectToAction("Index");
        }

        public JsonResult GetAllCourses()
        {
            var obj = _db.Course.ToList();
/*            if (obj == null)
            {
                return NotFound();
            }*/

            return Json(obj);
        }


    }
}
