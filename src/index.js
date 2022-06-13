let maxNum = document.querySelector("#maxNumber");
let choseNum = document.querySelector("#choseNumber");
const gameForm = document.querySelector("#game");

const compareResult = document.querySelector("#compareNumber");
const allResult = document.querySelector("#gameResult");

function submitNum(event) {
  event.preventDefault();
  const newMaxnum = maxNum.value;
  const newChosenum = choseNum.value;
  const intMax = parseInt(newMaxnum, 10);
  const intChose = parseInt(newChosenum, 10);
  if (newMaxnum === "" || newChosenum === "") {
    alert("Please enter all number.");
  } else if (intMax < intChose) {
    alert("Maximum number cannot be less than the chose number.");
  } else {
    getResult(intMax, intChose);
  }
}

function getResult(maxnum, chosenum) {
  let machineNum = Math.ceil(Math.random() * (parseInt(maxnum, 10) + 1) - 1);
  compareResult.innerText = `You chose: ${chosenum}, the machine chose: ${machineNum}.`;
  if (parseInt(chosenum, 10) === machineNum) {
    allResult.innerText = `You won!`;
  } else if (parseInt(chosenum, 10) !== machineNum) {
    allResult.innerText = `You lost!`;
  }
}

gameForm.addEventListener("submit", submitNum);
