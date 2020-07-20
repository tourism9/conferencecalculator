package tourism9.backend.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import tourism9.backend.dao.LogDao;
import tourism9.backend.model.Log;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class LogService {

    private final LogDao logDao;

    @Autowired
    public LogService(@Qualifier("LogDao") LogDao logDao) {
        this.logDao = logDao;
    }


    public int addLog(@RequestBody Log log) {
        return logDao.insertLog(log);
    }

    public List<Log> getAllLogs() {
        return logDao.selectAllLogs();
    }

    public List<Log> getLogsByRoomID(UUID roomID) {
        return logDao.selectLogsByRoomID(roomID);
    }

    public List<Log> getLogsByUserID(UUID userID) {
        return logDao.selectLogsByUserID(userID);
    }

    public Optional<Log> getLogByID(UUID id) {
        return logDao.selectLogByID(id);
    }

    public int deleteLog(UUID id) {
        return logDao.deleteLogByID(id);
    }

    public int updateLog(UUID id, Log log) {
        return logDao.updateLogByID(id, log);
    }

}
