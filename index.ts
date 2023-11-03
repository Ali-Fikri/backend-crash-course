import express, { Request, Response } from "express";
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.get("/findSummation/:number1/:number2", (req: Request, res: Response) => {
  const num1 = Number(req.params.number1);
  const num2 = Number(req.params.number2);

  res.send(`The total is: ${num1 + num2}`);
});

app.post("/post", (req: Request, res: Response) => {
  res.send("New Post");
});

app.delete("/delete", (req: Request, res: Response) => {
  res.send("Delete something");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
