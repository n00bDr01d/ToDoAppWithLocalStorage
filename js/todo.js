//inicializar las vaiables necesarias
let task = document.querySelector('.container .search-box input');//input del html

let allTodos = JSON.parse(localStorage.getItem('todo-list'));// extraigo todas las tareas de localstorage
let allTodosBox = document.querySelector('.container .allTodos');//agaro el div all-todos
let noOfTasks = document.querySelectorAll('.container .others span');// elemento span con 0 taeras
let clearAllBtn = document.querySelector('.container .others .clear-all-btn');

//Eventos necesarios
task.addEventListener('keyup', (e) => {
    if(task.value != ''){
        if(e.key == 'Enter'){
            /*logica para crear Tareas
            * createTodos();
            * */
            createTodos();
        }
    }
});

// Creamos las funciones necesarias
let createTodos = () => {
    let userTask = task.value;//lo que haya metido el usr en el imput lo capturo
    let taskInfo = {taskk:userTask, status:'pendiente'};
    //creo primero una lista(array) vacia
    if(!allTodos){
        allTodos = [];
    }
    //guardamos la tarea en la lista (array)
    allTodos.push(taskInfo);
    localStorage.setItem('todo-list', JSON.stringify(allTodos));
    task.value = '';
    //Mostramos todas las tareas
    showTodos();
}

let showTodos = ()=>{
    let li= '';
    if(allTodos){
        allTodos.forEach((todo,id)=>{
            let isCompleted = todo.status == 'completed' ? 'checked' : '';
            li += ` <div class="todo">
                 <input type="checkbox" name="" id="${id}" onclick="check(this)" ${isCompleted}>
                 <div class="item">
                         <div class="task">
                                 <span class="${isCompleted}">${todo.taskk}</span>
                         </div>
                         <i class="fa-regular fa-trash-can" onclick="deleteTask(${id})"></i>
                 </div>
         </div>`;
        })
        console.log(li);
        allTodosBox.innerHTML = li || `<i class="fa-solid fa-list-check no-task-icon"></i>`;
    }
    noOfTasks.innerHTML = `<span>Tu tienes <strong>${allTodos.length}</strong>Tareas</span>`;
}

let check = (currentTask) => {
   //tarea
}

let deleteTask = (deleteId) => {
    //tarea
}

clearAllBtn.addEventListener('click', (e) => {
    //tarea
});

showTodos();