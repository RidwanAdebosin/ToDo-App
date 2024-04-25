const formEl= document.querySelector(".form");
const inputEl = document.getElementById("input");
// getting the ul element that has the class of .list from the HTML
const ulEl= document.querySelector(".list");

const noOfTaskEl = document.querySelector(".no-of-tasks");


// adding add event listener to catch what's written inside the input
formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    toDoList()
});



//creating a function that get the input value from the form
const toDoList = (e) => {
    //the newTodo get the value in the input
    let newTodo =  inputEl.value;

    //creating an li element
    const liEl = document.createElement("li");

    //rendering the newTodo into the liEl
    liEl.innerText = newTodo;

    //append the li as a child into the ulEl
    ulEl.appendChild(liEl);

    // after submitting the value in the input the text should clear off the input box
    inputEl.value = "";

    // creating a separate span for the todo icons
    const checkBtnEl = document.createElement("span");
    const deleteBtnEl = document.createElement("span")
    //move the icon inside the span
    checkBtnEl.innerHTML = `<i class="fa-solid fa-check"></i>`
    deleteBtnEl.innerHTML = `<i class="fa-solid fa-trash"></i>`

    // append as a child to see it in the list Element
    liEl.appendChild(checkBtnEl);
    liEl.appendChild(deleteBtnEl);

    // adding event listener to the check button
    checkBtnEl.addEventListener('click', () => {
        liEl.classList.toggle("checked")
    })


    // getting the todo element that has the class of .no-of-tasks from the HTML
//    let noOfTasks = liEl.length;


   const noOfTasks = ulEl.querySelectorAll("li").length;
   noOfTaskEl.innerText = noOfTasks;
  
}