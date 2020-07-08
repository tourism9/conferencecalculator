package tourism9.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;
import java.util.UUID;

public class Room {

    private UUID id;
    @NotBlank
    private String name;
    private double length;
    private double width;
    private int ogOccupancy;
    private int numEntered;
    private int numExited;

    public Room(@JsonProperty("id") UUID id,
                @JsonProperty("name") String name,
                @JsonProperty("length") double length,
                @JsonProperty("width") double width,
                @JsonProperty("ogOccupancy") int ogOccupancy) {
        this.id = id;
        this.name = name;
        this.length = length;
        this.width = width;
        this.ogOccupancy = ogOccupancy;
        this.numEntered = 0;
        this.numExited = 0;
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

    public int getOgOccupancy() {
        return ogOccupancy;
    }

    public void setOgOccupancy(int ogOccupancy) {
        this.ogOccupancy = ogOccupancy;
    }

    public int getNumEntered() {
        return numEntered;
    }

    public void setNumEntered(int numEntered) {
        this.numEntered = numEntered;
    }

    public int getNumExited() {
        return numExited;
    }

    public void setNumExited(int numExited) {
        this.numExited = numExited;
    }
}
