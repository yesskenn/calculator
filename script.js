//let userNum = userInput.value;
let total = 0;

function operate(x,y){

    plusSign.addEventListener("click", () => add(x,y));
    minusSign.addEventListener("click", () => subtract(x,y));
    timesSign.addEventListener("click", () => multiply(x,y));
    divideSign.addEventListener("click", () => {
            
            userInput.value += numValue;

        })
    }
    /*
if (plusSign === true){
    add(x,y)
} else if (minusSign === true){
    subtract(x,y)
} else if (timesSign === true){
    multiply(x,y)
} else if (divideSign === true){
    divide(x,y)
    */

function add(x,y){
     return x + y;
//return total += num;
}
function subtract(x,y){
    return x - y;
}

function multiply(x,y){
    return x * y;
}

function divide(x, y){
    if (x === 0 || y === 0){
        return 'Error';
    } else {
        return x/y;
    }

}

const canvas = document.getElementById('grid');
canvas.style.setProperty('margin', '0 auto');
canvas.style.setProperty('padding', '1%');
canvas.style.setProperty('display', 'flex');
canvas.style.setProperty('flex-wrap','wrap');
canvas.style.setProperty('flex-direction','row');
canvas.style.setProperty('justify-content','space-between')
canvas.style.setProperty('width', '633px');
canvas.style.setProperty('border', 'solid 1px black');


const operators = document.getElementById("operators");
/* OPERATOR SYMBOLS */ 
const plusSign = document.createElement("button");
const minusSign = document.createElement("button");
const timesSign = document.createElement("button");
const divideSign = document.createElement("button");
plusSign.textContent = "+";
minusSign.textContent = "−";
timesSign.textContent = "×";
divideSign.textContent="÷";
operators.appendChild(plusSign);
operators.appendChild(minusSign);
operators.appendChild(timesSign);
operators.appendChild(divideSign);

// clear button
const enter = document.createElement("button");
enter.id = "enterBtn";
enter.textContent = "ENTER";
operators.appendChild(enter);

const clear = document.createElement("button");
clear.id = "clearBtn";
clear.textContent = "CLEAR";
operators.prepend(clear);

clear.addEventListener("click", () => {
    userInput.value='';
    });

let square;
let text = '0';
userInput.value = parseInt(text);

function addGrid(element, squares){
    element.style.setProperty('background-color', '#f5f5f5')
    for (let i=0; i < squares*squares; i++){
        square = document.createElement('button')
        square.style.setProperty('border', '1px solid #4a5a72')
        square.style.setProperty('width',`calc(100%/${squares})`)
        square.style.setProperty('height',`calc(100%/${squares})`)
        square.style.setProperty('box-sizing', 'border-box')
        square.style.setProperty('aspect-ratio','1/1')
        square.style.setProperty('flex','1 1 1');
        square.style.setProperty('font-size', '33px')
        square.textContent = i+1;
        square.addEventListener("click", () => {
                userInput.value='';

            let numValue = parseInt(i+1); 
            userInput.value += numValue;

        })

       // square.style.setProperty('border-right', '1px solid #ffffff')
       // square.style.setProperty('border-top', '1px solid #4a5a72')  
       // square.style.setProperty('border-bottom', '1px solid #ffffff')  
       /* square.addEventListener('mouseover', () => {
        const rndCol = `rgb(${random(120)+80} ${random(115)} ${random(120)+80})`;
        square.style.backgroundColor = rndCol;     
    })*/
            canvas.appendChild(square)
    
};

}
    

addGrid(canvas, 3)