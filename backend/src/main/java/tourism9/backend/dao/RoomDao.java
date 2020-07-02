package tourism9.backend.dao;

import tourism9.backend.model.Room;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface RoomDao {
    int insertRoom(UUID id, Room room);

    default int insertRoom(Room room) {
        UUID id = UUID.randomUUID();
        return insertRoom(id, room);
    }

    List<Room> selectAllRooms(); // GET Method

    Optional<Room> selectRoomByID(UUID id); // GET Method

    int deleteRoomByID(UUID id); // Delete Method

    int updateRoomByID(UUID id, Room room); // PUT Method
}
