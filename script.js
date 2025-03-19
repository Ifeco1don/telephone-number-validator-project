const checkBtn = document.getElementById("check-btn");
const userInput = document.getElementById("user-input");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
  const regexp = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

  if (!userInput.value) {
    alert("Please provide a phone number")
  } else if (regexp.test(userInput.value)) {
    resultsDiv.innerText = `Valid US number: ${userInput.value}`;
  } else {
    resultsDiv.innerText = `Invalid US number: ${userInput.value}`;
  }
});

clearBtn.addEventListener("click", () => {
  resultsDiv.innerText = "";
  userInput.value = "";
})