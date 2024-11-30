import Demo from "../models/demo.js";

class DemoController{
    static async index(req, res){
      try {
        var demos = await Demo.find({});
        res.status(200).json({message: "User cua demo day va load thanh cong", data: demos})
      } catch (error) {
        res.status(500).json({message: message.error})
      }
    }

    static async create(req, res){
        try {
            let {name, password, email, age} = req.body;
            let demo = await Demo.create({name, password, email, age})
            res.status(200).json({message: "Tao user demo thanh cong", demo}) 
        } catch (error) {
            res.status(500).json({message: message.error})
        }
    }
    static async delete(req, res){
        try {
            let id = req.params.id;
            let data = await Demo.deleteOne({_id: id})
            res.status(200).json({message: "Xoa user demo thanh cong", data})
        } catch (error) {
            res.status(500).json({message: "Xoa user demo khong thanh cong"});
        }
    }
    static async edit(req, res){
        try {
            var id = req.params.id
            var demo = await Demo.findById(id);
            res.status(200).json({message: "Edit user demo", demo})
        } catch (error) {
            res.status(500).json({message: message.error})
        }
    }
    static async update(req, res){
        try {
            var id = req.params.id
            var {name, password, email, age} = req.body;
            var demo = await Demo.findByIdAndUpdate(id, {name, password, email, age})
            res.status(200).json({message: "Update user thanh cong", demo})
        } catch (error) {
            res.status(500).json({message: message.error})
        }
    }
}

export default DemoController; 