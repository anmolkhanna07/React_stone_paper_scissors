import React from 'react'
import './Styling.css';

export default function Scoreboard() {



  let compScore = 0;
  let userScore = 0;

  const Choices = document.querySelectorAll(".choice");
  // const Mes=document.querySelector("#msgtrigr");


  const compChoice = () => {
    const presentChoice = ["Rock", "Paper", "scissors"];
    const randomPick = Math.floor(Math.random());
    return presentChoice[randomPick];
  }


  const DrawGame = () => {
    console.log("Game Draw");
    document.getElementById('Mes').innerText="Draw Try Again";

  };



  const ShowWinner = (userWin) => {
    if (userWin) {
      console.log("YOu win");
      userScore++;
      document.getElementById('Mes').innerText="Won";
      document.getElementById('user-score').innerText=userScore;
    }
    else  {
      console.log("You Loose");
      compScore++;
      document.getElementById('Mes').innerText="You Loose";
      document.getElementById('comp-score').innerText=compScore;

    }


  }

;
  const UserChoice = (choiceSelected) => {

   console.log("user choice ====", choiceSelected);
    const computerChoice = compChoice();

    console.log("comp choice ===", computerChoice);

    if (computerChoice === choiceSelected) {
      DrawGame();
    }


    else {
      let userWin = true;
      if (choiceSelected === "Rock")
      //Paper,Scissors
      {
        userWin = computerChoice === "scissors" ? true : false;
      }
      else if (choiceSelected === "Paper")
      //Rock,Scissors
      {

        userWin = computerChoice === "Rock" ? true : false;

      }
      else if (choiceSelected === "scissors")
      //paper,Rock
      {
        userWin = computerChoice === "Paper" ? true : false;
      }
      ShowWinner(userWin);

    }
  }                            

;
  


    Choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {

      const choiceSelected = choice.getAttribute("id");
      UserChoice(choiceSelected);

      // console.log("choice Clicked",choiceSelected);


    })
  }
  );






  return (

    <>

    <div className='Score'>
        <div className='User-Score' >
          <h3>Your Score</h3>
          <div className='user'id='user-score'>0</div>
        </div>

        <div className='Computer-Score' >
          <h4>Computer Score</h4>

          <div className='comp' id='comp-score'>0</div>
        </div>
      </div>

      <div className="Mesg" >
        <h1 id="Mes">Play Your Move</h1>
      </div>
     

      </>
  )

    
  
}
