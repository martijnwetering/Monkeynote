using Microsoft.AspNetCore.Mvc;
using Monkeynote.Core;

namespace RocketMonkey.Monkeynote.Web.Controllers
{
    public class TestController : Controller
    {
        private readonly Note _note;

        public TestController(Note note)
        {
            _note = note;
        }

        [Route("/api/test")]
        public IActionResult Test()
        {
            int i = 10;
            return Ok();
        }
    }
}