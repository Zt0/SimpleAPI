import authorExpress from 'express';
import authorController from '../controller/authorController';

const authorRouter = authorExpress.Router();

authorRouter.post('/create', authorController.createAuthor);
authorRouter.get('/users/:Id', authorController.readAuthor);
authorRouter.get('/users', authorController.readAllAuthors);
authorRouter.put('/users/:Id', authorController.updateAuthor);
authorRouter.delete('/users/:Id', authorController.deleteAuthor);

export = authorRouter;
