import "./style.css";

// import todoModule from "./create-todos";

// import projectModule from "./create-projects";

import createMainDOM from "./domCreation/mainDOMCreation";

import createTodoDOM from "./domCreation/allTodoDOMCreation"

// import createFormDOM from "./formDOMCreation";

// import todosTabObject from "./allTodosTab";

// import projecTabObject from "./projectTab";

// import notesTabObject from "./allNotesTab";

import domAction from "./domActivities/domActivities";




// All modules should start here

// HOMEPAGE
createMainDOM();

// Loads todo first
createTodoDOM();

// Attaches all eventlisteners to HOMEPAGE
domAction();





// console.log('test');

// todoModule.createTodo('mamaaaa','ooooouuuu','yyeyeye','asdasd','project1');

// todoModule.createTodo('lalalalalallalalla','ooooouuuu','yyeyeye','asdasd','gagagagaga','wadawda','project1');


// console.log(todoModule.todoArray);

// console.log(projectModule.projectArray);

// console.log(sortingModule.sortByProjectName());



// DATE TEST!!!

// const todoDate = document.querySelector('#todoDate')

// const testButton = document.querySelector('.testing')

// testButton.addEventListener('click',function(){
//     console.log(todoDate.value);

//     const formattedDueDateOfObject = todoDate.value.split("-");

//     console.log(formattedDueDateOfObject);

// })





// console.log(`${year}-${month}-${day} = created`)







// sortingModule.sortByPriority();
