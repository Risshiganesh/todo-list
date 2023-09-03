import sortingMethods from '../domActivities/sortingMethods'

function projectsTab (){

        

    const unprocessedProjectArray = sortingMethods.sortByProjectName().processedProjectArrayByName;

    

    // All projects are stored here
    // First sort the projects by priority
    const projectsByPriority = sortingMethods.prioritySorter(unprocessedProjectArray);


    

    // Then sort the notes in those projects by priority
    for (const priorityLevel in projectsByPriority) {

        projectsByPriority[priorityLevel].forEach(project => {

            // sort priority of todoCollection
            const sortByPriority = sortingMethods.prioritySorter(project.todoCollection)


            // Sort todos by due date
            for (const priority in sortByPriority) {

                sortByPriority[priority] = sortingMethods.sortDueDate(sortByPriority[priority]);

            }

            // empty todoCollection
            project.todoCollection = [];

            // create new key and attach the sorted object
            project.todosByPriority = sortByPriority;

        });

    }


    // Sort projects by due dates
    for (const priority in projectsByPriority) {
        
        projectsByPriority[priority] = sortingMethods.sortDueDate(projectsByPriority[priority]);

    }







    return {projectsByPriority,unprocessedProjectArray};

}

projectsTab();

export default projectsTab;