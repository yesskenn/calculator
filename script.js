//let userNum = userInput.value;
let total = 0;
let x;
let y;

function operate(x,y){

    plusSign.addEventListener("click", () => function() {
    userInput.value += '+';
});

 minusSign.addEventListener("click", () => subtract(x,y));
    timesSign.addEventListener("click", () => multiply(x,y));
    divideSign.addEventListener("click", () => divide(x,y));


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
    total = x+y;
    console.log(total);
    return total;

}
function subtract(x,y){
    total = x - y;
    console.log(total);
    return total;
}

function multiply(x,y){
    total = x * y;
    console.log(total);
    return total;
}

function divide(x, y){
    if (x === 0 || y === 0){
        return 'Error';
    } else {
        console.log(x/y);
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

 plusSign.addEventListener("click", () => {
    userInput.value += "+";
});


 minusSign.addEventListener("click", () => {
    userInput.value += "-";
});


 divideSign.addEventListener("click", () => {
    userInput.value += "/";
});


 timesSign.addEventListener("click", () => {
    userInput.value += "*";
});
        

// enter button
const enter = document.getElementById("enterBtn");
enter.id = "enterBtn";
enter.textContent = "ENTER";
operators.appendChild(enter);


//ONCLICK THEN DO PARSE NUMBERS AND CALCULATE


const testParagraph = document.getElementById("test");
const paragraphTest = document.createElement("p");


const button = document.getElementById('enterBtn');
button.addEventListener('click', () => {
    splitTheString();
});

userInput.addEventListener('keydown', function(event){
    if (event.key === "Enter"){
        splitTheString();
        event.preventDefault();
        //button.click();
    }
});

//parse user response / before symbol and after symbol
function splitTheString(){
 // Capture the value from the input field
    let input = userInput.value;
    let parts = input.split(/[+-/*]/);
    const left = parseFloat(parts[0].trim());
    const right = parseFloat(parts[1].trim());

    if(input.includes("+")){
        add(left, right);
    }
    if(input.includes("-")){
        subtract(left, right);
    }
    if(input.includes("/")){
        divide(left, right);
    }
    if(input.includes("*")){
        multiply(left, right);
    }


  //add it to new paragraph
  paragraphTest.textContent = total;
  testParagraph.appendChild(paragraphTest);

};




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

let numValue;


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
        square.style.setProperty('font-size', '66px')
        square.textContent = i+1;
        square.addEventListener("click", () => {
           // also add onkeydown

            
            numValue = parseInt(i+1); 
            //userInput.value='';
            userInput.value += `${numValue}`;

          

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

//const test paragraph with browser console stuff
