const express = require('express'); 
const path = require('path'); 


//initialize express 
const app = express(); 


//ports 
const PORT = 8000;  




//home route 
app.get('/' , (req , res) =>{

	res.send('<h1> express.js calculator </h1>');
})


//route api 
app.get('/:opperand?/:num1?/:num2?' , (req, res) =>{

	let opperand = req.params.opperand; 
	let num1 = parseInt(req.params.num1); 
	let num2 = parseInt(req.params.num2); 
	let result ; 


	switch(opperand){

		case 'multiply': 
			result = num1 * num2  
			break ; 

		case 'add': 
			result = num1 + num2; 
			break; 
		case 'divide': 
			result = num1 / num2;  
			break; 
		default:
			res.send('Sorry the only options are multiply, add, and divide'); 

	}
	//sends the result to the page 
	res.send(result.toString()); 

}); 


//server listener
app.listen(PORT , () => console.log('listening on port' + PORT));