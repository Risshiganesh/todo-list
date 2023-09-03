/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body{
    width: 100%;
    height: 100%;
    background: rgb(0,4,78);
    background: linear-gradient(13deg, rgba(0,4,78,1) 0%, rgba(0,97,101,1) 47%, rgba(0,104,125,1) 100%);

    /* background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%); */
}


textarea {
    resize: none;
}




.main-container{
    position: relative;
    height: 100%;
    width: 100vw;
    display: grid;
    gap: 5px;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 70px 1fr 40px;
    grid-template-areas:
    "top-container top-container" 
    "note-menu display-container"
    "todo-container-footer todo-container-footer";

    

}


.note-menu{
    grid-area: note-menu;
    height: 100%;

    background: rgba( 0, 0, 0, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    /* backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px ); */
    backdrop-filter: blur( 6px );
    -webkit-backdrop-filter: blur( 6px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    border-left: none;


    border-radius: 0px 15px 15px 0px;
}

.note-menu > div > h1 {
    cursor: pointer;
    display: inline;
}

.tab-container {
    height: 100%;
    /* border: 3px solid red; */
    padding: 10px;
 
}

.tab-container > div:hover{
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    cursor: pointer;
}

.all-todos-tab,
.all-projects-tab,
.all-notes-tab {

    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px;
    /* padding-left: 20px; */
    /* font-size: 15px; */
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;


    background: rgba(139, 139, 139, 0.25);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 6.5px );
    -webkit-backdrop-filter: blur( 6.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: rgba(255, 255, 255, 0.514);

}


.menu-tab-active {
    background-color: rgba(0, 255, 221, 0.37);
    background-color: rgba(0, 247, 255, 0.582);
    color: white;
}


.top-container {
    border: 1px solid red;
    grid-area: top-container;
    display: flex;
    
    border-radius: 0px 0px 10px 10px;

    background: rgba( 0, 0, 0, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    border-top: none;
}

.top-container-spacing {
    flex: 1;
}

.brand-container {
    /* border: 1px solid green; */
    width: 250px;
    text-align: center;
    display: grid;
    align-items: center;
    justify-items: center;
    border-radius: 0px 0px 10px 10px;
    color: rgba(255, 255, 255, 0.623);
    font-family: Arial, Helvetica, sans-serif;
}


.hamburger-menu {
    /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */
    width: 70px;
    display: none; /*display: block when display is below 600px */ 
    font-size: 40px;
    text-align: center;
    color: rgba(255, 255, 255, 0.432);
    cursor: pointer;


    background: rgba( 0, 0, 0, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 6.5px );
    -webkit-backdrop-filter: blur( 6.5px );



    border-top: none;
    border-right: none;
    border-bottom: none;
    border-radius: 0px 0px 10px 0px;

    
}

.hamburger-menu > img {
    width: 50px;
}

.hamburger-menu > img:hover {
    width: 60px;
}

.hamburger-menu > img:active {
    width: 60px;
}

.display-container {
    display: grid;
    position: relative;

    grid-area: display-container;
    background-color: cornflowerblue;
    width: 100%;
    height: 100%;

    grid-template-rows: 160px 1fr;
    border-radius: 10px 0px 0px 10px;


    /* border: 1px solid red; */

    background: rgba( 0, 0, 0, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 6.5px );
    -webkit-backdrop-filter: blur( 6.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    border-right: none;


    grid-template-areas: 
    "todo-container-title"
    "collection-container";

}





.todo-container-title{

    display: grid;
    grid-area: todo-container-title;
    
    
}
.priority-buttons{
    display: grid;
    /* border: 1px solid blue; */
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: 1fr;
    width: 350px;
    gap: 10px;
    justify-self: center;

}

.priority-buttons > button:hover {

    border: 1px solid rgba(255, 255, 255, 0.459);

}


.high-priority,
.medium-priority,
.low-priority{
    background-color: darkolivegreen;
    appearance: none;
    height: 40px;
    border: 1px solid gray;
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: bold;


    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 6.5px );
    -webkit-backdrop-filter: blur( 6.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: rgba(255, 255, 255, 0.753);
    cursor: pointer;
}

.chosen-priority{
    background-color: rgba(0, 199, 33, 0.562);
    color: white;
}

.high-priority-chosen {
    background-color: rgb(223, 0, 0);
    color: black;
}

.medium-priority-chosen {
    background-color: rgb(224, 224, 0);
    color: black;
}

.low-priority-chosen {
    background-color: rgb(0, 214, 0);
    color: black;
}

.tab-title{
    display: grid;
    padding: 10px 20px;
    align-self: center;
    justify-items: center;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    color: rgba(255, 255, 255, 0.432);
    gap: 10px;
}

.tab-title > h1 {
    display: inline-block;
    border-bottom: 1px solid rgba(255, 255, 255, 0.432);
    padding-bottom: 5px;
    /* margin-bottom: 50px; */
    align-self: center;
    width: 200px;
}


.todo-container-footer{

    display: grid;
    grid-area: todo-container-footer;
    background-color: slateblue;
    align-items: center;
    justify-items: center;




    background: rgba( 0, 0, 0, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 6.5px );
    -webkit-backdrop-filter: blur( 6.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    border-bottom: none;

    border-radius: 10px 10px 0px 0px;
}

.link-container > a {

    font-family: Arial, Helvetica, sans-serif;
    color: rgba(255, 255, 255, 0.432);
    text-decoration: none;
    font-size: 12px;
    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );
}


/* This is the tricky part */
.collection-container{

    position: absolute;
    height: 100%;
    width: 100%;
    /* border: 3px solid red; */
    /* background-color: darkcyan; */
    display: grid;
    grid-template-columns: 1fr;
    grid-area: collection-container;
    padding: 10px;
    border-radius: 0px 0px 0px 10px;
    

    /* grid-template-rows: repeat(auto-fill, minmax(350px,1fr)); */

    grid-auto-flow: row;

    /* grid-template-rows: repeat(4, 350px); */
    /* grid-template-rows: 1fr; */
    /* overflow-y: auto; */
    overflow: auto;

    /* display: none; */
    /* object-fit: cover; */
    

}

.display-empty {
    justify-self: center;
    align-self: center;
    font-size: 30px;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
    color: rgba(255, 255, 255, 0.432);
}

/* .vertical-scroll{
    overflow: auto;
    border: 5px solid blue;
} */

.status-container{

    /* border: 2px solid fuchsia; */
    overflow: auto;
    height: 370px;
    color: white;

}


.status-title {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 0px 10px 10px;
    /* border-bottom: 1px solid rgba( 255, 255, 255, 0.18 ); */
}




.overdue-container,
.due-soon-container,
.upcoming-container,
.complete-container{

    display: grid;
    /* border: 4px solid gold; */
    height: 300px;
    width: 100%;
    /* background-color: indigo; */
    align-items: center;
    justify-items: start;
    
    overflow: auto;

    justify-items: center;

    padding-left: 20px;

    padding-right: 20px;




    border-radius: 10px;
    background: #004a5700;
    box-shadow: inset 5px 5px 10px #003f4a,
                inset -5px -5px 10px #005564;


}


.overdue-container > .scrollable-container > .todo-container {
    background-color: rgba(205, 50, 50, 0.329);
}


.due-soon-container > .scrollable-container > .todo-container {
    background-color: rgba(255, 255, 0, 0.459);
}


.upcoming-container > .scrollable-container > .todo-container {
    background-color: rgba(2, 0, 128, 0.301);
}

.complete-container > .scrollable-container > .todo-container {
    background-color: rgba(0, 128, 0, 0.521);
}


.scrollable-container{

    display: grid;
    column-gap: 20px;
    grid-auto-flow: column; /*This was what i wanted to do*/
    
    /* border: 4px solid brown; */

}

.todo-container{
    width: 300px;
    height: 220px;

    padding: 15px;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 6.5px );
    -webkit-backdrop-filter: blur( 6.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    font-family: Arial, Helvetica, sans-serif;
    
}

.todo-title-div {

    font-size: 18px;
    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );
    margin-bottom: 5px;
    padding-bottom: 5px;
    text-overflow: ellipsis;
    /* text-align: center; */
    overflow: hidden;

}


.todo-desc-div {
    /* border: 1px solid white; */
    height: 120px;
    text-overflow: ellipsis;
    font-size: 15px;
    overflow: hidden;
    word-wrap: break-word;
    /* border-bottom: 1px solid rgba( 255, 255, 255, 0.18 ); */
    margin-bottom: 10px;
    /* padding-bottom: 5px; */
}

.todo-date-div,
.todo-project-div {
    font-size: 13px;
    text-align: end;
}









.todo-display-container {
    display: grid;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.473);
    align-items: center;
    justify-items: center;
    z-index: 2;
    left: 0;
    
}

.todo-display {
    
    background-color: purple;
    width: 300px;
    /* height: 550px; */
    border-radius: 10px;
    padding: 10px;
    display: grid;
    gap: 5px;
    
}

.main-todo-display {

    
    grid-template-rows: 40px 1fr 30px 30px 35px 60px 60px;

}


#todo-display-title  {
    appearance: none;
    /* height: 35px; */
    width: 100%;
    padding: 0px 10px 0px 10px;
    text-align: center;
    border-radius: 5px;
    font-size: 16px;

    background: rgba( 2, 2, 2, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: white;

}

#todo-display-desc {
    appearance: none;
    width: 100%;
    padding: 10px 10px 0px 10px;
    border-radius: 5px;
    font-size: 15px;

    background: rgba( 2, 2, 2, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: white;
    font-family: Arial, Helvetica, sans-serif;
}

#todo-display-date {

    appearance: none;
    width: 100%;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    /* align-items: center; */

    background: rgba( 2, 2, 2, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: white;
}

#todo-display-remind-in {

    appearance: none;
    width: 100%;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    /* align-items: center; */

    background: rgba( 2, 2, 2, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: white;


}



#project-display-choices {
    text-align: center;

    /* appearance: none; */
    width: 100%;
    border-radius: 5px;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    /* align-items: center; */

    background: rgba( 2, 2, 2, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: white;
}



.first-button-container,
.second-button-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    align-items: center;
    justify-items: center;
}


.first-button-container > div {
    display: grid;
    justify-items: center;
    gap: 5px;
}

.first-button-container > div > label{
    font-size: 13px;
}


#todo-display-priority,
#todo-display-status  {
    justify-self: center;
    width: 100px;
    height: 30px;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 5px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: white;
    cursor: pointer;
}

#todo-display-priority:hover,
#todo-display-status:hover{
    border: 1px solid rgba(255, 255, 255, 0.589);
}


#todo-update,
#todo-delete {
    appearance: none;

    width: 100px;
    height: 30px;
    border-radius: 5px;

    /* background: rgba( 255, 255, 255, 0.25 ); */
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 5px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: white;
    cursor: pointer;

   

}


#todo-delete{
    background-color: rgba(255, 0, 0, 0.644);
}

#todo-delete:hover{
    background-color: rgba(255, 0, 0, 0.863);
}

#todo-update{
    background-color: rgba(115, 255, 0, 0.651);
}

#todo-update:hover{
    background-color: rgba(115, 255, 0, 0.897);
}


.pop-up-container {
    background-color: rgba(0, 0, 0, 0.445);
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 3;
    display: grid;
    align-items: center;
    justify-items: center;
    
}

.pop-up {
    width: 300px;
    height: 200px;
    /* background-color: white; */
    border-radius: 10px;
    padding: 20px;

    background: rgba( 2, 2, 2, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    display: grid;
    grid-auto-rows: 1fr 50px;
}

.pop-up-content-div{
    display: grid;
    justify-items: center;
    align-items: center;
    text-align: center;
}

.pop-up-button-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: end;

}

.pop-up-button-container > button {
    width: 80px;
    height: 30px;
    border-radius: 7px;
}





.project-container{
    width: 320px;
    height: 250px;
 
    padding: 15px;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 6.5px );
    -webkit-backdrop-filter: blur( 6.5px );
    border-radius: 10px;

    display: grid;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    
}



.project-title-div {

    font-size: 25px;
    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );
    /* margin-bottom: 5px;
    padding-bottom: 5px; */
    text-overflow: ellipsis;
    text-align: center;
    overflow: hidden;
    align-self: end;
    padding-bottom: 10px;

}


.project-desc-div {
    /* border: 1px solid white; */
    height: 120px;
    text-overflow: ellipsis;
    font-size: 15px;
    overflow: hidden;
    word-wrap: break-word;
    /* border-bottom: 1px solid rgba( 255, 255, 255, 0.18 ); */
    margin-bottom: 10px;
    padding: 10px;
    /* padding-bottom: 5px; */
}

.project-date-div{
    font-size: 13px;
    text-align: end;
    align-self: end;
}




.project-todo-container {
    position: fixed;
    width: 100%;
    height: 100%;
    /* border: 2px solid dodgerblue; */
    background-color: rgba(122, 122, 122, 0.582);
    display: grid;
    justify-items: center;
    align-items: center;
    z-index: 2;
}

.project-display {

    width: 350px;
    background-color: rgba(165, 0, 102, 0.705);
    border-radius: 10px;



    /* border: 1px solid rgba(255, 255, 255, 0); */
    
    /* height: 750px; */
    /* background-color: darkgreen; */
    padding: 10px;
    border-radius: 10px;
    /* overflow: auto; */
    border: 1px solid rgba( 255, 255, 255, 0.18 );

}

.project-details{

    width: 100%;
    display: grid;
    gap: 10px;
}

#project-title-update{
    appearance: none;
    width: 100%;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: white;


    padding: 5px;
    background: rgba( 0, 0, 0, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 5px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    display: grid;
}

#project-desc-update {
    appearance: none;
    width: 100%;


    font-family: Arial, Helvetica, sans-serif;
    color: white;


    padding: 5px;
    background: rgba( 0, 0, 0, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 5px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

}

#project-date-update{

    font-family: Arial, Helvetica, sans-serif;
    color: white;


    padding: 5px;
    background: rgba( 0, 0, 0, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 5px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

}


#project-reminder-update{

    font-family: Arial, Helvetica, sans-serif;
    color: white;


    padding: 5px;
    background: rgba( 0, 0, 0, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 5px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

}

.project-buttons-one,
.project-buttons-two{
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    gap: 5px;
    
}

.project-buttons-one > div {
    display: grid;
    text-align: center;
    gap: 5px;
}

.project-buttons-one > div > label {
    font-size: 12px;
    /* text-decoration: underline; */
}


.project-buttons-one > div > button,
.project-buttons-two > button{
    appearance: none;
   border-radius: 5px;


   padding: 5px;
   background: rgba( 255, 255, 255, 0.25 );
   box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
   backdrop-filter: blur( 6.5px );
   -webkit-backdrop-filter: blur( 6.5px );
   /* border-radius: 10px; */
   border: 1px solid rgba(255, 255, 255, 0);
   color: white;

}

#project-priority-update,
#project-status-update{
    color: white;
    cursor: pointer;
}

#project-priority-update:hover,
#project-status-update:hover{
    border: 1px solid rgba(255, 255, 255, 0.589);
}

.project-todos{

  
    width: 100%;
    height: 350px;
    background-color: slateblue;
    overflow: auto;
    font-family: Arial, Helvetica, sans-serif;
    /* display: grid; */
    /* grid-template-rows: 30px 1fr; */


    padding: 7px;
    background: rgba(255, 0, 140, 0.25);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 6.5px );
    -webkit-backdrop-filter: blur( 6.5px );
    /* border-radius: 10px; */
    border-radius: 5px;
    /* border: 1px solid rgba(255, 255, 255, 0); */
    /* border: 1px solid rgba(255, 1, 119, 0.76); */

}

#project-delete{
    background-color: rgba(255, 0, 0, 0.644);
    cursor: pointer;
}

#project-update{
    background-color: rgba(115, 255, 0, 0.651);
    cursor: pointer;
}


#project-delete:hover{
    background-color: rgba(255, 0, 0, 0.877);
}

#project-update:hover{
    background-color: rgba(115, 255, 0, 0.877);
}

.priority-title{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    color: white;
    text-align: center;
    padding-bottom: 5px;
}

.todo-project-status-title{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    color: white;
    text-align: center;
    /* border: 1px solid rgba(255, 1, 119, 0.76); */
    border-radius: 10px;
    padding: 5px;


    /* background: rgba(129, 129, 129, 0.25); */
    /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
    /* backdrop-filter: blur( 6.5px ); */
    /* -webkit-backdrop-filter: blur( 6.5px ); */
    border-radius: 10px;
}


.todo-in-project-container {

    width: 250px;
    height: 220px;

    padding: 15px;
    background: rgba(83, 83, 83, 0.25);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 6.5px );
    -webkit-backdrop-filter: blur( 6.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    font-family: Arial, Helvetica, sans-serif;
}

.todo-status-container{

    /* border: 2px solid fuchsia; */
    overflow: auto;
    border-radius: 10px;
    /* height: 100%; */
    /* height: 350px; */
    /* grid-auto-flow: column; */
    background: rgba( 0, 0, 0, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    /* backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px ); */
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

}

.overdue-todos,
.due-soon-todos,
.upcoming-todos,
.complete-todos{

    display: grid;
    /* border: 4px solid gold; */
    /* height: 320px; */
    /* width: 100%;
    background-color: rgb(56, 56, 255);
    align-items: start;
    justify-items: center; */
    
    /* overflow: auto; */




    display: grid;
    /* border: 4px solid gold; */
    width: 100%;
    /* background-color: indigo; */
    align-items: center;
    justify-items: start;
    
    overflow: auto;

    justify-items: center;

    padding: 5px 20px 5px 20px;

}


.scrollable-todo-container{

    display: grid;
    row-gap: 10px;
    /* height: 400px; */
    grid-auto-flow: row; /*This was what i wanted to do*/
    color: white;
    grid-auto-flow: column;

    gap: 5px;
    
    /* border: 4px solid brown; */

}

.yes-button,
.no-button{
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: white;
}

.yes-button{
    background-color: rgba(115, 255, 0, 0.651);
}

.no-button{
    background-color: rgba(255, 0, 0, 0.644);
}






.notes-collection{

    display: grid;
    height: 100%;
    width: 100%;
    /* background-color: indigo; */
    align-items: start;
    overflow: auto;
    gap: 15px;
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr)); 
 
}


.notes-container{
    width: 100%;
    height: 300px;

    padding: 15px;
    background: rgba(116, 116, 116, 0.25);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 6.5px );
    -webkit-backdrop-filter: blur( 6.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    
}

.note-display {
    background-color: rgba(51, 0, 71, 0.651);
    width: 350px;
    height: 400px;
    border-radius: 10px;
    padding: 10px;
    display: grid;
    grid-template-rows: 40px 1fr 40px;
    gap: 5px;


    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.note-title {
    font-size: 22px;
    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );
    margin-bottom: 5px;
    padding-bottom: 5px;
    text-overflow: ellipsis;
    /* text-align: center; */
    overflow: hidden;
    border-radius: 5px;
}

.note-desc {
    /* border: 1px solid white; */
    height: 230px;
    text-overflow: ellipsis;
    font-size: 15px;
    overflow: hidden;
    word-wrap: break-word;
    border-radius: 5px;

}


.note-button-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: end;
    justify-items: center;
}




/* FORM BUTTON */

.form-button-container{
    position: fixed;
    bottom: 70px;
    right: 0;
    width: 100px;
    height: 100px;
    border-radius: 50% 0% 0% 50%;
    background-color: rgb(9, 48, 92);
    display: grid;
    align-items: center;
    justify-content: center;



    background: rgba( 0, 0, 0, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 6.5px );
-webkit-backdrop-filter: blur( 6.5px );
border: 1px solid rgba( 255, 255, 255, 0.18 );
border-right: none;
z-index: 1;
    
}

.form-button{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    font-size: 50px;


    background: rgba(82, 82, 82, 0);
    /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 6.5px );
    -webkit-backdrop-filter: blur( 6.5px ); */
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: white;
}



.form-button:hover{
    background: rgba(82, 82, 82, 0.349);
}

/* TODO CREATION FORM */


.form-container{

    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(128, 128, 128, 0.527);
    display: grid;
    /* padding-top: 100px; */
    align-items: start;
    justify-items: center;
    overflow: auto;
    /* padding-bottom: 100px; */
    display: none;
    z-index: 2;
    left: 0px;
    height: max(370px, 100%);


}

.show-form{
    display: grid;
}

.todo-creation-form {
    /* position: fixed; */
    width: 320px;
    
    /* background-color: maroon; */
    padding: 10px;
    /* border-radius: 10px; */
    display: grid;
    /* height: max(370px, 100%); */
    height: 100%;
    justify-items: center;
    grid-template-rows: 1fr;

    overflow: auto;
    font-family: Arial, Helvetica, sans-serif;


    background: rgba(0, 0, 0, 0.473);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    /* border-radius: 10px; */
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    border-top: none;
    border-bottom: none;
    
}

.todo-creation-form > form {
    width: 100%;
    /* height: 300px; */
    display: grid;
    align-items: center;

}

#todo-date,
#project-date{
    font-family: Arial, Helvetica, sans-serif;
   
}


fieldset {
    border: none;
    text-align: center;
    width: 100%;
    /* height: 100%; */
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-size: 13px;

   
}

legend {
    margin-bottom: 13px;
}



.input-collection{
    display: grid;
    gap: 5px;
    color: white;
}

.input-container {
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    display: grid;
    gap: 5px;
}

.radio-input-container {
    display: grid;
    gap: 5px;
    grid-template-columns: 1fr 1fr;
    accent-color: teal;
    padding: 5px 0px 5px 0px;
}

.radio-input-container > div {
    
    /* grid-template-rows: 1fr; */
    /* padding: 5px 0px 5px 0px; */
    display: grid;
    grid-template-columns: 40px 1fr;
    justify-items: end;
    gap: 5px;
    
   
}



.radio-input-container > div > label {
    
    justify-self: start;
   
}




.input-container > input {
    appearance: none;
    width: 100%;
    height: 25px;
    color: white;
    padding: 0px 5px 0px 5px;


    background: rgba(0, 0, 0, 0.596);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    /* backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px ); */
    border-radius: 5px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    font-family: Arial, Helvetica, sans-serif;

}

.input-container > textarea {
    appearance: none;
    width: 100%;

    /* height: 25px; */
    color: white;
    padding: 5px 5px 0px 5px;

    font-family: Arial, Helvetica, sans-serif;


    background: rgba(0, 0, 0, 0.596);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    /* backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px ); */
    border-radius: 5px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    /* height: 100%; */
}

.todo-creation-title {
    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );
    padding: 5px;
    margin-bottom: 5px;
}

.project-creation-title {
    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );
    padding: 5px;
}

#todo-priority,
#project-priority {
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    /* backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px ); */
    border-radius: 5px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    height: 25px;
    color: white;
    cursor: pointer;
}
#todo-priority:hover,
#project-priority:hover{
    border: 1px solid rgba(255, 255, 255, 0.753);
}

.create-new-todo{
    /* border: 3px solid forestgreen; */
    display: none;
}

.select-existing-project{
    /* border: 3px solid skyblue; */
    display: none;
}

.create-new-project{
    /* border: 3px solid crimson; */
    display: none;
}

#project-choices {
    background: rgba(0, 105, 96, 0.795);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    /* backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px ); */
    border-radius: 5px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    height: 25px;
    color: white;
    text-align: center;
}

.display-form-items{
    display: grid;
    gap: 5px;
}

#form-submit{
    appearance: none;
    background-color: rgba(0, 255, 21, 0.541);

    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    /* backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px ); */
    border-radius: 5px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    height: 45px;
    color: white;
    cursor: pointer;
    font-size: 15px;
    margin-top: 15px;
}

#form-submit:hover{
    background-color: rgba(0, 255, 21, 0.753);
}


/* Mobile version */

@media screen and (max-width: 600px) {
    

    .hamburger-menu {
        display: grid;
        align-items: center;
        justify-items: center;
        
    }

    .hamburger-menu:active{


        background: rgba(0, 0, 0, 0.514);
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 6.5px );
        -webkit-backdrop-filter: blur( 6.5px );
    }

    .main-container {
        /* border: 1px solid blue; */
        display: grid;
        grid-template-rows: 70px 1fr 40px;
        grid-template-columns: 1fr 300px;
        grid-template-areas: 
        "top-container top-container" 
        "display-container display-container"
        "todo-container-footer todo-container-footer";
        padding: 0px 5px 0px 5px;
    
    
    
    }

    .top-container{
        border-radius: 0px 0px 10px 10px;
    }

    .display-container,
    .collection-container{
        border-radius: 10px;
        /* margin: 0px 5px 0px 5px; */
    }

    .display-container{
        padding: 5px;
    }

    

    .note-menu {
        position: absolute;
        display: grid;
        justify-self: end;
        align-self: end;
        grid-row: 2/3;
        grid-column: 2/3;
        /* height: 90%; */
        display: none;
        width: 200px;
        z-index: 1;
        border-radius: 15px 0px 0px 15px;
        /* to correct for main container padding */
        right: -5px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        border-right: none;
        /* border: none; */
        /* background: rgba(0, 0, 0, 0.473); */
        background: rgba(0, 0, 0, 0.322);
    }

    .project-todo-container{
        left: 0px;
    }


    .all-todos-tab,
    .all-projects-tab,
    .all-notes-tab {

        margin-bottom: 10px;
        border-radius: 10px;
        padding: 10px;
        padding-right: 20px;
        /* font-size: 15px; */
        text-align: right;
        
    }

    .menu-active { /*triggers when hamburger menu is clicked*/
        display: grid;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,mGAAmG;;IAEnG;4FACwF;AAC5F;;;AAGA;IACI,YAAY;AAChB;;;;;AAKA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,QAAQ;IACR,gCAAgC;IAChC,iCAAiC;IACjC;;;iDAG6C;;;;AAIjD;;;AAGA;IACI,oBAAoB;IACpB,YAAY;;IAEZ,iCAAiC;IACjC,kDAAkD;IAClD;2CACuC;IACvC,4BAA4B;IAC5B,oCAAoC;IACpC,6CAA6C;IAC7C,iBAAiB;;;IAGjB,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,2BAA2B;IAC3B,aAAa;;AAEjB;;AAEA;IACI,uCAAuC;IACvC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,mBAAmB;IACnB,6CAA6C;IAC7C,eAAe;AACnB;;AAEA;;;;IAII,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,wBAAwB;IACxB,qBAAqB;IACrB,kBAAkB;IAClB,yCAAyC;IACzC,eAAe;;;IAGf,qCAAqC;IACrC,kDAAkD;IAClD,8BAA8B;IAC9B,sCAAsC;IACtC,mBAAmB;IACnB,6CAA6C;IAC7C,iCAAiC;;AAErC;;;AAGA;IACI,yCAAyC;IACzC,0CAA0C;IAC1C,YAAY;AAChB;;;AAGA;IACI,qBAAqB;IACrB,wBAAwB;IACxB,aAAa;;IAEb,gCAAgC;;IAEhC,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,6CAA6C;IAC7C,gBAAgB;AACpB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,gCAAgC;IAChC,iCAAiC;IACjC,yCAAyC;AAC7C;;;AAGA;IACI,mDAAmD;IACnD,WAAW;IACX,aAAa,EAAE,8CAA8C;IAC7D,eAAe;IACf,kBAAkB;IAClB,iCAAiC;IACjC,eAAe;;;IAGf,iCAAiC;IACjC,kDAAkD;IAClD,8BAA8B;IAC9B,sCAAsC;;;;IAItC,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,+BAA+B;;;AAGnC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,kBAAkB;;IAElB,4BAA4B;IAC5B,gCAAgC;IAChC,WAAW;IACX,YAAY;;IAEZ,6BAA6B;IAC7B,gCAAgC;;;IAGhC,2BAA2B;;IAE3B,iCAAiC;IACjC,kDAAkD;IAClD,8BAA8B;IAC9B,sCAAsC;IACtC,6CAA6C;IAC7C,kBAAkB;;;IAGlB;;0BAEsB;;AAE1B;;;;;;AAMA;;IAEI,aAAa;IACb,+BAA+B;;;AAGnC;AACA;IACI,aAAa;IACb,4BAA4B;IAC5B,oCAAoC;IACpC,uBAAuB;IACvB,YAAY;IACZ,SAAS;IACT,oBAAoB;;AAExB;;AAEA;;IAEI,4CAA4C;;AAEhD;;;AAGA;;;IAGI,gCAAgC;IAChC,gBAAgB;IAChB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,yCAAyC;IACzC,eAAe;IACf,iBAAiB;;;IAGjB,qCAAqC;IACrC,kDAAkD;IAClD,8BAA8B;IAC9B,sCAAsC;IACtC,mBAAmB;IACnB,6CAA6C;IAC7C,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,yCAAyC;IACzC,YAAY;AAChB;;AAEA;IACI,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,kBAAkB;IAClB,yCAAyC;IACzC,iCAAiC;IACjC,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,mDAAmD;IACnD,mBAAmB;IACnB,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;AAChB;;;AAGA;;IAEI,aAAa;IACb,gCAAgC;IAChC,2BAA2B;IAC3B,mBAAmB;IACnB,qBAAqB;;;;;IAKrB,iCAAiC;IACjC,kDAAkD;IAClD,8BAA8B;IAC9B,sCAAsC;IACtC,mBAAmB;IACnB,6CAA6C;IAC7C,mBAAmB;;IAEnB,gCAAgC;AACpC;;AAEA;;IAEI,yCAAyC;IACzC,iCAAiC;IACjC,qBAAqB;IACrB,eAAe;IACf,oDAAoD;AACxD;;;AAGA,4BAA4B;AAC5B;;IAEI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,2BAA2B;IAC3B,gCAAgC;IAChC,aAAa;IACb,0BAA0B;IAC1B,+BAA+B;IAC/B,aAAa;IACb,+BAA+B;;;IAG/B,8DAA8D;;IAE9D,mBAAmB;;IAEnB,0CAA0C;IAC1C,6BAA6B;IAC7B,sBAAsB;IACtB,cAAc;;IAEd,mBAAmB;IACnB,uBAAuB;;;AAG3B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,yCAAyC;IACzC,iCAAiC;AACrC;;AAEA;;;GAGG;;AAEH;;IAEI,+BAA+B;IAC/B,cAAc;IACd,aAAa;IACb,YAAY;;AAEhB;;;AAGA;IACI,yCAAyC;IACzC,eAAe;IACf,iBAAiB;IACjB,2BAA2B;IAC3B,0DAA0D;AAC9D;;;;;AAKA;;;;;IAKI,aAAa;IACb,4BAA4B;IAC5B,aAAa;IACb,WAAW;IACX,8BAA8B;IAC9B,mBAAmB;IACnB,oBAAoB;;IAEpB,cAAc;;IAEd,qBAAqB;;IAErB,kBAAkB;;IAElB,mBAAmB;;;;;IAKnB,mBAAmB;IACnB,qBAAqB;IACrB;4CACwC;;;AAG5C;;;AAGA;IACI,0CAA0C;AAC9C;;;AAGA;IACI,0CAA0C;AAC9C;;;AAGA;IACI,wCAAwC;AAC5C;;AAEA;IACI,wCAAwC;AAC5C;;;AAGA;;IAEI,aAAa;IACb,gBAAgB;IAChB,sBAAsB,EAAE,+BAA+B;;IAEvD,6BAA6B;;AAEjC;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,uCAAuC;IACvC,kDAAkD;IAClD,8BAA8B;IAC9B,sCAAsC;IACtC,mBAAmB;IACnB,6CAA6C;IAC7C,yCAAyC;;AAE7C;;AAEA;;IAEI,eAAe;IACf,oDAAoD;IACpD,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;IACvB,wBAAwB;IACxB,gBAAgB;;AAEpB;;;AAGA;IACI,6BAA6B;IAC7B,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,gBAAgB;IAChB,qBAAqB;IACrB,0DAA0D;IAC1D,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;;IAEI,eAAe;IACf,eAAe;AACnB;;;;;;;;;;AAUA;IACI,aAAa;IACb,eAAe;IACf,WAAW;IACX,YAAY;IACZ,sCAAsC;IACtC,mBAAmB;IACnB,qBAAqB;IACrB,UAAU;IACV,OAAO;;AAEX;;AAEA;;IAEI,wBAAwB;IACxB,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,QAAQ;;AAEZ;;AAEA;;;IAGI,qDAAqD;;AAEzD;;;AAGA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,0BAA0B;IAC1B,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;;IAEf,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,6CAA6C;IAC7C,YAAY;;AAEhB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,2BAA2B;IAC3B,kBAAkB;IAClB,eAAe;;IAEf,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,6CAA6C;IAC7C,YAAY;IACZ,yCAAyC;AAC7C;;AAEA;;IAEI,gBAAgB;IAChB,WAAW;IACX,0BAA0B;IAC1B,kBAAkB;IAClB,eAAe;IACf,yCAAyC;IACzC,yBAAyB;;IAEzB,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,6CAA6C;IAC7C,YAAY;AAChB;;AAEA;;IAEI,gBAAgB;IAChB,WAAW;IACX,0BAA0B;IAC1B,kBAAkB;IAClB,eAAe;IACf,yCAAyC;IACzC,yBAAyB;;IAEzB,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,6CAA6C;IAC7C,YAAY;;;AAGhB;;;;AAIA;IACI,kBAAkB;;IAElB,sBAAsB;IACtB,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,yCAAyC;IACzC,yBAAyB;;IAEzB,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,6CAA6C;IAC7C,YAAY;AAChB;;;;AAIA;;IAEI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,yCAAyC;IACzC,mBAAmB;IACnB,qBAAqB;AACzB;;;AAGA;IACI,aAAa;IACb,qBAAqB;IACrB,QAAQ;AACZ;;AAEA;IACI,eAAe;AACnB;;;AAGA;;IAEI,oBAAoB;IACpB,YAAY;IACZ,YAAY;IACZ,uCAAuC;IACvC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,kBAAkB;IAClB,6CAA6C;IAC7C,YAAY;IACZ,eAAe;AACnB;;AAEA;;IAEI,4CAA4C;AAChD;;;AAGA;;IAEI,gBAAgB;;IAEhB,YAAY;IACZ,YAAY;IACZ,kBAAkB;;IAElB,6CAA6C;IAC7C,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,kBAAkB;IAClB,6CAA6C;IAC7C,YAAY;IACZ,eAAe;;;;AAInB;;;AAGA;IACI,wCAAwC;AAC5C;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,0CAA0C;AAC9C;;;AAGA;IACI,sCAAsC;IACtC,eAAe;IACf,YAAY;IACZ,WAAW;IACX,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,qBAAqB;;AAEzB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,aAAa;;IAEb,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,6CAA6C;IAC7C,YAAY;IACZ,yCAAyC;IACzC,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,gBAAgB;;AAEpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;;;;;AAMA;IACI,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,uCAAuC;IACvC,kDAAkD;IAClD,8BAA8B;IAC9B,sCAAsC;IACtC,mBAAmB;;IAEnB,aAAa;IACb,6CAA6C;;AAEjD;;;;AAIA;;IAEI,eAAe;IACf,oDAAoD;IACpD;0BACsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,oBAAoB;;AAExB;;;AAGA;IACI,6BAA6B;IAC7B,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,gBAAgB;IAChB,qBAAqB;IACrB,0DAA0D;IAC1D,mBAAmB;IACnB,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,eAAe;IACf,eAAe;AACnB;;;;;AAKA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,kCAAkC;IAClC,4CAA4C;IAC5C,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,UAAU;AACd;;AAEA;;IAEI,YAAY;IACZ,0CAA0C;IAC1C,mBAAmB;;;;IAInB,8CAA8C;;IAE9C,mBAAmB;IACnB,iCAAiC;IACjC,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,6CAA6C;;AAEjD;;AAEA;;IAEI,WAAW;IACX,aAAa;IACb,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,eAAe;IACf,yCAAyC;IACzC,kBAAkB;IAClB,YAAY;;;IAGZ,YAAY;IACZ,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,kBAAkB;IAClB,6CAA6C;IAC7C,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,WAAW;;;IAGX,yCAAyC;IACzC,YAAY;;;IAGZ,YAAY;IACZ,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,kBAAkB;IAClB,6CAA6C;;AAEjD;;AAEA;;IAEI,yCAAyC;IACzC,YAAY;;;IAGZ,YAAY;IACZ,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,kBAAkB;IAClB,6CAA6C;;AAEjD;;;AAGA;;IAEI,yCAAyC;IACzC,YAAY;;;IAGZ,YAAY;IACZ,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,kBAAkB;IAClB,6CAA6C;;AAEjD;;AAEA;;IAEI,aAAa;IACb,8BAA8B;IAC9B,yCAAyC;IACzC,YAAY;IACZ,QAAQ;;AAEZ;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,eAAe;IACf,gCAAgC;AACpC;;;AAGA;;IAEI,gBAAgB;GACjB,kBAAkB;;;GAGlB,YAAY;GACZ,uCAAuC;GACvC,kDAAkD;GAClD,8BAA8B;GAC9B,sCAAsC;GACtC,yBAAyB;GACzB,wCAAwC;GACxC,YAAY;;AAEf;;AAEA;;IAEI,YAAY;IACZ,eAAe;AACnB;;AAEA;;IAEI,4CAA4C;AAChD;;AAEA;;;IAGI,WAAW;IACX,aAAa;IACb,2BAA2B;IAC3B,cAAc;IACd,yCAAyC;IACzC,mBAAmB;IACnB,kCAAkC;;;IAGlC,YAAY;IACZ,mCAAmC;IACnC,kDAAkD;IAClD,8BAA8B;IAC9B,sCAAsC;IACtC,yBAAyB;IACzB,kBAAkB;IAClB,8CAA8C;IAC9C,+CAA+C;;AAEnD;;AAEA;IACI,wCAAwC;IACxC,eAAe;AACnB;;AAEA;IACI,0CAA0C;IAC1C,eAAe;AACnB;;;AAGA;IACI,wCAAwC;AAC5C;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,yCAAyC;IACzC,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,yCAAyC;IACzC,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,+CAA+C;IAC/C,mBAAmB;IACnB,YAAY;;;IAGZ,2CAA2C;IAC3C,wDAAwD;IACxD,oCAAoC;IACpC,4CAA4C;IAC5C,mBAAmB;AACvB;;;AAGA;;IAEI,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,kCAAkC;IAClC,kDAAkD;IAClD,8BAA8B;IAC9B,sCAAsC;IACtC,mBAAmB;IACnB,6CAA6C;IAC7C,yCAAyC;AAC7C;;AAEA;;IAEI,+BAA+B;IAC/B,cAAc;IACd,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,4BAA4B;IAC5B,iCAAiC;IACjC,kDAAkD;IAClD;2CACuC;IACvC,mBAAmB;IACnB,6CAA6C;;AAEjD;;AAEA;;;;;IAKI,aAAa;IACb,4BAA4B;IAC5B,mBAAmB;IACnB;;;4BAGwB;;IAExB,oBAAoB;;;;;IAKpB,aAAa;IACb,4BAA4B;IAC5B,WAAW;IACX,8BAA8B;IAC9B,mBAAmB;IACnB,oBAAoB;;IAEpB,cAAc;;IAEd,qBAAqB;;IAErB,0BAA0B;;AAE9B;;;AAGA;;IAEI,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,mBAAmB,EAAE,+BAA+B;IACpD,YAAY;IACZ,sBAAsB;;IAEtB,QAAQ;;IAER,6BAA6B;;AAEjC;;AAEA;;IAEI,uCAAuC;IACvC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,mBAAmB;IACnB,6CAA6C;IAC7C,YAAY;AAChB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,wCAAwC;AAC5C;;;;;;;AAOA;;IAEI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,8BAA8B;IAC9B,kBAAkB;IAClB,cAAc;IACd,SAAS;IACT,2DAA2D;;AAE/D;;;AAGA;IACI,WAAW;IACX,aAAa;;IAEb,aAAa;IACb,qCAAqC;IACrC,kDAAkD;IAClD,8BAA8B;IAC9B,sCAAsC;IACtC,mBAAmB;IACnB,6CAA6C;IAC7C,yCAAyC;IACzC,YAAY;;AAEhB;;AAEA;IACI,wCAAwC;IACxC,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,iCAAiC;IACjC,QAAQ;;;IAGR,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,mBAAmB;IACnB,6CAA6C;AACjD;;AAEA;IACI,eAAe;IACf,oDAAoD;IACpD,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;IACvB,wBAAwB;IACxB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;IAC7B,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,gBAAgB;IAChB,qBAAqB;IACrB,kBAAkB;;AAEtB;;;AAGA;IACI,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;IAChB,qBAAqB;AACzB;;;;;AAKA,gBAAgB;;AAEhB;IACI,eAAe;IACf,YAAY;IACZ,QAAQ;IACR,YAAY;IACZ,aAAa;IACb,4BAA4B;IAC5B,gCAAgC;IAChC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;;;IAIvB,iCAAiC;AACrC,kDAAkD;AAClD,8BAA8B;AAC9B,sCAAsC;AACtC,6CAA6C;AAC7C,kBAAkB;AAClB,UAAU;;AAEV;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;;;IAGf,+BAA+B;IAC/B;;6CAEyC;IACzC,6CAA6C;IAC7C,YAAY;AAChB;;;;AAIA;IACI,mCAAmC;AACvC;;AAEA,uBAAuB;;;AAGvB;;IAEI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,4CAA4C;IAC5C,aAAa;IACb,wBAAwB;IACxB,kBAAkB;IAClB,qBAAqB;IACrB,cAAc;IACd,2BAA2B;IAC3B,aAAa;IACb,UAAU;IACV,SAAS;IACT,wBAAwB;;;AAG5B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,YAAY;;IAEZ,8BAA8B;IAC9B,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,qBAAqB;IACrB,uBAAuB;;IAEvB,cAAc;IACd,yCAAyC;;;IAGzC,gCAAgC;IAChC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,yBAAyB;IACzB,6CAA6C;IAC7C,gBAAgB;IAChB,mBAAmB;;AAEvB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,mBAAmB;;AAEvB;;AAEA;;IAEI,yCAAyC;;AAE7C;;;AAGA;IACI,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,yCAAyC;IACzC,YAAY;IACZ,eAAe;;;AAGnB;;AAEA;IACI,mBAAmB;AACvB;;;;AAIA;IACI,aAAa;IACb,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,yCAAyC;IACzC,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,8BAA8B;IAC9B,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;;IAEI,6BAA6B;IAC7B,8BAA8B;IAC9B,aAAa;IACb,+BAA+B;IAC/B,kBAAkB;IAClB,QAAQ;;;AAGZ;;;;AAIA;;IAEI,mBAAmB;;AAEvB;;;;;AAKA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,wBAAwB;;;IAGxB,gCAAgC;IAChC,kDAAkD;IAClD;2CACuC;IACvC,kBAAkB;IAClB,6CAA6C;IAC7C,yCAAyC;;AAE7C;;AAEA;IACI,gBAAgB;IAChB,WAAW;;IAEX,kBAAkB;IAClB,YAAY;IACZ,wBAAwB;;IAExB,yCAAyC;;;IAGzC,gCAAgC;IAChC,kDAAkD;IAClD;2CACuC;IACvC,kBAAkB;IAClB,6CAA6C;IAC7C,kBAAkB;AACtB;;AAEA;IACI,oDAAoD;IACpD,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,oDAAoD;IACpD,YAAY;AAChB;;AAEA;;IAEI,uCAAuC;IACvC,kDAAkD;IAClD;2CACuC;IACvC,kBAAkB;IAClB,6CAA6C;IAC7C,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;AACA;;IAEI,4CAA4C;AAChD;;AAEA;IACI,mCAAmC;IACnC,aAAa;AACjB;;AAEA;IACI,+BAA+B;IAC/B,aAAa;AACjB;;AAEA;IACI,+BAA+B;IAC/B,aAAa;AACjB;;AAEA;IACI,mCAAmC;IACnC,kDAAkD;IAClD;2CACuC;IACvC,kBAAkB;IAClB,6CAA6C;IAC7C,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,gBAAgB;IAChB,yCAAyC;;IAEzC,kDAAkD;IAClD;2CACuC;IACvC,kBAAkB;IAClB,6CAA6C;IAC7C,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,yCAAyC;AAC7C;;;AAGA,mBAAmB;;AAEnB;;;IAGI;QACI,aAAa;QACb,mBAAmB;QACnB,qBAAqB;;IAEzB;;IAEA;;;QAGI,gCAAgC;QAChC,kDAAkD;QAClD,8BAA8B;QAC9B,sCAAsC;IAC1C;;IAEA;QACI,4BAA4B;QAC5B,aAAa;QACb,iCAAiC;QACjC,gCAAgC;QAChC;;;qDAG6C;QAC7C,wBAAwB;;;;IAI5B;;IAEA;QACI,gCAAgC;IACpC;;IAEA;;QAEI,mBAAmB;QACnB,6BAA6B;IACjC;;IAEA;QACI,YAAY;IAChB;;;;IAIA;QACI,kBAAkB;QAClB,aAAa;QACb,iBAAiB;QACjB,eAAe;QACf,aAAa;QACb,gBAAgB;QAChB,iBAAiB;QACjB,aAAa;QACb,YAAY;QACZ,UAAU;QACV,gCAAgC;QAChC,0CAA0C;QAC1C,WAAW;QACX,6CAA6C;QAC7C,kBAAkB;QAClB,kBAAkB;QAClB,sCAAsC;QACtC,gCAAgC;IACpC;;IAEA;QACI,SAAS;IACb;;;IAGA;;;;QAII,mBAAmB;QACnB,mBAAmB;QACnB,aAAa;QACb,mBAAmB;QACnB,qBAAqB;QACrB,iBAAiB;;IAErB;;IAEA,eAAe,0CAA0C;QACrD,aAAa;IACjB;AACJ","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml,\nbody{\n    width: 100%;\n    height: 100%;\n    background: rgb(0,4,78);\n    background: linear-gradient(13deg, rgba(0,4,78,1) 0%, rgba(0,97,101,1) 47%, rgba(0,104,125,1) 100%);\n\n    /* background: rgb(238,174,202);\n    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%); */\n}\n\n\ntextarea {\n    resize: none;\n}\n\n\n\n\n.main-container{\n    position: relative;\n    height: 100%;\n    width: 100vw;\n    display: grid;\n    gap: 5px;\n    grid-template-columns: 200px 1fr;\n    grid-template-rows: 70px 1fr 40px;\n    grid-template-areas:\n    \"top-container top-container\" \n    \"note-menu display-container\"\n    \"todo-container-footer todo-container-footer\";\n\n    \n\n}\n\n\n.note-menu{\n    grid-area: note-menu;\n    height: 100%;\n\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    /* backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px ); */\n    backdrop-filter: blur( 6px );\n    -webkit-backdrop-filter: blur( 6px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    border-left: none;\n\n\n    border-radius: 0px 15px 15px 0px;\n}\n\n.note-menu > div > h1 {\n    cursor: pointer;\n    display: inline;\n}\n\n.tab-container {\n    height: 100%;\n    /* border: 3px solid red; */\n    padding: 10px;\n \n}\n\n.tab-container > div:hover{\n    background: rgba( 255, 255, 255, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    cursor: pointer;\n}\n\n.all-todos-tab,\n.all-projects-tab,\n.all-notes-tab {\n\n    margin-bottom: 10px;\n    border-radius: 10px;\n    padding: 10px;\n    /* padding-left: 20px; */\n    /* font-size: 15px; */\n    text-align: center;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 12px;\n\n\n    background: rgba(139, 139, 139, 0.25);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: rgba(255, 255, 255, 0.514);\n\n}\n\n\n.menu-tab-active {\n    background-color: rgba(0, 255, 221, 0.37);\n    background-color: rgba(0, 247, 255, 0.582);\n    color: white;\n}\n\n\n.top-container {\n    border: 1px solid red;\n    grid-area: top-container;\n    display: flex;\n    \n    border-radius: 0px 0px 10px 10px;\n\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    border-top: none;\n}\n\n.top-container-spacing {\n    flex: 1;\n}\n\n.brand-container {\n    /* border: 1px solid green; */\n    width: 250px;\n    text-align: center;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    border-radius: 0px 0px 10px 10px;\n    color: rgba(255, 255, 255, 0.623);\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n\n.hamburger-menu {\n    /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */\n    width: 70px;\n    display: none; /*display: block when display is below 600px */ \n    font-size: 40px;\n    text-align: center;\n    color: rgba(255, 255, 255, 0.432);\n    cursor: pointer;\n\n\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n\n\n\n    border-top: none;\n    border-right: none;\n    border-bottom: none;\n    border-radius: 0px 0px 10px 0px;\n\n    \n}\n\n.hamburger-menu > img {\n    width: 50px;\n}\n\n.hamburger-menu > img:hover {\n    width: 60px;\n}\n\n.hamburger-menu > img:active {\n    width: 60px;\n}\n\n.display-container {\n    display: grid;\n    position: relative;\n\n    grid-area: display-container;\n    background-color: cornflowerblue;\n    width: 100%;\n    height: 100%;\n\n    grid-template-rows: 160px 1fr;\n    border-radius: 10px 0px 0px 10px;\n\n\n    /* border: 1px solid red; */\n\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    border-right: none;\n\n\n    grid-template-areas: \n    \"todo-container-title\"\n    \"collection-container\";\n\n}\n\n\n\n\n\n.todo-container-title{\n\n    display: grid;\n    grid-area: todo-container-title;\n    \n    \n}\n.priority-buttons{\n    display: grid;\n    /* border: 1px solid blue; */\n    grid-template-columns: repeat(3,1fr);\n    grid-template-rows: 1fr;\n    width: 350px;\n    gap: 10px;\n    justify-self: center;\n\n}\n\n.priority-buttons > button:hover {\n\n    border: 1px solid rgba(255, 255, 255, 0.459);\n\n}\n\n\n.high-priority,\n.medium-priority,\n.low-priority{\n    background-color: darkolivegreen;\n    appearance: none;\n    height: 40px;\n    border: 1px solid gray;\n    border-radius: 10px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px;\n    font-weight: bold;\n\n\n    background: rgba(255, 255, 255, 0.25);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: rgba(255, 255, 255, 0.753);\n    cursor: pointer;\n}\n\n.chosen-priority{\n    background-color: rgba(0, 199, 33, 0.562);\n    color: white;\n}\n\n.high-priority-chosen {\n    background-color: rgb(223, 0, 0);\n    color: black;\n}\n\n.medium-priority-chosen {\n    background-color: rgb(224, 224, 0);\n    color: black;\n}\n\n.low-priority-chosen {\n    background-color: rgb(0, 214, 0);\n    color: black;\n}\n\n.tab-title{\n    display: grid;\n    padding: 10px 20px;\n    align-self: center;\n    justify-items: center;\n    text-align: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: rgba(255, 255, 255, 0.432);\n    gap: 10px;\n}\n\n.tab-title > h1 {\n    display: inline-block;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.432);\n    padding-bottom: 5px;\n    /* margin-bottom: 50px; */\n    align-self: center;\n    width: 200px;\n}\n\n\n.todo-container-footer{\n\n    display: grid;\n    grid-area: todo-container-footer;\n    background-color: slateblue;\n    align-items: center;\n    justify-items: center;\n\n\n\n\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    border-bottom: none;\n\n    border-radius: 10px 10px 0px 0px;\n}\n\n.link-container > a {\n\n    font-family: Arial, Helvetica, sans-serif;\n    color: rgba(255, 255, 255, 0.432);\n    text-decoration: none;\n    font-size: 12px;\n    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );\n}\n\n\n/* This is the tricky part */\n.collection-container{\n\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    /* border: 3px solid red; */\n    /* background-color: darkcyan; */\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-area: collection-container;\n    padding: 10px;\n    border-radius: 0px 0px 0px 10px;\n    \n\n    /* grid-template-rows: repeat(auto-fill, minmax(350px,1fr)); */\n\n    grid-auto-flow: row;\n\n    /* grid-template-rows: repeat(4, 350px); */\n    /* grid-template-rows: 1fr; */\n    /* overflow-y: auto; */\n    overflow: auto;\n\n    /* display: none; */\n    /* object-fit: cover; */\n    \n\n}\n\n.display-empty {\n    justify-self: center;\n    align-self: center;\n    font-size: 30px;\n    font-weight: bolder;\n    font-family: Arial, Helvetica, sans-serif;\n    color: rgba(255, 255, 255, 0.432);\n}\n\n/* .vertical-scroll{\n    overflow: auto;\n    border: 5px solid blue;\n} */\n\n.status-container{\n\n    /* border: 2px solid fuchsia; */\n    overflow: auto;\n    height: 370px;\n    color: white;\n\n}\n\n\n.status-title {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 20px;\n    font-weight: bold;\n    padding: 10px 0px 10px 10px;\n    /* border-bottom: 1px solid rgba( 255, 255, 255, 0.18 ); */\n}\n\n\n\n\n.overdue-container,\n.due-soon-container,\n.upcoming-container,\n.complete-container{\n\n    display: grid;\n    /* border: 4px solid gold; */\n    height: 300px;\n    width: 100%;\n    /* background-color: indigo; */\n    align-items: center;\n    justify-items: start;\n    \n    overflow: auto;\n\n    justify-items: center;\n\n    padding-left: 20px;\n\n    padding-right: 20px;\n\n\n\n\n    border-radius: 10px;\n    background: #004a5700;\n    box-shadow: inset 5px 5px 10px #003f4a,\n                inset -5px -5px 10px #005564;\n\n\n}\n\n\n.overdue-container > .scrollable-container > .todo-container {\n    background-color: rgba(205, 50, 50, 0.329);\n}\n\n\n.due-soon-container > .scrollable-container > .todo-container {\n    background-color: rgba(255, 255, 0, 0.459);\n}\n\n\n.upcoming-container > .scrollable-container > .todo-container {\n    background-color: rgba(2, 0, 128, 0.301);\n}\n\n.complete-container > .scrollable-container > .todo-container {\n    background-color: rgba(0, 128, 0, 0.521);\n}\n\n\n.scrollable-container{\n\n    display: grid;\n    column-gap: 20px;\n    grid-auto-flow: column; /*This was what i wanted to do*/\n    \n    /* border: 4px solid brown; */\n\n}\n\n.todo-container{\n    width: 300px;\n    height: 220px;\n\n    padding: 15px;\n    background: rgba( 255, 255, 255, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    font-family: Arial, Helvetica, sans-serif;\n    \n}\n\n.todo-title-div {\n\n    font-size: 18px;\n    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );\n    margin-bottom: 5px;\n    padding-bottom: 5px;\n    text-overflow: ellipsis;\n    /* text-align: center; */\n    overflow: hidden;\n\n}\n\n\n.todo-desc-div {\n    /* border: 1px solid white; */\n    height: 120px;\n    text-overflow: ellipsis;\n    font-size: 15px;\n    overflow: hidden;\n    word-wrap: break-word;\n    /* border-bottom: 1px solid rgba( 255, 255, 255, 0.18 ); */\n    margin-bottom: 10px;\n    /* padding-bottom: 5px; */\n}\n\n.todo-date-div,\n.todo-project-div {\n    font-size: 13px;\n    text-align: end;\n}\n\n\n\n\n\n\n\n\n\n.todo-display-container {\n    display: grid;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.473);\n    align-items: center;\n    justify-items: center;\n    z-index: 2;\n    left: 0;\n    \n}\n\n.todo-display {\n    \n    background-color: purple;\n    width: 300px;\n    /* height: 550px; */\n    border-radius: 10px;\n    padding: 10px;\n    display: grid;\n    gap: 5px;\n    \n}\n\n.main-todo-display {\n\n    \n    grid-template-rows: 40px 1fr 30px 30px 35px 60px 60px;\n\n}\n\n\n#todo-display-title  {\n    appearance: none;\n    /* height: 35px; */\n    width: 100%;\n    padding: 0px 10px 0px 10px;\n    text-align: center;\n    border-radius: 5px;\n    font-size: 16px;\n\n    background: rgba( 2, 2, 2, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n\n}\n\n#todo-display-desc {\n    appearance: none;\n    width: 100%;\n    padding: 10px 10px 0px 10px;\n    border-radius: 5px;\n    font-size: 15px;\n\n    background: rgba( 2, 2, 2, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n#todo-display-date {\n\n    appearance: none;\n    width: 100%;\n    padding: 5px 10px 5px 10px;\n    border-radius: 5px;\n    font-size: 15px;\n    font-family: Arial, Helvetica, sans-serif;\n    /* align-items: center; */\n\n    background: rgba( 2, 2, 2, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n}\n\n#todo-display-remind-in {\n\n    appearance: none;\n    width: 100%;\n    padding: 5px 10px 5px 10px;\n    border-radius: 5px;\n    font-size: 15px;\n    font-family: Arial, Helvetica, sans-serif;\n    /* align-items: center; */\n\n    background: rgba( 2, 2, 2, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n\n\n}\n\n\n\n#project-display-choices {\n    text-align: center;\n\n    /* appearance: none; */\n    width: 100%;\n    border-radius: 5px;\n    font-size: 15px;\n    font-family: Arial, Helvetica, sans-serif;\n    /* align-items: center; */\n\n    background: rgba( 2, 2, 2, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n}\n\n\n\n.first-button-container,\n.second-button-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    align-items: center;\n    justify-items: center;\n}\n\n\n.first-button-container > div {\n    display: grid;\n    justify-items: center;\n    gap: 5px;\n}\n\n.first-button-container > div > label{\n    font-size: 13px;\n}\n\n\n#todo-display-priority,\n#todo-display-status  {\n    justify-self: center;\n    width: 100px;\n    height: 30px;\n    background: rgba( 255, 255, 255, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n    cursor: pointer;\n}\n\n#todo-display-priority:hover,\n#todo-display-status:hover{\n    border: 1px solid rgba(255, 255, 255, 0.589);\n}\n\n\n#todo-update,\n#todo-delete {\n    appearance: none;\n\n    width: 100px;\n    height: 30px;\n    border-radius: 5px;\n\n    /* background: rgba( 255, 255, 255, 0.25 ); */\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n    cursor: pointer;\n\n   \n\n}\n\n\n#todo-delete{\n    background-color: rgba(255, 0, 0, 0.644);\n}\n\n#todo-delete:hover{\n    background-color: rgba(255, 0, 0, 0.863);\n}\n\n#todo-update{\n    background-color: rgba(115, 255, 0, 0.651);\n}\n\n#todo-update:hover{\n    background-color: rgba(115, 255, 0, 0.897);\n}\n\n\n.pop-up-container {\n    background-color: rgba(0, 0, 0, 0.445);\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    z-index: 3;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    \n}\n\n.pop-up {\n    width: 300px;\n    height: 200px;\n    /* background-color: white; */\n    border-radius: 10px;\n    padding: 20px;\n\n    background: rgba( 2, 2, 2, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    display: grid;\n    grid-auto-rows: 1fr 50px;\n}\n\n.pop-up-content-div{\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    text-align: center;\n}\n\n.pop-up-button-container{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    align-items: end;\n\n}\n\n.pop-up-button-container > button {\n    width: 80px;\n    height: 30px;\n    border-radius: 7px;\n}\n\n\n\n\n\n.project-container{\n    width: 320px;\n    height: 250px;\n \n    padding: 15px;\n    background: rgba( 255, 255, 255, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border-radius: 10px;\n\n    display: grid;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    \n}\n\n\n\n.project-title-div {\n\n    font-size: 25px;\n    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );\n    /* margin-bottom: 5px;\n    padding-bottom: 5px; */\n    text-overflow: ellipsis;\n    text-align: center;\n    overflow: hidden;\n    align-self: end;\n    padding-bottom: 10px;\n\n}\n\n\n.project-desc-div {\n    /* border: 1px solid white; */\n    height: 120px;\n    text-overflow: ellipsis;\n    font-size: 15px;\n    overflow: hidden;\n    word-wrap: break-word;\n    /* border-bottom: 1px solid rgba( 255, 255, 255, 0.18 ); */\n    margin-bottom: 10px;\n    padding: 10px;\n    /* padding-bottom: 5px; */\n}\n\n.project-date-div{\n    font-size: 13px;\n    text-align: end;\n    align-self: end;\n}\n\n\n\n\n.project-todo-container {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    /* border: 2px solid dodgerblue; */\n    background-color: rgba(122, 122, 122, 0.582);\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    z-index: 2;\n}\n\n.project-display {\n\n    width: 350px;\n    background-color: rgba(165, 0, 102, 0.705);\n    border-radius: 10px;\n\n\n\n    /* border: 1px solid rgba(255, 255, 255, 0); */\n    \n    /* height: 750px; */\n    /* background-color: darkgreen; */\n    padding: 10px;\n    border-radius: 10px;\n    /* overflow: auto; */\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n\n}\n\n.project-details{\n\n    width: 100%;\n    display: grid;\n    gap: 10px;\n}\n\n#project-title-update{\n    appearance: none;\n    width: 100%;\n    font-size: 15px;\n    font-family: Arial, Helvetica, sans-serif;\n    text-align: center;\n    color: white;\n\n\n    padding: 5px;\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    display: grid;\n}\n\n#project-desc-update {\n    appearance: none;\n    width: 100%;\n\n\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n\n\n    padding: 5px;\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n\n}\n\n#project-date-update{\n\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n\n\n    padding: 5px;\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n\n}\n\n\n#project-reminder-update{\n\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n\n\n    padding: 5px;\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n\n}\n\n.project-buttons-one,\n.project-buttons-two{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    gap: 5px;\n    \n}\n\n.project-buttons-one > div {\n    display: grid;\n    text-align: center;\n    gap: 5px;\n}\n\n.project-buttons-one > div > label {\n    font-size: 12px;\n    /* text-decoration: underline; */\n}\n\n\n.project-buttons-one > div > button,\n.project-buttons-two > button{\n    appearance: none;\n   border-radius: 5px;\n\n\n   padding: 5px;\n   background: rgba( 255, 255, 255, 0.25 );\n   box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n   backdrop-filter: blur( 6.5px );\n   -webkit-backdrop-filter: blur( 6.5px );\n   /* border-radius: 10px; */\n   border: 1px solid rgba(255, 255, 255, 0);\n   color: white;\n\n}\n\n#project-priority-update,\n#project-status-update{\n    color: white;\n    cursor: pointer;\n}\n\n#project-priority-update:hover,\n#project-status-update:hover{\n    border: 1px solid rgba(255, 255, 255, 0.589);\n}\n\n.project-todos{\n\n  \n    width: 100%;\n    height: 350px;\n    background-color: slateblue;\n    overflow: auto;\n    font-family: Arial, Helvetica, sans-serif;\n    /* display: grid; */\n    /* grid-template-rows: 30px 1fr; */\n\n\n    padding: 7px;\n    background: rgba(255, 0, 140, 0.25);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    /* border-radius: 10px; */\n    border-radius: 5px;\n    /* border: 1px solid rgba(255, 255, 255, 0); */\n    /* border: 1px solid rgba(255, 1, 119, 0.76); */\n\n}\n\n#project-delete{\n    background-color: rgba(255, 0, 0, 0.644);\n    cursor: pointer;\n}\n\n#project-update{\n    background-color: rgba(115, 255, 0, 0.651);\n    cursor: pointer;\n}\n\n\n#project-delete:hover{\n    background-color: rgba(255, 0, 0, 0.877);\n}\n\n#project-update:hover{\n    background-color: rgba(115, 255, 0, 0.877);\n}\n\n.priority-title{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 15px;\n    color: white;\n    text-align: center;\n    padding-bottom: 5px;\n}\n\n.todo-project-status-title{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 13px;\n    color: white;\n    text-align: center;\n    /* border: 1px solid rgba(255, 1, 119, 0.76); */\n    border-radius: 10px;\n    padding: 5px;\n\n\n    /* background: rgba(129, 129, 129, 0.25); */\n    /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */\n    /* backdrop-filter: blur( 6.5px ); */\n    /* -webkit-backdrop-filter: blur( 6.5px ); */\n    border-radius: 10px;\n}\n\n\n.todo-in-project-container {\n\n    width: 250px;\n    height: 220px;\n\n    padding: 15px;\n    background: rgba(83, 83, 83, 0.25);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.todo-status-container{\n\n    /* border: 2px solid fuchsia; */\n    overflow: auto;\n    border-radius: 10px;\n    /* height: 100%; */\n    /* height: 350px; */\n    /* grid-auto-flow: column; */\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    /* backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px ); */\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n\n}\n\n.overdue-todos,\n.due-soon-todos,\n.upcoming-todos,\n.complete-todos{\n\n    display: grid;\n    /* border: 4px solid gold; */\n    /* height: 320px; */\n    /* width: 100%;\n    background-color: rgb(56, 56, 255);\n    align-items: start;\n    justify-items: center; */\n    \n    /* overflow: auto; */\n\n\n\n\n    display: grid;\n    /* border: 4px solid gold; */\n    width: 100%;\n    /* background-color: indigo; */\n    align-items: center;\n    justify-items: start;\n    \n    overflow: auto;\n\n    justify-items: center;\n\n    padding: 5px 20px 5px 20px;\n\n}\n\n\n.scrollable-todo-container{\n\n    display: grid;\n    row-gap: 10px;\n    /* height: 400px; */\n    grid-auto-flow: row; /*This was what i wanted to do*/\n    color: white;\n    grid-auto-flow: column;\n\n    gap: 5px;\n    \n    /* border: 4px solid brown; */\n\n}\n\n.yes-button,\n.no-button{\n    background: rgba( 255, 255, 255, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n}\n\n.yes-button{\n    background-color: rgba(115, 255, 0, 0.651);\n}\n\n.no-button{\n    background-color: rgba(255, 0, 0, 0.644);\n}\n\n\n\n\n\n\n.notes-collection{\n\n    display: grid;\n    height: 100%;\n    width: 100%;\n    /* background-color: indigo; */\n    align-items: start;\n    overflow: auto;\n    gap: 15px;\n    grid-template-columns: repeat(auto-fill, minmax(300px,1fr)); \n \n}\n\n\n.notes-container{\n    width: 100%;\n    height: 300px;\n\n    padding: 15px;\n    background: rgba(116, 116, 116, 0.25);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    \n}\n\n.note-display {\n    background-color: rgba(51, 0, 71, 0.651);\n    width: 350px;\n    height: 400px;\n    border-radius: 10px;\n    padding: 10px;\n    display: grid;\n    grid-template-rows: 40px 1fr 40px;\n    gap: 5px;\n\n\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n}\n\n.note-title {\n    font-size: 22px;\n    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );\n    margin-bottom: 5px;\n    padding-bottom: 5px;\n    text-overflow: ellipsis;\n    /* text-align: center; */\n    overflow: hidden;\n    border-radius: 5px;\n}\n\n.note-desc {\n    /* border: 1px solid white; */\n    height: 230px;\n    text-overflow: ellipsis;\n    font-size: 15px;\n    overflow: hidden;\n    word-wrap: break-word;\n    border-radius: 5px;\n\n}\n\n\n.note-button-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: end;\n    justify-items: center;\n}\n\n\n\n\n/* FORM BUTTON */\n\n.form-button-container{\n    position: fixed;\n    bottom: 70px;\n    right: 0;\n    width: 100px;\n    height: 100px;\n    border-radius: 50% 0% 0% 50%;\n    background-color: rgb(9, 48, 92);\n    display: grid;\n    align-items: center;\n    justify-content: center;\n\n\n\n    background: rgba( 0, 0, 0, 0.25 );\nbox-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\nbackdrop-filter: blur( 6.5px );\n-webkit-backdrop-filter: blur( 6.5px );\nborder: 1px solid rgba( 255, 255, 255, 0.18 );\nborder-right: none;\nz-index: 1;\n    \n}\n\n.form-button{\n    width: 70px;\n    height: 70px;\n    border-radius: 50%;\n    font-size: 50px;\n\n\n    background: rgba(82, 82, 82, 0);\n    /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px ); */\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n}\n\n\n\n.form-button:hover{\n    background: rgba(82, 82, 82, 0.349);\n}\n\n/* TODO CREATION FORM */\n\n\n.form-container{\n\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(128, 128, 128, 0.527);\n    display: grid;\n    /* padding-top: 100px; */\n    align-items: start;\n    justify-items: center;\n    overflow: auto;\n    /* padding-bottom: 100px; */\n    display: none;\n    z-index: 2;\n    left: 0px;\n    height: max(370px, 100%);\n\n\n}\n\n.show-form{\n    display: grid;\n}\n\n.todo-creation-form {\n    /* position: fixed; */\n    width: 320px;\n    \n    /* background-color: maroon; */\n    padding: 10px;\n    /* border-radius: 10px; */\n    display: grid;\n    /* height: max(370px, 100%); */\n    height: 100%;\n    justify-items: center;\n    grid-template-rows: 1fr;\n\n    overflow: auto;\n    font-family: Arial, Helvetica, sans-serif;\n\n\n    background: rgba(0, 0, 0, 0.473);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    /* border-radius: 10px; */\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    border-top: none;\n    border-bottom: none;\n    \n}\n\n.todo-creation-form > form {\n    width: 100%;\n    /* height: 300px; */\n    display: grid;\n    align-items: center;\n\n}\n\n#todo-date,\n#project-date{\n    font-family: Arial, Helvetica, sans-serif;\n   \n}\n\n\nfieldset {\n    border: none;\n    text-align: center;\n    width: 100%;\n    /* height: 100%; */\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    font-size: 13px;\n\n   \n}\n\nlegend {\n    margin-bottom: 13px;\n}\n\n\n\n.input-collection{\n    display: grid;\n    gap: 5px;\n    color: white;\n}\n\n.input-container {\n    width: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n    display: grid;\n    gap: 5px;\n}\n\n.radio-input-container {\n    display: grid;\n    gap: 5px;\n    grid-template-columns: 1fr 1fr;\n    accent-color: teal;\n    padding: 5px 0px 5px 0px;\n}\n\n.radio-input-container > div {\n    \n    /* grid-template-rows: 1fr; */\n    /* padding: 5px 0px 5px 0px; */\n    display: grid;\n    grid-template-columns: 40px 1fr;\n    justify-items: end;\n    gap: 5px;\n    \n   \n}\n\n\n\n.radio-input-container > div > label {\n    \n    justify-self: start;\n   \n}\n\n\n\n\n.input-container > input {\n    appearance: none;\n    width: 100%;\n    height: 25px;\n    color: white;\n    padding: 0px 5px 0px 5px;\n\n\n    background: rgba(0, 0, 0, 0.596);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    /* backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px ); */\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    font-family: Arial, Helvetica, sans-serif;\n\n}\n\n.input-container > textarea {\n    appearance: none;\n    width: 100%;\n\n    /* height: 25px; */\n    color: white;\n    padding: 5px 5px 0px 5px;\n\n    font-family: Arial, Helvetica, sans-serif;\n\n\n    background: rgba(0, 0, 0, 0.596);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    /* backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px ); */\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    /* height: 100%; */\n}\n\n.todo-creation-title {\n    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );\n    padding: 5px;\n    margin-bottom: 5px;\n}\n\n.project-creation-title {\n    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );\n    padding: 5px;\n}\n\n#todo-priority,\n#project-priority {\n    background: rgba( 255, 255, 255, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    /* backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px ); */\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    height: 25px;\n    color: white;\n    cursor: pointer;\n}\n#todo-priority:hover,\n#project-priority:hover{\n    border: 1px solid rgba(255, 255, 255, 0.753);\n}\n\n.create-new-todo{\n    /* border: 3px solid forestgreen; */\n    display: none;\n}\n\n.select-existing-project{\n    /* border: 3px solid skyblue; */\n    display: none;\n}\n\n.create-new-project{\n    /* border: 3px solid crimson; */\n    display: none;\n}\n\n#project-choices {\n    background: rgba(0, 105, 96, 0.795);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    /* backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px ); */\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    height: 25px;\n    color: white;\n    text-align: center;\n}\n\n.display-form-items{\n    display: grid;\n    gap: 5px;\n}\n\n#form-submit{\n    appearance: none;\n    background-color: rgba(0, 255, 21, 0.541);\n\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    /* backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px ); */\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    height: 45px;\n    color: white;\n    cursor: pointer;\n    font-size: 15px;\n    margin-top: 15px;\n}\n\n#form-submit:hover{\n    background-color: rgba(0, 255, 21, 0.753);\n}\n\n\n/* Mobile version */\n\n@media screen and (max-width: 600px) {\n    \n\n    .hamburger-menu {\n        display: grid;\n        align-items: center;\n        justify-items: center;\n        \n    }\n\n    .hamburger-menu:active{\n\n\n        background: rgba(0, 0, 0, 0.514);\n        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n        backdrop-filter: blur( 6.5px );\n        -webkit-backdrop-filter: blur( 6.5px );\n    }\n\n    .main-container {\n        /* border: 1px solid blue; */\n        display: grid;\n        grid-template-rows: 70px 1fr 40px;\n        grid-template-columns: 1fr 300px;\n        grid-template-areas: \n        \"top-container top-container\" \n        \"display-container display-container\"\n        \"todo-container-footer todo-container-footer\";\n        padding: 0px 5px 0px 5px;\n    \n    \n    \n    }\n\n    .top-container{\n        border-radius: 0px 0px 10px 10px;\n    }\n\n    .display-container,\n    .collection-container{\n        border-radius: 10px;\n        /* margin: 0px 5px 0px 5px; */\n    }\n\n    .display-container{\n        padding: 5px;\n    }\n\n    \n\n    .note-menu {\n        position: absolute;\n        display: grid;\n        justify-self: end;\n        align-self: end;\n        grid-row: 2/3;\n        grid-column: 2/3;\n        /* height: 90%; */\n        display: none;\n        width: 200px;\n        z-index: 1;\n        border-radius: 15px 0px 0px 15px;\n        /* to correct for main container padding */\n        right: -5px;\n        border: 1px solid rgba( 255, 255, 255, 0.18 );\n        border-right: none;\n        /* border: none; */\n        /* background: rgba(0, 0, 0, 0.473); */\n        background: rgba(0, 0, 0, 0.322);\n    }\n\n    .project-todo-container{\n        left: 0px;\n    }\n\n\n    .all-todos-tab,\n    .all-projects-tab,\n    .all-notes-tab {\n\n        margin-bottom: 10px;\n        border-radius: 10px;\n        padding: 10px;\n        padding-right: 20px;\n        /* font-size: 15px; */\n        text-align: right;\n        \n    }\n\n    .menu-active { /*triggers when hamburger menu is clicked*/\n        display: grid;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createProjects.js":
/*!*******************************!*\
  !*** ./src/createProjects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodos */ "./src/createTodos.js");




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


    // Delete this if there ends up being a problem
    function cleanUpProjects (){

        for (let index = 0; index < projectArray.length; index++) {


            if (((!projectArray[index].title) && 
                (!projectArray[index].desc))||projectArray[index].priority === 'high'|| projectArray[index].priority === 'medium' || projectArray[index].priority === 'low') {



                projectArray.splice(index,1)

                --index;

            }
            
        }

        localStorageUpdate();

    }

    // clean up empty projects
    cleanUpProjects();
    

    function localStorageUpdate(){



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


        projectArray.forEach(project => {


            if (project.title === oldDetails.title && 
                project.desc === oldDetails.desc && 
                project.dueDate === oldDetails.dueDate && 
                project.remindIn === oldDetails.remindIn && 
                project.priority === oldDetails.priority && 
                project.status === oldDetails.status) {




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

        _createTodos__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTodoOfProject(oldDetails);


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

   
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializedProjectModule);

/***/ }),

/***/ "./src/createTodos.js":
/*!****************************!*\
  !*** ./src/createTodos.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function todoModule (){

    // Factory function to create notes

    function todoFactory (title,desc,dueDate,remindIn,priority,status,project){

        // todo
        if(dueDate){
            return {title,desc,dueDate,remindIn,priority,status,project}
        }
        // note
        if(!dueDate){
            return {title,desc}
        }
        
        
    }

    // This is where unsorted todo arrays are stored
    const todoArray = [];

    
    function getStoredTodos (){

        const storedTodos = localStorage.getItem('storedTodos');

        if(!storedTodos){
            return;
        }
        const parseStoredTodos = JSON.parse(storedTodos);

        parseStoredTodos.forEach(todos => {
            todoArray.push(todos)
        });

    }

    // get stored todos on boot
    getStoredTodos();


    function cleanUpTodos (){

        for (let index = 0; index < todoArray.length; index++) {


            if (((!todoArray[index].title) && 
                (!todoArray[index].desc))||todoArray[index].priority === 'high'|| todoArray[index].priority === 'medium' || todoArray[index].priority === 'low') {



                todoArray.splice(index,1)

                --index;

            }
            
        }

        localStorageUpdate();

    }

    // clean up empty projects
    cleanUpTodos();




    function localStorageUpdate(){



        localStorage.setItem('storedTodos',JSON.stringify(todoArray));

    }


    // this is the function that will be used to create Todos
    function createTodo (title,desc,dueDate,remindIn,priority,status,project){
        const newToDo = todoFactory(title,desc,dueDate,remindIn,priority,status,project);
        todoArray.push(newToDo);
        localStorageUpdate();
        return;
    }


    // This must be deleted later as it is created primarily for testing

    // const currentDate = new Date();

    // const day = currentDate.getDate();

    // const month = currentDate.getMonth();

    // const year = currentDate.getFullYear();


    // for (let index = 1; index <= 10; index++) {

    //     createTodo(`title${index}`,`desc${index}`,`${year + index}-${month + index}-${day + index}`,index,`high`,`pending`,'project 2');

    //     createTodo(`title${index}`,`desc${index}`,`${year + index}-${month + index}-${day + index}`,index,`low`,`pending`,'project 2');

    //     createTodo(`title${index}`,`desc${index}`);


   
        
    // }

    // for (let index = 1; index <= 5; index++) {

    //     createTodo(`title${index}`,`desc${index}`,`${year + index}-${month + index}-${day + index}`,index,`high`,`complete`,'project1test');

    //     createTodo(`title${index}`,`desc${index}`,`${year + index}-${month + index}-${day + index}`,index,`medium`,`pending`,'project1test');

   
        
    // }

    // localStorageUpdate();
    // localStorageUpdate();

    // localStorage.removeItem('storedTodos');
    
    // oldDetails
    // newDetails
    // newTitle,newDesc,newDueDate,newRemindIn,newPriority,newStatus,newProject

    function updateTodo (oldDetails,newDetails){

        todoArray.forEach(todo => {


            if (todo.title === oldDetails.title && 
                todo.desc === oldDetails.desc && 
                todo.dueDate === oldDetails.dueDate && 
                todo.remindIn === oldDetails.remindIn && 
                todo.priority === oldDetails.priority && 
                todo.status === oldDetails.status && 
                todo.project === oldDetails.project) {


                todo.title = newDetails.newTitle;
                todo.desc = newDetails.newDesc;
                todo.dueDate = newDetails.newDue;
                todo.remindIn = newDetails.newReminder;
                todo.priority = newDetails.newPriority;
                todo.status = newDetails.newStatus;
                todo.project = newDetails.newProject;

            }
            
            
            
        });

        localStorageUpdate();

    }




    function deleteTodo (oldDetails){


        for (let index = 0; index < todoArray.length; index++) {


            if (todoArray[index].title === oldDetails.title && 
                todoArray[index].desc === oldDetails.desc && 
                todoArray[index].dueDate === oldDetails.dueDate && 
                todoArray[index].remindIn === oldDetails.remindIn && 
                todoArray[index].priority === oldDetails.priority && 
                todoArray[index].status === oldDetails.status && 
                todoArray[index].project === oldDetails.project) {


                todoArray.splice(index,1)

            }
            
        }

        localStorageUpdate();

    }




    function deleteTodoOfProject (project){


        for (let index = 0; index < todoArray.length; index++) {


            if (todoArray[index].project === project.title) {



                todoArray.splice(index,1)

                --index;

            }
            
        }

        localStorageUpdate();

    }

    

    // End of test objects

    return {todoArray, createTodo, updateTodo, deleteTodo, deleteTodoOfProject};


}


const initializedTodoModule = todoModule();


// initialized version is sent because the is no reason to re-initialise later on
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializedTodoModule);


/***/ }),

/***/ "./src/domActivities/domActivities.js":
/*!********************************************!*\
  !*** ./src/domActivities/domActivities.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeProjectPriority: () => (/* binding */ changeProjectPriority),
/* harmony export */   changeTodoPriority: () => (/* binding */ changeTodoPriority),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   deleteProjectItem: () => (/* binding */ deleteProjectItem),
/* harmony export */   deleteTodoItem: () => (/* binding */ deleteTodoItem),
/* harmony export */   displayDuration: () => (/* binding */ displayDuration),
/* harmony export */   emptyDisplay: () => (/* binding */ emptyDisplay),
/* harmony export */   updateNoteItem: () => (/* binding */ updateNoteItem),
/* harmony export */   updateProjectItem: () => (/* binding */ updateProjectItem),
/* harmony export */   updateTodoItem: () => (/* binding */ updateTodoItem)
/* harmony export */ });
/* harmony import */ var _createTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createTodos */ "./src/createTodos.js");
/* harmony import */ var _createProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createProjects */ "./src/createProjects.js");
/* harmony import */ var _tabObjects_allNotesTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tabObjects/allNotesTab */ "./src/tabObjects/allNotesTab.js");
/* harmony import */ var _tabObjects_allTodosTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tabObjects/allTodosTab */ "./src/tabObjects/allTodosTab.js");
/* harmony import */ var _tabObjects_allProjectsTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tabObjects/allProjectsTab */ "./src/tabObjects/allProjectsTab.js");
/* harmony import */ var _domCreation_formDOMCreation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domCreation/formDOMCreation */ "./src/domCreation/formDOMCreation.js");
/* harmony import */ var _domCreation_allTodoDOMCreation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../domCreation/allTodoDOMCreation */ "./src/domCreation/allTodoDOMCreation.js");
/* harmony import */ var _domCreation_projectsDOMCreation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../domCreation/projectsDOMCreation */ "./src/domCreation/projectsDOMCreation.js");
/* harmony import */ var _domCreation_allNotesDOMCreation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../domCreation/allNotesDOMCreation */ "./src/domCreation/allNotesDOMCreation.js");
/* harmony import */ var _domCreation_populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../domCreation/populateDOMTodoCollection */ "./src/domCreation/populateDOMTodoCollection.js");
/* harmony import */ var _domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../domCreation/populateDOMProjectCollection */ "./src/domCreation/populateDOMProjectCollection.js");
/* harmony import */ var _domCreation_populateDOMNoteCollection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../domCreation/populateDOMNoteCollection */ "./src/domCreation/populateDOMNoteCollection.js");
/* harmony import */ var _domCreation_displayProject__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../domCreation/displayProject */ "./src/domCreation/displayProject.js");
// All DOM Activities are centralised here except DOM Creation































let menuInDisplay = 'todos'

let priorityInDisplay = 'High'


function updateDisplay (){

    if(menuInDisplay === 'todos'){


        (0,_domCreation_populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_9__["default"])(priorityInDisplay);

    }

    if(menuInDisplay === 'projects'){



        (0,_domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__["default"])(priorityInDisplay);

    }

    if (menuInDisplay === 'notes') {


        
        (0,_domCreation_populateDOMNoteCollection__WEBPACK_IMPORTED_MODULE_11__["default"])();

    }


    if (menuInDisplay === 'todos' || menuInDisplay === 'projects') {

        const highPriorityButton = document.querySelector('.high-priority');
        const mediumPriorityButton = document.querySelector('.medium-priority');
        const lowPriorityButton = document.querySelector('.low-priority');



        if (priorityInDisplay === 'High') {


            highPriorityButton.classList.add('high-priority-chosen');

            mediumPriorityButton.classList.remove('medium-priority-chosen');

            lowPriorityButton.classList.remove('low-priority-chosen');

        }

        if (priorityInDisplay === 'Medium') {


            highPriorityButton.classList.remove('high-priority-chosen');

            mediumPriorityButton.classList.add('medium-priority-chosen');

            lowPriorityButton.classList.remove('low-priority-chosen');



        }

        if (priorityInDisplay=== 'Low') {


            highPriorityButton.classList.remove('high-priority-chosen');

            mediumPriorityButton.classList.remove('medium-priority-chosen');

            lowPriorityButton.classList.add('low-priority-chosen');


        }

    }



    
}




function domActivitiesModule (){

    const mainContainer = document.querySelector('.main-container');

    mainContainer.addEventListener('click',function(e){

        

        if(menu.classList.contains("menu-active")){
            menu.classList.remove("menu-active");
            return;
        }

    })


    // hamburger button
    const hamburgerButton = document.querySelector('.hamburger-menu');

    const menu = document.querySelector('.note-menu');

    menu.addEventListener('click',function(e){
        e.stopPropagation();
    })


    hamburgerButton.addEventListener('click',function(e){

        e.stopPropagation();

        if(!menu.classList.contains("menu-active")){
            menu.classList.add("menu-active");
            return;
        }


        if(menu.classList.contains("menu-active")){
            menu.classList.remove("menu-active");
            return;
        }

    })


    // FORM ACTIVITIES

    // FORM INPUT ACTIVITIES BEGIN HERE


    // form container
    const formContainer = document.querySelector('.form-container');

    const entryCreationForm = document.querySelector('.todo-creation-form');

    // todo or note button

    let isNote = true;

    const selectTodo = document.querySelector('#is-todo');

    const selectNote = document.querySelector('#is-note');

    const todoCreationDiv = document.querySelector('.create-new-todo');




    // same variable, need to refactor
    const selectExistingProject = document.querySelector('#existing-project');

    const selectNewProject = document.querySelector('#new-project');

    const existingProjectRadio = document.querySelector('#existing-project');

    const newProjectRadio = document.querySelector('#new-project');




    const existingProjectDiv = document.querySelector('.select-existing-project');

    const newProjectDiv = document.querySelector('.create-new-project');




    // To-do inputs
    const todoTitle = document.querySelector('#todo-title');

    const todoDesc = document.querySelector('#todo-desc');

    const entryType = isNote;

    const todoDate = document.querySelector('#todo-date');

    const todoReminder = document.querySelector('#todo-remind-in');

    const todoPriority = document.querySelector('#todo-priority');

    


    const todoInputs = [todoDate,todoReminder];



    const projectsChoices = document.querySelector('#project-choices');

    // new project inputs

    const projectTitle = document.querySelector('#project-title');

    const projectDesc = document.querySelector('#project-desc');

    const projectDate = document.querySelector('#project-date');

    const projectReminder = document.querySelector('#project-remind-in');


    // is a button
    const projectPriority = document.querySelector('#project-priority');

    const newProjectInputs = [projectTitle,projectDesc,projectDate,projectReminder];


    selectTodo.addEventListener('click', function(){
        todoCreationDiv.classList.add('display-form-items');

        todoInputs.forEach(input => {
            input.setAttribute('required','');
        });

        if (selectExistingProject.disabled) {
            selectNewProject.checked = true;
        }

        if (!selectExistingProject.checked && !selectNewProject.checked)  {
            selectExistingProject.checked = true;
        }
        
        if (selectExistingProject.checked) {
            checkedExistingProject();
        }

        if (selectNewProject.checked) {
            checkedNewProject();
        }
        isNote = false;

    })

    selectNote.addEventListener('click', function(){
        todoCreationDiv.classList.remove('display-form-items');
        existingProjectDiv.classList.remove('display-form-items');
        newProjectDiv.classList.remove('display-form-items');

        selectNewProject.checked = false;
        selectExistingProject.checked = false;

        todoInputs.forEach(input => {
            input.removeAttribute('required');
            input.value = '';
        });

        projectsChoices.removeAttribute('required');

        newProjectInputs.forEach(input => {
            input.removeAttribute('required');
            input.value = '';
        });

        isNote= true;
    })

    // existing project or new project

    let isNewProject = false;



    const projectOption = isNewProject;

    // existing project input



    selectExistingProject.addEventListener('click', function(){

        checkedExistingProject();
        
    });



    selectNewProject.addEventListener('click', function(){

        checkedNewProject();

    })


    function checkedExistingProject (){
        existingProjectDiv.classList.add('display-form-items');
        newProjectDiv.classList.remove('display-form-items');

        isNewProject = false;

        projectsChoices.setAttribute('required','');

        newProjectInputs.forEach(element => {
            element.removeAttribute('required','');
            element.value = '';
        });

    }

    function checkedNewProject (){
        
        existingProjectDiv.classList.remove('display-form-items');
        newProjectDiv.classList.add('display-form-items');

        isNewProject = true;

        projectsChoices.removeAttribute('required');

        newProjectInputs.forEach(element => {
            element.setAttribute('required','');
        });

    }


    // receive all form input data


    const formSubmit = document.querySelector('#form-submit');


    


    // const testArray = [todoTitle,todoDesc,entryType,todoDate,todoReminder,todoPriority,projectOption,projectsChoices,projectTitle,projectDesc,projectDate,projectReminder,projectPriority];


    const allFormInputs = document.querySelectorAll('.form-input');
    

    

    formSubmit.addEventListener('click', function(e){

       

        // clear color on priority button
        

        const requiredInput = [];

        let requiredInputFilled = true;


        allFormInputs.forEach(element => {
            if (element.hasAttribute('required')) {
                requiredInput.push(element);
            }
        });

        for (const each of requiredInput) {
            

            if(!each.value){
                requiredInputFilled = false;   

                break;      
            }

        }

        if(requiredInputFilled){

            // e.preventDefault();

            // hideForm();

            // create todo with form

            const resetArray = [projectTitle,projectDesc,projectDate,projectReminder,todoTitle,todoDesc,todoDate,todoReminder];

            const tabContainer = document.querySelector('.tab-container');

            // tabContainer.querySelectorAll('*').forEach(element => {
            //     element.classList.remove('menu-tab-active')
            // });


            if(newProjectRadio.checked){


                if (projectReminder.value < 0 || projectReminder.value > 30) {
                    
                    return;
                }

                e.preventDefault();

                hideForm();

                tabContainer.querySelectorAll('*').forEach(element => {
                    element.classList.remove('menu-tab-active')
                });
    

                
                _createProjects__WEBPACK_IMPORTED_MODULE_1__["default"].createProject(projectTitle.value,projectDesc.value,projectDate.value,projectPriority.value,projectReminder.value,`Pending`);


                _createTodos__WEBPACK_IMPORTED_MODULE_0__["default"].createTodo(todoTitle.value,todoDesc.value,todoDate.value,Number(todoReminder.value),todoPriority.value,`Pending`,projectTitle.value);


               
                //everytime submit button is clicked fresh dropdown is created 
                _domCreation_formDOMCreation__WEBPACK_IMPORTED_MODULE_5__["default"].existingProjectOptions();

                (0,_domCreation_projectsDOMCreation__WEBPACK_IMPORTED_MODULE_7__["default"])();

                allProjectsTab.classList.add('menu-tab-active');

                menuInDisplay = 'projects';

                priorityInDisplay = projectPriority.value;


                resetArray.forEach(input => {
                    input.value = '';
                });


                updateDisplay();

 


                return;

            }

            // create to-dos and notes

            _createTodos__WEBPACK_IMPORTED_MODULE_0__["default"].createTodo(todoTitle.value,todoDesc.value,todoDate.value,Number(todoReminder.value),todoPriority.value,`pending`,projectsChoices.value);


            //everytime submit button is clicked fresh dropdown is created 
            _domCreation_formDOMCreation__WEBPACK_IMPORTED_MODULE_5__["default"].existingProjectOptions();

            if (selectTodo.checked) {

                if (todoReminder.value < 0 || todoReminder.value > 30) {
                    
                    return;
                }

                e.preventDefault();

                hideForm();

                tabContainer.querySelectorAll('*').forEach(element => {
                    element.classList.remove('menu-tab-active')
                });

                (0,_domCreation_allTodoDOMCreation__WEBPACK_IMPORTED_MODULE_6__["default"])();

                allTodosTab.classList.add('menu-tab-active');

                menuInDisplay = 'todos';

                priorityInDisplay = todoPriority.value;

                updateDisplay();


                
            }

            

            if (selectNote.checked) {

                e.preventDefault();

                hideForm();

                tabContainer.querySelectorAll('*').forEach(element => {
                    element.classList.remove('menu-tab-active')
                });


                (0,_domCreation_allNotesDOMCreation__WEBPACK_IMPORTED_MODULE_8__["default"])();

                allNotesTab.classList.add('menu-tab-active');

                menuInDisplay = 'notes';

                updateDisplay();
               
            }


            resetArray.forEach(input => {

                input.value = '';
            });


        }


        // FORM INPUT ACTIVITIES END HERE
        


    });



    // FORM APPEARANCE ACTIVITES BEGIN HERE


    function hideForm (){


        formContainer.classList.remove('show-form')

        

    }


    // stop event bubbling.
    entryCreationForm.addEventListener('click',function(e){

        e.stopPropagation();

    })


    formContainer.addEventListener('click', function(e){

        hideForm();
            
    })

    const formButton = document.querySelector('.form-button');

    formButton.addEventListener('click',function(){

        formContainer.classList.add('show-form');

        _domCreation_formDOMCreation__WEBPACK_IMPORTED_MODULE_5__["default"].existingProjectOptions();

        if(selectNote.checked){
            return;
        }

        if (selectTodo.checked && selectExistingProject.disabled) {
            selectNewProject.checked = true;
        }


        if (selectNewProject.checked){

            checkedNewProject();
        }

        if(selectExistingProject.checked){

            checkedExistingProject();
        }

    })





    







    const allTodosTab = document.querySelector('.all-todos-tab');

    allTodosTab.addEventListener('click',function(){

        



        menuInDisplay = 'todos';

        (0,_domCreation_allTodoDOMCreation__WEBPACK_IMPORTED_MODULE_6__["default"])();

    });

    const allProjectsTab = document.querySelector('.all-projects-tab')

    allProjectsTab.addEventListener('click',function(){



        menuInDisplay = 'projects';

        (0,_domCreation_projectsDOMCreation__WEBPACK_IMPORTED_MODULE_7__["default"])()

    })


    const allNotesTab = document.querySelector('.all-notes-tab');

    allNotesTab.addEventListener('click',function(){



        menuInDisplay = 'notes';

        (0,_domCreation_allNotesDOMCreation__WEBPACK_IMPORTED_MODULE_8__["default"])();

    })




    

}


 // PRIORITY BUTTON - TODOS

 function changeTodoPriority(){
    const highPriorityButton = document.querySelector('.high-priority');
    const mediumPriorityButton = document.querySelector('.medium-priority');
    const lowPriorityButton = document.querySelector('.low-priority');

    if (!highPriorityButton||!mediumPriorityButton||!lowPriorityButton) {
        return;
    }


    highPriorityButton.addEventListener('click',function(){
        
        // const priorityButtons = document.querySelector('.priority-buttons');
  
        // priorityButtons.querySelectorAll('*').forEach(element => {
        //     element.classList.remove('chosen-priority')
        // });

        // highPriorityButton.classList.add('chosen-priority');


        highPriorityButton.classList.add('high-priority-chosen');

        mediumPriorityButton.classList.remove('medium-priority-chosen');

        lowPriorityButton.classList.remove('low-priority-chosen');

        (0,_domCreation_populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_9__["default"])('High');

        priorityInDisplay = 'High';


    });

    

    mediumPriorityButton.addEventListener('click',function(){
        
        // const priorityButtons = document.querySelector('.priority-buttons');
        
        // priorityButtons.querySelectorAll('*').forEach(element => {
        //     element.classList.remove('chosen-priority')
        // });

        // mediumPriorityButton.classList.add('chosen-priority');

        highPriorityButton.classList.remove('high-priority-chosen');

        mediumPriorityButton.classList.add('medium-priority-chosen');

        lowPriorityButton.classList.remove('low-priority-chosen');

        (0,_domCreation_populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_9__["default"])('Medium');

        priorityInDisplay = 'Medium';

    });


   
    lowPriorityButton.addEventListener('click',function(){

        // const priorityButtons = document.querySelector('.priority-buttons');

        // priorityButtons.querySelectorAll('*').forEach(element => {
            
        //     element.classList.remove('chosen-priority')
        // });

        // lowPriorityButton.classList.add('chosen-priority');

        highPriorityButton.classList.remove('high-priority-chosen');

        mediumPriorityButton.classList.remove('medium-priority-chosen');

        lowPriorityButton.classList.add('low-priority-chosen');

        (0,_domCreation_populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_9__["default"])('Low');

        priorityInDisplay = 'Low';

    });
   }




   function changeProjectPriority(){
    const highPriorityButton = document.querySelector('.high-priority');
    const mediumPriorityButton = document.querySelector('.medium-priority');
    const lowPriorityButton = document.querySelector('.low-priority');

    if (!highPriorityButton||!mediumPriorityButton||!lowPriorityButton) {
        return;
    }


    highPriorityButton.addEventListener('click',function(){
        
        // const priorityButtons = document.querySelector('.priority-buttons');
  
        // priorityButtons.querySelectorAll('*').forEach(element => {
        //     element.classList.remove('chosen-priority')
        // });

        // highPriorityButton.classList.add('chosen-priority');




        highPriorityButton.classList.add('high-priority-chosen');

        mediumPriorityButton.classList.remove('medium-priority-chosen');

        lowPriorityButton.classList.remove('low-priority-chosen');



        (0,_domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__["default"])('High');

        priorityInDisplay = 'High';


    });

    

    mediumPriorityButton.addEventListener('click',function(){
        
        // const priorityButtons = document.querySelector('.priority-buttons');
        
        // priorityButtons.querySelectorAll('*').forEach(element => {
        //     element.classList.remove('chosen-priority')
        // });

        // mediumPriorityButton.classList.add('chosen-priority');



        highPriorityButton.classList.remove('high-priority-chosen');

        mediumPriorityButton.classList.add('medium-priority-chosen');

        lowPriorityButton.classList.remove('low-priority-chosen');



        (0,_domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__["default"])('Medium');

        priorityInDisplay = 'Medium';

    });


   
    lowPriorityButton.addEventListener('click',function(){

        // const priorityButtons = document.querySelector('.priority-buttons');

        // priorityButtons.querySelectorAll('*').forEach(element => {
            
        //     element.classList.remove('chosen-priority')
        // });

        // lowPriorityButton.classList.add('chosen-priority');

        highPriorityButton.classList.remove('high-priority-chosen');

        mediumPriorityButton.classList.remove('medium-priority-chosen');

        lowPriorityButton.classList.add('low-priority-chosen');

        (0,_domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__["default"])('Low');

        priorityInDisplay = 'Low';

    });
   }


   function updateTodoItem (object){

        const todoDisplayContainer = document.querySelector('.todo-display-container');

        const todoDisplay = document.querySelector('.todo-display');

        const todoUpdateBtn = document.querySelector('#todo-update');

        todoUpdateBtn.addEventListener('click',function(e){

        const newTodoTitle = document.querySelector('#todo-display-title')
        const newTodoDesc = document.querySelector('#todo-display-desc');
        const newTodoDue = document.querySelector('#todo-display-date');
        const newTodoReminder = document.querySelector('#todo-display-remind-in');
        const newTodoPriority = document.querySelector('#todo-display-priority');
        const newTodoStatus = document.querySelector('#todo-display-status');
        const newTodoProject = document.querySelector('#project-display-choices');


        const inputArrays = [newTodoTitle.value,newTodoDesc.value,newTodoDue.value,newTodoReminder.value,newTodoPriority.value,newTodoStatus.value,newTodoProject.value]

        const emptyInput = []

        inputArrays.forEach(element => {

            if (!element) {
                emptyInput.push(element);
            }
        })


        if (emptyInput.length > 0 || newTodoReminder.value < 0 || newTodoReminder.value > 30) {


            return;
        }

        e.preventDefault();
    
    

        let newDetails = {
            newTitle: newTodoTitle.value,
            newDesc: newTodoDesc.value,
            newDue: newTodoDue.value,
            newReminder: newTodoReminder.value,
            newPriority: newTodoPriority.value,
            newStatus: newTodoStatus.value,
            newProject: newTodoProject.value,
        }
        
        _createTodos__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(object,newDetails);

        

        // this runs even in a normal todo update

        if (menuInDisplay === 'projects') {
            
            if (_domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__.clickedProject) {


    
                const getLatestProjectObject = (0,_tabObjects_allProjectsTab__WEBPACK_IMPORTED_MODULE_4__["default"])().unprocessedProjectArray;
    

    
                let latestProject = '';
    
                getLatestProjectObject.forEach(project => {
    
    
                    if (project.title === _domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__.clickedProject.title && 
                        project.desc === _domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__.clickedProject.desc && 
                        project.dueDate === _domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__.clickedProject.dueDate && 
                        project.remindIn === _domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__.clickedProject.remindIn && 
                        project.priority === _domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__.clickedProject.priority && 
                        project.status === _domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__.clickedProject.status) {
                        
                        latestProject = project;
    
                    }
                });
    
                (0,_domCreation_displayProject__WEBPACK_IMPORTED_MODULE_12__["default"])(latestProject)
    

          
            }

        }


        // NEED TO FIX THIS

        if (menuInDisplay === 'todos') {
            
            priorityInDisplay = newTodoPriority.value;

            updateDisplay();
        }


        todoDisplayContainer.remove();

        });


        
        todoDisplayContainer.addEventListener('click',function(){
            todoDisplayContainer.remove();
        })

        todoDisplay.addEventListener('click',function(e){
            e.stopPropagation();
        })



    }





    function updateNoteItem (object){

        const todoDisplayContainer = document.querySelector('.todo-display-container');

        const todoDisplay = document.querySelector('.todo-display');

        const todoUpdateBtn = document.querySelector('#todo-update');





        todoUpdateBtn.addEventListener('click',function(e){

        const newTodoTitle = document.querySelector('#todo-display-title')
        const newTodoDesc = document.querySelector('#todo-display-desc');



        const inputArrays = [newTodoTitle.value,newTodoDesc.value]

        const emptyInput = []

        inputArrays.forEach(element => {

            if (!element) {
                emptyInput.push(element);
            }
        })


        if (emptyInput.length > 0) {

            return;
        }

        e.preventDefault();

        

        let newDetails = {
            newTitle: newTodoTitle.value,
            newDesc: newTodoDesc.value,
        }
        
        _createTodos__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(object,newDetails);

        menuInDisplay = 'notes'

        updateDisplay();

        todoDisplayContainer.remove();

        });


        
        todoDisplayContainer.addEventListener('click',function(){
            todoDisplayContainer.remove();
        })

        todoDisplay.addEventListener('click',function(e){
            e.stopPropagation();
        })



    }









    function updateProjectItem (project){


        const projectDisplayContainer = document.querySelector('.project-todo-container');

        const projectDisplay = document.querySelector('.project-details');

        const projectUpdateButton = document.querySelector('#project-update');

        projectUpdateButton.addEventListener('click',function(e){

            // project-status-update

        const newProjectTitle = document.querySelector('#project-title-update')
        const newProjectDesc = document.querySelector('#project-desc-update');
        const newProjectDue = document.querySelector('#project-date-update');
        const newProjectReminder = document.querySelector('#project-reminder-update');
        const newProjectPriority = document.querySelector('#project-priority-update');
        const newProjectStatus = document.querySelector('#project-status-update');



        const inputArrays = [newProjectTitle.value,newProjectDesc.value,newProjectDue.value,newProjectReminder.value,newProjectPriority.value,newProjectStatus.value]

        const emptyInput = []

        inputArrays.forEach(element => {

            if (!element) {
                emptyInput.push(element);
            }
        })


        if (emptyInput.length > 0 || newProjectReminder.value < 0 || newProjectReminder.value > 30) {

            return;
        }

        e.preventDefault();

        
        

        let newDetails = {
            // update this
            newTitle: newProjectTitle.value,
            newDesc: newProjectDesc.value,
            newDue: newProjectDue.value,
            newReminder: newProjectReminder.value,
            newPriority: newProjectPriority.value,
            newStatus: newProjectStatus.value,
        }


        _createProjects__WEBPACK_IMPORTED_MODULE_1__["default"].updateProject(project,newDetails);

        menuInDisplay = 'projects'

        priorityInDisplay = newProjectPriority.value;

        updateDisplay();

        projectDisplayContainer.remove();

        });


        
        projectDisplayContainer.addEventListener('click',function(){
            projectDisplayContainer.remove();
        })

        projectDisplay.addEventListener('click',function(e){
            e.stopPropagation();
        })



    }



    function popUpforDelete(deleteObjFn){
        const mainContainer = document.querySelector('.main-container');

        const popUpContainer = document.createElement('div');
        popUpContainer.classList.add('pop-up-container');
        mainContainer.append(popUpContainer);

            const popUp = document.createElement('div');
            popUp.classList.add('pop-up');
            popUpContainer.append(popUp);

                const popUpContentDiv = document.createElement('div');
                popUpContentDiv.classList.add('pop-up-content-div')
                popUp.append(popUpContentDiv)
            
                    const popUpContent = document.createElement('div');
                    popUpContent.textContent = 'Are you sure you want to delete this?'
                    popUpContentDiv.append(popUpContent);

                const buttonContainer = document.createElement('div');
                buttonContainer.classList.add('pop-up-button-container');
                popUp.append(buttonContainer);

                    const yesButton = document.createElement('button');
                    yesButton.textContent = 'Yes';
                    yesButton.classList.add('yes-button');
                    buttonContainer.append(yesButton);

                    yesButton.addEventListener('click',function(){
                        popUpContainer.remove();
                        deleteObjFn()
                        return true;
                    })

                    const noButton = document.createElement('button');
                    noButton.textContent = 'No';
                    noButton.classList.add('no-button');
                    buttonContainer.append(noButton);

                    noButton.addEventListener('click',function(){
                        popUpContainer.remove();
                        return false;
                    })



    }



    



    function deleteTodoItem (object){

        const todoDisplayContainer = document.querySelector('.todo-display-container');

        const todoDisplay = document.querySelector('.todo-display');

        const todoDeleteBtn = document.querySelector('#todo-delete');

        todoDeleteBtn.addEventListener('click',function(){


            function deleteTodo(){

                _createTodos__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTodo(object);

                updateDisplay()

                todoDisplayContainer.remove();
                
            }

            popUpforDelete(deleteTodo);

        });


        todoDisplayContainer.addEventListener('click',function(){
            todoDisplayContainer.remove();
        })

        todoDisplay.addEventListener('click',function(e){
            e.stopPropagation();
        })

    }


    function deleteProjectItem (object){


        const projectDisplayContainer = document.querySelector('.project-todo-container');

        const projectDisplay = document.querySelector('.project-details');

        const projectDeleteButton = document.querySelector('#project-delete');

        

        projectDeleteButton.addEventListener('click',function(){

            function deleteProject (){

                _createProjects__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject(object);

                updateDisplay();

                projectDisplayContainer.remove();

            }

            popUpforDelete(deleteProject);
        
        });


        projectDisplayContainer.addEventListener('click',function(){
            projectDisplayContainer.remove();
        })

        projectDisplay.addEventListener('click',function(e){
            e.stopPropagation();
        })

    }



    // send to all populate modules
    function emptyDisplay(){
        const collectionContainer = document.querySelector('.collection-container');
        const collectionContainerItems = [];

        if(collectionContainer){
            collectionContainer.querySelectorAll('*').forEach(element => {
                collectionContainerItems.push(element)
            });

            if (collectionContainerItems.length === 0) {
                const displayEmpty = document.createElement('div');
                displayEmpty.classList.add('display-empty');
                displayEmpty.textContent = 'EMPTY';
                collectionContainer.append(displayEmpty);
                return;
            }

        }

        const notesCollection = document.querySelector('.notes-collection');
        const notesCollectionItems = [];

        if (notesCollection) {
            notesCollection.querySelectorAll('*').forEach(element => {
                notesCollectionItems.push(element)
            });

            if (notesCollectionItems.length === 0) {
                notesCollection.remove();
                const displayEmpty = document.createElement('div');
                displayEmpty.classList.add('display-empty');
                displayEmpty.textContent = 'EMPTY';
                collectionContainer.append(displayEmpty);
                return;
           
            }
    
        }
        
    }


    function displayDuration(date){

        const splitDate = date.split('-');

        const monthArray = ['January','February','March','April','May','June','July','August','September','October','November','December'];

        return `Due: ${Number(splitDate[2])} ${monthArray[splitDate[1]-1]} ${splitDate[0]}`;

    }

  

   



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domActivitiesModule);





/***/ }),

/***/ "./src/domActivities/sortingMethods.js":
/*!*********************************************!*\
  !*** ./src/domActivities/sortingMethods.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createTodos */ "./src/createTodos.js");
/* harmony import */ var _createProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createProjects */ "./src/createProjects.js");




function sortingModule (){


     // So that it does not mess with the original array

    function cloneObject(){

        const projectArrayReference = _createProjects__WEBPACK_IMPORTED_MODULE_1__["default"].projectArray;

        const cloneProjectArray = [];


        const todoArrayReference = _createTodos__WEBPACK_IMPORTED_MODULE_0__["default"].todoArray;

        const cloneTodoArray = [];
        

        todoArrayReference.forEach(todoObject => {
            const clonedToDo = Object.assign({},todoObject);
            cloneTodoArray.push(clonedToDo);
        });

        projectArrayReference.forEach(projectObject => {
            const clonedProject = Object.assign({},projectObject);
            cloneProjectArray.push(clonedProject);
        });


        return {cloneProjectArray,cloneTodoArray}


    }

    

    // sorts the to dos according to the project name is has been assigned to
    // Rename this to project sorter
    function sortByProjectName(){


        const cloneProjectArray = cloneObject().cloneProjectArray
        
        const cloneTodoArray = cloneObject().cloneTodoArray

        let processedProjectArrayByName = [];

        cloneProjectArray.forEach(projectObject => {

            projectObject.todoCollection = [];

            cloneTodoArray.forEach(todoObject => {

                if (projectObject.title === todoObject.project) {

                    
                    projectObject.todoCollection.push(todoObject);
                }
                
            });

            processedProjectArrayByName.push(projectObject);
            
        });


        return {processedProjectArrayByName};

    }








    function prioritySorter(unprocessedArray){

        const priorities = ['High','Medium','Low'];

        const objectsByPriority = {High:[],Medium:[],Low:[]};

        for (let index = 0; index < priorities.length; index++) {

            unprocessedArray.forEach(object => {
                if (object.priority === priorities[index]){
                    objectsByPriority[priorities[index]].push(object);
                }
            });
            
        }

        return objectsByPriority;


    }




    function sortDueDate (Array){

        // Use this to sort projects and todos

        // sorts array in ascending order according to due date
        ascendingSort(Array);

        const dueSortedArray = {
            notes:[],
            overdue:[],
            due:[],
            upcoming:[],
            complete:[]
        };

        Array.forEach(object => {


            // Notes - to be isolated           
            if(!object.dueDate){

                dueSortedArray.notes.push(object);
                return;

            }
            
            // Complete
            if(object.status === 'Complete'){
                

                dueSortedArray.complete.push(object);

                return;
            }

            // Overdue
            if((object.durationLeft.dayLeft) < 0){

                dueSortedArray.overdue.push(object);

                return;

            }

            // Due
            if (((object.durationLeft.dayLeft) <= object.remindIn) && ((object.durationLeft.dayLeft) >= 0)){

                dueSortedArray.due.push(object);

                return;
            }

            // Upcoming
            if((object.durationLeft.dayLeft) > object.remindIn){

                dueSortedArray.upcoming.push(object);

                return;

            }

        });



            
        return dueSortedArray;    
     

    }



    // Sorts objects in Array to ascending order according to due date
    function ascendingSort (Array){

        // Assign duration left
        Array.forEach(object => {
            const formatObjectDueDate = interval(object.dueDate);
            object.durationLeft = formatObjectDueDate;
        });


        const dateArray = [];
        const sortedArray = [];


        Array.forEach(object => {
            // object.durationLeft.dayLeft
            dateArray.push(object.durationLeft.dayLeft)
        });

        dateArray.sort(function(a,b){return a-b});

        dateArray.forEach(date => {


            for (let index = 0; index < Array.length; index++) {
                
                if (date === Array[index].durationLeft.dayLeft) {
                    sortedArray.push(Array[index]);

                    Array.splice(index,1)

                    break;
                    
                }
                
            }
    

        });

        // Push sorted array to original array
        sortedArray.forEach(sortedObj => {
            Array.push(sortedObj)
        });
        


    }


    function interval(date){

        const currentDate = new Date();

        const currentDay = currentDate.getDate();

        const currentMonth = currentDate.getMonth()+1;

        const currentYear = currentDate.getFullYear();



        // const formattedCurrentDate = [year,month,day];


        // [yyyy,mm,dd]
        const splitObjDate = date.split('-');

        const yearsLeft = splitObjDate[0] - currentYear;

        const monthsLeft = splitObjDate[1] - currentMonth;

        // const dayLeft = splitObjDate[2] - currentDay;

        // if it is next month or more, add 30 days multiplied by the number of extra months (for more filtering accuracy)
        const dayLeft = (30 * (monthsLeft)) + (splitObjDate[2] - currentDay);


        


        const intervalObj = {dayLeft,monthsLeft,yearsLeft};



    
        return intervalObj
    }



        

    function noteSorter(unprocessedArray){

        const noteObjects = []

        unprocessedArray.forEach(obj => {
            
            if(!obj.dueDate){

                noteObjects.push(obj)

            }

        });

        return noteObjects;


    }



   

    return {cloneObject,sortByProjectName,prioritySorter,sortDueDate,noteSorter}

}

const initializedSortToDoModule = sortingModule();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializedSortToDoModule);

/***/ }),

/***/ "./src/domCreation/allNotesDOMCreation.js":
/*!************************************************!*\
  !*** ./src/domCreation/allNotesDOMCreation.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _populateDOMNoteCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populateDOMNoteCollection */ "./src/domCreation/populateDOMNoteCollection.js");
// import populateTodoCollection from "./populateDOMTodoCollection"



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

            todoParagraph.textContent = 'Your collection of notes are displayed here';

            tabTitle.append(todoParagraph);

        






    
    const collectionContainer = document.createElement('div');

    collectionContainer.classList.add('collection-container');

    displayContainer.append(collectionContainer);

        // create a populate notes module

        // Create it here first then send it somewhere else.
        (0,_populateDOMNoteCollection__WEBPACK_IMPORTED_MODULE_0__["default"])();

        




       

    
    
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allNoteDOMModule);

/***/ }),

/***/ "./src/domCreation/allTodoDOMCreation.js":
/*!***********************************************!*\
  !*** ./src/domCreation/allTodoDOMCreation.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populateDOMTodoCollection */ "./src/domCreation/populateDOMTodoCollection.js");
/* harmony import */ var _domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domActivities/domActivities */ "./src/domActivities/domActivities.js");




function allTodoDOMModule (){

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

            todoHeader.textContent = 'To-dos';

            tabTitle.append(todoHeader);


            const todoParagraph = document.createElement('p');

            todoParagraph.textContent = 'Your collection of to-dos are displayed here';

            tabTitle.append(todoParagraph);

        
        const priorityButtons = document.createElement('div');

        priorityButtons.classList.add('priority-buttons');

        todoContainerTitle.append(priorityButtons);

            const highPriority = document.createElement('button');

            highPriority.classList.add('high-priority');

            highPriority.classList.add('high-priority-chosen');

            highPriority.textContent = 'High';

            priorityButtons.append(highPriority);


            const mediumPriority = document.createElement('button');

            mediumPriority.classList.add('medium-priority');

            mediumPriority.textContent = 'Medium';

            priorityButtons.append(mediumPriority);


            const lowPriority = document.createElement('button');

            lowPriority.classList.add('low-priority');

            lowPriority.textContent = 'Low';

            priorityButtons.append(lowPriority);

            





    
    const collectionContainer = document.createElement('div');

    collectionContainer.classList.add('collection-container');

    displayContainer.append(collectionContainer);

    (0,_populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_0__["default"])('High');

    (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__.changeTodoPriority)();
    
    // domAction()





   


       


                
               



        





    
    
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allTodoDOMModule);

/***/ }),

/***/ "./src/domCreation/displayProject.js":
/*!*******************************************!*\
  !*** ./src/domCreation/displayProject.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domActivities_domActivities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domActivities/domActivities */ "./src/domActivities/domActivities.js");
/* harmony import */ var _displayTodosInProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTodosInProject */ "./src/domCreation/displayTodosInProject.js");


// import displayTodo from "./displayTodo";



function displayProject (project){
                                      

    const mainContainer = document.querySelector('.main-container');

    const getProjectTodoContainer = document.querySelector('.project-todo-container');

    if (getProjectTodoContainer) {

        getProjectTodoContainer.remove();

    }

        const projectTodoContainer = document.createElement('div');

        projectTodoContainer.classList.add('project-todo-container');

        mainContainer.append(projectTodoContainer);


            const projectDisplay = document.createElement('div');
            projectDisplay.classList.add('project-display');
            projectTodoContainer.append(projectDisplay)

            projectDisplay.addEventListener('click',function(e){
                e.stopPropagation();
            })
        

            const projectForm = document.createElement('form');

            projectDisplay.append(projectForm);


            const projectDetails = document.createElement('div');

            projectDetails.classList.add('project-details');

            projectForm.append(projectDetails);

                projectDetails.addEventListener('click',function(e){
                    e.stopPropagation();
                })


                const projectTitleInput = document.createElement('input');

                projectTitleInput.setAttribute('id','project-title-update')

                projectTitleInput.value = project.title;

                projectTitleInput.setAttribute('required','');

                projectTitleInput.setAttribute('placeholder', 'Project Title');

                projectDetails.append(projectTitleInput);




                // const projectDetailsLineBreak1 = document.createElement('br');

                // projectDetails.append(projectDetailsLineBreak1);




                const projectDescInput = document.createElement('textarea');

                projectDescInput.setAttribute('id','project-desc-update');

                projectDescInput.value = project.desc;

                projectDescInput.setAttribute('required','');

                projectDescInput.setAttribute('placeholder', 'Project Description');

                projectDescInput.setAttribute('rows','4');

                projectDescInput.setAttribute('cols','40');

                projectDetails.append(projectDescInput);




                // const projectDetailsLineBreak2 = document.createElement('br');

                // projectDetails.append(projectDetailsLineBreak2);




                const projectDateInput = document.createElement('input');

                projectDateInput.setAttribute('id','project-date-update');

                projectDateInput.value = project.dueDate;

                projectDateInput.setAttribute('required','');

                projectDateInput.setAttribute('type','date')

                projectDetails.append(projectDateInput);




                // const projectDetailsLineBreak3 = document.createElement('br');

                // projectDetails.append(projectDetailsLineBreak3);





                const projectRemindInInput = document.createElement('input');

                projectRemindInInput.setAttribute('id','project-reminder-update');

                projectRemindInInput.setAttribute('type','number');

                projectRemindInInput.setAttribute('min','0');

                projectRemindInInput.setAttribute('max','30');

                projectRemindInInput.setAttribute('required','');

                projectRemindInInput.classList.add('form-input');

                projectRemindInInput.value = project.remindIn;

                projectDetails.append(projectRemindInInput);

                


                // const projectDetailsLineBreak4 = document.createElement('br');

                // projectDetails.append(projectDetailsLineBreak4);

                const projectButtonsOne = document.createElement('div');
                projectButtonsOne.classList.add('project-buttons-one');
                projectDetails.append(projectButtonsOne)


                const priorityBtnDiv = document.createElement('div');
                priorityBtnDiv.classList.add('priority-button-div');
                projectButtonsOne.append(priorityBtnDiv)


                const priorityLabel = document.createElement('label');
                priorityLabel.textContent = 'Priority:'
                priorityLabel.setAttribute('for','project-priority-update')
                priorityBtnDiv.append(priorityLabel)
                
    



                const projectPriorityButton = document.createElement('button');

                projectPriorityButton.setAttribute('id','project-priority-update');

                projectPriorityButton.setAttribute('value',project.priority);

                projectPriorityButton.setAttribute('type','button');

                projectPriorityButton.textContent = project.priority;

                priorityBtnDiv.append(projectPriorityButton);

                projectPriorityButton.addEventListener('click', function(){

                    // Add classes for different priorities (different colours)

                    if (projectPriorityButton.value === 'Low'){
                        projectPriorityButton.value = 'Medium';
                        projectPriorityButton.textContent = 'Medium';

                        return;
                    }

                    if (projectPriorityButton.value === 'Medium'){
                        projectPriorityButton.value = 'High';
                        projectPriorityButton.textContent = 'High';

                        return;
                    }

                    if (projectPriorityButton.value === 'High'){
                        projectPriorityButton.value = 'Low';
                        projectPriorityButton.textContent = 'Low';

                        return;
                    }


                });



                // const projectDetailsLineBreak5 = document.createElement('br');

                // projectDetails.append(projectDetailsLineBreak5);


                const statusBtnDiv = document.createElement('div');
                statusBtnDiv.classList.add('status-button-div');
                projectButtonsOne.append(statusBtnDiv)


                const statusLabel = document.createElement('label');
                statusLabel.textContent = 'Status:'
                statusLabel.setAttribute('for','project-status-update')
                statusBtnDiv.append(statusLabel)



                const projectDisplayStatus = document.createElement('button');

                projectDisplayStatus.setAttribute('id','project-status-update');

                projectDisplayStatus.setAttribute('value',project.status);

                projectDisplayStatus.setAttribute('type','button');

                projectDisplayStatus.textContent = project.status;

                projectDisplayStatus.classList.add('todo-update');

                statusBtnDiv.append(projectDisplayStatus);

                projectDisplayStatus.addEventListener('click', function(){

                    // Add classes for different priorities (different colours)

                    if (projectDisplayStatus.value === 'Pending'){
                        projectDisplayStatus.value = 'Complete';
                        projectDisplayStatus.textContent = 'Complete';

                        return;
                    }

                    if (projectDisplayStatus.value === 'Complete'){
                        projectDisplayStatus.value = 'Pending';
                        projectDisplayStatus.textContent = 'Pending';

                        return;
                    }


                });

                







            const projectTodos = document.createElement('div');

            projectTodos.classList.add('project-todos');

            projectDetails.append(projectTodos);

            // Check if we need this
            projectTodos.addEventListener('click',function(e){
                e.stopPropagation();
            })


            // Container that displays all todos in a project
            ;(0,_displayTodosInProject__WEBPACK_IMPORTED_MODULE_1__["default"])(project);

            // clickedProject = project;


            const projectButtonsTwo = document.createElement('div');
            projectButtonsTwo.classList.add('project-buttons-two');
            projectDetails.append(projectButtonsTwo);
    





            const projectDelete = document.createElement('button');

            projectDelete.setAttribute('value','');

            projectDelete.setAttribute('type','button');

            projectDelete.setAttribute('id','project-delete');

            projectDelete.textContent = 'Delete';

            projectButtonsTwo.append(projectDelete);


            

        
            const projectUpdateButton = document.createElement('button');

            projectUpdateButton.setAttribute('value','');

            projectUpdateButton.setAttribute('type','submit');

            projectUpdateButton.setAttribute('id','project-update');

            projectUpdateButton.textContent = 'Update';

            projectUpdateButton.classList.add('project-update');

            projectButtonsTwo.append(projectUpdateButton);



            // const projectDetailsLineBreak6 = document.createElement('br');

            // projectDetails.append(projectDetailsLineBreak6);


            


            (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_0__.updateProjectItem)(project);

            (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_0__.deleteProjectItem)(project)


       




        projectTodoContainer.addEventListener('click', function(){
            projectTodoContainer.remove();
        });


}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayProject);

/***/ }),

/***/ "./src/domCreation/displayTodo.js":
/*!****************************************!*\
  !*** ./src/domCreation/displayTodo.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tabObjects_allProjectsTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tabObjects/allProjectsTab */ "./src/tabObjects/allProjectsTab.js");
/* harmony import */ var _domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domActivities/domActivities */ "./src/domActivities/domActivities.js");





function displayTodo(object){

    const mainContainer = document.querySelector('.main-container');

    const todoDisplayContainer = document.createElement('div');

    todoDisplayContainer.classList.add('todo-display-container');

    mainContainer.append(todoDisplayContainer);


        const todoForm = document.createElement('form');

        todoDisplayContainer.append(todoForm)


        const todoDisplay = document.createElement('div');

        todoDisplay.classList.add('todo-display');

        todoDisplay.classList.add('main-todo-display')

        todoForm.append(todoDisplay);



            const todoDisplayTitle = document.createElement('input');

            todoDisplayTitle.setAttribute('placeholder','Title');

            todoDisplayTitle.setAttribute('id','todo-display-title');

            todoDisplayTitle.setAttribute('required','');

            todoDisplayTitle.value = object.title;

            todoDisplay.append(todoDisplayTitle);


            const todoDescTextArea = document.createElement('textarea');

            todoDescTextArea.setAttribute('name','');

            todoDescTextArea.setAttribute('id','todo-display-desc');

            todoDescTextArea.setAttribute('placeholder','Description')

            todoDescTextArea.setAttribute('cols','30');

            todoDescTextArea.setAttribute('rows','10');

            todoDescTextArea.setAttribute('required','');

            todoDescTextArea.value = object.desc;

            todoDescTextArea.classList.add('todo-update');

            todoDisplay.append(todoDescTextArea);


            const todoDisplayDate = document.createElement('input');

            todoDisplayDate.setAttribute('type','date');

            todoDisplayDate.setAttribute('id','todo-display-date');

            todoDisplayDate.value = object.dueDate;

            todoDisplayDate.classList.add('todo-update');

            todoDisplayDate.setAttribute('required','');

            todoDisplay.append(todoDisplayDate);

            // const lineBreak1 = document.createElement('br');                                               
            // todoDisplay.append(lineBreak1);


            const todoDisplayRemindIn = document.createElement('input');

            todoDisplayRemindIn.setAttribute('type','number');

            todoDisplayRemindIn.setAttribute('min','0');

            todoDisplayRemindIn.setAttribute('max','30');

            todoDisplayRemindIn.setAttribute('id','todo-display-remind-in');

            todoDisplayRemindIn.setAttribute('placeholder','Remind in how many days?');

            todoDisplayRemindIn.value = object.remindIn;

            todoDisplayRemindIn.classList.add('todo-update');

            todoDisplayRemindIn.setAttribute('required','');

            todoDisplay.append(todoDisplayRemindIn);

            // const lineBreak2 = document.createElement('br');
            // todoDisplay.append(lineBreak2);



            const projectsDropDown = document.createElement('select');

            projectsDropDown.setAttribute('name','project-display-choices');

            projectsDropDown.setAttribute('id','project-display-choices');

            projectsDropDown.setAttribute('required','');

            projectsDropDown.classList.add('form-input');

            todoDisplay.append(projectsDropDown);




                    const unprocessedProject = (0,_tabObjects_allProjectsTab__WEBPACK_IMPORTED_MODULE_0__["default"])().unprocessedProjectArray

                    const optionsNode = document.querySelectorAll('option');
        
                    if(optionsNode){
        
                        optionsNode.forEach(option => {
                            option.remove();
                        });
        
                    }
        
                    const option0 = document.createElement('option');
        
                    option0.textContent = object.project;
        
                    option0.value = object.project;
        
                    projectsDropDown.append(option0);
        
        
                    unprocessedProject.forEach(obj => {
        
                        const projectOption = document.createElement('option');
        
                        projectOption.textContent = obj.title;
        
                        projectOption.value = obj.title;
        
                        projectsDropDown.append(projectOption);
                    });




            const firstButtonContainer = document.createElement('div');

            firstButtonContainer.classList.add('first-button-container');

            todoDisplay.append(firstButtonContainer)


                const priorityBtnDiv = document.createElement('div');

                priorityBtnDiv.classList.add('priority-button-div');

                firstButtonContainer.append(priorityBtnDiv)


                    const priorityLabel = document.createElement('label');

                    priorityLabel.textContent = 'Priority: ';

                    priorityLabel.setAttribute('for','todo-display-priority');

                    priorityBtnDiv.append(priorityLabel);


                    // const linebreakPriority = document.createElement('br');
                    // priorityBtnDiv.append(linebreakPriority);



                    const todoDisplayPriority = document.createElement('button');

                    todoDisplayPriority.setAttribute('value',object.priority);

                    todoDisplayPriority.setAttribute('type','button');

                    todoDisplayPriority.setAttribute('id','todo-display-priority');

                    todoDisplayPriority.textContent = object.priority;

                    // todoDisplayPriority.classList.add('todo-update');

                    priorityBtnDiv.append(todoDisplayPriority);


                    todoDisplayPriority.addEventListener('click', function(){

                        // Add classes for different priorities (different colours)

                        if (todoDisplayPriority.value === 'Low'){
                            todoDisplayPriority.value = 'Medium';
                            todoDisplayPriority.textContent = 'Medium';

                            return;
                        }

                        if (todoDisplayPriority.value === 'Medium'){
                            todoDisplayPriority.value = 'High';
                            todoDisplayPriority.textContent = 'High';

                            return;
                        }

                        if (todoDisplayPriority.value === 'High'){
                            todoDisplayPriority.value = 'Low';
                            todoDisplayPriority.textContent = 'Low';

                            return;
                        }


                    });

                const statusBtnDiv = document.createElement('div');

                statusBtnDiv.classList.add('status-button-div');

                firstButtonContainer.append(statusBtnDiv)

                // const lineBreak3 = document.createElement('br');
                // todoDisplay.append(lineBreak3);


                    const statusLabel = document.createElement('label');

                    statusLabel.textContent = 'Status: ';

                    statusLabel.setAttribute('for','todo-display-status');

                    statusBtnDiv.append(statusLabel);



                // const lineBreak4 = document.createElement('br');
                // todoDisplay.append(lineBreak4);

                // create line break 

                    const todoDisplayStatus = document.createElement('button');

                    todoDisplayStatus.setAttribute('value',object.status);

                    todoDisplayStatus.setAttribute('type','button');

                    todoDisplayStatus.setAttribute('id','todo-display-status');

                    todoDisplayStatus.textContent = object.status;

                    // todoDisplayStatus.classList.add('todo-update');

                    statusBtnDiv.append(todoDisplayStatus);

                    todoDisplayStatus.addEventListener('click', function(){

                        // Add classes for different priorities (different colours)

                        if (todoDisplayStatus.value === 'Pending'){
                            todoDisplayStatus.value = 'Complete';
                            todoDisplayStatus.textContent = 'Complete';

                            return;
                        }

                        if (todoDisplayStatus.value === 'Complete'){
                            todoDisplayStatus.value = 'Pending';
                            todoDisplayStatus.textContent = 'Pending';

                            return;
                        }


                    });



            
            const secondButtonContainer = document.createElement('div');

            secondButtonContainer.classList.add('second-button-container');

            todoDisplay.append(secondButtonContainer)
            // const lineBreak5 = document.createElement('br');
            // todoDisplay.append(lineBreak5);


                const deleteBtnDiv = document.createElement('div');

                deleteBtnDiv.classList.add('delete-button-div');

                secondButtonContainer.append(deleteBtnDiv);


                    const todoDelete = document.createElement('button');

                    todoDelete.setAttribute('value','');

                    todoDelete.setAttribute('type','button');

                    todoDelete.setAttribute('id','todo-delete');

                    todoDelete.textContent = 'Delete';

                    todoDelete.classList.add('todo-delete');

                    deleteBtnDiv.append(todoDelete);


                    // const lineBreak6 = document.createElement('br');
                    // todoDisplay.append(lineBreak6);

                
                const updateBtnDiv = document.createElement('div');

                updateBtnDiv.classList.add('delete-button-div');

                secondButtonContainer.append(updateBtnDiv);


                    const todoUpdate = document.createElement('button');

                    todoUpdate.setAttribute('value','');

                    todoUpdate.setAttribute('type','submit');

                    todoUpdate.setAttribute('id','todo-update');

                    todoUpdate.textContent = 'Update';

                    todoUpdate.classList.add('todo-update');

                    updateBtnDiv.append(todoUpdate);


            (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__.updateTodoItem)(object);

            (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__.deleteTodoItem)(object);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTodo);

/***/ }),

/***/ "./src/domCreation/displayTodosInProject.js":
/*!**************************************************!*\
  !*** ./src/domCreation/displayTodosInProject.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTodo */ "./src/domCreation/displayTodo.js");



function displayTodosInProject (project){

    const projectTodos = document.querySelector('.project-todos');

    projectTodos.querySelectorAll('*').forEach(element => {
        
        element.remove();

    });



    const allProjectTodos = project.todosByPriority;

    const priorityArray = ['High','Medium','Low']

    const dueStatusArray = ['overdue','due','upcoming','complete'];

    const titleArray = ['Overdue','Due soon','Upcoming','Completed'];

    const classArray = ['overdue-todos','due-soon-todos','upcoming-todos','complete-todos'];


    priorityArray.forEach(priority => {

        for (const key in allProjectTodos) {

            if (allProjectTodos[key].overdue.length === 0 && allProjectTodos[key].due.length === 0 && allProjectTodos[key].upcoming.length === 0 && allProjectTodos[key].complete.length === 0) {
                
                // move to next loop if empty
                
                continue;
            }

            if (key === priority) {

                const priorityTitle = document.createElement('div');

                priorityTitle.textContent = priority +` priority`;

                priorityTitle.classList.add('priority-title');

                projectTodos.append(priorityTitle);
    
                
    
                for (let index = 0; index < dueStatusArray.length; index++) {
    
    
                    const property = dueStatusArray[index];
    
                    const specifiedObjByPriority = allProjectTodos[key];

 
    
                    for (const prop in specifiedObjByPriority) {
    
                        if (prop === property) {
    
                            // contains array of todo objects of each due status
                            const arrayByDueStatus = specifiedObjByPriority[prop];
    
                            if (arrayByDueStatus.length === 0){
    
                                continue;
    
                            }

    
    
                            const statusContainer = document.createElement('div');
    
                            statusContainer.classList.add('todo-status-container');
                    
                            projectTodos.append(statusContainer);
                    
                                const todoTitleDiv = document.createElement('div');
                    
                                todoTitleDiv.textContent = titleArray[index];

                                todoTitleDiv.classList.add('todo-project-status-title');
                    
                                statusContainer.append(todoTitleDiv);
                    
                    
                                const dueStatusContainer = document.createElement('div');
                    
                                dueStatusContainer.classList.add(classArray[index]);
                    
                                todoTitleDiv.append(dueStatusContainer);
                    
                    
                                    const scrollableContainer = document.createElement('div');
                    
                                    scrollableContainer.classList.add('scrollable-todo-container');
                    
                                    dueStatusContainer.append(scrollableContainer);
    
                                    
    
                                    // loops over each todo object and appends them to scrollable container
                                    arrayByDueStatus.forEach(object => {
                                        
                                        const todoContainer = document.createElement('div');
    
                                        todoContainer.classList.add('todo-in-project-container');
    
                                        scrollableContainer.append(todoContainer);
    
    
                                            const todoTitleDiv = document.createElement('div');
    
                                            todoTitleDiv.classList.add('todo-title-div');
    
                                            todoTitleDiv.textContent = object.title;
    
                                            todoContainer.append(todoTitleDiv);
    
    
                                            const todoDescDiv = document.createElement('div');
    
                                            todoDescDiv.classList.add('todo-desc-div');
    
                                            todoDescDiv.textContent = object.desc;
    
                                            todoContainer.append(todoDescDiv);
    
    
                                            const todoDateDiv = document.createElement('div');
    
                                            todoDateDiv.classList.add('todo-date-div');
    
                                            todoDateDiv.textContent = object.dueDate;
    
                                            todoContainer.append(todoDateDiv);
    
    
                                            // const todoDurationLeftDiv = document.createElement('div');
    
                                            // todoDurationLeftDiv.classList.add('todo-dur-left-div');
    
                                            // todoDurationLeftDiv.textContent = `${object.durationLeft.dayLeft} days, ${object.durationLeft.monthsLeft} months and ${object.durationLeft.yearsLeft} years left`;
    
                                            // todoContainer.append(todoDurationLeftDiv);
    
    
                                            const todoProjectDiv = document.createElement('div');
    
                                            todoProjectDiv.classList.add('todo-project-div');
    
                                            todoProjectDiv.textContent = object.project;
    
                                            todoContainer.append(todoProjectDiv);
    
    
                                            // const todoPrioritytDiv = document.createElement('div');
    
                                            // todoPrioritytDiv.classList.add('todo-priority-div');
    
                                            // todoPrioritytDiv.textContent = object.priority;
    
                                            // todoContainer.append(todoPrioritytDiv);



                                        // Displays todo item
                                        todoContainer.addEventListener('click',function(){
                                            
                                            (0,_displayTodo__WEBPACK_IMPORTED_MODULE_0__["default"])(object);

                                        })
    
    
                                            
    
                                    });
                                    
                                }
    
                    }
    
    
    
    
                    
                }
    
                
    
    
            }
    
        }
        
    });





}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTodosInProject);

/***/ }),

/***/ "./src/domCreation/formDOMCreation.js":
/*!********************************************!*\
  !*** ./src/domCreation/formDOMCreation.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tabObjects_allProjectsTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tabObjects/allProjectsTab */ "./src/tabObjects/allProjectsTab.js");
// for selection options


function formDomModule (){

    const mainContainer = document.querySelector('.main-container');



//    FORM BUTTON


    const formButtonContainer = document.createElement('div');

    formButtonContainer.classList.add('form-button-container');

    mainContainer.append(formButtonContainer);


        const formButton = document.createElement('button');

        formButton.classList.add('form-button');

        formButton.textContent = '+';

        formButtonContainer.append(formButton);


    


    

    const formContainer = document.createElement('div');

    formContainer.classList.add('form-container');

    mainContainer.append(formContainer);

        const todoCreationForm = document.createElement('div');

        todoCreationForm.classList.add('todo-creation-form');

        formContainer.append(todoCreationForm);

            const entryCreationForm = document.createElement('form');

            todoCreationForm.append(entryCreationForm);

                const fieldset = document.createElement('fieldset');

                entryCreationForm.append(fieldset);

                    const legend = document.createElement('legend');

                    // legend.textContent = 'Create an entry'

                    fieldset.append(legend);


                    const todoCreationTitle = document.createElement('div');
                    todoCreationTitle.classList.add('todo-creation-title');
                    todoCreationTitle.textContent = 'Create a new entry'
                    fieldset.append(todoCreationTitle);


                        const inputCollection = document.createElement('div');
                        inputCollection.classList.add('input-collection');
                        fieldset.append(inputCollection);



                        const inputContainer1 = document.createElement('div');

                        inputContainer1.classList.add('input-container');

                        inputCollection.append(inputContainer1);

                            const todoTitleLabel = document.createElement('label');

                            todoTitleLabel.setAttribute('for','todo-title');

                            todoTitleLabel.textContent = 'Title:';

                            inputContainer1.append(todoTitleLabel);


                            // const todoTitleLineBreak = document.createElement('br');

                            // inputContainer1.append(todoTitleLineBreak);

                            
                            const todoTitleInput = document.createElement('input');

                            todoTitleInput.setAttribute('type','text');

                            todoTitleInput.setAttribute('id','todo-title');

                            todoTitleInput.setAttribute('required','');

                            todoTitleInput.classList.add('form-input');

                            inputContainer1.append(todoTitleInput);

                    


                        const inputContainer2 = document.createElement('div');

                        inputContainer2.classList.add('input-container');

                        inputCollection.append(inputContainer2);

                            const todoDescLabel = document.createElement('label');

                            todoDescLabel.setAttribute('for','todo-desc');

                            todoDescLabel.textContent = 'Description:';

                            inputContainer2.append(todoDescLabel);


                            // const todoDescLineBreak = document.createElement('br');

                            // inputContainer2.append(todoDescLineBreak);

                            
                            const todoDescTextArea = document.createElement('textarea');

                            todoDescTextArea.setAttribute('name','');

                            todoDescTextArea.setAttribute('id','todo-desc');

                            todoDescTextArea.setAttribute('cols','30');

                            todoDescTextArea.setAttribute('rows','10');

                            todoDescTextArea.setAttribute('required','');

                            todoDescTextArea.classList.add('form-input');

                            inputContainer2.append(todoDescTextArea);


                        const inputContainer3 = document.createElement('div');

                        inputContainer3.classList.add('radio-input-container');

                        inputCollection.append(inputContainer3);


                            const noteRadioDiv = document.createElement('div');
                            noteRadioDiv.classList.add('note-radio-div');
                            inputContainer3.append(noteRadioDiv)


                                const isNoteRadio = document.createElement('input');

                                isNoteRadio.setAttribute('type','radio');

                                isNoteRadio.setAttribute('id','is-note');

                                isNoteRadio.setAttribute('name','entry-type');

                                isNoteRadio.setAttribute('checked','');

                                isNoteRadio.classList.add('form-input');

                                noteRadioDiv.append(isNoteRadio);

                                

                                const noteRadioLabel = document.createElement('label');

                                noteRadioLabel.setAttribute('for','is-note');

                                noteRadioLabel.textContent = 'Note';

                                noteRadioDiv.append(noteRadioLabel);


                            const todoRadioDiv = document.createElement('div');
                            todoRadioDiv.classList.add('todo-radio-div');
                            inputContainer3.append(todoRadioDiv)



                                const isTodoRadio = document.createElement('input');

                                isTodoRadio.setAttribute('type','radio');

                                isTodoRadio.setAttribute('id','is-todo');

                                isTodoRadio.setAttribute('name','entry-type');

                                isTodoRadio.classList.add('form-input');

                                todoRadioDiv.append(isTodoRadio);



                                const todoRadioLabel = document.createElement('label');

                                todoRadioLabel.setAttribute('for','is-todo');

                                todoRadioLabel.textContent = 'To-do';

                                todoRadioDiv.append(todoRadioLabel);


                        const createNewTodo = document.createElement('div');

                        createNewTodo.classList.add('create-new-todo');

                        inputCollection.append(createNewTodo);



                        


                            const inputContainer4 = document.createElement('div');

                            inputContainer4.classList.add('input-container');

                            createNewTodo.append(inputContainer4);

                                const todoDateLabel = document.createElement('label');

                                todoDateLabel.setAttribute('for','todo-date');

                                todoDateLabel.textContent = 'Due date:';

                                inputContainer4.append(todoDateLabel);


                                // const todoDateLineBreak = document.createElement('br');

                                // inputContainer4.append(todoDateLineBreak);

                                
                                const todoDateInput = document.createElement('input');

                                todoDateInput.setAttribute('type','date');

                                todoDateInput.setAttribute('id','todo-date');

                                todoDateInput.classList.add('form-input');

                                inputContainer4.append(todoDateInput);


                        // Continue creating form elements


                            const inputContainer5 = document.createElement('div');

                            inputContainer5.classList.add('input-container');

                            createNewTodo.append(inputContainer5);

                                const todoRemindInLabel = document.createElement('label');

                                todoRemindInLabel.setAttribute('for','todo-remind-in');

                                todoRemindInLabel.textContent = 'Remind-in(days):';

                                inputContainer5.append(todoRemindInLabel);


                                // const todoRemindInLineBreak = document.createElement('br');

                                // inputContainer5.append(todoRemindInLineBreak);

                                
                                const todoRemindInInput = document.createElement('input');

                                todoRemindInInput.setAttribute('type','number');

                                todoRemindInInput.setAttribute('min','0');

                                todoRemindInInput.setAttribute('max','30');

                                todoRemindInInput.setAttribute('id','todo-remind-in');

                                todoRemindInInput.classList.add('form-input');

                                inputContainer5.append(todoRemindInInput);




                            const inputContainer6 = document.createElement('div');

                            inputContainer6.classList.add('input-container');

                            createNewTodo.append(inputContainer6);

                                const todoPriorityLabel = document.createElement('label');

                                todoPriorityLabel.setAttribute('for','');

                                todoPriorityLabel.textContent = 'Priority:';

                                inputContainer6.append(todoPriorityLabel);


                                // const todoPriorityLineBreak = document.createElement('br');

                                // inputContainer6.append(todoPriorityLineBreak);

                                
                                const todoPriorityButton = document.createElement('button');

                                todoPriorityButton.setAttribute('value','Low');

                                todoPriorityButton.setAttribute('type','button');

                                todoPriorityButton.setAttribute('id','todo-priority');

                                todoPriorityButton.textContent = 'Low';

                                todoPriorityButton.classList.add('form-input');

                                inputContainer6.append(todoPriorityButton);

                                todoPriorityButton.addEventListener('click', function(){

                                    // Add classes for different priorities (different colours)

                                    if (todoPriorityButton.value === 'Low'){
                                        todoPriorityButton.value = 'Medium';
                                        todoPriorityButton.textContent = 'Medium';

                                        return;
                                    }

                                    if (todoPriorityButton.value === 'Medium'){
                                        todoPriorityButton.value = 'High';
                                        todoPriorityButton.textContent = 'High';

                                        return;
                                    }

                                    if (todoPriorityButton.value === 'High'){
                                        todoPriorityButton.value = 'Low';
                                        todoPriorityButton.textContent = 'Low';

                                        return;
                                    }


                                });


                            const inputContainer7 = document.createElement('div');

                            inputContainer7.classList.add('radio-input-container');

                            createNewTodo.append(inputContainer7);

                                
                                const existingProjectDiv  = document.createElement('div');
                                existingProjectDiv.classList.add('existing-project-div');
                                inputContainer7.append(existingProjectDiv)





                                    const existingProjectRadio = document.createElement('input');

                                    existingProjectRadio.setAttribute('type','radio');

                                    existingProjectRadio.setAttribute('id','existing-project');

                                    // existingProjectRadio.setAttribute('required','');

                                    existingProjectRadio.setAttribute('name','project');

                                    existingProjectRadio.classList.add('form-input');

                                    existingProjectDiv.append(existingProjectRadio);

                                    

                                    const existingProjectRadioLabel = document.createElement('label');

                                    existingProjectRadioLabel.setAttribute('for','existing-project');

                                    existingProjectRadioLabel.textContent = 'Existing project';

                                    existingProjectDiv.append(existingProjectRadioLabel);



                                const newProjectDiv = document.createElement('div');
                                newProjectDiv.classList.add('new-project-div');
                                inputContainer7.append(newProjectDiv)


                                    const newProjectRadio = document.createElement('input');

                                    newProjectRadio.setAttribute('type','radio');

                                    newProjectRadio.setAttribute('id','new-project');

                                    newProjectRadio.setAttribute('name','project');

                                    newProjectRadio.classList.add('form-input');

                                    newProjectDiv.append(newProjectRadio);



                                    const newProjectRadioLabel = document.createElement('label');

                                    newProjectRadioLabel.setAttribute('for','new-project');

                                    newProjectRadioLabel.textContent = 'New Project';

                                    newProjectDiv.append(newProjectRadioLabel);






                        const selectExistingProject = document.createElement('div');

                        selectExistingProject.classList.add('select-existing-project');

                        inputCollection.append(selectExistingProject);


                            const inputContainer8 = document.createElement('div');

                            inputContainer8.classList.add('input-container');

                            selectExistingProject.append(inputContainer8);


                                const projectChoicesLabel = document.createElement('label');

                                projectChoicesLabel.setAttribute('for','project-choices');

                                projectChoicesLabel.textContent = 'Which project is this for?';

                                inputContainer8.append(projectChoicesLabel);


                                const projectChoicesDropDown = document.createElement('select');

                                projectChoicesDropDown.setAttribute('name','project-choices');
    
                                projectChoicesDropDown.setAttribute('id','project-choices');
    
                                projectChoicesDropDown.classList.add('form-input');
    
                                inputContainer8.append(projectChoicesDropDown);

















                               


                                    

                                    // Get titles from existing projects
                                    // Update when new projects are created


                        
                        const createNewProject = document.createElement('div');

                        createNewProject.classList.add('create-new-project');

                        inputCollection.append(createNewProject);

                            const projectCreationTitle = document.createElement('div');
                            projectCreationTitle.classList.add('project-creation-title');
                            projectCreationTitle.textContent = 'Create a new project'
                            createNewProject.append(projectCreationTitle);


                            const inputContainer9 = document.createElement('div');

                            inputContainer9.classList.add('input-container');

                            createNewProject.append(inputContainer9);

                                const projectTitleLabel = document.createElement('label');

                                projectTitleLabel.setAttribute('for','project-title');

                                projectTitleLabel.textContent = 'Title:';

                                inputContainer9.append(projectTitleLabel);


                                // const projectTitleLineBreak = document.createElement('br');

                                // inputContainer9.append(projectTitleLineBreak);

                                
                                const projectTitleInput = document.createElement('input');

                                projectTitleInput.setAttribute('type','text');

                                projectTitleInput.setAttribute('id','project-title');

                                projectTitleInput.classList.add('form-input');

                                inputContainer9.append(projectTitleInput);

                    


                            const inputContainer10 = document.createElement('div');

                            inputContainer10.classList.add('input-container');

                            createNewProject.append(inputContainer10);

                                const projectDescLabel = document.createElement('label');

                                projectDescLabel.setAttribute('for','project-desc');

                                projectDescLabel.textContent = 'Description:';

                                inputContainer10.append(projectDescLabel);


                                // const projectDescLineBreak = document.createElement('br');

                                // inputContainer10.append(projectDescLineBreak);

                                
                                const projectDescTextArea = document.createElement('textarea');

                                projectDescTextArea.setAttribute('name','');

                                projectDescTextArea.setAttribute('id','project-desc');

                                projectDescTextArea.setAttribute('cols','30');

                                projectDescTextArea.setAttribute('rows','10');

                                projectDescTextArea.classList.add('form-input');

                                inputContainer10.append(projectDescTextArea);

                            






                            const inputContainer11 = document.createElement('div');

                            inputContainer11.classList.add('input-container');

                            createNewProject.append(inputContainer11);

                                const projectDateLabel = document.createElement('label');

                                projectDateLabel.setAttribute('for','project-date');

                                projectDateLabel.textContent = 'Due date:';

                                inputContainer11.append(projectDateLabel);


                                // const projectDateLineBreak = document.createElement('br');

                                // inputContainer11.append(projectDateLineBreak);

                                
                                const projectDateInput = document.createElement('input');

                                projectDateInput.setAttribute('type','date');

                                projectDateInput.setAttribute('id','project-date');

                                projectDateInput.classList.add('form-input');

                                inputContainer11.append(projectDateInput);


                        // Continue creating form elements


                            const inputContainer12 = document.createElement('div');

                            inputContainer12.classList.add('input-container');

                            createNewProject.append(inputContainer12);

                                const projectRemindInLabel = document.createElement('label');

                                projectRemindInLabel.setAttribute('for','project-remind-in');

                                projectRemindInLabel.textContent = 'Remind-in(days):';

                                inputContainer12.append(projectRemindInLabel);


                                // const projectRemindInLineBreak = document.createElement('br');

                                // inputContainer12.append(projectRemindInLineBreak);

                                
                                const projectRemindInInput = document.createElement('input');

                                projectRemindInInput.setAttribute('type','number');

                                projectRemindInInput.setAttribute('min','0');

                                projectRemindInInput.setAttribute('max','30');

                                projectRemindInInput.setAttribute('id','project-remind-in');

                                projectRemindInInput.classList.add('form-input');

                                inputContainer12.append(projectRemindInInput);




                            const inputContainer13 = document.createElement('div');

                            inputContainer13.classList.add('input-container');

                            createNewProject.append(inputContainer13);

                                const projectPriorityLabel = document.createElement('label');

                                projectPriorityLabel.setAttribute('for','');

                                projectPriorityLabel.textContent = 'Priority:';

                                inputContainer13.append(projectPriorityLabel);


                                // const projectPriorityLineBreak = document.createElement('br');

                                // inputContainer13.append(projectPriorityLineBreak);

                                
                                const projectPriorityButton = document.createElement('button');

                                projectPriorityButton.setAttribute('value','Low');

                                projectPriorityButton.setAttribute('type','button');

                                projectPriorityButton.setAttribute('id','project-priority');

                                projectPriorityButton.textContent = 'Low';

                                projectPriorityButton.classList.add('form-input');

                                inputContainer13.append(projectPriorityButton);

                                projectPriorityButton.addEventListener('click', function(){

                                    // Add classes for different priorities (different colours)

                                    if (projectPriorityButton.value === 'Low'){
                                        projectPriorityButton.value = 'Medium';
                                        projectPriorityButton.textContent = 'Medium';

                                        return;
                                    }

                                    if (projectPriorityButton.value === 'Medium'){
                                        projectPriorityButton.value = 'High';
                                        projectPriorityButton.textContent = 'High';

                                        return;
                                    }

                                    if (projectPriorityButton.value === 'High'){
                                        projectPriorityButton.value = 'Low';
                                        projectPriorityButton.textContent = 'Low';

                                        return;
                                    }


                                });


                        const submitButton = document.createElement('button');

                        submitButton.setAttribute('type','submit');

                        submitButton.setAttribute('id','form-submit');

                        submitButton.textContent = 'Submit';

                        inputCollection.append(submitButton);





                        function existingProjectOptions () {

                            const existingProjectRadio = document.querySelector('#existing-project');

                            const newProjectRadio = document.querySelector('#new-project');




                            const unprocessedProject = (0,_tabObjects_allProjectsTab__WEBPACK_IMPORTED_MODULE_0__["default"])().unprocessedProjectArray


                            if (unprocessedProject.length === 0) {

                                existingProjectRadio.removeAttribute('checked','');
                                existingProjectRadio.checked = false;
                                existingProjectRadio.disabled = true;

                                // newProjectRadio.setAttribute('checked','');
                                // newProjectRadio.checked = true;


                                return
                            }

                            if(unprocessedProject.length > 0 ){

                                existingProjectRadio.disabled = false;


                                const optionsNode = document.querySelectorAll('option');

                                if(optionsNode){

                                    optionsNode.forEach(option => {
                                        option.remove();
                                    });

                                }

                                const option0 = document.createElement('option');

                                option0.textContent = 'Choose one';

                                option0.value = '';

                                projectChoicesDropDown.append(option0);


                                unprocessedProject.forEach(object => {
  

                                    const projectOption = document.createElement('option');

                                    projectOption.textContent = object.title;

                                    projectOption.value = object.title;

                                    projectChoicesDropDown.append(projectOption);
                                });

                                return;

                            }


                        }



                        // function existingProjectOptions (){

                        //     const unprocessedProject = projectObjects().unprocessedProjectArray

                        //     const optionsNode = document.querySelectorAll('option');

                        //     if(optionsNode){

                        //         optionsNode.forEach(option => {
                        //             option.remove();
                        //         });

                        //     }

                        //     const option0 = document.createElement('option');

                        //     option0.textContent = 'Choose one';

                        //     option0.value = '';

                        //     projectChoicesDropDown.append(option0);


                        //     unprocessedProject.forEach(object => {


                        //         const projectOption = document.createElement('option');

                        //         projectOption.textContent = object.title;

                        //         projectOption.value = object.title;

                        //         projectChoicesDropDown.append(projectOption);
                        //     });

                        // }

                        existingProjectOptions();





                                




                        return {existingProjectOptions};


}

const createFormDOM = formDomModule();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFormDOM);

/***/ }),

/***/ "./src/domCreation/mainDOMCreation.js":
/*!********************************************!*\
  !*** ./src/domCreation/mainDOMCreation.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_menu_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/menu-icon.png */ "./src/assets/menu-icon.png");


// import hamburgerIcon from "../assets/menu.png"

function mainDomModule (){

    // const body = document.querySelector('body');

    // const mainContainer = document.createElement('div');
    // mainContainer.classList.add('main-container');
    // body.append(mainContainer)

    const mainContainer = document.querySelector('.main-container');

    
    // FORM OPENING BUTTON
    



    // TOP CONTAINER
    const topContainer = document.createElement('div');

    topContainer.classList.add('top-container');

    mainContainer.append(topContainer);

        const brandContainer = document.createElement('div');

        brandContainer.classList.add('brand-container');

        topContainer.append(brandContainer);

            const brandHeader = document.createElement('h1');

            brandHeader.textContent = 'SageEntries';

            brandContainer.append(brandHeader);


        const topContainerSpacing = document.createElement('div');

        topContainerSpacing.classList.add('top-container-spacing');

        topContainer.append(topContainerSpacing);

        
        const hamburgerMenu = document.createElement('div');

        hamburgerMenu.classList.add('hamburger-menu');

        topContainer.append(hamburgerMenu);


            const menuIcon = new Image()

            menuIcon.src = _assets_menu_icon_png__WEBPACK_IMPORTED_MODULE_0__;

            hamburgerMenu.append(menuIcon);


    // MENU

    const noteMenu = document.createElement('div');

    noteMenu.classList.add('note-menu');

    mainContainer.append(noteMenu);


        const tabContainer = document.createElement('div');

        tabContainer.classList.add('tab-container');

        noteMenu.append(tabContainer)



            const allTodosTabDOM = document.createElement('div');

            allTodosTabDOM.classList.add('all-todos-tab');

            allTodosTabDOM.classList.add('menu-tab-active')

            tabContainer.append(allTodosTabDOM);

                const allTodosHeader = document.createElement('h1');

                allTodosHeader.textContent = 'All Todos';

                allTodosTabDOM.append(allTodosHeader)


            const allProjectsTabDOM = document.createElement('div');

            allProjectsTabDOM.classList.add('all-projects-tab');

            tabContainer.append(allProjectsTabDOM);

                const allProjectsHeader = document.createElement('h1');

                allProjectsHeader.textContent = 'Projects';

                allProjectsTabDOM.append(allProjectsHeader);


            const allNotesTabDOM = document.createElement('div');

            allNotesTabDOM.classList.add('all-notes-tab');

            tabContainer.append(allNotesTabDOM);

                const allNotesHeader = document.createElement('h1');

                allNotesHeader.textContent = 'Notes';

                allNotesTabDOM.append(allNotesHeader);



        function tabActiveSwitch (){
            
            const tabArray = [allTodosTabDOM,allProjectsTabDOM,allNotesTabDOM];

            allTodosTabDOM.addEventListener('click',function(){

                allTodosTabDOM.classList.add('menu-tab-active');

                allProjectsTabDOM.classList.remove('menu-tab-active');

                allNotesTabDOM.classList.remove('menu-tab-active');

            });


            allProjectsTabDOM.addEventListener('click',function(){

                allProjectsTabDOM.classList.add('menu-tab-active');
                
                allTodosTabDOM.classList.remove('menu-tab-active');

                allNotesTabDOM.classList.remove('menu-tab-active');

            });


            allNotesTabDOM.addEventListener('click',function(){

                allNotesTabDOM.classList.add('menu-tab-active');

                allTodosTabDOM.classList.remove('menu-tab-active');

                allProjectsTabDOM.classList.remove('menu-tab-active');

            });

        }

        tabActiveSwitch();


    const displayContainer = document.createElement('div');
    displayContainer.classList.add('display-container');
    mainContainer.append(displayContainer);


    // FOOTER
    const todoContainerFooter = document.createElement('div');

    todoContainerFooter.classList.add('todo-container-footer');

    mainContainer.append(todoContainerFooter);

        const linkContainer = document.createElement('div');

        linkContainer.classList.add('link-container');

        todoContainerFooter.append(linkContainer);

            const footerLink = document.createElement('a');

            footerLink.setAttribute('href','https://github.com/Risshiganesh/todo-list');

            footerLink.textContent = 'Made by Risshiganesh Villalan';

            linkContainer.append(footerLink);

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainDomModule);

/***/ }),

/***/ "./src/domCreation/populateDOMNoteCollection.js":
/*!******************************************************!*\
  !*** ./src/domCreation/populateDOMNoteCollection.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tabObjects_allNotesTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tabObjects/allNotesTab */ "./src/tabObjects/allNotesTab.js");
/* harmony import */ var _domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domActivities/domActivities */ "./src/domActivities/domActivities.js");



function appendNotesObject(){
            
    const collectionContainer = document.querySelector('.collection-container');

    collectionContainer.querySelectorAll('*').forEach(element => {
        
        element.remove();

    });


    const notesCollection = document.createElement('div');

    notesCollection.classList.add('notes-collection');

    collectionContainer.append(notesCollection);

    const notesArray = (0,_tabObjects_allNotesTab__WEBPACK_IMPORTED_MODULE_0__["default"])().reverse();

    notesArray.forEach(object => {
        const notesContainer = document.createElement('div');
        notesContainer.classList.add('notes-container');
        notesCollection.append(notesContainer);

            const noteTitle = document.createElement('div');
            noteTitle.classList.add('note-title');
            noteTitle.textContent = object.title;
            notesContainer.append(noteTitle);
            
            const noteDesc = document.createElement('div');
            noteDesc.classList.add('note-desc');
            noteDesc.textContent = object.desc;
            notesContainer.append(noteDesc);



        notesContainer.addEventListener('click',function(){

            const mainContainer = document.querySelector('.main-container');

            const todoDisplayContainer = document.createElement('div');

            todoDisplayContainer.classList.add('todo-display-container');

            mainContainer.append(todoDisplayContainer);


                const todoForm = document.createElement('form');

                todoDisplayContainer.append(todoForm)
            

                const todoDisplay = document.createElement('div');

                todoDisplay.classList.add('todo-display');

                todoDisplay.classList.add('note-display')

                todoForm.append(todoDisplay);



                    const todoDisplayTitle = document.createElement('input');

                    todoDisplayTitle.setAttribute('placeholder','Title');

                    todoDisplayTitle.setAttribute('id','todo-display-title');

                    todoDisplayTitle.setAttribute('required','')

                    todoDisplayTitle.value = object.title;

                    todoDisplay.append(todoDisplayTitle);


                    const todoDescTextArea = document.createElement('textarea');

                    todoDescTextArea.setAttribute('name','');

                    todoDescTextArea.setAttribute('id','todo-display-desc');

                    todoDescTextArea.setAttribute('placeholder','Description')

                    todoDescTextArea.setAttribute('cols','30');

                    todoDescTextArea.setAttribute('rows','10');

                    todoDescTextArea.setAttribute('required','');

                    todoDescTextArea.value = object.desc;

                    todoDescTextArea.classList.add('todo-update');

                    todoDisplay.append(todoDescTextArea);


                    

                    // const lineBreak1 = document.createElement('br');
                    // todoDisplay.append(lineBreak1);


                    


                    const buttonContainer = document.createElement('div');
                    buttonContainer.classList.add('note-button-container');
                    todoDisplay.append(buttonContainer)


                    const todoDelete = document.createElement('button');

                    todoDelete.setAttribute('value','');

                    todoDelete.setAttribute('type','button');

                    todoDelete.setAttribute('id','todo-delete');

                    todoDelete.textContent = 'Delete';

                    todoDelete.classList.add('todo-update');

                    buttonContainer.append(todoDelete);




                    // const lineBreak2 = document.createElement('br');
                    
                    // todoDisplay.append(lineBreak2);



                    const todoUpdate = document.createElement('button');

                    todoUpdate.setAttribute('value','');

                    todoUpdate.setAttribute('type','submit');

                    todoUpdate.setAttribute('id','todo-update');

                    todoUpdate.textContent = 'Update';

                    todoUpdate.classList.add('todo-update');

                    buttonContainer.append(todoUpdate);


                    (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__.updateNoteItem)(object);

                    (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__.deleteTodoItem)(object);

                
        });
    });

    (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__.emptyDisplay)();

}

// appendNotesObject();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendNotesObject);

/***/ }),

/***/ "./src/domCreation/populateDOMProjectCollection.js":
/*!*********************************************************!*\
  !*** ./src/domCreation/populateDOMProjectCollection.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clickedProject: () => (/* binding */ clickedProject),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tabObjects_allProjectsTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tabObjects/allProjectsTab */ "./src/tabObjects/allProjectsTab.js");
/* harmony import */ var _domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domActivities/domActivities */ "./src/domActivities/domActivities.js");
/* harmony import */ var _displayTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTodo */ "./src/domCreation/displayTodo.js");
/* harmony import */ var _displayTodosInProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayTodosInProject */ "./src/domCreation/displayTodosInProject.js");
/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayProject */ "./src/domCreation/displayProject.js");












// POPULATE TODO COLLECTION CONTAINER
let clickedProject = '';
// high
// put this in a different module
function appendProjectObjects(priority){

    const collectionContainer = document.querySelector('.collection-container')

    collectionContainer.querySelectorAll('*').forEach(element => {
        
        element.remove();

    });



    const allProjectObject = (0,_tabObjects_allProjectsTab__WEBPACK_IMPORTED_MODULE_0__["default"])().projectsByPriority;


    const dueStatusArray = ['overdue','due','upcoming','complete'];

    const titleArray = ['OVERDUE','DUE SOON','UPCOMING','COMPLETED'];

    const classArray = ['overdue-container','due-soon-container','upcoming-container','complete-container'];

    for (const key in allProjectObject) {

        if (key === priority) {

            

            for (let index = 0; index < dueStatusArray.length; index++) {


                const property = dueStatusArray[index];

                const specifiedObjByPriority = allProjectObject[key];

                for (const prop in specifiedObjByPriority) {

                    if (prop === property) {

                        // contains array of todo objects of each due status
                        const arrayByDueStatus = specifiedObjByPriority[prop];

                        if (arrayByDueStatus.length === 0){

                            continue;

                        }


                        const statusContainer = document.createElement('div');

                        statusContainer.classList.add('status-container');
                
                        collectionContainer.append(statusContainer);
                
                            const statusTitleDiv = document.createElement('div');
                
                            statusTitleDiv.textContent = titleArray[index];

                            statusTitleDiv.classList.add('status-title');
                
                            statusContainer.append(statusTitleDiv);
                
                
                            const dueStatusContainer = document.createElement('div');
                
                            dueStatusContainer.classList.add(classArray[index]);
                
                            statusContainer.append(dueStatusContainer);
                
                
                                const scrollableContainer = document.createElement('div');
                
                                scrollableContainer.classList.add('scrollable-container');
                
                                dueStatusContainer.append(scrollableContainer);

                                

                                // loops over each project object and appends them to scrollable container
                                arrayByDueStatus.forEach(project => {
                                    
                                    const projectContainer = document.createElement('div');

                                    projectContainer.classList.add('todo-container')

                                    projectContainer.classList.add('project-container');

                                    scrollableContainer.append(projectContainer);


                                        const projectTitleDiv = document.createElement('div');

                                        projectTitleDiv.classList.add('project-title-div');

                                        projectTitleDiv.textContent = project.title;

                                        projectContainer.append(projectTitleDiv);


                                        const projectDescDiv = document.createElement('div');

                                        projectDescDiv.classList.add('project-desc-div');

                                        projectDescDiv.textContent = project.desc;

                                        projectContainer.append(projectDescDiv);


                                        const projectDateDiv = document.createElement('div');

                                        projectDateDiv.classList.add('project-date-div');

                                        projectDateDiv.textContent = (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__.displayDuration)(project.dueDate);

                                        projectContainer.append(projectDateDiv);



                                        // DISPLAY PROJECT TODOS - send project container as an argument
                                            projectContainer.addEventListener('click',function(){

                                                (0,_displayProject__WEBPACK_IMPORTED_MODULE_4__["default"])(project);

                                                clickedProject = project;                                         

                                                // const mainContainer = document.querySelector('.main-container');

                                                //     const projectTodoContainer = document.createElement('div');

                                                //     projectTodoContainer.classList.add('project-todo-container');

                                                //     mainContainer.append(projectTodoContainer);
                                                    

                                                //         const projectForm = document.createElement('form');

                                                //         projectTodoContainer.append(projectForm);


                                                //         const projectDetails = document.createElement('div');

                                                //         projectDetails.classList.add('project-details');

                                                //         projectForm.append(projectDetails);

                                                //             projectDetails.addEventListener('click',function(e){
                                                //                 e.stopPropagation();
                                                //             })


                                                //             const projectTitleInput = document.createElement('input');

                                                //             projectTitleInput.setAttribute('id','project-title-update')

                                                //             projectTitleInput.value = project.title;

                                                //             projectTitleInput.setAttribute('required','');

                                                //             projectTitleInput.setAttribute('placeholder', 'Project Title');

                                                //             projectDetails.append(projectTitleInput);




                                                //             const projectDetailsLineBreak1 = document.createElement('br');

                                                //             projectDetails.append(projectDetailsLineBreak1);




                                                //             const projectDescInput = document.createElement('textarea');

                                                //             projectDescInput.setAttribute('id','project-desc-update');

                                                //             projectDescInput.value = project.desc;

                                                //             projectDescInput.setAttribute('required','');

                                                //             projectDescInput.setAttribute('placeholder', 'Project Description');

                                                //             projectDescInput.setAttribute('rows','4');

                                                //             projectDescInput.setAttribute('cols','40');

                                                //             projectDetails.append(projectDescInput);




                                                //             const projectDetailsLineBreak2 = document.createElement('br');

                                                //             projectDetails.append(projectDetailsLineBreak2);




                                                //             const projectDateInput = document.createElement('input');

                                                //             projectDateInput.setAttribute('id','project-date-update');

                                                //             projectDateInput.value = project.dueDate;

                                                //             projectDateInput.setAttribute('required','');

                                                //             projectDateInput.setAttribute('type','date')

                                                //             projectDetails.append(projectDateInput);




                                                //             const projectDetailsLineBreak3 = document.createElement('br');

                                                //             projectDetails.append(projectDetailsLineBreak3);





                                                //             const projectRemindInInput = document.createElement('input');

                                                //             projectRemindInInput.setAttribute('id','project-reminder-update');

                                                //             projectRemindInInput.setAttribute('type','number');

                                                //             projectRemindInInput.setAttribute('required','');

                                                //             projectRemindInInput.classList.add('form-input');

                                                //             projectRemindInInput.value = project.remindIn;

                                                //             projectDetails.append(projectRemindInInput);

                                                            


                                                //             const projectDetailsLineBreak4 = document.createElement('br');

                                                //             projectDetails.append(projectDetailsLineBreak4);


         
                                                //             const projectPriorityButton = document.createElement('button');

                                                //             projectPriorityButton.setAttribute('id','project-priority-update');

                                                //             projectPriorityButton.setAttribute('value',project.priority);

                                                //             projectPriorityButton.setAttribute('type','button');

                                                //             projectPriorityButton.textContent = project.priority;

                                                //             projectDetails.append(projectPriorityButton);

                                                //             projectPriorityButton.addEventListener('click', function(){

                                                //                 // Add classes for different priorities (different colours)

                                                //                 if (projectPriorityButton.value === 'Low'){
                                                //                     projectPriorityButton.value = 'Medium';
                                                //                     projectPriorityButton.textContent = 'Medium';

                                                //                     return;
                                                //                 }

                                                //                 if (projectPriorityButton.value === 'Medium'){
                                                //                     projectPriorityButton.value = 'High';
                                                //                     projectPriorityButton.textContent = 'High';

                                                //                     return;
                                                //                 }

                                                //                 if (projectPriorityButton.value === 'High'){
                                                //                     projectPriorityButton.value = 'Low';
                                                //                     projectPriorityButton.textContent = 'Low';

                                                //                     return;
                                                //                 }


                                                //             });



                                                //             const projectDetailsLineBreak5 = document.createElement('br');

                                                //             projectDetails.append(projectDetailsLineBreak5);





                                                //             const projectDisplayStatus = document.createElement('button');

                                                //             projectDisplayStatus.setAttribute('id','project-status-update');

                                                //             projectDisplayStatus.setAttribute('value',project.status);

                                                //             projectDisplayStatus.setAttribute('type','button');

                                                //             projectDisplayStatus.textContent = project.status;

                                                //             projectDisplayStatus.classList.add('todo-update');

                                                //             projectDetails.append(projectDisplayStatus);

                                                //             projectDisplayStatus.addEventListener('click', function(){

                                                //                 // Add classes for different priorities (different colours)

                                                //                 if (projectDisplayStatus.value === 'pending'){
                                                //                     projectDisplayStatus.value = 'complete';
                                                //                     projectDisplayStatus.textContent = 'Complete';

                                                //                     return;
                                                //                 }

                                                //                 if (projectDisplayStatus.value === 'complete'){
                                                //                     projectDisplayStatus.value = 'pending';
                                                //                     projectDisplayStatus.textContent = 'Pending';

                                                //                     return;
                                                //                 }


                                                //             });

                                                            







                                                //         const projectTodos = document.createElement('div');

                                                //         projectTodos.classList.add('project-todos');

                                                //         projectDetails.append(projectTodos);

                                                //         // Check if we need this
                                                //         projectTodos.addEventListener('click',function(e){
                                                //             e.stopPropagation();
                                                //         })


                                                       


                                                //         // Container that displays all todos in a project
                                                //         displayTodosInProject(project);

                                                //         clickedProject = project;

                                                    
                                                //         const projectUpdateButton = document.createElement('button');

                                                //         projectUpdateButton.setAttribute('value','');

                                                //         projectUpdateButton.setAttribute('type','submit');

                                                //         projectUpdateButton.setAttribute('id','project-update');

                                                //         projectUpdateButton.textContent = 'Update';

                                                //         projectUpdateButton.classList.add('project-update');

                                                //         projectDetails.append(projectUpdateButton);



                                                //         const projectDetailsLineBreak6 = document.createElement('br');

                                                //         projectDetails.append(projectDetailsLineBreak6);


                                                //         const projectDelete = document.createElement('button');

                                                //         projectDelete.setAttribute('value','');

                                                //         projectDelete.setAttribute('type','button');

                                                //         projectDelete.setAttribute('id','project-delete');

                                                //         projectDelete.textContent = 'Delete';

                                                //         projectDetails.append(projectDelete);


                                                //         updateProjectItem(project);

                                                //         deleteProjectItem(project)


                                                   




                                                //     projectTodoContainer.addEventListener('click', function(){
                                                //         projectTodoContainer.remove();

                                                    // });


                                            })


                                        

                                });
                                
                            }

                }




                
            }

            


        }

    }


    (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__.emptyDisplay)();

}

// SEND THIS TO allTodoDOMCreation.js
// appendTodoObjects('high')

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendProjectObjects);



/***/ }),

/***/ "./src/domCreation/populateDOMTodoCollection.js":
/*!******************************************************!*\
  !*** ./src/domCreation/populateDOMTodoCollection.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tabObjects_allTodosTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tabObjects/allTodosTab */ "./src/tabObjects/allTodosTab.js");
/* harmony import */ var _tabObjects_allProjectsTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tabObjects/allProjectsTab */ "./src/tabObjects/allProjectsTab.js");
/* harmony import */ var _domActivities_domActivities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domActivities/domActivities */ "./src/domActivities/domActivities.js");
/* harmony import */ var _displayTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayTodo */ "./src/domCreation/displayTodo.js");

// for selection options


// doesn't work because of circular dependency
// import updateTodoItem  from '../domActivities/updateTodoDOM';






// POPULATE TODO COLLECTION CONTAINER

// high
// put this in a different module
function appendTodoObjects(priority){

    

    const collectionContainer = document.querySelector('.collection-container')

    collectionContainer.querySelectorAll('*').forEach(element => {
        
        element.remove();

    });



    const allTodoObject = (0,_tabObjects_allTodosTab__WEBPACK_IMPORTED_MODULE_0__["default"])();

    const dueStatusArray = ['overdue','due','upcoming','complete'];

    const titleArray = ['OVERDUE','DUE SOON','UPCOMING','COMPLETED'];

    const classArray = ['overdue-container','due-soon-container','upcoming-container','complete-container'];

    for (const key in allTodoObject) {

        if (key === priority) {

            

            for (let index = 0; index < dueStatusArray.length; index++) {


                const property = dueStatusArray[index];

                const specifiedObjByPriority = allTodoObject[key];

                for (const prop in specifiedObjByPriority) {

                    if (prop === property) {

                        // contains array of todo objects of each due status
                        const arrayByDueStatus = specifiedObjByPriority[prop];

                        if (arrayByDueStatus.length === 0){

                            continue;

                        }


                        const statusContainer = document.createElement('div');

                        statusContainer.classList.add('status-container');
                
                        collectionContainer.append(statusContainer);
                
                            const statusTitleDiv = document.createElement('div');
                
                            statusTitleDiv.textContent = titleArray[index];

                            statusTitleDiv.classList.add('status-title');
                
                            statusContainer.append(statusTitleDiv);

                                
                
                
                            const dueStatusContainer = document.createElement('div');
                
                            dueStatusContainer.classList.add(classArray[index]);
                
                            statusContainer.append(dueStatusContainer);
                
                
                                const scrollableContainer = document.createElement('div');
                
                                scrollableContainer.classList.add('scrollable-container');
                
                                dueStatusContainer.append(scrollableContainer);

                                

                                // loops over each todo object and appends them to scrollable container
                                arrayByDueStatus.forEach(object => {
                                    
                                    const todoContainer = document.createElement('div');

                                    todoContainer.classList.add('todo-container');

                                    scrollableContainer.append(todoContainer);


                                        const todoTitleDiv = document.createElement('div');

                                        todoTitleDiv.classList.add('todo-title-div');

                                        todoTitleDiv.textContent = object.title;

                                        todoContainer.append(todoTitleDiv);


                                        const todoDescDiv = document.createElement('div');

                                        todoDescDiv.classList.add('todo-desc-div');

                                        todoContainer.append(todoDescDiv);


                                            const descParagraph = document.createElement('p');

                                            todoDescDiv.textContent = object.desc;

                                            todoDescDiv.append(descParagraph)


                                        const todoDateDiv = document.createElement('div');

                                        todoDateDiv.classList.add('todo-date-div');

                                        todoDateDiv.textContent = (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_2__.displayDuration)(object.dueDate);

                                        // todoDateDiv.textContent = `${object.durationLeft.dayLeft} days, ${object.durationLeft.monthsLeft } months and ${object.durationLeft.yearsLeft} years left`;

                                        todoContainer.append(todoDateDiv);


                                        






                                        const todoProjectDiv = document.createElement('div');

                                        todoProjectDiv.classList.add('todo-project-div');

                                        todoProjectDiv.textContent = `Project: ${object.project}`;

                                        todoContainer.append(todoProjectDiv);


                                        // const todoPrioritytDiv = document.createElement('div');

                                        // todoPrioritytDiv.classList.add('todo-priority-div');

                                        // todoPrioritytDiv.textContent = object.priority;

                                        // todoContainer.append(todoPrioritytDiv);


                                    // SEND TO A SEPARATE MODULE - OPENS TODO ITEM
                                    todoContainer.addEventListener('click',function(){

                                        (0,_displayTodo__WEBPACK_IMPORTED_MODULE_3__["default"])(object);

                                        // const mainContainer = document.querySelector('.main-container');

                                        // const todoDisplayContainer = document.createElement('div');

                                        // todoDisplayContainer.classList.add('todo-display-container');

                                        // mainContainer.append(todoDisplayContainer);


                                        //     const todoForm = document.createElement('form');

                                        //     todoDisplayContainer.append(todoForm)


                                        //     const todoDisplay = document.createElement('div');

                                        //     todoDisplay.classList.add('todo-display');

                                        //     todoForm.append(todoDisplay);



                                        //         const todoDisplayTitle = document.createElement('input');

                                        //         todoDisplayTitle.setAttribute('placeholder','Title');

                                        //         todoDisplayTitle.setAttribute('id','todo-display-title');

                                        //         todoDisplayTitle.setAttribute('required','');

                                        //         todoDisplayTitle.value = object.title;

                                        //         todoDisplay.append(todoDisplayTitle);


                                        //         const todoDescTextArea = document.createElement('textarea');

                                        //         todoDescTextArea.setAttribute('name','');

                                        //         todoDescTextArea.setAttribute('id','todo-display-desc');

                                        //         todoDescTextArea.setAttribute('placeholder','Description')

                                        //         todoDescTextArea.setAttribute('cols','30');

                                        //         todoDescTextArea.setAttribute('rows','10');

                                        //         todoDescTextArea.setAttribute('required','');

                                        //         todoDescTextArea.value = object.desc;

                                        //         todoDescTextArea.classList.add('todo-update');

                                        //         todoDisplay.append(todoDescTextArea);


                                        //         const todoDisplayDate = document.createElement('input');

                                        //         todoDisplayDate.setAttribute('type','date');

                                        //         todoDisplayDate.setAttribute('id','todo-display-date');

                                        //         todoDisplayDate.value = object.dueDate;

                                        //         todoDisplayDate.classList.add('todo-update');

                                        //         todoDisplayDate.setAttribute('required','');

                                        //         todoDisplay.append(todoDisplayDate);

                                        //         // const lineBreak1 = document.createElement('br');                                               
                                        //         // todoDisplay.append(lineBreak1);


                                        //         const todoDisplayRemindIn = document.createElement('input');

                                        //         todoDisplayRemindIn.setAttribute('type','number');

                                        //         todoDisplayRemindIn.setAttribute('id','todo-display-remind-in');

                                        //         todoDisplayRemindIn.setAttribute('placeholder','Remind in how many days?');

                                        //         todoDisplayRemindIn.value = object.remindIn;

                                        //         todoDisplayRemindIn.classList.add('todo-update');

                                        //         todoDisplayRemindIn.setAttribute('required','');

                                        //         todoDisplay.append(todoDisplayRemindIn);

                                        //         // const lineBreak2 = document.createElement('br');
                                        //         // todoDisplay.append(lineBreak2);



                                        //         const projectsDropDown = document.createElement('select');

                                        //         projectsDropDown.setAttribute('name','project-display-choices');
                    
                                        //         projectsDropDown.setAttribute('id','project-display-choices');

                                        //         projectsDropDown.setAttribute('required','');
                    
                                        //         projectsDropDown.classList.add('form-input');
                    
                                        //         todoDisplay.append(projectsDropDown);




                                        //                 const unprocessedProject = projectObjects().unprocessedProjectArray

                                        //                 const optionsNode = document.querySelectorAll('option');
                                            
                                        //                 if(optionsNode){
                                            
                                        //                     optionsNode.forEach(option => {
                                        //                         option.remove();
                                        //                     });
                                            
                                        //                 }
                                            
                                        //                 const option0 = document.createElement('option');
                                            
                                        //                 option0.textContent = object.project;
                                            
                                        //                 option0.value = object.project;
                                            
                                        //                 projectsDropDown.append(option0);
                                            
                                            
                                        //                 unprocessedProject.forEach(obj => {
                                            
                                        //                     const projectOption = document.createElement('option');
                                            
                                        //                     projectOption.textContent = obj.title;
                                            
                                        //                     projectOption.value = obj.title;
                                            
                                        //                     projectsDropDown.append(projectOption);
                                        //                 });




                                        //         const firstButtonContainer = document.createElement('div');

                                        //         firstButtonContainer.classList.add('first-button-container');

                                        //         todoDisplay.append(firstButtonContainer)


                                        //             const priorityBtnDiv = document.createElement('div');

                                        //             priorityBtnDiv.classList.add('priority-button-div');

                                        //             firstButtonContainer.append(priorityBtnDiv)


                                        //                 const priorityLabel = document.createElement('label');

                                        //                 priorityLabel.textContent = 'Priority: ';

                                        //                 priorityLabel.setAttribute('for','todo-display-priority');

                                        //                 priorityBtnDiv.append(priorityLabel);


                                        //                 // const linebreakPriority = document.createElement('br');
                                        //                 // priorityBtnDiv.append(linebreakPriority);



                                        //                 const todoDisplayPriority = document.createElement('button');

                                        //                 todoDisplayPriority.setAttribute('value',object.priority);

                                        //                 todoDisplayPriority.setAttribute('type','button');

                                        //                 todoDisplayPriority.setAttribute('id','todo-display-priority');

                                        //                 todoDisplayPriority.textContent = object.priority;

                                        //                 // todoDisplayPriority.classList.add('todo-update');

                                        //                 priorityBtnDiv.append(todoDisplayPriority);


                                        //                 todoDisplayPriority.addEventListener('click', function(){

                                        //                     // Add classes for different priorities (different colours)

                                        //                     if (todoDisplayPriority.value === 'Low'){
                                        //                         todoDisplayPriority.value = 'Medium';
                                        //                         todoDisplayPriority.textContent = 'Medium';

                                        //                         return;
                                        //                     }

                                        //                     if (todoDisplayPriority.value === 'Medium'){
                                        //                         todoDisplayPriority.value = 'High';
                                        //                         todoDisplayPriority.textContent = 'High';

                                        //                         return;
                                        //                     }

                                        //                     if (todoDisplayPriority.value === 'High'){
                                        //                         todoDisplayPriority.value = 'Low';
                                        //                         todoDisplayPriority.textContent = 'Low';

                                        //                         return;
                                        //                     }


                                        //                 });

                                        //             const statusBtnDiv = document.createElement('div');

                                        //             statusBtnDiv.classList.add('status-button-div');

                                        //             firstButtonContainer.append(statusBtnDiv)

                                        //             // const lineBreak3 = document.createElement('br');
                                        //             // todoDisplay.append(lineBreak3);


                                        //                 const statusLabel = document.createElement('label');

                                        //                 statusLabel.textContent = 'Status: ';

                                        //                 statusLabel.setAttribute('for','todo-display-status');

                                        //                 statusBtnDiv.append(statusLabel);



                                        //             // const lineBreak4 = document.createElement('br');
                                        //             // todoDisplay.append(lineBreak4);

                                        //             // create line break 

                                        //                 const todoDisplayStatus = document.createElement('button');

                                        //                 todoDisplayStatus.setAttribute('value',object.status);

                                        //                 todoDisplayStatus.setAttribute('type','button');

                                        //                 todoDisplayStatus.setAttribute('id','todo-display-status');

                                        //                 todoDisplayStatus.textContent = object.status;

                                        //                 // todoDisplayStatus.classList.add('todo-update');

                                        //                 statusBtnDiv.append(todoDisplayStatus);

                                        //                 todoDisplayStatus.addEventListener('click', function(){

                                        //                     // Add classes for different priorities (different colours)

                                        //                     if (todoDisplayStatus.value === 'pending'){
                                        //                         todoDisplayStatus.value = 'complete';
                                        //                         todoDisplayStatus.textContent = 'Complete';

                                        //                         return;
                                        //                     }

                                        //                     if (todoDisplayStatus.value === 'complete'){
                                        //                         todoDisplayStatus.value = 'pending';
                                        //                         todoDisplayStatus.textContent = 'Pending';

                                        //                         return;
                                        //                     }


                                        //                 });



                                                
                                        //         const secondButtonContainer = document.createElement('div');

                                        //         secondButtonContainer.classList.add('second-button-container');

                                        //         todoDisplay.append(secondButtonContainer)
                                        //         // const lineBreak5 = document.createElement('br');
                                        //         // todoDisplay.append(lineBreak5);


                                        //             const deleteBtnDiv = document.createElement('div');

                                        //             deleteBtnDiv.classList.add('delete-button-div');

                                        //             secondButtonContainer.append(deleteBtnDiv);


                                        //                 const todoDelete = document.createElement('button');

                                        //                 todoDelete.setAttribute('value','');

                                        //                 todoDelete.setAttribute('type','button');

                                        //                 todoDelete.setAttribute('id','todo-delete');

                                        //                 todoDelete.textContent = 'Delete';

                                        //                 todoDelete.classList.add('todo-delete');

                                        //                 deleteBtnDiv.append(todoDelete);


                                        //                 // const lineBreak6 = document.createElement('br');
                                        //                 // todoDisplay.append(lineBreak6);

                                                    
                                        //             const updateBtnDiv = document.createElement('div');

                                        //             updateBtnDiv.classList.add('delete-button-div');

                                        //             secondButtonContainer.append(updateBtnDiv);


                                        //                 const todoUpdate = document.createElement('button');

                                        //                 todoUpdate.setAttribute('value','');

                                        //                 todoUpdate.setAttribute('type','submit');

                                        //                 todoUpdate.setAttribute('id','todo-update');

                                        //                 todoUpdate.textContent = 'Update';

                                        //                 todoUpdate.classList.add('todo-update');

                                        //                 updateBtnDiv.append(todoUpdate);


                                        //         updateTodoItem(object);

                                        //         deleteTodoItem(object);


                                                
                                            
                                    });

                                });
                                
                            }

                }
                
            }

        }

    }

    (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_2__.emptyDisplay)();

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendTodoObjects);

/***/ }),

/***/ "./src/domCreation/projectsDOMCreation.js":
/*!************************************************!*\
  !*** ./src/domCreation/projectsDOMCreation.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populateDOMProjectCollection */ "./src/domCreation/populateDOMProjectCollection.js");
/* harmony import */ var _domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domActivities/domActivities */ "./src/domActivities/domActivities.js");
// import populateTodoCollection from "./populateDOMTodoCollection";





function projectDOMModule (){

    const displayContainer = document.querySelector('.display-container');




    // move to domActivity
    function removeExistingDisplayDOM (){

        const displayContainer = document.querySelector('.display-container');

        displayContainer.querySelectorAll('*').forEach(element => {
        
        element.remove();

    });

    }

    removeExistingDisplayDOM();


    


    


    const projectContainerTitle = document.createElement('div');

    projectContainerTitle.classList.add('todo-container-title');

    displayContainer.append(projectContainerTitle);

        const tabTitle = document.createElement('div');

        tabTitle.classList.add('tab-title');

        projectContainerTitle.append(tabTitle);

            const projectHeader = document.createElement('h1');

            projectHeader.textContent = 'Projects';

            tabTitle.append(projectHeader);


            const projectParagraph = document.createElement('p');

            projectParagraph.textContent = 'Your collection of projects are displayed here';

            tabTitle.append(projectParagraph);

        
        const priorityButtons = document.createElement('div');

        priorityButtons.classList.add('priority-buttons');

        projectContainerTitle.append(priorityButtons);

            const highPriority = document.createElement('button');

            highPriority.classList.add('high-priority');

            highPriority.classList.add('high-priority-chosen');

            highPriority.textContent = 'High';

            priorityButtons.append(highPriority);


            const mediumPriority = document.createElement('button');

            mediumPriority.classList.add('medium-priority');

            mediumPriority.textContent = 'Medium';

            priorityButtons.append(mediumPriority);


            const lowPriority = document.createElement('button');

            lowPriority.classList.add('low-priority');

            lowPriority.textContent = 'Low';

            priorityButtons.append(lowPriority);

            





    
    const collectionContainer = document.createElement('div');

    collectionContainer.classList.add('collection-container');

    displayContainer.append(collectionContainer);


    (0,_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_0__["default"])('High');

    (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__.changeProjectPriority)();
    
    
    
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectDOMModule);

/***/ }),

/***/ "./src/tabObjects/allNotesTab.js":
/*!***************************************!*\
  !*** ./src/tabObjects/allNotesTab.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domActivities_sortingMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domActivities/sortingMethods */ "./src/domActivities/sortingMethods.js");


function allNotesTab (){

    const cloneTodoArray = _domActivities_sortingMethods__WEBPACK_IMPORTED_MODULE_0__["default"].cloneObject().cloneTodoArray;

    const notesArray = _domActivities_sortingMethods__WEBPACK_IMPORTED_MODULE_0__["default"].noteSorter(cloneTodoArray);



    return notesArray;



}

allNotesTab();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allNotesTab);

/***/ }),

/***/ "./src/tabObjects/allProjectsTab.js":
/*!******************************************!*\
  !*** ./src/tabObjects/allProjectsTab.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domActivities_sortingMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domActivities/sortingMethods */ "./src/domActivities/sortingMethods.js");


function projectsTab (){

        

    const unprocessedProjectArray = _domActivities_sortingMethods__WEBPACK_IMPORTED_MODULE_0__["default"].sortByProjectName().processedProjectArrayByName;

    

    // All projects are stored here
    // First sort the projects by priority
    const projectsByPriority = _domActivities_sortingMethods__WEBPACK_IMPORTED_MODULE_0__["default"].prioritySorter(unprocessedProjectArray);


    

    // Then sort the notes in those projects by priority
    for (const priorityLevel in projectsByPriority) {

        projectsByPriority[priorityLevel].forEach(project => {

            // sort priority of todoCollection
            const sortByPriority = _domActivities_sortingMethods__WEBPACK_IMPORTED_MODULE_0__["default"].prioritySorter(project.todoCollection)


            // Sort todos by due date
            for (const priority in sortByPriority) {

                sortByPriority[priority] = _domActivities_sortingMethods__WEBPACK_IMPORTED_MODULE_0__["default"].sortDueDate(sortByPriority[priority]);

            }

            // empty todoCollection
            project.todoCollection = [];

            // create new key and attach the sorted object
            project.todosByPriority = sortByPriority;

        });

    }


    // Sort projects by due dates
    for (const priority in projectsByPriority) {
        
        projectsByPriority[priority] = _domActivities_sortingMethods__WEBPACK_IMPORTED_MODULE_0__["default"].sortDueDate(projectsByPriority[priority]);

    }







    return {projectsByPriority,unprocessedProjectArray};

}

projectsTab();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectsTab);

/***/ }),

/***/ "./src/tabObjects/allTodosTab.js":
/*!***************************************!*\
  !*** ./src/tabObjects/allTodosTab.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domActivities_sortingMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domActivities/sortingMethods */ "./src/domActivities/sortingMethods.js");



function allTodosTab (){

    const cloneTodoArray = _domActivities_sortingMethods__WEBPACK_IMPORTED_MODULE_0__["default"].cloneObject().cloneTodoArray;
    const sortedTodoArray = _domActivities_sortingMethods__WEBPACK_IMPORTED_MODULE_0__["default"].prioritySorter(cloneTodoArray);

    for (const priority in sortedTodoArray) {
        
        sortedTodoArray[priority] = _domActivities_sortingMethods__WEBPACK_IMPORTED_MODULE_0__["default"].sortDueDate(sortedTodoArray[priority]);

    }



    return sortedTodoArray;


}


allTodosTab();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allTodosTab);

/***/ }),

/***/ "./src/assets/menu-icon.png":
/*!**********************************!*\
  !*** ./src/assets/menu-icon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33bc6ca9767796306f36.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domCreation_mainDOMCreation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domCreation/mainDOMCreation */ "./src/domCreation/mainDOMCreation.js");
/* harmony import */ var _domActivities_domActivities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domActivities/domActivities */ "./src/domActivities/domActivities.js");
/* harmony import */ var _domCreation_allTodoDOMCreation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domCreation/allTodoDOMCreation */ "./src/domCreation/allTodoDOMCreation.js");











// All modules should start here

// HOMEPAGE
(0,_domCreation_mainDOMCreation__WEBPACK_IMPORTED_MODULE_1__["default"])();

// Attaches all eventlisteners to HOMEPAGE
(0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_2__["default"])();

// Loads todo first
(0,_domCreation_allTodoDOMCreation__WEBPACK_IMPORTED_MODULE_3__["default"])();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7QUFJQTtBQUNBOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQSxpREFBaUQ7QUFDakQ7QUFDQSxzQkFBc0I7QUFDdEIsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLHFDQUFxQzs7O0FBR3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxpREFBaUQ7QUFDakQsa0RBQWtEOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7OztBQUdBLDhDQUE4QztBQUM5QywyREFBMkQ7QUFDM0QsdUNBQXVDO0FBQ3ZDLCtDQUErQztBQUMvQztBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFDdEIsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSx1QkFBdUI7Ozs7O0FBS3ZCO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsNkNBQTZDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksY0FBYyxNQUFNLE9BQU8sUUFBUSxLQUFLLFVBQVUsVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsUUFBUSxVQUFVLFFBQVEsS0FBSyxZQUFZLFlBQVksWUFBWSxhQUFhLE1BQU0sT0FBTyxhQUFhLGFBQWEsYUFBYSxlQUFlLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxRQUFRLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxRQUFRLEtBQUssWUFBWSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxzQkFBc0IsV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLGFBQWEsYUFBYSxnQkFBZ0IsYUFBYSxhQUFhLGFBQWEsZUFBZSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxhQUFhLGFBQWEsYUFBYSxXQUFXLFdBQVcsWUFBWSxlQUFlLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGVBQWUsT0FBTyxRQUFRLFdBQVcsTUFBTSxVQUFVLGNBQWMsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLGFBQWEsT0FBTyxNQUFNLGFBQWEsUUFBUSxPQUFPLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxRQUFRLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxpQkFBaUIsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksUUFBUSxZQUFZLE9BQU8sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsY0FBYyxjQUFjLGNBQWMsYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLGVBQWUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsV0FBVyxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFVBQVUsU0FBUyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLFlBQVksYUFBYSxjQUFjLGlCQUFpQixhQUFhLGFBQWEsTUFBTSxTQUFTLFFBQVEsS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsTUFBTSxVQUFVLFlBQVksMEJBQTBCLGNBQWMsT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsZUFBZSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxXQUFXLE1BQU0sT0FBTyxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxTQUFTLEtBQUssYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxTQUFTLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFFBQVEsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLFlBQVksUUFBUSxNQUFNLGFBQWEsV0FBVyxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxhQUFhLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLGFBQWEsU0FBUyxNQUFNLFVBQVUsWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsV0FBVyxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxnQkFBZ0IsY0FBYyxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsY0FBYyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksYUFBYSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sTUFBTSxZQUFZLGFBQWEsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxRQUFRLE1BQU0sWUFBWSxhQUFhLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxRQUFRLE1BQU0sWUFBWSxlQUFlLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxlQUFlLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxRQUFRLE1BQU0sVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxhQUFhLGNBQWMsT0FBTyxTQUFTLFVBQVUsWUFBWSxhQUFhLFFBQVEsUUFBUSxpQkFBaUIsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsWUFBWSxhQUFhLGNBQWMsUUFBUSxNQUFNLFVBQVUsVUFBVSxZQUFZLHlCQUF5QixXQUFXLGFBQWEsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLGFBQWEsUUFBUSxLQUFLLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFVBQVUsYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGdCQUFnQixhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFlBQVksT0FBTyxPQUFPLGFBQWEsV0FBVyxTQUFTLEtBQUssWUFBWSxPQUFPLGNBQWMsT0FBTyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLGNBQWMsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksWUFBWSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsV0FBVyxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxPQUFPLE1BQU0sYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsUUFBUSxNQUFNLGFBQWEsVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsY0FBYyxhQUFhLGFBQWEsTUFBTSxPQUFPLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLFlBQVksWUFBWSxXQUFXLGFBQWEsZUFBZSxhQUFhLGFBQWEsTUFBTSxPQUFPLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxPQUFPLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sT0FBTyxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxjQUFjLGFBQWEsTUFBTSxPQUFPLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxRQUFRLE9BQU8sZ0JBQWdCLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsU0FBUyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFh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Ozs7QUFHQTs7QUFFQTs7O0FBR0EsUUFBUSxrRkFBc0I7O0FBRTlCOztBQUVBOzs7O0FBSUEsUUFBUSxzRkFBb0I7O0FBRTVCOztBQUVBOzs7QUFHQTtBQUNBLFFBQVEsbUZBQWlCOztBQUV6Qjs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7Ozs7QUFJQTtBQUNBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOzs7QUFHTDs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOzs7OztBQUtBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxLQUFLOztBQUVMOztBQUVBOzs7O0FBSUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTtB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Ozs7QUFNQTs7QUFFQTtBQUNBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBVTs7QUFFbEI7O0FBRUE7O0FBRUE7O0FBRUEsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7OztBQUlUOzs7Ozs7Ozs7O0FBVUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLFFBQVEsdURBQWE7O0FBRXJCOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7Ozs7QUFJVDs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7OztBQUlyQjs7OztBQUlBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBLGdCQUFnQixvREFBVTs7QUFFMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUOzs7QUFHQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsZ0JBQWdCLHVEQUFhOztBQUU3Qjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUEsdUJBQXVCLHNCQUFzQixFQUFFLDRCQUE0QixFQUFFLGFBQWE7O0FBRTFGOztBQUVBOztBQUVBOzs7O0FBSUEsaUVBQWUsbUJBQW1CLEVBQUM7O0FBRW1JOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNueUM5SDs7QUFFTTs7QUFFOUM7OztBQUdBOztBQUVBOztBQUVBLHNDQUFzQyx1REFBYTs7QUFFbkQ7OztBQUdBLG1DQUFtQyxvREFBVTs7QUFFN0M7QUFDQTs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBLFNBQVM7O0FBRVQ7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQSxTQUFTOzs7QUFHVCxnQkFBZ0I7OztBQUdoQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLFNBQVM7OztBQUdULGdCQUFnQjs7QUFFaEI7Ozs7Ozs7OztBQVNBOztBQUVBOztBQUVBLG1DQUFtQzs7QUFFbkMsNEJBQTRCLDJCQUEyQjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7O0FBR0E7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFNBQVM7Ozs7QUFJVDtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxxQ0FBcUMsV0FBVzs7QUFFaEQ7OztBQUdBLGdDQUFnQyxzQkFBc0I7QUFDdEQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7OztBQUdBLDZCQUE2Qjs7OztBQUk3QjtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsU0FBUzs7QUFFVDs7O0FBR0E7Ozs7QUFJQTs7QUFFQSxZQUFZOztBQUVaOztBQUVBOztBQUVBLGlFQUFlLHlCQUF5Qjs7Ozs7Ozs7Ozs7Ozs7O0FDM1N4Qzs7QUFFNEQ7O0FBRTVEOztBQUVBOzs7OztBQUtBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7OztBQUdBOzs7QUFHQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFFBQVEsc0VBQWlCOztBQUV6Qjs7Ozs7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGa0M7O0FBRUc7O0FBRXBFOztBQUVBOzs7OztBQUtBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7OztBQUdBOzs7QUFHQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7O0FBTUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJLHNFQUFzQjs7QUFFMUIsSUFBSSxnRkFBa0I7QUFDdEI7QUFDQTs7Ozs7O0FBTUE7OztBQUdBOzs7QUFHQTtBQUNBOzs7O0FBSUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWUsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUlvRzs7QUFFbkk7O0FBRTREOztBQUU1RDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjs7O0FBR2pCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxpQkFBaUI7Ozs7QUFJakI7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsaUJBQWlCOztBQUVqQjs7Ozs7Ozs7QUFRQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjtBQUNBLFlBQVksbUVBQXFCOztBQUVqQzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7OztBQUdBOzs7QUFHQSxZQUFZLCtFQUFpQjs7QUFFN0IsWUFBWSwrRUFBaUI7OztBQUc3Qjs7Ozs7QUFLQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7OztBQUdBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqVzZCOztBQUVzQjs7O0FBR2hGOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQSwrQ0FBK0Msc0VBQWM7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7Ozs7O0FBS3JCOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLHFCQUFxQjs7QUFFckI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxxQkFBcUI7Ozs7QUFJckI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0EsWUFBWSw0RUFBYzs7QUFFMUIsWUFBWSw0RUFBYzs7QUFFMUI7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xXYzs7QUFFeEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7Ozs7QUFJTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLCtCQUErQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRiw2QkFBNkIsUUFBUSxnQ0FBZ0MsYUFBYSwrQkFBK0I7QUFDck07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyx3REFBVzs7QUFFdkQseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7Ozs7OztBQU1MOzs7QUFHQSxpRUFBZSxxQkFBcUI7Ozs7Ozs7Ozs7Ozs7OztBQzlNcEM7QUFDeUQ7O0FBRXpEOztBQUVBOzs7O0FBSUE7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsaUNBQWlDOzs7QUFHakM7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7O0FBR0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsaUNBQWlDOzs7QUFHakM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7OztBQU1BOztBQUVBOztBQUVBOzs7OztBQUtBLHVEQUF1RCxzRUFBYzs7O0FBR3JFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDOztBQUVyQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGlDQUFpQzs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBLHFFQUFxRSw2RUFBZTs7QUFFcEY7Ozs7QUFJQTtBQUNBOztBQUVBLGdEQUFnRCwyREFBYzs7QUFFOUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGdFQUFnRTs7O0FBR2hFOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLGdFQUFnRTs7OztBQUloRTs7QUFFQTs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLGdFQUFnRTs7QUFFaEU7Ozs7Ozs7O0FBUUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNERBQTREOzs7QUFHNUQ7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBOzs7OztBQUtBO0FBQ0E7O0FBRUEsd0RBQXdEOzs7QUFHeEQsNkNBQTZDOzs7QUFHN0M7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBLElBQUksMEVBQVk7O0FBRWhCOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsb0JBQW9CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeGNlO0FBQ25EO0FBQzBEOztBQUUxRDtBQUNBOztBQUUrRzs7QUFFdkU7OztBQUd4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7Ozs7QUFJTCwwQkFBMEIsbUVBQVU7O0FBRXBDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGdDQUFnQywrQkFBK0I7OztBQUcvRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQSxrRUFBa0UsNkVBQWU7O0FBRWpGLHdFQUF3RSw2QkFBNkIsUUFBUSxpQ0FBaUMsYUFBYSwrQkFBK0I7O0FBRTFMOzs7QUFHQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBLGlGQUFpRixlQUFlOztBQUVoRzs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUEsd0NBQXdDLHdEQUFXOztBQUVuRDs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDs7Ozs7QUFLNUQ7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsNERBQTREOztBQUU1RDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLDREQUE0RDs7OztBQUk1RDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLHFDQUFxQzs7QUFFckMsaUNBQWlDO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLElBQUksMEVBQVk7O0FBRWhCOzs7QUFHQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyaEJoQzs7QUFFa0U7O0FBRUs7O0FBRXZFOztBQUVBOzs7OztBQUtBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7OztBQUdBOzs7QUFHQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7O0FBTUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0EsSUFBSSx5RUFBb0I7O0FBRXhCLElBQUksbUZBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7OztBQ3RINkI7O0FBRTVEOztBQUVBLDJCQUEyQixxRUFBYzs7QUFFekMsdUJBQXVCLHFFQUFjOzs7O0FBSXJDOzs7O0FBSUE7O0FBRUE7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJrQzs7QUFFNUQ7O0FBRUE7O0FBRUEsb0NBQW9DLHFFQUFjOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLHFFQUFjOzs7QUFHN0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1DQUFtQyxxRUFBYzs7O0FBR2pEO0FBQ0E7O0FBRUEsMkNBQTJDLHFFQUFjOztBQUV6RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFFQUFjOztBQUVyRDs7Ozs7Ozs7QUFRQSxZQUFZOztBQUVaOztBQUVBOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RGtDOztBQUU1RDs7QUFFQSwyQkFBMkIscUVBQWM7QUFDekMsNEJBQTRCLHFFQUFjOztBQUUxQztBQUNBO0FBQ0Esb0NBQW9DLHFFQUFjOztBQUVsRDs7OztBQUlBOzs7QUFHQTs7O0FBR0E7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7O0FBRXFDOztBQUVKOztBQUVNOzs7OztBQUs1RDs7QUFFQTtBQUNBLHdFQUFhOztBQUViO0FBQ0Esd0VBQVM7O0FBRVQ7QUFDQSwyRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVRvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUFjdGl2aXRpZXMvc29ydGluZ01ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL2FsbE5vdGVzRE9NQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL2FsbFRvZG9ET01DcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tQ3JlYXRpb24vZGlzcGxheVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL2Rpc3BsYXlUb2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21DcmVhdGlvbi9kaXNwbGF5VG9kb3NJblByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL2Zvcm1ET01DcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tQ3JlYXRpb24vbWFpbkRPTUNyZWF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21DcmVhdGlvbi9wb3B1bGF0ZURPTU5vdGVDb2xsZWN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21DcmVhdGlvbi9wb3B1bGF0ZURPTVByb2plY3RDb2xsZWN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21DcmVhdGlvbi9wb3B1bGF0ZURPTVRvZG9Db2xsZWN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21DcmVhdGlvbi9wcm9qZWN0c0RPTUNyZWF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YWJPYmplY3RzL2FsbE5vdGVzVGFiLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YWJPYmplY3RzL2FsbFByb2plY3RzVGFiLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YWJPYmplY3RzL2FsbFRvZG9zVGFiLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHl7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYigwLDQsNzgpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxM2RlZywgcmdiYSgwLDQsNzgsMSkgMCUsIHJnYmEoMCw5NywxMDEsMSkgNDclLCByZ2JhKDAsMTA0LDEyNSwxKSAxMDAlKTtcblxuICAgIC8qIGJhY2tncm91bmQ6IHJnYigyMzgsMTc0LDIwMik7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMzgsMTc0LDIwMiwxKSAwJSwgcmdiYSgxNDgsMTg3LDIzMywxKSAxMDAlKTsgKi9cbn1cblxuXG50ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG5cblxuXG4ubWFpbi1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDVweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyIDQwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcInRvcC1jb250YWluZXIgdG9wLWNvbnRhaW5lclwiIFxuICAgIFwibm90ZS1tZW51IGRpc3BsYXktY29udGFpbmVyXCJcbiAgICBcInRvZG8tY29udGFpbmVyLWZvb3RlciB0b2RvLWNvbnRhaW5lci1mb290ZXJcIjtcblxuICAgIFxuXG59XG5cblxuLm5vdGUtbWVudXtcbiAgICBncmlkLWFyZWE6IG5vdGUtbWVudTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgLyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7ICovXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNnB4ICk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuXG5cbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDtcbn1cblxuLm5vdGUtbWVudSA+IGRpdiA+IGgxIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG4udGFiLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIHJlZDsgKi9cbiAgICBwYWRkaW5nOiAxMHB4O1xuIFxufVxuXG4udGFiLWNvbnRhaW5lciA+IGRpdjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWxsLXRvZG9zLXRhYixcbi5hbGwtcHJvamVjdHMtdGFiLFxuLmFsbC1ub3Rlcy10YWIge1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLyogcGFkZGluZy1sZWZ0OiAyMHB4OyAqL1xuICAgIC8qIGZvbnQtc2l6ZTogMTVweDsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuXG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzOSwgMTM5LCAxMzksIDAuMjUpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUxNCk7XG5cbn1cblxuXG4ubWVudS10YWItYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMjIxLCAwLjM3KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI0NywgMjU1LCAwLjU4Mik7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cbi50b3AtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgZ3JpZC1hcmVhOiB0b3AtY29udGFpbmVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi50b3AtY29udGFpbmVyLXNwYWNpbmcge1xuICAgIGZsZXg6IDE7XG59XG5cbi5icmFuZC1jb250YWluZXIge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYyMyk7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cblxuLmhhbWJ1cmdlci1tZW51IHtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7ICovXG4gICAgd2lkdGg6IDcwcHg7XG4gICAgZGlzcGxheTogbm9uZTsgLypkaXNwbGF5OiBibG9jayB3aGVuIGRpc3BsYXkgaXMgYmVsb3cgNjAwcHggKi8gXG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuXG5cblxuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDBweDtcblxuICAgIFxufVxuXG4uaGFtYnVyZ2VyLW1lbnUgPiBpbWcge1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4uaGFtYnVyZ2VyLW1lbnUgPiBpbWc6aG92ZXIge1xuICAgIHdpZHRoOiA2MHB4O1xufVxuXG4uaGFtYnVyZ2VyLW1lbnUgPiBpbWc6YWN0aXZlIHtcbiAgICB3aWR0aDogNjBweDtcbn1cblxuLmRpc3BsYXktY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGdyaWQtYXJlYTogZGlzcGxheS1jb250YWluZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNjBweCAxZnI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XG5cblxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cblxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcblxuXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgXCJ0b2RvLWNvbnRhaW5lci10aXRsZVwiXG4gICAgXCJjb2xsZWN0aW9uLWNvbnRhaW5lclwiO1xuXG59XG5cblxuXG5cblxuLnRvZG8tY29udGFpbmVyLXRpdGxle1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IHRvZG8tY29udGFpbmVyLXRpdGxlO1xuICAgIFxuICAgIFxufVxuLnByaW9yaXR5LWJ1dHRvbnN7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuXG59XG5cbi5wcmlvcml0eS1idXR0b25zID4gYnV0dG9uOmhvdmVyIHtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NTkpO1xuXG59XG5cblxuLmhpZ2gtcHJpb3JpdHksXG4ubWVkaXVtLXByaW9yaXR5LFxuLmxvdy1wcmlvcml0eXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb2xpdmVncmVlbjtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1Myk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hvc2VuLXByaW9yaXR5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTk5LCAzMywgMC41NjIpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhpZ2gtcHJpb3JpdHktY2hvc2VuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAwLCAwKTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5tZWRpdW0tcHJpb3JpdHktY2hvc2VuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjQsIDApO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmxvdy1wcmlvcml0eS1jaG9zZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyMTQsIDApO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnRhYi10aXRsZXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMik7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4udGFiLXRpdGxlID4gaDEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMik7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAvKiBtYXJnaW4tYm90dG9tOiA1MHB4OyAqL1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogMjAwcHg7XG59XG5cblxuLnRvZG8tY29udGFpbmVyLWZvb3RlcntcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiB0b2RvLWNvbnRhaW5lci1mb290ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVibHVlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG5cblxuXG4gICAgYmFja2dyb3VuZDogcmdiYSggMCwgMCwgMCwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XG59XG5cbi5saW5rLWNvbnRhaW5lciA+IGEge1xuXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzIpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbn1cblxuXG4vKiBUaGlzIGlzIHRoZSB0cmlja3kgcGFydCAqL1xuLmNvbGxlY3Rpb24tY29udGFpbmVye1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCByZWQ7ICovXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47ICovXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLWFyZWE6IGNvbGxlY3Rpb24tY29udGFpbmVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggMTBweDtcbiAgICBcblxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LDFmcikpOyAqL1xuXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcblxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDM1MHB4KTsgKi9cbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjsgKi9cbiAgICAvKiBvdmVyZmxvdy15OiBhdXRvOyAqL1xuICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cbiAgICAvKiBvYmplY3QtZml0OiBjb3ZlcjsgKi9cbiAgICBcblxufVxuXG4uZGlzcGxheS1lbXB0eSB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKTtcbn1cblxuLyogLnZlcnRpY2FsLXNjcm9sbHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibHVlO1xufSAqL1xuXG4uc3RhdHVzLWNvbnRhaW5lcntcblxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGZ1Y2hzaWE7ICovXG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiAzNzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG5cbn1cblxuXG4uc3RhdHVzLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAxMHB4O1xuICAgIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7ICovXG59XG5cblxuXG5cbi5vdmVyZHVlLWNvbnRhaW5lcixcbi5kdWUtc29vbi1jb250YWluZXIsXG4udXBjb21pbmctY29udGFpbmVyLFxuLmNvbXBsZXRlLWNvbnRhaW5lcntcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogYm9yZGVyOiA0cHggc29saWQgZ29sZDsgKi9cbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGluZGlnbzsgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xuICAgIFxuICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcblxuXG5cblxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzAwNGE1NzAwO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDVweCA1cHggMTBweCAjMDAzZjRhLFxuICAgICAgICAgICAgICAgIGluc2V0IC01cHggLTVweCAxMHB4ICMwMDU1NjQ7XG5cblxufVxuXG5cbi5vdmVyZHVlLWNvbnRhaW5lciA+IC5zY3JvbGxhYmxlLWNvbnRhaW5lciA+IC50b2RvLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDUsIDUwLCA1MCwgMC4zMjkpO1xufVxuXG5cbi5kdWUtc29vbi1jb250YWluZXIgPiAuc2Nyb2xsYWJsZS1jb250YWluZXIgPiAudG9kby1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuNDU5KTtcbn1cblxuXG4udXBjb21pbmctY29udGFpbmVyID4gLnNjcm9sbGFibGUtY29udGFpbmVyID4gLnRvZG8tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDAsIDEyOCwgMC4zMDEpO1xufVxuXG4uY29tcGxldGUtY29udGFpbmVyID4gLnNjcm9sbGFibGUtY29udGFpbmVyID4gLnRvZG8tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC41MjEpO1xufVxuXG5cbi5zY3JvbGxhYmxlLWNvbnRhaW5lcntcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgY29sdW1uLWdhcDogMjBweDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uOyAvKlRoaXMgd2FzIHdoYXQgaSB3YW50ZWQgdG8gZG8qL1xuICAgIFxuICAgIC8qIGJvcmRlcjogNHB4IHNvbGlkIGJyb3duOyAqL1xuXG59XG5cbi50b2RvLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAyMjBweDtcblxuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBcbn1cblxuLnRvZG8tdGl0bGUtZGl2IHtcblxuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG59XG5cblxuLnRvZG8tZGVzYy1kaXYge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7ICovXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAvKiBwYWRkaW5nLWJvdHRvbTogNXB4OyAqL1xufVxuXG4udG9kby1kYXRlLWRpdixcbi50b2RvLXByb2plY3QtZGl2IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG5cblxuXG5cblxuXG5cblxuLnRvZG8tZGlzcGxheS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDczKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAyO1xuICAgIGxlZnQ6IDA7XG4gICAgXG59XG5cbi50b2RvLWRpc3BsYXkge1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgLyogaGVpZ2h0OiA1NTBweDsgKi9cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDVweDtcbiAgICBcbn1cblxuLm1haW4tdG9kby1kaXNwbGF5IHtcblxuICAgIFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCAxZnIgMzBweCAzMHB4IDM1cHggNjBweCA2MHB4O1xuXG59XG5cblxuI3RvZG8tZGlzcGxheS10aXRsZSAge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLyogaGVpZ2h0OiAzNXB4OyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgYmFja2dyb3VuZDogcmdiYSggMiwgMiwgMiwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbn1cblxuI3RvZG8tZGlzcGxheS1kZXNjIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuXG4gICAgYmFja2dyb3VuZDogcmdiYSggMiwgMiwgMiwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbiN0b2RvLWRpc3BsYXktZGF0ZSB7XG5cbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cblxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDIsIDIsIDIsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jdG9kby1kaXNwbGF5LXJlbWluZC1pbiB7XG5cbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cblxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDIsIDIsIDIsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgY29sb3I6IHdoaXRlO1xuXG5cbn1cblxuXG5cbiNwcm9qZWN0LWRpc3BsYXktY2hvaWNlcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLyogYXBwZWFyYW5jZTogbm9uZTsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyLCAyLCAyLCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5cbi5maXJzdC1idXR0b24tY29udGFpbmVyLFxuLnNlY29uZC1idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLmZpcnN0LWJ1dHRvbi1jb250YWluZXIgPiBkaXYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xufVxuXG4uZmlyc3QtYnV0dG9uLWNvbnRhaW5lciA+IGRpdiA+IGxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuXG4jdG9kby1kaXNwbGF5LXByaW9yaXR5LFxuI3RvZG8tZGlzcGxheS1zdGF0dXMgIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiN0b2RvLWRpc3BsYXktcHJpb3JpdHk6aG92ZXIsXG4jdG9kby1kaXNwbGF5LXN0YXR1czpob3ZlcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTg5KTtcbn1cblxuXG4jdG9kby11cGRhdGUsXG4jdG9kby1kZWxldGUge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgIC8qIGJhY2tncm91bmQ6IHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMjUgKTsgKi9cbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgIFxuXG59XG5cblxuI3RvZG8tZGVsZXRle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjY0NCk7XG59XG5cbiN0b2RvLWRlbGV0ZTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC44NjMpO1xufVxuXG4jdG9kby11cGRhdGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDI1NSwgMCwgMC42NTEpO1xufVxuXG4jdG9kby11cGRhdGU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDI1NSwgMCwgMC44OTcpO1xufVxuXG5cbi5wb3AtdXAtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDQ1KTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBcbn1cblxuLnBvcC11cCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgYmFja2dyb3VuZDogcmdiYSggMiwgMiwgMiwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tcm93czogMWZyIDUwcHg7XG59XG5cbi5wb3AtdXAtY29udGVudC1kaXZ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wb3AtdXAtYnV0dG9uLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcblxufVxuXG4ucG9wLXVwLWJ1dHRvbi1jb250YWluZXIgPiBidXR0b24ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cblxuXG5cblxuLnByb2plY3QtY29udGFpbmVye1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuIFxuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgXG59XG5cblxuXG4ucHJvamVjdC10aXRsZS1kaXYge1xuXG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgLyogbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7ICovXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYWxpZ24tc2VsZjogZW5kO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG59XG5cblxuLnByb2plY3QtZGVzYy1kaXYge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7ICovXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC8qIHBhZGRpbmctYm90dG9tOiA1cHg7ICovXG59XG5cbi5wcm9qZWN0LWRhdGUtZGl2e1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgYWxpZ24tc2VsZjogZW5kO1xufVxuXG5cblxuXG4ucHJvamVjdC10b2RvLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIyLCAxMjIsIDEyMiwgMC41ODIpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMjtcbn1cblxuLnByb2plY3QtZGlzcGxheSB7XG5cbiAgICB3aWR0aDogMzUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsIDAsIDEwMiwgMC43MDUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cblxuXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTsgKi9cbiAgICBcbiAgICAvKiBoZWlnaHQ6IDc1MHB4OyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjsgKi9cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuXG59XG5cbi5wcm9qZWN0LWRldGFpbHN7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMTBweDtcbn1cblxuI3Byb2plY3QtdGl0bGUtdXBkYXRle1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG5cblxuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4jcHJvamVjdC1kZXNjLXVwZGF0ZSB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcblxuXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xuXG5cbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSggMCwgMCwgMCwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG5cbn1cblxuI3Byb2plY3QtZGF0ZS11cGRhdGV7XG5cbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG5cblxuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcblxufVxuXG5cbiNwcm9qZWN0LXJlbWluZGVyLXVwZGF0ZXtcblxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuXG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuXG59XG5cbi5wcm9qZWN0LWJ1dHRvbnMtb25lLFxuLnByb2plY3QtYnV0dG9ucy10d297XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGdhcDogNXB4O1xuICAgIFxufVxuXG4ucHJvamVjdC1idXR0b25zLW9uZSA+IGRpdiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5wcm9qZWN0LWJ1dHRvbnMtb25lID4gZGl2ID4gbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgKi9cbn1cblxuXG4ucHJvamVjdC1idXR0b25zLW9uZSA+IGRpdiA+IGJ1dHRvbixcbi5wcm9qZWN0LWJ1dHRvbnMtdHdvID4gYnV0dG9ue1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICBib3JkZXItcmFkaXVzOiA1cHg7XG5cblxuICAgcGFkZGluZzogNXB4O1xuICAgYmFja2dyb3VuZDogcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4yNSApO1xuICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XG4gICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXG4gICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICAgY29sb3I6IHdoaXRlO1xuXG59XG5cbiNwcm9qZWN0LXByaW9yaXR5LXVwZGF0ZSxcbiNwcm9qZWN0LXN0YXR1cy11cGRhdGV7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3Byb2plY3QtcHJpb3JpdHktdXBkYXRlOmhvdmVyLFxuI3Byb2plY3Qtc3RhdHVzLXVwZGF0ZTpob3ZlcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTg5KTtcbn1cblxuLnByb2plY3QtdG9kb3N7XG5cbiAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWJsdWU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgLyogZGlzcGxheTogZ3JpZDsgKi9cbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMWZyOyAqL1xuXG5cbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDE0MCwgMC4yNSk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7ICovXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDEsIDExOSwgMC43Nik7ICovXG5cbn1cblxuI3Byb2plY3QtZGVsZXRle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjY0NCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcHJvamVjdC11cGRhdGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDI1NSwgMCwgMC42NTEpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4jcHJvamVjdC1kZWxldGU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuODc3KTtcbn1cblxuI3Byb2plY3QtdXBkYXRlOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE1LCAyNTUsIDAsIDAuODc3KTtcbn1cblxuLnByaW9yaXR5LXRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi50b2RvLXByb2plY3Qtc3RhdHVzLXRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAxLCAxMTksIDAuNzYpOyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuXG5cbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDEyOSwgMTI5LCAxMjksIDAuMjUpOyAqL1xuICAgIC8qIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApOyAqL1xuICAgIC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTsgKi9cbiAgICAvKiAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTsgKi9cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5cbi50b2RvLWluLXByb2plY3QtY29udGFpbmVyIHtcblxuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDIyMHB4O1xuXG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDgzLCA4MywgODMsIDAuMjUpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLnRvZG8tc3RhdHVzLWNvbnRhaW5lcntcblxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGZ1Y2hzaWE7ICovXG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gICAgLyogaGVpZ2h0OiAzNTBweDsgKi9cbiAgICAvKiBncmlkLWF1dG8tZmxvdzogY29sdW1uOyAqL1xuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTsgKi9cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcblxufVxuXG4ub3ZlcmR1ZS10b2Rvcyxcbi5kdWUtc29vbi10b2Rvcyxcbi51cGNvbWluZy10b2Rvcyxcbi5jb21wbGV0ZS10b2Rvc3tcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogYm9yZGVyOiA0cHggc29saWQgZ29sZDsgKi9cbiAgICAvKiBoZWlnaHQ6IDMyMHB4OyAqL1xuICAgIC8qIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNTYsIDI1NSk7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgKi9cbiAgICBcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cblxuXG5cblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogYm9yZGVyOiA0cHggc29saWQgZ29sZDsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcbiAgICBcbiAgICBvdmVyZmxvdzogYXV0bztcblxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxuICAgIHBhZGRpbmc6IDVweCAyMHB4IDVweCAyMHB4O1xuXG59XG5cblxuLnNjcm9sbGFibGUtdG9kby1jb250YWluZXJ7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHJvdy1nYXA6IDEwcHg7XG4gICAgLyogaGVpZ2h0OiA0MDBweDsgKi9cbiAgICBncmlkLWF1dG8tZmxvdzogcm93OyAvKlRoaXMgd2FzIHdoYXQgaSB3YW50ZWQgdG8gZG8qL1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuXG4gICAgZ2FwOiA1cHg7XG4gICAgXG4gICAgLyogYm9yZGVyOiA0cHggc29saWQgYnJvd247ICovXG5cbn1cblxuLnllcy1idXR0b24sXG4ubm8tYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi55ZXMtYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE1LCAyNTUsIDAsIDAuNjUxKTtcbn1cblxuLm5vLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42NDQpO1xufVxuXG5cblxuXG5cblxuLm5vdGVzLWNvbGxlY3Rpb257XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287ICovXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGdhcDogMTVweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwxZnIpKTsgXG4gXG59XG5cblxuLm5vdGVzLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuXG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDExNiwgMTE2LCAxMTYsIDAuMjUpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgXG59XG5cbi5ub3RlLWRpc3BsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDAsIDcxLCAwLjY1MSk7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmciA0MHB4O1xuICAgIGdhcDogNXB4O1xuXG5cbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbn1cblxuLm5vdGUtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm5vdGUtZGVzYyB7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXG4gICAgaGVpZ2h0OiAyMzBweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG59XG5cblxuLm5vdGUtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuXG5cbi8qIEZPUk0gQlVUVE9OICovXG5cbi5mb3JtLWJ1dHRvbi1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNzBweDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgMCUgMCUgNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCA0OCwgOTIpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuXG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XG5ib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbmJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbi13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuYm9yZGVyLXJpZ2h0OiBub25lO1xuei1pbmRleDogMTtcbiAgICBcbn1cblxuLmZvcm0tYnV0dG9ue1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuXG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDgyLCA4MiwgODIsIDApO1xuICAgIC8qIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTsgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cblxuLmZvcm0tYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQ6IHJnYmEoODIsIDgyLCA4MiwgMC4zNDkpO1xufVxuXG4vKiBUT0RPIENSRUFUSU9OIEZPUk0gKi9cblxuXG4uZm9ybS1jb250YWluZXJ7XG5cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MjcpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogcGFkZGluZy10b3A6IDEwMHB4OyAqL1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgLyogcGFkZGluZy1ib3R0b206IDEwMHB4OyAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgei1pbmRleDogMjtcbiAgICBsZWZ0OiAwcHg7XG4gICAgaGVpZ2h0OiBtYXgoMzcwcHgsIDEwMCUpO1xuXG5cbn1cblxuLnNob3ctZm9ybXtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4udG9kby1jcmVhdGlvbi1mb3JtIHtcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjsgKi9cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICAvKiBoZWlnaHQ6IG1heCgzNzBweCwgMTAwJSk7ICovXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcblxuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDczKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgXG59XG5cbi50b2RvLWNyZWF0aW9uLWZvcm0gPiBmb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAqL1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuXG4jdG9kby1kYXRlLFxuI3Byb2plY3QtZGF0ZXtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgIFxufVxuXG5cbmZpZWxkc2V0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuXG4gICBcbn1cblxubGVnZW5kIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xufVxuXG5cblxuLmlucHV0LWNvbGxlY3Rpb257XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbnB1dC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5yYWRpby1pbnB1dC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiA1cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGFjY2VudC1jb2xvcjogdGVhbDtcbiAgICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XG59XG5cbi5yYWRpby1pbnB1dC1jb250YWluZXIgPiBkaXYge1xuICAgIFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogMWZyOyAqL1xuICAgIC8qIHBhZGRpbmc6IDVweCAwcHggNXB4IDBweDsgKi9cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAxZnI7XG4gICAganVzdGlmeS1pdGVtczogZW5kO1xuICAgIGdhcDogNXB4O1xuICAgIFxuICAgXG59XG5cblxuXG4ucmFkaW8taW5wdXQtY29udGFpbmVyID4gZGl2ID4gbGFiZWwge1xuICAgIFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICBcbn1cblxuXG5cblxuLmlucHV0LWNvbnRhaW5lciA+IGlucHV0IHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMHB4IDVweCAwcHggNXB4O1xuXG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTk2KTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTsgKi9cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXG59XG5cbi5pbnB1dC1jb250YWluZXIgPiB0ZXh0YXJlYSB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC8qIGhlaWdodDogMjVweDsgKi9cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNXB4IDVweCAwcHggNXB4O1xuXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5cblxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41OTYpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApOyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xufVxuXG4udG9kby1jcmVhdGlvbi10aXRsZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ucHJvamVjdC1jcmVhdGlvbi10aXRsZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbiN0b2RvLXByaW9yaXR5LFxuI3Byb2plY3QtcHJpb3JpdHkge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTsgKi9cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3RvZG8tcHJpb3JpdHk6aG92ZXIsXG4jcHJvamVjdC1wcmlvcml0eTpob3ZlcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUzKTtcbn1cblxuLmNyZWF0ZS1uZXctdG9kb3tcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBmb3Jlc3RncmVlbjsgKi9cbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2VsZWN0LWV4aXN0aW5nLXByb2plY3R7XG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgc2t5Ymx1ZTsgKi9cbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uY3JlYXRlLW5ldy1wcm9qZWN0e1xuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIGNyaW1zb247ICovXG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI3Byb2plY3QtY2hvaWNlcyB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAxMDUsIDk2LCAwLjc5NSk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgLyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7ICovXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpc3BsYXktZm9ybS1pdGVtc3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogNXB4O1xufVxuXG4jZm9ybS1zdWJtaXR7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMjEsIDAuNTQxKTtcblxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApOyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbiNmb3JtLXN1Ym1pdDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMjEsIDAuNzUzKTtcbn1cblxuXG4vKiBNb2JpbGUgdmVyc2lvbiAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIFxuXG4gICAgLmhhbWJ1cmdlci1tZW51IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAuaGFtYnVyZ2VyLW1lbnU6YWN0aXZle1xuXG5cbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUxNCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XG4gICAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIH1cblxuICAgIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAxZnIgNDBweDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzAwcHg7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICBcInRvcC1jb250YWluZXIgdG9wLWNvbnRhaW5lclwiIFxuICAgICAgICBcImRpc3BsYXktY29udGFpbmVyIGRpc3BsYXktY29udGFpbmVyXCJcbiAgICAgICAgXCJ0b2RvLWNvbnRhaW5lci1mb290ZXIgdG9kby1jb250YWluZXItZm9vdGVyXCI7XG4gICAgICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweDtcbiAgICBcbiAgICBcbiAgICBcbiAgICB9XG5cbiAgICAudG9wLWNvbnRhaW5lcntcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XG4gICAgfVxuXG4gICAgLmRpc3BsYXktY29udGFpbmVyLFxuICAgIC5jb2xsZWN0aW9uLWNvbnRhaW5lcntcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgLyogbWFyZ2luOiAwcHggNXB4IDBweCA1cHg7ICovXG4gICAgfVxuXG4gICAgLmRpc3BsYXktY29udGFpbmVye1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxuXG4gICAgXG5cbiAgICAubm90ZS1tZW51IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xuICAgICAgICBncmlkLXJvdzogMi8zO1xuICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgICAgICAvKiBoZWlnaHQ6IDkwJTsgKi9cbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDBweCAwcHggMTVweDtcbiAgICAgICAgLyogdG8gY29ycmVjdCBmb3IgbWFpbiBjb250YWluZXIgcGFkZGluZyAqL1xuICAgICAgICByaWdodDogLTVweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgIC8qIGJvcmRlcjogbm9uZTsgKi9cbiAgICAgICAgLyogYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ3Myk7ICovXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMjIpO1xuICAgIH1cblxuICAgIC5wcm9qZWN0LXRvZG8tY29udGFpbmVye1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgfVxuXG5cbiAgICAuYWxsLXRvZG9zLXRhYixcbiAgICAuYWxsLXByb2plY3RzLXRhYixcbiAgICAuYWxsLW5vdGVzLXRhYiB7XG5cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgLyogZm9udC1zaXplOiAxNXB4OyAqL1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLm1lbnUtYWN0aXZlIHsgLyp0cmlnZ2VycyB3aGVuIGhhbWJ1cmdlciBtZW51IGlzIGNsaWNrZWQqL1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtR0FBbUc7O0lBRW5HOzRGQUN3RjtBQUM1Rjs7O0FBR0E7SUFDSSxZQUFZO0FBQ2hCOzs7OztBQUtBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLFFBQVE7SUFD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UUFDYixtQkFBbUI7UUFDbkIscUJBQXFCOztJQUV6Qjs7SUFFQTs7O1FBR0ksZ0NBQWdDO1FBQ2hDLGtEQUFrRDtRQUNsRCw4QkFBOEI7UUFDOUIsc0NBQXNDO0lBQzFDOztJQUVBO1FBQ0ksNEJBQTRCO1FBQzVCLGFBQWE7UUFDYixpQ0FBaUM7UUFDakMsZ0NBQWdDO1FBQ2hDOzs7cURBRzZDO1FBQzdDLHdCQUF3Qjs7OztJQUk1Qjs7SUFFQTtRQUNJLGdDQUFnQztJQUNwQzs7SUFFQTs7UUFFSSxtQkFBbUI7UUFDbkIsNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7OztJQUlBO1FBQ0ksa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixZQUFZO1FBQ1osVUFBVTtRQUNWLGdDQUFnQztRQUNoQywwQ0FBMEM7UUFDMUMsV0FBVztRQUNYLDZDQUE2QztRQUM3QyxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLHNDQUFzQztRQUN0QyxnQ0FBZ0M7SUFDcEM7O0lBRUE7UUFDSSxTQUFTO0lBQ2I7OztJQUdBOzs7O1FBSUksbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixpQkFBaUI7O0lBRXJCOztJQUVBLGVBQWUsMENBQTBDO1FBQ3JELGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsNCw3OCk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxM2RlZywgcmdiYSgwLDQsNzgsMSkgMCUsIHJnYmEoMCw5NywxMDEsMSkgNDclLCByZ2JhKDAsMTA0LDEyNSwxKSAxMDAlKTtcXG5cXG4gICAgLyogYmFja2dyb3VuZDogcmdiKDIzOCwxNzQsMjAyKTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMzgsMTc0LDIwMiwxKSAwJSwgcmdiYSgxNDgsMTg3LDIzMywxKSAxMDAlKTsgKi9cXG59XFxuXFxuXFxudGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcblxcblxcblxcbi5tYWluLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyIDQwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0b3AtY29udGFpbmVyIHRvcC1jb250YWluZXJcXFwiIFxcbiAgICBcXFwibm90ZS1tZW51IGRpc3BsYXktY29udGFpbmVyXFxcIlxcbiAgICBcXFwidG9kby1jb250YWluZXItZm9vdGVyIHRvZG8tY29udGFpbmVyLWZvb3RlclxcXCI7XFxuXFxuICAgIFxcblxcbn1cXG5cXG5cXG4ubm90ZS1tZW51e1xcbiAgICBncmlkLWFyZWE6IG5vdGUtbWVudTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7ICovXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNnB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2cHggKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG5cXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDE1cHggMTVweCAwcHg7XFxufVxcblxcbi5ub3RlLW1lbnUgPiBkaXYgPiBoMSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4udGFiLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgcmVkOyAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiBcXG59XFxuXFxuLnRhYi1jb250YWluZXIgPiBkaXY6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hbGwtdG9kb3MtdGFiLFxcbi5hbGwtcHJvamVjdHMtdGFiLFxcbi5hbGwtbm90ZXMtdGFiIHtcXG5cXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgLyogcGFkZGluZy1sZWZ0OiAyMHB4OyAqL1xcbiAgICAvKiBmb250LXNpemU6IDE1cHg7ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG5cXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMzksIDEzOSwgMTM5LCAwLjI1KTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MTQpO1xcblxcbn1cXG5cXG5cXG4ubWVudS10YWItYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDIyMSwgMC4zNyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjQ3LCAyNTUsIDAuNTgyKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG4udG9wLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgZ3JpZC1hcmVhOiB0b3AtY29udGFpbmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbn1cXG5cXG4udG9wLWNvbnRhaW5lci1zcGFjaW5nIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmJyYW5kLWNvbnRhaW5lciB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MjMpO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuLmhhbWJ1cmdlci1tZW51IHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApOyAqL1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgZGlzcGxheTogbm9uZTsgLypkaXNwbGF5OiBibG9jayB3aGVuIGRpc3BsYXkgaXMgYmVsb3cgNjAwcHggKi8gXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSggMCwgMCwgMCwgMC4yNSApO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG5cXG5cXG5cXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMHB4O1xcblxcbiAgICBcXG59XFxuXFxuLmhhbWJ1cmdlci1tZW51ID4gaW1nIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5oYW1idXJnZXItbWVudSA+IGltZzpob3ZlciB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4uaGFtYnVyZ2VyLW1lbnUgPiBpbWc6YWN0aXZlIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi5kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgZ3JpZC1hcmVhOiBkaXNwbGF5LWNvbnRhaW5lcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTYwcHggMWZyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcXG5cXG5cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG5cXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJ0b2RvLWNvbnRhaW5lci10aXRsZVxcXCJcXG4gICAgXFxcImNvbGxlY3Rpb24tY29udGFpbmVyXFxcIjtcXG5cXG59XFxuXFxuXFxuXFxuXFxuXFxuLnRvZG8tY29udGFpbmVyLXRpdGxle1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IHRvZG8tY29udGFpbmVyLXRpdGxlO1xcbiAgICBcXG4gICAgXFxufVxcbi5wcmlvcml0eS1idXR0b25ze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFxufVxcblxcbi5wcmlvcml0eS1idXR0b25zID4gYnV0dG9uOmhvdmVyIHtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1OSk7XFxuXFxufVxcblxcblxcbi5oaWdoLXByaW9yaXR5LFxcbi5tZWRpdW0tcHJpb3JpdHksXFxuLmxvdy1wcmlvcml0eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya29saXZlZ3JlZW47XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUzKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hvc2VuLXByaW9yaXR5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE5OSwgMzMsIDAuNTYyKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGlnaC1wcmlvcml0eS1jaG9zZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAwLCAwKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubWVkaXVtLXByaW9yaXR5LWNob3NlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyNCwgMCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmxvdy1wcmlvcml0eS1jaG9zZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjE0LCAwKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGFiLXRpdGxle1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMik7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnRhYi10aXRsZSA+IGgxIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMik7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIC8qIG1hcmdpbi1ib3R0b206IDUwcHg7ICovXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG5cXG4udG9kby1jb250YWluZXItZm9vdGVye1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IHRvZG8tY29udGFpbmVyLWZvb3RlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVibHVlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxuXFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XFxufVxcblxcbi5saW5rLWNvbnRhaW5lciA+IGEge1xcblxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzIpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG59XFxuXFxuXFxuLyogVGhpcyBpcyB0aGUgdHJpY2t5IHBhcnQgKi9cXG4uY29sbGVjdGlvbi1jb250YWluZXJ7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgcmVkOyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtYXJlYTogY29sbGVjdGlvbi1jb250YWluZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMHB4IDEwcHg7XFxuICAgIFxcblxcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNTBweCwxZnIpKTsgKi9cXG5cXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG5cXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMzUwcHgpOyAqL1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjsgKi9cXG4gICAgLyogb3ZlcmZsb3cteTogYXV0bzsgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxuICAgIC8qIG9iamVjdC1maXQ6IGNvdmVyOyAqL1xcbiAgICBcXG5cXG59XFxuXFxuLmRpc3BsYXktZW1wdHkge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMik7XFxufVxcblxcbi8qIC52ZXJ0aWNhbC1zY3JvbGx7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibHVlO1xcbn0gKi9cXG5cXG4uc3RhdHVzLWNvbnRhaW5lcntcXG5cXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZnVjaHNpYTsgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGhlaWdodDogMzcwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuXFxuXFxuLnN0YXR1cy10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDEwcHg7XFxuICAgIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7ICovXFxufVxcblxcblxcblxcblxcbi5vdmVyZHVlLWNvbnRhaW5lcixcXG4uZHVlLXNvb24tY29udGFpbmVyLFxcbi51cGNvbWluZy1jb250YWluZXIsXFxuLmNvbXBsZXRlLWNvbnRhaW5lcntcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogYm9yZGVyOiA0cHggc29saWQgZ29sZDsgKi9cXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGluZGlnbzsgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICAgIFxcbiAgICBvdmVyZmxvdzogYXV0bztcXG5cXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuXFxuXFxuXFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICMwMDRhNTcwMDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgNXB4IDVweCAxMHB4ICMwMDNmNGEsXFxuICAgICAgICAgICAgICAgIGluc2V0IC01cHggLTVweCAxMHB4ICMwMDU1NjQ7XFxuXFxuXFxufVxcblxcblxcbi5vdmVyZHVlLWNvbnRhaW5lciA+IC5zY3JvbGxhYmxlLWNvbnRhaW5lciA+IC50b2RvLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA1LCA1MCwgNTAsIDAuMzI5KTtcXG59XFxuXFxuXFxuLmR1ZS1zb29uLWNvbnRhaW5lciA+IC5zY3JvbGxhYmxlLWNvbnRhaW5lciA+IC50b2RvLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuNDU5KTtcXG59XFxuXFxuXFxuLnVwY29taW5nLWNvbnRhaW5lciA+IC5zY3JvbGxhYmxlLWNvbnRhaW5lciA+IC50b2RvLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMCwgMTI4LCAwLjMwMSk7XFxufVxcblxcbi5jb21wbGV0ZS1jb250YWluZXIgPiAuc2Nyb2xsYWJsZS1jb250YWluZXIgPiAudG9kby1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC41MjEpO1xcbn1cXG5cXG5cXG4uc2Nyb2xsYWJsZS1jb250YWluZXJ7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGNvbHVtbi1nYXA6IDIwcHg7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47IC8qVGhpcyB3YXMgd2hhdCBpIHdhbnRlZCB0byBkbyovXFxuICAgIFxcbiAgICAvKiBib3JkZXI6IDRweCBzb2xpZCBicm93bjsgKi9cXG5cXG59XFxuXFxuLnRvZG8tY29udGFpbmVye1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMjIwcHg7XFxuXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIFxcbn1cXG5cXG4udG9kby10aXRsZS1kaXYge1xcblxcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG59XFxuXFxuXFxuLnRvZG8tZGVzYy1kaXYge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgKi9cXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApOyAqL1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAvKiBwYWRkaW5nLWJvdHRvbTogNXB4OyAqL1xcbn1cXG5cXG4udG9kby1kYXRlLWRpdixcXG4udG9kby1wcm9qZWN0LWRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4udG9kby1kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ3Myk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMjtcXG4gICAgbGVmdDogMDtcXG4gICAgXFxufVxcblxcbi50b2RvLWRpc3BsYXkge1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIC8qIGhlaWdodDogNTUwcHg7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICBcXG59XFxuXFxuLm1haW4tdG9kby1kaXNwbGF5IHtcXG5cXG4gICAgXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCAxZnIgMzBweCAzMHB4IDM1cHggNjBweCA2MHB4O1xcblxcbn1cXG5cXG5cXG4jdG9kby1kaXNwbGF5LXRpdGxlICB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC8qIGhlaWdodDogMzVweDsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyLCAyLCAyLCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG5cXG4jdG9kby1kaXNwbGF5LWRlc2Mge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSggMiwgMiwgMiwgMC4yNSApO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbiN0b2RvLWRpc3BsYXktZGF0ZSB7XFxuXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyLCAyLCAyLCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdG9kby1kaXNwbGF5LXJlbWluZC1pbiB7XFxuXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyLCAyLCAyLCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcblxcbn1cXG5cXG5cXG5cXG4jcHJvamVjdC1kaXNwbGF5LWNob2ljZXMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIC8qIGFwcGVhcmFuY2U6IG5vbmU7ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDIsIDIsIDIsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcblxcbi5maXJzdC1idXR0b24tY29udGFpbmVyLFxcbi5zZWNvbmQtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4uZmlyc3QtYnV0dG9uLWNvbnRhaW5lciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5maXJzdC1idXR0b24tY29udGFpbmVyID4gZGl2ID4gbGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuXFxuI3RvZG8tZGlzcGxheS1wcmlvcml0eSxcXG4jdG9kby1kaXNwbGF5LXN0YXR1cyAge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdG9kby1kaXNwbGF5LXByaW9yaXR5OmhvdmVyLFxcbiN0b2RvLWRpc3BsYXktc3RhdHVzOmhvdmVye1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTg5KTtcXG59XFxuXFxuXFxuI3RvZG8tdXBkYXRlLFxcbiN0b2RvLWRlbGV0ZSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuXFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIC8qIGJhY2tncm91bmQ6IHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMjUgKTsgKi9cXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgIFxcblxcbn1cXG5cXG5cXG4jdG9kby1kZWxldGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjY0NCk7XFxufVxcblxcbiN0b2RvLWRlbGV0ZTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuODYzKTtcXG59XFxuXFxuI3RvZG8tdXBkYXRle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwgMjU1LCAwLCAwLjY1MSk7XFxufVxcblxcbiN0b2RvLXVwZGF0ZTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDI1NSwgMCwgMC44OTcpO1xcbn1cXG5cXG5cXG4ucG9wLXVwLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NDUpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5wb3AtdXAge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyLCAyLCAyLCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmciA1MHB4O1xcbn1cXG5cXG4ucG9wLXVwLWNvbnRlbnQtZGl2e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBvcC11cC1idXR0b24tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG5cXG59XFxuXFxuLnBvcC11cC1idXR0b24tY29udGFpbmVyID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4ucHJvamVjdC1jb250YWluZXJ7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgXFxufVxcblxcblxcblxcbi5wcm9qZWN0LXRpdGxlLWRpdiB7XFxuXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgLyogbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4OyAqL1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcblxcbn1cXG5cXG5cXG4ucHJvamVjdC1kZXNjLWRpdiB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7ICovXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIC8qIHBhZGRpbmctYm90dG9tOiA1cHg7ICovXFxufVxcblxcbi5wcm9qZWN0LWRhdGUtZGl2e1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG5cXG5cXG5cXG4ucHJvamVjdC10b2RvLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDEyMiwgMTIyLCAwLjU4Mik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLnByb2plY3QtZGlzcGxheSB7XFxuXFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsIDAsIDEwMiwgMC43MDUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcblxcblxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApOyAqL1xcbiAgICBcXG4gICAgLyogaGVpZ2h0OiA3NTBweDsgKi9cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuOyAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcblxcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxze1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdC10aXRsZS11cGRhdGV7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG5cXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4jcHJvamVjdC1kZXNjLXVwZGF0ZSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcblxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcblxcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuXFxufVxcblxcbiNwcm9qZWN0LWRhdGUtdXBkYXRle1xcblxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcblxcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuXFxufVxcblxcblxcbiNwcm9qZWN0LXJlbWluZGVyLXVwZGF0ZXtcXG5cXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG5cXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcblxcbn1cXG5cXG4ucHJvamVjdC1idXR0b25zLW9uZSxcXG4ucHJvamVjdC1idXR0b25zLXR3b3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBnYXA6IDVweDtcXG4gICAgXFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbnMtb25lID4gZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9ucy1vbmUgPiBkaXYgPiBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICovXFxufVxcblxcblxcbi5wcm9qZWN0LWJ1dHRvbnMtb25lID4gZGl2ID4gYnV0dG9uLFxcbi5wcm9qZWN0LWJ1dHRvbnMtdHdvID4gYnV0dG9ue1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG5cXG4gICBwYWRkaW5nOiA1cHg7XFxuICAgYmFja2dyb3VuZDogcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4yNSApO1xcbiAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG4gICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG4gICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xcbiAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG5cXG4jcHJvamVjdC1wcmlvcml0eS11cGRhdGUsXFxuI3Byb2plY3Qtc3RhdHVzLXVwZGF0ZXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNwcm9qZWN0LXByaW9yaXR5LXVwZGF0ZTpob3ZlcixcXG4jcHJvamVjdC1zdGF0dXMtdXBkYXRlOmhvdmVye1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTg5KTtcXG59XFxuXFxuLnByb2plY3QtdG9kb3N7XFxuXFxuICBcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlYmx1ZTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICAvKiBkaXNwbGF5OiBncmlkOyAqL1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMWZyOyAqL1xcblxcblxcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAxNDAsIDAuMjUpO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG4gICAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApOyAqL1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMSwgMTE5LCAwLjc2KTsgKi9cXG5cXG59XFxuXFxuI3Byb2plY3QtZGVsZXRle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42NDQpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNwcm9qZWN0LXVwZGF0ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDI1NSwgMCwgMC42NTEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbiNwcm9qZWN0LWRlbGV0ZTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuODc3KTtcXG59XFxuXFxuI3Byb2plY3QtdXBkYXRlOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwgMjU1LCAwLCAwLjg3Nyk7XFxufVxcblxcbi5wcmlvcml0eS10aXRsZXtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi50b2RvLXByb2plY3Qtc3RhdHVzLXRpdGxle1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDEsIDExOSwgMC43Nik7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG5cXG4gICAgLyogYmFja2dyb3VuZDogcmdiYSgxMjksIDEyOSwgMTI5LCAwLjI1KTsgKi9cXG4gICAgLyogYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7ICovXFxuICAgIC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTsgKi9cXG4gICAgLyogLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcblxcbi50b2RvLWluLXByb2plY3QtY29udGFpbmVyIHtcXG5cXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDIyMHB4O1xcblxcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDgzLCA4MywgODMsIDAuMjUpO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRvZG8tc3RhdHVzLWNvbnRhaW5lcntcXG5cXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZnVjaHNpYTsgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gICAgLyogaGVpZ2h0OiAzNTBweDsgKi9cXG4gICAgLyogZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjsgKi9cXG4gICAgYmFja2dyb3VuZDogcmdiYSggMCwgMCwgMCwgMC4yNSApO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgLyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuXFxufVxcblxcbi5vdmVyZHVlLXRvZG9zLFxcbi5kdWUtc29vbi10b2RvcyxcXG4udXBjb21pbmctdG9kb3MsXFxuLmNvbXBsZXRlLXRvZG9ze1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBib3JkZXI6IDRweCBzb2xpZCBnb2xkOyAqL1xcbiAgICAvKiBoZWlnaHQ6IDMyMHB4OyAqL1xcbiAgICAvKiB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA1NiwgMjU1KTtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIFxcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cXG5cXG5cXG5cXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogYm9yZGVyOiA0cHggc29saWQgZ29sZDsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGluZGlnbzsgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICAgIFxcbiAgICBvdmVyZmxvdzogYXV0bztcXG5cXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nOiA1cHggMjBweCA1cHggMjBweDtcXG5cXG59XFxuXFxuXFxuLnNjcm9sbGFibGUtdG9kby1jb250YWluZXJ7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHJvdy1nYXA6IDEwcHg7XFxuICAgIC8qIGhlaWdodDogNDAwcHg7ICovXFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7IC8qVGhpcyB3YXMgd2hhdCBpIHdhbnRlZCB0byBkbyovXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXG4gICAgZ2FwOiA1cHg7XFxuICAgIFxcbiAgICAvKiBib3JkZXI6IDRweCBzb2xpZCBicm93bjsgKi9cXG5cXG59XFxuXFxuLnllcy1idXR0b24sXFxuLm5vLWJ1dHRvbntcXG4gICAgYmFja2dyb3VuZDogcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4yNSApO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnllcy1idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE1LCAyNTUsIDAsIDAuNjUxKTtcXG59XFxuXFxuLm5vLWJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNjQ0KTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLm5vdGVzLWNvbGxlY3Rpb257XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGluZGlnbzsgKi9cXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwxZnIpKTsgXFxuIFxcbn1cXG5cXG5cXG4ubm90ZXMtY29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG5cXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMTYsIDExNiwgMTE2LCAwLjI1KTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgXFxufVxcblxcbi5ub3RlLWRpc3BsYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAwLCA3MSwgMC42NTEpO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCAxZnIgNDBweDtcXG4gICAgZ2FwOiA1cHg7XFxuXFxuXFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG59XFxuXFxuLm5vdGUtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubm90ZS1kZXNjIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbn1cXG5cXG5cXG4ubm90ZS1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcblxcblxcbi8qIEZPUk0gQlVUVE9OICovXFxuXFxuLmZvcm0tYnV0dG9uLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDcwcHg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAwJSAwJSA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCA0OCwgOTIpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSggMCwgMCwgMCwgMC4yNSApO1xcbmJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbmJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG4td2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG5ib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuYm9yZGVyLXJpZ2h0OiBub25lO1xcbnotaW5kZXg6IDE7XFxuICAgIFxcbn1cXG5cXG4uZm9ybS1idXR0b257XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcblxcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDgyLCA4MiwgODIsIDApO1xcbiAgICAvKiBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTsgKi9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcblxcbi5mb3JtLWJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogcmdiYSg4MiwgODIsIDgyLCAwLjM0OSk7XFxufVxcblxcbi8qIFRPRE8gQ1JFQVRJT04gRk9STSAqL1xcblxcblxcbi5mb3JtLWNvbnRhaW5lcntcXG5cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTI3KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogcGFkZGluZy10b3A6IDEwMHB4OyAqL1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIC8qIHBhZGRpbmctYm90dG9tOiAxMDBweDsgKi9cXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgbGVmdDogMHB4O1xcbiAgICBoZWlnaHQ6IG1heCgzNzBweCwgMTAwJSk7XFxuXFxuXFxufVxcblxcbi5zaG93LWZvcm17XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi50b2RvLWNyZWF0aW9uLWZvcm0ge1xcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXFxuICAgIHdpZHRoOiAzMjBweDtcXG4gICAgXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjsgKi9cXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogaGVpZ2h0OiBtYXgoMzcwcHgsIDEwMCUpOyAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ3Myk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgXFxufVxcblxcbi50b2RvLWNyZWF0aW9uLWZvcm0gPiBmb3JtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGhlaWdodDogMzAwcHg7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbiN0b2RvLWRhdGUsXFxuI3Byb2plY3QtZGF0ZXtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgXFxufVxcblxcblxcbmZpZWxkc2V0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG5cXG4gICBcXG59XFxuXFxubGVnZW5kIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcXG59XFxuXFxuXFxuXFxuLmlucHV0LWNvbGxlY3Rpb257XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucmFkaW8taW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYWNjZW50LWNvbG9yOiB0ZWFsO1xcbiAgICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XFxufVxcblxcbi5yYWRpby1pbnB1dC1jb250YWluZXIgPiBkaXYge1xcbiAgICBcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7ICovXFxuICAgIC8qIHBhZGRpbmc6IDVweCAwcHggNXB4IDBweDsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogZW5kO1xcbiAgICBnYXA6IDVweDtcXG4gICAgXFxuICAgXFxufVxcblxcblxcblxcbi5yYWRpby1pbnB1dC1jb250YWluZXIgPiBkaXYgPiBsYWJlbCB7XFxuICAgIFxcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgIFxcbn1cXG5cXG5cXG5cXG5cXG4uaW5wdXQtY29udGFpbmVyID4gaW5wdXQge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweDtcXG5cXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU5Nik7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciA+IHRleHRhcmVhIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIC8qIGhlaWdodDogMjVweDsgKi9cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA1cHggNXB4IDBweCA1cHg7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTk2KTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXG59XFxuXFxuLnRvZG8tY3JlYXRpb24tdGl0bGUge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRpb24tdGl0bGUge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbiN0b2RvLXByaW9yaXR5LFxcbiNwcm9qZWN0LXByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4yNSApO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgLyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3RvZG8tcHJpb3JpdHk6aG92ZXIsXFxuI3Byb2plY3QtcHJpb3JpdHk6aG92ZXJ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NTMpO1xcbn1cXG5cXG4uY3JlYXRlLW5ldy10b2Rve1xcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBmb3Jlc3RncmVlbjsgKi9cXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNlbGVjdC1leGlzdGluZy1wcm9qZWN0e1xcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBza3libHVlOyAqL1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY3JlYXRlLW5ldy1wcm9qZWN0e1xcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBjcmltc29uOyAqL1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdC1jaG9pY2VzIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAxMDUsIDk2LCAwLjc5NSk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGlzcGxheS1mb3JtLWl0ZW1ze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI2Zvcm0tc3VibWl0e1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMjEsIDAuNTQxKTtcXG5cXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuI2Zvcm0tc3VibWl0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMjEsIDAuNzUzKTtcXG59XFxuXFxuXFxuLyogTW9iaWxlIHZlcnNpb24gKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBcXG5cXG4gICAgLmhhbWJ1cmdlci1tZW51IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLmhhbWJ1cmdlci1tZW51OmFjdGl2ZXtcXG5cXG5cXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MTQpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG4gICAgfVxcblxcbiAgICAubWFpbi1jb250YWluZXIge1xcbiAgICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyIDQwcHg7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzMDBweDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgXFxcInRvcC1jb250YWluZXIgdG9wLWNvbnRhaW5lclxcXCIgXFxuICAgICAgICBcXFwiZGlzcGxheS1jb250YWluZXIgZGlzcGxheS1jb250YWluZXJcXFwiXFxuICAgICAgICBcXFwidG9kby1jb250YWluZXItZm9vdGVyIHRvZG8tY29udGFpbmVyLWZvb3RlclxcXCI7XFxuICAgICAgICBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHg7XFxuICAgIFxcbiAgICBcXG4gICAgXFxuICAgIH1cXG5cXG4gICAgLnRvcC1jb250YWluZXJ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcXG4gICAgfVxcblxcbiAgICAuZGlzcGxheS1jb250YWluZXIsXFxuICAgIC5jb2xsZWN0aW9uLWNvbnRhaW5lcntcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAvKiBtYXJnaW46IDBweCA1cHggMHB4IDVweDsgKi9cXG4gICAgfVxcblxcbiAgICAuZGlzcGxheS1jb250YWluZXJ7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgXFxuXFxuICAgIC5ub3RlLW1lbnUge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICAgICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgICAgICAvKiBoZWlnaHQ6IDkwJTsgKi9cXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweCAwcHggMHB4IDE1cHg7XFxuICAgICAgICAvKiB0byBjb3JyZWN0IGZvciBtYWluIGNvbnRhaW5lciBwYWRkaW5nICovXFxuICAgICAgICByaWdodDogLTVweDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICAgIC8qIGJvcmRlcjogbm9uZTsgKi9cXG4gICAgICAgIC8qIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40NzMpOyAqL1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMyMik7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtdG9kby1jb250YWluZXJ7XFxuICAgICAgICBsZWZ0OiAwcHg7XFxuICAgIH1cXG5cXG5cXG4gICAgLmFsbC10b2Rvcy10YWIsXFxuICAgIC5hbGwtcHJvamVjdHMtdGFiLFxcbiAgICAuYWxsLW5vdGVzLXRhYiB7XFxuXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICAgICAgLyogZm9udC1zaXplOiAxNXB4OyAqL1xcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAubWVudS1hY3RpdmUgeyAvKnRyaWdnZXJzIHdoZW4gaGFtYnVyZ2VyIG1lbnUgaXMgY2xpY2tlZCovXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgdG9kb01vZHVsZSBmcm9tIFwiLi9jcmVhdGVUb2Rvc1wiO1xuXG5cblxuZnVuY3Rpb24gcHJvamVjdE1vZHVsZSAoKSB7XG5cbiAgICAvLyBGYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBwcm9qZWN0c1xuICAgIGZ1bmN0aW9uIHByb2plY3RGYWN0b3J5ICh0aXRsZSxkZXNjLGR1ZURhdGUscHJpb3JpdHkscmVtaW5kSW4sc3RhdHVzKXtcblxuXG4gICAgICAgIHJldHVybiB7dGl0bGUsZGVzYyxkdWVEYXRlLHByaW9yaXR5LHJlbWluZEluLHN0YXR1c31cbiAgICB9XG5cblxuICAgIC8vIFRoaXMgaXMgd2hlcmUgdW5zb3J0ZWQgcHJvamVjdCBhcnJheXMgYXJlIHN0b3JlZFxuICAgIGNvbnN0IHByb2plY3RBcnJheSA9IFtdO1xuXG5cblxuICAgIGZ1bmN0aW9uIGdldFN0b3JlZFByb2plY3RzICgpe1xuXG4gICAgICAgIGNvbnN0IHN0b3JlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlZFByb2plY3RzJyk7XG5cbiAgICAgICAgaWYoIXN0b3JlZFByb2plY3RzKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZVN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShzdG9yZWRQcm9qZWN0cyk7XG5cbiAgICAgICAgcGFyc2VTdG9yZWRQcm9qZWN0cy5mb3JFYWNoKHByb2plY3RzID0+IHtcbiAgICAgICAgICAgIHByb2plY3RBcnJheS5wdXNoKHByb2plY3RzKVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8vIGdldCBzdG9yZWQgcHJvamVjdHMgb24gYm9vdFxuICAgIGdldFN0b3JlZFByb2plY3RzKCk7XG5cbiAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3RvcmVkUHJvamVjdHMnKTtcblxuXG4gICAgLy8gRGVsZXRlIHRoaXMgaWYgdGhlcmUgZW5kcyB1cCBiZWluZyBhIHByb2JsZW1cbiAgICBmdW5jdGlvbiBjbGVhblVwUHJvamVjdHMgKCl7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHByb2plY3RBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblxuXG4gICAgICAgICAgICBpZiAoKCghcHJvamVjdEFycmF5W2luZGV4XS50aXRsZSkgJiYgXG4gICAgICAgICAgICAgICAgKCFwcm9qZWN0QXJyYXlbaW5kZXhdLmRlc2MpKXx8cHJvamVjdEFycmF5W2luZGV4XS5wcmlvcml0eSA9PT0gJ2hpZ2gnfHwgcHJvamVjdEFycmF5W2luZGV4XS5wcmlvcml0eSA9PT0gJ21lZGl1bScgfHwgcHJvamVjdEFycmF5W2luZGV4XS5wcmlvcml0eSA9PT0gJ2xvdycpIHtcblxuXG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKGluZGV4LDEpXG5cbiAgICAgICAgICAgICAgICAtLWluZGV4O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuXG4gICAgfVxuXG4gICAgLy8gY2xlYW4gdXAgZW1wdHkgcHJvamVjdHNcbiAgICBjbGVhblVwUHJvamVjdHMoKTtcbiAgICBcblxuICAgIGZ1bmN0aW9uIGxvY2FsU3RvcmFnZVVwZGF0ZSgpe1xuXG5cblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkUHJvamVjdHMnLEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpO1xuXG4gICAgfVxuXG5cblxuXG5cblxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCAodGl0bGUsZGVzYyxkdWVEYXRlLHByaW9yaXR5LHJlbWluZEluLHN0YXR1cyl7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeSh0aXRsZSxkZXNjLGR1ZURhdGUscHJpb3JpdHkscmVtaW5kSW4sc3RhdHVzKTsgLy9jaGFuZ2UgdGhpcyBsYXRlciBpZiB5b3UgbmVlZCB0b1xuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlVXBkYXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIC8vIDggaGlnaCBwcmlvcml0eVxuXG4gICAgLy8gY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgLy8gY29uc3QgZGF5ID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgLy8gY29uc3QgbW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuXG4gICAgLy8gY29uc3QgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAvLyBsZXQgcmVtaW5kID0gLTI7XG5cbiAgICAvLyBsZXQgcmVtaW5kMSA9IDA7XG5cbiAgICAvLyBmb3IgKGxldCBpbmRleCA9IDQ7IGluZGV4ID4gMDsgaW5kZXgtLSkge1xuXG4gICAgICAgIFxuXG4gICAgLy8gICAgIGNyZWF0ZVByb2plY3QoYHByb2plY3Qke2luZGV4fXRlc3RgLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyByZW1pbmR9LSR7bW9udGggKyByZW1pbmR9LSR7ZGF5ICsgcmVtaW5kfWAsYGhpZ2hgLHJlbWluZCwnY29tcGxldGUnKTtcblxuICAgIC8vICAgICBjcmVhdGVQcm9qZWN0KGBwcm9qZWN0JHtpbmRleH10ZXN0MmAsYGRlc2Mke2luZGV4fWAsYCR7eWVhciArIHJlbWluZH0tJHttb250aCArIHJlbWluZH0tJHtkYXkgKyByZW1pbmR9YCxgaGlnaGAscmVtaW5kK2luZGV4LCdwZW5kaW5nJyk7XG5cbiAgICAvLyAgICAgcmVtaW5kID0gcmVtaW5kICsgaW5kZXg7XG5cbiAgICAgICAgXG4gICAgLy8gfVxuXG5cbiAgICAvLyAvLyAxMCBsb3cgcHJpb3JpdHlcbiAgICAvLyBmb3IgKGxldCBpbmRleCA9IDY7IGluZGV4ID4gMDsgaW5kZXgtLSkge1xuXG4gICAgICAgIFxuXG4gICAgLy8gICAgIGNyZWF0ZVByb2plY3QoYHByb2plY3QgJHtpbmRleH1gLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyByZW1pbmQxfS0ke21vbnRoICsgcmVtaW5kMX0tJHtkYXkgKyByZW1pbmQxfWAsYGxvd2AscmVtaW5kMSwnY29tcGxldGUnKTtcbiAgICAvLyAgICAgY3JlYXRlUHJvamVjdChgcHJvamVjdCR7aW5kZXh9d3dgLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyByZW1pbmQxfS0ke21vbnRoICsgcmVtaW5kMX0tJHtkYXkgLSByZW1pbmQxfWAsYGxvd2AscmVtaW5kMSwncGVuZGluZycpO1xuICAgIC8vICAgICBjcmVhdGVQcm9qZWN0KGBwcm9qZWN0JHtpbmRleH11cGAsYGRlc2Mke2luZGV4fWAsYCR7eWVhciArIHJlbWluZDF9LSR7bW9udGggKyByZW1pbmQxfS0ke2RheSArIHJlbWluZDF9YCxgbG93YCxyZW1pbmQxLTEsJ3BlbmRpbmcnKTtcbiAgICAgICAgXG4gICAgLy8gICAgIHJlbWluZDEgPSByZW1pbmQxIC0gaW5kZXg7XG4gICAgLy8gfVxuXG5cblxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJvamVjdCAob2xkRGV0YWlscyxuZXdEZXRhaWxzKXtcblxuXG4gICAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xuXG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSBvbGREZXRhaWxzLnRpdGxlICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3QuZGVzYyA9PT0gb2xkRGV0YWlscy5kZXNjICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3QuZHVlRGF0ZSA9PT0gb2xkRGV0YWlscy5kdWVEYXRlICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3QucmVtaW5kSW4gPT09IG9sZERldGFpbHMucmVtaW5kSW4gJiYgXG4gICAgICAgICAgICAgICAgcHJvamVjdC5wcmlvcml0eSA9PT0gb2xkRGV0YWlscy5wcmlvcml0eSAmJiBcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnN0YXR1cyA9PT0gb2xkRGV0YWlscy5zdGF0dXMpIHtcblxuXG5cblxuICAgICAgICAgICAgICAgIHByb2plY3QudGl0bGUgPSBuZXdEZXRhaWxzLm5ld1RpdGxlO1xuICAgICAgICAgICAgICAgIHByb2plY3QuZGVzYyA9IG5ld0RldGFpbHMubmV3RGVzYztcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmR1ZURhdGUgPSBuZXdEZXRhaWxzLm5ld0R1ZTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnJlbWluZEluID0gbmV3RGV0YWlscy5uZXdSZW1pbmRlcjtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnByaW9yaXR5ID0gbmV3RGV0YWlscy5uZXdQcmlvcml0eTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnN0YXR1cyA9IG5ld0RldGFpbHMubmV3U3RhdHVzO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0IChvbGREZXRhaWxzKXtcblxuICAgICAgICB0b2RvTW9kdWxlLmRlbGV0ZVRvZG9PZlByb2plY3Qob2xkRGV0YWlscyk7XG5cblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuXG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0QXJyYXlbaW5kZXhdLnRpdGxlID09PSBvbGREZXRhaWxzLnRpdGxlICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3RBcnJheVtpbmRleF0uZGVzYyA9PT0gb2xkRGV0YWlscy5kZXNjICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3RBcnJheVtpbmRleF0uZHVlRGF0ZSA9PT0gb2xkRGV0YWlscy5kdWVEYXRlICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3RBcnJheVtpbmRleF0ucmVtaW5kSW4gPT09IG9sZERldGFpbHMucmVtaW5kSW4gJiYgXG4gICAgICAgICAgICAgICAgcHJvamVjdEFycmF5W2luZGV4XS5wcmlvcml0eSA9PT0gb2xkRGV0YWlscy5wcmlvcml0eSAmJiBcbiAgICAgICAgICAgICAgICBwcm9qZWN0QXJyYXlbaW5kZXhdLnN0YXR1cyA9PT0gb2xkRGV0YWlscy5zdGF0dXMpIHtcblxuXG4gICAgICAgICAgICAgICAgcHJvamVjdEFycmF5LnNwbGljZShpbmRleCwxKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuXG4gICAgfVxuXG4gXG5cbiAgICByZXR1cm4ge3Byb2plY3RBcnJheSxjcmVhdGVQcm9qZWN0LHVwZGF0ZVByb2plY3QsZGVsZXRlUHJvamVjdH07XG5cbn1cblxuY29uc3QgaW5pdGlhbGl6ZWRQcm9qZWN0TW9kdWxlID0gcHJvamVjdE1vZHVsZSgpO1xuXG4gICBcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVkUHJvamVjdE1vZHVsZTsiLCJcblxuZnVuY3Rpb24gdG9kb01vZHVsZSAoKXtcblxuICAgIC8vIEZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIG5vdGVzXG5cbiAgICBmdW5jdGlvbiB0b2RvRmFjdG9yeSAodGl0bGUsZGVzYyxkdWVEYXRlLHJlbWluZEluLHByaW9yaXR5LHN0YXR1cyxwcm9qZWN0KXtcblxuICAgICAgICAvLyB0b2RvXG4gICAgICAgIGlmKGR1ZURhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIHt0aXRsZSxkZXNjLGR1ZURhdGUscmVtaW5kSW4scHJpb3JpdHksc3RhdHVzLHByb2plY3R9XG4gICAgICAgIH1cbiAgICAgICAgLy8gbm90ZVxuICAgICAgICBpZighZHVlRGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4ge3RpdGxlLGRlc2N9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIFRoaXMgaXMgd2hlcmUgdW5zb3J0ZWQgdG9kbyBhcnJheXMgYXJlIHN0b3JlZFxuICAgIGNvbnN0IHRvZG9BcnJheSA9IFtdO1xuXG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0U3RvcmVkVG9kb3MgKCl7XG5cbiAgICAgICAgY29uc3Qgc3RvcmVkVG9kb3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkVG9kb3MnKTtcblxuICAgICAgICBpZighc3RvcmVkVG9kb3Mpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlU3RvcmVkVG9kb3MgPSBKU09OLnBhcnNlKHN0b3JlZFRvZG9zKTtcblxuICAgICAgICBwYXJzZVN0b3JlZFRvZG9zLmZvckVhY2godG9kb3MgPT4ge1xuICAgICAgICAgICAgdG9kb0FycmF5LnB1c2godG9kb3MpXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy8gZ2V0IHN0b3JlZCB0b2RvcyBvbiBib290XG4gICAgZ2V0U3RvcmVkVG9kb3MoKTtcblxuXG4gICAgZnVuY3Rpb24gY2xlYW5VcFRvZG9zICgpe1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b2RvQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG5cblxuICAgICAgICAgICAgaWYgKCgoIXRvZG9BcnJheVtpbmRleF0udGl0bGUpICYmIFxuICAgICAgICAgICAgICAgICghdG9kb0FycmF5W2luZGV4XS5kZXNjKSl8fHRvZG9BcnJheVtpbmRleF0ucHJpb3JpdHkgPT09ICdoaWdoJ3x8IHRvZG9BcnJheVtpbmRleF0ucHJpb3JpdHkgPT09ICdtZWRpdW0nIHx8IHRvZG9BcnJheVtpbmRleF0ucHJpb3JpdHkgPT09ICdsb3cnKSB7XG5cblxuXG4gICAgICAgICAgICAgICAgdG9kb0FycmF5LnNwbGljZShpbmRleCwxKVxuXG4gICAgICAgICAgICAgICAgLS1pbmRleDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2VVcGRhdGUoKTtcblxuICAgIH1cblxuICAgIC8vIGNsZWFuIHVwIGVtcHR5IHByb2plY3RzXG4gICAgY2xlYW5VcFRvZG9zKCk7XG5cblxuXG5cbiAgICBmdW5jdGlvbiBsb2NhbFN0b3JhZ2VVcGRhdGUoKXtcblxuXG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZFRvZG9zJyxKU09OLnN0cmluZ2lmeSh0b2RvQXJyYXkpKTtcblxuICAgIH1cblxuXG4gICAgLy8gdGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gY3JlYXRlIFRvZG9zXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9kbyAodGl0bGUsZGVzYyxkdWVEYXRlLHJlbWluZEluLHByaW9yaXR5LHN0YXR1cyxwcm9qZWN0KXtcbiAgICAgICAgY29uc3QgbmV3VG9EbyA9IHRvZG9GYWN0b3J5KHRpdGxlLGRlc2MsZHVlRGF0ZSxyZW1pbmRJbixwcmlvcml0eSxzdGF0dXMscHJvamVjdCk7XG4gICAgICAgIHRvZG9BcnJheS5wdXNoKG5ld1RvRG8pO1xuICAgICAgICBsb2NhbFN0b3JhZ2VVcGRhdGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgLy8gVGhpcyBtdXN0IGJlIGRlbGV0ZWQgbGF0ZXIgYXMgaXQgaXMgY3JlYXRlZCBwcmltYXJpbHkgZm9yIHRlc3RpbmdcblxuICAgIC8vIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgIC8vIGNvbnN0IGRheSA9IGN1cnJlbnREYXRlLmdldERhdGUoKTtcblxuICAgIC8vIGNvbnN0IG1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcblxuICAgIC8vIGNvbnN0IHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuXG5cbiAgICAvLyBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IDEwOyBpbmRleCsrKSB7XG5cbiAgICAvLyAgICAgY3JlYXRlVG9kbyhgdGl0bGUke2luZGV4fWAsYGRlc2Mke2luZGV4fWAsYCR7eWVhciArIGluZGV4fS0ke21vbnRoICsgaW5kZXh9LSR7ZGF5ICsgaW5kZXh9YCxpbmRleCxgaGlnaGAsYHBlbmRpbmdgLCdwcm9qZWN0IDInKTtcblxuICAgIC8vICAgICBjcmVhdGVUb2RvKGB0aXRsZSR7aW5kZXh9YCxgZGVzYyR7aW5kZXh9YCxgJHt5ZWFyICsgaW5kZXh9LSR7bW9udGggKyBpbmRleH0tJHtkYXkgKyBpbmRleH1gLGluZGV4LGBsb3dgLGBwZW5kaW5nYCwncHJvamVjdCAyJyk7XG5cbiAgICAvLyAgICAgY3JlYXRlVG9kbyhgdGl0bGUke2luZGV4fWAsYGRlc2Mke2luZGV4fWApO1xuXG5cbiAgIFxuICAgICAgICBcbiAgICAvLyB9XG5cbiAgICAvLyBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IDU7IGluZGV4KyspIHtcblxuICAgIC8vICAgICBjcmVhdGVUb2RvKGB0aXRsZSR7aW5kZXh9YCxgZGVzYyR7aW5kZXh9YCxgJHt5ZWFyICsgaW5kZXh9LSR7bW9udGggKyBpbmRleH0tJHtkYXkgKyBpbmRleH1gLGluZGV4LGBoaWdoYCxgY29tcGxldGVgLCdwcm9qZWN0MXRlc3QnKTtcblxuICAgIC8vICAgICBjcmVhdGVUb2RvKGB0aXRsZSR7aW5kZXh9YCxgZGVzYyR7aW5kZXh9YCxgJHt5ZWFyICsgaW5kZXh9LSR7bW9udGggKyBpbmRleH0tJHtkYXkgKyBpbmRleH1gLGluZGV4LGBtZWRpdW1gLGBwZW5kaW5nYCwncHJvamVjdDF0ZXN0Jyk7XG5cbiAgIFxuICAgICAgICBcbiAgICAvLyB9XG5cbiAgICAvLyBsb2NhbFN0b3JhZ2VVcGRhdGUoKTtcbiAgICAvLyBsb2NhbFN0b3JhZ2VVcGRhdGUoKTtcblxuICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzdG9yZWRUb2RvcycpO1xuICAgIFxuICAgIC8vIG9sZERldGFpbHNcbiAgICAvLyBuZXdEZXRhaWxzXG4gICAgLy8gbmV3VGl0bGUsbmV3RGVzYyxuZXdEdWVEYXRlLG5ld1JlbWluZEluLG5ld1ByaW9yaXR5LG5ld1N0YXR1cyxuZXdQcm9qZWN0XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUb2RvIChvbGREZXRhaWxzLG5ld0RldGFpbHMpe1xuXG4gICAgICAgIHRvZG9BcnJheS5mb3JFYWNoKHRvZG8gPT4ge1xuXG5cbiAgICAgICAgICAgIGlmICh0b2RvLnRpdGxlID09PSBvbGREZXRhaWxzLnRpdGxlICYmIFxuICAgICAgICAgICAgICAgIHRvZG8uZGVzYyA9PT0gb2xkRGV0YWlscy5kZXNjICYmIFxuICAgICAgICAgICAgICAgIHRvZG8uZHVlRGF0ZSA9PT0gb2xkRGV0YWlscy5kdWVEYXRlICYmIFxuICAgICAgICAgICAgICAgIHRvZG8ucmVtaW5kSW4gPT09IG9sZERldGFpbHMucmVtaW5kSW4gJiYgXG4gICAgICAgICAgICAgICAgdG9kby5wcmlvcml0eSA9PT0gb2xkRGV0YWlscy5wcmlvcml0eSAmJiBcbiAgICAgICAgICAgICAgICB0b2RvLnN0YXR1cyA9PT0gb2xkRGV0YWlscy5zdGF0dXMgJiYgXG4gICAgICAgICAgICAgICAgdG9kby5wcm9qZWN0ID09PSBvbGREZXRhaWxzLnByb2plY3QpIHtcblxuXG4gICAgICAgICAgICAgICAgdG9kby50aXRsZSA9IG5ld0RldGFpbHMubmV3VGl0bGU7XG4gICAgICAgICAgICAgICAgdG9kby5kZXNjID0gbmV3RGV0YWlscy5uZXdEZXNjO1xuICAgICAgICAgICAgICAgIHRvZG8uZHVlRGF0ZSA9IG5ld0RldGFpbHMubmV3RHVlO1xuICAgICAgICAgICAgICAgIHRvZG8ucmVtaW5kSW4gPSBuZXdEZXRhaWxzLm5ld1JlbWluZGVyO1xuICAgICAgICAgICAgICAgIHRvZG8ucHJpb3JpdHkgPSBuZXdEZXRhaWxzLm5ld1ByaW9yaXR5O1xuICAgICAgICAgICAgICAgIHRvZG8uc3RhdHVzID0gbmV3RGV0YWlscy5uZXdTdGF0dXM7XG4gICAgICAgICAgICAgICAgdG9kby5wcm9qZWN0ID0gbmV3RGV0YWlscy5uZXdQcm9qZWN0O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuXG4gICAgfVxuXG5cblxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVG9kbyAob2xkRGV0YWlscyl7XG5cblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdG9kb0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuXG5cbiAgICAgICAgICAgIGlmICh0b2RvQXJyYXlbaW5kZXhdLnRpdGxlID09PSBvbGREZXRhaWxzLnRpdGxlICYmIFxuICAgICAgICAgICAgICAgIHRvZG9BcnJheVtpbmRleF0uZGVzYyA9PT0gb2xkRGV0YWlscy5kZXNjICYmIFxuICAgICAgICAgICAgICAgIHRvZG9BcnJheVtpbmRleF0uZHVlRGF0ZSA9PT0gb2xkRGV0YWlscy5kdWVEYXRlICYmIFxuICAgICAgICAgICAgICAgIHRvZG9BcnJheVtpbmRleF0ucmVtaW5kSW4gPT09IG9sZERldGFpbHMucmVtaW5kSW4gJiYgXG4gICAgICAgICAgICAgICAgdG9kb0FycmF5W2luZGV4XS5wcmlvcml0eSA9PT0gb2xkRGV0YWlscy5wcmlvcml0eSAmJiBcbiAgICAgICAgICAgICAgICB0b2RvQXJyYXlbaW5kZXhdLnN0YXR1cyA9PT0gb2xkRGV0YWlscy5zdGF0dXMgJiYgXG4gICAgICAgICAgICAgICAgdG9kb0FycmF5W2luZGV4XS5wcm9qZWN0ID09PSBvbGREZXRhaWxzLnByb2plY3QpIHtcblxuXG4gICAgICAgICAgICAgICAgdG9kb0FycmF5LnNwbGljZShpbmRleCwxKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuXG4gICAgfVxuXG5cblxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVG9kb09mUHJvamVjdCAocHJvamVjdCl7XG5cblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdG9kb0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuXG5cbiAgICAgICAgICAgIGlmICh0b2RvQXJyYXlbaW5kZXhdLnByb2plY3QgPT09IHByb2plY3QudGl0bGUpIHtcblxuXG5cbiAgICAgICAgICAgICAgICB0b2RvQXJyYXkuc3BsaWNlKGluZGV4LDEpXG5cbiAgICAgICAgICAgICAgICAtLWluZGV4O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuXG4gICAgfVxuXG4gICAgXG5cbiAgICAvLyBFbmQgb2YgdGVzdCBvYmplY3RzXG5cbiAgICByZXR1cm4ge3RvZG9BcnJheSwgY3JlYXRlVG9kbywgdXBkYXRlVG9kbywgZGVsZXRlVG9kbywgZGVsZXRlVG9kb09mUHJvamVjdH07XG5cblxufVxuXG5cbmNvbnN0IGluaXRpYWxpemVkVG9kb01vZHVsZSA9IHRvZG9Nb2R1bGUoKTtcblxuXG4vLyBpbml0aWFsaXplZCB2ZXJzaW9uIGlzIHNlbnQgYmVjYXVzZSB0aGUgaXMgbm8gcmVhc29uIHRvIHJlLWluaXRpYWxpc2UgbGF0ZXIgb25cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVkVG9kb01vZHVsZTtcbiIsIi8vIEFsbCBET00gQWN0aXZpdGllcyBhcmUgY2VudHJhbGlzZWQgaGVyZSBleGNlcHQgRE9NIENyZWF0aW9uXG5cbmltcG9ydCB0b2RvTW9kdWxlIGZyb20gXCIuLi9jcmVhdGVUb2Rvc1wiO1xuXG5pbXBvcnQgcHJvamVjdE1vZHVsZSBmcm9tIFwiLi4vY3JlYXRlUHJvamVjdHNcIjtcblxuaW1wb3J0IG5vdGVzT2JqZWN0IGZyb20gXCIuLi90YWJPYmplY3RzL2FsbE5vdGVzVGFiXCI7XG5cblxuaW1wb3J0IHRvZG9PYmplY3QgZnJvbSBcIi4uL3RhYk9iamVjdHMvYWxsVG9kb3NUYWJcIjtcblxuaW1wb3J0IHByb2plY3RPYmplY3QgZnJvbSBcIi4uL3RhYk9iamVjdHMvYWxsUHJvamVjdHNUYWJcIjtcblxuaW1wb3J0IGZvcm1Eb21Nb2R1bGUgZnJvbSBcIi4uL2RvbUNyZWF0aW9uL2Zvcm1ET01DcmVhdGlvblwiO1xuXG5pbXBvcnQgY3JlYXRlVG9kb0RPTSBmcm9tIFwiLi4vZG9tQ3JlYXRpb24vYWxsVG9kb0RPTUNyZWF0aW9uXCI7XG5cbmltcG9ydCBjcmVhdGVQcm9qZWN0RE9NIGZyb20gXCIuLi9kb21DcmVhdGlvbi9wcm9qZWN0c0RPTUNyZWF0aW9uXCI7XG5cbmltcG9ydCBjcmVhdGVOb3Rlc0RPTSBmcm9tIFwiLi4vZG9tQ3JlYXRpb24vYWxsTm90ZXNET01DcmVhdGlvblwiO1xuXG5pbXBvcnQgcG9wdWxhdGVUb2RvQ29sbGVjdGlvbiBmcm9tIFwiLi4vZG9tQ3JlYXRpb24vcG9wdWxhdGVET01Ub2RvQ29sbGVjdGlvblwiO1xuXG5pbXBvcnQgYXBwZW5kUHJvamVjdE9iamVjdHMgZnJvbSBcIi4uL2RvbUNyZWF0aW9uL3BvcHVsYXRlRE9NUHJvamVjdENvbGxlY3Rpb25cIjtcblxuaW1wb3J0IGFwcGVuZE5vdGVzT2JqZWN0IGZyb20gXCIuLi9kb21DcmVhdGlvbi9wb3B1bGF0ZURPTU5vdGVDb2xsZWN0aW9uXCI7XG5cbmltcG9ydCB7IGNsaWNrZWRQcm9qZWN0IH0gZnJvbSBcIi4uL2RvbUNyZWF0aW9uL3BvcHVsYXRlRE9NUHJvamVjdENvbGxlY3Rpb25cIjtcblxuaW1wb3J0IGRpc3BsYXlQcm9qZWN0IGZyb20gXCIuLi9kb21DcmVhdGlvbi9kaXNwbGF5UHJvamVjdFwiO1xuXG5cbmxldCBtZW51SW5EaXNwbGF5ID0gJ3RvZG9zJ1xuXG5sZXQgcHJpb3JpdHlJbkRpc3BsYXkgPSAnSGlnaCdcblxuXG5mdW5jdGlvbiB1cGRhdGVEaXNwbGF5ICgpe1xuXG4gICAgaWYobWVudUluRGlzcGxheSA9PT0gJ3RvZG9zJyl7XG5cblxuICAgICAgICBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uKHByaW9yaXR5SW5EaXNwbGF5KTtcblxuICAgIH1cblxuICAgIGlmKG1lbnVJbkRpc3BsYXkgPT09ICdwcm9qZWN0cycpe1xuXG5cblxuICAgICAgICBhcHBlbmRQcm9qZWN0T2JqZWN0cyhwcmlvcml0eUluRGlzcGxheSk7XG5cbiAgICB9XG5cbiAgICBpZiAobWVudUluRGlzcGxheSA9PT0gJ25vdGVzJykge1xuXG5cbiAgICAgICAgXG4gICAgICAgIGFwcGVuZE5vdGVzT2JqZWN0KCk7XG5cbiAgICB9XG5cblxuICAgIGlmIChtZW51SW5EaXNwbGF5ID09PSAndG9kb3MnIHx8IG1lbnVJbkRpc3BsYXkgPT09ICdwcm9qZWN0cycpIHtcblxuICAgICAgICBjb25zdCBoaWdoUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaC1wcmlvcml0eScpO1xuICAgICAgICBjb25zdCBtZWRpdW1Qcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWRpdW0tcHJpb3JpdHknKTtcbiAgICAgICAgY29uc3QgbG93UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93LXByaW9yaXR5Jyk7XG5cblxuXG4gICAgICAgIGlmIChwcmlvcml0eUluRGlzcGxheSA9PT0gJ0hpZ2gnKSB7XG5cblxuICAgICAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bS1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbG93LXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpb3JpdHlJbkRpc3BsYXkgPT09ICdNZWRpdW0nKSB7XG5cblxuICAgICAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2gtcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lZGl1bS1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbG93LXByaW9yaXR5LWNob3NlbicpO1xuXG5cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaW9yaXR5SW5EaXNwbGF5PT09ICdMb3cnKSB7XG5cblxuICAgICAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2gtcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bS1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnbG93LXByaW9yaXR5LWNob3NlbicpO1xuXG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuICAgIFxufVxuXG5cblxuXG5mdW5jdGlvbiBkb21BY3Rpdml0aWVzTW9kdWxlICgpe1xuXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgXG5cbiAgICAgICAgaWYobWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51LWFjdGl2ZVwiKSl7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgfSlcblxuXG4gICAgLy8gaGFtYnVyZ2VyIGJ1dHRvblxuICAgIGNvbnN0IGhhbWJ1cmdlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXItbWVudScpO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlLW1lbnUnKTtcblxuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pXG5cblxuICAgIGhhbWJ1cmdlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZighbWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51LWFjdGl2ZVwiKSl7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51LWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYobWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51LWFjdGl2ZVwiKSl7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgfSlcblxuXG4gICAgLy8gRk9STSBBQ1RJVklUSUVTXG5cbiAgICAvLyBGT1JNIElOUFVUIEFDVElWSVRJRVMgQkVHSU4gSEVSRVxuXG5cbiAgICAvLyBmb3JtIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGVudHJ5Q3JlYXRpb25Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY3JlYXRpb24tZm9ybScpO1xuXG4gICAgLy8gdG9kbyBvciBub3RlIGJ1dHRvblxuXG4gICAgbGV0IGlzTm90ZSA9IHRydWU7XG5cbiAgICBjb25zdCBzZWxlY3RUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lzLXRvZG8nKTtcblxuICAgIGNvbnN0IHNlbGVjdE5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXMtbm90ZScpO1xuXG4gICAgY29uc3QgdG9kb0NyZWF0aW9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1uZXctdG9kbycpO1xuXG5cblxuXG4gICAgLy8gc2FtZSB2YXJpYWJsZSwgbmVlZCB0byByZWZhY3RvclxuICAgIGNvbnN0IHNlbGVjdEV4aXN0aW5nUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleGlzdGluZy1wcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBzZWxlY3ROZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBleGlzdGluZ1Byb2plY3RSYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleGlzdGluZy1wcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0UmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKTtcblxuXG5cblxuICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtZXhpc3RpbmctcHJvamVjdCcpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtbmV3LXByb2plY3QnKTtcblxuXG5cblxuICAgIC8vIFRvLWRvIGlucHV0c1xuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXRpdGxlJyk7XG5cbiAgICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRlc2MnKTtcblxuICAgIGNvbnN0IGVudHJ5VHlwZSA9IGlzTm90ZTtcblxuICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGF0ZScpO1xuXG4gICAgY29uc3QgdG9kb1JlbWluZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tcmVtaW5kLWluJyk7XG5cbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1wcmlvcml0eScpO1xuXG4gICAgXG5cblxuICAgIGNvbnN0IHRvZG9JbnB1dHMgPSBbdG9kb0RhdGUsdG9kb1JlbWluZGVyXTtcblxuXG5cbiAgICBjb25zdCBwcm9qZWN0c0Nob2ljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1jaG9pY2VzJyk7XG5cbiAgICAvLyBuZXcgcHJvamVjdCBpbnB1dHNcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0RGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRlc2MnKTtcblxuICAgIGNvbnN0IHByb2plY3REYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGF0ZScpO1xuXG4gICAgY29uc3QgcHJvamVjdFJlbWluZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtcmVtaW5kLWluJyk7XG5cblxuICAgIC8vIGlzIGEgYnV0dG9uXG4gICAgY29uc3QgcHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtcHJpb3JpdHknKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RJbnB1dHMgPSBbcHJvamVjdFRpdGxlLHByb2plY3REZXNjLHByb2plY3REYXRlLHByb2plY3RSZW1pbmRlcl07XG5cblxuICAgIHNlbGVjdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICB0b2RvQ3JlYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1mb3JtLWl0ZW1zJyk7XG5cbiAgICAgICAgdG9kb0lucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdEV4aXN0aW5nUHJvamVjdC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgc2VsZWN0TmV3UHJvamVjdC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2VsZWN0RXhpc3RpbmdQcm9qZWN0LmNoZWNrZWQgJiYgIXNlbGVjdE5ld1Byb2plY3QuY2hlY2tlZCkgIHtcbiAgICAgICAgICAgIHNlbGVjdEV4aXN0aW5nUHJvamVjdC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHNlbGVjdEV4aXN0aW5nUHJvamVjdC5jaGVja2VkKSB7XG4gICAgICAgICAgICBjaGVja2VkRXhpc3RpbmdQcm9qZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0TmV3UHJvamVjdC5jaGVja2VkKSB7XG4gICAgICAgICAgICBjaGVja2VkTmV3UHJvamVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlzTm90ZSA9IGZhbHNlO1xuXG4gICAgfSlcblxuICAgIHNlbGVjdE5vdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICB0b2RvQ3JlYXRpb25EaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1mb3JtLWl0ZW1zJyk7XG4gICAgICAgIGV4aXN0aW5nUHJvamVjdERpdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LWZvcm0taXRlbXMnKTtcbiAgICAgICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LWZvcm0taXRlbXMnKTtcblxuICAgICAgICBzZWxlY3ROZXdQcm9qZWN0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgc2VsZWN0RXhpc3RpbmdQcm9qZWN0LmNoZWNrZWQgPSBmYWxzZTtcblxuICAgICAgICB0b2RvSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvamVjdHNDaG9pY2VzLnJlbW92ZUF0dHJpYnV0ZSgncmVxdWlyZWQnKTtcblxuICAgICAgICBuZXdQcm9qZWN0SW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXNOb3RlPSB0cnVlO1xuICAgIH0pXG5cbiAgICAvLyBleGlzdGluZyBwcm9qZWN0IG9yIG5ldyBwcm9qZWN0XG5cbiAgICBsZXQgaXNOZXdQcm9qZWN0ID0gZmFsc2U7XG5cblxuXG4gICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGlzTmV3UHJvamVjdDtcblxuICAgIC8vIGV4aXN0aW5nIHByb2plY3QgaW5wdXRcblxuXG5cbiAgICBzZWxlY3RFeGlzdGluZ1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgIGNoZWNrZWRFeGlzdGluZ1Byb2plY3QoKTtcbiAgICAgICAgXG4gICAgfSk7XG5cblxuXG4gICAgc2VsZWN0TmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgY2hlY2tlZE5ld1Byb2plY3QoKTtcblxuICAgIH0pXG5cblxuICAgIGZ1bmN0aW9uIGNoZWNrZWRFeGlzdGluZ1Byb2plY3QgKCl7XG4gICAgICAgIGV4aXN0aW5nUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LWZvcm0taXRlbXMnKTtcbiAgICAgICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LWZvcm0taXRlbXMnKTtcblxuICAgICAgICBpc05ld1Byb2plY3QgPSBmYWxzZTtcblxuICAgICAgICBwcm9qZWN0c0Nob2ljZXMuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgIG5ld1Byb2plY3RJbnB1dHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrZWROZXdQcm9qZWN0ICgpe1xuICAgICAgICBcbiAgICAgICAgZXhpc3RpbmdQcm9qZWN0RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuICAgICAgICBuZXdQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuXG4gICAgICAgIGlzTmV3UHJvamVjdCA9IHRydWU7XG5cbiAgICAgICAgcHJvamVjdHNDaG9pY2VzLnJlbW92ZUF0dHJpYnV0ZSgncmVxdWlyZWQnKTtcblxuICAgICAgICBuZXdQcm9qZWN0SW5wdXRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cblxuICAgIC8vIHJlY2VpdmUgYWxsIGZvcm0gaW5wdXQgZGF0YVxuXG5cbiAgICBjb25zdCBmb3JtU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tc3VibWl0Jyk7XG5cblxuICAgIFxuXG5cbiAgICAvLyBjb25zdCB0ZXN0QXJyYXkgPSBbdG9kb1RpdGxlLHRvZG9EZXNjLGVudHJ5VHlwZSx0b2RvRGF0ZSx0b2RvUmVtaW5kZXIsdG9kb1ByaW9yaXR5LHByb2plY3RPcHRpb24scHJvamVjdHNDaG9pY2VzLHByb2plY3RUaXRsZSxwcm9qZWN0RGVzYyxwcm9qZWN0RGF0ZSxwcm9qZWN0UmVtaW5kZXIscHJvamVjdFByaW9yaXR5XTtcblxuXG4gICAgY29uc3QgYWxsRm9ybUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWlucHV0Jyk7XG4gICAgXG5cbiAgICBcblxuICAgIGZvcm1TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcblxuICAgICAgIFxuXG4gICAgICAgIC8vIGNsZWFyIGNvbG9yIG9uIHByaW9yaXR5IGJ1dHRvblxuICAgICAgICBcblxuICAgICAgICBjb25zdCByZXF1aXJlZElucHV0ID0gW107XG5cbiAgICAgICAgbGV0IHJlcXVpcmVkSW5wdXRGaWxsZWQgPSB0cnVlO1xuXG5cbiAgICAgICAgYWxsRm9ybUlucHV0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdyZXF1aXJlZCcpKSB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRJbnB1dC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2YgcmVxdWlyZWRJbnB1dCkge1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmKCFlYWNoLnZhbHVlKXtcbiAgICAgICAgICAgICAgICByZXF1aXJlZElucHV0RmlsbGVkID0gZmFsc2U7ICAgXG5cbiAgICAgICAgICAgICAgICBicmVhazsgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYocmVxdWlyZWRJbnB1dEZpbGxlZCl7XG5cbiAgICAgICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gaGlkZUZvcm0oKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIHRvZG8gd2l0aCBmb3JtXG5cbiAgICAgICAgICAgIGNvbnN0IHJlc2V0QXJyYXkgPSBbcHJvamVjdFRpdGxlLHByb2plY3REZXNjLHByb2plY3REYXRlLHByb2plY3RSZW1pbmRlcix0b2RvVGl0bGUsdG9kb0Rlc2MsdG9kb0RhdGUsdG9kb1JlbWluZGVyXTtcblxuICAgICAgICAgICAgY29uc3QgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi1jb250YWluZXInKTtcblxuICAgICAgICAgICAgLy8gdGFiQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS10YWItYWN0aXZlJylcbiAgICAgICAgICAgIC8vIH0pO1xuXG5cbiAgICAgICAgICAgIGlmKG5ld1Byb2plY3RSYWRpby5jaGVja2VkKXtcblxuXG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3RSZW1pbmRlci52YWx1ZSA8IDAgfHwgcHJvamVjdFJlbWluZGVyLnZhbHVlID4gMzApIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBoaWRlRm9ybSgpO1xuXG4gICAgICAgICAgICAgICAgdGFiQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtdGFiLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwcm9qZWN0TW9kdWxlLmNyZWF0ZVByb2plY3QocHJvamVjdFRpdGxlLnZhbHVlLHByb2plY3REZXNjLnZhbHVlLHByb2plY3REYXRlLnZhbHVlLHByb2plY3RQcmlvcml0eS52YWx1ZSxwcm9qZWN0UmVtaW5kZXIudmFsdWUsYFBlbmRpbmdgKTtcblxuXG4gICAgICAgICAgICAgICAgdG9kb01vZHVsZS5jcmVhdGVUb2RvKHRvZG9UaXRsZS52YWx1ZSx0b2RvRGVzYy52YWx1ZSx0b2RvRGF0ZS52YWx1ZSxOdW1iZXIodG9kb1JlbWluZGVyLnZhbHVlKSx0b2RvUHJpb3JpdHkudmFsdWUsYFBlbmRpbmdgLHByb2plY3RUaXRsZS52YWx1ZSk7XG5cblxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9ldmVyeXRpbWUgc3VibWl0IGJ1dHRvbiBpcyBjbGlja2VkIGZyZXNoIGRyb3Bkb3duIGlzIGNyZWF0ZWQgXG4gICAgICAgICAgICAgICAgZm9ybURvbU1vZHVsZS5leGlzdGluZ1Byb2plY3RPcHRpb25zKCk7XG5cbiAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0RE9NKCk7XG5cbiAgICAgICAgICAgICAgICBhbGxQcm9qZWN0c1RhYi5jbGFzc0xpc3QuYWRkKCdtZW51LXRhYi1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgIG1lbnVJbkRpc3BsYXkgPSAncHJvamVjdHMnO1xuXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlJbkRpc3BsYXkgPSBwcm9qZWN0UHJpb3JpdHkudmFsdWU7XG5cblxuICAgICAgICAgICAgICAgIHJlc2V0QXJyYXkuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcblxuIFxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY3JlYXRlIHRvLWRvcyBhbmQgbm90ZXNcblxuICAgICAgICAgICAgdG9kb01vZHVsZS5jcmVhdGVUb2RvKHRvZG9UaXRsZS52YWx1ZSx0b2RvRGVzYy52YWx1ZSx0b2RvRGF0ZS52YWx1ZSxOdW1iZXIodG9kb1JlbWluZGVyLnZhbHVlKSx0b2RvUHJpb3JpdHkudmFsdWUsYHBlbmRpbmdgLHByb2plY3RzQ2hvaWNlcy52YWx1ZSk7XG5cblxuICAgICAgICAgICAgLy9ldmVyeXRpbWUgc3VibWl0IGJ1dHRvbiBpcyBjbGlja2VkIGZyZXNoIGRyb3Bkb3duIGlzIGNyZWF0ZWQgXG4gICAgICAgICAgICBmb3JtRG9tTW9kdWxlLmV4aXN0aW5nUHJvamVjdE9wdGlvbnMoKTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdFRvZG8uY2hlY2tlZCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRvZG9SZW1pbmRlci52YWx1ZSA8IDAgfHwgdG9kb1JlbWluZGVyLnZhbHVlID4gMzApIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBoaWRlRm9ybSgpO1xuXG4gICAgICAgICAgICAgICAgdGFiQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtdGFiLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjcmVhdGVUb2RvRE9NKCk7XG5cbiAgICAgICAgICAgICAgICBhbGxUb2Rvc1RhYi5jbGFzc0xpc3QuYWRkKCdtZW51LXRhYi1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgIG1lbnVJbkRpc3BsYXkgPSAndG9kb3MnO1xuXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlJbkRpc3BsYXkgPSB0b2RvUHJpb3JpdHkudmFsdWU7XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVEaXNwbGF5KCk7XG5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgaWYgKHNlbGVjdE5vdGUuY2hlY2tlZCkge1xuXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgaGlkZUZvcm0oKTtcblxuICAgICAgICAgICAgICAgIHRhYkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXRhYi1hY3RpdmUnKVxuICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICBjcmVhdGVOb3Rlc0RPTSgpO1xuXG4gICAgICAgICAgICAgICAgYWxsTm90ZXNUYWIuY2xhc3NMaXN0LmFkZCgnbWVudS10YWItYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBtZW51SW5EaXNwbGF5ID0gJ25vdGVzJztcblxuICAgICAgICAgICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHJlc2V0QXJyYXkuZm9yRWFjaChpbnB1dCA9PiB7XG5cbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9XG5cblxuICAgICAgICAvLyBGT1JNIElOUFVUIEFDVElWSVRJRVMgRU5EIEhFUkVcbiAgICAgICAgXG5cblxuICAgIH0pO1xuXG5cblxuICAgIC8vIEZPUk0gQVBQRUFSQU5DRSBBQ1RJVklURVMgQkVHSU4gSEVSRVxuXG5cbiAgICBmdW5jdGlvbiBoaWRlRm9ybSAoKXtcblxuXG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1mb3JtJylcblxuICAgICAgICBcblxuICAgIH1cblxuXG4gICAgLy8gc3RvcCBldmVudCBidWJibGluZy5cbiAgICBlbnRyeUNyZWF0aW9uRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIH0pXG5cblxuICAgIGZvcm1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcblxuICAgICAgICBoaWRlRm9ybSgpO1xuICAgICAgICAgICAgXG4gICAgfSlcblxuICAgIGNvbnN0IGZvcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1idXR0b24nKTtcblxuICAgIGZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaG93LWZvcm0nKTtcblxuICAgICAgICBmb3JtRG9tTW9kdWxlLmV4aXN0aW5nUHJvamVjdE9wdGlvbnMoKTtcblxuICAgICAgICBpZihzZWxlY3ROb3RlLmNoZWNrZWQpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdFRvZG8uY2hlY2tlZCAmJiBzZWxlY3RFeGlzdGluZ1Byb2plY3QuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHNlbGVjdE5ld1Byb2plY3QuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChzZWxlY3ROZXdQcm9qZWN0LmNoZWNrZWQpe1xuXG4gICAgICAgICAgICBjaGVja2VkTmV3UHJvamVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoc2VsZWN0RXhpc3RpbmdQcm9qZWN0LmNoZWNrZWQpe1xuXG4gICAgICAgICAgICBjaGVja2VkRXhpc3RpbmdQcm9qZWN0KCk7XG4gICAgICAgIH1cblxuICAgIH0pXG5cblxuXG5cblxuICAgIFxuXG5cblxuXG5cblxuXG4gICAgY29uc3QgYWxsVG9kb3NUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXRvZG9zLXRhYicpO1xuXG4gICAgYWxsVG9kb3NUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgXG5cblxuXG4gICAgICAgIG1lbnVJbkRpc3BsYXkgPSAndG9kb3MnO1xuXG4gICAgICAgIGNyZWF0ZVRvZG9ET00oKTtcblxuICAgIH0pO1xuXG4gICAgY29uc3QgYWxsUHJvamVjdHNUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzLXRhYicpXG5cbiAgICBhbGxQcm9qZWN0c1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuXG5cbiAgICAgICAgbWVudUluRGlzcGxheSA9ICdwcm9qZWN0cyc7XG5cbiAgICAgICAgY3JlYXRlUHJvamVjdERPTSgpXG5cbiAgICB9KVxuXG5cbiAgICBjb25zdCBhbGxOb3Rlc1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtbm90ZXMtdGFiJyk7XG5cbiAgICBhbGxOb3Rlc1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuXG5cbiAgICAgICAgbWVudUluRGlzcGxheSA9ICdub3Rlcyc7XG5cbiAgICAgICAgY3JlYXRlTm90ZXNET00oKTtcblxuICAgIH0pXG5cblxuXG5cbiAgICBcblxufVxuXG5cbiAvLyBQUklPUklUWSBCVVRUT04gLSBUT0RPU1xuXG4gZnVuY3Rpb24gY2hhbmdlVG9kb1ByaW9yaXR5KCl7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2gtcHJpb3JpdHknKTtcbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWRpdW0tcHJpb3JpdHknKTtcbiAgICBjb25zdCBsb3dQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3ctcHJpb3JpdHknKTtcblxuICAgIGlmICghaGlnaFByaW9yaXR5QnV0dG9ufHwhbWVkaXVtUHJpb3JpdHlCdXR0b258fCFsb3dQcmlvcml0eUJ1dHRvbikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICBoaWdoUHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgICAgICAvLyBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYnV0dG9ucycpO1xuICBcbiAgICAgICAgLy8gcHJpb3JpdHlCdXR0b25zLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAvLyAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaG9zZW4tcHJpb3JpdHknKVxuICAgICAgICAvLyB9KTtcblxuICAgICAgICAvLyBoaWdoUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hvc2VuLXByaW9yaXR5Jyk7XG5cblxuICAgICAgICBoaWdoUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICBtZWRpdW1Qcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtZWRpdW0tcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbG93LXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgIHBvcHVsYXRlVG9kb0NvbGxlY3Rpb24oJ0hpZ2gnKTtcblxuICAgICAgICBwcmlvcml0eUluRGlzcGxheSA9ICdIaWdoJztcblxuXG4gICAgfSk7XG5cbiAgICBcblxuICAgIG1lZGl1bVByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgLy8gY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWJ1dHRvbnMnKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHByaW9yaXR5QnV0dG9ucy5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy8gICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2hvc2VuLXByaW9yaXR5JylcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy8gbWVkaXVtUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hvc2VuLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2gtcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgbWVkaXVtUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgIGxvd1ByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2xvdy1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uKCdNZWRpdW0nKTtcblxuICAgICAgICBwcmlvcml0eUluRGlzcGxheSA9ICdNZWRpdW0nO1xuXG4gICAgfSk7XG5cblxuICAgXG4gICAgbG93UHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgLy8gY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWJ1dHRvbnMnKTtcblxuICAgICAgICAvLyBwcmlvcml0eUJ1dHRvbnMucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2hvc2VuLXByaW9yaXR5JylcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy8gbG93UHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hvc2VuLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2gtcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgbWVkaXVtUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtLXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgIGxvd1ByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xvdy1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uKCdMb3cnKTtcblxuICAgICAgICBwcmlvcml0eUluRGlzcGxheSA9ICdMb3cnO1xuXG4gICAgfSk7XG4gICB9XG5cblxuXG5cbiAgIGZ1bmN0aW9uIGNoYW5nZVByb2plY3RQcmlvcml0eSgpe1xuICAgIGNvbnN0IGhpZ2hQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoLXByaW9yaXR5Jyk7XG4gICAgY29uc3QgbWVkaXVtUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVkaXVtLXByaW9yaXR5Jyk7XG4gICAgY29uc3QgbG93UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93LXByaW9yaXR5Jyk7XG5cbiAgICBpZiAoIWhpZ2hQcmlvcml0eUJ1dHRvbnx8IW1lZGl1bVByaW9yaXR5QnV0dG9ufHwhbG93UHJpb3JpdHlCdXR0b24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgaGlnaFByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgLy8gY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWJ1dHRvbnMnKTtcbiAgXG4gICAgICAgIC8vIHByaW9yaXR5QnV0dG9ucy5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy8gICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2hvc2VuLXByaW9yaXR5JylcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy8gaGlnaFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1wcmlvcml0eScpO1xuXG5cblxuXG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWdoLXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgIG1lZGl1bVByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bS1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICBsb3dQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdsb3ctcHJpb3JpdHktY2hvc2VuJyk7XG5cblxuXG4gICAgICAgIGFwcGVuZFByb2plY3RPYmplY3RzKCdIaWdoJyk7XG5cbiAgICAgICAgcHJpb3JpdHlJbkRpc3BsYXkgPSAnSGlnaCc7XG5cblxuICAgIH0pO1xuXG4gICAgXG5cbiAgICBtZWRpdW1Qcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1idXR0b25zJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBwcmlvcml0eUJ1dHRvbnMucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIC8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nob3Nlbi1wcmlvcml0eScpXG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vIG1lZGl1bVByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1wcmlvcml0eScpO1xuXG5cblxuICAgICAgICBoaWdoUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaC1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICBtZWRpdW1Qcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbG93LXByaW9yaXR5LWNob3NlbicpO1xuXG5cblxuICAgICAgICBhcHBlbmRQcm9qZWN0T2JqZWN0cygnTWVkaXVtJyk7XG5cbiAgICAgICAgcHJpb3JpdHlJbkRpc3BsYXkgPSAnTWVkaXVtJztcblxuICAgIH0pO1xuXG5cbiAgIFxuICAgIGxvd1ByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgIC8vIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1idXR0b25zJyk7XG5cbiAgICAgICAgLy8gcHJpb3JpdHlCdXR0b25zLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nob3Nlbi1wcmlvcml0eScpXG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vIGxvd1ByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1wcmlvcml0eScpO1xuXG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWdoLXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgIG1lZGl1bVByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bS1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICBsb3dQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsb3ctcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgYXBwZW5kUHJvamVjdE9iamVjdHMoJ0xvdycpO1xuXG4gICAgICAgIHByaW9yaXR5SW5EaXNwbGF5ID0gJ0xvdyc7XG5cbiAgICB9KTtcbiAgIH1cblxuXG4gICBmdW5jdGlvbiB1cGRhdGVUb2RvSXRlbSAob2JqZWN0KXtcblxuICAgICAgICBjb25zdCB0b2RvRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRpc3BsYXktY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaXNwbGF5Jyk7XG5cbiAgICAgICAgY29uc3QgdG9kb1VwZGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgIHRvZG9VcGRhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIGNvbnN0IG5ld1RvZG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRpc3BsYXktdGl0bGUnKVxuICAgICAgICBjb25zdCBuZXdUb2RvRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRpc3BsYXktZGVzYycpO1xuICAgICAgICBjb25zdCBuZXdUb2RvRHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGlzcGxheS1kYXRlJyk7XG4gICAgICAgIGNvbnN0IG5ld1RvZG9SZW1pbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRpc3BsYXktcmVtaW5kLWluJyk7XG4gICAgICAgIGNvbnN0IG5ld1RvZG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRpc3BsYXktcHJpb3JpdHknKTtcbiAgICAgICAgY29uc3QgbmV3VG9kb1N0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRpc3BsYXktc3RhdHVzJyk7XG4gICAgICAgIGNvbnN0IG5ld1RvZG9Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGlzcGxheS1jaG9pY2VzJyk7XG5cblxuICAgICAgICBjb25zdCBpbnB1dEFycmF5cyA9IFtuZXdUb2RvVGl0bGUudmFsdWUsbmV3VG9kb0Rlc2MudmFsdWUsbmV3VG9kb0R1ZS52YWx1ZSxuZXdUb2RvUmVtaW5kZXIudmFsdWUsbmV3VG9kb1ByaW9yaXR5LnZhbHVlLG5ld1RvZG9TdGF0dXMudmFsdWUsbmV3VG9kb1Byb2plY3QudmFsdWVdXG5cbiAgICAgICAgY29uc3QgZW1wdHlJbnB1dCA9IFtdXG5cbiAgICAgICAgaW5wdXRBcnJheXMuZm9yRWFjaChlbGVtZW50ID0+IHtcblxuICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZW1wdHlJbnB1dC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgaWYgKGVtcHR5SW5wdXQubGVuZ3RoID4gMCB8fCBuZXdUb2RvUmVtaW5kZXIudmFsdWUgPCAwIHx8IG5ld1RvZG9SZW1pbmRlci52YWx1ZSA+IDMwKSB7XG5cblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIFxuXG4gICAgICAgIGxldCBuZXdEZXRhaWxzID0ge1xuICAgICAgICAgICAgbmV3VGl0bGU6IG5ld1RvZG9UaXRsZS52YWx1ZSxcbiAgICAgICAgICAgIG5ld0Rlc2M6IG5ld1RvZG9EZXNjLnZhbHVlLFxuICAgICAgICAgICAgbmV3RHVlOiBuZXdUb2RvRHVlLnZhbHVlLFxuICAgICAgICAgICAgbmV3UmVtaW5kZXI6IG5ld1RvZG9SZW1pbmRlci52YWx1ZSxcbiAgICAgICAgICAgIG5ld1ByaW9yaXR5OiBuZXdUb2RvUHJpb3JpdHkudmFsdWUsXG4gICAgICAgICAgICBuZXdTdGF0dXM6IG5ld1RvZG9TdGF0dXMudmFsdWUsXG4gICAgICAgICAgICBuZXdQcm9qZWN0OiBuZXdUb2RvUHJvamVjdC52YWx1ZSxcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdG9kb01vZHVsZS51cGRhdGVUb2RvKG9iamVjdCxuZXdEZXRhaWxzKTtcblxuICAgICAgICBcblxuICAgICAgICAvLyB0aGlzIHJ1bnMgZXZlbiBpbiBhIG5vcm1hbCB0b2RvIHVwZGF0ZVxuXG4gICAgICAgIGlmIChtZW51SW5EaXNwbGF5ID09PSAncHJvamVjdHMnKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjbGlja2VkUHJvamVjdCkge1xuXG5cbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBnZXRMYXRlc3RQcm9qZWN0T2JqZWN0ID0gcHJvamVjdE9iamVjdCgpLnVucHJvY2Vzc2VkUHJvamVjdEFycmF5O1xuICAgIFxuXG4gICAgXG4gICAgICAgICAgICAgICAgbGV0IGxhdGVzdFByb2plY3QgPSAnJztcbiAgICBcbiAgICAgICAgICAgICAgICBnZXRMYXRlc3RQcm9qZWN0T2JqZWN0LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSBjbGlja2VkUHJvamVjdC50aXRsZSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QuZGVzYyA9PT0gY2xpY2tlZFByb2plY3QuZGVzYyAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QuZHVlRGF0ZSA9PT0gY2xpY2tlZFByb2plY3QuZHVlRGF0ZSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QucmVtaW5kSW4gPT09IGNsaWNrZWRQcm9qZWN0LnJlbWluZEluICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5wcmlvcml0eSA9PT0gY2xpY2tlZFByb2plY3QucHJpb3JpdHkgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnN0YXR1cyA9PT0gY2xpY2tlZFByb2plY3Quc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVzdFByb2plY3QgPSBwcm9qZWN0O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICAgICAgZGlzcGxheVByb2plY3QobGF0ZXN0UHJvamVjdClcbiAgICBcblxuICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIE5FRUQgVE8gRklYIFRISVNcblxuICAgICAgICBpZiAobWVudUluRGlzcGxheSA9PT0gJ3RvZG9zJykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwcmlvcml0eUluRGlzcGxheSA9IG5ld1RvZG9Qcmlvcml0eS52YWx1ZTtcblxuICAgICAgICAgICAgdXBkYXRlRGlzcGxheSgpO1xuICAgICAgICB9XG5cblxuICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIFxuICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRvZG9EaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pXG5cblxuXG4gICAgfVxuXG5cblxuXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVOb3RlSXRlbSAob2JqZWN0KXtcblxuICAgICAgICBjb25zdCB0b2RvRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRpc3BsYXktY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaXNwbGF5Jyk7XG5cbiAgICAgICAgY29uc3QgdG9kb1VwZGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXVwZGF0ZScpO1xuXG5cblxuXG5cbiAgICAgICAgdG9kb1VwZGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgY29uc3QgbmV3VG9kb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGlzcGxheS10aXRsZScpXG4gICAgICAgIGNvbnN0IG5ld1RvZG9EZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGlzcGxheS1kZXNjJyk7XG5cblxuXG4gICAgICAgIGNvbnN0IGlucHV0QXJyYXlzID0gW25ld1RvZG9UaXRsZS52YWx1ZSxuZXdUb2RvRGVzYy52YWx1ZV1cblxuICAgICAgICBjb25zdCBlbXB0eUlucHV0ID0gW11cblxuICAgICAgICBpbnB1dEFycmF5cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBlbXB0eUlucHV0LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgICAgICBpZiAoZW1wdHlJbnB1dC5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBcblxuICAgICAgICBsZXQgbmV3RGV0YWlscyA9IHtcbiAgICAgICAgICAgIG5ld1RpdGxlOiBuZXdUb2RvVGl0bGUudmFsdWUsXG4gICAgICAgICAgICBuZXdEZXNjOiBuZXdUb2RvRGVzYy52YWx1ZSxcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdG9kb01vZHVsZS51cGRhdGVUb2RvKG9iamVjdCxuZXdEZXRhaWxzKTtcblxuICAgICAgICBtZW51SW5EaXNwbGF5ID0gJ25vdGVzJ1xuXG4gICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcblxuICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIFxuICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRvZG9EaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pXG5cblxuXG4gICAgfVxuXG5cblxuXG5cblxuXG5cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RJdGVtIChwcm9qZWN0KXtcblxuXG4gICAgICAgIGNvbnN0IHByb2plY3REaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdG9kby1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRldGFpbHMnKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VXBkYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdXBkYXRlJyk7XG5cbiAgICAgICAgcHJvamVjdFVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgICAgIC8vIHByb2plY3Qtc3RhdHVzLXVwZGF0ZVxuXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlLXVwZGF0ZScpXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3REZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGVzYy11cGRhdGUnKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdER1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRhdGUtdXBkYXRlJyk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RSZW1pbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXJlbWluZGVyLXVwZGF0ZScpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1wcmlvcml0eS11cGRhdGUnKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXN0YXR1cy11cGRhdGUnKTtcblxuXG5cbiAgICAgICAgY29uc3QgaW5wdXRBcnJheXMgPSBbbmV3UHJvamVjdFRpdGxlLnZhbHVlLG5ld1Byb2plY3REZXNjLnZhbHVlLG5ld1Byb2plY3REdWUudmFsdWUsbmV3UHJvamVjdFJlbWluZGVyLnZhbHVlLG5ld1Byb2plY3RQcmlvcml0eS52YWx1ZSxuZXdQcm9qZWN0U3RhdHVzLnZhbHVlXVxuXG4gICAgICAgIGNvbnN0IGVtcHR5SW5wdXQgPSBbXVxuXG4gICAgICAgIGlucHV0QXJyYXlzLmZvckVhY2goZWxlbWVudCA9PiB7XG5cbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVtcHR5SW5wdXQucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG4gICAgICAgIGlmIChlbXB0eUlucHV0Lmxlbmd0aCA+IDAgfHwgbmV3UHJvamVjdFJlbWluZGVyLnZhbHVlIDwgMCB8fCBuZXdQcm9qZWN0UmVtaW5kZXIudmFsdWUgPiAzMCkge1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgICAgIGxldCBuZXdEZXRhaWxzID0ge1xuICAgICAgICAgICAgLy8gdXBkYXRlIHRoaXNcbiAgICAgICAgICAgIG5ld1RpdGxlOiBuZXdQcm9qZWN0VGl0bGUudmFsdWUsXG4gICAgICAgICAgICBuZXdEZXNjOiBuZXdQcm9qZWN0RGVzYy52YWx1ZSxcbiAgICAgICAgICAgIG5ld0R1ZTogbmV3UHJvamVjdER1ZS52YWx1ZSxcbiAgICAgICAgICAgIG5ld1JlbWluZGVyOiBuZXdQcm9qZWN0UmVtaW5kZXIudmFsdWUsXG4gICAgICAgICAgICBuZXdQcmlvcml0eTogbmV3UHJvamVjdFByaW9yaXR5LnZhbHVlLFxuICAgICAgICAgICAgbmV3U3RhdHVzOiBuZXdQcm9qZWN0U3RhdHVzLnZhbHVlLFxuICAgICAgICB9XG5cblxuICAgICAgICBwcm9qZWN0TW9kdWxlLnVwZGF0ZVByb2plY3QocHJvamVjdCxuZXdEZXRhaWxzKTtcblxuICAgICAgICBtZW51SW5EaXNwbGF5ID0gJ3Byb2plY3RzJ1xuXG4gICAgICAgIHByaW9yaXR5SW5EaXNwbGF5ID0gbmV3UHJvamVjdFByaW9yaXR5LnZhbHVlO1xuXG4gICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcblxuICAgICAgICBwcm9qZWN0RGlzcGxheUNvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0RGlzcGxheUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHByb2plY3REaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHByb2plY3REaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pXG5cblxuXG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIHBvcFVwZm9yRGVsZXRlKGRlbGV0ZU9iakZuKXtcbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHBvcFVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcFVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BvcC11cC1jb250YWluZXInKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmQocG9wVXBDb250YWluZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcG9wVXAuY2xhc3NMaXN0LmFkZCgncG9wLXVwJyk7XG4gICAgICAgICAgICBwb3BVcENvbnRhaW5lci5hcHBlbmQocG9wVXApO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcG9wVXBDb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcG9wVXBDb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoJ3BvcC11cC1jb250ZW50LWRpdicpXG4gICAgICAgICAgICAgICAgcG9wVXAuYXBwZW5kKHBvcFVwQ29udGVudERpdilcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3BVcENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgcG9wVXBDb250ZW50LnRleHRDb250ZW50ID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcz8nXG4gICAgICAgICAgICAgICAgICAgIHBvcFVwQ29udGVudERpdi5hcHBlbmQocG9wVXBDb250ZW50KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwb3AtdXAtYnV0dG9uLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIHBvcFVwLmFwcGVuZChidXR0b25Db250YWluZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHllc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICB5ZXNCdXR0b24udGV4dENvbnRlbnQgPSAnWWVzJztcbiAgICAgICAgICAgICAgICAgICAgeWVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3llcy1idXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZCh5ZXNCdXR0b24pO1xuXG4gICAgICAgICAgICAgICAgICAgIHllc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcFVwQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlT2JqRm4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgbm9CdXR0b24udGV4dENvbnRlbnQgPSAnTm8nO1xuICAgICAgICAgICAgICAgICAgICBub0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduby1idXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChub0J1dHRvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgbm9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3BVcENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuXG5cbiAgICB9XG5cblxuXG4gICAgXG5cblxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVG9kb0l0ZW0gKG9iamVjdCl7XG5cbiAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGlzcGxheScpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9EZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kZWxldGUnKTtcblxuICAgICAgICB0b2RvRGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVRvZG8oKXtcblxuICAgICAgICAgICAgICAgIHRvZG9Nb2R1bGUuZGVsZXRlVG9kbyhvYmplY3QpO1xuXG4gICAgICAgICAgICAgICAgdXBkYXRlRGlzcGxheSgpXG5cbiAgICAgICAgICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcG9wVXBmb3JEZWxldGUoZGVsZXRlVG9kbyk7XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRvZG9EaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RJdGVtIChvYmplY3Qpe1xuXG5cbiAgICAgICAgY29uc3QgcHJvamVjdERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10b2RvLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZGV0YWlscycpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3REZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1kZWxldGUnKTtcblxuICAgICAgICBcblxuICAgICAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0ICgpe1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdE1vZHVsZS5kZWxldGVQcm9qZWN0KG9iamVjdCk7XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVEaXNwbGF5KCk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0RGlzcGxheUNvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb3BVcGZvckRlbGV0ZShkZWxldGVQcm9qZWN0KTtcbiAgICAgICAgXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgcHJvamVjdERpc3BsYXlDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBwcm9qZWN0RGlzcGxheUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBwcm9qZWN0RGlzcGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG5cblxuICAgIC8vIHNlbmQgdG8gYWxsIHBvcHVsYXRlIG1vZHVsZXNcbiAgICBmdW5jdGlvbiBlbXB0eURpc3BsYXkoKXtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uQ29udGFpbmVySXRlbXMgPSBbXTtcblxuICAgICAgICBpZihjb2xsZWN0aW9uQ29udGFpbmVyKXtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25Db250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbkNvbnRhaW5lckl0ZW1zLnB1c2goZWxlbWVudClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY29sbGVjdGlvbkNvbnRhaW5lckl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3BsYXlFbXB0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlFbXB0eS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LWVtcHR5Jyk7XG4gICAgICAgICAgICAgICAgZGlzcGxheUVtcHR5LnRleHRDb250ZW50ID0gJ0VNUFRZJztcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uQ29udGFpbmVyLmFwcGVuZChkaXNwbGF5RW1wdHkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm90ZXNDb2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWNvbGxlY3Rpb24nKTtcbiAgICAgICAgY29uc3Qgbm90ZXNDb2xsZWN0aW9uSXRlbXMgPSBbXTtcblxuICAgICAgICBpZiAobm90ZXNDb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICBub3Rlc0NvbGxlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgbm90ZXNDb2xsZWN0aW9uSXRlbXMucHVzaChlbGVtZW50KVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChub3Rlc0NvbGxlY3Rpb25JdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBub3Rlc0NvbGxlY3Rpb24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzcGxheUVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGlzcGxheUVtcHR5LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktZW1wdHknKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5RW1wdHkudGV4dENvbnRlbnQgPSAnRU1QVFknO1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25Db250YWluZXIuYXBwZW5kKGRpc3BsYXlFbXB0eSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlEdXJhdGlvbihkYXRlKXtcblxuICAgICAgICBjb25zdCBzcGxpdERhdGUgPSBkYXRlLnNwbGl0KCctJyk7XG5cbiAgICAgICAgY29uc3QgbW9udGhBcnJheSA9IFsnSmFudWFyeScsJ0ZlYnJ1YXJ5JywnTWFyY2gnLCdBcHJpbCcsJ01heScsJ0p1bmUnLCdKdWx5JywnQXVndXN0JywnU2VwdGVtYmVyJywnT2N0b2JlcicsJ05vdmVtYmVyJywnRGVjZW1iZXInXTtcblxuICAgICAgICByZXR1cm4gYER1ZTogJHtOdW1iZXIoc3BsaXREYXRlWzJdKX0gJHttb250aEFycmF5W3NwbGl0RGF0ZVsxXS0xXX0gJHtzcGxpdERhdGVbMF19YDtcblxuICAgIH1cblxuICBcblxuICAgXG5cblxuXG5leHBvcnQgZGVmYXVsdCBkb21BY3Rpdml0aWVzTW9kdWxlO1xuXG5leHBvcnQge2NoYW5nZVRvZG9Qcmlvcml0eSwgY2hhbmdlUHJvamVjdFByaW9yaXR5LCB1cGRhdGVUb2RvSXRlbSwgdXBkYXRlUHJvamVjdEl0ZW0sIHVwZGF0ZU5vdGVJdGVtLCBkZWxldGVUb2RvSXRlbSwgZGVsZXRlUHJvamVjdEl0ZW0sZW1wdHlEaXNwbGF5LGRpc3BsYXlEdXJhdGlvbn07XG5cbiIsImltcG9ydCB0b2RvTW9kdWxlIGZyb20gXCIuLi9jcmVhdGVUb2Rvc1wiO1xuXG5pbXBvcnQgcHJvamVjdE1vZHVsZSBmcm9tIFwiLi4vY3JlYXRlUHJvamVjdHNcIjtcblxuZnVuY3Rpb24gc29ydGluZ01vZHVsZSAoKXtcblxuXG4gICAgIC8vIFNvIHRoYXQgaXQgZG9lcyBub3QgbWVzcyB3aXRoIHRoZSBvcmlnaW5hbCBhcnJheVxuXG4gICAgZnVuY3Rpb24gY2xvbmVPYmplY3QoKXtcblxuICAgICAgICBjb25zdCBwcm9qZWN0QXJyYXlSZWZlcmVuY2UgPSBwcm9qZWN0TW9kdWxlLnByb2plY3RBcnJheTtcblxuICAgICAgICBjb25zdCBjbG9uZVByb2plY3RBcnJheSA9IFtdO1xuXG5cbiAgICAgICAgY29uc3QgdG9kb0FycmF5UmVmZXJlbmNlID0gdG9kb01vZHVsZS50b2RvQXJyYXk7XG5cbiAgICAgICAgY29uc3QgY2xvbmVUb2RvQXJyYXkgPSBbXTtcbiAgICAgICAgXG5cbiAgICAgICAgdG9kb0FycmF5UmVmZXJlbmNlLmZvckVhY2godG9kb09iamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZWRUb0RvID0gT2JqZWN0LmFzc2lnbih7fSx0b2RvT2JqZWN0KTtcbiAgICAgICAgICAgIGNsb25lVG9kb0FycmF5LnB1c2goY2xvbmVkVG9Ebyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RBcnJheVJlZmVyZW5jZS5mb3JFYWNoKHByb2plY3RPYmplY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xvbmVkUHJvamVjdCA9IE9iamVjdC5hc3NpZ24oe30scHJvamVjdE9iamVjdCk7XG4gICAgICAgICAgICBjbG9uZVByb2plY3RBcnJheS5wdXNoKGNsb25lZFByb2plY3QpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIHJldHVybiB7Y2xvbmVQcm9qZWN0QXJyYXksY2xvbmVUb2RvQXJyYXl9XG5cblxuICAgIH1cblxuICAgIFxuXG4gICAgLy8gc29ydHMgdGhlIHRvIGRvcyBhY2NvcmRpbmcgdG8gdGhlIHByb2plY3QgbmFtZSBpcyBoYXMgYmVlbiBhc3NpZ25lZCB0b1xuICAgIC8vIFJlbmFtZSB0aGlzIHRvIHByb2plY3Qgc29ydGVyXG4gICAgZnVuY3Rpb24gc29ydEJ5UHJvamVjdE5hbWUoKXtcblxuXG4gICAgICAgIGNvbnN0IGNsb25lUHJvamVjdEFycmF5ID0gY2xvbmVPYmplY3QoKS5jbG9uZVByb2plY3RBcnJheVxuICAgICAgICBcbiAgICAgICAgY29uc3QgY2xvbmVUb2RvQXJyYXkgPSBjbG9uZU9iamVjdCgpLmNsb25lVG9kb0FycmF5XG5cbiAgICAgICAgbGV0IHByb2Nlc3NlZFByb2plY3RBcnJheUJ5TmFtZSA9IFtdO1xuXG4gICAgICAgIGNsb25lUHJvamVjdEFycmF5LmZvckVhY2gocHJvamVjdE9iamVjdCA9PiB7XG5cbiAgICAgICAgICAgIHByb2plY3RPYmplY3QudG9kb0NvbGxlY3Rpb24gPSBbXTtcblxuICAgICAgICAgICAgY2xvbmVUb2RvQXJyYXkuZm9yRWFjaCh0b2RvT2JqZWN0ID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0T2JqZWN0LnRpdGxlID09PSB0b2RvT2JqZWN0LnByb2plY3QpIHtcblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE9iamVjdC50b2RvQ29sbGVjdGlvbi5wdXNoKHRvZG9PYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwcm9jZXNzZWRQcm9qZWN0QXJyYXlCeU5hbWUucHVzaChwcm9qZWN0T2JqZWN0KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHJldHVybiB7cHJvY2Vzc2VkUHJvamVjdEFycmF5QnlOYW1lfTtcblxuICAgIH1cblxuXG5cblxuXG5cblxuXG4gICAgZnVuY3Rpb24gcHJpb3JpdHlTb3J0ZXIodW5wcm9jZXNzZWRBcnJheSl7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdGllcyA9IFsnSGlnaCcsJ01lZGl1bScsJ0xvdyddO1xuXG4gICAgICAgIGNvbnN0IG9iamVjdHNCeVByaW9yaXR5ID0ge0hpZ2g6W10sTWVkaXVtOltdLExvdzpbXX07XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHByaW9yaXRpZXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cbiAgICAgICAgICAgIHVucHJvY2Vzc2VkQXJyYXkuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QucHJpb3JpdHkgPT09IHByaW9yaXRpZXNbaW5kZXhdKXtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0c0J5UHJpb3JpdHlbcHJpb3JpdGllc1tpbmRleF1dLnB1c2gob2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iamVjdHNCeVByaW9yaXR5O1xuXG5cbiAgICB9XG5cblxuXG5cbiAgICBmdW5jdGlvbiBzb3J0RHVlRGF0ZSAoQXJyYXkpe1xuXG4gICAgICAgIC8vIFVzZSB0aGlzIHRvIHNvcnQgcHJvamVjdHMgYW5kIHRvZG9zXG5cbiAgICAgICAgLy8gc29ydHMgYXJyYXkgaW4gYXNjZW5kaW5nIG9yZGVyIGFjY29yZGluZyB0byBkdWUgZGF0ZVxuICAgICAgICBhc2NlbmRpbmdTb3J0KEFycmF5KTtcblxuICAgICAgICBjb25zdCBkdWVTb3J0ZWRBcnJheSA9IHtcbiAgICAgICAgICAgIG5vdGVzOltdLFxuICAgICAgICAgICAgb3ZlcmR1ZTpbXSxcbiAgICAgICAgICAgIGR1ZTpbXSxcbiAgICAgICAgICAgIHVwY29taW5nOltdLFxuICAgICAgICAgICAgY29tcGxldGU6W11cbiAgICAgICAgfTtcblxuICAgICAgICBBcnJheS5mb3JFYWNoKG9iamVjdCA9PiB7XG5cblxuICAgICAgICAgICAgLy8gTm90ZXMgLSB0byBiZSBpc29sYXRlZCAgICAgICAgICAgXG4gICAgICAgICAgICBpZighb2JqZWN0LmR1ZURhdGUpe1xuXG4gICAgICAgICAgICAgICAgZHVlU29ydGVkQXJyYXkubm90ZXMucHVzaChvYmplY3QpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDb21wbGV0ZVxuICAgICAgICAgICAgaWYob2JqZWN0LnN0YXR1cyA9PT0gJ0NvbXBsZXRlJyl7XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBkdWVTb3J0ZWRBcnJheS5jb21wbGV0ZS5wdXNoKG9iamVjdCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE92ZXJkdWVcbiAgICAgICAgICAgIGlmKChvYmplY3QuZHVyYXRpb25MZWZ0LmRheUxlZnQpIDwgMCl7XG5cbiAgICAgICAgICAgICAgICBkdWVTb3J0ZWRBcnJheS5vdmVyZHVlLnB1c2gob2JqZWN0KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEdWVcbiAgICAgICAgICAgIGlmICgoKG9iamVjdC5kdXJhdGlvbkxlZnQuZGF5TGVmdCkgPD0gb2JqZWN0LnJlbWluZEluKSAmJiAoKG9iamVjdC5kdXJhdGlvbkxlZnQuZGF5TGVmdCkgPj0gMCkpe1xuXG4gICAgICAgICAgICAgICAgZHVlU29ydGVkQXJyYXkuZHVlLnB1c2gob2JqZWN0KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBjb21pbmdcbiAgICAgICAgICAgIGlmKChvYmplY3QuZHVyYXRpb25MZWZ0LmRheUxlZnQpID4gb2JqZWN0LnJlbWluZEluKXtcblxuICAgICAgICAgICAgICAgIGR1ZVNvcnRlZEFycmF5LnVwY29taW5nLnB1c2gob2JqZWN0KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG5cblxuICAgICAgICAgICAgXG4gICAgICAgIHJldHVybiBkdWVTb3J0ZWRBcnJheTsgICAgXG4gICAgIFxuXG4gICAgfVxuXG5cblxuICAgIC8vIFNvcnRzIG9iamVjdHMgaW4gQXJyYXkgdG8gYXNjZW5kaW5nIG9yZGVyIGFjY29yZGluZyB0byBkdWUgZGF0ZVxuICAgIGZ1bmN0aW9uIGFzY2VuZGluZ1NvcnQgKEFycmF5KXtcblxuICAgICAgICAvLyBBc3NpZ24gZHVyYXRpb24gbGVmdFxuICAgICAgICBBcnJheS5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXRPYmplY3REdWVEYXRlID0gaW50ZXJ2YWwob2JqZWN0LmR1ZURhdGUpO1xuICAgICAgICAgICAgb2JqZWN0LmR1cmF0aW9uTGVmdCA9IGZvcm1hdE9iamVjdER1ZURhdGU7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgY29uc3QgZGF0ZUFycmF5ID0gW107XG4gICAgICAgIGNvbnN0IHNvcnRlZEFycmF5ID0gW107XG5cblxuICAgICAgICBBcnJheS5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICAvLyBvYmplY3QuZHVyYXRpb25MZWZ0LmRheUxlZnRcbiAgICAgICAgICAgIGRhdGVBcnJheS5wdXNoKG9iamVjdC5kdXJhdGlvbkxlZnQuZGF5TGVmdClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGF0ZUFycmF5LnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS1ifSk7XG5cbiAgICAgICAgZGF0ZUFycmF5LmZvckVhY2goZGF0ZSA9PiB7XG5cblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IEFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChkYXRlID09PSBBcnJheVtpbmRleF0uZHVyYXRpb25MZWZ0LmRheUxlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkQXJyYXkucHVzaChBcnJheVtpbmRleF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LnNwbGljZShpbmRleCwxKVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUHVzaCBzb3J0ZWQgYXJyYXkgdG8gb3JpZ2luYWwgYXJyYXlcbiAgICAgICAgc29ydGVkQXJyYXkuZm9yRWFjaChzb3J0ZWRPYmogPT4ge1xuICAgICAgICAgICAgQXJyYXkucHVzaChzb3J0ZWRPYmopXG4gICAgICAgIH0pO1xuICAgICAgICBcblxuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBpbnRlcnZhbChkYXRlKXtcblxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudERheSA9IGN1cnJlbnREYXRlLmdldERhdGUoKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50TW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpKzE7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuXG5cblxuICAgICAgICAvLyBjb25zdCBmb3JtYXR0ZWRDdXJyZW50RGF0ZSA9IFt5ZWFyLG1vbnRoLGRheV07XG5cblxuICAgICAgICAvLyBbeXl5eSxtbSxkZF1cbiAgICAgICAgY29uc3Qgc3BsaXRPYmpEYXRlID0gZGF0ZS5zcGxpdCgnLScpO1xuXG4gICAgICAgIGNvbnN0IHllYXJzTGVmdCA9IHNwbGl0T2JqRGF0ZVswXSAtIGN1cnJlbnRZZWFyO1xuXG4gICAgICAgIGNvbnN0IG1vbnRoc0xlZnQgPSBzcGxpdE9iakRhdGVbMV0gLSBjdXJyZW50TW9udGg7XG5cbiAgICAgICAgLy8gY29uc3QgZGF5TGVmdCA9IHNwbGl0T2JqRGF0ZVsyXSAtIGN1cnJlbnREYXk7XG5cbiAgICAgICAgLy8gaWYgaXQgaXMgbmV4dCBtb250aCBvciBtb3JlLCBhZGQgMzAgZGF5cyBtdWx0aXBsaWVkIGJ5IHRoZSBudW1iZXIgb2YgZXh0cmEgbW9udGhzIChmb3IgbW9yZSBmaWx0ZXJpbmcgYWNjdXJhY3kpXG4gICAgICAgIGNvbnN0IGRheUxlZnQgPSAoMzAgKiAobW9udGhzTGVmdCkpICsgKHNwbGl0T2JqRGF0ZVsyXSAtIGN1cnJlbnREYXkpO1xuXG5cbiAgICAgICAgXG5cblxuICAgICAgICBjb25zdCBpbnRlcnZhbE9iaiA9IHtkYXlMZWZ0LG1vbnRoc0xlZnQseWVhcnNMZWZ0fTtcblxuXG5cbiAgICBcbiAgICAgICAgcmV0dXJuIGludGVydmFsT2JqXG4gICAgfVxuXG5cblxuICAgICAgICBcblxuICAgIGZ1bmN0aW9uIG5vdGVTb3J0ZXIodW5wcm9jZXNzZWRBcnJheSl7XG5cbiAgICAgICAgY29uc3Qgbm90ZU9iamVjdHMgPSBbXVxuXG4gICAgICAgIHVucHJvY2Vzc2VkQXJyYXkuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZighb2JqLmR1ZURhdGUpe1xuXG4gICAgICAgICAgICAgICAgbm90ZU9iamVjdHMucHVzaChvYmopXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbm90ZU9iamVjdHM7XG5cblxuICAgIH1cblxuXG5cbiAgIFxuXG4gICAgcmV0dXJuIHtjbG9uZU9iamVjdCxzb3J0QnlQcm9qZWN0TmFtZSxwcmlvcml0eVNvcnRlcixzb3J0RHVlRGF0ZSxub3RlU29ydGVyfVxuXG59XG5cbmNvbnN0IGluaXRpYWxpemVkU29ydFRvRG9Nb2R1bGUgPSBzb3J0aW5nTW9kdWxlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVkU29ydFRvRG9Nb2R1bGU7IiwiLy8gaW1wb3J0IHBvcHVsYXRlVG9kb0NvbGxlY3Rpb24gZnJvbSBcIi4vcG9wdWxhdGVET01Ub2RvQ29sbGVjdGlvblwiXG5cbmltcG9ydCBhcHBlbmROb3Rlc09iamVjdCBmcm9tIFwiLi9wb3B1bGF0ZURPTU5vdGVDb2xsZWN0aW9uXCI7XG5cbmZ1bmN0aW9uIGFsbE5vdGVET01Nb2R1bGUgKCl7XG5cbiAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktY29udGFpbmVyJyk7XG5cblxuXG5cbiAgICAvLyBtb3ZlIHRvIGRvbUFjdGl2aXR5XG4gICAgZnVuY3Rpb24gcmVtb3ZlRXhpc3RpbmdEaXNwbGF5RE9NICgpe1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1jb250YWluZXInKTtcblxuICAgICAgICBkaXNwbGF5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcblxuICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcmVtb3ZlRXhpc3RpbmdEaXNwbGF5RE9NKCk7XG5cblxuICAgIFxuXG5cbiAgICBcblxuXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0b2RvQ29udGFpbmVyVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItdGl0bGUnKTtcblxuICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kKHRvZG9Db250YWluZXJUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgdGFiVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0YWJUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YWItdGl0bGUnKTtcblxuICAgICAgICB0b2RvQ29udGFpbmVyVGl0bGUuYXBwZW5kKHRhYlRpdGxlKTtcblxuICAgICAgICAgICAgY29uc3QgdG9kb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICAgICAgICAgIHRvZG9IZWFkZXIudGV4dENvbnRlbnQgPSAnTm90ZXMnO1xuXG4gICAgICAgICAgICB0YWJUaXRsZS5hcHBlbmQodG9kb0hlYWRlcik7XG5cblxuICAgICAgICAgICAgY29uc3QgdG9kb1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICAgICAgdG9kb1BhcmFncmFwaC50ZXh0Q29udGVudCA9ICdZb3VyIGNvbGxlY3Rpb24gb2Ygbm90ZXMgYXJlIGRpc3BsYXllZCBoZXJlJztcblxuICAgICAgICAgICAgdGFiVGl0bGUuYXBwZW5kKHRvZG9QYXJhZ3JhcGgpO1xuXG4gICAgICAgIFxuXG5cblxuXG5cblxuICAgIFxuICAgIGNvbnN0IGNvbGxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbGxlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sbGVjdGlvbi1jb250YWluZXInKTtcblxuICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kKGNvbGxlY3Rpb25Db250YWluZXIpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhIHBvcHVsYXRlIG5vdGVzIG1vZHVsZVxuXG4gICAgICAgIC8vIENyZWF0ZSBpdCBoZXJlIGZpcnN0IHRoZW4gc2VuZCBpdCBzb21ld2hlcmUgZWxzZS5cbiAgICAgICAgYXBwZW5kTm90ZXNPYmplY3QoKTtcblxuICAgICAgICBcblxuXG5cblxuICAgICAgIFxuXG4gICAgXG4gICAgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgYWxsTm90ZURPTU1vZHVsZTsiLCJpbXBvcnQgcG9wdWxhdGVUb2RvQ29sbGVjdGlvbiBmcm9tIFwiLi9wb3B1bGF0ZURPTVRvZG9Db2xsZWN0aW9uXCI7XG5cbmltcG9ydCB7IGNoYW5nZVRvZG9Qcmlvcml0eSB9IGZyb20gXCIuLi9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXNcIjtcblxuZnVuY3Rpb24gYWxsVG9kb0RPTU1vZHVsZSAoKXtcblxuICAgIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1jb250YWluZXInKTtcblxuXG5cblxuICAgIC8vIG1vdmUgdG8gZG9tQWN0aXZpdHlcbiAgICBmdW5jdGlvbiByZW1vdmVFeGlzdGluZ0Rpc3BsYXlET00gKCl7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGRpc3BsYXlDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIFxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgfSk7XG5cbiAgICB9XG5cbiAgICByZW1vdmVFeGlzdGluZ0Rpc3BsYXlET00oKTtcblxuXG4gICAgXG5cblxuICAgIFxuXG5cbiAgICBjb25zdCB0b2RvQ29udGFpbmVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRvZG9Db250YWluZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lci10aXRsZScpO1xuXG4gICAgZGlzcGxheUNvbnRhaW5lci5hcHBlbmQodG9kb0NvbnRhaW5lclRpdGxlKTtcblxuICAgICAgICBjb25zdCB0YWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRhYlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RhYi10aXRsZScpO1xuXG4gICAgICAgIHRvZG9Db250YWluZXJUaXRsZS5hcHBlbmQodGFiVGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCB0b2RvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgICAgICAgICAgdG9kb0hlYWRlci50ZXh0Q29udGVudCA9ICdUby1kb3MnO1xuXG4gICAgICAgICAgICB0YWJUaXRsZS5hcHBlbmQodG9kb0hlYWRlcik7XG5cblxuICAgICAgICAgICAgY29uc3QgdG9kb1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICAgICAgdG9kb1BhcmFncmFwaC50ZXh0Q29udGVudCA9ICdZb3VyIGNvbGxlY3Rpb24gb2YgdG8tZG9zIGFyZSBkaXNwbGF5ZWQgaGVyZSc7XG5cbiAgICAgICAgICAgIHRhYlRpdGxlLmFwcGVuZCh0b2RvUGFyYWdyYXBoKTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgcHJpb3JpdHlCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWJ1dHRvbnMnKTtcblxuICAgICAgICB0b2RvQ29udGFpbmVyVGl0bGUuYXBwZW5kKHByaW9yaXR5QnV0dG9ucyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICAgICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kKGhpZ2hQcmlvcml0eSk7XG5cblxuICAgICAgICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG5cbiAgICAgICAgICAgIHByaW9yaXR5QnV0dG9ucy5hcHBlbmQobWVkaXVtUHJpb3JpdHkpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2xvdy1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kKGxvd1ByaW9yaXR5KTtcblxuICAgICAgICAgICAgXG5cblxuXG5cblxuICAgIFxuICAgIGNvbnN0IGNvbGxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbGxlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sbGVjdGlvbi1jb250YWluZXInKTtcblxuICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kKGNvbGxlY3Rpb25Db250YWluZXIpO1xuXG4gICAgcG9wdWxhdGVUb2RvQ29sbGVjdGlvbignSGlnaCcpO1xuXG4gICAgY2hhbmdlVG9kb1ByaW9yaXR5KCk7XG4gICAgXG4gICAgLy8gZG9tQWN0aW9uKClcblxuXG5cblxuXG4gICBcblxuXG4gICAgICAgXG5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG5cblxuXG4gICAgICAgIFxuXG5cblxuXG5cbiAgICBcbiAgICBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBhbGxUb2RvRE9NTW9kdWxlOyIsImltcG9ydCB7IHVwZGF0ZVByb2plY3RJdGVtLHVwZGF0ZVRvZG9JdGVtLCBkZWxldGVQcm9qZWN0SXRlbSxlbXB0eURpc3BsYXksIGRpc3BsYXlEdXJhdGlvbiB9IGZyb20gXCIuLi9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXNcIjtcblxuLy8gaW1wb3J0IGRpc3BsYXlUb2RvIGZyb20gXCIuL2Rpc3BsYXlUb2RvXCI7XG5cbmltcG9ydCBkaXNwbGF5VG9kb3NJblByb2plY3QgZnJvbSBcIi4vZGlzcGxheVRvZG9zSW5Qcm9qZWN0XCI7XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0IChwcm9qZWN0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0VG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRvZG8tY29udGFpbmVyJyk7XG5cbiAgICBpZiAoZ2V0UHJvamVjdFRvZG9Db250YWluZXIpIHtcblxuICAgICAgICBnZXRQcm9qZWN0VG9kb0NvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHByb2plY3RUb2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdG9kby1jb250YWluZXInKTtcblxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0VG9kb0NvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGlzcGxheScpO1xuICAgICAgICAgICAgcHJvamVjdFRvZG9Db250YWluZXIuYXBwZW5kKHByb2plY3REaXNwbGF5KVxuXG4gICAgICAgICAgICBwcm9qZWN0RGlzcGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIFxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgICAgICAgICAgcHJvamVjdERpc3BsYXkuYXBwZW5kKHByb2plY3RGb3JtKTtcblxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRldGFpbHMnKTtcblxuICAgICAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kKHByb2plY3REZXRhaWxzKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC10aXRsZS11cGRhdGUnKVxuXG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlSW5wdXQudmFsdWUgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IFRpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdFRpdGxlSW5wdXQpO1xuXG5cblxuXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcHJvamVjdERldGFpbHNMaW5lQnJlYWsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgIC8vIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazEpO1xuXG5cblxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWRlc2MtdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0lucHV0LnZhbHVlID0gcHJvamVjdC5kZXNjO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdERlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0lucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBEZXNjcmlwdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdERlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCc0Jyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnY29scycsJzQwJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERlc2NJbnB1dCk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgLy8gcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3REZXRhaWxzTGluZUJyZWFrMik7XG5cblxuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtZGF0ZS11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQudmFsdWUgPSBwcm9qZWN0LmR1ZURhdGU7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpXG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERhdGVJbnB1dCk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgLy8gcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3REZXRhaWxzTGluZUJyZWFrMyk7XG5cblxuXG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RSZW1pbmRJbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LXJlbWluZGVyLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnbnVtYmVyJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0UmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsJzAnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LnNldEF0dHJpYnV0ZSgnbWF4JywnMzAnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LnZhbHVlID0gcHJvamVjdC5yZW1pbmRJbjtcblxuICAgICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0UmVtaW5kSW5JbnB1dCk7XG5cbiAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcHJvamVjdERldGFpbHNMaW5lQnJlYWs0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgIC8vIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbnNPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0QnV0dG9uc09uZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ1dHRvbnMtb25lJyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3RCdXR0b25zT25lKVxuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5QnRuRGl2LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWJ1dHRvbi1kaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0QnV0dG9uc09uZS5hcHBlbmQocHJpb3JpdHlCdG5EaXYpXG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6J1xuICAgICAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdwcm9qZWN0LXByaW9yaXR5LXVwZGF0ZScpXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5EaXYuYXBwZW5kKHByaW9yaXR5TGFiZWwpXG4gICAgICAgICAgICAgICAgXG4gICAgXG5cblxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtcHJpb3JpdHktdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScscHJvamVjdC5wcmlvcml0eSk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnByaW9yaXR5O1xuXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5EaXYuYXBwZW5kKHByb2plY3RQcmlvcml0eUJ1dHRvbik7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc2VzIGZvciBkaWZmZXJlbnQgcHJpb3JpdGllcyAoZGlmZmVyZW50IGNvbG91cnMpXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9PT0gJ0xvdycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ01lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9PT0gJ01lZGl1bScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ0hpZ2gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnSGlnaCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ0xvdyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIH0pO1xuXG5cblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByb2plY3REZXRhaWxzTGluZUJyZWFrNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERldGFpbHNMaW5lQnJlYWs1KTtcblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgc3RhdHVzQnRuRGl2LmNsYXNzTGlzdC5hZGQoJ3N0YXR1cy1idXR0b24tZGl2Jyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdEJ1dHRvbnNPbmUuYXBwZW5kKHN0YXR1c0J0bkRpdilcblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIHN0YXR1c0xhYmVsLnRleHRDb250ZW50ID0gJ1N0YXR1czonXG4gICAgICAgICAgICAgICAgc3RhdHVzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdwcm9qZWN0LXN0YXR1cy11cGRhdGUnKVxuICAgICAgICAgICAgICAgIHN0YXR1c0J0bkRpdi5hcHBlbmQoc3RhdHVzTGFiZWwpXG5cblxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERpc3BsYXlTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LXN0YXR1cy11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgndmFsdWUnLHByb2plY3Quc3RhdHVzKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSBwcm9qZWN0LnN0YXR1cztcblxuICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICBzdGF0dXNCdG5EaXYuYXBwZW5kKHByb2plY3REaXNwbGF5U3RhdHVzKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgY2xhc3NlcyBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXMgKGRpZmZlcmVudCBjb2xvdXJzKVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0RGlzcGxheVN0YXR1cy52YWx1ZSA9PT0gJ1BlbmRpbmcnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnZhbHVlID0gJ0NvbXBsZXRlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3REaXNwbGF5U3RhdHVzLnZhbHVlID09PSAnQ29tcGxldGUnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnZhbHVlID0gJ1BlbmRpbmcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSAnUGVuZGluZyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIFxuXG5cblxuXG5cblxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgcHJvamVjdFRvZG9zLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdG9kb3MnKTtcblxuICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3RUb2Rvcyk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlIG5lZWQgdGhpc1xuICAgICAgICAgICAgcHJvamVjdFRvZG9zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICAvLyBDb250YWluZXIgdGhhdCBkaXNwbGF5cyBhbGwgdG9kb3MgaW4gYSBwcm9qZWN0XG4gICAgICAgICAgICBkaXNwbGF5VG9kb3NJblByb2plY3QocHJvamVjdCk7XG5cbiAgICAgICAgICAgIC8vIGNsaWNrZWRQcm9qZWN0ID0gcHJvamVjdDtcblxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uc1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdEJ1dHRvbnNUd28uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idXR0b25zLXR3bycpO1xuICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3RCdXR0b25zVHdvKTtcbiAgICBcblxuXG5cblxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIHByb2plY3REZWxldGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsJycpO1xuXG4gICAgICAgICAgICBwcm9qZWN0RGVsZXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBwcm9qZWN0RGVsZXRlLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWRlbGV0ZScpO1xuXG4gICAgICAgICAgICBwcm9qZWN0RGVsZXRlLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgICAgICAgICAgIHByb2plY3RCdXR0b25zVHdvLmFwcGVuZChwcm9qZWN0RGVsZXRlKTtcblxuXG4gICAgICAgICAgICBcblxuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RVcGRhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgcHJvamVjdFVwZGF0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnJyk7XG5cbiAgICAgICAgICAgIHByb2plY3RVcGRhdGVCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XG5cbiAgICAgICAgICAgIHByb2plY3RVcGRhdGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtdXBkYXRlJyk7XG5cbiAgICAgICAgICAgIHByb2plY3RVcGRhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnVXBkYXRlJztcblxuICAgICAgICAgICAgcHJvamVjdFVwZGF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXVwZGF0ZScpO1xuXG4gICAgICAgICAgICBwcm9qZWN0QnV0dG9uc1R3by5hcHBlbmQocHJvamVjdFVwZGF0ZUJ1dHRvbik7XG5cblxuXG4gICAgICAgICAgICAvLyBjb25zdCBwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAvLyBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERldGFpbHNMaW5lQnJlYWs2KTtcblxuXG4gICAgICAgICAgICBcblxuXG4gICAgICAgICAgICB1cGRhdGVQcm9qZWN0SXRlbShwcm9qZWN0KTtcblxuICAgICAgICAgICAgZGVsZXRlUHJvamVjdEl0ZW0ocHJvamVjdClcblxuXG4gICAgICAgXG5cblxuXG5cbiAgICAgICAgcHJvamVjdFRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcHJvamVjdFRvZG9Db250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5UHJvamVjdDsiLCJpbXBvcnQgcHJvamVjdE9iamVjdHMgZnJvbSAnLi4vdGFiT2JqZWN0cy9hbGxQcm9qZWN0c1RhYic7XG5cbmltcG9ydCB7IHVwZGF0ZVRvZG9JdGVtLCBkZWxldGVUb2RvSXRlbSB9IGZyb20gXCIuLi9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXNcIjtcblxuXG5mdW5jdGlvbiBkaXNwbGF5VG9kbyhvYmplY3Qpe1xuXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgdG9kb0Rpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGlzcGxheS1jb250YWluZXInKTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKHRvZG9EaXNwbGF5Q29udGFpbmVyKTtcblxuXG4gICAgICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLmFwcGVuZCh0b2RvRm9ybSlcblxuXG4gICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdG9kb0Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgndG9kby1kaXNwbGF5Jyk7XG5cbiAgICAgICAgdG9kb0Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgnbWFpbi10b2RvLWRpc3BsYXknKVxuXG4gICAgICAgIHRvZG9Gb3JtLmFwcGVuZCh0b2RvRGlzcGxheSk7XG5cblxuXG4gICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnVGl0bGUnKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LXRpdGxlJyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheVRpdGxlLnZhbHVlID0gb2JqZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlUaXRsZSk7XG5cblxuICAgICAgICAgICAgY29uc3QgdG9kb0Rlc2NUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywnJyk7XG5cbiAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS1kZXNjJyk7XG5cbiAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ0Rlc2NyaXB0aW9uJylcblxuICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCczMCcpO1xuXG4gICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncm93cycsJzEwJyk7XG5cbiAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnZhbHVlID0gb2JqZWN0LmRlc2M7XG5cbiAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvZG9EZXNjVGV4dEFyZWEpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5RGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5RGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LWRhdGUnKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXlEYXRlLnZhbHVlID0gb2JqZWN0LmR1ZURhdGU7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5RGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheURhdGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlEYXRlKTtcblxuICAgICAgICAgICAgLy8gY29uc3QgbGluZUJyZWFrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWsxKTtcblxuXG4gICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheVJlbWluZEluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXlSZW1pbmRJbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdudW1iZXInKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXlSZW1pbmRJbi5zZXRBdHRyaWJ1dGUoJ21pbicsJzAnKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXlSZW1pbmRJbi5zZXRBdHRyaWJ1dGUoJ21heCcsJzMwJyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4uc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS1yZW1pbmQtaW4nKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXlSZW1pbmRJbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnUmVtaW5kIGluIGhvdyBtYW55IGRheXM/Jyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4udmFsdWUgPSBvYmplY3QucmVtaW5kSW47XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4uY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXlSZW1pbmRJbi5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheVJlbWluZEluKTtcblxuICAgICAgICAgICAgLy8gY29uc3QgbGluZUJyZWFrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAvLyB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrMik7XG5cblxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0Ryb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbiAgICAgICAgICAgIHByb2plY3RzRHJvcERvd24uc2V0QXR0cmlidXRlKCduYW1lJywncHJvamVjdC1kaXNwbGF5LWNob2ljZXMnKTtcblxuICAgICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1kaXNwbGF5LWNob2ljZXMnKTtcblxuICAgICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgIHByb2plY3RzRHJvcERvd24uY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQocHJvamVjdHNEcm9wRG93bik7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5wcm9jZXNzZWRQcm9qZWN0ID0gcHJvamVjdE9iamVjdHMoKS51bnByb2Nlc3NlZFByb2plY3RBcnJheVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnNOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihvcHRpb25zTm9kZSl7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc05vZGUuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uMC50ZXh0Q29udGVudCA9IG9iamVjdC5wcm9qZWN0O1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uMC52YWx1ZSA9IG9iamVjdC5wcm9qZWN0O1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5hcHBlbmQob3B0aW9uMCk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdW5wcm9jZXNzZWRQcm9qZWN0LmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnZhbHVlID0gb2JqLnRpdGxlO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzRHJvcERvd24uYXBwZW5kKHByb2plY3RPcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuXG5cblxuICAgICAgICAgICAgY29uc3QgZmlyc3RCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgZmlyc3RCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmlyc3QtYnV0dG9uLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQoZmlyc3RCdXR0b25Db250YWluZXIpXG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5QnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICBwcmlvcml0eUJ0bkRpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1idXR0b24tZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICBmaXJzdEJ1dHRvbkNvbnRhaW5lci5hcHBlbmQocHJpb3JpdHlCdG5EaXYpXG5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnO1xuXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0b2RvLWRpc3BsYXktcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUJ0bkRpdi5hcHBlbmQocHJpb3JpdHlMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBsaW5lYnJlYWtQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHByaW9yaXR5QnRuRGl2LmFwcGVuZChsaW5lYnJlYWtQcmlvcml0eSk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLG9iamVjdC5wcmlvcml0eSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnRleHRDb250ZW50ID0gb2JqZWN0LnByaW9yaXR5O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUJ0bkRpdi5hcHBlbmQodG9kb0Rpc3BsYXlQcmlvcml0eSk7XG5cblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGNsYXNzZXMgZm9yIGRpZmZlcmVudCBwcmlvcml0aWVzIChkaWZmZXJlbnQgY29sb3VycylcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPT09ICdMb3cnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID0gJ01lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9PT0gJ01lZGl1bScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPSAnSGlnaCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS50ZXh0Q29udGVudCA9ICdIaWdoJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPT09ICdIaWdoJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9ICdMb3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICBzdGF0dXNCdG5EaXYuY2xhc3NMaXN0LmFkZCgnc3RhdHVzLWJ1dHRvbi1kaXYnKTtcblxuICAgICAgICAgICAgICAgIGZpcnN0QnV0dG9uQ29udGFpbmVyLmFwcGVuZChzdGF0dXNCdG5EaXYpXG5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBsaW5lQnJlYWszID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrMyk7XG5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzTGFiZWwudGV4dENvbnRlbnQgPSAnU3RhdHVzOiAnO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9kby1kaXNwbGF5LXN0YXR1cycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0J0bkRpdi5hcHBlbmQoc3RhdHVzTGFiZWwpO1xuXG5cblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGxpbmVCcmVhazQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWs0KTtcblxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBsaW5lIGJyZWFrIFxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5U3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMuc2V0QXR0cmlidXRlKCd2YWx1ZScsb2JqZWN0LnN0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS1zdGF0dXMnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy50ZXh0Q29udGVudCA9IG9iamVjdC5zdGF0dXM7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb0Rpc3BsYXlTdGF0dXMuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNCdG5EaXYuYXBwZW5kKHRvZG9EaXNwbGF5U3RhdHVzKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc2VzIGZvciBkaWZmZXJlbnQgcHJpb3JpdGllcyAoZGlmZmVyZW50IGNvbG91cnMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRGlzcGxheVN0YXR1cy52YWx1ZSA9PT0gJ1BlbmRpbmcnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy52YWx1ZSA9ICdDb21wbGV0ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0Rpc3BsYXlTdGF0dXMudmFsdWUgPT09ICdDb21wbGV0ZScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnZhbHVlID0gJ1BlbmRpbmcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnRleHRDb250ZW50ID0gJ1BlbmRpbmcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cblxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBzZWNvbmRCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2Vjb25kLWJ1dHRvbi1jb250YWluZXInKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHNlY29uZEJ1dHRvbkNvbnRhaW5lcilcbiAgICAgICAgICAgIC8vIGNvbnN0IGxpbmVCcmVhazUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgLy8gdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazUpO1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bkRpdi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uLWRpdicpO1xuXG4gICAgICAgICAgICAgICAgc2Vjb25kQnV0dG9uQ29udGFpbmVyLmFwcGVuZChkZWxldGVCdG5EaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZWxldGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZWxldGUuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kZWxldGUnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlbGV0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bkRpdi5hcHBlbmQodG9kb0RlbGV0ZSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBsaW5lQnJlYWs2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazYpO1xuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVCdG5EaXYuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbi1kaXYnKTtcblxuICAgICAgICAgICAgICAgIHNlY29uZEJ1dHRvbkNvbnRhaW5lci5hcHBlbmQodXBkYXRlQnRuRGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9VcGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS50ZXh0Q29udGVudCA9ICdVcGRhdGUnO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCdG5EaXYuYXBwZW5kKHRvZG9VcGRhdGUpO1xuXG5cbiAgICAgICAgICAgIHVwZGF0ZVRvZG9JdGVtKG9iamVjdCk7XG5cbiAgICAgICAgICAgIGRlbGV0ZVRvZG9JdGVtKG9iamVjdCk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVRvZG87IiwiXG5pbXBvcnQgZGlzcGxheVRvZG8gZnJvbSBcIi4vZGlzcGxheVRvZG9cIjtcblxuZnVuY3Rpb24gZGlzcGxheVRvZG9zSW5Qcm9qZWN0IChwcm9qZWN0KXtcblxuICAgIGNvbnN0IHByb2plY3RUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRvZG9zJyk7XG5cbiAgICBwcm9qZWN0VG9kb3MucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIFxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgfSk7XG5cblxuXG4gICAgY29uc3QgYWxsUHJvamVjdFRvZG9zID0gcHJvamVjdC50b2Rvc0J5UHJpb3JpdHk7XG5cbiAgICBjb25zdCBwcmlvcml0eUFycmF5ID0gWydIaWdoJywnTWVkaXVtJywnTG93J11cblxuICAgIGNvbnN0IGR1ZVN0YXR1c0FycmF5ID0gWydvdmVyZHVlJywnZHVlJywndXBjb21pbmcnLCdjb21wbGV0ZSddO1xuXG4gICAgY29uc3QgdGl0bGVBcnJheSA9IFsnT3ZlcmR1ZScsJ0R1ZSBzb29uJywnVXBjb21pbmcnLCdDb21wbGV0ZWQnXTtcblxuICAgIGNvbnN0IGNsYXNzQXJyYXkgPSBbJ292ZXJkdWUtdG9kb3MnLCdkdWUtc29vbi10b2RvcycsJ3VwY29taW5nLXRvZG9zJywnY29tcGxldGUtdG9kb3MnXTtcblxuXG4gICAgcHJpb3JpdHlBcnJheS5mb3JFYWNoKHByaW9yaXR5ID0+IHtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBhbGxQcm9qZWN0VG9kb3MpIHtcblxuICAgICAgICAgICAgaWYgKGFsbFByb2plY3RUb2Rvc1trZXldLm92ZXJkdWUubGVuZ3RoID09PSAwICYmIGFsbFByb2plY3RUb2Rvc1trZXldLmR1ZS5sZW5ndGggPT09IDAgJiYgYWxsUHJvamVjdFRvZG9zW2tleV0udXBjb21pbmcubGVuZ3RoID09PSAwICYmIGFsbFByb2plY3RUb2Rvc1trZXldLmNvbXBsZXRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIG1vdmUgdG8gbmV4dCBsb29wIGlmIGVtcHR5XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrZXkgPT09IHByaW9yaXR5KSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICBwcmlvcml0eVRpdGxlLnRleHRDb250ZW50ID0gcHJpb3JpdHkgK2AgcHJpb3JpdHlgO1xuXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS10aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdFRvZG9zLmFwcGVuZChwcmlvcml0eVRpdGxlKTtcbiAgICBcbiAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZHVlU3RhdHVzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gZHVlU3RhdHVzQXJyYXlbaW5kZXhdO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGVjaWZpZWRPYmpCeVByaW9yaXR5ID0gYWxsUHJvamVjdFRvZG9zW2tleV07XG5cbiBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHNwZWNpZmllZE9iakJ5UHJpb3JpdHkpIHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBwcm9wZXJ0eSkge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5zIGFycmF5IG9mIHRvZG8gb2JqZWN0cyBvZiBlYWNoIGR1ZSBzdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJheUJ5RHVlU3RhdHVzID0gc3BlY2lmaWVkT2JqQnlQcmlvcml0eVtwcm9wXTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlCeUR1ZVN0YXR1cy5sZW5ndGggPT09IDApe1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1zdGF0dXMtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2Rvcy5hcHBlbmQoc3RhdHVzQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGl2LnRleHRDb250ZW50ID0gdGl0bGVBcnJheVtpbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJvamVjdC1zdGF0dXMtdGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmQodG9kb1RpdGxlRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkdWVTdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZVN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzQXJyYXlbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZURpdi5hcHBlbmQoZHVlU3RhdHVzQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsYWJsZS10b2RvLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZVN0YXR1c0NvbnRhaW5lci5hcHBlbmQoc2Nyb2xsYWJsZUNvbnRhaW5lcik7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvb3BzIG92ZXIgZWFjaCB0b2RvIG9iamVjdCBhbmQgYXBwZW5kcyB0aGVtIHRvIHNjcm9sbGFibGUgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheUJ5RHVlU3RhdHVzLmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWluLXByb2plY3QtY29udGFpbmVyJyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRhaW5lci5hcHBlbmQodG9kb0NvbnRhaW5lcik7XG4gICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZS1kaXYnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGl2LnRleHRDb250ZW50ID0gb2JqZWN0LnRpdGxlO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvVGl0bGVEaXYpO1xuICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2MtZGl2Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjRGl2LnRleHRDb250ZW50ID0gb2JqZWN0LmRlc2M7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9EZXNjRGl2KTtcbiAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVEaXYuY2xhc3NMaXN0LmFkZCgndG9kby1kYXRlLWRpdicpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGF0ZURpdi50ZXh0Q29udGVudCA9IG9iamVjdC5kdWVEYXRlO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvRGF0ZURpdik7XG4gICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9EdXJhdGlvbkxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kb0R1cmF0aW9uTGVmdERpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ci1sZWZ0LWRpdicpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRHVyYXRpb25MZWZ0RGl2LnRleHRDb250ZW50ID0gYCR7b2JqZWN0LmR1cmF0aW9uTGVmdC5kYXlMZWZ0fSBkYXlzLCAke29iamVjdC5kdXJhdGlvbkxlZnQubW9udGhzTGVmdH0gbW9udGhzIGFuZCAke29iamVjdC5kdXJhdGlvbkxlZnQueWVhcnNMZWZ0fSB5ZWFycyBsZWZ0YDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0R1cmF0aW9uTGVmdERpdik7XG4gICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Qcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJvamVjdC1kaXYnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1Byb2plY3REaXYudGV4dENvbnRlbnQgPSBvYmplY3QucHJvamVjdDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb1Byb2plY3REaXYpO1xuICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0b2RvUHJpb3JpdHl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG9Qcmlvcml0eXREaXYuY2xhc3NMaXN0LmFkZCgndG9kby1wcmlvcml0eS1kaXYnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kb1ByaW9yaXR5dERpdi50ZXh0Q29udGVudCA9IG9iamVjdC5wcmlvcml0eTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb1ByaW9yaXR5dERpdik7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheXMgdG9kbyBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUb2RvKG9iamVjdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgXG4gICAgXG4gICAgXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSk7XG5cblxuXG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlUb2Rvc0luUHJvamVjdDsiLCIvLyBmb3Igc2VsZWN0aW9uIG9wdGlvbnNcbmltcG9ydCBwcm9qZWN0T2JqZWN0cyBmcm9tICcuLi90YWJPYmplY3RzL2FsbFByb2plY3RzVGFiJ1xuXG5mdW5jdGlvbiBmb3JtRG9tTW9kdWxlICgpe1xuXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuXG5cblxuLy8gICAgRk9STSBCVVRUT05cblxuXG4gICAgY29uc3QgZm9ybUJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZm9ybUJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbi1jb250YWluZXInKTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKGZvcm1CdXR0b25Db250YWluZXIpO1xuXG5cbiAgICAgICAgY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIGZvcm1CdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nKTtcblxuICAgICAgICBmb3JtQnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xuXG4gICAgICAgIGZvcm1CdXR0b25Db250YWluZXIuYXBwZW5kKGZvcm1CdXR0b24pO1xuXG5cbiAgICBcblxuXG4gICAgXG5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChmb3JtQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCB0b2RvQ3JlYXRpb25Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdG9kb0NyZWF0aW9uRm9ybS5jbGFzc0xpc3QuYWRkKCd0b2RvLWNyZWF0aW9uLWZvcm0nKTtcblxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZCh0b2RvQ3JlYXRpb25Gb3JtKTtcblxuICAgICAgICAgICAgY29uc3QgZW50cnlDcmVhdGlvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICAgICAgICAgIHRvZG9DcmVhdGlvbkZvcm0uYXBwZW5kKGVudHJ5Q3JlYXRpb25Gb3JtKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcblxuICAgICAgICAgICAgICAgIGVudHJ5Q3JlYXRpb25Gb3JtLmFwcGVuZChmaWVsZHNldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbGVnZW5kLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBhbiBlbnRyeSdcblxuICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmQobGVnZW5kKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9DcmVhdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9DcmVhdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY3JlYXRpb24tdGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0NyZWF0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnQ3JlYXRlIGEgbmV3IGVudHJ5J1xuICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmQodG9kb0NyZWF0aW9uVGl0bGUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29sbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb2xsZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbGxlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZChpbnB1dENvbGxlY3Rpb24pO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb2xsZWN0aW9uLmFwcGVuZChpbnB1dENvbnRhaW5lcjEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0b2RvLXRpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxLmFwcGVuZCh0b2RvVGl0bGVMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9UaXRsZUxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnB1dENvbnRhaW5lcjEuYXBwZW5kKHRvZG9UaXRsZUxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby10aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxLmFwcGVuZCh0b2RvVGl0bGVJbnB1dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb2xsZWN0aW9uLmFwcGVuZChpbnB1dENvbnRhaW5lcjIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9kby1kZXNjJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY0xhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjIuYXBwZW5kKHRvZG9EZXNjTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0b2RvRGVzY0xpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnB1dENvbnRhaW5lcjIuYXBwZW5kKHRvZG9EZXNjTGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGVzYycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCczMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCcxMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMi5hcHBlbmQodG9kb0Rlc2NUZXh0QXJlYSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMy5jbGFzc0xpc3QuYWRkKCdyYWRpby1pbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb2xsZWN0aW9uLmFwcGVuZChpbnB1dENvbnRhaW5lcjMpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3RlUmFkaW9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RlUmFkaW9EaXYuY2xhc3NMaXN0LmFkZCgnbm90ZS1yYWRpby1kaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjMuYXBwZW5kKG5vdGVSYWRpb0RpdilcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzTm90ZVJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc05vdGVSYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTm90ZVJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCdpcy1ub3RlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOb3RlUmFkaW8uc2V0QXR0cmlidXRlKCduYW1lJywnZW50cnktdHlwZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTm90ZVJhZGlvLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTm90ZVJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RlUmFkaW9EaXYuYXBwZW5kKGlzTm90ZVJhZGlvKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3RlUmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90ZVJhZGlvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdpcy1ub3RlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90ZVJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSAnTm90ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90ZVJhZGlvRGl2LmFwcGVuZChub3RlUmFkaW9MYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9SYWRpb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9SYWRpb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLXJhZGlvLWRpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMy5hcHBlbmQodG9kb1JhZGlvRGl2KVxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1RvZG9SYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUb2RvUmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1RvZG9SYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywnaXMtdG9kbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9kb1JhZGlvLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2VudHJ5LXR5cGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1RvZG9SYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JhZGlvRGl2LmFwcGVuZChpc1RvZG9SYWRpbyk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9SYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmFkaW9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2lzLXRvZG8nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmFkaW9MYWJlbC50ZXh0Q29udGVudCA9ICdUby1kbyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JhZGlvRGl2LmFwcGVuZCh0b2RvUmFkaW9MYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlTmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdUb2RvLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1uZXctdG9kbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbGxlY3Rpb24uYXBwZW5kKGNyZWF0ZU5ld1RvZG8pO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3VG9kby5hcHBlbmQoaW5wdXRDb250YWluZXI0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9kby1kYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZTonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNC5hcHBlbmQodG9kb0RhdGVMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0b2RvRGF0ZUxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5wdXRDb250YWluZXI0LmFwcGVuZCh0b2RvRGF0ZUxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNC5hcHBlbmQodG9kb0RhdGVJbnB1dCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWUgY3JlYXRpbmcgZm9ybSBlbGVtZW50c1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1RvZG8uYXBwZW5kKGlucHV0Q29udGFpbmVyNSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1JlbWluZEluTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9SZW1pbmRJbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9kby1yZW1pbmQtaW4nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmVtaW5kSW5MYWJlbC50ZXh0Q29udGVudCA9ICdSZW1pbmQtaW4oZGF5cyk6JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjUuYXBwZW5kKHRvZG9SZW1pbmRJbkxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9SZW1pbmRJbkxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5wdXRDb250YWluZXI1LmFwcGVuZCh0b2RvUmVtaW5kSW5MaW5lQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUmVtaW5kSW5JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnbnVtYmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCcwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCdtYXgnLCczMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9SZW1pbmRJbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLXJlbWluZC1pbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9SZW1pbmRJbklucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjUuYXBwZW5kKHRvZG9SZW1pbmRJbklucHV0KTtcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3VG9kby5hcHBlbmQoaW5wdXRDb250YWluZXI2KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNi5hcHBlbmQodG9kb1ByaW9yaXR5TGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdG9kb1ByaW9yaXR5TGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnB1dENvbnRhaW5lcjYuYXBwZW5kKHRvZG9Qcmlvcml0eUxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnTG93Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI2LmFwcGVuZCh0b2RvUHJpb3JpdHlCdXR0b24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc2VzIGZvciBkaWZmZXJlbnQgcHJpb3JpdGllcyAoZGlmZmVyZW50IGNvbG91cnMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvUHJpb3JpdHlCdXR0b24udmFsdWUgPT09ICdMb3cnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24udmFsdWUgPSAnTWVkaXVtJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9Qcmlvcml0eUJ1dHRvbi52YWx1ZSA9PT0gJ01lZGl1bScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi52YWx1ZSA9ICdIaWdoJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnSGlnaCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvUHJpb3JpdHlCdXR0b24udmFsdWUgPT09ICdIaWdoJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ0xvdyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXI3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjcuY2xhc3NMaXN0LmFkZCgncmFkaW8taW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdUb2RvLmFwcGVuZChpbnB1dENvbnRhaW5lcjcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1Byb2plY3REaXYgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdleGlzdGluZy1wcm9qZWN0LWRpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjcuYXBwZW5kKGV4aXN0aW5nUHJvamVjdERpdilcblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1Byb2plY3RSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCdleGlzdGluZy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4aXN0aW5nUHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKCduYW1lJywncHJvamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RSYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdERpdi5hcHBlbmQoZXhpc3RpbmdQcm9qZWN0UmFkaW8pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0UmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdleGlzdGluZy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSAnRXhpc3RpbmcgcHJvamVjdCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdERpdi5hcHBlbmQoZXhpc3RpbmdQcm9qZWN0UmFkaW9MYWJlbCk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1kaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI3LmFwcGVuZChuZXdQcm9qZWN0RGl2KVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3RSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsJ25ldy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3RSYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3REaXYuYXBwZW5kKG5ld1Byb2plY3RSYWRpbyk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0UmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3RSYWRpb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnbmV3LXByb2plY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdFJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGl2LmFwcGVuZChuZXdQcm9qZWN0UmFkaW9MYWJlbCk7XG5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RFeGlzdGluZ1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0RXhpc3RpbmdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC1leGlzdGluZy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29sbGVjdGlvbi5hcHBlbmQoc2VsZWN0RXhpc3RpbmdQcm9qZWN0KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXI4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjguY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RFeGlzdGluZ1Byb2plY3QuYXBwZW5kKGlucHV0Q29udGFpbmVyOCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2hvaWNlc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q2hvaWNlc0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywncHJvamVjdC1jaG9pY2VzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENob2ljZXNMYWJlbC50ZXh0Q29udGVudCA9ICdXaGljaCBwcm9qZWN0IGlzIHRoaXMgZm9yPyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI4LmFwcGVuZChwcm9qZWN0Q2hvaWNlc0xhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RDaG9pY2VzRHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q2hvaWNlc0Ryb3BEb3duLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Byb2plY3QtY2hvaWNlcycpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q2hvaWNlc0Ryb3BEb3duLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWNob2ljZXMnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENob2ljZXNEcm9wRG93bi5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyOC5hcHBlbmQocHJvamVjdENob2ljZXNEcm9wRG93bik7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGl0bGVzIGZyb20gZXhpc3RpbmcgcHJvamVjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB3aGVuIG5ldyBwcm9qZWN0cyBhcmUgY3JlYXRlZFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1uZXctcHJvamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbGxlY3Rpb24uYXBwZW5kKGNyZWF0ZU5ld1Byb2plY3QpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdENyZWF0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q3JlYXRpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNyZWF0aW9uLXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENyZWF0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnQ3JlYXRlIGEgbmV3IHByb2plY3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdC5hcHBlbmQocHJvamVjdENyZWF0aW9uVGl0bGUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyOS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QuYXBwZW5kKGlucHV0Q29udGFpbmVyOSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywncHJvamVjdC10aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI5LmFwcGVuZChwcm9qZWN0VGl0bGVMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBwcm9qZWN0VGl0bGVMaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlucHV0Q29udGFpbmVyOS5hcHBlbmQocHJvamVjdFRpdGxlTGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC10aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjkuYXBwZW5kKHByb2plY3RUaXRsZUlucHV0KTtcblxuICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIxMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QuYXBwZW5kKGlucHV0Q29udGFpbmVyMTApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdwcm9qZWN0LWRlc2MnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0xhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMC5hcHBlbmQocHJvamVjdERlc2NMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBwcm9qZWN0RGVzY0xpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5wdXRDb250YWluZXIxMC5hcHBlbmQocHJvamVjdERlc2NMaW5lQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY1RleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtZGVzYycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdjb2xzJywnMzAnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncm93cycsJzEwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NUZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMC5hcHBlbmQocHJvamVjdERlc2NUZXh0QXJlYSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjExLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdC5hcHBlbmQoaW5wdXRDb250YWluZXIxMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Byb2plY3QtZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIGRhdGU6JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjExLmFwcGVuZChwcm9qZWN0RGF0ZUxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByb2plY3REYXRlTGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnB1dENvbnRhaW5lcjExLmFwcGVuZChwcm9qZWN0RGF0ZUxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTEuYXBwZW5kKHByb2plY3REYXRlSW5wdXQpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIGNyZWF0aW5nIGZvcm0gZWxlbWVudHNcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIxMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QuYXBwZW5kKGlucHV0Q29udGFpbmVyMTIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RSZW1pbmRJbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UmVtaW5kSW5MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Byb2plY3QtcmVtaW5kLWluJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluTGFiZWwudGV4dENvbnRlbnQgPSAnUmVtaW5kLWluKGRheXMpOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMi5hcHBlbmQocHJvamVjdFJlbWluZEluTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgcHJvamVjdFJlbWluZEluTGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnB1dENvbnRhaW5lcjEyLmFwcGVuZChwcm9qZWN0UmVtaW5kSW5MaW5lQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0UmVtaW5kSW5JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnbnVtYmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCcwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCdtYXgnLCczMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LXJlbWluZC1pbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEyLmFwcGVuZChwcm9qZWN0UmVtaW5kSW5JbnB1dCk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEzLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdC5hcHBlbmQoaW5wdXRDb250YWluZXIxMyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEzLmFwcGVuZChwcm9qZWN0UHJpb3JpdHlMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBwcm9qZWN0UHJpb3JpdHlMaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlucHV0Q29udGFpbmVyMTMuYXBwZW5kKHByb2plY3RQcmlvcml0eUxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnTG93Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMy5hcHBlbmQocHJvamVjdFByaW9yaXR5QnV0dG9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgY2xhc3NlcyBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXMgKGRpZmZlcmVudCBjb2xvdXJzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnTG93Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ01lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPT09ICdNZWRpdW0nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPSAnSGlnaCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnSGlnaCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9ICdMb3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdmb3JtLXN1Ym1pdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb2xsZWN0aW9uLmFwcGVuZChzdWJtaXRCdXR0b24pO1xuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGV4aXN0aW5nUHJvamVjdE9wdGlvbnMgKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0UmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhpc3RpbmctcHJvamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdFJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0Jyk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bnByb2Nlc3NlZFByb2plY3QgPSBwcm9qZWN0T2JqZWN0cygpLnVucHJvY2Vzc2VkUHJvamVjdEFycmF5XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bnByb2Nlc3NlZFByb2plY3QubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0UmFkaW8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJywnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0UmFkaW8uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5ld1Byb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmV3UHJvamVjdFJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodW5wcm9jZXNzZWRQcm9qZWN0Lmxlbmd0aCA+IDAgKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RSYWRpby5kaXNhYmxlZCA9IGZhbHNlO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihvcHRpb25zTm9kZSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNOb2RlLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjAudGV4dENvbnRlbnQgPSAnQ2hvb3NlIG9uZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uMC52YWx1ZSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDaG9pY2VzRHJvcERvd24uYXBwZW5kKG9wdGlvbjApO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5wcm9jZXNzZWRQcm9qZWN0LmZvckVhY2gob2JqZWN0ID0+IHtcbiAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IG9iamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IG9iamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENob2ljZXNEcm9wRG93bi5hcHBlbmQocHJvamVjdE9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmdW5jdGlvbiBleGlzdGluZ1Byb2plY3RPcHRpb25zICgpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgdW5wcm9jZXNzZWRQcm9qZWN0ID0gcHJvamVjdE9iamVjdHMoKS51bnByb2Nlc3NlZFByb2plY3RBcnJheVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3Qgb3B0aW9uc05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmKG9wdGlvbnNOb2RlKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBvcHRpb25zTm9kZS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBvcHRpb24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3Qgb3B0aW9uMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgb3B0aW9uMC50ZXh0Q29udGVudCA9ICdDaG9vc2Ugb25lJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG9wdGlvbjAudmFsdWUgPSAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHByb2plY3RDaG9pY2VzRHJvcERvd24uYXBwZW5kKG9wdGlvbjApO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB1bnByb2Nlc3NlZFByb2plY3QuZm9yRWFjaChvYmplY3QgPT4ge1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBvYmplY3QudGl0bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IG9iamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0Q2hvaWNlc0Ryb3BEb3duLmFwcGVuZChwcm9qZWN0T3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RPcHRpb25zKCk7XG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtleGlzdGluZ1Byb2plY3RPcHRpb25zfTtcblxuXG59XG5cbmNvbnN0IGNyZWF0ZUZvcm1ET00gPSBmb3JtRG9tTW9kdWxlKCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9ybURPTTsiLCJpbXBvcnQgaGFtYnVyZ2VySWNvbiBmcm9tIFwiLi4vYXNzZXRzL21lbnUtaWNvbi5wbmdcIjtcblxuLy8gaW1wb3J0IGhhbWJ1cmdlckljb24gZnJvbSBcIi4uL2Fzc2V0cy9tZW51LnBuZ1wiXG5cbmZ1bmN0aW9uIG1haW5Eb21Nb2R1bGUgKCl7XG5cbiAgICAvLyBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgLy8gY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250YWluZXInKTtcbiAgICAvLyBib2R5LmFwcGVuZChtYWluQ29udGFpbmVyKVxuXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgXG4gICAgLy8gRk9STSBPUEVOSU5HIEJVVFRPTlxuICAgIFxuXG5cblxuICAgIC8vIFRPUCBDT05UQUlORVJcbiAgICBjb25zdCB0b3BDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRvcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b3AtY29udGFpbmVyJyk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZCh0b3BDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGJyYW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgYnJhbmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnJhbmQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgdG9wQ29udGFpbmVyLmFwcGVuZChicmFuZENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGNvbnN0IGJyYW5kSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgICAgICAgICAgYnJhbmRIZWFkZXIudGV4dENvbnRlbnQgPSAnU2FnZUVudHJpZXMnO1xuXG4gICAgICAgICAgICBicmFuZENvbnRhaW5lci5hcHBlbmQoYnJhbmRIZWFkZXIpO1xuXG5cbiAgICAgICAgY29uc3QgdG9wQ29udGFpbmVyU3BhY2luZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRvcENvbnRhaW5lclNwYWNpbmcuY2xhc3NMaXN0LmFkZCgndG9wLWNvbnRhaW5lci1zcGFjaW5nJyk7XG5cbiAgICAgICAgdG9wQ29udGFpbmVyLmFwcGVuZCh0b3BDb250YWluZXJTcGFjaW5nKTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LmFkZCgnaGFtYnVyZ2VyLW1lbnUnKTtcblxuICAgICAgICB0b3BDb250YWluZXIuYXBwZW5kKGhhbWJ1cmdlck1lbnUpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IG1lbnVJY29uID0gbmV3IEltYWdlKClcblxuICAgICAgICAgICAgbWVudUljb24uc3JjID0gaGFtYnVyZ2VySWNvbjtcblxuICAgICAgICAgICAgaGFtYnVyZ2VyTWVudS5hcHBlbmQobWVudUljb24pO1xuXG5cbiAgICAvLyBNRU5VXG5cbiAgICBjb25zdCBub3RlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbm90ZU1lbnUuY2xhc3NMaXN0LmFkZCgnbm90ZS1tZW51Jyk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChub3RlTWVudSk7XG5cblxuICAgICAgICBjb25zdCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0YWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIG5vdGVNZW51LmFwcGVuZCh0YWJDb250YWluZXIpXG5cblxuXG4gICAgICAgICAgICBjb25zdCBhbGxUb2Rvc1RhYkRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBhbGxUb2Rvc1RhYkRPTS5jbGFzc0xpc3QuYWRkKCdhbGwtdG9kb3MtdGFiJyk7XG5cbiAgICAgICAgICAgIGFsbFRvZG9zVGFiRE9NLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGFiLWFjdGl2ZScpXG5cbiAgICAgICAgICAgIHRhYkNvbnRhaW5lci5hcHBlbmQoYWxsVG9kb3NUYWJET00pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYWxsVG9kb3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgICAgICAgICAgYWxsVG9kb3NIZWFkZXIudGV4dENvbnRlbnQgPSAnQWxsIFRvZG9zJztcblxuICAgICAgICAgICAgICAgIGFsbFRvZG9zVGFiRE9NLmFwcGVuZChhbGxUb2Rvc0hlYWRlcilcblxuXG4gICAgICAgICAgICBjb25zdCBhbGxQcm9qZWN0c1RhYkRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBhbGxQcm9qZWN0c1RhYkRPTS5jbGFzc0xpc3QuYWRkKCdhbGwtcHJvamVjdHMtdGFiJyk7XG5cbiAgICAgICAgICAgIHRhYkNvbnRhaW5lci5hcHBlbmQoYWxsUHJvamVjdHNUYWJET00pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYWxsUHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgICAgICAgICAgYWxsUHJvamVjdHNIZWFkZXIudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuXG4gICAgICAgICAgICAgICAgYWxsUHJvamVjdHNUYWJET00uYXBwZW5kKGFsbFByb2plY3RzSGVhZGVyKTtcblxuXG4gICAgICAgICAgICBjb25zdCBhbGxOb3Rlc1RhYkRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBhbGxOb3Rlc1RhYkRPTS5jbGFzc0xpc3QuYWRkKCdhbGwtbm90ZXMtdGFiJyk7XG5cbiAgICAgICAgICAgIHRhYkNvbnRhaW5lci5hcHBlbmQoYWxsTm90ZXNUYWJET00pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYWxsTm90ZXNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgICAgICAgICAgYWxsTm90ZXNIZWFkZXIudGV4dENvbnRlbnQgPSAnTm90ZXMnO1xuXG4gICAgICAgICAgICAgICAgYWxsTm90ZXNUYWJET00uYXBwZW5kKGFsbE5vdGVzSGVhZGVyKTtcblxuXG5cbiAgICAgICAgZnVuY3Rpb24gdGFiQWN0aXZlU3dpdGNoICgpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YWJBcnJheSA9IFthbGxUb2Rvc1RhYkRPTSxhbGxQcm9qZWN0c1RhYkRPTSxhbGxOb3Rlc1RhYkRPTV07XG5cbiAgICAgICAgICAgIGFsbFRvZG9zVGFiRE9NLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgYWxsVG9kb3NUYWJET00uY2xhc3NMaXN0LmFkZCgnbWVudS10YWItYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBhbGxQcm9qZWN0c1RhYkRPTS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXRhYi1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgIGFsbE5vdGVzVGFiRE9NLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtdGFiLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBhbGxQcm9qZWN0c1RhYkRPTS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgIGFsbFByb2plY3RzVGFiRE9NLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGFiLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGFsbFRvZG9zVGFiRE9NLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtdGFiLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgYWxsTm90ZXNUYWJET00uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS10YWItYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGFsbE5vdGVzVGFiRE9NLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgYWxsTm90ZXNUYWJET00uY2xhc3NMaXN0LmFkZCgnbWVudS10YWItYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBhbGxUb2Rvc1RhYkRPTS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXRhYi1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgIGFsbFByb2plY3RzVGFiRE9NLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtdGFiLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGFiQWN0aXZlU3dpdGNoKCk7XG5cblxuICAgIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXNwbGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktY29udGFpbmVyJyk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoZGlzcGxheUNvbnRhaW5lcik7XG5cblxuICAgIC8vIEZPT1RFUlxuICAgIGNvbnN0IHRvZG9Db250YWluZXJGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRvZG9Db250YWluZXJGb290ZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItZm9vdGVyJyk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZCh0b2RvQ29udGFpbmVyRm9vdGVyKTtcblxuICAgICAgICBjb25zdCBsaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgbGlua0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaW5rLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIHRvZG9Db250YWluZXJGb290ZXIuYXBwZW5kKGxpbmtDb250YWluZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgICAgICAgICBmb290ZXJMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsJ2h0dHBzOi8vZ2l0aHViLmNvbS9SaXNzaGlnYW5lc2gvdG9kby1saXN0Jyk7XG5cbiAgICAgICAgICAgIGZvb3RlckxpbmsudGV4dENvbnRlbnQgPSAnTWFkZSBieSBSaXNzaGlnYW5lc2ggVmlsbGFsYW4nO1xuXG4gICAgICAgICAgICBsaW5rQ29udGFpbmVyLmFwcGVuZChmb290ZXJMaW5rKTtcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG1haW5Eb21Nb2R1bGU7IiwiaW1wb3J0IG5vdGVzT2JqZWN0IGZyb20gXCIuLi90YWJPYmplY3RzL2FsbE5vdGVzVGFiXCI7XG5pbXBvcnQgeyB1cGRhdGVOb3RlSXRlbSwgZGVsZXRlVG9kb0l0ZW0sIGVtcHR5RGlzcGxheSB9IGZyb20gXCIuLi9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXNcIjtcblxuZnVuY3Rpb24gYXBwZW5kTm90ZXNPYmplY3QoKXtcbiAgICAgICAgICAgIFxuICAgIGNvbnN0IGNvbGxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbi1jb250YWluZXInKTtcblxuICAgIGNvbGxlY3Rpb25Db250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIFxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgfSk7XG5cblxuICAgIGNvbnN0IG5vdGVzQ29sbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbm90ZXNDb2xsZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ25vdGVzLWNvbGxlY3Rpb24nKTtcblxuICAgIGNvbGxlY3Rpb25Db250YWluZXIuYXBwZW5kKG5vdGVzQ29sbGVjdGlvbik7XG5cbiAgICBjb25zdCBub3Rlc0FycmF5ID0gbm90ZXNPYmplY3QoKS5yZXZlcnNlKCk7XG5cbiAgICBub3Rlc0FycmF5LmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgY29uc3Qgbm90ZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbm90ZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm90ZXMtY29udGFpbmVyJyk7XG4gICAgICAgIG5vdGVzQ29sbGVjdGlvbi5hcHBlbmQobm90ZXNDb250YWluZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBub3RlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5vdGVUaXRsZS5jbGFzc0xpc3QuYWRkKCdub3RlLXRpdGxlJyk7XG4gICAgICAgICAgICBub3RlVGl0bGUudGV4dENvbnRlbnQgPSBvYmplY3QudGl0bGU7XG4gICAgICAgICAgICBub3Rlc0NvbnRhaW5lci5hcHBlbmQobm90ZVRpdGxlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgbm90ZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5vdGVEZXNjLmNsYXNzTGlzdC5hZGQoJ25vdGUtZGVzYycpO1xuICAgICAgICAgICAgbm90ZURlc2MudGV4dENvbnRlbnQgPSBvYmplY3QuZGVzYztcbiAgICAgICAgICAgIG5vdGVzQ29udGFpbmVyLmFwcGVuZChub3RlRGVzYyk7XG5cblxuXG4gICAgICAgIG5vdGVzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGlzcGxheS1jb250YWluZXInKTtcblxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmQodG9kb0Rpc3BsYXlDb250YWluZXIpO1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLmFwcGVuZCh0b2RvRm9ybSlcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGlzcGxheScpO1xuXG4gICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgnbm90ZS1kaXNwbGF5JylcblxuICAgICAgICAgICAgICAgIHRvZG9Gb3JtLmFwcGVuZCh0b2RvRGlzcGxheSk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1RpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LXRpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJylcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVRpdGxlLnZhbHVlID0gb2JqZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheVRpdGxlKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LWRlc2MnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdEZXNjcmlwdGlvbicpXG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCczMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywnMTAnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnZhbHVlID0gb2JqZWN0LmRlc2M7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGVzY1RleHRBcmVhKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGxpbmVCcmVhazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrMSk7XG5cblxuICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm90ZS1idXR0b24tY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZChidXR0b25Db250YWluZXIpXG5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRlbGV0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZWxldGUudGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZCh0b2RvRGVsZXRlKTtcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBsaW5lQnJlYWsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWsyKTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1VwZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnRleHRDb250ZW50ID0gJ1VwZGF0ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQodG9kb1VwZGF0ZSk7XG5cblxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVOb3RlSXRlbShvYmplY3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRvZG9JdGVtKG9iamVjdCk7XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBlbXB0eURpc3BsYXkoKTtcblxufVxuXG4vLyBhcHBlbmROb3Rlc09iamVjdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHBlbmROb3Rlc09iamVjdCIsImltcG9ydCBwcm9qZWN0T2JqZWN0cyBmcm9tIFwiLi4vdGFiT2JqZWN0cy9hbGxQcm9qZWN0c1RhYlwiO1xuXG5pbXBvcnQgeyB1cGRhdGVQcm9qZWN0SXRlbSx1cGRhdGVUb2RvSXRlbSwgZGVsZXRlUHJvamVjdEl0ZW0sZW1wdHlEaXNwbGF5LCBkaXNwbGF5RHVyYXRpb24gfSBmcm9tIFwiLi4vZG9tQWN0aXZpdGllcy9kb21BY3Rpdml0aWVzXCI7XG5cbmltcG9ydCBkaXNwbGF5VG9kbyBmcm9tIFwiLi9kaXNwbGF5VG9kb1wiO1xuXG5pbXBvcnQgZGlzcGxheVRvZG9zSW5Qcm9qZWN0IGZyb20gXCIuL2Rpc3BsYXlUb2Rvc0luUHJvamVjdFwiO1xuXG5cbmltcG9ydCBkaXNwbGF5UHJvamVjdCBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdFwiO1xuXG5cbi8vIFBPUFVMQVRFIFRPRE8gQ09MTEVDVElPTiBDT05UQUlORVJcbmxldCBjbGlja2VkUHJvamVjdCA9ICcnO1xuLy8gaGlnaFxuLy8gcHV0IHRoaXMgaW4gYSBkaWZmZXJlbnQgbW9kdWxlXG5mdW5jdGlvbiBhcHBlbmRQcm9qZWN0T2JqZWN0cyhwcmlvcml0eSl7XG5cbiAgICBjb25zdCBjb2xsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb24tY29udGFpbmVyJylcblxuICAgIGNvbGxlY3Rpb25Db250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIFxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgfSk7XG5cblxuXG4gICAgY29uc3QgYWxsUHJvamVjdE9iamVjdCA9IHByb2plY3RPYmplY3RzKCkucHJvamVjdHNCeVByaW9yaXR5O1xuXG5cbiAgICBjb25zdCBkdWVTdGF0dXNBcnJheSA9IFsnb3ZlcmR1ZScsJ2R1ZScsJ3VwY29taW5nJywnY29tcGxldGUnXTtcblxuICAgIGNvbnN0IHRpdGxlQXJyYXkgPSBbJ09WRVJEVUUnLCdEVUUgU09PTicsJ1VQQ09NSU5HJywnQ09NUExFVEVEJ107XG5cbiAgICBjb25zdCBjbGFzc0FycmF5ID0gWydvdmVyZHVlLWNvbnRhaW5lcicsJ2R1ZS1zb29uLWNvbnRhaW5lcicsJ3VwY29taW5nLWNvbnRhaW5lcicsJ2NvbXBsZXRlLWNvbnRhaW5lciddO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gYWxsUHJvamVjdE9iamVjdCkge1xuXG4gICAgICAgIGlmIChrZXkgPT09IHByaW9yaXR5KSB7XG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZHVlU3RhdHVzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gZHVlU3RhdHVzQXJyYXlbaW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWVkT2JqQnlQcmlvcml0eSA9IGFsbFByb2plY3RPYmplY3Rba2V5XTtcblxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBzcGVjaWZpZWRPYmpCeVByaW9yaXR5KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IHByb3BlcnR5KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5zIGFycmF5IG9mIHRvZG8gb2JqZWN0cyBvZiBlYWNoIGR1ZSBzdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnlEdWVTdGF0dXMgPSBzcGVjaWZpZWRPYmpCeVByaW9yaXR5W3Byb3BdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlCeUR1ZVN0YXR1cy5sZW5ndGggPT09IDApe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N0YXR1cy1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25Db250YWluZXIuYXBwZW5kKHN0YXR1c0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNUaXRsZURpdi50ZXh0Q29udGVudCA9IHRpdGxlQXJyYXlbaW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnc3RhdHVzLXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29udGFpbmVyLmFwcGVuZChzdGF0dXNUaXRsZURpdik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHVlU3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVlU3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NBcnJheVtpbmRleF0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmQoZHVlU3RhdHVzQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGFibGUtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZVN0YXR1c0NvbnRhaW5lci5hcHBlbmQoc2Nyb2xsYWJsZUNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9vcHMgb3ZlciBlYWNoIHByb2plY3Qgb2JqZWN0IGFuZCBhcHBlbmRzIHRoZW0gdG8gc2Nyb2xsYWJsZSBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlCeUR1ZVN0YXR1cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVDb250YWluZXIuYXBwZW5kKHByb2plY3RDb250YWluZXIpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlLWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlRGl2LnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3RUaXRsZURpdik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlc2MtZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0Rpdi50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzYztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3REZXNjRGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGF0ZS1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlRGl2LnRleHRDb250ZW50ID0gZGlzcGxheUR1cmF0aW9uKHByb2plY3QuZHVlRGF0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0RGF0ZURpdik7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRElTUExBWSBQUk9KRUNUIFRPRE9TIC0gc2VuZCBwcm9qZWN0IGNvbnRhaW5lciBhcyBhbiBhcmd1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tlZFByb2plY3QgPSBwcm9qZWN0OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHByb2plY3RUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwcm9qZWN0VG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG8tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtYWluQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0VG9kb0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdFRvZG9Db250YWluZXIuYXBwZW5kKHByb2plY3RGb3JtKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdERldGFpbHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZXRhaWxzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kKHByb2plY3REZXRhaWxzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtdGl0bGUtdXBkYXRlJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdFRpdGxlSW5wdXQudmFsdWUgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBUaXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdFRpdGxlSW5wdXQpO1xuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERldGFpbHNMaW5lQnJlYWsxKTtcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtZGVzYy11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdERlc2NJbnB1dC52YWx1ZSA9IHByb2plY3QuZGVzYztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdERlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IERlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdyb3dzJywnNCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnY29scycsJzQwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGVzY0lucHV0KTtcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgcHJvamVjdERldGFpbHNMaW5lQnJlYWsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3REZXRhaWxzTGluZUJyZWFrMik7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHByb2plY3REYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWRhdGUtdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQudmFsdWUgPSBwcm9qZWN0LmR1ZURhdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERhdGVJbnB1dCk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzTGluZUJyZWFrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazMpO1xuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHByb2plY3RSZW1pbmRJbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtcmVtaW5kZXItdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ251bWJlcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0UmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQudmFsdWUgPSBwcm9qZWN0LnJlbWluZEluO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdFJlbWluZEluSW5wdXQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERldGFpbHNMaW5lQnJlYWs0KTtcblxuXG4gICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtcHJpb3JpdHktdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxwcm9qZWN0LnByaW9yaXR5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnByaW9yaXR5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdFByaW9yaXR5QnV0dG9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc2VzIGZvciBkaWZmZXJlbnQgcHJpb3JpdGllcyAoZGlmZmVyZW50IGNvbG91cnMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnTG93Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9ICdNZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9PT0gJ01lZGl1bScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPSAnSGlnaCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIaWdoJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9PT0gJ0hpZ2gnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ0xvdyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERldGFpbHNMaW5lQnJlYWs1KTtcblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGlzcGxheVN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGlzcGxheVN0YXR1cy5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1zdGF0dXMtdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgndmFsdWUnLHByb2plY3Quc3RhdHVzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnRleHRDb250ZW50ID0gcHJvamVjdC5zdGF0dXM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGlzcGxheVN0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc2VzIGZvciBkaWZmZXJlbnQgcHJpb3JpdGllcyAoZGlmZmVyZW50IGNvbG91cnMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBpZiAocHJvamVjdERpc3BsYXlTdGF0dXMudmFsdWUgPT09ICdwZW5kaW5nJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnZhbHVlID0gJ2NvbXBsZXRlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBpZiAocHJvamVjdERpc3BsYXlTdGF0dXMudmFsdWUgPT09ICdjb21wbGV0ZScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGlzcGxheVN0YXR1cy52YWx1ZSA9ICdwZW5kaW5nJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSAnUGVuZGluZyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgcHJvamVjdFRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdFRvZG9zLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdG9kb3MnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdFRvZG9zKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdFRvZG9zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gQ29udGFpbmVyIHRoYXQgZGlzcGxheXMgYWxsIHRvZG9zIGluIGEgcHJvamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBkaXNwbGF5VG9kb3NJblByb2plY3QocHJvamVjdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY2xpY2tlZFByb2plY3QgPSBwcm9qZWN0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHByb2plY3RVcGRhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0VXBkYXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0VXBkYXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3RVcGRhdGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdFVwZGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdVcGRhdGUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3RVcGRhdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdFVwZGF0ZUJ1dHRvbik7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzTGluZUJyZWFrNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3REZXRhaWxzTGluZUJyZWFrNik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBwcm9qZWN0RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdERlbGV0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdERlbGV0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0RGVsZXRlLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWRlbGV0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3REZWxldGUudGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERlbGV0ZSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB1cGRhdGVQcm9qZWN0SXRlbShwcm9qZWN0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBkZWxldGVQcm9qZWN0SXRlbShwcm9qZWN0KVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcHJvamVjdFRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0VG9kb0NvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuXG5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcblxuXG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgZW1wdHlEaXNwbGF5KCk7XG5cbn1cblxuLy8gU0VORCBUSElTIFRPIGFsbFRvZG9ET01DcmVhdGlvbi5qc1xuLy8gYXBwZW5kVG9kb09iamVjdHMoJ2hpZ2gnKVxuXG5leHBvcnQgZGVmYXVsdCBhcHBlbmRQcm9qZWN0T2JqZWN0cztcblxuZXhwb3J0IHtjbGlja2VkUHJvamVjdH07IiwiaW1wb3J0IHRvZG9PYmplY3QgZnJvbSBcIi4uL3RhYk9iamVjdHMvYWxsVG9kb3NUYWJcIjtcbi8vIGZvciBzZWxlY3Rpb24gb3B0aW9uc1xuaW1wb3J0IHByb2plY3RPYmplY3RzIGZyb20gJy4uL3RhYk9iamVjdHMvYWxsUHJvamVjdHNUYWInO1xuXG4vLyBkb2Vzbid0IHdvcmsgYmVjYXVzZSBvZiBjaXJjdWxhciBkZXBlbmRlbmN5XG4vLyBpbXBvcnQgdXBkYXRlVG9kb0l0ZW0gIGZyb20gJy4uL2RvbUFjdGl2aXRpZXMvdXBkYXRlVG9kb0RPTSc7XG5cbmltcG9ydCB7IHVwZGF0ZVRvZG9JdGVtLCBkZWxldGVUb2RvSXRlbSwgZW1wdHlEaXNwbGF5LCBkaXNwbGF5RHVyYXRpb24gfSBmcm9tIFwiLi4vZG9tQWN0aXZpdGllcy9kb21BY3Rpdml0aWVzXCI7XG5cbmltcG9ydCBkaXNwbGF5VG9kbyBmcm9tIFwiLi9kaXNwbGF5VG9kb1wiO1xuXG5cbi8vIFBPUFVMQVRFIFRPRE8gQ09MTEVDVElPTiBDT05UQUlORVJcblxuLy8gaGlnaFxuLy8gcHV0IHRoaXMgaW4gYSBkaWZmZXJlbnQgbW9kdWxlXG5mdW5jdGlvbiBhcHBlbmRUb2RvT2JqZWN0cyhwcmlvcml0eSl7XG5cbiAgICBcblxuICAgIGNvbnN0IGNvbGxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbi1jb250YWluZXInKVxuXG4gICAgY29sbGVjdGlvbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICB9KTtcblxuXG5cbiAgICBjb25zdCBhbGxUb2RvT2JqZWN0ID0gdG9kb09iamVjdCgpO1xuXG4gICAgY29uc3QgZHVlU3RhdHVzQXJyYXkgPSBbJ292ZXJkdWUnLCdkdWUnLCd1cGNvbWluZycsJ2NvbXBsZXRlJ107XG5cbiAgICBjb25zdCB0aXRsZUFycmF5ID0gWydPVkVSRFVFJywnRFVFIFNPT04nLCdVUENPTUlORycsJ0NPTVBMRVRFRCddO1xuXG4gICAgY29uc3QgY2xhc3NBcnJheSA9IFsnb3ZlcmR1ZS1jb250YWluZXInLCdkdWUtc29vbi1jb250YWluZXInLCd1cGNvbWluZy1jb250YWluZXInLCdjb21wbGV0ZS1jb250YWluZXInXTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIGFsbFRvZG9PYmplY3QpIHtcblxuICAgICAgICBpZiAoa2V5ID09PSBwcmlvcml0eSkge1xuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGR1ZVN0YXR1c0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGR1ZVN0YXR1c0FycmF5W2luZGV4XTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNwZWNpZmllZE9iakJ5UHJpb3JpdHkgPSBhbGxUb2RvT2JqZWN0W2tleV07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gc3BlY2lmaWVkT2JqQnlQcmlvcml0eSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBwcm9wZXJ0eSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250YWlucyBhcnJheSBvZiB0b2RvIG9iamVjdHMgb2YgZWFjaCBkdWUgc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJheUJ5RHVlU3RhdHVzID0gc3BlY2lmaWVkT2JqQnlQcmlvcml0eVtwcm9wXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5QnlEdWVTdGF0dXMubGVuZ3RoID09PSAwKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdGF0dXMtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uQ29udGFpbmVyLmFwcGVuZChzdGF0dXNDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGl0bGVEaXYudGV4dENvbnRlbnQgPSB0aXRsZUFycmF5W2luZGV4XTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3N0YXR1cy10aXRsZScpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmQoc3RhdHVzVGl0bGVEaXYpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1ZVN0YXR1c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZVN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzQXJyYXlbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb250YWluZXIuYXBwZW5kKGR1ZVN0YXR1c0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbGFibGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzY3JvbGxhYmxlLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVTdGF0dXNDb250YWluZXIuYXBwZW5kKHNjcm9sbGFibGVDb250YWluZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvb3BzIG92ZXIgZWFjaCB0b2RvIG9iamVjdCBhbmQgYXBwZW5kcyB0aGVtIHRvIHNjcm9sbGFibGUgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5QnlEdWVTdGF0dXMuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRhaW5lci5hcHBlbmQodG9kb0NvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUtZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVEaXYudGV4dENvbnRlbnQgPSBvYmplY3QudGl0bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvVGl0bGVEaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NEaXYuY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjLWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0Rlc2NEaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY0Rpdi50ZXh0Q29udGVudCA9IG9iamVjdC5kZXNjO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjRGl2LmFwcGVuZChkZXNjUGFyYWdyYXBoKVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVEaXYuY2xhc3NMaXN0LmFkZCgndG9kby1kYXRlLWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVEaXYudGV4dENvbnRlbnQgPSBkaXNwbGF5RHVyYXRpb24ob2JqZWN0LmR1ZURhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kb0RhdGVEaXYudGV4dENvbnRlbnQgPSBgJHtvYmplY3QuZHVyYXRpb25MZWZ0LmRheUxlZnR9IGRheXMsICR7b2JqZWN0LmR1cmF0aW9uTGVmdC5tb250aHNMZWZ0IH0gbW9udGhzIGFuZCAke29iamVjdC5kdXJhdGlvbkxlZnQueWVhcnNMZWZ0fSB5ZWFycyBsZWZ0YDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9EYXRlRGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJvamVjdC1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcm9qZWN0RGl2LnRleHRDb250ZW50ID0gYFByb2plY3Q6ICR7b2JqZWN0LnByb2plY3R9YDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9Qcm9qZWN0RGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdG9kb1ByaW9yaXR5dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kb1ByaW9yaXR5dERpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLXByaW9yaXR5LWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kb1ByaW9yaXR5dERpdi50ZXh0Q29udGVudCA9IG9iamVjdC5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9Qcmlvcml0eXREaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNFTkQgVE8gQSBTRVBBUkFURSBNT0RVTEUgLSBPUEVOUyBUT0RPIElURU1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VG9kbyhvYmplY3QpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdG9kb0Rpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGlzcGxheS1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1haW5Db250YWluZXIuYXBwZW5kKHRvZG9EaXNwbGF5Q29udGFpbmVyKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLmFwcGVuZCh0b2RvRm9ybSlcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHRvZG9EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdG9kb0Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgndG9kby1kaXNwbGF5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdG9kb0Zvcm0uYXBwZW5kKHRvZG9EaXNwbGF5KTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheVRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdUaXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktdGl0bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUudmFsdWUgPSBvYmplY3QudGl0bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheVRpdGxlKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCB0b2RvRGVzY1RleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LWRlc2MnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnRGVzY3JpcHRpb24nKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnY29scycsJzMwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywnMTAnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEudmFsdWUgPSBvYmplY3QuZGVzYztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rlc2NUZXh0QXJlYSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXlEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXlEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheURhdGUudmFsdWUgPSBvYmplY3QuZHVlRGF0ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXlEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5RGF0ZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheURhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyBjb25zdCBsaW5lQnJlYWsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazEpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5UmVtaW5kSW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnNldEF0dHJpYnV0ZSgndHlwZScsJ251bWJlcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktcmVtaW5kLWluJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1JlbWluZCBpbiBob3cgbWFueSBkYXlzPycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnZhbHVlID0gb2JqZWN0LnJlbWluZEluO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4uc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlSZW1pbmRJbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIGNvbnN0IGxpbmVCcmVhazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazIpO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgcHJvamVjdHNEcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Byb2plY3QtZGlzcGxheS1jaG9pY2VzJyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1kaXNwbGF5LWNob2ljZXMnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHByb2plY3RzRHJvcERvd24pO1xuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IHVucHJvY2Vzc2VkUHJvamVjdCA9IHByb2plY3RPYmplY3RzKCkudW5wcm9jZXNzZWRQcm9qZWN0QXJyYXlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYob3B0aW9uc05vZGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNOb2RlLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbjAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG9wdGlvbjAudGV4dENvbnRlbnQgPSBvYmplY3QucHJvamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG9wdGlvbjAudmFsdWUgPSBvYmplY3QucHJvamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHByb2plY3RzRHJvcERvd24uYXBwZW5kKG9wdGlvbjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHVucHJvY2Vzc2VkUHJvamVjdC5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHByb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IG9iai50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLmFwcGVuZChwcm9qZWN0T3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IGZpcnN0QnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGZpcnN0QnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZpcnN0LWJ1dHRvbi1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKGZpcnN0QnV0dG9uQ29udGFpbmVyKVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJpb3JpdHlCdG5EaXYuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYnV0dG9uLWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZmlyc3RCdXR0b25Db250YWluZXIuYXBwZW5kKHByaW9yaXR5QnRuRGl2KVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9kby1kaXNwbGF5LXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5EaXYuYXBwZW5kKHByaW9yaXR5TGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gY29uc3QgbGluZWJyZWFrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBwcmlvcml0eUJ0bkRpdi5hcHBlbmQobGluZWJyZWFrUHJpb3JpdHkpO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxvYmplY3QucHJpb3JpdHkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS50ZXh0Q29udGVudCA9IG9iamVjdC5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5EaXYuYXBwZW5kKHRvZG9EaXNwbGF5UHJpb3JpdHkpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc2VzIGZvciBkaWZmZXJlbnQgcHJpb3JpdGllcyAoZGlmZmVyZW50IGNvbG91cnMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID09PSAnTG93Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9ICdNZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPT09ICdNZWRpdW0nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID0gJ0hpZ2gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnSGlnaCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID09PSAnSGlnaCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPSAnTG93JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0J0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgc3RhdHVzQnRuRGl2LmNsYXNzTGlzdC5hZGQoJ3N0YXR1cy1idXR0b24tZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBmaXJzdEJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoc3RhdHVzQnRuRGl2KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gY29uc3QgbGluZUJyZWFrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazMpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHN0YXR1c0xhYmVsLnRleHRDb250ZW50ID0gJ1N0YXR1czogJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBzdGF0dXNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3RvZG8tZGlzcGxheS1zdGF0dXMnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBzdGF0dXNCdG5EaXYuYXBwZW5kKHN0YXR1c0xhYmVsKTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBjb25zdCBsaW5lQnJlYWs0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrNCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBjcmVhdGUgbGluZSBicmVhayBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheVN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgndmFsdWUnLG9iamVjdC5zdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktc3RhdHVzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSBvYmplY3Quc3RhdHVzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc3RhdHVzQnRuRGl2LmFwcGVuZCh0b2RvRGlzcGxheVN0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyBBZGQgY2xhc3NlcyBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXMgKGRpZmZlcmVudCBjb2xvdXJzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0Rpc3BsYXlTdGF0dXMudmFsdWUgPT09ICdwZW5kaW5nJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMudmFsdWUgPSAnY29tcGxldGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9EaXNwbGF5U3RhdHVzLnZhbHVlID09PSAnY29tcGxldGUnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy52YWx1ZSA9ICdwZW5kaW5nJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy50ZXh0Q29udGVudCA9ICdQZW5kaW5nJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0pO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBzZWNvbmRCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgc2Vjb25kQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlY29uZC1idXR0b24tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZChzZWNvbmRCdXR0b25Db250YWluZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyBjb25zdCBsaW5lQnJlYWs1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWs1KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBkZWxldGVCdG5EaXYuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbi1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNlY29uZEJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZGVsZXRlQnRuRGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRvZG9EZWxldGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGVsZXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRvZG9EZWxldGUuY2xhc3NMaXN0LmFkZCgndG9kby1kZWxldGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBkZWxldGVCdG5EaXYuYXBwZW5kKHRvZG9EZWxldGUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gY29uc3QgbGluZUJyZWFrNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWs2KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdXBkYXRlQnRuRGl2LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24tZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBzZWNvbmRCdXR0b25Db250YWluZXIuYXBwZW5kKHVwZGF0ZUJ0bkRpdik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVXBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUudGV4dENvbnRlbnQgPSAnVXBkYXRlJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdXBkYXRlQnRuRGl2LmFwcGVuZCh0b2RvVXBkYXRlKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB1cGRhdGVUb2RvSXRlbShvYmplY3QpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBkZWxldGVUb2RvSXRlbShvYmplY3QpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZW1wdHlEaXNwbGF5KCk7XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBhcHBlbmRUb2RvT2JqZWN0czsiLCIvLyBpbXBvcnQgcG9wdWxhdGVUb2RvQ29sbGVjdGlvbiBmcm9tIFwiLi9wb3B1bGF0ZURPTVRvZG9Db2xsZWN0aW9uXCI7XG5cbmltcG9ydCBhcHBlbmRQcm9qZWN0T2JqZWN0cyBmcm9tIFwiLi9wb3B1bGF0ZURPTVByb2plY3RDb2xsZWN0aW9uXCI7XG5cbmltcG9ydCB7IGNoYW5nZVByb2plY3RQcmlvcml0eSB9IGZyb20gXCIuLi9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXNcIjtcblxuZnVuY3Rpb24gcHJvamVjdERPTU1vZHVsZSAoKXtcblxuICAgIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1jb250YWluZXInKTtcblxuXG5cblxuICAgIC8vIG1vdmUgdG8gZG9tQWN0aXZpdHlcbiAgICBmdW5jdGlvbiByZW1vdmVFeGlzdGluZ0Rpc3BsYXlET00gKCl7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGRpc3BsYXlDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIFxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgfSk7XG5cbiAgICB9XG5cbiAgICByZW1vdmVFeGlzdGluZ0Rpc3BsYXlET00oKTtcblxuXG4gICAgXG5cblxuICAgIFxuXG5cbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHByb2plY3RDb250YWluZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lci10aXRsZScpO1xuXG4gICAgZGlzcGxheUNvbnRhaW5lci5hcHBlbmQocHJvamVjdENvbnRhaW5lclRpdGxlKTtcblxuICAgICAgICBjb25zdCB0YWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRhYlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RhYi10aXRsZScpO1xuXG4gICAgICAgIHByb2plY3RDb250YWluZXJUaXRsZS5hcHBlbmQodGFiVGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgICAgICAgICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG5cbiAgICAgICAgICAgIHRhYlRpdGxlLmFwcGVuZChwcm9qZWN0SGVhZGVyKTtcblxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgICAgICBwcm9qZWN0UGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ1lvdXIgY29sbGVjdGlvbiBvZiBwcm9qZWN0cyBhcmUgZGlzcGxheWVkIGhlcmUnO1xuXG4gICAgICAgICAgICB0YWJUaXRsZS5hcHBlbmQocHJvamVjdFBhcmFncmFwaCk7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHByaW9yaXR5QnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1idXR0b25zJyk7XG5cbiAgICAgICAgcHJvamVjdENvbnRhaW5lclRpdGxlLmFwcGVuZChwcmlvcml0eUJ1dHRvbnMpO1xuXG4gICAgICAgICAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgaGlnaFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgaGlnaFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgICAgIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9ICdIaWdoJztcblxuICAgICAgICAgICAgcHJpb3JpdHlCdXR0b25zLmFwcGVuZChoaWdoUHJpb3JpdHkpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ21lZGl1bS1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICBtZWRpdW1Qcmlvcml0eS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuXG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kKG1lZGl1bVByaW9yaXR5KTtcblxuXG4gICAgICAgICAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBsb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdsb3ctcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgcHJpb3JpdHlCdXR0b25zLmFwcGVuZChsb3dQcmlvcml0eSk7XG5cbiAgICAgICAgICAgIFxuXG5cblxuXG5cbiAgICBcbiAgICBjb25zdCBjb2xsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb2xsZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbGxlY3Rpb24tY29udGFpbmVyJyk7XG5cbiAgICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZChjb2xsZWN0aW9uQ29udGFpbmVyKTtcblxuXG4gICAgYXBwZW5kUHJvamVjdE9iamVjdHMoJ0hpZ2gnKTtcblxuICAgIGNoYW5nZVByb2plY3RQcmlvcml0eSgpO1xuICAgIFxuICAgIFxuICAgIFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RET01Nb2R1bGU7IiwiaW1wb3J0IHNvcnRpbmdNZXRob2RzIGZyb20gJy4uL2RvbUFjdGl2aXRpZXMvc29ydGluZ01ldGhvZHMnXG5cbmZ1bmN0aW9uIGFsbE5vdGVzVGFiICgpe1xuXG4gICAgY29uc3QgY2xvbmVUb2RvQXJyYXkgPSBzb3J0aW5nTWV0aG9kcy5jbG9uZU9iamVjdCgpLmNsb25lVG9kb0FycmF5O1xuXG4gICAgY29uc3Qgbm90ZXNBcnJheSA9IHNvcnRpbmdNZXRob2RzLm5vdGVTb3J0ZXIoY2xvbmVUb2RvQXJyYXkpO1xuXG5cblxuICAgIHJldHVybiBub3Rlc0FycmF5O1xuXG5cblxufVxuXG5hbGxOb3Rlc1RhYigpO1xuXG5leHBvcnQgZGVmYXVsdCBhbGxOb3Rlc1RhYjsiLCJpbXBvcnQgc29ydGluZ01ldGhvZHMgZnJvbSAnLi4vZG9tQWN0aXZpdGllcy9zb3J0aW5nTWV0aG9kcydcblxuZnVuY3Rpb24gcHJvamVjdHNUYWIgKCl7XG5cbiAgICAgICAgXG5cbiAgICBjb25zdCB1bnByb2Nlc3NlZFByb2plY3RBcnJheSA9IHNvcnRpbmdNZXRob2RzLnNvcnRCeVByb2plY3ROYW1lKCkucHJvY2Vzc2VkUHJvamVjdEFycmF5QnlOYW1lO1xuXG4gICAgXG5cbiAgICAvLyBBbGwgcHJvamVjdHMgYXJlIHN0b3JlZCBoZXJlXG4gICAgLy8gRmlyc3Qgc29ydCB0aGUgcHJvamVjdHMgYnkgcHJpb3JpdHlcbiAgICBjb25zdCBwcm9qZWN0c0J5UHJpb3JpdHkgPSBzb3J0aW5nTWV0aG9kcy5wcmlvcml0eVNvcnRlcih1bnByb2Nlc3NlZFByb2plY3RBcnJheSk7XG5cblxuICAgIFxuXG4gICAgLy8gVGhlbiBzb3J0IHRoZSBub3RlcyBpbiB0aG9zZSBwcm9qZWN0cyBieSBwcmlvcml0eVxuICAgIGZvciAoY29uc3QgcHJpb3JpdHlMZXZlbCBpbiBwcm9qZWN0c0J5UHJpb3JpdHkpIHtcblxuICAgICAgICBwcm9qZWN0c0J5UHJpb3JpdHlbcHJpb3JpdHlMZXZlbF0uZm9yRWFjaChwcm9qZWN0ID0+IHtcblxuICAgICAgICAgICAgLy8gc29ydCBwcmlvcml0eSBvZiB0b2RvQ29sbGVjdGlvblxuICAgICAgICAgICAgY29uc3Qgc29ydEJ5UHJpb3JpdHkgPSBzb3J0aW5nTWV0aG9kcy5wcmlvcml0eVNvcnRlcihwcm9qZWN0LnRvZG9Db2xsZWN0aW9uKVxuXG5cbiAgICAgICAgICAgIC8vIFNvcnQgdG9kb3MgYnkgZHVlIGRhdGVcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJpb3JpdHkgaW4gc29ydEJ5UHJpb3JpdHkpIHtcblxuICAgICAgICAgICAgICAgIHNvcnRCeVByaW9yaXR5W3ByaW9yaXR5XSA9IHNvcnRpbmdNZXRob2RzLnNvcnREdWVEYXRlKHNvcnRCeVByaW9yaXR5W3ByaW9yaXR5XSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZW1wdHkgdG9kb0NvbGxlY3Rpb25cbiAgICAgICAgICAgIHByb2plY3QudG9kb0NvbGxlY3Rpb24gPSBbXTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIG5ldyBrZXkgYW5kIGF0dGFjaCB0aGUgc29ydGVkIG9iamVjdFxuICAgICAgICAgICAgcHJvamVjdC50b2Rvc0J5UHJpb3JpdHkgPSBzb3J0QnlQcmlvcml0eTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuXG4gICAgLy8gU29ydCBwcm9qZWN0cyBieSBkdWUgZGF0ZXNcbiAgICBmb3IgKGNvbnN0IHByaW9yaXR5IGluIHByb2plY3RzQnlQcmlvcml0eSkge1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdHNCeVByaW9yaXR5W3ByaW9yaXR5XSA9IHNvcnRpbmdNZXRob2RzLnNvcnREdWVEYXRlKHByb2plY3RzQnlQcmlvcml0eVtwcmlvcml0eV0pO1xuXG4gICAgfVxuXG5cblxuXG5cblxuXG4gICAgcmV0dXJuIHtwcm9qZWN0c0J5UHJpb3JpdHksdW5wcm9jZXNzZWRQcm9qZWN0QXJyYXl9O1xuXG59XG5cbnByb2plY3RzVGFiKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RzVGFiOyIsIlxuaW1wb3J0IHNvcnRpbmdNZXRob2RzIGZyb20gJy4uL2RvbUFjdGl2aXRpZXMvc29ydGluZ01ldGhvZHMnXG5cbmZ1bmN0aW9uIGFsbFRvZG9zVGFiICgpe1xuXG4gICAgY29uc3QgY2xvbmVUb2RvQXJyYXkgPSBzb3J0aW5nTWV0aG9kcy5jbG9uZU9iamVjdCgpLmNsb25lVG9kb0FycmF5O1xuICAgIGNvbnN0IHNvcnRlZFRvZG9BcnJheSA9IHNvcnRpbmdNZXRob2RzLnByaW9yaXR5U29ydGVyKGNsb25lVG9kb0FycmF5KTtcblxuICAgIGZvciAoY29uc3QgcHJpb3JpdHkgaW4gc29ydGVkVG9kb0FycmF5KSB7XG4gICAgICAgIFxuICAgICAgICBzb3J0ZWRUb2RvQXJyYXlbcHJpb3JpdHldID0gc29ydGluZ01ldGhvZHMuc29ydER1ZURhdGUoc29ydGVkVG9kb0FycmF5W3ByaW9yaXR5XSk7XG5cbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIHNvcnRlZFRvZG9BcnJheTtcblxuXG59XG5cblxuYWxsVG9kb3NUYWIoKTtcblxuZXhwb3J0IGRlZmF1bHQgYWxsVG9kb3NUYWI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgY3JlYXRlTWFpbkRPTSBmcm9tIFwiLi9kb21DcmVhdGlvbi9tYWluRE9NQ3JlYXRpb25cIjtcblxuaW1wb3J0IGRvbUFjdGlvbiBmcm9tIFwiLi9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXNcIjtcblxuaW1wb3J0IGNyZWF0ZVRvZG9ET00gZnJvbSBcIi4vZG9tQ3JlYXRpb24vYWxsVG9kb0RPTUNyZWF0aW9uXCJcblxuXG5cblxuLy8gQWxsIG1vZHVsZXMgc2hvdWxkIHN0YXJ0IGhlcmVcblxuLy8gSE9NRVBBR0VcbmNyZWF0ZU1haW5ET00oKTtcblxuLy8gQXR0YWNoZXMgYWxsIGV2ZW50bGlzdGVuZXJzIHRvIEhPTUVQQUdFXG5kb21BY3Rpb24oKTtcblxuLy8gTG9hZHMgdG9kbyBmaXJzdFxuY3JlYXRlVG9kb0RPTSgpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==