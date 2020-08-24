<?php
$gender=$_GET['gender'];
if(isset($_GET['submit']))
{    
    if($gender=='')
    {
        echo"Input Gender";
    }
    else
    {
       echo"Gender is: ";
       echo $gender;
    }
	
}
?>