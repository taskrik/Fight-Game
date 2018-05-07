
//Setting our 2 objects//

let player = {
  health : 100,
  power : 40
}

let opponent = {
  health : 100,
  power : 40
}

//sets the attack function//
const attack = () => {

  let attackButton = document.getElementById('attack');
  let playerAttack = Math.floor(Math.random() * player.power);
  let gameMessage = document.getElementById('game-message');
  let gameMessage2 = document.getElementById('game-message2');
  let restartButton = document.getElementById('restart-game');

    opponent.health -= playerAttack;
    printToScreen();

    attackButton.disabled = true;
    gameMessage.innerText = "You did " + playerAttack + " Dmg, "
    gameMessage2.innerText = "Now opponent is about to strike!"
    if (isGameOver(opponent.health)) {
        endGame("You did " + playerAttack + " Dmg, ");
        endGame2("You won the fight!");
        document.getElementById('assassin').hidden = true;
        document.getElementById('continue').hidden = false;
        return;
    }


    setTimeout(() => {
      let opponentAttack = Math.floor(Math.random() * opponent.power);
      player.health -= opponentAttack;
      printToScreen();
      gameMessage.innerText = "He did " + opponentAttack + " Dmg, "
      gameMessage2.innerText =" Now is your turn!"
      attackButton.disabled = false;

      if (isGameOver(player.health)) {

        endGame("Opponent did " + opponentAttack + " Dmg, ");
        endGame2("You Lost!!!");
        return;
      }
    }, 2000);

}

const endGame = (message) => {
  document.getElementById('game-message').innerText = message;
  document.getElementById('attack').hidden = true;
  document.getElementById('restart-game').hidden = false;

}

const endGame2 = (message) => {
  document.getElementById('game-message2').innerText = message;

if (player.health <= 0) {
  document.getElementById('game-message2').style.color = "red";
  document.getElementById('game-message2').style.fontSize = "45px";
  document.getElementById('game-message2').style.fontWeight = "bold";
  document.getElementById('game-message2').style.textDecoration = "underline";
  return;
}
else {
  document.getElementById('game-message2').style.color = "lightGreen";
  document.getElementById('game-message2').style.fontSize = "45px";
  document.getElementById('game-message2').style.fontWeight = "bold";
  document.getElementById('game-message2').style.textDecoration = "underline";
  return;
}
}

//checks if the health is below 0//
const isGameOver = (health) => {
  return health <= 0;
}

//restart button//
const restart = () => {
  player.health = 100;
  opponent.health = 100;
  document.getElementById('game-message').innerText = "";
  document.getElementById('attack').hidden = false;
  document.getElementById('attack').disabled = false;
  document.getElementById('game-message2').style.color = "";
  document.getElementById('game-message2').style.fontSize = "";
  document.getElementById('game-message2').style.fontWeight = "";
  document.getElementById('game-message2').style.textDecoration = "";
  document.getElementById('restart-game').hidden = true;
  document.getElementById('assassin').hidden = false;
  printToScreen();
}

const printToScreen = () => {

  document.getElementById('opponent-health').innerText = opponent.health;

  document.getElementById('player-health').innerText = player.health;
}

printToScreen();
