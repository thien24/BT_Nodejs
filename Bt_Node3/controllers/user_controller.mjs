import User from "../models/user.mjs";

class UserController {
  static async index(req, res) {
    let q = req.query.q;
    const re = new RegExp(q); // /dfdf/
    let users;
    if (q) {
      users = await User.find({ $or: [{ name: re }, { email: re }] });
    } else {
      users = await User.find({});
    }

    res.render("user", { title: "User management", users, q });
  }

  static async new(req, res) {
    res.render("formnew", { title: "User management" });
  }

  static async create(req, res) {
    let { email, name, age } = req.body;

    let user = await User.create({ email, name, age });
    console.log(user);
    if (user) {
      res.redirect("/users");
    } else {
      res.render("formnew", { title: "User management" });
    }
  }

  static async delete(req, res) {
    let id = req.params.id;
    let { deletedCount } = await User.deleteOne({ _id: id });
    if (deletedCount == 0) {
      console.log("Khong xoa duoc !!");
    } else {
      console.log("Da xoa duoc !!");
    }
    res.redirect("/users");
  }

  // Method to display the edit form
  static async edit(req, res) {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
      res.render("edit", { title: "Edit User", user });
    } else {
      res.redirect("/users");
    }
  }

  // Method to handle the update
  static async update(req, res) {
    const userId = req.params.id;
    let { email, name, age } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      { email, name, age },
      { new: true }
    );

    if (user) {
      res.redirect("/users");
    } else {
      res.redirect(`/users/edit/${userId}`);
    }
  }
}

export default UserController;
