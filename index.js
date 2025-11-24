// Import required modules
const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const { faker } = require('@faker-js/faker');
const methodOverride = require('method-override');
const app = express();
// Middleware to support HTTP verbs such as PUT and DELETE
// in places where the client doesn't support it.
app.use(methodOverride('_method'));

const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/*--------------------------------
      CONNECTION TO DATABASE
---------------------------------*/

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jatin15092001',
    database: 'schooldb'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

/*--------------------------------
      GENERATE FAKE DATA
---------------------------------*/

/* GENERATE FAKE DATA + INSERT */




/*--------------------------------
        EXPRESS ROUTES
---------------------------------*/
app.get('/', (req, res) => {
    connection.query('SELECT * FROM student', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Database error');
        }
        res.render('Home', { students: results });
    });
});

app.get('/:id/edit', (req, res) => {
    let {id} = req.params;
    connection.query('SELECT * FROM student WHERE Sid = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Database error');
        }
        if (results.length === 0) {
            return res.status(404).send('Student not found');
        }
        res.render('Edit', { student: results[0] });
    });
});

app.patch('/:id/edit', (req, res) => {
    let {id} = req.params;
    let { Sname, address, mobile } = req.body;
    connection.query(
        'UPDATE student SET Sname = ?, address = ?, mobile = ? WHERE Sid = ?',
        [Sname, address, mobile, id],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Database error');
            }
            res.redirect('/');
        }
    );
});

app.delete('/:id/delete', (req, res) => {
    let {id} = req.params;
    connection.query('DELETE FROM student WHERE Sid = ?', [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Database error');
        }
        res.redirect('/');
    });
});

app.post("/create-fake-students", (req, res) => {
    const values = [];

    for (let i = 0; i < 5; i++) {
        values.push([
            faker.string.uuid(),                       // Sid
            faker.person.fullName(),
            faker.location.streetAddress(),
            faker.phone.number('##########')
        ]);
    }

    const sql = "INSERT INTO student (Sid, Sname, address, mobile) VALUES ?";

    connection.query(sql, [values], (err, result) => {
        if (err) {
            console.error('Insert Error 👉', err);
            return res.send("❌ Error creating students");
        }
        console.log('✅ Data inserted:', result.affectedRows);
        console.log(values);
        res.redirect('/');
    });
});

app.delete("/students/delete-all", (req, res) => {
    connection.query("DELETE FROM student", (err, result) => {
        if (err) {
            console.error("Delete All Error 👉", err);
            return res.status(500).send("Database error");
        }
        console.log("🧨 All students deleted:", result.affectedRows);
        res.redirect('/');
    });
});

/*--------------------------------
        START THE SERVER
---------------------------------*/
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});

