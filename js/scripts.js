var changePlayer = $('#js-change-player'),
  newGameElem = $('#js-newGameElement'),
  pickElem = $('#js-playerPickElement'),
  resultsElem = $('#js-resultsTableElement'),
  winGameElement = $('#js-winGameElement'),
  field = $('#js-field'),
  picks = $("#js-playerPickElement button"),
  allPossibillities = $("#js-playerPickElement button"),
  i = 1,
  newGameBtn = $('#js-newGameButton'),
  newRoundButton = $('#js-new-round'),
  player1PointsElem = $('#js-playerPoints'),
  player1NameElem = $('#js-playerName'),
  player2NameElem = $('#js-player2Name'),
  player2PointsElem = $('#js-player2Points');

setGameElements();
field.css('display', 'block');
winGameElement.css('display', 'none');
newGameBtn.click(newGame);
newRoundButton.click(newRound);

picks.each(function (index, element) {
  $(element).click(function () { 
  var allFields = $("#js-field .col");
  var p = index;
  allPossibillities[p].style.display = 'none';
  round(index);
  i = i + 1;
    function round (a) {
      if ( i % 2 == 0 && i < 8 ) {
        changePlayer.text(player2.name + ' - pick field number');
        player1.pick.push(a + 1);
        var columns = $('.col p');
        var sign = 'o';
        columns[a].append(sign);
        end();
      }
      else if ( i % 2 == 1 && i < 8 ) {
        changePlayer.text(player1.name + ' - pick field number');
        player2.pick.push(a + 1);
        var columns = $('.col p');
        var sign = 'x';
        columns[a].append(sign);
        end();
      }
      else {
        changePlayer.text('Game over. Nobody wins');
        player1.pick.push(a + 1);
        var columns = $('.col p');
        var but = 'o';
        columns[a].append(but);
        end();
        gameState = 'ended';
        newRoundButton.css('display', 'block')
		newGameElem.css('display', 'block');
      };
      function end () {
        if ( (player1.pick.indexOf(1) > 0 && player1.pick.indexOf(2) > 0 && player1.pick.indexOf(3) > 0) || (player1.pick.indexOf(4) > 0 && player1.pick.indexOf(5) > 0 && player1.pick.indexOf(6) > 0) || (player1.pick.indexOf(7) > 0 && player1.pick.indexOf(8) > 0 && player1.pick.indexOf(9) > 0) || (player1.pick.indexOf(1) > 0 && player1.pick.indexOf(4) > 0 && player1.pick.indexOf(7) > 0) || (player1.pick.indexOf(2) > 0 && player1.pick.indexOf(5) > 0 && player1.pick.indexOf(8) > 0) || (player1.pick.indexOf(3) > 0 && player1.pick.indexOf(6) > 0 && player1.pick.indexOf(9) > 0) || (player1.pick.indexOf(1) > 0 && player1.pick.indexOf(5) > 0 && player1.pick.indexOf(9) > 0) || (player1.pick.indexOf(3) > 0 && player1.pick.indexOf(5) > 0 && player1.pick.indexOf(7) > 0) ) {
          changePlayer.text('Game over. ' + player1.name + ' wins');
          allPossibillities.css('display','none');
          setGameElements();
          player1.score++;
          setGamePoints();
          newGameElem.css('display', 'block');
          if (player1.score == 3) {
            gameState = 'ended';
            setGameElements();
            alert(player1.name + 'Win!');
          };
          newRoundButton.css('display', 'block')
		  newGameElem.css('display', 'block');
        }
        else if	( (player2.pick.indexOf(1) > 0 && player2.pick.indexOf(2) > 0 && player2.pick.indexOf(3) > 0) || (player2.pick.indexOf(4) > 0 && player2.pick.indexOf(5) > 0 && player2.pick.indexOf(6) > 0) || (player2.pick.indexOf(7) > 0 && player2.pick.indexOf(8) > 0 && player2.pick.indexOf(9) > 0) || (player2.pick.indexOf(1) > 0 && player2.pick.indexOf(4) > 0 && player2.pick.indexOf(7) > 0) || (player2.pick.indexOf(2) > 0 && player2.pick.indexOf(5) > 0 && player2.pick.indexOf(8) > 0) || (player2.pick.indexOf(3) > 0 && player2.pick.indexOf(6) > 0 && player2.pick.indexOf(9) > 0) || (player2.pick.indexOf(1) > 0 && player2.pick.indexOf(5) > 0 && player2.pick.indexOf(9) > 0) || (player2.pick.indexOf(3) > 0 && player2.pick.indexOf(5) > 0 && player2.pick.indexOf(7) > 0) ) {
          changePlayer.text('Game over. ' + player2.name + ' wins');
          allPossibillities.css('display','none');
          setGameElements();
          player2.score++;
          setGamePoints();
          newGameElem.css('display', 'block');
          if (player2.score == 3) {
            gameState = 'ended';
            setGameElements();
            alert(player2.name + 'Win!');
          };
          newRoundButton.css('display', 'block')
		  newGameElem.css('display', 'block');
        };
      };
    };
  });
});

function newRound() {
  $('.col p').empty();
  gameState = 'started';
  setGameElements();
  newGameElem.css('display', 'none');
  allPossibillities.css('display','inline-block');
  player1.pick = [0];
  player2.pick = [0];
  i = 0;
  changePlayer.text(player1.name + ' - pick field number');
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
      newGameElem.css('display', 'none');
      pickElem.css('display', 'block');
      resultsElem.css('display', 'block');
      winGameElement.css('display', 'none');
      newRoundButton.css('display', 'none');
      field.css('display', 'block');
      break;
    case 'ended':
      newGameBtn.text('Play again');
      winGameElement.css('display', 'block');
      resultsElem.css('display', 'block');
      field.css('display', 'none');
    case 'notStarted':
    default:
      newGameElem.css('display', 'block');
      newRoundButton.css('display', 'none');
      pickElem.css('display', 'none');
      resultsElem.css('display', 'none');
      field.css('display', 'none');
  }
}

function setGamePoints() {
  player1PointsElem.text(player1.score);
  player2PointsElem.text(player2.score);
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
    player1NameElem.text(player1.name);
    player2NameElem.text(player2.name);
    setGamePoints();
    changePlayer.text(player1.name + ' - pick field number');
  }
}
