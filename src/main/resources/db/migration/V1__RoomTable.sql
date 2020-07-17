CREATE TABLE IF NOT EXISTS Rooms (
    id UUID NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    length DECIMAL NOT NULL,
    width DECIMAL NOT NULL,
    maxCapacity INTEGER NOT NULL,
    units VARCHAR(100) NOT NULL,
    numberEntered INTEGER,
    numberExited INTEGER
);