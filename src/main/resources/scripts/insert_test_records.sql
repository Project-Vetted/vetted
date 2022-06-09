USE vetted_db;

INSERT INTO users (username, password, email, role)
VALUES ('test_visitor', '123', 'visitor@email.com', 'VISITOR'),
       ('test_user', '123', 'user@email.com', 'USER'),
       ('test_vet', '123', 'vet@email.com', 'VET');

SELECT *
FROM users;