package tourism9.backend.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tourism9.backend.model.Room;
import tourism9.backend.service.RoomService;
import tourism9.backend.service.UserService;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RequestMapping("api/v1/room")
@RestController
public class RoomController {

    private final RoomService roomService;

    @Autowired
    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @PostMapping
    public void addRoom(@Valid @NonNull @RequestBody Room room) {
        roomService.addRoom(room);
    }

    @GetMapping
    public List<Room> getAllRooms() {
        return roomService.getAllRooms();
    }

    @GetMapping(path = "{id}")
    public Room getRoomByID(@PathVariable("id") UUID id) {
        return roomService.getRoomByID(id)
                .orElse(null);
    }

    @DeleteMapping(path = "{id}")
    public void deleteRoomByID(@PathVariable("id") UUID id) {
        roomService.deleteRoom(id);
    }

    @PutMapping("{id}")
    public void updateRoom(@PathVariable("id") UUID id, @Valid @NonNull @RequestBody Room room) {
        roomService.updateRoom(id, room);
    }
}
