//let userNum = userInput.value;
let total = 0;
let x = userInput.value;
console.log(parseInt(x));

function operate(){

}
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


function addGrid(element, squares){
    element.style.setProperty('background-color', '#f5f5f5')
    for (let i=0; i < squares*squares; i++){
        let square = document.createElement('button')
        square.style.setProperty('border', '1px solid #4a5a72')
        square.style.setProperty('width',`calc(100%/${squares})`)
        square.style.setProperty('height',`calc(100%/${squares})`)
        square.style.setProperty('box-sizing', 'border-box')
        square.style.setProperty('aspect-ratio','1/1')
        square.style.setProperty('flex','1 1 1');
        square.style.setProperty('font-size', '33px')
        square.textContent = i+1;

       // square.style.setProperty('border-right', '1px solid #ffffff')
       // square.style.setProperty('border-top', '1px solid #4a5a72')  
       // square.style.setProperty('border-bottom', '1px solid #ffffff')  
        square.addEventListener('mouseover', () => {
        const rndCol = `rgb(${random(120)+80} ${random(115)} ${random(120)+80})`;
        square.style.backgroundColor = rndCol;     
    })
            canvas.appendChild(square)
    
};

}
    

addGrid(canvas, 3)