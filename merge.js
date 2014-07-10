/*merge(arr1, arr2)

Write a function called merge. The function should take two sorted arrays of numbers as input and return a merged array of the sorted numbers from the input. For example, if the input arrays were var arr1 = [3,6,11]; var arr2 = [2,4,5,8,9]; Then the returned array would be: [2,3,4,5,6,8,9,11].

*/

var arr1 = [3,6,11]
var arr2 = [2,4,5,8,9]

var merge = function(arr1, arr2){
	//set counters to see whether you have gone through the whole array yet
	var index1 = 0; 
	var index2 = 0; 
	var length1 = arr1.length;
	var length2 = arr2.length;
	
	//create the blank array to hold the final combined sorted array 
	var output = [];

	while ( index1 < length1 && index2 < length2 ){
		if ( arr1[index1] < arr2[index2]){
			output.push(arr1[index1]);
			index1++;
		}
		else{
			output.push(arr2[index2]);
			index2++;
		}
	}


	if ( index1 < length1){
		for(index1; index1< length1; index1++){
			output.push(arr1[index1]);
		}
	}

	else if (index2< length2){
		for(index2 ; index2 < length2; index2++){
			output.push(arr2[index2]);
		}
	}


return output

}

console.log(merge(arr1, arr2));

