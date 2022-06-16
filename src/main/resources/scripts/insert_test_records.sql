USE vetted_db;

INSERT INTO users (username, password, email, role)
VALUES ('test_visitor', '123', 'visitor@email.com', 'VISITOR'),
       ('test_user', '123', 'user@email.com', 'USER'),
       ('test_vet', '123', 'vet@email.com', 'VET');

INSERT INTO users (username, password, email, role)
VALUE ('test_4', '123', 'mail@email.com', 'VISITOR');

INSERT INTO categories (name)
VALUES ('PTSD'),
       ('Depression'),
       ('Anxiety'),
       ('Alcohol Abuse'),
       ('Sex Addiction');

INSERT INTO user_category (user_id, category_id)
VALUES (1, 1),
       (1, 2),
       (1, 3),
       (2, 1),
       (2, 4);

INSERT INTO user_category (user_id, category_id)
VALUES (3, 5);

INSERT INTO user_point_interactions (user_that_upvoted, user_upvoted)
VALUES (1, 2),
       (1, 3),
       (2, 3),
       (2, 1);

INSERT INTO user_point_interactions (user_that_upvoted, user_upvoted)
VALUES (3, 2);

INSERT INTO user_friends (user_id, friend_id)
VALUES (1,2), (1,3), (2,3);



SELECT *
FROM users;