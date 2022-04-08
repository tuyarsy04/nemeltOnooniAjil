const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});
router.get('/register', (req, res) => {
    res.render('register');
});
router.get('/login', (req,res) => {
    res.render('login');
});
router.get('/search', (req,res) => {
    res.render('search');
});
router.get('/loggedin', (req, res) => {
    res.render('loggedin')
})

module.exports = router;