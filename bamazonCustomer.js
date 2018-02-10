//require packages
var mysql = require("mysql");
var inquirer = require("inquirer");
//create the connection for sql database
var connection = mysql.createConnection({
	host:"localhost",
	port:3000,

	//username
	user: "root",
	//password
	password: "root",
	database: "bamazon_DB"
});

connection.connect(function(err){
	if(err) throw err;
	displayInventory();
});

//will display all items in inventory for the user to select
function displayInventor(){

};

//make sure users input is valid
function validateInput(){

};

//will prompt the user what item/quantity they would like to purchase
function promptUserPurchase(){

};