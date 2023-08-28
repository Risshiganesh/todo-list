import todoModule from "./createTodos";



function projectModule () {

    // Factory function to create projects
    function projectFactory (title,desc,dueDate,priority,remindIn,status){


        return {title,desc,dueDate,priority,remindIn,status}
    }


    // This is where unsorted project arrays are stored
    const projectArray = [];



    function getStoredProjects (){

        const storedProjects = localStorage.getItem('storedProjects');

        if(!storedProjects){
            return;
        }
        const parseStoredProjects = JSON.parse(storedProjects);

        parseStoredProjects.forEach(projects => {
            projectArray.push(projects)
        });

    }

    // get stored projects on boot
    getStoredProjects();

    // localStorage.removeItem('storedProjects');


    

    function localStorageUpdate(){

        console.log('SET LOCAL STORAGE');

        localStorage.setItem('storedProjects',JSON.stringify(projectArray));

    }







    function createProject (title,desc,dueDate,priority,remindIn,status){
        const newProject = projectFactory(title,desc,dueDate,priority,remindIn,status); //change this later if you need to
        projectArray.push(newProject);
        localStorageUpdate();
        return;
    }


    // 8 high priority

    // const currentDate = new Date();

    // const day = currentDate.getDate();

    // const month = currentDate.getMonth();

    // const year = currentDate.getFullYear();

    // let remind = -2;

    // let remind1 = 0;

    // for (let index = 4; index > 0; index--) {

        

    //     createProject(`project${index}test`,`desc${index}`,`${year + remind}-${month + remind}-${day + remind}`,`high`,remind,'complete');

    //     createProject(`project${index}test2`,`desc${index}`,`${year + remind}-${month + remind}-${day + remind}`,`high`,remind+index,'pending');

    //     remind = remind + index;

        
    // }


    // // 10 low priority
    // for (let index = 6; index > 0; index--) {

        

    //     createProject(`project ${index}`,`desc${index}`,`${year + remind1}-${month + remind1}-${day + remind1}`,`low`,remind1,'complete');
    //     createProject(`project${index}ww`,`desc${index}`,`${year + remind1}-${month + remind1}-${day - remind1}`,`low`,remind1,'pending');
    //     createProject(`project${index}up`,`desc${index}`,`${year + remind1}-${month + remind1}-${day + remind1}`,`low`,remind1-1,'pending');
        
    //     remind1 = remind1 - index;
    // }




    function updateProject (oldDetails,newDetails){

        console.log('CHANGE WORKS!')

        projectArray.forEach(project => {


            if (project.title === oldDetails.title && 
                project.desc === oldDetails.desc && 
                project.dueDate === oldDetails.dueDate && 
                project.remindIn === oldDetails.remindIn && 
                project.priority === oldDetails.priority && 
                project.status === oldDetails.status) {

                    console.log('CHANGE WORKS!')


                project.title = newDetails.newTitle;
                project.desc = newDetails.newDesc;
                project.dueDate = newDetails.newDue;
                project.remindIn = newDetails.newReminder;
                project.priority = newDetails.newPriority;
                project.status = newDetails.newStatus;

            }
            
            
            
        });

        localStorageUpdate();

    }


    function deleteProject (oldDetails){

        todoModule.deleteTodoOfProject(oldDetails);


        for (let index = 0; index < projectArray.length; index++) {


            if (projectArray[index].title === oldDetails.title && 
                projectArray[index].desc === oldDetails.desc && 
                projectArray[index].dueDate === oldDetails.dueDate && 
                projectArray[index].remindIn === oldDetails.remindIn && 
                projectArray[index].priority === oldDetails.priority && 
                projectArray[index].status === oldDetails.status) {


                projectArray.splice(index,1)

            }
            
        }

        localStorageUpdate();

    }

 

    return {projectArray,createProject,updateProject,deleteProject};

}

const initializedProjectModule = projectModule();

   
export default initializedProjectModule;