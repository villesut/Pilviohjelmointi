
<?php

$myArray = Array('val1','val2','val3');
$pituus = sizeof($myArray);
 

for ($i = 0; $i < $pituus; $i++){
echo $myArray[$i];
}

echo " ";

$sade = 3;
$ala = $sade * pi() * pi();
echo $ala;


?>