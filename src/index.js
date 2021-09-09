import './styles.css';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/03MSTYAna9kTLSUQIVGU/scores/';

const getData = async () => {
  const req = (await fetch(baseUrl)).json();
  const res = await req;

  const scoreList = res.result;
  const pageList = document.getElementById('score-list');
  scoreList.forEach((user) => {
    const player = Object.values(user);
    // player.sort((a, b) => a - b)
    pageList.append(player[0], player[1]);
  });
};

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

document.getElementById('submit').addEventListener('click', () => sendData());

window.addEventListener('load', () => getData());