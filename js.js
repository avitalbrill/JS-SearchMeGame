// אתחול משתנה בשם id לערך 0
let id = 0;

// יצירת מערך ריק בשם arr
let arr = [];

// משתנה עבור דגל (flag) - לא בשימוש בקוד הנוכחי
let flag;

// פונקציה ליצירת אובייקט User
function User(name, record) {
  // אתחול מזהה ייחודי (id) עבור המשתמש, והגברת ה-id ב-1
  this.id = id++;
  // הגדרת שם המשתמש
  this.name = name;
  // הגדרת רישום המשתמש (record) - שים לב שיש שגיאת כתיב במילה 'recored', צריך להיות 'record'
  this.record = record; // תיקון השגיאה
}

// פונקציה לעדכון שם השחקן ב-localStorage
function updatePlayerName() {
  localStorage.setItem("name", document.getElementById("name").value);
}

// פונקציה להוספת רישום חדש
function record() {
  // הוספת מאזין לאירוע 'click' על כפתור עם id "s"
  document.getElementById("s").addEventListener("click", function (event) {
    // מניעת פעולה ברירת מחדל של שליחת הטופס
    event.preventDefault();

    // עדכון שם השחקן ב-localStorage
    updatePlayerName();

    // יצירת אובייקט חדש מסוג User עם הערכים שנשמרו ב-localStorage
    let plyer = new User(
      localStorage.getItem("name"),
      localStorage.getItem("record")
    );

    // הוספת האובייקט החדש למערך arr
    arr.push(plyer);
    
    // הדפסת המערך לעקוב אחרי התוצאה
    console.log(arr);
    
    // שמירת המערך ב-localStorage תחת המפתח "user"
    localStorage.setItem("user", JSON.stringify(arr));
  });
}
