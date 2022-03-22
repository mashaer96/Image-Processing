import express from "express";
import { promises as fs } from "fs";
import path from "path";
import resizeAndCashe from "../../utilities/imageProcessing";

const images = express.Router();

//Main endpoint, GET rout to validate, process & view image in browser
images.get('/', (req: express.Request, res: express.Response): void => {
    try {
        //define the query variables
        const height = parseInt(req.query.height as string);
        const width = parseInt(req.query.width as string);
        const name = (req.query.name as unknown) as string;
        //defining absolute paths
        const __dirname = path.dirname('./thumpnail');
        const thumpnailDir = path.join(__dirname, './thumpnail');
        const imagelDir = path.join(__dirname, './images');
    
        //Validate: image name is valid
        const validImage = async (dir: string, image: string): Promise<void> => {
          try {
            //list the names of the images in './images' folder
            const data = await fs.readdir(dir);
            //validation for valid name
            if (!data.includes(image)) {
              res.send("Invalid image name. Please, provide a valid one.");
            }
          } catch (error) {
            console.error;
          }
        };
        validImage(imagelDir, `${name}.jpg`);
    
        //Validate: state that not numeric values for both width and height, null values , or undefined values for all ia not accepted.
        if (!height || !width || !name) {
          res.send(
            "Please, follow to the pattern: /?height=300&width=400&name=lake"
          );
        }
    
        //If image is csched in thumpnail then sent it. Otherwise resize it, cashe it, and send it
        const thumpnail = async (dir: string, image: string): Promise<void> => {
          try {
            //list the names of the images in './thumpnail' folder
            const data = await fs.readdir(dir);
            if (data.includes(image)) {
              //send the image to browser if it contains in './thumpnail' folder
              res.sendFile(image, { root: dir.replace(/[^a-zA-Z ]/g, "") });
            } else {
              //resize the image and save it to './thumpnail' folder
              await resizeAndCashe(name, image, dir, width, height);
              res.sendFile(image, { root: dir.replace(/[^a-zA-Z ]/g, "") }); //send the image to browser
            }
          } catch (error) {
            console.error;
          }
        };
        thumpnail( thumpnailDir, `${name}-${width}-${height}.jpg`);

      } catch (error) {
        console.error;
      }
});

export default images;