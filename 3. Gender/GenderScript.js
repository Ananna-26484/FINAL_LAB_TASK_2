"use strict"

function validate(){

	//ErrorText= "";
	if ( ( form.gender[0].checked == false ) && ( form.gender[1].checked == false ) && ( form.gender[2].checked == false ))
	{
		alert ( "Please choose your Gender" );
		return false;
	}
	//if (ErrorText= "") { form.submit() }
}



function blurmsg(){

	if(document.getElementById('gender').value == ""){
		document.getElementById('userMsg').innerHTML = "* this field is required!";
	}
}