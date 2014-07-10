//Create a function to return true or false if a number passed in a prime number.

var isPrime = function(num){
	for(var i = 2; i<num; i++){
		if (num%i == 0){
			console.log("not a prime number")
			return false;
		}
		else{
			return true;
		}
	}

}

console.log(isPrime(9))

