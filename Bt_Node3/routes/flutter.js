import express from 'express';
import flutterController from '../controllers/flutter.mjs';

const flutteruserRouter = express.Router();

flutteruserRouter.get("/flutter", flutterController.flutter)
flutteruserRouter.get("/flutter/:id", flutterController.show);
flutteruserRouter.post("/flutter", flutterController.create)
flutteruserRouter.delete("/flutter/:id", flutterController.delete)
flutteruserRouter.get("/flutter/:id/edit", flutterController.edit)
flutteruserRouter.put("/flutter/:id", flutterController.update)

export default flutteruserRouter;