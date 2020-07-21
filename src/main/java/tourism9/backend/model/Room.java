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
    private int maxCapacity;
    private int currentCapacity;
    private String units;
    private String color;

    public Room(@JsonProperty("id") UUID id,
                @JsonProperty("name") String name,
                @JsonProperty("length") double length,
                @JsonProperty("width") double width,
                @JsonProperty("maxCapacity") int maxCapacity,
                @JsonProperty("units") String units) {
        this.id = id;
        this.name = name;
        this.length = length;
        this.width = width;
        this.maxCapacity = maxCapacity;
        this.currentCapacity = 0;
        this.color = "green";
        this.units = units;
    }

    public void calculateColor() {
        if ((double)this.currentCapacity / this.maxCapacity > .90) {
            this.color = "red";
        } else if ((double)this.currentCapacity / this.maxCapacity > 0.75) {
            this.color = "yellow";
        } else {
            this.color = "green";
        }
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
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

    public int getMaxCapacity() {
        return maxCapacity;
    }

    public void setMaxCapacity(int maxCapacity) {
        this.maxCapacity = maxCapacity;
    }

    public int getCurrentCapacity() {
        return currentCapacity;
    }

    public void setCurrentCapacity(int currentCapacity) {
        this.currentCapacity = currentCapacity;
    }

    public String getUnits() {
        return this.units;
    }

    public void setUnits(String units) {
        this.units = units;
    }

}
