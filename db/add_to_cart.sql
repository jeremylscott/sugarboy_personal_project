INSERT INTO sales (prodId,username,cartTotal)
VALUES ($1,$2,$3)
RETURNING *;