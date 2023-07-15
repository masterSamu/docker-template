import express, { Router } from "express";

const app = express();

const route = Router();
app.use(route);

route.get("/api", (_req, res) => {
  return res.json({ message: "Hello world" });
});

const port = process.env.PORT || 80;

app.listen(port, function () {
  console.log("Api listening on http://localhost:" + port + "/api");
});

export default app;
