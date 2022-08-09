<?php
   try{
	  $conexion=new PDO('mysql:host=localhost;dbname=mydb','root','07-Mercy',array(PDO::ATTR_PERSISTENT=>true));
	}catch(PDOException $e){
	  echo $e->getMessage();
	  die();
	}	
?>
