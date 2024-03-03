const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultOutput = document.getElementById("result");

function cleanInputString(str) {
  const regex = /[^A-Za-z0-9]/gi;
  return str.replace(regex, '').toLowerCase();
};

function isPalindrome(str) {
  const cleanString = cleanInputString(str);
  const reverseString = [...cleanString].reverse().join('');
    if (cleanString !== reverseString) {
      return false;
    }
    return true;
}

function checkString(str) {
  if (str === '') {
    alert('Please input a value');
    return;
  }

  resultOutput.classList.remove('hide');

  let HTMLString = `<p><span class="emphasized-text">${str}</span> is `;
  if(isPalindrome(str)) {
    HTMLString += `a palindrome. Hooray!</p>`;
  } else {
    HTMLString += `not a palindrome. Try again!</p>`;
  }
    return resultOutput.innerHTML = HTMLString;
  };

checkButton.addEventListener("click", () => {
    checkString(textInput.value);
});
checkWordButton.addEventListener("click", () => {
    checkWord(textInput.value);
});