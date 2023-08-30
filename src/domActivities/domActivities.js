// All DOM Activities are centralised here except DOM Creation

import todoModule from "../createTodos";

import projectModule from "../createProjects";

import notesObject from "../tabObjects/allNotesTab";


import todoObject from "../tabObjects/allTodosTab";

import projectObject from "../tabObjects/allProjectsTab";

import formDomModule from "../domCreation/formDOMCreation";

import createTodoDOM from "../domCreation/allTodoDOMCreation";

import createProjectDOM from "../domCreation/projectsDOMCreation";

import createNotesDOM from "../domCreation/allNotesDOMCreation";

import populateTodoCollection from "../domCreation/populateDOMTodoCollection";

import appendProjectObjects from "../domCreation/populateDOMProjectCollection";

import appendNotesObject from "../domCreation/populateDOMNoteCollection";

// Because displaying todoCollection in high priority is the default
// let recentCollectionContainerFn = populateTodoCollection;

// let recentCollectionContainerArg = 'high';



let menuInDisplay = 'todos'

let priorityInDisplay = 'high'


function updateDisplay (){

    if(menuInDisplay === 'todos'){
        console.log('TODOS DISPLAY UPDATED');

        populateTodoCollection(priorityInDisplay);

    }

    if(menuInDisplay === 'projects'){

        console.log('TODOS PROJECTS UPDATED');

        appendProjectObjects(priorityInDisplay);

    }

    if (menuInDisplay === 'notes') {

        console.log('TODOS NOTES UPDATED');
        
        appendNotesObject();

    }
}




function domActivitiesModule (){

    const mainContainer = document.querySelector('.main-container');

    mainContainer.addEventListener('click',function(e){

        

        if(menu.classList.contains("menu-active")){
            menu.classList.remove("menu-active");
            return;
        }

    })


    // hamburger button
    const hamburgerButton = document.querySelector('.hamburger-menu');

    const menu = document.querySelector('.note-menu');

    menu.addEventListener('click',function(e){
        e.stopPropagation();
    })


    hamburgerButton.addEventListener('click',function(e){

        e.stopPropagation();

        if(!menu.classList.contains("menu-active")){
            menu.classList.add("menu-active");
            return;
        }


        if(menu.classList.contains("menu-active")){
            menu.classList.remove("menu-active");
            return;
        }

    })


    // FORM ACTIVITIES

    // FORM INPUT ACTIVITIES BEGIN HERE


    // form container
    const formContainer = document.querySelector('.form-container');

    const entryCreationForm = document.querySelector('.todo-creation-form');

    // todo or note button

    let isNote = true;

    const selectTodo = document.querySelector('#is-todo');

    const selectNote = document.querySelector('#is-note');

    const todoCreationDiv = document.querySelector('.create-new-todo');




    // same variable, need to refactor
    const selectExistingProject = document.querySelector('#existing-project');

    const selectNewProject = document.querySelector('#new-project');

    const existingProjectRadio = document.querySelector('#existing-project');

    const newProjectRadio = document.querySelector('#new-project');




    const existingProjectDiv = document.querySelector('.select-existing-project');

    const newProjectDiv = document.querySelector('.create-new-project');




    // To-do inputs
    const todoTitle = document.querySelector('#todo-title');

    const todoDesc = document.querySelector('#todo-desc');

    const entryType = isNote;

    const todoDate = document.querySelector('#todo-date');

    const todoReminder = document.querySelector('#todo-remind-in');

    const todoPriority = document.querySelector('#todo-priority');

    


    const todoInputs = [todoDate,todoReminder];



    const projectsChoices = document.querySelector('#project-choices');

    // new project inputs

    const projectTitle = document.querySelector('#project-title');

    const projectDesc = document.querySelector('#project-desc');

    const projectDate = document.querySelector('#project-date');

    const projectReminder = document.querySelector('#project-remind-in');


    // is a button
    const projectPriority = document.querySelector('#project-priority');

    const newProjectInputs = [projectTitle,projectDesc,projectDate,projectReminder];


    selectTodo.addEventListener('click', function(){
        todoCreationDiv.classList.add('display-form-items');

        todoInputs.forEach(input => {
            input.setAttribute('required','');
        });

        if (selectExistingProject.disabled) {
            selectNewProject.checked = true;
        }

        if (!selectExistingProject.checked && !selectNewProject.checked)  {
            selectExistingProject.checked = true;
        }
        
        if (selectExistingProject.checked) {
            checkedExistingProject();
        }

        if (selectNewProject.checked) {
            checkedNewProject();
        }
        isNote = false;

    })

    selectNote.addEventListener('click', function(){
        todoCreationDiv.classList.remove('display-form-items');
        existingProjectDiv.classList.remove('display-form-items');
        newProjectDiv.classList.remove('display-form-items');

        selectNewProject.checked = false;
        selectExistingProject.checked = false;

        todoInputs.forEach(input => {
            input.removeAttribute('required');
            input.value = '';
        });

        projectsChoices.removeAttribute('required');

        newProjectInputs.forEach(input => {
            input.removeAttribute('required');
            input.value = '';
        });

        isNote= true;
    })

    // existing project or new project

    let isNewProject = false;



    const projectOption = isNewProject;

    // existing project input



    selectExistingProject.addEventListener('click', function(){

        checkedExistingProject();
        
    });



    selectNewProject.addEventListener('click', function(){

        checkedNewProject();

    })


    function checkedExistingProject (){
        existingProjectDiv.classList.add('display-form-items');
        newProjectDiv.classList.remove('display-form-items');

        isNewProject = false;

        projectsChoices.setAttribute('required','');

        newProjectInputs.forEach(element => {
            element.removeAttribute('required','');
            element.value = '';
        });

    }

    function checkedNewProject (){
        
        existingProjectDiv.classList.remove('display-form-items');
        newProjectDiv.classList.add('display-form-items');

        isNewProject = true;

        projectsChoices.removeAttribute('required');

        newProjectInputs.forEach(element => {
            element.setAttribute('required','');
        });

    }


    // receive all form input data


    const formSubmit = document.querySelector('#form-submit');


    


    // const testArray = [todoTitle,todoDesc,entryType,todoDate,todoReminder,todoPriority,projectOption,projectsChoices,projectTitle,projectDesc,projectDate,projectReminder,projectPriority];


    const allFormInputs = document.querySelectorAll('.form-input');
    

    

    formSubmit.addEventListener('click', function(e){

       

        // clear color on priority button
        

        const requiredInput = [];

        let requiredInputFilled = true;


        allFormInputs.forEach(element => {
            if (element.hasAttribute('required')) {
                requiredInput.push(element);
            }
        });

        for (const each of requiredInput) {
            

            if(!each.value){
                requiredInputFilled = false;   

                break;      
            }

        }

        if(requiredInputFilled){

            e.preventDefault();

            
            hideForm();

            // create todo with form


            const resetArray = [projectTitle,projectDesc,projectDate,projectReminder,todoTitle,todoDesc,todoDate,todoReminder];


            if(newProjectRadio.checked){
                console.log('why are you running?')
                
                projectModule.createProject(projectTitle.value,projectDesc.value,projectDate.value,projectPriority.value,projectReminder.value,`pending`);


                todoModule.createTodo(todoTitle.value,todoDesc.value,todoDate.value,Number(todoReminder.value),todoPriority.value,`pending`,projectTitle.value);

                todoObject();

                projectObject();

                notesObject();

                resetArray.forEach(input => {
                    input.value = '';
                });

                //everytime submit button is clicked fresh dropdown is created 
                formDomModule.existingProjectOptions();

                createProjectDOM()

                appendProjectObjects(projectPriority.value);

                const highPriorityButton = document.querySelector('.high-priority');
                const mediumPriorityButton = document.querySelector('.medium-priority');
                const lowPriorityButton = document.querySelector('.low-priority');

                const priorityButtons = document.querySelector('.priority-buttons');
        
                priorityButtons.querySelectorAll('*').forEach(element => {
                    element.classList.remove('chosen-priority')
                });

                if (todoPriority.value === 'high') {

                    highPriorityButton.classList.add('high-priority-chosen');

                    mediumPriorityButton.classList.remove('medium-priority-chosen');

                    lowPriorityButton.classList.remove('low-priority-chosen');

                }

                if (todoPriority.value === 'medium') {

                    highPriorityButton.classList.remove('high-priority-chosen');

                    mediumPriorityButton.classList.add('medium-priority-chosen');

                    lowPriorityButton.classList.remove('low-priority-chosen');



                }

                if (todoPriority.value === 'low') {

                    highPriorityButton.classList.remove('high-priority-chosen');

                    mediumPriorityButton.classList.remove('medium-priority-chosen');

                    lowPriorityButton.classList.add('low-priority-chosen');


                }



                return;

            }

            // create to-dos and notes

            todoModule.createTodo(todoTitle.value,todoDesc.value,todoDate.value,Number(todoReminder.value),todoPriority.value,`pending`,projectsChoices.value);

            // todoObject();

            // projectObject();

            // notesObject();

            resetArray.forEach(input => {

                input.value = '';
            });

            //everytime submit button is clicked fresh dropdown is created 
            formDomModule.existingProjectOptions();

            if (selectTodo.checked) {

                

                createTodoDOM();
                populateTodoCollection(todoPriority.value);


                // turn this to a function
                const highPriorityButton = document.querySelector('.high-priority');
                const mediumPriorityButton = document.querySelector('.medium-priority');
                const lowPriorityButton = document.querySelector('.low-priority');

                const priorityButtons = document.querySelector('.priority-buttons');
  
                priorityButtons.querySelectorAll('*').forEach(element => {
                    element.classList.remove('chosen-priority')
                });

                

                if (todoPriority.value === 'high') {

                    highPriorityButton.classList.add('high-priority-chosen');

                    mediumPriorityButton.classList.remove('medium-priority-chosen');

                    lowPriorityButton.classList.remove('low-priority-chosen');

                }

                if (todoPriority.value === 'medium') {

                    highPriorityButton.classList.remove('high-priority-chosen');

                    mediumPriorityButton.classList.add('medium-priority-chosen');

                    lowPriorityButton.classList.remove('low-priority-chosen');



                }

                if (todoPriority.value === 'low') {

                    highPriorityButton.classList.remove('high-priority-chosen');

                    mediumPriorityButton.classList.remove('medium-priority-chosen');

                    lowPriorityButton.classList.add('low-priority-chosen');


                }
                
            }

            


            if (selectNote.checked) {

                createNotesDOM();
                appendNotesObject()

            }


        }


        // FORM INPUT ACTIVITIES END HERE
        


    });



    // FORM APPEARANCE ACTIVITES BEGIN HERE


    function hideForm (){


        formContainer.classList.remove('show-form')

        

    }


    // stop event bubbling.
    entryCreationForm.addEventListener('click',function(e){

        e.stopPropagation();

    })


    formContainer.addEventListener('click', function(e){

        hideForm();
            
    })

    const formButton = document.querySelector('.form-button');

    formButton.addEventListener('click',function(){

        formContainer.classList.add('show-form');

        formDomModule.existingProjectOptions();

        if(selectNote.checked){
            return;
        }

        if (selectTodo.checked && selectExistingProject.disabled) {
            selectNewProject.checked = true;
        }


        if (selectNewProject.checked){
            console.log('NEW PROJECT')
            checkedNewProject();
        }

        if(selectExistingProject.checked){
            console.log('EXISTING PROJECT')
            checkedExistingProject();
        }

    })





    







    const allTodosTab = document.querySelector('.all-todos-tab');

    allTodosTab.addEventListener('click',function(){

        

        console.log('TO DO LIST');

        menuInDisplay = 'todos';

        createTodoDOM();

    });

    const allProjectsTab = document.querySelector('.all-projects-tab')

    allProjectsTab.addEventListener('click',function(){

        console.log('PROJECTS TAB');

        menuInDisplay = 'projects';

        createProjectDOM()

    })


    const allNotesTab = document.querySelector('.all-notes-tab');

    allNotesTab.addEventListener('click',function(){

        console.log('NOTES LIST');

        menuInDisplay = 'notes';

        createNotesDOM();

    })




    

}


 // PRIORITY BUTTON - TODOS

 function changeTodoPriority(){
    const highPriorityButton = document.querySelector('.high-priority');
    const mediumPriorityButton = document.querySelector('.medium-priority');
    const lowPriorityButton = document.querySelector('.low-priority');

    if (!highPriorityButton||!mediumPriorityButton||!lowPriorityButton) {
        return;
    }


    highPriorityButton.addEventListener('click',function(){
        
        // const priorityButtons = document.querySelector('.priority-buttons');
  
        // priorityButtons.querySelectorAll('*').forEach(element => {
        //     element.classList.remove('chosen-priority')
        // });

        // highPriorityButton.classList.add('chosen-priority');


        highPriorityButton.classList.add('high-priority-chosen');

        mediumPriorityButton.classList.remove('medium-priority-chosen');

        lowPriorityButton.classList.remove('low-priority-chosen');

        populateTodoCollection('high');

        priorityInDisplay = 'high';
        console.log('LOOPING')

    });

    

    mediumPriorityButton.addEventListener('click',function(){
        
        // const priorityButtons = document.querySelector('.priority-buttons');
        
        // priorityButtons.querySelectorAll('*').forEach(element => {
        //     element.classList.remove('chosen-priority')
        // });

        // mediumPriorityButton.classList.add('chosen-priority');

        highPriorityButton.classList.remove('high-priority-chosen');

        mediumPriorityButton.classList.add('medium-priority-chosen');

        lowPriorityButton.classList.remove('low-priority-chosen');

        populateTodoCollection('medium');

        priorityInDisplay = 'medium';
        console.log('LOOPING')
    });


   
    lowPriorityButton.addEventListener('click',function(){

        // const priorityButtons = document.querySelector('.priority-buttons');

        // priorityButtons.querySelectorAll('*').forEach(element => {
            
        //     element.classList.remove('chosen-priority')
        // });

        // lowPriorityButton.classList.add('chosen-priority');

        highPriorityButton.classList.remove('high-priority-chosen');

        mediumPriorityButton.classList.remove('medium-priority-chosen');

        lowPriorityButton.classList.add('low-priority-chosen');

        populateTodoCollection('low');

        priorityInDisplay = 'low';
        console.log('LOOPING')
    });
   }




   function changeProjectPriority(){
    const highPriorityButton = document.querySelector('.high-priority');
    const mediumPriorityButton = document.querySelector('.medium-priority');
    const lowPriorityButton = document.querySelector('.low-priority');

    if (!highPriorityButton||!mediumPriorityButton||!lowPriorityButton) {
        return;
    }


    highPriorityButton.addEventListener('click',function(){
        
        // const priorityButtons = document.querySelector('.priority-buttons');
  
        // priorityButtons.querySelectorAll('*').forEach(element => {
        //     element.classList.remove('chosen-priority')
        // });

        // highPriorityButton.classList.add('chosen-priority');




        highPriorityButton.classList.add('high-priority-chosen');

        mediumPriorityButton.classList.remove('medium-priority-chosen');

        lowPriorityButton.classList.remove('low-priority-chosen');



        appendProjectObjects('high');

        priorityInDisplay = 'high';
        console.log('LOOPING')

    });

    

    mediumPriorityButton.addEventListener('click',function(){
        
        // const priorityButtons = document.querySelector('.priority-buttons');
        
        // priorityButtons.querySelectorAll('*').forEach(element => {
        //     element.classList.remove('chosen-priority')
        // });

        // mediumPriorityButton.classList.add('chosen-priority');



        highPriorityButton.classList.remove('high-priority-chosen');

        mediumPriorityButton.classList.add('medium-priority-chosen');

        lowPriorityButton.classList.remove('low-priority-chosen');



        appendProjectObjects('medium');

        priorityInDisplay = 'medium';
        console.log('LOOPING')
    });


   
    lowPriorityButton.addEventListener('click',function(){

        // const priorityButtons = document.querySelector('.priority-buttons');

        // priorityButtons.querySelectorAll('*').forEach(element => {
            
        //     element.classList.remove('chosen-priority')
        // });

        // lowPriorityButton.classList.add('chosen-priority');

        highPriorityButton.classList.remove('high-priority-chosen');

        mediumPriorityButton.classList.remove('medium-priority-chosen');

        lowPriorityButton.classList.add('low-priority-chosen');

        appendProjectObjects('low');

        priorityInDisplay = 'low';
        console.log('LOOPING')
    });
   }


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

        updateDisplay();

        todoDisplayContainer.remove();

        });


        
        todoDisplayContainer.addEventListener('click',function(){
            todoDisplayContainer.remove();
        })

        todoDisplay.addEventListener('click',function(e){
            e.stopPropagation();
        })



    }





    function updateNoteItem (object){

        const todoDisplayContainer = document.querySelector('.todo-display-container');

        const todoDisplay = document.querySelector('.todo-display');

        const todoUpdateBtn = document.querySelector('#todo-update');

        todoUpdateBtn.addEventListener('click',function(){

        const newTodoTitle = document.querySelector('#todo-display-title')
        const newTodoDesc = document.querySelector('#todo-display-desc');
        

        let newDetails = {
            newTitle: newTodoTitle.value,
            newDesc: newTodoDesc.value,
        }
        
        todoModule.updateTodo(object,newDetails);

        updateDisplay();

        todoDisplayContainer.remove();

        });


        
        todoDisplayContainer.addEventListener('click',function(){
            todoDisplayContainer.remove();
        })

        todoDisplay.addEventListener('click',function(e){
            e.stopPropagation();
        })



    }









    function updateProjectItem (project){


        const projectDisplayContainer = document.querySelector('.project-todo-container');

        const projectDisplay = document.querySelector('.project-details');

        const projectUpdateButton = document.querySelector('#project-update');

        projectUpdateButton.addEventListener('click',function(){

            // project-status-update

        const newProjectTitle = document.querySelector('#project-title-update')
        const newProjectDesc = document.querySelector('#project-desc-update');
        const newProjectDue = document.querySelector('#project-date-update');
        const newProjectReminder = document.querySelector('#project-reminder-update');
        const newProjectPriority = document.querySelector('#project-priority-update');
        const newProjectStatus = document.querySelector('#project-status-update');

        
        

        let newDetails = {
            // update this
            newTitle: newProjectTitle.value,
            newDesc: newProjectDesc.value,
            newDue: newProjectDue.value,
            newReminder: newProjectReminder.value,
            newPriority: newProjectPriority.value,
            newStatus: newProjectStatus.value,
        }


        projectModule.updateProject(project,newDetails);

        updateDisplay()

        projectDisplayContainer.remove();

        });


        
        projectDisplayContainer.addEventListener('click',function(){
            projectDisplayContainer.remove();
        })

        projectDisplay.addEventListener('click',function(e){
            e.stopPropagation();
        })



    }






    function deleteTodoItem (object){

        const todoDisplayContainer = document.querySelector('.todo-display-container');

        const todoDisplay = document.querySelector('.todo-display');

        const todoDeleteBtn = document.querySelector('#todo-delete');

        todoDeleteBtn.addEventListener('click',function(){

        
        todoModule.deleteTodo(object);

        updateDisplay()

        todoDisplayContainer.remove();

        });


        todoDisplayContainer.addEventListener('click',function(){
            todoDisplayContainer.remove();
        })

        todoDisplay.addEventListener('click',function(e){
            e.stopPropagation();
        })



    }



    function deleteProjectItem (object){


        const projectDisplayContainer = document.querySelector('.project-todo-container');

        const projectDisplay = document.querySelector('.project-details');

        const projectDeleteButton = document.querySelector('#project-delete');

        

        projectDeleteButton.addEventListener('click',function(){

        
        projectModule.deleteProject(object);

        updateDisplay();

        projectDisplayContainer.remove();

        });


        projectDisplayContainer.addEventListener('click',function(){
            projectDisplayContainer.remove();
        })

        projectDisplay.addEventListener('click',function(e){
            e.stopPropagation();
        })



    }



    // send to all populate modules
    function emptyDisplay(){
        const collectionContainer = document.querySelector('.collection-container');
        const collectionContainerItems = [];

        if(collectionContainer){
            collectionContainer.querySelectorAll('*').forEach(element => {
                collectionContainerItems.push(element)
            });

            if (collectionContainerItems.length === 0) {
                const displayEmpty = document.createElement('div');
                displayEmpty.classList.add('display-empty');
                displayEmpty.textContent = 'EMPTY';
                collectionContainer.append(displayEmpty);
                return;
            }

        }

        const notesCollection = document.querySelector('.notes-collection');
        const notesCollectionItems = [];

        if (notesCollection) {
            notesCollection.querySelectorAll('*').forEach(element => {
                notesCollectionItems.push(element)
            });

            if (notesCollectionItems.length === 0) {
                notesCollection.remove();
                const displayEmpty = document.createElement('div');
                displayEmpty.classList.add('display-empty');
                displayEmpty.textContent = 'EMPTY';
                collectionContainer.append(displayEmpty);
                return;
           
            }
    
        }
        
    }


    function displayDuration(date){

        const splitDate = date.split('-');

        const monthArray = ['January','February','March','April','May','June','July','August','September','October','November','December'];

        return `Due: ${Number(splitDate[2])} ${monthArray[splitDate[1]-1]} ${splitDate[0]}`;

    }

  

   



export default domActivitiesModule;

export {changeTodoPriority, changeProjectPriority, updateTodoItem, updateProjectItem, updateNoteItem, deleteTodoItem, deleteProjectItem,emptyDisplay,displayDuration};

