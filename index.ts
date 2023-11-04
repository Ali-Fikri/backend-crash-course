import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { Article } from "./models/Article";

const app = express();
app.use(express.json());
const port = 3000;

mongoose
  .connect(
    "mongodb+srv://ali:ali123@cluster0.n53a5yo.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((_) => {
    console.log("Connected successfully");
  })
  .catch((error) => {
    console.log("connecting the error with DB", error);
  });

// app.get("/", (req: Request, res: Response) => {
//   res.send("hello world");
// });

// app.get("/findSummation/:number1/:number2", (req: Request, res: Response) => {
//   const num1 = Number(req.params.number1);
//   const num2 = Number(req.params.number2);

//   res.send(`The total is: ${num1 + num2}`);
// });

app.post("/articles", async (req: Request, res: Response) => {
  const newArticle = new Article();
  newArticle.title = req.body.articleTitle;
  newArticle.body = req.body.articleBody;
  newArticle.numberOfLikes = 0;
  await newArticle.save();

  res.json(newArticle);
  res.send("the new article has been stored");
});

app.get("/articles/:articleId", async (req: Request, res: Response) => {
  const id = req.params.articleId;

  try {
    const article = await Article.findById(id);
    res.json(article);
  } catch (error) {
    console.log("error while reading id:", id);
    return res.send("Error");
  }
});

app.delete("/articles/:articleId", async (req: Request, res: Response) => {
  const id = req.params.articleId;

  try {
    const article = await Article.findByIdAndDelete(id);
    res.json(article);
  } catch (error) {
    console.log("error while reading id:", id);
    return res.send("Error");
  }
});

// app.get('/userData', (req: Request, res: Response) => {

//   console.log(req.query)
//   res.json({
//     name: req.query.name,
//     age: req.query.age,
//     language: req.query.language,

//   })
// })

// app.get('/posts', (req: Request, res: Response) => {

//   res.render(`posts.ejs`, {
//     name: 'Ali'
//   })
// })

// app.get("/sayHello", (req: Request, res: Response) => {
//   console.log(req.query);
//   res.send(`your age is ${req.query.age}`)
// });

// app.post("/post", (req: Request, res: Response) => {
//   res.send("New Post");
// });

// app.delete("/delete", (req: Request, res: Response) => {
//   res.send("Delete something");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
