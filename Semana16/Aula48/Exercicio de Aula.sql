CREATE TABLE aula54_products (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) UNIQUE,
    price FLOAT,
    supplier_id VARCHAR(255),
    FOREIGN KEY (supplier_id) references Sup_aula54(id)
);
INSERT INTO aula54_products VALUES 
("okm", "cenoura", 10.00, "c"),
("uhb", "abacate", 11.50, "c"),
("ygv", "cebola", 12.00, "c"),
("ijn", "camarão", 21.00, "d"),
("tfc", "lula", 22.00, "d");


SELECT * FROM aula54_products;
DESCRIBE  test;
ALTER TABLE test CHANGE  gender sex VARCHAR(6);

CREATE TABLE aula54_users (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) UNIQUE,
    gender ENUM("Female", "Male")
);
INSERT INTO aula54_users VALUES 
("a", "Alice", "Female"), ("b", "Bob", "Male");

CREATE TABLE aula54_sales (
    user_id VARCHAR(255),
    product_id VARCHAR (255),
    FOREIGN KEY (user_id) REFERENCES aula54_users(id),
    FOREIGN KEY (product_id) REFERENCES aula54_products(id)
);

INSERT INTO aula54_sales VALUES
("b", "okm"), ("b", "uhb"), ("a", "ygv"), ("b", "ygv"),
("b", "ijn"), ("b","tfc"), ("a", "tfc");

CREATE TABLE aula54_accounts(
    id INT PRIMARY KEY,
    balance FLOAT DEFAULT 0,
    user_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES aula54_users(id)
);
INSERT INTO aula54_accounts VALUES 
(659182, 1000.99, "a"),
(662834, 1000.99, "b");
DROP TABLE aula54_accounts;

SELECT * FROM aula54_accounts
JOIN aula54_users
ON aula54_accounts.user_id = aula54_users.id ;

 SELECT * FROM aula54_sales
JOIN aula54_users
ON aula54_sales.user_id = aula54_users.id 
JOIN aula54_products
ON product_id = aula54_products.id;

 SELECT aula54_users.name, aula54_products.name, Sup_aula54.name FROM aula54_sales
JOIN aula54_users
ON aula54_sales.user_id = aula54_users.id 
JOIN aula54_products
ON product_id = aula54_products.id
JOIN Sup_aula54 
ON supplier_id = Sup_aula54.id;