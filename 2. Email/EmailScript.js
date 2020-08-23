"use strict"

function validate(){

	var email = document.getElementById('email').value;
	
	if(email == ""){
		document.getElementById('userMsg').innerHTML = "email can't left empty";
		return false;
	}
	}else{
		return true;
	}


}

function remover(){
	document.getElementById('emailMsg').innerHTML = "";
}

function blurmsg(){

	if(document.getElementById('email').value == ""){
		document.getElementById('emailMsg').innerHTML = "this field is required!";
	}
}