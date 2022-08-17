import express from 'express';
import imageRouter from './API/img_router';

const routes = express.Router();

routes.use('/images', imageRouter);

export default routes;
