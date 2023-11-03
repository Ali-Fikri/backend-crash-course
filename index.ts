import express, { Request, Response } from "express";

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.get("/findSummation/:number1/:number2", (req: Request, res: Response) => {
  const num1 = Number(req.params.number1);
  const num2 = Number(req.params.number2);

  res.send(`The total is: ${num1 + num2}`);
});

app.post("/sayHello", (req: Request, res: Response) => {
  console.log(req.body);
  if (req.body.name) {
    res.send(`Hello ${req.body.name}`);
  } else {
    res.status(400).send("Name is required");
  }
});

app.get('/userData', (req: Request, res: Response) => {

  console.log(req.query)
  res.json({
    name: req.query.name,
    age: req.query.age,
    language: req.query.language,

  })
})

app.get("/sayHello", (req: Request, res: Response) => {
  console.log(req.query);
  res.send(`your age is ${req.query.age}`)
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
