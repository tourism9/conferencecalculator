package tourism9.backend.dao;

import tourism9.backend.model.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserDao {
    int insertUser(UUID id, User user);

    default int insertUser(User user) { // POST Method
        UUID id = UUID.randomUUID();
        return insertUser(id, user);
    }

    List<User> selectAllUsers(); // GET Method

    Optional<User> selectUserByID(UUID id);

    int deleteUserByID(UUID id); // DELETE Method

    int updateUserByID(UUID id, User user);
}
