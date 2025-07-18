


let paper=document.querySelector(".paper")
let rock=document.querySelector(".rock")
let scissors=document.querySelector(".scissors")
let humanChoice;
let userScore=0;
let computerScore=0;
let gameOver=false;

let resultArea=document.querySelector(".result")
let roundResult=document.createElement("p")
let totalScore=document.createElement("p")
let playAgain=document.createElement("button")

roundResult.classList.add("round-result")
totalScore.classList.add("totalScore")
playAgain.classList.add("playAgain")

function getComputerChoice(){

     let choice=Math.floor(Math.random()*3)+1;
     let computerChoice1;
   
    if(choice===1){   
   computerChoice1="ROCK";
    }

    else if(choice===2){
       computerChoice1="PAPER";
    }

    else {
       computerChoice1="SCISSORS";
}

return computerChoice1
}


paper.addEventListener("click",()=>{
   if(!gameOver){  humanChoice="PAPER";
   playRound(getComputerChoice())
    }

   
})

rock.addEventListener("click",()=>{

   if(!gameOver){  humanChoice="ROCK";
   playRound(getComputerChoice()) }
 

})

scissors.addEventListener("click",()=>{
   if(!gameOver){

        humanChoice="SCISSORS";
   playRound(getComputerChoice())
   }
  
})

  playAgain.textContent="PLAY AGAIN"

 playAgain.addEventListener("click",()=>{

       userScore =0
      computerScore=0

      roundResult.textContent=""
      totalScore.textContent=""
     gameOver=false
   resultArea.textContent=""
      resultArea.appendChild(roundResult)
      resultArea.appendChild(totalScore)
   })
 


function playRound(  computerChoice){

    if(humanChoice===computerChoice){

        roundResult.textContent=`DRAW! Your Choice:${humanChoice} Computer Choice:${computerChoice}` 
        totalScore.textContent=`YOUR SCORE:${userScore} COMPUTER SCORE:${computerScore}`
      }
        
     else if  ( humanChoice==="SCISSORS"  &&  computerChoice==="PAPER" || 
        humanChoice==="PAPER" && computerChoice==="ROCK" || 
        humanChoice==="ROCK" &&  computerChoice==="SCISSORS"  ) 
        {
       
      roundResult.textContent=`YOU WON! Your Choose:${humanChoice}! Computer Chose:${computerChoice}`
      userScore++;
      totalScore.textContent=`YOUR SCORE:${userScore} COMPUTER SCORE:${computerScore}`

     }
     else { 

        roundResult.textContent=`COMPUTER WON! Your Choose:${humanChoice}! Computer Chose:${computerChoice}`
          computerScore++;
              totalScore.textContent=`YOUR SCORE:${userScore} COMPUTER SCORE:${computerScore}`
     }

     resultArea.appendChild(roundResult)
     resultArea.appendChild(totalScore)

   
     roundChecker() 

  
    }


function roundChecker(){

  if (userScore === 5 || computerScore === 5) {

   let winner=userScore===5 ? "YOU WON THE GAME" : "COMPUTER WON THE GAME"
     

    const finalMessage = document.createElement("p");
    finalMessage.textContent = `GAME FINISHED! ${winner}`;
    finalMessage.classList.add("final-message");

   gameOver=true
   resultArea.appendChild(finalMessage)
    resultArea.appendChild(roundResult)
     resultArea.appendChild(totalScore)
   resultArea.appendChild(playAgain)

   }
   return;
}



   

    

   