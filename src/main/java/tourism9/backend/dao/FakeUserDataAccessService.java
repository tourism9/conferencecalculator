package tourism9.backend.dao;

import org.springframework.stereotype.Repository;
import tourism9.backend.model.User;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("fakeUserDao")
public class FakeUserDataAccessService implements UserDao {
    private static List<User> DB = new ArrayList<>();

    @Override
    public int insertUser(UUID id, User user) {
        DB.add(new User(id, user.getUsername(), user.getPassword()));
        return 1;
    }

    @Override
    public List<User> selectAllUsers() {
        return DB;
    }

    @Override
    public Optional<User> selectUserByID(UUID id) {
        // searches DB for ID using a stream
        return DB.stream().
                filter(user -> user.getId().equals(id))
                .findFirst();
    }

    @Override
    public int deleteUserByID(UUID id) {
        Optional<User> user = selectUserByID(id);
        if (!user.isPresent()) {
            return 0;
        }

        DB.remove(user.get());
        return 1;
    }

    @Override
    public int updateUserByID(UUID id, User update) {
        return selectUserByID(id)
                .map(user -> {
                    int index = DB.indexOf(user);
                    if (index >= 0) {
                        DB.set(index,
                                new User(id, update.getUsername(), update.getPassword()));
                        return 1;
                    }
                    return 0;
                })
                .orElse(0);
    }
}
