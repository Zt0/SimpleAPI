import { CreateAuthorDto } from '../dto/createAuthorDto';
import { UpdateAuthorDto } from '../dto/updateAuthorDto';
import authorsModel from '../models/authorModel';
import mongoose from 'mongoose';

class AuthorsDao {

  authorsModel = authorsModel;                                    //////////////////////?? aranc sra?
  async getAuthors() {
    return await authorsModel.find();
  }
  async getAuthorById(userId: string) {
    const getOnePost = await authorsModel.findById(userId);
    return getOnePost;
  }

  async CreateAuthor(AuthorFields: CreateAuthorDto) {
    const author = new this.authorsModel({
      _id: new mongoose.Types.ObjectId(),
      ...AuthorFields
    });

    await author.save();
    return author;
  }

  async updateUserById(Id: string, AuthorFields: UpdateAuthorDto) {
    const author = await authorsModel.findById(Id)
    if(author == null){}
    else{
      author.firstname = AuthorFields.firstname;
      author.lastname = AuthorFields.lastname;
      author.age = AuthorFields.age;

      await author.save()
      console.log(author)
      return author}
  }

  async removeUserById(Id: string) {
    return this.authorsModel.deleteOne({ _id: Id });                 // _id
  }
}

export default  AuthorsDao
