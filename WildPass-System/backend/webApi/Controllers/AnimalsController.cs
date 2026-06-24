using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webApi.classes;

namespace webApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnimalsController : ControllerBase
    {
        //מחזיר את רשימת החיות
        [HttpGet("GetAllAnimals")]
        public ActionResult<List<Animals>> GetAllAnimals()
        {
            
            return Ok(DataBase.AnimalsList);
        }
    
    }
}
