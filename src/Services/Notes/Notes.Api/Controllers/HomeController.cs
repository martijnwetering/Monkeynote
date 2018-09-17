using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace RocketMonkey.Monkeynote.Notes.Api.Controllers
{
    [Authorize]
    [Route("api/v1")]
    public class HomeController : Controller
    {
        [Route("test")]
        public IActionResult Test()
        {
            return Json("Hello World");
        }
    }
}
