const readline = require('readline');
const todo = require('./todo');

const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu(){
    console.log("\nMenu:");
    console.log("1. Add Task");
    console.log("2. Delete Task");
    console.log("3. List All Tasks");
    console.log("4. Exit");

    rl.question("Choose an option: ", function(option){
        switch(option){
            case '1':
                rl.question("Enter task to add: ", function(task){  
                    todo.addTask(task);
                    showMenu();
                });
                break;  
            case '2':
                rl.question("Enter task to delete: ", function(task){
                    todo.deleteTask(task);
                    showMenu();
                });
                break;
            case '3':
                todo.listAllTasks();
                showMenu();
                break;
            case '4':
                rl.close();
                break;
            default:
                console.log("Invalid option. Please try again.");
                showMenu();
        }
    });
}

rl.on('close', function(){
    console.log("\nExiting Todo List Application. Goodbye!");
    process.exit(0);
});
showMenu();
