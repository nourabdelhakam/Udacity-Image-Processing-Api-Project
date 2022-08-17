import express from 'express';
import imageRouter from './API/img_router';
import listImagesRouter from './API/imgs_list_router';

const routes = express.Router();

routes.use('/images', imageRouter);
routes.use('/listImages', listImagesRouter);

export default routes;
