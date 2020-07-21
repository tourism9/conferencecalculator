package tourism9.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeResource {

    @GetMapping("/user")
    public String user() {
        return ("<h1>USER</h1>");
    }

    @GetMapping("/admin")
    public String admin() {
        return ("<h1>ADMIN</h1>");
    }
}
