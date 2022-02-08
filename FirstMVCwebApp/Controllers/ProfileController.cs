using FirstMVCwebApp.Data;
using FirstMVCwebApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace FirstMVCwebApp.Controllers
{
    public class ProfileController : Controller
    {
        private readonly ApplicationDbContext _db;

        public ProfileController(ApplicationDbContext db)
        {
            _db = db;
        }

        public IActionResult Index()
        {
            IEnumerable<Profile> objProfileList = _db.Profiles;
            return View(objProfileList);
        }

        //GET
        public IActionResult CreateProfile()
        {
            return View();
        }

        //POST
        [HttpPost]
        public IActionResult CreateProfile(Profile obj)
        {
            _db.Profiles.Add(obj);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }

        //Updating a Profile
        //GET
        public IActionResult EditProfile(int? id)
        {
            if (id == null || id == 0)
            {
                return NotFound();
            }
            //Three ways to retrieve data from db
            var profileFromDb = _db.Profiles.Find(id);
            //var categoryFromDbFirst = _db.Categories.FirstOrDefault(u=>u.Id==id);
            //var categoryFromDbSingle = _db.Categories.SingleOrDefault(u=>u.Id==id);

            if (profileFromDb == null)
            {
                return NotFound();
            }
            return View(profileFromDb);
        }

        //POST
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult EditProfile(Profile obj)
        {
                _db.Profiles.Update(obj);
                _db.SaveChanges();

                return RedirectToAction("Index");
        }

        //Delete a Profile
        //GET
        public IActionResult DeleteProfile(int? id)
        {
            if (id == null || id == 0)
            {
                return NotFound();
            }
            //Three ways to retrieve data from db
            var profileFromDb = _db.Profiles.Find(id);
            //var categoryFromDbFirst = _db.Categories.FirstOrDefault(u=>u.Id==id);
            //var categoryFromDbSingle = _db.Categories.SingleOrDefault(u=>u.Id==id);

            if (profileFromDb == null)
            {
                return NotFound();
            }
            return View(profileFromDb);
        }

        //POST
        [HttpPost, ActionName("DeleteProfile")]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteProfilePost(int? id)
        {
            var obj = _db.Profiles.Find(id);
            if (obj == null)
            {
                return NotFound();
            }
            _db.Profiles.Remove(obj);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }

    }
}
