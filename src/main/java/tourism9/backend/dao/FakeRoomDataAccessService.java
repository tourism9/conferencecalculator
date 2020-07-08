package tourism9.backend.dao;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;
import tourism9.backend.model.Room;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("fakeRoomDao")
public class FakeRoomDataAccessService implements RoomDao {
    private static List<Room> DB = new ArrayList<>();

    @Override
    public int insertRoom(UUID id, Room room) {
        DB.add(new Room(id, room.getName(), room.getLength(), room.getWidth(), room.getOgOccupancy()));
        return 1;
    }

    @Override
    public List<Room> selectAllRooms() {
        return DB;
    }

    @Override
    public Optional<Room> selectRoomByID(UUID id) {
        return DB.stream()
                .filter(room -> room.getId().equals(id))
                .findFirst();
    }

    @Override
    public int deleteRoomByID(UUID id) {
        Optional<Room> room = selectRoomByID(id);
        if (room.isEmpty()) {
            return 0;
        }

        DB.remove(room.get());
        return 1;
    }

    @Override
    public int updateRoomByID(UUID id, Room update) {
        return selectRoomByID(id)
                .map(room -> {
                    int index = DB.indexOf(room);
                    if (index >= 0) {
                        DB.set(index,
                                new Room(id, update.getName(),
                                        update.getLength(), update.getWidth(),
                                        update.getOgOccupancy()));
                        return 1;
                    }

                    return 0;
                })
                .orElse(0);
    }
}
