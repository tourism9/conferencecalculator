package tourism9.backend.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;
import tourism9.backend.model.User;
import tourism9.backend.service.UserService;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/v1/user")
@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public void addUser(@Valid @NonNull @RequestBody User user) {
        userService.addUser(user);
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(path = "{id}")
    public User getUserByID(@PathVariable("id") UUID id) {
        return userService.getUserByID(id)
                .orElse(null);
    }

    @DeleteMapping("{id}")
    public void deleteUserByID(@PathVariable("id") UUID id) {
        userService.deleteUser(id);
    }

    @PutMapping("{id}")
    public void updateUser(@PathVariable("id") UUID id, @Valid @NonNull @RequestBody User user) {
        userService.updateUser(id, user);
    }
}
