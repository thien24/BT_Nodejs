import express from "express";
import HomeController from "../controllers/home_controller.mjs";
import CvController from "../controllers/cv_controller.mjs";
function checkLogin(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
}

const rootRouter = express.Router();

rootRouter.get("/about", HomeController.about);
rootRouter.get("/", checkLogin, HomeController.index);
rootRouter.get("/cv/:id", CvController.detail);
rootRouter.get("/login", HomeController.login);
rootRouter.post("/login", HomeController.createLogin);

export default rootRouter;
