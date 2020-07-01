package tourism9.backend.model;

import java.util.UUID;

public class User {

    private UUID id;
    private String username;
    private String password;

    public User(UUID id, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UUID getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}
