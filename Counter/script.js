const plusButton = document.querySelector('.plusButton');
const minusButton = document.querySelector('.minusButton');
const numberHolder = document.querySelector('.numberHolder');
const numberValue = document.querySelector('.numberValue');
const body = document.querySelector('.body');

let count = 0;

const worningAnimation = () => {
    if(count <= -8) numberHolder.classList.add('worningAnimation')

    if(count > -8 && numberHolder.classList.contains('worningAnimation'))
        numberHolder.classList.remove('worningAnimation')
}

plusButton.addEventListener('click', function(){ 
    count === 10 ? count = 0 : count++;    
    numberValue.innerHTML = count;
    worningAnimation();
});
minusButton.addEventListener('click', function(){
    count === -10 ? count = 0 : count--;
    numberValue.innerHTML = count;
    worningAnimation();
});
