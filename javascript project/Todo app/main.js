const input = document.querySelector('.todo_part input');
const btn = document.querySelector('.todo_part button');
// const delIcon = document.querySelector('.todo_list');
const todoList = document.querySelector('.todo_list');
const clear = document.querySelector('.footer button');
const pending = document.querySelector('.pending');

// showList();

//! if user click on the plus button then.....
btn.onclick = () => {

    let userInput = input.value;
    let getLocalStorage = localStorage.getItem("new todo");//getting local storage for multiple todo list
    if (getLocalStorage == null) {
        emptyArr = [];
    }
    else {
        emptyArr = JSON.parse(getLocalStorage);// converting json string to js object

    }
    emptyArr.push(userInput);//adding the data entered by user
    localStorage.setItem("new todo", JSON.stringify(emptyArr));
    showList();
}
//! after clicking plus button list should show in listed form
function showList() {
    let getLocalStorage = localStorage.getItem("new todo");
    if (getLocalStorage == null) {
        emptyArr = [];
    }
    else {
        emptyArr = JSON.parse(getLocalStorage);
    }
    pending.textContent = emptyArr.length;
    let newList = "";
    emptyArr.forEach((element, index) => {

        newList += `<li> ${element} <span><i class = "uil uil-trash-alt" onclick="delList(${index})"></i></span></li>`;

    });
    todoList.innerHTML = newList;
    input.value = "";
}
//! while we clicked on delete icon then particular list should be delete and update other
function delList(index) {
    let getLocalStorage = localStorage.getItem("new todo");
    emptyArr = JSON.parse(getLocalStorage);// converting json string to js object
    emptyArr.splice(index, 1); //to delete idividual o rparticular list
    localStorage.setItem("new todo", JSON.stringify(emptyArr));
    showList();
}
// ! to work function on clear all button to clear all lists

clear.onclick = () => {
    emptyArr = [];
    localStorage.setItem("new todo", JSON.stringify(emptyArr));
    showList();

}



