'use strict';
const screen = document.getElementById('screen');
const deleteButton = document.getElementById('deleteAll');
const removeLast = document.getElementById('removeLast');
const calculateValue = document.getElementById('calculateValue');
let sizeCount = 0;
let arrayOfUserInputs = [];

const deleteAll = () => {
    screen.innerHTML = '';
    arrayOfUserInputs = [];
    sizeCount = 0;
}


deleteButton.addEventListener('click', deleteAll);

removeLast.addEventListener('click', function(){
    screen.innerHTML = screen.textContent.slice(0,-1);
    sizeCount--;
});

calculateValue.addEventListener('click', function(){
    let count = 0;
    const lastUserInput = Number(screen.textContent.slice(-sizeCount));
   
    if(!Number(arrayOfUserInputs.slice(-1)) && !Number(lastUserInput)){
        alert("Wrong input");
        deleteAll();
    }
    arrayOfUserInputs.push(lastUserInput);

    sizeCount = 0;

    do{
        
        if(arrayOfUserInputs[count] === '*'){
            screen.innerHTML = arrayOfUserInputs[count] = arrayOfUserInputs[count-1] * arrayOfUserInputs[count+1]
            arrayOfUserInputs.splice(count-1, 1);
            arrayOfUserInputs.splice(count, 1 );
            sizeCount = screen.textContent.length;    
            count = 0;

        }else if(arrayOfUserInputs[count] === '/'){ 
            screen.innerHTML = arrayOfUserInputs[count] = arrayOfUserInputs[count-1] / arrayOfUserInputs[count+1]
            arrayOfUserInputs;
            arrayOfUserInputs.splice(count-1, 1);
            arrayOfUserInputs.splice(count, 1);
            sizeCount = screen.textContent.length;  
            count = 0;

        }else if(arrayOfUserInputs[count] === '+' && !arrayOfUserInputs.includes('*') && !arrayOfUserInputs.includes('/')){ 
            screen.innerHTML = arrayOfUserInputs[count] = arrayOfUserInputs[count-1] + arrayOfUserInputs[count+1]
            arrayOfUserInputs.splice(count-1, 1);
            arrayOfUserInputs.splice(count, 1 );
            sizeCount = screen.textContent.length;
            count = 0;

        }else if(arrayOfUserInputs[count] === '-' && !arrayOfUserInputs.includes('*') && !arrayOfUserInputs.includes('/')){ 
            screen.innerHTML = arrayOfUserInputs[count] = arrayOfUserInputs[count-1] - arrayOfUserInputs[count+1]
            arrayOfUserInputs.splice(count-1, 1);
            arrayOfUserInputs.splice(count, 1);
            sizeCount = screen.textContent.length;  
            count = 0;

        }
        count++;
    }while(arrayOfUserInputs.length > 1);

    arrayOfUserInputs = [];
});

const takeValue = (number) => {
    sizeCount++;
    const textContent = screen.textContent;
   
    if (number.value === "+" || number.value === "-" || number.value === "*" || number.value === "/") {

        arrayOfUserInputs.push(Number(textContent.slice(-sizeCount+1)));
        arrayOfUserInputs.push(number.value);
        console.log(arrayOfUserInputs);
        sizeCount = 0;
    }
      
    screen.innerHTML += number.value
};