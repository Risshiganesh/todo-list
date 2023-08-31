import todoObject from "../tabObjects/allTodosTab";
// for selection options
import projectObjects from '../tabObjects/allProjectsTab';

// doesn't work because of circular dependency
// import updateTodoItem  from '../domActivities/updateTodoDOM';

import { updateTodoItem, deleteTodoItem, emptyDisplay, displayDuration } from "../domActivities/domActivities";


// POPULATE TODO COLLECTION CONTAINER

// high
// put this in a different module
function appendTodoObjects(priority){

    

    const collectionContainer = document.querySelector('.collection-container')

    collectionContainer.querySelectorAll('*').forEach(element => {
        
        element.remove();

    });



    const allTodoObject = todoObject();

    const dueStatusArray = ['overdue','due','upcoming','complete'];

    const titleArray = ['OVERDUE','DUE SOON','UPCOMING','COMPLETED'];

    const classArray = ['overdue-container','due-soon-container','upcoming-container','complete-container'];

    for (const key in allTodoObject) {

        if (key === priority) {

            

            for (let index = 0; index < dueStatusArray.length; index++) {


                const property = dueStatusArray[index];

                const specifiedObjByPriority = allTodoObject[key];

                for (const prop in specifiedObjByPriority) {

                    if (prop === property) {

                        // contains array of todo objects of each due status
                        const arrayByDueStatus = specifiedObjByPriority[prop];

                        if (arrayByDueStatus.length === 0){

                            continue;

                        }


                        const statusContainer = document.createElement('div');

                        statusContainer.classList.add('status-container');
                
                        collectionContainer.append(statusContainer);
                
                            const statusTitleDiv = document.createElement('div');
                
                            statusTitleDiv.textContent = titleArray[index];

                            statusTitleDiv.classList.add('status-title');
                
                            statusContainer.append(statusTitleDiv);

                                
                
                
                            const dueStatusContainer = document.createElement('div');
                
                            dueStatusContainer.classList.add(classArray[index]);
                
                            statusContainer.append(dueStatusContainer);
                
                
                                const scrollableContainer = document.createElement('div');
                
                                scrollableContainer.classList.add('scrollable-container');
                
                                dueStatusContainer.append(scrollableContainer);

                                

                                // loops over each todo object and appends them to scrollable container
                                arrayByDueStatus.forEach(object => {
                                    
                                    const todoContainer = document.createElement('div');

                                    todoContainer.classList.add('todo-container');

                                    scrollableContainer.append(todoContainer);


                                        const todoTitleDiv = document.createElement('div');

                                        todoTitleDiv.classList.add('todo-title-div');

                                        todoTitleDiv.textContent = object.title;

                                        todoContainer.append(todoTitleDiv);


                                        const todoDescDiv = document.createElement('div');

                                        todoDescDiv.classList.add('todo-desc-div');

                                        todoContainer.append(todoDescDiv);


                                            const descParagraph = document.createElement('p');

                                            todoDescDiv.textContent = object.desc;

                                            todoDescDiv.append(descParagraph)


                                        const todoDateDiv = document.createElement('div');

                                        todoDateDiv.classList.add('todo-date-div');

                                        todoDateDiv.textContent = displayDuration(object.dueDate);

                                        // todoDateDiv.textContent = `${object.durationLeft.dayLeft} days, ${object.durationLeft.monthsLeft } months and ${object.durationLeft.yearsLeft} years left`;

                                        todoContainer.append(todoDateDiv);


                                        






                                        const todoProjectDiv = document.createElement('div');

                                        todoProjectDiv.classList.add('todo-project-div');

                                        todoProjectDiv.textContent = `Project: ${object.project}`;

                                        todoContainer.append(todoProjectDiv);


                                        // const todoPrioritytDiv = document.createElement('div');

                                        // todoPrioritytDiv.classList.add('todo-priority-div');

                                        // todoPrioritytDiv.textContent = object.priority;

                                        // todoContainer.append(todoPrioritytDiv);


                                    // SEND TO A SEPARATE MODULE - OPENS TODO ITEM
                                    todoContainer.addEventListener('click',function(){

                                        const mainContainer = document.querySelector('.main-container');

                                        const todoDisplayContainer = document.createElement('div');

                                        todoDisplayContainer.classList.add('todo-display-container');

                                        mainContainer.append(todoDisplayContainer);


                                            const todoDisplay = document.createElement('div');

                                            todoDisplay.classList.add('todo-display');

                                            todoDisplayContainer.append(todoDisplay);



                                                const todoDisplayTitle = document.createElement('input');

                                                todoDisplayTitle.setAttribute('placeholder','Title');

                                                todoDisplayTitle.setAttribute('id','todo-display-title');

                                                todoDisplayTitle.value = object.title;

                                                todoDisplay.append(todoDisplayTitle);


                                                const todoDescTextArea = document.createElement('textarea');

                                                todoDescTextArea.setAttribute('name','');

                                                todoDescTextArea.setAttribute('id','todo-display-desc');

                                                todoDescTextArea.setAttribute('placeholder','Description')

                                                todoDescTextArea.setAttribute('cols','30');

                                                todoDescTextArea.setAttribute('rows','10');

                                                todoDescTextArea.setAttribute('required','');

                                                todoDescTextArea.value = object.desc;

                                                todoDescTextArea.classList.add('todo-update');

                                                todoDisplay.append(todoDescTextArea);


                                                const todoDisplayDate = document.createElement('input');

                                                todoDisplayDate.setAttribute('type','date');

                                                todoDisplayDate.setAttribute('id','todo-display-date');

                                                todoDisplayDate.value = object.dueDate;

                                                todoDisplayDate.classList.add('todo-update');

                                                todoDisplay.append(todoDisplayDate);

                                                const lineBreak1 = document.createElement('br');                                               
                                                todoDisplay.append(lineBreak1);


                                                const todoDisplayRemindIn = document.createElement('input');

                                                todoDisplayRemindIn.setAttribute('type','number');

                                                todoDisplayRemindIn.setAttribute('id','todo-display-remind-in');

                                                todoDisplayRemindIn.setAttribute('placeholder','Remind in how many days?');

                                                todoDisplayRemindIn.value = object.remindIn;

                                                todoDisplayRemindIn.classList.add('todo-update');

                                                todoDisplay.append(todoDisplayRemindIn);

                                                const lineBreak2 = document.createElement('br');
                                                todoDisplay.append(lineBreak2);


                                                const todoDisplayPriority = document.createElement('button');

                                                todoDisplayPriority.setAttribute('value',object.priority);

                                                todoDisplayPriority.setAttribute('type','button');

                                                todoDisplayPriority.setAttribute('id','todo-display-priority');

                                                todoDisplayPriority.textContent = object.priority;

                                                todoDisplayPriority.classList.add('todo-update');

                                                todoDisplay.append(todoDisplayPriority);

                                                todoDisplayPriority.addEventListener('click', function(){

                                                    // Add classes for different priorities (different colours)

                                                    if (todoDisplayPriority.value === 'Low'){
                                                        todoDisplayPriority.value = 'Medium';
                                                        todoDisplayPriority.textContent = 'Medium';

                                                        return;
                                                    }

                                                    if (todoDisplayPriority.value === 'Medium'){
                                                        todoDisplayPriority.value = 'High';
                                                        todoDisplayPriority.textContent = 'High';

                                                        return;
                                                    }

                                                    if (todoDisplayPriority.value === 'High'){
                                                        todoDisplayPriority.value = 'Low';
                                                        todoDisplayPriority.textContent = 'Low';

                                                        return;
                                                    }


                                                });

                                                const lineBreak3 = document.createElement('br');
                                                todoDisplay.append(lineBreak3);


                                                const projectsDropDown = document.createElement('select');

                                                projectsDropDown.setAttribute('name','project-display-choices');
                    
                                                projectsDropDown.setAttribute('id','project-display-choices');
                    
                                                projectsDropDown.classList.add('form-input');
                    
                                                todoDisplay.append(projectsDropDown);




                                                        const unprocessedProject = projectObjects().unprocessedProjectArray

                                                        const optionsNode = document.querySelectorAll('option');
                                            
                                                        if(optionsNode){
                                            
                                                            optionsNode.forEach(option => {
                                                                option.remove();
                                                            });
                                            
                                                        }
                                            
                                                        const option0 = document.createElement('option');
                                            
                                                        option0.textContent = object.project;
                                            
                                                        option0.value = object.project;
                                            
                                                        projectsDropDown.append(option0);
                                            
                                            
                                                        unprocessedProject.forEach(obj => {
                                            
                                                            const projectOption = document.createElement('option');
                                            
                                                            projectOption.textContent = obj.title;
                                            
                                                            projectOption.value = obj.title;
                                            
                                                            projectsDropDown.append(projectOption);
                                                        });



                                                const lineBreak4 = document.createElement('br');
                                                todoDisplay.append(lineBreak4);

                                                // create line break 

                                                const todoDisplayStatus = document.createElement('button');

                                                todoDisplayStatus.setAttribute('value',object.status);

                                                todoDisplayStatus.setAttribute('type','button');

                                                todoDisplayStatus.setAttribute('id','todo-display-status');

                                                todoDisplayStatus.textContent = object.status;

                                                todoDisplayStatus.classList.add('todo-update');

                                                todoDisplay.append(todoDisplayStatus);

                                                todoDisplayStatus.addEventListener('click', function(){

                                                    // Add classes for different priorities (different colours)

                                                    if (todoDisplayStatus.value === 'pending'){
                                                        todoDisplayStatus.value = 'complete';
                                                        todoDisplayStatus.textContent = 'Complete';

                                                        return;
                                                    }

                                                    if (todoDisplayStatus.value === 'complete'){
                                                        todoDisplayStatus.value = 'pending';
                                                        todoDisplayStatus.textContent = 'Pending';

                                                        return;
                                                    }


                                                });

                                                const lineBreak5 = document.createElement('br');
                                                todoDisplay.append(lineBreak5);


                                                const todoUpdate = document.createElement('button');

                                                todoUpdate.setAttribute('value','');

                                                todoUpdate.setAttribute('type','button');

                                                todoUpdate.setAttribute('id','todo-update');

                                                todoUpdate.textContent = 'Update';

                                                todoUpdate.classList.add('todo-update');

                                                todoDisplay.append(todoUpdate);

                                                
                                                const lineBreak6 = document.createElement('br');
                                                todoDisplay.append(lineBreak6);


                                                const todoDelete = document.createElement('button');

                                                todoDelete.setAttribute('value','');

                                                todoDelete.setAttribute('type','button');

                                                todoDelete.setAttribute('id','todo-delete');

                                                todoDelete.textContent = 'Delete';

                                                todoDelete.classList.add('todo-update');

                                                todoDisplay.append(todoDelete);


                                                updateTodoItem(object);

                                                deleteTodoItem(object);


                                                
                                            
                                    });

                                });
                                
                            }

                }
                
            }

        }

    }

    emptyDisplay();

}


export default appendTodoObjects;