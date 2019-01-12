INSERT INTO products (prodName,prodDesc,prodType,prodImg)
VALUES (${prodName},${prodDesc},${prodType},${prodImg})
RETURNING *;