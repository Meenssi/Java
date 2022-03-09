//Sirapatson Imkrajang ID:1631300934
//Ex13 : JavaScript Conditionals
//Ex13.1: if Statements
function checkNumber(){
    var num;
    num = document.getElementById("number").value;
    if(num > 30) {
        document.getElementById('ex13-1-1').innerHTML = num + " is greater that 30.";
    }
    document.getElementById("ex13-1-2").innerHTML = "Value of number is " + num;
}