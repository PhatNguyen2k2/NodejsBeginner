var http = require('http');
var myDate = require('./myDate');
http.createServer(function(req,res){
    //res.writeHead(200, {'Content-type':'text/plain'});
    res.end(myDate.myDateTime());
}).listen(8081);