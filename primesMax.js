var isPrime = function(num){
	for(var i = 2; i < num; i++){
		if (num%i === 0){
		return false;
		}
	else{
		return true;
		}
	}
}

var primes = function(range){
var array = [];
for(i = 2; i < range; i++){
	if (isPrime(i) === true){
		array.push(i)
	}
}
return array;
}

console.log(primes(10))

