import './styles.css';
// import caller from './script.js'

const scores = [];

document.getElementById('submit').addEventListener('click', () => {
  getData();
});

const getData = async() => {
  const req = (await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/03MSTYAna9kTLSUQIVGU/scores/')).json();
  const res = await req;
  
  const scoreList = res.result;
  const pageList = document.getElementById('score-list');
  scoreList.forEach(user => {
    const player = Object.values(user);
    // player.sort((a, b) => a - b)
    pageList.append(player[0], player[1]);
  });
};

