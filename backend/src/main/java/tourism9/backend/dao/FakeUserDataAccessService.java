package tourism9.backend.dao;

import org.springframework.stereotype.Repository;
import tourism9.backend.model.User;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository("fakeDao")
public class FakeUserDataAccessService implements UserDao {
    private static List<User> DB = new ArrayList<>();

    @Override
    public int insertUser(UUID id, User user) {
        DB.add(new User(id, user.getUsername(), user.getPassword()));
        return 1;
    }
}
