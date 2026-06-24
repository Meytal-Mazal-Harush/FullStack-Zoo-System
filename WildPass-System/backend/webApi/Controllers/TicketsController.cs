using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webApi.classes;

namespace webApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketsController : ControllerBase
    {
        //מחזיר רשימת כרטיסים מהרשימה לפי תעודת זהות מבקר
        //[HttpGet("GetTicketsByIdVisitors/{idVisitors}")]
        //public ActionResult<List<Tickets>> GetTicketsByIdVisitors(string idVisitors)
        //{
        //    var ticket = DataBase.TicketsList.FindAll(x => x.idVisitors == idVisitors);
        //    if (ticket == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(ticket);
        //}

        [HttpGet("GetTicketsByIdVisitors/{idVisitors}")]
        public ActionResult<List<Tickets>> GetTicketsByIdVisitors(string idVisitors)
        {
            var tickets = DataBase.TicketsList.FindAll(x => x.idVisitors == idVisitors);
            return Ok(tickets);
        }

        //מוסיף הזמנה חדשה לרשימה
        [HttpPost("AddTickets")]
        public ActionResult<Tickets> AddTickets(Tickets tickets)
        {
            DataBase.TicketsList.Add(tickets);
            return Ok(tickets);
        }
        
        //מעדכן הזמנה מהרשימה
        [HttpPut("UpdateTickets/{codeTickets}")]
        public ActionResult<Tickets> UpdateTickets(int codeTickets, Tickets tickets)
        {
            int index = DataBase.TicketsList.FindIndex(x => x.codeTickets == tickets.codeTickets);
            DataBase.TicketsList[index] = tickets;
            return Ok(tickets);
        }

        //מוחק הזמנה לפי קוד הזמנה
        [HttpDelete("DeleteTickets/{codeTickets}")]
        public ActionResult<bool> DeleteTicketsToVisitors(int codeTickets)
        {
            DataBase.TicketsList.Remove(DataBase.TicketsList.Find(x => x.codeTickets == codeTickets));
            return Ok(true);
        }
    }
}
