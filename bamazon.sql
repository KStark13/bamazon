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
	price INT default 0,
	stock_quantity INT default 0,
	PRIMARY KEY (item_id)
);