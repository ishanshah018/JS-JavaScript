let todo=[];

function list(){
    document.write("______________<br>");
    for (let i=0;i<todo.length;i++)
    {
        document.write(i+"-->",todo[i]+"<br>");
    }
    document.write("______________<br>");
}

function add()
{
    let task=prompt("Enter Your Task: ");
    todo.push(task);
    alert("Task Added Successfully!!")
}

function del() {
    if (todo.length === 0) {
        alert("No tasks to delete!");
        return;
    }

    //To Show the task list in an alert box
    let taskList = "Current Tasks:\n";
    for (let i = 0; i < todo.length; i++) {
        taskList += i + " --> " + todo[i] + "\n";
    }
    alert(taskList); 


    let index = parseInt(prompt("Enter the index of the task to delete: "));
    if (isNaN(index) || index < 0 || index >= todo.length) {
        alert("Invalid index! Please try again.");
    } else {
        let removedTask = todo.splice(index, 1); // To Remove the task at the given index
        alert(`Task "${removedTask}" removed successfully!`);
    }
}
