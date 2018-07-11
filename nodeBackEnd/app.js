//to pull this up on the terminal we need to cd into the file and then and then type in node then the file. In this case is node app.js
//we can use es6 with the language bc it's our comptuer and no loser is going to come on and use an older version
//NOTE: use the up arrow to go through the last thing you ran


console.log('hello face')

console.log(__filename)//this is the full path to where the file is. It can find itself and go into other files and find them too. In this case it pulls up /Users/natalyg/Documents/Classes/4th Quarter/NodeJS/week1/node-intro/app.js

console.log(__dirname)//this does the parent/directory so in the case of this file it will pull up /Users/natalyg/Documents/Classes/4th Quarter/NodeJS/week1/node-intro

//The node world has an extra feature called require
	//what it does it goes and gets another file
	//when this was added to js it changed the way we saw it and allowed us to do much more with it. The modules could get modules which could get modules...etc etc. OOP ENCAPSULATION

//https://nodejs.org/dist/latest-v8.x/docs/api/fs.html	----these are the things that we can use

let fs = require('fs') //require is saying go get me something. The name of that thing is fs which is the file system and when we get it we assign it to a variable of fs

//for some reason node people just don't like to use ;
let colors = require('colors')

//http module
let http = require('http')

let nauticalWordsArr = [
	'ahoy',
	'abandon ship',
	'belay',
	'brass monkey',
	'cathead',
	'cat o nine tails',
	'chock',
	'deadhead',
	'devil to pay',
	'donkeyman',
	'gin pole',
	'harden up',
	'jigger mast',
	'lolling',
	'minelayer',
	'nipper',
	'nun',
	'ox-eye',
	'parbuckle',
	'pintle',
	'poop deck',
	'predreadnaught',
	'puddening',
	'razee',
	'reefer',
	'romper',
	'salty dog',
	'seacock',
	'sextant',
	'snotter',
	'spanker',
	'steeve',
	'texas',
	'tingle',
	'turtling',
	'viol',
	'whipping',
	'yarr'
]

fs.readFile(__dirname + '/message.txt', {encoding: 'utf-8'}, (err, data) => {
	console.log('it works!!!'.rainbow.whiteBG.bold)
	console.log(err, data)
});

//takes in one function with parameters
//this is us talking to a server
http.createServer(function (req, res) {
	//you can change the port like in circuslabs:3000 you can change the number at the end of it. But if we tell it to be on a port you have to make a new port. You can't use one that is in use. Pick a random number in the higher numbers like 1000+
	console.log('got a request port on 1234!!!'.blue)

	res.setHeader('Access-Control-Allow-Origin', '*')

	// console.log(req) - this is a large object with information that anyone could want to request. It's a network traffic of request going through modems and networks
	res.writeHead(200, {'content-type': 'text/html'})//give it a status code like 404. 200 is a good request. the content-type bit is making it into a real html file

	//you can pull an item out of an array and then call it in the .listen as calling a function
	//you can put something in a variable and then call the variable in the .listen as long as it's a string

	// var word = 'ahoy'

	// if (req.url === "/pg13") {
	// 	word = 'TURN BACK NOW'
	// }

	var nauticalWord = nauticalWordsArr[Math.floor(Math.random()*nauticalWordsArr.length)];

	console.log(nauticalWord)

	res.end(nauticalWord)//kinda like the closing tag in http
	//res is how we make responses. So this is outputting the 'ahoy' onto our website
}).listen(1234)
//this listens to the port on 1234.
//how ports work is kinda like ships. As the internet comes through, we have different 'ships' coming in and they are parking in different ports depending on what information they are taking and so they take it to that specific port, in this case 1234 and 'js people' are waiting at the port looking/listening to see if anything happens. So the .listen is listening at that port and when it something goes there like a 'ship' we get a response on our terminal. Like HEY OH AHOY there be people here matee
// we can try this by checking the server so localhost:1234
//we now will get the console, or whatever we put in the function in our terminal

//REQ - request - 
//RES - response -








