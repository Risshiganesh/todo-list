import { updateProjectItem,updateTodoItem, deleteProjectItem,emptyDisplay, displayDuration } from "../domActivities/domActivities";

// import displayTodo from "./displayTodo";

import displayTodosInProject from "./displayTodosInProject";

function displayProject (project){
    console.log('BOOM BOOM!');

    console.log(project.todosByPriority);                                           

    const mainContainer = document.querySelector('.main-container');

    const getProjectTodoContainer = document.querySelector('.project-todo-container');

    if (getProjectTodoContainer) {

        getProjectTodoContainer.remove();

    }

        const projectTodoContainer = document.createElement('div');

        projectTodoContainer.classList.add('project-todo-container');

        mainContainer.append(projectTodoContainer);


            const projectDisplay = document.createElement('div');
            projectDisplay.classList.add('project-display');
            projectTodoContainer.append(projectDisplay)
        

            const projectForm = document.createElement('form');

            projectDisplay.append(projectForm);


            const projectDetails = document.createElement('div');

            projectDetails.classList.add('project-details');

            projectForm.append(projectDetails);

                projectDetails.addEventListener('click',function(e){
                    e.stopPropagation();
                })


                const projectTitleInput = document.createElement('input');

                projectTitleInput.setAttribute('id','project-title-update')

                projectTitleInput.value = project.title;

                projectTitleInput.setAttribute('required','');

                projectTitleInput.setAttribute('placeholder', 'Project Title');

                projectDetails.append(projectTitleInput);




                const projectDetailsLineBreak1 = document.createElement('br');

                projectDetails.append(projectDetailsLineBreak1);




                const projectDescInput = document.createElement('textarea');

                projectDescInput.setAttribute('id','project-desc-update');

                projectDescInput.value = project.desc;

                projectDescInput.setAttribute('required','');

                projectDescInput.setAttribute('placeholder', 'Project Description');

                projectDescInput.setAttribute('rows','4');

                projectDescInput.setAttribute('cols','40');

                projectDetails.append(projectDescInput);




                const projectDetailsLineBreak2 = document.createElement('br');

                projectDetails.append(projectDetailsLineBreak2);




                const projectDateInput = document.createElement('input');

                projectDateInput.setAttribute('id','project-date-update');

                projectDateInput.value = project.dueDate;

                projectDateInput.setAttribute('required','');

                projectDateInput.setAttribute('type','date')

                projectDetails.append(projectDateInput);




                const projectDetailsLineBreak3 = document.createElement('br');

                projectDetails.append(projectDetailsLineBreak3);





                const projectRemindInInput = document.createElement('input');

                projectRemindInInput.setAttribute('id','project-reminder-update');

                projectRemindInInput.setAttribute('type','number');

                projectRemindInInput.setAttribute('min','0');

                projectRemindInInput.setAttribute('max','30');

                projectRemindInInput.setAttribute('required','');

                projectRemindInInput.classList.add('form-input');

                projectRemindInInput.value = project.remindIn;

                projectDetails.append(projectRemindInInput);

                


                const projectDetailsLineBreak4 = document.createElement('br');

                projectDetails.append(projectDetailsLineBreak4);



                const projectPriorityButton = document.createElement('button');

                projectPriorityButton.setAttribute('id','project-priority-update');

                projectPriorityButton.setAttribute('value',project.priority);

                projectPriorityButton.setAttribute('type','button');

                projectPriorityButton.textContent = project.priority;

                projectDetails.append(projectPriorityButton);

                projectPriorityButton.addEventListener('click', function(){

                    // Add classes for different priorities (different colours)

                    if (projectPriorityButton.value === 'Low'){
                        projectPriorityButton.value = 'Medium';
                        projectPriorityButton.textContent = 'Medium';

                        return;
                    }

                    if (projectPriorityButton.value === 'Medium'){
                        projectPriorityButton.value = 'High';
                        projectPriorityButton.textContent = 'High';

                        return;
                    }

                    if (projectPriorityButton.value === 'High'){
                        projectPriorityButton.value = 'Low';
                        projectPriorityButton.textContent = 'Low';

                        return;
                    }


                });



                const projectDetailsLineBreak5 = document.createElement('br');

                projectDetails.append(projectDetailsLineBreak5);





                const projectDisplayStatus = document.createElement('button');

                projectDisplayStatus.setAttribute('id','project-status-update');

                projectDisplayStatus.setAttribute('value',project.status);

                projectDisplayStatus.setAttribute('type','button');

                projectDisplayStatus.textContent = project.status;

                projectDisplayStatus.classList.add('todo-update');

                projectDetails.append(projectDisplayStatus);

                projectDisplayStatus.addEventListener('click', function(){

                    // Add classes for different priorities (different colours)

                    if (projectDisplayStatus.value === 'pending'){
                        projectDisplayStatus.value = 'complete';
                        projectDisplayStatus.textContent = 'Complete';

                        return;
                    }

                    if (projectDisplayStatus.value === 'complete'){
                        projectDisplayStatus.value = 'pending';
                        projectDisplayStatus.textContent = 'Pending';

                        return;
                    }


                });

                







            const projectTodos = document.createElement('div');

            projectTodos.classList.add('project-todos');

            projectDetails.append(projectTodos);

            // Check if we need this
            projectTodos.addEventListener('click',function(e){
                e.stopPropagation();
            })


           


            // Container that displays all todos in a project
            displayTodosInProject(project);

            // clickedProject = project;

        
            const projectUpdateButton = document.createElement('button');

            projectUpdateButton.setAttribute('value','');

            projectUpdateButton.setAttribute('type','submit');

            projectUpdateButton.setAttribute('id','project-update');

            projectUpdateButton.textContent = 'Update';

            projectUpdateButton.classList.add('project-update');

            projectDetails.append(projectUpdateButton);



            const projectDetailsLineBreak6 = document.createElement('br');

            projectDetails.append(projectDetailsLineBreak6);


            const projectDelete = document.createElement('button');

            projectDelete.setAttribute('value','');

            projectDelete.setAttribute('type','button');

            projectDelete.setAttribute('id','project-delete');

            projectDelete.textContent = 'Delete';

            projectDetails.append(projectDelete);


            updateProjectItem(project);

            deleteProjectItem(project)


       




        projectTodoContainer.addEventListener('click', function(){
            projectTodoContainer.remove();
            console.log('works!')
        });


}


export default displayProject;