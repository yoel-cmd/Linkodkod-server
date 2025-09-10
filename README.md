
README — Server (Express + JSON DB + bcrypt)

 תקציר

שרת  ב-Node.js (ESM) עם Express, אחסון נתונים ב-JSON,  וקבצים סטטיים לתמונות. אין JWT/סשנים — אימות הכי פשוט: שליחת username/password ב-body (לצורכי לימוד).

🔧 טכנולוגיות

Node.js (ES Modules)

Express

dotenv


uuid-לסיסמא ארוכה

JSON כ-DB (DB/posts.json, DB/users.json)
 


מה בפרוייקט

.env:

PORT=3000 !!

הרצה

npm install
npm i bcrypt
node --watch app.js


 סכמות נתונים

Post

{
  "id": "string",
  "src": "http://localhost:3000/image/photo1.avif",
  "desc": "string",
  "fullName": "string",
  "time": "HH:MM:SS",
  "emoji": 0,
  "allStory": "string (optional)"
}

User

{
  "id": "string",
  "username": "string",
  "fullName": "string",
  "passwordHash": "bcrypt:$2b$12$..."
}


GET /post — כל הפוסטים

GET /post/:id — פוסט לפי מזהה

POST /create-post — יצירת פוסט

{ "src":"...", "desc":"...", "fullName":"...", "allStory":"..." }


Posts (מאומת — דרך body)

POST /post/auth-list — מחזיר פוסטים רק אם הקרדנציאלז תקינים
Body:

{ "username": "yoel", "password": "1234" }

200:




 דוגמאות cURL



דוגמה: http://localhost:3000/image/הרים.avif










---
