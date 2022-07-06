const result = document.querySelector(".result");
const C = document.querySelector(".C");
const del = document.querySelector(".del-btn");
const percentage = document.querySelector(".percentage-btn");
const one = document.querySelector(".one-btn");
const two = document.querySelector(".two-btn");
const three = document.querySelector(".three-btn");
const four = document.querySelector(".four-btn");
const five = document.querySelector(".five-btn");
const six = document.querySelector(".six-btn");
const seven = document.querySelector(".seven-btn");
const eight = document.querySelector(".eight-btn");
const nine = document.querySelector(".nine-btn");
const zero = document.querySelector(".zero-btn");
const mult = document.querySelector(".mult-btn");
const devision = document.querySelector(".devide-btn");
const dot = document.querySelector(".dot-btn");
const equal = document.querySelector(".equal-btn");
const minus = document.querySelector(".minus-btn");
const plus = document.querySelector(".plus-btn");

const digits = [0,1,2,3,4,5,6,7,8,9];
let currentEquation = '0';

C.onclick = function (element){
    if (element == dot){
        console.log("works");
    }
}


document.addEventListener("click", (element) => {

    let clickedElement = element.path[0].innerHTML; 

    if (clickedElement == 'C'){
        currentEquation = '0';

    }else if (clickedElement == '⬅️') {
        if (result.textContent.length > 1) {
            currentEquation = result.textContent.slice(0, result.textContent.length - 1);

        }else if (result.textContent.length == 1 && result.textContent != '0') {
            currentEquation = '0';
        }
        

    }else if (clickedElement in digits){
        if (clickedElement == '0' && result.textContent == '0'){
            currentEquation = '0';

        }else if (result.textContent == '0' && clickedElement != '0'){
            currentEquation = clickedElement;

        }else{
            currentEquation += clickedElement;
        }
    }

    result.innerHTML = currentEquation;
    
})