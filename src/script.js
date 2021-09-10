// const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/03MSTYAna9kTLSUQIVGU/scores/';
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2mpfETqzjV8p0jlHEbyh/scores/';

const sendData = async () => {
  const newScoreObj = {
    user: document.getElementById('name-input').value,
    score: document.getElementById('score-input').value,
  };

  (await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newScoreObj),
  })).json();

  document.getElementById('name-input').value = '';
  document.getElementById('score-input').value = '';
};

const displayData = (list) => {
  const playerList = document.getElementById('score-list');

  while (playerList.firstChild) {
    playerList.removeChild(playerList.firstChild);
  }

  list.forEach((player) => {
    const eachPlayer = document.createElement('li');
    const playerNameHolder = document.createElement('span');
    const playerScoreHolder = document.createElement('span');

    eachPlayer.className = 'list-item';
    playerNameHolder.className = 'player';
    playerScoreHolder.className = 'score';

    playerNameHolder.textContent = player.user;
    playerScoreHolder.textContent = player.score;

    eachPlayer.append(playerNameHolder, playerScoreHolder);
    playerList.append(eachPlayer);
  });
};

const getData = async () => {
  const req = async () => (await fetch(baseUrl)).json();
  const res = await req();
  const scoreList = res.result;
  displayData(scoreList);
};

export {
  getData, sendData,
};