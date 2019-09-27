var express = require('express');
var router = express.Router();
var pool = require('./db.js');
var multer = require('multer');

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/static_root/');
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    }),
});


router.get('/user', function(req, res, next) {
    res.render('adminUser');
});

router.get('/userList', function(req, res, next) {
    pool.getConnection(function(err,connection){
        connection.query('SELECT * from users', function (err, rows) {
        if (!err)
            res.send(rows);
        else
            console.log('Error while performing Query.', err);
        connection.release();
        });
    });
});

router.post('/check', function(req, res, next) {
    pool.getConnection(function(err,connection){
            eval(req.body).forEach(elem => {
            connection.query(`UPDATE users SET admin = ${elem.admin} WHERE user_id = '${elem.id}'`, function (err, rows) {
                connection.release();
            });
        });
        res.send("success");
    });
});

router.post('/addItem', upload.single('image'), (req, res) => {
    pool.getConnection(function(err,connection){
        connection.query(`INSERT INTO main_list (image,keyword,title,description,tail,link,category) 
        VALUES ('/static_root/${req.file.originalname}','${req.body.keyword}','${req.body.title}','${req.body.description}',
        '${req.body.tail}','${req.body.link}','${req.body.category}')`, function (err, rows) {
        if(err)
            console.log(err);
        connection.release();
        });
    });
    res.redirect('/admin');
});

router.post('/removeItem', function(req, res, next) {
    pool.getConnection(function(err,connection){
        connection.query(`DELETE FROM main_list WHERE seq = ${parseInt(req.body.seq)}`, function (err, rows) {
            connection.release();
        });
        res.send("success");
    });
});

module.exports = router;