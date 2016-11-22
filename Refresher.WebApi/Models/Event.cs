namespace Refresher.WebApi.Models
{
    public class Event : BaseEntity
    {
        public string Name { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }
        public Location Location { get; set; }
        public string ImageUrl { get; set; }
        public Session[] Sessions { get; set; }
    }
}