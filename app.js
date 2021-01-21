// rng dice

const dice = (lo, hi, id) => {
  let roll = Math.floor(Math.random() * hi) + lo;
  document.getElementById("dice-d").innerHTML = roll;

  if (id === "hi") {
    return rollHi(roll);
  } else {
    return rollLo(roll);
  }
};

const rollHi = roll => {
  if (roll > 50) {
    document.getElementById("score-d").style.color = "#5ac18e";
    document.getElementById("score-d").innerHTML = "Winner";
  } else {
    document.getElementById("score-d").style.color = "#ff4040";
    document.getElementById("score-d").innerHTML = "Loser";
  }
};

const rollLo = roll => {
  if (roll < 50) {
    document.getElementById("score-d").style.color = "#5ac18e";
    document.getElementById("score-d").innerHTML = "Winner";
  } else {
    document.getElementById("score-d").style.color = "#ff4040";
    document.getElementById("score-d").innerHTML = "Loser";
  }
};
