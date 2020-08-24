<?php
if (isset($_GET['submit'])) 
{
    if (isset($_GET['bloodGroup'])) {
        echo"Blood Group: ";        
        echo $_GET['bloodGroup'];
    }
}
echo " ";

?>