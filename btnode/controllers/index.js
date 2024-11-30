

class indexController{
    static async index(req, res){
        res.render('index', {title: 'cuthien'})
    }
    static async vanthien(req, res){
        res.render('profile', {title: 'vanthien profile'})
    }
}

export default indexController