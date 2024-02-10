console.log("Har Har Mahadev");
const hexColor = [0, 1, 2 ,3 ,4 ,5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const changeColorBtn = document.querySelector(".main-container > button");
const value = document.querySelector(".value");

// addEventListener ek method jo event ko sunne ke liye jata aur sunne ke baad yeh function ko call karta and baki ke saare process hote h...
changeColorBtn.addEventListener("click", () => {
      let color = "#";
      for(let i = 0; i < 6; i++){
             color = color + hexColor[getRandomNumber()];
      }
      document.body.style.backgroundColor = color;
      value.textContent = color;      
});

function getRandomNumber() {
      return Math.floor(Math.random() * hexColor.length);   
}