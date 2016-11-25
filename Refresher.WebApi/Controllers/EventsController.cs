using Refresher.WebApi.Models;
using Refresher.WebApi.Repository;
using System.Collections.Generic;
using System.Web.Http;

namespace Refresher.WebApi.Controllers
{
    [RoutePrefix("events")]
    public class EventsController : ApiController
    {
        JsonSerialization<Event> _serializer = new JsonSerialization<Event>();

        private string path = @"C:\Apps\App Current\AngularJS\AngularJS_Refresher\Refresher.WebApi\data\event";

        [Route("{id:int}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            if (id < 1)
            {
                return NotFound();
            }

            Event getevent = null;

            try
            {
                getevent = _serializer.ParseSingleEntityFile(BuildFileName(id));
            }
            catch (System.Exception)
            {

                return NotFound();
            }
            return Ok(getevent);
        }

        [Route("{id:int}")]
        [HttpPut]
        public IHttpActionResult Put(int id, [FromBody] Event saveevent)
        {
            if (id < 1)
            {
                return NotFound();
            }

            if (saveevent.Id != id)
            {
                return BadRequest("No such file");
            }

            try
            {
                _serializer.WriteSingleEntityFile(BuildFileName(id), saveevent);
            }
            catch (System.Exception ex)
            {

                return BadRequest(ex.Message);
            }
            return Ok();
        }


        [Route("")]
        [HttpGet]
        public IHttpActionResult Get()
        {
            List<Event> events = new List<Event>(); ;

            try
            {
                events.Add(_serializer.ParseSingleEntityFile(BuildFileName(1)));
                events.Add(_serializer.ParseSingleEntityFile(BuildFileName(2)));
                events.Add(_serializer.ParseSingleEntityFile(BuildFileName(3)));
                events.Add(_serializer.ParseSingleEntityFile(BuildFileName(4)));
            }
            catch (System.Exception ex)
            {

                return BadRequest(ex.Message);
            }
            return Ok(events);
        }

        private string BuildFileName(int id)
        {
            return path + @"\" + id + ".json";
        }

    }
}
