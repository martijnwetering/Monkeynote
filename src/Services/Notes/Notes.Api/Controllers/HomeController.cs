using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace RocketMonkey.Monkeynote.Notes.Api.Controllers
{
    [Route("api/v1")]
    public class HomeController : Controller
    {
        [Route("test")]
        public IActionResult Test()
        {
            return Ok("Hello World");
        }
    }
}
