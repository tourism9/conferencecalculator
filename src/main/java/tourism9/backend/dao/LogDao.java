package tourism9.backend.dao;

import tourism9.backend.model.Log;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface LogDao {
    int insertLog(UUID id, Log log);

    default int insertLog(Log log) { // POST Method
        UUID id = UUID.randomUUID();
        return insertLog(id, log);
    }

    List<Log> selectAllLogs(); // GET Method

    Optional<Log> selectLogByID(UUID id);

    List<Log> selectLogsByUserID(UUID id);

    List<Log> selectLogsByRoomID(UUID id);

    int deleteLogByID(UUID id); // DELETE Method

    int updateLogByID(UUID id, Log log); // PUT Method
}