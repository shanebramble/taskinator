var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function (event) {
    event.preventDefault();

    // When we use square brackets[] in a selector, we 're trying to select an HTML 
    // element by one of its attributes. In this case, we're selecting the < input > 
    // element on the page that has a name attribute set to a value of "task-name".

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    // debugger;
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);

};

formEl.addEventListener("submit", createTaskHandler);