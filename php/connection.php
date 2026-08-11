<?php
try {
  $conexion = new PDO('mysql:host=localhost;dbname=mydb', 'root', '1234FakePass', array(PDO::ATTR_PERSISTENT => true));
} catch (PDOException $e) {
  echo $e->getMessage();
  die();
}
