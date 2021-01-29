const operand = document.querySelectorAll('[data-number]');
const operatorUser = document.querySelectorAll('[data-operator]');
const delItem = document.querySelector('[data-delete]')  
const clearItem = document.querySelector('[data-clear]')
const equalOperator = document.querySelector('[data-equal-operator]')

//Variable Decliear
let currentOperand = ''
let previousOperand = ''
let operator = '';

// operand event
for(let i = 0; i<operand.length; i++){
    operand[i].addEventListener('click', function(){
        console.log(this);
        addNumber(operand[i].innerHTML)
    })
}


// operator event
for (let i = 0; i < operatorUser.length; i++) {
    operatorUser[i].addEventListener('click',function(){
        operatorInitialization(operatorUser[i].innerHTML)
    })
    
}


//delete item
delItem.addEventListener('click',deleteItemS)


// clear item all
clearItem.addEventListener('click',clear)

equalOperator.addEventListener('click',output)



// add number output area
function addNumber(number){
    currentOperand += number;  
    display(currentOperand);     
}


//operator value initialization
function operatorInitialization(initialization){
    if(currentOperand === '') return;
    previousOperand = currentOperand;
    currentOperand = '';
    operator += initialization; 
    previousDisplay(previousOperand+' '+operator);
    document.querySelector('[data-current-operand]').innerHTML =''
}


// clear all
function clear(){
    previousOperand = '';
    currentOperand = '';
    operator = '';
    previousDisplay('')
    document.querySelector('[data-current-operand]').innerHTML =''
}


// delete function 
function deleteItemS(){
    currentOperand = currentOperand.slice(0,-1);
    display(currentOperand);
}

//Display previousOperator
function previousDisplay(previousNumber){
    const previous = document.querySelector('[data-previous-operand]');
    previous.innerHTML = previousNumber; 
}

//Display number and result 
function display(number){
    const dataCurrentOperand = document.querySelector('[data-current-operand]');
    dataCurrentOperand.innerHTML = number; 
}

// equal out put function
function output(){
    currentOperand = parseFloat(currentOperand);
    previousOperand = parseFloat(previousOperand);
   let result;
    switch(operator){
        case '+':
            result =currentOperand + previousOperand
            console.log(typeof currentOperand , typeof previousOperand)
            clear();
            break;
        case '-':
            result = previousOperand - currentOperand;
            clear()
            break;
        case '÷':
            result = (previousOperand/ currentOperand).toFixed(1)
            clear()
            break;
        case '*':
            result =currentOperand * previousOperand
            clear()
            break;
        default:
            return;
    }
    display(result);
}





