using FirstMVCwebApp.Data;
using FirstMVCwebApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace FirstMVCwebApp.Controllers
{
    public class StreamController : Controller
    {
        private readonly ApplicationDbContext _db;

        public StreamController(ApplicationDbContext db)
        {
            _db = db;
        }

        public IActionResult Index()
        {
            IEnumerable<Models.Stream> objCoursesList = _db.Stream;
            return View(objCoursesList);
        }


        //Creating a Category
        //GET
        public IActionResult AddStream()
        {
            return View();
        }

        //POST
        [HttpPost]
        public IActionResult AddStream(Models.Stream obj)
        {
                _db.Stream.Add(obj);
                _db.SaveChanges();
            TempData["success"] = "Stream Added Successfully";
            return RedirectToAction("Index");
        }

        public JsonResult GetAllStream()
        {
            var obj = _db.Stream.ToList();
/*            if (obj == null)
            {
                return NotFound();
            }*/

            return Json(obj);
        }

        [HttpGet("StreamData/{StreamId}")]
        public async Task<IActionResult> StreamData(int StreamId)
        {
            var obj = _db.Stream.Find(StreamId);
            return Json(obj);
        }

        [HttpPost]
        public IActionResult EditStream(Models.Stream obj)
        {
            _db.Stream.Update(obj);
            _db.SaveChanges();
            TempData["success"] = "Stream Updated Successfully";
            return RedirectToAction("Index");
        }

        //Delete
        [HttpPost]
        public IActionResult DeleteStream(Models.Stream obj)
        {
            _db.Stream.Remove(obj);
            _db.SaveChanges();
            TempData["success"] = "Stream Deleted Successfully";
            return RedirectToAction("Index");
        }
    }
}
