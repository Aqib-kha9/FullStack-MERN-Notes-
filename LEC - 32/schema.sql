CREATE TABLE userF (
    id VARCHAR(50) PRIMARY KEY,
    user_name VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);

