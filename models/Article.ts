import { Schema, model, Document } from "mongoose";

interface ArticleInterface extends Document {
  title: string;
  body: string;
  numberOfLikes: number;
}

const articleSchema = new Schema<ArticleInterface>({
  title: String,
  body: String,
  numberOfLikes: Number,
});

export const Article = model<ArticleInterface>("Article", articleSchema);