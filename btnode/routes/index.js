
import express from 'express';
import indexController from '../controllers/index.js';
const indexRouter = express.Router();

indexRouter.get('/', indexController.index)
indexRouter.get('/vanthien', indexController.vanthien)

export default indexRouter;
