import express from "express";
import UserController from "../controllers/user_controller.mjs";
const userRouter = express.Router();

userRouter.get("/", UserController.index);
userRouter.get("/new", UserController.new);
userRouter.post("/create", UserController.create);
userRouter.get("/edit/:id", UserController.edit);  // Add this line
userRouter.post("/edit/:id", UserController.update);  // Add this line
userRouter.delete("/delete/:id", UserController.delete);

export default userRouter;
