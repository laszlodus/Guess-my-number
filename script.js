let score = 20;
let secretNumber = Math.trunc(Math.random()*20)+1;
let highscore = 0;

 function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
   // When no input
   const guess = Number(document.querySelector('.guess').value);
   if(!guess || guess < 1 || guess > 20) {
   displayMessage('⛔ No Number or The number is not between 1 and 20!')}
   // When win
   else if(guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = 'rgb(22, 165, 29)';
    document.querySelector('.secret').textContent = secretNumber;
    if(score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
   }
   //when not win
   else if(guess !== secretNumber) {
    if(score > 1) {
    displayMessage(guess > secretNumber ? '🛫 Too High' : '🛬 Too Low');
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
   }else {
    displayMessage('💥 You lost the game');
    document.querySelector('.score').textContent = 0;
    document.querySelector('.secret').textContent = secretNumber;
   }}
});

document.querySelector('.again').addEventListener('click', function() {
    displayMessage('Start guessing...');
    score = 20;
    document.querySelector('.score').textContent = '20';
    document.querySelector('.secret').textContent = '?';
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = 'grey';
})