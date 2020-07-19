package tourism9.backend.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import tourism9.backend.model.Room;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("realRoomDao")
public class RoomDataAccessService implements RoomDao {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public RoomDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int insertRoom(UUID id, Room room) {
        String sql = "INSERT INTO Rooms (id, name, length, width, maxCapacity, units) VALUES (?, ?, ?, ?, ?, ?);";
        jdbcTemplate.update(sql, id, room.getName(), room.getLength(), room.getWidth(), room.getMaxCapacity(), room.getUnits());

        return 1;
    }

    @Override
    public List<Room> selectAllRooms() {
        String sql = "SELECT * FROM Rooms;";
        return jdbcTemplate.query(sql, (resultSet, i) -> {
            UUID id = UUID.fromString(resultSet.getString("id"));
            String name = resultSet.getString("name");
            double length = resultSet.getDouble("length");
            double width = resultSet.getDouble("width");
            int maxCapacity = resultSet.getInt("maxCapacity");
            String units = resultSet.getString("units");
            return new Room(id, name, length, width, maxCapacity, units);
        });
    }

    @Override
    public Optional<Room> selectRoomByID(UUID id) {
        String sql = "SELECT * FROM Rooms WHERE id = ?;";
        Room room = jdbcTemplate.queryForObject(sql, new Object[]{id},
                (resultSet, i) -> {
                    String name = resultSet.getString("name");
                    double length = resultSet.getDouble("length");
                    double width = resultSet.getDouble("width");
                    int maxCapacity = resultSet.getInt("maxCapacity");
                    String units = resultSet.getString("units");
                    return new Room(id, name, length, width, maxCapacity, units);
                });
        return Optional.ofNullable(room);
    }

    @Override
    public int deleteRoomByID(UUID id) {
        String sql = "DELETE FROM Rooms WHERE id = ?;";
        jdbcTemplate.update(sql, id);
        return 1;
    }

    @Override
    public int updateRoomByID(UUID id, Room room) {
        String sql = "UPDATE Rooms SET name=?, length=?, width=?, maxCapacity=?, units=? WHERE id=?;";
        jdbcTemplate.update(sql, room.getName(), room.getLength(), room.getWidth(), room.getMaxCapacity(), room.getUnits(), id);
        return 1;
    }
}
