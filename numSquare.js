/*

Create a function called numSquare that will return an array 
of all perfect square numbers up to, but not exceeding a max number.

*/

var squareArray = []

var numSquare = function(maxNum){
	for(var i=1; i<=maxNum; i++){
		if(Math.pow(i,0.5)%1 == 0){
			squareArray.push(i)
			console.log(Math.pow(i,0.5))
		}
	}
	return squareArray
}
numSquare(16)
console.log(squareArray)




/*   using math.SqR

<code>// numSquare(max)

// Create a function called numSquare that will return an array of 
// all perfect square numbers up to, but not exceeding a max number.




var squares = [];

var numSquare = function() {

var maxNum = 100;
var maxSqR = Math.sqrt(maxNum);

for( i=0; i < maxSqR; i++ ) {
var squareNum = i * i;
squares.push(squareNum);
};

return squares;
}

console.log( numSquare() );

*/