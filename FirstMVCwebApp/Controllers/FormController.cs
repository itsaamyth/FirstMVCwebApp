using FirstMVCwebApp.Data;
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
        public IActionResult Index()
        {
            return View();
        }
    }
}
