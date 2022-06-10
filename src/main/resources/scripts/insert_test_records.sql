USE vetted_db;

INSERT INTO users (username, password, email, role)
VALUES ('test_visitor', '123', 'visitor@email.com', 'VISITOR'),
       ('test_user', '123', 'user@email.com', 'USER'),
       ('test_vet', '123', 'vet@email.com', 'VET');

INSERT INTO categories (name)
VALUES ('PTSD'),
       ('Depression'),
       ('Anxiety'),
       ('Alcohol Addiction'),
       ('Sex Addiction');

INSERT INTO user_category (user_id, category_id)
VALUES (1, 1),
       (1, 2),
       (1, 3),
       (2, 1),
       (2, 4);

SELECT *
FROM users;