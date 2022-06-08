// var http = require('http');
// var url = require('url');
// var myDate = require('./myDate');
// http.createServer(function(req,res){
//     //res.writeHead(200, {'Content-type':'text/plain'});
//     // res.write(req.url);
//     //res.end(myDate.myDateTime());
//     var q = url.parse(req.url, true).query;
//     var txt = q.year + " " + q.month;
//     res.end(txt);
// }).listen(8081);
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})