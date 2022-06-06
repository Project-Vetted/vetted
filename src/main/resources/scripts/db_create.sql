# DROP DATABASE if exists vetted_db;
#
# CREATE DATABASE if not exists vetted_db;
#
#
# USE vetted_db;
#
#
# CREATE TABLE users
# (
#     id       BIGINT       NOT NULL AUTO_INCREMENT,
#     username VARCHAR(60)  NOT NULL,
#     password VARCHAR(60) NOT NULL,
#     email    VARCHAR(200) NOT NULL,
#     role     VARCHAR(32)  NOT NULL,
#     PRIMARY KEY (id)
#
# );
#
# CREATE TABLE categories
# (
#     id   INT NOT NULL AUTO_INCREMENT,
#     name VARCHAR(100),
#     PRIMARY KEY (id)
# );
#
# CREATE TABLE user_categories
# (
#     id      BIGINT NOT NULL AUTO_INCREMENT,
#     user_id BIGINT NOT NULL,
#     category_id  INT    NOT NULL,
#     PRIMARY KEY (id),
#     FOREIGN KEY (user_id) REFERENCES users (id),
#     FOREIGN KEY (category_id) REFERENCES categories (id)
# );

DROP DATABASE if exists vetted_db;

CREATE DATABASE if not exists vetted_db;

USE vetted_db;

CREATE TABLE users
(
    id       BIGINT       NOT NULL AUTO_INCREMENT,
    username VARCHAR(60)  NOT NULL,
    password VARCHAR(60)  NOT NULL,
    email    VARCHAR(200) NOT NULL,
    role     VARCHAR(32)  NOT NULL,
    PRIMARY KEY (id)
);
