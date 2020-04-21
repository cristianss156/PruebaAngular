<?php
   try{
	  $conexion=new PDO('mysql:host=localhost;dbname=mydb','root','root',array(PDO::ATTR_PERSISTENT=>true));
	}catch(PDOException $e){
	  echo $e->getMessage();
	  die();
	}	
?>