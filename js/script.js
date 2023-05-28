const pRock = document.querySelector('.rock');
const pPaper = document.querySelector('.paper');
const pScissors = document.querySelector('.scissors');
const info = document.querySelector('.info');
const enemyImage = document.querySelector('.enemy-img');
const choice = document.querySelectorAll('li img');

function getEnemyChoice() {
  const enemy = Math.random();
  if (enemy <= 0.33) return 'rock';
  if (enemy > 0.33 && enemy <= 0.67) return 'paper';
  return 'scissors';
}

function turn() {
  const image = ['rock', 'paper', 'scissors'];
  const start = new Date().getTime();
  let i = 0;
  setInterval(function() {
    if (new Date().getTime() - start >= 1000) {
      return clearInterval;
    }
    enemyImage.setAttribute('src', `./asset/${image[i++]}.png`);
    if (i == image.length) i = 0;
  }, 100);
}

function getResult(enemy, player) {
  if (player == enemy) return 'DRAW!';
  if (player == 'rock') return (enemy == 'paper') ? 'YOU LOSE' : 'YOU WIN';
  if (player == 'paper') return (enemy == 'scissors') ? 'YOU LOSE' : 'YOU WIN';
  if (player == 'scissors') return (enemy == 'rock') ? 'YOU LOSE' : 'YOU WIN';
}

choice.forEach(function(chce) {
  chce.addEventListener('click', function() {
    const enemyChoice = getEnemyChoice();
    const playerChoice = chce.className;
    const result = getResult(enemyChoice, playerChoice);
    
    turn();
    setTimeout(function() {
      enemyImage.setAttribute('src', `./asset/${enemyChoice}.png`);
      info.innerText = result;
    }, 1000);
  });
});

// pRock.addEventListener('click', function() {
//   const enemyChoice = getEnemyChoice();
//   const playerChoice = pRock.className;
//   const result = getResult(enemyChoice, playerChoice);
  
//   enemyImage.setAttribute('src', `./asset/${enemyChoice}.png`);
//   info.innerText = result;
  
//   // console.log(enemyChoice);
//   // console.log(playerChoice);
//   // console.log(result);
// });

// pPaper.addEventListener('click', function() {
//   const enemyChoice = getEnemyChoice();
//   const playerChoice = pPaper.className;
//   const result = getResult(enemyChoice, playerChoice);
  
//   enemyImage.setAttribute('src', `./asset/${enemyChoice}.png`);
//   info.innerText = result;
  
//   // console.log(enemyChoice);
//   // console.log(playerChoice);
//   // console.log(result);
// });
// pScissors.addEventListener('click', function() {
//   const enemyChoice = getEnemyChoice();
//   const playerChoice = pScissors.className;
//   const result = getResult(enemyChoice, playerChoice);
  
//   enemyImage.setAttribute('src', `./asset/${enemyChoice}.png`);
//   info.innerText = result;
  
//   // console.log(enemyChoice);
//   // console.log(playerChoice);
//   // console.log(result);
// });