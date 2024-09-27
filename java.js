function operate(){
    var input= document.getElementById("input").value; 
    var no1= Number(document.getElementById("no1").value);
    var no2= Number(document.getElementById("no2").value);
    var a =document.getElementById("result");

    switch (input){
        case "+":
        case "add":
        case "addition":
            a.innerHTML=no1+no2;
            break;
        case "-":
        case "subtract":
        case "sub":
        case "subtraction":    
            a.innerHTML=no1-no2;
            break;    
        case "x":
        case "*":  
        case "multiply":
        case "mul":
        case "multiplication":
        case "X":
            a.innerHTML=no1*no2;
            break;

        case "/":
        case "divide":
        case "division":
        case "div":    
           a.innerHTML=no1/no2;
           break;
        default:
            a.innerHTML="<h3>please type <br> '+'   <br>  '-' <br>   'x'  <br>  '/' </h3>";    
    }
}
