SELECT prodname COUNT(transactionid)
FROM products
JOIN sales ON products.prodid = sales.prodid
GROUP BY prodname;