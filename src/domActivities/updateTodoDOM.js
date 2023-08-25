
import todoModule from "../createTodos";

import { recentCollectionContainerFn, recentCollectionContainerArg } from "./domActivities";

function updateTodoItem (object){

    const todoDisplayContainer = document.querySelector('.todo-display-container');

    const todoDisplay = document.querySelector('.todo-display');

    const todoUpdateBtn = document.querySelector('#todo-update');

    todoUpdateBtn.addEventListener('click',function(){

    const newTodoTitle = document.querySelector('#todo-display-title')
    const newTodoDesc = document.querySelector('#todo-display-desc');
    const newTodoDue = document.querySelector('#todo-display-date');
    const newTodoReminder = document.querySelector('#todo-display-remind-in');
    const newTodoPriority = document.querySelector('#todo-display-priority');
    const newTodoStatus = document.querySelector('#todo-display-status');
    const newTodoProject = document.querySelector('#project-display-choices');
    
    

    let newDetails = {
        newTitle: newTodoTitle.value,
        newDesc: newTodoDesc.value,
        newDue: newTodoDue.value,
        newReminder: newTodoReminder.value,
        newPriority: newTodoPriority.value,
        newStatus: newTodoStatus.value,
        newProject: newTodoProject.value,
    }
    
    todoModule.updateTodo(object,newDetails);

    recentCollectionContainerFn(recentCollectionContainerArg);

    todoDisplayContainer.remove();

    });


    
    todoDisplayContainer.addEventListener('click',function(){
        todoDisplayContainer.remove();
    })

    todoDisplay.addEventListener('click',function(e){
        e.stopPropagation();
    })



}

export default updateTodoItem;