namespace webApi.classes
{
    public class Visitors //מחלקת מבקרים
    {
        public string idVisitors { get; set; } //תעודת זהות מבקר
        public string nameVisitors { get; set; } //שם מבקר
        public string emailVisitors { get; set; } //מייל מבקר

        //פעולה בונה ריקה
        public Visitors() { }

        //פעולה בונה שמקבלת את כל הפרמטרים
        public Visitors(string i, string n, string e)
        {
            this.idVisitors = i;
            this.nameVisitors = n;
            this.emailVisitors = e;
        }
    }
}
