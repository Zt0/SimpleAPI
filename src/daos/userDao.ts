import { userDto } from '../dto/userDto';
import usersModel from '../models/userModel';
import mongoose from 'mongoose';

class UsersDao {

    usersModel = usersModel;                                    //////////////////////?? aranc sra?
    async getAuthors() {
        const getAllPost = await usersModel.find();
        return getAllPost;
    }
    async getAuthorById(userId: string) {
        const getOnePost = await usersModel.findById(userId);
        return getOnePost;
    }

    async CreateAuthor(AuthorFields: userDto) {
        const author = new this.usersModel({
            _id: new mongoose.Types.ObjectId(),
            ...AuthorFields
        });

        await author.save();
        return author;
    }

    async updateUserById(Id: string, AuthorFields: userDto) {
        const author = await usersModel.findById(Id)
        if(author == null){}
        else{
            author.firstname = AuthorFields.firstname                        ///voch chi tarbervum?  const deletedPost = await Authors.deleteOne({ _id: req.params.Id })
            author.lastname = AuthorFields.lastname
            author.age = AuthorFields.age

            await author.save()                                                 ////////////////////////////// ts-ignore-ov linuma
            console.log(author)
            return author}
    }

    async removeUserById(Id: string) {
        return this.usersModel.deleteOne({ _id: Id });                  // internetum .exec()-ov
    }
}

export default  UsersDao
