namespace webApi.classes
{
    public class Tickets //מחלקת הזמנת כרטיסים
    {
        public static int countTickets = 1; //לצורך מספור אוטומטי

        public int codeTickets { get; set; } //קוד הזמנת כרטיס
        public string idVisitors { get; set; } //תעודת זהות מבקר
        public DateTime visitDate { get; set; } //תאריך ביקור
        public int numAdult { get; set; } //כמה כרטיסי מבוגר
        public int numChild { get; set; } //כמה כרטיסי ילדים
        public int priceTickets { get; set; } //מחיר כרטיסים

        //פעולה בונה ריקה
        public Tickets() { }

        //פעולה בונה שמקבלת את כל הפרמטרים
        public Tickets(string i, DateTime v, int sa, int sc, int p)
        {
            this.codeTickets = countTickets++;
            this.idVisitors = i;
            this.visitDate = v;
            this.numAdult = sa;
            this.numChild = sc;
            this.priceTickets = p;
        }
    }
}
