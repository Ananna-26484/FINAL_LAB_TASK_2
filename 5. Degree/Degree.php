<?php
if (isset($_GET['submit'])) 
{
    if (isset($_GET['SSC']) || isset($_GET['HSC']) || isset($_GET['BSc'])) 
	{
		if (isset($_GET['SSC'])) 
		{
            echo"Degree : ";            
            echo $_GET['SSC'];            
		}
		if (isset($_GET['HSC'])) 
		{
            echo"Degree : ";            
            echo $_GET['HSC'];  
		}
		if (isset($_GET['BSc'])) 
		{
            echo"Degree : ";            
            echo $_GET['BSc'];  
		}
	
	}

}
?>