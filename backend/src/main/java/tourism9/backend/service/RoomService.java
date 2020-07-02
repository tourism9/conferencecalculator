package tourism9.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import tourism9.backend.dao.RoomDao;
import tourism9.backend.model.Room;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class RoomService {

    private final RoomDao roomDao;

    @Autowired
    public RoomService(@Qualifier("fakeRoomDao") RoomDao roomDao) {
        this.roomDao = roomDao;
    }

    public int addRoom(@RequestBody Room room) {
        return roomDao.insertRoom(room);
    }

    public List<Room> getAllRooms() {
        return roomDao.selectAllRooms();
    }

    public Optional<Room> getRoomByID(UUID id) {
        return roomDao.selectRoomByID(id);
    }

    public int deleteRoom(UUID id) {
        return roomDao.deleteRoomByID(id);
    }

    public int updateRoom(UUID id, Room room) {
        return roomDao.updateRoomByID(id, room);
    }
}
