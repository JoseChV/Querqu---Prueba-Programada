use sql3444498;

CREATE TABLE IF NOT EXISTS PropertyType(
    idPropertyType SERIAL PRIMARY KEY,
    description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Owner(
    idOwner SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    telephone TEXT NOT NULL,
    email TEXT,
    identificationNumber TEXT NOT NULL,
    address TEXT
);

CREATE TABLE IF NOT EXISTS Property(
    idProperty SERIAL PRIMARY KEY,
    idPropertyType INT NOT NULL REFERENCES PropertyType(idPropertType),
    idOwner INT NOT NULL REFERENCES OwnerT(idOwner),
    number TEXT NOT NULL,
    address TEXT NOT NULL,
    area FLOAT NOT NULL,
    constructionArea FLOAT
);