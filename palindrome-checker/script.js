const checkWordButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultOutput = document.getElementById("result");

function cleanInputString(str) {
  const regex = /\s\d\W/gi;
  return str.replace(regex, '').toLowerCase();
};

function checkWord (word) {
  const wordToCheck = word;
  
  if (word === '') {
    alert('Please input a value');
    return;
  }
  
  const cleanString = cleanInputString(word);
  const reverseWord = [...cleanString].reverse().join('');
  if (cleanString === reverseWord) {
    const HTMLString = `<p>Your word <span class="emphasized-text">${wordToCheck}</span> is a palindrome. Hooray!</p>`;
    resultOutput.classList.remove('hide');
    return resultOutput.innerHTML = HTMLString;
  } else if (cleanString !== reverseWord) {
    const HTMLString = `<p>Your word <span class="emphasized-text">${wordToCheck}</span> is not a palindrome. Try again!</p>`;
    resultOutput.classList.remove('hide');
    return resultOutput.innerHTML = HTMLString;
  };
};

checkWordButton.addEventListener("click", () => {
    checkWord(textInput.value);
});