const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const result1El = document.getElementById("result-1")
const result2El = document.getElementById("result-2")
let passwordLength = 15

function getRandomCharacter(){
let randomChar =Math.floor(Math.random() *characters.length)
return characters[randomChar]
}

function generateRandomPasswords() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++){
        randomPassword += getRandomCharacter()
    }
    result1El.textContent =randomPassword
    result2El.textContent = randomPassword
    return randomPassword
}
const copyToClipboard = str => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(str);
    return Promise.reject('The Clipboard API is not available.');
  };

