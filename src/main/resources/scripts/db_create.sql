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

CREATE TABLE categories
(
    id   BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(60),
    PRIMARY KEY (id)
);

CREATE TABLE user_category
(
    id BIGINT NOT NULL AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    category_id BIGINT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (category_id) REFERENCES categories (id)
);

CREATE TABLE user_point_interactions
(
    id BIGINT NOT NULL AUTO_INCREMENT,
    user_that_upvoted BIGINT NOT NULL,
    user_upvoted BIGINT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_that_upvoted) REFERENCES users (id),
    FOREIGN KEY (user_upvoted) REFERENCES users (id)
);

CREATE TABLE user_friends
(
    id BIGINT NOT NULL auto_increment,
    user_id BIGINT NOT NULL,
    friend_id BIGINT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (friend_id) REFERENCES users (id)
);