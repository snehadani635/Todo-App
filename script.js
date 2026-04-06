let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks(){
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">X</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask(){
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if(task !== ""){
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        input.value = "";
        displayTasks();
    }
}

function deleteTask(index){
    tasks.splice(index,1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

displayTasks();