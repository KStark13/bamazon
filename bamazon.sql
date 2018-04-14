/*drop database if it exists*/
DROP DATABASE IF EXISTS bamazon_DB;
/*create database*/
CREATE DATABASE bamazon_DB;
/*use database*/
USE bamazon_DB;
/*create table*/
CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(50) NOT NULL,
	price DECIMAL (10,2) DEFAULT NULL,
	stock_quantity INT default 0,
	PRIMARY KEY (item_id)
);

/*add items to the table*/
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES 
		(1, 'Christmas Tree Lights', 'Hoiday', 12.99, 1000),
		(2, 'Bath Towels (Red)', 'Home', 13.99, 200),
		(3, 'Bananas', 'Grocery', 0.60, 2000),
		(4, 'Womens Leggings', 'Clothing', 20.00, 50),
		(5, 'Backpack', 'Travel', 40.00, 19),
		(6, 'Night Light', 'Home', 8.00, 40),
		(7, 'Fitbit', 'Exercise', 200.00, 30)
		(8, 'Sidewalk Chalk', 'Toys', 5.99, 100),
		(9, 'Aluminum Baseball Bat', 'Sporting Goods', 30.00, 77),
		(10, 'Mascara', 'Makeup', 18.00, 88);