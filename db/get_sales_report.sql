SELECT COUNT(*), p.prodname
FROM products p
JOIN sales s ON p.prodid = s.prodid
GROUP BY p.prodname
ORDER BY p.prodname ASC;