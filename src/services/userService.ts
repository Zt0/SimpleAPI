import {userDto} from '../dto/userDto';
import getUserDto from '../dto/getUserDto';
import UserDao from '../daos/userDao';
const usersDao = new UserDao();
class UsersService{

    async readById(id: string) {
        const singleAuthor = await usersDao.getAuthorById(id);
        if ( singleAuthor != null )
            return getUserDto( singleAuthor._id,singleAuthor.firstname, singleAuthor.lastname, singleAuthor.age)
    }

    async readAllUsers() {
        const authorList = await  usersDao.getAuthors()
        return  authorList.map(author => (getUserDto( author._id,author.firstname, author.lastname, author.age)));
    }

    async createUser(resource: userDto) {
        return usersDao.CreateAuthor(resource)
    }

    async updateById(id: string, resource: userDto) {

        return await usersDao.updateUserById(id, resource)

    }
    async deleteById(id: string) {

        return await usersDao.removeUserById(id)

    }
}

export default  UsersService;
