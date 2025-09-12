let todo = [];

function addTask(task){
    todo.push(task);
    console.log(`Task "${task}" added`);
}

function deleteTask(task){
    const index = todo.indexOf(task);
    if(index > -1){
        todo.splice(index,1);
        console.log(`Task "${task}" Completed`);
    }
}

function listAllTasks(){
    console.log("All Tasks:");
    todo.forEach((task) => {
        console.log(task);
    });
}

module.exports ={listAllTasks, addTask, deleteTask};