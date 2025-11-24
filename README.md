# 🎓 Student Records Management System
A backend-oriented student management system demonstrating the integration of Node.js and MySQL for efficient data handling and CRUD operations. 
This project focuses on illustrating backend architecture and database interaction rather than delivering a complete production-level web application.

---

## 🚀 Features

- ✅ Create student records  
- ✅ View all students in a structured table  
- ✅ Edit existing student details  
- ✅ Delete individual records  
- ✅ Delete all students at once  
- ✅ Generate fake student data for testing  
- ✅ Real-time database interaction  
- ✅ Clean UI with responsive layout  

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MySQL  
- **Frontend:** HTML, CSS, EJS  
- **Utilities:** Faker.js, UUID, Method-Override  
- **Version Control:** Git & GitHub  

---

## 📁 Project Structure

```
NodeWithSQL/
│
├── views/
│   ├── Home.ejs
│   └── Edit.ejs
│
├── DB.sql
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YOUR-USERNAME/student-records-management-system.git
cd student-records-management-system
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Setup Database
Open MySQL and run:
```sql
CREATE DATABASE schooldb;
USE schooldb;
-- then execute DB.sql file
```

### 4️⃣ Configure Database in `index.js`
```js
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'YOUR_PASSWORD',
    database: 'schooldb'
});
```

### 5️⃣ Start the server
```bash
nodemon index.js
```
or
```bash
node index.js
```

Open browser:
```
http://localhost:3000
```

---

## 🧪 Fake Data Generation

You can generate 10 fake students instantly using the button:
**Create Fake Students**  
Powered by Faker + UUID for realistic testing data.

---

## 🎯 Learning Outcomes

- Express routing & middleware
- MySQL integration with Node.js
- CRUD architecture
- Dynamic rendering using EJS
- RESTful design principles
- Git workflow

---

## 👨‍💻 Author

**Jatin**  
Student | Full Stack Developer in Progress  
Built with ❤️ for learning and growth.

---

## 📜 License

This project is open-source and free to use for learning and educational purposes.
