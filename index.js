var http = require('http');
var url = require('url');
var myDate = require('./myDate');
http.createServer(function(req,res){
    //res.writeHead(200, {'Content-type':'text/plain'});
    // res.write(req.url);
    //res.end(myDate.myDateTime());
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8081);