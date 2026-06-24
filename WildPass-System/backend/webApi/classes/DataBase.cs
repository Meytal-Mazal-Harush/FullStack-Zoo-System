namespace webApi.classes
{
    public class DataBase //מחלקת מסדי הנתונים
    {
        public static List<Animals> AnimalsList = new List<Animals>(); //רשימת חיות
        public static List<FeedingTimes> FeedingTimesList = new List<FeedingTimes>(); //רשימת זמני האכלה
        public static List<Visitors> VisitorsList = new List<Visitors>(); //רשימת מבקרים
        public static List<Tickets> TicketsList = new List<Tickets>(); //רשימת הזמנת כרטיסים

        static DataBase()
        {
            // חיות
            AnimalsList.Add(new Animals("אריה", 5, "זכר", "מלך החיות, טורף גדול החי בלהקות", "אריה.jpg"));
            AnimalsList.Add(new Animals("פיל", 10, "נקבה", "יונק גדול בעל חדק וזיכרון מצוין", "פיל.jpg"));
            AnimalsList.Add(new Animals("קוף", 3, "זכר", "חיה חכמה ואנרגטית המטפסת על עצים", "קוף.jpg"));
            AnimalsList.Add(new Animals("ג'ירפה", 7, "נקבה", "בעלת צוואר ארוך הניזונה מעלים גבוהים", "ג'ירפה.PNG"));
            AnimalsList.Add(new Animals("זברה", 4, "נקבה", "יונק אפריקאי בעל פסים שחורים ולבנים", "זברה.jpg"));
            AnimalsList.Add(new Animals("נמר", 6, "זכר", "טורף מהיר וחזק ממשפחת החתוליים", "נמר.jpg"));
            AnimalsList.Add(new Animals("דוב", 8, "זכר", "יונק גדול הניזון ממגוון מקורות מזון", "דוב.jpg"));
            AnimalsList.Add(new Animals("פינגווין", 2, "נקבה", "עוף ימי שאינו עף ומצטיין בשחייה", "פינגווין.jpg"));
            AnimalsList.Add(new Animals("קנגורו", 5, "זכר", "יונק כיס אוסטרלי המתקדם בקפיצות", "קנגורו.jpg"));
            AnimalsList.Add(new Animals("תנין", 12, "זכר", "זוחל טורף החי במים וביבשה", "תנין.jpg"));
            AnimalsList.Add(new Animals("קרנף", 9, "נקבה", "יונק גדול בעל קרן בולטת על אפו", "קרנף.jpg"));
            AnimalsList.Add(new Animals("זאב", 4, "זכר", "טורף חברתי החי ופועל בלהקות", "זאב.jpg"));
            

            // זמני האכלה
            FeedingTimesList.Add(new FeedingTimes(1, "בשר", DateTime.Today.AddHours(10)));
            FeedingTimesList.Add(new FeedingTimes(1, "בשר", DateTime.Today.AddHours(16)));
            FeedingTimesList.Add(new FeedingTimes(2, "עשב", DateTime.Today.AddHours(9)));
            FeedingTimesList.Add(new FeedingTimes(3, "פירות", DateTime.Today.AddHours(12)));
            FeedingTimesList.Add(new FeedingTimes(4, "עלים", DateTime.Today.AddHours(14)));

            // מבקרים
            VisitorsList.Add(new Visitors("123456789", "דוד כהן", "david@gmail.com"));
            VisitorsList.Add(new Visitors("987654321", "שרה לוי", "sara@gmail.com"));
            VisitorsList.Add(new Visitors("456789123", "יוסי ישראלי", "yossi@gmail.com"));

            // כרטיסים
            TicketsList.Add(new Tickets("123456789", DateTime.Today, 2, 1, 150));
            TicketsList.Add(new Tickets("987654321", DateTime.Today.AddDays(1), 1, 2, 120));
            TicketsList.Add(new Tickets("456789123", DateTime.Today.AddDays(2), 2, 2, 200));
        }
    }
    
}
