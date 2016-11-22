namespace Refresher.WebApi.Models
{
    public class Session
    {
        public string Name { get; set; }
        public string CreatorName { get; set; }
        public int Duration { get; set; }
        public string Level { get; set; }
        public string Abstract { get; set; }
        public int UpVoteCount { get; set; }
        public decimal Price { get; set; }
    }
}