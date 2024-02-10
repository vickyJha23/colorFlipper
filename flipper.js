console.log("Har Har Mahadev");
const colors = ['red', 'green', 'blue', 'maroon', 'pink', 'orange', 'purple', 'teal'];
const changeColorBtn = document.querySelector(".main-container > button");
const value = document.querySelector(".value");
console.log(value);
// arrow function ke concise tarika hain function ko create karne ka.
// arrow function ke pass khud ka argument object nahi hota hain
// arrow function ke pass this is value bhi nahi hoti and iski this ki value enclosing pe depend karti hain.
changeColorBtn.addEventListener("click", () => {
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    value.textContent = colors[randomNumber].toUpperCase();
})

function getRandomNumber(){
    // agar aapko rounding karte hue smallest possible number chahiye to us case me aap math.floor use kijiye.
     return Math.floor(Math.random() * colors.length);
}
