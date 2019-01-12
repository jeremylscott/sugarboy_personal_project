UPDATE products (prodName,prodType,prodImg)
SET (${prodName},${prodType},${prodImg})
WHERE prodid = ${prodId}
RETURNING *;