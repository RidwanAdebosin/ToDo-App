const formEl= document.querySelector(".form");
const inputEl = document.getElementById("input");



// adding add event listener to catch what's written inside the input
formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    toDoList()
});

// getting the ul element that has the class of .list from the HTML
const ulEl= document.querySelector(".list")


//creating a function that get the input value from the form
const toDoList = (e) => {
    //the newTodo get the value in the input
    let newTodo =  inputEl.value;

    //creating an li element
    const liEl = document.createElement("li");

    //rendering the newTodo into the liEl
    liEl.innerText = newTodo;

    //append the li as a child into the ulEl
    ulEl.appendChild(liEl)

    // after submitting the value in the input the text should clear off the input box
    inputEl.value = ""

    // creating a separate div for the todo icons
    const editBtnEl = document.createElement("span");
    const checkBtnEl = document.createElement("span");
    const deleteBtnEl = document.createElement("span")
    //move the icon inside the div
    editBtnEl.innerHTML=`<i class="fa-regular fa-pen-to-square">
    </i>`
    checkBtnEl.innerHTML = `<i class="fa-solid fa-check"></i>`
    deleteBtnEl.innerHTML = `<i class="fa-solid fa-trash"></i>`
    // append as a child to see it in the list Element
    liEl.appendChild(editBtnEl);
    liEl.appendChild(checkBtnEl);
    liEl.appendChild(deleteBtnEl)
}