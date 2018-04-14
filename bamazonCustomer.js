//require packages
var mysql = require("mysql");
var inquirer = require("inquirer");
//create the connection for sql database
var connection = mysql.createConnection({
	host:"localhost",
	port:3306,

	//username
	user: "root",
	//password
	password: "root",
	database: "bamazon_DB"
});


connection.connect(function(err){
	if(err) throw err;
	start();
});

//will display all items in inventory for the user to select
function start(){
	
	//make db query
	connection.query("SELECT * FROM products", function(err, res) {
		if (err) throw err;

		console.log("Existing Inventory: ");
		console.log("---------------------");

		for ( var i = 0; i < res.length; i++) {

			console.log("Item ID: " + res[i].item_id  + " | " + "Product Name: " + res[i].product_name + " | " + "Department Name: " + res[i].department_name + " | " + "Price: $" + res[i].price);
		}
		console.log("--------------------");

	});
	console.log(" ");
	inquirer.prompt([
		//prompt for ID of the item to purchase
		{
			type: "input",
			name: "id",
			message: "What is the Id of the product you would like to purchase?",
			validate: function(value){
				if(isNaN(value) == false && parseInt(value) <= res.length && parse.Int(value) > 0) {
					return true;
				} else {
					return false;
				}
			}
		}
		//prompt for the quantity to purchase
		{
			type:"input",
			name:"qty",
			message: "How many would you like to purchase?",
			validate: function(value) {
				if(isNaN(value)) {
					return false;
				} else {
					return true;
				}
			}
		};
		]).then(function(ans){
			var whatToBuy = (ans.id)-1;
			var howMuchToBuy = parseInt(ans.qty);
			var grandTotal = parseFloat(((res[whatToBuy].Price)*howMuchToBuy).toFixed(2));

			//check if item is in stock
			if(res[whatToBuy].stock_quantity >= howMuchToBuy){
				//update quantity of product number after purchase
				connection.query("UPDATE ")
			}
		})
};
/*
//make sure users input is valid
function validateInput(){

};

//will prompt the user what item/quantity they would like to purchase
function promptUserPurchase(){

};*/

