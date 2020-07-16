package tourism9.backend.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import tourism9.backend.model.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("realUserDao")
public class UserDataAccessService implements UserDao {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public UserDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int insertUser(UUID id, User user) {
        String sql = "INSERT INTO Users (id, firstName, lastName, username, password, editingRights) VALUES (?, ?, ?, ?, ?, ?);";
        jdbcTemplate.update(sql, id, user.getFirstName(), user.getLastName(), user.getUsername(),
                        user.getPassword(), user.getEditingRights());
        return 0;
    }

    @Override
    public List<User> selectAllUsers() {
        String sql = "SELECT * FROM Users;";
        return jdbcTemplate.query(sql, (resultSet, i) -> {
            UUID id = UUID.fromString(resultSet.getString("id"));
            String firstName = resultSet.getString("firstName");
            String lastName = resultSet.getString("lastName");
            String username = resultSet.getString("username");
            String password = resultSet.getString("password");
            boolean editingRights = resultSet.getBoolean("editingRights");
            return new User(id, firstName, lastName, username, password, editingRights);
        });
    }

    @Override
    public Optional<User> selectUserByID(UUID id) {
        String sql = "SELECT * FROM Users WHERE id = ?;";
        User user = jdbcTemplate.queryForObject(sql, new Object[]{id},
                (resultSet, i) -> {
                    UUID userId = UUID.fromString(resultSet.getString("id"));
                    String firstName = resultSet.getString("firstName");
                    String lastName = resultSet.getString("lastName");
                    String username = resultSet.getString("username");
                    String password = resultSet.getString("password");
                    boolean editingRights = resultSet.getBoolean("editingRights");
                return new User(userId, firstName, lastName, username, password, editingRights);
        });
        return Optional.ofNullable(user);
    }

    @Override
    public int deleteUserByID(UUID id) {
        String sql = "DELETE FROM Users WHERE id = ?;";
        jdbcTemplate.update(sql, id);
        return 0;
    }

    @Override
    public int updateUserByID(UUID id, User user) {
        String sql = "UPDATE Users SET firstName=?, lastName=?, username=?, password=?, editingRights=? WHERE id=?;";
        jdbcTemplate.update(sql, user.getFirstName(), user.getLastName(), user.getUsername(), user.getPassword(),
                        user.getEditingRights(), id);
        return 0;
    }
}
