var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var taskFormHandler = function (event) {
    event.preventDefault();

    // When we use square brackets[] in a selector, we 're trying to select an HTML 
    // element by one of its attributes. In this case, we're selecting the < input > 
    // element on the page that has a name attribute set to a value of "task-name".

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    

    // When used in a condition, empty strings and the number 0 are evaluated as 
    // falsy values.When we use the syntax!taskNameInput, we 're checking to see 
    // if the taskNameInput variable is empty by asking if it's a falsy value.
    // check if input values are empty strings

    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    // The browser - provided DOM element interface has the reset() method, which 
    // is designed specifically for the < form > element and won 't work on any other 
    // element. 
    formEl.reset();
    // package up data as an object
    var taskDataObj ={
        name: taskNameInput,
        type: taskTypeInput
    };

    // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);


};

var createTaskEl = function (taskDataObj) {
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", taskFormHandler);