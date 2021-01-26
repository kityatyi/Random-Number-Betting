// rng dice

const dice = (lo, hi, id) => {
  let roll = Math.floor(Math.random() * hi) + lo;
  document.getElementById("dice-d").innerHTML = roll;

  if (id === "hi") {
    return rollHi(roll);
  } else if (id === "lo") {
    return rollLo(roll);
  } else if (id === "odd") {
    return rollOdd(roll);
  } else {
    return rollEven(roll);
  }
};

const rollHi = roll => {
  let status = "";
  if (roll > 50) {
    document.getElementById("score-d").style.color = "#5ac18e";
    document.getElementById("score-d").innerHTML = "Winner";
    status = "winner";
  } else {
    document.getElementById("score-d").style.color = "#ff4040";
    document.getElementById("score-d").innerHTML = "Loser";
    status = "loser";
  }

  if (status === winner) {
  } else {
  }
};

const rollLo = roll => {
  if (roll < 50) {
    let status = "";
    document.getElementById("score-d").style.color = "#5ac18e";
    document.getElementById("score-d").innerHTML = "Winner";
    status = "winner";
  } else {
    document.getElementById("score-d").style.color = "#ff4040";
    document.getElementById("score-d").innerHTML = "Loser";
    status = "loser";
  }
  if (status === winner) {
  } else {
  }
};

const rollOdd = roll => {
  if (roll % 2 === 1) {
    document.getElementById("score-d").style.color = "#5ac18e";
    document.getElementById("score-d").innerHTML = "Winner";
    status = "winner";
  } else {
    document.getElementById("score-d").style.color = "#ff4040";
    document.getElementById("score-d").innerHTML = "Loser";
    status = "loser";
  }
};

const rollEven = roll => {
  if (roll % 2 === 0) {
    document.getElementById("score-d").style.color = "#5ac18e";
    document.getElementById("score-d").innerHTML = "Winner";
    status = "winner";
  } else {
    document.getElementById("score-d").style.color = "#ff4040";
    document.getElementById("score-d").innerHTML = "Loser";
    status = "loser";
  }
};
