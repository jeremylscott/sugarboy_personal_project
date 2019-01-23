UPDATE products
SET prodimg = $2,
    prodname = $3,
    prodtype = $4,
    proddesc = $5,
    price = $6
WHERE prodid = $1;

SELECT * FROM products;