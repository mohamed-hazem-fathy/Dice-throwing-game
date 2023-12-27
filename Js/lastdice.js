
var activePlayer,roundScore,scores,gamePlayer
 init();
 var lastdice;
 
document.querySelector(".btn-roll").addEventListener('click',function() {
   if(gamePlayer){
      var dice = Math.floor(Math.random() *6 ) + 1;
      console.log(dice)
      var DOMdice =document.querySelector(".dice");
      DOMdice.style.display='block';
      DOMdice.src = 'image/dice-' + dice + '.jpg';
   if(dice===6 && lastdice === 6){
    scores[activePlayer] = 0;
    document.querySelector('#score-' + activePlayer).textContent = '0'
   }else if(dice !== 1) {
    roundScore += dice ;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;

    }else {
    nextPlayer();
    }
    lastdice = dice
 }
      


});

document.querySelector('.btn-hold').addEventListener('click',function(){
   if(gamePlayer) {
      //add current score to global score
      scores[activePlayer] += roundScore

      //update the ui
      document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    var input = document.querySelector('.Final-score').value   
    if(input) {
        var winningscor = input
    }else{
        winningscor = 100
    }
      //Cheek if player win the game
      if(scores[activePlayer] >= winningscor) {
         document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
         document.querySelector('.dice').style.display = 'none';
         document.querySelector('.player-'+activePlayer + '-panel').classList.add('Winner');
         document.querySelector('.player-'+activePlayer + '-panel').classList.remove('active');
         gamePlayer = false;

      }else{
         nextPlayer();
      }
   }

})

function nextPlayer(){
   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0;

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display ='none'
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
   scores = [0,0];
   roundScore = 0;
   activePlayer =0;
   gamePlayer = true;

   document.querySelector('.dice').style.display = 'none'
   document.querySelector('#score-0').textContent = "0";
   document.querySelector('#score-1').textContent = "0";
   document.querySelector('#current-0').textContent = '0';
   document.querySelector('#current-1').textContent = '0';
   document.querySelector('#name-0').textContent = "Player 1";
   document.querySelector('#name-1').textContent = 'Player 2';
   document.querySelector('.player-0-panel').classList.remove('winner');
   document.querySelector('.player-1-panel').classList.remove('winner');
   document.querySelector('.player-0-panel').classList.remove('active');
   document.querySelector('.player-1-panel').classList.remove('active');
   document.querySelector('.player-0-panel').classList.add('active');
}