"use strict"

function validate(){

	var gender1 = document.getElementById("male");
	
    var gender2 = document.getElementById("female");

    var gender3 = document.getElementById("other");


	if(gender1.checked  == true || gender2.checked == true || gender3.checked == true ){

		
        return true;
        
    }
    
    else{
    
        alert("Cant not be null ");        
       
        return false;
    }

    
    


}