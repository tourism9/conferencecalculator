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
        int cap = selectLatestRoomLog(log.getRoomID());

        String sql = "INSERT INTO Logs (logID, userID, roomID, dateAndTime, enterOrExit, currentRoomCapacity) VALUES (?, ?, ?, ?, ?, ?);";
        jdbcTemplate.update(sql, id, log.getUserID(), log.getRoomID(), log.getDateAndTime(), log.getEnterOrExit(),
                        cap + log.getEnterOrExit());
        return 0;
    }

    public int selectLatestRoomLog(UUID roomID) {
        List<Log> logs = selectLogsByRoomID(roomID);
        int cap = 0;
        if (!logs.isEmpty()) {
            Log latestLog = logs.get(logs.size() - 1);
            cap = latestLog.getCurrentRoomCapacity();
        }
        return cap;
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
            int currentRoomCapacity = resultSet.getInt("currentRoomCapacity");
            return new Log(logID, userID, roomID, dateAndTime, enterOrExit, currentRoomCapacity);
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
                    int currentRoomCapacity = resultSet.getInt("currentRoomCapacity");
                    return new Log(id, userID, roomID, dateAndTime, enterOrExit, currentRoomCapacity);
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
                    int currentRoomCapacity = resultSet.getInt("currentRoomCapacity");
                    return new Log(logID, id, roomID, dateAndTime, enterOrExit, currentRoomCapacity);
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
                    int currentRoomCapacity = resultSet.getInt("currentRoomCapacity");
                    return new Log(logID, userID, id, dateAndTime, enterOrExit, currentRoomCapacity);
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
        String sql = "UPDATE Logs SET userID=?, roomID=?, dateAndTime=?, enterOrExit=?, currentRoomCapacity=? WHERE logID=?;";
        jdbcTemplate.update(sql, log.getUserID(), log.getRoomID(), log.getDateAndTime(), log.getEnterOrExit(),
                        log.getCurrentRoomCapacity(), id);
        return 0;
    }
}
