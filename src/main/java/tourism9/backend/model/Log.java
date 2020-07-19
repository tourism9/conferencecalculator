package tourism9.backend.model;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDateTime;
import java.util.UUID;

public class Log {

    private UUID logID;
    private UUID userID;
    private UUID roomID;
    private String enterOrExit; //Use 1 for enter and -1 for exit
    private LocalDateTime dateAndTime;

    public Log(@JsonProperty("logID") UUID logID,
               @JsonProperty("userID") UUID userID,
               @JsonProperty("roomID") UUID roomID,
               @JsonProperty("dateAndTime") LocalDateTime dateAndTime,
               @JsonProperty("state") String enterOrExit) {
        this.logID = logID;
        this.userID = userID;
        this.roomID = roomID;
        this.enterOrExit = enterOrExit;
        this.dateAndTime = dateAndTime;
    }

    public UUID getLogID() {
        return logID;
    }

    public void setLogID(UUID logID) {
        this.logID = logID;
    }

    public UUID getUserID() {
        return userID;
    }

    public void setUserID(UUID userID) {
        this.userID = userID;
    }

    public UUID getRoomID() {
        return roomID;
    }

    public void setRoomID(UUID roomID) {
        this.roomID = roomID;
    }

    public String getEnterOrExit() {
        return enterOrExit;
    }

    public void setEnterOrExit(String enterOrExit) {
        this.enterOrExit = enterOrExit;
    }

    public LocalDateTime getDateAndTime() {
        return dateAndTime;
    }

    public void setDateAndTime(LocalDateTime dateAndTime) {
        this.dateAndTime = dateAndTime;
    }
}
