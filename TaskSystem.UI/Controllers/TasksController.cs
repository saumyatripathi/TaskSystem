using System.Collections.Generic;
using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace TaskSystem.UI.Controllers
{
    [Route("api/[controller]")]
    public class TasksController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<Test> Get()
        {
            return new List<Test> { new Test() { Id = 1, Name = "Test 1" }, new Test() { Id = 2, Name = "Test 2" }, new Test() { Id = 3, Name = "Test 3" } };
        }
    }

    public class Test
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
