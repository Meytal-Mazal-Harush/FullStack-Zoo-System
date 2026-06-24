namespace webApi.classes
{
    public class Animals //מחלקת חיות
    {
        public static int countAnimals = 1; //לצורך מספור אוטומטי

        public int codeAnimals { get; set; } //קוד מזהה לחיה
        public string nameAnimals { get; set; } //שם חיה
        public int ageAnimals { get; set;} //גיל חיה
        public string genderAnimals { get; set; } //זכר או נקבה
        public string description { get; set; } // תיאור חיה
        public string image { get; set; } // תמונה

        //פעולה בונה ריקה
        public Animals() { }

        //פעולה בונה שמקבלת את כל הפרמטרים
        public Animals(string n, int a, string g, string d, string i)
        {
            this.codeAnimals = countAnimals++;
            this.nameAnimals = n;
            this.ageAnimals = a;
            this.genderAnimals = g;
            this.description = d;
            this.image = i;
        }
    }
}
