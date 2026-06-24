using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webApi.classes;

namespace webApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedingTimesController : ControllerBase
    {
        //מחזיר רשימה של זמני האכלה לפי קוד חיה
        [HttpGet("GetFeedingTimeByCodeAnimals/{codeAnimals}")]
        public ActionResult<List<FeedingTimes>> GetFeedingTimeByCodeAnimals(int codeAnimals)
        {
            var feedingTimes = DataBase.FeedingTimesList.FindAll(x => x.codeAnimals == codeAnimals);
            if (feedingTimes == null)
                return NotFound();

            return Ok(feedingTimes);
           
        }
    }
}
