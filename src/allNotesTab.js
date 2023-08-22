import sortingMethods from './sortingMethods'

function allNotesTab (){

    const cloneTodoArray = sortingMethods.cloneObject().cloneTodoArray;

    const notesArray = sortingMethods.noteSorter(cloneTodoArray);

    console.log('NOTES TAB');

    // console.log(notesArray);

    return notesArray;



}

allNotesTab();

export default allNotesTab;