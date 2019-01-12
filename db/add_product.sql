INSERT INTO products (prodName,prodType,prodImg)
VALUES (${prodName},${prodType},${prodImg})
RETURNING *;