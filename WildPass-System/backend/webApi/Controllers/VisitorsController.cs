using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webApi.classes;

namespace webApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VisitorsController : ControllerBase
    {
        //מחזיר מבקר לפי תעודת זהות ומייל 
        [HttpGet("GetVisitorsByIdAndMail/{idVisitors}/{emailVisitors}")]
        public ActionResult<Visitors> GetVisitorsByIdAndMail(string idVisitors, string emailVisitors)
        {
            var visitor = DataBase.VisitorsList.FirstOrDefault(x => x.idVisitors == idVisitors && x.emailVisitors == emailVisitors);

            if (visitor == null)
                return NotFound();

            return Ok(visitor);
        }
        //מחזיר מבקר לפי תעודת זהות  
        [HttpGet("GetVisitorsById/{idVisitors}")]
        public ActionResult<Visitors> GetVisitorsById(string idVisitors)
        {
            var visitor = DataBase.VisitorsList.FirstOrDefault(x => x.idVisitors == idVisitors );

            if (visitor == null)
                return NotFound();

            return Ok(visitor);
        }
        //מוסיף מבקר חדש לרשימה
        [HttpPost("AddVisitors")]
        public ActionResult<bool> AddVisitors(Visitors visitors)
        {
            DataBase.VisitorsList.Add(visitors);
            return Ok(true);
        }
    }
}
