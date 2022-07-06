const result = document.querySelector(".result");

const digits = [0,1,2,3,4,5,6,7,8,9];
let currentEquation = '0';


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
        // Do not print a bunch of 0's in a row
        if (clickedElement == '0' && result.textContent == '0'){
            currentEquation = '0';

        // Substitute 0 with a number if there is only 1 digit, and it's 0
        }else if (result.textContent == '0' && clickedElement != '0'){
            currentEquation = clickedElement;

        }else{
            currentEquation += clickedElement;
        }

    }else if (clickedElement == '.' &! result.textContent.includes('.')){
        currentEquation += clickedElement;

    }else if (clickedElement == '+' && result.textContent[result.textContent.length-1] != '+') {
        currentEquation += clickedElement;
    
    }else if (clickedElement == 'x' && result.textContent[result.textContent.length-1] != 'x') {
        currentEquation += clickedElement;

    }else if (clickedElement == '='){
        if (result.textContent.includes('+')) {
            currentEquation = Add(result.textContent.split('+'));

        }else if (result.textContent.includes('x')){
            currentEquation = Multiply(result.textContent.split('x'));
        }

    }else if (clickedElement == 'More'){
        window.alert('Not today😅');
    }

    result.innerHTML = currentEquation;
    
})



function Add(numbers){
    let sum = 0;
    for (let i of numbers) {
        sum += Number(i)
    }
    return sum;
}

function Multiply(numbers){
    let total = 1;
    for (let i of numbers) {
        total *= Number(i)
    }

    return total;
}

function Substract(numbers){
    let total = numbers[0];

    for (let i of numbers){
        total -= Number(i);
    }
    return total;
}