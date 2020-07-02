package tourism9.backend.api;

import org.springframework.beans.factory.annotation.Autowired;
import tourism9.backend.model.User;
import tourism9.backend.service.UserService;

public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    public void addUser(User user) {
        userService.addUser(user);
    }
}
