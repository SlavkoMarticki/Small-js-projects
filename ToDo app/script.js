'use strict';

const newToDoNewWindow = document.querySelector('.blackBackground');
const newToDoExitButton = document.querySelector('.exitButton');
const addNewContainerButton = document.querySelector('.addNewContainerButton');
const saveButton = document.querySelector('.saveButton');
const titleToDo = document.getElementById('title');
const textToDo = document.getElementById('text');
const numberOfUnfinished = document.querySelector('.numberOfUnfinished');
const elementHolder = document.querySelector('.elementHolder');
const seeInformation = document.querySelector('.seeInformation');
const infoExitButton = document.querySelector('.infoExitButton');
const informationTitleP = document.querySelector('.informationTitleP');
const informationTextP = document.querySelector('.informationTextP');
const Writefinished = document.querySelector('#finished');
const numberOfFinished = document.querySelector('.numberOfFinished');
const editSaveButton = document.querySelector('.saveButtonEdit');
const editToDo = document.querySelector('.edit');
const editTitle = document.querySelector('#titleEdit');
const editText = document.querySelector('#textEdit');



infoExitButton.addEventListener('click', function(){
    seeInformation.classList.add("hidden");
});
addNewContainerButton.addEventListener("click",function(){
    newToDoNewWindow.classList.remove("hidden");
});
newToDoExitButton.addEventListener("click",function(){
    newToDoNewWindow.classList.add("hidden");
});

const saveValue = (title, text ) => {
    if(title === "" || text === ""){
        alert("You need to insert value to all fiels")
    }else{
        localStorage.setItem(localStorage.length, JSON.stringify([title, text, false]));
        newToDoNewWindow.classList.add("hidden");
        titleToDo.value = "";
        textToDo.value = "";
        printUnfinished();
    }
}

saveButton.addEventListener("click",function(){

    const title = titleToDo.value;
    const text = textToDo.value;
    saveValue(title, text);
   
})
const writeNumOfFinished = () => {
    let count = 0;

    for (let i = 0; i < localStorage.length; i++) {
        if (JSON.parse(localStorage.getItem(i) === null)) {
            count++;
        }
        if(JSON.parse(localStorage.getItem(i) != null)){
            const [title, text, status] = JSON.parse(localStorage.getItem(i));
            if(status === true) count++;
        }      
    }
    numberOfFinished.textContent = count;
}

const writeNumberOfUnfinished = () => {
    let count = 0;

    for (let i = 0; i < localStorage.length; i++) {
        if (JSON.parse(localStorage.getItem(i) === null)) {
            count++;
        }
        if(JSON.parse(localStorage.getItem(i) != null)){
            const [title, text, status] = JSON.parse(localStorage.getItem(i));
            if(status === false) {count++;}
        }      
    }
    numberOfUnfinished.textContent = count;
}
const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key.value);
    printUnfinished();
    printFinished();
    writeNumberOfUnfinished();
    writeNumOfFinished();
    
};
/**
 * 1. Dva puta se ponavlja alert("hello from " + key.value)
 * prvi put sa losom vrednosti drugi put sa dobrom vrednosti
 */
const edit = (key) => {
 
    
    const [title, text, status] = JSON.parse(localStorage.getItem(key.value));
    alert(`kljuc: ${key.value}`)
    editTitle.value = title;
    editText.value = text;
    editToDo.classList.remove("hidden");
    let staraVrednost = key.value
    

    editSaveButton.addEventListener('click', function(){
        alert(staraVrednost)
        const convertToJSON = JSON.stringify([editTitle.value, editText.value, status]);
        localStorage.removeItem(key.value);
        localStorage.setItem(key.value, convertToJSON);
        printUnfinished();
        alert("hello from " + key.value)
        editToDo.classList.add("hidden");
    })

};

const seeToDoInformation = (key) => {
    seeInformation.classList.remove("hidden");
    const toDoFromLocalStorage = localStorage.getItem(key);
    const [name,text]= JSON.parse(toDoFromLocalStorage);

    informationTitleP.innerHTML = name;
    informationTextP.innerHTML = text;
}
const finishCheckbox = (key) => {
    const [title ,text , finished] = JSON.parse(localStorage.getItem(key));
    if(finished === false){
        localStorage.setItem(key, JSON.stringify([title, text, true]));
    }else{
        localStorage.setItem(key, JSON.stringify([title, text, false]));
    }
    writeNumOfFinished();
    printUnfinished();
    printFinished();
}
const printFinished = () => {
    writeNumOfFinished();
    Writefinished.innerHTML = '';
    for(let i = 0; i < localStorage.length ; i++){
        const getKey = localStorage.key(i);
        const [title ,text , finished] = JSON.parse(localStorage.getItem(getKey));
        if(finished === true){
            Writefinished.innerHTML +=
            `
            <div class="listHolder">
                <div class="listHolderCheckbox"><input type="checkbox" onclick="finishCheckbox(${getKey})"></div>
                <div class="listHolderP"><p onclick="seeToDoInformation(${getKey})">${title}</p></div>
                <div class="listHolderButton"><button value="${getKey}" onclick="(removeFromLocalStorage(this))">x</button></div>
            </div>
            `;    
        }
         
    }
}
const printUnfinished = () => {
    writeNumberOfUnfinished();
    elementHolder.innerHTML = '';
    for(let i = 0; i < localStorage.length ; i++){
        const getKey = localStorage.key(i);
        const [title ,text , finished] = JSON.parse(localStorage.getItem(getKey));
        if(finished === false){
            elementHolder.innerHTML +=
            `
            <div class="listHolder">
                <div class="listHolderCheckbox"><input type="checkbox"  onclick="finishCheckbox(${getKey})"></div>
                <div class="listHolderP"><p onclick="seeToDoInformation(${getKey})">${title}</p></div>
                <div class="listHolderButton"><button value="${getKey}" onclick="(edit(this))">E</button></div>
                <div class="listHolderButton"><button value="${getKey}" onclick="(removeFromLocalStorage(this))">x</button></div>
            </div>
            `;    
        }
         
    }
}
writeNumberOfUnfinished();
printUnfinished();
printFinished();




