DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE DATABASE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN 
)