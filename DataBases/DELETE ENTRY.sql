USE gamesdb;

DELETE FROM customers
WHERE id=4;

SELECT * FROM customers;
UPDATE customers
SET first_name="Tim", last_name="Jones"
WHERE id=6;
