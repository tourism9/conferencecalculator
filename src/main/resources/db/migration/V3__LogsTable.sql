CREATE TABLE IF NOT EXISTS Logs (
    logID UUID NOT NULL PRIMARY KEY,
    userID UUID NOT NULL,
    roomID UUID NOT NULL,
    dateAndTime TIMESTAMP NOT NULL,
    enterOrExit INTEGER NOT NULL
);
