namespace webApi.classes
{
    public class FeedingTimes //מחלקת זמני האכלה
    {
        public static int countFeedingTimes = 1; //לצורך מספור אוטומטי

        public int codeFeedingTimes { get; set; } //קוד זמן האכלה
        public int codeAnimals { get; set; } //מפתח זר למחלקת חיות
        public string typeFood { get; set; } //מה אוכל
        public DateTime timeFeeding { get; set; } //זמן האכלה

        //פעולה בונה ריקה
        public FeedingTimes() { }

        //פעולה בונה שמקבלת את כל הפרמטרים
        public FeedingTimes(int c2, string t1, DateTime t2)
        {
            this.codeFeedingTimes = countFeedingTimes++;
            this.codeAnimals = c2;
            this.typeFood = t1;
            this.timeFeeding = t2;
        }
    }
}
