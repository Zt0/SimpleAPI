import { Request, Response } from 'express';
import AuthorsService from '../services/userService';
const authorsService = new AuthorsService()

const readUser = async (req: Request, res: Response ) => {
    const getPost = await authorsService.readById(req.params.Id);
    console.log(4);
    res.send(getPost);
};

const readAllUsers = async ( req: Request, res: Response ) => {
    const getAllPost = await authorsService.readAllUsers()
    res.send(getAllPost)
};

const createUser = async (
    req: Request,
    res: Response,
) => {
    const user = await authorsService.createUser(req.body);
    res.send(user)
};

const updateUser = async (
    req: Request,
    res: Response,
) => {
    const user = await authorsService.updateById(req.params.Id, req.body)
    res.send(user)
    console.log(user)
};

const deleteUser = async (
    req: Request,
    res: Response,
) => {
    const deletedPost = await authorsService.deleteById(req.params.Id )

    res.send(deletedPost)
};

export default {
    createUser,
    readUser,
    readAllUsers,
    updateUser,
    deleteUser
};



// const app = userExpress.Router();



//
// app.get("/users", (req: Request, res: Response) => {
//     console.log(33)
//     return res.status(200).send({
//         success: "true",
//         message: "users",
//         users: userList,
//     });
// });
//
// app.get("/", (req: Request, res: Response) => {
//     console.log(22)
//     return res.status(200).send({
//         success: "true",
//         message: "users",
//         users: userList,
//     });
// });
//
// //  POST call - Means you are adding new user into database
//
// app.post("/create", (req: Request, res: Response) => {
//     console.log(3242)
//     if (!req.body.firstname) {
//         return res.status(400).send({
//             success: "false",
//             message: "firstname is required",
//         });
//     } else if (!req.body.lastname) {
//         return res.status(400).send({
//             success: "false",
//             message: "lastname is required",
//         });
//     }
//     const user = new userList({
//         id: userList.length + 1,
//         firstname: req.body.firstname,
//         lastname:  req.body.lastname,
//     });
//     user.save();
//
//     return res.status(201).send({
//         success: "true",
//         message: "user added successfully",
//         user,
//     });
// });
//
// //  PUT call - Means you are updating new user into database
//
// app.put("/user/:userId", (req: Request, res: Response) => {
//     const id = parseInt(req.params.userId, 10);
//     const userFound = userList.findById(id)
//     if (!userFound) {
//         return res.status(404).send({
//             success: 'false',
//             message: 'user not found',
//         });
//     }
//
//     const updatedUser = {
//         id: id,
//         firstname: req.body.firstname, //|| userFound.body.firstname,
//         lastname: req.body.lastname, //|| userFound.body.lastname,
//     };
//
//     if (!updatedUser.firstname) {
//         return res.status(400).send({
//             success: "false",
//             message: "firstname is required",
//         });
//     } else if (!updatedUser.lastname) {
//         return res.status(400).send({
//             success: "false",
//             message: "lastname is required",
//         });
//     }
//     if( userFound != null ) {
//        // userFound.firstname = req.body.firstname                        ///voch chi tarbervum?  const deletedPost = await Authors.deleteOne({ _id: req.params.Id })
//         //userFound.lastname = req.body.lastname
//        // userFound.age = req.body.age
//     }
//    // userFound.save()
//
//         return res.status(201).send({
//         success: 'true',
//         message: 'user updated successfully',
//         updatedUser
//     });
//
//     return  res.status(404).send({
//         success: 'true',
//         message: 'error in update'
//
//     });
// })
//
//
// //  Delete call - Means you are deleting new user from database
//
// app.delete("/user/:userId", (req: Request, res: Response) => {
//     // console.log(req.params)
//     // const id = parseInt(req.params.userId, 10);
//     // console.log(id)
//     // for(let i = 0; i < userList.length; i++){
//     //     if(userList[i].id === id){
//     //         userList.splice(i,1);
//     //         return res.status(201).send({
//     //             success: 'true',
//     //             message: 'user deleted successfully'
//     //         });
//     //     }
//     // }
//     // return res.status(404).send({
//     //     success: 'true',
//     //     message: 'error in delete'
//     // });
//
//     const user = userList.deleteOne({ id: req.params.userId });
//     //user.save()
//
// })
