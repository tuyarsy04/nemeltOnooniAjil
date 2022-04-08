const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const async = require('hbs/lib/async');
const res = require('express/lib/response');
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});
exports.register = (req, res) => {
    console.log(req.body);
    const {firstname, lastname, email, password} = req.body;
    db.query("SELECT firstname FROM users WHERE firstname =?", [firstname], async (error, result) => {
        if(error) {
            console.log(error);
        }
        if(result.length > 0){
            return res.render('register', {
                message: 'That email is already taken'
            });
        }
       
        db.query('INSERT INTO users SET ?', {firstname: firstname, lastname: lastname, email: email, password: password}, (error, results) => {
            if(error) {
                console.log(error);
            }else{
                console.log(results);
                return res.render('/loggedin')
            }
        });
    });
};
