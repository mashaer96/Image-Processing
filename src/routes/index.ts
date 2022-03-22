import express from "express";
import images from './api/images';

//Setting routes variable
const routes = express.Router();

//Main endpoint, for image processing
routes.use('/image', images);

export default routes;
