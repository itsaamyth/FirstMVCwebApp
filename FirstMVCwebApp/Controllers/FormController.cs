using FirstMVCwebApp.Data;
using FirstMVCwebApp.Models;
using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace FirstMVCwebApp.Controllers
{
    public class FormController : Controller
    {
        private readonly ApplicationDbContext _db;
        private readonly IWebHostEnvironment _webHostEnvironment;


        public FormController(ApplicationDbContext db,IWebHostEnvironment webHostEnvironment)
        {
            _db = db;
            _webHostEnvironment = webHostEnvironment;

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
        public async Task<IActionResult> FillFormAsync(Form obj)
        {
            if(obj.ProfileImageLocal != null)
            {
                string folder = "Profile/Pictures/";
                folder += Guid.NewGuid().ToString()+obj.ProfileImageLocal.FileName;
                string serverFolder = Path.Combine(_webHostEnvironment.WebRootPath,folder);
                obj.ProfileImagePath = folder;
                await obj.ProfileImageLocal.CopyToAsync(new FileStream(serverFolder,FileMode.Create)); ;
            }
            _db.FormData.Add(obj);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }

        //PUT
        [HttpPost]
        public async Task<IActionResult> EditFormAsync(Form obj)
        {
            if (obj.ProfileImageLocal != null)
            {

                string folder = "Profile/Pictures/";
                folder += Guid.NewGuid().ToString() + obj.ProfileImageLocal.FileName;
                string serverFolder = Path.Combine(_webHostEnvironment.WebRootPath, folder);
                obj.ProfileImagePath = folder;
                await obj.ProfileImageLocal.CopyToAsync(new FileStream(serverFolder, FileMode.Create)); ;
            }
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
        /*        public JsonResult GetAllData(int Id)
                {
                    var obj = _db.FormData.Find(Id);
                    return Json(obj);
                }*/

        public JsonResult GetAllData(int Id)
        {
            var studentJoinResult = from studentDb in _db.FormData // outer sequence
                                  join courseDb in _db.Course //inner sequence 
                                  on studentDb.CourseId equals courseDb.CourseId // key selector 
                                  join streamDb in _db.Stream //inner sequence 
                                  on studentDb.StreamId equals streamDb.StreamId // key selector 
                                  where studentDb.Id == Id        
                                  select new
                                  { // result selector 
                                      ProfileImg = studentDb.ProfileImagePath,
                                      FirstName = studentDb.FirstName,
                                      LastName = studentDb.LastName,
                                      Gender = studentDb.Gender,    
                                      DOB = studentDb.DOB,  
                                      Email = studentDb.Email,
                                      Phone = studentDb.Phone,
                                      PerAddress = studentDb.PermanentAddress,
                                      CurrAddress = studentDb.CurrentAddress,
                                      Course = courseDb.CourseName,
                                      Stream = streamDb.StreamName,
                                      Twelfth = studentDb.TwelfthMarks,
                                      Tenth = studentDb.TenthMarks,
                                      Bio = studentDb.StudentBio
                                  };
            return Json(studentJoinResult);
        }


    }
}
