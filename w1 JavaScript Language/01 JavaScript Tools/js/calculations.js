

function multiplyBy()
{
// check the input
   var x = document.getElementById("firstNumber").value;
   var y = document.getElementById("secondNumber").value;
    var mNum = x*y;
 
   document.getElementById("result").innerHTML = mNum;
}

function divideBy() 
{ 
    var temp;
    var x = document.getElementById("firstNumber").value;
    var y = document.getElementById("secondNumber").value;
   if(y == 0){
       temp = ("Cant be divided by zero");
       document.getElementById("result").innerHTML = temp;
   
    }


   else
    temp = x/y;
  
    document.getElementById("result").innerHTML = temp;

// check the input
 
}

