import { Request, Response } from 'express';
import AuthorsService from '../services/authorService';
const authorsService = new AuthorsService()

const readAuthor = async (req: Request, res: Response ) => {
  const getPost = await authorsService.readById(req.params.Id);
  res.send(getPost);
};

const readAllAuthors = async (req: Request, res: Response ) => {
  const getAllPost = await authorsService.readAllAuthors()
  res.send(getAllPost)
};

const createAuthor = async (
  req: Request,
  res: Response,
) => {
  const user = await authorsService.createAuthor(req.body);
  res.send(user)
};

const updateAuthor = async (
  req: Request,
  res: Response,
) => {
  const user = await authorsService.updateById(req.params.Id, req.body)
  res.send(user)
  console.log(user)
};

const deleteAuthor = async (
  req: Request,
  res: Response,
) => {
  const deletedPost = await authorsService.deleteById(req.params.Id )

  res.send(deletedPost)
};

export default {
  createAuthor,
  readAuthor,
  readAllAuthors,
  updateAuthor,
  deleteAuthor
};
