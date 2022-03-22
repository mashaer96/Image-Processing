import resizeAndCashe from "../../utilities/imageProcessing";
import { promises as fs } from "fs";

const dir = "./thumpnail";
const image = "river-400-300.jpg";
const name = "river";
const width = 400;
const height = 300;

//Test the image processing
describe("Test the image processing", () => {

    it("successfy find the processed the image in './thumpnail'", async (): Promise<void> => {
      await resizeAndCashe(name, image, dir, width, height);
      const data = await fs.readdir(dir);
      expect(data.includes(image)).toBeTrue();
    });

  });