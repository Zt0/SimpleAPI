import { CreateAuthorDto } from '../dto/createAuthorDto'
import { UpdateAuthorDto } from '../dto/updateAuthorDto'
import  authorDto  from '../dto/getAuthorDto'
import AuthorsDao from '../daos/authorDao'
const authorsDao = new AuthorsDao()
class AuthorsService {
  async readById(id: string) {
    const singleAuthor = await authorsDao.getAuthorById(id)



if(singleAuthor != null)
    return authorDto( singleAuthor._id,singleAuthor.firstname, singleAuthor.lastname, singleAuthor.age)

  }

  async readAllAuthors() {
    const authorList = await authorsDao.getAuthors()
    return authorList.map(author => (authorDto( author._id,author.firstname, author.lastname, author.age)));
  }

  async createAuthor(resource: CreateAuthorDto) {
    return authorsDao.CreateAuthor(resource)
  }

  async updateById(id: string, resource: UpdateAuthorDto) {

    return await authorsDao.updateUserById(id, resource)

  }
  async deleteById(id: string) {

    return await authorsDao.removeUserById(id)

  }
}

export default  AuthorsService;
