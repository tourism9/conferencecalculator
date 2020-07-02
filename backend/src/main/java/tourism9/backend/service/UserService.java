package tourism9.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import tourism9.backend.dao.UserDao;
import tourism9.backend.model.User;

@Service
public class UserService {

    private final UserDao userDao;

    @Autowired
    public UserService(@Qualifier("fakeDao") UserDao userDao) {
        this.userDao = userDao;
    }


    public int addUser(User user) {
        return userDao.insertUser(user);
    }
}
