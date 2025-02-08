import express, { json } from "express";
import router from "./routers/router.route";

const app = express();

const port = process.env.PORT || 5050;

app.use(express.json());

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
