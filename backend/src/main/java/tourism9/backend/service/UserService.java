package tourism9.backend.service;

import tourism9.backend.dao.UserDao;
import tourism9.backend.model.User;

public class UserService {

    private final UserDao userDao;

    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }


    public int addUser(User user) {
        return userDao.insertUser(user);
    }
}
