"use strict"

function validate(){

	var username = document.getElementById('id').value;
	var picture = document.getElementById('file').value;	
	

	if(username == "" ){
		document.getElementById('userMsg').innerHTML = "user id can't left empty or It can not be negative number";
		return false;

	}else if(picture == ""){
		document.getElementById('fileMsg').innerHTML = "file can't left empty";
		return false;
    }  

}

function remover(){
    document.getElementById('userMsg').innerHTML = "";
    document.getElementById('fileMsg').innerHTML = "";
    
}

function blurmsg(){

	if(document.getElementById('id').value == "" || Math.sign(document.getElementById('id').value) !=1) {
		document.getElementById('userMsg').innerHTML = "this field is required!";
    }
    elseif(document.getElementById('file').value == "")
    {
        document.getElementById('fileMsg').innerHTML = "this field is required!";

    }
}