// import populateTodoCollection from "./populateDOMTodoCollection"

import notesObject from "./allNotesTab"

function allNoteDOMModule (){

    const displayContainer = document.querySelector('.display-container');




    // move to domActivity
    function removeExistingDisplayDOM (){

        const displayContainer = document.querySelector('.display-container');

        displayContainer.querySelectorAll('*').forEach(element => {
        
        element.remove();

    });

    }

    removeExistingDisplayDOM();


    


    


    const todoContainerTitle = document.createElement('div');

    todoContainerTitle.classList.add('todo-container-title');

    displayContainer.append(todoContainerTitle);

        const tabTitle = document.createElement('div');

        tabTitle.classList.add('tab-title');

        todoContainerTitle.append(tabTitle);

            const todoHeader = document.createElement('h1');

            todoHeader.textContent = 'Notes';

            tabTitle.append(todoHeader);


            const todoParagraph = document.createElement('p');

            todoParagraph.textContent = 'Your collection of Notes are displayed here';

            tabTitle.append(todoParagraph);

        






    
    const collectionContainer = document.createElement('div');

    collectionContainer.classList.add('collection-container');

    displayContainer.append(collectionContainer);

        // create a populate notes module

        // Create it here first then send it somewhere else.

        function appendNotesObject(){
            
            const collectionContainer = document.querySelector('.collection-container')

            collectionContainer.querySelectorAll('*').forEach(element => {
                
                element.remove();

            });


            const notesCollection = document.createElement('div');

            notesCollection.classList.add('notes-collection');

            collectionContainer.append(notesCollection);

            const notesArray = notesObject();

            console.log(notesArray);

            notesArray.forEach(element => {
                const notesContainer = document.createElement('div');
                notesContainer.classList.add('notes-container');
                notesCollection.append(notesContainer);

                    const noteTitle = document.createElement('div');
                    noteTitle.classList.add('note-title');
                    noteTitle.textContent = element.title;
                    notesContainer.append(noteTitle);
                    
                    const noteDesc = document.createElement('div');
                    noteDesc.classList.add('note-desc');
                    noteDesc.textContent = element.desc;
                    notesContainer.append(noteDesc);
            });




        }

        appendNotesObject();




       

    
    
}


export default allNoteDOMModule;