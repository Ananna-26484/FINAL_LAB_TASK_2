"use strict"

function validate(){
    var check;
    check = document.bloodGroup1.bloodGroup.value;

	if(check== "" ){

		document.getElementById('userMsg').innerHTML = "Blood group can't left empty";
		return false;        
    }
    
    else{
       
       return true;
    }

}