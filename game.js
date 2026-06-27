let randomnumber=Math.floor(Math.random()*100)+1;
let attempts = 0;

function checkGuess(){

     attempts++;
     document.getElementById("attempts").textContent = "Attempts: " + attempts;
    let userguess=Number(document.getElementById("guess").value);
    let result=document.getElementById("result");
    if(userguess == randomnumber){
        result.textContent="Congratulations! You guessed the number!";
        result.style.color="green";
    }else if(userguess < randomnumber){
        result.textContent="Too low! Try again.";
        result.style.color="red";
    }else{
        result.textContent="Too high! Try again.";
        result.style.color="red";
    }   
    document.getElementById("guess").value="";
console.log("Attempts:", attempts);
}