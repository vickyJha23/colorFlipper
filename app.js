const calculate = (n1, operator, n2) => {
       let firstNum = parseFloat(n1);
       let secondNum = parseFloat(n2);
       let result = "";
       if(operator === "add"){
            result = firstNum + secondNum;
            return result;          
       }
       if(operator === "substract"){
             result = firstNum - secondNum;
             return result;
       }
       if(operator === "multiply"){
            result = firstNum * secondNum;
            return result;
       }
       if(operator === "divide"){
           result = firstNum / secondNum;
           return result;
       }
       return "No Number";
}
const calculator = document.querySelector(".calculator");
const calc_display = calculator.querySelector(".calculator_display");
const keys = calculator.querySelector(".calculator_keys");
//ek javascript ka technique jise use karke ek parent element par event listeners attach karke us element ke child elements par hone waale events ko handle kar sakte hain.
//Event delegation is a programming technique in which you assign a single event listener to a common ancestor (usually a parent) of multiple elements, rather than attaching individual event listeners to each specific element. This technique takes advantage of the event bubbling mechanism in the Document Object Model (DOM) of browsers.
keys.addEventListener("click", (e) => {
      if(e.target.matches("button")){
            const key = e.target;
            const keyContent = key.textContent;
            const action = key.dataset.action;
            const displayedNum = calc_display.textContent;
            const previousKeyType = calculator.dataset.previousKeyType;
            Array.from(key.parentNode.children).forEach((item) => {
                  item.classList.remove("is-depressed");
            });
            if(!action){
                if(displayedNum === "0" || previousKeyType === "operator"){
                       calc_display.textContent = keyContent;
                }
                else{
                    calc_display.textContent = displayedNum + keyContent;
                }
                calculator.dataset.previousKeyType = "number";
            }  
           if(action === "clear"){
                calc_display.textContent = "0";    
           } 
           if(action === "decimal"){
                 if(!displayedNum.includes(".")){
                      calc_display.textContent = displayedNum + ".";  
                 } 
                 else if(previousKeyType === "operator" || previousKeyType === "calculate"){
                       calc_display.textContent = "0."
                 }
              calculator.dataset.previousKeyType = "decimal"    
           }
           if(action === "add" || action === "substract" || action === "multiply" || action === "divide"){
                key.classList.add("is-depressed");
                calculator.dataset.previousKeyType = "operator";
                calculator.dataset.firstValue = displayedNum;
                calculator.dataset.operator = action;         
           }
           if(action === "calculate"){
                const firstValue = calculator.dataset.firstValue;
                const operator = calculator.dataset.operator;
                const secondValue = displayedNum;
                calc_display.textContent = calculate(firstValue, operator, secondValue);
                calculator.dataset.previousKeyType = "calculate";
           }
      }
});