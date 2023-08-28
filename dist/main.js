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
}




.main-container{
    position: relative;
    height: 100%;
    width: 100vw;
    display: grid;
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
    background-color: royalblue;
}

.note-menu > div > h1 {
    cursor: pointer;
    display: inline;
}


.top-container {
    border: 1px solid red;
    grid-area: top-container;
    display: flex;
    background-color: violet;
}

.top-container-spacing {
    flex: 1;
}

.brand-container {
    border: 1px solid green;
    width: 250px;
}


.hamburger-menu {
    border: 1px solid teal;
    width: 70px;
    display: none; /*display: block when display is below 600px */ 
}

.display-container {
    display: grid;
    position: relative;

    grid-area: display-container;
    background-color: cornflowerblue;
    width: 100%;
    height: 100%;

    grid-template-rows: 100px 1fr;

    grid-template-areas: 
    "todo-container-title"
    "collection-container";

}





.todo-container-title{

    display: grid;
    grid-area: todo-container-title;
    background-color: slateblue;
    border: 1px solid red;
    
}
.priority-buttons{
    display: grid;
    border: 1px solid blue;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: 1fr;

}

.priority-buttons > button{
    height: 25px;
}

.chosen-priority{
    background-color: maroon;
}

.tab-title{
    padding: 10px;
    align-self: center;
}

.todo-container-footer{

    display: grid;
    grid-area: todo-container-footer;
    background-color: slateblue;
    align-items: center;
    justify-items: center;
}


/* This is the tricky part */
.collection-container{

    position: absolute;
    height: 100%;
    width: 100%;
    border: 3px solid red;
    background-color: darkcyan;
    display: grid;
    grid-template-columns: 1fr;
    grid-area: collection-container;
    

    /* grid-template-rows: repeat(auto-fill, minmax(350px,1fr)); */

    grid-auto-flow: row;

    /* grid-template-rows: repeat(4, 350px); */
    /* grid-template-rows: 1fr; */
    /* overflow-y: auto; */
    overflow: auto;

    /* display: none; */
    /* object-fit: cover; */
    

}

/* .vertical-scroll{
    overflow: auto;
    border: 5px solid blue;
} */

.status-container{

    border: 2px solid fuchsia;
    overflow: auto;
    height: 350px;

}





.overdue-container,
.due-soon-container,
.upcoming-container,
.complete-container{

    display: grid;
    border: 4px solid gold;
    height: 320px;
    width: 100%;
    background-color: indigo;
    align-items: center;
    justify-items: start;
    
    overflow: auto;

}


.scrollable-container{

    display: grid;
    column-gap: 10px;
    grid-auto-flow: column; /*This was what i wanted to do*/
    
    border: 4px solid brown;

}

.todo-container{
    width: 300px;
    height: 220px;
    border: 5px solid pink;
    
}

.todo-display-container {
    display: grid;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 20, 145, 0.473);
    align-items: center;
    justify-items: center;
    z-index: 2;
}

.todo-display {
    background-color: purple;
    width: 350px;
    height: 500px;
}






.project-container{
    width: 350px;
    height: 250px;
    border: 5px solid pink;
    flex-shrink: 0;
    
}




.project-todo-container {
    position: fixed;
    width: 100%;
    height: 100%;
    border: 2px solid dodgerblue;
    background-color: rgba(218, 112, 214, 0.582);
    display: grid;
    justify-items: center;
    align-items: center;
    z-index: 2;
}

.project-details{

    border: 3px solid darkorange;
    width: 350px;
    height: 700px;
    background-color: darkgreen;
    /* overflow: auto; */
}

.project-todos{

    border: 3px solid cyan;
    width: 350px;
    height: 500px;
    background-color: slateblue;
    overflow: auto;

}

.todo-status-container{

    border: 2px solid fuchsia;
    overflow: auto;
    /* height: 350px; */

}

.overdue-todos,
.due-soon-todos,
.upcoming-todos,
.complete-todos{

    display: grid;
    border: 4px solid gold;
    /* height: 320px; */
    width: 100%;
    background-color: rgb(56, 56, 255);
    align-items: start;
    justify-items: center;
    
    /* overflow: auto; */

}


.scrollable-todo-container{

    display: grid;
    row-gap: 10px;
    /* height: 400px; */
    grid-auto-flow: row; /*This was what i wanted to do*/
    color: white;
    
    border: 4px solid brown;

}







.notes-collection{

    display: grid;
    border: 4px solid gold;
    height: 100%;
    width: 100%;
    background-color: indigo;
    align-items: center;
    overflow: auto;
    gap: 15px;
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr)); 
    border: 4px solid brown;

}


.notes-container{
    width: 100%;
    height: 300px;
    border: 5px solid pink;
    flex-shrink: 0;
    
}




/* FORM BUTTON */

.form-button-container{
    position: fixed;
    bottom: 50px;
    right: 0;
    width: 100px;
    height: 100px;
    border-radius: 50% 0% 0% 50%;
    background-color: black;
    display: grid;
    align-items: center;
    justify-content: center;
    
}

.form-button{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    font-size: 50px;
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

}

.show-form{
    display: grid;
}

.todo-creation-form {
    /* position: fixed; */
    width: 400px;
    /* height: 700px; */
    background-color: maroon;
    
}

.create-new-todo{
    border: 3px solid forestgreen;
    display: none;
}

.select-existing-project{
    border: 3px solid skyblue;
    display: none;
}

.create-new-project{
    border: 3px solid crimson;
    display: none;
}

.display-form-items{
    display: grid;
}


/* Mobile version */

@media screen and (max-width: 600px) {
    

    .hamburger-menu {
        display: block;
    }

    .main-container {
        border: 1px solid blue;
        display: grid;
        grid-template-rows: 70px 1fr 40px;
        grid-template-columns: 1fr 300px;
        grid-template-areas: 
        "top-container top-container" 
        "display-container display-container"
        "todo-container-footer todo-container-footer";
    
    
    
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
        width: 150px;
        z-index: 1;
    }

    .menu-active { /*triggers when hamburger menu is clicked*/
        display: grid;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml,\nbody{\n    width: 100%;\n    height: 100%;\n}\n\n\n\n\n.main-container{\n    position: relative;\n    height: 100%;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    grid-template-rows: 70px 1fr 40px;\n    grid-template-areas:\n    \"top-container top-container\" \n    \"note-menu display-container\"\n    \"todo-container-footer todo-container-footer\";\n\n    \n\n}\n\n\n.note-menu{\n    grid-area: note-menu;\n    height: 100%;\n    background-color: royalblue;\n}\n\n.note-menu > div > h1 {\n    cursor: pointer;\n    display: inline;\n}\n\n\n.top-container {\n    border: 1px solid red;\n    grid-area: top-container;\n    display: flex;\n    background-color: violet;\n}\n\n.top-container-spacing {\n    flex: 1;\n}\n\n.brand-container {\n    border: 1px solid green;\n    width: 250px;\n}\n\n\n.hamburger-menu {\n    border: 1px solid teal;\n    width: 70px;\n    display: none; /*display: block when display is below 600px */ \n}\n\n.display-container {\n    display: grid;\n    position: relative;\n\n    grid-area: display-container;\n    background-color: cornflowerblue;\n    width: 100%;\n    height: 100%;\n\n    grid-template-rows: 100px 1fr;\n\n    grid-template-areas: \n    \"todo-container-title\"\n    \"collection-container\";\n\n}\n\n\n\n\n\n.todo-container-title{\n\n    display: grid;\n    grid-area: todo-container-title;\n    background-color: slateblue;\n    border: 1px solid red;\n    \n}\n.priority-buttons{\n    display: grid;\n    border: 1px solid blue;\n    grid-template-columns: repeat(3,1fr);\n    grid-template-rows: 1fr;\n\n}\n\n.priority-buttons > button{\n    height: 25px;\n}\n\n.chosen-priority{\n    background-color: maroon;\n}\n\n.tab-title{\n    padding: 10px;\n    align-self: center;\n}\n\n.todo-container-footer{\n\n    display: grid;\n    grid-area: todo-container-footer;\n    background-color: slateblue;\n    align-items: center;\n    justify-items: center;\n}\n\n\n/* This is the tricky part */\n.collection-container{\n\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    border: 3px solid red;\n    background-color: darkcyan;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-area: collection-container;\n    \n\n    /* grid-template-rows: repeat(auto-fill, minmax(350px,1fr)); */\n\n    grid-auto-flow: row;\n\n    /* grid-template-rows: repeat(4, 350px); */\n    /* grid-template-rows: 1fr; */\n    /* overflow-y: auto; */\n    overflow: auto;\n\n    /* display: none; */\n    /* object-fit: cover; */\n    \n\n}\n\n/* .vertical-scroll{\n    overflow: auto;\n    border: 5px solid blue;\n} */\n\n.status-container{\n\n    border: 2px solid fuchsia;\n    overflow: auto;\n    height: 350px;\n\n}\n\n\n\n\n\n.overdue-container,\n.due-soon-container,\n.upcoming-container,\n.complete-container{\n\n    display: grid;\n    border: 4px solid gold;\n    height: 320px;\n    width: 100%;\n    background-color: indigo;\n    align-items: center;\n    justify-items: start;\n    \n    overflow: auto;\n\n}\n\n\n.scrollable-container{\n\n    display: grid;\n    column-gap: 10px;\n    grid-auto-flow: column; /*This was what i wanted to do*/\n    \n    border: 4px solid brown;\n\n}\n\n.todo-container{\n    width: 300px;\n    height: 220px;\n    border: 5px solid pink;\n    \n}\n\n.todo-display-container {\n    display: grid;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(255, 20, 145, 0.473);\n    align-items: center;\n    justify-items: center;\n    z-index: 2;\n}\n\n.todo-display {\n    background-color: purple;\n    width: 350px;\n    height: 500px;\n}\n\n\n\n\n\n\n.project-container{\n    width: 350px;\n    height: 250px;\n    border: 5px solid pink;\n    flex-shrink: 0;\n    \n}\n\n\n\n\n.project-todo-container {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    border: 2px solid dodgerblue;\n    background-color: rgba(218, 112, 214, 0.582);\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    z-index: 2;\n}\n\n.project-details{\n\n    border: 3px solid darkorange;\n    width: 350px;\n    height: 700px;\n    background-color: darkgreen;\n    /* overflow: auto; */\n}\n\n.project-todos{\n\n    border: 3px solid cyan;\n    width: 350px;\n    height: 500px;\n    background-color: slateblue;\n    overflow: auto;\n\n}\n\n.todo-status-container{\n\n    border: 2px solid fuchsia;\n    overflow: auto;\n    /* height: 350px; */\n\n}\n\n.overdue-todos,\n.due-soon-todos,\n.upcoming-todos,\n.complete-todos{\n\n    display: grid;\n    border: 4px solid gold;\n    /* height: 320px; */\n    width: 100%;\n    background-color: rgb(56, 56, 255);\n    align-items: start;\n    justify-items: center;\n    \n    /* overflow: auto; */\n\n}\n\n\n.scrollable-todo-container{\n\n    display: grid;\n    row-gap: 10px;\n    /* height: 400px; */\n    grid-auto-flow: row; /*This was what i wanted to do*/\n    color: white;\n    \n    border: 4px solid brown;\n\n}\n\n\n\n\n\n\n\n.notes-collection{\n\n    display: grid;\n    border: 4px solid gold;\n    height: 100%;\n    width: 100%;\n    background-color: indigo;\n    align-items: center;\n    overflow: auto;\n    gap: 15px;\n    grid-template-columns: repeat(auto-fill, minmax(300px,1fr)); \n    border: 4px solid brown;\n\n}\n\n\n.notes-container{\n    width: 100%;\n    height: 300px;\n    border: 5px solid pink;\n    flex-shrink: 0;\n    \n}\n\n\n\n\n/* FORM BUTTON */\n\n.form-button-container{\n    position: fixed;\n    bottom: 50px;\n    right: 0;\n    width: 100px;\n    height: 100px;\n    border-radius: 50% 0% 0% 50%;\n    background-color: black;\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    \n}\n\n.form-button{\n    width: 70px;\n    height: 70px;\n    border-radius: 50%;\n    font-size: 50px;\n}\n\n/* TODO CREATION FORM */\n\n\n.form-container{\n\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(128, 128, 128, 0.527);\n    display: grid;\n    padding-top: 100px;\n    align-items: start;\n    justify-items: center;\n    overflow: auto;\n    padding-bottom: 100px;\n    display: none;\n\n}\n\n.show-form{\n    display: grid;\n}\n\n.todo-creation-form {\n    /* position: fixed; */\n    width: 400px;\n    /* height: 700px; */\n    background-color: maroon;\n    \n}\n\n.create-new-todo{\n    border: 3px solid forestgreen;\n    display: none;\n}\n\n.select-existing-project{\n    border: 3px solid skyblue;\n    display: none;\n}\n\n.create-new-project{\n    border: 3px solid crimson;\n    display: none;\n}\n\n.display-form-items{\n    display: grid;\n}\n\n\n/* Mobile version */\n\n@media screen and (max-width: 600px) {\n    \n\n    .hamburger-menu {\n        display: block;\n    }\n\n    .main-container {\n        border: 1px solid blue;\n        display: grid;\n        grid-template-rows: 70px 1fr 40px;\n        grid-template-columns: 1fr 300px;\n        grid-template-areas: \n        \"top-container top-container\" \n        \"display-container display-container\"\n        \"todo-container-footer todo-container-footer\";\n    \n    \n    \n    }\n\n    \n\n    .note-menu {\n        position: absolute;\n        display: grid;\n        justify-self: end;\n        align-self: end;\n        grid-row: 2/3;\n        grid-column: 2/3;\n        /* height: 90%; */\n        display: none;\n        width: 150px;\n        z-index: 1;\n    }\n\n    .menu-active { /*triggers when hamburger menu is clicked*/\n        display: grid;\n    }\n}"],"sourceRoot":""}]);
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


    function cleanUpProjects (){

        for (let index = 0; index < projectArray.length; index++) {


            if ((!projectArray[index].title) && 
                (!projectArray[index].desc)) {

                projectArray.splice(index,1)

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
// All DOM Activities are centralised here except DOM Creation


























// Because displaying todoCollection in high priority is the default
// let recentCollectionContainerFn = populateTodoCollection;

// let recentCollectionContainerArg = 'high';



let menuInDisplay = 'todos'

let priorityInDisplay = 'high'


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

            e.preventDefault();

            
            hideForm();

            // create todo with form


            const resetArray = [projectTitle,projectDesc,projectDate,projectReminder,todoTitle,todoDesc,todoDate,todoReminder];


            if(newProjectRadio.checked){
                console.log('why are you running?')
                
                _createProjects__WEBPACK_IMPORTED_MODULE_1__["default"].createProject(projectTitle.value,projectDesc.value,projectDate.value,projectPriority.value,projectReminder.value,`pending`);


                _createTodos__WEBPACK_IMPORTED_MODULE_0__["default"].createTodo(todoTitle.value,todoDesc.value,todoDate.value,Number(todoReminder.value),todoPriority.value,`pending`,projectTitle.value);

                (0,_tabObjects_allTodosTab__WEBPACK_IMPORTED_MODULE_3__["default"])();

                (0,_tabObjects_allProjectsTab__WEBPACK_IMPORTED_MODULE_4__["default"])();

                (0,_tabObjects_allNotesTab__WEBPACK_IMPORTED_MODULE_2__["default"])();

                resetArray.forEach(input => {
                    input.value = '';
                });

                //everytime submit button is clicked fresh dropdown is created 
                _domCreation_formDOMCreation__WEBPACK_IMPORTED_MODULE_5__["default"].existingProjectOptions();

                (0,_domCreation_projectsDOMCreation__WEBPACK_IMPORTED_MODULE_7__["default"])()

                ;(0,_domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__["default"])(projectPriority.value);

                const highPriorityButton = document.querySelector('.high-priority');
                const mediumPriorityButton = document.querySelector('.medium-priority');
                const lowPriorityButton = document.querySelector('.low-priority');

                const priorityButtons = document.querySelector('.priority-buttons');
        
                priorityButtons.querySelectorAll('*').forEach(element => {
                    element.classList.remove('chosen-priority')
                });

                if (projectPriority.value === 'high') {
                    
                    highPriorityButton.classList.add('chosen-priority')

                }

                if (projectPriority.value === 'medium') {
                    
                    mediumPriorityButton.classList.add('chosen-priority')

                }

                if (projectPriority.value === 'low') {
                    
                    lowPriorityButton.classList.add('chosen-priority')

                }



                return;

            }

            // create to-dos and notes

            _createTodos__WEBPACK_IMPORTED_MODULE_0__["default"].createTodo(todoTitle.value,todoDesc.value,todoDate.value,Number(todoReminder.value),todoPriority.value,`pending`,projectsChoices.value);

            // todoObject();

            // projectObject();

            // notesObject();

            resetArray.forEach(input => {

                input.value = '';
            });

            //everytime submit button is clicked fresh dropdown is created 
            _domCreation_formDOMCreation__WEBPACK_IMPORTED_MODULE_5__["default"].existingProjectOptions();

            if (selectTodo.checked) {

                

                (0,_domCreation_allTodoDOMCreation__WEBPACK_IMPORTED_MODULE_6__["default"])();
                (0,_domCreation_populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_9__["default"])(todoPriority.value);


                // turn this to a function
                const highPriorityButton = document.querySelector('.high-priority');
                const mediumPriorityButton = document.querySelector('.medium-priority');
                const lowPriorityButton = document.querySelector('.low-priority');

                const priorityButtons = document.querySelector('.priority-buttons');
  
                priorityButtons.querySelectorAll('*').forEach(element => {
                    element.classList.remove('chosen-priority')
                });

                

                if (todoPriority.value === 'high') {
                    
                    highPriorityButton.classList.add('chosen-priority')

                }

                if (todoPriority.value === 'medium') {
                    
                    mediumPriorityButton.classList.add('chosen-priority');


                }

                if (todoPriority.value === 'low') {
                    
                    lowPriorityButton.classList.add('chosen-priority')

                }
                
            }

            


            if (selectNote.checked) {

                (0,_domCreation_allNotesDOMCreation__WEBPACK_IMPORTED_MODULE_8__["default"])();
                (0,_domCreation_populateDOMNoteCollection__WEBPACK_IMPORTED_MODULE_11__["default"])()

            }


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
        
        const priorityButtons = document.querySelector('.priority-buttons');
  
        priorityButtons.querySelectorAll('*').forEach(element => {
            element.classList.remove('chosen-priority')
        });

        highPriorityButton.classList.add('chosen-priority');

        (0,_domCreation_populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_9__["default"])('high');

        priorityInDisplay = 'high';
        console.log('LOOPING')

    });

    

    mediumPriorityButton.addEventListener('click',function(){
        
        const priorityButtons = document.querySelector('.priority-buttons');
        
        priorityButtons.querySelectorAll('*').forEach(element => {
            element.classList.remove('chosen-priority')
        });

        mediumPriorityButton.classList.add('chosen-priority');

        (0,_domCreation_populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_9__["default"])('medium');

        priorityInDisplay = 'medium';
        console.log('LOOPING')
    });


   
    lowPriorityButton.addEventListener('click',function(){

        const priorityButtons = document.querySelector('.priority-buttons');

        priorityButtons.querySelectorAll('*').forEach(element => {
            
            element.classList.remove('chosen-priority')
        });

        lowPriorityButton.classList.add('chosen-priority');

        (0,_domCreation_populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_9__["default"])('low');

        priorityInDisplay = 'low';
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
        
        const priorityButtons = document.querySelector('.priority-buttons');
  
        priorityButtons.querySelectorAll('*').forEach(element => {
            element.classList.remove('chosen-priority')
        });

        highPriorityButton.classList.add('chosen-priority');

        (0,_domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__["default"])('high');

        priorityInDisplay = 'high';
        console.log('LOOPING')

    });

    

    mediumPriorityButton.addEventListener('click',function(){
        
        const priorityButtons = document.querySelector('.priority-buttons');
        
        priorityButtons.querySelectorAll('*').forEach(element => {
            element.classList.remove('chosen-priority')
        });

        mediumPriorityButton.classList.add('chosen-priority');

        (0,_domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__["default"])('medium');

        priorityInDisplay = 'medium';
        console.log('LOOPING')
    });


   
    lowPriorityButton.addEventListener('click',function(){

        const priorityButtons = document.querySelector('.priority-buttons');

        priorityButtons.querySelectorAll('*').forEach(element => {
            
            element.classList.remove('chosen-priority')
        });

        lowPriorityButton.classList.add('chosen-priority');

        (0,_domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__["default"])('low');

        priorityInDisplay = 'low';
        console.log('LOOPING')
    });
   }


   function updateTodoItem (object){

        const todoDisplayContainer = document.querySelector('.todo-display-container');

        const todoDisplay = document.querySelector('.todo-display');

        const todoUpdateBtn = document.querySelector('#todo-update');

        todoUpdateBtn.addEventListener('click',function(){

        const newTodoTitle = document.querySelector('#todo-display-title')
        const newTodoDesc = document.querySelector('#todo-display-desc');
        const newTodoDue = document.querySelector('#todo-display-date');
        const newTodoReminder = document.querySelector('#todo-display-remind-in');
        const newTodoPriority = document.querySelector('#todo-display-priority');
        const newTodoStatus = document.querySelector('#todo-display-status');
        const newTodoProject = document.querySelector('#project-display-choices');
        
        

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





    function updateNoteItem (object){

        const todoDisplayContainer = document.querySelector('.todo-display-container');

        const todoDisplay = document.querySelector('.todo-display');

        const todoUpdateBtn = document.querySelector('#todo-update');

        todoUpdateBtn.addEventListener('click',function(){

        const newTodoTitle = document.querySelector('#todo-display-title')
        const newTodoDesc = document.querySelector('#todo-display-desc');
        

        let newDetails = {
            newTitle: newTodoTitle.value,
            newDesc: newTodoDesc.value,
        }
        
        _createTodos__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(object,newDetails);

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

        projectUpdateButton.addEventListener('click',function(){

            // project-status-update

        const newProjectTitle = document.querySelector('#project-title-update')
        const newProjectDesc = document.querySelector('#project-desc-update');
        const newProjectDue = document.querySelector('#project-date-update');
        const newProjectReminder = document.querySelector('#project-reminder-update');
        const newProjectPriority = document.querySelector('#project-priority-update');
        const newProjectStatus = document.querySelector('#project-status-update');

        
        

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

        updateDisplay()

        projectDisplayContainer.remove();

        });


        
        projectDisplayContainer.addEventListener('click',function(){
            projectDisplayContainer.remove();
        })

        projectDisplay.addEventListener('click',function(e){
            e.stopPropagation();
        })



    }






    function deleteTodoItem (object){

        const todoDisplayContainer = document.querySelector('.todo-display-container');

        const todoDisplay = document.querySelector('.todo-display');

        const todoDeleteBtn = document.querySelector('#todo-delete');

        todoDeleteBtn.addEventListener('click',function(){

        
        _createTodos__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTodo(object);

        updateDisplay()

        todoDisplayContainer.remove();

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

        
        _createProjects__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject(object);

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

        const priorities = ['high','medium','low'];

        const objectsByPriority = {high:[],medium:[],low:[]};

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
            if(object.status === 'complete'){
                

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

        const currentMonth = currentDate.getMonth();

        const currentYear = currentDate.getFullYear();



        // const formattedCurrentDate = [year,month,day];


        // [yyyy,mm,dd]
        const splitObjDate = date.split('-');

        const yearsLeft = splitObjDate[0] - currentYear;

        const monthsLeft = splitObjDate[1] - currentMonth;

        const dayLeft = splitObjDate[2] - currentDay;


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

            highPriority.classList.add('chosen-priority');

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

    (0,_populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_0__["default"])('high');

    (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__.changeTodoPriority)();
    
    // domAction()





   


       


                
               



        





    
    
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allTodoDOMModule);

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

                    legend.textContent = 'Create an entry'

                    fieldset.append(legend);



                        const inputContainer1 = document.createElement('div');

                        inputContainer1.classList.add('input-container');

                        fieldset.append(inputContainer1);

                            const todoTitleLabel = document.createElement('label');

                            todoTitleLabel.setAttribute('for','todo-title');

                            todoTitleLabel.textContent = 'Title:';

                            inputContainer1.append(todoTitleLabel);


                            const todoTitleLineBreak = document.createElement('br');

                            inputContainer1.append(todoTitleLineBreak);

                            
                            const todoTitleInput = document.createElement('input');

                            todoTitleInput.setAttribute('type','text');

                            todoTitleInput.setAttribute('id','todo-title');

                            todoTitleInput.setAttribute('required','');

                            todoTitleInput.classList.add('form-input');

                            inputContainer1.append(todoTitleInput);

                    


                        const inputContainer2 = document.createElement('div');

                        inputContainer2.classList.add('input-container');

                        fieldset.append(inputContainer2);

                            const todoDescLabel = document.createElement('label');

                            todoDescLabel.setAttribute('for','todo-desc');

                            todoDescLabel.textContent = 'Description:';

                            inputContainer2.append(todoDescLabel);


                            const todoDescLineBreak = document.createElement('br');

                            inputContainer2.append(todoDescLineBreak);

                            
                            const todoDescTextArea = document.createElement('textarea');

                            todoDescTextArea.setAttribute('name','');

                            todoDescTextArea.setAttribute('id','todo-desc');

                            todoDescTextArea.setAttribute('cols','30');

                            todoDescTextArea.setAttribute('rows','10');

                            todoDescTextArea.setAttribute('required','');

                            todoDescTextArea.classList.add('form-input');

                            inputContainer2.append(todoDescTextArea);


                        const inputContainer3 = document.createElement('div');

                        inputContainer3.classList.add('input-container');

                        fieldset.append(inputContainer3);

                            const isNoteRadio = document.createElement('input');

                            isNoteRadio.setAttribute('type','radio');

                            isNoteRadio.setAttribute('id','is-note');

                            isNoteRadio.setAttribute('name','entry-type');

                            isNoteRadio.setAttribute('checked','');

                            isNoteRadio.classList.add('form-input');

                            inputContainer3.append(isNoteRadio);

                            

                            const noteRadioLabel = document.createElement('label');

                            noteRadioLabel.setAttribute('for','is-note');

                            noteRadioLabel.textContent = 'Note';

                            inputContainer3.append(noteRadioLabel);



                            const isTodoRadio = document.createElement('input');

                            isTodoRadio.setAttribute('type','radio');

                            isTodoRadio.setAttribute('id','is-todo');

                            isTodoRadio.setAttribute('name','entry-type');

                            isTodoRadio.classList.add('form-input');

                            inputContainer3.append(isTodoRadio);



                            const todoRadioLabel = document.createElement('label');

                            todoRadioLabel.setAttribute('for','is-todo');

                            todoRadioLabel.textContent = 'To-do';

                            inputContainer3.append(todoRadioLabel);


                        const createNewTodo = document.createElement('div');

                        createNewTodo.classList.add('create-new-todo');

                        fieldset.append(createNewTodo);



                        


                            const inputContainer4 = document.createElement('div');

                            inputContainer4.classList.add('input-container');

                            createNewTodo.append(inputContainer4);

                                const todoDateLabel = document.createElement('label');

                                todoDateLabel.setAttribute('for','todo-date');

                                todoDateLabel.textContent = 'Due date:';

                                inputContainer4.append(todoDateLabel);


                                const todoDateLineBreak = document.createElement('br');

                                inputContainer4.append(todoDateLineBreak);

                                
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


                                const todoRemindInLineBreak = document.createElement('br');

                                inputContainer5.append(todoRemindInLineBreak);

                                
                                const todoRemindInInput = document.createElement('input');

                                todoRemindInInput.setAttribute('type','number');

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


                                const todoPriorityLineBreak = document.createElement('br');

                                inputContainer6.append(todoPriorityLineBreak);

                                
                                const todoPriorityButton = document.createElement('button');

                                todoPriorityButton.setAttribute('value','low');

                                todoPriorityButton.setAttribute('type','button');

                                todoPriorityButton.setAttribute('id','todo-priority');

                                todoPriorityButton.textContent = 'Low';

                                todoPriorityButton.classList.add('form-input');

                                inputContainer6.append(todoPriorityButton);

                                todoPriorityButton.addEventListener('click', function(){

                                    // Add classes for different priorities (different colours)

                                    if (todoPriorityButton.value === 'low'){
                                        todoPriorityButton.value = 'medium';
                                        todoPriorityButton.textContent = 'Medium';

                                        return;
                                    }

                                    if (todoPriorityButton.value === 'medium'){
                                        todoPriorityButton.value = 'high';
                                        todoPriorityButton.textContent = 'High';

                                        return;
                                    }

                                    if (todoPriorityButton.value === 'high'){
                                        todoPriorityButton.value = 'low';
                                        todoPriorityButton.textContent = 'Low';

                                        return;
                                    }


                                });


                            const inputContainer7 = document.createElement('div');

                            inputContainer7.classList.add('input-container');

                            createNewTodo.append(inputContainer7);


                                const existingProjectRadio = document.createElement('input');

                                existingProjectRadio.setAttribute('type','radio');

                                existingProjectRadio.setAttribute('id','existing-project');

                                // existingProjectRadio.setAttribute('required','');

                                existingProjectRadio.setAttribute('name','project');

                                existingProjectRadio.classList.add('form-input');

                                inputContainer7.append(existingProjectRadio);

                                

                                const existingProjectRadioLabel = document.createElement('label');

                                existingProjectRadioLabel.setAttribute('for','existing-project');

                                existingProjectRadioLabel.textContent = 'Existing project';

                                inputContainer7.append(existingProjectRadioLabel);



                                const newProjectRadio = document.createElement('input');

                                newProjectRadio.setAttribute('type','radio');

                                newProjectRadio.setAttribute('id','new-project');

                                newProjectRadio.setAttribute('name','project');

                                newProjectRadio.classList.add('form-input');

                                inputContainer7.append(newProjectRadio);



                                const newProjectRadioLabel = document.createElement('label');

                                newProjectRadioLabel.setAttribute('for','new-project');

                                newProjectRadioLabel.textContent = 'New Project';

                                inputContainer7.append(newProjectRadioLabel);






                        const selectExistingProject = document.createElement('div');

                        selectExistingProject.classList.add('select-existing-project');

                        fieldset.append(selectExistingProject);


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

                        fieldset.append(createNewProject);


                            const inputContainer9 = document.createElement('div');

                            inputContainer9.classList.add('input-container');

                            createNewProject.append(inputContainer9);

                                const projectTitleLabel = document.createElement('label');

                                projectTitleLabel.setAttribute('for','project-title');

                                projectTitleLabel.textContent = 'Title:';

                                inputContainer9.append(projectTitleLabel);


                                const projectTitleLineBreak = document.createElement('br');

                                inputContainer9.append(projectTitleLineBreak);

                                
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


                                const projectDescLineBreak = document.createElement('br');

                                inputContainer10.append(projectDescLineBreak);

                                
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


                                const projectDateLineBreak = document.createElement('br');

                                inputContainer11.append(projectDateLineBreak);

                                
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


                                const projectRemindInLineBreak = document.createElement('br');

                                inputContainer12.append(projectRemindInLineBreak);

                                
                                const projectRemindInInput = document.createElement('input');

                                projectRemindInInput.setAttribute('type','number');

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


                                const projectPriorityLineBreak = document.createElement('br');

                                inputContainer13.append(projectPriorityLineBreak);

                                
                                const projectPriorityButton = document.createElement('button');

                                projectPriorityButton.setAttribute('value','low');

                                projectPriorityButton.setAttribute('type','button');

                                projectPriorityButton.setAttribute('id','project-priority');

                                projectPriorityButton.textContent = 'Low';

                                projectPriorityButton.classList.add('form-input');

                                inputContainer13.append(projectPriorityButton);

                                projectPriorityButton.addEventListener('click', function(){

                                    // Add classes for different priorities (different colours)

                                    if (projectPriorityButton.value === 'low'){
                                        projectPriorityButton.value = 'medium';
                                        projectPriorityButton.textContent = 'Medium';

                                        return;
                                    }

                                    if (projectPriorityButton.value === 'medium'){
                                        projectPriorityButton.value = 'high';
                                        projectPriorityButton.textContent = 'High';

                                        return;
                                    }

                                    if (projectPriorityButton.value === 'high'){
                                        projectPriorityButton.value = 'low';
                                        projectPriorityButton.textContent = 'Low';

                                        return;
                                    }


                                });


                        const submitButton = document.createElement('button');

                        submitButton.setAttribute('type','submit');

                        submitButton.setAttribute('id','form-submit');

                        submitButton.textContent = 'Submit';

                        fieldset.append(submitButton);





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

        hamburgerMenu.textContent = '///';

        topContainer.append(hamburgerMenu);


    // MENU

    const noteMenu = document.createElement('div');

    noteMenu.classList.add('note-menu');

    mainContainer.append(noteMenu);

        const allTodosTabDOM = document.createElement('div');

        allTodosTabDOM.classList.add('all-todos-tab');

        noteMenu.append(allTodosTabDOM);

            const allTodosHeader = document.createElement('h1');

            allTodosHeader.textContent = 'All Todos';

            allTodosTabDOM.append(allTodosHeader)


        const allProjectsTabDOM = document.createElement('div');

        allProjectsTabDOM.classList.add('all-projects-tab');

        noteMenu.append(allProjectsTabDOM);

            const allProjectsHeader = document.createElement('h1');

            allProjectsHeader.textContent = 'Projects';

            allProjectsTabDOM.append(allProjectsHeader);


        const allNotesTabDOM = document.createElement('div');

        allNotesTabDOM.classList.add('all-notes-tab');

        noteMenu.append(allNotesTabDOM);

            const allNotesHeader = document.createElement('h1');

            allNotesHeader.textContent = 'Notes';

            allNotesTabDOM.append(allNotesHeader);




    // FOOTER
    const todoContainerFooter = document.createElement('div');

    todoContainerFooter.classList.add('todo-container-footer');

    mainContainer.append(todoContainerFooter);

        const linkContainer = document.createElement('div');

        linkContainer.classList.add('link-container');

        todoContainerFooter.append(linkContainer);

            const footerLink = document.createElement('a');

            footerLink.setAttribute('href','');

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


                const todoDisplay = document.createElement('div');

                todoDisplay.classList.add('todo-display');

                todoDisplayContainer.append(todoDisplay);



                    const todoDisplayTitle = document.createElement('input');

                    todoDisplayTitle.setAttribute('placeholder','Title');

                    todoDisplayTitle.setAttribute('id','todo-display-title');

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


                    

                    const lineBreak1 = document.createElement('br');
                    todoDisplay.append(lineBreak1);


                    const todoUpdate = document.createElement('button');

                    todoUpdate.setAttribute('value','');

                    todoUpdate.setAttribute('type','button');

                    todoUpdate.setAttribute('id','todo-update');

                    todoUpdate.textContent = 'Update';

                    todoUpdate.classList.add('todo-update');

                    todoDisplay.append(todoUpdate);


                    const lineBreak2 = document.createElement('br');
                    
                    todoDisplay.append(lineBreak2);


                    const todoDelete = document.createElement('button');

                    todoDelete.setAttribute('value','');

                    todoDelete.setAttribute('type','button');

                    todoDelete.setAttribute('id','todo-delete');

                    todoDelete.textContent = 'Delete';

                    todoDelete.classList.add('todo-update');

                    todoDisplay.append(todoDelete);


                    (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__.updateNoteItem)(object);

                    (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__.deleteTodoItem)(object);

                
        });
    });




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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tabObjects_allProjectsTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tabObjects/allProjectsTab */ "./src/tabObjects/allProjectsTab.js");
/* harmony import */ var _domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domActivities/domActivities */ "./src/domActivities/domActivities.js");





// POPULATE TODO COLLECTION CONTAINER

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
                
                            const projectTitleDiv = document.createElement('div');
                
                            projectTitleDiv.textContent = titleArray[index];
                
                            statusContainer.append(projectTitleDiv);
                
                
                            const dueStatusContainer = document.createElement('div');
                
                            dueStatusContainer.classList.add(classArray[index]);
                
                            projectTitleDiv.append(dueStatusContainer);
                
                
                                const scrollableContainer = document.createElement('div');
                
                                scrollableContainer.classList.add('scrollable-container');
                
                                dueStatusContainer.append(scrollableContainer);

                                

                                // loops over each project object and appends them to scrollable container
                                arrayByDueStatus.forEach(project => {
                                    
                                    const projectContainer = document.createElement('div');

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

                                        projectDateDiv.textContent = project.dueDate;

                                        projectContainer.append(projectDateDiv);


                                        const projectDurationLeftDiv = document.createElement('div');

                                        projectDurationLeftDiv.classList.add('project-dur-left-div');

                                        projectDurationLeftDiv.textContent = `${project.durationLeft.dayLeft} days, ${project.durationLeft.monthsLeft} months and ${project.durationLeft.yearsLeft} years left`;

                                        projectContainer.append(projectDurationLeftDiv);


                                        const projectPrioritytDiv = document.createElement('div');

                                        projectPrioritytDiv.classList.add('project-priority-div');

                                        projectPrioritytDiv.textContent = project.priority;

                                        projectContainer.append(projectPrioritytDiv);


                                        // DISPLAY PROJECT TODOS - send project container as an argument
                                            projectContainer.addEventListener('click',function(){
                                                console.log('BOOM BOOM!');

                                                console.log(project.todosByPriority);                                           

                                                const mainContainer = document.querySelector('.main-container');

                                                    const projectTodoContainer = document.createElement('div');

                                                    projectTodoContainer.classList.add('project-todo-container');

                                                    mainContainer.append(projectTodoContainer);

                                                        const projectDetails = document.createElement('div');

                                                        projectDetails.classList.add('project-details');

                                                        projectTodoContainer.append(projectDetails);

                                                            projectDetails.addEventListener('click',function(e){
                                                                e.stopPropagation();
                                                            })


                                                            const projectTitleInput = document.createElement('input');

                                                            projectTitleInput.setAttribute('id','project-title-update')

                                                            projectTitleInput.value = project.title;

                                                            projectTitleInput.setAttribute('required','');

                                                            projectTitleInput.setAttribute('placeholder', 'Project Title');

                                                            projectDetails.append(projectTitleInput);




                                                            const projectDetailsLineBreak1 = document.createElement('br');

                                                            projectDetails.append(projectDetailsLineBreak1);




                                                            const projectDescInput = document.createElement('textarea');

                                                            projectDescInput.setAttribute('id','project-desc-update');

                                                            projectDescInput.value = project.desc;

                                                            projectDescInput.setAttribute('required','');

                                                            projectDescInput.setAttribute('placeholder', 'Project Description');

                                                            projectDescInput.setAttribute('rows','4');

                                                            projectDescInput.setAttribute('cols','40');

                                                            projectDetails.append(projectDescInput);




                                                            const projectDetailsLineBreak2 = document.createElement('br');

                                                            projectDetails.append(projectDetailsLineBreak2);




                                                            const projectDateInput = document.createElement('input');

                                                            projectDateInput.setAttribute('id','project-date-update');

                                                            projectDateInput.value = project.dueDate;

                                                            projectDateInput.setAttribute('required','');

                                                            projectDateInput.setAttribute('type','date')

                                                            projectDetails.append(projectDateInput);




                                                            const projectDetailsLineBreak3 = document.createElement('br');

                                                            projectDetails.append(projectDetailsLineBreak3);





                                                            const projectRemindInInput = document.createElement('input');

                                                            projectRemindInInput.setAttribute('id','project-reminder-update');

                                                            projectRemindInInput.setAttribute('type','number');

                                                            projectRemindInInput.setAttribute('required','');

                                                            projectRemindInInput.classList.add('form-input');

                                                            projectRemindInInput.value = project.remindIn;

                                                            projectDetails.append(projectRemindInInput);

                                                            


                                                            const projectDetailsLineBreak4 = document.createElement('br');

                                                            projectDetails.append(projectDetailsLineBreak4);


         
                                                            const projectPriorityButton = document.createElement('button');

                                                            projectPriorityButton.setAttribute('id','project-priority-update');

                                                            projectPriorityButton.setAttribute('value',project.priority);

                                                            projectPriorityButton.setAttribute('type','button');

                                                            projectPriorityButton.textContent = project.priority;

                                                            projectDetails.append(projectPriorityButton);

                                                            projectPriorityButton.addEventListener('click', function(){

                                                                // Add classes for different priorities (different colours)

                                                                if (projectPriorityButton.value === 'low'){
                                                                    projectPriorityButton.value = 'medium';
                                                                    projectPriorityButton.textContent = 'Medium';

                                                                    return;
                                                                }

                                                                if (projectPriorityButton.value === 'medium'){
                                                                    projectPriorityButton.value = 'high';
                                                                    projectPriorityButton.textContent = 'High';

                                                                    return;
                                                                }

                                                                if (projectPriorityButton.value === 'high'){
                                                                    projectPriorityButton.value = 'low';
                                                                    projectPriorityButton.textContent = 'Low';

                                                                    return;
                                                                }


                                                            });



                                                            const projectDetailsLineBreak5 = document.createElement('br');

                                                            projectDetails.append(projectDetailsLineBreak5);





                                                            const projectDisplayStatus = document.createElement('button');

                                                            projectDisplayStatus.setAttribute('id','project-status-update');

                                                            projectDisplayStatus.setAttribute('value',project.status);

                                                            projectDisplayStatus.setAttribute('type','button');

                                                            projectDisplayStatus.textContent = project.status;

                                                            projectDisplayStatus.classList.add('todo-update');

                                                            projectDetails.append(projectDisplayStatus);

                                                            projectDisplayStatus.addEventListener('click', function(){

                                                                // Add classes for different priorities (different colours)

                                                                if (projectDisplayStatus.value === 'pending'){
                                                                    projectDisplayStatus.value = 'complete';
                                                                    projectDisplayStatus.textContent = 'Complete';

                                                                    return;
                                                                }

                                                                if (projectDisplayStatus.value === 'complete'){
                                                                    projectDisplayStatus.value = 'pending';
                                                                    projectDisplayStatus.textContent = 'Pending';

                                                                    return;
                                                                }


                                                            });

                                                            















                                                        const projectTodos = document.createElement('div');

                                                        projectTodos.classList.add('project-todos');

                                                        projectDetails.append(projectTodos);

                                                        projectTodos.addEventListener('click',function(e){
                                                            e.stopPropagation();
                                                        })

                                                        const allProjectTodos = project.todosByPriority;

                                                        const priorityArray = ['high','medium','low']

                                                        const dueStatusArray = ['overdue','due','upcoming','complete'];

                                                        const titleArray = ['OVERDUE','DUE SOON','UPCOMING','COMPLETED'];

                                                        const classArray = ['overdue-todos','due-soon-todos','upcoming-todos','complete-todos'];


                                                        priorityArray.forEach(priority => {

                                                            for (const key in allProjectTodos) {



                                                                if (allProjectTodos[key].overdue.length === 0 && allProjectTodos[key].due.length === 0 && allProjectTodos[key].upcoming.length === 0 && allProjectTodos[key].complete.length === 0) {
                                                                    
                                                                    // move to next loop if empty
                                                                    
                                                                    continue;
                                                                }


                                                                if (key === priority) {
    
                                                                    const priorityTitle = document.createElement('div');

                                                                    priorityTitle.textContent = priority.toUpperCase() +` PRIORITY`;

                                                                    projectTodos.append(priorityTitle);
                                                        
                                                                    
                                                        
                                                                    for (let index = 0; index < dueStatusArray.length; index++) {
                                                        
                                                        
                                                                        const property = dueStatusArray[index];
                                                        
                                                                        const specifiedObjByPriority = allProjectTodos[key];
    
                                                                        console.log(specifiedObjByPriority);
                                                        
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
                                                        
                                                                                            todoContainer.classList.add('todo-container');
                                                        
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
                                                        
                                                        
                                                                                                const todoDurationLeftDiv = document.createElement('div');
                                                        
                                                                                                todoDurationLeftDiv.classList.add('todo-dur-left-div');
                                                        
                                                                                                todoDurationLeftDiv.textContent = `${object.durationLeft.dayLeft} days, ${object.durationLeft.monthsLeft} months and ${object.durationLeft.yearsLeft} years left`;
                                                        
                                                                                                todoContainer.append(todoDurationLeftDiv);
                                                        
                                                        
                                                                                                const todoProjectDiv = document.createElement('div');
                                                        
                                                                                                todoProjectDiv.classList.add('todo-project-div');
                                                        
                                                                                                todoProjectDiv.textContent = object.project;
                                                        
                                                                                                todoContainer.append(todoProjectDiv);
                                                        
                                                        
                                                                                                const todoPrioritytDiv = document.createElement('div');
                                                        
                                                                                                todoPrioritytDiv.classList.add('todo-priority-div');
                                                        
                                                                                                todoPrioritytDiv.textContent = object.priority;
                                                        
                                                                                                todoContainer.append(todoPrioritytDiv);



                                                                                            // Displays todo item
                                                                                            todoContainer.addEventListener('click',function(){
                                                                                                









                                                                                                const mainContainer = document.querySelector('.main-container');

                                                                                                const todoDisplayContainer = document.createElement('div');

                                                                                                todoDisplayContainer.classList.add('todo-display-container');

                                                                                                mainContainer.append(todoDisplayContainer);


                                                                                                    const todoDisplay = document.createElement('div');

                                                                                                    todoDisplay.classList.add('todo-display');

                                                                                                    todoDisplayContainer.append(todoDisplay);



                                                                                                        const todoDisplayTitle = document.createElement('input');

                                                                                                        todoDisplayTitle.setAttribute('placeholder','Title');

                                                                                                        todoDisplayTitle.setAttribute('id','todo-display-title');

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

                                                                                                        todoDisplay.append(todoDisplayDate);

                                                                                                        const lineBreak1 = document.createElement('br');                                               
                                                                                                        todoDisplay.append(lineBreak1);


                                                                                                        const todoDisplayRemindIn = document.createElement('input');

                                                                                                        todoDisplayRemindIn.setAttribute('type','number');

                                                                                                        todoDisplayRemindIn.setAttribute('id','todo-display-remind-in');

                                                                                                        console.log(object.dueDate);

                                                                                                        todoDisplayRemindIn.setAttribute('placeholder','Remind in how many days?');

                                                                                                        todoDisplayRemindIn.value = object.remindIn;

                                                                                                        todoDisplayRemindIn.classList.add('todo-update');

                                                                                                        todoDisplay.append(todoDisplayRemindIn);

                                                                                                        const lineBreak2 = document.createElement('br');
                                                                                                        todoDisplay.append(lineBreak2);


                                                                                                        const todoDisplayPriority = document.createElement('button');

                                                                                                        todoDisplayPriority.setAttribute('value',object.priority);

                                                                                                        todoDisplayPriority.setAttribute('type','button');

                                                                                                        todoDisplayPriority.setAttribute('id','todo-display-priority');

                                                                                                        todoDisplayPriority.textContent = object.priority;

                                                                                                        todoDisplayPriority.classList.add('todo-update');

                                                                                                        todoDisplay.append(todoDisplayPriority);

                                                                                                        todoDisplayPriority.addEventListener('click', function(){

                                                                                                            
                                                                                                            console.log(todoDisplayPriority.value)

                                                                                                            // Add classes for different priorities (different colours)

                                                                                                            if (todoDisplayPriority.value === 'low'){
                                                                                                                todoDisplayPriority.value = 'medium';
                                                                                                                todoDisplayPriority.textContent = 'Medium';

                                                                                                                return;
                                                                                                            }

                                                                                                            if (todoDisplayPriority.value === 'medium'){
                                                                                                                todoDisplayPriority.value = 'high';
                                                                                                                todoDisplayPriority.textContent = 'High';

                                                                                                                return;
                                                                                                            }

                                                                                                            if (todoDisplayPriority.value === 'high'){
                                                                                                                todoDisplayPriority.value = 'low';
                                                                                                                todoDisplayPriority.textContent = 'Low';

                                                                                                                return;
                                                                                                            }


                                                                                                        });

                                                                                                        const lineBreak3 = document.createElement('br');
                                                                                                        todoDisplay.append(lineBreak3);


                                                                                                        const projectsDropDown = document.createElement('select');

                                                                                                        projectsDropDown.setAttribute('name','project-display-choices');
                                                                            
                                                                                                        projectsDropDown.setAttribute('id','project-display-choices');
                                                                            
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
                                                                                                                    // console.log(object.title);
                                                                                                    
                                                                                                                    const projectOption = document.createElement('option');
                                                                                                    
                                                                                                                    projectOption.textContent = obj.title;
                                                                                                    
                                                                                                                    projectOption.value = obj.title;
                                                                                                    
                                                                                                                    projectsDropDown.append(projectOption);
                                                                                                                });



                                                                                                        const lineBreak4 = document.createElement('br');
                                                                                                        todoDisplay.append(lineBreak4);

                                                                                                        // create line break 

                                                                                                        const todoDisplayStatus = document.createElement('button');

                                                                                                        todoDisplayStatus.setAttribute('value',object.status);

                                                                                                        todoDisplayStatus.setAttribute('type','button');

                                                                                                        todoDisplayStatus.setAttribute('id','todo-display-status');

                                                                                                        todoDisplayStatus.textContent = object.status;

                                                                                                        todoDisplayStatus.classList.add('todo-update');

                                                                                                        todoDisplay.append(todoDisplayStatus);

                                                                                                        todoDisplayStatus.addEventListener('click', function(){

                                                                                                            // Add classes for different priorities (different colours)

                                                                                                            if (todoDisplayStatus.value === 'pending'){
                                                                                                                todoDisplayStatus.value = 'complete';
                                                                                                                todoDisplayStatus.textContent = 'Complete';

                                                                                                                return;
                                                                                                            }

                                                                                                            if (todoDisplayStatus.value === 'complete'){
                                                                                                                todoDisplayStatus.value = 'pending';
                                                                                                                todoDisplayStatus.textContent = 'Pending';

                                                                                                                return;
                                                                                                            }


                                                                                                        });

                                                                                                        const lineBreak5 = document.createElement('br');
                                                                                                        todoDisplay.append(lineBreak5);


                                                                                                        const todoUpdate = document.createElement('button');

                                                                                                        todoUpdate.setAttribute('value','');

                                                                                                        todoUpdate.setAttribute('type','button');

                                                                                                        todoUpdate.setAttribute('id','todo-update');

                                                                                                        todoUpdate.textContent = 'Update';

                                                                                                        todoUpdate.classList.add('todo-update');

                                                                                                        todoDisplay.append(todoUpdate);


                                                                                                        (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__.updateTodoItem)(object);















                                                                                            })
                                                        
                                                        
                                                                                                
                                                        
                                                                                        });
                                                                                        
                                                                                    }
                                                        
                                                                        }
                                                        
                                                        
                                                        
                                                        
                                                                        
                                                                    }
                                                        
                                                                    
                                                        
                                                        
                                                                }
                                                        
                                                            }
                                                            
                                                        });



                                                    
                                                        const projectUpdateButton = document.createElement('button');

                                                        projectUpdateButton.setAttribute('value','');

                                                        projectUpdateButton.setAttribute('type','button');

                                                        projectUpdateButton.setAttribute('id','project-update');

                                                        projectUpdateButton.textContent = 'Update';

                                                        projectUpdateButton.classList.add('project-update');

                                                        projectDetails.append(projectUpdateButton);



                                                        const projectDetailsLineBreak6 = document.createElement('br');

                                                        projectDetails.append(projectDetailsLineBreak6);


                                                        const projectDelete = document.createElement('button');

                                                        projectDelete.setAttribute('value','');

                                                        projectDelete.setAttribute('type','button');

                                                        projectDelete.setAttribute('id','project-delete');

                                                        projectDelete.textContent = 'Delete';

                                                        projectDetails.append(projectDelete);


                                                        (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__.updateProjectItem)(project);

                                                        (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__.deleteProjectItem)(project)





                                                    // function updateProjectItem (project){


                                                    //     const projectDisplayContainer = document.querySelector('.project-todo-container');
                                                
                                                    //     const projectDisplay = document.querySelector('.project-details');
                                                
                                                    //     const projectUpdateButton = document.querySelector('#project-update');
                                                
                                                    //     projectUpdateButton.addEventListener('click',function(){

                                                    //         // project-status-update
                                                
                                                    //     const newProjectTitle = document.querySelector('#project-title-update')
                                                    //     const newProjectDesc = document.querySelector('#project-desc-update');
                                                    //     const newProjectDue = document.querySelector('#project-date-update');
                                                    //     const newProjectReminder = document.querySelector('#project-reminder-update');
                                                    //     const newProjectPriority = document.querySelector('#project-priority-update');
                                                    //     const newProjectStatus = document.querySelector('#project-status-update');

                                                    //     console.log(newProjectReminder);
                                                        
                                                        
                                                
                                                    //     let newDetails = {
                                                    //         // update this
                                                    //         newTitle: newProjectTitle.value,
                                                    //         newDesc: newProjectDesc.value,
                                                    //         newDue: newProjectDue.value,
                                                    //         newReminder: newProjectReminder.value,
                                                    //         newPriority: newProjectPriority.value,
                                                    //         newStatus: newProjectStatus.value,
                                                    //     }

                                                    //     // create a project update function
                                                        
                                                    //     // todoModule.updateTodo(project,newDetails);

                                                    //     projectModule.updateProject(project,newDetails);
                                                
                                                    //     // recentCollectionContainerFn(recentCollectionContainerArg);
                                                
                                                    //     projectDisplayContainer.remove();
                                                
                                                    //     });
                                                
                                                
                                                        
                                                    //     projectDisplayContainer.addEventListener('click',function(){
                                                    //         projectDisplayContainer.remove();
                                                    //     })
                                                
                                                    //     projectDisplay.addEventListener('click',function(e){
                                                    //         e.stopPropagation();
                                                    //     })
                                                
                                                
                                                
                                                    // }

                                                   




                                                    projectTodoContainer.addEventListener('click', function(){
                                                        projectTodoContainer.remove();
                                                        console.log('works!')
                                                    });


                                            })


                                        

                                });
                                
                            }

                }




                
            }

            


        }

    }

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
                
                            const todoTitleDiv = document.createElement('div');
                
                            todoTitleDiv.textContent = titleArray[index];
                
                            statusContainer.append(todoTitleDiv);
                
                
                            const dueStatusContainer = document.createElement('div');
                
                            dueStatusContainer.classList.add(classArray[index]);
                
                            todoTitleDiv.append(dueStatusContainer);
                
                
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

                                        todoDescDiv.textContent = object.desc;

                                        todoContainer.append(todoDescDiv);


                                        const todoDateDiv = document.createElement('div');

                                        todoDateDiv.classList.add('todo-date-div');

                                        todoDateDiv.textContent = object.dueDate;

                                        todoContainer.append(todoDateDiv);


                                        const todoDurationLeftDiv = document.createElement('div');

                                        todoDurationLeftDiv.classList.add('todo-dur-left-div');

                                        todoDurationLeftDiv.textContent = `${object.durationLeft.dayLeft} days, ${object.durationLeft.monthsLeft} months and ${object.durationLeft.yearsLeft} years left`;

                                        todoContainer.append(todoDurationLeftDiv);


                                        const todoProjectDiv = document.createElement('div');

                                        todoProjectDiv.classList.add('todo-project-div');

                                        todoProjectDiv.textContent = object.project;

                                        todoContainer.append(todoProjectDiv);


                                        const todoPrioritytDiv = document.createElement('div');

                                        todoPrioritytDiv.classList.add('todo-priority-div');

                                        todoPrioritytDiv.textContent = object.priority;

                                        todoContainer.append(todoPrioritytDiv);


                                    // SEND TO A SEPARATE MODULE - OPENS TODO ITEM
                                    todoContainer.addEventListener('click',function(){

                                        const mainContainer = document.querySelector('.main-container');

                                        const todoDisplayContainer = document.createElement('div');

                                        todoDisplayContainer.classList.add('todo-display-container');

                                        mainContainer.append(todoDisplayContainer);


                                            const todoDisplay = document.createElement('div');

                                            todoDisplay.classList.add('todo-display');

                                            todoDisplayContainer.append(todoDisplay);



                                                const todoDisplayTitle = document.createElement('input');

                                                todoDisplayTitle.setAttribute('placeholder','Title');

                                                todoDisplayTitle.setAttribute('id','todo-display-title');

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

                                                todoDisplay.append(todoDisplayDate);

                                                const lineBreak1 = document.createElement('br');                                               
                                                todoDisplay.append(lineBreak1);


                                                const todoDisplayRemindIn = document.createElement('input');

                                                todoDisplayRemindIn.setAttribute('type','number');

                                                todoDisplayRemindIn.setAttribute('id','todo-display-remind-in');

                                                todoDisplayRemindIn.setAttribute('placeholder','Remind in how many days?');

                                                todoDisplayRemindIn.value = object.remindIn;

                                                todoDisplayRemindIn.classList.add('todo-update');

                                                todoDisplay.append(todoDisplayRemindIn);

                                                const lineBreak2 = document.createElement('br');
                                                todoDisplay.append(lineBreak2);


                                                const todoDisplayPriority = document.createElement('button');

                                                todoDisplayPriority.setAttribute('value',object.priority);

                                                todoDisplayPriority.setAttribute('type','button');

                                                todoDisplayPriority.setAttribute('id','todo-display-priority');

                                                todoDisplayPriority.textContent = object.priority;

                                                todoDisplayPriority.classList.add('todo-update');

                                                todoDisplay.append(todoDisplayPriority);

                                                todoDisplayPriority.addEventListener('click', function(){

                                                    // Add classes for different priorities (different colours)

                                                    if (todoDisplayPriority.value === 'low'){
                                                        todoDisplayPriority.value = 'medium';
                                                        todoDisplayPriority.textContent = 'Medium';

                                                        return;
                                                    }

                                                    if (todoDisplayPriority.value === 'medium'){
                                                        todoDisplayPriority.value = 'high';
                                                        todoDisplayPriority.textContent = 'High';

                                                        return;
                                                    }

                                                    if (todoDisplayPriority.value === 'high'){
                                                        todoDisplayPriority.value = 'low';
                                                        todoDisplayPriority.textContent = 'Low';

                                                        return;
                                                    }


                                                });

                                                const lineBreak3 = document.createElement('br');
                                                todoDisplay.append(lineBreak3);


                                                const projectsDropDown = document.createElement('select');

                                                projectsDropDown.setAttribute('name','project-display-choices');
                    
                                                projectsDropDown.setAttribute('id','project-display-choices');
                    
                                                projectsDropDown.classList.add('form-input');
                    
                                                todoDisplay.append(projectsDropDown);




                                                        const unprocessedProject = (0,_tabObjects_allProjectsTab__WEBPACK_IMPORTED_MODULE_1__["default"])().unprocessedProjectArray

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



                                                const lineBreak4 = document.createElement('br');
                                                todoDisplay.append(lineBreak4);

                                                // create line break 

                                                const todoDisplayStatus = document.createElement('button');

                                                todoDisplayStatus.setAttribute('value',object.status);

                                                todoDisplayStatus.setAttribute('type','button');

                                                todoDisplayStatus.setAttribute('id','todo-display-status');

                                                todoDisplayStatus.textContent = object.status;

                                                todoDisplayStatus.classList.add('todo-update');

                                                todoDisplay.append(todoDisplayStatus);

                                                todoDisplayStatus.addEventListener('click', function(){

                                                    // Add classes for different priorities (different colours)

                                                    if (todoDisplayStatus.value === 'pending'){
                                                        todoDisplayStatus.value = 'complete';
                                                        todoDisplayStatus.textContent = 'Complete';

                                                        return;
                                                    }

                                                    if (todoDisplayStatus.value === 'complete'){
                                                        todoDisplayStatus.value = 'pending';
                                                        todoDisplayStatus.textContent = 'Pending';

                                                        return;
                                                    }


                                                });

                                                const lineBreak5 = document.createElement('br');
                                                todoDisplay.append(lineBreak5);


                                                const todoUpdate = document.createElement('button');

                                                todoUpdate.setAttribute('value','');

                                                todoUpdate.setAttribute('type','button');

                                                todoUpdate.setAttribute('id','todo-update');

                                                todoUpdate.textContent = 'Update';

                                                todoUpdate.classList.add('todo-update');

                                                todoDisplay.append(todoUpdate);

                                                
                                                const lineBreak6 = document.createElement('br');
                                                todoDisplay.append(lineBreak6);


                                                const todoDelete = document.createElement('button');

                                                todoDelete.setAttribute('value','');

                                                todoDelete.setAttribute('type','button');

                                                todoDelete.setAttribute('id','todo-delete');

                                                todoDelete.textContent = 'Delete';

                                                todoDelete.classList.add('todo-update');

                                                todoDisplay.append(todoDelete);


                                                (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_2__.updateTodoItem)(object);

                                                (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_2__.deleteTodoItem)(object);


                                                
                                            
                                    });

                                });
                                
                            }

                }
                
            }

        }

    }

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

            highPriority.classList.add('chosen-priority');

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


    (0,_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_0__["default"])('high');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBaUU7O0FBRWpFOztBQUVBLDZDQUE2QztBQUM3QyxnQ0FBZ0M7QUFDaEMseUJBQXlCO0FBQ3pCOztBQUVBLHNCQUFzQjtBQUN0QiwwQkFBMEI7QUFDMUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFRQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsUUFBUSxVQUFVLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsUUFBUSxLQUFLLFlBQVksV0FBVyxzQkFBc0IsT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsV0FBVyxXQUFXLGFBQWEsT0FBTyxRQUFRLFdBQVcsTUFBTSxVQUFVLFlBQVksYUFBYSxjQUFjLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLFlBQVksT0FBTyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGVBQWUsY0FBYyxjQUFjLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxlQUFlLE9BQU8sT0FBTyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxTQUFTLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsWUFBWSxRQUFRLE1BQU0sVUFBVSxZQUFZLDBCQUEwQixjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLEtBQUssVUFBVSxVQUFVLFlBQVksWUFBWSxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsYUFBYSxPQUFPLFNBQVMsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsY0FBYyxjQUFjLFFBQVEsTUFBTSxVQUFVLFVBQVUsWUFBWSx5QkFBeUIsWUFBWSxhQUFhLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxjQUFjLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLFVBQVUsYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxjQUFjLE9BQU8sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFFBQVEsYUFBYSxRQUFRLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxRQUFRLFVBQVUsU0FBUyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFB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QUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQSxRQUFRLGtGQUFzQjs7QUFFOUI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUEsUUFBUSxzRkFBb0I7O0FBRTVCO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBLFFBQVEsc0ZBQW9COztBQUU1QjtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBLFFBQVEsc0ZBQW9COztBQUU1QjtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFVOztBQUVsQjs7QUFFQTs7QUFFQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOzs7O0FBSVQ7Ozs7OztBQU1BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBVTs7QUFFbEI7O0FBRUE7O0FBRUEsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7OztBQUlUOzs7Ozs7Ozs7O0FBVUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsaUNBQWlDOzs7QUFHakM7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7OztBQUdBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLGlDQUFpQzs7O0FBR2pDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQSx1REFBdUQsc0VBQWM7OztBQUdyRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQzs7QUFFckM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxpQ0FBaUM7O0FBRWpDOztBQUVBOzs7QUFHQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRXBDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsZ0NBQWdDOztBQUVoQzs7QUFFQTs7Ozs7O0FBTUE7Ozs7O0FBS0EsZ0NBQWdDOzs7QUFHaEM7O0FBRUE7OztBQUdBLGlFQUFlLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3eEI1Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBLGlFQUFlLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SHdCO0FBQzRCOztBQUVoRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7OztBQUdMOztBQUVBOztBQUVBOztBQUVBLHVCQUF1QixtRUFBVzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0Esb0JBQW9CLDRFQUFjOztBQUVsQyxvQkFBb0IsNEVBQWM7O0FBRWxDO0FBQ0EsU0FBUztBQUNULEtBQUs7Ozs7O0FBS0w7O0FBRUE7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSjJDOztBQUUyQzs7O0FBR3JHOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7OztBQUlMLDZCQUE2QixzRUFBYztBQUMzQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxnQ0FBZ0MsK0JBQStCOzs7QUFHL0Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUEsZ0ZBQWdGLDhCQUE4QixRQUFRLGlDQUFpQyxhQUFhLGdDQUFnQzs7QUFFcE07OztBQUdBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDZEQUE2RDs7O0FBRzdEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLDZEQUE2RDs7OztBQUk3RDs7QUFFQTs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLDZEQUE2RDs7QUFFN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlEQUF5RDs7QUFFekQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0YsK0JBQStCO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFJQUFxSSw2QkFBNkIsUUFBUSxnQ0FBZ0MsYUFBYSwrQkFBK0I7QUFDdFA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EseUdBQXlH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OztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxpREFBaUQ7O0FBRWpEO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBLG1GQUFtRixzRUFBYzs7QUFFakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDs7OztBQUl6RDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxpREFBaUQ7O0FBRWpEO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBLGdEQUFnRCw0RUFBYzs7QUFFOUQsZ0RBQWdELDRFQUFjOzs7QUFHOUQ7QUFDQTtBQUNBLHFDQUFxQzs7QUFFckMsaUNBQWlDO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwYmhDOztBQUVrRTs7QUFFSzs7QUFFdkU7O0FBRUE7Ozs7O0FBS0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7O0FBR0E7OztBQUdBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7QUFNQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQSxJQUFJLHlFQUFvQjs7QUFFeEIsSUFBSSxtRkFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7O0FDdEg2Qjs7QUFFNUQ7O0FBRUEsMkJBQTJCLHFFQUFjOztBQUV6Qyx1QkFBdUIscUVBQWM7O0FBRXJDOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJrQzs7QUFFNUQ7O0FBRUE7O0FBRUEsb0NBQW9DLHFFQUFjOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLHFFQUFjOzs7QUFHN0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1DQUFtQyxxRUFBYzs7O0FBR2pEO0FBQ0E7O0FBRUEsMkNBQTJDLHFFQUFjOztBQUV6RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFFQUFjOztBQUVyRDs7Ozs7O0FBTUE7O0FBRUE7OztBQUdBLFlBQVk7O0FBRVo7O0FBRUE7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFa0M7O0FBRTVEOztBQUVBLDJCQUEyQixxRUFBYztBQUN6Qyw0QkFBNEIscUVBQWM7O0FBRTFDO0FBQ0E7QUFDQSxvQ0FBb0MscUVBQWM7O0FBRWxEOzs7QUFHQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7VUN6QjFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7O0FBRXFDOztBQUVKOztBQUVNOzs7OztBQUs1RDs7QUFFQTtBQUNBLHdFQUFhOztBQUViO0FBQ0Esd0VBQVM7O0FBRVQ7QUFDQSwyRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVRvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUFjdGl2aXRpZXMvc29ydGluZ01ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL2FsbE5vdGVzRE9NQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL2FsbFRvZG9ET01DcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tQ3JlYXRpb24vZm9ybURPTUNyZWF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21DcmVhdGlvbi9tYWluRE9NQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL3BvcHVsYXRlRE9NTm90ZUNvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL3BvcHVsYXRlRE9NUHJvamVjdENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL3BvcHVsYXRlRE9NVG9kb0NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL3Byb2plY3RzRE9NQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RhYk9iamVjdHMvYWxsTm90ZXNUYWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RhYk9iamVjdHMvYWxsUHJvamVjdHNUYWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RhYk9iamVjdHMvYWxsVG9kb3NUYWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuXG5cblxuLm1haW4tY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmciA0MHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJ0b3AtY29udGFpbmVyIHRvcC1jb250YWluZXJcIiBcbiAgICBcIm5vdGUtbWVudSBkaXNwbGF5LWNvbnRhaW5lclwiXG4gICAgXCJ0b2RvLWNvbnRhaW5lci1mb290ZXIgdG9kby1jb250YWluZXItZm9vdGVyXCI7XG5cbiAgICBcblxufVxuXG5cbi5ub3RlLW1lbnV7XG4gICAgZ3JpZC1hcmVhOiBub3RlLW1lbnU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcbn1cblxuLm5vdGUtbWVudSA+IGRpdiA+IGgxIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG5cbi50b3AtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgZ3JpZC1hcmVhOiB0b3AtY29udGFpbmVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmlvbGV0O1xufVxuXG4udG9wLWNvbnRhaW5lci1zcGFjaW5nIHtcbiAgICBmbGV4OiAxO1xufVxuXG4uYnJhbmQtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgICB3aWR0aDogMjUwcHg7XG59XG5cblxuLmhhbWJ1cmdlci1tZW51IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0ZWFsO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qZGlzcGxheTogYmxvY2sgd2hlbiBkaXNwbGF5IGlzIGJlbG93IDYwMHB4ICovIFxufVxuXG4uZGlzcGxheS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgZ3JpZC1hcmVhOiBkaXNwbGF5LWNvbnRhaW5lcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcblxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgIFwidG9kby1jb250YWluZXItdGl0bGVcIlxuICAgIFwiY29sbGVjdGlvbi1jb250YWluZXJcIjtcblxufVxuXG5cblxuXG5cbi50b2RvLWNvbnRhaW5lci10aXRsZXtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiB0b2RvLWNvbnRhaW5lci10aXRsZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWJsdWU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIFxufVxuLnByaW9yaXR5LWJ1dHRvbnN7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcblxufVxuXG4ucHJpb3JpdHktYnV0dG9ucyA+IGJ1dHRvbntcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5jaG9zZW4tcHJpb3JpdHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xufVxuXG4udGFiLXRpdGxle1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4udG9kby1jb250YWluZXItZm9vdGVye1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IHRvZG8tY29udGFpbmVyLWZvb3RlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWJsdWU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLyogVGhpcyBpcyB0aGUgdHJpY2t5IHBhcnQgKi9cbi5jb2xsZWN0aW9uLWNvbnRhaW5lcntcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC1hcmVhOiBjb2xsZWN0aW9uLWNvbnRhaW5lcjtcbiAgICBcblxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LDFmcikpOyAqL1xuXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcblxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDM1MHB4KTsgKi9cbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjsgKi9cbiAgICAvKiBvdmVyZmxvdy15OiBhdXRvOyAqL1xuICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cbiAgICAvKiBvYmplY3QtZml0OiBjb3ZlcjsgKi9cbiAgICBcblxufVxuXG4vKiAudmVydGljYWwtc2Nyb2xse1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsdWU7XG59ICovXG5cbi5zdGF0dXMtY29udGFpbmVye1xuXG4gICAgYm9yZGVyOiAycHggc29saWQgZnVjaHNpYTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBoZWlnaHQ6IDM1MHB4O1xuXG59XG5cblxuXG5cblxuLm92ZXJkdWUtY29udGFpbmVyLFxuLmR1ZS1zb29uLWNvbnRhaW5lcixcbi51cGNvbWluZy1jb250YWluZXIsXG4uY29tcGxldGUtY29udGFpbmVye1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCBnb2xkO1xuICAgIGhlaWdodDogMzIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5kaWdvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XG4gICAgXG4gICAgb3ZlcmZsb3c6IGF1dG87XG5cbn1cblxuXG4uc2Nyb2xsYWJsZS1jb250YWluZXJ7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGNvbHVtbi1nYXA6IDEwcHg7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjsgLypUaGlzIHdhcyB3aGF0IGkgd2FudGVkIHRvIGRvKi9cbiAgICBcbiAgICBib3JkZXI6IDRweCBzb2xpZCBicm93bjtcblxufVxuXG4udG9kby1jb250YWluZXJ7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMjIwcHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgcGluaztcbiAgICBcbn1cblxuLnRvZG8tZGlzcGxheS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjAsIDE0NSwgMC40NzMpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDI7XG59XG5cbi50b2RvLWRpc3BsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbn1cblxuXG5cblxuXG5cbi5wcm9qZWN0LWNvbnRhaW5lcntcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCBwaW5rO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIFxufVxuXG5cblxuXG4ucHJvamVjdC10b2RvLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE4LCAxMTIsIDIxNCwgMC41ODIpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMjtcbn1cblxuLnByb2plY3QtZGV0YWlsc3tcblxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGRhcmtvcmFuZ2U7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogNzAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xuICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xufVxuXG4ucHJvamVjdC10b2Rvc3tcblxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGN5YW47XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVibHVlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuXG59XG5cbi50b2RvLXN0YXR1cy1jb250YWluZXJ7XG5cbiAgICBib3JkZXI6IDJweCBzb2xpZCBmdWNoc2lhO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC8qIGhlaWdodDogMzUwcHg7ICovXG5cbn1cblxuLm92ZXJkdWUtdG9kb3MsXG4uZHVlLXNvb24tdG9kb3MsXG4udXBjb21pbmctdG9kb3MsXG4uY29tcGxldGUtdG9kb3N7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIGdvbGQ7XG4gICAgLyogaGVpZ2h0OiAzMjBweDsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTYsIDU2LCAyNTUpO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXG5cbn1cblxuXG4uc2Nyb2xsYWJsZS10b2RvLWNvbnRhaW5lcntcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcm93LWdhcDogMTBweDtcbiAgICAvKiBoZWlnaHQ6IDQwMHB4OyAqL1xuICAgIGdyaWQtYXV0by1mbG93OiByb3c7IC8qVGhpcyB3YXMgd2hhdCBpIHdhbnRlZCB0byBkbyovXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJyb3duO1xuXG59XG5cblxuXG5cblxuXG5cbi5ub3Rlcy1jb2xsZWN0aW9ue1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCBnb2xkO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBnYXA6IDE1cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsMWZyKSk7IFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJyb3duO1xuXG59XG5cblxuLm5vdGVzLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHBpbms7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgXG59XG5cblxuXG5cbi8qIEZPUk0gQlVUVE9OICovXG5cbi5mb3JtLWJ1dHRvbi1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNTBweDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgMCUgMCUgNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbn1cblxuLmZvcm0tYnV0dG9ue1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4vKiBUT0RPIENSRUFUSU9OIEZPUk0gKi9cblxuXG4uZm9ybS1jb250YWluZXJ7XG5cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MjcpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbn1cblxuLnNob3ctZm9ybXtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4udG9kby1jcmVhdGlvbi1mb3JtIHtcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIC8qIGhlaWdodDogNzAwcHg7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xuICAgIFxufVxuXG4uY3JlYXRlLW5ldy10b2Rve1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGZvcmVzdGdyZWVuO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zZWxlY3QtZXhpc3RpbmctcHJvamVjdHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBza3libHVlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jcmVhdGUtbmV3LXByb2plY3R7XG4gICAgYm9yZGVyOiAzcHggc29saWQgY3JpbXNvbjtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uZGlzcGxheS1mb3JtLWl0ZW1ze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cblxuLyogTW9iaWxlIHZlcnNpb24gKi9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBcblxuICAgIC5oYW1idXJnZXItbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAxZnIgNDBweDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzAwcHg7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICBcInRvcC1jb250YWluZXIgdG9wLWNvbnRhaW5lclwiIFxuICAgICAgICBcImRpc3BsYXktY29udGFpbmVyIGRpc3BsYXktY29udGFpbmVyXCJcbiAgICAgICAgXCJ0b2RvLWNvbnRhaW5lci1mb290ZXIgdG9kby1jb250YWluZXItZm9vdGVyXCI7XG4gICAgXG4gICAgXG4gICAgXG4gICAgfVxuXG4gICAgXG5cbiAgICAubm90ZS1tZW51IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xuICAgICAgICBncmlkLXJvdzogMi8zO1xuICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgICAgICAvKiBoZWlnaHQ6IDkwJTsgKi9cbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIC5tZW51LWFjdGl2ZSB7IC8qdHJpZ2dlcnMgd2hlbiBoYW1idXJnZXIgbWVudSBpcyBjbGlja2VkKi9cbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7O0lB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LGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7OztBQUdBLG1CQUFtQjs7QUFFbkI7OztJQUdJO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IsaUNBQWlDO1FBQ2pDLGdDQUFnQztRQUNoQzs7O3FEQUc2Qzs7OztJQUlqRDs7OztJQUlBO1FBQ0ksa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixZQUFZO1FBQ1osVUFBVTtJQUNkOztJQUVBLGVBQWUsMENBQTBDO1FBQ3JELGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuXFxuXFxuLm1haW4tY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmciA0MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwidG9wLWNvbnRhaW5lciB0b3AtY29udGFpbmVyXFxcIiBcXG4gICAgXFxcIm5vdGUtbWVudSBkaXNwbGF5LWNvbnRhaW5lclxcXCJcXG4gICAgXFxcInRvZG8tY29udGFpbmVyLWZvb3RlciB0b2RvLWNvbnRhaW5lci1mb290ZXJcXFwiO1xcblxcbiAgICBcXG5cXG59XFxuXFxuXFxuLm5vdGUtbWVudXtcXG4gICAgZ3JpZC1hcmVhOiBub3RlLW1lbnU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xcbn1cXG5cXG4ubm90ZS1tZW51ID4gZGl2ID4gaDEge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuXFxuLnRvcC1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIGdyaWQtYXJlYTogdG9wLWNvbnRhaW5lcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmlvbGV0O1xcbn1cXG5cXG4udG9wLWNvbnRhaW5lci1zcGFjaW5nIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmJyYW5kLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgICB3aWR0aDogMjUwcHg7XFxufVxcblxcblxcbi5oYW1idXJnZXItbWVudSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRlYWw7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBkaXNwbGF5OiBub25lOyAvKmRpc3BsYXk6IGJsb2NrIHdoZW4gZGlzcGxheSBpcyBiZWxvdyA2MDBweCAqLyBcXG59XFxuXFxuLmRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBncmlkLWFyZWE6IGRpc3BsYXktY29udGFpbmVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwidG9kby1jb250YWluZXItdGl0bGVcXFwiXFxuICAgIFxcXCJjb2xsZWN0aW9uLWNvbnRhaW5lclxcXCI7XFxuXFxufVxcblxcblxcblxcblxcblxcbi50b2RvLWNvbnRhaW5lci10aXRsZXtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiB0b2RvLWNvbnRhaW5lci10aXRsZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVibHVlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIFxcbn1cXG4ucHJpb3JpdHktYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG5cXG59XFxuXFxuLnByaW9yaXR5LWJ1dHRvbnMgPiBidXR0b257XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLmNob3Nlbi1wcmlvcml0eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xcbn1cXG5cXG4udGFiLXRpdGxle1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lci1mb290ZXJ7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogdG9kby1jb250YWluZXItZm9vdGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWJsdWU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLyogVGhpcyBpcyB0aGUgdHJpY2t5IHBhcnQgKi9cXG4uY29sbGVjdGlvbi1jb250YWluZXJ7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtYXJlYTogY29sbGVjdGlvbi1jb250YWluZXI7XFxuICAgIFxcblxcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNTBweCwxZnIpKTsgKi9cXG5cXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG5cXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMzUwcHgpOyAqL1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjsgKi9cXG4gICAgLyogb3ZlcmZsb3cteTogYXV0bzsgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxuICAgIC8qIG9iamVjdC1maXQ6IGNvdmVyOyAqL1xcbiAgICBcXG5cXG59XFxuXFxuLyogLnZlcnRpY2FsLXNjcm9sbHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsdWU7XFxufSAqL1xcblxcbi5zdGF0dXMtY29udGFpbmVye1xcblxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBmdWNoc2lhO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG5cXG59XFxuXFxuXFxuXFxuXFxuXFxuLm92ZXJkdWUtY29udGFpbmVyLFxcbi5kdWUtc29vbi1jb250YWluZXIsXFxuLnVwY29taW5nLWNvbnRhaW5lcixcXG4uY29tcGxldGUtY29udGFpbmVye1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBnb2xkO1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5kaWdvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcblxcbn1cXG5cXG5cXG4uc2Nyb2xsYWJsZS1jb250YWluZXJ7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47IC8qVGhpcyB3YXMgd2hhdCBpIHdhbnRlZCB0byBkbyovXFxuICAgIFxcbiAgICBib3JkZXI6IDRweCBzb2xpZCBicm93bjtcXG5cXG59XFxuXFxuLnRvZG8tY29udGFpbmVye1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMjIwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHBpbms7XFxuICAgIFxcbn1cXG5cXG4udG9kby1kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIwLCAxNDUsIDAuNDczKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4udG9kby1kaXNwbGF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxufVxcblxcblxcblxcblxcblxcblxcbi5wcm9qZWN0LWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBwaW5rO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgXFxufVxcblxcblxcblxcblxcbi5wcm9qZWN0LXRvZG8tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxOCwgMTEyLCAyMTQsIDAuNTgyKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxze1xcblxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBkYXJrb3JhbmdlO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogNzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcXG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXFxufVxcblxcbi5wcm9qZWN0LXRvZG9ze1xcblxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBjeWFuO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlYmx1ZTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxufVxcblxcbi50b2RvLXN0YXR1cy1jb250YWluZXJ7XFxuXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGZ1Y2hzaWE7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAvKiBoZWlnaHQ6IDM1MHB4OyAqL1xcblxcbn1cXG5cXG4ub3ZlcmR1ZS10b2RvcyxcXG4uZHVlLXNvb24tdG9kb3MsXFxuLnVwY29taW5nLXRvZG9zLFxcbi5jb21wbGV0ZS10b2Rvc3tcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgZ29sZDtcXG4gICAgLyogaGVpZ2h0OiAzMjBweDsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNTYsIDI1NSk7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXFxuXFxufVxcblxcblxcbi5zY3JvbGxhYmxlLXRvZG8tY29udGFpbmVye1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICByb3ctZ2FwOiAxMHB4O1xcbiAgICAvKiBoZWlnaHQ6IDQwMHB4OyAqL1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93OyAvKlRoaXMgd2FzIHdoYXQgaSB3YW50ZWQgdG8gZG8qL1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIFxcbiAgICBib3JkZXI6IDRweCBzb2xpZCBicm93bjtcXG5cXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLm5vdGVzLWNvbGxlY3Rpb257XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGdvbGQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluZGlnbztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGdhcDogMTVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsMWZyKSk7IFxcbiAgICBib3JkZXI6IDRweCBzb2xpZCBicm93bjtcXG5cXG59XFxuXFxuXFxuLm5vdGVzLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHBpbms7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuXFxuLyogRk9STSBCVVRUT04gKi9cXG5cXG4uZm9ybS1idXR0b24tY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogNTBweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDAlIDAlIDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLmZvcm0tYnV0dG9ue1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLyogVE9ETyBDUkVBVElPTiBGT1JNICovXFxuXFxuXFxuLmZvcm0tY29udGFpbmVye1xcblxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MjcpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcblxcbn1cXG5cXG4uc2hvdy1mb3Jte1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4udG9kby1jcmVhdGlvbi1mb3JtIHtcXG4gICAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIC8qIGhlaWdodDogNzAwcHg7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcXG4gICAgXFxufVxcblxcbi5jcmVhdGUtbmV3LXRvZG97XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGZvcmVzdGdyZWVuO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VsZWN0LWV4aXN0aW5nLXByb2plY3R7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHNreWJsdWU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jcmVhdGUtbmV3LXByb2plY3R7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGNyaW1zb247XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kaXNwbGF5LWZvcm0taXRlbXN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcblxcbi8qIE1vYmlsZSB2ZXJzaW9uICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgXFxuXFxuICAgIC5oYW1idXJnZXItbWVudSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbiAgICAubWFpbi1jb250YWluZXIge1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyIDQwcHg7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzMDBweDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgXFxcInRvcC1jb250YWluZXIgdG9wLWNvbnRhaW5lclxcXCIgXFxuICAgICAgICBcXFwiZGlzcGxheS1jb250YWluZXIgZGlzcGxheS1jb250YWluZXJcXFwiXFxuICAgICAgICBcXFwidG9kby1jb250YWluZXItZm9vdGVyIHRvZG8tY29udGFpbmVyLWZvb3RlclxcXCI7XFxuICAgIFxcbiAgICBcXG4gICAgXFxuICAgIH1cXG5cXG4gICAgXFxuXFxuICAgIC5ub3RlLW1lbnUge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICAgICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgICAgICAvKiBoZWlnaHQ6IDkwJTsgKi9cXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB3aWR0aDogMTUwcHg7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgIC5tZW51LWFjdGl2ZSB7IC8qdHJpZ2dlcnMgd2hlbiBoYW1idXJnZXIgbWVudSBpcyBjbGlja2VkKi9cXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB0b2RvTW9kdWxlIGZyb20gXCIuL2NyZWF0ZVRvZG9zXCI7XG5cblxuXG5mdW5jdGlvbiBwcm9qZWN0TW9kdWxlICgpIHtcblxuICAgIC8vIEZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIHByb2plY3RzXG4gICAgZnVuY3Rpb24gcHJvamVjdEZhY3RvcnkgKHRpdGxlLGRlc2MsZHVlRGF0ZSxwcmlvcml0eSxyZW1pbmRJbixzdGF0dXMpe1xuXG5cbiAgICAgICAgcmV0dXJuIHt0aXRsZSxkZXNjLGR1ZURhdGUscHJpb3JpdHkscmVtaW5kSW4sc3RhdHVzfVxuICAgIH1cblxuXG4gICAgLy8gVGhpcyBpcyB3aGVyZSB1bnNvcnRlZCBwcm9qZWN0IGFycmF5cyBhcmUgc3RvcmVkXG4gICAgY29uc3QgcHJvamVjdEFycmF5ID0gW107XG5cblxuXG4gICAgZnVuY3Rpb24gZ2V0U3RvcmVkUHJvamVjdHMgKCl7XG5cbiAgICAgICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkUHJvamVjdHMnKTtcblxuICAgICAgICBpZighc3RvcmVkUHJvamVjdHMpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlU3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKHN0b3JlZFByb2plY3RzKTtcblxuICAgICAgICBwYXJzZVN0b3JlZFByb2plY3RzLmZvckVhY2gocHJvamVjdHMgPT4ge1xuICAgICAgICAgICAgcHJvamVjdEFycmF5LnB1c2gocHJvamVjdHMpXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy8gZ2V0IHN0b3JlZCBwcm9qZWN0cyBvbiBib290XG4gICAgZ2V0U3RvcmVkUHJvamVjdHMoKTtcblxuICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzdG9yZWRQcm9qZWN0cycpO1xuXG5cbiAgICBmdW5jdGlvbiBjbGVhblVwUHJvamVjdHMgKCl7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHByb2plY3RBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblxuXG4gICAgICAgICAgICBpZiAoKCFwcm9qZWN0QXJyYXlbaW5kZXhdLnRpdGxlKSAmJiBcbiAgICAgICAgICAgICAgICAoIXByb2plY3RBcnJheVtpbmRleF0uZGVzYykpIHtcblxuICAgICAgICAgICAgICAgIHByb2plY3RBcnJheS5zcGxpY2UoaW5kZXgsMSlcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2VVcGRhdGUoKTtcblxuICAgIH1cblxuICAgIC8vIGNsZWFuIHVwIGVtcHR5IHByb2plY3RzXG4gICAgY2xlYW5VcFByb2plY3RzKCk7XG4gICAgXG5cbiAgICBmdW5jdGlvbiBsb2NhbFN0b3JhZ2VVcGRhdGUoKXtcblxuICAgICAgICBjb25zb2xlLmxvZygnU0VUIExPQ0FMIFNUT1JBR0UnKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkUHJvamVjdHMnLEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpO1xuXG4gICAgfVxuXG5cblxuXG5cblxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCAodGl0bGUsZGVzYyxkdWVEYXRlLHByaW9yaXR5LHJlbWluZEluLHN0YXR1cyl7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeSh0aXRsZSxkZXNjLGR1ZURhdGUscHJpb3JpdHkscmVtaW5kSW4sc3RhdHVzKTsgLy9jaGFuZ2UgdGhpcyBsYXRlciBpZiB5b3UgbmVlZCB0b1xuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlVXBkYXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIC8vIDggaGlnaCBwcmlvcml0eVxuXG4gICAgLy8gY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgLy8gY29uc3QgZGF5ID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgLy8gY29uc3QgbW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuXG4gICAgLy8gY29uc3QgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAvLyBsZXQgcmVtaW5kID0gLTI7XG5cbiAgICAvLyBsZXQgcmVtaW5kMSA9IDA7XG5cbiAgICAvLyBmb3IgKGxldCBpbmRleCA9IDQ7IGluZGV4ID4gMDsgaW5kZXgtLSkge1xuXG4gICAgICAgIFxuXG4gICAgLy8gICAgIGNyZWF0ZVByb2plY3QoYHByb2plY3Qke2luZGV4fXRlc3RgLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyByZW1pbmR9LSR7bW9udGggKyByZW1pbmR9LSR7ZGF5ICsgcmVtaW5kfWAsYGhpZ2hgLHJlbWluZCwnY29tcGxldGUnKTtcblxuICAgIC8vICAgICBjcmVhdGVQcm9qZWN0KGBwcm9qZWN0JHtpbmRleH10ZXN0MmAsYGRlc2Mke2luZGV4fWAsYCR7eWVhciArIHJlbWluZH0tJHttb250aCArIHJlbWluZH0tJHtkYXkgKyByZW1pbmR9YCxgaGlnaGAscmVtaW5kK2luZGV4LCdwZW5kaW5nJyk7XG5cbiAgICAvLyAgICAgcmVtaW5kID0gcmVtaW5kICsgaW5kZXg7XG5cbiAgICAgICAgXG4gICAgLy8gfVxuXG5cbiAgICAvLyAvLyAxMCBsb3cgcHJpb3JpdHlcbiAgICAvLyBmb3IgKGxldCBpbmRleCA9IDY7IGluZGV4ID4gMDsgaW5kZXgtLSkge1xuXG4gICAgICAgIFxuXG4gICAgLy8gICAgIGNyZWF0ZVByb2plY3QoYHByb2plY3QgJHtpbmRleH1gLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyByZW1pbmQxfS0ke21vbnRoICsgcmVtaW5kMX0tJHtkYXkgKyByZW1pbmQxfWAsYGxvd2AscmVtaW5kMSwnY29tcGxldGUnKTtcbiAgICAvLyAgICAgY3JlYXRlUHJvamVjdChgcHJvamVjdCR7aW5kZXh9d3dgLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyByZW1pbmQxfS0ke21vbnRoICsgcmVtaW5kMX0tJHtkYXkgLSByZW1pbmQxfWAsYGxvd2AscmVtaW5kMSwncGVuZGluZycpO1xuICAgIC8vICAgICBjcmVhdGVQcm9qZWN0KGBwcm9qZWN0JHtpbmRleH11cGAsYGRlc2Mke2luZGV4fWAsYCR7eWVhciArIHJlbWluZDF9LSR7bW9udGggKyByZW1pbmQxfS0ke2RheSArIHJlbWluZDF9YCxgbG93YCxyZW1pbmQxLTEsJ3BlbmRpbmcnKTtcbiAgICAgICAgXG4gICAgLy8gICAgIHJlbWluZDEgPSByZW1pbmQxIC0gaW5kZXg7XG4gICAgLy8gfVxuXG5cblxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJvamVjdCAob2xkRGV0YWlscyxuZXdEZXRhaWxzKXtcblxuXG4gICAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xuXG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSBvbGREZXRhaWxzLnRpdGxlICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3QuZGVzYyA9PT0gb2xkRGV0YWlscy5kZXNjICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3QuZHVlRGF0ZSA9PT0gb2xkRGV0YWlscy5kdWVEYXRlICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3QucmVtaW5kSW4gPT09IG9sZERldGFpbHMucmVtaW5kSW4gJiYgXG4gICAgICAgICAgICAgICAgcHJvamVjdC5wcmlvcml0eSA9PT0gb2xkRGV0YWlscy5wcmlvcml0eSAmJiBcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnN0YXR1cyA9PT0gb2xkRGV0YWlscy5zdGF0dXMpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ0hBTkdFIFdPUktTIScpXG5cblxuICAgICAgICAgICAgICAgIHByb2plY3QudGl0bGUgPSBuZXdEZXRhaWxzLm5ld1RpdGxlO1xuICAgICAgICAgICAgICAgIHByb2plY3QuZGVzYyA9IG5ld0RldGFpbHMubmV3RGVzYztcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmR1ZURhdGUgPSBuZXdEZXRhaWxzLm5ld0R1ZTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnJlbWluZEluID0gbmV3RGV0YWlscy5uZXdSZW1pbmRlcjtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnByaW9yaXR5ID0gbmV3RGV0YWlscy5uZXdQcmlvcml0eTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnN0YXR1cyA9IG5ld0RldGFpbHMubmV3U3RhdHVzO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0IChvbGREZXRhaWxzKXtcblxuICAgICAgICB0b2RvTW9kdWxlLmRlbGV0ZVRvZG9PZlByb2plY3Qob2xkRGV0YWlscyk7XG5cblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuXG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0QXJyYXlbaW5kZXhdLnRpdGxlID09PSBvbGREZXRhaWxzLnRpdGxlICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3RBcnJheVtpbmRleF0uZGVzYyA9PT0gb2xkRGV0YWlscy5kZXNjICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3RBcnJheVtpbmRleF0uZHVlRGF0ZSA9PT0gb2xkRGV0YWlscy5kdWVEYXRlICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3RBcnJheVtpbmRleF0ucmVtaW5kSW4gPT09IG9sZERldGFpbHMucmVtaW5kSW4gJiYgXG4gICAgICAgICAgICAgICAgcHJvamVjdEFycmF5W2luZGV4XS5wcmlvcml0eSA9PT0gb2xkRGV0YWlscy5wcmlvcml0eSAmJiBcbiAgICAgICAgICAgICAgICBwcm9qZWN0QXJyYXlbaW5kZXhdLnN0YXR1cyA9PT0gb2xkRGV0YWlscy5zdGF0dXMpIHtcblxuXG4gICAgICAgICAgICAgICAgcHJvamVjdEFycmF5LnNwbGljZShpbmRleCwxKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuXG4gICAgfVxuXG4gXG5cbiAgICByZXR1cm4ge3Byb2plY3RBcnJheSxjcmVhdGVQcm9qZWN0LHVwZGF0ZVByb2plY3QsZGVsZXRlUHJvamVjdH07XG5cbn1cblxuY29uc3QgaW5pdGlhbGl6ZWRQcm9qZWN0TW9kdWxlID0gcHJvamVjdE1vZHVsZSgpO1xuXG4gICBcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVkUHJvamVjdE1vZHVsZTsiLCJcblxuZnVuY3Rpb24gdG9kb01vZHVsZSAoKXtcblxuICAgIC8vIEZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIG5vdGVzXG5cbiAgICBmdW5jdGlvbiB0b2RvRmFjdG9yeSAodGl0bGUsZGVzYyxkdWVEYXRlLHJlbWluZEluLHByaW9yaXR5LHN0YXR1cyxwcm9qZWN0KXtcblxuICAgICAgICAvLyB0b2RvXG4gICAgICAgIGlmKGR1ZURhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIHt0aXRsZSxkZXNjLGR1ZURhdGUscmVtaW5kSW4scHJpb3JpdHksc3RhdHVzLHByb2plY3R9XG4gICAgICAgIH1cbiAgICAgICAgLy8gbm90ZVxuICAgICAgICBpZighZHVlRGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4ge3RpdGxlLGRlc2N9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIFRoaXMgaXMgd2hlcmUgdW5zb3J0ZWQgdG9kbyBhcnJheXMgYXJlIHN0b3JlZFxuICAgIGNvbnN0IHRvZG9BcnJheSA9IFtdO1xuXG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0U3RvcmVkVG9kb3MgKCl7XG5cbiAgICAgICAgY29uc3Qgc3RvcmVkVG9kb3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkVG9kb3MnKTtcblxuICAgICAgICBpZighc3RvcmVkVG9kb3Mpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlU3RvcmVkVG9kb3MgPSBKU09OLnBhcnNlKHN0b3JlZFRvZG9zKTtcblxuICAgICAgICBwYXJzZVN0b3JlZFRvZG9zLmZvckVhY2godG9kb3MgPT4ge1xuICAgICAgICAgICAgdG9kb0FycmF5LnB1c2godG9kb3MpXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy8gZ2V0IHN0b3JlZCB0b2RvcyBvbiBib290XG4gICAgZ2V0U3RvcmVkVG9kb3MoKTtcblxuXG5cblxuICAgIGZ1bmN0aW9uIGxvY2FsU3RvcmFnZVVwZGF0ZSgpe1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdTRVQgTE9DQUwgU1RPUkFHRScpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZWRUb2RvcycsSlNPTi5zdHJpbmdpZnkodG9kb0FycmF5KSk7XG5cbiAgICB9XG5cblxuICAgIC8vIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNyZWF0ZSBUb2Rvc1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvZG8gKHRpdGxlLGRlc2MsZHVlRGF0ZSxyZW1pbmRJbixwcmlvcml0eSxzdGF0dXMscHJvamVjdCl7XG4gICAgICAgIGNvbnN0IG5ld1RvRG8gPSB0b2RvRmFjdG9yeSh0aXRsZSxkZXNjLGR1ZURhdGUscmVtaW5kSW4scHJpb3JpdHksc3RhdHVzLHByb2plY3QpO1xuICAgICAgICB0b2RvQXJyYXkucHVzaChuZXdUb0RvKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlVXBkYXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIC8vIFRoaXMgbXVzdCBiZSBkZWxldGVkIGxhdGVyIGFzIGl0IGlzIGNyZWF0ZWQgcHJpbWFyaWx5IGZvciB0ZXN0aW5nXG5cbiAgICAvLyBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAvLyBjb25zdCBkYXkgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XG5cbiAgICAvLyBjb25zdCBtb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG5cbiAgICAvLyBjb25zdCB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcblxuXG4gICAgLy8gZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PSAxMDsgaW5kZXgrKykge1xuXG4gICAgLy8gICAgIGNyZWF0ZVRvZG8oYHRpdGxlJHtpbmRleH1gLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyBpbmRleH0tJHttb250aCArIGluZGV4fS0ke2RheSArIGluZGV4fWAsaW5kZXgsYGhpZ2hgLGBwZW5kaW5nYCwncHJvamVjdCAyJyk7XG5cbiAgICAvLyAgICAgY3JlYXRlVG9kbyhgdGl0bGUke2luZGV4fWAsYGRlc2Mke2luZGV4fWAsYCR7eWVhciArIGluZGV4fS0ke21vbnRoICsgaW5kZXh9LSR7ZGF5ICsgaW5kZXh9YCxpbmRleCxgbG93YCxgcGVuZGluZ2AsJ3Byb2plY3QgMicpO1xuXG4gICAgLy8gICAgIGNyZWF0ZVRvZG8oYHRpdGxlJHtpbmRleH1gLGBkZXNjJHtpbmRleH1gKTtcblxuXG4gICBcbiAgICAgICAgXG4gICAgLy8gfVxuXG4gICAgLy8gZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PSA1OyBpbmRleCsrKSB7XG5cbiAgICAvLyAgICAgY3JlYXRlVG9kbyhgdGl0bGUke2luZGV4fWAsYGRlc2Mke2luZGV4fWAsYCR7eWVhciArIGluZGV4fS0ke21vbnRoICsgaW5kZXh9LSR7ZGF5ICsgaW5kZXh9YCxpbmRleCxgaGlnaGAsYGNvbXBsZXRlYCwncHJvamVjdDF0ZXN0Jyk7XG5cbiAgICAvLyAgICAgY3JlYXRlVG9kbyhgdGl0bGUke2luZGV4fWAsYGRlc2Mke2luZGV4fWAsYCR7eWVhciArIGluZGV4fS0ke21vbnRoICsgaW5kZXh9LSR7ZGF5ICsgaW5kZXh9YCxpbmRleCxgbWVkaXVtYCxgcGVuZGluZ2AsJ3Byb2plY3QxdGVzdCcpO1xuXG4gICBcbiAgICAgICAgXG4gICAgLy8gfVxuXG4gICAgLy8gbG9jYWxTdG9yYWdlVXBkYXRlKCk7XG4gICAgLy8gbG9jYWxTdG9yYWdlVXBkYXRlKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ0dFVCBMT0NBTCBTVE9SQUdFJyk7XG4gICAgLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0FycmF5JykpKVxuICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzdG9yZWRUb2RvcycpO1xuICAgIFxuICAgIC8vIG9sZERldGFpbHNcbiAgICAvLyBuZXdEZXRhaWxzXG4gICAgLy8gbmV3VGl0bGUsbmV3RGVzYyxuZXdEdWVEYXRlLG5ld1JlbWluZEluLG5ld1ByaW9yaXR5LG5ld1N0YXR1cyxuZXdQcm9qZWN0XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUb2RvIChvbGREZXRhaWxzLG5ld0RldGFpbHMpe1xuXG4gICAgICAgIHRvZG9BcnJheS5mb3JFYWNoKHRvZG8gPT4ge1xuXG5cbiAgICAgICAgICAgIGlmICh0b2RvLnRpdGxlID09PSBvbGREZXRhaWxzLnRpdGxlICYmIFxuICAgICAgICAgICAgICAgIHRvZG8uZGVzYyA9PT0gb2xkRGV0YWlscy5kZXNjICYmIFxuICAgICAgICAgICAgICAgIHRvZG8uZHVlRGF0ZSA9PT0gb2xkRGV0YWlscy5kdWVEYXRlICYmIFxuICAgICAgICAgICAgICAgIHRvZG8ucmVtaW5kSW4gPT09IG9sZERldGFpbHMucmVtaW5kSW4gJiYgXG4gICAgICAgICAgICAgICAgdG9kby5wcmlvcml0eSA9PT0gb2xkRGV0YWlscy5wcmlvcml0eSAmJiBcbiAgICAgICAgICAgICAgICB0b2RvLnN0YXR1cyA9PT0gb2xkRGV0YWlscy5zdGF0dXMgJiYgXG4gICAgICAgICAgICAgICAgdG9kby5wcm9qZWN0ID09PSBvbGREZXRhaWxzLnByb2plY3QpIHtcblxuXG4gICAgICAgICAgICAgICAgdG9kby50aXRsZSA9IG5ld0RldGFpbHMubmV3VGl0bGU7XG4gICAgICAgICAgICAgICAgdG9kby5kZXNjID0gbmV3RGV0YWlscy5uZXdEZXNjO1xuICAgICAgICAgICAgICAgIHRvZG8uZHVlRGF0ZSA9IG5ld0RldGFpbHMubmV3RHVlO1xuICAgICAgICAgICAgICAgIHRvZG8ucmVtaW5kSW4gPSBuZXdEZXRhaWxzLm5ld1JlbWluZGVyO1xuICAgICAgICAgICAgICAgIHRvZG8ucHJpb3JpdHkgPSBuZXdEZXRhaWxzLm5ld1ByaW9yaXR5O1xuICAgICAgICAgICAgICAgIHRvZG8uc3RhdHVzID0gbmV3RGV0YWlscy5uZXdTdGF0dXM7XG4gICAgICAgICAgICAgICAgdG9kby5wcm9qZWN0ID0gbmV3RGV0YWlscy5uZXdQcm9qZWN0O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuXG4gICAgfVxuXG5cblxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVG9kbyAob2xkRGV0YWlscyl7XG5cblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdG9kb0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuXG5cbiAgICAgICAgICAgIGlmICh0b2RvQXJyYXlbaW5kZXhdLnRpdGxlID09PSBvbGREZXRhaWxzLnRpdGxlICYmIFxuICAgICAgICAgICAgICAgIHRvZG9BcnJheVtpbmRleF0uZGVzYyA9PT0gb2xkRGV0YWlscy5kZXNjICYmIFxuICAgICAgICAgICAgICAgIHRvZG9BcnJheVtpbmRleF0uZHVlRGF0ZSA9PT0gb2xkRGV0YWlscy5kdWVEYXRlICYmIFxuICAgICAgICAgICAgICAgIHRvZG9BcnJheVtpbmRleF0ucmVtaW5kSW4gPT09IG9sZERldGFpbHMucmVtaW5kSW4gJiYgXG4gICAgICAgICAgICAgICAgdG9kb0FycmF5W2luZGV4XS5wcmlvcml0eSA9PT0gb2xkRGV0YWlscy5wcmlvcml0eSAmJiBcbiAgICAgICAgICAgICAgICB0b2RvQXJyYXlbaW5kZXhdLnN0YXR1cyA9PT0gb2xkRGV0YWlscy5zdGF0dXMgJiYgXG4gICAgICAgICAgICAgICAgdG9kb0FycmF5W2luZGV4XS5wcm9qZWN0ID09PSBvbGREZXRhaWxzLnByb2plY3QpIHtcblxuXG4gICAgICAgICAgICAgICAgdG9kb0FycmF5LnNwbGljZShpbmRleCwxKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuXG4gICAgfVxuXG5cblxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVG9kb09mUHJvamVjdCAocHJvamVjdCl7XG5cblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdG9kb0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuXG5cbiAgICAgICAgICAgIGlmICh0b2RvQXJyYXlbaW5kZXhdLnByb2plY3QgPT09IHByb2plY3QudGl0bGUpIHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUT0RPIERFTEVURUQnKVxuXG4gICAgICAgICAgICAgICAgdG9kb0FycmF5LnNwbGljZShpbmRleCwxKVxuXG4gICAgICAgICAgICAgICAgLS1pbmRleDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2VVcGRhdGUoKTtcblxuICAgIH1cblxuICAgIFxuXG4gICAgLy8gRW5kIG9mIHRlc3Qgb2JqZWN0c1xuXG4gICAgcmV0dXJuIHt0b2RvQXJyYXksIGNyZWF0ZVRvZG8sIHVwZGF0ZVRvZG8sIGRlbGV0ZVRvZG8sIGRlbGV0ZVRvZG9PZlByb2plY3R9O1xuXG5cbn1cblxuXG5jb25zdCBpbml0aWFsaXplZFRvZG9Nb2R1bGUgPSB0b2RvTW9kdWxlKCk7XG5cblxuLy8gaW5pdGlhbGl6ZWQgdmVyc2lvbiBpcyBzZW50IGJlY2F1c2UgdGhlIGlzIG5vIHJlYXNvbiB0byByZS1pbml0aWFsaXNlIGxhdGVyIG9uXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplZFRvZG9Nb2R1bGU7XG4iLCIvLyBBbGwgRE9NIEFjdGl2aXRpZXMgYXJlIGNlbnRyYWxpc2VkIGhlcmUgZXhjZXB0IERPTSBDcmVhdGlvblxuXG5pbXBvcnQgdG9kb01vZHVsZSBmcm9tIFwiLi4vY3JlYXRlVG9kb3NcIjtcblxuaW1wb3J0IHByb2plY3RNb2R1bGUgZnJvbSBcIi4uL2NyZWF0ZVByb2plY3RzXCI7XG5cbmltcG9ydCBub3Rlc09iamVjdCBmcm9tIFwiLi4vdGFiT2JqZWN0cy9hbGxOb3Rlc1RhYlwiO1xuXG5cbmltcG9ydCB0b2RvT2JqZWN0IGZyb20gXCIuLi90YWJPYmplY3RzL2FsbFRvZG9zVGFiXCI7XG5cbmltcG9ydCBwcm9qZWN0T2JqZWN0IGZyb20gXCIuLi90YWJPYmplY3RzL2FsbFByb2plY3RzVGFiXCI7XG5cbmltcG9ydCBmb3JtRG9tTW9kdWxlIGZyb20gXCIuLi9kb21DcmVhdGlvbi9mb3JtRE9NQ3JlYXRpb25cIjtcblxuaW1wb3J0IGNyZWF0ZVRvZG9ET00gZnJvbSBcIi4uL2RvbUNyZWF0aW9uL2FsbFRvZG9ET01DcmVhdGlvblwiO1xuXG5pbXBvcnQgY3JlYXRlUHJvamVjdERPTSBmcm9tIFwiLi4vZG9tQ3JlYXRpb24vcHJvamVjdHNET01DcmVhdGlvblwiO1xuXG5pbXBvcnQgY3JlYXRlTm90ZXNET00gZnJvbSBcIi4uL2RvbUNyZWF0aW9uL2FsbE5vdGVzRE9NQ3JlYXRpb25cIjtcblxuaW1wb3J0IHBvcHVsYXRlVG9kb0NvbGxlY3Rpb24gZnJvbSBcIi4uL2RvbUNyZWF0aW9uL3BvcHVsYXRlRE9NVG9kb0NvbGxlY3Rpb25cIjtcblxuaW1wb3J0IGFwcGVuZFByb2plY3RPYmplY3RzIGZyb20gXCIuLi9kb21DcmVhdGlvbi9wb3B1bGF0ZURPTVByb2plY3RDb2xsZWN0aW9uXCI7XG5cbmltcG9ydCBhcHBlbmROb3Rlc09iamVjdCBmcm9tIFwiLi4vZG9tQ3JlYXRpb24vcG9wdWxhdGVET01Ob3RlQ29sbGVjdGlvblwiO1xuXG4vLyBCZWNhdXNlIGRpc3BsYXlpbmcgdG9kb0NvbGxlY3Rpb24gaW4gaGlnaCBwcmlvcml0eSBpcyB0aGUgZGVmYXVsdFxuLy8gbGV0IHJlY2VudENvbGxlY3Rpb25Db250YWluZXJGbiA9IHBvcHVsYXRlVG9kb0NvbGxlY3Rpb247XG5cbi8vIGxldCByZWNlbnRDb2xsZWN0aW9uQ29udGFpbmVyQXJnID0gJ2hpZ2gnO1xuXG5cblxubGV0IG1lbnVJbkRpc3BsYXkgPSAndG9kb3MnXG5cbmxldCBwcmlvcml0eUluRGlzcGxheSA9ICdoaWdoJ1xuXG5cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkgKCl7XG5cbiAgICBpZihtZW51SW5EaXNwbGF5ID09PSAndG9kb3MnKXtcbiAgICAgICAgY29uc29sZS5sb2coJ1RPRE9TIERJU1BMQVkgVVBEQVRFRCcpO1xuXG4gICAgICAgIHBvcHVsYXRlVG9kb0NvbGxlY3Rpb24ocHJpb3JpdHlJbkRpc3BsYXkpO1xuXG4gICAgfVxuXG4gICAgaWYobWVudUluRGlzcGxheSA9PT0gJ3Byb2plY3RzJyl7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ1RPRE9TIFBST0pFQ1RTIFVQREFURUQnKTtcblxuICAgICAgICBhcHBlbmRQcm9qZWN0T2JqZWN0cyhwcmlvcml0eUluRGlzcGxheSk7XG5cbiAgICB9XG5cbiAgICBpZiAobWVudUluRGlzcGxheSA9PT0gJ25vdGVzJykge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdUT0RPUyBOT1RFUyBVUERBVEVEJyk7XG4gICAgICAgIFxuICAgICAgICBhcHBlbmROb3Rlc09iamVjdCgpO1xuXG4gICAgfVxufVxuXG5cblxuXG5mdW5jdGlvbiBkb21BY3Rpdml0aWVzTW9kdWxlICgpe1xuXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgXG5cbiAgICAgICAgaWYobWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51LWFjdGl2ZVwiKSl7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgfSlcblxuXG4gICAgLy8gaGFtYnVyZ2VyIGJ1dHRvblxuICAgIGNvbnN0IGhhbWJ1cmdlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXItbWVudScpO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlLW1lbnUnKTtcblxuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pXG5cblxuICAgIGhhbWJ1cmdlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZighbWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51LWFjdGl2ZVwiKSl7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51LWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYobWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51LWFjdGl2ZVwiKSl7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgfSlcblxuXG4gICAgLy8gRk9STSBBQ1RJVklUSUVTXG5cbiAgICAvLyBGT1JNIElOUFVUIEFDVElWSVRJRVMgQkVHSU4gSEVSRVxuXG5cbiAgICAvLyBmb3JtIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGVudHJ5Q3JlYXRpb25Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY3JlYXRpb24tZm9ybScpO1xuXG4gICAgLy8gdG9kbyBvciBub3RlIGJ1dHRvblxuXG4gICAgbGV0IGlzTm90ZSA9IHRydWU7XG5cbiAgICBjb25zdCBzZWxlY3RUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lzLXRvZG8nKTtcblxuICAgIGNvbnN0IHNlbGVjdE5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXMtbm90ZScpO1xuXG4gICAgY29uc3QgdG9kb0NyZWF0aW9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1uZXctdG9kbycpO1xuXG5cblxuXG4gICAgLy8gc2FtZSB2YXJpYWJsZSwgbmVlZCB0byByZWZhY3RvclxuICAgIGNvbnN0IHNlbGVjdEV4aXN0aW5nUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleGlzdGluZy1wcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBzZWxlY3ROZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBleGlzdGluZ1Byb2plY3RSYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleGlzdGluZy1wcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0UmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKTtcblxuXG5cblxuICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtZXhpc3RpbmctcHJvamVjdCcpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtbmV3LXByb2plY3QnKTtcblxuXG5cblxuICAgIC8vIFRvLWRvIGlucHV0c1xuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXRpdGxlJyk7XG5cbiAgICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRlc2MnKTtcblxuICAgIGNvbnN0IGVudHJ5VHlwZSA9IGlzTm90ZTtcblxuICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGF0ZScpO1xuXG4gICAgY29uc3QgdG9kb1JlbWluZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tcmVtaW5kLWluJyk7XG5cbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1wcmlvcml0eScpO1xuXG4gICAgXG5cblxuICAgIGNvbnN0IHRvZG9JbnB1dHMgPSBbdG9kb0RhdGUsdG9kb1JlbWluZGVyXTtcblxuXG5cbiAgICBjb25zdCBwcm9qZWN0c0Nob2ljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1jaG9pY2VzJyk7XG5cbiAgICAvLyBuZXcgcHJvamVjdCBpbnB1dHNcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0RGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRlc2MnKTtcblxuICAgIGNvbnN0IHByb2plY3REYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGF0ZScpO1xuXG4gICAgY29uc3QgcHJvamVjdFJlbWluZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtcmVtaW5kLWluJyk7XG5cblxuICAgIC8vIGlzIGEgYnV0dG9uXG4gICAgY29uc3QgcHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtcHJpb3JpdHknKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RJbnB1dHMgPSBbcHJvamVjdFRpdGxlLHByb2plY3REZXNjLHByb2plY3REYXRlLHByb2plY3RSZW1pbmRlcl07XG5cblxuICAgIHNlbGVjdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICB0b2RvQ3JlYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1mb3JtLWl0ZW1zJyk7XG5cbiAgICAgICAgdG9kb0lucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdEV4aXN0aW5nUHJvamVjdC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgc2VsZWN0TmV3UHJvamVjdC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2VsZWN0RXhpc3RpbmdQcm9qZWN0LmNoZWNrZWQgJiYgIXNlbGVjdE5ld1Byb2plY3QuY2hlY2tlZCkgIHtcbiAgICAgICAgICAgIHNlbGVjdEV4aXN0aW5nUHJvamVjdC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHNlbGVjdEV4aXN0aW5nUHJvamVjdC5jaGVja2VkKSB7XG4gICAgICAgICAgICBjaGVja2VkRXhpc3RpbmdQcm9qZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0TmV3UHJvamVjdC5jaGVja2VkKSB7XG4gICAgICAgICAgICBjaGVja2VkTmV3UHJvamVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlzTm90ZSA9IGZhbHNlO1xuXG4gICAgfSlcblxuICAgIHNlbGVjdE5vdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICB0b2RvQ3JlYXRpb25EaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1mb3JtLWl0ZW1zJyk7XG4gICAgICAgIGV4aXN0aW5nUHJvamVjdERpdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LWZvcm0taXRlbXMnKTtcbiAgICAgICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LWZvcm0taXRlbXMnKTtcblxuICAgICAgICBzZWxlY3ROZXdQcm9qZWN0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgc2VsZWN0RXhpc3RpbmdQcm9qZWN0LmNoZWNrZWQgPSBmYWxzZTtcblxuICAgICAgICB0b2RvSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvamVjdHNDaG9pY2VzLnJlbW92ZUF0dHJpYnV0ZSgncmVxdWlyZWQnKTtcblxuICAgICAgICBuZXdQcm9qZWN0SW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXNOb3RlPSB0cnVlO1xuICAgIH0pXG5cbiAgICAvLyBleGlzdGluZyBwcm9qZWN0IG9yIG5ldyBwcm9qZWN0XG5cbiAgICBsZXQgaXNOZXdQcm9qZWN0ID0gZmFsc2U7XG5cblxuXG4gICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGlzTmV3UHJvamVjdDtcblxuICAgIC8vIGV4aXN0aW5nIHByb2plY3QgaW5wdXRcblxuXG5cbiAgICBzZWxlY3RFeGlzdGluZ1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgIGNoZWNrZWRFeGlzdGluZ1Byb2plY3QoKTtcbiAgICAgICAgXG4gICAgfSk7XG5cblxuXG4gICAgc2VsZWN0TmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgY2hlY2tlZE5ld1Byb2plY3QoKTtcblxuICAgIH0pXG5cblxuICAgIGZ1bmN0aW9uIGNoZWNrZWRFeGlzdGluZ1Byb2plY3QgKCl7XG4gICAgICAgIGV4aXN0aW5nUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LWZvcm0taXRlbXMnKTtcbiAgICAgICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LWZvcm0taXRlbXMnKTtcblxuICAgICAgICBpc05ld1Byb2plY3QgPSBmYWxzZTtcblxuICAgICAgICBwcm9qZWN0c0Nob2ljZXMuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgIG5ld1Byb2plY3RJbnB1dHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrZWROZXdQcm9qZWN0ICgpe1xuICAgICAgICBcbiAgICAgICAgZXhpc3RpbmdQcm9qZWN0RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuICAgICAgICBuZXdQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuXG4gICAgICAgIGlzTmV3UHJvamVjdCA9IHRydWU7XG5cbiAgICAgICAgcHJvamVjdHNDaG9pY2VzLnJlbW92ZUF0dHJpYnV0ZSgncmVxdWlyZWQnKTtcblxuICAgICAgICBuZXdQcm9qZWN0SW5wdXRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cblxuICAgIC8vIHJlY2VpdmUgYWxsIGZvcm0gaW5wdXQgZGF0YVxuXG5cbiAgICBjb25zdCBmb3JtU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tc3VibWl0Jyk7XG5cblxuICAgIFxuXG5cbiAgICAvLyBjb25zdCB0ZXN0QXJyYXkgPSBbdG9kb1RpdGxlLHRvZG9EZXNjLGVudHJ5VHlwZSx0b2RvRGF0ZSx0b2RvUmVtaW5kZXIsdG9kb1ByaW9yaXR5LHByb2plY3RPcHRpb24scHJvamVjdHNDaG9pY2VzLHByb2plY3RUaXRsZSxwcm9qZWN0RGVzYyxwcm9qZWN0RGF0ZSxwcm9qZWN0UmVtaW5kZXIscHJvamVjdFByaW9yaXR5XTtcblxuXG4gICAgY29uc3QgYWxsRm9ybUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWlucHV0Jyk7XG4gICAgXG5cbiAgICBcblxuICAgIGZvcm1TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcblxuICAgICAgIFxuXG4gICAgICAgIC8vIGNsZWFyIGNvbG9yIG9uIHByaW9yaXR5IGJ1dHRvblxuICAgICAgICBcblxuICAgICAgICBjb25zdCByZXF1aXJlZElucHV0ID0gW107XG5cbiAgICAgICAgbGV0IHJlcXVpcmVkSW5wdXRGaWxsZWQgPSB0cnVlO1xuXG5cbiAgICAgICAgYWxsRm9ybUlucHV0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdyZXF1aXJlZCcpKSB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRJbnB1dC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2YgcmVxdWlyZWRJbnB1dCkge1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmKCFlYWNoLnZhbHVlKXtcbiAgICAgICAgICAgICAgICByZXF1aXJlZElucHV0RmlsbGVkID0gZmFsc2U7ICAgXG5cbiAgICAgICAgICAgICAgICBicmVhazsgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYocmVxdWlyZWRJbnB1dEZpbGxlZCl7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBoaWRlRm9ybSgpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgdG9kbyB3aXRoIGZvcm1cblxuXG4gICAgICAgICAgICBjb25zdCByZXNldEFycmF5ID0gW3Byb2plY3RUaXRsZSxwcm9qZWN0RGVzYyxwcm9qZWN0RGF0ZSxwcm9qZWN0UmVtaW5kZXIsdG9kb1RpdGxlLHRvZG9EZXNjLHRvZG9EYXRlLHRvZG9SZW1pbmRlcl07XG5cblxuICAgICAgICAgICAgaWYobmV3UHJvamVjdFJhZGlvLmNoZWNrZWQpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3aHkgYXJlIHlvdSBydW5uaW5nPycpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcHJvamVjdE1vZHVsZS5jcmVhdGVQcm9qZWN0KHByb2plY3RUaXRsZS52YWx1ZSxwcm9qZWN0RGVzYy52YWx1ZSxwcm9qZWN0RGF0ZS52YWx1ZSxwcm9qZWN0UHJpb3JpdHkudmFsdWUscHJvamVjdFJlbWluZGVyLnZhbHVlLGBwZW5kaW5nYCk7XG5cblxuICAgICAgICAgICAgICAgIHRvZG9Nb2R1bGUuY3JlYXRlVG9kbyh0b2RvVGl0bGUudmFsdWUsdG9kb0Rlc2MudmFsdWUsdG9kb0RhdGUudmFsdWUsTnVtYmVyKHRvZG9SZW1pbmRlci52YWx1ZSksdG9kb1ByaW9yaXR5LnZhbHVlLGBwZW5kaW5nYCxwcm9qZWN0VGl0bGUudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgdG9kb09iamVjdCgpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdE9iamVjdCgpO1xuXG4gICAgICAgICAgICAgICAgbm90ZXNPYmplY3QoKTtcblxuICAgICAgICAgICAgICAgIHJlc2V0QXJyYXkuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvL2V2ZXJ5dGltZSBzdWJtaXQgYnV0dG9uIGlzIGNsaWNrZWQgZnJlc2ggZHJvcGRvd24gaXMgY3JlYXRlZCBcbiAgICAgICAgICAgICAgICBmb3JtRG9tTW9kdWxlLmV4aXN0aW5nUHJvamVjdE9wdGlvbnMoKTtcblxuICAgICAgICAgICAgICAgIGNyZWF0ZVByb2plY3RET00oKVxuXG4gICAgICAgICAgICAgICAgYXBwZW5kUHJvamVjdE9iamVjdHMocHJvamVjdFByaW9yaXR5LnZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVkaXVtLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG93UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93LXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYnV0dG9ucycpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBwcmlvcml0eUJ1dHRvbnMucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2hvc2VuLXByaW9yaXR5JylcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0UHJpb3JpdHkudmFsdWUgPT09ICdoaWdoJykge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1wcmlvcml0eScpXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5LnZhbHVlID09PSAnbWVkaXVtJykge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hvc2VuLXByaW9yaXR5JylcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0UHJpb3JpdHkudmFsdWUgPT09ICdsb3cnKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsb3dQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKVxuXG4gICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjcmVhdGUgdG8tZG9zIGFuZCBub3Rlc1xuXG4gICAgICAgICAgICB0b2RvTW9kdWxlLmNyZWF0ZVRvZG8odG9kb1RpdGxlLnZhbHVlLHRvZG9EZXNjLnZhbHVlLHRvZG9EYXRlLnZhbHVlLE51bWJlcih0b2RvUmVtaW5kZXIudmFsdWUpLHRvZG9Qcmlvcml0eS52YWx1ZSxgcGVuZGluZ2AscHJvamVjdHNDaG9pY2VzLnZhbHVlKTtcblxuICAgICAgICAgICAgLy8gdG9kb09iamVjdCgpO1xuXG4gICAgICAgICAgICAvLyBwcm9qZWN0T2JqZWN0KCk7XG5cbiAgICAgICAgICAgIC8vIG5vdGVzT2JqZWN0KCk7XG5cbiAgICAgICAgICAgIHJlc2V0QXJyYXkuZm9yRWFjaChpbnB1dCA9PiB7XG5cbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vZXZlcnl0aW1lIHN1Ym1pdCBidXR0b24gaXMgY2xpY2tlZCBmcmVzaCBkcm9wZG93biBpcyBjcmVhdGVkIFxuICAgICAgICAgICAgZm9ybURvbU1vZHVsZS5leGlzdGluZ1Byb2plY3RPcHRpb25zKCk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RUb2RvLmNoZWNrZWQpIHtcblxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgY3JlYXRlVG9kb0RPTSgpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVG9kb0NvbGxlY3Rpb24odG9kb1ByaW9yaXR5LnZhbHVlKTtcblxuXG4gICAgICAgICAgICAgICAgLy8gdHVybiB0aGlzIHRvIGEgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICBjb25zdCBoaWdoUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaC1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lZGl1bS1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvdy1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWJ1dHRvbnMnKTtcbiAgXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlCdXR0b25zLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nob3Nlbi1wcmlvcml0eScpXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGlmICh0b2RvUHJpb3JpdHkudmFsdWUgPT09ICdoaWdoJykge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1wcmlvcml0eScpXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodG9kb1ByaW9yaXR5LnZhbHVlID09PSAnbWVkaXVtJykge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hvc2VuLXByaW9yaXR5Jyk7XG5cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0b2RvUHJpb3JpdHkudmFsdWUgPT09ICdsb3cnKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsb3dQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcblxuXG4gICAgICAgICAgICBpZiAoc2VsZWN0Tm90ZS5jaGVja2VkKSB7XG5cbiAgICAgICAgICAgICAgICBjcmVhdGVOb3Rlc0RPTSgpO1xuICAgICAgICAgICAgICAgIGFwcGVuZE5vdGVzT2JqZWN0KClcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gRk9STSBJTlBVVCBBQ1RJVklUSUVTIEVORCBIRVJFXG4gICAgICAgIFxuXG5cbiAgICB9KTtcblxuXG5cbiAgICAvLyBGT1JNIEFQUEVBUkFOQ0UgQUNUSVZJVEVTIEJFR0lOIEhFUkVcblxuXG4gICAgZnVuY3Rpb24gaGlkZUZvcm0gKCl7XG5cblxuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctZm9ybScpXG5cbiAgICAgICAgXG5cbiAgICB9XG5cblxuICAgIC8vIHN0b3AgZXZlbnQgYnViYmxpbmcuXG4gICAgZW50cnlDcmVhdGlvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB9KVxuXG5cbiAgICBmb3JtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgaGlkZUZvcm0oKTtcbiAgICAgICAgICAgIFxuICAgIH0pXG5cbiAgICBjb25zdCBmb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tYnV0dG9uJyk7XG5cbiAgICBmb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hvdy1mb3JtJyk7XG5cbiAgICAgICAgZm9ybURvbU1vZHVsZS5leGlzdGluZ1Byb2plY3RPcHRpb25zKCk7XG5cbiAgICAgICAgaWYoc2VsZWN0Tm90ZS5jaGVja2VkKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3RUb2RvLmNoZWNrZWQgJiYgc2VsZWN0RXhpc3RpbmdQcm9qZWN0LmRpc2FibGVkKSB7XG4gICAgICAgICAgICBzZWxlY3ROZXdQcm9qZWN0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoc2VsZWN0TmV3UHJvamVjdC5jaGVja2VkKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdORVcgUFJPSkVDVCcpXG4gICAgICAgICAgICBjaGVja2VkTmV3UHJvamVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoc2VsZWN0RXhpc3RpbmdQcm9qZWN0LmNoZWNrZWQpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VYSVNUSU5HIFBST0pFQ1QnKVxuICAgICAgICAgICAgY2hlY2tlZEV4aXN0aW5nUHJvamVjdCgpO1xuICAgICAgICB9XG5cbiAgICB9KVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgIGNvbnN0IGFsbFRvZG9zVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC10b2Rvcy10YWInKTtcblxuICAgIGFsbFRvZG9zVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdUTyBETyBMSVNUJyk7XG5cbiAgICAgICAgbWVudUluRGlzcGxheSA9ICd0b2Rvcyc7XG5cbiAgICAgICAgY3JlYXRlVG9kb0RPTSgpO1xuXG4gICAgfSk7XG5cbiAgICBjb25zdCBhbGxQcm9qZWN0c1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcHJvamVjdHMtdGFiJylcblxuICAgIGFsbFByb2plY3RzVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdQUk9KRUNUUyBUQUInKTtcblxuICAgICAgICBtZW51SW5EaXNwbGF5ID0gJ3Byb2plY3RzJztcblxuICAgICAgICBjcmVhdGVQcm9qZWN0RE9NKClcblxuICAgIH0pXG5cblxuICAgIGNvbnN0IGFsbE5vdGVzVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1ub3Rlcy10YWInKTtcblxuICAgIGFsbE5vdGVzVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdOT1RFUyBMSVNUJyk7XG5cbiAgICAgICAgbWVudUluRGlzcGxheSA9ICdub3Rlcyc7XG5cbiAgICAgICAgY3JlYXRlTm90ZXNET00oKTtcblxuICAgIH0pXG5cblxuXG5cbiAgICBcblxufVxuXG5cbiAvLyBQUklPUklUWSBCVVRUT04gLSBUT0RPU1xuXG4gZnVuY3Rpb24gY2hhbmdlVG9kb1ByaW9yaXR5KCl7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2gtcHJpb3JpdHknKTtcbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWRpdW0tcHJpb3JpdHknKTtcbiAgICBjb25zdCBsb3dQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3ctcHJpb3JpdHknKTtcblxuICAgIGlmICghaGlnaFByaW9yaXR5QnV0dG9ufHwhbWVkaXVtUHJpb3JpdHlCdXR0b258fCFsb3dQcmlvcml0eUJ1dHRvbikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICBoaWdoUHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYnV0dG9ucycpO1xuICBcbiAgICAgICAgcHJpb3JpdHlCdXR0b25zLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaG9zZW4tcHJpb3JpdHknKVxuICAgICAgICB9KTtcblxuICAgICAgICBoaWdoUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hvc2VuLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgcG9wdWxhdGVUb2RvQ29sbGVjdGlvbignaGlnaCcpO1xuXG4gICAgICAgIHByaW9yaXR5SW5EaXNwbGF5ID0gJ2hpZ2gnO1xuICAgICAgICBjb25zb2xlLmxvZygnTE9PUElORycpXG5cbiAgICB9KTtcblxuICAgIFxuXG4gICAgbWVkaXVtUHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYnV0dG9ucycpO1xuICAgICAgICBcbiAgICAgICAgcHJpb3JpdHlCdXR0b25zLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaG9zZW4tcHJpb3JpdHknKVxuICAgICAgICB9KTtcblxuICAgICAgICBtZWRpdW1Qcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKTtcblxuICAgICAgICBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uKCdtZWRpdW0nKTtcblxuICAgICAgICBwcmlvcml0eUluRGlzcGxheSA9ICdtZWRpdW0nO1xuICAgICAgICBjb25zb2xlLmxvZygnTE9PUElORycpXG4gICAgfSk7XG5cblxuICAgXG4gICAgbG93UHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWJ1dHRvbnMnKTtcblxuICAgICAgICBwcmlvcml0eUJ1dHRvbnMucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2hvc2VuLXByaW9yaXR5JylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hvc2VuLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgcG9wdWxhdGVUb2RvQ29sbGVjdGlvbignbG93Jyk7XG5cbiAgICAgICAgcHJpb3JpdHlJbkRpc3BsYXkgPSAnbG93JztcbiAgICAgICAgY29uc29sZS5sb2coJ0xPT1BJTkcnKVxuICAgIH0pO1xuICAgfVxuXG5cblxuXG4gICBmdW5jdGlvbiBjaGFuZ2VQcm9qZWN0UHJpb3JpdHkoKXtcbiAgICBjb25zdCBoaWdoUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaC1wcmlvcml0eScpO1xuICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lZGl1bS1wcmlvcml0eScpO1xuICAgIGNvbnN0IGxvd1ByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvdy1wcmlvcml0eScpO1xuXG4gICAgaWYgKCFoaWdoUHJpb3JpdHlCdXR0b258fCFtZWRpdW1Qcmlvcml0eUJ1dHRvbnx8IWxvd1ByaW9yaXR5QnV0dG9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1idXR0b25zJyk7XG4gIFxuICAgICAgICBwcmlvcml0eUJ1dHRvbnMucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nob3Nlbi1wcmlvcml0eScpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKTtcblxuICAgICAgICBhcHBlbmRQcm9qZWN0T2JqZWN0cygnaGlnaCcpO1xuXG4gICAgICAgIHByaW9yaXR5SW5EaXNwbGF5ID0gJ2hpZ2gnO1xuICAgICAgICBjb25zb2xlLmxvZygnTE9PUElORycpXG5cbiAgICB9KTtcblxuICAgIFxuXG4gICAgbWVkaXVtUHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYnV0dG9ucycpO1xuICAgICAgICBcbiAgICAgICAgcHJpb3JpdHlCdXR0b25zLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaG9zZW4tcHJpb3JpdHknKVxuICAgICAgICB9KTtcblxuICAgICAgICBtZWRpdW1Qcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKTtcblxuICAgICAgICBhcHBlbmRQcm9qZWN0T2JqZWN0cygnbWVkaXVtJyk7XG5cbiAgICAgICAgcHJpb3JpdHlJbkRpc3BsYXkgPSAnbWVkaXVtJztcbiAgICAgICAgY29uc29sZS5sb2coJ0xPT1BJTkcnKVxuICAgIH0pO1xuXG5cbiAgIFxuICAgIGxvd1ByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1idXR0b25zJyk7XG5cbiAgICAgICAgcHJpb3JpdHlCdXR0b25zLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nob3Nlbi1wcmlvcml0eScpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvd1ByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1wcmlvcml0eScpO1xuXG4gICAgICAgIGFwcGVuZFByb2plY3RPYmplY3RzKCdsb3cnKTtcblxuICAgICAgICBwcmlvcml0eUluRGlzcGxheSA9ICdsb3cnO1xuICAgICAgICBjb25zb2xlLmxvZygnTE9PUElORycpXG4gICAgfSk7XG4gICB9XG5cblxuICAgZnVuY3Rpb24gdXBkYXRlVG9kb0l0ZW0gKG9iamVjdCl7XG5cbiAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGlzcGxheScpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9VcGRhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby11cGRhdGUnKTtcblxuICAgICAgICB0b2RvVXBkYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgIGNvbnN0IG5ld1RvZG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRpc3BsYXktdGl0bGUnKVxuICAgICAgICBjb25zdCBuZXdUb2RvRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRpc3BsYXktZGVzYycpO1xuICAgICAgICBjb25zdCBuZXdUb2RvRHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGlzcGxheS1kYXRlJyk7XG4gICAgICAgIGNvbnN0IG5ld1RvZG9SZW1pbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRpc3BsYXktcmVtaW5kLWluJyk7XG4gICAgICAgIGNvbnN0IG5ld1RvZG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRpc3BsYXktcHJpb3JpdHknKTtcbiAgICAgICAgY29uc3QgbmV3VG9kb1N0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRpc3BsYXktc3RhdHVzJyk7XG4gICAgICAgIGNvbnN0IG5ld1RvZG9Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGlzcGxheS1jaG9pY2VzJyk7XG4gICAgICAgIFxuICAgICAgICBcblxuICAgICAgICBsZXQgbmV3RGV0YWlscyA9IHtcbiAgICAgICAgICAgIG5ld1RpdGxlOiBuZXdUb2RvVGl0bGUudmFsdWUsXG4gICAgICAgICAgICBuZXdEZXNjOiBuZXdUb2RvRGVzYy52YWx1ZSxcbiAgICAgICAgICAgIG5ld0R1ZTogbmV3VG9kb0R1ZS52YWx1ZSxcbiAgICAgICAgICAgIG5ld1JlbWluZGVyOiBuZXdUb2RvUmVtaW5kZXIudmFsdWUsXG4gICAgICAgICAgICBuZXdQcmlvcml0eTogbmV3VG9kb1ByaW9yaXR5LnZhbHVlLFxuICAgICAgICAgICAgbmV3U3RhdHVzOiBuZXdUb2RvU3RhdHVzLnZhbHVlLFxuICAgICAgICAgICAgbmV3UHJvamVjdDogbmV3VG9kb1Byb2plY3QudmFsdWUsXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRvZG9Nb2R1bGUudXBkYXRlVG9kbyhvYmplY3QsbmV3RGV0YWlscyk7XG5cbiAgICAgICAgdXBkYXRlRGlzcGxheSgpO1xuXG4gICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgXG4gICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgdG9kb0Rpc3BsYXlDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdG9kb0Rpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSlcblxuXG5cbiAgICB9XG5cblxuXG5cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU5vdGVJdGVtIChvYmplY3Qpe1xuXG4gICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGlzcGxheS1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCB0b2RvRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRpc3BsYXknKTtcblxuICAgICAgICBjb25zdCB0b2RvVXBkYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgdG9kb1VwZGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBjb25zdCBuZXdUb2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LXRpdGxlJylcbiAgICAgICAgY29uc3QgbmV3VG9kb0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LWRlc2MnKTtcbiAgICAgICAgXG5cbiAgICAgICAgbGV0IG5ld0RldGFpbHMgPSB7XG4gICAgICAgICAgICBuZXdUaXRsZTogbmV3VG9kb1RpdGxlLnZhbHVlLFxuICAgICAgICAgICAgbmV3RGVzYzogbmV3VG9kb0Rlc2MudmFsdWUsXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRvZG9Nb2R1bGUudXBkYXRlVG9kbyhvYmplY3QsbmV3RGV0YWlscyk7XG5cbiAgICAgICAgdXBkYXRlRGlzcGxheSgpO1xuXG4gICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgXG4gICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgdG9kb0Rpc3BsYXlDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdG9kb0Rpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSlcblxuXG5cbiAgICB9XG5cblxuXG5cblxuXG5cblxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJvamVjdEl0ZW0gKHByb2plY3Qpe1xuXG5cbiAgICAgICAgY29uc3QgcHJvamVjdERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10b2RvLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZGV0YWlscycpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RVcGRhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC11cGRhdGUnKTtcblxuICAgICAgICBwcm9qZWN0VXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAvLyBwcm9qZWN0LXN0YXR1cy11cGRhdGVcblxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZS11cGRhdGUnKVxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0RGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRlc2MtdXBkYXRlJyk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3REdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1kYXRlLXVwZGF0ZScpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0UmVtaW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1yZW1pbmRlci11cGRhdGUnKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtcHJpb3JpdHktdXBkYXRlJyk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1zdGF0dXMtdXBkYXRlJyk7XG5cbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgICAgIGxldCBuZXdEZXRhaWxzID0ge1xuICAgICAgICAgICAgLy8gdXBkYXRlIHRoaXNcbiAgICAgICAgICAgIG5ld1RpdGxlOiBuZXdQcm9qZWN0VGl0bGUudmFsdWUsXG4gICAgICAgICAgICBuZXdEZXNjOiBuZXdQcm9qZWN0RGVzYy52YWx1ZSxcbiAgICAgICAgICAgIG5ld0R1ZTogbmV3UHJvamVjdER1ZS52YWx1ZSxcbiAgICAgICAgICAgIG5ld1JlbWluZGVyOiBuZXdQcm9qZWN0UmVtaW5kZXIudmFsdWUsXG4gICAgICAgICAgICBuZXdQcmlvcml0eTogbmV3UHJvamVjdFByaW9yaXR5LnZhbHVlLFxuICAgICAgICAgICAgbmV3U3RhdHVzOiBuZXdQcm9qZWN0U3RhdHVzLnZhbHVlLFxuICAgICAgICB9XG5cblxuICAgICAgICBwcm9qZWN0TW9kdWxlLnVwZGF0ZVByb2plY3QocHJvamVjdCxuZXdEZXRhaWxzKTtcblxuICAgICAgICB1cGRhdGVEaXNwbGF5KClcblxuICAgICAgICBwcm9qZWN0RGlzcGxheUNvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0RGlzcGxheUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHByb2plY3REaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHByb2plY3REaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pXG5cblxuXG4gICAgfVxuXG5cblxuXG5cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRvZG9JdGVtIChvYmplY3Qpe1xuXG4gICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGlzcGxheS1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCB0b2RvRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRpc3BsYXknKTtcblxuICAgICAgICBjb25zdCB0b2RvRGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGVsZXRlJyk7XG5cbiAgICAgICAgdG9kb0RlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBcbiAgICAgICAgdG9kb01vZHVsZS5kZWxldGVUb2RvKG9iamVjdCk7XG5cbiAgICAgICAgdXBkYXRlRGlzcGxheSgpXG5cbiAgICAgICAgdG9kb0Rpc3BsYXlDb250YWluZXIucmVtb3ZlKCk7XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRvZG9EaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pXG5cblxuXG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RJdGVtIChvYmplY3Qpe1xuXG5cbiAgICAgICAgY29uc3QgcHJvamVjdERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10b2RvLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZGV0YWlscycpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3REZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1kZWxldGUnKTtcblxuICAgICAgICBcblxuICAgICAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0TW9kdWxlLmRlbGV0ZVByb2plY3Qob2JqZWN0KTtcblxuICAgICAgICB1cGRhdGVEaXNwbGF5KCk7XG5cbiAgICAgICAgcHJvamVjdERpc3BsYXlDb250YWluZXIucmVtb3ZlKCk7XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBwcm9qZWN0RGlzcGxheUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHByb2plY3REaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHByb2plY3REaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pXG5cblxuXG4gICAgfVxuXG4gIFxuXG4gICBcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFjdGl2aXRpZXNNb2R1bGU7XG5cbmV4cG9ydCB7Y2hhbmdlVG9kb1ByaW9yaXR5LCBjaGFuZ2VQcm9qZWN0UHJpb3JpdHksIHVwZGF0ZVRvZG9JdGVtLCB1cGRhdGVQcm9qZWN0SXRlbSwgdXBkYXRlTm90ZUl0ZW0sIGRlbGV0ZVRvZG9JdGVtLCBkZWxldGVQcm9qZWN0SXRlbX07XG5cbiIsImltcG9ydCB0b2RvTW9kdWxlIGZyb20gXCIuLi9jcmVhdGVUb2Rvc1wiO1xuXG5pbXBvcnQgcHJvamVjdE1vZHVsZSBmcm9tIFwiLi4vY3JlYXRlUHJvamVjdHNcIjtcblxuZnVuY3Rpb24gc29ydGluZ01vZHVsZSAoKXtcblxuXG4gICAgIC8vIFNvIHRoYXQgaXQgZG9lcyBub3QgbWVzcyB3aXRoIHRoZSBvcmlnaW5hbCBhcnJheVxuXG4gICAgZnVuY3Rpb24gY2xvbmVPYmplY3QoKXtcblxuICAgICAgICBjb25zdCBwcm9qZWN0QXJyYXlSZWZlcmVuY2UgPSBwcm9qZWN0TW9kdWxlLnByb2plY3RBcnJheTtcblxuICAgICAgICBjb25zdCBjbG9uZVByb2plY3RBcnJheSA9IFtdO1xuXG5cbiAgICAgICAgY29uc3QgdG9kb0FycmF5UmVmZXJlbmNlID0gdG9kb01vZHVsZS50b2RvQXJyYXk7XG5cbiAgICAgICAgY29uc3QgY2xvbmVUb2RvQXJyYXkgPSBbXTtcbiAgICAgICAgXG5cbiAgICAgICAgdG9kb0FycmF5UmVmZXJlbmNlLmZvckVhY2godG9kb09iamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZWRUb0RvID0gT2JqZWN0LmFzc2lnbih7fSx0b2RvT2JqZWN0KTtcbiAgICAgICAgICAgIGNsb25lVG9kb0FycmF5LnB1c2goY2xvbmVkVG9Ebyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RBcnJheVJlZmVyZW5jZS5mb3JFYWNoKHByb2plY3RPYmplY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xvbmVkUHJvamVjdCA9IE9iamVjdC5hc3NpZ24oe30scHJvamVjdE9iamVjdCk7XG4gICAgICAgICAgICBjbG9uZVByb2plY3RBcnJheS5wdXNoKGNsb25lZFByb2plY3QpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIHJldHVybiB7Y2xvbmVQcm9qZWN0QXJyYXksY2xvbmVUb2RvQXJyYXl9XG5cblxuICAgIH1cblxuICAgIFxuXG4gICAgLy8gc29ydHMgdGhlIHRvIGRvcyBhY2NvcmRpbmcgdG8gdGhlIHByb2plY3QgbmFtZSBpcyBoYXMgYmVlbiBhc3NpZ25lZCB0b1xuICAgIC8vIFJlbmFtZSB0aGlzIHRvIHByb2plY3Qgc29ydGVyXG4gICAgZnVuY3Rpb24gc29ydEJ5UHJvamVjdE5hbWUoKXtcblxuXG4gICAgICAgIGNvbnN0IGNsb25lUHJvamVjdEFycmF5ID0gY2xvbmVPYmplY3QoKS5jbG9uZVByb2plY3RBcnJheVxuICAgICAgICBcbiAgICAgICAgY29uc3QgY2xvbmVUb2RvQXJyYXkgPSBjbG9uZU9iamVjdCgpLmNsb25lVG9kb0FycmF5XG5cbiAgICAgICAgbGV0IHByb2Nlc3NlZFByb2plY3RBcnJheUJ5TmFtZSA9IFtdO1xuXG4gICAgICAgIGNsb25lUHJvamVjdEFycmF5LmZvckVhY2gocHJvamVjdE9iamVjdCA9PiB7XG5cbiAgICAgICAgICAgIHByb2plY3RPYmplY3QudG9kb0NvbGxlY3Rpb24gPSBbXTtcblxuICAgICAgICAgICAgY2xvbmVUb2RvQXJyYXkuZm9yRWFjaCh0b2RvT2JqZWN0ID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0T2JqZWN0LnRpdGxlID09PSB0b2RvT2JqZWN0LnByb2plY3QpIHtcblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE9iamVjdC50b2RvQ29sbGVjdGlvbi5wdXNoKHRvZG9PYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwcm9jZXNzZWRQcm9qZWN0QXJyYXlCeU5hbWUucHVzaChwcm9qZWN0T2JqZWN0KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHJldHVybiB7cHJvY2Vzc2VkUHJvamVjdEFycmF5QnlOYW1lfTtcblxuICAgIH1cblxuXG5cblxuXG5cblxuXG4gICAgZnVuY3Rpb24gcHJpb3JpdHlTb3J0ZXIodW5wcm9jZXNzZWRBcnJheSl7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdGllcyA9IFsnaGlnaCcsJ21lZGl1bScsJ2xvdyddO1xuXG4gICAgICAgIGNvbnN0IG9iamVjdHNCeVByaW9yaXR5ID0ge2hpZ2g6W10sbWVkaXVtOltdLGxvdzpbXX07XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHByaW9yaXRpZXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cbiAgICAgICAgICAgIHVucHJvY2Vzc2VkQXJyYXkuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QucHJpb3JpdHkgPT09IHByaW9yaXRpZXNbaW5kZXhdKXtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0c0J5UHJpb3JpdHlbcHJpb3JpdGllc1tpbmRleF1dLnB1c2gob2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iamVjdHNCeVByaW9yaXR5O1xuXG5cbiAgICB9XG5cblxuXG5cbiAgICBmdW5jdGlvbiBzb3J0RHVlRGF0ZSAoQXJyYXkpe1xuXG4gICAgICAgIC8vIFVzZSB0aGlzIHRvIHNvcnQgcHJvamVjdHMgYW5kIHRvZG9zXG5cbiAgICAgICAgLy8gc29ydHMgYXJyYXkgaW4gYXNjZW5kaW5nIG9yZGVyIGFjY29yZGluZyB0byBkdWUgZGF0ZVxuICAgICAgICBhc2NlbmRpbmdTb3J0KEFycmF5KTtcblxuICAgICAgICBjb25zdCBkdWVTb3J0ZWRBcnJheSA9IHtcbiAgICAgICAgICAgIG5vdGVzOltdLFxuICAgICAgICAgICAgb3ZlcmR1ZTpbXSxcbiAgICAgICAgICAgIGR1ZTpbXSxcbiAgICAgICAgICAgIHVwY29taW5nOltdLFxuICAgICAgICAgICAgY29tcGxldGU6W11cbiAgICAgICAgfTtcblxuICAgICAgICBBcnJheS5mb3JFYWNoKG9iamVjdCA9PiB7XG5cblxuICAgICAgICAgICAgLy8gTm90ZXMgLSB0byBiZSBpc29sYXRlZCAgICAgICAgICAgXG4gICAgICAgICAgICBpZighb2JqZWN0LmR1ZURhdGUpe1xuXG4gICAgICAgICAgICAgICAgZHVlU29ydGVkQXJyYXkubm90ZXMucHVzaChvYmplY3QpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDb21wbGV0ZVxuICAgICAgICAgICAgaWYob2JqZWN0LnN0YXR1cyA9PT0gJ2NvbXBsZXRlJyl7XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBkdWVTb3J0ZWRBcnJheS5jb21wbGV0ZS5wdXNoKG9iamVjdCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE92ZXJkdWVcbiAgICAgICAgICAgIGlmKChvYmplY3QuZHVyYXRpb25MZWZ0LmRheUxlZnQpIDwgMCl7XG5cbiAgICAgICAgICAgICAgICBkdWVTb3J0ZWRBcnJheS5vdmVyZHVlLnB1c2gob2JqZWN0KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEdWVcbiAgICAgICAgICAgIGlmICgoKG9iamVjdC5kdXJhdGlvbkxlZnQuZGF5TGVmdCkgPD0gb2JqZWN0LnJlbWluZEluKSAmJiAoKG9iamVjdC5kdXJhdGlvbkxlZnQuZGF5TGVmdCkgPj0gMCkpe1xuXG4gICAgICAgICAgICAgICAgZHVlU29ydGVkQXJyYXkuZHVlLnB1c2gob2JqZWN0KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBjb21pbmdcbiAgICAgICAgICAgIGlmKChvYmplY3QuZHVyYXRpb25MZWZ0LmRheUxlZnQpID4gb2JqZWN0LnJlbWluZEluKXtcblxuICAgICAgICAgICAgICAgIGR1ZVNvcnRlZEFycmF5LnVwY29taW5nLnB1c2gob2JqZWN0KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coZHVlU29ydGVkQXJyYXkpO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIGR1ZVNvcnRlZEFycmF5OyAgICBcbiAgICAgXG5cbiAgICB9XG5cblxuXG4gICAgLy8gU29ydHMgb2JqZWN0cyBpbiBBcnJheSB0byBhc2NlbmRpbmcgb3JkZXIgYWNjb3JkaW5nIHRvIGR1ZSBkYXRlXG4gICAgZnVuY3Rpb24gYXNjZW5kaW5nU29ydCAoQXJyYXkpe1xuXG4gICAgICAgIC8vIEFzc2lnbiBkdXJhdGlvbiBsZWZ0XG4gICAgICAgIEFycmF5LmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdE9iamVjdER1ZURhdGUgPSBpbnRlcnZhbChvYmplY3QuZHVlRGF0ZSk7XG4gICAgICAgICAgICBvYmplY3QuZHVyYXRpb25MZWZ0ID0gZm9ybWF0T2JqZWN0RHVlRGF0ZTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBjb25zdCBkYXRlQXJyYXkgPSBbXTtcbiAgICAgICAgY29uc3Qgc29ydGVkQXJyYXkgPSBbXTtcblxuXG4gICAgICAgIEFycmF5LmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgIC8vIG9iamVjdC5kdXJhdGlvbkxlZnQuZGF5TGVmdFxuICAgICAgICAgICAgZGF0ZUFycmF5LnB1c2gob2JqZWN0LmR1cmF0aW9uTGVmdC5kYXlMZWZ0KVxuICAgICAgICB9KTtcblxuICAgICAgICBkYXRlQXJyYXkuc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBhLWJ9KTtcblxuICAgICAgICBkYXRlQXJyYXkuZm9yRWFjaChkYXRlID0+IHtcblxuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGRhdGUgPT09IEFycmF5W2luZGV4XS5kdXJhdGlvbkxlZnQuZGF5TGVmdCkge1xuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRBcnJheS5wdXNoKEFycmF5W2luZGV4XSk7XG5cbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuc3BsaWNlKGluZGV4LDEpXG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICBcblxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBQdXNoIHNvcnRlZCBhcnJheSB0byBvcmlnaW5hbCBhcnJheVxuICAgICAgICBzb3J0ZWRBcnJheS5mb3JFYWNoKHNvcnRlZE9iaiA9PiB7XG4gICAgICAgICAgICBBcnJheS5wdXNoKHNvcnRlZE9iailcbiAgICAgICAgfSk7XG4gICAgICAgIFxuXG5cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGludGVydmFsKGRhdGUpe1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50RGF5ID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRNb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuXG5cblxuICAgICAgICAvLyBjb25zdCBmb3JtYXR0ZWRDdXJyZW50RGF0ZSA9IFt5ZWFyLG1vbnRoLGRheV07XG5cblxuICAgICAgICAvLyBbeXl5eSxtbSxkZF1cbiAgICAgICAgY29uc3Qgc3BsaXRPYmpEYXRlID0gZGF0ZS5zcGxpdCgnLScpO1xuXG4gICAgICAgIGNvbnN0IHllYXJzTGVmdCA9IHNwbGl0T2JqRGF0ZVswXSAtIGN1cnJlbnRZZWFyO1xuXG4gICAgICAgIGNvbnN0IG1vbnRoc0xlZnQgPSBzcGxpdE9iakRhdGVbMV0gLSBjdXJyZW50TW9udGg7XG5cbiAgICAgICAgY29uc3QgZGF5TGVmdCA9IHNwbGl0T2JqRGF0ZVsyXSAtIGN1cnJlbnREYXk7XG5cblxuICAgICAgICBjb25zdCBpbnRlcnZhbE9iaiA9IHtkYXlMZWZ0LG1vbnRoc0xlZnQseWVhcnNMZWZ0fTtcblxuXG5cbiAgICBcbiAgICAgICAgcmV0dXJuIGludGVydmFsT2JqXG4gICAgfVxuXG5cblxuICAgICAgICBcblxuICAgIGZ1bmN0aW9uIG5vdGVTb3J0ZXIodW5wcm9jZXNzZWRBcnJheSl7XG5cbiAgICAgICAgY29uc3Qgbm90ZU9iamVjdHMgPSBbXVxuXG4gICAgICAgIHVucHJvY2Vzc2VkQXJyYXkuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZighb2JqLmR1ZURhdGUpe1xuXG4gICAgICAgICAgICAgICAgbm90ZU9iamVjdHMucHVzaChvYmopXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbm90ZU9iamVjdHM7XG5cblxuICAgIH1cblxuXG5cbiAgIFxuXG4gICAgcmV0dXJuIHtjbG9uZU9iamVjdCxzb3J0QnlQcm9qZWN0TmFtZSxwcmlvcml0eVNvcnRlcixzb3J0RHVlRGF0ZSxub3RlU29ydGVyfVxuXG59XG5cbmNvbnN0IGluaXRpYWxpemVkU29ydFRvRG9Nb2R1bGUgPSBzb3J0aW5nTW9kdWxlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVkU29ydFRvRG9Nb2R1bGU7IiwiLy8gaW1wb3J0IHBvcHVsYXRlVG9kb0NvbGxlY3Rpb24gZnJvbSBcIi4vcG9wdWxhdGVET01Ub2RvQ29sbGVjdGlvblwiXG5cbmltcG9ydCBhcHBlbmROb3Rlc09iamVjdCBmcm9tIFwiLi9wb3B1bGF0ZURPTU5vdGVDb2xsZWN0aW9uXCI7XG5cbmZ1bmN0aW9uIGFsbE5vdGVET01Nb2R1bGUgKCl7XG5cbiAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktY29udGFpbmVyJyk7XG5cblxuXG5cbiAgICAvLyBtb3ZlIHRvIGRvbUFjdGl2aXR5XG4gICAgZnVuY3Rpb24gcmVtb3ZlRXhpc3RpbmdEaXNwbGF5RE9NICgpe1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1jb250YWluZXInKTtcblxuICAgICAgICBkaXNwbGF5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcblxuICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcmVtb3ZlRXhpc3RpbmdEaXNwbGF5RE9NKCk7XG5cblxuICAgIFxuXG5cbiAgICBcblxuXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0b2RvQ29udGFpbmVyVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItdGl0bGUnKTtcblxuICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kKHRvZG9Db250YWluZXJUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgdGFiVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0YWJUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YWItdGl0bGUnKTtcblxuICAgICAgICB0b2RvQ29udGFpbmVyVGl0bGUuYXBwZW5kKHRhYlRpdGxlKTtcblxuICAgICAgICAgICAgY29uc3QgdG9kb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICAgICAgICAgIHRvZG9IZWFkZXIudGV4dENvbnRlbnQgPSAnTm90ZXMnO1xuXG4gICAgICAgICAgICB0YWJUaXRsZS5hcHBlbmQodG9kb0hlYWRlcik7XG5cblxuICAgICAgICAgICAgY29uc3QgdG9kb1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICAgICAgdG9kb1BhcmFncmFwaC50ZXh0Q29udGVudCA9ICdZb3VyIGNvbGxlY3Rpb24gb2YgTm90ZXMgYXJlIGRpc3BsYXllZCBoZXJlJztcblxuICAgICAgICAgICAgdGFiVGl0bGUuYXBwZW5kKHRvZG9QYXJhZ3JhcGgpO1xuXG4gICAgICAgIFxuXG5cblxuXG5cblxuICAgIFxuICAgIGNvbnN0IGNvbGxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbGxlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sbGVjdGlvbi1jb250YWluZXInKTtcblxuICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kKGNvbGxlY3Rpb25Db250YWluZXIpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhIHBvcHVsYXRlIG5vdGVzIG1vZHVsZVxuXG4gICAgICAgIC8vIENyZWF0ZSBpdCBoZXJlIGZpcnN0IHRoZW4gc2VuZCBpdCBzb21ld2hlcmUgZWxzZS5cbiAgICAgICAgYXBwZW5kTm90ZXNPYmplY3QoKTtcblxuICAgICAgICBcblxuXG5cblxuICAgICAgIFxuXG4gICAgXG4gICAgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgYWxsTm90ZURPTU1vZHVsZTsiLCJpbXBvcnQgcG9wdWxhdGVUb2RvQ29sbGVjdGlvbiBmcm9tIFwiLi9wb3B1bGF0ZURPTVRvZG9Db2xsZWN0aW9uXCI7XG5cbmltcG9ydCB7IGNoYW5nZVRvZG9Qcmlvcml0eSB9IGZyb20gXCIuLi9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXNcIjtcblxuZnVuY3Rpb24gYWxsVG9kb0RPTU1vZHVsZSAoKXtcblxuICAgIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1jb250YWluZXInKTtcblxuXG5cblxuICAgIC8vIG1vdmUgdG8gZG9tQWN0aXZpdHlcbiAgICBmdW5jdGlvbiByZW1vdmVFeGlzdGluZ0Rpc3BsYXlET00gKCl7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGRpc3BsYXlDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIFxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgfSk7XG5cbiAgICB9XG5cbiAgICByZW1vdmVFeGlzdGluZ0Rpc3BsYXlET00oKTtcblxuXG4gICAgXG5cblxuICAgIFxuXG5cbiAgICBjb25zdCB0b2RvQ29udGFpbmVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRvZG9Db250YWluZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lci10aXRsZScpO1xuXG4gICAgZGlzcGxheUNvbnRhaW5lci5hcHBlbmQodG9kb0NvbnRhaW5lclRpdGxlKTtcblxuICAgICAgICBjb25zdCB0YWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRhYlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RhYi10aXRsZScpO1xuXG4gICAgICAgIHRvZG9Db250YWluZXJUaXRsZS5hcHBlbmQodGFiVGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCB0b2RvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgICAgICAgICAgdG9kb0hlYWRlci50ZXh0Q29udGVudCA9ICdUby1kb3MnO1xuXG4gICAgICAgICAgICB0YWJUaXRsZS5hcHBlbmQodG9kb0hlYWRlcik7XG5cblxuICAgICAgICAgICAgY29uc3QgdG9kb1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICAgICAgdG9kb1BhcmFncmFwaC50ZXh0Q29udGVudCA9ICdZb3VyIGNvbGxlY3Rpb24gb2YgdG9kb3MgYXJlIGRpc3BsYXllZCBoZXJlJztcblxuICAgICAgICAgICAgdGFiVGl0bGUuYXBwZW5kKHRvZG9QYXJhZ3JhcGgpO1xuXG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBwcmlvcml0eUJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYnV0dG9ucycpO1xuXG4gICAgICAgIHRvZG9Db250YWluZXJUaXRsZS5hcHBlbmQocHJpb3JpdHlCdXR0b25zKTtcblxuICAgICAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdoaWdoLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kKGhpZ2hQcmlvcml0eSk7XG5cblxuICAgICAgICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG5cbiAgICAgICAgICAgIHByaW9yaXR5QnV0dG9ucy5hcHBlbmQobWVkaXVtUHJpb3JpdHkpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2xvdy1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kKGxvd1ByaW9yaXR5KTtcblxuICAgICAgICAgICAgXG5cblxuXG5cblxuICAgIFxuICAgIGNvbnN0IGNvbGxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbGxlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sbGVjdGlvbi1jb250YWluZXInKTtcblxuICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kKGNvbGxlY3Rpb25Db250YWluZXIpO1xuXG4gICAgcG9wdWxhdGVUb2RvQ29sbGVjdGlvbignaGlnaCcpO1xuXG4gICAgY2hhbmdlVG9kb1ByaW9yaXR5KCk7XG4gICAgXG4gICAgLy8gZG9tQWN0aW9uKClcblxuXG5cblxuXG4gICBcblxuXG4gICAgICAgXG5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG5cblxuXG4gICAgICAgIFxuXG5cblxuXG5cbiAgICBcbiAgICBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBhbGxUb2RvRE9NTW9kdWxlOyIsIi8vIGZvciBzZWxlY3Rpb24gb3B0aW9uc1xuaW1wb3J0IHByb2plY3RPYmplY3RzIGZyb20gJy4uL3RhYk9iamVjdHMvYWxsUHJvamVjdHNUYWInXG5cbmZ1bmN0aW9uIGZvcm1Eb21Nb2R1bGUgKCl7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cblxuXG4vLyAgICBGT1JNIEJVVFRPTlxuXG5cbiAgICBjb25zdCBmb3JtQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb3JtQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uLWNvbnRhaW5lcicpO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoZm9ybUJ1dHRvbkNvbnRhaW5lcik7XG5cblxuICAgICAgICBjb25zdCBmb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgZm9ybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicpO1xuXG4gICAgICAgIGZvcm1CdXR0b24udGV4dENvbnRlbnQgPSAnKyc7XG5cbiAgICAgICAgZm9ybUJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZm9ybUJ1dHRvbik7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ21haW4gZE9tJyk7XG4gICAgXG5cblxuICAgIFxuXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoZm9ybUNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgdG9kb0NyZWF0aW9uRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRvZG9DcmVhdGlvbkZvcm0uY2xhc3NMaXN0LmFkZCgndG9kby1jcmVhdGlvbi1mb3JtJyk7XG5cbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmQodG9kb0NyZWF0aW9uRm9ybSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGVudHJ5Q3JlYXRpb25Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgICAgICAgICB0b2RvQ3JlYXRpb25Gb3JtLmFwcGVuZChlbnRyeUNyZWF0aW9uRm9ybSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG5cbiAgICAgICAgICAgICAgICBlbnRyeUNyZWF0aW9uRm9ybS5hcHBlbmQoZmllbGRzZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9ICdDcmVhdGUgYW4gZW50cnknXG5cbiAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kKGxlZ2VuZCk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmQoaW5wdXRDb250YWluZXIxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9kby10aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGU6JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMS5hcHBlbmQodG9kb1RpdGxlTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVGl0bGVMaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxLmFwcGVuZCh0b2RvVGl0bGVMaW5lQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tdGl0bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMS5hcHBlbmQodG9kb1RpdGxlSW5wdXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZChpbnB1dENvbnRhaW5lcjIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9kby1kZXNjJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY0xhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjIuYXBwZW5kKHRvZG9EZXNjTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY0xpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjIuYXBwZW5kKHRvZG9EZXNjTGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGVzYycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCczMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCcxMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMi5hcHBlbmQodG9kb0Rlc2NUZXh0QXJlYSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMy5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kKGlucHV0Q29udGFpbmVyMyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc05vdGVSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc05vdGVSYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOb3RlUmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsJ2lzLW5vdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTm90ZVJhZGlvLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2VudHJ5LXR5cGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTm90ZVJhZGlvLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOb3RlUmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIzLmFwcGVuZChpc05vdGVSYWRpbyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vdGVSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVSYWRpb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnaXMtbm90ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90ZVJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSAnTm90ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjMuYXBwZW5kKG5vdGVSYWRpb0xhYmVsKTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1RvZG9SYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1RvZG9SYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUb2RvUmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsJ2lzLXRvZG8nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9kb1JhZGlvLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2VudHJ5LXR5cGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9kb1JhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMy5hcHBlbmQoaXNUb2RvUmFkaW8pO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9SYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9SYWRpb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnaXMtdG9kbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JhZGlvTGFiZWwudGV4dENvbnRlbnQgPSAnVG8tZG8nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIzLmFwcGVuZCh0b2RvUmFkaW9MYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlTmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdUb2RvLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1uZXctdG9kbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmQoY3JlYXRlTmV3VG9kbyk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdUb2RvLmFwcGVuZChpbnB1dENvbnRhaW5lcjQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0b2RvLWRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBkYXRlOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI0LmFwcGVuZCh0b2RvRGF0ZUxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlTGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjQuYXBwZW5kKHRvZG9EYXRlTGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI0LmFwcGVuZCh0b2RvRGF0ZUlucHV0KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51ZSBjcmVhdGluZyBmb3JtIGVsZW1lbnRzXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI1LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3VG9kby5hcHBlbmQoaW5wdXRDb250YWluZXI1KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUmVtaW5kSW5MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JlbWluZEluTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0b2RvLXJlbWluZC1pbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9SZW1pbmRJbkxhYmVsLnRleHRDb250ZW50ID0gJ1JlbWluZC1pbihkYXlzKTonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNS5hcHBlbmQodG9kb1JlbWluZEluTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1JlbWluZEluTGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjUuYXBwZW5kKHRvZG9SZW1pbmRJbkxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9SZW1pbmRJbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdudW1iZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1yZW1pbmQtaW4nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmVtaW5kSW5JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI1LmFwcGVuZCh0b2RvUmVtaW5kSW5JbnB1dCk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1RvZG8uYXBwZW5kKGlucHV0Q29udGFpbmVyNik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjYuYXBwZW5kKHRvZG9Qcmlvcml0eUxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eUxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI2LmFwcGVuZCh0b2RvUHJpb3JpdHlMaW5lQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ2xvdycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNi5hcHBlbmQodG9kb1ByaW9yaXR5QnV0dG9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgY2xhc3NlcyBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXMgKGRpZmZlcmVudCBjb2xvdXJzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb1ByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnbG93Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvUHJpb3JpdHlCdXR0b24udmFsdWUgPT09ICdtZWRpdW0nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24udmFsdWUgPSAnaGlnaCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb1ByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnaGlnaCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi52YWx1ZSA9ICdsb3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI3LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3VG9kby5hcHBlbmQoaW5wdXRDb250YWluZXI3KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdFJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCdleGlzdGluZy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhpc3RpbmdQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Byb2plY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RSYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI3LmFwcGVuZChleGlzdGluZ1Byb2plY3RSYWRpbyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0UmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0UmFkaW9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2V4aXN0aW5nLXByb2plY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RSYWRpb0xhYmVsLnRleHRDb250ZW50ID0gJ0V4aXN0aW5nIHByb2plY3QnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNy5hcHBlbmQoZXhpc3RpbmdQcm9qZWN0UmFkaW9MYWJlbCk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3RSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCduZXctcHJvamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdFJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjcuYXBwZW5kKG5ld1Byb2plY3RSYWRpbyk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3RSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0UmFkaW9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ25ldy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdFJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNy5hcHBlbmQobmV3UHJvamVjdFJhZGlvTGFiZWwpO1xuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0RXhpc3RpbmdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEV4aXN0aW5nUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtZXhpc3RpbmctcHJvamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmQoc2VsZWN0RXhpc3RpbmdQcm9qZWN0KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXI4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjguY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RFeGlzdGluZ1Byb2plY3QuYXBwZW5kKGlucHV0Q29udGFpbmVyOCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2hvaWNlc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q2hvaWNlc0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywncHJvamVjdC1jaG9pY2VzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENob2ljZXNMYWJlbC50ZXh0Q29udGVudCA9ICdXaGljaCBwcm9qZWN0IGlzIHRoaXMgZm9yPyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI4LmFwcGVuZChwcm9qZWN0Q2hvaWNlc0xhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RDaG9pY2VzRHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q2hvaWNlc0Ryb3BEb3duLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Byb2plY3QtY2hvaWNlcycpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q2hvaWNlc0Ryb3BEb3duLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWNob2ljZXMnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENob2ljZXNEcm9wRG93bi5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyOC5hcHBlbmQocHJvamVjdENob2ljZXNEcm9wRG93bik7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGl0bGVzIGZyb20gZXhpc3RpbmcgcHJvamVjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB3aGVuIG5ldyBwcm9qZWN0cyBhcmUgY3JlYXRlZFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1uZXctcHJvamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmQoY3JlYXRlTmV3UHJvamVjdCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI5LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdC5hcHBlbmQoaW5wdXRDb250YWluZXI5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdwcm9qZWN0LXRpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGU6JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjkuYXBwZW5kKHByb2plY3RUaXRsZUxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI5LmFwcGVuZChwcm9qZWN0VGl0bGVMaW5lQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LXRpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyOS5hcHBlbmQocHJvamVjdFRpdGxlSW5wdXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEwLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdC5hcHBlbmQoaW5wdXRDb250YWluZXIxMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Byb2plY3QtZGVzYycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEwLmFwcGVuZChwcm9qZWN0RGVzY0xhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjTGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEwLmFwcGVuZChwcm9qZWN0RGVzY0xpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1kZXNjJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCczMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywnMTAnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY1RleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEwLmFwcGVuZChwcm9qZWN0RGVzY1RleHRBcmVhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyMTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTEuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0LmFwcGVuZChpbnB1dENvbnRhaW5lcjExKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywncHJvamVjdC1kYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZTonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTEuYXBwZW5kKHByb2plY3REYXRlTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERhdGVMaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTEuYXBwZW5kKHByb2plY3REYXRlTGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1kYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMS5hcHBlbmQocHJvamVjdERhdGVJbnB1dCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWUgY3JlYXRpbmcgZm9ybSBlbGVtZW50c1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdC5hcHBlbmQoaW5wdXRDb250YWluZXIxMik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFJlbWluZEluTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywncHJvamVjdC1yZW1pbmQtaW4nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UmVtaW5kSW5MYWJlbC50ZXh0Q29udGVudCA9ICdSZW1pbmQtaW4oZGF5cyk6JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEyLmFwcGVuZChwcm9qZWN0UmVtaW5kSW5MYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0UmVtaW5kSW5MaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTIuYXBwZW5kKHByb2plY3RSZW1pbmRJbkxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RSZW1pbmRJbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdudW1iZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1yZW1pbmQtaW4nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UmVtaW5kSW5JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMi5hcHBlbmQocHJvamVjdFJlbWluZEluSW5wdXQpO1xuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIxMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMy5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QuYXBwZW5kKGlucHV0Q29udGFpbmVyMTMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMy5hcHBlbmQocHJvamVjdFByaW9yaXR5TGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5TGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEzLmFwcGVuZChwcm9qZWN0UHJpb3JpdHlMaW5lQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ2xvdycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTMuYXBwZW5kKHByb2plY3RQcmlvcml0eUJ1dHRvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGNsYXNzZXMgZm9yIGRpZmZlcmVudCBwcmlvcml0aWVzIChkaWZmZXJlbnQgY29sb3VycylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9PT0gJ2xvdycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnbWVkaXVtJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ2hpZ2gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIaWdoJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9PT0gJ2hpZ2gnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPSAnbG93JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnZm9ybS1zdWJtaXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZChzdWJtaXRCdXR0b24pO1xuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGV4aXN0aW5nUHJvamVjdE9wdGlvbnMgKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0UmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhpc3RpbmctcHJvamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdFJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0Jyk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bnByb2Nlc3NlZFByb2plY3QgPSBwcm9qZWN0T2JqZWN0cygpLnVucHJvY2Vzc2VkUHJvamVjdEFycmF5XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bnByb2Nlc3NlZFByb2plY3QubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0UmFkaW8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJywnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0UmFkaW8uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5ld1Byb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmV3UHJvamVjdFJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodW5wcm9jZXNzZWRQcm9qZWN0Lmxlbmd0aCA+IDAgKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RSYWRpby5kaXNhYmxlZCA9IGZhbHNlO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihvcHRpb25zTm9kZSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNOb2RlLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjAudGV4dENvbnRlbnQgPSAnQ2hvb3NlIG9uZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uMC52YWx1ZSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDaG9pY2VzRHJvcERvd24uYXBwZW5kKG9wdGlvbjApO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5wcm9jZXNzZWRQcm9qZWN0LmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iamVjdC50aXRsZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IG9iamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IG9iamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENob2ljZXNEcm9wRG93bi5hcHBlbmQocHJvamVjdE9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmdW5jdGlvbiBleGlzdGluZ1Byb2plY3RPcHRpb25zICgpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgdW5wcm9jZXNzZWRQcm9qZWN0ID0gcHJvamVjdE9iamVjdHMoKS51bnByb2Nlc3NlZFByb2plY3RBcnJheVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3Qgb3B0aW9uc05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmKG9wdGlvbnNOb2RlKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBvcHRpb25zTm9kZS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBvcHRpb24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3Qgb3B0aW9uMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgb3B0aW9uMC50ZXh0Q29udGVudCA9ICdDaG9vc2Ugb25lJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG9wdGlvbjAudmFsdWUgPSAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHByb2plY3RDaG9pY2VzRHJvcERvd24uYXBwZW5kKG9wdGlvbjApO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB1bnByb2Nlc3NlZFByb2plY3QuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmplY3QudGl0bGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gb2JqZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBvYmplY3QudGl0bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdENob2ljZXNEcm9wRG93bi5hcHBlbmQocHJvamVjdE9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0T3B0aW9ucygpO1xuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7ZXhpc3RpbmdQcm9qZWN0T3B0aW9uc307XG5cblxufVxuXG5jb25zdCBjcmVhdGVGb3JtRE9NID0gZm9ybURvbU1vZHVsZSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvcm1ET007IiwiXG5cbmZ1bmN0aW9uIG1haW5Eb21Nb2R1bGUgKCl7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICBcbiAgICAvLyBGT1JNIE9QRU5JTkcgQlVUVE9OXG4gICAgXG5cblxuXG4gICAgLy8gVE9QIENPTlRBSU5FUlxuICAgIGNvbnN0IHRvcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdG9wQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvcC1jb250YWluZXInKTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKHRvcENvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgYnJhbmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBicmFuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdicmFuZC1jb250YWluZXInKTtcblxuICAgICAgICB0b3BDb250YWluZXIuYXBwZW5kKGJyYW5kQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgY29uc3QgYnJhbmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgICAgICBicmFuZEhlYWRlci50ZXh0Q29udGVudCA9ICdTYWdlRW50cmllcyc7XG5cbiAgICAgICAgICAgIGJyYW5kQ29udGFpbmVyLmFwcGVuZChicmFuZEhlYWRlcik7XG5cblxuICAgICAgICBjb25zdCB0b3BDb250YWluZXJTcGFjaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdG9wQ29udGFpbmVyU3BhY2luZy5jbGFzc0xpc3QuYWRkKCd0b3AtY29udGFpbmVyLXNwYWNpbmcnKTtcblxuICAgICAgICB0b3BDb250YWluZXIuYXBwZW5kKHRvcENvbnRhaW5lclNwYWNpbmcpO1xuXG4gICAgICAgIFxuICAgICAgICBjb25zdCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QuYWRkKCdoYW1idXJnZXItbWVudScpO1xuXG4gICAgICAgIGhhbWJ1cmdlck1lbnUudGV4dENvbnRlbnQgPSAnLy8vJztcblxuICAgICAgICB0b3BDb250YWluZXIuYXBwZW5kKGhhbWJ1cmdlck1lbnUpO1xuXG5cbiAgICAvLyBNRU5VXG5cbiAgICBjb25zdCBub3RlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbm90ZU1lbnUuY2xhc3NMaXN0LmFkZCgnbm90ZS1tZW51Jyk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChub3RlTWVudSk7XG5cbiAgICAgICAgY29uc3QgYWxsVG9kb3NUYWJET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBhbGxUb2Rvc1RhYkRPTS5jbGFzc0xpc3QuYWRkKCdhbGwtdG9kb3MtdGFiJyk7XG5cbiAgICAgICAgbm90ZU1lbnUuYXBwZW5kKGFsbFRvZG9zVGFiRE9NKTtcblxuICAgICAgICAgICAgY29uc3QgYWxsVG9kb3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgICAgICBhbGxUb2Rvc0hlYWRlci50ZXh0Q29udGVudCA9ICdBbGwgVG9kb3MnO1xuXG4gICAgICAgICAgICBhbGxUb2Rvc1RhYkRPTS5hcHBlbmQoYWxsVG9kb3NIZWFkZXIpXG5cblxuICAgICAgICBjb25zdCBhbGxQcm9qZWN0c1RhYkRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGFsbFByb2plY3RzVGFiRE9NLmNsYXNzTGlzdC5hZGQoJ2FsbC1wcm9qZWN0cy10YWInKTtcblxuICAgICAgICBub3RlTWVudS5hcHBlbmQoYWxsUHJvamVjdHNUYWJET00pO1xuXG4gICAgICAgICAgICBjb25zdCBhbGxQcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICAgICAgICAgIGFsbFByb2plY3RzSGVhZGVyLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcblxuICAgICAgICAgICAgYWxsUHJvamVjdHNUYWJET00uYXBwZW5kKGFsbFByb2plY3RzSGVhZGVyKTtcblxuXG4gICAgICAgIGNvbnN0IGFsbE5vdGVzVGFiRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgYWxsTm90ZXNUYWJET00uY2xhc3NMaXN0LmFkZCgnYWxsLW5vdGVzLXRhYicpO1xuXG4gICAgICAgIG5vdGVNZW51LmFwcGVuZChhbGxOb3Rlc1RhYkRPTSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFsbE5vdGVzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgICAgICAgICAgYWxsTm90ZXNIZWFkZXIudGV4dENvbnRlbnQgPSAnTm90ZXMnO1xuXG4gICAgICAgICAgICBhbGxOb3Rlc1RhYkRPTS5hcHBlbmQoYWxsTm90ZXNIZWFkZXIpO1xuXG5cblxuXG4gICAgLy8gRk9PVEVSXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lckZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdG9kb0NvbnRhaW5lckZvb3Rlci5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lci1mb290ZXInKTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKHRvZG9Db250YWluZXJGb290ZXIpO1xuXG4gICAgICAgIGNvbnN0IGxpbmtDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBsaW5rQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpbmstY29udGFpbmVyJyk7XG5cbiAgICAgICAgdG9kb0NvbnRhaW5lckZvb3Rlci5hcHBlbmQobGlua0NvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvb3RlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICAgICAgICAgIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywnJyk7XG5cbiAgICAgICAgICAgIGZvb3RlckxpbmsudGV4dENvbnRlbnQgPSAnTWFkZSBieSBSaXNzaGlnYW5lc2ggVmlsbGFsYW4nO1xuXG4gICAgICAgICAgICBsaW5rQ29udGFpbmVyLmFwcGVuZChmb290ZXJMaW5rKTtcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG1haW5Eb21Nb2R1bGU7IiwiaW1wb3J0IG5vdGVzT2JqZWN0IGZyb20gXCIuLi90YWJPYmplY3RzL2FsbE5vdGVzVGFiXCI7XG5pbXBvcnQgeyB1cGRhdGVOb3RlSXRlbSwgZGVsZXRlVG9kb0l0ZW0gfSBmcm9tIFwiLi4vZG9tQWN0aXZpdGllcy9kb21BY3Rpdml0aWVzXCI7XG5cbmZ1bmN0aW9uIGFwcGVuZE5vdGVzT2JqZWN0KCl7XG4gICAgICAgICAgICBcbiAgICBjb25zdCBjb2xsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb24tY29udGFpbmVyJyk7XG5cbiAgICBjb2xsZWN0aW9uQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcblxuICAgIH0pO1xuXG5cbiAgICBjb25zdCBub3Rlc0NvbGxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG5vdGVzQ29sbGVjdGlvbi5jbGFzc0xpc3QuYWRkKCdub3Rlcy1jb2xsZWN0aW9uJyk7XG5cbiAgICBjb2xsZWN0aW9uQ29udGFpbmVyLmFwcGVuZChub3Rlc0NvbGxlY3Rpb24pO1xuXG4gICAgY29uc3Qgbm90ZXNBcnJheSA9IG5vdGVzT2JqZWN0KCkucmV2ZXJzZSgpO1xuXG4gICAgbm90ZXNBcnJheS5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IG5vdGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5vdGVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vdGVzLWNvbnRhaW5lcicpO1xuICAgICAgICBub3Rlc0NvbGxlY3Rpb24uYXBwZW5kKG5vdGVzQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgY29uc3Qgbm90ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBub3RlVGl0bGUuY2xhc3NMaXN0LmFkZCgnbm90ZS10aXRsZScpO1xuICAgICAgICAgICAgbm90ZVRpdGxlLnRleHRDb250ZW50ID0gb2JqZWN0LnRpdGxlO1xuICAgICAgICAgICAgbm90ZXNDb250YWluZXIuYXBwZW5kKG5vdGVUaXRsZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG5vdGVEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBub3RlRGVzYy5jbGFzc0xpc3QuYWRkKCdub3RlLWRlc2MnKTtcbiAgICAgICAgICAgIG5vdGVEZXNjLnRleHRDb250ZW50ID0gb2JqZWN0LmRlc2M7XG4gICAgICAgICAgICBub3Rlc0NvbnRhaW5lci5hcHBlbmQobm90ZURlc2MpO1xuXG5cblxuICAgICAgICBub3Rlc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWRpc3BsYXktY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKHRvZG9EaXNwbGF5Q29udGFpbmVyKTtcblxuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGlzcGxheScpO1xuXG4gICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlDb250YWluZXIuYXBwZW5kKHRvZG9EaXNwbGF5KTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnVGl0bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktdGl0bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVRpdGxlLnZhbHVlID0gb2JqZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheVRpdGxlKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LWRlc2MnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdEZXNjcmlwdGlvbicpXG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCczMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywnMTAnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnZhbHVlID0gb2JqZWN0LmRlc2M7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGVzY1RleHRBcmVhKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVCcmVhazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrMSk7XG5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVXBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUudGV4dENvbnRlbnQgPSAnVXBkYXRlJztcblxuICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvZG9VcGRhdGUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZUJyZWFrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrMik7XG5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRlbGV0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZWxldGUudGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvZG9EZWxldGUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTm90ZUl0ZW0ob2JqZWN0KTtcblxuICAgICAgICAgICAgICAgICAgICBkZWxldGVUb2RvSXRlbShvYmplY3QpO1xuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cblxuXG59XG5cbi8vIGFwcGVuZE5vdGVzT2JqZWN0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcGVuZE5vdGVzT2JqZWN0IiwiaW1wb3J0IHByb2plY3RPYmplY3RzIGZyb20gXCIuLi90YWJPYmplY3RzL2FsbFByb2plY3RzVGFiXCI7XG5cbmltcG9ydCB7IHVwZGF0ZVByb2plY3RJdGVtLHVwZGF0ZVRvZG9JdGVtLCBkZWxldGVQcm9qZWN0SXRlbSB9IGZyb20gXCIuLi9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXNcIjtcblxuXG4vLyBQT1BVTEFURSBUT0RPIENPTExFQ1RJT04gQ09OVEFJTkVSXG5cbi8vIGhpZ2hcbi8vIHB1dCB0aGlzIGluIGEgZGlmZmVyZW50IG1vZHVsZVxuZnVuY3Rpb24gYXBwZW5kUHJvamVjdE9iamVjdHMocHJpb3JpdHkpe1xuXG4gICAgY29uc3QgY29sbGVjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uLWNvbnRhaW5lcicpXG5cbiAgICBjb2xsZWN0aW9uQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcblxuICAgIH0pO1xuXG5cblxuICAgIGNvbnN0IGFsbFByb2plY3RPYmplY3QgPSBwcm9qZWN0T2JqZWN0cygpLnByb2plY3RzQnlQcmlvcml0eTtcbiAgICAvLyBjb25zb2xlLmxvZyhhbGxQcm9qZWN0T2JqZWN0KTtcblxuICAgIGNvbnN0IGR1ZVN0YXR1c0FycmF5ID0gWydvdmVyZHVlJywnZHVlJywndXBjb21pbmcnLCdjb21wbGV0ZSddO1xuXG4gICAgY29uc3QgdGl0bGVBcnJheSA9IFsnT1ZFUkRVRScsJ0RVRSBTT09OJywnVVBDT01JTkcnLCdDT01QTEVURUQnXTtcblxuICAgIGNvbnN0IGNsYXNzQXJyYXkgPSBbJ292ZXJkdWUtY29udGFpbmVyJywnZHVlLXNvb24tY29udGFpbmVyJywndXBjb21pbmctY29udGFpbmVyJywnY29tcGxldGUtY29udGFpbmVyJ107XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhbGxQcm9qZWN0T2JqZWN0KSB7XG5cbiAgICAgICAgaWYgKGtleSA9PT0gcHJpb3JpdHkpIHtcblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkdWVTdGF0dXNBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSBkdWVTdGF0dXNBcnJheVtpbmRleF07XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzcGVjaWZpZWRPYmpCeVByaW9yaXR5ID0gYWxsUHJvamVjdE9iamVjdFtrZXldO1xuXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHNwZWNpZmllZE9iakJ5UHJpb3JpdHkpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gcHJvcGVydHkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udGFpbnMgYXJyYXkgb2YgdG9kbyBvYmplY3RzIG9mIGVhY2ggZHVlIHN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCeUR1ZVN0YXR1cyA9IHNwZWNpZmllZE9iakJ5UHJpb3JpdHlbcHJvcF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJheUJ5RHVlU3RhdHVzLmxlbmd0aCA9PT0gMCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3RhdHVzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbkNvbnRhaW5lci5hcHBlbmQoc3RhdHVzQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVEaXYudGV4dENvbnRlbnQgPSB0aXRsZUFycmF5W2luZGV4XTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb250YWluZXIuYXBwZW5kKHByb2plY3RUaXRsZURpdik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHVlU3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVlU3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NBcnJheVtpbmRleF0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZURpdi5hcHBlbmQoZHVlU3RhdHVzQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGFibGUtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZVN0YXR1c0NvbnRhaW5lci5hcHBlbmQoc2Nyb2xsYWJsZUNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9vcHMgb3ZlciBlYWNoIHByb2plY3Qgb2JqZWN0IGFuZCBhcHBlbmRzIHRoZW0gdG8gc2Nyb2xsYWJsZSBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlCeUR1ZVN0YXR1cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdENvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUtZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVEaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdFRpdGxlRGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVzYy1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjRGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdERlc2NEaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERhdGVEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kYXRlLWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERhdGVEaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LmR1ZURhdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0RGF0ZURpdik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REdXJhdGlvbkxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REdXJhdGlvbkxlZnREaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kdXItbGVmdC1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REdXJhdGlvbkxlZnREaXYudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LmR1cmF0aW9uTGVmdC5kYXlMZWZ0fSBkYXlzLCAke3Byb2plY3QuZHVyYXRpb25MZWZ0Lm1vbnRoc0xlZnR9IG1vbnRocyBhbmQgJHtwcm9qZWN0LmR1cmF0aW9uTGVmdC55ZWFyc0xlZnR9IHllYXJzIGxlZnRgO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdER1cmF0aW9uTGVmdERpdik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eXREaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1wcmlvcml0eS1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eXREaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByaW9yaXR5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdFByaW9yaXR5dERpdik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERJU1BMQVkgUFJPSkVDVCBUT0RPUyAtIHNlbmQgcHJvamVjdCBjb250YWluZXIgYXMgYW4gYXJndW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCT09NIEJPT00hJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QudG9kb3NCeVByaW9yaXR5KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG8tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0VG9kb0NvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRldGFpbHMnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb0NvbnRhaW5lci5hcHBlbmQocHJvamVjdERldGFpbHMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC10aXRsZS11cGRhdGUnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSA9IHByb2plY3QudGl0bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IFRpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0VGl0bGVJbnB1dCk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzTGluZUJyZWFrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazEpO1xuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1kZXNjLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0lucHV0LnZhbHVlID0gcHJvamVjdC5kZXNjO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0lucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Byb2plY3QgRGVzY3JpcHRpb24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCc0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdjb2xzJywnNDAnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3REZXNjSW5wdXQpO1xuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERldGFpbHNMaW5lQnJlYWsyKTtcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtZGF0ZS11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERhdGVJbnB1dC52YWx1ZSA9IHByb2plY3QuZHVlRGF0ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGF0ZUlucHV0KTtcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERldGFpbHNMaW5lQnJlYWszID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3REZXRhaWxzTGluZUJyZWFrMyk7XG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFJlbWluZEluSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1yZW1pbmRlci11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnbnVtYmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UmVtaW5kSW5JbnB1dC52YWx1ZSA9IHByb2plY3QucmVtaW5kSW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0UmVtaW5kSW5JbnB1dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzTGluZUJyZWFrNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazQpO1xuXG5cbiAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1wcmlvcml0eS11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLHByb2plY3QucHJpb3JpdHkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9IHByb2plY3QucHJpb3JpdHk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0UHJpb3JpdHlCdXR0b24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGNsYXNzZXMgZm9yIGRpZmZlcmVudCBwcmlvcml0aWVzIChkaWZmZXJlbnQgY29sb3VycylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPT09ICdsb3cnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnbWVkaXVtJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9ICdoaWdoJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnaGlnaCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPSAnbG93JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzTGluZUJyZWFrNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazUpO1xuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REaXNwbGF5U3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LXN0YXR1cy11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMuc2V0QXR0cmlidXRlKCd2YWx1ZScscHJvamVjdC5zdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGlzcGxheVN0YXR1cy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSBwcm9qZWN0LnN0YXR1cztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3REaXNwbGF5U3RhdHVzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGNsYXNzZXMgZm9yIGRpZmZlcmVudCBwcmlvcml0aWVzIChkaWZmZXJlbnQgY29sb3VycylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0RGlzcGxheVN0YXR1cy52YWx1ZSA9PT0gJ3BlbmRpbmcnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMudmFsdWUgPSAnY29tcGxldGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGlzcGxheVN0YXR1cy50ZXh0Q29udGVudCA9ICdDb21wbGV0ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0RGlzcGxheVN0YXR1cy52YWx1ZSA9PT0gJ2NvbXBsZXRlJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnZhbHVlID0gJ3BlbmRpbmcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGlzcGxheVN0YXR1cy50ZXh0Q29udGVudCA9ICdQZW5kaW5nJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9zLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdG9kb3MnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdFRvZG9zKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbGxQcm9qZWN0VG9kb3MgPSBwcm9qZWN0LnRvZG9zQnlQcmlvcml0eTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUFycmF5ID0gWydoaWdoJywnbWVkaXVtJywnbG93J11cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkdWVTdGF0dXNBcnJheSA9IFsnb3ZlcmR1ZScsJ2R1ZScsJ3VwY29taW5nJywnY29tcGxldGUnXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUFycmF5ID0gWydPVkVSRFVFJywnRFVFIFNPT04nLCdVUENPTUlORycsJ0NPTVBMRVRFRCddO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzQXJyYXkgPSBbJ292ZXJkdWUtdG9kb3MnLCdkdWUtc29vbi10b2RvcycsJ3VwY29taW5nLXRvZG9zJywnY29tcGxldGUtdG9kb3MnXTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5QXJyYXkuZm9yRWFjaChwcmlvcml0eSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGFsbFByb2plY3RUb2Rvcykge1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbGxQcm9qZWN0VG9kb3Nba2V5XS5vdmVyZHVlLmxlbmd0aCA9PT0gMCAmJiBhbGxQcm9qZWN0VG9kb3Nba2V5XS5kdWUubGVuZ3RoID09PSAwICYmIGFsbFByb2plY3RUb2Rvc1trZXldLnVwY29taW5nLmxlbmd0aCA9PT0gMCAmJiBhbGxQcm9qZWN0VG9kb3Nba2V5XS5jb21wbGV0ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1vdmUgdG8gbmV4dCBsb29wIGlmIGVtcHR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IHByaW9yaXR5KSB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVRpdGxlLnRleHRDb250ZW50ID0gcHJpb3JpdHkudG9VcHBlckNhc2UoKSArYCBQUklPUklUWWA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9zLmFwcGVuZChwcmlvcml0eVRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGR1ZVN0YXR1c0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGR1ZVN0YXR1c0FycmF5W2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGVjaWZpZWRPYmpCeVByaW9yaXR5ID0gYWxsUHJvamVjdFRvZG9zW2tleV07XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzcGVjaWZpZWRPYmpCeVByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gc3BlY2lmaWVkT2JqQnlQcmlvcml0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gcHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5zIGFycmF5IG9mIHRvZG8gb2JqZWN0cyBvZiBlYWNoIGR1ZSBzdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCeUR1ZVN0YXR1cyA9IHNwZWNpZmllZE9iakJ5UHJpb3JpdHlbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlCeUR1ZVN0YXR1cy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncnVucycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1zdGF0dXMtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9zLmFwcGVuZChzdGF0dXNDb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGl2LnRleHRDb250ZW50ID0gdGl0bGVBcnJheVtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmQodG9kb1RpdGxlRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkdWVTdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVlU3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NBcnJheVtpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVEaXYuYXBwZW5kKGR1ZVN0YXR1c0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbGFibGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsYWJsZS10b2RvLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVlU3RhdHVzQ29udGFpbmVyLmFwcGVuZChzY3JvbGxhYmxlQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvb3BzIG92ZXIgZWFjaCB0b2RvIG9iamVjdCBhbmQgYXBwZW5kcyB0aGVtIHRvIHNjcm9sbGFibGUgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlCeUR1ZVN0YXR1cy5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlQ29udGFpbmVyLmFwcGVuZCh0b2RvQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUtZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGl2LnRleHRDb250ZW50ID0gb2JqZWN0LnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9UaXRsZURpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NEaXYuY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjLWRpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjRGl2LnRleHRDb250ZW50ID0gb2JqZWN0LmRlc2M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0Rlc2NEaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGF0ZS1kaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGF0ZURpdi50ZXh0Q29udGVudCA9IG9iamVjdC5kdWVEYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9EYXRlRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0R1cmF0aW9uTGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EdXJhdGlvbkxlZnREaXYuY2xhc3NMaXN0LmFkZCgndG9kby1kdXItbGVmdC1kaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRHVyYXRpb25MZWZ0RGl2LnRleHRDb250ZW50ID0gYCR7b2JqZWN0LmR1cmF0aW9uTGVmdC5kYXlMZWZ0fSBkYXlzLCAke29iamVjdC5kdXJhdGlvbkxlZnQubW9udGhzTGVmdH0gbW9udGhzIGFuZCAke29iamVjdC5kdXJhdGlvbkxlZnQueWVhcnNMZWZ0fSB5ZWFycyBsZWZ0YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvRHVyYXRpb25MZWZ0RGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLXByb2plY3QtZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1Byb2plY3REaXYudGV4dENvbnRlbnQgPSBvYmplY3QucHJvamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvUHJvamVjdERpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHl0RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJpb3JpdHktZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5dERpdi50ZXh0Q29udGVudCA9IG9iamVjdC5wcmlvcml0eTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvUHJpb3JpdHl0RGl2KTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheXMgdG9kbyBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuXG5cblxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZCh0b2RvRGlzcGxheUNvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5jbGFzc0xpc3QuYWRkKCd0b2RvLWRpc3BsYXknKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLmFwcGVuZCh0b2RvRGlzcGxheSk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1RpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LXRpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS52YWx1ZSA9IG9iamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlUaXRsZSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY1RleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS1kZXNjJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnRGVzY3JpcHRpb24nKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdjb2xzJywnMzAnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncm93cycsJzEwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS52YWx1ZSA9IG9iamVjdC5kZXNjO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rlc2NUZXh0QXJlYSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5RGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5RGF0ZS52YWx1ZSA9IG9iamVjdC5kdWVEYXRlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5RGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheURhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVCcmVhazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWsxKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5UmVtaW5kSW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4uc2V0QXR0cmlidXRlKCd0eXBlJywnbnVtYmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlSZW1pbmRJbi5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LXJlbWluZC1pbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9iamVjdC5kdWVEYXRlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdSZW1pbmQgaW4gaG93IG1hbnkgZGF5cz8nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnZhbHVlID0gb2JqZWN0LnJlbWluZEluO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4uY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlSZW1pbmRJbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZUJyZWFrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWsyKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLG9iamVjdC5wcmlvcml0eSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnRleHRDb250ZW50ID0gb2JqZWN0LnByaW9yaXR5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlQcmlvcml0eSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGNsYXNzZXMgZm9yIGRpZmZlcmVudCBwcmlvcml0aWVzIChkaWZmZXJlbnQgY29sb3VycylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPT09ICdsb3cnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID0gJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9PT0gJ21lZGl1bScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPSAnaGlnaCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS50ZXh0Q29udGVudCA9ICdIaWdoJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPT09ICdoaWdoJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9ICdsb3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVCcmVhazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrMyk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0c0Ryb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcm9qZWN0LWRpc3BsYXktY2hvaWNlcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWRpc3BsYXktY2hvaWNlcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHByb2plY3RzRHJvcERvd24pO1xuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5wcm9jZXNzZWRQcm9qZWN0ID0gcHJvamVjdE9iamVjdHMoKS51bnByb2Nlc3NlZFByb2plY3RBcnJheVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihvcHRpb25zTm9kZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNOb2RlLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbjAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24wLnRleHRDb250ZW50ID0gb2JqZWN0LnByb2plY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uMC52YWx1ZSA9IG9iamVjdC5wcm9qZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzRHJvcERvd24uYXBwZW5kKG9wdGlvbjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucHJvY2Vzc2VkUHJvamVjdC5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iamVjdC50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IG9iai50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5hcHBlbmQocHJvamVjdE9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVCcmVhazQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrNCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIGxpbmUgYnJlYWsgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxvYmplY3Quc3RhdHVzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LXN0YXR1cycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnRleHRDb250ZW50ID0gb2JqZWN0LnN0YXR1cztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheVN0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgY2xhc3NlcyBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXMgKGRpZmZlcmVudCBjb2xvdXJzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0Rpc3BsYXlTdGF0dXMudmFsdWUgPT09ICdwZW5kaW5nJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMudmFsdWUgPSAnY29tcGxldGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9EaXNwbGF5U3RhdHVzLnZhbHVlID09PSAnY29tcGxldGUnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy52YWx1ZSA9ICdwZW5kaW5nJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy50ZXh0Q29udGVudCA9ICdQZW5kaW5nJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVCcmVhazUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrNSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVXBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUudGV4dENvbnRlbnQgPSAnVXBkYXRlJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvZG9VcGRhdGUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVG9kb0l0ZW0ob2JqZWN0KTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VXBkYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFVwZGF0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFVwZGF0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VXBkYXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RVcGRhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnVXBkYXRlJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VXBkYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3RVcGRhdGVCdXR0b24pO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZWxldGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZWxldGUuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlbGV0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1kZWxldGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVsZXRlLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3REZWxldGUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJvamVjdEl0ZW0ocHJvamVjdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdEl0ZW0ocHJvamVjdClcblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnVuY3Rpb24gdXBkYXRlUHJvamVjdEl0ZW0gKHByb2plY3Qpe1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgcHJvamVjdERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10b2RvLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZGV0YWlscycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHByb2plY3RVcGRhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC11cGRhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwcm9qZWN0VXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyBwcm9qZWN0LXN0YXR1cy11cGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZS11cGRhdGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBuZXdQcm9qZWN0RGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRlc2MtdXBkYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IG5ld1Byb2plY3REdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1kYXRlLXVwZGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBuZXdQcm9qZWN0UmVtaW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1yZW1pbmRlci11cGRhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgbmV3UHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtcHJpb3JpdHktdXBkYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IG5ld1Byb2plY3RTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1zdGF0dXMtdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cobmV3UHJvamVjdFJlbWluZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCBuZXdEZXRhaWxzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gdXBkYXRlIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5ld1RpdGxlOiBuZXdQcm9qZWN0VGl0bGUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBuZXdEZXNjOiBuZXdQcm9qZWN0RGVzYy52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5ld0R1ZTogbmV3UHJvamVjdER1ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5ld1JlbWluZGVyOiBuZXdQcm9qZWN0UmVtaW5kZXIudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBuZXdQcmlvcml0eTogbmV3UHJvamVjdFByaW9yaXR5LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbmV3U3RhdHVzOiBuZXdQcm9qZWN0U3RhdHVzLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gY3JlYXRlIGEgcHJvamVjdCB1cGRhdGUgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIHRvZG9Nb2R1bGUudXBkYXRlVG9kbyhwcm9qZWN0LG5ld0RldGFpbHMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHByb2plY3RNb2R1bGUudXBkYXRlUHJvamVjdChwcm9qZWN0LG5ld0RldGFpbHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIHJlY2VudENvbGxlY3Rpb25Db250YWluZXJGbihyZWNlbnRDb2xsZWN0aW9uQ29udGFpbmVyQXJnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwcm9qZWN0RGlzcGxheUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwcm9qZWN0RGlzcGxheUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3REaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHByb2plY3REaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9Db250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3b3JrcyEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuXG5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcblxuXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG4vLyBTRU5EIFRISVMgVE8gYWxsVG9kb0RPTUNyZWF0aW9uLmpzXG4vLyBhcHBlbmRUb2RvT2JqZWN0cygnaGlnaCcpXG5cbmV4cG9ydCBkZWZhdWx0IGFwcGVuZFByb2plY3RPYmplY3RzOyIsImltcG9ydCB0b2RvT2JqZWN0IGZyb20gXCIuLi90YWJPYmplY3RzL2FsbFRvZG9zVGFiXCI7XG4vLyBmb3Igc2VsZWN0aW9uIG9wdGlvbnNcbmltcG9ydCBwcm9qZWN0T2JqZWN0cyBmcm9tICcuLi90YWJPYmplY3RzL2FsbFByb2plY3RzVGFiJztcblxuLy8gZG9lc24ndCB3b3JrIGJlY2F1c2Ugb2YgY2lyY3VsYXIgZGVwZW5kZW5jeVxuLy8gaW1wb3J0IHVwZGF0ZVRvZG9JdGVtICBmcm9tICcuLi9kb21BY3Rpdml0aWVzL3VwZGF0ZVRvZG9ET00nO1xuXG5pbXBvcnQgeyB1cGRhdGVUb2RvSXRlbSwgZGVsZXRlVG9kb0l0ZW0gfSBmcm9tIFwiLi4vZG9tQWN0aXZpdGllcy9kb21BY3Rpdml0aWVzXCI7XG5cblxuLy8gUE9QVUxBVEUgVE9ETyBDT0xMRUNUSU9OIENPTlRBSU5FUlxuXG4vLyBoaWdoXG4vLyBwdXQgdGhpcyBpbiBhIGRpZmZlcmVudCBtb2R1bGVcbmZ1bmN0aW9uIGFwcGVuZFRvZG9PYmplY3RzKHByaW9yaXR5KXtcblxuICAgIFxuXG4gICAgY29uc3QgY29sbGVjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uLWNvbnRhaW5lcicpXG5cbiAgICBjb2xsZWN0aW9uQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcblxuICAgIH0pO1xuXG5cblxuICAgIGNvbnN0IGFsbFRvZG9PYmplY3QgPSB0b2RvT2JqZWN0KCk7XG5cbiAgICBjb25zdCBkdWVTdGF0dXNBcnJheSA9IFsnb3ZlcmR1ZScsJ2R1ZScsJ3VwY29taW5nJywnY29tcGxldGUnXTtcblxuICAgIGNvbnN0IHRpdGxlQXJyYXkgPSBbJ09WRVJEVUUnLCdEVUUgU09PTicsJ1VQQ09NSU5HJywnQ09NUExFVEVEJ107XG5cbiAgICBjb25zdCBjbGFzc0FycmF5ID0gWydvdmVyZHVlLWNvbnRhaW5lcicsJ2R1ZS1zb29uLWNvbnRhaW5lcicsJ3VwY29taW5nLWNvbnRhaW5lcicsJ2NvbXBsZXRlLWNvbnRhaW5lciddO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gYWxsVG9kb09iamVjdCkge1xuXG4gICAgICAgIGlmIChrZXkgPT09IHByaW9yaXR5KSB7XG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZHVlU3RhdHVzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gZHVlU3RhdHVzQXJyYXlbaW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWVkT2JqQnlQcmlvcml0eSA9IGFsbFRvZG9PYmplY3Rba2V5XTtcblxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBzcGVjaWZpZWRPYmpCeVByaW9yaXR5KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IHByb3BlcnR5KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5zIGFycmF5IG9mIHRvZG8gb2JqZWN0cyBvZiBlYWNoIGR1ZSBzdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnlEdWVTdGF0dXMgPSBzcGVjaWZpZWRPYmpCeVByaW9yaXR5W3Byb3BdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlCeUR1ZVN0YXR1cy5sZW5ndGggPT09IDApe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N0YXR1cy1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25Db250YWluZXIuYXBwZW5kKHN0YXR1c0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGl2LnRleHRDb250ZW50ID0gdGl0bGVBcnJheVtpbmRleF07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29udGFpbmVyLmFwcGVuZCh0b2RvVGl0bGVEaXYpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1ZVN0YXR1c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZVN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzQXJyYXlbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVEaXYuYXBwZW5kKGR1ZVN0YXR1c0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbGFibGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzY3JvbGxhYmxlLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVTdGF0dXNDb250YWluZXIuYXBwZW5kKHNjcm9sbGFibGVDb250YWluZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvb3BzIG92ZXIgZWFjaCB0b2RvIG9iamVjdCBhbmQgYXBwZW5kcyB0aGVtIHRvIHNjcm9sbGFibGUgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5QnlEdWVTdGF0dXMuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRhaW5lci5hcHBlbmQodG9kb0NvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUtZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVEaXYudGV4dENvbnRlbnQgPSBvYmplY3QudGl0bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvVGl0bGVEaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NEaXYuY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjLWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NEaXYudGV4dENvbnRlbnQgPSBvYmplY3QuZGVzYztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9EZXNjRGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGF0ZS1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlRGl2LnRleHRDb250ZW50ID0gb2JqZWN0LmR1ZURhdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvRGF0ZURpdik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EdXJhdGlvbkxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EdXJhdGlvbkxlZnREaXYuY2xhc3NMaXN0LmFkZCgndG9kby1kdXItbGVmdC1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EdXJhdGlvbkxlZnREaXYudGV4dENvbnRlbnQgPSBgJHtvYmplY3QuZHVyYXRpb25MZWZ0LmRheUxlZnR9IGRheXMsICR7b2JqZWN0LmR1cmF0aW9uTGVmdC5tb250aHNMZWZ0fSBtb250aHMgYW5kICR7b2JqZWN0LmR1cmF0aW9uTGVmdC55ZWFyc0xlZnR9IHllYXJzIGxlZnRgO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0R1cmF0aW9uTGVmdERpdik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Qcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLXByb2plY3QtZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJvamVjdERpdi50ZXh0Q29udGVudCA9IG9iamVjdC5wcm9qZWN0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb1Byb2plY3REaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHl0RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJpb3JpdHktZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHl0RGl2LnRleHRDb250ZW50ID0gb2JqZWN0LnByaW9yaXR5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb1ByaW9yaXR5dERpdik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU0VORCBUTyBBIFNFUEFSQVRFIE1PRFVMRSAtIE9QRU5TIFRPRE8gSVRFTVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWRpc3BsYXktY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZCh0b2RvRGlzcGxheUNvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGlzcGxheScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLmFwcGVuZCh0b2RvRGlzcGxheSk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnVGl0bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LXRpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUudmFsdWUgPSBvYmplY3QudGl0bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheVRpdGxlKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY1RleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LWRlc2MnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnRGVzY3JpcHRpb24nKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnY29scycsJzMwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywnMTAnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEudmFsdWUgPSBvYmplY3QuZGVzYztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rlc2NUZXh0QXJlYSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheURhdGUudmFsdWUgPSBvYmplY3QuZHVlRGF0ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheURhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lQnJlYWsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazEpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5UmVtaW5kSW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnNldEF0dHJpYnV0ZSgndHlwZScsJ251bWJlcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktcmVtaW5kLWluJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1JlbWluZCBpbiBob3cgbWFueSBkYXlzPycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnZhbHVlID0gb2JqZWN0LnJlbWluZEluO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheVJlbWluZEluKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZUJyZWFrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrMik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLG9iamVjdC5wcmlvcml0eSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnRleHRDb250ZW50ID0gb2JqZWN0LnByaW9yaXR5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheVByaW9yaXR5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgY2xhc3NlcyBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXMgKGRpZmZlcmVudCBjb2xvdXJzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPT09ICdsb3cnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID09PSAnbWVkaXVtJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPSAnaGlnaCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnSGlnaCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID09PSAnaGlnaCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID0gJ2xvdyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lQnJlYWszID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWszKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0c0Ryb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzRHJvcERvd24uc2V0QXR0cmlidXRlKCduYW1lJywncHJvamVjdC1kaXNwbGF5LWNob2ljZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWRpc3BsYXktY2hvaWNlcycpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzRHJvcERvd24uY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZChwcm9qZWN0c0Ryb3BEb3duKTtcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bnByb2Nlc3NlZFByb2plY3QgPSBwcm9qZWN0T2JqZWN0cygpLnVucHJvY2Vzc2VkUHJvamVjdEFycmF5XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnNOb2RlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zTm9kZS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24wLnRleHRDb250ZW50ID0gb2JqZWN0LnByb2plY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24wLnZhbHVlID0gb2JqZWN0LnByb2plY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLmFwcGVuZChvcHRpb24wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnByb2Nlc3NlZFByb2plY3QuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBvYmoudGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5hcHBlbmQocHJvamVjdE9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZUJyZWFrNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrNCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBsaW5lIGJyZWFrIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheVN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxvYmplY3Quc3RhdHVzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktc3RhdHVzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnRleHRDb250ZW50ID0gb2JqZWN0LnN0YXR1cztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvZG9EaXNwbGF5U3RhdHVzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGNsYXNzZXMgZm9yIGRpZmZlcmVudCBwcmlvcml0aWVzIChkaWZmZXJlbnQgY29sb3VycylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRGlzcGxheVN0YXR1cy52YWx1ZSA9PT0gJ3BlbmRpbmcnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMudmFsdWUgPSAnY29tcGxldGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy50ZXh0Q29udGVudCA9ICdDb21wbGV0ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRGlzcGxheVN0YXR1cy52YWx1ZSA9PT0gJ2NvbXBsZXRlJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnZhbHVlID0gJ3BlbmRpbmcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy50ZXh0Q29udGVudCA9ICdQZW5kaW5nJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lQnJlYWs1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWs1KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVXBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnRleHRDb250ZW50ID0gJ1VwZGF0ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvZG9VcGRhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVCcmVhazYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZWxldGUuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZWxldGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGVsZXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZWxldGUudGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0RlbGV0ZSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVG9kb0l0ZW0ob2JqZWN0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVG9kb0l0ZW0ob2JqZWN0KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGFwcGVuZFRvZG9PYmplY3RzOyIsIi8vIGltcG9ydCBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uIGZyb20gXCIuL3BvcHVsYXRlRE9NVG9kb0NvbGxlY3Rpb25cIjtcblxuaW1wb3J0IGFwcGVuZFByb2plY3RPYmplY3RzIGZyb20gXCIuL3BvcHVsYXRlRE9NUHJvamVjdENvbGxlY3Rpb25cIjtcblxuaW1wb3J0IHsgY2hhbmdlUHJvamVjdFByaW9yaXR5IH0gZnJvbSBcIi4uL2RvbUFjdGl2aXRpZXMvZG9tQWN0aXZpdGllc1wiO1xuXG5mdW5jdGlvbiBwcm9qZWN0RE9NTW9kdWxlICgpe1xuXG4gICAgY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG5cblxuXG4gICAgLy8gbW92ZSB0byBkb21BY3Rpdml0eVxuICAgIGZ1bmN0aW9uIHJlbW92ZUV4aXN0aW5nRGlzcGxheURPTSAoKXtcblxuICAgICAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktY29udGFpbmVyJyk7XG5cbiAgICAgICAgZGlzcGxheUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICB9KTtcblxuICAgIH1cblxuICAgIHJlbW92ZUV4aXN0aW5nRGlzcGxheURPTSgpO1xuXG5cbiAgICBcblxuXG4gICAgXG5cblxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgcHJvamVjdENvbnRhaW5lclRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyLXRpdGxlJyk7XG5cbiAgICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0Q29udGFpbmVyVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHRhYlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdGFiVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFiLXRpdGxlJyk7XG5cbiAgICAgICAgcHJvamVjdENvbnRhaW5lclRpdGxlLmFwcGVuZCh0YWJUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgICAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcblxuICAgICAgICAgICAgdGFiVGl0bGUuYXBwZW5kKHByb2plY3RIZWFkZXIpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgICAgIHByb2plY3RQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnWW91ciBjb2xsZWN0aW9uIG9mIFByb2plY3RzIGFyZSBkaXNwbGF5ZWQgaGVyZSc7XG5cbiAgICAgICAgICAgIHRhYlRpdGxlLmFwcGVuZChwcm9qZWN0UGFyYWdyYXBoKTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgcHJpb3JpdHlCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWJ1dHRvbnMnKTtcblxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyVGl0bGUuYXBwZW5kKHByaW9yaXR5QnV0dG9ucyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnY2hvc2VuLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9ICdIaWdoJztcblxuICAgICAgICAgICAgcHJpb3JpdHlCdXR0b25zLmFwcGVuZChoaWdoUHJpb3JpdHkpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ21lZGl1bS1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICBtZWRpdW1Qcmlvcml0eS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuXG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kKG1lZGl1bVByaW9yaXR5KTtcblxuXG4gICAgICAgICAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBsb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdsb3ctcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgcHJpb3JpdHlCdXR0b25zLmFwcGVuZChsb3dQcmlvcml0eSk7XG5cbiAgICAgICAgICAgIFxuXG5cblxuXG5cbiAgICBcbiAgICBjb25zdCBjb2xsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb2xsZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbGxlY3Rpb24tY29udGFpbmVyJyk7XG5cbiAgICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZChjb2xsZWN0aW9uQ29udGFpbmVyKTtcblxuXG4gICAgYXBwZW5kUHJvamVjdE9iamVjdHMoJ2hpZ2gnKTtcblxuICAgIGNoYW5nZVByb2plY3RQcmlvcml0eSgpO1xuICAgIFxuICAgIFxuICAgIFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RET01Nb2R1bGU7IiwiaW1wb3J0IHNvcnRpbmdNZXRob2RzIGZyb20gJy4uL2RvbUFjdGl2aXRpZXMvc29ydGluZ01ldGhvZHMnXG5cbmZ1bmN0aW9uIGFsbE5vdGVzVGFiICgpe1xuXG4gICAgY29uc3QgY2xvbmVUb2RvQXJyYXkgPSBzb3J0aW5nTWV0aG9kcy5jbG9uZU9iamVjdCgpLmNsb25lVG9kb0FycmF5O1xuXG4gICAgY29uc3Qgbm90ZXNBcnJheSA9IHNvcnRpbmdNZXRob2RzLm5vdGVTb3J0ZXIoY2xvbmVUb2RvQXJyYXkpO1xuXG4gICAgY29uc29sZS5sb2coJ05PVEVTIFRBQicpO1xuXG4gICAgY29uc29sZS5sb2cobm90ZXNBcnJheSk7XG5cbiAgICByZXR1cm4gbm90ZXNBcnJheTtcblxuXG5cbn1cblxuYWxsTm90ZXNUYWIoKTtcblxuZXhwb3J0IGRlZmF1bHQgYWxsTm90ZXNUYWI7IiwiaW1wb3J0IHNvcnRpbmdNZXRob2RzIGZyb20gJy4uL2RvbUFjdGl2aXRpZXMvc29ydGluZ01ldGhvZHMnXG5cbmZ1bmN0aW9uIHByb2plY3RzVGFiICgpe1xuXG4gICAgICAgIFxuXG4gICAgY29uc3QgdW5wcm9jZXNzZWRQcm9qZWN0QXJyYXkgPSBzb3J0aW5nTWV0aG9kcy5zb3J0QnlQcm9qZWN0TmFtZSgpLnByb2Nlc3NlZFByb2plY3RBcnJheUJ5TmFtZTtcblxuICAgIFxuXG4gICAgLy8gQWxsIHByb2plY3RzIGFyZSBzdG9yZWQgaGVyZVxuICAgIC8vIEZpcnN0IHNvcnQgdGhlIHByb2plY3RzIGJ5IHByaW9yaXR5XG4gICAgY29uc3QgcHJvamVjdHNCeVByaW9yaXR5ID0gc29ydGluZ01ldGhvZHMucHJpb3JpdHlTb3J0ZXIodW5wcm9jZXNzZWRQcm9qZWN0QXJyYXkpO1xuXG5cbiAgICBcblxuICAgIC8vIFRoZW4gc29ydCB0aGUgbm90ZXMgaW4gdGhvc2UgcHJvamVjdHMgYnkgcHJpb3JpdHlcbiAgICBmb3IgKGNvbnN0IHByaW9yaXR5TGV2ZWwgaW4gcHJvamVjdHNCeVByaW9yaXR5KSB7XG5cbiAgICAgICAgcHJvamVjdHNCeVByaW9yaXR5W3ByaW9yaXR5TGV2ZWxdLmZvckVhY2gocHJvamVjdCA9PiB7XG5cbiAgICAgICAgICAgIC8vIHNvcnQgcHJpb3JpdHkgb2YgdG9kb0NvbGxlY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHNvcnRCeVByaW9yaXR5ID0gc29ydGluZ01ldGhvZHMucHJpb3JpdHlTb3J0ZXIocHJvamVjdC50b2RvQ29sbGVjdGlvbilcblxuXG4gICAgICAgICAgICAvLyBTb3J0IHRvZG9zIGJ5IGR1ZSBkYXRlXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByaW9yaXR5IGluIHNvcnRCeVByaW9yaXR5KSB7XG5cbiAgICAgICAgICAgICAgICBzb3J0QnlQcmlvcml0eVtwcmlvcml0eV0gPSBzb3J0aW5nTWV0aG9kcy5zb3J0RHVlRGF0ZShzb3J0QnlQcmlvcml0eVtwcmlvcml0eV0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGVtcHR5IHRvZG9Db2xsZWN0aW9uXG4gICAgICAgICAgICBwcm9qZWN0LnRvZG9Db2xsZWN0aW9uID0gW107XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcga2V5IGFuZCBhdHRhY2ggdGhlIHNvcnRlZCBvYmplY3RcbiAgICAgICAgICAgIHByb2plY3QudG9kb3NCeVByaW9yaXR5ID0gc29ydEJ5UHJpb3JpdHk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cblxuICAgIC8vIFNvcnQgcHJvamVjdHMgYnkgZHVlIGRhdGVzXG4gICAgZm9yIChjb25zdCBwcmlvcml0eSBpbiBwcm9qZWN0c0J5UHJpb3JpdHkpIHtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RzQnlQcmlvcml0eVtwcmlvcml0eV0gPSBzb3J0aW5nTWV0aG9kcy5zb3J0RHVlRGF0ZShwcm9qZWN0c0J5UHJpb3JpdHlbcHJpb3JpdHldKTtcblxuICAgIH1cblxuXG5cblxuXG4gICAgY29uc29sZS5sb2coJ1BST0pFQ1RTIFRBQicpO1xuXG4gICAgY29uc29sZS5sb2cocHJvamVjdHNCeVByaW9yaXR5KTtcblxuXG4gICAgcmV0dXJuIHtwcm9qZWN0c0J5UHJpb3JpdHksdW5wcm9jZXNzZWRQcm9qZWN0QXJyYXl9O1xuXG59XG5cbnByb2plY3RzVGFiKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RzVGFiOyIsIlxuaW1wb3J0IHNvcnRpbmdNZXRob2RzIGZyb20gJy4uL2RvbUFjdGl2aXRpZXMvc29ydGluZ01ldGhvZHMnXG5cbmZ1bmN0aW9uIGFsbFRvZG9zVGFiICgpe1xuXG4gICAgY29uc3QgY2xvbmVUb2RvQXJyYXkgPSBzb3J0aW5nTWV0aG9kcy5jbG9uZU9iamVjdCgpLmNsb25lVG9kb0FycmF5O1xuICAgIGNvbnN0IHNvcnRlZFRvZG9BcnJheSA9IHNvcnRpbmdNZXRob2RzLnByaW9yaXR5U29ydGVyKGNsb25lVG9kb0FycmF5KTtcblxuICAgIGZvciAoY29uc3QgcHJpb3JpdHkgaW4gc29ydGVkVG9kb0FycmF5KSB7XG4gICAgICAgIFxuICAgICAgICBzb3J0ZWRUb2RvQXJyYXlbcHJpb3JpdHldID0gc29ydGluZ01ldGhvZHMuc29ydER1ZURhdGUoc29ydGVkVG9kb0FycmF5W3ByaW9yaXR5XSk7XG5cbiAgICB9XG5cblxuICAgIGNvbnNvbGUubG9nKHNvcnRlZFRvZG9BcnJheSk7XG5cbiAgICByZXR1cm4gc29ydGVkVG9kb0FycmF5O1xuXG5cbn1cblxuY29uc29sZS5sb2coJ1RPRE8gVEFCJyk7XG5hbGxUb2Rvc1RhYigpO1xuXG5leHBvcnQgZGVmYXVsdCBhbGxUb2Rvc1RhYjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgY3JlYXRlTWFpbkRPTSBmcm9tIFwiLi9kb21DcmVhdGlvbi9tYWluRE9NQ3JlYXRpb25cIjtcblxuaW1wb3J0IGRvbUFjdGlvbiBmcm9tIFwiLi9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXNcIjtcblxuaW1wb3J0IGNyZWF0ZVRvZG9ET00gZnJvbSBcIi4vZG9tQ3JlYXRpb24vYWxsVG9kb0RPTUNyZWF0aW9uXCJcblxuXG5cblxuLy8gQWxsIG1vZHVsZXMgc2hvdWxkIHN0YXJ0IGhlcmVcblxuLy8gSE9NRVBBR0VcbmNyZWF0ZU1haW5ET00oKTtcblxuLy8gQXR0YWNoZXMgYWxsIGV2ZW50bGlzdGVuZXJzIHRvIEhPTUVQQUdFXG5kb21BY3Rpb24oKTtcblxuLy8gTG9hZHMgdG9kbyBmaXJzdFxuY3JlYXRlVG9kb0RPTSgpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==