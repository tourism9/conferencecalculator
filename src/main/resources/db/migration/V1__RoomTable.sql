CREATE TABLE Rooms (
    id UUID NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    length DECIMAL NOT NULL,
    width DECIMAL NOT NULL
);