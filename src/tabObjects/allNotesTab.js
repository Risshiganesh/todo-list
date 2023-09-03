import sortingMethods from '../domActivities/sortingMethods'

function allNotesTab (){

    const cloneTodoArray = sortingMethods.cloneObject().cloneTodoArray;

    const notesArray = sortingMethods.noteSorter(cloneTodoArray);



    return notesArray;



}

allNotesTab();

export default allNotesTab;