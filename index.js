const formEl= document.querySelector(".form");
const inputEl = document.getElementById("input");
const ulEl= document.querySelector(".list");
const noOfTaskEl = document.querySelector(".no-of-tasks");

//use JSON.parse to revert the string to an array
let list = JSON.parse(localStorage.getItem("list"));
console.log(list)

//looping through the list to get each task
list.forEach(task => {
    toDoList(task);
})

// adding add event listener to catch what's written inside the input
formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    toDoList()
});



//creating a function that get the input value from the form
const toDoList = (task) => {

    //the newTodo get the value in the input
    let newTodo =  inputEl.value;
    //if there is a task create a newTask
    if(task){
        newTodo = task.name;
    }

    
    //creating an li element
    const liEl = document.createElement("li");
    // const liEl = newTodo;
    
    //to get the checked item saved even after refreshing the page
    if(task && task.checked){
        liEl.classList.add("checked");
    }
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


    // function to update task count
    const updateTaskCount= () => {
        const checkedTasks = ulEl.querySelectorAll("li.checked").length;
        const totalTasks = ulEl.querySelectorAll("li").length;
        noOfTaskEl.innerText = totalTasks - checkedTasks;
    };

    // adding event listener to the check button
    checkBtnEl.addEventListener('click', () => {
        liEl.classList.toggle("checked")
        updateTaskCount();
        updateLocalStorage();
    });

    //add event listener to the delete button
    deleteBtnEl.addEventListener('click', () => {
        ulEl.removeChild(liEl);
        updateTaskCount();
        updateLocalStorage();
    })

    // update task count and local storage when a new task is added or when existing task is edited
    updateTaskCount();
    updateLocalStorage();
};

// store my tasks into a local storage
const updateLocalStorage = () => {
    const liEls = document.querySelectorAll("li");
    list = [];
    liEls.forEach(liEl => {
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains("checked")
        })
    }) 
    localStorage.setItem("list", JSON.stringify(list));
}



   
  
