var formEl = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");


var createTaskHandler = function (event)
{
    event.preventDefault();

    var listItem1 = document.createElement("li");
    listItem1.className = "task-item";
    listItem1.textContent = "This is a new task.";
    tasksToDoE1.appendChild(listItem1);
};

formEl.addEventListener("submit", createTaskHandler);