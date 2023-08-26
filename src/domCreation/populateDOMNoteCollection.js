import notesObject from "../tabObjects/allNotesTab";
import { updateNoteItem } from "../domActivities/domActivities";

function appendNotesObject(){
            
    const collectionContainer = document.querySelector('.collection-container');

    collectionContainer.querySelectorAll('*').forEach(element => {
        
        element.remove();

    });


    const notesCollection = document.createElement('div');

    notesCollection.classList.add('notes-collection');

    collectionContainer.append(notesCollection);

    const notesArray = notesObject().reverse();

    console.log(notesArray);

    notesArray.forEach(object => {
        const notesContainer = document.createElement('div');
        notesContainer.classList.add('notes-container');
        notesCollection.append(notesContainer);

            const noteTitle = document.createElement('div');
            noteTitle.classList.add('note-title');
            noteTitle.textContent = object.title;
            notesContainer.append(noteTitle);
            
            const noteDesc = document.createElement('div');
            noteDesc.classList.add('note-desc');
            noteDesc.textContent = object.desc;
            notesContainer.append(noteDesc);



        notesContainer.addEventListener('click',function(){

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


                    // const todoDisplayDate = document.createElement('input');

                    // todoDisplayDate.setAttribute('type','date');

                    // todoDisplayDate.setAttribute('id','todo-display-date');

                    // todoDisplayDate.value = object.dueDate;

                    // todoDisplayDate.classList.add('todo-update');

                    // todoDisplay.append(todoDisplayDate);

                    // const lineBreak1 = document.createElement('br');                                               
                    // todoDisplay.append(lineBreak1);


                    // const todoDisplayRemindIn = document.createElement('input');

                    // todoDisplayRemindIn.setAttribute('type','number');

                    // todoDisplayRemindIn.setAttribute('id','todo-display-remind-in');

                    // console.log(object.dueDate);

                    // todoDisplayRemindIn.setAttribute('placeholder','Remind in how many days?');

                    // todoDisplayRemindIn.value = object.remindIn;

                    // todoDisplayRemindIn.classList.add('todo-update');

                    // todoDisplay.append(todoDisplayRemindIn);

                    // const lineBreak2 = document.createElement('br');
                    // todoDisplay.append(lineBreak2);


                    // const todoDisplayPriority = document.createElement('button');

                    // todoDisplayPriority.setAttribute('value',object.priority);

                    // todoDisplayPriority.setAttribute('type','button');

                    // todoDisplayPriority.setAttribute('id','todo-display-priority');

                    // todoDisplayPriority.textContent = object.priority;

                    // todoDisplayPriority.classList.add('todo-update');

                    // todoDisplay.append(todoDisplayPriority);

                    // todoDisplayPriority.addEventListener('click', function(){

                        
                    //     console.log(todoDisplayPriority.value)

                    //     // Add classes for different priorities (different colours)

                    //     if (todoDisplayPriority.value === 'low'){
                    //         todoDisplayPriority.value = 'medium';
                    //         todoDisplayPriority.textContent = 'Medium';

                    //         return;
                    //     }

                    //     if (todoDisplayPriority.value === 'medium'){
                    //         todoDisplayPriority.value = 'high';
                    //         todoDisplayPriority.textContent = 'High';

                    //         return;
                    //     }

                    //     if (todoDisplayPriority.value === 'high'){
                    //         todoDisplayPriority.value = 'low';
                    //         todoDisplayPriority.textContent = 'Low';

                    //         return;
                    //     }


                    // });

                    // const lineBreak3 = document.createElement('br');
                    // todoDisplay.append(lineBreak3);


                    // const projectsDropDown = document.createElement('select');

                    // projectsDropDown.setAttribute('name','project-display-choices');

                    // projectsDropDown.setAttribute('id','project-display-choices');

                    // projectsDropDown.classList.add('form-input');

                    // todoDisplay.append(projectsDropDown);




                    //         const unprocessedProject = projectObjects().unprocessedProjectArray

                    //         const optionsNode = document.querySelectorAll('option');
                
                    //         if(optionsNode){
                
                    //             optionsNode.forEach(option => {
                    //                 option.remove();
                    //             });
                
                    //         }
                
                    //         const option0 = document.createElement('option');
                
                    //         option0.textContent = object.project;
                
                    //         option0.value = object.project;
                
                    //         projectsDropDown.append(option0);
                
                
                    //         unprocessedProject.forEach(obj => {
                    //             // console.log(object.title);
                
                    //             const projectOption = document.createElement('option');
                
                    //             projectOption.textContent = obj.title;
                
                    //             projectOption.value = obj.title;
                
                    //             projectsDropDown.append(projectOption);
                    //         });



                    // const lineBreak4 = document.createElement('br');
                    // todoDisplay.append(lineBreak4);

                    // create line break 

                    // const todoDisplayStatus = document.createElement('button');

                    // todoDisplayStatus.setAttribute('value',object.status);

                    // todoDisplayStatus.setAttribute('type','button');

                    // todoDisplayStatus.setAttribute('id','todo-display-status');

                    // todoDisplayStatus.textContent = object.status;

                    // todoDisplayStatus.classList.add('todo-update');

                    // todoDisplay.append(todoDisplayStatus);

                    // todoDisplayStatus.addEventListener('click', function(){

                    //     // Add classes for different priorities (different colours)

                    //     if (todoDisplayStatus.value === 'pending'){
                    //         todoDisplayStatus.value = 'complete';
                    //         todoDisplayStatus.textContent = 'Complete';

                    //         return;
                    //     }

                    //     if (todoDisplayStatus.value === 'complete'){
                    //         todoDisplayStatus.value = 'pending';
                    //         todoDisplayStatus.textContent = 'Pending';

                    //         return;
                    //     }


                    // });

                    const lineBreak5 = document.createElement('br');
                    todoDisplay.append(lineBreak5);


                    const todoUpdate = document.createElement('button');

                    todoUpdate.setAttribute('value','');

                    todoUpdate.setAttribute('type','button');

                    todoUpdate.setAttribute('id','todo-update');

                    todoUpdate.textContent = 'Update';

                    todoUpdate.classList.add('todo-update');

                    todoDisplay.append(todoUpdate);


                    updateNoteItem(object);
                
        });
    });




}

// appendNotesObject();

export default appendNotesObject