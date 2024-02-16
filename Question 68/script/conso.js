function change() {
    	var val = document.getElementById("val").value.trim();

    	if (val == "") {
        	alert("Please enter a value!");
        	return;
    	}

    	if (!isNaN(val)) {
        	alert("Please enter a String!");
        	return;
    	}
	
	var conso = 0;
    	var vowel = 0;
	var vowArray = ['a' , 'e' , 'i' , 'o' , 'u' , 'A' , 'E' , 'I' , 'O' , 'U'];

	for(var i=0; i<val.length;i++){
		
		if(vowArray.includes(val.charAt(i))){
			vowel++;
		}else{
			conso++;
		}
	}
	
        document.getElementById("conso").innerHTML = "The entered value contain : " + conso + " Consonants";
	
        document.getElementById("vowel").innerHTML = "The entered value contain : " + vowel + " Vowels";
}
