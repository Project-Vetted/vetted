
USE vetted_db;

INSERT INTO users (username, password, email, role)
VALUES ('test_vet', 'vet123', 'vet@test.com', 'USER');

SELECT * FROM users;