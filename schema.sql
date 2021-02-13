CREATE DATABASE groceries;

USE groceries;

CREATE TABLE list (
  id INT NOT NULL,
  `name` VARCHAR(20) NOT NULL,
  quantity INT NOT NULL
);

INSERT INTO list (id, `name`, quantity) VALUES (1, 'fake apples', 15);
INSERT INTO list (id, `name`, quantity) VALUES (2, 'fake avocado', 27);
INSERT INTO list (id, `name`, quantity) VALUES (3, 'fake mango', 9000);

/*  Execute this file from the command line by typing:
   - mysql -u root < schema.sql / drop db between tests
   - DROP DATABASE groceries;
    to create the database and the tables.*/