package tourism9.backend.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import tourism9.backend.model.Log;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("LogDao")
public class LogDataAccessService implements LogDao{

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public LogDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int insertLog(UUID id, Log log) {
        String sql = "INSERT INTO Logs (logID, userID, roomID, dateAndTime, enterOrExit) VALUES (?, ?, ?, ?, ?);";
        jdbcTemplate.update(sql, id, log.getUserID(), log.getRoomID(), log.getDateAndTime(), log.getEnterOrExit());
        return 0;
    }

    @Override
    public List<Log> selectAllLogs() {
        String sql = "SELECT * FROM Logs;";
        return jdbcTemplate.query(sql, (resultSet, i) -> {
            UUID logID = UUID.fromString(resultSet.getString("logID"));
            UUID userID = UUID.fromString(resultSet.getString("userID"));
            UUID roomID = UUID.fromString(resultSet.getString("roomID"));
            LocalDateTime dateAndTime = resultSet.getTimestamp("dateAndTime").toLocalDateTime();
            String enterOrExit = resultSet.getString("enterOrExit");
            return new Log(logID, userID, roomID, dateAndTime, enterOrExit);
        });
    }

    @Override
    public Optional<Log> selectLogByID(UUID id) {
        String sql = "SELECT * FROM Logs WHERE logID = ?;";
        Log log = jdbcTemplate.queryForObject(sql, new Object[]{id},
                (resultSet, i) -> {
                    UUID userID = UUID.fromString(resultSet.getString("userID"));
                    UUID roomID = UUID.fromString(resultSet.getString("roomID"));
                    LocalDateTime dateAndTime = resultSet.getTimestamp("dateAndTime").toLocalDateTime();
                    String enterOrExit = resultSet.getString("enterOrExit");
                    return new Log(id, userID, roomID, dateAndTime, enterOrExit);
                });
        return Optional.ofNullable(log);
    }

    @Override
    public List<Log> selectLogsByUserID(UUID id) {
        String sql = "SELECT * FROM Logs WHERE userID = ?;";
        return jdbcTemplate.query(sql, new Object[]{id},
                (resultSet, i) -> {
                    UUID logID = UUID.fromString(resultSet.getString("logID"));
                    UUID roomID = UUID.fromString(resultSet.getString("roomID"));
                    LocalDateTime dateAndTime = resultSet.getTimestamp("dateAndTime").toLocalDateTime();
                    String enterOrExit = resultSet.getString("enterOrExit");
                    return new Log(logID, id, roomID, dateAndTime, enterOrExit);
                });
    }

    @Override
    public List<Log> selectLogsByRoomID(UUID id) {
        String sql = "SELECT * FROM Logs WHERE roomID = ?;";
        return jdbcTemplate.query(sql, new Object[]{id},
                (resultSet, i) -> {
                    UUID logID = UUID.fromString(resultSet.getString("logID"));
                    UUID userID = UUID.fromString(resultSet.getString("userID"));
                    LocalDateTime dateAndTime = resultSet.getTimestamp("dateAndTime").toLocalDateTime();
                    String enterOrExit = resultSet.getString("enterOrExit");
                    return new Log(logID, userID, id, dateAndTime, enterOrExit);
                });
    }

    @Override
    public int deleteLogByID(UUID id) {
        String sql = "DELETE FROM Logs WHERE logID = ?;";
        jdbcTemplate.update(sql, id);
        return 0;
    }

    @Override
    public int updateLogByID(UUID id, Log log) {
        String sql = "UPDATE Logs SET userID=?, roomID=?, dateAndTime=?, enterOrExit=? WHERE logID=?;";
        jdbcTemplate.update(sql, log.getUserID(), log.getRoomID(), log.getDateAndTime(), log.getEnterOrExit(), id);
        return 0;
    }
}
