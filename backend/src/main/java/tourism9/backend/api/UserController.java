package tourism9.backend.api;

import tourism9.backend.model.User;
import tourism9.backend.service.UserService;

public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    public void addUser(User user) {
        userService.addUser(user);
    }
}
