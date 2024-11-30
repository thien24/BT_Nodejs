import express from 'express';
import DemoController from '../controllers/demo.js';

const demoRouter = express.Router()

demoRouter.get("/index", DemoController.index);
demoRouter.post("/index", DemoController.create)
demoRouter.delete("/index/:id", DemoController.delete)
demoRouter.get("/index/:id/edit", DemoController.edit)
demoRouter.put("/index/:id", DemoController.update)

export default demoRouter;