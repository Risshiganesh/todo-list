import projectObjects from '../tabObjects/allProjectsTab';

import { updateTodoItem, deleteTodoItem } from "../domActivities/domActivities";


function displayTodo(object){

    const mainContainer = document.querySelector('.main-container');

    const todoDisplayContainer = document.createElement('div');

    todoDisplayContainer.classList.add('todo-display-container');

    mainContainer.append(todoDisplayContainer);


        const todoForm = document.createElement('form');

        todoDisplayContainer.append(todoForm)


        const todoDisplay = document.createElement('div');

        todoDisplay.classList.add('todo-display');

        todoForm.append(todoDisplay);



            const todoDisplayTitle = document.createElement('input');

            todoDisplayTitle.setAttribute('placeholder','Title');

            todoDisplayTitle.setAttribute('id','todo-display-title');

            todoDisplayTitle.setAttribute('required','');

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

            todoDisplayDate.setAttribute('required','');

            todoDisplay.append(todoDisplayDate);

            // const lineBreak1 = document.createElement('br');                                               
            // todoDisplay.append(lineBreak1);


            const todoDisplayRemindIn = document.createElement('input');

            todoDisplayRemindIn.setAttribute('type','number');

            todoDisplayRemindIn.setAttribute('id','todo-display-remind-in');

            todoDisplayRemindIn.setAttribute('placeholder','Remind in how many days?');

            todoDisplayRemindIn.value = object.remindIn;

            todoDisplayRemindIn.classList.add('todo-update');

            todoDisplayRemindIn.setAttribute('required','');

            todoDisplay.append(todoDisplayRemindIn);

            // const lineBreak2 = document.createElement('br');
            // todoDisplay.append(lineBreak2);



            const projectsDropDown = document.createElement('select');

            projectsDropDown.setAttribute('name','project-display-choices');

            projectsDropDown.setAttribute('id','project-display-choices');

            projectsDropDown.setAttribute('required','');

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




            const firstButtonContainer = document.createElement('div');

            firstButtonContainer.classList.add('first-button-container');

            todoDisplay.append(firstButtonContainer)


                const priorityBtnDiv = document.createElement('div');

                priorityBtnDiv.classList.add('priority-button-div');

                firstButtonContainer.append(priorityBtnDiv)


                    const priorityLabel = document.createElement('label');

                    priorityLabel.textContent = 'Priority: ';

                    priorityLabel.setAttribute('for','todo-display-priority');

                    priorityBtnDiv.append(priorityLabel);


                    // const linebreakPriority = document.createElement('br');
                    // priorityBtnDiv.append(linebreakPriority);



                    const todoDisplayPriority = document.createElement('button');

                    todoDisplayPriority.setAttribute('value',object.priority);

                    todoDisplayPriority.setAttribute('type','button');

                    todoDisplayPriority.setAttribute('id','todo-display-priority');

                    todoDisplayPriority.textContent = object.priority;

                    // todoDisplayPriority.classList.add('todo-update');

                    priorityBtnDiv.append(todoDisplayPriority);


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

                const statusBtnDiv = document.createElement('div');

                statusBtnDiv.classList.add('status-button-div');

                firstButtonContainer.append(statusBtnDiv)

                // const lineBreak3 = document.createElement('br');
                // todoDisplay.append(lineBreak3);


                    const statusLabel = document.createElement('label');

                    statusLabel.textContent = 'Status: ';

                    statusLabel.setAttribute('for','todo-display-status');

                    statusBtnDiv.append(statusLabel);



                // const lineBreak4 = document.createElement('br');
                // todoDisplay.append(lineBreak4);

                // create line break 

                    const todoDisplayStatus = document.createElement('button');

                    todoDisplayStatus.setAttribute('value',object.status);

                    todoDisplayStatus.setAttribute('type','button');

                    todoDisplayStatus.setAttribute('id','todo-display-status');

                    todoDisplayStatus.textContent = object.status;

                    // todoDisplayStatus.classList.add('todo-update');

                    statusBtnDiv.append(todoDisplayStatus);

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



            
            const secondButtonContainer = document.createElement('div');

            secondButtonContainer.classList.add('second-button-container');

            todoDisplay.append(secondButtonContainer)
            // const lineBreak5 = document.createElement('br');
            // todoDisplay.append(lineBreak5);


                const deleteBtnDiv = document.createElement('div');

                deleteBtnDiv.classList.add('delete-button-div');

                secondButtonContainer.append(deleteBtnDiv);


                    const todoDelete = document.createElement('button');

                    todoDelete.setAttribute('value','');

                    todoDelete.setAttribute('type','button');

                    todoDelete.setAttribute('id','todo-delete');

                    todoDelete.textContent = 'Delete';

                    todoDelete.classList.add('todo-delete');

                    deleteBtnDiv.append(todoDelete);


                    // const lineBreak6 = document.createElement('br');
                    // todoDisplay.append(lineBreak6);

                
                const updateBtnDiv = document.createElement('div');

                updateBtnDiv.classList.add('delete-button-div');

                secondButtonContainer.append(updateBtnDiv);


                    const todoUpdate = document.createElement('button');

                    todoUpdate.setAttribute('value','');

                    todoUpdate.setAttribute('type','submit');

                    todoUpdate.setAttribute('id','todo-update');

                    todoUpdate.textContent = 'Update';

                    todoUpdate.classList.add('todo-update');

                    updateBtnDiv.append(todoUpdate);


            updateTodoItem(object);

            deleteTodoItem(object);

}

export default displayTodo;