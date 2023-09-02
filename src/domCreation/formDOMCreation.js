// for selection options
import projectObjects from '../tabObjects/allProjectsTab'

function formDomModule (){

    const mainContainer = document.querySelector('.main-container');



//    FORM BUTTON


    const formButtonContainer = document.createElement('div');

    formButtonContainer.classList.add('form-button-container');

    mainContainer.append(formButtonContainer);


        const formButton = document.createElement('button');

        formButton.classList.add('form-button');

        formButton.textContent = '+';

        formButtonContainer.append(formButton);

        // console.log('main dOm');
    


    

    const formContainer = document.createElement('div');

    formContainer.classList.add('form-container');

    mainContainer.append(formContainer);

        const todoCreationForm = document.createElement('div');

        todoCreationForm.classList.add('todo-creation-form');

        formContainer.append(todoCreationForm);

            const entryCreationForm = document.createElement('form');

            todoCreationForm.append(entryCreationForm);

                const fieldset = document.createElement('fieldset');

                entryCreationForm.append(fieldset);

                    const legend = document.createElement('legend');

                    // legend.textContent = 'Create an entry'

                    fieldset.append(legend);


                    const todoCreationTitle = document.createElement('div');
                    todoCreationTitle.classList.add('todo-creation-title');
                    todoCreationTitle.textContent = 'Create a new entry'
                    fieldset.append(todoCreationTitle);


                        const inputCollection = document.createElement('div');
                        inputCollection.classList.add('input-collection');
                        fieldset.append(inputCollection);



                        const inputContainer1 = document.createElement('div');

                        inputContainer1.classList.add('input-container');

                        inputCollection.append(inputContainer1);

                            const todoTitleLabel = document.createElement('label');

                            todoTitleLabel.setAttribute('for','todo-title');

                            todoTitleLabel.textContent = 'Title:';

                            inputContainer1.append(todoTitleLabel);


                            // const todoTitleLineBreak = document.createElement('br');

                            // inputContainer1.append(todoTitleLineBreak);

                            
                            const todoTitleInput = document.createElement('input');

                            todoTitleInput.setAttribute('type','text');

                            todoTitleInput.setAttribute('id','todo-title');

                            todoTitleInput.setAttribute('required','');

                            todoTitleInput.classList.add('form-input');

                            inputContainer1.append(todoTitleInput);

                    


                        const inputContainer2 = document.createElement('div');

                        inputContainer2.classList.add('input-container');

                        inputCollection.append(inputContainer2);

                            const todoDescLabel = document.createElement('label');

                            todoDescLabel.setAttribute('for','todo-desc');

                            todoDescLabel.textContent = 'Description:';

                            inputContainer2.append(todoDescLabel);


                            // const todoDescLineBreak = document.createElement('br');

                            // inputContainer2.append(todoDescLineBreak);

                            
                            const todoDescTextArea = document.createElement('textarea');

                            todoDescTextArea.setAttribute('name','');

                            todoDescTextArea.setAttribute('id','todo-desc');

                            todoDescTextArea.setAttribute('cols','30');

                            todoDescTextArea.setAttribute('rows','10');

                            todoDescTextArea.setAttribute('required','');

                            todoDescTextArea.classList.add('form-input');

                            inputContainer2.append(todoDescTextArea);


                        const inputContainer3 = document.createElement('div');

                        inputContainer3.classList.add('radio-input-container');

                        inputCollection.append(inputContainer3);


                            const noteRadioDiv = document.createElement('div');
                            noteRadioDiv.classList.add('note-radio-div');
                            inputContainer3.append(noteRadioDiv)


                                const isNoteRadio = document.createElement('input');

                                isNoteRadio.setAttribute('type','radio');

                                isNoteRadio.setAttribute('id','is-note');

                                isNoteRadio.setAttribute('name','entry-type');

                                isNoteRadio.setAttribute('checked','');

                                isNoteRadio.classList.add('form-input');

                                noteRadioDiv.append(isNoteRadio);

                                

                                const noteRadioLabel = document.createElement('label');

                                noteRadioLabel.setAttribute('for','is-note');

                                noteRadioLabel.textContent = 'Note';

                                noteRadioDiv.append(noteRadioLabel);


                            const todoRadioDiv = document.createElement('div');
                            todoRadioDiv.classList.add('todo-radio-div');
                            inputContainer3.append(todoRadioDiv)



                                const isTodoRadio = document.createElement('input');

                                isTodoRadio.setAttribute('type','radio');

                                isTodoRadio.setAttribute('id','is-todo');

                                isTodoRadio.setAttribute('name','entry-type');

                                isTodoRadio.classList.add('form-input');

                                todoRadioDiv.append(isTodoRadio);



                                const todoRadioLabel = document.createElement('label');

                                todoRadioLabel.setAttribute('for','is-todo');

                                todoRadioLabel.textContent = 'To-do';

                                todoRadioDiv.append(todoRadioLabel);


                        const createNewTodo = document.createElement('div');

                        createNewTodo.classList.add('create-new-todo');

                        inputCollection.append(createNewTodo);



                        


                            const inputContainer4 = document.createElement('div');

                            inputContainer4.classList.add('input-container');

                            createNewTodo.append(inputContainer4);

                                const todoDateLabel = document.createElement('label');

                                todoDateLabel.setAttribute('for','todo-date');

                                todoDateLabel.textContent = 'Due date:';

                                inputContainer4.append(todoDateLabel);


                                // const todoDateLineBreak = document.createElement('br');

                                // inputContainer4.append(todoDateLineBreak);

                                
                                const todoDateInput = document.createElement('input');

                                todoDateInput.setAttribute('type','date');

                                todoDateInput.setAttribute('id','todo-date');

                                todoDateInput.classList.add('form-input');

                                inputContainer4.append(todoDateInput);


                        // Continue creating form elements


                            const inputContainer5 = document.createElement('div');

                            inputContainer5.classList.add('input-container');

                            createNewTodo.append(inputContainer5);

                                const todoRemindInLabel = document.createElement('label');

                                todoRemindInLabel.setAttribute('for','todo-remind-in');

                                todoRemindInLabel.textContent = 'Remind-in(days):';

                                inputContainer5.append(todoRemindInLabel);


                                // const todoRemindInLineBreak = document.createElement('br');

                                // inputContainer5.append(todoRemindInLineBreak);

                                
                                const todoRemindInInput = document.createElement('input');

                                todoRemindInInput.setAttribute('type','number');

                                todoRemindInInput.setAttribute('min','0');

                                todoRemindInInput.setAttribute('max','30');

                                todoRemindInInput.setAttribute('id','todo-remind-in');

                                todoRemindInInput.classList.add('form-input');

                                inputContainer5.append(todoRemindInInput);




                            const inputContainer6 = document.createElement('div');

                            inputContainer6.classList.add('input-container');

                            createNewTodo.append(inputContainer6);

                                const todoPriorityLabel = document.createElement('label');

                                todoPriorityLabel.setAttribute('for','');

                                todoPriorityLabel.textContent = 'Priority:';

                                inputContainer6.append(todoPriorityLabel);


                                // const todoPriorityLineBreak = document.createElement('br');

                                // inputContainer6.append(todoPriorityLineBreak);

                                
                                const todoPriorityButton = document.createElement('button');

                                todoPriorityButton.setAttribute('value','Low');

                                todoPriorityButton.setAttribute('type','button');

                                todoPriorityButton.setAttribute('id','todo-priority');

                                todoPriorityButton.textContent = 'Low';

                                todoPriorityButton.classList.add('form-input');

                                inputContainer6.append(todoPriorityButton);

                                todoPriorityButton.addEventListener('click', function(){

                                    // Add classes for different priorities (different colours)

                                    if (todoPriorityButton.value === 'Low'){
                                        todoPriorityButton.value = 'Medium';
                                        todoPriorityButton.textContent = 'Medium';

                                        return;
                                    }

                                    if (todoPriorityButton.value === 'Medium'){
                                        todoPriorityButton.value = 'High';
                                        todoPriorityButton.textContent = 'High';

                                        return;
                                    }

                                    if (todoPriorityButton.value === 'High'){
                                        todoPriorityButton.value = 'Low';
                                        todoPriorityButton.textContent = 'Low';

                                        return;
                                    }


                                });


                            const inputContainer7 = document.createElement('div');

                            inputContainer7.classList.add('radio-input-container');

                            createNewTodo.append(inputContainer7);

                                
                                const existingProjectDiv  = document.createElement('div');
                                existingProjectDiv.classList.add('existing-project-div');
                                inputContainer7.append(existingProjectDiv)





                                    const existingProjectRadio = document.createElement('input');

                                    existingProjectRadio.setAttribute('type','radio');

                                    existingProjectRadio.setAttribute('id','existing-project');

                                    // existingProjectRadio.setAttribute('required','');

                                    existingProjectRadio.setAttribute('name','project');

                                    existingProjectRadio.classList.add('form-input');

                                    existingProjectDiv.append(existingProjectRadio);

                                    

                                    const existingProjectRadioLabel = document.createElement('label');

                                    existingProjectRadioLabel.setAttribute('for','existing-project');

                                    existingProjectRadioLabel.textContent = 'Existing project';

                                    existingProjectDiv.append(existingProjectRadioLabel);



                                const newProjectDiv = document.createElement('div');
                                newProjectDiv.classList.add('new-project-div');
                                inputContainer7.append(newProjectDiv)


                                    const newProjectRadio = document.createElement('input');

                                    newProjectRadio.setAttribute('type','radio');

                                    newProjectRadio.setAttribute('id','new-project');

                                    newProjectRadio.setAttribute('name','project');

                                    newProjectRadio.classList.add('form-input');

                                    newProjectDiv.append(newProjectRadio);



                                    const newProjectRadioLabel = document.createElement('label');

                                    newProjectRadioLabel.setAttribute('for','new-project');

                                    newProjectRadioLabel.textContent = 'New Project';

                                    newProjectDiv.append(newProjectRadioLabel);






                        const selectExistingProject = document.createElement('div');

                        selectExistingProject.classList.add('select-existing-project');

                        inputCollection.append(selectExistingProject);


                            const inputContainer8 = document.createElement('div');

                            inputContainer8.classList.add('input-container');

                            selectExistingProject.append(inputContainer8);


                                const projectChoicesLabel = document.createElement('label');

                                projectChoicesLabel.setAttribute('for','project-choices');

                                projectChoicesLabel.textContent = 'Which project is this for?';

                                inputContainer8.append(projectChoicesLabel);


                                const projectChoicesDropDown = document.createElement('select');

                                projectChoicesDropDown.setAttribute('name','project-choices');
    
                                projectChoicesDropDown.setAttribute('id','project-choices');
    
                                projectChoicesDropDown.classList.add('form-input');
    
                                inputContainer8.append(projectChoicesDropDown);

















                               


                                    

                                    // Get titles from existing projects
                                    // Update when new projects are created


                        
                        const createNewProject = document.createElement('div');

                        createNewProject.classList.add('create-new-project');

                        inputCollection.append(createNewProject);

                            const projectCreationTitle = document.createElement('div');
                            projectCreationTitle.classList.add('project-creation-title');
                            projectCreationTitle.textContent = 'Create a new project'
                            createNewProject.append(projectCreationTitle);


                            const inputContainer9 = document.createElement('div');

                            inputContainer9.classList.add('input-container');

                            createNewProject.append(inputContainer9);

                                const projectTitleLabel = document.createElement('label');

                                projectTitleLabel.setAttribute('for','project-title');

                                projectTitleLabel.textContent = 'Title:';

                                inputContainer9.append(projectTitleLabel);


                                // const projectTitleLineBreak = document.createElement('br');

                                // inputContainer9.append(projectTitleLineBreak);

                                
                                const projectTitleInput = document.createElement('input');

                                projectTitleInput.setAttribute('type','text');

                                projectTitleInput.setAttribute('id','project-title');

                                projectTitleInput.classList.add('form-input');

                                inputContainer9.append(projectTitleInput);

                    


                            const inputContainer10 = document.createElement('div');

                            inputContainer10.classList.add('input-container');

                            createNewProject.append(inputContainer10);

                                const projectDescLabel = document.createElement('label');

                                projectDescLabel.setAttribute('for','project-desc');

                                projectDescLabel.textContent = 'Description:';

                                inputContainer10.append(projectDescLabel);


                                // const projectDescLineBreak = document.createElement('br');

                                // inputContainer10.append(projectDescLineBreak);

                                
                                const projectDescTextArea = document.createElement('textarea');

                                projectDescTextArea.setAttribute('name','');

                                projectDescTextArea.setAttribute('id','project-desc');

                                projectDescTextArea.setAttribute('cols','30');

                                projectDescTextArea.setAttribute('rows','10');

                                projectDescTextArea.classList.add('form-input');

                                inputContainer10.append(projectDescTextArea);

                            






                            const inputContainer11 = document.createElement('div');

                            inputContainer11.classList.add('input-container');

                            createNewProject.append(inputContainer11);

                                const projectDateLabel = document.createElement('label');

                                projectDateLabel.setAttribute('for','project-date');

                                projectDateLabel.textContent = 'Due date:';

                                inputContainer11.append(projectDateLabel);


                                // const projectDateLineBreak = document.createElement('br');

                                // inputContainer11.append(projectDateLineBreak);

                                
                                const projectDateInput = document.createElement('input');

                                projectDateInput.setAttribute('type','date');

                                projectDateInput.setAttribute('id','project-date');

                                projectDateInput.classList.add('form-input');

                                inputContainer11.append(projectDateInput);


                        // Continue creating form elements


                            const inputContainer12 = document.createElement('div');

                            inputContainer12.classList.add('input-container');

                            createNewProject.append(inputContainer12);

                                const projectRemindInLabel = document.createElement('label');

                                projectRemindInLabel.setAttribute('for','project-remind-in');

                                projectRemindInLabel.textContent = 'Remind-in(days):';

                                inputContainer12.append(projectRemindInLabel);


                                // const projectRemindInLineBreak = document.createElement('br');

                                // inputContainer12.append(projectRemindInLineBreak);

                                
                                const projectRemindInInput = document.createElement('input');

                                projectRemindInInput.setAttribute('type','number');

                                projectRemindInInput.setAttribute('min','0');

                                projectRemindInInput.setAttribute('max','30');

                                projectRemindInInput.setAttribute('id','project-remind-in');

                                projectRemindInInput.classList.add('form-input');

                                inputContainer12.append(projectRemindInInput);




                            const inputContainer13 = document.createElement('div');

                            inputContainer13.classList.add('input-container');

                            createNewProject.append(inputContainer13);

                                const projectPriorityLabel = document.createElement('label');

                                projectPriorityLabel.setAttribute('for','');

                                projectPriorityLabel.textContent = 'Priority:';

                                inputContainer13.append(projectPriorityLabel);


                                // const projectPriorityLineBreak = document.createElement('br');

                                // inputContainer13.append(projectPriorityLineBreak);

                                
                                const projectPriorityButton = document.createElement('button');

                                projectPriorityButton.setAttribute('value','Low');

                                projectPriorityButton.setAttribute('type','button');

                                projectPriorityButton.setAttribute('id','project-priority');

                                projectPriorityButton.textContent = 'Low';

                                projectPriorityButton.classList.add('form-input');

                                inputContainer13.append(projectPriorityButton);

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


                        const submitButton = document.createElement('button');

                        submitButton.setAttribute('type','submit');

                        submitButton.setAttribute('id','form-submit');

                        submitButton.textContent = 'Submit';

                        inputCollection.append(submitButton);





                        function existingProjectOptions () {

                            const existingProjectRadio = document.querySelector('#existing-project');

                            const newProjectRadio = document.querySelector('#new-project');




                            const unprocessedProject = projectObjects().unprocessedProjectArray


                            if (unprocessedProject.length === 0) {

                                existingProjectRadio.removeAttribute('checked','');
                                existingProjectRadio.checked = false;
                                existingProjectRadio.disabled = true;

                                // newProjectRadio.setAttribute('checked','');
                                // newProjectRadio.checked = true;


                                return
                            }

                            if(unprocessedProject.length > 0 ){

                                existingProjectRadio.disabled = false;


                                const optionsNode = document.querySelectorAll('option');

                                if(optionsNode){

                                    optionsNode.forEach(option => {
                                        option.remove();
                                    });

                                }

                                const option0 = document.createElement('option');

                                option0.textContent = 'Choose one';

                                option0.value = '';

                                projectChoicesDropDown.append(option0);


                                unprocessedProject.forEach(object => {
                                    // console.log(object.title);

                                    const projectOption = document.createElement('option');

                                    projectOption.textContent = object.title;

                                    projectOption.value = object.title;

                                    projectChoicesDropDown.append(projectOption);
                                });

                                return;

                            }


                        }



                        // function existingProjectOptions (){

                        //     const unprocessedProject = projectObjects().unprocessedProjectArray

                        //     const optionsNode = document.querySelectorAll('option');

                        //     if(optionsNode){

                        //         optionsNode.forEach(option => {
                        //             option.remove();
                        //         });

                        //     }

                        //     const option0 = document.createElement('option');

                        //     option0.textContent = 'Choose one';

                        //     option0.value = '';

                        //     projectChoicesDropDown.append(option0);


                        //     unprocessedProject.forEach(object => {
                        //         // console.log(object.title);

                        //         const projectOption = document.createElement('option');

                        //         projectOption.textContent = object.title;

                        //         projectOption.value = object.title;

                        //         projectChoicesDropDown.append(projectOption);
                        //     });

                        // }

                        existingProjectOptions();





                                




                        return {existingProjectOptions};


}

const createFormDOM = formDomModule();


export default createFormDOM;