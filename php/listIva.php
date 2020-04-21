<?php
  
  require_once('connection.php');

  $q = $_REQUEST["q"];

  switch ($q) {
    case 1:
      $id = $_REQUEST["id"];
      $verIva = $conexion->prepare("SELECT * FROM IVA WHERE id=:_id");
      $verIva->bindValue(':_id', $id, PDO::PARAM_INT);
      $verIva->execute();
      while($iva=$verIva->fetch(PDO::FETCH_ASSOC)){
        $datos[] = array_map('utf8_encode',$iva);
      }
      echo json_encode($datos);
      break;
    case 2:
      $verIvas = $conexion->prepare("SELECT * FROM IVA ORDER BY valor DESC");
      $verIvas->execute();
      while($ivas = $verIvas->fetch(PDO::FETCH_ASSOC)){
       $datos[] = array_map('utf8_encode',$ivas);
      }
      echo json_encode($datos);
      break;
    case 3:
	    $id = $_REQUEST["id"];
      $tipo = $_REQUEST["tipo"];
      $valor = $_REQUEST["valor"];
      $updateIva = $conexion->prepare("UPDATE IVA SET tipo=:_t, valor=:_v WHERE id=:_id");
      $updateIva->bindValue(':_t', $tipo, PDO::PARAM_STR);
      $updateIva->bindValue(':_v', $valor, PDO::PARAM_INT);
      $updateIva->bindValue(':_id', $id, PDO::PARAM_INT);
      $updateIva->execute();
      if($updateIva->rowCount()!==0){echo json_encode("1");}
      else{echo json_encode("0");}
      break;
    case 4:
      $_valor=$_REQUEST["valor"];
	    $_tipo=$_REQUEST["tipo"];		  
	    $insert=$conexion->prepare("INSERT INTO IVA (valor, tipo) VALUES(:_valor, :_tipo)");
	    $insert->bindValue(':_valor',$_valor,PDO::PARAM_INT);
	    $insert->bindValue(':_tipo',$_tipo,PDO::PARAM_STR);
	    $insert->execute();
	    if($insert->rowCount()==0){echo json_encode("1");}
      else{
        $insert=$conexion->prepare("SELECT * FROM IVA WHERE tipo=:_tipo AND valor=:_valor");        
        $insert->bindValue(':_tipo',$_tipo,PDO::PARAM_STR);
        $insert->bindValue(':_valor',$_valor,PDO::PARAM_INT);
        $insert->execute();
        while ($iva = $insert->fetch(PDO::FETCH_ASSOC)){
          $datos[] = array_map('utf8_encode', $iva);
        };        
        echo json_encode($datos[0]);
      }
	    break;
	  case 5:
	    $_id=$_REQUEST["id"];		  
	    $delete=$conexion->prepare("DELETE FROM IVA WHERE id=:_id");
 	    $delete->bindValue(':_id',$_id,PDO::PARAM_INT);
	    $delete->execute();
	    if($delete->rowCount()==0){echo json_encode("1");}
	    else{echo json_encode("0");}
	    break;
	  case 6:
	    $_tipo=$_REQUEST["tipo"];
	    $search=$conexion->prepare("SELECT * FROM IVA WHERE tipo like CONCAT('%',:_tipo,'%') ORDER BY tipo");
	    $search->bindValue(":_tipo",$_tipo,PDO::PARAM_STR);
	    $search->execute();
	    while($iva=$search->fetch(PDO::FETCH_ASSOC)){
	      $datos[] = array_map('utf8_encode',$iva);
	    }
	    echo json_encode($datos);
	    break;
  }

?>