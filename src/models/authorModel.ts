import mongoose, { Schema } from 'mongoose';

export interface IAuthor extends mongoose.Document {
  firstname: string;
  lastname: string;
  age: number;
}

const AuthorSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: false },
    age: { type: Number, required: false }
  },
  { versionKey: false }
);

export default mongoose.model<IAuthor>('Author', AuthorSchema);
