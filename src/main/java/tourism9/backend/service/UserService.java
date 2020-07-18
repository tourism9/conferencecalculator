package tourism9.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import tourism9.backend.dao.UserDao;
import tourism9.backend.model.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service("userService")
public class UserService {

    @Qualifier("realUserDao")
    @Autowired
    private final UserDao userDao;

    @Autowired
    public UserService(@Qualifier("realUserDao") UserDao userDao) {
        this.userDao = userDao;
    }

    @Autowired
    PasswordEncoder passwordEncoder;

    public int addUser(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
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
