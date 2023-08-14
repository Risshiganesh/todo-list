

function todoModule (){

    // Factory function to create notes

    function todoFactory (title,desc,dueDate,remindIn,priority,notes,status,project){
        return {title,desc,dueDate,remindIn,priority,notes,status,project}
    }

    // This is where unsorted todo arrays are stored
    const todoArray = [];


    // this is the function that will be used to create Todos
    function createTodo (title,desc,dueDate,remindIn,priority,notes,status,project= 'none'){
        const newToDo = todoFactory(title,desc,dueDate,remindIn,priority,notes,status,project);
        todoArray.push(newToDo);
        return;
    }


    // This must be deleted later as it is created primarily for testing

    const currentDate = new Date();

    const day = currentDate.getDate();

    const month = currentDate.getMonth();

    const year = currentDate.getFullYear();


    for (let index = 1; index <= 10; index++) {

        createTodo(`title${index}`,`desc${index}`,`${year + index}-${month + index}-${day + index}`,index,`high`,`blah blah blah`,`pending`,'project2');

        createTodo(`title${index}`,`desc${index}`,`${year + index}-${month + index}-${day + index}`,index,`low`,`blah blah blah`,`pending`,'project2');

        createTodo(`title${index}`,`desc${index}`,'',index,`low`,`blah blah blah`,`pending`,'project2');


   
        
    }

    for (let index = 1; index <= 5; index++) {

        createTodo(`title${index}`,`desc${index}`,`${year + index}-${month + index}-${day + index}`,index,`high`,`mamaaaa oooouu`,`complete`,'project1test');

        createTodo(`title${index}`,`desc${index}`,`${year + index}-${month + index}-${day + index}`,index,`medium`,`mamaaaa oooouu`,`pending`,'project1test');

   
        
    }

    

    // End of test objects

    return {todoArray, createTodo};


}


const initializedTodoModule = todoModule();


// initialized version is sent because the is no reason to re-initialise later on
export default initializedTodoModule;
