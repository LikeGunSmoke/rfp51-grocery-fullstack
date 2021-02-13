CREATE DATABASE groceries;

USE groceries;

CREATE TABLE list (
  id INT NOT NULL,
  `name` VARCHAR(20) NOT NULL,
  quantity INT NOT NULL
);

INSERT INTO list (1, 'fake_apple', 15)

/*  Execute this file from the command line by typing:
 *  mysql -u root < schema.sql
 *  to create the database and the tables.*/