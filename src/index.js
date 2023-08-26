import "./style.css";

import createMainDOM from "./domCreation/mainDOMCreation";

import domAction from "./domActivities/domActivities";

import createTodoDOM from "./domCreation/allTodoDOMCreation"




// All modules should start here

// HOMEPAGE
createMainDOM();

// Attaches all eventlisteners to HOMEPAGE
domAction();

// Loads todo first
createTodoDOM();


