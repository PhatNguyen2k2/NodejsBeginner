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
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

//http logger
app.use(express.static(path.join(__dirname, 'resources\\public'))) //static files
app.use(morgan("combined"))
//template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname, 'resources\\views'))

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})