INSERT INTO users (username,password,email)
VALUES (${username},${password},${email});

SELECT * FROM users
WHERE username = (${username})