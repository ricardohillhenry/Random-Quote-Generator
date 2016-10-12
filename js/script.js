// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var quoteElement = document.getElementById("quote"),
	sourceElement = document.getElementById("source"),
	citeElement = document.getElementById("citation"),
	yearElement = document.getElementById("year"),
	arr_placeholder = [], //placeholder array for temporarily storing used quotes, after they've been removed from quotes array
	generatedNumber; // holds generated random number when getRandomQuote() is called; making it accessible globally


var quotes = [
	{
		quote: "A woman's mind is cleaner than a man's.",
		source: "Oliver Herford"
	},
	{
		quote: "Do not take life too seriously. You will never get out of it alive.",
		source: "Elbert Hubbard" 
	},
	{
		quote: "Always remember that you are absolutely unique. Just like everyone else.",
		source: "Jim Wright",
		citation: "1,001 Logical Laws, Accurate Axioms, Profound Principles, Trusty Truisms, Homey Homilies, Colorful Corollaries, Quotable Quotes, and Rambunctious Ruminations for All Walks of Life",
		year: 1979 
	},
	{
		quote: "People who think they know everything are a great annoyance to those of us who do.",
		source: "Isaac Asimov" 
	},	
	{
		quote: "Get your facts first, then you can distort them as you please.",
		source: "Mark Twain" 
	},	
	{
		quote: "I love deadlines. I like the whooshing sound they make as they fly by.",
		source: "Douglas Adams",
		citation: "The Salmon of Doubt",
		year: 2002
	},	
	{
		quote: "Procrastination is the art of keeping up with yesterday.",
		source: "Don Marquis", 
		citation: "Archy and Mehitabel",
		year: 1927
	},	
	{
		quote: "If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month.",
		source: "Theodore Roosevelt" 
	},	
	{
		quote: "I can resist everything except temptation.", //The temptation to use Angular or MustacheJS html templating
		source: "Oscar Wilde",
		citation: "Lady Windermere's Fan"
	},	
	{
		quote: "One advantage of talking to yourself is that you know at least somebody's listening.",
		source: "Franklin P. Jones" 
	},	
	{
		quote: "Laziness is nothing more than the habit of resting before you get tired.",
		source: "Jules Renard" 
	},	
	{
		quote: "I never said most of the things I said.",
		source: "Yogi Berra" 
	},	
	{
		quote: "Go to Heaven for the climate, Hell for the company.",
		source: "Mark Twain",
		year: 1889
	},	
];

window.onload = function(event){
	printQuote();
	window.setInterval(printQuote, 10000);
};





/*================================== Function Declaration(s) ==================================*/
function printQuote(){
	/*
	Randomly generates a quote from quotes array. This quote only repeats once after all other quotes have 
	repeated. 
	*/
	var generatedQuote = function(){ 
		/* 
		Self invoking anonymous function that stores a generated random number (depending on quotes array's length), 
		and returns a quote from quotes array with the random number as the index.
		*/
		generatedNumber = Math.floor(Math.random() * quotes.length); // stores random number/index
		return quotes[generatedNumber];
	}();

	quotes.splice(generatedNumber, 1); // Removes current quote based on generated number/index in array
	arr_placeholder.push(generatedQuote); // adds current quote to placeholder array, using generated number,index
	quoteElement.textContent = generatedQuote.quote; 
	sourceElement.textContent = generatedQuote.source;
	
	if(generatedQuote.hasOwnProperty("citation")){
		citeElement.textContent = generatedQuote.citation;
		sourceElement.innerHTML += "<span id=\"citation\" class=\"citation\"> " + "\"" + citeElement.textContent + "\"" +" </span>";
	}
	if(generatedQuote.hasOwnProperty("year")){
		// yearElement.style.display = "block";
		yearElement.textContent = generatedQuote.year;
		sourceElement.innerHTML += "<span id=\"year\" class=\"year\"> " + yearElement.textContent +" </span>";
	}
	if(quotes.length < 1){
		quotes = arr_placeholder.splice(0);
		arr_placeholder.splice(0, arr_placeholder.length);
	}
}
