-- Drops database if exists
DROP DATABASE IF EXISTS burgers_db;

-- Create database
CREATE DATABASE burgers_db;

-- Use the database

USE burgers_db;

-- Create table within
CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);