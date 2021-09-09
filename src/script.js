export default caller = () => {
  const req = new XMLHttpRequest();
  req.open(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/E4PFPSfZiBD5F1zwYrKN/scores/"
  );
  req.send();

  req.addEventListener("load", () => {
    console.log(this.responseText);
  });
};
