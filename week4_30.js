
numtoguess = Math.floor(Math.random() * 1000) + 1; // generate a random number between 1 and 1000
        
function fun(){

guess=parseInt(document.getElementById("guessnum").value);
result=document.getElementById("result");

if(isNaN(guess)||guess<1||guess>1000)
{
    // rs=document.write("invalid num");
    document.getElementById('result').innerHTML= "invalid num" ;

    guess="";
}
else if(guess==numtoguess)
{
    // rs=document.write(" Congratulations!!!! You guessed the number!");
    document.getElementById('result').innerHTML= "Congratulations!!!! You guessed the number!" ;
}
else if(guess<numtoguess)
{
    // rs=document.write("Too low. Try again ");
    document.getElementById('result').innerHTML= "Too low. Try again" ;

}

else 
{
    // rs=document.write("Too high. Try again ");
    document.getElementById('result').innerHTML= "Too high. Try again" ;

}
result.style.color="red";
document.getElementById("guessnum").value = "";

}

