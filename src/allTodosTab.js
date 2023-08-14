
import sortingMethods from './sortingMethods'

function allTodosTab (){

    const cloneTodoArray = sortingMethods.cloneObject().cloneTodoArray;
    const sortedTodoArray = sortingMethods.prioritySorter(cloneTodoArray);

    for (const priority in sortedTodoArray) {
        
        sortedTodoArray[priority] = sortingMethods.sortDueDate(sortedTodoArray[priority]);

    }


    console.log(sortedTodoArray);

    return sortedTodoArray;


}

console.log('TODO TAB');
allTodosTab();

export default allTodosTab;