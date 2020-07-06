package tourism9.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import tourism9.backend.dao.UserDao;
import tourism9.backend.model.User;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {

    private final UserDao userDao;

    @Autowired
    public UserService(@Qualifier("fakeUserDao") UserDao userDao) {
        this.userDao = userDao;
    }


    public int addUser(@RequestBody User user) {
        return userDao.insertUser(user);
    }

    public List<User> getAllUsers() {
        return userDao.selectAllUsers();
    }

    public Optional<User> getUserByID(UUID id) {
        return userDao.selectUserByID(id);
    }

    public int deleteUser(UUID id) {
        return userDao.deleteUserByID(id);
    }

    public int updateUser(UUID id, User user) {
        return userDao.updateUserByID(id, user);
    }
}
