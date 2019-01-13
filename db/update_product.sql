UPDATE products
SET prodName = $2,
    prodDesc = $3,
    prodImg = $4,
    prodType = $5
WHERE prodId = $1;

SELECT * FROM products;