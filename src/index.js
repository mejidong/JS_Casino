const maxNum = document.querySelector("#maxNumber");
const choseNum = document.querySelector("#choseNumber");
const gameForm = document.querySelector("#game");

const compareResult = document.querySelector("#compareNumber");
const allResult = document.querySelector("#gameResult");

function submitNum(event) {
  event.preventDefault();
  let newMaxnum = maxNum.value;
  let newChosenum = choseNum.value;

  if (newMaxnum === "" || newChosenum === "") {
    alert("Please enter all number.");
  } else if (newMaxnum < newChosenum) {
    alert("Maximum number cannot be less than the chose number.");
  } else {
    getResult(newMaxnum, newChosenum);
  }
}

function getResult(maxnum, chosenum) {
  let machineNum = Math.ceil(Math.random() * (parseInt(maxnum) + 1) - 1);
  compareResult.innerText = `You chose: ${chosenum}, the machine chose: ${machineNum}.`;
  if (chosenum === machineNum) {
    allResult.innerText = `You won!`;
  } else if (chosenum !== machineNum) {
    allResult.innerText = `You lost!`;
  }
}

gameForm.addEventListener("submit", submitNum);
