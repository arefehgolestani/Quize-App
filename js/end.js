const score = JSON.parse(localStorage.getItem("score"));
const scoreEle = document.querySelector("p");
const button = document.querySelector("button");
const input = document.querySelector("input");

scoreEle.innerText = score;

const saveHandler = () => {
  if (!input.value || !score) {
    alert("Invalid username or score!");
  } else {
    const finalScore = { name: input.value, score };
  }
};

button.addEventListener("click", saveHandler);
