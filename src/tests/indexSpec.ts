import supertest from "supertest";
import app from "../index";
import { promises as fs } from "fs";

/* Define variables*/
const req = supertest(app);
const validQuery = "?height=300&width=400&name=lake";
const invalidQuery = "?height300&width=four&name=mountain";
const cashedImage = "lake-400-300.jpg";
const notCachedImage = 'lake.jpg';

//Test that server did not crash
describe("Test endpiont responses with 200 Ok", () => {
  // with valid query
  it("successfy gets the api endpoint when the query is valid (responed with image)", async (): Promise<void> => {
    const response = await req.get(`/api/image/${validQuery}`);
    expect(response.statusCode).toBe(200);
  });

  //with invalid query
  it("do not crash when the query is invalid (responed with error message)", async (): Promise<void> => {
    const response = await req.get(`/api/image/${invalidQuery}`);
    expect(response.statusCode).toBe(200);
  });
});

//Test that image is cashed without sending a request to the server
describe("Test image cashing", () => {
  //first time is not cashed
  it("./thumpnail does not contains 'lake.jpg' which is not requested before", async (): Promise<void> => {
    const data = await fs.readdir("./thumpnail");
    expect(data.includes(notCachedImage)).toBeFalse();
  });

  //second time is cashed
  it("./thumpnail contains 'lake-400-300.jpg' which is requested before", async (): Promise<void> => {
    const data = await fs.readdir("./thumpnail");
    expect(data.includes(cashedImage)).toBeTrue();
  });
});