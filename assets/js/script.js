var buttonEl = document.querySelector("#save-task");
var tasksToDoE1 = document.querySelector("#tasks-to-do");


var createTaskHandler = function ()
{
    var listItem1 = document.createElement("li");
    listItem1.className = "task-item";
    listItem1.textContent = "This is a new task.";
    tasksToDoE1.appendChild(listItem1);
}

buttonEl.addEventListener("click",createTaskHandler);