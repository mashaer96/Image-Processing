import sharp from "sharp";

const resizeAndCashe = async (image: string, file: string, folder: string, width: number, height: number): Promise<void> => {
    const data = await sharp(`./images/${image}.jpg`) //resize the image
                .resize(width, height)
                .toFile(`${folder}/${file}`); //save the image to './thumpnail' folder
}

export default resizeAndCashe;