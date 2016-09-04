var express = require('express');
var mysql = require("mysql");
var connection = require("express-myconnection");

var app = express();

// Create Sql Connection
app.use(connection(mysql, {
    host     : 'localhost',
    user     : 'cubic',
    password : 'cubictech123',
    database : 'cms'
},'request'));


app.use(express.static(__dirname + '/'));


app.get('/', function (req, res) {
    res.redirect('/src/main/index.html');
});

//Service to get all the companies.
app.get("/service/companies",function(req,res,next){
   req.getConnection(function(err, connection) {
      if (err) return next(err);
      
      connection.query('SELECT * FROM companytbl', [], function(err, results) {
        if (err){
          console.log(err);
          return next("Mysql error, check your query");  
        }         
        res.json(results);
      });
      
    });
    
});

//Service to get the company information based upon the id passed
app.get("/service/companies/:companyid",function(req,res,next){
    var companyId = req.params.companyid;
   req.getConnection(function(err, connection) {
      if (err) return next(err);
      
      connection.query('SELECT * FROM companytbl where companyid = ?',[companyId], function(err, results) {
        if (err){
          console.log(err);
          return next("Mysql error, check your query");  
        }         
        res.json(results);
      });
      
    });
    
});

app.get('/landing',function (req, res, next){
    res.send('In landing page');
});

app.listen(8080, function (req,res) {
  console.log('server loaded on port 8080');
  //res.redirect("http://www.facebook.com");
});

