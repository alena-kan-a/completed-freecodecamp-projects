const checkWordButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultOutput = document.getElementById("result");

function cleanInputString(str) {
const regex = /\s/g;
return str.replace(regex, '');
};

function checkWord(word) {

};

checkWordButton.addEventListener("submit", checkWord);