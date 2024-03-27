let score = JSON.parse(localStorage.getItem
  ('score')) || {
     wins: 0,
     loses: 0,
     ties: 0
   };

  /*if (score === null) {
   score = {
     wins: 0,
     loses: 0,
     ties: 0
   };
  }  */
    let isAutoPlaying = false;
    let intervalId;


      function autoplay() {
      if (!isAutoPlaying) {
          intervalId = setInterval(function() {
          const playerMove = pickComputerMove();
          playGame(playerMove);
          }, 1000);
          isAutoPlaying = true;
      }
        else {
        clearInterval(intervalId);
        isAutoPlaying = false;

      }
    }
   
  


   function playGame(playerMove) {
   const computerMove = pickComputerMove();
   let result = '';
   if (playerMove === 'rock') { 
     
     if (computerMove === 'rock') {
       result = 'tie.';
     } else if (computerMove === 'paper') {
       result = 'you lose.';
     } else if (computerMove === 'scissors') {
       result = 'you win.';
     }

   } else if (playerMove === 'paper') {
       if (computerMove === 'rock') {
     result = 'you win.';
     } else if (computerMove === 'paper') {
     result = 'tie.';
     } else if (computerMove === 'scissors') {
     result = 'you lose.';
     }
   } else if (playerMove === 'scissors') {
       if (computerMove === 'rock') {
         result = 'you lose.';
       } else if (computerMove === 'paper') {
         result = 'you win.';
       } else if (computerMove === 'scissors') {
         result = 'tie.';
       }
        }  
     if (result === 'you win.') {
       score.wins += 1; 
     } else if (result === 'you lose.') {
     score.loses += 1;
     } else if (result === 'tie.') {
     score.ties += 1;
     }
    
     localStorage.setItem('score', JSON.stringify(score));

     updateScoreElement();

     document.querySelector('.js-result').
     innerHTML = result;

     document.querySelector('.js-moves').
     innerHTML = `You
       <img src="images/${playerMove}-emoji.png" class="move-icon">
       <img src="images/${computerMove}-emoji.png" class="move-icon">
       Computer`;
   }

      function updateScoreElement() {
     document.querySelector(' .js-score')
       .innerHTML = `wins: ${score.wins}, loses: ${score.loses}, ties: ${score.ties}`;
    }
   

   function pickComputerMove() {
   const randomNumber = Math.random();

   let computerMove = '';
   
   if (randomNumber >= 0 && randomNumber < 1 / 3)
   {computerMove = 'rock';
   } 
   else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3)
   {computerMove = 'paper';
   }
   else if (randomNumber >= 2 / 3 && randomNumber < 1)
   {computerMove =  'scissors';
   } 
   
   return computerMove;
    }