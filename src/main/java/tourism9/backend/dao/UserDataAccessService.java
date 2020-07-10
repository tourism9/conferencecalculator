package tourism9.backend.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import tourism9.backend.model.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("postgres")
public class UserDataAccessService implements UserDao{

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public UserDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int insertUser(UUID id, User user) {
        return 0;
    }

    @Override
    public List<User> selectAllUsers() {
        final String sql = "SELECT id, username, password FROM Users";
        return jdbcTemplate.query(sql, (resultSet, i) -> {
            UUID id = UUID.fromString(resultSet.getString("id"));
            String username = resultSet.getString("username");
            String password = resultSet.getString("password");
            return new User(id, username, password);
        });
    }

    @Override
    public Optional<User> selectUserByID(UUID id) {
        final String sql = "SELECT id, username, password FROM Users WHERE id = ?";
        User user = jdbcTemplate.queryForObject(sql, new Object[]{id},
                (resultSet, i) -> {
                    UUID userId = UUID.fromString(resultSet.getString("id"));
                    String username = resultSet.getString("username");
                    String password = resultSet.getString("password");
                return new User(userId, username, password);
        });
        return Optional.ofNullable(user);
    }

    @Override
    public int deleteUserByID(UUID id) {
        return 0;
    }

    @Override
    public int updateUserByID(UUID id, User user) {
        return 0;
    }
}
