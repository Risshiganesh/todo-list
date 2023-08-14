import sortingMethods from './sortingMethods'

function allNotesTab (){

    const cloneTodoArray = sortingMethods.cloneObject().cloneTodoArray;

    const notesArray = sortingMethods.noteSorter(cloneTodoArray);

    console.log(notesArray);

    return notesArray;



}

console.log('NOTES TAB');
allNotesTab();

export default allNotesTab;