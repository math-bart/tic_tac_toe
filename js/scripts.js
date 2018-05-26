var changePlayer = document.getElementById('js-change-player'),
  newGameElem = document.getElementById('js-newGameElement'),
  pickElem = document.getElementById('js-playerPickElement'),
  resultsElem = document.getElementById('js-resultsTableElement'),
  winGameElement = document.getElementById('js-winGameElement'),
  chooseElement = document.getElementById('js-chooseElement'),
  field = document.getElementById('js-field'),
  picks = $("#js-playerPickElement button"),
  allPossibillities = $("#js-playerPickElement button");
  i = 1,
  newGameBtn = document.getElementById('js-newGameButton'),
  newRoundButton = document.getElementById('js-new-round');

setGameElements();
field.style.display = "block";
winGameElement.style.display = "none";
newGameBtn.addEventListener('click', newGame);

picks.each(function (index, element) {
  element.addEventListener('click', function () { 
  var allFields = $("#js-field .col");
  var p = index;
  allPossibillities[p].style.display = 'none';
  round(index);
  i = i + 1;
    function round (a) {
      if ( i % 2 == 0 && i < 8 ) {
        changePlayer.innerHTML = player2.name + '- pick field number';
        player1.pick.push(a + 1);
        var columns = $('.col p');
        var sign = 'o';
        columns[a].append(sign);
        end();
      }
      else if ( i % 2 == 1 && i < 8 ) {
        changePlayer.innerHTML = player1.name + '- pick field number';
        player2.pick.push(a + 1);
        var columns = $('.col p');
        var sign = 'x';
        columns[a].append(sign);
        end();
      }
      else {
        changePlayer.innerHTML = 'Game over. Nobody wins';
        player1.pick.push(a + 1);
        var columns = $('.col p');
        var but = 'o';
        columns[a].append(but);
        end();
        gameState = 'ended';
        newRoundButton.style.display = 'block';
        newRoundButton.addEventListener('click', newRound);
      };
      function end () {
        if ( (player1.pick.indexOf(1) > 0 && player1.pick.indexOf(2) > 0 && player1.pick.indexOf(3) > 0) || (player1.pick.indexOf(4) > 0 && player1.pick.indexOf(5) > 0 && player1.pick.indexOf(6) > 0) || (player1.pick.indexOf(7) > 0 && player1.pick.indexOf(8) > 0 && player1.pick.indexOf(9) > 0) || (player1.pick.indexOf(1) > 0 && player1.pick.indexOf(4) > 0 && player1.pick.indexOf(7) > 0) || (player1.pick.indexOf(2) > 0 && player1.pick.indexOf(5) > 0 && player1.pick.indexOf(8) > 0) || (player1.pick.indexOf(3) > 0 && player1.pick.indexOf(6) > 0 && player1.pick.indexOf(9) > 0) || (player1.pick.indexOf(1) > 0 && player1.pick.indexOf(5) > 0 && player1.pick.indexOf(9) > 0) || (player1.pick.indexOf(3) > 0 && player1.pick.indexOf(5) > 0 && player1.pick.indexOf(7) > 0) ) {
          changePlayer.innerHTML = 'Game over.' + player1.name + ' wins';
          allPossibillities.css('display','none');
          setGameElements();
          player1.score++;
          setGamePoints();
          newGameElem.style.display = 'block';
          if (player1.score == 3) {
            gameState = 'ended';
            setGameElements();
            alert(player1.name + 'Win!');
          };
          newRoundButton.style.display = 'block';
          newRoundButton.addEventListener('click', newRound);
        }
        else if	( (player2.pick.indexOf(1) > 0 && player2.pick.indexOf(2) > 0 && player2.pick.indexOf(3) > 0) || (player2.pick.indexOf(4) > 0 && player2.pick.indexOf(5) > 0 && player2.pick.indexOf(6) > 0) || (player2.pick.indexOf(7) > 0 && player2.pick.indexOf(8) > 0 && player2.pick.indexOf(9) > 0) || (player2.pick.indexOf(1) > 0 && player2.pick.indexOf(4) > 0 && player2.pick.indexOf(7) > 0) || (player2.pick.indexOf(2) > 0 && player2.pick.indexOf(5) > 0 && player2.pick.indexOf(8) > 0) || (player2.pick.indexOf(3) > 0 && player2.pick.indexOf(6) > 0 && player2.pick.indexOf(9) > 0) || (player2.pick.indexOf(1) > 0 && player2.pick.indexOf(5) > 0 && player2.pick.indexOf(9) > 0) || (player2.pick.indexOf(3) > 0 && player2.pick.indexOf(5) > 0 && player2.pick.indexOf(7) > 0) ) {
          changePlayer.innerHTML = 'Game over.' + player2.name + ' wins';
          allPossibillities.css('display','none');
          setGameElements();
          player2.score++;
          setGamePoints();
          newGameElem.style.display = 'block';
          if (player2.score == 3) {
            gameState = 'ended';
            setGameElements();
            alert(player2.name + 'Win!');
          };
          newRoundButton.style.display = 'block';
          newRoundButton.addEventListener('click', newRound);
        };
      };
    };
  });
});

function newRound() {
  $('.col p').empty();
  gameState = 'started';
  setGameElements();
  newGameElem.style.display = 'none';
  allPossibillities.css('display','inline-block');
  player1.pick = [0];
  player2.pick = [0];
  i = 0;
  changePlayer.innerHTML = player1.name + '- pick field number';
};

var gameState = 'notStarted',  //started // ended
  player1 = {
    name: '',
    score: 0,
    pick: [0],
  },
  player2 = {
    name: '',
    score: 0,
    pick: [0],
  };

function setGameElements() {
  switch(gameState) {
    case 'started':
      newGameElem.style.display = 'none';
      pickElem.style.display = 'block';
      resultsElem.style.display = 'block';
      winGameElement.style.display = "none";    //mój kod
      newRoundButton.style.display = 'none';
      field.style.display = "block";
      break;
    case 'ended':
      newGameBtn.innerText = 'Play again';
      winGameElement.style.display = "block";
      resultsElem.style.display = "block";
      field.style.display = "none";
    case 'notStarted':
    default:
      newGameElem.style.display = 'block';
      newRoundButton.style.display = 'none';
      pickElem.style.display = 'none';
      resultsElem.style.display = "block";
      field.style.display = "none";
  }
}

var playerPointsElem = document.getElementById('js-playerPoints'),
  playerNameElem = document.getElementById('js-playerName'),
  player2NameElem = document.getElementById('js-player2Name'),
  player2PointsElem = document.getElementById('js-player2Points');

function setGamePoints() {
  playerPointsElem.innerHTML = player1.score;
  player2PointsElem.innerHTML = player2.score;
}

function newGame() {
  player1.name = prompt('Please enter your name player-1', 'player-1 name');
  player2.name = prompt('Please enter your name player-2', 'player-2 name');
  if (player1.name) {
    player1.score = player2.score = 0;
    gameState = 'started';
    setGameElements();
    allPossibillities.css('display','inline-block');
    player1.pick = [0];
    player2.pick = [0];
    i = 0;
    $('.col p').empty();
    playerNameElem.innerHTML = player1.name;
    player2NameElem.innerHTML = player2.name;
    setGamePoints();
    changePlayer.innerHTML = player1.name + '- pick field number';
  }
}