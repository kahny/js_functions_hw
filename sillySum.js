//Write a function that takes an array of numbers, and returns the sum of each number multiplied by its index.

var newarray = [1,2,3,4]

var sillySum = function(array){
	var count=0
	for(var index = 0; index<array.length; index++){
		count += array[index]*index
	}
	return count;
}

console.log(sillySum(newarray))

