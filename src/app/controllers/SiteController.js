
class SiteController{
    //[GET] /
    home(req, res){
        res.render('home')
    }
    //[GET] /search
    search(req, res){
        console.log(req.query.q)
        res.render('search')
    }
}

module.exports = new SiteController