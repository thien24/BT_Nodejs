import User from "../models/user.mjs";

class flutterController{
    static async flutter(req, res){
        try {
            let user = await User.find({});
            res.status(200).json({message: "flutter thanh cong", data: user})
        } catch (error) {
            res.status(500).json({message: "Loi roi"})
        }
    }
    static async show(req, res) {
        let id = req.params.id;
        let user = await User.findById(id);
        res.status(200)
    .json({message: "Lay thanh cong", data: user})
    }
    static async create(req, res) {
        try {
            let {name, email, workExperience, age} = req.body;
            let user = await User.create({name, email, workExperience, age})
            res.status(200).json({message: "Tao thanh cong", user})
        } catch (error) {
            res.status(500).json({message: "Tao user flutter bi loit", error})
        }
    }

    static async delete(req, res){
        let id = req.params.id;
        let data = await User.deleteOne({_id: id})
        res.status(200).json({message: "Xoa thanh cong", data})
    }
    static async edit(req, res){
        try {
            let id = req.params.id;
            let user = await User.findById(id);
            res.status(200).json({message: "Edit user", data: user})
        } catch (error) {
          res.status(500).json({message: " Edit user failed"})
        }
    }

    static async update(req, res){
        try {
            let id = req.params.id;
            let {name, email, workExperience, age} = req.body;
            let user = await User.findByIdAndUpdate(id, {name, email, workExperience, age},
                {new: true, runValidators: true}
            )
            res.status(200).json({message: "Update thanh cong", data: user})
        } catch (error) {
            res.status(500).json({message: "Update user failed"})
        }
    }
}

export default flutterController;