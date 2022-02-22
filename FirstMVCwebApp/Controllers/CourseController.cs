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

        [HttpGet]
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
            TempData["success"] = "Course Added Successfully";
            return RedirectToAction("Index");
        }

        public JsonResult GetAllCourses()
        {
            var obj = _db.Course.ToList();
            return Json(obj);
        }

        [HttpGet("CourseData/{CourseId}")]
        public async Task<IActionResult> CourseData(int CourseId)
        {
            var obj = _db.Course.Find(CourseId);
            return Json(obj);
        }

        [HttpPost]
        public IActionResult EditCourse(Course obj)
        {
            _db.Course.Update(obj);
            _db.SaveChanges();
            TempData["success"] = "Course Updated Successfully";
            return RedirectToAction("Index");
        }

        //Delete
        [HttpPost]
        public IActionResult DeleteCourse(Course obj)
        {
            _db.Course.Remove(obj);
            _db.SaveChanges();
            TempData["success"] = "Course Deleted Successfully";
            return RedirectToAction("Index");
        }

    }
}
