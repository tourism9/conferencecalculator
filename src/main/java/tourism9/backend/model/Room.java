package main.java.tourism9.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;
import java.util.UUID;

public class Room {

    private UUID id;
    @NotBlank
    private String name;
    private double length;
    private double width;

    public Room(@JsonProperty("id") UUID id,
                @JsonProperty("name") String name,
                @JsonProperty("length") double length,
                @JsonProperty("width") double width) {
        this.id = id;
        this.name = name;
        this.length = length;
        this.width = width;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getLength() {
        return length;
    }

    public void setLength(double length) {
        this.length = length;
    }

    public double getWidth() {
        return width;
    }

    public void setWidth(double width) {
        this.width = width;
    }
}
