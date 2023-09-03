
import sortingMethods from '../domActivities/sortingMethods'

function allTodosTab (){

    const cloneTodoArray = sortingMethods.cloneObject().cloneTodoArray;
    const sortedTodoArray = sortingMethods.prioritySorter(cloneTodoArray);

    for (const priority in sortedTodoArray) {
        
        sortedTodoArray[priority] = sortingMethods.sortDueDate(sortedTodoArray[priority]);

    }



    return sortedTodoArray;


}


allTodosTab();

export default allTodosTab;