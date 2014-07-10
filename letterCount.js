
count = {}   
var letterCount = function(word){

	for (var i =0; i<word.length; i++){
		var letter = word[i]
		//check if letter was used before, if not make the key and first count 1:
		if(count[letter] == undefined){
			count[letter] = 1 //variable u need bracket 
		}

		//if the letter was used before, add count 1 to the previous key:	
		else{
			count[letter] +=1
		}
	}
}

letterCount("apple")
console.log(count)
