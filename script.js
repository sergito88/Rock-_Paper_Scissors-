function getComputerChoice(){
     let choice=Math.floor(Math.random()*3)+1;
     let computerChoice1;
   
 
    if(choice===1){
        
computerChoice1="ROCK";
  console.log("Computer Choice:"+computerChoice1)
    }
    else if(choice===2){
       computerChoice1="PAPER";
       console.log("Computer Choice:"+computerChoice1)
    }
    else {
       computerChoice1="SCISSORS";
       console.log("Computer Choice:"+computerChoice1)
    
}
return computerChoice1
}

function getHumanChoice(){

    let choice=prompt("Enter your Choice")
    let humanChoice=choice.toUpperCase().trim()
    console.log("Your Choice:"+humanChoice)
   
 if(  humanChoice .length==0){
return  null
}

   return humanChoice;
}

let userScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){


    if(humanChoice===computerChoice){

      
        console.log(`Draw!\n Your Choice:${humanChoice} ,Computer Choice:${computerChoice}`) }

     else if  ( humanChoice==="SCISSORS"  &&  computerChoice==="PAPER" || 
        humanChoice==="PAPER" && computerChoice==="ROCK" || 
        humanChoice==="ROCK" &&  computerChoice==="SCISSORS"  ) 
        {
       
      console.log(`You WON!Computer LOOSE:!\n Your Choose:${humanChoice}! Computer Chose:${computerChoice}`)
    userScore++;
     }
     else{
        console.log(`You Loose!Computer Won:!\n Your Choose:${humanChoice}! Computer Chose:${computerChoice}`)
     computerScore++;
     }
    }
    
function playGame(){

  function playGame() {
  while (userScore < 5 && computerScore < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if (
      humanSelection == null ||
      (humanSelection !== "ROCK" &&
        humanSelection !== "PAPER" &&
        humanSelection !== "SCISSORS")
    ) {
      continue;
    }

    playRound(humanSelection, computerSelection);
    console.log(`Your Score: ${userScore} | Computer Score: ${computerScore}`);
  }

  if (userScore === 5) {
    console.log("GAME FINISHED! YOU WON!");
  } else if (computerScore === 5) {
    console.log(" GAME FINISHED! COMPUTER WON!");
  }
}

   
}

playGame()
