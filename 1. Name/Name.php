<?php

	//print_r($_GET);

	if(isset($_GET['submit'])){
		$a = $_GET['sname'];
		if($a == ""){
			echo "Invalid request";
		}else{
			echo $a;
		}
	}
	
?>