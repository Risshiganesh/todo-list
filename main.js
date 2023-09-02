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
    height: 400px;
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
    padding-top: 100px;
    align-items: start;
    justify-items: center;
    overflow: auto;
    padding-bottom: 100px;
    display: none;
    z-index: 2;
    left: 0px;

}

.show-form{
    display: grid;
}

.todo-creation-form {
    /* position: fixed; */
    width: 300px;
    /* height: 700px; */
    /* background-color: maroon; */
    padding: 10px;
    /* border-radius: 10px; */
    display: grid;
    justify-items: center;

    font-family: Arial, Helvetica, sans-serif;


    background: rgba(0, 0, 0, 0.473);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    
}

.todo-creation-form > form {
    width: 100%;
}

#todo-date,
#project-date{
    font-family: Arial, Helvetica, sans-serif;
}


fieldset {
    border: none;
    text-align: center;
    width: 100%;
    height: 100%;
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


    background: rgba( 0, 0, 0, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
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


    background: rgba( 0, 0, 0, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 5px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
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
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
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
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
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
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 5px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    height: 25px;
    color: white;
    cursor: pointer;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,mGAAmG;;IAEnG;4FACwF;AAC5F;;;AAGA;IACI,YAAY;AAChB;;;;;AAKA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,QAAQ;IACR,gCAAgC;IAChC,iCAAiC;IACjC;;;iDAG6C;;;;AAIjD;;;AAGA;IACI,oBAAoB;IACpB,YAAY;;IAEZ,iCAAiC;IACjC,kDAAkD;IAClD;2CACuC;IACvC,4BAA4B;IAC5B,oCAAoC;IACpC,6CAA6C;IAC7C,iBAAiB;;;IAGjB,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,2BAA2B;IAC3B,aAAa;AACjB;;AAEA;IACI,uCAAuC;IACvC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,mBAAmB;IACnB,6CAA6C;IAC7C,eAAe;AACnB;;AAEA;;;;IAII,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,wBAAwB;IACxB,qBAAqB;IACrB,kBAAkB;IAClB,yCAAyC;IACzC,eAAe;;;IAGf,qCAAqC;IACrC,kDAAkD;IAClD,8BAA8B;IAC9B,sCAAsC;IACtC,mBAAmB;IACnB,6CAA6C;IAC7C,iCAAiC;;AAErC;;;AAGA;IACI,yCAAyC;IACzC,0CAA0C;IAC1C,YAAY;AAChB;;;AAGA;IACI,qBAAqB;IACrB,wBAAwB;IACxB,aAAa;;IAEb,gCAAgC;;IAEhC,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,6CAA6C;IAC7C,gBAAgB;AACpB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,gCAAgC;IAChC,iCAAiC;IACjC,yCAAyC;AAC7C;;;AAGA;IACI,mDAAmD;IACnD,WAAW;IACX,aAAa,EAAE,8CAA8C;IAC7D,eAAe;IACf,kBAAkB;IAClB,iCAAiC;IACjC,eAAe;;;IAGf,iCAAiC;IACjC,kDAAkD;IAClD,8BAA8B;IAC9B,sCAAsC;;;;IAItC,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,+BAA+B;;;AAGnC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,kBAAkB;;IAElB,4BAA4B;IAC5B,gCAAgC;IAChC,WAAW;IACX,YAAY;;IAEZ,6BAA6B;IAC7B,gCAAgC;;;IAGhC,2BAA2B;;IAE3B,iCAAiC;IACjC,kDAAkD;IAClD,8BAA8B;IAC9B,sCAAsC;IACtC,6CAA6C;IAC7C,kBAAkB;;;IAGlB;;0BAEsB;;AAE1B;;;;;;AAMA;;IAEI,aAAa;IACb,+BAA+B;;;AAGnC;AACA;IACI,aAAa;IACb,4BAA4B;IAC5B,oCAAoC;IACpC,uBAAuB;IACvB,YAAY;IACZ,SAAS;IACT,oBAAoB;;AAExB;;AAEA;;IAEI,4CAA4C;;AAEhD;;;AAGA;;;IAGI,gCAAgC;IAChC,gBAAgB;IAChB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,yCAAyC;IACzC,eAAe;IACf,iBAAiB;;;IAGjB,qCAAqC;IACrC,kDAAkD;IAClD,8BAA8B;IAC9B,sCAAsC;IACtC,mBAAmB;IACnB,6CAA6C;IAC7C,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,yCAAyC;IACzC,YAAY;AAChB;;AAEA;IACI,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,kBAAkB;IAClB,yCAAyC;IACzC,iCAAiC;IACjC,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,mDAAmD;IACnD,mBAAmB;IACnB,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;AAChB;;;AAGA;;IAEI,aAAa;IACb,gCAAgC;IAChC,2BAA2B;IAC3B,mBAAmB;IACnB,qBAAqB;;;;;IAKrB,iCAAiC;IACjC,kDAAkD;IAClD,8BAA8B;IAC9B,sCAAsC;IACtC,mBAAmB;IACnB,6CAA6C;IAC7C,mBAAmB;;IAEnB,gCAAgC;AACpC;;AAEA;;IAEI,yCAAyC;IACzC,iCAAiC;IACjC,qBAAqB;IACrB,eAAe;IACf,oDAAoD;AACxD;;;AAGA,4BAA4B;AAC5B;;IAEI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,2BAA2B;IAC3B,gCAAgC;IAChC,aAAa;IACb,0BAA0B;IAC1B,+BAA+B;IAC/B,aAAa;IACb,+BAA+B;;;IAG/B,8DAA8D;;IAE9D,mBAAmB;;IAEnB,0CAA0C;IAC1C,6BAA6B;IAC7B,sBAAsB;IACtB,cAAc;;IAEd,mBAAmB;IACnB,uBAAuB;;;AAG3B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,yCAAyC;IACzC,iCAAiC;AACrC;;AAEA;;;GAGG;;AAEH;;IAEI,+BAA+B;IAC/B,cAAc;IACd,aAAa;IACb,YAAY;;AAEhB;;;AAGA;IACI,yCAAyC;IACzC,eAAe;IACf,iBAAiB;IACjB,2BAA2B;IAC3B,0DAA0D;AAC9D;;;;;AAKA;;;;;IAKI,aAAa;IACb,4BAA4B;IAC5B,aAAa;IACb,WAAW;IACX,8BAA8B;IAC9B,mBAAmB;IACnB,oBAAoB;;IAEpB,cAAc;;IAEd,qBAAqB;;IAErB,kBAAkB;;IAElB,mBAAmB;;;;;IAKnB,mBAAmB;IACnB,qBAAqB;IACrB;4CACwC;;;AAG5C;;;AAGA;IACI,0CAA0C;AAC9C;;;AAGA;IACI,0CAA0C;AAC9C;;;AAGA;IACI,wCAAwC;AAC5C;;AAEA;IACI,wCAAwC;AAC5C;;;AAGA;;IAEI,aAAa;IACb,gBAAgB;IAChB,sBAAsB,EAAE,+BAA+B;;IAEvD,6BAA6B;;AAEjC;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,uCAAuC;IACvC,kDAAkD;IAClD,8BAA8B;IAC9B,sCAAsC;IACtC,mBAAmB;IACnB,6CAA6C;IAC7C,yCAAyC;;AAE7C;;AAEA;;IAEI,eAAe;IACf,oDAAoD;IACpD,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;IACvB,wBAAwB;IACxB,gBAAgB;;AAEpB;;;AAGA;IACI,6BAA6B;IAC7B,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,gBAAgB;IAChB,qBAAqB;IACrB,0DAA0D;IAC1D,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;;IAEI,eAAe;IACf,eAAe;AACnB;;;;;;;;;;AAUA;IACI,aAAa;IACb,eAAe;IACf,WAAW;IACX,YAAY;IACZ,sCAAsC;IACtC,mBAAmB;IACnB,qBAAqB;IACrB,UAAU;IACV,OAAO;AACX;;AAEA;;IAEI,wBAAwB;IACxB,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,aAAa;;AAEjB;;AAEA;;;IAGI,qDAAqD;;AAEzD;;;AAGA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,0BAA0B;IAC1B,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;;IAEf,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,6CAA6C;IAC7C,YAAY;;AAEhB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,2BAA2B;IAC3B,kBAAkB;IAClB,eAAe;;IAEf,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,6CAA6C;IAC7C,YAAY;IACZ,yCAAyC;AAC7C;;AAEA;;IAEI,gBAAgB;IAChB,WAAW;IACX,0BAA0B;IAC1B,kBAAkB;IAClB,eAAe;IACf,yCAAyC;IACzC,yBAAyB;;IAEzB,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,6CAA6C;IAC7C,YAAY;AAChB;;AAEA;;IAEI,gBAAgB;IAChB,WAAW;IACX,0BAA0B;IAC1B,kBAAkB;IAClB,eAAe;IACf,yCAAyC;IACzC,yBAAyB;;IAEzB,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,6CAA6C;IAC7C,YAAY;;;AAGhB;;;;AAIA;IACI,kBAAkB;;IAElB,sBAAsB;IACtB,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,yCAAyC;IACzC,yBAAyB;;IAEzB,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,6CAA6C;IAC7C,YAAY;AAChB;;;;AAIA;;IAEI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,yCAAyC;IACzC,mBAAmB;IACnB,qBAAqB;AACzB;;;AAGA;IACI,aAAa;IACb,qBAAqB;IACrB,QAAQ;AACZ;;AAEA;IACI,eAAe;AACnB;;;AAGA;;IAEI,oBAAoB;IACpB,YAAY;IACZ,YAAY;IACZ,uCAAuC;IACvC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,kBAAkB;IAClB,6CAA6C;IAC7C,YAAY;IACZ,eAAe;AACnB;;AAEA;;IAEI,4CAA4C;AAChD;;;AAGA;;IAEI,gBAAgB;;IAEhB,YAAY;IACZ,YAAY;IACZ,kBAAkB;;IAElB,6CAA6C;IAC7C,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,kBAAkB;IAClB,6CAA6C;IAC7C,YAAY;IACZ,eAAe;;;;AAInB;;;AAGA;IACI,wCAAwC;AAC5C;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,0CAA0C;AAC9C;;;AAGA;IACI,sCAAsC;IACtC,eAAe;IACf,YAAY;IACZ,WAAW;IACX,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,qBAAqB;;AAEzB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,aAAa;;IAEb,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,6CAA6C;IAC7C,YAAY;IACZ,yCAAyC;IACzC,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,gBAAgB;;AAEpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;;;;;AAMA;IACI,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,uCAAuC;IACvC,kDAAkD;IAClD,8BAA8B;IAC9B,sCAAsC;IACtC,mBAAmB;;IAEnB,aAAa;IACb,6CAA6C;;AAEjD;;;;AAIA;;IAEI,eAAe;IACf,oDAAoD;IACpD;0BACsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,oBAAoB;;AAExB;;;AAGA;IACI,6BAA6B;IAC7B,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,gBAAgB;IAChB,qBAAqB;IACrB,0DAA0D;IAC1D,mBAAmB;IACnB,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,eAAe;IACf,eAAe;AACnB;;;;;AAKA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,kCAAkC;IAClC,4CAA4C;IAC5C,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,UAAU;AACd;;AAEA;;IAEI,YAAY;IACZ,0CAA0C;IAC1C,mBAAmB;;;;IAInB,8CAA8C;;IAE9C,mBAAmB;IACnB,iCAAiC;IACjC,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,6CAA6C;;AAEjD;;AAEA;;IAEI,WAAW;IACX,aAAa;IACb,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,eAAe;IACf,yCAAyC;IACzC,kBAAkB;IAClB,YAAY;;;IAGZ,YAAY;IACZ,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,kBAAkB;IAClB,6CAA6C;IAC7C,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,WAAW;;;IAGX,yCAAyC;IACzC,YAAY;;;IAGZ,YAAY;IACZ,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,kBAAkB;IAClB,6CAA6C;;AAEjD;;AAEA;;IAEI,yCAAyC;IACzC,YAAY;;;IAGZ,YAAY;IACZ,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,kBAAkB;IAClB,6CAA6C;;AAEjD;;;AAGA;;IAEI,yCAAyC;IACzC,YAAY;;;IAGZ,YAAY;IACZ,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,kBAAkB;IAClB,6CAA6C;;AAEjD;;AAEA;;IAEI,aAAa;IACb,8BAA8B;IAC9B,yCAAyC;IACzC,YAAY;IACZ,QAAQ;;AAEZ;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,eAAe;IACf,gCAAgC;AACpC;;;AAGA;;IAEI,gBAAgB;GACjB,kBAAkB;;;GAGlB,YAAY;GACZ,uCAAuC;GACvC,kDAAkD;GAClD,8BAA8B;GAC9B,sCAAsC;GACtC,yBAAyB;GACzB,wCAAwC;GACxC,YAAY;;AAEf;;AAEA;;IAEI,YAAY;IACZ,eAAe;AACnB;;AAEA;;IAEI,4CAA4C;AAChD;;AAEA;;;IAGI,WAAW;IACX,aAAa;IACb,2BAA2B;IAC3B,cAAc;IACd,yCAAyC;IACzC,mBAAmB;IACnB,kCAAkC;;;IAGlC,YAAY;IACZ,mCAAmC;IACnC,kDAAkD;IAClD,8BAA8B;IAC9B,sCAAsC;IACtC,yBAAyB;IACzB,kBAAkB;IAClB,8CAA8C;IAC9C,+CAA+C;;AAEnD;;AAEA;IACI,wCAAwC;IACxC,eAAe;AACnB;;AAEA;IACI,0CAA0C;IAC1C,eAAe;AACnB;;;AAGA;IACI,wCAAwC;AAC5C;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,yCAAyC;IACzC,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,yCAAyC;IACzC,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,+CAA+C;IAC/C,mBAAmB;IACnB,YAAY;;;IAGZ,2CAA2C;IAC3C,wDAAwD;IACxD,oCAAoC;IACpC,4CAA4C;IAC5C,mBAAmB;AACvB;;;AAGA;;IAEI,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,kCAAkC;IAClC,kDAAkD;IAClD,8BAA8B;IAC9B,sCAAsC;IACtC,mBAAmB;IACnB,6CAA6C;IAC7C,yCAAyC;AAC7C;;AAEA;;IAEI,+BAA+B;IAC/B,cAAc;IACd,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,4BAA4B;IAC5B,iCAAiC;IACjC,kDAAkD;IAClD;2CACuC;IACvC,mBAAmB;IACnB,6CAA6C;;AAEjD;;AAEA;;;;;IAKI,aAAa;IACb,4BAA4B;IAC5B,mBAAmB;IACnB;;;4BAGwB;;IAExB,oBAAoB;;;;;IAKpB,aAAa;IACb,4BAA4B;IAC5B,WAAW;IACX,8BAA8B;IAC9B,mBAAmB;IACnB,oBAAoB;;IAEpB,cAAc;;IAEd,qBAAqB;;IAErB,0BAA0B;;AAE9B;;;AAGA;;IAEI,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,mBAAmB,EAAE,+BAA+B;IACpD,YAAY;IACZ,sBAAsB;;IAEtB,QAAQ;;IAER,6BAA6B;;AAEjC;;AAEA;;IAEI,uCAAuC;IACvC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,mBAAmB;IACnB,6CAA6C;IAC7C,YAAY;AAChB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,wCAAwC;AAC5C;;;;;;;AAOA;;IAEI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,8BAA8B;IAC9B,kBAAkB;IAClB,cAAc;IACd,SAAS;IACT,2DAA2D;;AAE/D;;;AAGA;IACI,WAAW;IACX,aAAa;;IAEb,aAAa;IACb,qCAAqC;IACrC,kDAAkD;IAClD,8BAA8B;IAC9B,sCAAsC;IACtC,mBAAmB;IACnB,6CAA6C;IAC7C,yCAAyC;IACzC,YAAY;;AAEhB;;AAEA;IACI,wCAAwC;IACxC,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,iCAAiC;IACjC,QAAQ;;;IAGR,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,mBAAmB;IACnB,6CAA6C;AACjD;;AAEA;IACI,eAAe;IACf,oDAAoD;IACpD,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;IACvB,wBAAwB;IACxB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;IAC7B,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,gBAAgB;IAChB,qBAAqB;IACrB,kBAAkB;;AAEtB;;;AAGA;IACI,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;IAChB,qBAAqB;AACzB;;;;;AAKA,gBAAgB;;AAEhB;IACI,eAAe;IACf,YAAY;IACZ,QAAQ;IACR,YAAY;IACZ,aAAa;IACb,4BAA4B;IAC5B,gCAAgC;IAChC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;;;IAIvB,iCAAiC;AACrC,kDAAkD;AAClD,8BAA8B;AAC9B,sCAAsC;AACtC,6CAA6C;AAC7C,kBAAkB;;AAElB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;;;IAGf,+BAA+B;IAC/B;;6CAEyC;IACzC,6CAA6C;IAC7C,YAAY;AAChB;;;;AAIA;IACI,mCAAmC;AACvC;;AAEA,uBAAuB;;;AAGvB;;IAEI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,4CAA4C;IAC5C,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,cAAc;IACd,qBAAqB;IACrB,aAAa;IACb,UAAU;IACV,SAAS;;AAEb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,mBAAmB;IACnB,8BAA8B;IAC9B,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,qBAAqB;;IAErB,yCAAyC;;;IAGzC,gCAAgC;IAChC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,mBAAmB;IACnB,6CAA6C;;AAEjD;;AAEA;IACI,WAAW;AACf;;AAEA;;IAEI,yCAAyC;AAC7C;;;AAGA;IACI,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,yCAAyC;IACzC,YAAY;IACZ,eAAe;;AAEnB;;AAEA;IACI,mBAAmB;AACvB;;;;AAIA;IACI,aAAa;IACb,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,yCAAyC;IACzC,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,8BAA8B;IAC9B,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;;IAEI,6BAA6B;IAC7B,8BAA8B;IAC9B,aAAa;IACb,+BAA+B;IAC/B,kBAAkB;IAClB,QAAQ;;;AAGZ;;;;AAIA;;IAEI,mBAAmB;;AAEvB;;;;;AAKA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,wBAAwB;;;IAGxB,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,kBAAkB;IAClB,6CAA6C;IAC7C,yCAAyC;;AAE7C;;AAEA;IACI,gBAAgB;IAChB,WAAW;;IAEX,kBAAkB;IAClB,YAAY;IACZ,wBAAwB;;IAExB,yCAAyC;;;IAGzC,iCAAiC;IACjC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,kBAAkB;IAClB,6CAA6C;AACjD;;AAEA;IACI,oDAAoD;IACpD,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,oDAAoD;IACpD,YAAY;AAChB;;AAEA;;IAEI,uCAAuC;IACvC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,kBAAkB;IAClB,6CAA6C;IAC7C,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;AACA;;IAEI,4CAA4C;AAChD;;AAEA;IACI,mCAAmC;IACnC,aAAa;AACjB;;AAEA;IACI,+BAA+B;IAC/B,aAAa;AACjB;;AAEA;IACI,+BAA+B;IAC/B,aAAa;AACjB;;AAEA;IACI,mCAAmC;IACnC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,kBAAkB;IAClB,6CAA6C;IAC7C,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,gBAAgB;IAChB,yCAAyC;;IAEzC,kDAAkD;IAClD,4BAA4B;IAC5B,oCAAoC;IACpC,kBAAkB;IAClB,6CAA6C;IAC7C,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,yCAAyC;AAC7C;;;AAGA,mBAAmB;;AAEnB;;;IAGI;QACI,aAAa;QACb,mBAAmB;QACnB,qBAAqB;IACzB;;IAEA;;;QAGI,gCAAgC;QAChC,kDAAkD;QAClD,8BAA8B;QAC9B,sCAAsC;IAC1C;;IAEA;QACI,4BAA4B;QAC5B,aAAa;QACb,iCAAiC;QACjC,gCAAgC;QAChC;;;qDAG6C;QAC7C,wBAAwB;;;;IAI5B;;IAEA;QACI,gCAAgC;IACpC;;IAEA;;QAEI,mBAAmB;QACnB,6BAA6B;IACjC;;IAEA;QACI,YAAY;IAChB;;;;IAIA;QACI,kBAAkB;QAClB,aAAa;QACb,iBAAiB;QACjB,eAAe;QACf,aAAa;QACb,gBAAgB;QAChB,iBAAiB;QACjB,aAAa;QACb,YAAY;QACZ,UAAU;QACV,gCAAgC;QAChC,0CAA0C;QAC1C,WAAW;QACX,6CAA6C;QAC7C,kBAAkB;QAClB,kBAAkB;QAClB,sCAAsC;QACtC,gCAAgC;IACpC;;IAEA;QACI,SAAS;IACb;;;IAGA;;;;QAII,mBAAmB;QACnB,mBAAmB;QACnB,aAAa;QACb,mBAAmB;QACnB,qBAAqB;QACrB,iBAAiB;;IAErB;;IAEA,eAAe,0CAA0C;QACrD,aAAa;IACjB;AACJ","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml,\nbody{\n    width: 100%;\n    height: 100%;\n    background: rgb(0,4,78);\n    background: linear-gradient(13deg, rgba(0,4,78,1) 0%, rgba(0,97,101,1) 47%, rgba(0,104,125,1) 100%);\n\n    /* background: rgb(238,174,202);\n    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%); */\n}\n\n\ntextarea {\n    resize: none;\n}\n\n\n\n\n.main-container{\n    position: relative;\n    height: 100%;\n    width: 100vw;\n    display: grid;\n    gap: 5px;\n    grid-template-columns: 200px 1fr;\n    grid-template-rows: 70px 1fr 40px;\n    grid-template-areas:\n    \"top-container top-container\" \n    \"note-menu display-container\"\n    \"todo-container-footer todo-container-footer\";\n\n    \n\n}\n\n\n.note-menu{\n    grid-area: note-menu;\n    height: 100%;\n\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    /* backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px ); */\n    backdrop-filter: blur( 6px );\n    -webkit-backdrop-filter: blur( 6px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    border-left: none;\n\n\n    border-radius: 0px 15px 15px 0px;\n}\n\n.note-menu > div > h1 {\n    cursor: pointer;\n    display: inline;\n}\n\n.tab-container {\n    height: 100%;\n    /* border: 3px solid red; */\n    padding: 10px;\n}\n\n.tab-container > div:hover{\n    background: rgba( 255, 255, 255, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    cursor: pointer;\n}\n\n.all-todos-tab,\n.all-projects-tab,\n.all-notes-tab {\n\n    margin-bottom: 10px;\n    border-radius: 10px;\n    padding: 10px;\n    /* padding-left: 20px; */\n    /* font-size: 15px; */\n    text-align: center;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 12px;\n\n\n    background: rgba(139, 139, 139, 0.25);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: rgba(255, 255, 255, 0.514);\n\n}\n\n\n.menu-tab-active {\n    background-color: rgba(0, 255, 221, 0.37);\n    background-color: rgba(0, 247, 255, 0.582);\n    color: white;\n}\n\n\n.top-container {\n    border: 1px solid red;\n    grid-area: top-container;\n    display: flex;\n    \n    border-radius: 0px 0px 10px 10px;\n\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    border-top: none;\n}\n\n.top-container-spacing {\n    flex: 1;\n}\n\n.brand-container {\n    /* border: 1px solid green; */\n    width: 250px;\n    text-align: center;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    border-radius: 0px 0px 10px 10px;\n    color: rgba(255, 255, 255, 0.623);\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n\n.hamburger-menu {\n    /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */\n    width: 70px;\n    display: none; /*display: block when display is below 600px */ \n    font-size: 40px;\n    text-align: center;\n    color: rgba(255, 255, 255, 0.432);\n    cursor: pointer;\n\n\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n\n\n\n    border-top: none;\n    border-right: none;\n    border-bottom: none;\n    border-radius: 0px 0px 10px 0px;\n\n    \n}\n\n.hamburger-menu > img {\n    width: 50px;\n}\n\n.hamburger-menu > img:hover {\n    width: 60px;\n}\n\n.hamburger-menu > img:active {\n    width: 60px;\n}\n\n.display-container {\n    display: grid;\n    position: relative;\n\n    grid-area: display-container;\n    background-color: cornflowerblue;\n    width: 100%;\n    height: 100%;\n\n    grid-template-rows: 160px 1fr;\n    border-radius: 10px 0px 0px 10px;\n\n\n    /* border: 1px solid red; */\n\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    border-right: none;\n\n\n    grid-template-areas: \n    \"todo-container-title\"\n    \"collection-container\";\n\n}\n\n\n\n\n\n.todo-container-title{\n\n    display: grid;\n    grid-area: todo-container-title;\n    \n    \n}\n.priority-buttons{\n    display: grid;\n    /* border: 1px solid blue; */\n    grid-template-columns: repeat(3,1fr);\n    grid-template-rows: 1fr;\n    width: 350px;\n    gap: 10px;\n    justify-self: center;\n\n}\n\n.priority-buttons > button:hover {\n\n    border: 1px solid rgba(255, 255, 255, 0.459);\n\n}\n\n\n.high-priority,\n.medium-priority,\n.low-priority{\n    background-color: darkolivegreen;\n    appearance: none;\n    height: 40px;\n    border: 1px solid gray;\n    border-radius: 10px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px;\n    font-weight: bold;\n\n\n    background: rgba(255, 255, 255, 0.25);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: rgba(255, 255, 255, 0.753);\n    cursor: pointer;\n}\n\n.chosen-priority{\n    background-color: rgba(0, 199, 33, 0.562);\n    color: white;\n}\n\n.high-priority-chosen {\n    background-color: rgb(223, 0, 0);\n    color: black;\n}\n\n.medium-priority-chosen {\n    background-color: rgb(224, 224, 0);\n    color: black;\n}\n\n.low-priority-chosen {\n    background-color: rgb(0, 214, 0);\n    color: black;\n}\n\n.tab-title{\n    display: grid;\n    padding: 10px 20px;\n    align-self: center;\n    justify-items: center;\n    text-align: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: rgba(255, 255, 255, 0.432);\n    gap: 10px;\n}\n\n.tab-title > h1 {\n    display: inline-block;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.432);\n    padding-bottom: 5px;\n    /* margin-bottom: 50px; */\n    align-self: center;\n    width: 200px;\n}\n\n\n.todo-container-footer{\n\n    display: grid;\n    grid-area: todo-container-footer;\n    background-color: slateblue;\n    align-items: center;\n    justify-items: center;\n\n\n\n\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    border-bottom: none;\n\n    border-radius: 10px 10px 0px 0px;\n}\n\n.link-container > a {\n\n    font-family: Arial, Helvetica, sans-serif;\n    color: rgba(255, 255, 255, 0.432);\n    text-decoration: none;\n    font-size: 12px;\n    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );\n}\n\n\n/* This is the tricky part */\n.collection-container{\n\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    /* border: 3px solid red; */\n    /* background-color: darkcyan; */\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-area: collection-container;\n    padding: 10px;\n    border-radius: 0px 0px 0px 10px;\n    \n\n    /* grid-template-rows: repeat(auto-fill, minmax(350px,1fr)); */\n\n    grid-auto-flow: row;\n\n    /* grid-template-rows: repeat(4, 350px); */\n    /* grid-template-rows: 1fr; */\n    /* overflow-y: auto; */\n    overflow: auto;\n\n    /* display: none; */\n    /* object-fit: cover; */\n    \n\n}\n\n.display-empty {\n    justify-self: center;\n    align-self: center;\n    font-size: 30px;\n    font-weight: bolder;\n    font-family: Arial, Helvetica, sans-serif;\n    color: rgba(255, 255, 255, 0.432);\n}\n\n/* .vertical-scroll{\n    overflow: auto;\n    border: 5px solid blue;\n} */\n\n.status-container{\n\n    /* border: 2px solid fuchsia; */\n    overflow: auto;\n    height: 370px;\n    color: white;\n\n}\n\n\n.status-title {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 20px;\n    font-weight: bold;\n    padding: 10px 0px 10px 10px;\n    /* border-bottom: 1px solid rgba( 255, 255, 255, 0.18 ); */\n}\n\n\n\n\n.overdue-container,\n.due-soon-container,\n.upcoming-container,\n.complete-container{\n\n    display: grid;\n    /* border: 4px solid gold; */\n    height: 300px;\n    width: 100%;\n    /* background-color: indigo; */\n    align-items: center;\n    justify-items: start;\n    \n    overflow: auto;\n\n    justify-items: center;\n\n    padding-left: 20px;\n\n    padding-right: 20px;\n\n\n\n\n    border-radius: 10px;\n    background: #004a5700;\n    box-shadow: inset 5px 5px 10px #003f4a,\n                inset -5px -5px 10px #005564;\n\n\n}\n\n\n.overdue-container > .scrollable-container > .todo-container {\n    background-color: rgba(205, 50, 50, 0.329);\n}\n\n\n.due-soon-container > .scrollable-container > .todo-container {\n    background-color: rgba(255, 255, 0, 0.459);\n}\n\n\n.upcoming-container > .scrollable-container > .todo-container {\n    background-color: rgba(2, 0, 128, 0.301);\n}\n\n.complete-container > .scrollable-container > .todo-container {\n    background-color: rgba(0, 128, 0, 0.521);\n}\n\n\n.scrollable-container{\n\n    display: grid;\n    column-gap: 20px;\n    grid-auto-flow: column; /*This was what i wanted to do*/\n    \n    /* border: 4px solid brown; */\n\n}\n\n.todo-container{\n    width: 300px;\n    height: 220px;\n\n    padding: 15px;\n    background: rgba( 255, 255, 255, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    font-family: Arial, Helvetica, sans-serif;\n    \n}\n\n.todo-title-div {\n\n    font-size: 18px;\n    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );\n    margin-bottom: 5px;\n    padding-bottom: 5px;\n    text-overflow: ellipsis;\n    /* text-align: center; */\n    overflow: hidden;\n\n}\n\n\n.todo-desc-div {\n    /* border: 1px solid white; */\n    height: 120px;\n    text-overflow: ellipsis;\n    font-size: 15px;\n    overflow: hidden;\n    word-wrap: break-word;\n    /* border-bottom: 1px solid rgba( 255, 255, 255, 0.18 ); */\n    margin-bottom: 10px;\n    /* padding-bottom: 5px; */\n}\n\n.todo-date-div,\n.todo-project-div {\n    font-size: 13px;\n    text-align: end;\n}\n\n\n\n\n\n\n\n\n\n.todo-display-container {\n    display: grid;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.473);\n    align-items: center;\n    justify-items: center;\n    z-index: 2;\n    left: 0;\n}\n\n.todo-display {\n    \n    background-color: purple;\n    width: 300px;\n    /* height: 550px; */\n    border-radius: 10px;\n    padding: 10px;\n    display: grid;\n    \n}\n\n.main-todo-display {\n\n    \n    grid-template-rows: 40px 1fr 30px 30px 35px 60px 60px;\n\n}\n\n\n#todo-display-title  {\n    appearance: none;\n    /* height: 35px; */\n    width: 100%;\n    padding: 0px 10px 0px 10px;\n    text-align: center;\n    border-radius: 5px;\n    font-size: 16px;\n\n    background: rgba( 2, 2, 2, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n\n}\n\n#todo-display-desc {\n    appearance: none;\n    width: 100%;\n    padding: 10px 10px 0px 10px;\n    border-radius: 5px;\n    font-size: 15px;\n\n    background: rgba( 2, 2, 2, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n#todo-display-date {\n\n    appearance: none;\n    width: 100%;\n    padding: 5px 10px 5px 10px;\n    border-radius: 5px;\n    font-size: 15px;\n    font-family: Arial, Helvetica, sans-serif;\n    /* align-items: center; */\n\n    background: rgba( 2, 2, 2, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n}\n\n#todo-display-remind-in {\n\n    appearance: none;\n    width: 100%;\n    padding: 5px 10px 5px 10px;\n    border-radius: 5px;\n    font-size: 15px;\n    font-family: Arial, Helvetica, sans-serif;\n    /* align-items: center; */\n\n    background: rgba( 2, 2, 2, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n\n\n}\n\n\n\n#project-display-choices {\n    text-align: center;\n\n    /* appearance: none; */\n    width: 100%;\n    border-radius: 5px;\n    font-size: 15px;\n    font-family: Arial, Helvetica, sans-serif;\n    /* align-items: center; */\n\n    background: rgba( 2, 2, 2, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n}\n\n\n\n.first-button-container,\n.second-button-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    align-items: center;\n    justify-items: center;\n}\n\n\n.first-button-container > div {\n    display: grid;\n    justify-items: center;\n    gap: 5px;\n}\n\n.first-button-container > div > label{\n    font-size: 13px;\n}\n\n\n#todo-display-priority,\n#todo-display-status  {\n    justify-self: center;\n    width: 100px;\n    height: 30px;\n    background: rgba( 255, 255, 255, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n    cursor: pointer;\n}\n\n#todo-display-priority:hover,\n#todo-display-status:hover{\n    border: 1px solid rgba(255, 255, 255, 0.589);\n}\n\n\n#todo-update,\n#todo-delete {\n    appearance: none;\n\n    width: 100px;\n    height: 30px;\n    border-radius: 5px;\n\n    /* background: rgba( 255, 255, 255, 0.25 ); */\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n    cursor: pointer;\n\n   \n\n}\n\n\n#todo-delete{\n    background-color: rgba(255, 0, 0, 0.644);\n}\n\n#todo-delete:hover{\n    background-color: rgba(255, 0, 0, 0.863);\n}\n\n#todo-update{\n    background-color: rgba(115, 255, 0, 0.651);\n}\n\n#todo-update:hover{\n    background-color: rgba(115, 255, 0, 0.897);\n}\n\n\n.pop-up-container {\n    background-color: rgba(0, 0, 0, 0.445);\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    z-index: 3;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    \n}\n\n.pop-up {\n    width: 300px;\n    height: 200px;\n    /* background-color: white; */\n    border-radius: 10px;\n    padding: 20px;\n\n    background: rgba( 2, 2, 2, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    display: grid;\n    grid-auto-rows: 1fr 50px;\n}\n\n.pop-up-content-div{\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    text-align: center;\n}\n\n.pop-up-button-container{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    align-items: end;\n\n}\n\n.pop-up-button-container > button {\n    width: 80px;\n    height: 30px;\n    border-radius: 7px;\n}\n\n\n\n\n\n.project-container{\n    width: 320px;\n    height: 250px;\n \n    padding: 15px;\n    background: rgba( 255, 255, 255, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border-radius: 10px;\n\n    display: grid;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    \n}\n\n\n\n.project-title-div {\n\n    font-size: 25px;\n    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );\n    /* margin-bottom: 5px;\n    padding-bottom: 5px; */\n    text-overflow: ellipsis;\n    text-align: center;\n    overflow: hidden;\n    align-self: end;\n    padding-bottom: 10px;\n\n}\n\n\n.project-desc-div {\n    /* border: 1px solid white; */\n    height: 120px;\n    text-overflow: ellipsis;\n    font-size: 15px;\n    overflow: hidden;\n    word-wrap: break-word;\n    /* border-bottom: 1px solid rgba( 255, 255, 255, 0.18 ); */\n    margin-bottom: 10px;\n    padding: 10px;\n    /* padding-bottom: 5px; */\n}\n\n.project-date-div{\n    font-size: 13px;\n    text-align: end;\n    align-self: end;\n}\n\n\n\n\n.project-todo-container {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    /* border: 2px solid dodgerblue; */\n    background-color: rgba(122, 122, 122, 0.582);\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    z-index: 2;\n}\n\n.project-display {\n\n    width: 350px;\n    background-color: rgba(165, 0, 102, 0.705);\n    border-radius: 10px;\n\n\n\n    /* border: 1px solid rgba(255, 255, 255, 0); */\n    \n    /* height: 750px; */\n    /* background-color: darkgreen; */\n    padding: 10px;\n    border-radius: 10px;\n    /* overflow: auto; */\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n\n}\n\n.project-details{\n\n    width: 100%;\n    display: grid;\n    gap: 10px;\n}\n\n#project-title-update{\n    appearance: none;\n    width: 100%;\n    font-size: 15px;\n    font-family: Arial, Helvetica, sans-serif;\n    text-align: center;\n    color: white;\n\n\n    padding: 5px;\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    display: grid;\n}\n\n#project-desc-update {\n    appearance: none;\n    width: 100%;\n\n\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n\n\n    padding: 5px;\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n\n}\n\n#project-date-update{\n\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n\n\n    padding: 5px;\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n\n}\n\n\n#project-reminder-update{\n\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n\n\n    padding: 5px;\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n\n}\n\n.project-buttons-one,\n.project-buttons-two{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    gap: 5px;\n    \n}\n\n.project-buttons-one > div {\n    display: grid;\n    text-align: center;\n    gap: 5px;\n}\n\n.project-buttons-one > div > label {\n    font-size: 12px;\n    /* text-decoration: underline; */\n}\n\n\n.project-buttons-one > div > button,\n.project-buttons-two > button{\n    appearance: none;\n   border-radius: 5px;\n\n\n   padding: 5px;\n   background: rgba( 255, 255, 255, 0.25 );\n   box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n   backdrop-filter: blur( 6.5px );\n   -webkit-backdrop-filter: blur( 6.5px );\n   /* border-radius: 10px; */\n   border: 1px solid rgba(255, 255, 255, 0);\n   color: white;\n\n}\n\n#project-priority-update,\n#project-status-update{\n    color: white;\n    cursor: pointer;\n}\n\n#project-priority-update:hover,\n#project-status-update:hover{\n    border: 1px solid rgba(255, 255, 255, 0.589);\n}\n\n.project-todos{\n\n  \n    width: 100%;\n    height: 400px;\n    background-color: slateblue;\n    overflow: auto;\n    font-family: Arial, Helvetica, sans-serif;\n    /* display: grid; */\n    /* grid-template-rows: 30px 1fr; */\n\n\n    padding: 7px;\n    background: rgba(255, 0, 140, 0.25);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    /* border-radius: 10px; */\n    border-radius: 5px;\n    /* border: 1px solid rgba(255, 255, 255, 0); */\n    /* border: 1px solid rgba(255, 1, 119, 0.76); */\n\n}\n\n#project-delete{\n    background-color: rgba(255, 0, 0, 0.644);\n    cursor: pointer;\n}\n\n#project-update{\n    background-color: rgba(115, 255, 0, 0.651);\n    cursor: pointer;\n}\n\n\n#project-delete:hover{\n    background-color: rgba(255, 0, 0, 0.877);\n}\n\n#project-update:hover{\n    background-color: rgba(115, 255, 0, 0.877);\n}\n\n.priority-title{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 15px;\n    color: white;\n    text-align: center;\n    padding-bottom: 5px;\n}\n\n.todo-project-status-title{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 13px;\n    color: white;\n    text-align: center;\n    /* border: 1px solid rgba(255, 1, 119, 0.76); */\n    border-radius: 10px;\n    padding: 5px;\n\n\n    /* background: rgba(129, 129, 129, 0.25); */\n    /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */\n    /* backdrop-filter: blur( 6.5px ); */\n    /* -webkit-backdrop-filter: blur( 6.5px ); */\n    border-radius: 10px;\n}\n\n\n.todo-in-project-container {\n\n    width: 250px;\n    height: 220px;\n\n    padding: 15px;\n    background: rgba(83, 83, 83, 0.25);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.todo-status-container{\n\n    /* border: 2px solid fuchsia; */\n    overflow: auto;\n    border-radius: 10px;\n    /* height: 100%; */\n    /* height: 350px; */\n    /* grid-auto-flow: column; */\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    /* backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px ); */\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n\n}\n\n.overdue-todos,\n.due-soon-todos,\n.upcoming-todos,\n.complete-todos{\n\n    display: grid;\n    /* border: 4px solid gold; */\n    /* height: 320px; */\n    /* width: 100%;\n    background-color: rgb(56, 56, 255);\n    align-items: start;\n    justify-items: center; */\n    \n    /* overflow: auto; */\n\n\n\n\n    display: grid;\n    /* border: 4px solid gold; */\n    width: 100%;\n    /* background-color: indigo; */\n    align-items: center;\n    justify-items: start;\n    \n    overflow: auto;\n\n    justify-items: center;\n\n    padding: 5px 20px 5px 20px;\n\n}\n\n\n.scrollable-todo-container{\n\n    display: grid;\n    row-gap: 10px;\n    /* height: 400px; */\n    grid-auto-flow: row; /*This was what i wanted to do*/\n    color: white;\n    grid-auto-flow: column;\n\n    gap: 5px;\n    \n    /* border: 4px solid brown; */\n\n}\n\n.yes-button,\n.no-button{\n    background: rgba( 255, 255, 255, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n}\n\n.yes-button{\n    background-color: rgba(115, 255, 0, 0.651);\n}\n\n.no-button{\n    background-color: rgba(255, 0, 0, 0.644);\n}\n\n\n\n\n\n\n.notes-collection{\n\n    display: grid;\n    height: 100%;\n    width: 100%;\n    /* background-color: indigo; */\n    align-items: start;\n    overflow: auto;\n    gap: 15px;\n    grid-template-columns: repeat(auto-fill, minmax(300px,1fr)); \n \n}\n\n\n.notes-container{\n    width: 100%;\n    height: 300px;\n\n    padding: 15px;\n    background: rgba(116, 116, 116, 0.25);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    \n}\n\n.note-display {\n    background-color: rgba(51, 0, 71, 0.651);\n    width: 350px;\n    height: 400px;\n    border-radius: 10px;\n    padding: 10px;\n    display: grid;\n    grid-template-rows: 40px 1fr 40px;\n    gap: 5px;\n\n\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n}\n\n.note-title {\n    font-size: 22px;\n    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );\n    margin-bottom: 5px;\n    padding-bottom: 5px;\n    text-overflow: ellipsis;\n    /* text-align: center; */\n    overflow: hidden;\n    border-radius: 5px;\n}\n\n.note-desc {\n    /* border: 1px solid white; */\n    height: 230px;\n    text-overflow: ellipsis;\n    font-size: 15px;\n    overflow: hidden;\n    word-wrap: break-word;\n    border-radius: 5px;\n\n}\n\n\n.note-button-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: end;\n    justify-items: center;\n}\n\n\n\n\n/* FORM BUTTON */\n\n.form-button-container{\n    position: fixed;\n    bottom: 70px;\n    right: 0;\n    width: 100px;\n    height: 100px;\n    border-radius: 50% 0% 0% 50%;\n    background-color: rgb(9, 48, 92);\n    display: grid;\n    align-items: center;\n    justify-content: center;\n\n\n\n    background: rgba( 0, 0, 0, 0.25 );\nbox-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\nbackdrop-filter: blur( 6.5px );\n-webkit-backdrop-filter: blur( 6.5px );\nborder: 1px solid rgba( 255, 255, 255, 0.18 );\nborder-right: none;\n    \n}\n\n.form-button{\n    width: 70px;\n    height: 70px;\n    border-radius: 50%;\n    font-size: 50px;\n\n\n    background: rgba(82, 82, 82, 0);\n    /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 6.5px );\n    -webkit-backdrop-filter: blur( 6.5px ); */\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    color: white;\n}\n\n\n\n.form-button:hover{\n    background: rgba(82, 82, 82, 0.349);\n}\n\n/* TODO CREATION FORM */\n\n\n.form-container{\n\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(128, 128, 128, 0.527);\n    display: grid;\n    padding-top: 100px;\n    align-items: start;\n    justify-items: center;\n    overflow: auto;\n    padding-bottom: 100px;\n    display: none;\n    z-index: 2;\n    left: 0px;\n\n}\n\n.show-form{\n    display: grid;\n}\n\n.todo-creation-form {\n    /* position: fixed; */\n    width: 300px;\n    /* height: 700px; */\n    /* background-color: maroon; */\n    padding: 10px;\n    /* border-radius: 10px; */\n    display: grid;\n    justify-items: center;\n\n    font-family: Arial, Helvetica, sans-serif;\n\n\n    background: rgba(0, 0, 0, 0.473);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    \n}\n\n.todo-creation-form > form {\n    width: 100%;\n}\n\n#todo-date,\n#project-date{\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n\nfieldset {\n    border: none;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    font-size: 13px;\n   \n}\n\nlegend {\n    margin-bottom: 13px;\n}\n\n\n\n.input-collection{\n    display: grid;\n    gap: 5px;\n    color: white;\n}\n\n.input-container {\n    width: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n    display: grid;\n    gap: 5px;\n}\n\n.radio-input-container {\n    display: grid;\n    gap: 5px;\n    grid-template-columns: 1fr 1fr;\n    accent-color: teal;\n    padding: 5px 0px 5px 0px;\n}\n\n.radio-input-container > div {\n    \n    /* grid-template-rows: 1fr; */\n    /* padding: 5px 0px 5px 0px; */\n    display: grid;\n    grid-template-columns: 40px 1fr;\n    justify-items: end;\n    gap: 5px;\n    \n   \n}\n\n\n\n.radio-input-container > div > label {\n    \n    justify-self: start;\n   \n}\n\n\n\n\n.input-container > input {\n    appearance: none;\n    width: 100%;\n    height: 25px;\n    color: white;\n    padding: 0px 5px 0px 5px;\n\n\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    font-family: Arial, Helvetica, sans-serif;\n\n}\n\n.input-container > textarea {\n    appearance: none;\n    width: 100%;\n\n    /* height: 25px; */\n    color: white;\n    padding: 5px 5px 0px 5px;\n\n    font-family: Arial, Helvetica, sans-serif;\n\n\n    background: rgba( 0, 0, 0, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n}\n\n.todo-creation-title {\n    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );\n    padding: 5px;\n    margin-bottom: 5px;\n}\n\n.project-creation-title {\n    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );\n    padding: 5px;\n}\n\n#todo-priority,\n#project-priority {\n    background: rgba( 255, 255, 255, 0.25 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    height: 25px;\n    color: white;\n    cursor: pointer;\n}\n#todo-priority:hover,\n#project-priority:hover{\n    border: 1px solid rgba(255, 255, 255, 0.753);\n}\n\n.create-new-todo{\n    /* border: 3px solid forestgreen; */\n    display: none;\n}\n\n.select-existing-project{\n    /* border: 3px solid skyblue; */\n    display: none;\n}\n\n.create-new-project{\n    /* border: 3px solid crimson; */\n    display: none;\n}\n\n#project-choices {\n    background: rgba(0, 105, 96, 0.795);\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    height: 25px;\n    color: white;\n    text-align: center;\n}\n\n.display-form-items{\n    display: grid;\n    gap: 5px;\n}\n\n#form-submit{\n    appearance: none;\n    background-color: rgba(0, 255, 21, 0.541);\n\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border-radius: 5px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    height: 25px;\n    color: white;\n    cursor: pointer;\n}\n\n#form-submit:hover{\n    background-color: rgba(0, 255, 21, 0.753);\n}\n\n\n/* Mobile version */\n\n@media screen and (max-width: 600px) {\n    \n\n    .hamburger-menu {\n        display: grid;\n        align-items: center;\n        justify-items: center;\n    }\n\n    .hamburger-menu:active{\n\n\n        background: rgba(0, 0, 0, 0.514);\n        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n        backdrop-filter: blur( 6.5px );\n        -webkit-backdrop-filter: blur( 6.5px );\n    }\n\n    .main-container {\n        /* border: 1px solid blue; */\n        display: grid;\n        grid-template-rows: 70px 1fr 40px;\n        grid-template-columns: 1fr 300px;\n        grid-template-areas: \n        \"top-container top-container\" \n        \"display-container display-container\"\n        \"todo-container-footer todo-container-footer\";\n        padding: 0px 5px 0px 5px;\n    \n    \n    \n    }\n\n    .top-container{\n        border-radius: 0px 0px 10px 10px;\n    }\n\n    .display-container,\n    .collection-container{\n        border-radius: 10px;\n        /* margin: 0px 5px 0px 5px; */\n    }\n\n    .display-container{\n        padding: 5px;\n    }\n\n    \n\n    .note-menu {\n        position: absolute;\n        display: grid;\n        justify-self: end;\n        align-self: end;\n        grid-row: 2/3;\n        grid-column: 2/3;\n        /* height: 90%; */\n        display: none;\n        width: 200px;\n        z-index: 1;\n        border-radius: 15px 0px 0px 15px;\n        /* to correct for main container padding */\n        right: -5px;\n        border: 1px solid rgba( 255, 255, 255, 0.18 );\n        border-right: none;\n        /* border: none; */\n        /* background: rgba(0, 0, 0, 0.473); */\n        background: rgba(0, 0, 0, 0.322);\n    }\n\n    .project-todo-container{\n        left: 0px;\n    }\n\n\n    .all-todos-tab,\n    .all-projects-tab,\n    .all-notes-tab {\n\n        margin-bottom: 10px;\n        border-radius: 10px;\n        padding: 10px;\n        padding-right: 20px;\n        /* font-size: 15px; */\n        text-align: right;\n        \n    }\n\n    .menu-active { /*triggers when hamburger menu is clicked*/\n        display: grid;\n    }\n}"],"sourceRoot":""}]);
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

            todoParagraph.textContent = 'Your collection of Notes are displayed here';

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

            todoParagraph.textContent = 'Your collection of todos are displayed here';

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

            projectParagraph.textContent = 'Your collection of Projects are displayed here';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7QUFJQTtBQUNBOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsNkNBQTZDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksY0FBYyxNQUFNLE9BQU8sUUFBUSxLQUFLLFVBQVUsVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsUUFBUSxVQUFVLFFBQVEsS0FBSyxZQUFZLFlBQVksWUFBWSxhQUFhLE1BQU0sT0FBTyxhQUFhLGFBQWEsYUFBYSxlQUFlLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxRQUFRLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxRQUFRLEtBQUssWUFBWSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxzQkFBc0IsV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLGFBQWEsYUFBYSxnQkFBZ0IsYUFBYSxhQUFhLGFBQWEsZUFBZSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxhQUFhLGFBQWEsYUFBYSxXQUFXLFdBQVcsWUFBWSxlQUFlLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGVBQWUsT0FBTyxRQUFRLFdBQVcsTUFBTSxVQUFVLGNBQWMsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLGFBQWEsT0FBTyxNQUFNLGFBQWEsUUFBUSxPQUFPLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxRQUFRLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxpQkFBaUIsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksUUFBUSxZQUFZLE9BQU8sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsY0FBYyxjQUFjLGNBQWMsYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLGVBQWUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsV0FBVyxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFVBQVUsU0FBUyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLFlBQVksYUFBYSxjQUFjLGlCQUFpQixhQUFhLGFBQWEsTUFBTSxTQUFTLFFBQVEsS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsTUFBTSxVQUFVLFlBQVksMEJBQTBCLGNBQWMsT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsZUFBZSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsV0FBVyxPQUFPLE9BQU8sYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsU0FBUyxLQUFLLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsU0FBUyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxRQUFRLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLFFBQVEsTUFBTSxhQUFhLFdBQVcsVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsYUFBYSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxhQUFhLFNBQVMsTUFBTSxVQUFVLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxhQUFhLFdBQVcsYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksZ0JBQWdCLGNBQWMsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxZQUFZLGFBQWEsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLE1BQU0sWUFBWSxhQUFhLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsUUFBUSxNQUFNLFlBQVksYUFBYSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksUUFBUSxNQUFNLFlBQVksZUFBZSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsZUFBZSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsUUFBUSxNQUFNLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sYUFBYSxjQUFjLE9BQU8sU0FBUyxVQUFVLFlBQVksYUFBYSxRQUFRLFFBQVEsaUJBQWlCLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLFlBQVksYUFBYSxjQUFjLFFBQVEsTUFBTSxVQUFVLFVBQVUsWUFBWSx5QkFBeUIsV0FBVyxhQUFhLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxhQUFhLFFBQVEsS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxVQUFVLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxnQkFBZ0IsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsWUFBWSxPQUFPLE9BQU8sYUFBYSxXQUFXLFNBQVMsS0FBSyxZQUFZLE9BQU8sY0FBYyxPQUFPLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsYUFBYSxlQUFlLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxXQUFXLE9BQU8sS0FBSyxZQUFZLFNBQVMsS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxRQUFRLE1BQU0sYUFBYSxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlB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Q0E7O0FBRUEsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7OztBQUdMOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7Ozs7O0FBS0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7O0FBSUw7O0FBRUE7O0FBRUEsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7OztBQUdBOzs7QUFHQTs7O0FBR0E7OztBQUdBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7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QUFTOzs7O0FBSVQ7Ozs7Ozs7Ozs7QUFVQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxRQUFRLHVEQUFhOztBQUVyQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOzs7O0FBSVQ7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7Ozs7QUFJckI7Ozs7QUFJQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQSxnQkFBZ0Isb0RBQVU7O0FBRTFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7O0FBR0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGdCQUFnQix1REFBYTs7QUFFN0I7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFF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QTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBLCtDQUErQyxzRUFBYzs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7Ozs7QUFLckI7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EscUJBQXFCOztBQUVyQjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLHFCQUFxQjs7OztBQUlyQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQSxZQUFZLDRFQUFjOztBQUUxQixZQUFZLDRFQUFjOztBQUUxQjs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7O0FDbFdjOztBQUV4Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7OztBQUlMOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsK0JBQStCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsNkJBQTZCLFFBQVEsZ0NBQWdDLGFBQWEsK0JBQStCO0FBQ3JNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsd0RBQVc7O0FBRXZELHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7Ozs7QUFNTDs7O0FBR0EsaUVBQWUscUJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7QUMvTXBDO0FBQ3lEOztBQUV6RDs7QUFFQTs7OztBQUlBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7OztBQUlBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxpQ0FBaUM7OztBQUdqQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOzs7QUFHQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxpQ0FBaUM7OztBQUdqQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0EsdURBQXVELHNFQUFjOzs7QUFHckU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsaUNBQWlDOztBQUVqQzs7QUFFQTs7O0FBR0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGdDQUFnQzs7QUFFaEM7O0FBRUE7Ozs7OztBQU1BOzs7OztBQUtBLGdD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QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZ0VBQWdFOzs7QUFHaEU7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7Ozs7OztBQU1BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsZ0VBQWdFOzs7O0FBSWhFOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsZ0VBQWdFOztBQUVoRTs7Ozs7Ozs7QUFRQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7OztBQUc1RDs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7O0FBR0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEOzs7QUFHeEQsNkNBQTZDOzs7QUFHN0M7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBLElBQUksMEVBQVk7O0FBRWhCOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsb0JBQW9CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM2NlO0FBQ25EO0FBQzBEOztBQUUxRDtBQUNBOztBQUUrRzs7QUFFdkU7OztBQUd4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7Ozs7QUFJTCwwQkFBMEIsbUVBQVU7O0FBRXBDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGdDQUFnQywrQkFBK0I7OztBQUcvRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQSxrRUFBa0UsNkVBQWU7O0FBRWpGLHdFQUF3RSw2QkFBNkIsUUFBUSxpQ0FBaUMsYUFBYSwrQkFBK0I7O0FBRTFMOzs7QUFHQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBLGlGQUFpRixlQUFlOztBQUVoRzs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUEsd0NBQXdDLHdEQUFXOztBQUVuRDs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDs7Ozs7QUFLNUQ7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsNERBQTREOztBQUU1RDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLDREQUE0RDs7OztBQUk1RDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNB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bGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVRvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUFjdGl2aXRpZXMvc29ydGluZ01ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL2FsbE5vdGVzRE9NQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL2FsbFRvZG9ET01DcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tQ3JlYXRpb24vZGlzcGxheVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL2Rpc3BsYXlUb2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21DcmVhdGlvbi9kaXNwbGF5VG9kb3NJblByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL2Zvcm1ET01DcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tQ3JlYXRpb24vbWFpbkRPTUNyZWF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21DcmVhdGlvbi9wb3B1bGF0ZURPTU5vdGVDb2xsZWN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21DcmVhdGlvbi9wb3B1bGF0ZURPTVByb2plY3RDb2xsZWN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21DcmVhdGlvbi9wb3B1bGF0ZURPTVRvZG9Db2xsZWN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21DcmVhdGlvbi9wcm9qZWN0c0RPTUNyZWF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YWJPYmplY3RzL2FsbE5vdGVzVGFiLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YWJPYmplY3RzL2FsbFByb2plY3RzVGFiLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YWJPYmplY3RzL2FsbFRvZG9zVGFiLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHl7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYigwLDQsNzgpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxM2RlZywgcmdiYSgwLDQsNzgsMSkgMCUsIHJnYmEoMCw5NywxMDEsMSkgNDclLCByZ2JhKDAsMTA0LDEyNSwxKSAxMDAlKTtcblxuICAgIC8qIGJhY2tncm91bmQ6IHJnYigyMzgsMTc0LDIwMik7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMzgsMTc0LDIwMiwxKSAwJSwgcmdiYSgxNDgsMTg3LDIzMywxKSAxMDAlKTsgKi9cbn1cblxuXG50ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG5cblxuXG4ubWFpbi1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDVweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyIDQwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcInRvcC1jb250YWluZXIgdG9wLWNvbnRhaW5lclwiIFxuICAgIFwibm90ZS1tZW51IGRpc3BsYXktY29udGFpbmVyXCJcbiAgICBcInRvZG8tY29udGFpbmVyLWZvb3RlciB0b2RvLWNvbnRhaW5lci1mb290ZXJcIjtcblxuICAgIFxuXG59XG5cblxuLm5vdGUtbWVudXtcbiAgICBncmlkLWFyZWE6IG5vdGUtbWVudTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgLyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7ICovXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNnB4ICk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuXG5cbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDtcbn1cblxuLm5vdGUtbWVudSA+IGRpdiA+IGgxIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG4udGFiLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIHJlZDsgKi9cbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udGFiLWNvbnRhaW5lciA+IGRpdjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWxsLXRvZG9zLXRhYixcbi5hbGwtcHJvamVjdHMtdGFiLFxuLmFsbC1ub3Rlcy10YWIge1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLyogcGFkZGluZy1sZWZ0OiAyMHB4OyAqL1xuICAgIC8qIGZvbnQtc2l6ZTogMTVweDsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuXG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzOSwgMTM5LCAxMzksIDAuMjUpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUxNCk7XG5cbn1cblxuXG4ubWVudS10YWItYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMjIxLCAwLjM3KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI0NywgMjU1LCAwLjU4Mik7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cbi50b3AtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgZ3JpZC1hcmVhOiB0b3AtY29udGFpbmVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi50b3AtY29udGFpbmVyLXNwYWNpbmcge1xuICAgIGZsZXg6IDE7XG59XG5cbi5icmFuZC1jb250YWluZXIge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYyMyk7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cblxuLmhhbWJ1cmdlci1tZW51IHtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7ICovXG4gICAgd2lkdGg6IDcwcHg7XG4gICAgZGlzcGxheTogbm9uZTsgLypkaXNwbGF5OiBibG9jayB3aGVuIGRpc3BsYXkgaXMgYmVsb3cgNjAwcHggKi8gXG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuXG5cblxuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDBweDtcblxuICAgIFxufVxuXG4uaGFtYnVyZ2VyLW1lbnUgPiBpbWcge1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4uaGFtYnVyZ2VyLW1lbnUgPiBpbWc6aG92ZXIge1xuICAgIHdpZHRoOiA2MHB4O1xufVxuXG4uaGFtYnVyZ2VyLW1lbnUgPiBpbWc6YWN0aXZlIHtcbiAgICB3aWR0aDogNjBweDtcbn1cblxuLmRpc3BsYXktY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGdyaWQtYXJlYTogZGlzcGxheS1jb250YWluZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNjBweCAxZnI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XG5cblxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cblxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcblxuXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgXCJ0b2RvLWNvbnRhaW5lci10aXRsZVwiXG4gICAgXCJjb2xsZWN0aW9uLWNvbnRhaW5lclwiO1xuXG59XG5cblxuXG5cblxuLnRvZG8tY29udGFpbmVyLXRpdGxle1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IHRvZG8tY29udGFpbmVyLXRpdGxlO1xuICAgIFxuICAgIFxufVxuLnByaW9yaXR5LWJ1dHRvbnN7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuXG59XG5cbi5wcmlvcml0eS1idXR0b25zID4gYnV0dG9uOmhvdmVyIHtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NTkpO1xuXG59XG5cblxuLmhpZ2gtcHJpb3JpdHksXG4ubWVkaXVtLXByaW9yaXR5LFxuLmxvdy1wcmlvcml0eXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb2xpdmVncmVlbjtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1Myk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hvc2VuLXByaW9yaXR5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTk5LCAzMywgMC41NjIpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhpZ2gtcHJpb3JpdHktY2hvc2VuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAwLCAwKTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5tZWRpdW0tcHJpb3JpdHktY2hvc2VuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjQsIDApO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmxvdy1wcmlvcml0eS1jaG9zZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyMTQsIDApO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnRhYi10aXRsZXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMik7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4udGFiLXRpdGxlID4gaDEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMik7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAvKiBtYXJnaW4tYm90dG9tOiA1MHB4OyAqL1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogMjAwcHg7XG59XG5cblxuLnRvZG8tY29udGFpbmVyLWZvb3RlcntcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiB0b2RvLWNvbnRhaW5lci1mb290ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVibHVlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG5cblxuXG4gICAgYmFja2dyb3VuZDogcmdiYSggMCwgMCwgMCwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XG59XG5cbi5saW5rLWNvbnRhaW5lciA+IGEge1xuXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzIpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbn1cblxuXG4vKiBUaGlzIGlzIHRoZSB0cmlja3kgcGFydCAqL1xuLmNvbGxlY3Rpb24tY29udGFpbmVye1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCByZWQ7ICovXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47ICovXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLWFyZWE6IGNvbGxlY3Rpb24tY29udGFpbmVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggMTBweDtcbiAgICBcblxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LDFmcikpOyAqL1xuXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcblxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDM1MHB4KTsgKi9cbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjsgKi9cbiAgICAvKiBvdmVyZmxvdy15OiBhdXRvOyAqL1xuICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cbiAgICAvKiBvYmplY3QtZml0OiBjb3ZlcjsgKi9cbiAgICBcblxufVxuXG4uZGlzcGxheS1lbXB0eSB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKTtcbn1cblxuLyogLnZlcnRpY2FsLXNjcm9sbHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibHVlO1xufSAqL1xuXG4uc3RhdHVzLWNvbnRhaW5lcntcblxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGZ1Y2hzaWE7ICovXG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiAzNzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG5cbn1cblxuXG4uc3RhdHVzLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAxMHB4O1xuICAgIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7ICovXG59XG5cblxuXG5cbi5vdmVyZHVlLWNvbnRhaW5lcixcbi5kdWUtc29vbi1jb250YWluZXIsXG4udXBjb21pbmctY29udGFpbmVyLFxuLmNvbXBsZXRlLWNvbnRhaW5lcntcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogYm9yZGVyOiA0cHggc29saWQgZ29sZDsgKi9cbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGluZGlnbzsgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xuICAgIFxuICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcblxuXG5cblxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzAwNGE1NzAwO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDVweCA1cHggMTBweCAjMDAzZjRhLFxuICAgICAgICAgICAgICAgIGluc2V0IC01cHggLTVweCAxMHB4ICMwMDU1NjQ7XG5cblxufVxuXG5cbi5vdmVyZHVlLWNvbnRhaW5lciA+IC5zY3JvbGxhYmxlLWNvbnRhaW5lciA+IC50b2RvLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDUsIDUwLCA1MCwgMC4zMjkpO1xufVxuXG5cbi5kdWUtc29vbi1jb250YWluZXIgPiAuc2Nyb2xsYWJsZS1jb250YWluZXIgPiAudG9kby1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuNDU5KTtcbn1cblxuXG4udXBjb21pbmctY29udGFpbmVyID4gLnNjcm9sbGFibGUtY29udGFpbmVyID4gLnRvZG8tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDAsIDEyOCwgMC4zMDEpO1xufVxuXG4uY29tcGxldGUtY29udGFpbmVyID4gLnNjcm9sbGFibGUtY29udGFpbmVyID4gLnRvZG8tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC41MjEpO1xufVxuXG5cbi5zY3JvbGxhYmxlLWNvbnRhaW5lcntcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgY29sdW1uLWdhcDogMjBweDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uOyAvKlRoaXMgd2FzIHdoYXQgaSB3YW50ZWQgdG8gZG8qL1xuICAgIFxuICAgIC8qIGJvcmRlcjogNHB4IHNvbGlkIGJyb3duOyAqL1xuXG59XG5cbi50b2RvLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAyMjBweDtcblxuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBcbn1cblxuLnRvZG8tdGl0bGUtZGl2IHtcblxuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG59XG5cblxuLnRvZG8tZGVzYy1kaXYge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7ICovXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAvKiBwYWRkaW5nLWJvdHRvbTogNXB4OyAqL1xufVxuXG4udG9kby1kYXRlLWRpdixcbi50b2RvLXByb2plY3QtZGl2IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG5cblxuXG5cblxuXG5cblxuLnRvZG8tZGlzcGxheS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDczKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAyO1xuICAgIGxlZnQ6IDA7XG59XG5cbi50b2RvLWRpc3BsYXkge1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgLyogaGVpZ2h0OiA1NTBweDsgKi9cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBcbn1cblxuLm1haW4tdG9kby1kaXNwbGF5IHtcblxuICAgIFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCAxZnIgMzBweCAzMHB4IDM1cHggNjBweCA2MHB4O1xuXG59XG5cblxuI3RvZG8tZGlzcGxheS10aXRsZSAge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLyogaGVpZ2h0OiAzNXB4OyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgYmFja2dyb3VuZDogcmdiYSggMiwgMiwgMiwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbn1cblxuI3RvZG8tZGlzcGxheS1kZXNjIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuXG4gICAgYmFja2dyb3VuZDogcmdiYSggMiwgMiwgMiwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbiN0b2RvLWRpc3BsYXktZGF0ZSB7XG5cbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cblxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDIsIDIsIDIsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jdG9kby1kaXNwbGF5LXJlbWluZC1pbiB7XG5cbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cblxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDIsIDIsIDIsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgY29sb3I6IHdoaXRlO1xuXG5cbn1cblxuXG5cbiNwcm9qZWN0LWRpc3BsYXktY2hvaWNlcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLyogYXBwZWFyYW5jZTogbm9uZTsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyLCAyLCAyLCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5cbi5maXJzdC1idXR0b24tY29udGFpbmVyLFxuLnNlY29uZC1idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLmZpcnN0LWJ1dHRvbi1jb250YWluZXIgPiBkaXYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xufVxuXG4uZmlyc3QtYnV0dG9uLWNvbnRhaW5lciA+IGRpdiA+IGxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuXG4jdG9kby1kaXNwbGF5LXByaW9yaXR5LFxuI3RvZG8tZGlzcGxheS1zdGF0dXMgIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiN0b2RvLWRpc3BsYXktcHJpb3JpdHk6aG92ZXIsXG4jdG9kby1kaXNwbGF5LXN0YXR1czpob3ZlcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTg5KTtcbn1cblxuXG4jdG9kby11cGRhdGUsXG4jdG9kby1kZWxldGUge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgIC8qIGJhY2tncm91bmQ6IHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMjUgKTsgKi9cbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgIFxuXG59XG5cblxuI3RvZG8tZGVsZXRle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjY0NCk7XG59XG5cbiN0b2RvLWRlbGV0ZTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC44NjMpO1xufVxuXG4jdG9kby11cGRhdGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDI1NSwgMCwgMC42NTEpO1xufVxuXG4jdG9kby11cGRhdGU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDI1NSwgMCwgMC44OTcpO1xufVxuXG5cbi5wb3AtdXAtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDQ1KTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBcbn1cblxuLnBvcC11cCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgYmFja2dyb3VuZDogcmdiYSggMiwgMiwgMiwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tcm93czogMWZyIDUwcHg7XG59XG5cbi5wb3AtdXAtY29udGVudC1kaXZ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wb3AtdXAtYnV0dG9uLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcblxufVxuXG4ucG9wLXVwLWJ1dHRvbi1jb250YWluZXIgPiBidXR0b24ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cblxuXG5cblxuLnByb2plY3QtY29udGFpbmVye1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuIFxuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgXG59XG5cblxuXG4ucHJvamVjdC10aXRsZS1kaXYge1xuXG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgLyogbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7ICovXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYWxpZ24tc2VsZjogZW5kO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG59XG5cblxuLnByb2plY3QtZGVzYy1kaXYge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7ICovXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC8qIHBhZGRpbmctYm90dG9tOiA1cHg7ICovXG59XG5cbi5wcm9qZWN0LWRhdGUtZGl2e1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgYWxpZ24tc2VsZjogZW5kO1xufVxuXG5cblxuXG4ucHJvamVjdC10b2RvLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIyLCAxMjIsIDEyMiwgMC41ODIpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMjtcbn1cblxuLnByb2plY3QtZGlzcGxheSB7XG5cbiAgICB3aWR0aDogMzUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsIDAsIDEwMiwgMC43MDUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cblxuXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTsgKi9cbiAgICBcbiAgICAvKiBoZWlnaHQ6IDc1MHB4OyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjsgKi9cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuXG59XG5cbi5wcm9qZWN0LWRldGFpbHN7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMTBweDtcbn1cblxuI3Byb2plY3QtdGl0bGUtdXBkYXRle1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG5cblxuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4jcHJvamVjdC1kZXNjLXVwZGF0ZSB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcblxuXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xuXG5cbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSggMCwgMCwgMCwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG5cbn1cblxuI3Byb2plY3QtZGF0ZS11cGRhdGV7XG5cbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG5cblxuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcblxufVxuXG5cbiNwcm9qZWN0LXJlbWluZGVyLXVwZGF0ZXtcblxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuXG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuXG59XG5cbi5wcm9qZWN0LWJ1dHRvbnMtb25lLFxuLnByb2plY3QtYnV0dG9ucy10d297XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGdhcDogNXB4O1xuICAgIFxufVxuXG4ucHJvamVjdC1idXR0b25zLW9uZSA+IGRpdiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5wcm9qZWN0LWJ1dHRvbnMtb25lID4gZGl2ID4gbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgKi9cbn1cblxuXG4ucHJvamVjdC1idXR0b25zLW9uZSA+IGRpdiA+IGJ1dHRvbixcbi5wcm9qZWN0LWJ1dHRvbnMtdHdvID4gYnV0dG9ue1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICBib3JkZXItcmFkaXVzOiA1cHg7XG5cblxuICAgcGFkZGluZzogNXB4O1xuICAgYmFja2dyb3VuZDogcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4yNSApO1xuICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XG4gICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXG4gICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICAgY29sb3I6IHdoaXRlO1xuXG59XG5cbiNwcm9qZWN0LXByaW9yaXR5LXVwZGF0ZSxcbiNwcm9qZWN0LXN0YXR1cy11cGRhdGV7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3Byb2plY3QtcHJpb3JpdHktdXBkYXRlOmhvdmVyLFxuI3Byb2plY3Qtc3RhdHVzLXVwZGF0ZTpob3ZlcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTg5KTtcbn1cblxuLnByb2plY3QtdG9kb3N7XG5cbiAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWJsdWU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgLyogZGlzcGxheTogZ3JpZDsgKi9cbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMWZyOyAqL1xuXG5cbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDE0MCwgMC4yNSk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7ICovXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDEsIDExOSwgMC43Nik7ICovXG5cbn1cblxuI3Byb2plY3QtZGVsZXRle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjY0NCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcHJvamVjdC11cGRhdGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDI1NSwgMCwgMC42NTEpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4jcHJvamVjdC1kZWxldGU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuODc3KTtcbn1cblxuI3Byb2plY3QtdXBkYXRlOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE1LCAyNTUsIDAsIDAuODc3KTtcbn1cblxuLnByaW9yaXR5LXRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi50b2RvLXByb2plY3Qtc3RhdHVzLXRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAxLCAxMTksIDAuNzYpOyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuXG5cbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDEyOSwgMTI5LCAxMjksIDAuMjUpOyAqL1xuICAgIC8qIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApOyAqL1xuICAgIC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTsgKi9cbiAgICAvKiAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTsgKi9cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5cbi50b2RvLWluLXByb2plY3QtY29udGFpbmVyIHtcblxuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDIyMHB4O1xuXG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDgzLCA4MywgODMsIDAuMjUpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLnRvZG8tc3RhdHVzLWNvbnRhaW5lcntcblxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGZ1Y2hzaWE7ICovXG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gICAgLyogaGVpZ2h0OiAzNTBweDsgKi9cbiAgICAvKiBncmlkLWF1dG8tZmxvdzogY29sdW1uOyAqL1xuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTsgKi9cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcblxufVxuXG4ub3ZlcmR1ZS10b2Rvcyxcbi5kdWUtc29vbi10b2Rvcyxcbi51cGNvbWluZy10b2Rvcyxcbi5jb21wbGV0ZS10b2Rvc3tcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogYm9yZGVyOiA0cHggc29saWQgZ29sZDsgKi9cbiAgICAvKiBoZWlnaHQ6IDMyMHB4OyAqL1xuICAgIC8qIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNTYsIDI1NSk7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgKi9cbiAgICBcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cblxuXG5cblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogYm9yZGVyOiA0cHggc29saWQgZ29sZDsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcbiAgICBcbiAgICBvdmVyZmxvdzogYXV0bztcblxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxuICAgIHBhZGRpbmc6IDVweCAyMHB4IDVweCAyMHB4O1xuXG59XG5cblxuLnNjcm9sbGFibGUtdG9kby1jb250YWluZXJ7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHJvdy1nYXA6IDEwcHg7XG4gICAgLyogaGVpZ2h0OiA0MDBweDsgKi9cbiAgICBncmlkLWF1dG8tZmxvdzogcm93OyAvKlRoaXMgd2FzIHdoYXQgaSB3YW50ZWQgdG8gZG8qL1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuXG4gICAgZ2FwOiA1cHg7XG4gICAgXG4gICAgLyogYm9yZGVyOiA0cHggc29saWQgYnJvd247ICovXG5cbn1cblxuLnllcy1idXR0b24sXG4ubm8tYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMjUgKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi55ZXMtYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE1LCAyNTUsIDAsIDAuNjUxKTtcbn1cblxuLm5vLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42NDQpO1xufVxuXG5cblxuXG5cblxuLm5vdGVzLWNvbGxlY3Rpb257XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287ICovXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGdhcDogMTVweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwxZnIpKTsgXG4gXG59XG5cblxuLm5vdGVzLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuXG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDExNiwgMTE2LCAxMTYsIDAuMjUpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgXG59XG5cbi5ub3RlLWRpc3BsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDAsIDcxLCAwLjY1MSk7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmciA0MHB4O1xuICAgIGdhcDogNXB4O1xuXG5cbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbn1cblxuLm5vdGUtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm5vdGUtZGVzYyB7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXG4gICAgaGVpZ2h0OiAyMzBweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG59XG5cblxuLm5vdGUtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuXG5cbi8qIEZPUk0gQlVUVE9OICovXG5cbi5mb3JtLWJ1dHRvbi1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNzBweDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgMCUgMCUgNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCA0OCwgOTIpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuXG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XG5ib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbmJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbi13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIFxufVxuXG4uZm9ybS1idXR0b257XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemU6IDUwcHg7XG5cblxuICAgIGJhY2tncm91bmQ6IHJnYmEoODIsIDgyLCA4MiwgMCk7XG4gICAgLyogYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApOyAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuXG4uZm9ybS1idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogcmdiYSg4MiwgODIsIDgyLCAwLjM0OSk7XG59XG5cbi8qIFRPRE8gQ1JFQVRJT04gRk9STSAqL1xuXG5cbi5mb3JtLWNvbnRhaW5lcntcblxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUyNyk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGxlZnQ6IDBweDtcblxufVxuXG4uc2hvdy1mb3Jte1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi50b2RvLWNyZWF0aW9uLWZvcm0ge1xuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cbiAgICB3aWR0aDogMzAwcHg7XG4gICAgLyogaGVpZ2h0OiA3MDBweDsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBtYXJvb247ICovXG4gICAgcGFkZGluZzogMTBweDtcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5cblxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40NzMpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIFxufVxuXG4udG9kby1jcmVhdGlvbi1mb3JtID4gZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiN0b2RvLWRhdGUsXG4jcHJvamVjdC1kYXRle1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5cbmZpZWxkc2V0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgXG59XG5cbmxlZ2VuZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcbn1cblxuXG5cbi5pbnB1dC1jb2xsZWN0aW9ue1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW5wdXQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogNXB4O1xufVxuXG4ucmFkaW8taW5wdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogNXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBhY2NlbnQtY29sb3I6IHRlYWw7XG4gICAgcGFkZGluZzogNXB4IDBweCA1cHggMHB4O1xufVxuXG4ucmFkaW8taW5wdXQtY29udGFpbmVyID4gZGl2IHtcbiAgICBcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjsgKi9cbiAgICAvKiBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7ICovXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcbiAgICBnYXA6IDVweDtcbiAgICBcbiAgIFxufVxuXG5cblxuLnJhZGlvLWlucHV0LWNvbnRhaW5lciA+IGRpdiA+IGxhYmVsIHtcbiAgICBcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgXG59XG5cblxuXG5cbi5pbnB1dC1jb250YWluZXIgPiBpbnB1dCB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweDtcblxuXG4gICAgYmFja2dyb3VuZDogcmdiYSggMCwgMCwgMCwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5cbn1cblxuLmlucHV0LWNvbnRhaW5lciA+IHRleHRhcmVhIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLyogaGVpZ2h0OiAyNXB4OyAqL1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHggNXB4IDBweCA1cHg7XG5cbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcblxuXG4gICAgYmFja2dyb3VuZDogcmdiYSggMCwgMCwgMCwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG59XG5cbi50b2RvLWNyZWF0aW9uLXRpdGxlIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5wcm9qZWN0LWNyZWF0aW9uLXRpdGxlIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuI3RvZG8tcHJpb3JpdHksXG4jcHJvamVjdC1wcmlvcml0eSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4yNSApO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jdG9kby1wcmlvcml0eTpob3ZlcixcbiNwcm9qZWN0LXByaW9yaXR5OmhvdmVye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NTMpO1xufVxuXG4uY3JlYXRlLW5ldy10b2Rve1xuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIGZvcmVzdGdyZWVuOyAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zZWxlY3QtZXhpc3RpbmctcHJvamVjdHtcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBza3libHVlOyAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jcmVhdGUtbmV3LXByb2plY3R7XG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgY3JpbXNvbjsgKi9cbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jcHJvamVjdC1jaG9pY2VzIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEwNSwgOTYsIDAuNzk1KTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGlzcGxheS1mb3JtLWl0ZW1ze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiA1cHg7XG59XG5cbiNmb3JtLXN1Ym1pdHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAyMSwgMC41NDEpO1xuXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2Zvcm0tc3VibWl0OmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAyMSwgMC43NTMpO1xufVxuXG5cbi8qIE1vYmlsZSB2ZXJzaW9uICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgXG5cbiAgICAuaGFtYnVyZ2VyLW1lbnUge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmhhbWJ1cmdlci1tZW51OmFjdGl2ZXtcblxuXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MTQpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xuICAgICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcbiAgICB9XG5cbiAgICAubWFpbi1jb250YWluZXIge1xuICAgICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyIDQwcHg7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDMwMHB4O1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgXCJ0b3AtY29udGFpbmVyIHRvcC1jb250YWluZXJcIiBcbiAgICAgICAgXCJkaXNwbGF5LWNvbnRhaW5lciBkaXNwbGF5LWNvbnRhaW5lclwiXG4gICAgICAgIFwidG9kby1jb250YWluZXItZm9vdGVyIHRvZG8tY29udGFpbmVyLWZvb3RlclwiO1xuICAgICAgICBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHg7XG4gICAgXG4gICAgXG4gICAgXG4gICAgfVxuXG4gICAgLnRvcC1jb250YWluZXJ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xuICAgIH1cblxuICAgIC5kaXNwbGF5LWNvbnRhaW5lcixcbiAgICAuY29sbGVjdGlvbi1jb250YWluZXJ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIC8qIG1hcmdpbjogMHB4IDVweCAwcHggNXB4OyAqL1xuICAgIH1cblxuICAgIC5kaXNwbGF5LWNvbnRhaW5lcntcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cblxuICAgIFxuXG4gICAgLm5vdGUtbWVudSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgICAgICAgZ3JpZC1yb3c6IDIvMztcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICAgICAgLyogaGVpZ2h0OiA5MCU7ICovXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweCAwcHggMHB4IDE1cHg7XG4gICAgICAgIC8qIHRvIGNvcnJlY3QgZm9yIG1haW4gY29udGFpbmVyIHBhZGRpbmcgKi9cbiAgICAgICAgcmlnaHQ6IC01cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICAvKiBib3JkZXI6IG5vbmU7ICovXG4gICAgICAgIC8qIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40NzMpOyAqL1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzIyKTtcbiAgICB9XG5cbiAgICAucHJvamVjdC10b2RvLWNvbnRhaW5lcntcbiAgICAgICAgbGVmdDogMHB4O1xuICAgIH1cblxuXG4gICAgLmFsbC10b2Rvcy10YWIsXG4gICAgLmFsbC1wcm9qZWN0cy10YWIsXG4gICAgLmFsbC1ub3Rlcy10YWIge1xuXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIC8qIGZvbnQtc2l6ZTogMTVweDsgKi9cbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC5tZW51LWFjdGl2ZSB7IC8qdHJpZ2dlcnMgd2hlbiBoYW1idXJnZXIgbWVudSBpcyBjbGlja2VkKi9cbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUdBQW1HOztJQUVuRzs0RkFDd0Y7QUFDNUY7OztBQUdBO0lBQ0ksWUFBWTtBQUNoQjs7Ozs7QUFLQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixRQUFRO0lBQ1IsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQzs7O2lEQUc2Qzs7OztBQUlqRDs7O0FBR0E7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTs7SUFFWixpQ0FBaUM7SUFDakMsa0RBQWtEO0lBQ2xEOzJDQUN1QztJQUN2Qyw0QkFBNEI7SUFDNUIsb0NBQW9DO0lBQ3BDLDZDQUE2QztJQUM3QyxpQkFBaUI7OztJQUdqQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxrREFBa0Q7SUFDbEQsNEJBQTRCO0lBQzVCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsNkNBQTZDO0lBQzdDLGVBQWU7QUFDbkI7O0FBRUE7Ozs7SUFJSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsZUFBZTs7O0lBR2YscUNBQXFDO0lBQ3JDLGtEQUFrRDtJQUNsRCw4QkFBOEI7SUFDOUIsc0NBQXNDO0lBQ3RDLG1CQUFtQjtJQUNuQiw2Q0FBNkM7SUFDN0MsaUNBQWlDOztBQUVyQzs7O0FBR0E7SUFDSSx5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O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHl7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLDQsNzgpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTNkZWcsIHJnYmEoMCw0LDc4LDEpIDAlLCByZ2JhKDAsOTcsMTAxLDEpIDQ3JSwgcmdiYSgwLDEwNCwxMjUsMSkgMTAwJSk7XFxuXFxuICAgIC8qIGJhY2tncm91bmQ6IHJnYigyMzgsMTc0LDIwMik7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjM4LDE3NCwyMDIsMSkgMCUsIHJnYmEoMTQ4LDE4NywyMzMsMSkgMTAwJSk7ICovXFxufVxcblxcblxcbnRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5cXG5cXG5cXG4ubWFpbi1jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmciA0MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwidG9wLWNvbnRhaW5lciB0b3AtY29udGFpbmVyXFxcIiBcXG4gICAgXFxcIm5vdGUtbWVudSBkaXNwbGF5LWNvbnRhaW5lclxcXCJcXG4gICAgXFxcInRvZG8tY29udGFpbmVyLWZvb3RlciB0b2RvLWNvbnRhaW5lci1mb290ZXJcXFwiO1xcblxcbiAgICBcXG5cXG59XFxuXFxuXFxuLm5vdGUtbWVudXtcXG4gICAgZ3JpZC1hcmVhOiBub3RlLW1lbnU7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSggMCwgMCwgMCwgMC4yNSApO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgLyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApOyAqL1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDZweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNnB4ICk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuXFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxNXB4IDE1cHggMHB4O1xcbn1cXG5cXG4ubm90ZS1tZW51ID4gZGl2ID4gaDEge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLnRhYi1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIHJlZDsgKi9cXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRhYi1jb250YWluZXIgPiBkaXY6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hbGwtdG9kb3MtdGFiLFxcbi5hbGwtcHJvamVjdHMtdGFiLFxcbi5hbGwtbm90ZXMtdGFiIHtcXG5cXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgLyogcGFkZGluZy1sZWZ0OiAyMHB4OyAqL1xcbiAgICAvKiBmb250LXNpemU6IDE1cHg7ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG5cXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMzksIDEzOSwgMTM5LCAwLjI1KTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MTQpO1xcblxcbn1cXG5cXG5cXG4ubWVudS10YWItYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDIyMSwgMC4zNyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjQ3LCAyNTUsIDAuNTgyKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG4udG9wLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgZ3JpZC1hcmVhOiB0b3AtY29udGFpbmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbn1cXG5cXG4udG9wLWNvbnRhaW5lci1zcGFjaW5nIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmJyYW5kLWNvbnRhaW5lciB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MjMpO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuLmhhbWJ1cmdlci1tZW51IHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApOyAqL1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgZGlzcGxheTogbm9uZTsgLypkaXNwbGF5OiBibG9jayB3aGVuIGRpc3BsYXkgaXMgYmVsb3cgNjAwcHggKi8gXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSggMCwgMCwgMCwgMC4yNSApO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG5cXG5cXG5cXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMHB4O1xcblxcbiAgICBcXG59XFxuXFxuLmhhbWJ1cmdlci1tZW51ID4gaW1nIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5oYW1idXJnZXItbWVudSA+IGltZzpob3ZlciB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4uaGFtYnVyZ2VyLW1lbnUgPiBpbWc6YWN0aXZlIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi5kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgZ3JpZC1hcmVhOiBkaXNwbGF5LWNvbnRhaW5lcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTYwcHggMWZyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcXG5cXG5cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG5cXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJ0b2RvLWNvbnRhaW5lci10aXRsZVxcXCJcXG4gICAgXFxcImNvbGxlY3Rpb24tY29udGFpbmVyXFxcIjtcXG5cXG59XFxuXFxuXFxuXFxuXFxuXFxuLnRvZG8tY29udGFpbmVyLXRpdGxle1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IHRvZG8tY29udGFpbmVyLXRpdGxlO1xcbiAgICBcXG4gICAgXFxufVxcbi5wcmlvcml0eS1idXR0b25ze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFxufVxcblxcbi5wcmlvcml0eS1idXR0b25zID4gYnV0dG9uOmhvdmVyIHtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1OSk7XFxuXFxufVxcblxcblxcbi5oaWdoLXByaW9yaXR5LFxcbi5tZWRpdW0tcHJpb3JpdHksXFxuLmxvdy1wcmlvcml0eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya29saXZlZ3JlZW47XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUzKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hvc2VuLXByaW9yaXR5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE5OSwgMzMsIDAuNTYyKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGlnaC1wcmlvcml0eS1jaG9zZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAwLCAwKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubWVkaXVtLXByaW9yaXR5LWNob3NlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyNCwgMCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmxvdy1wcmlvcml0eS1jaG9zZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjE0LCAwKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGFiLXRpdGxle1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMik7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnRhYi10aXRsZSA+IGgxIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMik7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIC8qIG1hcmdpbi1ib3R0b206IDUwcHg7ICovXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG5cXG4udG9kby1jb250YWluZXItZm9vdGVye1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IHRvZG8tY29udGFpbmVyLWZvb3RlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVibHVlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxuXFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XFxufVxcblxcbi5saW5rLWNvbnRhaW5lciA+IGEge1xcblxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzIpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG59XFxuXFxuXFxuLyogVGhpcyBpcyB0aGUgdHJpY2t5IHBhcnQgKi9cXG4uY29sbGVjdGlvbi1jb250YWluZXJ7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgcmVkOyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtYXJlYTogY29sbGVjdGlvbi1jb250YWluZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMHB4IDEwcHg7XFxuICAgIFxcblxcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNTBweCwxZnIpKTsgKi9cXG5cXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG5cXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMzUwcHgpOyAqL1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjsgKi9cXG4gICAgLyogb3ZlcmZsb3cteTogYXV0bzsgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxuICAgIC8qIG9iamVjdC1maXQ6IGNvdmVyOyAqL1xcbiAgICBcXG5cXG59XFxuXFxuLmRpc3BsYXktZW1wdHkge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMik7XFxufVxcblxcbi8qIC52ZXJ0aWNhbC1zY3JvbGx7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibHVlO1xcbn0gKi9cXG5cXG4uc3RhdHVzLWNvbnRhaW5lcntcXG5cXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZnVjaHNpYTsgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGhlaWdodDogMzcwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuXFxuXFxuLnN0YXR1cy10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDEwcHg7XFxuICAgIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7ICovXFxufVxcblxcblxcblxcblxcbi5vdmVyZHVlLWNvbnRhaW5lcixcXG4uZHVlLXNvb24tY29udGFpbmVyLFxcbi51cGNvbWluZy1jb250YWluZXIsXFxuLmNvbXBsZXRlLWNvbnRhaW5lcntcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogYm9yZGVyOiA0cHggc29saWQgZ29sZDsgKi9cXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGluZGlnbzsgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICAgIFxcbiAgICBvdmVyZmxvdzogYXV0bztcXG5cXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuXFxuXFxuXFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICMwMDRhNTcwMDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgNXB4IDVweCAxMHB4ICMwMDNmNGEsXFxuICAgICAgICAgICAgICAgIGluc2V0IC01cHggLTVweCAxMHB4ICMwMDU1NjQ7XFxuXFxuXFxufVxcblxcblxcbi5vdmVyZHVlLWNvbnRhaW5lciA+IC5zY3JvbGxhYmxlLWNvbnRhaW5lciA+IC50b2RvLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA1LCA1MCwgNTAsIDAuMzI5KTtcXG59XFxuXFxuXFxuLmR1ZS1zb29uLWNvbnRhaW5lciA+IC5zY3JvbGxhYmxlLWNvbnRhaW5lciA+IC50b2RvLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuNDU5KTtcXG59XFxuXFxuXFxuLnVwY29taW5nLWNvbnRhaW5lciA+IC5zY3JvbGxhYmxlLWNvbnRhaW5lciA+IC50b2RvLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMCwgMTI4LCAwLjMwMSk7XFxufVxcblxcbi5jb21wbGV0ZS1jb250YWluZXIgPiAuc2Nyb2xsYWJsZS1jb250YWluZXIgPiAudG9kby1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC41MjEpO1xcbn1cXG5cXG5cXG4uc2Nyb2xsYWJsZS1jb250YWluZXJ7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGNvbHVtbi1nYXA6IDIwcHg7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47IC8qVGhpcyB3YXMgd2hhdCBpIHdhbnRlZCB0byBkbyovXFxuICAgIFxcbiAgICAvKiBib3JkZXI6IDRweCBzb2xpZCBicm93bjsgKi9cXG5cXG59XFxuXFxuLnRvZG8tY29udGFpbmVye1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMjIwcHg7XFxuXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIFxcbn1cXG5cXG4udG9kby10aXRsZS1kaXYge1xcblxcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG59XFxuXFxuXFxuLnRvZG8tZGVzYy1kaXYge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgKi9cXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApOyAqL1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAvKiBwYWRkaW5nLWJvdHRvbTogNXB4OyAqL1xcbn1cXG5cXG4udG9kby1kYXRlLWRpdixcXG4udG9kby1wcm9qZWN0LWRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4udG9kby1kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ3Myk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMjtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLnRvZG8tZGlzcGxheSB7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgLyogaGVpZ2h0OiA1NTBweDsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgXFxufVxcblxcbi5tYWluLXRvZG8tZGlzcGxheSB7XFxuXFxuICAgIFxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyIDMwcHggMzBweCAzNXB4IDYwcHggNjBweDtcXG5cXG59XFxuXFxuXFxuI3RvZG8tZGlzcGxheS10aXRsZSAge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAvKiBoZWlnaHQ6IDM1cHg7ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSggMiwgMiwgMiwgMC4yNSApO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuXFxuI3RvZG8tZGlzcGxheS1kZXNjIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDIsIDIsIDIsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jdG9kby1kaXNwbGF5LWRhdGUge1xcblxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSggMiwgMiwgMiwgMC4yNSApO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3RvZG8tZGlzcGxheS1yZW1pbmQtaW4ge1xcblxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSggMiwgMiwgMiwgMC4yNSApO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG5cXG59XFxuXFxuXFxuXFxuI3Byb2plY3QtZGlzcGxheS1jaG9pY2VzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAvKiBhcHBlYXJhbmNlOiBub25lOyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyLCAyLCAyLCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG5cXG4uZmlyc3QtYnV0dG9uLWNvbnRhaW5lcixcXG4uc2Vjb25kLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLmZpcnN0LWJ1dHRvbi1jb250YWluZXIgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uZmlyc3QtYnV0dG9uLWNvbnRhaW5lciA+IGRpdiA+IGxhYmVse1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcblxcbiN0b2RvLWRpc3BsYXktcHJpb3JpdHksXFxuI3RvZG8tZGlzcGxheS1zdGF0dXMgIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvZG8tZGlzcGxheS1wcmlvcml0eTpob3ZlcixcXG4jdG9kby1kaXNwbGF5LXN0YXR1czpob3ZlcntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU4OSk7XFxufVxcblxcblxcbiN0b2RvLXVwZGF0ZSxcXG4jdG9kby1kZWxldGUge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcblxcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjI1ICk7ICovXFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICBcXG5cXG59XFxuXFxuXFxuI3RvZG8tZGVsZXRle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42NDQpO1xcbn1cXG5cXG4jdG9kby1kZWxldGU6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjg2Myk7XFxufVxcblxcbiN0b2RvLXVwZGF0ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDI1NSwgMCwgMC42NTEpO1xcbn1cXG5cXG4jdG9kby11cGRhdGU6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE1LCAyNTUsIDAsIDAuODk3KTtcXG59XFxuXFxuXFxuLnBvcC11cC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDQ1KTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4ucG9wLXVwIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSggMiwgMiwgMiwgMC4yNSApO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnIgNTBweDtcXG59XFxuXFxuLnBvcC11cC1jb250ZW50LWRpdntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wb3AtdXAtYnV0dG9uLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuXFxufVxcblxcbi5wb3AtdXAtYnV0dG9uLWNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLnByb2plY3QtY29udGFpbmVye1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuIFxcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIFxcbn1cXG5cXG5cXG5cXG4ucHJvamVjdC10aXRsZS1kaXYge1xcblxcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIC8qIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDsgKi9cXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG5cXG59XFxuXFxuXFxuLnByb2plY3QtZGVzYy1kaXYge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgKi9cXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApOyAqL1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAvKiBwYWRkaW5nLWJvdHRvbTogNXB4OyAqL1xcbn1cXG5cXG4ucHJvamVjdC1kYXRlLWRpdntcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuXFxuXFxuXFxuXFxuLnByb2plY3QtdG9kby1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGRvZGdlcmJsdWU7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIyLCAxMjIsIDEyMiwgMC41ODIpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5wcm9qZWN0LWRpc3BsYXkge1xcblxcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY1LCAwLCAxMDIsIDAuNzA1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG5cXG5cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTsgKi9cXG4gICAgXFxuICAgIC8qIGhlaWdodDogNzUwcHg7ICovXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjsgKi9cXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG5cXG59XFxuXFxuLnByb2plY3QtZGV0YWlsc3tcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI3Byb2plY3QtdGl0bGUtdXBkYXRle1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuXFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSggMCwgMCwgMCwgMC4yNSApO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuI3Byb2plY3QtZGVzYy11cGRhdGUge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG5cXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG5cXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcblxcbn1cXG5cXG4jcHJvamVjdC1kYXRlLXVwZGF0ZXtcXG5cXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG5cXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcblxcbn1cXG5cXG5cXG4jcHJvamVjdC1yZW1pbmRlci11cGRhdGV7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuXFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSggMCwgMCwgMCwgMC4yNSApO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG5cXG59XFxuXFxuLnByb2plY3QtYnV0dG9ucy1vbmUsXFxuLnByb2plY3QtYnV0dG9ucy10d297XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIFxcbn1cXG5cXG4ucHJvamVjdC1idXR0b25zLW9uZSA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbnMtb25lID4gZGl2ID4gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAqL1xcbn1cXG5cXG5cXG4ucHJvamVjdC1idXR0b25zLW9uZSA+IGRpdiA+IGJ1dHRvbixcXG4ucHJvamVjdC1idXR0b25zLXR3byA+IGJ1dHRvbntcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuXFxuICAgcGFkZGluZzogNXB4O1xcbiAgIGJhY2tncm91bmQ6IHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMjUgKTtcXG4gICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cXG4gICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuXFxuI3Byb2plY3QtcHJpb3JpdHktdXBkYXRlLFxcbiNwcm9qZWN0LXN0YXR1cy11cGRhdGV7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcHJvamVjdC1wcmlvcml0eS11cGRhdGU6aG92ZXIsXFxuI3Byb2plY3Qtc3RhdHVzLXVwZGF0ZTpob3ZlcntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU4OSk7XFxufVxcblxcbi5wcm9qZWN0LXRvZG9ze1xcblxcbiAgXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWJsdWU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgLyogZGlzcGxheTogZ3JpZDsgKi9cXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDFmcjsgKi9cXG5cXG5cXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMTQwLCAwLjI1KTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTsgKi9cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDEsIDExOSwgMC43Nik7ICovXFxuXFxufVxcblxcbiNwcm9qZWN0LWRlbGV0ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNjQ0KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcHJvamVjdC11cGRhdGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE1LCAyNTUsIDAsIDAuNjUxKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4jcHJvamVjdC1kZWxldGU6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjg3Nyk7XFxufVxcblxcbiNwcm9qZWN0LXVwZGF0ZTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDI1NSwgMCwgMC44NzcpO1xcbn1cXG5cXG4ucHJpb3JpdHktdGl0bGV7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4udG9kby1wcm9qZWN0LXN0YXR1cy10aXRsZXtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAxLCAxMTksIDAuNzYpOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuXFxuICAgIC8qIGJhY2tncm91bmQ6IHJnYmEoMTI5LCAxMjksIDEyOSwgMC4yNSk7ICovXFxuICAgIC8qIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApOyAqL1xcbiAgICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7ICovXFxuICAgIC8qIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5cXG4udG9kby1pbi1wcm9qZWN0LWNvbnRhaW5lciB7XFxuXFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAyMjBweDtcXG5cXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg4MywgODMsIDgzLCAwLjI1KTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNi41cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50b2RvLXN0YXR1cy1jb250YWluZXJ7XFxuXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGZ1Y2hzaWE7ICovXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIC8qIGhlaWdodDogMzUwcHg7ICovXFxuICAgIC8qIGdyaWQtYXV0by1mbG93OiBjb2x1bW47ICovXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcblxcbn1cXG5cXG4ub3ZlcmR1ZS10b2RvcyxcXG4uZHVlLXNvb24tdG9kb3MsXFxuLnVwY29taW5nLXRvZG9zLFxcbi5jb21wbGV0ZS10b2Rvc3tcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogYm9yZGVyOiA0cHggc29saWQgZ29sZDsgKi9cXG4gICAgLyogaGVpZ2h0OiAzMjBweDsgKi9cXG4gICAgLyogd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNTYsIDI1NSk7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyOyAqL1xcbiAgICBcXG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXFxuXFxuXFxuXFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGJvcmRlcjogNHB4IHNvbGlkIGdvbGQ7ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZzogNXB4IDIwcHggNXB4IDIwcHg7XFxuXFxufVxcblxcblxcbi5zY3JvbGxhYmxlLXRvZG8tY29udGFpbmVye1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICByb3ctZ2FwOiAxMHB4O1xcbiAgICAvKiBoZWlnaHQ6IDQwMHB4OyAqL1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93OyAvKlRoaXMgd2FzIHdoYXQgaSB3YW50ZWQgdG8gZG8qL1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFxuICAgIGdhcDogNXB4O1xcbiAgICBcXG4gICAgLyogYm9yZGVyOiA0cHggc29saWQgYnJvd247ICovXFxuXFxufVxcblxcbi55ZXMtYnV0dG9uLFxcbi5uby1idXR0b257XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMjUgKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi55ZXMtYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwgMjU1LCAwLCAwLjY1MSk7XFxufVxcblxcbi5uby1idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjY0NCk7XFxufVxcblxcblxcblxcblxcblxcblxcbi5ub3Rlcy1jb2xsZWN0aW9ue1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287ICovXFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGdhcDogMTVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsMWZyKSk7IFxcbiBcXG59XFxuXFxuXFxuLm5vdGVzLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTE2LCAxMTYsIDExNiwgMC4yNSk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIFxcbn1cXG5cXG4ubm90ZS1kaXNwbGF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgMCwgNzEsIDAuNjUxKTtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyIDQwcHg7XFxuICAgIGdhcDogNXB4O1xcblxcblxcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxufVxcblxcbi5ub3RlLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm5vdGUtZGVzYyB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG59XFxuXFxuXFxuLm5vdGUtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBGT1JNIEJVVFRPTiAqL1xcblxcbi5mb3JtLWJ1dHRvbi1jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiA3MHB4O1xcbiAgICByaWdodDogMDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgMCUgMCUgNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgNDgsIDkyKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDAsIDAsIDAuMjUgKTtcXG5ib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG5iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbmJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgXFxufVxcblxcbi5mb3JtLWJ1dHRvbntcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuXFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoODIsIDgyLCA4MiwgMCk7XFxuICAgIC8qIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApOyAqL1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuXFxuLmZvcm0tYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDgyLCA4MiwgODIsIDAuMzQ5KTtcXG59XFxuXFxuLyogVE9ETyBDUkVBVElPTiBGT1JNICovXFxuXFxuXFxuLmZvcm0tY29udGFpbmVye1xcblxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MjcpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBsZWZ0OiAwcHg7XFxuXFxufVxcblxcbi5zaG93LWZvcm17XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi50b2RvLWNyZWF0aW9uLWZvcm0ge1xcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgLyogaGVpZ2h0OiA3MDBweDsgKi9cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogbWFyb29uOyAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDczKTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBcXG59XFxuXFxuLnRvZG8tY3JlYXRpb24tZm9ybSA+IGZvcm0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3RvZG8tZGF0ZSxcXG4jcHJvamVjdC1kYXRle1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuZmllbGRzZXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgIFxcbn1cXG5cXG5sZWdlbmQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbn1cXG5cXG5cXG5cXG4uaW5wdXQtY29sbGVjdGlvbntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5yYWRpby1pbnB1dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBhY2NlbnQtY29sb3I6IHRlYWw7XFxuICAgIHBhZGRpbmc6IDVweCAwcHggNXB4IDBweDtcXG59XFxuXFxuLnJhZGlvLWlucHV0LWNvbnRhaW5lciA+IGRpdiB7XFxuICAgIFxcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjsgKi9cXG4gICAgLyogcGFkZGluZzogNXB4IDBweCA1cHggMHB4OyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICBcXG4gICBcXG59XFxuXFxuXFxuXFxuLnJhZGlvLWlucHV0LWNvbnRhaW5lciA+IGRpdiA+IGxhYmVsIHtcXG4gICAgXFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgXFxufVxcblxcblxcblxcblxcbi5pbnB1dC1jb250YWluZXIgPiBpbnB1dCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMHB4IDVweCAwcHggNXB4O1xcblxcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciA+IHRleHRhcmVhIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIC8qIGhlaWdodDogMjVweDsgKi9cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA1cHggNXB4IDBweCA1cHg7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbn1cXG5cXG4udG9kby1jcmVhdGlvbi10aXRsZSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdGlvbi10aXRsZSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuI3RvZG8tcHJpb3JpdHksXFxuI3Byb2plY3QtcHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjI1ICk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jdG9kby1wcmlvcml0eTpob3ZlcixcXG4jcHJvamVjdC1wcmlvcml0eTpob3ZlcntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1Myk7XFxufVxcblxcbi5jcmVhdGUtbmV3LXRvZG97XFxuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIGZvcmVzdGdyZWVuOyAqL1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VsZWN0LWV4aXN0aW5nLXByb2plY3R7XFxuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIHNreWJsdWU7ICovXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jcmVhdGUtbmV3LXByb2plY3R7XFxuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIGNyaW1zb247ICovXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNwcm9qZWN0LWNob2ljZXMge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEwNSwgOTYsIDAuNzk1KTtcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kaXNwbGF5LWZvcm0taXRlbXN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4jZm9ybS1zdWJtaXR7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAyMSwgMC41NDEpO1xcblxcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2Zvcm0tc3VibWl0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMjEsIDAuNzUzKTtcXG59XFxuXFxuXFxuLyogTW9iaWxlIHZlcnNpb24gKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBcXG5cXG4gICAgLmhhbWJ1cmdlci1tZW51IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5oYW1idXJnZXItbWVudTphY3RpdmV7XFxuXFxuXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTE0KTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA2LjVweCApO1xcbiAgICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDYuNXB4ICk7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tY29udGFpbmVyIHtcXG4gICAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmciA0MHB4O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzAwcHg7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgIFxcXCJ0b3AtY29udGFpbmVyIHRvcC1jb250YWluZXJcXFwiIFxcbiAgICAgICAgXFxcImRpc3BsYXktY29udGFpbmVyIGRpc3BsYXktY29udGFpbmVyXFxcIlxcbiAgICAgICAgXFxcInRvZG8tY29udGFpbmVyLWZvb3RlciB0b2RvLWNvbnRhaW5lci1mb290ZXJcXFwiO1xcbiAgICAgICAgcGFkZGluZzogMHB4IDVweCAwcHggNXB4O1xcbiAgICBcXG4gICAgXFxuICAgIFxcbiAgICB9XFxuXFxuICAgIC50b3AtY29udGFpbmVye1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLmRpc3BsYXktY29udGFpbmVyLFxcbiAgICAuY29sbGVjdGlvbi1jb250YWluZXJ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgLyogbWFyZ2luOiAwcHggNXB4IDBweCA1cHg7ICovXFxuICAgIH1cXG5cXG4gICAgLmRpc3BsYXktY29udGFpbmVye1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuXFxuICAgIFxcblxcbiAgICAubm90ZS1tZW51IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgICAgIGdyaWQtcm93OiAyLzM7XFxuICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICAgICAgLyogaGVpZ2h0OiA5MCU7ICovXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMHB4IDBweCAxNXB4O1xcbiAgICAgICAgLyogdG8gY29ycmVjdCBmb3IgbWFpbiBjb250YWluZXIgcGFkZGluZyAqL1xcbiAgICAgICAgcmlnaHQ6IC01cHg7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgICAvKiBib3JkZXI6IG5vbmU7ICovXFxuICAgICAgICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDczKTsgKi9cXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMjIpO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LXRvZG8tY29udGFpbmVye1xcbiAgICAgICAgbGVmdDogMHB4O1xcbiAgICB9XFxuXFxuXFxuICAgIC5hbGwtdG9kb3MtdGFiLFxcbiAgICAuYWxsLXByb2plY3RzLXRhYixcXG4gICAgLmFsbC1ub3Rlcy10YWIge1xcblxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgICAgIC8qIGZvbnQtc2l6ZTogMTVweDsgKi9cXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLm1lbnUtYWN0aXZlIHsgLyp0cmlnZ2VycyB3aGVuIGhhbWJ1cmdlciBtZW51IGlzIGNsaWNrZWQqL1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHRvZG9Nb2R1bGUgZnJvbSBcIi4vY3JlYXRlVG9kb3NcIjtcblxuXG5cbmZ1bmN0aW9uIHByb2plY3RNb2R1bGUgKCkge1xuXG4gICAgLy8gRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgcHJvamVjdHNcbiAgICBmdW5jdGlvbiBwcm9qZWN0RmFjdG9yeSAodGl0bGUsZGVzYyxkdWVEYXRlLHByaW9yaXR5LHJlbWluZEluLHN0YXR1cyl7XG5cblxuICAgICAgICByZXR1cm4ge3RpdGxlLGRlc2MsZHVlRGF0ZSxwcmlvcml0eSxyZW1pbmRJbixzdGF0dXN9XG4gICAgfVxuXG5cbiAgICAvLyBUaGlzIGlzIHdoZXJlIHVuc29ydGVkIHByb2plY3QgYXJyYXlzIGFyZSBzdG9yZWRcbiAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuXG5cbiAgICBmdW5jdGlvbiBnZXRTdG9yZWRQcm9qZWN0cyAoKXtcblxuICAgICAgICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZWRQcm9qZWN0cycpO1xuXG4gICAgICAgIGlmKCFzdG9yZWRQcm9qZWN0cyl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VTdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2Uoc3RvcmVkUHJvamVjdHMpO1xuXG4gICAgICAgIHBhcnNlU3RvcmVkUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0cyA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0cylcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvLyBnZXQgc3RvcmVkIHByb2plY3RzIG9uIGJvb3RcbiAgICBnZXRTdG9yZWRQcm9qZWN0cygpO1xuXG4gICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3N0b3JlZFByb2plY3RzJyk7XG5cblxuICAgIC8vIERlbGV0ZSB0aGlzIGlmIHRoZXJlIGVuZHMgdXAgYmVpbmcgYSBwcm9ibGVtXG4gICAgZnVuY3Rpb24gY2xlYW5VcFByb2plY3RzICgpe1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG5cblxuICAgICAgICAgICAgaWYgKCgoIXByb2plY3RBcnJheVtpbmRleF0udGl0bGUpICYmIFxuICAgICAgICAgICAgICAgICghcHJvamVjdEFycmF5W2luZGV4XS5kZXNjKSl8fHByb2plY3RBcnJheVtpbmRleF0ucHJpb3JpdHkgPT09ICdoaWdoJ3x8IHByb2plY3RBcnJheVtpbmRleF0ucHJpb3JpdHkgPT09ICdtZWRpdW0nIHx8IHByb2plY3RBcnJheVtpbmRleF0ucHJpb3JpdHkgPT09ICdsb3cnKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ0xFQU5FRCBVUCBQUk9KRUNUUyAhISEnKVxuXG4gICAgICAgICAgICAgICAgcHJvamVjdEFycmF5LnNwbGljZShpbmRleCwxKVxuXG4gICAgICAgICAgICAgICAgLS1pbmRleDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2VVcGRhdGUoKTtcblxuICAgIH1cblxuICAgIC8vIGNsZWFuIHVwIGVtcHR5IHByb2plY3RzXG4gICAgY2xlYW5VcFByb2plY3RzKCk7XG4gICAgXG5cbiAgICBmdW5jdGlvbiBsb2NhbFN0b3JhZ2VVcGRhdGUoKXtcblxuICAgICAgICBjb25zb2xlLmxvZygnU0VUIExPQ0FMIFNUT1JBR0UnKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkUHJvamVjdHMnLEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpO1xuXG4gICAgfVxuXG5cblxuXG5cblxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCAodGl0bGUsZGVzYyxkdWVEYXRlLHByaW9yaXR5LHJlbWluZEluLHN0YXR1cyl7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeSh0aXRsZSxkZXNjLGR1ZURhdGUscHJpb3JpdHkscmVtaW5kSW4sc3RhdHVzKTsgLy9jaGFuZ2UgdGhpcyBsYXRlciBpZiB5b3UgbmVlZCB0b1xuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlVXBkYXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIC8vIDggaGlnaCBwcmlvcml0eVxuXG4gICAgLy8gY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgLy8gY29uc3QgZGF5ID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgLy8gY29uc3QgbW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuXG4gICAgLy8gY29uc3QgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAvLyBsZXQgcmVtaW5kID0gLTI7XG5cbiAgICAvLyBsZXQgcmVtaW5kMSA9IDA7XG5cbiAgICAvLyBmb3IgKGxldCBpbmRleCA9IDQ7IGluZGV4ID4gMDsgaW5kZXgtLSkge1xuXG4gICAgICAgIFxuXG4gICAgLy8gICAgIGNyZWF0ZVByb2plY3QoYHByb2plY3Qke2luZGV4fXRlc3RgLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyByZW1pbmR9LSR7bW9udGggKyByZW1pbmR9LSR7ZGF5ICsgcmVtaW5kfWAsYGhpZ2hgLHJlbWluZCwnY29tcGxldGUnKTtcblxuICAgIC8vICAgICBjcmVhdGVQcm9qZWN0KGBwcm9qZWN0JHtpbmRleH10ZXN0MmAsYGRlc2Mke2luZGV4fWAsYCR7eWVhciArIHJlbWluZH0tJHttb250aCArIHJlbWluZH0tJHtkYXkgKyByZW1pbmR9YCxgaGlnaGAscmVtaW5kK2luZGV4LCdwZW5kaW5nJyk7XG5cbiAgICAvLyAgICAgcmVtaW5kID0gcmVtaW5kICsgaW5kZXg7XG5cbiAgICAgICAgXG4gICAgLy8gfVxuXG5cbiAgICAvLyAvLyAxMCBsb3cgcHJpb3JpdHlcbiAgICAvLyBmb3IgKGxldCBpbmRleCA9IDY7IGluZGV4ID4gMDsgaW5kZXgtLSkge1xuXG4gICAgICAgIFxuXG4gICAgLy8gICAgIGNyZWF0ZVByb2plY3QoYHByb2plY3QgJHtpbmRleH1gLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyByZW1pbmQxfS0ke21vbnRoICsgcmVtaW5kMX0tJHtkYXkgKyByZW1pbmQxfWAsYGxvd2AscmVtaW5kMSwnY29tcGxldGUnKTtcbiAgICAvLyAgICAgY3JlYXRlUHJvamVjdChgcHJvamVjdCR7aW5kZXh9d3dgLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyByZW1pbmQxfS0ke21vbnRoICsgcmVtaW5kMX0tJHtkYXkgLSByZW1pbmQxfWAsYGxvd2AscmVtaW5kMSwncGVuZGluZycpO1xuICAgIC8vICAgICBjcmVhdGVQcm9qZWN0KGBwcm9qZWN0JHtpbmRleH11cGAsYGRlc2Mke2luZGV4fWAsYCR7eWVhciArIHJlbWluZDF9LSR7bW9udGggKyByZW1pbmQxfS0ke2RheSArIHJlbWluZDF9YCxgbG93YCxyZW1pbmQxLTEsJ3BlbmRpbmcnKTtcbiAgICAgICAgXG4gICAgLy8gICAgIHJlbWluZDEgPSByZW1pbmQxIC0gaW5kZXg7XG4gICAgLy8gfVxuXG5cblxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJvamVjdCAob2xkRGV0YWlscyxuZXdEZXRhaWxzKXtcblxuXG4gICAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xuXG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSBvbGREZXRhaWxzLnRpdGxlICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3QuZGVzYyA9PT0gb2xkRGV0YWlscy5kZXNjICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3QuZHVlRGF0ZSA9PT0gb2xkRGV0YWlscy5kdWVEYXRlICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3QucmVtaW5kSW4gPT09IG9sZERldGFpbHMucmVtaW5kSW4gJiYgXG4gICAgICAgICAgICAgICAgcHJvamVjdC5wcmlvcml0eSA9PT0gb2xkRGV0YWlscy5wcmlvcml0eSAmJiBcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnN0YXR1cyA9PT0gb2xkRGV0YWlscy5zdGF0dXMpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ0hBTkdFIFdPUktTIScpXG5cblxuICAgICAgICAgICAgICAgIHByb2plY3QudGl0bGUgPSBuZXdEZXRhaWxzLm5ld1RpdGxlO1xuICAgICAgICAgICAgICAgIHByb2plY3QuZGVzYyA9IG5ld0RldGFpbHMubmV3RGVzYztcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmR1ZURhdGUgPSBuZXdEZXRhaWxzLm5ld0R1ZTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnJlbWluZEluID0gbmV3RGV0YWlscy5uZXdSZW1pbmRlcjtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnByaW9yaXR5ID0gbmV3RGV0YWlscy5uZXdQcmlvcml0eTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnN0YXR1cyA9IG5ld0RldGFpbHMubmV3U3RhdHVzO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0IChvbGREZXRhaWxzKXtcblxuICAgICAgICB0b2RvTW9kdWxlLmRlbGV0ZVRvZG9PZlByb2plY3Qob2xkRGV0YWlscyk7XG5cblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuXG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0QXJyYXlbaW5kZXhdLnRpdGxlID09PSBvbGREZXRhaWxzLnRpdGxlICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3RBcnJheVtpbmRleF0uZGVzYyA9PT0gb2xkRGV0YWlscy5kZXNjICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3RBcnJheVtpbmRleF0uZHVlRGF0ZSA9PT0gb2xkRGV0YWlscy5kdWVEYXRlICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3RBcnJheVtpbmRleF0ucmVtaW5kSW4gPT09IG9sZERldGFpbHMucmVtaW5kSW4gJiYgXG4gICAgICAgICAgICAgICAgcHJvamVjdEFycmF5W2luZGV4XS5wcmlvcml0eSA9PT0gb2xkRGV0YWlscy5wcmlvcml0eSAmJiBcbiAgICAgICAgICAgICAgICBwcm9qZWN0QXJyYXlbaW5kZXhdLnN0YXR1cyA9PT0gb2xkRGV0YWlscy5zdGF0dXMpIHtcblxuXG4gICAgICAgICAgICAgICAgcHJvamVjdEFycmF5LnNwbGljZShpbmRleCwxKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuXG4gICAgfVxuXG4gXG5cbiAgICByZXR1cm4ge3Byb2plY3RBcnJheSxjcmVhdGVQcm9qZWN0LHVwZGF0ZVByb2plY3QsZGVsZXRlUHJvamVjdH07XG5cbn1cblxuY29uc3QgaW5pdGlhbGl6ZWRQcm9qZWN0TW9kdWxlID0gcHJvamVjdE1vZHVsZSgpO1xuXG4gICBcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVkUHJvamVjdE1vZHVsZTsiLCJcblxuZnVuY3Rpb24gdG9kb01vZHVsZSAoKXtcblxuICAgIC8vIEZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIG5vdGVzXG5cbiAgICBmdW5jdGlvbiB0b2RvRmFjdG9yeSAodGl0bGUsZGVzYyxkdWVEYXRlLHJlbWluZEluLHByaW9yaXR5LHN0YXR1cyxwcm9qZWN0KXtcblxuICAgICAgICAvLyB0b2RvXG4gICAgICAgIGlmKGR1ZURhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIHt0aXRsZSxkZXNjLGR1ZURhdGUscmVtaW5kSW4scHJpb3JpdHksc3RhdHVzLHByb2plY3R9XG4gICAgICAgIH1cbiAgICAgICAgLy8gbm90ZVxuICAgICAgICBpZighZHVlRGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4ge3RpdGxlLGRlc2N9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIFRoaXMgaXMgd2hlcmUgdW5zb3J0ZWQgdG9kbyBhcnJheXMgYXJlIHN0b3JlZFxuICAgIGNvbnN0IHRvZG9BcnJheSA9IFtdO1xuXG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0U3RvcmVkVG9kb3MgKCl7XG5cbiAgICAgICAgY29uc3Qgc3RvcmVkVG9kb3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkVG9kb3MnKTtcblxuICAgICAgICBpZighc3RvcmVkVG9kb3Mpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlU3RvcmVkVG9kb3MgPSBKU09OLnBhcnNlKHN0b3JlZFRvZG9zKTtcblxuICAgICAgICBwYXJzZVN0b3JlZFRvZG9zLmZvckVhY2godG9kb3MgPT4ge1xuICAgICAgICAgICAgdG9kb0FycmF5LnB1c2godG9kb3MpXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy8gZ2V0IHN0b3JlZCB0b2RvcyBvbiBib290XG4gICAgZ2V0U3RvcmVkVG9kb3MoKTtcblxuXG4gICAgZnVuY3Rpb24gY2xlYW5VcFRvZG9zICgpe1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b2RvQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG5cblxuICAgICAgICAgICAgaWYgKCgoIXRvZG9BcnJheVtpbmRleF0udGl0bGUpICYmIFxuICAgICAgICAgICAgICAgICghdG9kb0FycmF5W2luZGV4XS5kZXNjKSl8fHRvZG9BcnJheVtpbmRleF0ucHJpb3JpdHkgPT09ICdoaWdoJ3x8IHRvZG9BcnJheVtpbmRleF0ucHJpb3JpdHkgPT09ICdtZWRpdW0nIHx8IHRvZG9BcnJheVtpbmRleF0ucHJpb3JpdHkgPT09ICdsb3cnKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ0xFQU5FRCBVUCBUT0RPUyAhISEnKVxuXG4gICAgICAgICAgICAgICAgdG9kb0FycmF5LnNwbGljZShpbmRleCwxKVxuXG4gICAgICAgICAgICAgICAgLS1pbmRleDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2VVcGRhdGUoKTtcblxuICAgIH1cblxuICAgIC8vIGNsZWFuIHVwIGVtcHR5IHByb2plY3RzXG4gICAgY2xlYW5VcFRvZG9zKCk7XG5cblxuXG5cbiAgICBmdW5jdGlvbiBsb2NhbFN0b3JhZ2VVcGRhdGUoKXtcblxuICAgICAgICBjb25zb2xlLmxvZygnU0VUIExPQ0FMIFNUT1JBR0UnKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkVG9kb3MnLEpTT04uc3RyaW5naWZ5KHRvZG9BcnJheSkpO1xuXG4gICAgfVxuXG5cbiAgICAvLyB0aGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdXNlZCB0byBjcmVhdGUgVG9kb3NcbiAgICBmdW5jdGlvbiBjcmVhdGVUb2RvICh0aXRsZSxkZXNjLGR1ZURhdGUscmVtaW5kSW4scHJpb3JpdHksc3RhdHVzLHByb2plY3Qpe1xuICAgICAgICBjb25zdCBuZXdUb0RvID0gdG9kb0ZhY3RvcnkodGl0bGUsZGVzYyxkdWVEYXRlLHJlbWluZEluLHByaW9yaXR5LHN0YXR1cyxwcm9qZWN0KTtcbiAgICAgICAgdG9kb0FycmF5LnB1c2gobmV3VG9Ebyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICAvLyBUaGlzIG11c3QgYmUgZGVsZXRlZCBsYXRlciBhcyBpdCBpcyBjcmVhdGVkIHByaW1hcmlseSBmb3IgdGVzdGluZ1xuXG4gICAgLy8gY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgLy8gY29uc3QgZGF5ID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgLy8gY29uc3QgbW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuXG4gICAgLy8gY29uc3QgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG5cblxuICAgIC8vIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPD0gMTA7IGluZGV4KyspIHtcblxuICAgIC8vICAgICBjcmVhdGVUb2RvKGB0aXRsZSR7aW5kZXh9YCxgZGVzYyR7aW5kZXh9YCxgJHt5ZWFyICsgaW5kZXh9LSR7bW9udGggKyBpbmRleH0tJHtkYXkgKyBpbmRleH1gLGluZGV4LGBoaWdoYCxgcGVuZGluZ2AsJ3Byb2plY3QgMicpO1xuXG4gICAgLy8gICAgIGNyZWF0ZVRvZG8oYHRpdGxlJHtpbmRleH1gLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyBpbmRleH0tJHttb250aCArIGluZGV4fS0ke2RheSArIGluZGV4fWAsaW5kZXgsYGxvd2AsYHBlbmRpbmdgLCdwcm9qZWN0IDInKTtcblxuICAgIC8vICAgICBjcmVhdGVUb2RvKGB0aXRsZSR7aW5kZXh9YCxgZGVzYyR7aW5kZXh9YCk7XG5cblxuICAgXG4gICAgICAgIFxuICAgIC8vIH1cblxuICAgIC8vIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPD0gNTsgaW5kZXgrKykge1xuXG4gICAgLy8gICAgIGNyZWF0ZVRvZG8oYHRpdGxlJHtpbmRleH1gLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyBpbmRleH0tJHttb250aCArIGluZGV4fS0ke2RheSArIGluZGV4fWAsaW5kZXgsYGhpZ2hgLGBjb21wbGV0ZWAsJ3Byb2plY3QxdGVzdCcpO1xuXG4gICAgLy8gICAgIGNyZWF0ZVRvZG8oYHRpdGxlJHtpbmRleH1gLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyBpbmRleH0tJHttb250aCArIGluZGV4fS0ke2RheSArIGluZGV4fWAsaW5kZXgsYG1lZGl1bWAsYHBlbmRpbmdgLCdwcm9qZWN0MXRlc3QnKTtcblxuICAgXG4gICAgICAgIFxuICAgIC8vIH1cblxuICAgIC8vIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuICAgIC8vIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdHRVQgTE9DQUwgU1RPUkFHRScpO1xuICAgIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9BcnJheScpKSlcbiAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3RvcmVkVG9kb3MnKTtcbiAgICBcbiAgICAvLyBvbGREZXRhaWxzXG4gICAgLy8gbmV3RGV0YWlsc1xuICAgIC8vIG5ld1RpdGxlLG5ld0Rlc2MsbmV3RHVlRGF0ZSxuZXdSZW1pbmRJbixuZXdQcmlvcml0eSxuZXdTdGF0dXMsbmV3UHJvamVjdFxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVG9kbyAob2xkRGV0YWlscyxuZXdEZXRhaWxzKXtcblxuICAgICAgICB0b2RvQXJyYXkuZm9yRWFjaCh0b2RvID0+IHtcblxuXG4gICAgICAgICAgICBpZiAodG9kby50aXRsZSA9PT0gb2xkRGV0YWlscy50aXRsZSAmJiBcbiAgICAgICAgICAgICAgICB0b2RvLmRlc2MgPT09IG9sZERldGFpbHMuZGVzYyAmJiBcbiAgICAgICAgICAgICAgICB0b2RvLmR1ZURhdGUgPT09IG9sZERldGFpbHMuZHVlRGF0ZSAmJiBcbiAgICAgICAgICAgICAgICB0b2RvLnJlbWluZEluID09PSBvbGREZXRhaWxzLnJlbWluZEluICYmIFxuICAgICAgICAgICAgICAgIHRvZG8ucHJpb3JpdHkgPT09IG9sZERldGFpbHMucHJpb3JpdHkgJiYgXG4gICAgICAgICAgICAgICAgdG9kby5zdGF0dXMgPT09IG9sZERldGFpbHMuc3RhdHVzICYmIFxuICAgICAgICAgICAgICAgIHRvZG8ucHJvamVjdCA9PT0gb2xkRGV0YWlscy5wcm9qZWN0KSB7XG5cblxuICAgICAgICAgICAgICAgIHRvZG8udGl0bGUgPSBuZXdEZXRhaWxzLm5ld1RpdGxlO1xuICAgICAgICAgICAgICAgIHRvZG8uZGVzYyA9IG5ld0RldGFpbHMubmV3RGVzYztcbiAgICAgICAgICAgICAgICB0b2RvLmR1ZURhdGUgPSBuZXdEZXRhaWxzLm5ld0R1ZTtcbiAgICAgICAgICAgICAgICB0b2RvLnJlbWluZEluID0gbmV3RGV0YWlscy5uZXdSZW1pbmRlcjtcbiAgICAgICAgICAgICAgICB0b2RvLnByaW9yaXR5ID0gbmV3RGV0YWlscy5uZXdQcmlvcml0eTtcbiAgICAgICAgICAgICAgICB0b2RvLnN0YXR1cyA9IG5ld0RldGFpbHMubmV3U3RhdHVzO1xuICAgICAgICAgICAgICAgIHRvZG8ucHJvamVjdCA9IG5ld0RldGFpbHMubmV3UHJvamVjdDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2VVcGRhdGUoKTtcblxuICAgIH1cblxuXG5cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRvZG8gKG9sZERldGFpbHMpe1xuXG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvZG9BcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblxuXG4gICAgICAgICAgICBpZiAodG9kb0FycmF5W2luZGV4XS50aXRsZSA9PT0gb2xkRGV0YWlscy50aXRsZSAmJiBcbiAgICAgICAgICAgICAgICB0b2RvQXJyYXlbaW5kZXhdLmRlc2MgPT09IG9sZERldGFpbHMuZGVzYyAmJiBcbiAgICAgICAgICAgICAgICB0b2RvQXJyYXlbaW5kZXhdLmR1ZURhdGUgPT09IG9sZERldGFpbHMuZHVlRGF0ZSAmJiBcbiAgICAgICAgICAgICAgICB0b2RvQXJyYXlbaW5kZXhdLnJlbWluZEluID09PSBvbGREZXRhaWxzLnJlbWluZEluICYmIFxuICAgICAgICAgICAgICAgIHRvZG9BcnJheVtpbmRleF0ucHJpb3JpdHkgPT09IG9sZERldGFpbHMucHJpb3JpdHkgJiYgXG4gICAgICAgICAgICAgICAgdG9kb0FycmF5W2luZGV4XS5zdGF0dXMgPT09IG9sZERldGFpbHMuc3RhdHVzICYmIFxuICAgICAgICAgICAgICAgIHRvZG9BcnJheVtpbmRleF0ucHJvamVjdCA9PT0gb2xkRGV0YWlscy5wcm9qZWN0KSB7XG5cblxuICAgICAgICAgICAgICAgIHRvZG9BcnJheS5zcGxpY2UoaW5kZXgsMSlcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2VVcGRhdGUoKTtcblxuICAgIH1cblxuXG5cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRvZG9PZlByb2plY3QgKHByb2plY3Qpe1xuXG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvZG9BcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblxuXG4gICAgICAgICAgICBpZiAodG9kb0FycmF5W2luZGV4XS5wcm9qZWN0ID09PSBwcm9qZWN0LnRpdGxlKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVE9ETyBERUxFVEVEJylcblxuICAgICAgICAgICAgICAgIHRvZG9BcnJheS5zcGxpY2UoaW5kZXgsMSlcblxuICAgICAgICAgICAgICAgIC0taW5kZXg7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlVXBkYXRlKCk7XG5cbiAgICB9XG5cbiAgICBcblxuICAgIC8vIEVuZCBvZiB0ZXN0IG9iamVjdHNcblxuICAgIHJldHVybiB7dG9kb0FycmF5LCBjcmVhdGVUb2RvLCB1cGRhdGVUb2RvLCBkZWxldGVUb2RvLCBkZWxldGVUb2RvT2ZQcm9qZWN0fTtcblxuXG59XG5cblxuY29uc3QgaW5pdGlhbGl6ZWRUb2RvTW9kdWxlID0gdG9kb01vZHVsZSgpO1xuXG5cbi8vIGluaXRpYWxpemVkIHZlcnNpb24gaXMgc2VudCBiZWNhdXNlIHRoZSBpcyBubyByZWFzb24gdG8gcmUtaW5pdGlhbGlzZSBsYXRlciBvblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZWRUb2RvTW9kdWxlO1xuIiwiLy8gQWxsIERPTSBBY3Rpdml0aWVzIGFyZSBjZW50cmFsaXNlZCBoZXJlIGV4Y2VwdCBET00gQ3JlYXRpb25cblxuaW1wb3J0IHRvZG9Nb2R1bGUgZnJvbSBcIi4uL2NyZWF0ZVRvZG9zXCI7XG5cbmltcG9ydCBwcm9qZWN0TW9kdWxlIGZyb20gXCIuLi9jcmVhdGVQcm9qZWN0c1wiO1xuXG5pbXBvcnQgbm90ZXNPYmplY3QgZnJvbSBcIi4uL3RhYk9iamVjdHMvYWxsTm90ZXNUYWJcIjtcblxuXG5pbXBvcnQgdG9kb09iamVjdCBmcm9tIFwiLi4vdGFiT2JqZWN0cy9hbGxUb2Rvc1RhYlwiO1xuXG5pbXBvcnQgcHJvamVjdE9iamVjdCBmcm9tIFwiLi4vdGFiT2JqZWN0cy9hbGxQcm9qZWN0c1RhYlwiO1xuXG5pbXBvcnQgZm9ybURvbU1vZHVsZSBmcm9tIFwiLi4vZG9tQ3JlYXRpb24vZm9ybURPTUNyZWF0aW9uXCI7XG5cbmltcG9ydCBjcmVhdGVUb2RvRE9NIGZyb20gXCIuLi9kb21DcmVhdGlvbi9hbGxUb2RvRE9NQ3JlYXRpb25cIjtcblxuaW1wb3J0IGNyZWF0ZVByb2plY3RET00gZnJvbSBcIi4uL2RvbUNyZWF0aW9uL3Byb2plY3RzRE9NQ3JlYXRpb25cIjtcblxuaW1wb3J0IGNyZWF0ZU5vdGVzRE9NIGZyb20gXCIuLi9kb21DcmVhdGlvbi9hbGxOb3Rlc0RPTUNyZWF0aW9uXCI7XG5cbmltcG9ydCBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uIGZyb20gXCIuLi9kb21DcmVhdGlvbi9wb3B1bGF0ZURPTVRvZG9Db2xsZWN0aW9uXCI7XG5cbmltcG9ydCBhcHBlbmRQcm9qZWN0T2JqZWN0cyBmcm9tIFwiLi4vZG9tQ3JlYXRpb24vcG9wdWxhdGVET01Qcm9qZWN0Q29sbGVjdGlvblwiO1xuXG5pbXBvcnQgYXBwZW5kTm90ZXNPYmplY3QgZnJvbSBcIi4uL2RvbUNyZWF0aW9uL3BvcHVsYXRlRE9NTm90ZUNvbGxlY3Rpb25cIjtcblxuaW1wb3J0IHsgY2xpY2tlZFByb2plY3QgfSBmcm9tIFwiLi4vZG9tQ3JlYXRpb24vcG9wdWxhdGVET01Qcm9qZWN0Q29sbGVjdGlvblwiO1xuXG5pbXBvcnQgZGlzcGxheVByb2plY3QgZnJvbSBcIi4uL2RvbUNyZWF0aW9uL2Rpc3BsYXlQcm9qZWN0XCI7XG5cblxubGV0IG1lbnVJbkRpc3BsYXkgPSAndG9kb3MnXG5cbmxldCBwcmlvcml0eUluRGlzcGxheSA9ICdIaWdoJ1xuXG5cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkgKCl7XG5cbiAgICBpZihtZW51SW5EaXNwbGF5ID09PSAndG9kb3MnKXtcbiAgICAgICAgY29uc29sZS5sb2coJ1RPRE9TIERJU1BMQVkgVVBEQVRFRCcpO1xuXG4gICAgICAgIHBvcHVsYXRlVG9kb0NvbGxlY3Rpb24ocHJpb3JpdHlJbkRpc3BsYXkpO1xuXG4gICAgfVxuXG4gICAgaWYobWVudUluRGlzcGxheSA9PT0gJ3Byb2plY3RzJyl7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ1RPRE9TIFBST0pFQ1RTIFVQREFURUQnKTtcblxuICAgICAgICBhcHBlbmRQcm9qZWN0T2JqZWN0cyhwcmlvcml0eUluRGlzcGxheSk7XG5cbiAgICB9XG5cbiAgICBpZiAobWVudUluRGlzcGxheSA9PT0gJ25vdGVzJykge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdUT0RPUyBOT1RFUyBVUERBVEVEJyk7XG4gICAgICAgIFxuICAgICAgICBhcHBlbmROb3Rlc09iamVjdCgpO1xuXG4gICAgfVxuXG5cbiAgICBpZiAobWVudUluRGlzcGxheSA9PT0gJ3RvZG9zJyB8fCBtZW51SW5EaXNwbGF5ID09PSAncHJvamVjdHMnKSB7XG5cbiAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2gtcHJpb3JpdHknKTtcbiAgICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVkaXVtLXByaW9yaXR5Jyk7XG4gICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvdy1wcmlvcml0eScpO1xuXG5cblxuICAgICAgICBpZiAocHJpb3JpdHlJbkRpc3BsYXkgPT09ICdIaWdoJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hJR0ggUFJJT1JJVFkgQ0hPU0VOJylcblxuICAgICAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bS1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbG93LXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpb3JpdHlJbkRpc3BsYXkgPT09ICdNZWRpdW0nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTUVESVVNIFBSSU9SSVRZIENIT1NFTicpXG5cbiAgICAgICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWdoLXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgICAgICBtZWRpdW1Qcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgICAgIGxvd1ByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2xvdy1wcmlvcml0eS1jaG9zZW4nKTtcblxuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmlvcml0eUluRGlzcGxheT09PSAnTG93Jykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0xPVyBQUklPUklUWSBDSE9TRU4nKVxuXG4gICAgICAgICAgICBoaWdoUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaC1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtLXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgICAgICBsb3dQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsb3ctcHJpb3JpdHktY2hvc2VuJyk7XG5cblxuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG4gICAgXG59XG5cblxuXG5cbmZ1bmN0aW9uIGRvbUFjdGl2aXRpZXNNb2R1bGUgKCl7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcblxuICAgICAgICBcblxuICAgICAgICBpZihtZW51LmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnUtYWN0aXZlXCIpKXtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtYWN0aXZlXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICB9KVxuXG5cbiAgICAvLyBoYW1idXJnZXIgYnV0dG9uXG4gICAgY29uc3QgaGFtYnVyZ2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlci1tZW51Jyk7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGUtbWVudScpO1xuXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSlcblxuXG4gICAgaGFtYnVyZ2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmKCFtZW51LmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnUtYWN0aXZlXCIpKXtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnUtYWN0aXZlXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZihtZW51LmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnUtYWN0aXZlXCIpKXtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtYWN0aXZlXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICB9KVxuXG5cbiAgICAvLyBGT1JNIEFDVElWSVRJRVNcblxuICAgIC8vIEZPUk0gSU5QVVQgQUNUSVZJVElFUyBCRUdJTiBIRVJFXG5cblxuICAgIC8vIGZvcm0gY29udGFpbmVyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgZW50cnlDcmVhdGlvbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jcmVhdGlvbi1mb3JtJyk7XG5cbiAgICAvLyB0b2RvIG9yIG5vdGUgYnV0dG9uXG5cbiAgICBsZXQgaXNOb3RlID0gdHJ1ZTtcblxuICAgIGNvbnN0IHNlbGVjdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXMtdG9kbycpO1xuXG4gICAgY29uc3Qgc2VsZWN0Tm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpcy1ub3RlJyk7XG5cbiAgICBjb25zdCB0b2RvQ3JlYXRpb25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLW5ldy10b2RvJyk7XG5cblxuXG5cbiAgICAvLyBzYW1lIHZhcmlhYmxlLCBuZWVkIHRvIHJlZmFjdG9yXG4gICAgY29uc3Qgc2VsZWN0RXhpc3RpbmdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4aXN0aW5nLXByb2plY3QnKTtcblxuICAgIGNvbnN0IHNlbGVjdE5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKTtcblxuICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdFJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4aXN0aW5nLXByb2plY3QnKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RSYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpO1xuXG5cblxuXG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdC1leGlzdGluZy1wcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1uZXctcHJvamVjdCcpO1xuXG5cblxuXG4gICAgLy8gVG8tZG8gaW5wdXRzXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tdGl0bGUnKTtcblxuICAgIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGVzYycpO1xuXG4gICAgY29uc3QgZW50cnlUeXBlID0gaXNOb3RlO1xuXG4gICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kYXRlJyk7XG5cbiAgICBjb25zdCB0b2RvUmVtaW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1yZW1pbmQtaW4nKTtcblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXByaW9yaXR5Jyk7XG5cbiAgICBcblxuXG4gICAgY29uc3QgdG9kb0lucHV0cyA9IFt0b2RvRGF0ZSx0b2RvUmVtaW5kZXJdO1xuXG5cblxuICAgIGNvbnN0IHByb2plY3RzQ2hvaWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWNob2ljZXMnKTtcblxuICAgIC8vIG5ldyBwcm9qZWN0IGlucHV0c1xuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKTtcblxuICAgIGNvbnN0IHByb2plY3REZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGVzYycpO1xuXG4gICAgY29uc3QgcHJvamVjdERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1kYXRlJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0UmVtaW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1yZW1pbmQtaW4nKTtcblxuXG4gICAgLy8gaXMgYSBidXR0b25cbiAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1wcmlvcml0eScpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdElucHV0cyA9IFtwcm9qZWN0VGl0bGUscHJvamVjdERlc2MscHJvamVjdERhdGUscHJvamVjdFJlbWluZGVyXTtcblxuXG4gICAgc2VsZWN0VG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHRvZG9DcmVhdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LWZvcm0taXRlbXMnKTtcblxuICAgICAgICB0b2RvSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc2VsZWN0RXhpc3RpbmdQcm9qZWN0LmRpc2FibGVkKSB7XG4gICAgICAgICAgICBzZWxlY3ROZXdQcm9qZWN0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzZWxlY3RFeGlzdGluZ1Byb2plY3QuY2hlY2tlZCAmJiAhc2VsZWN0TmV3UHJvamVjdC5jaGVja2VkKSAge1xuICAgICAgICAgICAgc2VsZWN0RXhpc3RpbmdQcm9qZWN0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoc2VsZWN0RXhpc3RpbmdQcm9qZWN0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNoZWNrZWRFeGlzdGluZ1Byb2plY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3ROZXdQcm9qZWN0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNoZWNrZWROZXdQcm9qZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaXNOb3RlID0gZmFsc2U7XG5cbiAgICB9KVxuXG4gICAgc2VsZWN0Tm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHRvZG9DcmVhdGlvbkRpdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LWZvcm0taXRlbXMnKTtcbiAgICAgICAgZXhpc3RpbmdQcm9qZWN0RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuICAgICAgICBuZXdQcm9qZWN0RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuXG4gICAgICAgIHNlbGVjdE5ld1Byb2plY3QuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBzZWxlY3RFeGlzdGluZ1Byb2plY3QuY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRvZG9JbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB9KTtcblxuICAgICAgICBwcm9qZWN0c0Nob2ljZXMucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xuXG4gICAgICAgIG5ld1Byb2plY3RJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB9KTtcblxuICAgICAgICBpc05vdGU9IHRydWU7XG4gICAgfSlcblxuICAgIC8vIGV4aXN0aW5nIHByb2plY3Qgb3IgbmV3IHByb2plY3RcblxuICAgIGxldCBpc05ld1Byb2plY3QgPSBmYWxzZTtcblxuXG5cbiAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gaXNOZXdQcm9qZWN0O1xuXG4gICAgLy8gZXhpc3RpbmcgcHJvamVjdCBpbnB1dFxuXG5cblxuICAgIHNlbGVjdEV4aXN0aW5nUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgY2hlY2tlZEV4aXN0aW5nUHJvamVjdCgpO1xuICAgICAgICBcbiAgICB9KTtcblxuXG5cbiAgICBzZWxlY3ROZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICBjaGVja2VkTmV3UHJvamVjdCgpO1xuXG4gICAgfSlcblxuXG4gICAgZnVuY3Rpb24gY2hlY2tlZEV4aXN0aW5nUHJvamVjdCAoKXtcbiAgICAgICAgZXhpc3RpbmdQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuICAgICAgICBuZXdQcm9qZWN0RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuXG4gICAgICAgIGlzTmV3UHJvamVjdCA9IGZhbHNlO1xuXG4gICAgICAgIHByb2plY3RzQ2hvaWNlcy5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgbmV3UHJvamVjdElucHV0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG4gICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tlZE5ld1Byb2plY3QgKCl7XG4gICAgICAgIFxuICAgICAgICBleGlzdGluZ1Byb2plY3REaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1mb3JtLWl0ZW1zJyk7XG4gICAgICAgIG5ld1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1mb3JtLWl0ZW1zJyk7XG5cbiAgICAgICAgaXNOZXdQcm9qZWN0ID0gdHJ1ZTtcblxuICAgICAgICBwcm9qZWN0c0Nob2ljZXMucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xuXG4gICAgICAgIG5ld1Byb2plY3RJbnB1dHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuXG4gICAgLy8gcmVjZWl2ZSBhbGwgZm9ybSBpbnB1dCBkYXRhXG5cblxuICAgIGNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1zdWJtaXQnKTtcblxuXG4gICAgXG5cblxuICAgIC8vIGNvbnN0IHRlc3RBcnJheSA9IFt0b2RvVGl0bGUsdG9kb0Rlc2MsZW50cnlUeXBlLHRvZG9EYXRlLHRvZG9SZW1pbmRlcix0b2RvUHJpb3JpdHkscHJvamVjdE9wdGlvbixwcm9qZWN0c0Nob2ljZXMscHJvamVjdFRpdGxlLHByb2plY3REZXNjLHByb2plY3REYXRlLHByb2plY3RSZW1pbmRlcixwcm9qZWN0UHJpb3JpdHldO1xuXG5cbiAgICBjb25zdCBhbGxGb3JtSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0taW5wdXQnKTtcbiAgICBcblxuICAgIFxuXG4gICAgZm9ybVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgXG5cbiAgICAgICAgLy8gY2xlYXIgY29sb3Igb24gcHJpb3JpdHkgYnV0dG9uXG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkSW5wdXQgPSBbXTtcblxuICAgICAgICBsZXQgcmVxdWlyZWRJbnB1dEZpbGxlZCA9IHRydWU7XG5cblxuICAgICAgICBhbGxGb3JtSW5wdXRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3JlcXVpcmVkJykpIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZElucHV0LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAoY29uc3QgZWFjaCBvZiByZXF1aXJlZElucHV0KSB7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgaWYoIWVhY2gudmFsdWUpe1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkSW5wdXRGaWxsZWQgPSBmYWxzZTsgICBcblxuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZihyZXF1aXJlZElucHV0RmlsbGVkKXtcblxuICAgICAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBoaWRlRm9ybSgpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgdG9kbyB3aXRoIGZvcm1cblxuICAgICAgICAgICAgY29uc3QgcmVzZXRBcnJheSA9IFtwcm9qZWN0VGl0bGUscHJvamVjdERlc2MscHJvamVjdERhdGUscHJvamVjdFJlbWluZGVyLHRvZG9UaXRsZSx0b2RvRGVzYyx0b2RvRGF0ZSx0b2RvUmVtaW5kZXJdO1xuXG4gICAgICAgICAgICBjb25zdCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAvLyB0YWJDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAvLyAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXRhYi1hY3RpdmUnKVxuICAgICAgICAgICAgLy8gfSk7XG5cblxuICAgICAgICAgICAgaWYobmV3UHJvamVjdFJhZGlvLmNoZWNrZWQpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3aHkgYXJlIHlvdSBydW5uaW5nPycpXG5cbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdFJlbWluZGVyLnZhbHVlIDwgMCB8fCBwcm9qZWN0UmVtaW5kZXIudmFsdWUgPiAzMCkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGhpZGVGb3JtKCk7XG5cbiAgICAgICAgICAgICAgICB0YWJDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS10YWItYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICBcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHByb2plY3RNb2R1bGUuY3JlYXRlUHJvamVjdChwcm9qZWN0VGl0bGUudmFsdWUscHJvamVjdERlc2MudmFsdWUscHJvamVjdERhdGUudmFsdWUscHJvamVjdFByaW9yaXR5LnZhbHVlLHByb2plY3RSZW1pbmRlci52YWx1ZSxgUGVuZGluZ2ApO1xuXG5cbiAgICAgICAgICAgICAgICB0b2RvTW9kdWxlLmNyZWF0ZVRvZG8odG9kb1RpdGxlLnZhbHVlLHRvZG9EZXNjLnZhbHVlLHRvZG9EYXRlLnZhbHVlLE51bWJlcih0b2RvUmVtaW5kZXIudmFsdWUpLHRvZG9Qcmlvcml0eS52YWx1ZSxgUGVuZGluZ2AscHJvamVjdFRpdGxlLnZhbHVlKTtcblxuXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL2V2ZXJ5dGltZSBzdWJtaXQgYnV0dG9uIGlzIGNsaWNrZWQgZnJlc2ggZHJvcGRvd24gaXMgY3JlYXRlZCBcbiAgICAgICAgICAgICAgICBmb3JtRG9tTW9kdWxlLmV4aXN0aW5nUHJvamVjdE9wdGlvbnMoKTtcblxuICAgICAgICAgICAgICAgIGNyZWF0ZVByb2plY3RET00oKTtcblxuICAgICAgICAgICAgICAgIGFsbFByb2plY3RzVGFiLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGFiLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgbWVudUluRGlzcGxheSA9ICdwcm9qZWN0cyc7XG5cbiAgICAgICAgICAgICAgICBwcmlvcml0eUluRGlzcGxheSA9IHByb2plY3RQcmlvcml0eS52YWx1ZTtcblxuXG4gICAgICAgICAgICAgICAgcmVzZXRBcnJheS5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgdXBkYXRlRGlzcGxheSgpO1xuXG4gXG5cblxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjcmVhdGUgdG8tZG9zIGFuZCBub3Rlc1xuXG4gICAgICAgICAgICB0b2RvTW9kdWxlLmNyZWF0ZVRvZG8odG9kb1RpdGxlLnZhbHVlLHRvZG9EZXNjLnZhbHVlLHRvZG9EYXRlLnZhbHVlLE51bWJlcih0b2RvUmVtaW5kZXIudmFsdWUpLHRvZG9Qcmlvcml0eS52YWx1ZSxgcGVuZGluZ2AscHJvamVjdHNDaG9pY2VzLnZhbHVlKTtcblxuXG4gICAgICAgICAgICAvL2V2ZXJ5dGltZSBzdWJtaXQgYnV0dG9uIGlzIGNsaWNrZWQgZnJlc2ggZHJvcGRvd24gaXMgY3JlYXRlZCBcbiAgICAgICAgICAgIGZvcm1Eb21Nb2R1bGUuZXhpc3RpbmdQcm9qZWN0T3B0aW9ucygpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0VG9kby5jaGVja2VkKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodG9kb1JlbWluZGVyLnZhbHVlIDwgMCB8fCB0b2RvUmVtaW5kZXIudmFsdWUgPiAzMCkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGhpZGVGb3JtKCk7XG5cbiAgICAgICAgICAgICAgICB0YWJDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS10YWItYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG9ET00oKTtcblxuICAgICAgICAgICAgICAgIGFsbFRvZG9zVGFiLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGFiLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgbWVudUluRGlzcGxheSA9ICd0b2Rvcyc7XG5cbiAgICAgICAgICAgICAgICBwcmlvcml0eUluRGlzcGxheSA9IHRvZG9Qcmlvcml0eS52YWx1ZTtcblxuICAgICAgICAgICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcblxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBpZiAoc2VsZWN0Tm90ZS5jaGVja2VkKSB7XG5cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBoaWRlRm9ybSgpO1xuXG4gICAgICAgICAgICAgICAgdGFiQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtdGFiLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgIGNyZWF0ZU5vdGVzRE9NKCk7XG5cbiAgICAgICAgICAgICAgICBhbGxOb3Rlc1RhYi5jbGFzc0xpc3QuYWRkKCdtZW51LXRhYi1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgIG1lbnVJbkRpc3BsYXkgPSAnbm90ZXMnO1xuXG4gICAgICAgICAgICAgICAgdXBkYXRlRGlzcGxheSgpO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgcmVzZXRBcnJheS5mb3JFYWNoKGlucHV0ID0+IHtcblxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIEZPUk0gSU5QVVQgQUNUSVZJVElFUyBFTkQgSEVSRVxuICAgICAgICBcblxuXG4gICAgfSk7XG5cblxuXG4gICAgLy8gRk9STSBBUFBFQVJBTkNFIEFDVElWSVRFUyBCRUdJTiBIRVJFXG5cblxuICAgIGZ1bmN0aW9uIGhpZGVGb3JtICgpe1xuXG5cbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LWZvcm0nKVxuXG4gICAgICAgIFxuXG4gICAgfVxuXG5cbiAgICAvLyBzdG9wIGV2ZW50IGJ1YmJsaW5nLlxuICAgIGVudHJ5Q3JlYXRpb25Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgfSlcblxuXG4gICAgZm9ybUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIGhpZGVGb3JtKCk7XG4gICAgICAgICAgICBcbiAgICB9KVxuXG4gICAgY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWJ1dHRvbicpO1xuXG4gICAgZm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Nob3ctZm9ybScpO1xuXG4gICAgICAgIGZvcm1Eb21Nb2R1bGUuZXhpc3RpbmdQcm9qZWN0T3B0aW9ucygpO1xuXG4gICAgICAgIGlmKHNlbGVjdE5vdGUuY2hlY2tlZCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0VG9kby5jaGVja2VkICYmIHNlbGVjdEV4aXN0aW5nUHJvamVjdC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgc2VsZWN0TmV3UHJvamVjdC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHNlbGVjdE5ld1Byb2plY3QuY2hlY2tlZCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTkVXIFBST0pFQ1QnKVxuICAgICAgICAgICAgY2hlY2tlZE5ld1Byb2plY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHNlbGVjdEV4aXN0aW5nUHJvamVjdC5jaGVja2VkKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFWElTVElORyBQUk9KRUNUJylcbiAgICAgICAgICAgIGNoZWNrZWRFeGlzdGluZ1Byb2plY3QoKTtcbiAgICAgICAgfVxuXG4gICAgfSlcblxuXG5cblxuXG4gICAgXG5cblxuXG5cblxuXG5cbiAgICBjb25zdCBhbGxUb2Rvc1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtdG9kb3MtdGFiJyk7XG5cbiAgICBhbGxUb2Rvc1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBcblxuICAgICAgICBjb25zb2xlLmxvZygnVE8gRE8gTElTVCcpO1xuXG4gICAgICAgIG1lbnVJbkRpc3BsYXkgPSAndG9kb3MnO1xuXG4gICAgICAgIGNyZWF0ZVRvZG9ET00oKTtcblxuICAgIH0pO1xuXG4gICAgY29uc3QgYWxsUHJvamVjdHNUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzLXRhYicpXG5cbiAgICBhbGxQcm9qZWN0c1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBjb25zb2xlLmxvZygnUFJPSkVDVFMgVEFCJyk7XG5cbiAgICAgICAgbWVudUluRGlzcGxheSA9ICdwcm9qZWN0cyc7XG5cbiAgICAgICAgY3JlYXRlUHJvamVjdERPTSgpXG5cbiAgICB9KVxuXG5cbiAgICBjb25zdCBhbGxOb3Rlc1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtbm90ZXMtdGFiJyk7XG5cbiAgICBhbGxOb3Rlc1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBjb25zb2xlLmxvZygnTk9URVMgTElTVCcpO1xuXG4gICAgICAgIG1lbnVJbkRpc3BsYXkgPSAnbm90ZXMnO1xuXG4gICAgICAgIGNyZWF0ZU5vdGVzRE9NKCk7XG5cbiAgICB9KVxuXG5cblxuXG4gICAgXG5cbn1cblxuXG4gLy8gUFJJT1JJVFkgQlVUVE9OIC0gVE9ET1NcblxuIGZ1bmN0aW9uIGNoYW5nZVRvZG9Qcmlvcml0eSgpe1xuICAgIGNvbnN0IGhpZ2hQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoLXByaW9yaXR5Jyk7XG4gICAgY29uc3QgbWVkaXVtUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVkaXVtLXByaW9yaXR5Jyk7XG4gICAgY29uc3QgbG93UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93LXByaW9yaXR5Jyk7XG5cbiAgICBpZiAoIWhpZ2hQcmlvcml0eUJ1dHRvbnx8IW1lZGl1bVByaW9yaXR5QnV0dG9ufHwhbG93UHJpb3JpdHlCdXR0b24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgaGlnaFByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgLy8gY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWJ1dHRvbnMnKTtcbiAgXG4gICAgICAgIC8vIHByaW9yaXR5QnV0dG9ucy5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy8gICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2hvc2VuLXByaW9yaXR5JylcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy8gaGlnaFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1wcmlvcml0eScpO1xuXG5cbiAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgbWVkaXVtUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtLXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgIGxvd1ByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2xvdy1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uKCdIaWdoJyk7XG5cbiAgICAgICAgcHJpb3JpdHlJbkRpc3BsYXkgPSAnSGlnaCc7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMT09QSU5HJylcblxuICAgIH0pO1xuXG4gICAgXG5cbiAgICBtZWRpdW1Qcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1idXR0b25zJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBwcmlvcml0eUJ1dHRvbnMucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIC8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nob3Nlbi1wcmlvcml0eScpXG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vIG1lZGl1bVByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1wcmlvcml0eScpO1xuXG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWdoLXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgIG1lZGl1bVByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lZGl1bS1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICBsb3dQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdsb3ctcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgcG9wdWxhdGVUb2RvQ29sbGVjdGlvbignTWVkaXVtJyk7XG5cbiAgICAgICAgcHJpb3JpdHlJbkRpc3BsYXkgPSAnTWVkaXVtJztcbiAgICAgICAgY29uc29sZS5sb2coJ0xPT1BJTkcnKVxuICAgIH0pO1xuXG5cbiAgIFxuICAgIGxvd1ByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgIC8vIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1idXR0b25zJyk7XG5cbiAgICAgICAgLy8gcHJpb3JpdHlCdXR0b25zLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nob3Nlbi1wcmlvcml0eScpXG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vIGxvd1ByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1wcmlvcml0eScpO1xuXG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWdoLXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgIG1lZGl1bVByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bS1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICBsb3dQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsb3ctcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgcG9wdWxhdGVUb2RvQ29sbGVjdGlvbignTG93Jyk7XG5cbiAgICAgICAgcHJpb3JpdHlJbkRpc3BsYXkgPSAnTG93JztcbiAgICAgICAgY29uc29sZS5sb2coJ0xPT1BJTkcnKVxuICAgIH0pO1xuICAgfVxuXG5cblxuXG4gICBmdW5jdGlvbiBjaGFuZ2VQcm9qZWN0UHJpb3JpdHkoKXtcbiAgICBjb25zdCBoaWdoUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaC1wcmlvcml0eScpO1xuICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lZGl1bS1wcmlvcml0eScpO1xuICAgIGNvbnN0IGxvd1ByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvdy1wcmlvcml0eScpO1xuXG4gICAgaWYgKCFoaWdoUHJpb3JpdHlCdXR0b258fCFtZWRpdW1Qcmlvcml0eUJ1dHRvbnx8IWxvd1ByaW9yaXR5QnV0dG9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1idXR0b25zJyk7XG4gIFxuICAgICAgICAvLyBwcmlvcml0eUJ1dHRvbnMucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIC8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nob3Nlbi1wcmlvcml0eScpXG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vIGhpZ2hQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKTtcblxuXG5cblxuICAgICAgICBoaWdoUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICBtZWRpdW1Qcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtZWRpdW0tcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbG93LXByaW9yaXR5LWNob3NlbicpO1xuXG5cblxuICAgICAgICBhcHBlbmRQcm9qZWN0T2JqZWN0cygnSGlnaCcpO1xuXG4gICAgICAgIHByaW9yaXR5SW5EaXNwbGF5ID0gJ0hpZ2gnO1xuICAgICAgICBjb25zb2xlLmxvZygnTE9PUElORycpXG5cbiAgICB9KTtcblxuICAgIFxuXG4gICAgbWVkaXVtUHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgICAgICAvLyBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYnV0dG9ucycpO1xuICAgICAgICBcbiAgICAgICAgLy8gcHJpb3JpdHlCdXR0b25zLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAvLyAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaG9zZW4tcHJpb3JpdHknKVxuICAgICAgICAvLyB9KTtcblxuICAgICAgICAvLyBtZWRpdW1Qcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKTtcblxuXG5cbiAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2gtcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgbWVkaXVtUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgIGxvd1ByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2xvdy1wcmlvcml0eS1jaG9zZW4nKTtcblxuXG5cbiAgICAgICAgYXBwZW5kUHJvamVjdE9iamVjdHMoJ01lZGl1bScpO1xuXG4gICAgICAgIHByaW9yaXR5SW5EaXNwbGF5ID0gJ01lZGl1bSc7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMT09QSU5HJylcbiAgICB9KTtcblxuXG4gICBcbiAgICBsb3dQcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICAvLyBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYnV0dG9ucycpO1xuXG4gICAgICAgIC8vIHByaW9yaXR5QnV0dG9ucy5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaG9zZW4tcHJpb3JpdHknKVxuICAgICAgICAvLyB9KTtcblxuICAgICAgICAvLyBsb3dQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKTtcblxuICAgICAgICBoaWdoUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaC1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICBtZWRpdW1Qcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtZWRpdW0tcHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnbG93LXByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgICAgIGFwcGVuZFByb2plY3RPYmplY3RzKCdMb3cnKTtcblxuICAgICAgICBwcmlvcml0eUluRGlzcGxheSA9ICdMb3cnO1xuICAgICAgICBjb25zb2xlLmxvZygnTE9PUElORycpXG4gICAgfSk7XG4gICB9XG5cblxuICAgZnVuY3Rpb24gdXBkYXRlVG9kb0l0ZW0gKG9iamVjdCl7XG5cbiAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGlzcGxheScpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9VcGRhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby11cGRhdGUnKTtcblxuICAgICAgICB0b2RvVXBkYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcblxuICAgICAgICBjb25zdCBuZXdUb2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LXRpdGxlJylcbiAgICAgICAgY29uc3QgbmV3VG9kb0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LWRlc2MnKTtcbiAgICAgICAgY29uc3QgbmV3VG9kb0R1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRpc3BsYXktZGF0ZScpO1xuICAgICAgICBjb25zdCBuZXdUb2RvUmVtaW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LXJlbWluZC1pbicpO1xuICAgICAgICBjb25zdCBuZXdUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LXByaW9yaXR5Jyk7XG4gICAgICAgIGNvbnN0IG5ld1RvZG9TdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LXN0YXR1cycpO1xuICAgICAgICBjb25zdCBuZXdUb2RvUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRpc3BsYXktY2hvaWNlcycpO1xuXG5cbiAgICAgICAgY29uc3QgaW5wdXRBcnJheXMgPSBbbmV3VG9kb1RpdGxlLnZhbHVlLG5ld1RvZG9EZXNjLnZhbHVlLG5ld1RvZG9EdWUudmFsdWUsbmV3VG9kb1JlbWluZGVyLnZhbHVlLG5ld1RvZG9Qcmlvcml0eS52YWx1ZSxuZXdUb2RvU3RhdHVzLnZhbHVlLG5ld1RvZG9Qcm9qZWN0LnZhbHVlXVxuXG4gICAgICAgIGNvbnN0IGVtcHR5SW5wdXQgPSBbXVxuXG4gICAgICAgIGlucHV0QXJyYXlzLmZvckVhY2goZWxlbWVudCA9PiB7XG5cbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVtcHR5SW5wdXQucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG4gICAgICAgIGlmIChlbXB0eUlucHV0Lmxlbmd0aCA+IDAgfHwgbmV3VG9kb1JlbWluZGVyLnZhbHVlIDwgMCB8fCBuZXdUb2RvUmVtaW5kZXIudmFsdWUgPiAzMCkge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRklMVEVSSU5HIFdPUktTJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICBcblxuICAgICAgICBsZXQgbmV3RGV0YWlscyA9IHtcbiAgICAgICAgICAgIG5ld1RpdGxlOiBuZXdUb2RvVGl0bGUudmFsdWUsXG4gICAgICAgICAgICBuZXdEZXNjOiBuZXdUb2RvRGVzYy52YWx1ZSxcbiAgICAgICAgICAgIG5ld0R1ZTogbmV3VG9kb0R1ZS52YWx1ZSxcbiAgICAgICAgICAgIG5ld1JlbWluZGVyOiBuZXdUb2RvUmVtaW5kZXIudmFsdWUsXG4gICAgICAgICAgICBuZXdQcmlvcml0eTogbmV3VG9kb1ByaW9yaXR5LnZhbHVlLFxuICAgICAgICAgICAgbmV3U3RhdHVzOiBuZXdUb2RvU3RhdHVzLnZhbHVlLFxuICAgICAgICAgICAgbmV3UHJvamVjdDogbmV3VG9kb1Byb2plY3QudmFsdWUsXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRvZG9Nb2R1bGUudXBkYXRlVG9kbyhvYmplY3QsbmV3RGV0YWlscyk7XG5cbiAgICAgICAgXG5cbiAgICAgICAgLy8gdGhpcyBydW5zIGV2ZW4gaW4gYSBub3JtYWwgdG9kbyB1cGRhdGVcblxuICAgICAgICBpZiAobWVudUluRGlzcGxheSA9PT0gJ3Byb2plY3RzJykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoY2xpY2tlZFByb2plY3QpIHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUT0RPIFBST0pFQ1QgVVBEQVRFJylcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBnZXRMYXRlc3RQcm9qZWN0T2JqZWN0ID0gcHJvamVjdE9iamVjdCgpLnVucHJvY2Vzc2VkUHJvamVjdEFycmF5O1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdldExhdGVzdFByb2plY3RPYmplY3QpXG4gICAgXG4gICAgICAgICAgICAgICAgbGV0IGxhdGVzdFByb2plY3QgPSAnJztcbiAgICBcbiAgICAgICAgICAgICAgICBnZXRMYXRlc3RQcm9qZWN0T2JqZWN0LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjbGlja2VkUHJvamVjdCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSBjbGlja2VkUHJvamVjdC50aXRsZSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QuZGVzYyA9PT0gY2xpY2tlZFByb2plY3QuZGVzYyAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QuZHVlRGF0ZSA9PT0gY2xpY2tlZFByb2plY3QuZHVlRGF0ZSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QucmVtaW5kSW4gPT09IGNsaWNrZWRQcm9qZWN0LnJlbWluZEluICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5wcmlvcml0eSA9PT0gY2xpY2tlZFByb2plY3QucHJpb3JpdHkgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnN0YXR1cyA9PT0gY2xpY2tlZFByb2plY3Quc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVzdFByb2plY3QgPSBwcm9qZWN0O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICAgICAgZGlzcGxheVByb2plY3QobGF0ZXN0UHJvamVjdClcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUFJPSkVDVCBVUERBVEVEPz8/Pz8nKTtcbiAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuICAgICAgICAvLyBORUVEIFRPIEZJWCBUSElTXG5cbiAgICAgICAgaWYgKG1lbnVJbkRpc3BsYXkgPT09ICd0b2RvcycpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJpb3JpdHlJbkRpc3BsYXkgPSBuZXdUb2RvUHJpb3JpdHkudmFsdWU7XG5cbiAgICAgICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdG9kb0Rpc3BsYXlDb250YWluZXIucmVtb3ZlKCk7XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBcbiAgICAgICAgdG9kb0Rpc3BsYXlDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0b2RvRGlzcGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KVxuXG5cblxuICAgIH1cblxuXG5cblxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTm90ZUl0ZW0gKG9iamVjdCl7XG5cbiAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGlzcGxheScpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9VcGRhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby11cGRhdGUnKTtcblxuXG5cblxuXG4gICAgICAgIHRvZG9VcGRhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIGNvbnN0IG5ld1RvZG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRpc3BsYXktdGl0bGUnKVxuICAgICAgICBjb25zdCBuZXdUb2RvRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRpc3BsYXktZGVzYycpO1xuXG5cblxuICAgICAgICBjb25zdCBpbnB1dEFycmF5cyA9IFtuZXdUb2RvVGl0bGUudmFsdWUsbmV3VG9kb0Rlc2MudmFsdWVdXG5cbiAgICAgICAgY29uc3QgZW1wdHlJbnB1dCA9IFtdXG5cbiAgICAgICAgaW5wdXRBcnJheXMuZm9yRWFjaChlbGVtZW50ID0+IHtcblxuICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZW1wdHlJbnB1dC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgaWYgKGVtcHR5SW5wdXQubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRklMVEVSSU5HIFdPUktTJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBcblxuICAgICAgICBsZXQgbmV3RGV0YWlscyA9IHtcbiAgICAgICAgICAgIG5ld1RpdGxlOiBuZXdUb2RvVGl0bGUudmFsdWUsXG4gICAgICAgICAgICBuZXdEZXNjOiBuZXdUb2RvRGVzYy52YWx1ZSxcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdG9kb01vZHVsZS51cGRhdGVUb2RvKG9iamVjdCxuZXdEZXRhaWxzKTtcblxuICAgICAgICBtZW51SW5EaXNwbGF5ID0gJ25vdGVzJ1xuXG4gICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcblxuICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIFxuICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRvZG9EaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pXG5cblxuXG4gICAgfVxuXG5cblxuXG5cblxuXG5cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RJdGVtIChwcm9qZWN0KXtcblxuXG4gICAgICAgIGNvbnN0IHByb2plY3REaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdG9kby1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRldGFpbHMnKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VXBkYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdXBkYXRlJyk7XG5cbiAgICAgICAgcHJvamVjdFVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgICAgIC8vIHByb2plY3Qtc3RhdHVzLXVwZGF0ZVxuXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlLXVwZGF0ZScpXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3REZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGVzYy11cGRhdGUnKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdER1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRhdGUtdXBkYXRlJyk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RSZW1pbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXJlbWluZGVyLXVwZGF0ZScpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1wcmlvcml0eS11cGRhdGUnKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXN0YXR1cy11cGRhdGUnKTtcblxuXG5cbiAgICAgICAgY29uc3QgaW5wdXRBcnJheXMgPSBbbmV3UHJvamVjdFRpdGxlLnZhbHVlLG5ld1Byb2plY3REZXNjLnZhbHVlLG5ld1Byb2plY3REdWUudmFsdWUsbmV3UHJvamVjdFJlbWluZGVyLnZhbHVlLG5ld1Byb2plY3RQcmlvcml0eS52YWx1ZSxuZXdQcm9qZWN0U3RhdHVzLnZhbHVlXVxuXG4gICAgICAgIGNvbnN0IGVtcHR5SW5wdXQgPSBbXVxuXG4gICAgICAgIGlucHV0QXJyYXlzLmZvckVhY2goZWxlbWVudCA9PiB7XG5cbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVtcHR5SW5wdXQucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG4gICAgICAgIGlmIChlbXB0eUlucHV0Lmxlbmd0aCA+IDAgfHwgbmV3UHJvamVjdFJlbWluZGVyLnZhbHVlIDwgMCB8fCBuZXdQcm9qZWN0UmVtaW5kZXIudmFsdWUgPiAzMCkge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRklMVEVSSU5HIFdPUktTJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgbGV0IG5ld0RldGFpbHMgPSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhpc1xuICAgICAgICAgICAgbmV3VGl0bGU6IG5ld1Byb2plY3RUaXRsZS52YWx1ZSxcbiAgICAgICAgICAgIG5ld0Rlc2M6IG5ld1Byb2plY3REZXNjLnZhbHVlLFxuICAgICAgICAgICAgbmV3RHVlOiBuZXdQcm9qZWN0RHVlLnZhbHVlLFxuICAgICAgICAgICAgbmV3UmVtaW5kZXI6IG5ld1Byb2plY3RSZW1pbmRlci52YWx1ZSxcbiAgICAgICAgICAgIG5ld1ByaW9yaXR5OiBuZXdQcm9qZWN0UHJpb3JpdHkudmFsdWUsXG4gICAgICAgICAgICBuZXdTdGF0dXM6IG5ld1Byb2plY3RTdGF0dXMudmFsdWUsXG4gICAgICAgIH1cblxuXG4gICAgICAgIHByb2plY3RNb2R1bGUudXBkYXRlUHJvamVjdChwcm9qZWN0LG5ld0RldGFpbHMpO1xuXG4gICAgICAgIG1lbnVJbkRpc3BsYXkgPSAncHJvamVjdHMnXG5cbiAgICAgICAgcHJpb3JpdHlJbkRpc3BsYXkgPSBuZXdQcm9qZWN0UHJpb3JpdHkudmFsdWU7XG5cbiAgICAgICAgdXBkYXRlRGlzcGxheSgpO1xuXG4gICAgICAgIHByb2plY3REaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgXG4gICAgICAgIHByb2plY3REaXNwbGF5Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgcHJvamVjdERpc3BsYXlDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcHJvamVjdERpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSlcblxuXG5cbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gcG9wVXBmb3JEZWxldGUoZGVsZXRlT2JqRm4pe1xuICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgcG9wVXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9wVXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncG9wLXVwLWNvbnRhaW5lcicpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZChwb3BVcENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwb3BVcC5jbGFzc0xpc3QuYWRkKCdwb3AtdXAnKTtcbiAgICAgICAgICAgIHBvcFVwQ29udGFpbmVyLmFwcGVuZChwb3BVcCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwb3BVcENvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwb3BVcENvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgncG9wLXVwLWNvbnRlbnQtZGl2JylcbiAgICAgICAgICAgICAgICBwb3BVcC5hcHBlbmQocG9wVXBDb250ZW50RGl2KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcFVwQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwb3BVcENvbnRlbnQudGV4dENvbnRlbnQgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzPydcbiAgICAgICAgICAgICAgICAgICAgcG9wVXBDb250ZW50RGl2LmFwcGVuZChwb3BVcENvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BvcC11cC1idXR0b24tY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgcG9wVXAuYXBwZW5kKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeWVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIHllc0J1dHRvbi50ZXh0Q29udGVudCA9ICdZZXMnO1xuICAgICAgICAgICAgICAgICAgICB5ZXNCdXR0b24uY2xhc3NMaXN0LmFkZCgneWVzLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKHllc0J1dHRvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgeWVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9wVXBDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVPYmpGbigpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBub0J1dHRvbi50ZXh0Q29udGVudCA9ICdObyc7XG4gICAgICAgICAgICAgICAgICAgIG5vQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25vLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKG5vQnV0dG9uKTtcblxuICAgICAgICAgICAgICAgICAgICBub0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcFVwQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG5cblxuICAgIH1cblxuXG5cbiAgICBcblxuXG5cbiAgICBmdW5jdGlvbiBkZWxldGVUb2RvSXRlbSAob2JqZWN0KXtcblxuICAgICAgICBjb25zdCB0b2RvRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRpc3BsYXktY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaXNwbGF5Jyk7XG5cbiAgICAgICAgY29uc3QgdG9kb0RlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRlbGV0ZScpO1xuXG4gICAgICAgIHRvZG9EZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cblxuICAgICAgICAgICAgZnVuY3Rpb24gZGVsZXRlVG9kbygpe1xuXG4gICAgICAgICAgICAgICAgdG9kb01vZHVsZS5kZWxldGVUb2RvKG9iamVjdCk7XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVEaXNwbGF5KClcblxuICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb3BVcGZvckRlbGV0ZShkZWxldGVUb2RvKTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgdG9kb0Rpc3BsYXlDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdG9kb0Rpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdEl0ZW0gKG9iamVjdCl7XG5cblxuICAgICAgICBjb25zdCBwcm9qZWN0RGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRvZG8tY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1kZXRhaWxzJyk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdERlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRlbGV0ZScpO1xuXG4gICAgICAgIFxuXG4gICAgICAgIHByb2plY3REZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QgKCl7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0TW9kdWxlLmRlbGV0ZVByb2plY3Qob2JqZWN0KTtcblxuICAgICAgICAgICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBvcFVwZm9yRGVsZXRlKGRlbGV0ZVByb2plY3QpO1xuICAgICAgICBcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBwcm9qZWN0RGlzcGxheUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHByb2plY3REaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHByb2plY3REaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cblxuXG4gICAgLy8gc2VuZCB0byBhbGwgcG9wdWxhdGUgbW9kdWxlc1xuICAgIGZ1bmN0aW9uIGVtcHR5RGlzcGxheSgpe1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb24tY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25Db250YWluZXJJdGVtcyA9IFtdO1xuXG4gICAgICAgIGlmKGNvbGxlY3Rpb25Db250YWluZXIpe1xuICAgICAgICAgICAgY29sbGVjdGlvbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uQ29udGFpbmVySXRlbXMucHVzaChlbGVtZW50KVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjb2xsZWN0aW9uQ29udGFpbmVySXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzcGxheUVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGlzcGxheUVtcHR5LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktZW1wdHknKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5RW1wdHkudGV4dENvbnRlbnQgPSAnRU1QVFknO1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25Db250YWluZXIuYXBwZW5kKGRpc3BsYXlFbXB0eSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3Rlc0NvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtY29sbGVjdGlvbicpO1xuICAgICAgICBjb25zdCBub3Rlc0NvbGxlY3Rpb25JdGVtcyA9IFtdO1xuXG4gICAgICAgIGlmIChub3Rlc0NvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgIG5vdGVzQ29sbGVjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBub3Rlc0NvbGxlY3Rpb25JdGVtcy5wdXNoKGVsZW1lbnQpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG5vdGVzQ29sbGVjdGlvbkl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG5vdGVzQ29sbGVjdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXNwbGF5RW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5RW1wdHkuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlFbXB0eS50ZXh0Q29udGVudCA9ICdFTVBUWSc7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbkNvbnRhaW5lci5hcHBlbmQoZGlzcGxheUVtcHR5KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUR1cmF0aW9uKGRhdGUpe1xuXG4gICAgICAgIGNvbnN0IHNwbGl0RGF0ZSA9IGRhdGUuc3BsaXQoJy0nKTtcblxuICAgICAgICBjb25zdCBtb250aEFycmF5ID0gWydKYW51YXJ5JywnRmVicnVhcnknLCdNYXJjaCcsJ0FwcmlsJywnTWF5JywnSnVuZScsJ0p1bHknLCdBdWd1c3QnLCdTZXB0ZW1iZXInLCdPY3RvYmVyJywnTm92ZW1iZXInLCdEZWNlbWJlciddO1xuXG4gICAgICAgIHJldHVybiBgRHVlOiAke051bWJlcihzcGxpdERhdGVbMl0pfSAke21vbnRoQXJyYXlbc3BsaXREYXRlWzFdLTFdfSAke3NwbGl0RGF0ZVswXX1gO1xuXG4gICAgfVxuXG4gIFxuXG4gICBcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFjdGl2aXRpZXNNb2R1bGU7XG5cbmV4cG9ydCB7Y2hhbmdlVG9kb1ByaW9yaXR5LCBjaGFuZ2VQcm9qZWN0UHJpb3JpdHksIHVwZGF0ZVRvZG9JdGVtLCB1cGRhdGVQcm9qZWN0SXRlbSwgdXBkYXRlTm90ZUl0ZW0sIGRlbGV0ZVRvZG9JdGVtLCBkZWxldGVQcm9qZWN0SXRlbSxlbXB0eURpc3BsYXksZGlzcGxheUR1cmF0aW9ufTtcblxuIiwiaW1wb3J0IHRvZG9Nb2R1bGUgZnJvbSBcIi4uL2NyZWF0ZVRvZG9zXCI7XG5cbmltcG9ydCBwcm9qZWN0TW9kdWxlIGZyb20gXCIuLi9jcmVhdGVQcm9qZWN0c1wiO1xuXG5mdW5jdGlvbiBzb3J0aW5nTW9kdWxlICgpe1xuXG5cbiAgICAgLy8gU28gdGhhdCBpdCBkb2VzIG5vdCBtZXNzIHdpdGggdGhlIG9yaWdpbmFsIGFycmF5XG5cbiAgICBmdW5jdGlvbiBjbG9uZU9iamVjdCgpe1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RBcnJheVJlZmVyZW5jZSA9IHByb2plY3RNb2R1bGUucHJvamVjdEFycmF5O1xuXG4gICAgICAgIGNvbnN0IGNsb25lUHJvamVjdEFycmF5ID0gW107XG5cblxuICAgICAgICBjb25zdCB0b2RvQXJyYXlSZWZlcmVuY2UgPSB0b2RvTW9kdWxlLnRvZG9BcnJheTtcblxuICAgICAgICBjb25zdCBjbG9uZVRvZG9BcnJheSA9IFtdO1xuICAgICAgICBcblxuICAgICAgICB0b2RvQXJyYXlSZWZlcmVuY2UuZm9yRWFjaCh0b2RvT2JqZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsb25lZFRvRG8gPSBPYmplY3QuYXNzaWduKHt9LHRvZG9PYmplY3QpO1xuICAgICAgICAgICAgY2xvbmVUb2RvQXJyYXkucHVzaChjbG9uZWRUb0RvKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvamVjdEFycmF5UmVmZXJlbmNlLmZvckVhY2gocHJvamVjdE9iamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZWRQcm9qZWN0ID0gT2JqZWN0LmFzc2lnbih7fSxwcm9qZWN0T2JqZWN0KTtcbiAgICAgICAgICAgIGNsb25lUHJvamVjdEFycmF5LnB1c2goY2xvbmVkUHJvamVjdCk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgcmV0dXJuIHtjbG9uZVByb2plY3RBcnJheSxjbG9uZVRvZG9BcnJheX1cblxuXG4gICAgfVxuXG4gICAgXG5cbiAgICAvLyBzb3J0cyB0aGUgdG8gZG9zIGFjY29yZGluZyB0byB0aGUgcHJvamVjdCBuYW1lIGlzIGhhcyBiZWVuIGFzc2lnbmVkIHRvXG4gICAgLy8gUmVuYW1lIHRoaXMgdG8gcHJvamVjdCBzb3J0ZXJcbiAgICBmdW5jdGlvbiBzb3J0QnlQcm9qZWN0TmFtZSgpe1xuXG5cbiAgICAgICAgY29uc3QgY2xvbmVQcm9qZWN0QXJyYXkgPSBjbG9uZU9iamVjdCgpLmNsb25lUHJvamVjdEFycmF5XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjbG9uZVRvZG9BcnJheSA9IGNsb25lT2JqZWN0KCkuY2xvbmVUb2RvQXJyYXlcblxuICAgICAgICBsZXQgcHJvY2Vzc2VkUHJvamVjdEFycmF5QnlOYW1lID0gW107XG5cbiAgICAgICAgY2xvbmVQcm9qZWN0QXJyYXkuZm9yRWFjaChwcm9qZWN0T2JqZWN0ID0+IHtcblxuICAgICAgICAgICAgcHJvamVjdE9iamVjdC50b2RvQ29sbGVjdGlvbiA9IFtdO1xuXG4gICAgICAgICAgICBjbG9uZVRvZG9BcnJheS5mb3JFYWNoKHRvZG9PYmplY3QgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3RPYmplY3QudGl0bGUgPT09IHRvZG9PYmplY3QucHJvamVjdCkge1xuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0T2JqZWN0LnRvZG9Db2xsZWN0aW9uLnB1c2godG9kb09iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHByb2Nlc3NlZFByb2plY3RBcnJheUJ5TmFtZS5wdXNoKHByb2plY3RPYmplY3QpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgcmV0dXJuIHtwcm9jZXNzZWRQcm9qZWN0QXJyYXlCeU5hbWV9O1xuXG4gICAgfVxuXG5cblxuXG5cblxuXG5cbiAgICBmdW5jdGlvbiBwcmlvcml0eVNvcnRlcih1bnByb2Nlc3NlZEFycmF5KXtcblxuICAgICAgICBjb25zdCBwcmlvcml0aWVzID0gWydIaWdoJywnTWVkaXVtJywnTG93J107XG5cbiAgICAgICAgY29uc3Qgb2JqZWN0c0J5UHJpb3JpdHkgPSB7SGlnaDpbXSxNZWRpdW06W10sTG93OltdfTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJpb3JpdGllcy5sZW5ndGg7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgdW5wcm9jZXNzZWRBcnJheS5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5wcmlvcml0eSA9PT0gcHJpb3JpdGllc1tpbmRleF0pe1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RzQnlQcmlvcml0eVtwcmlvcml0aWVzW2luZGV4XV0ucHVzaChvYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqZWN0c0J5UHJpb3JpdHk7XG5cblxuICAgIH1cblxuXG5cblxuICAgIGZ1bmN0aW9uIHNvcnREdWVEYXRlIChBcnJheSl7XG5cbiAgICAgICAgLy8gVXNlIHRoaXMgdG8gc29ydCBwcm9qZWN0cyBhbmQgdG9kb3NcblxuICAgICAgICAvLyBzb3J0cyBhcnJheSBpbiBhc2NlbmRpbmcgb3JkZXIgYWNjb3JkaW5nIHRvIGR1ZSBkYXRlXG4gICAgICAgIGFzY2VuZGluZ1NvcnQoQXJyYXkpO1xuXG4gICAgICAgIGNvbnN0IGR1ZVNvcnRlZEFycmF5ID0ge1xuICAgICAgICAgICAgbm90ZXM6W10sXG4gICAgICAgICAgICBvdmVyZHVlOltdLFxuICAgICAgICAgICAgZHVlOltdLFxuICAgICAgICAgICAgdXBjb21pbmc6W10sXG4gICAgICAgICAgICBjb21wbGV0ZTpbXVxuICAgICAgICB9O1xuXG4gICAgICAgIEFycmF5LmZvckVhY2gob2JqZWN0ID0+IHtcblxuXG4gICAgICAgICAgICAvLyBOb3RlcyAtIHRvIGJlIGlzb2xhdGVkICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCFvYmplY3QuZHVlRGF0ZSl7XG5cbiAgICAgICAgICAgICAgICBkdWVTb3J0ZWRBcnJheS5ub3Rlcy5wdXNoKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENvbXBsZXRlXG4gICAgICAgICAgICBpZihvYmplY3Quc3RhdHVzID09PSAnQ29tcGxldGUnKXtcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGR1ZVNvcnRlZEFycmF5LmNvbXBsZXRlLnB1c2gob2JqZWN0KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3ZlcmR1ZVxuICAgICAgICAgICAgaWYoKG9iamVjdC5kdXJhdGlvbkxlZnQuZGF5TGVmdCkgPCAwKXtcblxuICAgICAgICAgICAgICAgIGR1ZVNvcnRlZEFycmF5Lm92ZXJkdWUucHVzaChvYmplY3QpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIER1ZVxuICAgICAgICAgICAgaWYgKCgob2JqZWN0LmR1cmF0aW9uTGVmdC5kYXlMZWZ0KSA8PSBvYmplY3QucmVtaW5kSW4pICYmICgob2JqZWN0LmR1cmF0aW9uTGVmdC5kYXlMZWZ0KSA+PSAwKSl7XG5cbiAgICAgICAgICAgICAgICBkdWVTb3J0ZWRBcnJheS5kdWUucHVzaChvYmplY3QpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGNvbWluZ1xuICAgICAgICAgICAgaWYoKG9iamVjdC5kdXJhdGlvbkxlZnQuZGF5TGVmdCkgPiBvYmplY3QucmVtaW5kSW4pe1xuXG4gICAgICAgICAgICAgICAgZHVlU29ydGVkQXJyYXkudXBjb21pbmcucHVzaChvYmplY3QpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkdWVTb3J0ZWRBcnJheSk7XG5cbiAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4gZHVlU29ydGVkQXJyYXk7ICAgIFxuICAgICBcblxuICAgIH1cblxuXG5cbiAgICAvLyBTb3J0cyBvYmplY3RzIGluIEFycmF5IHRvIGFzY2VuZGluZyBvcmRlciBhY2NvcmRpbmcgdG8gZHVlIGRhdGVcbiAgICBmdW5jdGlvbiBhc2NlbmRpbmdTb3J0IChBcnJheSl7XG5cbiAgICAgICAgLy8gQXNzaWduIGR1cmF0aW9uIGxlZnRcbiAgICAgICAgQXJyYXkuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0T2JqZWN0RHVlRGF0ZSA9IGludGVydmFsKG9iamVjdC5kdWVEYXRlKTtcbiAgICAgICAgICAgIG9iamVjdC5kdXJhdGlvbkxlZnQgPSBmb3JtYXRPYmplY3REdWVEYXRlO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IGRhdGVBcnJheSA9IFtdO1xuICAgICAgICBjb25zdCBzb3J0ZWRBcnJheSA9IFtdO1xuXG5cbiAgICAgICAgQXJyYXkuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICAgICAgLy8gb2JqZWN0LmR1cmF0aW9uTGVmdC5kYXlMZWZ0XG4gICAgICAgICAgICBkYXRlQXJyYXkucHVzaChvYmplY3QuZHVyYXRpb25MZWZ0LmRheUxlZnQpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRhdGVBcnJheS5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGEtYn0pO1xuXG4gICAgICAgIGRhdGVBcnJheS5mb3JFYWNoKGRhdGUgPT4ge1xuXG5cbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZSA9PT0gQXJyYXlbaW5kZXhdLmR1cmF0aW9uTGVmdC5kYXlMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRlZEFycmF5LnB1c2goQXJyYXlbaW5kZXhdKTtcblxuICAgICAgICAgICAgICAgICAgICBBcnJheS5zcGxpY2UoaW5kZXgsMSlcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgIFxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFB1c2ggc29ydGVkIGFycmF5IHRvIG9yaWdpbmFsIGFycmF5XG4gICAgICAgIHNvcnRlZEFycmF5LmZvckVhY2goc29ydGVkT2JqID0+IHtcbiAgICAgICAgICAgIEFycmF5LnB1c2goc29ydGVkT2JqKVxuICAgICAgICB9KTtcbiAgICAgICAgXG5cblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gaW50ZXJ2YWwoZGF0ZSl7XG5cbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXkgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudE1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKSsxO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcblxuXG5cbiAgICAgICAgLy8gY29uc3QgZm9ybWF0dGVkQ3VycmVudERhdGUgPSBbeWVhcixtb250aCxkYXldO1xuXG5cbiAgICAgICAgLy8gW3l5eXksbW0sZGRdXG4gICAgICAgIGNvbnN0IHNwbGl0T2JqRGF0ZSA9IGRhdGUuc3BsaXQoJy0nKTtcblxuICAgICAgICBjb25zdCB5ZWFyc0xlZnQgPSBzcGxpdE9iakRhdGVbMF0gLSBjdXJyZW50WWVhcjtcblxuICAgICAgICBjb25zdCBtb250aHNMZWZ0ID0gc3BsaXRPYmpEYXRlWzFdIC0gY3VycmVudE1vbnRoO1xuXG4gICAgICAgIC8vIGNvbnN0IGRheUxlZnQgPSBzcGxpdE9iakRhdGVbMl0gLSBjdXJyZW50RGF5O1xuXG4gICAgICAgIC8vIGlmIGl0IGlzIG5leHQgbW9udGggb3IgbW9yZSwgYWRkIDMwIGRheXMgbXVsdGlwbGllZCBieSB0aGUgbnVtYmVyIG9mIGV4dHJhIG1vbnRocyAoZm9yIG1vcmUgZmlsdGVyaW5nIGFjY3VyYWN5KVxuICAgICAgICBjb25zdCBkYXlMZWZ0ID0gKDMwICogKG1vbnRoc0xlZnQpKSArIChzcGxpdE9iakRhdGVbMl0gLSBjdXJyZW50RGF5KTtcblxuXG4gICAgICAgIFxuXG5cbiAgICAgICAgY29uc3QgaW50ZXJ2YWxPYmogPSB7ZGF5TGVmdCxtb250aHNMZWZ0LHllYXJzTGVmdH07XG5cblxuXG4gICAgXG4gICAgICAgIHJldHVybiBpbnRlcnZhbE9ialxuICAgIH1cblxuXG5cbiAgICAgICAgXG5cbiAgICBmdW5jdGlvbiBub3RlU29ydGVyKHVucHJvY2Vzc2VkQXJyYXkpe1xuXG4gICAgICAgIGNvbnN0IG5vdGVPYmplY3RzID0gW11cblxuICAgICAgICB1bnByb2Nlc3NlZEFycmF5LmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoIW9iai5kdWVEYXRlKXtcblxuICAgICAgICAgICAgICAgIG5vdGVPYmplY3RzLnB1c2gob2JqKVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5vdGVPYmplY3RzO1xuXG5cbiAgICB9XG5cblxuXG4gICBcblxuICAgIHJldHVybiB7Y2xvbmVPYmplY3Qsc29ydEJ5UHJvamVjdE5hbWUscHJpb3JpdHlTb3J0ZXIsc29ydER1ZURhdGUsbm90ZVNvcnRlcn1cblxufVxuXG5jb25zdCBpbml0aWFsaXplZFNvcnRUb0RvTW9kdWxlID0gc29ydGluZ01vZHVsZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplZFNvcnRUb0RvTW9kdWxlOyIsIi8vIGltcG9ydCBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uIGZyb20gXCIuL3BvcHVsYXRlRE9NVG9kb0NvbGxlY3Rpb25cIlxuXG5pbXBvcnQgYXBwZW5kTm90ZXNPYmplY3QgZnJvbSBcIi4vcG9wdWxhdGVET01Ob3RlQ29sbGVjdGlvblwiO1xuXG5mdW5jdGlvbiBhbGxOb3RlRE9NTW9kdWxlICgpe1xuXG4gICAgY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG5cblxuXG4gICAgLy8gbW92ZSB0byBkb21BY3Rpdml0eVxuICAgIGZ1bmN0aW9uIHJlbW92ZUV4aXN0aW5nRGlzcGxheURPTSAoKXtcblxuICAgICAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktY29udGFpbmVyJyk7XG5cbiAgICAgICAgZGlzcGxheUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICB9KTtcblxuICAgIH1cblxuICAgIHJlbW92ZUV4aXN0aW5nRGlzcGxheURPTSgpO1xuXG5cbiAgICBcblxuXG4gICAgXG5cblxuICAgIGNvbnN0IHRvZG9Db250YWluZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdG9kb0NvbnRhaW5lclRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyLXRpdGxlJyk7XG5cbiAgICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZCh0b2RvQ29udGFpbmVyVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHRhYlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdGFiVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFiLXRpdGxlJyk7XG5cbiAgICAgICAgdG9kb0NvbnRhaW5lclRpdGxlLmFwcGVuZCh0YWJUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgICAgICB0b2RvSGVhZGVyLnRleHRDb250ZW50ID0gJ05vdGVzJztcblxuICAgICAgICAgICAgdGFiVGl0bGUuYXBwZW5kKHRvZG9IZWFkZXIpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgICAgIHRvZG9QYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnWW91ciBjb2xsZWN0aW9uIG9mIE5vdGVzIGFyZSBkaXNwbGF5ZWQgaGVyZSc7XG5cbiAgICAgICAgICAgIHRhYlRpdGxlLmFwcGVuZCh0b2RvUGFyYWdyYXBoKTtcblxuICAgICAgICBcblxuXG5cblxuXG5cbiAgICBcbiAgICBjb25zdCBjb2xsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb2xsZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbGxlY3Rpb24tY29udGFpbmVyJyk7XG5cbiAgICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZChjb2xsZWN0aW9uQ29udGFpbmVyKTtcblxuICAgICAgICAvLyBjcmVhdGUgYSBwb3B1bGF0ZSBub3RlcyBtb2R1bGVcblxuICAgICAgICAvLyBDcmVhdGUgaXQgaGVyZSBmaXJzdCB0aGVuIHNlbmQgaXQgc29tZXdoZXJlIGVsc2UuXG4gICAgICAgIGFwcGVuZE5vdGVzT2JqZWN0KCk7XG5cbiAgICAgICAgXG5cblxuXG5cbiAgICAgICBcblxuICAgIFxuICAgIFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGFsbE5vdGVET01Nb2R1bGU7IiwiaW1wb3J0IHBvcHVsYXRlVG9kb0NvbGxlY3Rpb24gZnJvbSBcIi4vcG9wdWxhdGVET01Ub2RvQ29sbGVjdGlvblwiO1xuXG5pbXBvcnQgeyBjaGFuZ2VUb2RvUHJpb3JpdHkgfSBmcm9tIFwiLi4vZG9tQWN0aXZpdGllcy9kb21BY3Rpdml0aWVzXCI7XG5cbmZ1bmN0aW9uIGFsbFRvZG9ET01Nb2R1bGUgKCl7XG5cbiAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktY29udGFpbmVyJyk7XG5cblxuXG5cbiAgICAvLyBtb3ZlIHRvIGRvbUFjdGl2aXR5XG4gICAgZnVuY3Rpb24gcmVtb3ZlRXhpc3RpbmdEaXNwbGF5RE9NICgpe1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1jb250YWluZXInKTtcblxuICAgICAgICBkaXNwbGF5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcblxuICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcmVtb3ZlRXhpc3RpbmdEaXNwbGF5RE9NKCk7XG5cblxuICAgIFxuXG5cbiAgICBcblxuXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0b2RvQ29udGFpbmVyVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItdGl0bGUnKTtcblxuICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kKHRvZG9Db250YWluZXJUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgdGFiVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0YWJUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YWItdGl0bGUnKTtcblxuICAgICAgICB0b2RvQ29udGFpbmVyVGl0bGUuYXBwZW5kKHRhYlRpdGxlKTtcblxuICAgICAgICAgICAgY29uc3QgdG9kb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICAgICAgICAgIHRvZG9IZWFkZXIudGV4dENvbnRlbnQgPSAnVG8tZG9zJztcblxuICAgICAgICAgICAgdGFiVGl0bGUuYXBwZW5kKHRvZG9IZWFkZXIpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgICAgIHRvZG9QYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnWW91ciBjb2xsZWN0aW9uIG9mIHRvZG9zIGFyZSBkaXNwbGF5ZWQgaGVyZSc7XG5cbiAgICAgICAgICAgIHRhYlRpdGxlLmFwcGVuZCh0b2RvUGFyYWdyYXBoKTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgcHJpb3JpdHlCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWJ1dHRvbnMnKTtcblxuICAgICAgICB0b2RvQ29udGFpbmVyVGl0bGUuYXBwZW5kKHByaW9yaXR5QnV0dG9ucyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICAgICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kKGhpZ2hQcmlvcml0eSk7XG5cblxuICAgICAgICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG5cbiAgICAgICAgICAgIHByaW9yaXR5QnV0dG9ucy5hcHBlbmQobWVkaXVtUHJpb3JpdHkpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2xvdy1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kKGxvd1ByaW9yaXR5KTtcblxuICAgICAgICAgICAgXG5cblxuXG5cblxuICAgIFxuICAgIGNvbnN0IGNvbGxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbGxlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sbGVjdGlvbi1jb250YWluZXInKTtcblxuICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kKGNvbGxlY3Rpb25Db250YWluZXIpO1xuXG4gICAgcG9wdWxhdGVUb2RvQ29sbGVjdGlvbignSGlnaCcpO1xuXG4gICAgY2hhbmdlVG9kb1ByaW9yaXR5KCk7XG4gICAgXG4gICAgLy8gZG9tQWN0aW9uKClcblxuXG5cblxuXG4gICBcblxuXG4gICAgICAgXG5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG5cblxuXG4gICAgICAgIFxuXG5cblxuXG5cbiAgICBcbiAgICBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBhbGxUb2RvRE9NTW9kdWxlOyIsImltcG9ydCB7IHVwZGF0ZVByb2plY3RJdGVtLHVwZGF0ZVRvZG9JdGVtLCBkZWxldGVQcm9qZWN0SXRlbSxlbXB0eURpc3BsYXksIGRpc3BsYXlEdXJhdGlvbiB9IGZyb20gXCIuLi9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXNcIjtcblxuLy8gaW1wb3J0IGRpc3BsYXlUb2RvIGZyb20gXCIuL2Rpc3BsYXlUb2RvXCI7XG5cbmltcG9ydCBkaXNwbGF5VG9kb3NJblByb2plY3QgZnJvbSBcIi4vZGlzcGxheVRvZG9zSW5Qcm9qZWN0XCI7XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0IChwcm9qZWN0KXtcbiAgICBjb25zb2xlLmxvZygnQk9PTSBCT09NIScpO1xuXG4gICAgY29uc29sZS5sb2cocHJvamVjdC50b2Rvc0J5UHJpb3JpdHkpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGdldFByb2plY3RUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdG9kby1jb250YWluZXInKTtcblxuICAgIGlmIChnZXRQcm9qZWN0VG9kb0NvbnRhaW5lcikge1xuXG4gICAgICAgIGdldFByb2plY3RUb2RvQ29udGFpbmVyLnJlbW92ZSgpO1xuXG4gICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgcHJvamVjdFRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10b2RvLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKHByb2plY3RUb2RvQ29udGFpbmVyKTtcblxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kaXNwbGF5Jyk7XG4gICAgICAgICAgICBwcm9qZWN0VG9kb0NvbnRhaW5lci5hcHBlbmQocHJvamVjdERpc3BsYXkpXG5cbiAgICAgICAgICAgIHByb2plY3REaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgXG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgICAgICAgICBwcm9qZWN0RGlzcGxheS5hcHBlbmQocHJvamVjdEZvcm0pO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGV0YWlscycpO1xuXG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmQocHJvamVjdERldGFpbHMpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LXRpdGxlLXVwZGF0ZScpXG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSA9IHByb2plY3QudGl0bGU7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Byb2plY3QgVGl0bGUnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0VGl0bGVJbnB1dCk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgLy8gcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3REZXRhaWxzTGluZUJyZWFrMSk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtZGVzYy11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REZXNjSW5wdXQudmFsdWUgPSBwcm9qZWN0LmRlc2M7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0lucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IERlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0lucHV0LnNldEF0dHJpYnV0ZSgncm93cycsJzQnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdjb2xzJywnNDAnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGVzY0lucHV0KTtcblxuXG5cblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByb2plY3REZXRhaWxzTGluZUJyZWFrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERldGFpbHNMaW5lQnJlYWsyKTtcblxuXG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1kYXRlLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdERhdGVJbnB1dC52YWx1ZSA9IHByb2plY3QuZHVlRGF0ZTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJylcblxuICAgICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGF0ZUlucHV0KTtcblxuXG5cblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByb2plY3REZXRhaWxzTGluZUJyZWFrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERldGFpbHNMaW5lQnJlYWszKTtcblxuXG5cblxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFJlbWluZEluSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtcmVtaW5kZXItdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0UmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdudW1iZXInKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LnNldEF0dHJpYnV0ZSgnbWluJywnMCcpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCdtYXgnLCczMCcpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQudmFsdWUgPSBwcm9qZWN0LnJlbWluZEluO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3RSZW1pbmRJbklucHV0KTtcblxuICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgLy8gcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3REZXRhaWxzTGluZUJyZWFrNCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uc09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByb2plY3RCdXR0b25zT25lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnV0dG9ucy1vbmUnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdEJ1dHRvbnNPbmUpXG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5QnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5EaXYuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYnV0dG9uLWRpdicpO1xuICAgICAgICAgICAgICAgIHByb2plY3RCdXR0b25zT25lLmFwcGVuZChwcmlvcml0eUJ0bkRpdilcblxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Byb2plY3QtcHJpb3JpdHktdXBkYXRlJylcbiAgICAgICAgICAgICAgICBwcmlvcml0eUJ0bkRpdi5hcHBlbmQocHJpb3JpdHlMYWJlbClcbiAgICAgICAgICAgICAgICBcbiAgICBcblxuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1wcmlvcml0eS11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxwcm9qZWN0LnByaW9yaXR5KTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9IHByb2plY3QucHJpb3JpdHk7XG5cbiAgICAgICAgICAgICAgICBwcmlvcml0eUJ0bkRpdi5hcHBlbmQocHJvamVjdFByaW9yaXR5QnV0dG9uKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGNsYXNzZXMgZm9yIGRpZmZlcmVudCBwcmlvcml0aWVzIChkaWZmZXJlbnQgY29sb3VycylcblxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnTG93Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPSAnTWVkaXVtJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnTWVkaXVtJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPSAnSGlnaCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnSGlnaCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPT09ICdIaWdoJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPSAnTG93JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgfSk7XG5cblxuXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcHJvamVjdERldGFpbHNMaW5lQnJlYWs1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgIC8vIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazUpO1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBzdGF0dXNCdG5EaXYuY2xhc3NMaXN0LmFkZCgnc3RhdHVzLWJ1dHRvbi1kaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0QnV0dG9uc09uZS5hcHBlbmQoc3RhdHVzQnRuRGl2KVxuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgc3RhdHVzTGFiZWwudGV4dENvbnRlbnQgPSAnU3RhdHVzOidcbiAgICAgICAgICAgICAgICBzdGF0dXNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Byb2plY3Qtc3RhdHVzLXVwZGF0ZScpXG4gICAgICAgICAgICAgICAgc3RhdHVzQnRuRGl2LmFwcGVuZChzdGF0dXNMYWJlbClcblxuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGlzcGxheVN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3Qtc3RhdHVzLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMuc2V0QXR0cmlidXRlKCd2YWx1ZScscHJvamVjdC5zdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0RGlzcGxheVN0YXR1cy50ZXh0Q29udGVudCA9IHByb2plY3Quc3RhdHVzO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgIHN0YXR1c0J0bkRpdi5hcHBlbmQocHJvamVjdERpc3BsYXlTdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc2VzIGZvciBkaWZmZXJlbnQgcHJpb3JpdGllcyAoZGlmZmVyZW50IGNvbG91cnMpXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3REaXNwbGF5U3RhdHVzLnZhbHVlID09PSAnUGVuZGluZycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMudmFsdWUgPSAnQ29tcGxldGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdERpc3BsYXlTdGF0dXMudmFsdWUgPT09ICdDb21wbGV0ZScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMudmFsdWUgPSAnUGVuZGluZyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGlzcGxheVN0YXR1cy50ZXh0Q29udGVudCA9ICdQZW5kaW5nJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgXG5cblxuXG5cblxuXG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUb2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBwcm9qZWN0VG9kb3MuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10b2RvcycpO1xuXG4gICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdFRvZG9zKTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0aGlzXG4gICAgICAgICAgICBwcm9qZWN0VG9kb3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIC8vIENvbnRhaW5lciB0aGF0IGRpc3BsYXlzIGFsbCB0b2RvcyBpbiBhIHByb2plY3RcbiAgICAgICAgICAgIGRpc3BsYXlUb2Rvc0luUHJvamVjdChwcm9qZWN0KTtcblxuICAgICAgICAgICAgLy8gY2xpY2tlZFByb2plY3QgPSBwcm9qZWN0O1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RCdXR0b25zVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0QnV0dG9uc1R3by5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ1dHRvbnMtdHdvJyk7XG4gICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdEJ1dHRvbnNUd28pO1xuICAgIFxuXG5cblxuXG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgcHJvamVjdERlbGV0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnJyk7XG5cbiAgICAgICAgICAgIHByb2plY3REZWxldGUuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIHByb2plY3REZWxldGUuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtZGVsZXRlJyk7XG5cbiAgICAgICAgICAgIHByb2plY3REZWxldGUudGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICAgICAgICAgICAgcHJvamVjdEJ1dHRvbnNUd28uYXBwZW5kKHByb2plY3REZWxldGUpO1xuXG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFVwZGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBwcm9qZWN0VXBkYXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCcnKTtcblxuICAgICAgICAgICAgcHJvamVjdFVwZGF0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcblxuICAgICAgICAgICAgcHJvamVjdFVwZGF0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC11cGRhdGUnKTtcblxuICAgICAgICAgICAgcHJvamVjdFVwZGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdVcGRhdGUnO1xuXG4gICAgICAgICAgICBwcm9qZWN0VXBkYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdXBkYXRlJyk7XG5cbiAgICAgICAgICAgIHByb2plY3RCdXR0b25zVHdvLmFwcGVuZChwcm9qZWN0VXBkYXRlQnV0dG9uKTtcblxuXG5cbiAgICAgICAgICAgIC8vIGNvbnN0IHByb2plY3REZXRhaWxzTGluZUJyZWFrNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgIC8vIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazYpO1xuXG5cbiAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgIHVwZGF0ZVByb2plY3RJdGVtKHByb2plY3QpO1xuXG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0SXRlbShwcm9qZWN0KVxuXG5cbiAgICAgICBcblxuXG5cblxuICAgICAgICBwcm9qZWN0VG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBwcm9qZWN0VG9kb0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3b3JrcyEnKVxuICAgICAgICB9KTtcblxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVByb2plY3Q7IiwiaW1wb3J0IHByb2plY3RPYmplY3RzIGZyb20gJy4uL3RhYk9iamVjdHMvYWxsUHJvamVjdHNUYWInO1xuXG5pbXBvcnQgeyB1cGRhdGVUb2RvSXRlbSwgZGVsZXRlVG9kb0l0ZW0gfSBmcm9tIFwiLi4vZG9tQWN0aXZpdGllcy9kb21BY3Rpdml0aWVzXCI7XG5cblxuZnVuY3Rpb24gZGlzcGxheVRvZG8ob2JqZWN0KXtcblxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcblxuICAgIGNvbnN0IHRvZG9EaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWRpc3BsYXktY29udGFpbmVyJyk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZCh0b2RvRGlzcGxheUNvbnRhaW5lcik7XG5cblxuICAgICAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5hcHBlbmQodG9kb0Zvcm0pXG5cblxuICAgICAgICBjb25zdCB0b2RvRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRvZG9EaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGlzcGxheScpO1xuXG4gICAgICAgIHRvZG9EaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ21haW4tdG9kby1kaXNwbGF5JylcblxuICAgICAgICB0b2RvRm9ybS5hcHBlbmQodG9kb0Rpc3BsYXkpO1xuXG5cblxuICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1RpdGxlJyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS10aXRsZScpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheVRpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS52YWx1ZSA9IG9iamVjdC50aXRsZTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvZG9EaXNwbGF5VGl0bGUpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsJycpO1xuXG4gICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktZGVzYycpO1xuXG4gICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdEZXNjcmlwdGlvbicpXG5cbiAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdjb2xzJywnMzAnKTtcblxuICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCcxMCcpO1xuXG4gICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS52YWx1ZSA9IG9iamVjdC5kZXNjO1xuXG4gICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGVzY1RleHRBcmVhKTtcblxuXG4gICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheURhdGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS1kYXRlJyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5RGF0ZS52YWx1ZSA9IG9iamVjdC5kdWVEYXRlO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheURhdGUuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXlEYXRlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvZG9EaXNwbGF5RGF0ZSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnN0IGxpbmVCcmVhazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrMSk7XG5cblxuICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlSZW1pbmRJbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4uc2V0QXR0cmlidXRlKCd0eXBlJywnbnVtYmVyJyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4uc2V0QXR0cmlidXRlKCdtaW4nLCcwJyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4uc2V0QXR0cmlidXRlKCdtYXgnLCczMCcpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktcmVtaW5kLWluJyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1JlbWluZCBpbiBob3cgbWFueSBkYXlzPycpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnZhbHVlID0gb2JqZWN0LnJlbWluZEluO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4uc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlSZW1pbmRJbik7XG5cbiAgICAgICAgICAgIC8vIGNvbnN0IGxpbmVCcmVhazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgLy8gdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazIpO1xuXG5cblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNEcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gICAgICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Byb2plY3QtZGlzcGxheS1jaG9pY2VzJyk7XG5cbiAgICAgICAgICAgIHByb2plY3RzRHJvcERvd24uc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtZGlzcGxheS1jaG9pY2VzJyk7XG5cbiAgICAgICAgICAgIHByb2plY3RzRHJvcERvd24uc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHByb2plY3RzRHJvcERvd24pO1xuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVucHJvY2Vzc2VkUHJvamVjdCA9IHByb2plY3RPYmplY3RzKCkudW5wcm9jZXNzZWRQcm9qZWN0QXJyYXlcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9uc05vZGUpe1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNOb2RlLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbjAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjAudGV4dENvbnRlbnQgPSBvYmplY3QucHJvamVjdDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjAudmFsdWUgPSBvYmplY3QucHJvamVjdDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzRHJvcERvd24uYXBwZW5kKG9wdGlvbjApO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHVucHJvY2Vzc2VkUHJvamVjdC5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IG9iai50aXRsZTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLmFwcGVuZChwcm9qZWN0T3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cblxuXG5cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0QnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIGZpcnN0QnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZpcnN0LWJ1dHRvbi1jb250YWluZXInKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKGZpcnN0QnV0dG9uQ29udGFpbmVyKVxuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5EaXYuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYnV0dG9uLWRpdicpO1xuXG4gICAgICAgICAgICAgICAgZmlyc3RCdXR0b25Db250YWluZXIuYXBwZW5kKHByaW9yaXR5QnRuRGl2KVxuXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJztcblxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9kby1kaXNwbGF5LXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5EaXYuYXBwZW5kKHByaW9yaXR5TGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgbGluZWJyZWFrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICAvLyBwcmlvcml0eUJ0bkRpdi5hcHBlbmQobGluZWJyZWFrUHJpb3JpdHkpO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxvYmplY3QucHJpb3JpdHkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS50ZXh0Q29udGVudCA9IG9iamVjdC5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlCdG5EaXYuYXBwZW5kKHRvZG9EaXNwbGF5UHJpb3JpdHkpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc2VzIGZvciBkaWZmZXJlbnQgcHJpb3JpdGllcyAoZGlmZmVyZW50IGNvbG91cnMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID09PSAnTG93Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9ICdNZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPT09ICdNZWRpdW0nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID0gJ0hpZ2gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnSGlnaCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID09PSAnSGlnaCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPSAnTG93JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0J0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgc3RhdHVzQnRuRGl2LmNsYXNzTGlzdC5hZGQoJ3N0YXR1cy1idXR0b24tZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICBmaXJzdEJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoc3RhdHVzQnRuRGl2KVxuXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbGluZUJyZWFrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgLy8gdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazMpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0xhYmVsLnRleHRDb250ZW50ID0gJ1N0YXR1czogJztcblxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3RvZG8tZGlzcGxheS1zdGF0dXMnKTtcblxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNCdG5EaXYuYXBwZW5kKHN0YXR1c0xhYmVsKTtcblxuXG5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBsaW5lQnJlYWs0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrNCk7XG5cbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgbGluZSBicmVhayBcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheVN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgndmFsdWUnLG9iamVjdC5zdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktc3RhdHVzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSBvYmplY3Quc3RhdHVzO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzQnRuRGl2LmFwcGVuZCh0b2RvRGlzcGxheVN0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgY2xhc3NlcyBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXMgKGRpZmZlcmVudCBjb2xvdXJzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0Rpc3BsYXlTdGF0dXMudmFsdWUgPT09ICdQZW5kaW5nJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMudmFsdWUgPSAnQ29tcGxldGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9EaXNwbGF5U3RhdHVzLnZhbHVlID09PSAnQ29tcGxldGUnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy52YWx1ZSA9ICdQZW5kaW5nJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy50ZXh0Q29udGVudCA9ICdQZW5kaW5nJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBzZWNvbmRCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgc2Vjb25kQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlY29uZC1idXR0b24tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZChzZWNvbmRCdXR0b25Db250YWluZXIpXG4gICAgICAgICAgICAvLyBjb25zdCBsaW5lQnJlYWs1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWs1KTtcblxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICBkZWxldGVCdG5EaXYuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbi1kaXYnKTtcblxuICAgICAgICAgICAgICAgIHNlY29uZEJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZGVsZXRlQnRuRGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZWxldGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGVsZXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZWxldGUuY2xhc3NMaXN0LmFkZCgndG9kby1kZWxldGUnKTtcblxuICAgICAgICAgICAgICAgICAgICBkZWxldGVCdG5EaXYuYXBwZW5kKHRvZG9EZWxldGUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgbGluZUJyZWFrNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWs2KTtcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgdXBkYXRlQnRuRGl2LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24tZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICBzZWNvbmRCdXR0b25Db250YWluZXIuYXBwZW5kKHVwZGF0ZUJ0bkRpdik7XG5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVXBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUudGV4dENvbnRlbnQgPSAnVXBkYXRlJztcblxuICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQnRuRGl2LmFwcGVuZCh0b2RvVXBkYXRlKTtcblxuXG4gICAgICAgICAgICB1cGRhdGVUb2RvSXRlbShvYmplY3QpO1xuXG4gICAgICAgICAgICBkZWxldGVUb2RvSXRlbShvYmplY3QpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlUb2RvOyIsIlxuaW1wb3J0IGRpc3BsYXlUb2RvIGZyb20gXCIuL2Rpc3BsYXlUb2RvXCI7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2Rvc0luUHJvamVjdCAocHJvamVjdCl7XG5cbiAgICBjb25zdCBwcm9qZWN0VG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10b2RvcycpO1xuXG4gICAgcHJvamVjdFRvZG9zLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcblxuICAgIH0pO1xuXG5cblxuICAgIGNvbnN0IGFsbFByb2plY3RUb2RvcyA9IHByb2plY3QudG9kb3NCeVByaW9yaXR5O1xuXG4gICAgY29uc3QgcHJpb3JpdHlBcnJheSA9IFsnSGlnaCcsJ01lZGl1bScsJ0xvdyddXG5cbiAgICBjb25zdCBkdWVTdGF0dXNBcnJheSA9IFsnb3ZlcmR1ZScsJ2R1ZScsJ3VwY29taW5nJywnY29tcGxldGUnXTtcblxuICAgIGNvbnN0IHRpdGxlQXJyYXkgPSBbJ092ZXJkdWUnLCdEdWUgc29vbicsJ1VwY29taW5nJywnQ29tcGxldGVkJ107XG5cbiAgICBjb25zdCBjbGFzc0FycmF5ID0gWydvdmVyZHVlLXRvZG9zJywnZHVlLXNvb24tdG9kb3MnLCd1cGNvbWluZy10b2RvcycsJ2NvbXBsZXRlLXRvZG9zJ107XG5cblxuICAgIHByaW9yaXR5QXJyYXkuZm9yRWFjaChwcmlvcml0eSA9PiB7XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYWxsUHJvamVjdFRvZG9zKSB7XG5cbiAgICAgICAgICAgIGlmIChhbGxQcm9qZWN0VG9kb3Nba2V5XS5vdmVyZHVlLmxlbmd0aCA9PT0gMCAmJiBhbGxQcm9qZWN0VG9kb3Nba2V5XS5kdWUubGVuZ3RoID09PSAwICYmIGFsbFByb2plY3RUb2Rvc1trZXldLnVwY29taW5nLmxlbmd0aCA9PT0gMCAmJiBhbGxQcm9qZWN0VG9kb3Nba2V5XS5jb21wbGV0ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBtb3ZlIHRvIG5leHQgbG9vcCBpZiBlbXB0eVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoa2V5ID09PSBwcmlvcml0eSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlUaXRsZS50ZXh0Q29udGVudCA9IHByaW9yaXR5ICtgIHByaW9yaXR5YDtcblxuICAgICAgICAgICAgICAgIHByaW9yaXR5VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktdGl0bGUnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RUb2Rvcy5hcHBlbmQocHJpb3JpdHlUaXRsZSk7XG4gICAgXG4gICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGR1ZVN0YXR1c0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGR1ZVN0YXR1c0FycmF5W2luZGV4XTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWVkT2JqQnlQcmlvcml0eSA9IGFsbFByb2plY3RUb2Rvc1trZXldO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNwZWNpZmllZE9iakJ5UHJpb3JpdHkpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gc3BlY2lmaWVkT2JqQnlQcmlvcml0eSkge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IHByb3BlcnR5KSB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udGFpbnMgYXJyYXkgb2YgdG9kbyBvYmplY3RzIG9mIGVhY2ggZHVlIHN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnlEdWVTdGF0dXMgPSBzcGVjaWZpZWRPYmpCeVByaW9yaXR5W3Byb3BdO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJheUJ5RHVlU3RhdHVzLmxlbmd0aCA9PT0gMCl7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdydW5zJylcbiAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1zdGF0dXMtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2Rvcy5hcHBlbmQoc3RhdHVzQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGl2LnRleHRDb250ZW50ID0gdGl0bGVBcnJheVtpbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJvamVjdC1zdGF0dXMtdGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmQodG9kb1RpdGxlRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkdWVTdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZVN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzQXJyYXlbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZURpdi5hcHBlbmQoZHVlU3RhdHVzQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsYWJsZS10b2RvLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZVN0YXR1c0NvbnRhaW5lci5hcHBlbmQoc2Nyb2xsYWJsZUNvbnRhaW5lcik7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvb3BzIG92ZXIgZWFjaCB0b2RvIG9iamVjdCBhbmQgYXBwZW5kcyB0aGVtIHRvIHNjcm9sbGFibGUgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheUJ5RHVlU3RhdHVzLmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWluLXByb2plY3QtY29udGFpbmVyJyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRhaW5lci5hcHBlbmQodG9kb0NvbnRhaW5lcik7XG4gICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZS1kaXYnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGl2LnRleHRDb250ZW50ID0gb2JqZWN0LnRpdGxlO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvVGl0bGVEaXYpO1xuICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2MtZGl2Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjRGl2LnRleHRDb250ZW50ID0gb2JqZWN0LmRlc2M7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9EZXNjRGl2KTtcbiAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVEaXYuY2xhc3NMaXN0LmFkZCgndG9kby1kYXRlLWRpdicpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGF0ZURpdi50ZXh0Q29udGVudCA9IG9iamVjdC5kdWVEYXRlO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvRGF0ZURpdik7XG4gICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9EdXJhdGlvbkxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kb0R1cmF0aW9uTGVmdERpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ci1sZWZ0LWRpdicpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRHVyYXRpb25MZWZ0RGl2LnRleHRDb250ZW50ID0gYCR7b2JqZWN0LmR1cmF0aW9uTGVmdC5kYXlMZWZ0fSBkYXlzLCAke29iamVjdC5kdXJhdGlvbkxlZnQubW9udGhzTGVmdH0gbW9udGhzIGFuZCAke29iamVjdC5kdXJhdGlvbkxlZnQueWVhcnNMZWZ0fSB5ZWFycyBsZWZ0YDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0R1cmF0aW9uTGVmdERpdik7XG4gICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Qcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJvamVjdC1kaXYnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1Byb2plY3REaXYudGV4dENvbnRlbnQgPSBvYmplY3QucHJvamVjdDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb1Byb2plY3REaXYpO1xuICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0b2RvUHJpb3JpdHl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG9Qcmlvcml0eXREaXYuY2xhc3NMaXN0LmFkZCgndG9kby1wcmlvcml0eS1kaXYnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kb1ByaW9yaXR5dERpdi50ZXh0Q29udGVudCA9IG9iamVjdC5wcmlvcml0eTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb1ByaW9yaXR5dERpdik7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheXMgdG9kbyBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUb2RvKG9iamVjdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgXG4gICAgXG4gICAgXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSk7XG5cblxuXG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlUb2Rvc0luUHJvamVjdDsiLCIvLyBmb3Igc2VsZWN0aW9uIG9wdGlvbnNcbmltcG9ydCBwcm9qZWN0T2JqZWN0cyBmcm9tICcuLi90YWJPYmplY3RzL2FsbFByb2plY3RzVGFiJ1xuXG5mdW5jdGlvbiBmb3JtRG9tTW9kdWxlICgpe1xuXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuXG5cblxuLy8gICAgRk9STSBCVVRUT05cblxuXG4gICAgY29uc3QgZm9ybUJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZm9ybUJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbi1jb250YWluZXInKTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKGZvcm1CdXR0b25Db250YWluZXIpO1xuXG5cbiAgICAgICAgY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIGZvcm1CdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nKTtcblxuICAgICAgICBmb3JtQnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xuXG4gICAgICAgIGZvcm1CdXR0b25Db250YWluZXIuYXBwZW5kKGZvcm1CdXR0b24pO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdtYWluIGRPbScpO1xuICAgIFxuXG5cbiAgICBcblxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKGZvcm1Db250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9DcmVhdGlvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0b2RvQ3JlYXRpb25Gb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY3JlYXRpb24tZm9ybScpO1xuXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kKHRvZG9DcmVhdGlvbkZvcm0pO1xuXG4gICAgICAgICAgICBjb25zdCBlbnRyeUNyZWF0aW9uRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgICAgICAgICAgdG9kb0NyZWF0aW9uRm9ybS5hcHBlbmQoZW50cnlDcmVhdGlvbkZvcm0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuXG4gICAgICAgICAgICAgICAgZW50cnlDcmVhdGlvbkZvcm0uYXBwZW5kKGZpZWxkc2V0KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsZWdlbmQudGV4dENvbnRlbnQgPSAnQ3JlYXRlIGFuIGVudHJ5J1xuXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZChsZWdlbmQpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0NyZWF0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0NyZWF0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby1jcmVhdGlvbi10aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvQ3JlYXRpb25UaXRsZS50ZXh0Q29udGVudCA9ICdDcmVhdGUgYSBuZXcgZW50cnknXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZCh0b2RvQ3JlYXRpb25UaXRsZSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb2xsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbGxlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29sbGVjdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kKGlucHV0Q29sbGVjdGlvbik7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbGxlY3Rpb24uYXBwZW5kKGlucHV0Q29udGFpbmVyMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3RvZG8tdGl0bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEuYXBwZW5kKHRvZG9UaXRsZUxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdG9kb1RpdGxlTGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlucHV0Q29udGFpbmVyMS5hcHBlbmQodG9kb1RpdGxlTGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLXRpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEuYXBwZW5kKHRvZG9UaXRsZUlucHV0KTtcblxuICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbGxlY3Rpb24uYXBwZW5kKGlucHV0Q29udGFpbmVyMik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0b2RvLWRlc2MnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMi5hcHBlbmQodG9kb0Rlc2NMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9EZXNjTGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlucHV0Q29udGFpbmVyMi5hcHBlbmQodG9kb0Rlc2NMaW5lQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rlc2NUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kZXNjJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnY29scycsJzMwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncm93cycsJzEwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIyLmFwcGVuZCh0b2RvRGVzY1RleHRBcmVhKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIzLmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWlucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbGxlY3Rpb24uYXBwZW5kKGlucHV0Q29udGFpbmVyMyk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vdGVSYWRpb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVSYWRpb0Rpdi5jbGFzc0xpc3QuYWRkKCdub3RlLXJhZGlvLWRpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMy5hcHBlbmQobm90ZVJhZGlvRGl2KVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNOb3RlUmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTm90ZVJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOb3RlUmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsJ2lzLW5vdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc05vdGVSYWRpby5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdlbnRyeS10eXBlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOb3RlUmFkaW8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOb3RlUmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVSYWRpb0Rpdi5hcHBlbmQoaXNOb3RlUmFkaW8pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vdGVSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RlUmFkaW9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2lzLW5vdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RlUmFkaW9MYWJlbC50ZXh0Q29udGVudCA9ICdOb3RlJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RlUmFkaW9EaXYuYXBwZW5kKG5vdGVSYWRpb0xhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1JhZGlvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JhZGlvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tcmFkaW8tZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIzLmFwcGVuZCh0b2RvUmFkaW9EaXYpXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzVG9kb1JhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1RvZG9SYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9kb1JhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCdpcy10b2RvJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUb2RvUmFkaW8uc2V0QXR0cmlidXRlKCduYW1lJywnZW50cnktdHlwZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9kb1JhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmFkaW9EaXYuYXBwZW5kKGlzVG9kb1JhZGlvKTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1JhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9SYWRpb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnaXMtdG9kbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9SYWRpb0xhYmVsLnRleHRDb250ZW50ID0gJ1RvLWRvJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmFkaW9EaXYuYXBwZW5kKHRvZG9SYWRpb0xhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVOZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1RvZG8uY2xhc3NMaXN0LmFkZCgnY3JlYXRlLW5ldy10b2RvJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29sbGVjdGlvbi5hcHBlbmQoY3JlYXRlTmV3VG9kbyk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdUb2RvLmFwcGVuZChpbnB1dENvbnRhaW5lcjQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0b2RvLWRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBkYXRlOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI0LmFwcGVuZCh0b2RvRGF0ZUxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9EYXRlTGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnB1dENvbnRhaW5lcjQuYXBwZW5kKHRvZG9EYXRlTGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI0LmFwcGVuZCh0b2RvRGF0ZUlucHV0KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51ZSBjcmVhdGluZyBmb3JtIGVsZW1lbnRzXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI1LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3VG9kby5hcHBlbmQoaW5wdXRDb250YWluZXI1KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUmVtaW5kSW5MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JlbWluZEluTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0b2RvLXJlbWluZC1pbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9SZW1pbmRJbkxhYmVsLnRleHRDb250ZW50ID0gJ1JlbWluZC1pbihkYXlzKTonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNS5hcHBlbmQodG9kb1JlbWluZEluTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdG9kb1JlbWluZEluTGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnB1dENvbnRhaW5lcjUuYXBwZW5kKHRvZG9SZW1pbmRJbkxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9SZW1pbmRJbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdudW1iZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsJzAnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsJzMwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tcmVtaW5kLWluJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JlbWluZEluSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNS5hcHBlbmQodG9kb1JlbWluZEluSW5wdXQpO1xuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXI2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjYuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdUb2RvLmFwcGVuZChpbnB1dENvbnRhaW5lcjYpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI2LmFwcGVuZCh0b2RvUHJpb3JpdHlMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0b2RvUHJpb3JpdHlMaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlucHV0Q29udGFpbmVyNi5hcHBlbmQodG9kb1ByaW9yaXR5TGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdMb3cnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjYuYXBwZW5kKHRvZG9Qcmlvcml0eUJ1dHRvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGNsYXNzZXMgZm9yIGRpZmZlcmVudCBwcmlvcml0aWVzIChkaWZmZXJlbnQgY29sb3VycylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9Qcmlvcml0eUJ1dHRvbi52YWx1ZSA9PT0gJ0xvdycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi52YWx1ZSA9ICdNZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb1ByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnTWVkaXVtJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ0hpZ2gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIaWdoJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9Qcmlvcml0eUJ1dHRvbi52YWx1ZSA9PT0gJ0hpZ2gnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24udmFsdWUgPSAnTG93JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNy5jbGFzc0xpc3QuYWRkKCdyYWRpby1pbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1RvZG8uYXBwZW5kKGlucHV0Q29udGFpbmVyNyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdERpdiAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2V4aXN0aW5nLXByb2plY3QtZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNy5hcHBlbmQoZXhpc3RpbmdQcm9qZWN0RGl2KVxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdFJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsJ2V4aXN0aW5nLXByb2plY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhpc3RpbmdQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0RGl2LmFwcGVuZChleGlzdGluZ1Byb2plY3RSYWRpbyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1Byb2plY3RSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0UmFkaW9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2V4aXN0aW5nLXByb2plY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0UmFkaW9MYWJlbC50ZXh0Q29udGVudCA9ICdFeGlzdGluZyBwcm9qZWN0JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0RGl2LmFwcGVuZChleGlzdGluZ1Byb2plY3RSYWRpb0xhYmVsKTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0LWRpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjcuYXBwZW5kKG5ld1Byb2plY3REaXYpXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdFJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywnbmV3LXByb2plY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Byb2plY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdFJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdERpdi5hcHBlbmQobmV3UHJvamVjdFJhZGlvKTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3RSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdFJhZGlvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCduZXctcHJvamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0UmFkaW9MYWJlbC50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3REaXYuYXBwZW5kKG5ld1Byb2plY3RSYWRpb0xhYmVsKTtcblxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEV4aXN0aW5nUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RFeGlzdGluZ1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LWV4aXN0aW5nLXByb2plY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb2xsZWN0aW9uLmFwcGVuZChzZWxlY3RFeGlzdGluZ1Byb2plY3QpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyOC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEV4aXN0aW5nUHJvamVjdC5hcHBlbmQoaW5wdXRDb250YWluZXI4KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RDaG9pY2VzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDaG9pY2VzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdwcm9qZWN0LWNob2ljZXMnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q2hvaWNlc0xhYmVsLnRleHRDb250ZW50ID0gJ1doaWNoIHByb2plY3QgaXMgdGhpcyBmb3I/JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjguYXBwZW5kKHByb2plY3RDaG9pY2VzTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdENob2ljZXNEcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDaG9pY2VzRHJvcERvd24uc2V0QXR0cmlidXRlKCduYW1lJywncHJvamVjdC1jaG9pY2VzJyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDaG9pY2VzRHJvcERvd24uc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtY2hvaWNlcycpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q2hvaWNlc0Ryb3BEb3duLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI4LmFwcGVuZChwcm9qZWN0Q2hvaWNlc0Ryb3BEb3duKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aXRsZXMgZnJvbSBleGlzdGluZyBwcm9qZWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHdoZW4gbmV3IHByb2plY3RzIGFyZSBjcmVhdGVkXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLW5ldy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29sbGVjdGlvbi5hcHBlbmQoY3JlYXRlTmV3UHJvamVjdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0Q3JlYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDcmVhdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY3JlYXRpb24tdGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q3JlYXRpb25UaXRsZS50ZXh0Q29udGVudCA9ICdDcmVhdGUgYSBuZXcgcHJvamVjdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0LmFwcGVuZChwcm9qZWN0Q3JlYXRpb25UaXRsZSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI5LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdC5hcHBlbmQoaW5wdXRDb250YWluZXI5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdwcm9qZWN0LXRpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGU6JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjkuYXBwZW5kKHByb2plY3RUaXRsZUxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByb2plY3RUaXRsZUxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5wdXRDb250YWluZXI5LmFwcGVuZChwcm9qZWN0VGl0bGVMaW5lQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LXRpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyOS5hcHBlbmQocHJvamVjdFRpdGxlSW5wdXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEwLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdC5hcHBlbmQoaW5wdXRDb250YWluZXIxMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Byb2plY3QtZGVzYycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEwLmFwcGVuZChwcm9qZWN0RGVzY0xhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByb2plY3REZXNjTGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnB1dENvbnRhaW5lcjEwLmFwcGVuZChwcm9qZWN0RGVzY0xpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1kZXNjJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCczMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywnMTAnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY1RleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEwLmFwcGVuZChwcm9qZWN0RGVzY1RleHRBcmVhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyMTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTEuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0LmFwcGVuZChpbnB1dENvbnRhaW5lcjExKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywncHJvamVjdC1kYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZTonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTEuYXBwZW5kKHByb2plY3REYXRlTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgcHJvamVjdERhdGVMaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlucHV0Q29udGFpbmVyMTEuYXBwZW5kKHByb2plY3REYXRlTGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1kYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMS5hcHBlbmQocHJvamVjdERhdGVJbnB1dCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWUgY3JlYXRpbmcgZm9ybSBlbGVtZW50c1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdC5hcHBlbmQoaW5wdXRDb250YWluZXIxMik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFJlbWluZEluTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywncHJvamVjdC1yZW1pbmQtaW4nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UmVtaW5kSW5MYWJlbC50ZXh0Q29udGVudCA9ICdSZW1pbmQtaW4oZGF5cyk6JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEyLmFwcGVuZChwcm9qZWN0UmVtaW5kSW5MYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBwcm9qZWN0UmVtaW5kSW5MaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlucHV0Q29udGFpbmVyMTIuYXBwZW5kKHByb2plY3RSZW1pbmRJbkxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RSZW1pbmRJbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdudW1iZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsJzAnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsJzMwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtcmVtaW5kLWluJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTIuYXBwZW5kKHByb2plY3RSZW1pbmRJbklucHV0KTtcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyMTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTMuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0LmFwcGVuZChpbnB1dENvbnRhaW5lcjEzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTMuYXBwZW5kKHByb2plY3RQcmlvcml0eUxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByb2plY3RQcmlvcml0eUxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5wdXRDb250YWluZXIxMy5hcHBlbmQocHJvamVjdFByaW9yaXR5TGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdMb3cnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEzLmFwcGVuZChwcm9qZWN0UHJpb3JpdHlCdXR0b24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc2VzIGZvciBkaWZmZXJlbnQgcHJpb3JpdGllcyAoZGlmZmVyZW50IGNvbG91cnMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPT09ICdMb3cnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPSAnTWVkaXVtJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9PT0gJ01lZGl1bScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9ICdIaWdoJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnSGlnaCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPT09ICdIaWdoJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ0xvdyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ2Zvcm0tc3VibWl0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbGxlY3Rpb24uYXBwZW5kKHN1Ym1pdEJ1dHRvbik7XG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZXhpc3RpbmdQcm9qZWN0T3B0aW9ucyAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1Byb2plY3RSYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleGlzdGluZy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0UmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKTtcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVucHJvY2Vzc2VkUHJvamVjdCA9IHByb2plY3RPYmplY3RzKCkudW5wcm9jZXNzZWRQcm9qZWN0QXJyYXlcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVucHJvY2Vzc2VkUHJvamVjdC5sZW5ndGggPT09IDApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RSYWRpby5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnLCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0UmFkaW8uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RSYWRpby5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmV3UHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXdQcm9qZWN0UmFkaW8uY2hlY2tlZCA9IHRydWU7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih1bnByb2Nlc3NlZFByb2plY3QubGVuZ3RoID4gMCApe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvLmRpc2FibGVkID0gZmFsc2U7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnNOb2RlKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc05vZGUuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uMC50ZXh0Q29udGVudCA9ICdDaG9vc2Ugb25lJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24wLnZhbHVlID0gJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENob2ljZXNEcm9wRG93bi5hcHBlbmQob3B0aW9uMCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnByb2Nlc3NlZFByb2plY3QuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqZWN0LnRpdGxlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gb2JqZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnZhbHVlID0gb2JqZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q2hvaWNlc0Ryb3BEb3duLmFwcGVuZChwcm9qZWN0T3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZ1bmN0aW9uIGV4aXN0aW5nUHJvamVjdE9wdGlvbnMgKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCB1bnByb2Nlc3NlZFByb2plY3QgPSBwcm9qZWN0T2JqZWN0cygpLnVucHJvY2Vzc2VkUHJvamVjdEFycmF5XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBvcHRpb25zTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYob3B0aW9uc05vZGUpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG9wdGlvbnNOb2RlLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBvcHRpb24wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBvcHRpb24wLnRleHRDb250ZW50ID0gJ0Nob29zZSBvbmUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgb3B0aW9uMC52YWx1ZSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcHJvamVjdENob2ljZXNEcm9wRG93bi5hcHBlbmQob3B0aW9uMCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHVucHJvY2Vzc2VkUHJvamVjdC5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iamVjdC50aXRsZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBvYmplY3QudGl0bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IG9iamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0Q2hvaWNlc0Ryb3BEb3duLmFwcGVuZChwcm9qZWN0T3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RPcHRpb25zKCk7XG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtleGlzdGluZ1Byb2plY3RPcHRpb25zfTtcblxuXG59XG5cbmNvbnN0IGNyZWF0ZUZvcm1ET00gPSBmb3JtRG9tTW9kdWxlKCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9ybURPTTsiLCJpbXBvcnQgaGFtYnVyZ2VySWNvbiBmcm9tIFwiLi4vYXNzZXRzL21lbnUtaWNvbi5wbmdcIjtcblxuLy8gaW1wb3J0IGhhbWJ1cmdlckljb24gZnJvbSBcIi4uL2Fzc2V0cy9tZW51LnBuZ1wiXG5cbmZ1bmN0aW9uIG1haW5Eb21Nb2R1bGUgKCl7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICBcbiAgICAvLyBGT1JNIE9QRU5JTkcgQlVUVE9OXG4gICAgXG5cblxuXG4gICAgLy8gVE9QIENPTlRBSU5FUlxuICAgIGNvbnN0IHRvcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdG9wQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvcC1jb250YWluZXInKTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKHRvcENvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgYnJhbmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBicmFuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdicmFuZC1jb250YWluZXInKTtcblxuICAgICAgICB0b3BDb250YWluZXIuYXBwZW5kKGJyYW5kQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgY29uc3QgYnJhbmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgICAgICBicmFuZEhlYWRlci50ZXh0Q29udGVudCA9ICdTYWdlRW50cmllcyc7XG5cbiAgICAgICAgICAgIGJyYW5kQ29udGFpbmVyLmFwcGVuZChicmFuZEhlYWRlcik7XG5cblxuICAgICAgICBjb25zdCB0b3BDb250YWluZXJTcGFjaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdG9wQ29udGFpbmVyU3BhY2luZy5jbGFzc0xpc3QuYWRkKCd0b3AtY29udGFpbmVyLXNwYWNpbmcnKTtcblxuICAgICAgICB0b3BDb250YWluZXIuYXBwZW5kKHRvcENvbnRhaW5lclNwYWNpbmcpO1xuXG4gICAgICAgIFxuICAgICAgICBjb25zdCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QuYWRkKCdoYW1idXJnZXItbWVudScpO1xuXG4gICAgICAgIHRvcENvbnRhaW5lci5hcHBlbmQoaGFtYnVyZ2VyTWVudSk7XG5cblxuICAgICAgICAgICAgY29uc3QgbWVudUljb24gPSBuZXcgSW1hZ2UoKVxuXG4gICAgICAgICAgICBtZW51SWNvbi5zcmMgPSBoYW1idXJnZXJJY29uO1xuXG4gICAgICAgICAgICBoYW1idXJnZXJNZW51LmFwcGVuZChtZW51SWNvbik7XG5cblxuICAgIC8vIE1FTlVcblxuICAgIGNvbnN0IG5vdGVNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBub3RlTWVudS5jbGFzc0xpc3QuYWRkKCdub3RlLW1lbnUnKTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKG5vdGVNZW51KTtcblxuXG4gICAgICAgIGNvbnN0IHRhYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRhYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YWItY29udGFpbmVyJyk7XG5cbiAgICAgICAgbm90ZU1lbnUuYXBwZW5kKHRhYkNvbnRhaW5lcilcblxuXG5cbiAgICAgICAgICAgIGNvbnN0IGFsbFRvZG9zVGFiRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIGFsbFRvZG9zVGFiRE9NLmNsYXNzTGlzdC5hZGQoJ2FsbC10b2Rvcy10YWInKTtcblxuICAgICAgICAgICAgYWxsVG9kb3NUYWJET00uY2xhc3NMaXN0LmFkZCgnbWVudS10YWItYWN0aXZlJylcblxuICAgICAgICAgICAgdGFiQ29udGFpbmVyLmFwcGVuZChhbGxUb2Rvc1RhYkRPTSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhbGxUb2Rvc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICAgICAgICAgICAgICBhbGxUb2Rvc0hlYWRlci50ZXh0Q29udGVudCA9ICdBbGwgVG9kb3MnO1xuXG4gICAgICAgICAgICAgICAgYWxsVG9kb3NUYWJET00uYXBwZW5kKGFsbFRvZG9zSGVhZGVyKVxuXG5cbiAgICAgICAgICAgIGNvbnN0IGFsbFByb2plY3RzVGFiRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIGFsbFByb2plY3RzVGFiRE9NLmNsYXNzTGlzdC5hZGQoJ2FsbC1wcm9qZWN0cy10YWInKTtcblxuICAgICAgICAgICAgdGFiQ29udGFpbmVyLmFwcGVuZChhbGxQcm9qZWN0c1RhYkRPTSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhbGxQcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICAgICAgICAgICAgICBhbGxQcm9qZWN0c0hlYWRlci50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG5cbiAgICAgICAgICAgICAgICBhbGxQcm9qZWN0c1RhYkRPTS5hcHBlbmQoYWxsUHJvamVjdHNIZWFkZXIpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IGFsbE5vdGVzVGFiRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIGFsbE5vdGVzVGFiRE9NLmNsYXNzTGlzdC5hZGQoJ2FsbC1ub3Rlcy10YWInKTtcblxuICAgICAgICAgICAgdGFiQ29udGFpbmVyLmFwcGVuZChhbGxOb3Rlc1RhYkRPTSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhbGxOb3Rlc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICAgICAgICAgICAgICBhbGxOb3Rlc0hlYWRlci50ZXh0Q29udGVudCA9ICdOb3Rlcyc7XG5cbiAgICAgICAgICAgICAgICBhbGxOb3Rlc1RhYkRPTS5hcHBlbmQoYWxsTm90ZXNIZWFkZXIpO1xuXG5cblxuICAgICAgICBmdW5jdGlvbiB0YWJBY3RpdmVTd2l0Y2ggKCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRhYkFycmF5ID0gW2FsbFRvZG9zVGFiRE9NLGFsbFByb2plY3RzVGFiRE9NLGFsbE5vdGVzVGFiRE9NXTtcblxuICAgICAgICAgICAgYWxsVG9kb3NUYWJET00uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICBhbGxUb2Rvc1RhYkRPTS5jbGFzc0xpc3QuYWRkKCdtZW51LXRhYi1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgIGFsbFByb2plY3RzVGFiRE9NLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtdGFiLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgYWxsTm90ZXNUYWJET00uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS10YWItYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGFsbFByb2plY3RzVGFiRE9NLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgYWxsUHJvamVjdHNUYWJET00uY2xhc3NMaXN0LmFkZCgnbWVudS10YWItYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYWxsVG9kb3NUYWJET00uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS10YWItYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBhbGxOb3Rlc1RhYkRPTS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXRhYi1hY3RpdmUnKTtcblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgYWxsTm90ZXNUYWJET00uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICBhbGxOb3Rlc1RhYkRPTS5jbGFzc0xpc3QuYWRkKCdtZW51LXRhYi1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgIGFsbFRvZG9zVGFiRE9NLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtdGFiLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgYWxsUHJvamVjdHNUYWJET00uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS10YWItYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0YWJBY3RpdmVTd2l0Y2goKTtcblxuXG5cblxuICAgIC8vIEZPT1RFUlxuICAgIGNvbnN0IHRvZG9Db250YWluZXJGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRvZG9Db250YWluZXJGb290ZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItZm9vdGVyJyk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZCh0b2RvQ29udGFpbmVyRm9vdGVyKTtcblxuICAgICAgICBjb25zdCBsaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgbGlua0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaW5rLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIHRvZG9Db250YWluZXJGb290ZXIuYXBwZW5kKGxpbmtDb250YWluZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgICAgICAgICBmb290ZXJMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsJ2h0dHBzOi8vZ2l0aHViLmNvbS9SaXNzaGlnYW5lc2gvdG9kby1saXN0Jyk7XG5cbiAgICAgICAgICAgIGZvb3RlckxpbmsudGV4dENvbnRlbnQgPSAnTWFkZSBieSBSaXNzaGlnYW5lc2ggVmlsbGFsYW4nO1xuXG4gICAgICAgICAgICBsaW5rQ29udGFpbmVyLmFwcGVuZChmb290ZXJMaW5rKTtcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG1haW5Eb21Nb2R1bGU7IiwiaW1wb3J0IG5vdGVzT2JqZWN0IGZyb20gXCIuLi90YWJPYmplY3RzL2FsbE5vdGVzVGFiXCI7XG5pbXBvcnQgeyB1cGRhdGVOb3RlSXRlbSwgZGVsZXRlVG9kb0l0ZW0sIGVtcHR5RGlzcGxheSB9IGZyb20gXCIuLi9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXNcIjtcblxuZnVuY3Rpb24gYXBwZW5kTm90ZXNPYmplY3QoKXtcbiAgICAgICAgICAgIFxuICAgIGNvbnN0IGNvbGxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbi1jb250YWluZXInKTtcblxuICAgIGNvbGxlY3Rpb25Db250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIFxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgfSk7XG5cblxuICAgIGNvbnN0IG5vdGVzQ29sbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbm90ZXNDb2xsZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ25vdGVzLWNvbGxlY3Rpb24nKTtcblxuICAgIGNvbGxlY3Rpb25Db250YWluZXIuYXBwZW5kKG5vdGVzQ29sbGVjdGlvbik7XG5cbiAgICBjb25zdCBub3Rlc0FycmF5ID0gbm90ZXNPYmplY3QoKS5yZXZlcnNlKCk7XG5cbiAgICBub3Rlc0FycmF5LmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgY29uc3Qgbm90ZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbm90ZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm90ZXMtY29udGFpbmVyJyk7XG4gICAgICAgIG5vdGVzQ29sbGVjdGlvbi5hcHBlbmQobm90ZXNDb250YWluZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBub3RlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5vdGVUaXRsZS5jbGFzc0xpc3QuYWRkKCdub3RlLXRpdGxlJyk7XG4gICAgICAgICAgICBub3RlVGl0bGUudGV4dENvbnRlbnQgPSBvYmplY3QudGl0bGU7XG4gICAgICAgICAgICBub3Rlc0NvbnRhaW5lci5hcHBlbmQobm90ZVRpdGxlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgbm90ZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5vdGVEZXNjLmNsYXNzTGlzdC5hZGQoJ25vdGUtZGVzYycpO1xuICAgICAgICAgICAgbm90ZURlc2MudGV4dENvbnRlbnQgPSBvYmplY3QuZGVzYztcbiAgICAgICAgICAgIG5vdGVzQ29udGFpbmVyLmFwcGVuZChub3RlRGVzYyk7XG5cblxuXG4gICAgICAgIG5vdGVzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGlzcGxheS1jb250YWluZXInKTtcblxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmQodG9kb0Rpc3BsYXlDb250YWluZXIpO1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLmFwcGVuZCh0b2RvRm9ybSlcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGlzcGxheScpO1xuXG4gICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgnbm90ZS1kaXNwbGF5JylcblxuICAgICAgICAgICAgICAgIHRvZG9Gb3JtLmFwcGVuZCh0b2RvRGlzcGxheSk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1RpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LXRpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJylcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVRpdGxlLnZhbHVlID0gb2JqZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheVRpdGxlKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LWRlc2MnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdEZXNjcmlwdGlvbicpXG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCczMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywnMTAnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnZhbHVlID0gb2JqZWN0LmRlc2M7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGVzY1RleHRBcmVhKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGxpbmVCcmVhazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrMSk7XG5cblxuICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm90ZS1idXR0b24tY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZChidXR0b25Db250YWluZXIpXG5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRlbGV0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZWxldGUudGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZCh0b2RvRGVsZXRlKTtcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBsaW5lQnJlYWsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWsyKTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1VwZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnRleHRDb250ZW50ID0gJ1VwZGF0ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQodG9kb1VwZGF0ZSk7XG5cblxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVOb3RlSXRlbShvYmplY3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRvZG9JdGVtKG9iamVjdCk7XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBlbXB0eURpc3BsYXkoKTtcblxufVxuXG4vLyBhcHBlbmROb3Rlc09iamVjdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHBlbmROb3Rlc09iamVjdCIsImltcG9ydCBwcm9qZWN0T2JqZWN0cyBmcm9tIFwiLi4vdGFiT2JqZWN0cy9hbGxQcm9qZWN0c1RhYlwiO1xuXG5pbXBvcnQgeyB1cGRhdGVQcm9qZWN0SXRlbSx1cGRhdGVUb2RvSXRlbSwgZGVsZXRlUHJvamVjdEl0ZW0sZW1wdHlEaXNwbGF5LCBkaXNwbGF5RHVyYXRpb24gfSBmcm9tIFwiLi4vZG9tQWN0aXZpdGllcy9kb21BY3Rpdml0aWVzXCI7XG5cbmltcG9ydCBkaXNwbGF5VG9kbyBmcm9tIFwiLi9kaXNwbGF5VG9kb1wiO1xuXG5pbXBvcnQgZGlzcGxheVRvZG9zSW5Qcm9qZWN0IGZyb20gXCIuL2Rpc3BsYXlUb2Rvc0luUHJvamVjdFwiO1xuXG5cbmltcG9ydCBkaXNwbGF5UHJvamVjdCBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdFwiO1xuXG5cbi8vIFBPUFVMQVRFIFRPRE8gQ09MTEVDVElPTiBDT05UQUlORVJcbmxldCBjbGlja2VkUHJvamVjdCA9ICcnO1xuLy8gaGlnaFxuLy8gcHV0IHRoaXMgaW4gYSBkaWZmZXJlbnQgbW9kdWxlXG5mdW5jdGlvbiBhcHBlbmRQcm9qZWN0T2JqZWN0cyhwcmlvcml0eSl7XG5cbiAgICBjb25zdCBjb2xsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb24tY29udGFpbmVyJylcblxuICAgIGNvbGxlY3Rpb25Db250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIFxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgfSk7XG5cblxuXG4gICAgY29uc3QgYWxsUHJvamVjdE9iamVjdCA9IHByb2plY3RPYmplY3RzKCkucHJvamVjdHNCeVByaW9yaXR5O1xuICAgIC8vIGNvbnNvbGUubG9nKGFsbFByb2plY3RPYmplY3QpO1xuXG4gICAgY29uc3QgZHVlU3RhdHVzQXJyYXkgPSBbJ292ZXJkdWUnLCdkdWUnLCd1cGNvbWluZycsJ2NvbXBsZXRlJ107XG5cbiAgICBjb25zdCB0aXRsZUFycmF5ID0gWydPVkVSRFVFJywnRFVFIFNPT04nLCdVUENPTUlORycsJ0NPTVBMRVRFRCddO1xuXG4gICAgY29uc3QgY2xhc3NBcnJheSA9IFsnb3ZlcmR1ZS1jb250YWluZXInLCdkdWUtc29vbi1jb250YWluZXInLCd1cGNvbWluZy1jb250YWluZXInLCdjb21wbGV0ZS1jb250YWluZXInXTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIGFsbFByb2plY3RPYmplY3QpIHtcblxuICAgICAgICBpZiAoa2V5ID09PSBwcmlvcml0eSkge1xuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGR1ZVN0YXR1c0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGR1ZVN0YXR1c0FycmF5W2luZGV4XTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNwZWNpZmllZE9iakJ5UHJpb3JpdHkgPSBhbGxQcm9qZWN0T2JqZWN0W2tleV07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gc3BlY2lmaWVkT2JqQnlQcmlvcml0eSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBwcm9wZXJ0eSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250YWlucyBhcnJheSBvZiB0b2RvIG9iamVjdHMgb2YgZWFjaCBkdWUgc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJheUJ5RHVlU3RhdHVzID0gc3BlY2lmaWVkT2JqQnlQcmlvcml0eVtwcm9wXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5QnlEdWVTdGF0dXMubGVuZ3RoID09PSAwKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdGF0dXMtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uQ29udGFpbmVyLmFwcGVuZChzdGF0dXNDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGl0bGVEaXYudGV4dENvbnRlbnQgPSB0aXRsZUFycmF5W2luZGV4XTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3N0YXR1cy10aXRsZScpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmQoc3RhdHVzVGl0bGVEaXYpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1ZVN0YXR1c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZVN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzQXJyYXlbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb250YWluZXIuYXBwZW5kKGR1ZVN0YXR1c0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbGFibGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzY3JvbGxhYmxlLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVTdGF0dXNDb250YWluZXIuYXBwZW5kKHNjcm9sbGFibGVDb250YWluZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvb3BzIG92ZXIgZWFjaCBwcm9qZWN0IG9iamVjdCBhbmQgYXBwZW5kcyB0aGVtIHRvIHNjcm9sbGFibGUgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5QnlEdWVTdGF0dXMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0Q29udGFpbmVyKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZS1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZURpdi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0VGl0bGVEaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZXNjLWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NEaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2M7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0RGVzY0Rpdik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRhdGUtZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGF0ZURpdi50ZXh0Q29udGVudCA9IGRpc3BsYXlEdXJhdGlvbihwcm9qZWN0LmR1ZURhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdERhdGVEaXYpO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERJU1BMQVkgUFJPSkVDVCBUT0RPUyAtIHNlbmQgcHJvamVjdCBjb250YWluZXIgYXMgYW4gYXJndW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVByb2plY3QocHJvamVjdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdCT09NIEJPT00hJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QudG9kb3NCeVByaW9yaXR5KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHByb2plY3RUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwcm9qZWN0VG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG8tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtYWluQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0VG9kb0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdFRvZG9Db250YWluZXIuYXBwZW5kKHByb2plY3RGb3JtKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdERldGFpbHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZXRhaWxzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kKHByb2plY3REZXRhaWxzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtdGl0bGUtdXBkYXRlJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdFRpdGxlSW5wdXQudmFsdWUgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBUaXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdFRpdGxlSW5wdXQpO1xuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERldGFpbHNMaW5lQnJlYWsxKTtcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtZGVzYy11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdERlc2NJbnB1dC52YWx1ZSA9IHByb2plY3QuZGVzYztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdERlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IERlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdyb3dzJywnNCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnY29scycsJzQwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGVzY0lucHV0KTtcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgcHJvamVjdERldGFpbHNMaW5lQnJlYWsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3REZXRhaWxzTGluZUJyZWFrMik7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHByb2plY3REYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWRhdGUtdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQudmFsdWUgPSBwcm9qZWN0LmR1ZURhdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERhdGVJbnB1dCk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzTGluZUJyZWFrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazMpO1xuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHByb2plY3RSZW1pbmRJbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtcmVtaW5kZXItdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ251bWJlcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0UmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQudmFsdWUgPSBwcm9qZWN0LnJlbWluZEluO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdFJlbWluZEluSW5wdXQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERldGFpbHNMaW5lQnJlYWs0KTtcblxuXG4gICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtcHJpb3JpdHktdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxwcm9qZWN0LnByaW9yaXR5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnByaW9yaXR5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdFByaW9yaXR5QnV0dG9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc2VzIGZvciBkaWZmZXJlbnQgcHJpb3JpdGllcyAoZGlmZmVyZW50IGNvbG91cnMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnTG93Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9ICdNZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9PT0gJ01lZGl1bScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPSAnSGlnaCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIaWdoJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9PT0gJ0hpZ2gnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ0xvdyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERldGFpbHNMaW5lQnJlYWs1KTtcblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGlzcGxheVN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcm9qZWN0RGlzcGxheVN0YXR1cy5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1zdGF0dXMtdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgndmFsdWUnLHByb2plY3Quc3RhdHVzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnRleHRDb250ZW50ID0gcHJvamVjdC5zdGF0dXM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGlzcGxheVN0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc2VzIGZvciBkaWZmZXJlbnQgcHJpb3JpdGllcyAoZGlmZmVyZW50IGNvbG91cnMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBpZiAocHJvamVjdERpc3BsYXlTdGF0dXMudmFsdWUgPT09ICdwZW5kaW5nJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnZhbHVlID0gJ2NvbXBsZXRlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBpZiAocHJvamVjdERpc3BsYXlTdGF0dXMudmFsdWUgPT09ICdjb21wbGV0ZScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGlzcGxheVN0YXR1cy52YWx1ZSA9ICdwZW5kaW5nJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSAnUGVuZGluZyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgcHJvamVjdFRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdFRvZG9zLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdG9kb3MnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdFRvZG9zKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdFRvZG9zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gQ29udGFpbmVyIHRoYXQgZGlzcGxheXMgYWxsIHRvZG9zIGluIGEgcHJvamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBkaXNwbGF5VG9kb3NJblByb2plY3QocHJvamVjdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY2xpY2tlZFByb2plY3QgPSBwcm9qZWN0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHByb2plY3RVcGRhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0VXBkYXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0VXBkYXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3RVcGRhdGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdFVwZGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdVcGRhdGUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3RVcGRhdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdFVwZGF0ZUJ1dHRvbik7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzTGluZUJyZWFrNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3REZXRhaWxzTGluZUJyZWFrNik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBwcm9qZWN0RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdERlbGV0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdERlbGV0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0RGVsZXRlLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWRlbGV0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3REZWxldGUudGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERlbGV0ZSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB1cGRhdGVQcm9qZWN0SXRlbShwcm9qZWN0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBkZWxldGVQcm9qZWN0SXRlbShwcm9qZWN0KVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcHJvamVjdFRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0VG9kb0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3dvcmtzIScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG5cblxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuXG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICBlbXB0eURpc3BsYXkoKTtcblxufVxuXG4vLyBTRU5EIFRISVMgVE8gYWxsVG9kb0RPTUNyZWF0aW9uLmpzXG4vLyBhcHBlbmRUb2RvT2JqZWN0cygnaGlnaCcpXG5cbmV4cG9ydCBkZWZhdWx0IGFwcGVuZFByb2plY3RPYmplY3RzO1xuXG5leHBvcnQge2NsaWNrZWRQcm9qZWN0fTsiLCJpbXBvcnQgdG9kb09iamVjdCBmcm9tIFwiLi4vdGFiT2JqZWN0cy9hbGxUb2Rvc1RhYlwiO1xuLy8gZm9yIHNlbGVjdGlvbiBvcHRpb25zXG5pbXBvcnQgcHJvamVjdE9iamVjdHMgZnJvbSAnLi4vdGFiT2JqZWN0cy9hbGxQcm9qZWN0c1RhYic7XG5cbi8vIGRvZXNuJ3Qgd29yayBiZWNhdXNlIG9mIGNpcmN1bGFyIGRlcGVuZGVuY3lcbi8vIGltcG9ydCB1cGRhdGVUb2RvSXRlbSAgZnJvbSAnLi4vZG9tQWN0aXZpdGllcy91cGRhdGVUb2RvRE9NJztcblxuaW1wb3J0IHsgdXBkYXRlVG9kb0l0ZW0sIGRlbGV0ZVRvZG9JdGVtLCBlbXB0eURpc3BsYXksIGRpc3BsYXlEdXJhdGlvbiB9IGZyb20gXCIuLi9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXNcIjtcblxuaW1wb3J0IGRpc3BsYXlUb2RvIGZyb20gXCIuL2Rpc3BsYXlUb2RvXCI7XG5cblxuLy8gUE9QVUxBVEUgVE9ETyBDT0xMRUNUSU9OIENPTlRBSU5FUlxuXG4vLyBoaWdoXG4vLyBwdXQgdGhpcyBpbiBhIGRpZmZlcmVudCBtb2R1bGVcbmZ1bmN0aW9uIGFwcGVuZFRvZG9PYmplY3RzKHByaW9yaXR5KXtcblxuICAgIFxuXG4gICAgY29uc3QgY29sbGVjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uLWNvbnRhaW5lcicpXG5cbiAgICBjb2xsZWN0aW9uQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcblxuICAgIH0pO1xuXG5cblxuICAgIGNvbnN0IGFsbFRvZG9PYmplY3QgPSB0b2RvT2JqZWN0KCk7XG5cbiAgICBjb25zdCBkdWVTdGF0dXNBcnJheSA9IFsnb3ZlcmR1ZScsJ2R1ZScsJ3VwY29taW5nJywnY29tcGxldGUnXTtcblxuICAgIGNvbnN0IHRpdGxlQXJyYXkgPSBbJ09WRVJEVUUnLCdEVUUgU09PTicsJ1VQQ09NSU5HJywnQ09NUExFVEVEJ107XG5cbiAgICBjb25zdCBjbGFzc0FycmF5ID0gWydvdmVyZHVlLWNvbnRhaW5lcicsJ2R1ZS1zb29uLWNvbnRhaW5lcicsJ3VwY29taW5nLWNvbnRhaW5lcicsJ2NvbXBsZXRlLWNvbnRhaW5lciddO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gYWxsVG9kb09iamVjdCkge1xuXG4gICAgICAgIGlmIChrZXkgPT09IHByaW9yaXR5KSB7XG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZHVlU3RhdHVzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gZHVlU3RhdHVzQXJyYXlbaW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWVkT2JqQnlQcmlvcml0eSA9IGFsbFRvZG9PYmplY3Rba2V5XTtcblxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBzcGVjaWZpZWRPYmpCeVByaW9yaXR5KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IHByb3BlcnR5KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5zIGFycmF5IG9mIHRvZG8gb2JqZWN0cyBvZiBlYWNoIGR1ZSBzdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnlEdWVTdGF0dXMgPSBzcGVjaWZpZWRPYmpCeVByaW9yaXR5W3Byb3BdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlCeUR1ZVN0YXR1cy5sZW5ndGggPT09IDApe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N0YXR1cy1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25Db250YWluZXIuYXBwZW5kKHN0YXR1c0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNUaXRsZURpdi50ZXh0Q29udGVudCA9IHRpdGxlQXJyYXlbaW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnc3RhdHVzLXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29udGFpbmVyLmFwcGVuZChzdGF0dXNUaXRsZURpdik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHVlU3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVlU3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NBcnJheVtpbmRleF0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmQoZHVlU3RhdHVzQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGFibGUtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZVN0YXR1c0NvbnRhaW5lci5hcHBlbmQoc2Nyb2xsYWJsZUNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9vcHMgb3ZlciBlYWNoIHRvZG8gb2JqZWN0IGFuZCBhcHBlbmRzIHRoZW0gdG8gc2Nyb2xsYWJsZSBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlCeUR1ZVN0YXR1cy5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlQ29udGFpbmVyLmFwcGVuZCh0b2RvQ29udGFpbmVyKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZS1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZURpdi50ZXh0Q29udGVudCA9IG9iamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9UaXRsZURpdik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2MtZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvRGVzY0Rpdik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjRGl2LnRleHRDb250ZW50ID0gb2JqZWN0LmRlc2M7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NEaXYuYXBwZW5kKGRlc2NQYXJhZ3JhcGgpXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRhdGUtZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGF0ZURpdi50ZXh0Q29udGVudCA9IGRpc3BsYXlEdXJhdGlvbihvYmplY3QuZHVlRGF0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRGF0ZURpdi50ZXh0Q29udGVudCA9IGAke29iamVjdC5kdXJhdGlvbkxlZnQuZGF5TGVmdH0gZGF5cywgJHtvYmplY3QuZHVyYXRpb25MZWZ0Lm1vbnRoc0xlZnQgfSBtb250aHMgYW5kICR7b2JqZWN0LmR1cmF0aW9uTGVmdC55ZWFyc0xlZnR9IHllYXJzIGxlZnRgO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0RhdGVEaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZCgndG9kby1wcm9qZWN0LWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1Byb2plY3REaXYudGV4dENvbnRlbnQgPSBgUHJvamVjdDogJHtvYmplY3QucHJvamVjdH1gO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb1Byb2plY3REaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0b2RvUHJpb3JpdHl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvUHJpb3JpdHl0RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJpb3JpdHktZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvUHJpb3JpdHl0RGl2LnRleHRDb250ZW50ID0gb2JqZWN0LnByaW9yaXR5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb1ByaW9yaXR5dERpdik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU0VORCBUTyBBIFNFUEFSQVRFIE1PRFVMRSAtIE9QRU5TIFRPRE8gSVRFTVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUb2RvKG9iamVjdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0b2RvRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kb0Rpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFpbkNvbnRhaW5lci5hcHBlbmQodG9kb0Rpc3BsYXlDb250YWluZXIpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdG9kb0Rpc3BsYXlDb250YWluZXIuYXBwZW5kKHRvZG9Gb3JtKVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgdG9kb0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0b2RvRGlzcGxheS5jbGFzc0xpc3QuYWRkKCd0b2RvLWRpc3BsYXknKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0b2RvRm9ybS5hcHBlbmQodG9kb0Rpc3BsYXkpO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1RpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS10aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheVRpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS52YWx1ZSA9IG9iamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvZG9EaXNwbGF5VGl0bGUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHRvZG9EZXNjVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktZGVzYycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdEZXNjcmlwdGlvbicpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdjb2xzJywnMzAnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCcxMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS52YWx1ZSA9IG9iamVjdC5kZXNjO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGVzY1RleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGVzY1RleHRBcmVhKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCB0b2RvRGlzcGxheURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheURhdGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS1kYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5RGF0ZS52YWx1ZSA9IG9iamVjdC5kdWVEYXRlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheURhdGUuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXlEYXRlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvZG9EaXNwbGF5RGF0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIGNvbnN0IGxpbmVCcmVhazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrMSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlSZW1pbmRJbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4uc2V0QXR0cmlidXRlKCd0eXBlJywnbnVtYmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4uc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS1yZW1pbmQtaW4nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXlSZW1pbmRJbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnUmVtaW5kIGluIGhvdyBtYW55IGRheXM/Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4udmFsdWUgPSBvYmplY3QucmVtaW5kSW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4uY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXlSZW1pbmRJbi5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheVJlbWluZEluKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gY29uc3QgbGluZUJyZWFrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrMik7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBwcm9qZWN0c0Ryb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3RzRHJvcERvd24uc2V0QXR0cmlidXRlKCduYW1lJywncHJvamVjdC1kaXNwbGF5LWNob2ljZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWRpc3BsYXktY2hvaWNlcycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQocHJvamVjdHNEcm9wRG93bik7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgdW5wcm9jZXNzZWRQcm9qZWN0ID0gcHJvamVjdE9iamVjdHMoKS51bnByb2Nlc3NlZFByb2plY3RBcnJheVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnNOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBpZihvcHRpb25zTm9kZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc05vZGUuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgb3B0aW9uMC50ZXh0Q29udGVudCA9IG9iamVjdC5wcm9qZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgb3B0aW9uMC52YWx1ZSA9IG9iamVjdC5wcm9qZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5hcHBlbmQob3B0aW9uMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdW5wcm9jZXNzZWRQcm9qZWN0LmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnZhbHVlID0gb2JqLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzRHJvcERvd24uYXBwZW5kKHByb2plY3RPcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9KTtcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgZmlyc3RCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZmlyc3RCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmlyc3QtYnV0dG9uLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQoZmlyc3RCdXR0b25Db250YWluZXIpXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5QnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwcmlvcml0eUJ0bkRpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1idXR0b24tZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBmaXJzdEJ1dHRvbkNvbnRhaW5lci5hcHBlbmQocHJpb3JpdHlCdG5EaXYpXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0b2RvLWRpc3BsYXktcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBwcmlvcml0eUJ0bkRpdi5hcHBlbmQocHJpb3JpdHlMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBjb25zdCBsaW5lYnJlYWtQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIHByaW9yaXR5QnRuRGl2LmFwcGVuZChsaW5lYnJlYWtQcmlvcml0eSk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLG9iamVjdC5wcmlvcml0eSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnRleHRDb250ZW50ID0gb2JqZWN0LnByaW9yaXR5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBwcmlvcml0eUJ0bkRpdi5hcHBlbmQodG9kb0Rpc3BsYXlQcmlvcml0eSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGNsYXNzZXMgZm9yIGRpZmZlcmVudCBwcmlvcml0aWVzIChkaWZmZXJlbnQgY29sb3VycylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPT09ICdMb3cnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID0gJ01lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9PT0gJ01lZGl1bScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPSAnSGlnaCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS50ZXh0Q29udGVudCA9ICdIaWdoJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPT09ICdIaWdoJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9ICdMb3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3Qgc3RhdHVzQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBzdGF0dXNCdG5EaXYuY2xhc3NMaXN0LmFkZCgnc3RhdHVzLWJ1dHRvbi1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZpcnN0QnV0dG9uQ29udGFpbmVyLmFwcGVuZChzdGF0dXNCdG5EaXYpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBjb25zdCBsaW5lQnJlYWszID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrMyk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc3RhdHVzTGFiZWwudGV4dENvbnRlbnQgPSAnU3RhdHVzOiAnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHN0YXR1c0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9kby1kaXNwbGF5LXN0YXR1cycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHN0YXR1c0J0bkRpdi5hcHBlbmQoc3RhdHVzTGFiZWwpO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vIGNvbnN0IGxpbmVCcmVhazQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWs0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vIGNyZWF0ZSBsaW5lIGJyZWFrIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5U3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMuc2V0QXR0cmlidXRlKCd2YWx1ZScsb2JqZWN0LnN0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS1zdGF0dXMnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy50ZXh0Q29udGVudCA9IG9iamVjdC5zdGF0dXM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gdG9kb0Rpc3BsYXlTdGF0dXMuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBzdGF0dXNCdG5EaXYuYXBwZW5kKHRvZG9EaXNwbGF5U3RhdHVzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc2VzIGZvciBkaWZmZXJlbnQgcHJpb3JpdGllcyAoZGlmZmVyZW50IGNvbG91cnMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRGlzcGxheVN0YXR1cy52YWx1ZSA9PT0gJ3BlbmRpbmcnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy52YWx1ZSA9ICdjb21wbGV0ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0Rpc3BsYXlTdGF0dXMudmFsdWUgPT09ICdjb21wbGV0ZScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnZhbHVlID0gJ3BlbmRpbmcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnRleHRDb250ZW50ID0gJ1BlbmRpbmcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHNlY29uZEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBzZWNvbmRCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2Vjb25kLWJ1dHRvbi1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHNlY29uZEJ1dHRvbkNvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIGNvbnN0IGxpbmVCcmVhazUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBkZWxldGVCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGRlbGV0ZUJ0bkRpdi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uLWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgc2Vjb25kQnV0dG9uQ29udGFpbmVyLmFwcGVuZChkZWxldGVCdG5EaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRvZG9EZWxldGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRvZG9EZWxldGUuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kZWxldGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlbGV0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bkRpdi5hcHBlbmQodG9kb0RlbGV0ZSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBjb25zdCBsaW5lQnJlYWs2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazYpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgdXBkYXRlQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB1cGRhdGVCdG5EaXYuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbi1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNlY29uZEJ1dHRvbkNvbnRhaW5lci5hcHBlbmQodXBkYXRlQnRuRGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9VcGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS50ZXh0Q29udGVudCA9ICdVcGRhdGUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB1cGRhdGVCdG5EaXYuYXBwZW5kKHRvZG9VcGRhdGUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHVwZGF0ZVRvZG9JdGVtKG9iamVjdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGRlbGV0ZVRvZG9JdGVtKG9iamVjdCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBlbXB0eURpc3BsYXkoKTtcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGFwcGVuZFRvZG9PYmplY3RzOyIsIi8vIGltcG9ydCBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uIGZyb20gXCIuL3BvcHVsYXRlRE9NVG9kb0NvbGxlY3Rpb25cIjtcblxuaW1wb3J0IGFwcGVuZFByb2plY3RPYmplY3RzIGZyb20gXCIuL3BvcHVsYXRlRE9NUHJvamVjdENvbGxlY3Rpb25cIjtcblxuaW1wb3J0IHsgY2hhbmdlUHJvamVjdFByaW9yaXR5IH0gZnJvbSBcIi4uL2RvbUFjdGl2aXRpZXMvZG9tQWN0aXZpdGllc1wiO1xuXG5mdW5jdGlvbiBwcm9qZWN0RE9NTW9kdWxlICgpe1xuXG4gICAgY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG5cblxuXG4gICAgLy8gbW92ZSB0byBkb21BY3Rpdml0eVxuICAgIGZ1bmN0aW9uIHJlbW92ZUV4aXN0aW5nRGlzcGxheURPTSAoKXtcblxuICAgICAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktY29udGFpbmVyJyk7XG5cbiAgICAgICAgZGlzcGxheUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICB9KTtcblxuICAgIH1cblxuICAgIHJlbW92ZUV4aXN0aW5nRGlzcGxheURPTSgpO1xuXG5cbiAgICBcblxuXG4gICAgXG5cblxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgcHJvamVjdENvbnRhaW5lclRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyLXRpdGxlJyk7XG5cbiAgICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0Q29udGFpbmVyVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHRhYlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdGFiVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFiLXRpdGxlJyk7XG5cbiAgICAgICAgcHJvamVjdENvbnRhaW5lclRpdGxlLmFwcGVuZCh0YWJUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgICAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcblxuICAgICAgICAgICAgdGFiVGl0bGUuYXBwZW5kKHByb2plY3RIZWFkZXIpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgICAgIHByb2plY3RQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnWW91ciBjb2xsZWN0aW9uIG9mIFByb2plY3RzIGFyZSBkaXNwbGF5ZWQgaGVyZSc7XG5cbiAgICAgICAgICAgIHRhYlRpdGxlLmFwcGVuZChwcm9qZWN0UGFyYWdyYXBoKTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgcHJpb3JpdHlCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWJ1dHRvbnMnKTtcblxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyVGl0bGUuYXBwZW5kKHByaW9yaXR5QnV0dG9ucyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eS1jaG9zZW4nKTtcblxuICAgICAgICAgICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kKGhpZ2hQcmlvcml0eSk7XG5cblxuICAgICAgICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG5cbiAgICAgICAgICAgIHByaW9yaXR5QnV0dG9ucy5hcHBlbmQobWVkaXVtUHJpb3JpdHkpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2xvdy1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kKGxvd1ByaW9yaXR5KTtcblxuICAgICAgICAgICAgXG5cblxuXG5cblxuICAgIFxuICAgIGNvbnN0IGNvbGxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbGxlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sbGVjdGlvbi1jb250YWluZXInKTtcblxuICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kKGNvbGxlY3Rpb25Db250YWluZXIpO1xuXG5cbiAgICBhcHBlbmRQcm9qZWN0T2JqZWN0cygnSGlnaCcpO1xuXG4gICAgY2hhbmdlUHJvamVjdFByaW9yaXR5KCk7XG4gICAgXG4gICAgXG4gICAgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdERPTU1vZHVsZTsiLCJpbXBvcnQgc29ydGluZ01ldGhvZHMgZnJvbSAnLi4vZG9tQWN0aXZpdGllcy9zb3J0aW5nTWV0aG9kcydcblxuZnVuY3Rpb24gYWxsTm90ZXNUYWIgKCl7XG5cbiAgICBjb25zdCBjbG9uZVRvZG9BcnJheSA9IHNvcnRpbmdNZXRob2RzLmNsb25lT2JqZWN0KCkuY2xvbmVUb2RvQXJyYXk7XG5cbiAgICBjb25zdCBub3Rlc0FycmF5ID0gc29ydGluZ01ldGhvZHMubm90ZVNvcnRlcihjbG9uZVRvZG9BcnJheSk7XG5cbiAgICBjb25zb2xlLmxvZygnTk9URVMgVEFCJyk7XG5cbiAgICBjb25zb2xlLmxvZyhub3Rlc0FycmF5KTtcblxuICAgIHJldHVybiBub3Rlc0FycmF5O1xuXG5cblxufVxuXG5hbGxOb3Rlc1RhYigpO1xuXG5leHBvcnQgZGVmYXVsdCBhbGxOb3Rlc1RhYjsiLCJpbXBvcnQgc29ydGluZ01ldGhvZHMgZnJvbSAnLi4vZG9tQWN0aXZpdGllcy9zb3J0aW5nTWV0aG9kcydcblxuZnVuY3Rpb24gcHJvamVjdHNUYWIgKCl7XG5cbiAgICAgICAgXG5cbiAgICBjb25zdCB1bnByb2Nlc3NlZFByb2plY3RBcnJheSA9IHNvcnRpbmdNZXRob2RzLnNvcnRCeVByb2plY3ROYW1lKCkucHJvY2Vzc2VkUHJvamVjdEFycmF5QnlOYW1lO1xuXG4gICAgXG5cbiAgICAvLyBBbGwgcHJvamVjdHMgYXJlIHN0b3JlZCBoZXJlXG4gICAgLy8gRmlyc3Qgc29ydCB0aGUgcHJvamVjdHMgYnkgcHJpb3JpdHlcbiAgICBjb25zdCBwcm9qZWN0c0J5UHJpb3JpdHkgPSBzb3J0aW5nTWV0aG9kcy5wcmlvcml0eVNvcnRlcih1bnByb2Nlc3NlZFByb2plY3RBcnJheSk7XG5cblxuICAgIFxuXG4gICAgLy8gVGhlbiBzb3J0IHRoZSBub3RlcyBpbiB0aG9zZSBwcm9qZWN0cyBieSBwcmlvcml0eVxuICAgIGZvciAoY29uc3QgcHJpb3JpdHlMZXZlbCBpbiBwcm9qZWN0c0J5UHJpb3JpdHkpIHtcblxuICAgICAgICBwcm9qZWN0c0J5UHJpb3JpdHlbcHJpb3JpdHlMZXZlbF0uZm9yRWFjaChwcm9qZWN0ID0+IHtcblxuICAgICAgICAgICAgLy8gc29ydCBwcmlvcml0eSBvZiB0b2RvQ29sbGVjdGlvblxuICAgICAgICAgICAgY29uc3Qgc29ydEJ5UHJpb3JpdHkgPSBzb3J0aW5nTWV0aG9kcy5wcmlvcml0eVNvcnRlcihwcm9qZWN0LnRvZG9Db2xsZWN0aW9uKVxuXG5cbiAgICAgICAgICAgIC8vIFNvcnQgdG9kb3MgYnkgZHVlIGRhdGVcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJpb3JpdHkgaW4gc29ydEJ5UHJpb3JpdHkpIHtcblxuICAgICAgICAgICAgICAgIHNvcnRCeVByaW9yaXR5W3ByaW9yaXR5XSA9IHNvcnRpbmdNZXRob2RzLnNvcnREdWVEYXRlKHNvcnRCeVByaW9yaXR5W3ByaW9yaXR5XSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZW1wdHkgdG9kb0NvbGxlY3Rpb25cbiAgICAgICAgICAgIHByb2plY3QudG9kb0NvbGxlY3Rpb24gPSBbXTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIG5ldyBrZXkgYW5kIGF0dGFjaCB0aGUgc29ydGVkIG9iamVjdFxuICAgICAgICAgICAgcHJvamVjdC50b2Rvc0J5UHJpb3JpdHkgPSBzb3J0QnlQcmlvcml0eTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuXG4gICAgLy8gU29ydCBwcm9qZWN0cyBieSBkdWUgZGF0ZXNcbiAgICBmb3IgKGNvbnN0IHByaW9yaXR5IGluIHByb2plY3RzQnlQcmlvcml0eSkge1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdHNCeVByaW9yaXR5W3ByaW9yaXR5XSA9IHNvcnRpbmdNZXRob2RzLnNvcnREdWVEYXRlKHByb2plY3RzQnlQcmlvcml0eVtwcmlvcml0eV0pO1xuXG4gICAgfVxuXG5cblxuXG5cbiAgICBjb25zb2xlLmxvZygnUFJPSkVDVFMgVEFCJyk7XG5cbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0J5UHJpb3JpdHkpO1xuXG5cbiAgICByZXR1cm4ge3Byb2plY3RzQnlQcmlvcml0eSx1bnByb2Nlc3NlZFByb2plY3RBcnJheX07XG5cbn1cblxucHJvamVjdHNUYWIoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHNUYWI7IiwiXG5pbXBvcnQgc29ydGluZ01ldGhvZHMgZnJvbSAnLi4vZG9tQWN0aXZpdGllcy9zb3J0aW5nTWV0aG9kcydcblxuZnVuY3Rpb24gYWxsVG9kb3NUYWIgKCl7XG5cbiAgICBjb25zdCBjbG9uZVRvZG9BcnJheSA9IHNvcnRpbmdNZXRob2RzLmNsb25lT2JqZWN0KCkuY2xvbmVUb2RvQXJyYXk7XG4gICAgY29uc3Qgc29ydGVkVG9kb0FycmF5ID0gc29ydGluZ01ldGhvZHMucHJpb3JpdHlTb3J0ZXIoY2xvbmVUb2RvQXJyYXkpO1xuXG4gICAgZm9yIChjb25zdCBwcmlvcml0eSBpbiBzb3J0ZWRUb2RvQXJyYXkpIHtcbiAgICAgICAgXG4gICAgICAgIHNvcnRlZFRvZG9BcnJheVtwcmlvcml0eV0gPSBzb3J0aW5nTWV0aG9kcy5zb3J0RHVlRGF0ZShzb3J0ZWRUb2RvQXJyYXlbcHJpb3JpdHldKTtcblxuICAgIH1cblxuXG4gICAgY29uc29sZS5sb2coc29ydGVkVG9kb0FycmF5KTtcblxuICAgIHJldHVybiBzb3J0ZWRUb2RvQXJyYXk7XG5cblxufVxuXG5jb25zb2xlLmxvZygnVE9ETyBUQUInKTtcbmFsbFRvZG9zVGFiKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFsbFRvZG9zVGFiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IGNyZWF0ZU1haW5ET00gZnJvbSBcIi4vZG9tQ3JlYXRpb24vbWFpbkRPTUNyZWF0aW9uXCI7XG5cbmltcG9ydCBkb21BY3Rpb24gZnJvbSBcIi4vZG9tQWN0aXZpdGllcy9kb21BY3Rpdml0aWVzXCI7XG5cbmltcG9ydCBjcmVhdGVUb2RvRE9NIGZyb20gXCIuL2RvbUNyZWF0aW9uL2FsbFRvZG9ET01DcmVhdGlvblwiXG5cblxuXG5cbi8vIEFsbCBtb2R1bGVzIHNob3VsZCBzdGFydCBoZXJlXG5cbi8vIEhPTUVQQUdFXG5jcmVhdGVNYWluRE9NKCk7XG5cbi8vIEF0dGFjaGVzIGFsbCBldmVudGxpc3RlbmVycyB0byBIT01FUEFHRVxuZG9tQWN0aW9uKCk7XG5cbi8vIExvYWRzIHRvZG8gZmlyc3RcbmNyZWF0ZVRvZG9ET00oKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=