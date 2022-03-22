import express from "express";
import cors from "cors";
import routes from "./routes/index";

//Start up an instance of app
const app = express();

/* Middleware*/
//cors for cross origin allowance
app.use(cors());

/* Setup Local Server */
// set port variable & start the Express server
const port = 3030;
app.listen(port, () => {
  console.log(`server started at localhost: ${port}`);
});

//Routes
app.use("/api", routes);

export default app;
