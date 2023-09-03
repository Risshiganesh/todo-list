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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml,\nbody{\n    width: 100%;\n    height: 100%;\n    background: rgb(0,4,78);\n    background: linear-gradient(13deg, rgba(0,4,78,1) 0%, rgba(0,97,101,1) 47%, rgba(0,104,125,1) 100%);\n\n    /* background: rgb(238,174,202);\n    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%); */\n}\n\n\ntextarea {\n    resize: none;\n}\n\n\n\n\n.main-container{\n    position: relative;\n    height: 100%;\n    width: 100vw;\n    display: grid;\n    gap: 5px;\n    grid-template-columns: 200px 1fr;\n    grid-template-rows: 70px 1fr 40px;\n    grid-template-areas:\n    \"top-container top-container\" \n    \"note-menu display-container\"\n    \"todo-container-footer todo-container-footer\";\n\n    \n\n}\n\n\n.note-menu{\n    grid-area: note-menu;\n    height: 100%;\n\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    /* backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px ); */\n    backdrop-filter: blur( 6px );\n    -webkit-backdrop-filter: blur( 6px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    border-left: none;\n\n\n    border-radius: 0px 15px 15px 0px;\n}\n\n.note-menu > div > h1 {\n    cursor: pointer;\n    display: inline;\n}\n\n.tab-container {\n    height: 100%;\n    /* border: 3px solid red; */\n    padding: 10px;\n}\n\n.tab-container > div:hover{\n    background: rgba( 255, 255, 255, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    cursor: pointer;\n}\n\n.all-todos-tab,\n.all-projects-tab,\n.all-notes-tab {\n\n    margin-bottom: 10px;\n    border-radius: 10px;\n    padding: 10px;\n    /* padding-left: 20px; */\n    /* font-size: 15px; */\n    text-align: center;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 12px;\n\n\n    background: rgba(139, 139, 139, 0.25);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: rgba(255, 255, 255, 0.514);\n\n}\n\n\n.menu-tab-active {\n    background-color: rgba(0, 255, 221, 0.37);\n    background-color: rgba(0, 247, 255, 0.582);\n    color: white;\n}\n\n\n.top-container {\n    border: 1px solid red;\n    grid-area: top-container;\n    display: flex;\n    \n    border-radius: 0px 0px 10px 10px;\n\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    border-top: none;\n}\n\n.top-container-spacing {\n    flex: 1;\n}\n\n.brand-container {\n    /* border: 1px solid green; */\n    width: 250px;\n    text-align: center;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    border-radius: 0px 0px 10px 10px;\n    color: rgba(255, 255, 255, 0.623);\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n\n.hamburger-menu {\n    /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */\n    width: 70px;\n    display: none; /*display: block when display is below 600px */ \n    font-size: 40px;\n    text-align: center;\n    color: rgba(255, 255, 255, 0.432);\n    cursor: pointer;\n\n\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n\n\n\n    border-top: none;\n    border-right: none;\n    border-bottom: none;\n    border-radius: 0px 0px 10px 0px;\n\n    \n}\n\n.hamburger-menu > img {\n    width: 50px;\n}\n\n.hamburger-menu > img:hover {\n    width: 60px;\n}\n\n.hamburger-menu > img:active {\n    width: 60px;\n}\n\n.display-container {\n    display: grid;\n    position: relative;\n\n    grid-area: display-container;\n    background-color: cornflowerblue;\n    width: 100%;\n    height: 100%;\n\n    grid-template-rows: 160px 1fr;\n    border-radius: 10px 0px 0px 10px;\n\n\n    /* border: 1px solid red; */\n\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    border-right: none;\n\n\n    grid-template-areas: \n    \"todo-container-title\"\n    \"collection-container\";\n\n}\n\n\n\n\n\n.todo-container-title{\n\n    display: grid;\n    grid-area: todo-container-title;\n    \n    \n}\n.priority-buttons{\n    display: grid;\n    /* border: 1px solid blue; */\n    grid-template-columns: repeat(3,1fr);\n    grid-template-rows: 1fr;\n    width: 350px;\n    gap: 10px;\n    justify-self: center;\n\n}\n\n.priority-buttons > button:hover {\n\n    border: 1px solid rgba(255, 255, 255, 0.459);\n\n}\n\n\n.high-priority,\n.medium-priority,\n.low-priority{\n    background-color: darkolivegreen;\n    appearance: none;\n    height: 40px;\n    border: 1px solid gray;\n    border-radius: 10px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px;\n    font-weight: bold;\n\n\n    background: rgba(255, 255, 255, 0.25);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: rgba(255, 255, 255, 0.753);\n    cursor: pointer;\n}\n\n.chosen-priority{\n    background-color: rgba(0, 199, 33, 0.562);\n    color: white;\n}\n\n.high-priority-chosen {\n    background-color: rgb(223, 0, 0);\n    color: black;\n}\n\n.medium-priority-chosen {\n    background-color: rgb(224, 224, 0);\n    color: black;\n}\n\n.low-priority-chosen {\n    background-color: rgb(0, 214, 0);\n    color: black;\n}\n\n.tab-title{\n    display: grid;\n    padding: 10px 20px;\n    align-self: center;\n    justify-items: center;\n    text-align: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: rgba(255, 255, 255, 0.432);\n    gap: 10px;\n}\n\n.tab-title > h1 {\n    display: inline-block;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.432);\n    padding-bottom: 5px;\n    /* margin-bottom: 50px; */\n    align-self: center;\n    width: 200px;\n}\n\n\n.todo-container-footer{\n\n    display: grid;\n    grid-area: todo-container-footer;\n    background-color: slateblue;\n    align-items: center;\n    justify-items: center;\n\n\n\n\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    border-bottom: none;\n\n    border-radius: 10px 10px 0px 0px;\n}\n\n.link-container > a {\n\n    font-family: Arial, Helvetica, sans-serif;\n    color: rgba(255, 255, 255, 0.432);\n    text-decoration: none;\n    font-size: 12px;\n    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );\n}\n\n\n/* This is the tricky part */\n.collection-container{\n\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    /* border: 3px solid red; */\n    /* background-color: darkcyan; */\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-area: collection-container;\n    padding: 10px;\n    border-radius: 0px 0px 0px 10px;\n    \n\n    /* grid-template-rows: repeat(auto-fill, minmax(350px,1fr)); */\n\n    grid-auto-flow: row;\n\n    /* grid-template-rows: repeat(4, 350px); */\n    /* grid-template-rows: 1fr; */\n    /* overflow-y: auto; */\n    overflow: auto;\n\n    /* display: none; */\n    /* object-fit: cover; */\n    \n\n}\n\n.display-empty {\n    justify-self: center;\n    align-self: center;\n    font-size: 30px;\n    font-weight: bolder;\n    font-family: Arial, Helvetica, sans-serif;\n    color: rgba(255, 255, 255, 0.432);\n}\n\n/* .vertical-scroll{\n    overflow: auto;\n    border: 5px solid blue;\n} */\n\n.status-container{\n\n    /* border: 2px solid fuchsia; */\n    overflow: auto;\n    height: 370px;\n    color: white;\n\n}\n\n\n.status-title {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 20px;\n    font-weight: bold;\n    padding: 10px 0px 10px 10px;\n    /* border-bottom: 1px solid rgba( 255, 255, 255, 0.18 ); */\n}\n\n\n\n\n.overdue-container,\n.due-soon-container,\n.upcoming-container,\n.complete-container{\n\n    display: grid;\n    /* border: 4px solid gold; */\n    height: 300px;\n    width: 100%;\n    /* background-color: indigo; */\n    align-items: center;\n    justify-items: start;\n    \n    overflow: auto;\n\n    justify-items: center;\n\n    padding-left: 20px;\n\n    padding-right: 20px;\n\n\n\n\n    border-radius: 10px;\n    background: #004a5700;\n    box-shadow: inset 5px 5px 10px #003f4a,\n                inset -5px -5px 10px #005564;\n\n\n}\n\n\n.overdue-container > .scrollable-container > .todo-container {\n    background-color: rgba(205, 50, 50, 0.329);\n}\n\n\n.due-soon-container > .scrollable-container > .todo-container {\n    background-color: rgba(255, 255, 0, 0.459);\n}\n\n\n.upcoming-container > .scrollable-container > .todo-container {\n    background-color: rgba(2, 0, 128, 0.301);\n}\n\n.complete-container > .scrollable-container > .todo-container {\n    background-color: rgba(0, 128, 0, 0.521);\n}\n\n\n.scrollable-container{\n\n    display: grid;\n    column-gap: 20px;\n    grid-auto-flow: column; /*This was what i wanted to do*/\n    \n    /* border: 4px solid brown; */\n\n}\n\n.todo-container{\n    width: 300px;\n    height: 220px;\n\n    padding: 15px;\n    background: rgba( 255, 255, 255, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    font-family: Arial, Helvetica, sans-serif;\n    \n}\n\n.todo-title-div {\n\n    font-size: 18px;\n    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );\n    margin-bottom: 5px;\n    padding-bottom: 5px;\n    text-overflow: ellipsis;\n    /* text-align: center; */\n    overflow: hidden;\n\n}\n\n\n.todo-desc-div {\n    /* border: 1px solid white; */\n    height: 120px;\n    text-overflow: ellipsis;\n    font-size: 15px;\n    overflow: hidden;\n    word-wrap: break-word;\n    /* border-bottom: 1px solid rgba( 255, 255, 255, 0.18 ); */\n    margin-bottom: 10px;\n    /* padding-bottom: 5px; */\n}\n\n.todo-date-div,\n.todo-project-div {\n    font-size: 13px;\n    text-align: end;\n}\n\n\n\n\n\n\n\n\n\n.todo-display-container {\n    display: grid;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.473);\n    align-items: center;\n    justify-items: center;\n    z-index: 2;\n    left: 0;\n}\n\n.todo-display {\n    \n    background-color: purple;\n    width: 300px;\n    /* height: 550px; */\n    border-radius: 10px;\n    padding: 10px;\n    display: grid;\n    \n}\n\n.main-todo-display {\n\n    \n    grid-template-rows: 40px 1fr 30px 30px 35px 60px 60px;\n\n}\n\n\n#todo-display-title  {\n    appearance: none;\n    /* height: 35px; */\n    width: 100%;\n    padding: 0px 10px 0px 10px;\n    text-align: center;\n    border-radius: 5px;\n    font-size: 16px;\n\n    background: rgba( 2, 2, 2, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n\n}\n\n#todo-display-desc {\n    appearance: none;\n    width: 100%;\n    padding: 10px 10px 0px 10px;\n    border-radius: 5px;\n    font-size: 15px;\n\n    background: rgba( 2, 2, 2, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n#todo-display-date {\n\n    appearance: none;\n    width: 100%;\n    padding: 5px 10px 5px 10px;\n    border-radius: 5px;\n    font-size: 15px;\n    font-family: Arial, Helvetica, sans-serif;\n    /* align-items: center; */\n\n    background: rgba( 2, 2, 2, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n}\n\n#todo-display-remind-in {\n\n    appearance: none;\n    width: 100%;\n    padding: 5px 10px 5px 10px;\n    border-radius: 5px;\n    font-size: 15px;\n    font-family: Arial, Helvetica, sans-serif;\n    /* align-items: center; */\n\n    background: rgba( 2, 2, 2, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n\n\n}\n\n\n\n#project-display-choices {\n    text-align: center;\n\n    /* appearance: none; */\n    width: 100%;\n    border-radius: 5px;\n    font-size: 15px;\n    font-family: Arial, Helvetica, sans-serif;\n    /* align-items: center; */\n\n    background: rgba( 2, 2, 2, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n}\n\n\n\n.first-button-container,\n.second-button-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    align-items: center;\n    justify-items: center;\n}\n\n\n.first-button-container > div {\n    display: grid;\n    justify-items: center;\n    gap: 5px;\n}\n\n.first-button-container > div > label{\n    font-size: 13px;\n}\n\n\n#todo-display-priority,\n#todo-display-status  {\n    justify-self: center;\n    width: 100px;\n    height: 30px;\n    background: rgba( 255, 255, 255, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n    cursor: pointer;\n}\n\n#todo-display-priority:hover,\n#todo-display-status:hover{\n    border: 1px solid rgba(255, 255, 255, 0.589);\n}\n\n\n#todo-update,\n#todo-delete {\n    appearance: none;\n\n    width: 100px;\n    height: 30px;\n    border-radius: 5px;\n\n    /* background: rgba( 255, 255, 255, 0.25 ); */\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n    cursor: pointer;\n\n   \n\n}\n\n\n#todo-delete{\n    background-color: rgba(255, 0, 0, 0.644);\n}\n\n#todo-delete:hover{\n    background-color: rgba(255, 0, 0, 0.863);\n}\n\n#todo-update{\n    background-color: rgba(115, 255, 0, 0.651);\n}\n\n#todo-update:hover{\n    background-color: rgba(115, 255, 0, 0.897);\n}\n\n\n.pop-up-container {\n    background-color: rgba(0, 0, 0, 0.445);\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    z-index: 3;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    \n}\n\n.pop-up {\n    width: 300px;\n    height: 200px;\n    /* background-color: white; */\n    border-radius: 10px;\n    padding: 20px;\n\n    background: rgba( 2, 2, 2, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    display: grid;\n    grid-auto-rows: 1fr 50px;\n}\n\n.pop-up-content-div{\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    text-align: center;\n}\n\n.pop-up-button-container{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    align-items: end;\n\n}\n\n.pop-up-button-container > button {\n    width: 80px;\n    height: 30px;\n    border-radius: 7px;\n}\n\n\n\n\n\n.project-container{\n    width: 320px;\n    height: 250px;\n \n    padding: 15px;\n    background: rgba( 255, 255, 255, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border-radius: 10px;\n\n    display: grid;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    \n}\n\n\n\n.project-title-div {\n\n    font-size: 25px;\n    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );\n    /* margin-bottom: 5px;\n    padding-bottom: 5px; */\n    text-overflow: ellipsis;\n    text-align: center;\n    overflow: hidden;\n    align-self: end;\n    padding-bottom: 10px;\n\n}\n\n\n.project-desc-div {\n    /* border: 1px solid white; */\n    height: 120px;\n    text-overflow: ellipsis;\n    font-size: 15px;\n    overflow: hidden;\n    word-wrap: break-word;\n    /* border-bottom: 1px solid rgba( 255, 255, 255, 0.18 ); */\n    margin-bottom: 10px;\n    padding: 10px;\n    /* padding-bottom: 5px; */\n}\n\n.project-date-div{\n    font-size: 13px;\n    text-align: end;\n    align-self: end;\n}\n\n\n\n\n.project-todo-container {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    /* border: 2px solid dodgerblue; */\n    background-color: rgba(122, 122, 122, 0.582);\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    z-index: 2;\n}\n\n.project-display {\n\n    width: 350px;\n    background-color: rgba(165, 0, 102, 0.705);\n    border-radius: 10px;\n\n\n\n    /* border: 1px solid rgba(255, 255, 255, 0); */\n    \n    /* height: 750px; */\n    /* background-color: darkgreen; */\n    padding: 10px;\n    border-radius: 10px;\n    /* overflow: auto; */\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n\n}\n\n.project-details{\n\n    width: 100%;\n    display: grid;\n    gap: 10px;\n}\n\n#project-title-update{\n    appearance: none;\n    width: 100%;\n    font-size: 15px;\n    font-family: Arial, Helvetica, sans-serif;\n    text-align: center;\n    color: white;\n\n\n    padding: 5px;\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    display: grid;\n}\n\n#project-desc-update {\n    appearance: none;\n    width: 100%;\n\n\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n\n\n    padding: 5px;\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n\n}\n\n#project-date-update{\n\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n\n\n    padding: 5px;\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n\n}\n\n\n#project-reminder-update{\n\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n\n\n    padding: 5px;\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n\n}\n\n.project-buttons-one,\n.project-buttons-two{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    gap: 5px;\n    \n}\n\n.project-buttons-one > div {\n    display: grid;\n    text-align: center;\n    gap: 5px;\n}\n\n.project-buttons-one > div > label {\n    font-size: 12px;\n    /* text-decoration: underline; */\n}\n\n\n.project-buttons-one > div > button,\n.project-buttons-two > button{\n    appearance: none;\n   border-radius: 5px;\n\n\n   padding: 5px;\n   background: rgba( 255, 255, 255, 0.25 );\n   box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n   backdrop-filter: blur( 6.5px );\n   -webkit-backdrop-filter: blur( 6.5px );\n   /* border-radius: 10px; */\n   border: 1px solid rgba(255, 255, 255, 0);\n   color: white;\n\n}\n\n#project-priority-update,\n#project-status-update{\n    color: white;\n    cursor: pointer;\n}\n\n#project-priority-update:hover,\n#project-status-update:hover{\n    border: 1px solid rgba(255, 255, 255, 0.589);\n}\n\n.project-todos{\n\n  \n    width: 100%;\n    height: 350px;\n    background-color: slateblue;\n    overflow: auto;\n    font-family: Arial, Helvetica, sans-serif;\n    /* display: grid; */\n    /* grid-template-rows: 30px 1fr; */\n\n\n    padding: 7px;\n    background: rgba(255, 0, 140, 0.25);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    /* border-radius: 10px; */\n    border-radius: 5px;\n    /* border: 1px solid rgba(255, 255, 255, 0); */\n    /* border: 1px solid rgba(255, 1, 119, 0.76); */\n\n}\n\n#project-delete{\n    background-color: rgba(255, 0, 0, 0.644);\n    cursor: pointer;\n}\n\n#project-update{\n    background-color: rgba(115, 255, 0, 0.651);\n    cursor: pointer;\n}\n\n\n#project-delete:hover{\n    background-color: rgba(255, 0, 0, 0.877);\n}\n\n#project-update:hover{\n    background-color: rgba(115, 255, 0, 0.877);\n}\n\n.priority-title{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 15px;\n    color: white;\n    text-align: center;\n    padding-bottom: 5px;\n}\n\n.todo-project-status-title{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 13px;\n    color: white;\n    text-align: center;\n    /* border: 1px solid rgba(255, 1, 119, 0.76); */\n    border-radius: 10px;\n    padding: 5px;\n\n\n    /* background: rgba(129, 129, 129, 0.25); */\n    /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */\n    /* backdrop-filter: blur( 6.5px ); */\n    /* -webkit-backdrop-filter: blur( 6.5px ); */\n    border-radius: 10px;\n}\n\n\n.todo-in-project-container {\n\n    width: 250px;\n    height: 220px;\n\n    padding: 15px;\n    background: rgba(83, 83, 83, 0.25);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.todo-status-container{\n\n    /* border: 2px solid fuchsia; */\n    overflow: auto;\n    border-radius: 10px;\n    /* height: 100%; */\n    /* height: 350px; */\n    /* grid-auto-flow: column; */\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    /* backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px ); */\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n\n}\n\n.overdue-todos,\n.due-soon-todos,\n.upcoming-todos,\n.complete-todos{\n\n    display: grid;\n    /* border: 4px solid gold; */\n    /* height: 320px; */\n    /* width: 100%;\n    background-color: rgb(56, 56, 255);\n    align-items: start;\n    justify-items: center; */\n    \n    /* overflow: auto; */\n\n\n\n\n    display: grid;\n    /* border: 4px solid gold; */\n    width: 100%;\n    /* background-color: indigo; */\n    align-items: center;\n    justify-items: start;\n    \n    overflow: auto;\n\n    justify-items: center;\n\n    padding: 5px 20px 5px 20px;\n\n}\n\n\n.scrollable-todo-container{\n\n    display: grid;\n    row-gap: 10px;\n    /* height: 400px; */\n    grid-auto-flow: row; /*This was what i wanted to do*/\n    color: white;\n    grid-auto-flow: column;\n\n    gap: 5px;\n    \n    /* border: 4px solid brown; */\n\n}\n\n.yes-button,\n.no-button{\n    background: rgba( 255, 255, 255, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n}\n\n.yes-button{\n    background-color: rgba(115, 255, 0, 0.651);\n}\n\n.no-button{\n    background-color: rgba(255, 0, 0, 0.644);\n}\n\n\n\n\n\n\n.notes-collection{\n\n    display: grid;\n    height: 100%;\n    width: 100%;\n    /* background-color: indigo; */\n    align-items: start;\n    overflow: auto;\n    gap: 15px;\n    grid-template-columns: repeat(auto-fill, minmax(300px,1fr)); \n \n}\n\n\n.notes-container{\n    width: 100%;\n    height: 300px;\n\n    padding: 15px;\n    background: rgba(116, 116, 116, 0.25);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    \n}\n\n.note-display {\n    background-color: rgba(51, 0, 71, 0.651);\n    width: 350px;\n    height: 400px;\n    border-radius: 10px;\n    padding: 10px;\n    display: grid;\n    grid-template-rows: 40px 1fr 40px;\n    gap: 5px;\n\n\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n}\n\n.note-title {\n    font-size: 22px;\n    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );\n    margin-bottom: 5px;\n    padding-bottom: 5px;\n    text-overflow: ellipsis;\n    /* text-align: center; */\n    overflow: hidden;\n    border-radius: 5px;\n}\n\n.note-desc {\n    /* border: 1px solid white; */\n    height: 230px;\n    text-overflow: ellipsis;\n    font-size: 15px;\n    overflow: hidden;\n    word-wrap: break-word;\n    border-radius: 5px;\n\n}\n\n\n.note-button-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: end;\n    justify-items: center;\n}\n\n\n\n\n/* FORM BUTTON */\n\n.form-button-container{\n    position: fixed;\n    bottom: 70px;\n    right: 0;\n    width: 100px;\n    height: 100px;\n    border-radius: 50% 0% 0% 50%;\n    background-color: rgb(9, 48, 92);\n    display: grid;\n    align-items: center;\n    justify-content: center;\n\n\n\n    background: rgba( 0, 0, 0, 0.25 );\nbox-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\nbackdrop-filter: blur( 6.5px );\n-webkit-backdrop-filter: blur( 6.5px );\nborder: 1px solid rgba( 255, 255, 255, 0.18 );\nborder-right: none;\n    \n}\n\n.form-button{\n    width: 70px;\n    height: 70px;\n    border-radius: 50%;\n    font-size: 50px;\n\n\n    background: rgba(82, 82, 82, 0);\n    /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px ); */\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n}\n\n\n\n.form-button:hover{\n    background: rgba(82, 82, 82, 0.349);\n}\n\n/* TODO CREATION FORM */\n\n\n.form-container{\n\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(128, 128, 128, 0.527);\n    display: grid;\n    /* padding-top: 100px; */\n    align-items: start;\n    justify-items: center;\n    overflow: auto;\n    /* padding-bottom: 100px; */\n    display: none;\n    z-index: 2;\n    left: 0px;\n    height: max(370px, 100%);\n\n\n}\n\n.show-form{\n    display: grid;\n}\n\n.todo-creation-form {\n    /* position: fixed; */\n    width: 320px;\n    \n    /* background-color: maroon; */\n    padding: 10px;\n    /* border-radius: 10px; */\n    display: grid;\n    /* height: max(370px, 100%); */\n    height: 100%;\n    justify-items: center;\n    grid-template-rows: 1fr;\n\n    overflow: auto;\n    font-family: Arial, Helvetica, sans-serif;\n\n\n    background: rgba(0, 0, 0, 0.473);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    /* border-radius: 10px; */\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    border-top: none;\n    border-bottom: none;\n    \n}\n\n.todo-creation-form > form {\n    width: 100%;\n    /* height: 300px; */\n    display: grid;\n    align-items: center;\n\n}\n\n#todo-date,\n#project-date{\n    font-family: Arial, Helvetica, sans-serif;\n   \n}\n\n\nfieldset {\n    border: none;\n    text-align: center;\n    width: 100%;\n    /* height: 100%; */\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    font-size: 13px;\n\n   \n}\n\nlegend {\n    margin-bottom: 13px;\n}\n\n\n\n.input-collection{\n    display: grid;\n    gap: 5px;\n    color: white;\n}\n\n.input-container {\n    width: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n    display: grid;\n    gap: 5px;\n}\n\n.radio-input-container {\n    display: grid;\n    gap: 5px;\n    grid-template-columns: 1fr 1fr;\n    accent-color: teal;\n    padding: 5px 0px 5px 0px;\n}\n\n.radio-input-container > div {\n    \n    /* grid-template-rows: 1fr; */\n    /* padding: 5px 0px 5px 0px; */\n    display: grid;\n    grid-template-columns: 40px 1fr;\n    justify-items: end;\n    gap: 5px;\n    \n   \n}\n\n\n\n.radio-input-container > div > label {\n    \n    justify-self: start;\n   \n}\n\n\n\n\n.input-container > input {\n    appearance: none;\n    width: 100%;\n    height: 25px;\n    color: white;\n    padding: 0px 5px 0px 5px;\n\n\n    background: rgba(0, 0, 0, 0.596);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    /* backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px ); */\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    font-family: Arial, Helvetica, sans-serif;\n\n}\n\n.input-container > textarea {\n    appearance: none;\n    width: 100%;\n\n    /* height: 25px; */\n    color: white;\n    padding: 5px 5px 0px 5px;\n\n    font-family: Arial, Helvetica, sans-serif;\n\n\n    background: rgba(0, 0, 0, 0.596);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    /* backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px ); */\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    /* height: 100%; */\n}\n\n.todo-creation-title {\n    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );\n    padding: 5px;\n    margin-bottom: 5px;\n}\n\n.project-creation-title {\n    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );\n    padding: 5px;\n}\n\n#todo-priority,\n#project-priority {\n    background: rgba( 255, 255, 255, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    /* backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px ); */\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    height: 25px;\n    color: white;\n    cursor: pointer;\n}\n#todo-priority:hover,\n#project-priority:hover{\n    border: 1px solid rgba(255, 255, 255, 0.753);\n}\n\n.create-new-todo{\n    /* border: 3px solid forestgreen; */\n    display: none;\n}\n\n.select-existing-project{\n    /* border: 3px solid skyblue; */\n    display: none;\n}\n\n.create-new-project{\n    /* border: 3px solid crimson; */\n    display: none;\n}\n\n#project-choices {\n    background: rgba(0, 105, 96, 0.795);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    /* backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px ); */\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    height: 25px;\n    color: white;\n    text-align: center;\n}\n\n.display-form-items{\n    display: grid;\n    gap: 5px;\n}\n\n#form-submit{\n    appearance: none;\n    background-color: rgba(0, 255, 21, 0.541);\n\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    /* backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px ); */\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    height: 45px;\n    color: white;\n    cursor: pointer;\n    font-size: 15px;\n    margin-top: 15px;\n}\n\n#form-submit:hover{\n    background-color: rgba(0, 255, 21, 0.753);\n}\n\n\n/* Mobile version */\n\n@media screen and (max-width: 600px) {\n    \n\n    .hamburger-menu {\n        display: grid;\n        align-items: center;\n        justify-items: center;\n    }\n\n    .hamburger-menu:active{\n\n\n        background: rgba(0, 0, 0, 0.514);\n        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n        backdrop-filter: blur( 6.5px );\n        -webkit-backdrop-filter: blur( 6.5px );\n    }\n\n    .main-container {\n        /* border: 1px solid blue; */\n        display: grid;\n        grid-template-rows: 70px 1fr 40px;\n        grid-template-columns: 1fr 300px;\n        grid-template-areas: \n        \"top-container top-container\" \n        \"display-container display-container\"\n        \"todo-container-footer todo-container-footer\";\n        padding: 0px 5px 0px 5px;\n    \n    \n    \n    }\n\n    .top-container{\n        border-radius: 0px 0px 10px 10px;\n    }\n\n    .display-container,\n    .collection-container{\n        border-radius: 10px;\n        /* margin: 0px 5px 0px 5px; */\n    }\n\n    .display-container{\n        padding: 5px;\n    }\n\n    \n\n    .note-menu {\n        position: absolute;\n        display: grid;\n        justify-self: end;\n        align-self: end;\n        grid-row: 2/3;\n        grid-column: 2/3;\n        /* height: 90%; */\n        display: none;\n        width: 200px;\n        z-index: 1;\n        border-radius: 15px 0px 0px 15px;\n        /* to correct for main container padding */\n        right: -5px;\n        border: 1px solid rgba( 255, 255, 255, 0.18 );\n        border-right: none;\n        /* border: none; */\n        /* background: rgba(0, 0, 0, 0.473); */\n        background: rgba(0, 0, 0, 0.322);\n    }\n\n    .project-todo-container{\n        left: 0px;\n    }\n\n\n    .all-todos-tab,\n    .all-projects-tab,\n    .all-notes-tab {\n\n        margin-bottom: 10px;\n        border-radius: 10px;\n        padding: 10px;\n        padding-right: 20px;\n        /* font-size: 15px; */\n        text-align: right;\n        \n    }\n\n    .menu-active { /*triggers when hamburger menu is clicked*/\n        display: grid;\n    }\n}"],"sourceRoot":""}]);
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

                console.log('CLEANED UP PROJECTS !!!')

                projectArray.splice(index,1)

                --index;

            }
            
        }

        localStorageUpdate();

    }

    // clean up empty projects
    cleanUpProjects();
    

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

                console.log('CLEANED UP TODOS !!!')

                todoArray.splice(index,1)

                --index;

            }
            
        }

        localStorageUpdate();

    }

    // clean up empty projects
    cleanUpTodos();




    function localStorageUpdate(){

        console.log('SET LOCAL STORAGE');

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
    // console.log('GET LOCAL STORAGE');
    // console.log(JSON.parse(localStorage.getItem('todoArray')))
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

                console.log('TODO DELETED')

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
        console.log('TODOS DISPLAY UPDATED');

        (0,_domCreation_populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_9__["default"])(priorityInDisplay);

    }

    if(menuInDisplay === 'projects'){

        console.log('TODOS PROJECTS UPDATED');

        (0,_domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__["default"])(priorityInDisplay);

    }

    if (menuInDisplay === 'notes') {

        console.log('TODOS NOTES UPDATED');
        
        (0,_domCreation_populateDOMNoteCollection__WEBPACK_IMPORTED_MODULE_11__["default"])();

    }


    if (menuInDisplay === 'todos' || menuInDisplay === 'projects') {

        const highPriorityButton = document.querySelector('.high-priority');
        const mediumPriorityButton = document.querySelector('.medium-priority');
        const lowPriorityButton = document.querySelector('.low-priority');



        if (priorityInDisplay === 'High') {
            console.log('HIGH PRIORITY CHOSEN')

            highPriorityButton.classList.add('high-priority-chosen');

            mediumPriorityButton.classList.remove('medium-priority-chosen');

            lowPriorityButton.classList.remove('low-priority-chosen');

        }

        if (priorityInDisplay === 'Medium') {
            console.log('MEDIUM PRIORITY CHOSEN')

            highPriorityButton.classList.remove('high-priority-chosen');

            mediumPriorityButton.classList.add('medium-priority-chosen');

            lowPriorityButton.classList.remove('low-priority-chosen');



        }

        if (priorityInDisplay=== 'Low') {
            console.log('LOW PRIORITY CHOSEN')

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
                console.log('why are you running?')

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
            console.log('NEW PROJECT')
            checkedNewProject();
        }

        if(selectExistingProject.checked){
            console.log('EXISTING PROJECT')
            checkedExistingProject();
        }

    })





    







    const allTodosTab = document.querySelector('.all-todos-tab');

    allTodosTab.addEventListener('click',function(){

        

        console.log('TO DO LIST');

        menuInDisplay = 'todos';

        (0,_domCreation_allTodoDOMCreation__WEBPACK_IMPORTED_MODULE_6__["default"])();

    });

    const allProjectsTab = document.querySelector('.all-projects-tab')

    allProjectsTab.addEventListener('click',function(){

        console.log('PROJECTS TAB');

        menuInDisplay = 'projects';

        (0,_domCreation_projectsDOMCreation__WEBPACK_IMPORTED_MODULE_7__["default"])()

    })


    const allNotesTab = document.querySelector('.all-notes-tab');

    allNotesTab.addEventListener('click',function(){

        console.log('NOTES LIST');

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
        console.log('LOOPING')

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
        console.log('LOOPING')
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
        console.log('LOOPING')
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
        console.log('LOOPING')

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
        console.log('LOOPING')
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
        console.log('LOOPING')
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

            console.log('FILTERING WORKS')
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

                console.log('TODO PROJECT UPDATE')
    
                const getLatestProjectObject = (0,_tabObjects_allProjectsTab__WEBPACK_IMPORTED_MODULE_4__["default"])().unprocessedProjectArray;
    
                console.log(getLatestProjectObject)
    
                let latestProject = '';
    
                getLatestProjectObject.forEach(project => {
    
                    // console.log(project);
    
                    // console.log(clickedProject);
    
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
    
                console.log('PROJECT UPDATED?????');
          
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

            console.log('FILTERING WORKS')
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

            console.log('FILTERING WORKS')
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


        // console.log(dueSortedArray);

            
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
    console.log('BOOM BOOM!');

    console.log(project.todosByPriority);                                           

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
            console.log('works!')
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

                    // console.log(specifiedObjByPriority);
    
                    for (const prop in specifiedObjByPriority) {
    
                        if (prop === property) {
    
                            // contains array of todo objects of each due status
                            const arrayByDueStatus = specifiedObjByPriority[prop];
    
                            if (arrayByDueStatus.length === 0){
    
                                continue;
    
                            }

                            console.log('runs')
    
    
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

        // console.log('main dOm');
    


    

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
                                    // console.log(object.title);

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
                        //         // console.log(object.title);

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
    // console.log(allProjectObject);

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
                                                // console.log('BOOM BOOM!');

                                                // console.log(project.todosByPriority);                                           

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
                                                //         console.log('works!')
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

    console.log('NOTES TAB');

    console.log(notesArray);

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





    console.log('PROJECTS TAB');

    console.log(projectsByPriority);


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


    console.log(sortedTodoArray);

    return sortedTodoArray;


}

console.log('TODO TAB');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7QUFJQTtBQUNBOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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LE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLHNCQUFzQixXQUFXLFlBQVksYUFBYSxhQUFhLFlBQVksYUFBYSxhQUFhLGdCQUFnQixhQUFhLGFBQWEsYUFBYSxlQUFlLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLFdBQVcsV0FBVyxZQUFZLGVBQWUsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsZUFBZSxPQUFPLFFBQVEsV0FBVyxNQUFNLFVBQVUsY0FBYyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsYUFBYSxPQUFPLE1BQU0sYUFBYSxRQUFRLE9BQU8sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFFBQVEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGlCQUFpQixhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxRQUFRLFlBQVksT0FBTyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxjQUFjLGNBQWMsY0FBYyxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksZUFBZSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxXQUFXLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsVUFBVSxTQUFTLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsWUFBWSxhQUFhLGNBQWMsaUJBQWlCLGFBQWEsYUFBYSxNQUFNLFNBQVMsUUFBUSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxNQUFNLFVBQVUsWUFBWSwwQkFBMEIsY0FBYyxPQUFPLEtBQUssVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxlQUFlLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxXQUFXLE9BQU8sT0FBTyxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxTQUFTLEtBQUssYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxTQUFTLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFFBQVEsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLFlBQVksUUFBUSxNQUFNLGFBQWEsV0FBVyxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxhQUFhLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLGFBQWEsU0FBUyxNQUFNLFVBQVUsWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsV0FBVyxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxnQkFBZ0IsY0FBYyxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsY0FBYyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksYUFBYSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sTUFBTSxZQUFZLGFBQWEsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxRQUFRLE1BQU0sWUFBWSxhQUFhLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxRQUFRLE1BQU0sWUFBWSxlQUFlLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxlQUFlLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxRQUFRLE1BQU0sVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxhQUFhLGNBQWMsT0FBTyxTQUFTLFVBQVUsWUFBWSxhQUFhLFFBQVEsUUFBUSxpQkFBaUIsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsWUFBWSxhQUFhLGNBQWMsUUFBUSxNQUFNLFVBQVUsVUFBVSxZQUFZLHlCQUF5QixXQUFXLGFBQWEsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLGFBQWEsUUFBUSxLQUFLLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFVBQVUsYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGdCQUFnQixhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxZQUFZLE9BQU8sT0FBTyxhQUFhLFdBQVcsU0FBUyxLQUFLLFlBQVksT0FBTyxjQUFjLE9BQU8sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxjQUFjLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFlBQVksWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxjQUFjLFdBQVcsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsT0FBTyxNQUFNLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFFBQVEsTUFBTSxhQUFhLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLGNBQWMsYUFBYSxhQUFhLE1BQU0sT0FBTyxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxZQUFZLFlBQVksV0FBVyxhQUFhLGVBQWUsYUFBYSxhQUFhLE1BQU0sT0FBTyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sT0FBTyxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE9BQU8sYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksY0FBYyxhQUFhLE1BQU0sT0FBTyxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsUUFBUSxPQUFPLGdCQUFnQixPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFNBQVMsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLFFBQVEsWUFBWSxhQUFh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QUFDQTs7QUFFQSxRQUFRLGtGQUFzQjs7QUFFOUI7O0FBRUE7O0FBRUE7O0FBRUEsUUFBUSxzRkFBb0I7O0FBRTVCOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLG1GQUFpQjs7QUFFekI7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOzs7O0FBSUE7QUFDQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7O0FBR0w7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7Ozs7QUFLQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7OztBQUlBOztBQUVBOzs7O0FB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QVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7Ozs7QUFJVDs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7OztBQU1BOztBQUVBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVU7O0FBRWxCOztBQUVBOztBQUVBOztBQUVBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7Ozs7QUFJVDs7Ozs7Ozs7OztBQVVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLFFBQVEsdURBQWE7O0FBRXJCOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7Ozs7QUFJVDs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7OztBQUlyQjs7OztBQUlBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBLGdC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O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7Ozs7OztBQU1BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLGlCQUFpQjs7OztBQUlqQjs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxpQkFBaUI7O0FBRWpCOzs7Ozs7OztBQVFBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7OztBQUdiO0FBQ0EsWUFBWSxtRUFBcUI7O0FBRWpDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7O0FBR0E7OztBQUdBLFlBQVksK0VBQWlCOztBQUU3QixZQUFZLCtFQUFpQjs7O0FBRzdCOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUOzs7QUFHQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7O0FDcFc2Qjs7QUFFc0I7OztBQUdoRjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0EsK0NBQStDLHNFQUFjOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOzs7OztBQUtyQjs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxxQkFBcUI7O0FBRXJCOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EscUJBQXFCOzs7O0FBSXJCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBLFlBQVksNEVBQWM7O0FBRTFCLFlBQVksNEVBQWM7O0FBRTFCOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsV2M7O0FBRXhDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOzs7O0FBSUw7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywrQkFBK0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRiw2QkFBNkIsUUFBUSxnQ0FBZ0MsYUFBYSwrQkFBK0I7QUFDck07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyx3REFBVzs7QUFFdkQseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7Ozs7OztBQU1MOzs7QUFHQSxpRUFBZSxxQkFBcUI7Ozs7Ozs7Ozs7Ozs7OztBQy9NcEM7QUFDeUQ7O0FBRXpEOztBQUVBOzs7O0FBSUE7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7O0FBSUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLGlDQUFpQzs7O0FBR2pDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7OztBQUdBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLGlDQUFpQzs7O0FBR2pDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQSx1REFBdUQsc0VBQWM7OztBQUdyRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFF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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUEscUVBQXFFLDZFQUFlOztBQUVwRjs7OztBQUlBO0FBQ0E7O0FBRUEsZ0RBQWdELDJEQUFjOztBQUU5RDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxnRUFBZ0U7OztBQUdoRTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxnRUFBZ0U7Ozs7QUFJaEU7O0FBRUE7Ozs7OztBQU1BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxnRUFBZ0U7O0FBRWhFOzs7Ozs7OztBQVFBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDs7O0FBRzVEOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOzs7QUFHQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7OztBQUd4RCw2Q0FBNkM7OztBQUc3Qzs7QUFFQSxpQ0FBaUM7QUFDakM7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7O0FBR0EsSUFBSSwwRUFBWTs7QUFFaEI7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxvQkFBb0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzY2U7QUFDbkQ7QUFDMEQ7O0FBRTFEO0FBQ0E7O0FBRStHOztBQUV2RTs7O0FBR3hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7OztBQUlMLDBCQUEwQixtRUFBVTs7QUFFcEM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsZ0NBQWdDLCtCQUErQjs7O0FBRy9EOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBLGtFQUFrRSw2RUFBZTs7QUFFakYsd0VBQXdFLDZCQUE2QixRQUFRLGlDQUFpQyxhQUFhLCtCQUErQjs7QUFFMUw7OztBQUdBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUEsaUZBQWlGLGVBQWU7O0FBRWhHOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQSx3Q0FBd0Msd0RBQVc7O0FBRW5EOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREOzs7OztBQUs1RDs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSw0REFBNEQ7O0FBRTVEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsNERBQTREOzs7O0FBSTVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EscUNBQXFDOztBQUVyQyxpQ0FBaUM7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSSwwRUFBWTs7QUFFaEI7OztBQUdBLGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3JoQmhDOztBQUVrRTs7QUFFSzs7QUFFdkU7O0FBRUE7Ozs7O0FBS0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7O0FBR0E7OztBQUdBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7QUFNQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQSxJQUFJLHlFQUFvQjs7QUFFeEIsSUFBSSxtRkFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7O0FDdEg2Qjs7QUFFNUQ7O0FBRUEsMkJBQTJCLHFFQUFjOztBQUV6Qyx1QkFBdUIscUVBQWM7O0FBRXJDOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJrQzs7QUFFNUQ7O0FBRUE7O0FBRUEsb0NBQW9DLHFFQUFjOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLHFFQUFjOzs7QUFHN0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1DQUFtQyxxRUFBYzs7O0FBR2pEO0FBQ0E7O0FBRUEsMkNBQTJDLHFFQUFjOztBQUV6RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFFQUFjOztBQUVyRDs7Ozs7O0FBTUE7O0FBRUE7OztBQUdBLFlBQVk7O0FBRVo7O0FBRUE7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFa0M7O0FBRTVEOztBQUVBLDJCQUEyQixxRUFBYztBQUN6Qyw0QkFBNEIscUVBQWM7O0FBRTFDO0FBQ0E7QUFDQSxvQ0FBb0MscUVBQWM7O0FBRWxEOzs7QUFHQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7O1VDekIxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjs7QUFFcUM7O0FBRUo7O0FBRU07Ozs7O0FBSzVEOztBQUVBO0FBQ0Esd0VBQWE7O0FBRWI7QUFDQSx3RUFBUzs7QUFFVDtBQUNBLDJFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlVG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUFjdGl2aXRpZXMvZG9tQWN0aXZpdGllcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tQWN0aXZpdGllcy9zb3J0aW5nTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tQ3JlYXRpb24vYWxsTm90ZXNET01DcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tQ3JlYXRpb24vYWxsVG9kb0RPTUNyZWF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21DcmVhdGlvbi9kaXNwbGF5UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tQ3JlYXRpb24vZGlzcGxheVRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL2Rpc3BsYXlUb2Rvc0luUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tQ3JlYXRpb24vZm9ybURPTUNyZWF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21DcmVhdGlvbi9tYWluRE9NQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL3BvcHVsYXRlRE9NTm90ZUNvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL3BvcHVsYXRlRE9NUHJvamVjdENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL3BvcHVsYXRlRE9NVG9kb0NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL3Byb2plY3RzRE9NQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RhYk9iamVjdHMvYWxsTm90ZXNUYWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RhYk9iamVjdHMvYWxsUHJvamVjdHNUYWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RhYk9iamVjdHMvYWxsVG9kb3NUYWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLFxuYm9keXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiKDAsNCw3OCk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzZGVnLCByZ2JhKDAsNCw3OCwxKSAwJSwgcmdiYSgwLDk3LDEwMSwxKSA0NyUsIHJnYmEoMCwxMDQsMTI1LDEpIDEwMCUpO1xuXG4gICAgLyogYmFja2dyb3VuZDogcmdiKDIzOCwxNzQsMjAyKTtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDIzOCwxNzQsMjAyLDEpIDAlLCByZ2JhKDE0OCwxODcsMjMzLDEpIDEwMCUpOyAqL1xufVxuXG5cbnRleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG59XG5cblxuXG5cbi5tYWluLWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogNXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAxZnIgNDBweDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwidG9wLWNvbnRhaW5lciB0b3AtY29udGFpbmVyXCIgXG4gICAgXCJub3RlLW1lbnUgZGlzcGxheS1jb250YWluZXJcIlxuICAgIFwidG9kby1jb250YWluZXItZm9vdGVyIHRvZG8tY29udGFpbmVyLWZvb3RlclwiO1xuXG4gICAgXG5cbn1cblxuXG4ubm90ZS1tZW51e1xuICAgIGdyaWQtYXJlYTogbm90ZS1tZW51O1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTsgKi9cbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDZweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2cHggKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG5cblxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxNXB4IDE1cHggMHB4O1xufVxuXG4ubm90ZS1tZW51ID4gZGl2ID4gaDEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi50YWItY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgcmVkOyAqL1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi50YWItY29udGFpbmVyID4gZGl2OmhvdmVye1xuICAgIGJhY2tncm91bmQ6IHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hbGwtdG9kb3MtdGFiLFxuLmFsbC1wcm9qZWN0cy10YWIsXG4uYWxsLW5vdGVzLXRhYiB7XG5cbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDIwcHg7ICovXG4gICAgLyogZm9udC1zaXplOiAxNXB4OyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEycHg7XG5cblxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTM5LCAxMzksIDEzOSwgMC4yNSk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTE0KTtcblxufVxuXG5cbi5tZW51LXRhYi1hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAyMjEsIDAuMzcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjQ3LCAyNTUsIDAuNTgyKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuLnRvcC1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICBncmlkLWFyZWE6IHRvcC1jb250YWluZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcblxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLnRvcC1jb250YWluZXItc3BhY2luZyB7XG4gICAgZmxleDogMTtcbn1cblxuLmJyYW5kLWNvbnRhaW5lciB7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjIzKTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuXG4uaGFtYnVyZ2VyLW1lbnUge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTsgKi9cbiAgICB3aWR0aDogNzBweDtcbiAgICBkaXNwbGF5OiBub25lOyAvKmRpc3BsYXk6IGJsb2NrIHdoZW4gZGlzcGxheSBpcyBiZWxvdyA2MDBweCAqLyBcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cblxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XG5cblxuXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMHB4O1xuXG4gICAgXG59XG5cbi5oYW1idXJnZXItbWVudSA+IGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbi5oYW1idXJnZXItbWVudSA+IGltZzpob3ZlciB7XG4gICAgd2lkdGg6IDYwcHg7XG59XG5cbi5oYW1idXJnZXItbWVudSA+IGltZzphY3RpdmUge1xuICAgIHdpZHRoOiA2MHB4O1xufVxuXG4uZGlzcGxheS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgZ3JpZC1hcmVhOiBkaXNwbGF5LWNvbnRhaW5lcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE2MHB4IDFmcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcblxuXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xuXG4gICAgYmFja2dyb3VuZDogcmdiYSggMCwgMCwgMCwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuXG5cbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICBcInRvZG8tY29udGFpbmVyLXRpdGxlXCJcbiAgICBcImNvbGxlY3Rpb24tY29udGFpbmVyXCI7XG5cbn1cblxuXG5cblxuXG4udG9kby1jb250YWluZXItdGl0bGV7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXJlYTogdG9kby1jb250YWluZXItdGl0bGU7XG4gICAgXG4gICAgXG59XG4ucHJpb3JpdHktYnV0dG9uc3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBnYXA6IDEwcHg7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG5cbn1cblxuLnByaW9yaXR5LWJ1dHRvbnMgPiBidXR0b246aG92ZXIge1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1OSk7XG5cbn1cblxuXG4uaGlnaC1wcmlvcml0eSxcbi5tZWRpdW0tcHJpb3JpdHksXG4ubG93LXByaW9yaXR5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtvbGl2ZWdyZWVuO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cblxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUzKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaG9zZW4tcHJpb3JpdHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxOTksIDMzLCAwLjU2Mik7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGlnaC1wcmlvcml0eS1jaG9zZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDAsIDApO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm1lZGl1bS1wcmlvcml0eS1jaG9zZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyNCwgMCk7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4ubG93LXByaW9yaXR5LWNob3NlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDIxNCwgMCk7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4udGFiLXRpdGxle1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKTtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi50YWItdGl0bGUgPiBoMSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIC8qIG1hcmdpbi1ib3R0b206IDUwcHg7ICovXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiAyMDBweDtcbn1cblxuXG4udG9kby1jb250YWluZXItZm9vdGVye1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IHRvZG8tY29udGFpbmVyLWZvb3RlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWJsdWU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cblxuXG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG5cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcbn1cblxuLmxpbmstY29udGFpbmVyID4gYSB7XG5cbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMik7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xufVxuXG5cbi8qIFRoaXMgaXMgdGhlIHRyaWNreSBwYXJ0ICovXG4uY29sbGVjdGlvbi1jb250YWluZXJ7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIHJlZDsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjsgKi9cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtYXJlYTogY29sbGVjdGlvbi1jb250YWluZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAxMHB4O1xuICAgIFxuXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzUwcHgsMWZyKSk7ICovXG5cbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMzUwcHgpOyAqL1xuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogMWZyOyAqL1xuICAgIC8qIG92ZXJmbG93LXk6IGF1dG87ICovXG4gICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xuICAgIC8qIG9iamVjdC1maXQ6IGNvdmVyOyAqL1xuICAgIFxuXG59XG5cbi5kaXNwbGF5LWVtcHR5IHtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzIpO1xufVxuXG4vKiAudmVydGljYWwtc2Nyb2xse1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsdWU7XG59ICovXG5cbi5zdGF0dXMtY29udGFpbmVye1xuXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZnVjaHNpYTsgKi9cbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBoZWlnaHQ6IDM3MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcblxufVxuXG5cbi5zdGF0dXMtdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDEwcHg7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTsgKi9cbn1cblxuXG5cblxuLm92ZXJkdWUtY29udGFpbmVyLFxuLmR1ZS1zb29uLWNvbnRhaW5lcixcbi51cGNvbWluZy1jb250YWluZXIsXG4uY29tcGxldGUtY29udGFpbmVye1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICAvKiBib3JkZXI6IDRweCBzb2xpZCBnb2xkOyAqL1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogaW5kaWdvOyAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XG4gICAgXG4gICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXG5cblxuXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDA0YTU3MDA7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgNXB4IDVweCAxMHB4ICMwMDNmNGEsXG4gICAgICAgICAgICAgICAgaW5zZXQgLTVweCAtNXB4IDEwcHggIzAwNTU2NDtcblxuXG59XG5cblxuLm92ZXJkdWUtY29udGFpbmVyID4gLnNjcm9sbGFibGUtY29udGFpbmVyID4gLnRvZG8tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNSwgNTAsIDUwLCAwLjMyOSk7XG59XG5cblxuLmR1ZS1zb29uLWNvbnRhaW5lciA+IC5zY3JvbGxhYmxlLWNvbnRhaW5lciA+IC50b2RvLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMC40NTkpO1xufVxuXG5cbi51cGNvbWluZy1jb250YWluZXIgPiAuc2Nyb2xsYWJsZS1jb250YWluZXIgPiAudG9kby1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMCwgMTI4LCAwLjMwMSk7XG59XG5cbi5jb21wbGV0ZS1jb250YWluZXIgPiAuc2Nyb2xsYWJsZS1jb250YWluZXIgPiAudG9kby1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjUyMSk7XG59XG5cblxuLnNjcm9sbGFibGUtY29udGFpbmVye1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47IC8qVGhpcyB3YXMgd2hhdCBpIHdhbnRlZCB0byBkbyovXG4gICAgXG4gICAgLyogYm9yZGVyOiA0cHggc29saWQgYnJvd247ICovXG5cbn1cblxuLnRvZG8tY29udGFpbmVye1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDIyMHB4O1xuXG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIFxufVxuXG4udG9kby10aXRsZS1kaXYge1xuXG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbn1cblxuXG4udG9kby1kZXNjLWRpdiB7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC8qIHBhZGRpbmctYm90dG9tOiA1cHg7ICovXG59XG5cbi50b2RvLWRhdGUtZGl2LFxuLnRvZG8tcHJvamVjdC1kaXYge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cblxuXG5cblxuXG5cblxuXG4udG9kby1kaXNwbGF5LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NzMpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDI7XG4gICAgbGVmdDogMDtcbn1cblxuLnRvZG8tZGlzcGxheSB7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICAvKiBoZWlnaHQ6IDU1MHB4OyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIFxufVxuXG4ubWFpbi10b2RvLWRpc3BsYXkge1xuXG4gICAgXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmciAzMHB4IDMwcHggMzVweCA2MHB4IDYwcHg7XG5cbn1cblxuXG4jdG9kby1kaXNwbGF5LXRpdGxlICB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAvKiBoZWlnaHQ6IDM1cHg7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyLCAyLCAyLCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxufVxuXG4jdG9kby1kaXNwbGF5LWRlc2Mge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyLCAyLCAyLCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuI3RvZG8tZGlzcGxheS1kYXRlIHtcblxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuXG4gICAgYmFja2dyb3VuZDogcmdiYSggMiwgMiwgMiwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiN0b2RvLWRpc3BsYXktcmVtaW5kLWluIHtcblxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuXG4gICAgYmFja2dyb3VuZDogcmdiYSggMiwgMiwgMiwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBjb2xvcjogd2hpdGU7XG5cblxufVxuXG5cblxuI3Byb2plY3QtZGlzcGxheS1jaG9pY2VzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAvKiBhcHBlYXJhbmNlOiBub25lOyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cblxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDIsIDIsIDIsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cblxuLmZpcnN0LWJ1dHRvbi1jb250YWluZXIsXG4uc2Vjb25kLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuXG4uZmlyc3QtYnV0dG9uLWNvbnRhaW5lciA+IGRpdiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5maXJzdC1idXR0b24tY29udGFpbmVyID4gZGl2ID4gbGFiZWx7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5cbiN0b2RvLWRpc3BsYXktcHJpb3JpdHksXG4jdG9kby1kaXNwbGF5LXN0YXR1cyAge1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3RvZG8tZGlzcGxheS1wcmlvcml0eTpob3ZlcixcbiN0b2RvLWRpc3BsYXktc3RhdHVzOmhvdmVye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41ODkpO1xufVxuXG5cbiN0b2RvLXVwZGF0ZSxcbiN0b2RvLWRlbGV0ZSB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcblxuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgLyogYmFja2dyb3VuZDogcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4yNSApOyAqL1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgXG5cbn1cblxuXG4jdG9kby1kZWxldGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNjQ0KTtcbn1cblxuI3RvZG8tZGVsZXRlOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjg2Myk7XG59XG5cbiN0b2RvLXVwZGF0ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwgMjU1LCAwLCAwLjY1MSk7XG59XG5cbiN0b2RvLXVwZGF0ZTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwgMjU1LCAwLCAwLjg5Nyk7XG59XG5cblxuLnBvcC11cC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NDUpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIFxufVxuXG4ucG9wLXVwIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyLCAyLCAyLCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1yb3dzOiAxZnIgNTBweDtcbn1cblxuLnBvcC11cC1jb250ZW50LWRpdntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBvcC11cC1idXR0b24tY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuXG59XG5cbi5wb3AtdXAtYnV0dG9uLWNvbnRhaW5lciA+IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuXG5cblxuXG4ucHJvamVjdC1jb250YWluZXJ7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gXG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBcbn1cblxuXG5cbi5wcm9qZWN0LXRpdGxlLWRpdiB7XG5cbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICAvKiBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDsgKi9cbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cbn1cblxuXG4ucHJvamVjdC1kZXNjLWRpdiB7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLyogcGFkZGluZy1ib3R0b206IDVweDsgKi9cbn1cblxuLnByb2plY3QtZGF0ZS1kaXZ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XG59XG5cblxuXG5cbi5wcm9qZWN0LXRvZG8tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGRvZGdlcmJsdWU7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDEyMiwgMTIyLCAwLjU4Mik7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4ucHJvamVjdC1kaXNwbGF5IHtcblxuICAgIHdpZHRoOiAzNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwgMCwgMTAyLCAwLjcwNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuXG5cbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApOyAqL1xuICAgIFxuICAgIC8qIGhlaWdodDogNzUwcHg7ICovXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuOyAqL1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG5cbn1cblxuLnByb2plY3QtZGV0YWlsc3tcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4jcHJvamVjdC10aXRsZS11cGRhdGV7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuXG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cbiNwcm9qZWN0LWRlc2MtdXBkYXRlIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuXG5cbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG5cblxuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcblxufVxuXG4jcHJvamVjdC1kYXRlLXVwZGF0ZXtcblxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuXG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuXG59XG5cblxuI3Byb2plY3QtcmVtaW5kZXItdXBkYXRle1xuXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xuXG5cbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSggMCwgMCwgMCwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG5cbn1cblxuLnByb2plY3QtYnV0dG9ucy1vbmUsXG4ucHJvamVjdC1idXR0b25zLXR3b3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZ2FwOiA1cHg7XG4gICAgXG59XG5cbi5wcm9qZWN0LWJ1dHRvbnMtb25lID4gZGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbn1cblxuLnByb2plY3QtYnV0dG9ucy1vbmUgPiBkaXYgPiBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAqL1xufVxuXG5cbi5wcm9qZWN0LWJ1dHRvbnMtb25lID4gZGl2ID4gYnV0dG9uLFxuLnByb2plY3QtYnV0dG9ucy10d28gPiBidXR0b257XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuXG4gICBwYWRkaW5nOiA1cHg7XG4gICBiYWNrZ3JvdW5kOiByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjI1ICk7XG4gICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cbiAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICBjb2xvcjogd2hpdGU7XG5cbn1cblxuI3Byb2plY3QtcHJpb3JpdHktdXBkYXRlLFxuI3Byb2plY3Qtc3RhdHVzLXVwZGF0ZXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcHJvamVjdC1wcmlvcml0eS11cGRhdGU6aG92ZXIsXG4jcHJvamVjdC1zdGF0dXMtdXBkYXRlOmhvdmVye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41ODkpO1xufVxuXG4ucHJvamVjdC10b2Rvc3tcblxuICBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlYmx1ZTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAvKiBkaXNwbGF5OiBncmlkOyAqL1xuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAxZnI7ICovXG5cblxuICAgIHBhZGRpbmc6IDdweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMTQwLCAwLjI1KTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XG4gICAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTsgKi9cbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMSwgMTE5LCAwLjc2KTsgKi9cblxufVxuXG4jcHJvamVjdC1kZWxldGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNjQ0KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNwcm9qZWN0LXVwZGF0ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwgMjU1LCAwLCAwLjY1MSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbiNwcm9qZWN0LWRlbGV0ZTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC44NzcpO1xufVxuXG4jcHJvamVjdC11cGRhdGU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDI1NSwgMCwgMC44NzcpO1xufVxuXG4ucHJpb3JpdHktdGl0bGV7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLnRvZG8tcHJvamVjdC1zdGF0dXMtdGl0bGV7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDEsIDExOSwgMC43Nik7ICovXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG5cblxuICAgIC8qIGJhY2tncm91bmQ6IHJnYmEoMTI5LCAxMjksIDEyOSwgMC4yNSk7ICovXG4gICAgLyogYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7ICovXG4gICAgLyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApOyAqL1xuICAgIC8qIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApOyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cblxuLnRvZG8taW4tcHJvamVjdC1jb250YWluZXIge1xuXG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjIwcHg7XG5cbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoODMsIDgzLCA4MywgMC4yNSk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4udG9kby1zdGF0dXMtY29udGFpbmVye1xuXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZnVjaHNpYTsgKi9cbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cbiAgICAvKiBoZWlnaHQ6IDM1MHB4OyAqL1xuICAgIC8qIGdyaWQtYXV0by1mbG93OiBjb2x1bW47ICovXG4gICAgYmFja2dyb3VuZDogcmdiYSggMCwgMCwgMCwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApOyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuXG59XG5cbi5vdmVyZHVlLXRvZG9zLFxuLmR1ZS1zb29uLXRvZG9zLFxuLnVwY29taW5nLXRvZG9zLFxuLmNvbXBsZXRlLXRvZG9ze1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICAvKiBib3JkZXI6IDRweCBzb2xpZCBnb2xkOyAqL1xuICAgIC8qIGhlaWdodDogMzIwcHg7ICovXG4gICAgLyogd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA1NiwgMjU1KTtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyOyAqL1xuICAgIFxuICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xuXG5cblxuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICAvKiBib3JkZXI6IDRweCBzb2xpZCBnb2xkOyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGluZGlnbzsgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xuICAgIFxuICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG4gICAgcGFkZGluZzogNXB4IDIwcHggNXB4IDIwcHg7XG5cbn1cblxuXG4uc2Nyb2xsYWJsZS10b2RvLWNvbnRhaW5lcntcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcm93LWdhcDogMTBweDtcbiAgICAvKiBoZWlnaHQ6IDQwMHB4OyAqL1xuICAgIGdyaWQtYXV0by1mbG93OiByb3c7IC8qVGhpcyB3YXMgd2hhdCBpIHdhbnRlZCB0byBkbyovXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG5cbiAgICBnYXA6IDVweDtcbiAgICBcbiAgICAvKiBib3JkZXI6IDRweCBzb2xpZCBicm93bjsgKi9cblxufVxuXG4ueWVzLWJ1dHRvbixcbi5uby1idXR0b257XG4gICAgYmFja2dyb3VuZDogcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnllcy1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDI1NSwgMCwgMC42NTEpO1xufVxuXG4ubm8tYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjY0NCk7XG59XG5cblxuXG5cblxuXG4ubm90ZXMtY29sbGVjdGlvbntcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGluZGlnbzsgKi9cbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZ2FwOiAxNXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LDFmcikpOyBcbiBcbn1cblxuXG4ubm90ZXMtY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAwcHg7XG5cbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTE2LCAxMTYsIDExNiwgMC4yNSk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBcbn1cblxuLm5vdGUtZGlzcGxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgMCwgNzEsIDAuNjUxKTtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyIDQwcHg7XG4gICAgZ2FwOiA1cHg7XG5cblxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xufVxuXG4ubm90ZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubm90ZS1kZXNjIHtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgKi9cbiAgICBoZWlnaHQ6IDIzMHB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbn1cblxuXG4ubm90ZS1idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuXG5cblxuLyogRk9STSBCVVRUT04gKi9cblxuLmZvcm0tYnV0dG9uLWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiA3MHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAwJSAwJSA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDksIDQ4LCA5Mik7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cblxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcbmJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XG5ib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG5ib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgXG59XG5cbi5mb3JtLWJ1dHRvbntcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcblxuXG4gICAgYmFja2dyb3VuZDogcmdiYSg4MiwgODIsIDgyLCAwKTtcbiAgICAvKiBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5cbi5mb3JtLWJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDgyLCA4MiwgODIsIDAuMzQ5KTtcbn1cblxuLyogVE9ETyBDUkVBVElPTiBGT1JNICovXG5cblxuLmZvcm0tY29udGFpbmVye1xuXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTI3KTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC8qIHBhZGRpbmctdG9wOiAxMDBweDsgKi9cbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC8qIHBhZGRpbmctYm90dG9tOiAxMDBweDsgKi9cbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHotaW5kZXg6IDI7XG4gICAgbGVmdDogMHB4O1xuICAgIGhlaWdodDogbWF4KDM3MHB4LCAxMDAlKTtcblxuXG59XG5cbi5zaG93LWZvcm17XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLnRvZG8tY3JlYXRpb24tZm9ybSB7XG4gICAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBtYXJvb247ICovXG4gICAgcGFkZGluZzogMTBweDtcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogaGVpZ2h0OiBtYXgoMzcwcHgsIDEwMCUpOyAqL1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG5cbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcblxuXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ3Myk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIFxufVxuXG4udG9kby1jcmVhdGlvbi1mb3JtID4gZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogaGVpZ2h0OiAzMDBweDsgKi9cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxuI3RvZG8tZGF0ZSxcbiNwcm9qZWN0LWRhdGV7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICBcbn1cblxuXG5maWVsZHNldCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcblxuICAgXG59XG5cbmxlZ2VuZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcbn1cblxuXG5cbi5pbnB1dC1jb2xsZWN0aW9ue1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW5wdXQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogNXB4O1xufVxuXG4ucmFkaW8taW5wdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogNXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBhY2NlbnQtY29sb3I6IHRlYWw7XG4gICAgcGFkZGluZzogNXB4IDBweCA1cHggMHB4O1xufVxuXG4ucmFkaW8taW5wdXQtY29udGFpbmVyID4gZGl2IHtcbiAgICBcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjsgKi9cbiAgICAvKiBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7ICovXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcbiAgICBnYXA6IDVweDtcbiAgICBcbiAgIFxufVxuXG5cblxuLnJhZGlvLWlucHV0LWNvbnRhaW5lciA+IGRpdiA+IGxhYmVsIHtcbiAgICBcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgXG59XG5cblxuXG5cbi5pbnB1dC1jb250YWluZXIgPiBpbnB1dCB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweDtcblxuXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU5Nik7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgLyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7ICovXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcblxufVxuXG4uaW5wdXQtY29udGFpbmVyID4gdGV4dGFyZWEge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAvKiBoZWlnaHQ6IDI1cHg7ICovXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweCA1cHggMHB4IDVweDtcblxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTk2KTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTsgKi9cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cbn1cblxuLnRvZG8tY3JlYXRpb24tdGl0bGUge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnByb2plY3QtY3JlYXRpb24tdGl0bGUge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4jdG9kby1wcmlvcml0eSxcbiNwcm9qZWN0LXByaW9yaXR5IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgLyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7ICovXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiN0b2RvLXByaW9yaXR5OmhvdmVyLFxuI3Byb2plY3QtcHJpb3JpdHk6aG92ZXJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1Myk7XG59XG5cbi5jcmVhdGUtbmV3LXRvZG97XG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgZm9yZXN0Z3JlZW47ICovXG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNlbGVjdC1leGlzdGluZy1wcm9qZWN0e1xuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIHNreWJsdWU7ICovXG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNyZWF0ZS1uZXctcHJvamVjdHtcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBjcmltc29uOyAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNwcm9qZWN0LWNob2ljZXMge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTA1LCA5NiwgMC43OTUpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApOyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXNwbGF5LWZvcm0taXRlbXN7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDVweDtcbn1cblxuI2Zvcm0tc3VibWl0e1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDIxLCAwLjU0MSk7XG5cbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTsgKi9cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4jZm9ybS1zdWJtaXQ6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDIxLCAwLjc1Myk7XG59XG5cblxuLyogTW9iaWxlIHZlcnNpb24gKi9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBcblxuICAgIC5oYW1idXJnZXItbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuaGFtYnVyZ2VyLW1lbnU6YWN0aXZle1xuXG5cbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUxNCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XG4gICAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIH1cblxuICAgIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAxZnIgNDBweDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzAwcHg7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICBcInRvcC1jb250YWluZXIgdG9wLWNvbnRhaW5lclwiIFxuICAgICAgICBcImRpc3BsYXktY29udGFpbmVyIGRpc3BsYXktY29udGFpbmVyXCJcbiAgICAgICAgXCJ0b2RvLWNvbnRhaW5lci1mb290ZXIgdG9kby1jb250YWluZXItZm9vdGVyXCI7XG4gICAgICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweDtcbiAgICBcbiAgICBcbiAgICBcbiAgICB9XG5cbiAgICAudG9wLWNvbnRhaW5lcntcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XG4gICAgfVxuXG4gICAgLmRpc3BsYXktY29udGFpbmVyLFxuICAgIC5jb2xsZWN0aW9uLWNvbnRhaW5lcntcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgLyogbWFyZ2luOiAwcHggNXB4IDBweCA1cHg7ICovXG4gICAgfVxuXG4gICAgLmRpc3BsYXktY29udGFpbmVye1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxuXG4gICAgXG5cbiAgICAubm90ZS1tZW51IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xuICAgICAgICBncmlkLXJvdzogMi8zO1xuICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgICAgICAvKiBoZWlnaHQ6IDkwJTsgKi9cbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDBweCAwcHggMTVweDtcbiAgICAgICAgLyogdG8gY29ycmVjdCBmb3IgbWFpbiBjb250YWluZXIgcGFkZGluZyAqL1xuICAgICAgICByaWdodDogLTVweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgIC8qIGJvcmRlcjogbm9uZTsgKi9cbiAgICAgICAgLyogYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ3Myk7ICovXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMjIpO1xuICAgIH1cblxuICAgIC5wcm9qZWN0LXRvZG8tY29udGFpbmVye1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgfVxuXG5cbiAgICAuYWxsLXRvZG9zLXRhYixcbiAgICAuYWxsLXByb2plY3RzLXRhYixcbiAgICAuYWxsLW5vdGVzLXRhYiB7XG5cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgLyogZm9udC1zaXplOiAxNXB4OyAqL1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLm1lbnUtYWN0aXZlIHsgLyp0cmlnZ2VycyB3aGVuIGhhbWJ1cmdlciBtZW51IGlzIGNsaWNrZWQqL1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtR0FBbUc7O0lBRW5HOzRGQUN3RjtB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QWdCO0FBQ3BCOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOzs7QUFHQSxtQkFBbUI7O0FBRW5COzs7SUFHSTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIscUJBQXFCO0lBQ3pCOztJQUVBOzs7UUFHSSxnQ0FBZ0M7UUFDaEMsa0RBQWtEO1FBQ2xELDhCQUE4QjtRQUM5QixzQ0FBc0M7SUFDMUM7O0lBRUE7UUFDSSw0QkFBNEI7UUFDNUIsYUFBYTtRQUNiLGlDQUFpQztRQUNqQyxnQ0FBZ0M7UUFDaEM7OztxREFHNkM7UUFDN0Msd0JBQXdCOzs7O0lBSTVCOztJQUVBO1FBQ0ksZ0NBQWdDO0lBQ3BDOztJQUVBOztRQUVJLG1CQUFtQjtRQUNuQiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOzs7O0lBSUE7UUFDSSxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLFlBQVk7UUFDWixVQUFVO1FBQ1YsZ0NBQWdDO1FBQ2hDLDBDQUEwQztRQUMxQyxXQUFXO1FBQ1gsNkNBQTZDO1FBQzdDLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsc0NBQXNDO1FBQ3RDLGdDQUFnQztJQUNwQzs7SUFFQTtRQUNJLFNBQVM7SUFDYjs7O0lBR0E7Ozs7UUFJSSxtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLGlCQUFpQjs7SUFFckI7O0lBRUEsZUFBZSwwQ0FBMEM7UUFDckQsYUFBYTtJQUNqQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCw0LDc4KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzZGVnLCByZ2JhKDAsNCw3OCwxKSAwJSwgcmdiYSgwLDk3LDEwMSwxKSA0NyUsIHJnYmEoMCwxMDQsMTI1LDEpIDEwMCUpO1xcblxcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2IoMjM4LDE3NCwyMDIpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDIzOCwxNzQsMjAyLDEpIDAlLCByZ2JhKDE0OCwxODcsMjMzLDEpIDEwMCUpOyAqL1xcbn1cXG5cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuXFxuXFxuXFxuLm1haW4tY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAxZnIgNDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcInRvcC1jb250YWluZXIgdG9wLWNvbnRhaW5lclxcXCIgXFxuICAgIFxcXCJub3RlLW1lbnUgZGlzcGxheS1jb250YWluZXJcXFwiXFxuICAgIFxcXCJ0b2RvLWNvbnRhaW5lci1mb290ZXIgdG9kby1jb250YWluZXItZm9vdGVyXFxcIjtcXG5cXG4gICAgXFxuXFxufVxcblxcblxcbi5ub3RlLW1lbnV7XFxuICAgIGdyaWQtYXJlYTogbm90ZS1tZW51O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTsgKi9cXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDZweCApO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcblxcblxcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDtcXG59XFxuXFxuLm5vdGUtbWVudSA+IGRpdiA+IGgxIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi50YWItY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCByZWQ7ICovXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50YWItY29udGFpbmVyID4gZGl2OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWxsLXRvZG9zLXRhYixcXG4uYWxsLXByb2plY3RzLXRhYixcXG4uYWxsLW5vdGVzLXRhYiB7XFxuXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIC8qIHBhZGRpbmctbGVmdDogMjBweDsgKi9cXG4gICAgLyogZm9udC1zaXplOiAxNXB4OyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuXFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTM5LCAxMzksIDEzOSwgMC4yNSk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTE0KTtcXG5cXG59XFxuXFxuXFxuLm1lbnUtdGFiLWFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAyMjEsIDAuMzcpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI0NywgMjU1LCAwLjU4Mik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuLnRvcC1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIGdyaWQtYXJlYTogdG9wLWNvbnRhaW5lcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG59XFxuXFxuLnRvcC1jb250YWluZXItc3BhY2luZyB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5icmFuZC1jb250YWluZXIge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgKi9cXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjIzKTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcbi5oYW1idXJnZXItbWVudSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTsgKi9cXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qZGlzcGxheTogYmxvY2sgd2hlbiBkaXNwbGF5IGlzIGJlbG93IDYwMHB4ICovIFxcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuXFxuXFxuXFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDBweDtcXG5cXG4gICAgXFxufVxcblxcbi5oYW1idXJnZXItbWVudSA+IGltZyB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uaGFtYnVyZ2VyLW1lbnUgPiBpbWc6aG92ZXIge1xcbiAgICB3aWR0aDogNjBweDtcXG59XFxuXFxuLmhhbWJ1cmdlci1tZW51ID4gaW1nOmFjdGl2ZSB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4uZGlzcGxheS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIGdyaWQtYXJlYTogZGlzcGxheS1jb250YWluZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE2MHB4IDFmcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XFxuXFxuXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSggMCwgMCwgMCwgMC4yNSApO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuXFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwidG9kby1jb250YWluZXItdGl0bGVcXFwiXFxuICAgIFxcXCJjb2xsZWN0aW9uLWNvbnRhaW5lclxcXCI7XFxuXFxufVxcblxcblxcblxcblxcblxcbi50b2RvLWNvbnRhaW5lci10aXRsZXtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiB0b2RvLWNvbnRhaW5lci10aXRsZTtcXG4gICAgXFxuICAgIFxcbn1cXG4ucHJpb3JpdHktYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcbn1cXG5cXG4ucHJpb3JpdHktYnV0dG9ucyA+IGJ1dHRvbjpob3ZlciB7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NTkpO1xcblxcbn1cXG5cXG5cXG4uaGlnaC1wcmlvcml0eSxcXG4ubWVkaXVtLXByaW9yaXR5LFxcbi5sb3ctcHJpb3JpdHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtvbGl2ZWdyZWVuO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1Myk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNob3Nlbi1wcmlvcml0eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxOTksIDMzLCAwLjU2Mik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpZ2gtcHJpb3JpdHktY2hvc2VuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMCwgMCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLm1lZGl1bS1wcmlvcml0eS1jaG9zZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjQsIDApO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5sb3ctcHJpb3JpdHktY2hvc2VuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDIxNCwgMCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRhYi10aXRsZXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzIpO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi50YWItdGl0bGUgPiBoMSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzIpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICAvKiBtYXJnaW4tYm90dG9tOiA1MHB4OyAqL1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuXFxuLnRvZG8tY29udGFpbmVyLWZvb3RlcntcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiB0b2RvLWNvbnRhaW5lci1mb290ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlYmx1ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcblxcblxcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xcbn1cXG5cXG4ubGluay1jb250YWluZXIgPiBhIHtcXG5cXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxufVxcblxcblxcbi8qIFRoaXMgaXMgdGhlIHRyaWNreSBwYXJ0ICovXFxuLmNvbGxlY3Rpb24tY29udGFpbmVye1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIHJlZDsgKi9cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLWFyZWE6IGNvbGxlY3Rpb24tY29udGFpbmVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAxMHB4O1xcbiAgICBcXG5cXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzUwcHgsMWZyKSk7ICovXFxuXFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuXFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDM1MHB4KTsgKi9cXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7ICovXFxuICAgIC8qIG92ZXJmbG93LXk6IGF1dG87ICovXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcblxcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbiAgICAvKiBvYmplY3QtZml0OiBjb3ZlcjsgKi9cXG4gICAgXFxuXFxufVxcblxcbi5kaXNwbGF5LWVtcHR5IHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzIpO1xcbn1cXG5cXG4vKiAudmVydGljYWwtc2Nyb2xse1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmx1ZTtcXG59ICovXFxuXFxuLnN0YXR1cy1jb250YWluZXJ7XFxuXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGZ1Y2hzaWE7ICovXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDM3MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcblxcbi5zdGF0dXMtdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAxMHB4O1xcbiAgICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApOyAqL1xcbn1cXG5cXG5cXG5cXG5cXG4ub3ZlcmR1ZS1jb250YWluZXIsXFxuLmR1ZS1zb29uLWNvbnRhaW5lcixcXG4udXBjb21pbmctY29udGFpbmVyLFxcbi5jb21wbGV0ZS1jb250YWluZXJ7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGJvcmRlcjogNHB4IHNvbGlkIGdvbGQ7ICovXFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcblxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcblxcblxcblxcblxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDA0YTU3MDA7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDVweCA1cHggMTBweCAjMDAzZjRhLFxcbiAgICAgICAgICAgICAgICBpbnNldCAtNXB4IC01cHggMTBweCAjMDA1NTY0O1xcblxcblxcbn1cXG5cXG5cXG4ub3ZlcmR1ZS1jb250YWluZXIgPiAuc2Nyb2xsYWJsZS1jb250YWluZXIgPiAudG9kby1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNSwgNTAsIDUwLCAwLjMyOSk7XFxufVxcblxcblxcbi5kdWUtc29vbi1jb250YWluZXIgPiAuc2Nyb2xsYWJsZS1jb250YWluZXIgPiAudG9kby1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjQ1OSk7XFxufVxcblxcblxcbi51cGNvbWluZy1jb250YWluZXIgPiAuc2Nyb2xsYWJsZS1jb250YWluZXIgPiAudG9kby1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDAsIDEyOCwgMC4zMDEpO1xcbn1cXG5cXG4uY29tcGxldGUtY29udGFpbmVyID4gLnNjcm9sbGFibGUtY29udGFpbmVyID4gLnRvZG8tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuNTIxKTtcXG59XFxuXFxuXFxuLnNjcm9sbGFibGUtY29udGFpbmVye1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uOyAvKlRoaXMgd2FzIHdoYXQgaSB3YW50ZWQgdG8gZG8qL1xcbiAgICBcXG4gICAgLyogYm9yZGVyOiA0cHggc29saWQgYnJvd247ICovXFxuXFxufVxcblxcbi50b2RvLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDIyMHB4O1xcblxcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBcXG59XFxuXFxuLnRvZG8tdGl0bGUtZGl2IHtcXG5cXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxufVxcblxcblxcbi50b2RvLWRlc2MtZGl2IHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTsgKi9cXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgLyogcGFkZGluZy1ib3R0b206IDVweDsgKi9cXG59XFxuXFxuLnRvZG8tZGF0ZS1kaXYsXFxuLnRvZG8tcHJvamVjdC1kaXYge1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLnRvZG8tZGlzcGxheS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NzMpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi50b2RvLWRpc3BsYXkge1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIC8qIGhlaWdodDogNTUwcHg7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIFxcbn1cXG5cXG4ubWFpbi10b2RvLWRpc3BsYXkge1xcblxcbiAgICBcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmciAzMHB4IDMwcHggMzVweCA2MHB4IDYwcHg7XFxuXFxufVxcblxcblxcbiN0b2RvLWRpc3BsYXktdGl0bGUgIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLyogaGVpZ2h0OiAzNXB4OyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDIsIDIsIDIsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcbiN0b2RvLWRpc3BsYXktZGVzYyB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMHB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyLCAyLCAyLCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI3RvZG8tZGlzcGxheS1kYXRlIHtcXG5cXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDIsIDIsIDIsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiN0b2RvLWRpc3BsYXktcmVtaW5kLWluIHtcXG5cXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDIsIDIsIDIsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuXFxufVxcblxcblxcblxcbiNwcm9qZWN0LWRpc3BsYXktY2hvaWNlcyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgLyogYXBwZWFyYW5jZTogbm9uZTsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSggMiwgMiwgMiwgMC4yNSApO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuXFxuLmZpcnN0LWJ1dHRvbi1jb250YWluZXIsXFxuLnNlY29uZC1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5maXJzdC1idXR0b24tY29udGFpbmVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmZpcnN0LWJ1dHRvbi1jb250YWluZXIgPiBkaXYgPiBsYWJlbHtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG5cXG4jdG9kby1kaXNwbGF5LXByaW9yaXR5LFxcbiN0b2RvLWRpc3BsYXktc3RhdHVzICB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4yNSApO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2RvLWRpc3BsYXktcHJpb3JpdHk6aG92ZXIsXFxuI3RvZG8tZGlzcGxheS1zdGF0dXM6aG92ZXJ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41ODkpO1xcbn1cXG5cXG5cXG4jdG9kby11cGRhdGUsXFxuI3RvZG8tZGVsZXRlIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG5cXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgLyogYmFja2dyb3VuZDogcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4yNSApOyAqL1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgXFxuXFxufVxcblxcblxcbiN0b2RvLWRlbGV0ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNjQ0KTtcXG59XFxuXFxuI3RvZG8tZGVsZXRlOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC44NjMpO1xcbn1cXG5cXG4jdG9kby11cGRhdGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE1LCAyNTUsIDAsIDAuNjUxKTtcXG59XFxuXFxuI3RvZG8tdXBkYXRlOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwgMjU1LCAwLCAwLjg5Nyk7XFxufVxcblxcblxcbi5wb3AtdXAtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ0NSk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLnBvcC11cCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDIsIDIsIDIsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tcm93czogMWZyIDUwcHg7XFxufVxcblxcbi5wb3AtdXAtY29udGVudC1kaXZ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucG9wLXVwLWJ1dHRvbi1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcblxcbn1cXG5cXG4ucG9wLXVwLWJ1dHRvbi1jb250YWluZXIgPiBidXR0b24ge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcblxcblxcblxcblxcbi5wcm9qZWN0LWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiBcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4yNSApO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuLnByb2plY3QtdGl0bGUtZGl2IHtcXG5cXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICAvKiBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7ICovXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuXFxufVxcblxcblxcbi5wcm9qZWN0LWRlc2MtZGl2IHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTsgKi9cXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgLyogcGFkZGluZy1ib3R0b206IDVweDsgKi9cXG59XFxuXFxuLnByb2plY3QtZGF0ZS1kaXZ7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxufVxcblxcblxcblxcblxcbi5wcm9qZWN0LXRvZG8tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMiwgMTIyLCAxMjIsIDAuNTgyKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ucHJvamVjdC1kaXNwbGF5IHtcXG5cXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwgMCwgMTAyLCAwLjcwNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuXFxuXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7ICovXFxuICAgIFxcbiAgICAvKiBoZWlnaHQ6IDc1MHB4OyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47ICovXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuXFxufVxcblxcbi5wcm9qZWN0LWRldGFpbHN7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNwcm9qZWN0LXRpdGxlLXVwZGF0ZXtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcblxcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbiNwcm9qZWN0LWRlc2MtdXBkYXRlIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuXFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSggMCwgMCwgMCwgMC4yNSApO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG5cXG59XFxuXFxuI3Byb2plY3QtZGF0ZS11cGRhdGV7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuXFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSggMCwgMCwgMCwgMC4yNSApO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG5cXG59XFxuXFxuXFxuI3Byb2plY3QtcmVtaW5kZXItdXBkYXRle1xcblxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcblxcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuXFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbnMtb25lLFxcbi5wcm9qZWN0LWJ1dHRvbnMtdHdve1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGdhcDogNXB4O1xcbiAgICBcXG59XFxuXFxuLnByb2plY3QtYnV0dG9ucy1vbmUgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b25zLW9uZSA+IGRpdiA+IGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgKi9cXG59XFxuXFxuXFxuLnByb2plY3QtYnV0dG9ucy1vbmUgPiBkaXYgPiBidXR0b24sXFxuLnByb2plY3QtYnV0dG9ucy10d28gPiBidXR0b257XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcblxcbiAgIHBhZGRpbmc6IDVweDtcXG4gICBiYWNrZ3JvdW5kOiByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjI1ICk7XFxuICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXFxuICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcbiNwcm9qZWN0LXByaW9yaXR5LXVwZGF0ZSxcXG4jcHJvamVjdC1zdGF0dXMtdXBkYXRle1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3QtcHJpb3JpdHktdXBkYXRlOmhvdmVyLFxcbiNwcm9qZWN0LXN0YXR1cy11cGRhdGU6aG92ZXJ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41ODkpO1xcbn1cXG5cXG4ucHJvamVjdC10b2Rvc3tcXG5cXG4gIFxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVibHVlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7ICovXFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAxZnI7ICovXFxuXFxuXFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDE0MCwgMC4yNSk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7ICovXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAxLCAxMTksIDAuNzYpOyAqL1xcblxcbn1cXG5cXG4jcHJvamVjdC1kZWxldGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjY0NCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3QtdXBkYXRle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwgMjU1LCAwLCAwLjY1MSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuI3Byb2plY3QtZGVsZXRlOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC44NzcpO1xcbn1cXG5cXG4jcHJvamVjdC11cGRhdGU6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE1LCAyNTUsIDAsIDAuODc3KTtcXG59XFxuXFxuLnByaW9yaXR5LXRpdGxle1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLnRvZG8tcHJvamVjdC1zdGF0dXMtdGl0bGV7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMSwgMTE5LCAwLjc2KTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcblxcblxcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDEyOSwgMTI5LCAxMjksIDAuMjUpOyAqL1xcbiAgICAvKiBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTsgKi9cXG4gICAgLyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApOyAqL1xcbiAgICAvKiAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuXFxuLnRvZG8taW4tcHJvamVjdC1jb250YWluZXIge1xcblxcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMjIwcHg7XFxuXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoODMsIDgzLCA4MywgMC4yNSk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udG9kby1zdGF0dXMtY29udGFpbmVye1xcblxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBmdWNoc2lhOyAqL1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgICAvKiBoZWlnaHQ6IDM1MHB4OyAqL1xcbiAgICAvKiBncmlkLWF1dG8tZmxvdzogY29sdW1uOyAqL1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG5cXG59XFxuXFxuLm92ZXJkdWUtdG9kb3MsXFxuLmR1ZS1zb29uLXRvZG9zLFxcbi51cGNvbWluZy10b2RvcyxcXG4uY29tcGxldGUtdG9kb3N7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGJvcmRlcjogNHB4IHNvbGlkIGdvbGQ7ICovXFxuICAgIC8qIGhlaWdodDogMzIwcHg7ICovXFxuICAgIC8qIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTYsIDU2LCAyNTUpO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgXFxuICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xcblxcblxcblxcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBib3JkZXI6IDRweCBzb2xpZCBnb2xkOyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogaW5kaWdvOyAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcblxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmc6IDVweCAyMHB4IDVweCAyMHB4O1xcblxcbn1cXG5cXG5cXG4uc2Nyb2xsYWJsZS10b2RvLWNvbnRhaW5lcntcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcm93LWdhcDogMTBweDtcXG4gICAgLyogaGVpZ2h0OiA0MDBweDsgKi9cXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdzsgLypUaGlzIHdhcyB3aGF0IGkgd2FudGVkIHRvIGRvKi9cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcbiAgICBnYXA6IDVweDtcXG4gICAgXFxuICAgIC8qIGJvcmRlcjogNHB4IHNvbGlkIGJyb3duOyAqL1xcblxcbn1cXG5cXG4ueWVzLWJ1dHRvbixcXG4ubm8tYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ueWVzLWJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDI1NSwgMCwgMC42NTEpO1xcbn1cXG5cXG4ubm8tYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42NDQpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG4ubm90ZXMtY29sbGVjdGlvbntcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogaW5kaWdvOyAqL1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LDFmcikpOyBcXG4gXFxufVxcblxcblxcbi5ub3Rlcy1jb250YWluZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcblxcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDExNiwgMTE2LCAxMTYsIDAuMjUpO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBcXG59XFxuXFxuLm5vdGUtZGlzcGxheSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDAsIDcxLCAwLjY1MSk7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmciA0MHB4O1xcbiAgICBnYXA6IDVweDtcXG5cXG5cXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbn1cXG5cXG4ubm90ZS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5ub3RlLWRlc2Mge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgKi9cXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxufVxcblxcblxcbi5ub3RlLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuXFxuLyogRk9STSBCVVRUT04gKi9cXG5cXG4uZm9ybS1idXR0b24tY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogNzBweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDAlIDAlIDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDksIDQ4LCA5Mik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XFxuYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbi13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG5ib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIFxcbn1cXG5cXG4uZm9ybS1idXR0b257XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcblxcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDgyLCA4MiwgODIsIDApO1xcbiAgICAvKiBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTsgKi9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcblxcbi5mb3JtLWJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogcmdiYSg4MiwgODIsIDgyLCAwLjM0OSk7XFxufVxcblxcbi8qIFRPRE8gQ1JFQVRJT04gRk9STSAqL1xcblxcblxcbi5mb3JtLWNvbnRhaW5lcntcXG5cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTI3KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogcGFkZGluZy10b3A6IDEwMHB4OyAqL1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIC8qIHBhZGRpbmctYm90dG9tOiAxMDBweDsgKi9cXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgbGVmdDogMHB4O1xcbiAgICBoZWlnaHQ6IG1heCgzNzBweCwgMTAwJSk7XFxuXFxuXFxufVxcblxcbi5zaG93LWZvcm17XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi50b2RvLWNyZWF0aW9uLWZvcm0ge1xcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXFxuICAgIHdpZHRoOiAzMjBweDtcXG4gICAgXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjsgKi9cXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogaGVpZ2h0OiBtYXgoMzcwcHgsIDEwMCUpOyAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ3Myk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgXFxufVxcblxcbi50b2RvLWNyZWF0aW9uLWZvcm0gPiBmb3JtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGhlaWdodDogMzAwcHg7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbiN0b2RvLWRhdGUsXFxuI3Byb2plY3QtZGF0ZXtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgXFxufVxcblxcblxcbmZpZWxkc2V0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG5cXG4gICBcXG59XFxuXFxubGVnZW5kIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcXG59XFxuXFxuXFxuXFxuLmlucHV0LWNvbGxlY3Rpb257XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucmFkaW8taW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYWNjZW50LWNvbG9yOiB0ZWFsO1xcbiAgICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XFxufVxcblxcbi5yYWRpby1pbnB1dC1jb250YWluZXIgPiBkaXYge1xcbiAgICBcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7ICovXFxuICAgIC8qIHBhZGRpbmc6IDVweCAwcHggNXB4IDBweDsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogZW5kO1xcbiAgICBnYXA6IDVweDtcXG4gICAgXFxuICAgXFxufVxcblxcblxcblxcbi5yYWRpby1pbnB1dC1jb250YWluZXIgPiBkaXYgPiBsYWJlbCB7XFxuICAgIFxcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgIFxcbn1cXG5cXG5cXG5cXG5cXG4uaW5wdXQtY29udGFpbmVyID4gaW5wdXQge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweDtcXG5cXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU5Nik7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciA+IHRleHRhcmVhIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIC8qIGhlaWdodDogMjVweDsgKi9cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA1cHggNXB4IDBweCA1cHg7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTk2KTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXG59XFxuXFxuLnRvZG8tY3JlYXRpb24tdGl0bGUge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRpb24tdGl0bGUge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbiN0b2RvLXByaW9yaXR5LFxcbiNwcm9qZWN0LXByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4yNSApO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgLyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3RvZG8tcHJpb3JpdHk6aG92ZXIsXFxuI3Byb2plY3QtcHJpb3JpdHk6aG92ZXJ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NTMpO1xcbn1cXG5cXG4uY3JlYXRlLW5ldy10b2Rve1xcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBmb3Jlc3RncmVlbjsgKi9cXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNlbGVjdC1leGlzdGluZy1wcm9qZWN0e1xcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBza3libHVlOyAqL1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY3JlYXRlLW5ldy1wcm9qZWN0e1xcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBjcmltc29uOyAqL1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdC1jaG9pY2VzIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAxMDUsIDk2LCAwLjc5NSk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGlzcGxheS1mb3JtLWl0ZW1ze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI2Zvcm0tc3VibWl0e1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMjEsIDAuNTQxKTtcXG5cXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuI2Zvcm0tc3VibWl0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMjEsIDAuNzUzKTtcXG59XFxuXFxuXFxuLyogTW9iaWxlIHZlcnNpb24gKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBcXG5cXG4gICAgLmhhbWJ1cmdlci1tZW51IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5oYW1idXJnZXItbWVudTphY3RpdmV7XFxuXFxuXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTE0KTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tY29udGFpbmVyIHtcXG4gICAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmciA0MHB4O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzAwcHg7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgIFxcXCJ0b3AtY29udGFpbmVyIHRvcC1jb250YWluZXJcXFwiIFxcbiAgICAgICAgXFxcImRpc3BsYXktY29udGFpbmVyIGRpc3BsYXktY29udGFpbmVyXFxcIlxcbiAgICAgICAgXFxcInRvZG8tY29udGFpbmVyLWZvb3RlciB0b2RvLWNvbnRhaW5lci1mb290ZXJcXFwiO1xcbiAgICAgICAgcGFkZGluZzogMHB4IDVweCAwcHggNXB4O1xcbiAgICBcXG4gICAgXFxuICAgIFxcbiAgICB9XFxuXFxuICAgIC50b3AtY29udGFpbmVye1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLmRpc3BsYXktY29udGFpbmVyLFxcbiAgICAuY29sbGVjdGlvbi1jb250YWluZXJ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgLyogbWFyZ2luOiAwcHggNXB4IDBweCA1cHg7ICovXFxuICAgIH1cXG5cXG4gICAgLmRpc3BsYXktY29udGFpbmVye1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuXFxuICAgIFxcblxcbiAgICAubm90ZS1tZW51IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgICAgIGdyaWQtcm93OiAyLzM7XFxuICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICAgICAgLyogaGVpZ2h0OiA5MCU7ICovXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMHB4IDBweCAxNXB4O1xcbiAgICAgICAgLyogdG8gY29ycmVjdCBmb3IgbWFpbiBjb250YWluZXIgcGFkZGluZyAqL1xcbiAgICAgICAgcmlnaHQ6IC01cHg7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgICAvKiBib3JkZXI6IG5vbmU7ICovXFxuICAgICAgICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDczKTsgKi9cXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMjIpO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LXRvZG8tY29udGFpbmVye1xcbiAgICAgICAgbGVmdDogMHB4O1xcbiAgICB9XFxuXFxuXFxuICAgIC5hbGwtdG9kb3MtdGFiLFxcbiAgICAuYWxsLXByb2plY3RzLXRhYixcXG4gICAgLmFsbC1ub3Rlcy10YWIge1xcblxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgICAgIC8qIGZvbnQtc2l6ZTogMTVweDsgKi9cXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLm1lbnUtYWN0aXZlIHsgLyp0cmlnZ2VycyB3aGVuIGhhbWJ1cmdlciBtZW51IGlzIGNsaWNrZWQqL1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHRvZG9Nb2R1bGUgZnJvbSBcIi4vY3JlYXRlVG9kb3NcIjtcblxuXG5cbmZ1bmN0aW9uIHByb2plY3RNb2R1bGUgKCkge1xuXG4gICAgLy8gRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgcHJvamVjdHNcbiAgICBmdW5jdGlvbiBwcm9qZWN0RmFjdG9yeSAodGl0bGUsZGVzYyxkdWVEYXRlLHByaW9yaXR5LHJlbWluZEluLHN0YXR1cyl7XG5cblxuICAgICAgICByZXR1cm4ge3RpdGxlLGRlc2MsZHVlRGF0ZSxwcmlvcml0eSxyZW1pbmRJbixzdGF0dXN9XG4gICAgfVxuXG5cbiAgICAvLyBUaGlzIGlzIHdoZXJlIHVuc29ydGVkIHByb2plY3QgYXJyYXlzIGFyZSBzdG9yZWRcbiAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuXG5cbiAgICBmdW5jdGlvbiBnZXRTdG9yZWRQcm9qZWN0cyAoKXtcblxuICAgICAgICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZWRQcm9qZWN0cycpO1xuXG4gICAgICAgIGlmKCFzdG9yZWRQcm9qZWN0cyl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VTdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2Uoc3RvcmVkUHJvamVjdHMpO1xuXG4gICAgICAgIHBhcnNlU3RvcmVkUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0cyA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0cylcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvLyBnZXQgc3RvcmVkIHByb2plY3RzIG9uIGJvb3RcbiAgICBnZXRTdG9yZWRQcm9qZWN0cygpO1xuXG4gICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3N0b3JlZFByb2plY3RzJyk7XG5cblxuICAgIC8vIERlbGV0ZSB0aGlzIGlmIHRoZXJlIGVuZHMgdXAgYmVpbmcgYSBwcm9ibGVtXG4gICAgZnVuY3Rpb24gY2xlYW5VcFByb2plY3RzICgpe1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG5cblxuICAgICAgICAgICAgaWYgKCgoIXByb2plY3RBcnJheVtpbmRleF0udGl0bGUpICYmIFxuICAgICAgICAgICAgICAgICghcHJvamVjdEFycmF5W2luZGV4XS5kZXNjKSl8fHByb2plY3RBcnJheVtpbmRleF0ucHJpb3JpdHkgPT09ICdoaWdoJ3x8IHByb2plY3RBcnJheVtpbmRleF0ucHJpb3JpdHkgPT09ICdtZWRpdW0nIHx8IHByb2plY3RBcnJheVtpbmRleF0ucHJpb3JpdHkgPT09ICdsb3cnKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ0xFQU5FRCBVUCBQUk9KRUNUUyAhISEnKVxuXG4gICAgICAgICAgICAgICAgcHJvamVjdEFycmF5LnNwbGljZShpbmRleCwxKVxuXG4gICAgICAgICAgICAgICAgLS1pbmRleDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2VVcGRhdGUoKTtcblxuICAgIH1cblxuICAgIC8vIGNsZWFuIHVwIGVtcHR5IHByb2plY3RzXG4gICAgY2xlYW5VcFByb2plY3RzKCk7XG4gICAgXG5cbiAgICBmdW5jdGlvbiBsb2NhbFN0b3JhZ2VVcGRhdGUoKXtcblxuICAgICAgICBjb25zb2xlLmxvZygnU0VUIExPQ0FMIFNUT1JBR0UnKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkUHJvamVjdHMnLEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpO1xuXG4gICAgfVxuXG5cblxuXG5cblxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCAodGl0bGUsZGVzYyxkdWVEYXRlLHByaW9yaXR5LHJlbWluZEluLHN0YXR1cyl7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeSh0aXRsZSxkZXNjLGR1ZURhdGUscHJpb3JpdHkscmVtaW5kSW4sc3RhdHVzKTsgLy9jaGFuZ2UgdGhpcyBsYXRlciBpZiB5b3UgbmVlZCB0b1xuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlVXBkYXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIC8vIDggaGlnaCBwcmlvcml0eVxuXG4gICAgLy8gY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgLy8gY29uc3QgZGF5ID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgLy8gY29uc3QgbW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuXG4gICAgLy8gY29uc3QgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAvLyBsZXQgcmVtaW5kID0gLTI7XG5cbiAgICAvLyBsZXQgcmVtaW5kMSA9IDA7XG5cbiAgICAvLyBmb3IgKGxldCBpbmRleCA9IDQ7IGluZGV4ID4gMDsgaW5kZXgtLSkge1xuXG4gICAgICAgIFxuXG4gICAgLy8gICAgIGNyZWF0ZVByb2plY3QoYHByb2plY3Qke2luZGV4fXRlc3RgLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyByZW1pbmR9LSR7bW9udGggKyByZW1pbmR9LSR7ZGF5ICsgcmVtaW5kfWAsYGhpZ2hgLHJlbWluZCwnY29tcGxldGUnKTtcblxuICAgIC8vICAgICBjcmVhdGVQcm9qZWN0KGBwcm9qZWN0JHtpbmRleH10ZXN0MmAsYGRlc2Mke2luZGV4fWAsYCR7eWVhciArIHJlbWluZH0tJHttb250aCArIHJlbWluZH0tJHtkYXkgKyByZW1pbmR9YCxgaGlnaGAscmVtaW5kK2luZGV4LCdwZW5kaW5nJyk7XG5cbiAgICAvLyAgICAgcmVtaW5kID0gcmVtaW5kICsgaW5kZXg7XG5cbiAgICAgICAgXG4gICAgLy8gfVxuXG5cbiAgICAvLyAvLyAxMCBsb3cgcHJpb3JpdHlcbiAgICAvLyBmb3IgKGxldCBpbmRleCA9IDY7IGluZGV4ID4gMDsgaW5kZXgtLSkge1xuXG4gICAgICAgIFxuXG4gICAgLy8gICAgIGNyZWF0ZVByb2plY3QoYHByb2plY3QgJHtpbmRleH1gLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyByZW1pbmQxfS0ke21vbnRoICsgcmVtaW5kMX0tJHtkYXkgKyByZW1pbmQxfWAsYGxvd2AscmVtaW5kMSwnY29tcGxldGUnKTtcbiAgICAvLyAgICAgY3JlYXRlUHJvamVjdChgcHJvamVjdCR7aW5kZXh9d3dgLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyByZW1pbmQxfS0ke21vbnRoICsgcmVtaW5kMX0tJHtkYXkgLSByZW1pbmQxfWAsYGxvd2AscmVtaW5kMSwncGVuZGluZycpO1xuICAgIC8vICAgICBjcmVhdGVQcm9qZWN0KGBwcm9qZWN0JHtpbmRleH11cGAsYGRlc2Mke2luZGV4fWAsYCR7eWVhciArIHJlbWluZDF9LSR7bW9udGggKyByZW1pbmQxfS0ke2RheSArIHJlbWluZDF9YCxgbG93YCxyZW1pbmQxLTEsJ3BlbmRpbmcnKTtcbiAgICAgICAgXG4gICAgLy8gICAgIHJlbWluZDEgPSByZW1pbmQxIC0gaW5kZXg7XG4gICAgLy8gfVxuXG5cblxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJvamVjdCAob2xkRGV0YWlscyxuZXdEZXRhaWxzKXtcblxuXG4gICAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xuXG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSBvbGREZXRhaWxzLnRpdGxlICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3QuZGVzYyA9PT0gb2xkRGV0YWlscy5kZXNjICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3QuZHVlRGF0ZSA9PT0gb2xkRGV0YWlscy5kdWVEYXRlICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3QucmVtaW5kSW4gPT09IG9sZERldGFpbHMucmVtaW5kSW4gJiYgXG4gICAgICAgICAgICAgICAgcHJvamVjdC5wcmlvcml0eSA9PT0gb2xkRGV0YWlscy5wcmlvcml0eSAmJiBcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnN0YXR1cyA9PT0gb2xkRGV0YWlscy5zdGF0dXMpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ0hBTkdFIFdPUktTIScpXG5cblxuICAgICAgICAgICAgICAgIHByb2plY3QudGl0bGUgPSBuZXdEZXRhaWxzLm5ld1RpdGxlO1xuICAgICAgICAgICAgICAgIHByb2plY3QuZGVzYyA9IG5ld0RldGFpbHMubmV3RGVzYztcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmR1ZURhdGUgPSBuZXdEZXRhaWxzLm5ld0R1ZTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnJlbWluZEluID0gbmV3RGV0YWlscy5uZXdSZW1pbmRlcjtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnByaW9yaXR5ID0gbmV3RGV0YWlscy5uZXdQcmlvcml0eTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnN0YXR1cyA9IG5ld0RldGFpbHMubmV3U3RhdHVzO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0IChvbGREZXRhaWxzKXtcblxuICAgICAgICB0b2RvTW9kdWxlLmRlbGV0ZVRvZG9PZlByb2plY3Qob2xkRGV0YWlscyk7XG5cblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuXG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0QXJyYXlbaW5kZXhdLnRpdGxlID09PSBvbGREZXRhaWxzLnRpdGxlICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3RBcnJheVtpbmRleF0uZGVzYyA9PT0gb2xkRGV0YWlscy5kZXNjICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3RBcnJheVtpbmRleF0uZHVlRGF0ZSA9PT0gb2xkRGV0YWlscy5kdWVEYXRlICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3RBcnJheVtpbmRleF0ucmVtaW5kSW4gPT09IG9sZERldGFpbHMucmVtaW5kSW4gJiYgXG4gICAgICAgICAgICAgICAgcHJvamVjdEFycmF5W2luZGV4XS5wcmlvcml0eSA9PT0gb2xkRGV0YWlscy5wcmlvcml0eSAmJiBcbiAgICAgICAgICAgICAgICBwcm9qZWN0QXJyYXlbaW5kZXhdLnN0YXR1cyA9PT0gb2xkRGV0YWlscy5zdGF0dXMpIHtcblxuXG4gICAgICAgICAgICAgICAgcHJvamVjdEFycmF5LnNwbGljZShpbmRleCwxKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuXG4gICAgfVxuXG4gXG5cbiAgICByZXR1cm4ge3Byb2plY3RBcnJheSxjcmVhdGVQcm9qZWN0LHVwZGF0ZVByb2plY3QsZGVsZXRlUHJvamVjdH07XG5cbn1cblxuY29uc3QgaW5pdGlhbGl6ZWRQcm9qZWN0TW9kdWxlID0gcHJvamVjdE1vZHVsZSgpO1xuXG4gICBcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVkUHJvamVjdE1vZHVsZTsiLCJcblxuZnVuY3Rpb24gdG9kb01vZHVsZSAoKXtcblxuICAgIC8vIEZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIG5vdGVzXG5cbiAgICBmdW5jdGlvbiB0b2RvRmFjdG9yeSAodGl0bGUsZGVzYyxkdWVEYXRlLHJlbWluZEluLHByaW9yaXR5LHN0YXR1cyxwcm9qZWN0KXtcblxuICAgICAgICAvLyB0b2RvXG4gICAgICAgIGlmKGR1ZURhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIHt0aXRsZSxkZXNjLGR1ZURhdGUscmVtaW5kSW4scHJpb3JpdHksc3RhdHVzLHByb2plY3R9XG4gICAgICAgIH1cbiAgICAgICAgLy8gbm90ZVxuICAgICAgICBpZighZHVlRGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4ge3RpdGxlLGRlc2N9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIFRoaXMgaXMgd2hlcmUgdW5zb3J0ZWQgdG9kbyBhcnJheXMgYXJlIHN0b3JlZFxuICAgIGNvbnN0IHRvZG9BcnJheSA9IFtdO1xuXG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0U3RvcmVkVG9kb3MgKCl7XG5cbiAgICAgICAgY29uc3Qgc3RvcmVkVG9kb3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkVG9kb3MnKTtcblxuICAgICAgICBpZighc3RvcmVkVG9kb3Mpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlU3RvcmVkVG9kb3MgPSBKU09OLnBhcnNlKHN0b3JlZFRvZG9zKTtcblxuICAgICAgICBwYXJzZVN0b3JlZFRvZG9zLmZvckVhY2godG9kb3MgPT4ge1xuICAgICAgICAgICAgdG9kb0FycmF5LnB1c2godG9kb3MpXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy8gZ2V0IHN0b3JlZCB0b2RvcyBvbiBib290XG4gICAgZ2V0U3RvcmVkVG9kb3MoKTtcblxuXG4gICAgZnVuY3Rpb24gY2xlYW5VcFRvZG9zICgpe1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b2RvQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG5cblxuICAgICAgICAgICAgaWYgKCgoIXRvZG9BcnJheVtpbmRleF0udGl0bGUpICYmIFxuICAgICAgICAgICAgICAgICghdG9kb0FycmF5W2luZGV4XS5kZXNjKSl8fHRvZG9BcnJheVtpbmRleF0ucHJpb3JpdHkgPT09ICdoaWdoJ3x8IHRvZG9BcnJheVtpbmRleF0ucHJpb3JpdHkgPT09ICdtZWRpdW0nIHx8IHRvZG9BcnJheVtpbmRleF0ucHJpb3JpdHkgPT09ICdsb3cnKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ0xFQU5FRCBVUCBUT0RPUyAhISEnKVxuXG4gICAgICAgICAgICAgICAgdG9kb0FycmF5LnNwbGljZShpbmRleCwxKVxuXG4gICAgICAgICAgICAgICAgLS1pbmRleDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2VVcGRhdGUoKTtcblxuICAgIH1cblxuICAgIC8vIGNsZWFuIHVwIGVtcHR5IHByb2plY3RzXG4gICAgY2xlYW5VcFRvZG9zKCk7XG5cblxuXG5cbiAgICBmdW5jdGlvbiBsb2NhbFN0b3JhZ2VVcGRhdGUoKXtcblxuICAgICAgICBjb25zb2xlLmxvZygnU0VUIExPQ0FMIFNUT1JBR0UnKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkVG9kb3MnLEpTT04uc3RyaW5naWZ5KHRvZG9BcnJheSkpO1xuXG4gICAgfVxuXG5cbiAgICAvLyB0aGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdXNlZCB0byBjcmVhdGUgVG9kb3NcbiAgICBmdW5jdGlvbiBjcmVhdGVUb2RvICh0aXRsZSxkZXNjLGR1ZURhdGUscmVtaW5kSW4scHJpb3JpdHksc3RhdHVzLHByb2plY3Qpe1xuICAgICAgICBjb25zdCBuZXdUb0RvID0gdG9kb0ZhY3RvcnkodGl0bGUsZGVzYyxkdWVEYXRlLHJlbWluZEluLHByaW9yaXR5LHN0YXR1cyxwcm9qZWN0KTtcbiAgICAgICAgdG9kb0FycmF5LnB1c2gobmV3VG9Ebyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICAvLyBUaGlzIG11c3QgYmUgZGVsZXRlZCBsYXRlciBhcyBpdCBpcyBjcmVhdGVkIHByaW1hcmlseSBmb3IgdGVzdGluZ1xuXG4gICAgLy8gY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgLy8gY29uc3QgZGF5ID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgLy8gY29uc3QgbW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuXG4gICAgLy8gY29uc3QgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG5cblxuICAgIC8vIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPD0gMTA7IGluZGV4KyspIHtcblxuICAgIC8vICAgICBjcmVhdGVUb2RvKGB0aXRsZSR7aW5kZXh9YCxgZGVzYyR7aW5kZXh9YCxgJHt5ZWFyICsgaW5kZXh9LSR7bW9udGggKyBpbmRleH0tJHtkYXkgKyBpbmRleH1gLGluZGV4LGBoaWdoYCxgcGVuZGluZ2AsJ3Byb2plY3QgMicpO1xuXG4gICAgLy8gICAgIGNyZWF0ZVRvZG8oYHRpdGxlJHtpbmRleH1gLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyBpbmRleH0tJHttb250aCArIGluZGV4fS0ke2RheSArIGluZGV4fWAsaW5kZXgsYGxvd2AsYHBlbmRpbmdgLCdwcm9qZWN0IDInKTtcblxuICAgIC8vICAgICBjcmVhdGVUb2RvKGB0aXRsZSR7aW5kZXh9YCxgZGVzYyR7aW5kZXh9YCk7XG5cblxuICAgXG4gICAgICAgIFxuICAgIC8vIH1cblxuICAgIC8vIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPD0gNTsgaW5kZXgrKykge1xuXG4gICAgLy8gICAgIGNyZWF0ZVRvZG8oYHRpdGxlJHtpbmRleH1gLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyBpbmRleH0tJHttb250aCArIGluZGV4fS0ke2RheSArIGluZGV4fWAsaW5kZXgsYGhpZ2hgLGBjb21wbGV0ZWAsJ3Byb2plY3QxdGVzdCcpO1xuXG4gICAgLy8gICAgIGNyZWF0ZVRvZG8oYHRpdGxlJHtpbmRleH1gLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyBpbmRleH0tJHttb250aCArIGluZGV4fS0ke2RheSArIGluZGV4fWAsaW5kZXgsYG1lZGl1bWAsYHBlbmRpbmdgLCdwcm9qZWN0MXRlc3QnKTtcblxuICAgXG4gICAgICAgIFxuICAgIC8vIH1cblxuICAgIC8vIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuICAgIC8vIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdHRVQgTE9DQUwgU1RPUkFHRScpO1xuICAgIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9BcnJheScpKSlcbiAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3RvcmVkVG9kb3MnKTtcbiAgICBcbiAgICAvLyBvbGREZXRhaWxzXG4gICAgLy8gbmV3RGV0YWlsc1xuICAgIC8vIG5ld1RpdGxlLG5ld0Rlc2MsbmV3RHVlRGF0ZSxuZXdSZW1pbmRJbixuZXdQcmlvcml0eSxuZXdTdGF0dXMsbmV3UHJvamVjdFxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVG9kbyAob2xkRGV0YWlscyxuZXdEZXRhaWxzKXtcblxuICAgICAgICB0b2RvQXJyYXkuZm9yRWFjaCh0b2RvID0+IHtcblxuXG4gICAgICAgICAgICBpZiAodG9kby50aXRsZSA9PT0gb2xkRGV0YWlscy50aXRsZSAmJiBcbiAgICAgICAgICAgICAgICB0b2RvLmRlc2MgPT09IG9sZERldGFpbHMuZGVzYyAmJiBcbiAgICAgICAgICAgICAgICB0b2RvLmR1ZURhdGUgPT09IG9sZERldGFpbHMuZHVlRGF0ZSAmJiBcbiAgICAgICAgICAgICAgICB0b2RvLnJlbWluZEluID09PSBvbGREZXRhaWxzLnJlbWluZEluICYmIFxuICAgICAgICAgICAgICAgIHRvZG8ucHJpb3JpdHkgPT09IG9sZERldGFpbHMucHJpb3JpdHkgJiYgXG4gICAgICAgICAgICAgICAgdG9kby5zdGF0dXMgPT09IG9sZERldGFpbHMuc3RhdHVzICYmIFxuICAgICAgICAgICAgICAgIHRvZG8ucHJvamVjdCA9PT0gb2xkRGV0YWlscy5wcm9qZWN0KSB7XG5cblxuICAgICAgICAgICAgICAgIHRvZG8udGl0bGUgPSBuZXdEZXRhaWxzLm5ld1RpdGxlO1xuICAgICAgICAgICAgICAgIHRvZG8uZGVzYyA9IG5ld0RldGFpbHMubmV3RGVzYztcbiAgICAgICAgICAgICAgICB0b2RvLmR1ZURhdGUgPSBuZXdEZXRhaWxzLm5ld0R1ZTtcbiAgICAgICAgICAgICAgICB0b2RvLnJlbWluZEluID0gbmV3RGV0YWlscy5uZXdSZW1pbmRlcjtcbiAgICAgICAgICAgICAgICB0b2RvLnByaW9yaXR5ID0gbmV3RGV0YWlscy5uZXdQcmlvcml0eTtcbiAgICAgICAgICAgICAgICB0b2RvLnN0YXR1cyA9IG5ld0RldGFpbHMubmV3U3RhdHVzO1xuICAgICAgICAgICAgICAgIHRvZG8ucHJvamVjdCA9IG5ld0RldGFpbHMubmV3UHJvamVjdDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2VVcGRhdGUoKTtcblxuICAgIH1cblxuXG5cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRvZG8gKG9sZERldGFpbHMpe1xuXG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvZG9BcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblxuXG4gICAgICAgICAgICBpZiAodG9kb0FycmF5W2luZGV4XS50aXRsZSA9PT0gb2xkRGV0YWlscy50aXRsZSAmJiBcbiAgICAgICAgICAgICAgICB0b2RvQXJyYXlbaW5kZXhdLmRlc2MgPT09IG9sZERldGFpbHMuZGVzYyAmJiBcbiAgICAgICAgICAgICAgICB0b2RvQXJyYXlbaW5kZXhdLmR1ZURhdGUgPT09IG9sZERldGFpbHMuZHVlRGF0ZSAmJiBcbiAgICAgICAgICAgICAgICB0b2RvQXJyYXlbaW5kZXhdLnJlbWluZEluID09PSBvbGREZXRhaWxzLnJlbWluZEluICYmIFxuICAgICAgICAgICAgICAgIHRvZG9BcnJheVtpbmRleF0ucHJpb3JpdHkgPT09IG9sZERldGFpbHMucHJpb3JpdHkgJiYgXG4gICAgICAgICAgICAgICAgdG9kb0FycmF5W2luZGV4XS5zdGF0dXMgPT09IG9sZERldGFpbHMuc3RhdHVzICYmIFxuICAgICAgICAgICAgICAgIHRvZG9BcnJheVtpbmRleF0ucHJvamVjdCA9PT0gb2xkRGV0YWlscy5wcm9qZWN0KSB7XG5cblxuICAgICAgICAgICAgICAgIHRvZG9BcnJheS5zcGxpY2UoaW5kZXgsMSlcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2VVcGRhdGUoKTtcblxuICAgIH1cblxuXG5cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRvZG9PZlByb2plY3QgKHByb2plY3Qpe1xuXG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvZG9BcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblxuXG4gICAgICAgICAgICBpZiAodG9kb0FycmF5W2luZGV4XS5wcm9qZWN0ID09PSBwcm9qZWN0LnRpdGxlKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVE9ETyBERUxFVEVEJylcblxuICAgICAgICAgICAgICAgIHRvZG9BcnJheS5zcGxpY2UoaW5kZXgsMSlcblxuICAgICAgICAgICAgICAgIC0taW5kZXg7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlVXBkYXRlKCk7XG5cbiAgICB9XG5cbiAgICBcblxuICAgIC8vIEVuZCBvZiB0ZXN0IG9iamVjdHNcblxuICAgIHJldHVybiB7dG9kb0FycmF5LCBjcmVhdGVUb2RvLCB1cGRhdGVUb2RvLCBkZWxldGVUb2RvLCBkZWxldGVUb2RvT2ZQcm9qZWN0fTtcblxuXG59XG5cblxuY29uc3QgaW5pdGlhbGl6ZWRUb2RvTW9kdWxlID0gdG9kb01vZHVsZSgpO1xuXG5cbi8vIGluaXRpYWxpemVkIHZlcnNpb24gaXMgc2VudCBiZWNhdXNlIHRoZSBpcyBubyByZWFzb24gdG8gcmUtaW5pdGlhbGlzZSBsYXRlciBvblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZWRUb2RvTW9kdWxlO1xuIiwiLy8gQWxsIERPTSBBY3Rpdml0aWVzIGFyZSBjZW50cmFsaXNlZCBoZXJlIGV4Y2VwdCBET00gQ3JlYXRpb25cblxuaW1wb3J0IHRvZG9Nb2R1bGUgZnJvbSBcIi4uL2NyZWF0ZVRvZG9zXCI7XG5cbmltcG9ydCBwcm9qZWN0TW9kdWxlIGZyb20gXCIuLi9jcmVhdGVQcm9qZWN0c1wiO1xuXG5pbXBvcnQgbm90ZXNPYmplY3QgZnJvbSBcIi4uL3RhYk9iamVjdHMvYWxsTm90ZXNUYWJcIjtcblxuXG5pbXBvcnQgdG9kb09iamVjdCBmcm9tIFwiLi4vdGFiT2JqZWN0cy9hbGxUb2Rvc1RhYlwiO1xuXG5pbXBvcnQgcHJvamVjdE9iamVjdCBmcm9tIFwiLi4vdGFiT2JqZWN0cy9hbGxQcm9qZWN0c1RhYlwiO1xuXG5pbXBvcnQgZm9ybURvbU1vZHVsZSBmcm9tIFwiLi4vZG9tQ3JlYXRpb24vZm9ybURPTUNyZWF0aW9uXCI7XG5cbmltcG9ydCBjcmVhdGVUb2RvRE9NIGZyb20gXCIuLi9kb21DcmVhdGlvbi9hbGxUb2RvRE9NQ3JlYXRpb25cIjtcblxuaW1wb3J0IGNyZWF0ZVByb2plY3RET00gZnJvbSBcIi4uL2RvbUNyZWF0aW9uL3Byb2plY3RzRE9NQ3JlYXRpb25cIjtcblxuaW1wb3J0IGNyZWF0ZU5vdGVzRE9NIGZyb20gXCIuLi9kb21DcmVhdGlvbi9hbGxOb3Rlc0RPTUNyZWF0aW9uXCI7XG5cbmltcG9ydCBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uIGZyb20gXCIuLi9kb21DcmVhdGlvbi9wb3B1bGF0ZURPTVRvZG9Db2xsZWN0aW9uXCI7XG5cbmltcG9ydCBhcHBlbmRQcm9qZWN0T2JqZWN0cyBmcm9tIFwiLi4vZG9tQ3JlYXRpb24vcG9wdWxhdGVET01Qcm9qZWN0Q29sbGVjdGlvblwiO1xuXG5pbXBvcnQgYXBwZW5kTm90ZXNPYmplY3QgZnJvbSBcIi4uL2RvbUNyZWF0aW9uL3BvcHVsYXRlRE9NTm90ZUNvbGxlY3Rpb25cIjtcblxuaW1wb3J0IHsgY2xpY2tlZFByb2plY3QgfSBmcm9tIFwiLi4vZG9tQ3JlYXRpb24vcG9wdWxhdGVET01Qcm9qZWN0Q29sbGVjdGlvblwiO1xuXG5pbXBvcnQgZGlzcGxheVByb2plY3QgZnJvbSBcIi4uL2RvbUNyZWF0aW9uL2Rpc3BsYXlQcm9qZWN0XCI7XG5cblxubGV0IG1lbnVJbkRpc3BsYXkgPSAndG9kb3MnXG5cbmxldCBwcmlvcml0eUluRGlzcGxheSA9ICdIaWdoJ1xuXG5cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkgKCl7XG5cbiAgICBpZihtZW51SW5EaXNwbGF5ID09PSAndG9kb3MnKXtcbiAgICAgICAgY29uc29sZS5sb2coJ1RPRE9TIERJU1BMQVkgVVBEQVRFRCcpO1xuXG4gICAgICAgIHBvcHVsYXRlVG9kb0NvbGxlY3Rpb24ocHJpb3JpdHlJbkRpc3BsYXkpO1xuXG4gICAgfVxuXG4gICAgaWYobWVudUluRGlzcGxheSA9PT0gJ3Byb2plY3RzJyl7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ1RPRE9TIFBST0pFQ1RTIFVQREFURUQnKTtcblxuICAgICAgICBhcHBlbmRQcm9qZWN0T2JqZWN0cyhwcmlvcml0eUluRGlzcGxheSk7XG5cbiAgICB9XG5cbiAgICBpZiAobWVudUluRGlzcGxheSA9PT0gJ25vdGVzJykge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdUT0RPUyBOT1RFUyBVUERBVEVEJyk7XG4gICAgICAgIFxuICAgICAgICBhcHBlbmROb3Rlc09iamVjdCgpO1xuXG4gICAgfVxuXG5cbiAgICBpZiAobWVudUluRGlzcGxheSA9PT0gJ3RvZG9zJyB8fCBtZW51SW5EaXNwbGF5ID09PSAncHJvamVjdHMnKSB7XG5cbiAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2gtcHJpb3JpdHknKTtcbiAgICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVkaXVtLXByaW9yaXR5Jyk7XG4gICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvdy1wcmlvcml0eScpO1xuXG5cblxuICAgICAgICBpZiAocHJpb3JpdHlJbkRpc3BsYXkgPT09ICdIaWdoJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hJR0ggUFJJT1JJVFkgQ0hPU0VOJylcblxuICAgICAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bS1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbG93LXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpb3JpdHlJbkRpc3BsYXkgPT09ICdNZWRpdW0nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTUVESVVNIFBSSU9SSVRZIENIT1NFTicpXG5cbiAgICAgICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWdoLXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgICAgICBtZWRpdW1Qcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgICAgIGxvd1ByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2xvdy1wcmlvcml0eS1jaG9zZW4nKTtcblxuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmlvcml0eUluRGlzcGxheT09PSAnTG93Jykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0xPVyBQUklPUklUWSBDSE9TRU4nKVxuXG4gICAgICAgICAgICBoaWdoUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaC1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtLXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgICAgICBsb3dQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsb3ctcHJpb3JpdHktY2hvc2VuJyk7XG5cblxuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG4gICAgXG59XG5cblxuXG5cbmZ1bmN0aW9uIGRvbUFjdGl2aXRpZXNNb2R1bGUgKCl7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcblxuICAgICAgICBcblxuICAgICAgICBpZihtZW51LmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnUtYWN0aXZlXCIpKXtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtYWN0aXZlXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICB9KVxuXG5cbiAgICAvLyBoYW1idXJnZXIgYnV0dG9uXG4gICAgY29uc3QgaGFtYnVyZ2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlci1tZW51Jyk7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGUtbWVudScpO1xuXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSlcblxuXG4gICAgaGFtYnVyZ2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmKCFtZW51LmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnUtYWN0aXZlXCIpKXtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnUtYWN0aXZlXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZihtZW51LmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnUtYWN0aXZlXCIpKXtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtYWN0aXZlXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICB9KVxuXG5cbiAgICAvLyBGT1JNIEFDVElWSVRJRVNcblxuICAgIC8vIEZPUk0gSU5QVVQgQUNUSVZJVElFUyBCRUdJTiBIRVJFXG5cblxuICAgIC8vIGZvcm0gY29udGFpbmVyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgZW50cnlDcmVhdGlvbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jcmVhdGlvbi1mb3JtJyk7XG5cbiAgICAvLyB0b2RvIG9yIG5vdGUgYnV0dG9uXG5cbiAgICBsZXQgaXNOb3RlID0gdHJ1ZTtcblxuICAgIGNvbnN0IHNlbGVjdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXMtdG9kbycpO1xuXG4gICAgY29uc3Qgc2VsZWN0Tm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpcy1ub3RlJyk7XG5cbiAgICBjb25zdCB0b2RvQ3JlYXRpb25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLW5ldy10b2RvJyk7XG5cblxuXG5cbiAgICAvLyBzYW1lIHZhcmlhYmxlLCBuZWVkIHRvIHJlZmFjdG9yXG4gICAgY29uc3Qgc2VsZWN0RXhpc3RpbmdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4aXN0aW5nLXByb2plY3QnKTtcblxuICAgIGNvbnN0IHNlbGVjdE5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKTtcblxuICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdFJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4aXN0aW5nLXByb2plY3QnKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RSYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpO1xuXG5cblxuXG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdC1leGlzdGluZy1wcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1uZXctcHJvamVjdCcpO1xuXG5cblxuXG4gICAgLy8gVG8tZG8gaW5wdXRzXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tdGl0bGUnKTtcblxuICAgIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGVzYycpO1xuXG4gICAgY29uc3QgZW50cnlUeXBlID0gaXNOb3RlO1xuXG4gICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kYXRlJyk7XG5cbiAgICBjb25zdCB0b2RvUmVtaW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1yZW1pbmQtaW4nKTtcblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXByaW9yaXR5Jyk7XG5cbiAgICBcblxuXG4gICAgY29uc3QgdG9kb0lucHV0cyA9IFt0b2RvRGF0ZSx0b2RvUmVtaW5kZXJdO1xuXG5cblxuICAgIGNvbnN0IHByb2plY3RzQ2hvaWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWNob2ljZXMnKTtcblxuICAgIC8vIG5ldyBwcm9qZWN0IGlucHV0c1xuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKTtcblxuICAgIGNvbnN0IHByb2plY3REZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGVzYycpO1xuXG4gICAgY29uc3QgcHJvamVjdERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1kYXRlJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0UmVtaW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1yZW1pbmQtaW4nKTtcblxuXG4gICAgLy8gaXMgYSBidXR0b25cbiAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1wcmlvcml0eScpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdElucHV0cyA9IFtwcm9qZWN0VGl0bGUscHJvamVjdERlc2MscHJvamVjdERhdGUscHJvamVjdFJlbWluZGVyXTtcblxuXG4gICAgc2VsZWN0VG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHRvZG9DcmVhdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LWZvcm0taXRlbXMnKTtcblxuICAgICAgICB0b2RvSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc2VsZWN0RXhpc3RpbmdQcm9qZWN0LmRpc2FibGVkKSB7XG4gICAgICAgICAgICBzZWxlY3ROZXdQcm9qZWN0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzZWxlY3RFeGlzdGluZ1Byb2plY3QuY2hlY2tlZCAmJiAhc2VsZWN0TmV3UHJvamVjdC5jaGVja2VkKSAge1xuICAgICAgICAgICAgc2VsZWN0RXhpc3RpbmdQcm9qZWN0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoc2VsZWN0RXhpc3RpbmdQcm9qZWN0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNoZWNrZWRFeGlzdGluZ1Byb2plY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3ROZXdQcm9qZWN0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNoZWNrZWROZXdQcm9qZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaXNOb3RlID0gZmFsc2U7XG5cbiAgICB9KVxuXG4gICAgc2VsZWN0Tm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHRvZG9DcmVhdGlvbkRpdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LWZvcm0taXRlbXMnKTtcbiAgICAgICAgZXhpc3RpbmdQcm9qZWN0RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuICAgICAgICBuZXdQcm9qZWN0RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuXG4gICAgICAgIHNlbGVjdE5ld1Byb2plY3QuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBzZWxlY3RFeGlzdGluZ1Byb2plY3QuY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRvZG9JbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB9KTtcblxuICAgICAgICBwcm9qZWN0c0Nob2ljZXMucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xuXG4gICAgICAgIG5ld1Byb2plY3RJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB9KTtcblxuICAgICAgICBpc05vdGU9IHRydWU7XG4gICAgfSlcblxuICAgIC8vIGV4aXN0aW5nIHByb2plY3Qgb3IgbmV3IHByb2plY3RcblxuICAgIGxldCBpc05ld1Byb2plY3QgPSBmYWxzZTtcblxuXG5cbiAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gaXNOZXdQcm9qZWN0O1xuXG4gICAgLy8gZXhpc3RpbmcgcHJvamVjdCBpbnB1dFxuXG5cblxuICAgIHNlbGVjdEV4aXN0aW5nUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgY2hlY2tlZEV4aXN0aW5nUHJvamVjdCgpO1xuICAgICAgICBcbiAgICB9KTtcblxuXG5cbiAgICBzZWxlY3ROZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICBjaGVja2VkTmV3UHJvamVjdCgpO1xuXG4gICAgfSlcblxuXG4gICAgZnVuY3Rpb24gY2hlY2tlZEV4aXN0aW5nUHJvamVjdCAoKXtcbiAgICAgICAgZXhpc3RpbmdQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuICAgICAgICBuZXdQcm9qZWN0RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuXG4gICAgICAgIGlzTmV3UHJvamVjdCA9IGZhbHNlO1xuXG4gICAgICAgIHByb2plY3RzQ2hvaWNlcy5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgbmV3UHJvamVjdElucHV0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG4gICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tlZE5ld1Byb2plY3QgKCl7XG4gICAgICAgIFxuICAgICAgICBleGlzdGluZ1Byb2plY3REaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1mb3JtLWl0ZW1zJyk7XG4gICAgICAgIG5ld1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1mb3JtLWl0ZW1zJyk7XG5cbiAgICAgICAgaXNOZXdQcm9qZWN0ID0gdHJ1ZTtcblxuICAgICAgICBwcm9qZWN0c0Nob2ljZXMucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xuXG4gICAgICAgIG5ld1Byb2plY3RJbnB1dHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuXG4gICAgLy8gcmVjZWl2ZSBhbGwgZm9ybSBpbnB1dCBkYXRhXG5cblxuICAgIGNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1zdWJtaXQnKTtcblxuXG4gICAgXG5cblxuICAgIC8vIGNvbnN0IHRlc3RBcnJheSA9IFt0b2RvVGl0bGUsdG9kb0Rlc2MsZW50cnlUeXBlLHRvZG9EYXRlLHRvZG9SZW1pbmRlcix0b2RvUHJpb3JpdHkscHJvamVjdE9wdGlvbixwcm9qZWN0c0Nob2ljZXMscHJvamVjdFRpdGxlLHByb2plY3REZXNjLHByb2plY3REYXRlLHByb2plY3RSZW1pbmRlcixwcm9qZWN0UHJpb3JpdHldO1xuXG5cbiAgICBjb25zdCBhbGxGb3JtSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0taW5wdXQnKTtcbiAgICBcblxuICAgIFxuXG4gICAgZm9ybVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgXG5cbiAgICAgICAgLy8gY2xlYXIgY29sb3Igb24gcHJpb3JpdHkgYnV0dG9uXG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkSW5wdXQgPSBbXTtcblxuICAgICAgICBsZXQgcmVxdWlyZWRJbnB1dEZpbGxlZCA9IHRydWU7XG5cblxuICAgICAgICBhbGxGb3JtSW5wdXRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3JlcXVpcmVkJykpIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZElucHV0LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAoY29uc3QgZWFjaCBvZiByZXF1aXJlZElucHV0KSB7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgaWYoIWVhY2gudmFsdWUpe1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkSW5wdXRGaWxsZWQgPSBmYWxzZTsgICBcblxuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZihyZXF1aXJlZElucHV0RmlsbGVkKXtcblxuICAgICAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBoaWRlRm9ybSgpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgdG9kbyB3aXRoIGZvcm1cblxuICAgICAgICAgICAgY29uc3QgcmVzZXRBcnJheSA9IFtwcm9qZWN0VGl0bGUscHJvamVjdERlc2MscHJvamVjdERhdGUscHJvamVjdFJlbWluZGVyLHRvZG9UaXRsZSx0b2RvRGVzYyx0b2RvRGF0ZSx0b2RvUmVtaW5kZXJdO1xuXG4gICAgICAgICAgICBjb25zdCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAvLyB0YWJDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAvLyAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXRhYi1hY3RpdmUnKVxuICAgICAgICAgICAgLy8gfSk7XG5cblxuICAgICAgICAgICAgaWYobmV3UHJvamVjdFJhZGlvLmNoZWNrZWQpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3aHkgYXJlIHlvdSBydW5uaW5nPycpXG5cbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdFJlbWluZGVyLnZhbHVlIDwgMCB8fCBwcm9qZWN0UmVtaW5kZXIudmFsdWUgPiAzMCkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGhpZGVGb3JtKCk7XG5cbiAgICAgICAgICAgICAgICB0YWJDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS10YWItYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICBcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHByb2plY3RNb2R1bGUuY3JlYXRlUHJvamVjdChwcm9qZWN0VGl0bGUudmFsdWUscHJvamVjdERlc2MudmFsdWUscHJvamVjdERhdGUudmFsdWUscHJvamVjdFByaW9yaXR5LnZhbHVlLHByb2plY3RSZW1pbmRlci52YWx1ZSxgUGVuZGluZ2ApO1xuXG5cbiAgICAgICAgICAgICAgICB0b2RvTW9kdWxlLmNyZWF0ZVRvZG8odG9kb1RpdGxlLnZhbHVlLHRvZG9EZXNjLnZhbHVlLHRvZG9EYXRlLnZhbHVlLE51bWJlcih0b2RvUmVtaW5kZXIudmFsdWUpLHRvZG9Qcmlvcml0eS52YWx1ZSxgUGVuZGluZ2AscHJvamVjdFRpdGxlLnZhbHVlKTtcblxuXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL2V2ZXJ5dGltZSBzdWJtaXQgYnV0dG9uIGlzIGNsaWNrZWQgZnJlc2ggZHJvcGRvd24gaXMgY3JlYXRlZCBcbiAgICAgICAgICAgICAgICBmb3JtRG9tTW9kdWxlLmV4aXN0aW5nUHJvamVjdE9wdGlvbnMoKTtcblxuICAgICAgICAgICAgICAgIGNyZWF0ZVByb2plY3RET00oKTtcblxuICAgICAgICAgICAgICAgIGFsbFByb2plY3RzVGFiLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGFiLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgbWVudUluRGlzcGxheSA9ICdwcm9qZWN0cyc7XG5cbiAgICAgICAgICAgICAgICBwcmlvcml0eUluRGlzcGxheSA9IHByb2plY3RQcmlvcml0eS52YWx1ZTtcblxuXG4gICAgICAgICAgICAgICAgcmVzZXRBcnJheS5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgdXBkYXRlRGlzcGxheSgpO1xuXG4gXG5cblxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjcmVhdGUgdG8tZG9zIGFuZCBub3Rlc1xuXG4gICAgICAgICAgICB0b2RvTW9kdWxlLmNyZWF0ZVRvZG8odG9kb1RpdGxlLnZhbHVlLHRvZG9EZXNjLnZhbHVlLHRvZG9EYXRlLnZhbHVlLE51bWJlcih0b2RvUmVtaW5kZXIudmFsdWUpLHRvZG9Qcmlvcml0eS52YWx1ZSxgcGVuZGluZ2AscHJvamVjdHNDaG9pY2VzLnZhbHVlKTtcblxuXG4gICAgICAgICAgICAvL2V2ZXJ5dGltZSBzdWJtaXQgYnV0dG9uIGlzIGNsaWNrZWQgZnJlc2ggZHJvcGRvd24gaXMgY3JlYXRlZCBcbiAgICAgICAgICAgIGZvcm1Eb21Nb2R1bGUuZXhpc3RpbmdQcm9qZWN0T3B0aW9ucygpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0VG9kby5jaGVja2VkKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodG9kb1JlbWluZGVyLnZhbHVlIDwgMCB8fCB0b2RvUmVtaW5kZXIudmFsdWUgPiAzMCkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGhpZGVGb3JtKCk7XG5cbiAgICAgICAgICAgICAgICB0YWJDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS10YWItYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG9ET00oKTtcblxuICAgICAgICAgICAgICAgIGFsbFRvZG9zVGFiLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGFiLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgbWVudUluRGlzcGxheSA9ICd0b2Rvcyc7XG5cbiAgICAgICAgICAgICAgICBwcmlvcml0eUluRGlzcGxheSA9IHRvZG9Qcmlvcml0eS52YWx1ZTtcblxuICAgICAgICAgICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcblxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBpZiAoc2VsZWN0Tm90ZS5jaGVja2VkKSB7XG5cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBoaWRlRm9ybSgpO1xuXG4gICAgICAgICAgICAgICAgdGFiQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtdGFiLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgIGNyZWF0ZU5vdGVzRE9NKCk7XG5cbiAgICAgICAgICAgICAgICBhbGxOb3Rlc1RhYi5jbGFzc0xpc3QuYWRkKCdtZW51LXRhYi1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgIG1lbnVJbkRpc3BsYXkgPSAnbm90ZXMnO1xuXG4gICAgICAgICAgICAgICAgdXBkYXRlRGlzcGxheSgpO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgcmVzZXRBcnJheS5mb3JFYWNoKGlucHV0ID0+IHtcblxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIEZPUk0gSU5QVVQgQUNUSVZJVElFUyBFTkQgSEVSRVxuICAgICAgICBcblxuXG4gICAgfSk7XG5cblxuXG4gICAgLy8gRk9STSBBUFBFQVJBTkNFIEFDVElWSVRFUyBCRUdJTiBIRVJFXG5cblxuICAgIGZ1bmN0aW9uIGhpZGVGb3JtICgpe1xuXG5cbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LWZvcm0nKVxuXG4gICAgICAgIFxuXG4gICAgfVxuXG5cbiAgICAvLyBzdG9wIGV2ZW50IGJ1YmJsaW5nLlxuICAgIGVudHJ5Q3JlYXRpb25Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgfSlcblxuXG4gICAgZm9ybUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIGhpZGVGb3JtKCk7XG4gICAgICAgICAgICBcbiAgICB9KVxuXG4gICAgY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWJ1dHRvbicpO1xuXG4gICAgZm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Nob3ctZm9ybScpO1xuXG4gICAgICAgIGZvcm1Eb21Nb2R1bGUuZXhpc3RpbmdQcm9qZWN0T3B0aW9ucygpO1xuXG4gICAgICAgIGlmKHNlbGVjdE5vdGUuY2hlY2tlZCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0VG9kby5jaGVja2VkICYmIHNlbGVjdEV4aXN0aW5nUHJvamVjdC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgc2VsZWN0TmV3UHJvamVjdC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHNlbGVjdE5ld1Byb2plY3QuY2hlY2tlZCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTkVXIFBST0pFQ1QnKVxuICAgICAgICAgICAgY2hlY2tlZE5ld1Byb2plY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHNlbGVjdEV4aXN0aW5nUHJvamVjdC5jaGVja2VkKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFWElTVElORyBQUk9KRUNUJylcbiAgICAgICAgICAgIGNoZWNrZWRFeGlzdGluZ1Byb2plY3QoKTtcbiAgICAgICAgfVxuXG4gICAgfSlcblxuXG5cblxuXG4gICAgXG5cblxuXG5cblxuXG5cbiAgICBjb25zdCBhbGxUb2Rvc1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtdG9kb3MtdGFiJyk7XG5cbiAgICBhbGxUb2Rvc1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBcblxuICAgICAgICBjb25zb2xlLmxvZygnVE8gRE8gTElTVCcpO1xuXG4gICAgICAgIG1lbnVJbkRpc3BsYXkgPSAndG9kb3MnO1xuXG4gICAgICAgIGNyZWF0ZVRvZG9ET00oKTtcblxuICAgIH0pO1xuXG4gICAgY29uc3QgYWxsUHJvamVjdHNUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzLXRhYicpXG5cbiAgICBhbGxQcm9qZWN0c1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBjb25zb2xlLmxvZygnUFJPSkVDVFMgVEFCJyk7XG5cbiAgICAgICAgbWVudUluRGlzcGxheSA9ICdwcm9qZWN0cyc7XG5cbiAgICAgICAgY3JlYXRlUHJvamVjdERPTSgpXG5cbiAgICB9KVxuXG5cbiAgICBjb25zdCBhbGxOb3Rlc1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtbm90ZXMtdGFiJyk7XG5cbiAgICBhbGxOb3Rlc1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBjb25zb2xlLmxvZygnTk9URVMgTElTVCcpO1xuXG4gICAgICAgIG1lbnVJbkRpc3BsYXkgPSAnbm90ZXMnO1xuXG4gICAgICAgIGNyZWF0ZU5vdGVzRE9NKCk7XG5cbiAgICB9KVxuXG5cblxuXG4gICAgXG5cbn1cblxuXG4gLy8gUFJJT1JJVFkgQlVUVE9OIC0gVE9ET1NcblxuIGZ1bmN0aW9uIGNoYW5nZVRvZG9Qcmlvcml0eSgpe1xuICAgIGNvbnN0IGhpZ2hQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoLXByaW9yaXR5Jyk7XG4gICAgY29uc3QgbWVkaXVtUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVkaXVtLXByaW9yaXR5Jyk7XG4gICAgY29uc3QgbG93UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93LXByaW9yaXR5Jyk7XG5cbiAgICBpZiAoIWhpZ2hQcmlvcml0eUJ1dHRvbnx8IW1lZGl1bVByaW9yaXR5QnV0dG9ufHwhbG93UHJpb3JpdHlCdXR0b24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgaGlnaFByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgLy8gY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWJ1dHRvbnMnKTtcbiAgXG4gICAgICAgIC8vIHByaW9yaXR5QnV0dG9ucy5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy8gICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2hvc2VuLXByaW9yaXR5JylcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy8gaGlnaFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1wcmlvcml0eScpO1xuXG5cbiAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgbWVkaXVtUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtLXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgIGxvd1ByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2xvdy1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uKCdIaWdoJyk7XG5cbiAgICAgICAgcHJpb3JpdHlJbkRpc3BsYXkgPSAnSGlnaCc7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMT09QSU5HJylcblxuICAgIH0pO1xuXG4gICAgXG5cbiAgICBtZWRpdW1Qcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1idXR0b25zJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBwcmlvcml0eUJ1dHRvbnMucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIC8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nob3Nlbi1wcmlvcml0eScpXG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vIG1lZGl1bVByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1wcmlvcml0eScpO1xuXG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWdoLXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgIG1lZGl1bVByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lZGl1bS1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICBsb3dQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdsb3ctcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgcG9wdWxhdGVUb2RvQ29sbGVjdGlvbignTWVkaXVtJyk7XG5cbiAgICAgICAgcHJpb3JpdHlJbkRpc3BsYXkgPSAnTWVkaXVtJztcbiAgICAgICAgY29uc29sZS5sb2coJ0xPT1BJTkcnKVxuICAgIH0pO1xuXG5cbiAgIFxuICAgIGxvd1ByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgIC8vIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1idXR0b25zJyk7XG5cbiAgICAgICAgLy8gcHJpb3JpdHlCdXR0b25zLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nob3Nlbi1wcmlvcml0eScpXG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vIGxvd1ByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1wcmlvcml0eScpO1xuXG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWdoLXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgIG1lZGl1bVByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bS1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICBsb3dQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsb3ctcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgcG9wdWxhdGVUb2RvQ29sbGVjdGlvbignTG93Jyk7XG5cbiAgICAgICAgcHJpb3JpdHlJbkRpc3BsYXkgPSAnTG93JztcbiAgICAgICAgY29uc29sZS5sb2coJ0xPT1BJTkcnKVxuICAgIH0pO1xuICAgfVxuXG5cblxuXG4gICBmdW5jdGlvbiBjaGFuZ2VQcm9qZWN0UHJpb3JpdHkoKXtcbiAgICBjb25zdCBoaWdoUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaC1wcmlvcml0eScpO1xuICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lZGl1bS1wcmlvcml0eScpO1xuICAgIGNvbnN0IGxvd1ByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvdy1wcmlvcml0eScpO1xuXG4gICAgaWYgKCFoaWdoUHJpb3JpdHlCdXR0b258fCFtZWRpdW1Qcmlvcml0eUJ1dHRvbnx8IWxvd1ByaW9yaXR5QnV0dG9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1idXR0b25zJyk7XG4gIFxuICAgICAgICAvLyBwcmlvcml0eUJ1dHRvbnMucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIC8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nob3Nlbi1wcmlvcml0eScpXG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vIGhpZ2hQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKTtcblxuXG5cblxuICAgICAgICBoaWdoUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICBtZWRpdW1Qcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtZWRpdW0tcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbG93LXByaW9yaXR5LWNob3NlbicpO1xuXG5cblxuICAgICAgICBhcHBlbmRQcm9qZWN0T2JqZWN0cygnSGlnaCcpO1xuXG4gICAgICAgIHByaW9yaXR5SW5EaXNwbGF5ID0gJ0hpZ2gnO1xuICAgICAgICBjb25zb2xlLmxvZygnTE9PUElORycpXG5cbiAgICB9KTtcblxuICAgIFxuXG4gICAgbWVkaXVtUHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgICAgICAvLyBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYnV0dG9ucycpO1xuICAgICAgICBcbiAgICAgICAgLy8gcHJpb3JpdHlCdXR0b25zLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAvLyAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaG9zZW4tcHJpb3JpdHknKVxuICAgICAgICAvLyB9KTtcblxuICAgICAgICAvLyBtZWRpdW1Qcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKTtcblxuXG5cbiAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2gtcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgbWVkaXVtUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgIGxvd1ByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2xvdy1wcmlvcml0eS1jaG9zZW4nKTtcblxuXG5cbiAgICAgICAgYXBwZW5kUHJvamVjdE9iamVjdHMoJ01lZGl1bScpO1xuXG4gICAgICAgIHByaW9yaXR5SW5EaXNwbGF5ID0gJ01lZGl1bSc7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMT09QSU5HJylcbiAgICB9KTtcblxuXG4gICBcbiAgICBsb3dQcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICAvLyBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYnV0dG9ucycpO1xuXG4gICAgICAgIC8vIHByaW9yaXR5QnV0dG9ucy5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaG9zZW4tcHJpb3JpdHknKVxuICAgICAgICAvLyB9KTtcblxuICAgICAgICAvLyBsb3dQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKTtcblxuICAgICAgICBoaWdoUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaC1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICBtZWRpdW1Qcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtZWRpdW0tcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnbG93LXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgIGFwcGVuZFByb2plY3RPYmplY3RzKCdMb3cnKTtcblxuICAgICAgICBwcmlvcml0eUluRGlzcGxheSA9ICdMb3cnO1xuICAgICAgICBjb25zb2xlLmxvZygnTE9PUElORycpXG4gICAgfSk7XG4gICB9XG5cblxuICAgZnVuY3Rpb24gdXBkYXRlVG9kb0l0ZW0gKG9iamVjdCl7XG5cbiAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGlzcGxheScpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9VcGRhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby11cGRhdGUnKTtcblxuICAgICAgICB0b2RvVXBkYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcblxuICAgICAgICBjb25zdCBuZXdUb2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LXRpdGxlJylcbiAgICAgICAgY29uc3QgbmV3VG9kb0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LWRlc2MnKTtcbiAgICAgICAgY29uc3QgbmV3VG9kb0R1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRpc3BsYXktZGF0ZScpO1xuICAgICAgICBjb25zdCBuZXdUb2RvUmVtaW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LXJlbWluZC1pbicpO1xuICAgICAgICBjb25zdCBuZXdUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LXByaW9yaXR5Jyk7XG4gICAgICAgIGNvbnN0IG5ld1RvZG9TdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LXN0YXR1cycpO1xuICAgICAgICBjb25zdCBuZXdUb2RvUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRpc3BsYXktY2hvaWNlcycpO1xuXG5cbiAgICAgICAgY29uc3QgaW5wdXRBcnJheXMgPSBbbmV3VG9kb1RpdGxlLnZhbHVlLG5ld1RvZG9EZXNjLnZhbHVlLG5ld1RvZG9EdWUudmFsdWUsbmV3VG9kb1JlbWluZGVyLnZhbHVlLG5ld1RvZG9Qcmlvcml0eS52YWx1ZSxuZXdUb2RvU3RhdHVzLnZhbHVlLG5ld1RvZG9Qcm9qZWN0LnZhbHVlXVxuXG4gICAgICAgIGNvbnN0IGVtcHR5SW5wdXQgPSBbXVxuXG4gICAgICAgIGlucHV0QXJyYXlzLmZvckVhY2goZWxlbWVudCA9PiB7XG5cbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVtcHR5SW5wdXQucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG4gICAgICAgIGlmIChlbXB0eUlucHV0Lmxlbmd0aCA+IDAgfHwgbmV3VG9kb1JlbWluZGVyLnZhbHVlIDwgMCB8fCBuZXdUb2RvUmVtaW5kZXIudmFsdWUgPiAzMCkge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRklMVEVSSU5HIFdPUktTJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICBcblxuICAgICAgICBsZXQgbmV3RGV0YWlscyA9IHtcbiAgICAgICAgICAgIG5ld1RpdGxlOiBuZXdUb2RvVGl0bGUudmFsdWUsXG4gICAgICAgICAgICBuZXdEZXNjOiBuZXdUb2RvRGVzYy52YWx1ZSxcbiAgICAgICAgICAgIG5ld0R1ZTogbmV3VG9kb0R1ZS52YWx1ZSxcbiAgICAgICAgICAgIG5ld1JlbWluZGVyOiBuZXdUb2RvUmVtaW5kZXIudmFsdWUsXG4gICAgICAgICAgICBuZXdQcmlvcml0eTogbmV3VG9kb1ByaW9yaXR5LnZhbHVlLFxuICAgICAgICAgICAgbmV3U3RhdHVzOiBuZXdUb2RvU3RhdHVzLnZhbHVlLFxuICAgICAgICAgICAgbmV3UHJvamVjdDogbmV3VG9kb1Byb2plY3QudmFsdWUsXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRvZG9Nb2R1bGUudXBkYXRlVG9kbyhvYmplY3QsbmV3RGV0YWlscyk7XG5cbiAgICAgICAgXG5cbiAgICAgICAgLy8gdGhpcyBydW5zIGV2ZW4gaW4gYSBub3JtYWwgdG9kbyB1cGRhdGVcblxuICAgICAgICBpZiAobWVudUluRGlzcGxheSA9PT0gJ3Byb2plY3RzJykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoY2xpY2tlZFByb2plY3QpIHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUT0RPIFBST0pFQ1QgVVBEQVRFJylcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBnZXRMYXRlc3RQcm9qZWN0T2JqZWN0ID0gcHJvamVjdE9iamVjdCgpLnVucHJvY2Vzc2VkUHJvamVjdEFycmF5O1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdldExhdGVzdFByb2plY3RPYmplY3QpXG4gICAgXG4gICAgICAgICAgICAgICAgbGV0IGxhdGVzdFByb2plY3QgPSAnJztcbiAgICBcbiAgICAgICAgICAgICAgICBnZXRMYXRlc3RQcm9qZWN0T2JqZWN0LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjbGlja2VkUHJvamVjdCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSBjbGlja2VkUHJvamVjdC50aXRsZSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QuZGVzYyA9PT0gY2xpY2tlZFByb2plY3QuZGVzYyAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QuZHVlRGF0ZSA9PT0gY2xpY2tlZFByb2plY3QuZHVlRGF0ZSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QucmVtaW5kSW4gPT09IGNsaWNrZWRQcm9qZWN0LnJlbWluZEluICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5wcmlvcml0eSA9PT0gY2xpY2tlZFByb2plY3QucHJpb3JpdHkgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnN0YXR1cyA9PT0gY2xpY2tlZFByb2plY3Quc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVzdFByb2plY3QgPSBwcm9qZWN0O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICAgICAgZGlzcGxheVByb2plY3QobGF0ZXN0UHJvamVjdClcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUFJPSkVDVCBVUERBVEVEPz8/Pz8nKTtcbiAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuICAgICAgICAvLyBORUVEIFRPIEZJWCBUSElTXG5cbiAgICAgICAgaWYgKG1lbnVJbkRpc3BsYXkgPT09ICd0b2RvcycpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJpb3JpdHlJbkRpc3BsYXkgPSBuZXdUb2RvUHJpb3JpdHkudmFsdWU7XG5cbiAgICAgICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdG9kb0Rpc3BsYXlDb250YWluZXIucmVtb3ZlKCk7XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBcbiAgICAgICAgdG9kb0Rpc3BsYXlDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0b2RvRGlzcGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KVxuXG5cblxuICAgIH1cblxuXG5cblxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTm90ZUl0ZW0gKG9iamVjdCl7XG5cbiAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGlzcGxheScpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9VcGRhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby11cGRhdGUnKTtcblxuXG5cblxuXG4gICAgICAgIHRvZG9VcGRhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIGNvbnN0IG5ld1RvZG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRpc3BsYXktdGl0bGUnKVxuICAgICAgICBjb25zdCBuZXdUb2RvRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRpc3BsYXktZGVzYycpO1xuXG5cblxuICAgICAgICBjb25zdCBpbnB1dEFycmF5cyA9IFtuZXdUb2RvVGl0bGUudmFsdWUsbmV3VG9kb0Rlc2MudmFsdWVdXG5cbiAgICAgICAgY29uc3QgZW1wdHlJbnB1dCA9IFtdXG5cbiAgICAgICAgaW5wdXRBcnJheXMuZm9yRWFjaChlbGVtZW50ID0+IHtcblxuICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZW1wdHlJbnB1dC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgaWYgKGVtcHR5SW5wdXQubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRklMVEVSSU5HIFdPUktTJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBcblxuICAgICAgICBsZXQgbmV3RGV0YWlscyA9IHtcbiAgICAgICAgICAgIG5ld1RpdGxlOiBuZXdUb2RvVGl0bGUudmFsdWUsXG4gICAgICAgICAgICBuZXdEZXNjOiBuZXdUb2RvRGVzYy52YWx1ZSxcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdG9kb01vZHVsZS51cGRhdGVUb2RvKG9iamVjdCxuZXdEZXRhaWxzKTtcblxuICAgICAgICBtZW51SW5EaXNwbGF5ID0gJ25vdGVzJ1xuXG4gICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcblxuICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIFxuICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRvZG9EaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pXG5cblxuXG4gICAgfVxuXG5cblxuXG5cblxuXG5cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RJdGVtIChwcm9qZWN0KXtcblxuXG4gICAgICAgIGNvbnN0IHByb2plY3REaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdG9kby1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRldGFpbHMnKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VXBkYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdXBkYXRlJyk7XG5cbiAgICAgICAgcHJvamVjdFVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgICAgIC8vIHByb2plY3Qtc3RhdHVzLXVwZGF0ZVxuXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlLXVwZGF0ZScpXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3REZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGVzYy11cGRhdGUnKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdER1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRhdGUtdXBkYXRlJyk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RSZW1pbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXJlbWluZGVyLXVwZGF0ZScpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1wcmlvcml0eS11cGRhdGUnKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXN0YXR1cy11cGRhdGUnKTtcblxuXG5cbiAgICAgICAgY29uc3QgaW5wdXRBcnJheXMgPSBbbmV3UHJvamVjdFRpdGxlLnZhbHVlLG5ld1Byb2plY3REZXNjLnZhbHVlLG5ld1Byb2plY3REdWUudmFsdWUsbmV3UHJvamVjdFJlbWluZGVyLnZhbHVlLG5ld1Byb2plY3RQcmlvcml0eS52YWx1ZSxuZXdQcm9qZWN0U3RhdHVzLnZhbHVlXVxuXG4gICAgICAgIGNvbnN0IGVtcHR5SW5wdXQgPSBbXVxuXG4gICAgICAgIGlucHV0QXJyYXlzLmZvckVhY2goZWxlbWVudCA9PiB7XG5cbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVtcHR5SW5wdXQucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG4gICAgICAgIGlmIChlbXB0eUlucHV0Lmxlbmd0aCA+IDAgfHwgbmV3UHJvamVjdFJlbWluZGVyLnZhbHVlIDwgMCB8fCBuZXdQcm9qZWN0UmVtaW5kZXIudmFsdWUgPiAzMCkge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRklMVEVSSU5HIFdPUktTJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgbGV0IG5ld0RldGFpbHMgPSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhpc1xuICAgICAgICAgICAgbmV3VGl0bGU6IG5ld1Byb2plY3RUaXRsZS52YWx1ZSxcbiAgICAgICAgICAgIG5ld0Rlc2M6IG5ld1Byb2plY3REZXNjLnZhbHVlLFxuICAgICAgICAgICAgbmV3RHVlOiBuZXdQcm9qZWN0RHVlLnZhbHVlLFxuICAgICAgICAgICAgbmV3UmVtaW5kZXI6IG5ld1Byb2plY3RSZW1pbmRlci52YWx1ZSxcbiAgICAgICAgICAgIG5ld1ByaW9yaXR5OiBuZXdQcm9qZWN0UHJpb3JpdHkudmFsdWUsXG4gICAgICAgICAgICBuZXdTdGF0dXM6IG5ld1Byb2plY3RTdGF0dXMudmFsdWUsXG4gICAgICAgIH1cblxuXG4gICAgICAgIHByb2plY3RNb2R1bGUudXBkYXRlUHJvamVjdChwcm9qZWN0LG5ld0RldGFpbHMpO1xuXG4gICAgICAgIG1lbnVJbkRpc3BsYXkgPSAncHJvamVjdHMnXG5cbiAgICAgICAgcHJpb3JpdHlJbkRpc3BsYXkgPSBuZXdQcm9qZWN0UHJpb3JpdHkudmFsdWU7XG5cbiAgICAgICAgdXBkYXRlRGlzcGxheSgpO1xuXG4gICAgICAgIHByb2plY3REaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgXG4gICAgICAgIHByb2plY3REaXNwbGF5Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgcHJvamVjdERpc3BsYXlDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcHJvamVjdERpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSlcblxuXG5cbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gcG9wVXBmb3JEZWxldGUoZGVsZXRlT2JqRm4pe1xuICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgcG9wVXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9wVXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncG9wLXVwLWNvbnRhaW5lcicpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZChwb3BVcENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwb3BVcC5jbGFzc0xpc3QuYWRkKCdwb3AtdXAnKTtcbiAgICAgICAgICAgIHBvcFVwQ29udGFpbmVyLmFwcGVuZChwb3BVcCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwb3BVcENvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwb3BVcENvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgncG9wLXVwLWNvbnRlbnQtZGl2JylcbiAgICAgICAgICAgICAgICBwb3BVcC5hcHBlbmQocG9wVXBDb250ZW50RGl2KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcFVwQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwb3BVcENvbnRlbnQudGV4dENvbnRlbnQgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzPydcbiAgICAgICAgICAgICAgICAgICAgcG9wVXBDb250ZW50RGl2LmFwcGVuZChwb3BVcENvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BvcC11cC1idXR0b24tY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgcG9wVXAuYXBwZW5kKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeWVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIHllc0J1dHRvbi50ZXh0Q29udGVudCA9ICdZZXMnO1xuICAgICAgICAgICAgICAgICAgICB5ZXNCdXR0b24uY2xhc3NMaXN0LmFkZCgneWVzLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKHllc0J1dHRvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgeWVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9wVXBDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVPYmpGbigpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBub0J1dHRvbi50ZXh0Q29udGVudCA9ICdObyc7XG4gICAgICAgICAgICAgICAgICAgIG5vQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25vLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKG5vQnV0dG9uKTtcblxuICAgICAgICAgICAgICAgICAgICBub0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcFVwQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG5cblxuICAgIH1cblxuXG5cbiAgICBcblxuXG5cbiAgICBmdW5jdGlvbiBkZWxldGVUb2RvSXRlbSAob2JqZWN0KXtcblxuICAgICAgICBjb25zdCB0b2RvRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRpc3BsYXktY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaXNwbGF5Jyk7XG5cbiAgICAgICAgY29uc3QgdG9kb0RlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRlbGV0ZScpO1xuXG4gICAgICAgIHRvZG9EZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cblxuICAgICAgICAgICAgZnVuY3Rpb24gZGVsZXRlVG9kbygpe1xuXG4gICAgICAgICAgICAgICAgdG9kb01vZHVsZS5kZWxldGVUb2RvKG9iamVjdCk7XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVEaXNwbGF5KClcblxuICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb3BVcGZvckRlbGV0ZShkZWxldGVUb2RvKTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgdG9kb0Rpc3BsYXlDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdG9kb0Rpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdEl0ZW0gKG9iamVjdCl7XG5cblxuICAgICAgICBjb25zdCBwcm9qZWN0RGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRvZG8tY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1kZXRhaWxzJyk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdERlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRlbGV0ZScpO1xuXG4gICAgICAgIFxuXG4gICAgICAgIHByb2plY3REZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QgKCl7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0TW9kdWxlLmRlbGV0ZVByb2plY3Qob2JqZWN0KTtcblxuICAgICAgICAgICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBvcFVwZm9yRGVsZXRlKGRlbGV0ZVByb2plY3QpO1xuICAgICAgICBcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBwcm9qZWN0RGlzcGxheUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHByb2plY3REaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHByb2plY3REaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cblxuXG4gICAgLy8gc2VuZCB0byBhbGwgcG9wdWxhdGUgbW9kdWxlc1xuICAgIGZ1bmN0aW9uIGVtcHR5RGlzcGxheSgpe1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb24tY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25Db250YWluZXJJdGVtcyA9IFtdO1xuXG4gICAgICAgIGlmKGNvbGxlY3Rpb25Db250YWluZXIpe1xuICAgICAgICAgICAgY29sbGVjdGlvbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uQ29udGFpbmVySXRlbXMucHVzaChlbGVtZW50KVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjb2xsZWN0aW9uQ29udGFpbmVySXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzcGxheUVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGlzcGxheUVtcHR5LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktZW1wdHknKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5RW1wdHkudGV4dENvbnRlbnQgPSAnRU1QVFknO1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25Db250YWluZXIuYXBwZW5kKGRpc3BsYXlFbXB0eSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3Rlc0NvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtY29sbGVjdGlvbicpO1xuICAgICAgICBjb25zdCBub3Rlc0NvbGxlY3Rpb25JdGVtcyA9IFtdO1xuXG4gICAgICAgIGlmIChub3Rlc0NvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgIG5vdGVzQ29sbGVjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBub3Rlc0NvbGxlY3Rpb25JdGVtcy5wdXNoKGVsZW1lbnQpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG5vdGVzQ29sbGVjdGlvbkl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG5vdGVzQ29sbGVjdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXNwbGF5RW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5RW1wdHkuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlFbXB0eS50ZXh0Q29udGVudCA9ICdFTVBUWSc7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbkNvbnRhaW5lci5hcHBlbmQoZGlzcGxheUVtcHR5KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUR1cmF0aW9uKGRhdGUpe1xuXG4gICAgICAgIGNvbnN0IHNwbGl0RGF0ZSA9IGRhdGUuc3BsaXQoJy0nKTtcblxuICAgICAgICBjb25zdCBtb250aEFycmF5ID0gWydKYW51YXJ5JywnRmVicnVhcnknLCdNYXJjaCcsJ0FwcmlsJywnTWF5JywnSnVuZScsJ0p1bHknLCdBdWd1c3QnLCdTZXB0ZW1iZXInLCdPY3RvYmVyJywnTm92ZW1iZXInLCdEZWNlbWJlciddO1xuXG4gICAgICAgIHJldHVybiBgRHVlOiAke051bWJlcihzcGxpdERhdGVbMl0pfSAke21vbnRoQXJyYXlbc3BsaXREYXRlWzFdLTFdfSAke3NwbGl0RGF0ZVswXX1gO1xuXG4gICAgfVxuXG4gIFxuXG4gICBcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFjdGl2aXRpZXNNb2R1bGU7XG5cbmV4cG9ydCB7Y2hhbmdlVG9kb1ByaW9yaXR5LCBjaGFuZ2VQcm9qZWN0UHJpb3JpdHksIHVwZGF0ZVRvZG9JdGVtLCB1cGRhdGVQcm9qZWN0SXRlbSwgdXBkYXRlTm90ZUl0ZW0sIGRlbGV0ZVRvZG9JdGVtLCBkZWxldGVQcm9qZWN0SXRlbSxlbXB0eURpc3BsYXksZGlzcGxheUR1cmF0aW9ufTtcblxuIiwiaW1wb3J0IHRvZG9Nb2R1bGUgZnJvbSBcIi4uL2NyZWF0ZVRvZG9zXCI7XG5cbmltcG9ydCBwcm9qZWN0TW9kdWxlIGZyb20gXCIuLi9jcmVhdGVQcm9qZWN0c1wiO1xuXG5mdW5jdGlvbiBzb3J0aW5nTW9kdWxlICgpe1xuXG5cbiAgICAgLy8gU28gdGhhdCBpdCBkb2VzIG5vdCBtZXNzIHdpdGggdGhlIG9yaWdpbmFsIGFycmF5XG5cbiAgICBmdW5jdGlvbiBjbG9uZU9iamVjdCgpe1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RBcnJheVJlZmVyZW5jZSA9IHByb2plY3RNb2R1bGUucHJvamVjdEFycmF5O1xuXG4gICAgICAgIGNvbnN0IGNsb25lUHJvamVjdEFycmF5ID0gW107XG5cblxuICAgICAgICBjb25zdCB0b2RvQXJyYXlSZWZlcmVuY2UgPSB0b2RvTW9kdWxlLnRvZG9BcnJheTtcblxuICAgICAgICBjb25zdCBjbG9uZVRvZG9BcnJheSA9IFtdO1xuICAgICAgICBcblxuICAgICAgICB0b2RvQXJyYXlSZWZlcmVuY2UuZm9yRWFjaCh0b2RvT2JqZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsb25lZFRvRG8gPSBPYmplY3QuYXNzaWduKHt9LHRvZG9PYmplY3QpO1xuICAgICAgICAgICAgY2xvbmVUb2RvQXJyYXkucHVzaChjbG9uZWRUb0RvKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvamVjdEFycmF5UmVmZXJlbmNlLmZvckVhY2gocHJvamVjdE9iamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZWRQcm9qZWN0ID0gT2JqZWN0LmFzc2lnbih7fSxwcm9qZWN0T2JqZWN0KTtcbiAgICAgICAgICAgIGNsb25lUHJvamVjdEFycmF5LnB1c2goY2xvbmVkUHJvamVjdCk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgcmV0dXJuIHtjbG9uZVByb2plY3RBcnJheSxjbG9uZVRvZG9BcnJheX1cblxuXG4gICAgfVxuXG4gICAgXG5cbiAgICAvLyBzb3J0cyB0aGUgdG8gZG9zIGFjY29yZGluZyB0byB0aGUgcHJvamVjdCBuYW1lIGlzIGhhcyBiZWVuIGFzc2lnbmVkIHRvXG4gICAgLy8gUmVuYW1lIHRoaXMgdG8gcHJvamVjdCBzb3J0ZXJcbiAgICBmdW5jdGlvbiBzb3J0QnlQcm9qZWN0TmFtZSgpe1xuXG5cbiAgICAgICAgY29uc3QgY2xvbmVQcm9qZWN0QXJyYXkgPSBjbG9uZU9iamVjdCgpLmNsb25lUHJvamVjdEFycmF5XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjbG9uZVRvZG9BcnJheSA9IGNsb25lT2JqZWN0KCkuY2xvbmVUb2RvQXJyYXlcblxuICAgICAgICBsZXQgcHJvY2Vzc2VkUHJvamVjdEFycmF5QnlOYW1lID0gW107XG5cbiAgICAgICAgY2xvbmVQcm9qZWN0QXJyYXkuZm9yRWFjaChwcm9qZWN0T2JqZWN0ID0+IHtcblxuICAgICAgICAgICAgcHJvamVjdE9iamVjdC50b2RvQ29sbGVjdGlvbiA9IFtdO1xuXG4gICAgICAgICAgICBjbG9uZVRvZG9BcnJheS5mb3JFYWNoKHRvZG9PYmplY3QgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3RPYmplY3QudGl0bGUgPT09IHRvZG9PYmplY3QucHJvamVjdCkge1xuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0T2JqZWN0LnRvZG9Db2xsZWN0aW9uLnB1c2godG9kb09iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHByb2Nlc3NlZFByb2plY3RBcnJheUJ5TmFtZS5wdXNoKHByb2plY3RPYmplY3QpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgcmV0dXJuIHtwcm9jZXNzZWRQcm9qZWN0QXJyYXlCeU5hbWV9O1xuXG4gICAgfVxuXG5cblxuXG5cblxuXG5cbiAgICBmdW5jdGlvbiBwcmlvcml0eVNvcnRlcih1bnByb2Nlc3NlZEFycmF5KXtcblxuICAgICAgICBjb25zdCBwcmlvcml0aWVzID0gWydIaWdoJywnTWVkaXVtJywnTG93J107XG5cbiAgICAgICAgY29uc3Qgb2JqZWN0c0J5UHJpb3JpdHkgPSB7SGlnaDpbXSxNZWRpdW06W10sTG93OltdfTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJpb3JpdGllcy5sZW5ndGg7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgdW5wcm9jZXNzZWRBcnJheS5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5wcmlvcml0eSA9PT0gcHJpb3JpdGllc1tpbmRleF0pe1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RzQnlQcmlvcml0eVtwcmlvcml0aWVzW2luZGV4XV0ucHVzaChvYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqZWN0c0J5UHJpb3JpdHk7XG5cblxuICAgIH1cblxuXG5cblxuICAgIGZ1bmN0aW9uIHNvcnREdWVEYXRlIChBcnJheSl7XG5cbiAgICAgICAgLy8gVXNlIHRoaXMgdG8gc29ydCBwcm9qZWN0cyBhbmQgdG9kb3NcblxuICAgICAgICAvLyBzb3J0cyBhcnJheSBpbiBhc2NlbmRpbmcgb3JkZXIgYWNjb3JkaW5nIHRvIGR1ZSBkYXRlXG4gICAgICAgIGFzY2VuZGluZ1NvcnQoQXJyYXkpO1xuXG4gICAgICAgIGNvbnN0IGR1ZVNvcnRlZEFycmF5ID0ge1xuICAgICAgICAgICAgbm90ZXM6W10sXG4gICAgICAgICAgICBvdmVyZHVlOltdLFxuICAgICAgICAgICAgZHVlOltdLFxuICAgICAgICAgICAgdXBjb21pbmc6W10sXG4gICAgICAgICAgICBjb21wbGV0ZTpbXVxuICAgICAgICB9O1xuXG4gICAgICAgIEFycmF5LmZvckVhY2gob2JqZWN0ID0+IHtcblxuXG4gICAgICAgICAgICAvLyBOb3RlcyAtIHRvIGJlIGlzb2xhdGVkICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCFvYmplY3QuZHVlRGF0ZSl7XG5cbiAgICAgICAgICAgICAgICBkdWVTb3J0ZWRBcnJheS5ub3Rlcy5wdXNoKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENvbXBsZXRlXG4gICAgICAgICAgICBpZihvYmplY3Quc3RhdHVzID09PSAnQ29tcGxldGUnKXtcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGR1ZVNvcnRlZEFycmF5LmNvbXBsZXRlLnB1c2gob2JqZWN0KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3ZlcmR1ZVxuICAgICAgICAgICAgaWYoKG9iamVjdC5kdXJhdGlvbkxlZnQuZGF5TGVmdCkgPCAwKXtcblxuICAgICAgICAgICAgICAgIGR1ZVNvcnRlZEFycmF5Lm92ZXJkdWUucHVzaChvYmplY3QpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIER1ZVxuICAgICAgICAgICAgaWYgKCgob2JqZWN0LmR1cmF0aW9uTGVmdC5kYXlMZWZ0KSA8PSBvYmplY3QucmVtaW5kSW4pICYmICgob2JqZWN0LmR1cmF0aW9uTGVmdC5kYXlMZWZ0KSA+PSAwKSl7XG5cbiAgICAgICAgICAgICAgICBkdWVTb3J0ZWRBcnJheS5kdWUucHVzaChvYmplY3QpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGNvbWluZ1xuICAgICAgICAgICAgaWYoKG9iamVjdC5kdXJhdGlvbkxlZnQuZGF5TGVmdCkgPiBvYmplY3QucmVtaW5kSW4pe1xuXG4gICAgICAgICAgICAgICAgZHVlU29ydGVkQXJyYXkudXBjb21pbmcucHVzaChvYmplY3QpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkdWVTb3J0ZWRBcnJheSk7XG5cbiAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4gZHVlU29ydGVkQXJyYXk7ICAgIFxuICAgICBcblxuICAgIH1cblxuXG5cbiAgICAvLyBTb3J0cyBvYmplY3RzIGluIEFycmF5IHRvIGFzY2VuZGluZyBvcmRlciBhY2NvcmRpbmcgdG8gZHVlIGRhdGVcbiAgICBmdW5jdGlvbiBhc2NlbmRpbmdTb3J0IChBcnJheSl7XG5cbiAgICAgICAgLy8gQXNzaWduIGR1cmF0aW9uIGxlZnRcbiAgICAgICAgQXJyYXkuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0T2JqZWN0RHVlRGF0ZSA9IGludGVydmFsKG9iamVjdC5kdWVEYXRlKTtcbiAgICAgICAgICAgIG9iamVjdC5kdXJhdGlvbkxlZnQgPSBmb3JtYXRPYmplY3REdWVEYXRlO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IGRhdGVBcnJheSA9IFtdO1xuICAgICAgICBjb25zdCBzb3J0ZWRBcnJheSA9IFtdO1xuXG5cbiAgICAgICAgQXJyYXkuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICAgICAgLy8gb2JqZWN0LmR1cmF0aW9uTGVmdC5kYXlMZWZ0XG4gICAgICAgICAgICBkYXRlQXJyYXkucHVzaChvYmplY3QuZHVyYXRpb25MZWZ0LmRheUxlZnQpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRhdGVBcnJheS5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGEtYn0pO1xuXG4gICAgICAgIGRhdGVBcnJheS5mb3JFYWNoKGRhdGUgPT4ge1xuXG5cbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZSA9PT0gQXJyYXlbaW5kZXhdLmR1cmF0aW9uTGVmdC5kYXlMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRlZEFycmF5LnB1c2goQXJyYXlbaW5kZXhdKTtcblxuICAgICAgICAgICAgICAgICAgICBBcnJheS5zcGxpY2UoaW5kZXgsMSlcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgIFxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFB1c2ggc29ydGVkIGFycmF5IHRvIG9yaWdpbmFsIGFycmF5XG4gICAgICAgIHNvcnRlZEFycmF5LmZvckVhY2goc29ydGVkT2JqID0+IHtcbiAgICAgICAgICAgIEFycmF5LnB1c2goc29ydGVkT2JqKVxuICAgICAgICB9KTtcbiAgICAgICAgXG5cblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gaW50ZXJ2YWwoZGF0ZSl7XG5cbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXkgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudE1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKSsxO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcblxuXG5cbiAgICAgICAgLy8gY29uc3QgZm9ybWF0dGVkQ3VycmVudERhdGUgPSBbeWVhcixtb250aCxkYXldO1xuXG5cbiAgICAgICAgLy8gW3l5eXksbW0sZGRdXG4gICAgICAgIGNvbnN0IHNwbGl0T2JqRGF0ZSA9IGRhdGUuc3BsaXQoJy0nKTtcblxuICAgICAgICBjb25zdCB5ZWFyc0xlZnQgPSBzcGxpdE9iakRhdGVbMF0gLSBjdXJyZW50WWVhcjtcblxuICAgICAgICBjb25zdCBtb250aHNMZWZ0ID0gc3BsaXRPYmpEYXRlWzFdIC0gY3VycmVudE1vbnRoO1xuXG4gICAgICAgIC8vIGNvbnN0IGRheUxlZnQgPSBzcGxpdE9iakRhdGVbMl0gLSBjdXJyZW50RGF5O1xuXG4gICAgICAgIC8vIGlmIGl0IGlzIG5leHQgbW9udGggb3IgbW9yZSwgYWRkIDMwIGRheXMgbXVsdGlwbGllZCBieSB0aGUgbnVtYmVyIG9mIGV4dHJhIG1vbnRocyAoZm9yIG1vcmUgZmlsdGVyaW5nIGFjY3VyYWN5KVxuICAgICAgICBjb25zdCBkYXlMZWZ0ID0gKDMwICogKG1vbnRoc0xlZnQpKSArIChzcGxpdE9iakRhdGVbMl0gLSBjdXJyZW50RGF5KTtcblxuXG4gICAgICAgIFxuXG5cbiAgICAgICAgY29uc3QgaW50ZXJ2YWxPYmogPSB7ZGF5TGVmdCxtb250aHNMZWZ0LHllYXJzTGVmdH07XG5cblxuXG4gICAgXG4gICAgICAgIHJldHVybiBpbnRlcnZhbE9ialxuICAgIH1cblxuXG5cbiAgICAgICAgXG5cbiAgICBmdW5jdGlvbiBub3RlU29ydGVyKHVucHJvY2Vzc2VkQXJyYXkpe1xuXG4gICAgICAgIGNvbnN0IG5vdGVPYmplY3RzID0gW11cblxuICAgICAgICB1bnByb2Nlc3NlZEFycmF5LmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoIW9iai5kdWVEYXRlKXtcblxuICAgICAgICAgICAgICAgIG5vdGVPYmplY3RzLnB1c2gob2JqKVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5vdGVPYmplY3RzO1xuXG5cbiAgICB9XG5cblxuXG4gICBcblxuICAgIHJldHVybiB7Y2xvbmVPYmplY3Qsc29ydEJ5UHJvamVjdE5hbWUscHJpb3JpdHlTb3J0ZXIsc29ydER1ZURhdGUsbm90ZVNvcnRlcn1cblxufVxuXG5jb25zdCBpbml0aWFsaXplZFNvcnRUb0RvTW9kdWxlID0gc29ydGluZ01vZHVsZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplZFNvcnRUb0RvTW9kdWxlOyIsIi8vIGltcG9ydCBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uIGZyb20gXCIuL3BvcHVsYXRlRE9NVG9kb0NvbGxlY3Rpb25cIlxuXG5pbXBvcnQgYXBwZW5kTm90ZXNPYmplY3QgZnJvbSBcIi4vcG9wdWxhdGVET01Ob3RlQ29sbGVjdGlvblwiO1xuXG5mdW5jdGlvbiBhbGxOb3RlRE9NTW9kdWxlICgpe1xuXG4gICAgY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG5cblxuXG4gICAgLy8gbW92ZSB0byBkb21BY3Rpdml0eVxuICAgIGZ1bmN0aW9uIHJlbW92ZUV4aXN0aW5nRGlzcGxheURPTSAoKXtcblxuICAgICAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktY29udGFpbmVyJyk7XG5cbiAgICAgICAgZGlzcGxheUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICB9KTtcblxuICAgIH1cblxuICAgIHJlbW92ZUV4aXN0aW5nRGlzcGxheURPTSgpO1xuXG5cbiAgICBcblxuXG4gICAgXG5cblxuICAgIGNvbnN0IHRvZG9Db250YWluZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdG9kb0NvbnRhaW5lclRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyLXRpdGxlJyk7XG5cbiAgICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZCh0b2RvQ29udGFpbmVyVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHRhYlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdGFiVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFiLXRpdGxlJyk7XG5cbiAgICAgICAgdG9kb0NvbnRhaW5lclRpdGxlLmFwcGVuZCh0YWJUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgICAgICB0b2RvSGVhZGVyLnRleHRDb250ZW50ID0gJ05vdGVzJztcblxuICAgICAgICAgICAgdGFiVGl0bGUuYXBwZW5kKHRvZG9IZWFkZXIpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgICAgIHRvZG9QYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnWW91ciBjb2xsZWN0aW9uIG9mIG5vdGVzIGFyZSBkaXNwbGF5ZWQgaGVyZSc7XG5cbiAgICAgICAgICAgIHRhYlRpdGxlLmFwcGVuZCh0b2RvUGFyYWdyYXBoKTtcblxuICAgICAgICBcblxuXG5cblxuXG5cbiAgICBcbiAgICBjb25zdCBjb2xsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb2xsZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbGxlY3Rpb24tY29udGFpbmVyJyk7XG5cbiAgICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZChjb2xsZWN0aW9uQ29udGFpbmVyKTtcblxuICAgICAgICAvLyBjcmVhdGUgYSBwb3B1bGF0ZSBub3RlcyBtb2R1bGVcblxuICAgICAgICAvLyBDcmVhdGUgaXQgaGVyZSBmaXJzdCB0aGVuIHNlbmQgaXQgc29tZXdoZXJlIGVsc2UuXG4gICAgICAgIGFwcGVuZE5vdGVzT2JqZWN0KCk7XG5cbiAgICAgICAgXG5cblxuXG5cbiAgICAgICBcblxuICAgIFxuICAgIFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGFsbE5vdGVET01Nb2R1bGU7IiwiaW1wb3J0IHBvcHVsYXRlVG9kb0NvbGxlY3Rpb24gZnJvbSBcIi4vcG9wdWxhdGVET01Ub2RvQ29sbGVjdGlvblwiO1xuXG5pbXBvcnQgeyBjaGFuZ2VUb2RvUHJpb3JpdHkgfSBmcm9tIFwiLi4vZG9tQWN0aXZpdGllcy9kb21BY3Rpdml0aWVzXCI7XG5cbmZ1bmN0aW9uIGFsbFRvZG9ET01Nb2R1bGUgKCl7XG5cbiAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktY29udGFpbmVyJyk7XG5cblxuXG5cbiAgICAvLyBtb3ZlIHRvIGRvbUFjdGl2aXR5XG4gICAgZnVuY3Rpb24gcmVtb3ZlRXhpc3RpbmdEaXNwbGF5RE9NICgpe1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1jb250YWluZXInKTtcblxuICAgICAgICBkaXNwbGF5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcblxuICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcmVtb3ZlRXhpc3RpbmdEaXNwbGF5RE9NKCk7XG5cblxuICAgIFxuXG5cbiAgICBcblxuXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0b2RvQ29udGFpbmVyVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItdGl0bGUnKTtcblxuICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kKHRvZG9Db250YWluZXJUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgdGFiVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0YWJUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YWItdGl0bGUnKTtcblxuICAgICAgICB0b2RvQ29udGFpbmVyVGl0bGUuYXBwZW5kKHRhYlRpdGxlKTtcblxuICAgICAgICAgICAgY29uc3QgdG9kb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICAgICAgICAgIHRvZG9IZWFkZXIudGV4dENvbnRlbnQgPSAnVG8tZG9zJztcblxuICAgICAgICAgICAgdGFiVGl0bGUuYXBwZW5kKHRvZG9IZWFkZXIpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgICAgIHRvZG9QYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnWW91ciBjb2xsZWN0aW9uIG9mIHRvLWRvcyBhcmUgZGlzcGxheWVkIGhlcmUnO1xuXG4gICAgICAgICAgICB0YWJUaXRsZS5hcHBlbmQodG9kb1BhcmFncmFwaCk7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHByaW9yaXR5QnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1idXR0b25zJyk7XG5cbiAgICAgICAgdG9kb0NvbnRhaW5lclRpdGxlLmFwcGVuZChwcmlvcml0eUJ1dHRvbnMpO1xuXG4gICAgICAgICAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgaGlnaFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgaGlnaFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgICAgIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9ICdIaWdoJztcblxuICAgICAgICAgICAgcHJpb3JpdHlCdXR0b25zLmFwcGVuZChoaWdoUHJpb3JpdHkpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ21lZGl1bS1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICBtZWRpdW1Qcmlvcml0eS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuXG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kKG1lZGl1bVByaW9yaXR5KTtcblxuXG4gICAgICAgICAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBsb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdsb3ctcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgcHJpb3JpdHlCdXR0b25zLmFwcGVuZChsb3dQcmlvcml0eSk7XG5cbiAgICAgICAgICAgIFxuXG5cblxuXG5cbiAgICBcbiAgICBjb25zdCBjb2xsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb2xsZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbGxlY3Rpb24tY29udGFpbmVyJyk7XG5cbiAgICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZChjb2xsZWN0aW9uQ29udGFpbmVyKTtcblxuICAgIHBvcHVsYXRlVG9kb0NvbGxlY3Rpb24oJ0hpZ2gnKTtcblxuICAgIGNoYW5nZVRvZG9Qcmlvcml0eSgpO1xuICAgIFxuICAgIC8vIGRvbUFjdGlvbigpXG5cblxuXG5cblxuICAgXG5cblxuICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuXG5cblxuICAgICAgICBcblxuXG5cblxuXG4gICAgXG4gICAgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgYWxsVG9kb0RPTU1vZHVsZTsiLCJpbXBvcnQgeyB1cGRhdGVQcm9qZWN0SXRlbSx1cGRhdGVUb2RvSXRlbSwgZGVsZXRlUHJvamVjdEl0ZW0sZW1wdHlEaXNwbGF5LCBkaXNwbGF5RHVyYXRpb24gfSBmcm9tIFwiLi4vZG9tQWN0aXZpdGllcy9kb21BY3Rpdml0aWVzXCI7XG5cbi8vIGltcG9ydCBkaXNwbGF5VG9kbyBmcm9tIFwiLi9kaXNwbGF5VG9kb1wiO1xuXG5pbXBvcnQgZGlzcGxheVRvZG9zSW5Qcm9qZWN0IGZyb20gXCIuL2Rpc3BsYXlUb2Rvc0luUHJvamVjdFwiO1xuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdCAocHJvamVjdCl7XG4gICAgY29uc29sZS5sb2coJ0JPT00gQk9PTSEnKTtcblxuICAgIGNvbnNvbGUubG9nKHByb2plY3QudG9kb3NCeVByaW9yaXR5KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0VG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRvZG8tY29udGFpbmVyJyk7XG5cbiAgICBpZiAoZ2V0UHJvamVjdFRvZG9Db250YWluZXIpIHtcblxuICAgICAgICBnZXRQcm9qZWN0VG9kb0NvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHByb2plY3RUb2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdG9kby1jb250YWluZXInKTtcblxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0VG9kb0NvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGlzcGxheScpO1xuICAgICAgICAgICAgcHJvamVjdFRvZG9Db250YWluZXIuYXBwZW5kKHByb2plY3REaXNwbGF5KVxuXG4gICAgICAgICAgICBwcm9qZWN0RGlzcGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIFxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgICAgICAgICAgcHJvamVjdERpc3BsYXkuYXBwZW5kKHByb2plY3RGb3JtKTtcblxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRldGFpbHMnKTtcblxuICAgICAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kKHByb2plY3REZXRhaWxzKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC10aXRsZS11cGRhdGUnKVxuXG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlSW5wdXQudmFsdWUgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IFRpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdFRpdGxlSW5wdXQpO1xuXG5cblxuXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcHJvamVjdERldGFpbHNMaW5lQnJlYWsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgIC8vIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazEpO1xuXG5cblxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWRlc2MtdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0lucHV0LnZhbHVlID0gcHJvamVjdC5kZXNjO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdERlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0lucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBEZXNjcmlwdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdERlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCc0Jyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnY29scycsJzQwJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERlc2NJbnB1dCk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgLy8gcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3REZXRhaWxzTGluZUJyZWFrMik7XG5cblxuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtZGF0ZS11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQudmFsdWUgPSBwcm9qZWN0LmR1ZURhdGU7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpXG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERhdGVJbnB1dCk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgLy8gcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3REZXRhaWxzTGluZUJyZWFrMyk7XG5cblxuXG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RSZW1pbmRJbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LXJlbWluZGVyLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnbnVtYmVyJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0UmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsJzAnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LnNldEF0dHJpYnV0ZSgnbWF4JywnMzAnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LnZhbHVlID0gcHJvamVjdC5yZW1pbmRJbjtcblxuICAgICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0UmVtaW5kSW5JbnB1dCk7XG5cbiAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcHJvamVjdERldGFpbHNMaW5lQnJlYWs0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgIC8vIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbnNPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0QnV0dG9uc09uZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ1dHRvbnMtb25lJyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3RCdXR0b25zT25lKVxuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5QnRuRGl2LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWJ1dHRvbi1kaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0QnV0dG9uc09uZS5hcHBlbmQocHJpb3JpdHlCdG5EaXYpXG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6J1xuICAgICAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdwcm9qZWN0LXByaW9yaXR5LXVwZGF0ZScpXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5EaXYuYXBwZW5kKHByaW9yaXR5TGFiZWwpXG4gICAgICAgICAgICAgICAgXG4gICAgXG5cblxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtcHJpb3JpdHktdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScscHJvamVjdC5wcmlvcml0eSk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnByaW9yaXR5O1xuXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5EaXYuYXBwZW5kKHByb2plY3RQcmlvcml0eUJ1dHRvbik7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc2VzIGZvciBkaWZmZXJlbnQgcHJpb3JpdGllcyAoZGlmZmVyZW50IGNvbG91cnMpXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9PT0gJ0xvdycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ01lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9PT0gJ01lZGl1bScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ0hpZ2gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnSGlnaCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ0xvdyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIH0pO1xuXG5cblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByb2plY3REZXRhaWxzTGluZUJyZWFrNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERldGFpbHNMaW5lQnJlYWs1KTtcblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgc3RhdHVzQnRuRGl2LmNsYXNzTGlzdC5hZGQoJ3N0YXR1cy1idXR0b24tZGl2Jyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdEJ1dHRvbnNPbmUuYXBwZW5kKHN0YXR1c0J0bkRpdilcblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIHN0YXR1c0xhYmVsLnRleHRDb250ZW50ID0gJ1N0YXR1czonXG4gICAgICAgICAgICAgICAgc3RhdHVzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdwcm9qZWN0LXN0YXR1cy11cGRhdGUnKVxuICAgICAgICAgICAgICAgIHN0YXR1c0J0bkRpdi5hcHBlbmQoc3RhdHVzTGFiZWwpXG5cblxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERpc3BsYXlTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LXN0YXR1cy11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgndmFsdWUnLHByb2plY3Quc3RhdHVzKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSBwcm9qZWN0LnN0YXR1cztcblxuICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICBzdGF0dXNCdG5EaXYuYXBwZW5kKHByb2plY3REaXNwbGF5U3RhdHVzKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgY2xhc3NlcyBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXMgKGRpZmZlcmVudCBjb2xvdXJzKVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0RGlzcGxheVN0YXR1cy52YWx1ZSA9PT0gJ1BlbmRpbmcnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnZhbHVlID0gJ0NvbXBsZXRlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3REaXNwbGF5U3RhdHVzLnZhbHVlID09PSAnQ29tcGxldGUnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnZhbHVlID0gJ1BlbmRpbmcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSAnUGVuZGluZyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIFxuXG5cblxuXG5cblxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgcHJvamVjdFRvZG9zLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdG9kb3MnKTtcblxuICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3RUb2Rvcyk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlIG5lZWQgdGhpc1xuICAgICAgICAgICAgcHJvamVjdFRvZG9zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICAvLyBDb250YWluZXIgdGhhdCBkaXNwbGF5cyBhbGwgdG9kb3MgaW4gYSBwcm9qZWN0XG4gICAgICAgICAgICBkaXNwbGF5VG9kb3NJblByb2plY3QocHJvamVjdCk7XG5cbiAgICAgICAgICAgIC8vIGNsaWNrZWRQcm9qZWN0ID0gcHJvamVjdDtcblxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uc1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdEJ1dHRvbnNUd28uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idXR0b25zLXR3bycpO1xuICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3RCdXR0b25zVHdvKTtcbiAgICBcblxuXG5cblxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIHByb2plY3REZWxldGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsJycpO1xuXG4gICAgICAgICAgICBwcm9qZWN0RGVsZXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBwcm9qZWN0RGVsZXRlLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWRlbGV0ZScpO1xuXG4gICAgICAgICAgICBwcm9qZWN0RGVsZXRlLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgICAgICAgICAgIHByb2plY3RCdXR0b25zVHdvLmFwcGVuZChwcm9qZWN0RGVsZXRlKTtcblxuXG4gICAgICAgICAgICBcblxuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RVcGRhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgcHJvamVjdFVwZGF0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnJyk7XG5cbiAgICAgICAgICAgIHByb2plY3RVcGRhdGVCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XG5cbiAgICAgICAgICAgIHByb2plY3RVcGRhdGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtdXBkYXRlJyk7XG5cbiAgICAgICAgICAgIHByb2plY3RVcGRhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnVXBkYXRlJztcblxuICAgICAgICAgICAgcHJvamVjdFVwZGF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXVwZGF0ZScpO1xuXG4gICAgICAgICAgICBwcm9qZWN0QnV0dG9uc1R3by5hcHBlbmQocHJvamVjdFVwZGF0ZUJ1dHRvbik7XG5cblxuXG4gICAgICAgICAgICAvLyBjb25zdCBwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAvLyBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERldGFpbHNMaW5lQnJlYWs2KTtcblxuXG4gICAgICAgICAgICBcblxuXG4gICAgICAgICAgICB1cGRhdGVQcm9qZWN0SXRlbShwcm9qZWN0KTtcblxuICAgICAgICAgICAgZGVsZXRlUHJvamVjdEl0ZW0ocHJvamVjdClcblxuXG4gICAgICAgXG5cblxuXG5cbiAgICAgICAgcHJvamVjdFRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcHJvamVjdFRvZG9Db250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd29ya3MhJylcbiAgICAgICAgfSk7XG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlQcm9qZWN0OyIsImltcG9ydCBwcm9qZWN0T2JqZWN0cyBmcm9tICcuLi90YWJPYmplY3RzL2FsbFByb2plY3RzVGFiJztcblxuaW1wb3J0IHsgdXBkYXRlVG9kb0l0ZW0sIGRlbGV0ZVRvZG9JdGVtIH0gZnJvbSBcIi4uL2RvbUFjdGl2aXRpZXMvZG9tQWN0aXZpdGllc1wiO1xuXG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvKG9iamVjdCl7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCB0b2RvRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdG9kb0Rpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQodG9kb0Rpc3BsYXlDb250YWluZXIpO1xuXG5cbiAgICAgICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICAgICAgdG9kb0Rpc3BsYXlDb250YWluZXIuYXBwZW5kKHRvZG9Gb3JtKVxuXG5cbiAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0b2RvRGlzcGxheS5jbGFzc0xpc3QuYWRkKCd0b2RvLWRpc3BsYXknKTtcblxuICAgICAgICB0b2RvRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdtYWluLXRvZG8tZGlzcGxheScpXG5cbiAgICAgICAgdG9kb0Zvcm0uYXBwZW5kKHRvZG9EaXNwbGF5KTtcblxuXG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheVRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdUaXRsZScpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktdGl0bGUnKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUudmFsdWUgPSBvYmplY3QudGl0bGU7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheVRpdGxlKTtcblxuXG4gICAgICAgICAgICBjb25zdCB0b2RvRGVzY1RleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCcnKTtcblxuICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LWRlc2MnKTtcblxuICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnRGVzY3JpcHRpb24nKVxuXG4gICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnY29scycsJzMwJyk7XG5cbiAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywnMTAnKTtcblxuICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEudmFsdWUgPSBvYmplY3QuZGVzYztcblxuICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rlc2NUZXh0QXJlYSk7XG5cblxuICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXlEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXlEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktZGF0ZScpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheURhdGUudmFsdWUgPSBvYmplY3QuZHVlRGF0ZTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXlEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5RGF0ZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheURhdGUpO1xuXG4gICAgICAgICAgICAvLyBjb25zdCBsaW5lQnJlYWsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazEpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5UmVtaW5kSW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnNldEF0dHJpYnV0ZSgndHlwZScsJ251bWJlcicpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnNldEF0dHJpYnV0ZSgnbWluJywnMCcpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnNldEF0dHJpYnV0ZSgnbWF4JywnMzAnKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXlSZW1pbmRJbi5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LXJlbWluZC1pbicpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdSZW1pbmQgaW4gaG93IG1hbnkgZGF5cz8nKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXlSZW1pbmRJbi52YWx1ZSA9IG9iamVjdC5yZW1pbmRJbjtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXlSZW1pbmRJbi5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvZG9EaXNwbGF5UmVtaW5kSW4pO1xuXG4gICAgICAgICAgICAvLyBjb25zdCBsaW5lQnJlYWsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWsyKTtcblxuXG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzRHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblxuICAgICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcm9qZWN0LWRpc3BsYXktY2hvaWNlcycpO1xuXG4gICAgICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWRpc3BsYXktY2hvaWNlcycpO1xuXG4gICAgICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZChwcm9qZWN0c0Ryb3BEb3duKTtcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1bnByb2Nlc3NlZFByb2plY3QgPSBwcm9qZWN0T2JqZWN0cygpLnVucHJvY2Vzc2VkUHJvamVjdEFycmF5XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnNOb2RlKXtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zTm9kZS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBvcHRpb24wLnRleHRDb250ZW50ID0gb2JqZWN0LnByb2plY3Q7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBvcHRpb24wLnZhbHVlID0gb2JqZWN0LnByb2plY3Q7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLmFwcGVuZChvcHRpb24wKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB1bnByb2Nlc3NlZFByb2plY3QuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBvYmoudGl0bGU7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5hcHBlbmQocHJvamVjdE9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cblxuXG4gICAgICAgICAgICBjb25zdCBmaXJzdEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBmaXJzdEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmaXJzdC1idXR0b24tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZChmaXJzdEJ1dHRvbkNvbnRhaW5lcilcblxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgIHByaW9yaXR5QnRuRGl2LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWJ1dHRvbi1kaXYnKTtcblxuICAgICAgICAgICAgICAgIGZpcnN0QnV0dG9uQ29udGFpbmVyLmFwcGVuZChwcmlvcml0eUJ0bkRpdilcblxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICc7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3RvZG8tZGlzcGxheS1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5QnRuRGl2LmFwcGVuZChwcmlvcml0eUxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGxpbmVicmVha1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJpb3JpdHlCdG5EaXYuYXBwZW5kKGxpbmVicmVha1ByaW9yaXR5KTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsb2JqZWN0LnByaW9yaXR5KTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudGV4dENvbnRlbnQgPSBvYmplY3QucHJpb3JpdHk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb0Rpc3BsYXlQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5QnRuRGl2LmFwcGVuZCh0b2RvRGlzcGxheVByaW9yaXR5KTtcblxuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgY2xhc3NlcyBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXMgKGRpZmZlcmVudCBjb2xvdXJzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9PT0gJ0xvdycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPSAnTWVkaXVtJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID09PSAnTWVkaXVtJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9ICdIaWdoJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9PT0gJ0hpZ2gnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID0gJ0xvdyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgIHN0YXR1c0J0bkRpdi5jbGFzc0xpc3QuYWRkKCdzdGF0dXMtYnV0dG9uLWRpdicpO1xuXG4gICAgICAgICAgICAgICAgZmlyc3RCdXR0b25Db250YWluZXIuYXBwZW5kKHN0YXR1c0J0bkRpdilcblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGxpbmVCcmVhazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWszKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNMYWJlbC50ZXh0Q29udGVudCA9ICdTdGF0dXM6ICc7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0b2RvLWRpc3BsYXktc3RhdHVzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzQnRuRGl2LmFwcGVuZChzdGF0dXNMYWJlbCk7XG5cblxuXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbGluZUJyZWFrNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgLy8gdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazQpO1xuXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGxpbmUgYnJlYWsgXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxvYmplY3Quc3RhdHVzKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LXN0YXR1cycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnRleHRDb250ZW50ID0gb2JqZWN0LnN0YXR1cztcblxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheVN0YXR1cy5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0J0bkRpdi5hcHBlbmQodG9kb0Rpc3BsYXlTdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGNsYXNzZXMgZm9yIGRpZmZlcmVudCBwcmlvcml0aWVzIChkaWZmZXJlbnQgY29sb3VycylcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9EaXNwbGF5U3RhdHVzLnZhbHVlID09PSAnUGVuZGluZycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnZhbHVlID0gJ0NvbXBsZXRlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy50ZXh0Q29udGVudCA9ICdDb21wbGV0ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRGlzcGxheVN0YXR1cy52YWx1ZSA9PT0gJ0NvbXBsZXRlJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMudmFsdWUgPSAnUGVuZGluZyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSAnUGVuZGluZyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIHNlY29uZEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWNvbmQtYnV0dG9uLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQoc2Vjb25kQnV0dG9uQ29udGFpbmVyKVxuICAgICAgICAgICAgLy8gY29uc3QgbGluZUJyZWFrNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAvLyB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrNSk7XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuRGl2LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24tZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICBzZWNvbmRCdXR0b25Db250YWluZXIuYXBwZW5kKGRlbGV0ZUJ0bkRpdik7XG5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRlbGV0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZWxldGUudGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVsZXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnRuRGl2LmFwcGVuZCh0b2RvRGVsZXRlKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGxpbmVCcmVhazYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrNik7XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgIHVwZGF0ZUJ0bkRpdi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uLWRpdicpO1xuXG4gICAgICAgICAgICAgICAgc2Vjb25kQnV0dG9uQ29udGFpbmVyLmFwcGVuZCh1cGRhdGVCdG5EaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1VwZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnRleHRDb250ZW50ID0gJ1VwZGF0ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJ0bkRpdi5hcHBlbmQodG9kb1VwZGF0ZSk7XG5cblxuICAgICAgICAgICAgdXBkYXRlVG9kb0l0ZW0ob2JqZWN0KTtcblxuICAgICAgICAgICAgZGVsZXRlVG9kb0l0ZW0ob2JqZWN0KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5VG9kbzsiLCJcbmltcG9ydCBkaXNwbGF5VG9kbyBmcm9tIFwiLi9kaXNwbGF5VG9kb1wiO1xuXG5mdW5jdGlvbiBkaXNwbGF5VG9kb3NJblByb2plY3QgKHByb2plY3Qpe1xuXG4gICAgY29uc3QgcHJvamVjdFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdG9kb3MnKTtcblxuICAgIHByb2plY3RUb2Rvcy5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICB9KTtcblxuXG5cbiAgICBjb25zdCBhbGxQcm9qZWN0VG9kb3MgPSBwcm9qZWN0LnRvZG9zQnlQcmlvcml0eTtcblxuICAgIGNvbnN0IHByaW9yaXR5QXJyYXkgPSBbJ0hpZ2gnLCdNZWRpdW0nLCdMb3cnXVxuXG4gICAgY29uc3QgZHVlU3RhdHVzQXJyYXkgPSBbJ292ZXJkdWUnLCdkdWUnLCd1cGNvbWluZycsJ2NvbXBsZXRlJ107XG5cbiAgICBjb25zdCB0aXRsZUFycmF5ID0gWydPdmVyZHVlJywnRHVlIHNvb24nLCdVcGNvbWluZycsJ0NvbXBsZXRlZCddO1xuXG4gICAgY29uc3QgY2xhc3NBcnJheSA9IFsnb3ZlcmR1ZS10b2RvcycsJ2R1ZS1zb29uLXRvZG9zJywndXBjb21pbmctdG9kb3MnLCdjb21wbGV0ZS10b2RvcyddO1xuXG5cbiAgICBwcmlvcml0eUFycmF5LmZvckVhY2gocHJpb3JpdHkgPT4ge1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGFsbFByb2plY3RUb2Rvcykge1xuXG4gICAgICAgICAgICBpZiAoYWxsUHJvamVjdFRvZG9zW2tleV0ub3ZlcmR1ZS5sZW5ndGggPT09IDAgJiYgYWxsUHJvamVjdFRvZG9zW2tleV0uZHVlLmxlbmd0aCA9PT0gMCAmJiBhbGxQcm9qZWN0VG9kb3Nba2V5XS51cGNvbWluZy5sZW5ndGggPT09IDAgJiYgYWxsUHJvamVjdFRvZG9zW2tleV0uY29tcGxldGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gbW92ZSB0byBuZXh0IGxvb3AgaWYgZW1wdHlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGtleSA9PT0gcHJpb3JpdHkpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgIHByaW9yaXR5VGl0bGUudGV4dENvbnRlbnQgPSBwcmlvcml0eSArYCBwcmlvcml0eWA7XG5cbiAgICAgICAgICAgICAgICBwcmlvcml0eVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LXRpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb3MuYXBwZW5kKHByaW9yaXR5VGl0bGUpO1xuICAgIFxuICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkdWVTdGF0dXNBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSBkdWVTdGF0dXNBcnJheVtpbmRleF07XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwZWNpZmllZE9iakJ5UHJpb3JpdHkgPSBhbGxQcm9qZWN0VG9kb3Nba2V5XTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzcGVjaWZpZWRPYmpCeVByaW9yaXR5KTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHNwZWNpZmllZE9iakJ5UHJpb3JpdHkpIHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBwcm9wZXJ0eSkge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5zIGFycmF5IG9mIHRvZG8gb2JqZWN0cyBvZiBlYWNoIGR1ZSBzdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJheUJ5RHVlU3RhdHVzID0gc3BlY2lmaWVkT2JqQnlQcmlvcml0eVtwcm9wXTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlCeUR1ZVN0YXR1cy5sZW5ndGggPT09IDApe1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncnVucycpXG4gICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tc3RhdHVzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb3MuYXBwZW5kKHN0YXR1c0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZURpdi50ZXh0Q29udGVudCA9IHRpdGxlQXJyYXlbaW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLXByb2plY3Qtc3RhdHVzLXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb250YWluZXIuYXBwZW5kKHRvZG9UaXRsZURpdik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHVlU3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVTdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc0FycmF5W2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVEaXYuYXBwZW5kKGR1ZVN0YXR1c0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbGFibGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGFibGUtdG9kby1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVTdGF0dXNDb250YWluZXIuYXBwZW5kKHNjcm9sbGFibGVDb250YWluZXIpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsb29wcyBvdmVyIGVhY2ggdG9kbyBvYmplY3QgYW5kIGFwcGVuZHMgdGhlbSB0byBzY3JvbGxhYmxlIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlCeUR1ZVN0YXR1cy5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1pbi1wcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVDb250YWluZXIuYXBwZW5kKHRvZG9Db250YWluZXIpO1xuICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUtZGl2Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZURpdi50ZXh0Q29udGVudCA9IG9iamVjdC50aXRsZTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb1RpdGxlRGl2KTtcbiAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NEaXYuY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjLWRpdicpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY0Rpdi50ZXh0Q29udGVudCA9IG9iamVjdC5kZXNjO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvRGVzY0Rpdik7XG4gICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGF0ZS1kaXYnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVEaXYudGV4dENvbnRlbnQgPSBvYmplY3QuZHVlRGF0ZTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0RhdGVEaXYpO1xuICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0b2RvRHVyYXRpb25MZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG9EdXJhdGlvbkxlZnREaXYuY2xhc3NMaXN0LmFkZCgndG9kby1kdXItbGVmdC1kaXYnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kb0R1cmF0aW9uTGVmdERpdi50ZXh0Q29udGVudCA9IGAke29iamVjdC5kdXJhdGlvbkxlZnQuZGF5TGVmdH0gZGF5cywgJHtvYmplY3QuZHVyYXRpb25MZWZ0Lm1vbnRoc0xlZnR9IG1vbnRocyBhbmQgJHtvYmplY3QuZHVyYXRpb25MZWZ0LnllYXJzTGVmdH0geWVhcnMgbGVmdGA7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9EdXJhdGlvbkxlZnREaXYpO1xuICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLXByb2plY3QtZGl2Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcm9qZWN0RGl2LnRleHRDb250ZW50ID0gb2JqZWN0LnByb2plY3Q7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9Qcm9qZWN0RGl2KTtcbiAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdG9kb1ByaW9yaXR5dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvUHJpb3JpdHl0RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJpb3JpdHktZGl2Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG9Qcmlvcml0eXREaXYudGV4dENvbnRlbnQgPSBvYmplY3QucHJpb3JpdHk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9Qcmlvcml0eXREaXYpO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXlzIHRvZG8gaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VG9kbyhvYmplY3QpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIFxuICAgIFxuICAgIFxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pO1xuXG5cblxuXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5VG9kb3NJblByb2plY3Q7IiwiLy8gZm9yIHNlbGVjdGlvbiBvcHRpb25zXG5pbXBvcnQgcHJvamVjdE9iamVjdHMgZnJvbSAnLi4vdGFiT2JqZWN0cy9hbGxQcm9qZWN0c1RhYidcblxuZnVuY3Rpb24gZm9ybURvbU1vZHVsZSAoKXtcblxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcblxuXG5cbi8vICAgIEZPUk0gQlVUVE9OXG5cblxuICAgIGNvbnN0IGZvcm1CdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvcm1CdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24tY29udGFpbmVyJyk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChmb3JtQnV0dG9uQ29udGFpbmVyKTtcblxuXG4gICAgICAgIGNvbnN0IGZvcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICBmb3JtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJyk7XG5cbiAgICAgICAgZm9ybUJ1dHRvbi50ZXh0Q29udGVudCA9ICcrJztcblxuICAgICAgICBmb3JtQnV0dG9uQ29udGFpbmVyLmFwcGVuZChmb3JtQnV0dG9uKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnbWFpbiBkT20nKTtcbiAgICBcblxuXG4gICAgXG5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChmb3JtQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCB0b2RvQ3JlYXRpb25Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdG9kb0NyZWF0aW9uRm9ybS5jbGFzc0xpc3QuYWRkKCd0b2RvLWNyZWF0aW9uLWZvcm0nKTtcblxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZCh0b2RvQ3JlYXRpb25Gb3JtKTtcblxuICAgICAgICAgICAgY29uc3QgZW50cnlDcmVhdGlvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICAgICAgICAgIHRvZG9DcmVhdGlvbkZvcm0uYXBwZW5kKGVudHJ5Q3JlYXRpb25Gb3JtKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcblxuICAgICAgICAgICAgICAgIGVudHJ5Q3JlYXRpb25Gb3JtLmFwcGVuZChmaWVsZHNldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbGVnZW5kLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBhbiBlbnRyeSdcblxuICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmQobGVnZW5kKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9DcmVhdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9DcmVhdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY3JlYXRpb24tdGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0NyZWF0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnQ3JlYXRlIGEgbmV3IGVudHJ5J1xuICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmQodG9kb0NyZWF0aW9uVGl0bGUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29sbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb2xsZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbGxlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZChpbnB1dENvbGxlY3Rpb24pO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb2xsZWN0aW9uLmFwcGVuZChpbnB1dENvbnRhaW5lcjEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0b2RvLXRpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxLmFwcGVuZCh0b2RvVGl0bGVMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9UaXRsZUxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnB1dENvbnRhaW5lcjEuYXBwZW5kKHRvZG9UaXRsZUxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby10aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxLmFwcGVuZCh0b2RvVGl0bGVJbnB1dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb2xsZWN0aW9uLmFwcGVuZChpbnB1dENvbnRhaW5lcjIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9kby1kZXNjJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY0xhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjIuYXBwZW5kKHRvZG9EZXNjTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0b2RvRGVzY0xpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnB1dENvbnRhaW5lcjIuYXBwZW5kKHRvZG9EZXNjTGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGVzYycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCczMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCcxMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMi5hcHBlbmQodG9kb0Rlc2NUZXh0QXJlYSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMy5jbGFzc0xpc3QuYWRkKCdyYWRpby1pbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb2xsZWN0aW9uLmFwcGVuZChpbnB1dENvbnRhaW5lcjMpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3RlUmFkaW9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RlUmFkaW9EaXYuY2xhc3NMaXN0LmFkZCgnbm90ZS1yYWRpby1kaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjMuYXBwZW5kKG5vdGVSYWRpb0RpdilcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzTm90ZVJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc05vdGVSYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTm90ZVJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCdpcy1ub3RlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOb3RlUmFkaW8uc2V0QXR0cmlidXRlKCduYW1lJywnZW50cnktdHlwZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTm90ZVJhZGlvLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTm90ZVJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RlUmFkaW9EaXYuYXBwZW5kKGlzTm90ZVJhZGlvKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3RlUmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90ZVJhZGlvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdpcy1ub3RlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90ZVJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSAnTm90ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90ZVJhZGlvRGl2LmFwcGVuZChub3RlUmFkaW9MYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9SYWRpb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9SYWRpb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLXJhZGlvLWRpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMy5hcHBlbmQodG9kb1JhZGlvRGl2KVxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1RvZG9SYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUb2RvUmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1RvZG9SYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywnaXMtdG9kbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9kb1JhZGlvLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2VudHJ5LXR5cGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1RvZG9SYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JhZGlvRGl2LmFwcGVuZChpc1RvZG9SYWRpbyk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9SYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmFkaW9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2lzLXRvZG8nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmFkaW9MYWJlbC50ZXh0Q29udGVudCA9ICdUby1kbyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JhZGlvRGl2LmFwcGVuZCh0b2RvUmFkaW9MYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlTmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdUb2RvLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1uZXctdG9kbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbGxlY3Rpb24uYXBwZW5kKGNyZWF0ZU5ld1RvZG8pO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3VG9kby5hcHBlbmQoaW5wdXRDb250YWluZXI0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9kby1kYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZTonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNC5hcHBlbmQodG9kb0RhdGVMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0b2RvRGF0ZUxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5wdXRDb250YWluZXI0LmFwcGVuZCh0b2RvRGF0ZUxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNC5hcHBlbmQodG9kb0RhdGVJbnB1dCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWUgY3JlYXRpbmcgZm9ybSBlbGVtZW50c1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1RvZG8uYXBwZW5kKGlucHV0Q29udGFpbmVyNSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1JlbWluZEluTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9SZW1pbmRJbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9kby1yZW1pbmQtaW4nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmVtaW5kSW5MYWJlbC50ZXh0Q29udGVudCA9ICdSZW1pbmQtaW4oZGF5cyk6JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjUuYXBwZW5kKHRvZG9SZW1pbmRJbkxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9SZW1pbmRJbkxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5wdXRDb250YWluZXI1LmFwcGVuZCh0b2RvUmVtaW5kSW5MaW5lQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUmVtaW5kSW5JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnbnVtYmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCcwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCdtYXgnLCczMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9SZW1pbmRJbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLXJlbWluZC1pbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9SZW1pbmRJbklucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjUuYXBwZW5kKHRvZG9SZW1pbmRJbklucHV0KTtcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3VG9kby5hcHBlbmQoaW5wdXRDb250YWluZXI2KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNi5hcHBlbmQodG9kb1ByaW9yaXR5TGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdG9kb1ByaW9yaXR5TGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnB1dENvbnRhaW5lcjYuYXBwZW5kKHRvZG9Qcmlvcml0eUxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnTG93Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI2LmFwcGVuZCh0b2RvUHJpb3JpdHlCdXR0b24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc2VzIGZvciBkaWZmZXJlbnQgcHJpb3JpdGllcyAoZGlmZmVyZW50IGNvbG91cnMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvUHJpb3JpdHlCdXR0b24udmFsdWUgPT09ICdMb3cnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24udmFsdWUgPSAnTWVkaXVtJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9Qcmlvcml0eUJ1dHRvbi52YWx1ZSA9PT0gJ01lZGl1bScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi52YWx1ZSA9ICdIaWdoJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnSGlnaCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvUHJpb3JpdHlCdXR0b24udmFsdWUgPT09ICdIaWdoJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ0xvdyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXI3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjcuY2xhc3NMaXN0LmFkZCgncmFkaW8taW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdUb2RvLmFwcGVuZChpbnB1dENvbnRhaW5lcjcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1Byb2plY3REaXYgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdleGlzdGluZy1wcm9qZWN0LWRpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjcuYXBwZW5kKGV4aXN0aW5nUHJvamVjdERpdilcblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1Byb2plY3RSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCdleGlzdGluZy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4aXN0aW5nUHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKCduYW1lJywncHJvamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RSYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdERpdi5hcHBlbmQoZXhpc3RpbmdQcm9qZWN0UmFkaW8pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0UmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdleGlzdGluZy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSAnRXhpc3RpbmcgcHJvamVjdCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdERpdi5hcHBlbmQoZXhpc3RpbmdQcm9qZWN0UmFkaW9MYWJlbCk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1kaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI3LmFwcGVuZChuZXdQcm9qZWN0RGl2KVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3RSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsJ25ldy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3RSYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3REaXYuYXBwZW5kKG5ld1Byb2plY3RSYWRpbyk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0UmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3RSYWRpb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnbmV3LXByb2plY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdFJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGl2LmFwcGVuZChuZXdQcm9qZWN0UmFkaW9MYWJlbCk7XG5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RFeGlzdGluZ1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0RXhpc3RpbmdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC1leGlzdGluZy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29sbGVjdGlvbi5hcHBlbmQoc2VsZWN0RXhpc3RpbmdQcm9qZWN0KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXI4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjguY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RFeGlzdGluZ1Byb2plY3QuYXBwZW5kKGlucHV0Q29udGFpbmVyOCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2hvaWNlc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q2hvaWNlc0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywncHJvamVjdC1jaG9pY2VzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENob2ljZXNMYWJlbC50ZXh0Q29udGVudCA9ICdXaGljaCBwcm9qZWN0IGlzIHRoaXMgZm9yPyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI4LmFwcGVuZChwcm9qZWN0Q2hvaWNlc0xhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RDaG9pY2VzRHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q2hvaWNlc0Ryb3BEb3duLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Byb2plY3QtY2hvaWNlcycpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q2hvaWNlc0Ryb3BEb3duLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWNob2ljZXMnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENob2ljZXNEcm9wRG93bi5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyOC5hcHBlbmQocHJvamVjdENob2ljZXNEcm9wRG93bik7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGl0bGVzIGZyb20gZXhpc3RpbmcgcHJvamVjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB3aGVuIG5ldyBwcm9qZWN0cyBhcmUgY3JlYXRlZFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1uZXctcHJvamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbGxlY3Rpb24uYXBwZW5kKGNyZWF0ZU5ld1Byb2plY3QpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdENyZWF0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q3JlYXRpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNyZWF0aW9uLXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENyZWF0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnQ3JlYXRlIGEgbmV3IHByb2plY3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdC5hcHBlbmQocHJvamVjdENyZWF0aW9uVGl0bGUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyOS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QuYXBwZW5kKGlucHV0Q29udGFpbmVyOSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywncHJvamVjdC10aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI5LmFwcGVuZChwcm9qZWN0VGl0bGVMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBwcm9qZWN0VGl0bGVMaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlucHV0Q29udGFpbmVyOS5hcHBlbmQocHJvamVjdFRpdGxlTGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC10aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjkuYXBwZW5kKHByb2plY3RUaXRsZUlucHV0KTtcblxuICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIxMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QuYXBwZW5kKGlucHV0Q29udGFpbmVyMTApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdwcm9qZWN0LWRlc2MnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0xhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMC5hcHBlbmQocHJvamVjdERlc2NMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBwcm9qZWN0RGVzY0xpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5wdXRDb250YWluZXIxMC5hcHBlbmQocHJvamVjdERlc2NMaW5lQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY1RleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtZGVzYycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdjb2xzJywnMzAnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncm93cycsJzEwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NUZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMC5hcHBlbmQocHJvamVjdERlc2NUZXh0QXJlYSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjExLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdC5hcHBlbmQoaW5wdXRDb250YWluZXIxMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Byb2plY3QtZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIGRhdGU6JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjExLmFwcGVuZChwcm9qZWN0RGF0ZUxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByb2plY3REYXRlTGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnB1dENvbnRhaW5lcjExLmFwcGVuZChwcm9qZWN0RGF0ZUxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTEuYXBwZW5kKHByb2plY3REYXRlSW5wdXQpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIGNyZWF0aW5nIGZvcm0gZWxlbWVudHNcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIxMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QuYXBwZW5kKGlucHV0Q29udGFpbmVyMTIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RSZW1pbmRJbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UmVtaW5kSW5MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Byb2plY3QtcmVtaW5kLWluJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluTGFiZWwudGV4dENvbnRlbnQgPSAnUmVtaW5kLWluKGRheXMpOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMi5hcHBlbmQocHJvamVjdFJlbWluZEluTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgcHJvamVjdFJlbWluZEluTGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnB1dENvbnRhaW5lcjEyLmFwcGVuZChwcm9qZWN0UmVtaW5kSW5MaW5lQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0UmVtaW5kSW5JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnbnVtYmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCcwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCdtYXgnLCczMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LXJlbWluZC1pbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEyLmFwcGVuZChwcm9qZWN0UmVtaW5kSW5JbnB1dCk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEzLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdC5hcHBlbmQoaW5wdXRDb250YWluZXIxMyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEzLmFwcGVuZChwcm9qZWN0UHJpb3JpdHlMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBwcm9qZWN0UHJpb3JpdHlMaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlucHV0Q29udGFpbmVyMTMuYXBwZW5kKHByb2plY3RQcmlvcml0eUxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnTG93Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMy5hcHBlbmQocHJvamVjdFByaW9yaXR5QnV0dG9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgY2xhc3NlcyBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXMgKGRpZmZlcmVudCBjb2xvdXJzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnTG93Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ01lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPT09ICdNZWRpdW0nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPSAnSGlnaCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnSGlnaCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9ICdMb3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdmb3JtLXN1Ym1pdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb2xsZWN0aW9uLmFwcGVuZChzdWJtaXRCdXR0b24pO1xuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGV4aXN0aW5nUHJvamVjdE9wdGlvbnMgKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0UmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhpc3RpbmctcHJvamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdFJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0Jyk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bnByb2Nlc3NlZFByb2plY3QgPSBwcm9qZWN0T2JqZWN0cygpLnVucHJvY2Vzc2VkUHJvamVjdEFycmF5XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bnByb2Nlc3NlZFByb2plY3QubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0UmFkaW8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJywnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0UmFkaW8uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5ld1Byb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmV3UHJvamVjdFJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodW5wcm9jZXNzZWRQcm9qZWN0Lmxlbmd0aCA+IDAgKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RSYWRpby5kaXNhYmxlZCA9IGZhbHNlO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihvcHRpb25zTm9kZSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNOb2RlLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjAudGV4dENvbnRlbnQgPSAnQ2hvb3NlIG9uZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uMC52YWx1ZSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDaG9pY2VzRHJvcERvd24uYXBwZW5kKG9wdGlvbjApO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5wcm9jZXNzZWRQcm9qZWN0LmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iamVjdC50aXRsZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IG9iamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IG9iamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENob2ljZXNEcm9wRG93bi5hcHBlbmQocHJvamVjdE9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmdW5jdGlvbiBleGlzdGluZ1Byb2plY3RPcHRpb25zICgpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgdW5wcm9jZXNzZWRQcm9qZWN0ID0gcHJvamVjdE9iamVjdHMoKS51bnByb2Nlc3NlZFByb2plY3RBcnJheVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3Qgb3B0aW9uc05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmKG9wdGlvbnNOb2RlKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBvcHRpb25zTm9kZS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBvcHRpb24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3Qgb3B0aW9uMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgb3B0aW9uMC50ZXh0Q29udGVudCA9ICdDaG9vc2Ugb25lJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG9wdGlvbjAudmFsdWUgPSAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHByb2plY3RDaG9pY2VzRHJvcERvd24uYXBwZW5kKG9wdGlvbjApO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB1bnByb2Nlc3NlZFByb2plY3QuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmplY3QudGl0bGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gb2JqZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBvYmplY3QudGl0bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdENob2ljZXNEcm9wRG93bi5hcHBlbmQocHJvamVjdE9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0T3B0aW9ucygpO1xuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7ZXhpc3RpbmdQcm9qZWN0T3B0aW9uc307XG5cblxufVxuXG5jb25zdCBjcmVhdGVGb3JtRE9NID0gZm9ybURvbU1vZHVsZSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvcm1ET007IiwiaW1wb3J0IGhhbWJ1cmdlckljb24gZnJvbSBcIi4uL2Fzc2V0cy9tZW51LWljb24ucG5nXCI7XG5cbi8vIGltcG9ydCBoYW1idXJnZXJJY29uIGZyb20gXCIuLi9hc3NldHMvbWVudS5wbmdcIlxuXG5mdW5jdGlvbiBtYWluRG9tTW9kdWxlICgpe1xuXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgXG4gICAgLy8gRk9STSBPUEVOSU5HIEJVVFRPTlxuICAgIFxuXG5cblxuICAgIC8vIFRPUCBDT05UQUlORVJcbiAgICBjb25zdCB0b3BDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRvcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b3AtY29udGFpbmVyJyk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZCh0b3BDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGJyYW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgYnJhbmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnJhbmQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgdG9wQ29udGFpbmVyLmFwcGVuZChicmFuZENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGNvbnN0IGJyYW5kSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgICAgICAgICAgYnJhbmRIZWFkZXIudGV4dENvbnRlbnQgPSAnU2FnZUVudHJpZXMnO1xuXG4gICAgICAgICAgICBicmFuZENvbnRhaW5lci5hcHBlbmQoYnJhbmRIZWFkZXIpO1xuXG5cbiAgICAgICAgY29uc3QgdG9wQ29udGFpbmVyU3BhY2luZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRvcENvbnRhaW5lclNwYWNpbmcuY2xhc3NMaXN0LmFkZCgndG9wLWNvbnRhaW5lci1zcGFjaW5nJyk7XG5cbiAgICAgICAgdG9wQ29udGFpbmVyLmFwcGVuZCh0b3BDb250YWluZXJTcGFjaW5nKTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LmFkZCgnaGFtYnVyZ2VyLW1lbnUnKTtcblxuICAgICAgICB0b3BDb250YWluZXIuYXBwZW5kKGhhbWJ1cmdlck1lbnUpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IG1lbnVJY29uID0gbmV3IEltYWdlKClcblxuICAgICAgICAgICAgbWVudUljb24uc3JjID0gaGFtYnVyZ2VySWNvbjtcblxuICAgICAgICAgICAgaGFtYnVyZ2VyTWVudS5hcHBlbmQobWVudUljb24pO1xuXG5cbiAgICAvLyBNRU5VXG5cbiAgICBjb25zdCBub3RlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbm90ZU1lbnUuY2xhc3NMaXN0LmFkZCgnbm90ZS1tZW51Jyk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChub3RlTWVudSk7XG5cblxuICAgICAgICBjb25zdCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0YWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIG5vdGVNZW51LmFwcGVuZCh0YWJDb250YWluZXIpXG5cblxuXG4gICAgICAgICAgICBjb25zdCBhbGxUb2Rvc1RhYkRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBhbGxUb2Rvc1RhYkRPTS5jbGFzc0xpc3QuYWRkKCdhbGwtdG9kb3MtdGFiJyk7XG5cbiAgICAgICAgICAgIGFsbFRvZG9zVGFiRE9NLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGFiLWFjdGl2ZScpXG5cbiAgICAgICAgICAgIHRhYkNvbnRhaW5lci5hcHBlbmQoYWxsVG9kb3NUYWJET00pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYWxsVG9kb3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgICAgICAgICAgYWxsVG9kb3NIZWFkZXIudGV4dENvbnRlbnQgPSAnQWxsIFRvZG9zJztcblxuICAgICAgICAgICAgICAgIGFsbFRvZG9zVGFiRE9NLmFwcGVuZChhbGxUb2Rvc0hlYWRlcilcblxuXG4gICAgICAgICAgICBjb25zdCBhbGxQcm9qZWN0c1RhYkRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBhbGxQcm9qZWN0c1RhYkRPTS5jbGFzc0xpc3QuYWRkKCdhbGwtcHJvamVjdHMtdGFiJyk7XG5cbiAgICAgICAgICAgIHRhYkNvbnRhaW5lci5hcHBlbmQoYWxsUHJvamVjdHNUYWJET00pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYWxsUHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgICAgICAgICAgYWxsUHJvamVjdHNIZWFkZXIudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuXG4gICAgICAgICAgICAgICAgYWxsUHJvamVjdHNUYWJET00uYXBwZW5kKGFsbFByb2plY3RzSGVhZGVyKTtcblxuXG4gICAgICAgICAgICBjb25zdCBhbGxOb3Rlc1RhYkRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBhbGxOb3Rlc1RhYkRPTS5jbGFzc0xpc3QuYWRkKCdhbGwtbm90ZXMtdGFiJyk7XG5cbiAgICAgICAgICAgIHRhYkNvbnRhaW5lci5hcHBlbmQoYWxsTm90ZXNUYWJET00pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYWxsTm90ZXNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgICAgICAgICAgYWxsTm90ZXNIZWFkZXIudGV4dENvbnRlbnQgPSAnTm90ZXMnO1xuXG4gICAgICAgICAgICAgICAgYWxsTm90ZXNUYWJET00uYXBwZW5kKGFsbE5vdGVzSGVhZGVyKTtcblxuXG5cbiAgICAgICAgZnVuY3Rpb24gdGFiQWN0aXZlU3dpdGNoICgpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YWJBcnJheSA9IFthbGxUb2Rvc1RhYkRPTSxhbGxQcm9qZWN0c1RhYkRPTSxhbGxOb3Rlc1RhYkRPTV07XG5cbiAgICAgICAgICAgIGFsbFRvZG9zVGFiRE9NLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgYWxsVG9kb3NUYWJET00uY2xhc3NMaXN0LmFkZCgnbWVudS10YWItYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBhbGxQcm9qZWN0c1RhYkRPTS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXRhYi1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgIGFsbE5vdGVzVGFiRE9NLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtdGFiLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBhbGxQcm9qZWN0c1RhYkRPTS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgIGFsbFByb2plY3RzVGFiRE9NLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGFiLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGFsbFRvZG9zVGFiRE9NLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtdGFiLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgYWxsTm90ZXNUYWJET00uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS10YWItYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGFsbE5vdGVzVGFiRE9NLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgYWxsTm90ZXNUYWJET00uY2xhc3NMaXN0LmFkZCgnbWVudS10YWItYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBhbGxUb2Rvc1RhYkRPTS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXRhYi1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgIGFsbFByb2plY3RzVGFiRE9NLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtdGFiLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGFiQWN0aXZlU3dpdGNoKCk7XG5cblxuXG5cbiAgICAvLyBGT09URVJcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0b2RvQ29udGFpbmVyRm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyLWZvb3RlcicpO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQodG9kb0NvbnRhaW5lckZvb3Rlcik7XG5cbiAgICAgICAgY29uc3QgbGlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGxpbmtDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGluay1jb250YWluZXInKTtcblxuICAgICAgICB0b2RvQ29udGFpbmVyRm9vdGVyLmFwcGVuZChsaW5rQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgY29uc3QgZm9vdGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgICAgICAgICAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCdodHRwczovL2dpdGh1Yi5jb20vUmlzc2hpZ2FuZXNoL3RvZG8tbGlzdCcpO1xuXG4gICAgICAgICAgICBmb290ZXJMaW5rLnRleHRDb250ZW50ID0gJ01hZGUgYnkgUmlzc2hpZ2FuZXNoIFZpbGxhbGFuJztcblxuICAgICAgICAgICAgbGlua0NvbnRhaW5lci5hcHBlbmQoZm9vdGVyTGluayk7XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBtYWluRG9tTW9kdWxlOyIsImltcG9ydCBub3Rlc09iamVjdCBmcm9tIFwiLi4vdGFiT2JqZWN0cy9hbGxOb3Rlc1RhYlwiO1xuaW1wb3J0IHsgdXBkYXRlTm90ZUl0ZW0sIGRlbGV0ZVRvZG9JdGVtLCBlbXB0eURpc3BsYXkgfSBmcm9tIFwiLi4vZG9tQWN0aXZpdGllcy9kb21BY3Rpdml0aWVzXCI7XG5cbmZ1bmN0aW9uIGFwcGVuZE5vdGVzT2JqZWN0KCl7XG4gICAgICAgICAgICBcbiAgICBjb25zdCBjb2xsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb24tY29udGFpbmVyJyk7XG5cbiAgICBjb2xsZWN0aW9uQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcblxuICAgIH0pO1xuXG5cbiAgICBjb25zdCBub3Rlc0NvbGxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG5vdGVzQ29sbGVjdGlvbi5jbGFzc0xpc3QuYWRkKCdub3Rlcy1jb2xsZWN0aW9uJyk7XG5cbiAgICBjb2xsZWN0aW9uQ29udGFpbmVyLmFwcGVuZChub3Rlc0NvbGxlY3Rpb24pO1xuXG4gICAgY29uc3Qgbm90ZXNBcnJheSA9IG5vdGVzT2JqZWN0KCkucmV2ZXJzZSgpO1xuXG4gICAgbm90ZXNBcnJheS5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IG5vdGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5vdGVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vdGVzLWNvbnRhaW5lcicpO1xuICAgICAgICBub3Rlc0NvbGxlY3Rpb24uYXBwZW5kKG5vdGVzQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgY29uc3Qgbm90ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBub3RlVGl0bGUuY2xhc3NMaXN0LmFkZCgnbm90ZS10aXRsZScpO1xuICAgICAgICAgICAgbm90ZVRpdGxlLnRleHRDb250ZW50ID0gb2JqZWN0LnRpdGxlO1xuICAgICAgICAgICAgbm90ZXNDb250YWluZXIuYXBwZW5kKG5vdGVUaXRsZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG5vdGVEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBub3RlRGVzYy5jbGFzc0xpc3QuYWRkKCdub3RlLWRlc2MnKTtcbiAgICAgICAgICAgIG5vdGVEZXNjLnRleHRDb250ZW50ID0gb2JqZWN0LmRlc2M7XG4gICAgICAgICAgICBub3Rlc0NvbnRhaW5lci5hcHBlbmQobm90ZURlc2MpO1xuXG5cblxuICAgICAgICBub3Rlc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWRpc3BsYXktY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKHRvZG9EaXNwbGF5Q29udGFpbmVyKTtcblxuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICAgICAgICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5hcHBlbmQodG9kb0Zvcm0pXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5jbGFzc0xpc3QuYWRkKCd0b2RvLWRpc3BsYXknKTtcblxuICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ25vdGUtZGlzcGxheScpXG5cbiAgICAgICAgICAgICAgICB0b2RvRm9ybS5hcHBlbmQodG9kb0Rpc3BsYXkpO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdUaXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS10aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpXG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS52YWx1ZSA9IG9iamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlUaXRsZSk7XG5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY1RleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS1kZXNjJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnRGVzY3JpcHRpb24nKVxuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdjb2xzJywnMzAnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncm93cycsJzEwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS52YWx1ZSA9IG9iamVjdC5kZXNjO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rlc2NUZXh0QXJlYSk7XG5cblxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBsaW5lQnJlYWsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazEpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vdGUtYnV0dG9uLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQoYnV0dG9uQ29udGFpbmVyKVxuXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZWxldGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZWxldGUuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kZWxldGUnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQodG9kb0RlbGV0ZSk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgbGluZUJyZWFrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrMik7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9VcGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS50ZXh0Q29udGVudCA9ICdVcGRhdGUnO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKHRvZG9VcGRhdGUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTm90ZUl0ZW0ob2JqZWN0KTtcblxuICAgICAgICAgICAgICAgICAgICBkZWxldGVUb2RvSXRlbShvYmplY3QpO1xuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZW1wdHlEaXNwbGF5KCk7XG5cbn1cblxuLy8gYXBwZW5kTm90ZXNPYmplY3QoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwZW5kTm90ZXNPYmplY3QiLCJpbXBvcnQgcHJvamVjdE9iamVjdHMgZnJvbSBcIi4uL3RhYk9iamVjdHMvYWxsUHJvamVjdHNUYWJcIjtcblxuaW1wb3J0IHsgdXBkYXRlUHJvamVjdEl0ZW0sdXBkYXRlVG9kb0l0ZW0sIGRlbGV0ZVByb2plY3RJdGVtLGVtcHR5RGlzcGxheSwgZGlzcGxheUR1cmF0aW9uIH0gZnJvbSBcIi4uL2RvbUFjdGl2aXRpZXMvZG9tQWN0aXZpdGllc1wiO1xuXG5pbXBvcnQgZGlzcGxheVRvZG8gZnJvbSBcIi4vZGlzcGxheVRvZG9cIjtcblxuaW1wb3J0IGRpc3BsYXlUb2Rvc0luUHJvamVjdCBmcm9tIFwiLi9kaXNwbGF5VG9kb3NJblByb2plY3RcIjtcblxuXG5pbXBvcnQgZGlzcGxheVByb2plY3QgZnJvbSBcIi4vZGlzcGxheVByb2plY3RcIjtcblxuXG4vLyBQT1BVTEFURSBUT0RPIENPTExFQ1RJT04gQ09OVEFJTkVSXG5sZXQgY2xpY2tlZFByb2plY3QgPSAnJztcbi8vIGhpZ2hcbi8vIHB1dCB0aGlzIGluIGEgZGlmZmVyZW50IG1vZHVsZVxuZnVuY3Rpb24gYXBwZW5kUHJvamVjdE9iamVjdHMocHJpb3JpdHkpe1xuXG4gICAgY29uc3QgY29sbGVjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uLWNvbnRhaW5lcicpXG5cbiAgICBjb2xsZWN0aW9uQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcblxuICAgIH0pO1xuXG5cblxuICAgIGNvbnN0IGFsbFByb2plY3RPYmplY3QgPSBwcm9qZWN0T2JqZWN0cygpLnByb2plY3RzQnlQcmlvcml0eTtcbiAgICAvLyBjb25zb2xlLmxvZyhhbGxQcm9qZWN0T2JqZWN0KTtcblxuICAgIGNvbnN0IGR1ZVN0YXR1c0FycmF5ID0gWydvdmVyZHVlJywnZHVlJywndXBjb21pbmcnLCdjb21wbGV0ZSddO1xuXG4gICAgY29uc3QgdGl0bGVBcnJheSA9IFsnT1ZFUkRVRScsJ0RVRSBTT09OJywnVVBDT01JTkcnLCdDT01QTEVURUQnXTtcblxuICAgIGNvbnN0IGNsYXNzQXJyYXkgPSBbJ292ZXJkdWUtY29udGFpbmVyJywnZHVlLXNvb24tY29udGFpbmVyJywndXBjb21pbmctY29udGFpbmVyJywnY29tcGxldGUtY29udGFpbmVyJ107XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhbGxQcm9qZWN0T2JqZWN0KSB7XG5cbiAgICAgICAgaWYgKGtleSA9PT0gcHJpb3JpdHkpIHtcblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkdWVTdGF0dXNBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSBkdWVTdGF0dXNBcnJheVtpbmRleF07XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzcGVjaWZpZWRPYmpCeVByaW9yaXR5ID0gYWxsUHJvamVjdE9iamVjdFtrZXldO1xuXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHNwZWNpZmllZE9iakJ5UHJpb3JpdHkpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gcHJvcGVydHkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udGFpbnMgYXJyYXkgb2YgdG9kbyBvYmplY3RzIG9mIGVhY2ggZHVlIHN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCeUR1ZVN0YXR1cyA9IHNwZWNpZmllZE9iakJ5UHJpb3JpdHlbcHJvcF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJheUJ5RHVlU3RhdHVzLmxlbmd0aCA9PT0gMCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3RhdHVzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbkNvbnRhaW5lci5hcHBlbmQoc3RhdHVzQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1RpdGxlRGl2LnRleHRDb250ZW50ID0gdGl0bGVBcnJheVtpbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdzdGF0dXMtdGl0bGUnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb250YWluZXIuYXBwZW5kKHN0YXR1c1RpdGxlRGl2KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkdWVTdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVTdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc0FycmF5W2luZGV4XSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29udGFpbmVyLmFwcGVuZChkdWVTdGF0dXNDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxhYmxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsYWJsZS1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVlU3RhdHVzQ29udGFpbmVyLmFwcGVuZChzY3JvbGxhYmxlQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsb29wcyBvdmVyIGVhY2ggcHJvamVjdCBvYmplY3QgYW5kIGFwcGVuZHMgdGhlbSB0byBzY3JvbGxhYmxlIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheUJ5RHVlU3RhdHVzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lcicpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdENvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUtZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVEaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdFRpdGxlRGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVzYy1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjRGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdERlc2NEaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERhdGVEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kYXRlLWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERhdGVEaXYudGV4dENvbnRlbnQgPSBkaXNwbGF5RHVyYXRpb24ocHJvamVjdC5kdWVEYXRlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3REYXRlRGl2KTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBESVNQTEFZIFBST0pFQ1QgVE9ET1MgLSBzZW5kIHByb2plY3QgY29udGFpbmVyIGFzIGFuIGFyZ3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3QpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2VkUHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQk9PTSBCT09NIScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0LnRvZG9zQnlQcmlvcml0eSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBwcm9qZWN0VG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcHJvamVjdFRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10b2RvLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmQocHJvamVjdFRvZG9Db250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3RUb2RvQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0Rm9ybSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3REZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGV0YWlscycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3RGb3JtLmFwcGVuZChwcm9qZWN0RGV0YWlscyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LXRpdGxlLXVwZGF0ZScpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3RUaXRsZUlucHV0LnZhbHVlID0gcHJvamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Byb2plY3QgVGl0bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3RUaXRsZUlucHV0KTtcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgcHJvamVjdERldGFpbHNMaW5lQnJlYWsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3REZXRhaWxzTGluZUJyZWFrMSk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWRlc2MtdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REZXNjSW5wdXQudmFsdWUgPSBwcm9qZWN0LmRlc2M7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGVzY0lucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBEZXNjcmlwdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGVzY0lucHV0LnNldEF0dHJpYnV0ZSgncm93cycsJzQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdERlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCc0MCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERlc2NJbnB1dCk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzTGluZUJyZWFrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazIpO1xuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1kYXRlLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGF0ZUlucHV0LnZhbHVlID0gcHJvamVjdC5kdWVEYXRlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3REYXRlSW5wdXQpO1xuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERldGFpbHNMaW5lQnJlYWszKTtcblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBwcm9qZWN0UmVtaW5kSW5JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LXJlbWluZGVyLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0UmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdudW1iZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0UmVtaW5kSW5JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LnZhbHVlID0gcHJvamVjdC5yZW1pbmRJbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3RSZW1pbmRJbklucHV0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgcHJvamVjdERldGFpbHNMaW5lQnJlYWs0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3REZXRhaWxzTGluZUJyZWFrNCk7XG5cblxuICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LXByaW9yaXR5LXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScscHJvamVjdC5wcmlvcml0eSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gcHJvamVjdC5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3RQcmlvcml0eUJ1dHRvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBBZGQgY2xhc3NlcyBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXMgKGRpZmZlcmVudCBjb2xvdXJzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9PT0gJ0xvdycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPSAnTWVkaXVtJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPT09ICdNZWRpdW0nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ0hpZ2gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnSGlnaCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPT09ICdIaWdoJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9ICdMb3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0pO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgcHJvamVjdERldGFpbHNMaW5lQnJlYWs1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3REZXRhaWxzTGluZUJyZWFrNSk7XG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgcHJvamVjdERpc3BsYXlTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3Qtc3RhdHVzLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGlzcGxheVN0YXR1cy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxwcm9qZWN0LnN0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGlzcGxheVN0YXR1cy50ZXh0Q29udGVudCA9IHByb2plY3Quc3RhdHVzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGlzcGxheVN0YXR1cy5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERpc3BsYXlTdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGlzcGxheVN0YXR1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBBZGQgY2xhc3NlcyBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXMgKGRpZmZlcmVudCBjb2xvdXJzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHByb2plY3REaXNwbGF5U3RhdHVzLnZhbHVlID09PSAncGVuZGluZycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGlzcGxheVN0YXR1cy52YWx1ZSA9ICdjb21wbGV0ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHByb2plY3REaXNwbGF5U3RhdHVzLnZhbHVlID09PSAnY29tcGxldGUnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMudmFsdWUgPSAncGVuZGluZyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnRleHRDb250ZW50ID0gJ1BlbmRpbmcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHByb2plY3RUb2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3RUb2Rvcy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG9zJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3RUb2Rvcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3RUb2Rvcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIENvbnRhaW5lciB0aGF0IGRpc3BsYXlzIGFsbCB0b2RvcyBpbiBhIHByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZGlzcGxheVRvZG9zSW5Qcm9qZWN0KHByb2plY3QpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNsaWNrZWRQcm9qZWN0ID0gcHJvamVjdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBwcm9qZWN0VXBkYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdFVwZGF0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdFVwZGF0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0VXBkYXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3RVcGRhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnVXBkYXRlJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0VXBkYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3RVcGRhdGVCdXR0b24pO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgcHJvamVjdERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3REZWxldGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3REZWxldGUuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdERlbGV0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1kZWxldGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0RGVsZXRlLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3REZWxldGUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdXBkYXRlUHJvamVjdEl0ZW0ocHJvamVjdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZGVsZXRlUHJvamVjdEl0ZW0ocHJvamVjdClcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHByb2plY3RUb2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdFRvZG9Db250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCd3b3JrcyEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuXG5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcblxuXG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgZW1wdHlEaXNwbGF5KCk7XG5cbn1cblxuLy8gU0VORCBUSElTIFRPIGFsbFRvZG9ET01DcmVhdGlvbi5qc1xuLy8gYXBwZW5kVG9kb09iamVjdHMoJ2hpZ2gnKVxuXG5leHBvcnQgZGVmYXVsdCBhcHBlbmRQcm9qZWN0T2JqZWN0cztcblxuZXhwb3J0IHtjbGlja2VkUHJvamVjdH07IiwiaW1wb3J0IHRvZG9PYmplY3QgZnJvbSBcIi4uL3RhYk9iamVjdHMvYWxsVG9kb3NUYWJcIjtcbi8vIGZvciBzZWxlY3Rpb24gb3B0aW9uc1xuaW1wb3J0IHByb2plY3RPYmplY3RzIGZyb20gJy4uL3RhYk9iamVjdHMvYWxsUHJvamVjdHNUYWInO1xuXG4vLyBkb2Vzbid0IHdvcmsgYmVjYXVzZSBvZiBjaXJjdWxhciBkZXBlbmRlbmN5XG4vLyBpbXBvcnQgdXBkYXRlVG9kb0l0ZW0gIGZyb20gJy4uL2RvbUFjdGl2aXRpZXMvdXBkYXRlVG9kb0RPTSc7XG5cbmltcG9ydCB7IHVwZGF0ZVRvZG9JdGVtLCBkZWxldGVUb2RvSXRlbSwgZW1wdHlEaXNwbGF5LCBkaXNwbGF5RHVyYXRpb24gfSBmcm9tIFwiLi4vZG9tQWN0aXZpdGllcy9kb21BY3Rpdml0aWVzXCI7XG5cbmltcG9ydCBkaXNwbGF5VG9kbyBmcm9tIFwiLi9kaXNwbGF5VG9kb1wiO1xuXG5cbi8vIFBPUFVMQVRFIFRPRE8gQ09MTEVDVElPTiBDT05UQUlORVJcblxuLy8gaGlnaFxuLy8gcHV0IHRoaXMgaW4gYSBkaWZmZXJlbnQgbW9kdWxlXG5mdW5jdGlvbiBhcHBlbmRUb2RvT2JqZWN0cyhwcmlvcml0eSl7XG5cbiAgICBcblxuICAgIGNvbnN0IGNvbGxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbi1jb250YWluZXInKVxuXG4gICAgY29sbGVjdGlvbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICB9KTtcblxuXG5cbiAgICBjb25zdCBhbGxUb2RvT2JqZWN0ID0gdG9kb09iamVjdCgpO1xuXG4gICAgY29uc3QgZHVlU3RhdHVzQXJyYXkgPSBbJ292ZXJkdWUnLCdkdWUnLCd1cGNvbWluZycsJ2NvbXBsZXRlJ107XG5cbiAgICBjb25zdCB0aXRsZUFycmF5ID0gWydPVkVSRFVFJywnRFVFIFNPT04nLCdVUENPTUlORycsJ0NPTVBMRVRFRCddO1xuXG4gICAgY29uc3QgY2xhc3NBcnJheSA9IFsnb3ZlcmR1ZS1jb250YWluZXInLCdkdWUtc29vbi1jb250YWluZXInLCd1cGNvbWluZy1jb250YWluZXInLCdjb21wbGV0ZS1jb250YWluZXInXTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIGFsbFRvZG9PYmplY3QpIHtcblxuICAgICAgICBpZiAoa2V5ID09PSBwcmlvcml0eSkge1xuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGR1ZVN0YXR1c0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGR1ZVN0YXR1c0FycmF5W2luZGV4XTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNwZWNpZmllZE9iakJ5UHJpb3JpdHkgPSBhbGxUb2RvT2JqZWN0W2tleV07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gc3BlY2lmaWVkT2JqQnlQcmlvcml0eSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBwcm9wZXJ0eSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250YWlucyBhcnJheSBvZiB0b2RvIG9iamVjdHMgb2YgZWFjaCBkdWUgc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJheUJ5RHVlU3RhdHVzID0gc3BlY2lmaWVkT2JqQnlQcmlvcml0eVtwcm9wXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5QnlEdWVTdGF0dXMubGVuZ3RoID09PSAwKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdGF0dXMtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uQ29udGFpbmVyLmFwcGVuZChzdGF0dXNDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGl0bGVEaXYudGV4dENvbnRlbnQgPSB0aXRsZUFycmF5W2luZGV4XTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3N0YXR1cy10aXRsZScpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmQoc3RhdHVzVGl0bGVEaXYpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1ZVN0YXR1c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZVN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzQXJyYXlbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb250YWluZXIuYXBwZW5kKGR1ZVN0YXR1c0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbGFibGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzY3JvbGxhYmxlLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVTdGF0dXNDb250YWluZXIuYXBwZW5kKHNjcm9sbGFibGVDb250YWluZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvb3BzIG92ZXIgZWFjaCB0b2RvIG9iamVjdCBhbmQgYXBwZW5kcyB0aGVtIHRvIHNjcm9sbGFibGUgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5QnlEdWVTdGF0dXMuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRhaW5lci5hcHBlbmQodG9kb0NvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUtZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVEaXYudGV4dENvbnRlbnQgPSBvYmplY3QudGl0bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvVGl0bGVEaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NEaXYuY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjLWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0Rlc2NEaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY0Rpdi50ZXh0Q29udGVudCA9IG9iamVjdC5kZXNjO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjRGl2LmFwcGVuZChkZXNjUGFyYWdyYXBoKVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVEaXYuY2xhc3NMaXN0LmFkZCgndG9kby1kYXRlLWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVEaXYudGV4dENvbnRlbnQgPSBkaXNwbGF5RHVyYXRpb24ob2JqZWN0LmR1ZURhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kb0RhdGVEaXYudGV4dENvbnRlbnQgPSBgJHtvYmplY3QuZHVyYXRpb25MZWZ0LmRheUxlZnR9IGRheXMsICR7b2JqZWN0LmR1cmF0aW9uTGVmdC5tb250aHNMZWZ0IH0gbW9udGhzIGFuZCAke29iamVjdC5kdXJhdGlvbkxlZnQueWVhcnNMZWZ0fSB5ZWFycyBsZWZ0YDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9EYXRlRGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJvamVjdC1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcm9qZWN0RGl2LnRleHRDb250ZW50ID0gYFByb2plY3Q6ICR7b2JqZWN0LnByb2plY3R9YDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9Qcm9qZWN0RGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdG9kb1ByaW9yaXR5dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kb1ByaW9yaXR5dERpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLXByaW9yaXR5LWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kb1ByaW9yaXR5dERpdi50ZXh0Q29udGVudCA9IG9iamVjdC5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9Qcmlvcml0eXREaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNFTkQgVE8gQSBTRVBBUkFURSBNT0RVTEUgLSBPUEVOUyBUT0RPIElURU1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VG9kbyhvYmplY3QpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdG9kb0Rpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGlzcGxheS1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1haW5Db250YWluZXIuYXBwZW5kKHRvZG9EaXNwbGF5Q29udGFpbmVyKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLmFwcGVuZCh0b2RvRm9ybSlcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHRvZG9EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdG9kb0Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgndG9kby1kaXNwbGF5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdG9kb0Zvcm0uYXBwZW5kKHRvZG9EaXNwbGF5KTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheVRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdUaXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktdGl0bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUudmFsdWUgPSBvYmplY3QudGl0bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheVRpdGxlKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCB0b2RvRGVzY1RleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LWRlc2MnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnRGVzY3JpcHRpb24nKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnY29scycsJzMwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywnMTAnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEudmFsdWUgPSBvYmplY3QuZGVzYztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rlc2NUZXh0QXJlYSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXlEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXlEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheURhdGUudmFsdWUgPSBvYmplY3QuZHVlRGF0ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXlEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5RGF0ZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheURhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyBjb25zdCBsaW5lQnJlYWsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazEpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5UmVtaW5kSW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnNldEF0dHJpYnV0ZSgndHlwZScsJ251bWJlcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktcmVtaW5kLWluJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1JlbWluZCBpbiBob3cgbWFueSBkYXlzPycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnZhbHVlID0gb2JqZWN0LnJlbWluZEluO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4uc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlSZW1pbmRJbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIGNvbnN0IGxpbmVCcmVhazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazIpO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgcHJvamVjdHNEcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Byb2plY3QtZGlzcGxheS1jaG9pY2VzJyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1kaXNwbGF5LWNob2ljZXMnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHByb2plY3RzRHJvcERvd24pO1xuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IHVucHJvY2Vzc2VkUHJvamVjdCA9IHByb2plY3RPYmplY3RzKCkudW5wcm9jZXNzZWRQcm9qZWN0QXJyYXlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYob3B0aW9uc05vZGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNOb2RlLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbjAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG9wdGlvbjAudGV4dENvbnRlbnQgPSBvYmplY3QucHJvamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG9wdGlvbjAudmFsdWUgPSBvYmplY3QucHJvamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHByb2plY3RzRHJvcERvd24uYXBwZW5kKG9wdGlvbjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHVucHJvY2Vzc2VkUHJvamVjdC5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHByb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IG9iai50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLmFwcGVuZChwcm9qZWN0T3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IGZpcnN0QnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGZpcnN0QnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZpcnN0LWJ1dHRvbi1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKGZpcnN0QnV0dG9uQ29udGFpbmVyKVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJpb3JpdHlCdG5EaXYuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYnV0dG9uLWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZmlyc3RCdXR0b25Db250YWluZXIuYXBwZW5kKHByaW9yaXR5QnRuRGl2KVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9kby1kaXNwbGF5LXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5EaXYuYXBwZW5kKHByaW9yaXR5TGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gY29uc3QgbGluZWJyZWFrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBwcmlvcml0eUJ0bkRpdi5hcHBlbmQobGluZWJyZWFrUHJpb3JpdHkpO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxvYmplY3QucHJpb3JpdHkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS50ZXh0Q29udGVudCA9IG9iamVjdC5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5EaXYuYXBwZW5kKHRvZG9EaXNwbGF5UHJpb3JpdHkpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc2VzIGZvciBkaWZmZXJlbnQgcHJpb3JpdGllcyAoZGlmZmVyZW50IGNvbG91cnMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID09PSAnTG93Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9ICdNZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPT09ICdNZWRpdW0nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID0gJ0hpZ2gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnSGlnaCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID09PSAnSGlnaCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPSAnTG93JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0J0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgc3RhdHVzQnRuRGl2LmNsYXNzTGlzdC5hZGQoJ3N0YXR1cy1idXR0b24tZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBmaXJzdEJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoc3RhdHVzQnRuRGl2KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gY29uc3QgbGluZUJyZWFrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazMpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHN0YXR1c0xhYmVsLnRleHRDb250ZW50ID0gJ1N0YXR1czogJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBzdGF0dXNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3RvZG8tZGlzcGxheS1zdGF0dXMnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBzdGF0dXNCdG5EaXYuYXBwZW5kKHN0YXR1c0xhYmVsKTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBjb25zdCBsaW5lQnJlYWs0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrNCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBjcmVhdGUgbGluZSBicmVhayBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheVN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgndmFsdWUnLG9iamVjdC5zdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktc3RhdHVzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSBvYmplY3Quc3RhdHVzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc3RhdHVzQnRuRGl2LmFwcGVuZCh0b2RvRGlzcGxheVN0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyBBZGQgY2xhc3NlcyBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXMgKGRpZmZlcmVudCBjb2xvdXJzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0Rpc3BsYXlTdGF0dXMudmFsdWUgPT09ICdwZW5kaW5nJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMudmFsdWUgPSAnY29tcGxldGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9EaXNwbGF5U3RhdHVzLnZhbHVlID09PSAnY29tcGxldGUnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy52YWx1ZSA9ICdwZW5kaW5nJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy50ZXh0Q29udGVudCA9ICdQZW5kaW5nJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0pO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBzZWNvbmRCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgc2Vjb25kQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlY29uZC1idXR0b24tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZChzZWNvbmRCdXR0b25Db250YWluZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyBjb25zdCBsaW5lQnJlYWs1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWs1KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBkZWxldGVCdG5EaXYuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbi1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNlY29uZEJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZGVsZXRlQnRuRGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRvZG9EZWxldGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGVsZXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRvZG9EZWxldGUuY2xhc3NMaXN0LmFkZCgndG9kby1kZWxldGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBkZWxldGVCdG5EaXYuYXBwZW5kKHRvZG9EZWxldGUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gY29uc3QgbGluZUJyZWFrNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWs2KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdXBkYXRlQnRuRGl2LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24tZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBzZWNvbmRCdXR0b25Db250YWluZXIuYXBwZW5kKHVwZGF0ZUJ0bkRpdik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVXBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUudGV4dENvbnRlbnQgPSAnVXBkYXRlJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdXBkYXRlQnRuRGl2LmFwcGVuZCh0b2RvVXBkYXRlKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB1cGRhdGVUb2RvSXRlbShvYmplY3QpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBkZWxldGVUb2RvSXRlbShvYmplY3QpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZW1wdHlEaXNwbGF5KCk7XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBhcHBlbmRUb2RvT2JqZWN0czsiLCIvLyBpbXBvcnQgcG9wdWxhdGVUb2RvQ29sbGVjdGlvbiBmcm9tIFwiLi9wb3B1bGF0ZURPTVRvZG9Db2xsZWN0aW9uXCI7XG5cbmltcG9ydCBhcHBlbmRQcm9qZWN0T2JqZWN0cyBmcm9tIFwiLi9wb3B1bGF0ZURPTVByb2plY3RDb2xsZWN0aW9uXCI7XG5cbmltcG9ydCB7IGNoYW5nZVByb2plY3RQcmlvcml0eSB9IGZyb20gXCIuLi9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXNcIjtcblxuZnVuY3Rpb24gcHJvamVjdERPTU1vZHVsZSAoKXtcblxuICAgIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1jb250YWluZXInKTtcblxuXG5cblxuICAgIC8vIG1vdmUgdG8gZG9tQWN0aXZpdHlcbiAgICBmdW5jdGlvbiByZW1vdmVFeGlzdGluZ0Rpc3BsYXlET00gKCl7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGRpc3BsYXlDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIFxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgfSk7XG5cbiAgICB9XG5cbiAgICByZW1vdmVFeGlzdGluZ0Rpc3BsYXlET00oKTtcblxuXG4gICAgXG5cblxuICAgIFxuXG5cbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHByb2plY3RDb250YWluZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lci10aXRsZScpO1xuXG4gICAgZGlzcGxheUNvbnRhaW5lci5hcHBlbmQocHJvamVjdENvbnRhaW5lclRpdGxlKTtcblxuICAgICAgICBjb25zdCB0YWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRhYlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RhYi10aXRsZScpO1xuXG4gICAgICAgIHByb2plY3RDb250YWluZXJUaXRsZS5hcHBlbmQodGFiVGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgICAgICAgICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG5cbiAgICAgICAgICAgIHRhYlRpdGxlLmFwcGVuZChwcm9qZWN0SGVhZGVyKTtcblxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgICAgICBwcm9qZWN0UGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ1lvdXIgY29sbGVjdGlvbiBvZiBwcm9qZWN0cyBhcmUgZGlzcGxheWVkIGhlcmUnO1xuXG4gICAgICAgICAgICB0YWJUaXRsZS5hcHBlbmQocHJvamVjdFBhcmFncmFwaCk7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHByaW9yaXR5QnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1idXR0b25zJyk7XG5cbiAgICAgICAgcHJvamVjdENvbnRhaW5lclRpdGxlLmFwcGVuZChwcmlvcml0eUJ1dHRvbnMpO1xuXG4gICAgICAgICAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgaGlnaFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgaGlnaFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgICAgIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9ICdIaWdoJztcblxuICAgICAgICAgICAgcHJpb3JpdHlCdXR0b25zLmFwcGVuZChoaWdoUHJpb3JpdHkpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ21lZGl1bS1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICBtZWRpdW1Qcmlvcml0eS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuXG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kKG1lZGl1bVByaW9yaXR5KTtcblxuXG4gICAgICAgICAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBsb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdsb3ctcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgcHJpb3JpdHlCdXR0b25zLmFwcGVuZChsb3dQcmlvcml0eSk7XG5cbiAgICAgICAgICAgIFxuXG5cblxuXG5cbiAgICBcbiAgICBjb25zdCBjb2xsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb2xsZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbGxlY3Rpb24tY29udGFpbmVyJyk7XG5cbiAgICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZChjb2xsZWN0aW9uQ29udGFpbmVyKTtcblxuXG4gICAgYXBwZW5kUHJvamVjdE9iamVjdHMoJ0hpZ2gnKTtcblxuICAgIGNoYW5nZVByb2plY3RQcmlvcml0eSgpO1xuICAgIFxuICAgIFxuICAgIFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RET01Nb2R1bGU7IiwiaW1wb3J0IHNvcnRpbmdNZXRob2RzIGZyb20gJy4uL2RvbUFjdGl2aXRpZXMvc29ydGluZ01ldGhvZHMnXG5cbmZ1bmN0aW9uIGFsbE5vdGVzVGFiICgpe1xuXG4gICAgY29uc3QgY2xvbmVUb2RvQXJyYXkgPSBzb3J0aW5nTWV0aG9kcy5jbG9uZU9iamVjdCgpLmNsb25lVG9kb0FycmF5O1xuXG4gICAgY29uc3Qgbm90ZXNBcnJheSA9IHNvcnRpbmdNZXRob2RzLm5vdGVTb3J0ZXIoY2xvbmVUb2RvQXJyYXkpO1xuXG4gICAgY29uc29sZS5sb2coJ05PVEVTIFRBQicpO1xuXG4gICAgY29uc29sZS5sb2cobm90ZXNBcnJheSk7XG5cbiAgICByZXR1cm4gbm90ZXNBcnJheTtcblxuXG5cbn1cblxuYWxsTm90ZXNUYWIoKTtcblxuZXhwb3J0IGRlZmF1bHQgYWxsTm90ZXNUYWI7IiwiaW1wb3J0IHNvcnRpbmdNZXRob2RzIGZyb20gJy4uL2RvbUFjdGl2aXRpZXMvc29ydGluZ01ldGhvZHMnXG5cbmZ1bmN0aW9uIHByb2plY3RzVGFiICgpe1xuXG4gICAgICAgIFxuXG4gICAgY29uc3QgdW5wcm9jZXNzZWRQcm9qZWN0QXJyYXkgPSBzb3J0aW5nTWV0aG9kcy5zb3J0QnlQcm9qZWN0TmFtZSgpLnByb2Nlc3NlZFByb2plY3RBcnJheUJ5TmFtZTtcblxuICAgIFxuXG4gICAgLy8gQWxsIHByb2plY3RzIGFyZSBzdG9yZWQgaGVyZVxuICAgIC8vIEZpcnN0IHNvcnQgdGhlIHByb2plY3RzIGJ5IHByaW9yaXR5XG4gICAgY29uc3QgcHJvamVjdHNCeVByaW9yaXR5ID0gc29ydGluZ01ldGhvZHMucHJpb3JpdHlTb3J0ZXIodW5wcm9jZXNzZWRQcm9qZWN0QXJyYXkpO1xuXG5cbiAgICBcblxuICAgIC8vIFRoZW4gc29ydCB0aGUgbm90ZXMgaW4gdGhvc2UgcHJvamVjdHMgYnkgcHJpb3JpdHlcbiAgICBmb3IgKGNvbnN0IHByaW9yaXR5TGV2ZWwgaW4gcHJvamVjdHNCeVByaW9yaXR5KSB7XG5cbiAgICAgICAgcHJvamVjdHNCeVByaW9yaXR5W3ByaW9yaXR5TGV2ZWxdLmZvckVhY2gocHJvamVjdCA9PiB7XG5cbiAgICAgICAgICAgIC8vIHNvcnQgcHJpb3JpdHkgb2YgdG9kb0NvbGxlY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHNvcnRCeVByaW9yaXR5ID0gc29ydGluZ01ldGhvZHMucHJpb3JpdHlTb3J0ZXIocHJvamVjdC50b2RvQ29sbGVjdGlvbilcblxuXG4gICAgICAgICAgICAvLyBTb3J0IHRvZG9zIGJ5IGR1ZSBkYXRlXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByaW9yaXR5IGluIHNvcnRCeVByaW9yaXR5KSB7XG5cbiAgICAgICAgICAgICAgICBzb3J0QnlQcmlvcml0eVtwcmlvcml0eV0gPSBzb3J0aW5nTWV0aG9kcy5zb3J0RHVlRGF0ZShzb3J0QnlQcmlvcml0eVtwcmlvcml0eV0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGVtcHR5IHRvZG9Db2xsZWN0aW9uXG4gICAgICAgICAgICBwcm9qZWN0LnRvZG9Db2xsZWN0aW9uID0gW107XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcga2V5IGFuZCBhdHRhY2ggdGhlIHNvcnRlZCBvYmplY3RcbiAgICAgICAgICAgIHByb2plY3QudG9kb3NCeVByaW9yaXR5ID0gc29ydEJ5UHJpb3JpdHk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cblxuICAgIC8vIFNvcnQgcHJvamVjdHMgYnkgZHVlIGRhdGVzXG4gICAgZm9yIChjb25zdCBwcmlvcml0eSBpbiBwcm9qZWN0c0J5UHJpb3JpdHkpIHtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RzQnlQcmlvcml0eVtwcmlvcml0eV0gPSBzb3J0aW5nTWV0aG9kcy5zb3J0RHVlRGF0ZShwcm9qZWN0c0J5UHJpb3JpdHlbcHJpb3JpdHldKTtcblxuICAgIH1cblxuXG5cblxuXG4gICAgY29uc29sZS5sb2coJ1BST0pFQ1RTIFRBQicpO1xuXG4gICAgY29uc29sZS5sb2cocHJvamVjdHNCeVByaW9yaXR5KTtcblxuXG4gICAgcmV0dXJuIHtwcm9qZWN0c0J5UHJpb3JpdHksdW5wcm9jZXNzZWRQcm9qZWN0QXJyYXl9O1xuXG59XG5cbnByb2plY3RzVGFiKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RzVGFiOyIsIlxuaW1wb3J0IHNvcnRpbmdNZXRob2RzIGZyb20gJy4uL2RvbUFjdGl2aXRpZXMvc29ydGluZ01ldGhvZHMnXG5cbmZ1bmN0aW9uIGFsbFRvZG9zVGFiICgpe1xuXG4gICAgY29uc3QgY2xvbmVUb2RvQXJyYXkgPSBzb3J0aW5nTWV0aG9kcy5jbG9uZU9iamVjdCgpLmNsb25lVG9kb0FycmF5O1xuICAgIGNvbnN0IHNvcnRlZFRvZG9BcnJheSA9IHNvcnRpbmdNZXRob2RzLnByaW9yaXR5U29ydGVyKGNsb25lVG9kb0FycmF5KTtcblxuICAgIGZvciAoY29uc3QgcHJpb3JpdHkgaW4gc29ydGVkVG9kb0FycmF5KSB7XG4gICAgICAgIFxuICAgICAgICBzb3J0ZWRUb2RvQXJyYXlbcHJpb3JpdHldID0gc29ydGluZ01ldGhvZHMuc29ydER1ZURhdGUoc29ydGVkVG9kb0FycmF5W3ByaW9yaXR5XSk7XG5cbiAgICB9XG5cblxuICAgIGNvbnNvbGUubG9nKHNvcnRlZFRvZG9BcnJheSk7XG5cbiAgICByZXR1cm4gc29ydGVkVG9kb0FycmF5O1xuXG5cbn1cblxuY29uc29sZS5sb2coJ1RPRE8gVEFCJyk7XG5hbGxUb2Rvc1RhYigpO1xuXG5leHBvcnQgZGVmYXVsdCBhbGxUb2Rvc1RhYjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCBjcmVhdGVNYWluRE9NIGZyb20gXCIuL2RvbUNyZWF0aW9uL21haW5ET01DcmVhdGlvblwiO1xuXG5pbXBvcnQgZG9tQWN0aW9uIGZyb20gXCIuL2RvbUFjdGl2aXRpZXMvZG9tQWN0aXZpdGllc1wiO1xuXG5pbXBvcnQgY3JlYXRlVG9kb0RPTSBmcm9tIFwiLi9kb21DcmVhdGlvbi9hbGxUb2RvRE9NQ3JlYXRpb25cIlxuXG5cblxuXG4vLyBBbGwgbW9kdWxlcyBzaG91bGQgc3RhcnQgaGVyZVxuXG4vLyBIT01FUEFHRVxuY3JlYXRlTWFpbkRPTSgpO1xuXG4vLyBBdHRhY2hlcyBhbGwgZXZlbnRsaXN0ZW5lcnMgdG8gSE9NRVBBR0VcbmRvbUFjdGlvbigpO1xuXG4vLyBMb2FkcyB0b2RvIGZpcnN0XG5jcmVhdGVUb2RvRE9NKCk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9