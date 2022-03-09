import userExpress from 'express';
import userController from '../controller/userController';

const userRouter = userExpress.Router();

userRouter.post('/create', userController.createUser);
userRouter.get('/user/:Id', userController.readUser);
userRouter.get('/users', userController.readAllUsers);
userRouter.put('/user/:Id', userController.updateUser);           // aysinqn put get grenq tarberutyun chi talis?
userRouter.delete('/user/:Id', userController.deleteUser);

export = userRouter;
