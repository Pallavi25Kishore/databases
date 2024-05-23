CREATE DATABASE chat;

USE chat;

CREATE TABLE usernames (
  id INTEGER PRIMARY KEY,
  name_text text
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER PRIMARY KEY,
  message_text text,
  roomname text,
  nameId INTEGER,
  FOREIGN KEY (nameId) REFERENCES usernames(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

