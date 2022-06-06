INSERT INTO users (username, password, email, role) VALUES ('test_vet', 'vet123', 'vet@test.com', 'USER');

INSERT INTO users (username, password, email, role) VALUES ('USMCdude07', 'vet456', 'vet@usmc.com', 'USER');

INSERT INTO users (username, password, email, role) VALUES ('army1strong', 'army555', 'vet@army.com', 'USER');

INSERT INTO categories (name) VALUES ('PTSD'), ('Alcohol Abuse'), ('Drug Abuse'), ('Sex Trauma'), ('Depression'), ('Army'), ('Marine Corps'), ('Air Force'), ('Navy'), ('Space Force'), ('Coast Guard'), ('National Guard');

INSERT INTO user_categories (user_id, category_id) VALUES (1, 1);
INSERT INTO user_categories (user_id, category_id) VALUES (2, 1);
INSERT INTO user_categories (user_id, category_id) VALUES (2, 2);
INSERT INTO user_categories (user_id, category_id) VALUES (3, 3);
INSERT INTO user_categories (user_id, category_id) VALUES (3, 4);

SELECT * FROM users;
SELECT * FROM categories;
SELECT * FROM user_categories;