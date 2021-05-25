const input = document.getElementById("input");
const button = document.getElementById("button");
const display = document.getElementById("display");
const resultDisplay = document.getElementById("result");

function handleSubmit(e) {
  e.preventDefault();
  button.textContent = "Loading ...";
  button.disabled = true;

  fetch(`/find`, {
    method: "POST",
    body: JSON.stringify({ num: input.value }),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((result) => {
      button.textContent = "Submit";
      button.disabled = false;
      console.log("result", result);
      display.style.display = "block";
      resultDisplay.textContent = result.primeNumber;
    });
}

const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
