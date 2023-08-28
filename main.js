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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBaUU7O0FBRWpFOztBQUVBLDZDQUE2QztBQUM3QyxnQ0FBZ0M7QUFDaEMseUJBQXlCO0FBQ3pCOztBQUVBLHNCQUFzQjtBQUN0QiwwQkFBMEI7QUFDMUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFRQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsUUFBUSxVQUFVLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsUUFBUSxLQUFLLFlBQVksV0FBVyxzQkFBc0IsT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsV0FBVyxXQUFXLGFBQWEsT0FBTyxRQUFRLFdBQVcsTUFBTSxVQUFVLFlBQVksYUFBYSxjQUFjLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLFlBQVksT0FBTyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGVBQWUsY0FBYyxjQUFjLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxlQUFlLE9BQU8sT0FBTyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxTQUFTLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsWUFBWSxRQUFRLE1BQU0sVUFBVSxZQUFZLDBCQUEwQixjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLEtBQUssVUFBVSxVQUFVLFlBQVksWUFBWSxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsYUFBYSxPQUFPLFNBQVMsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsY0FBYyxjQUFjLFFBQVEsTUFBTSxVQUFVLFVBQVUsWUFBWSx5QkFBeUIsWUFBWSxhQUFhLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxjQUFjLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLFVBQVUsYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxjQUFjLE9BQU8sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFFBQVEsYUFBYSxRQUFRLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxRQUFRLFVBQVUsU0FBUyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFB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QUFFOUI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUEsUUFBUSxzRkFBb0I7O0FBRTVCO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBLFFBQVEsc0ZBQW9COztBQUU1QjtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBLFFBQVEsc0ZBQW9COztBQUU1QjtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFVOztBQUVsQjs7QUFFQTs7QUFFQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOzs7O0FBSVQ7Ozs7OztBQU1BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBVTs7QUFFbEI7O0FBRUE7O0FBRUEsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7OztBQUlUOzs7Ozs7Ozs7O0FBVUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsUUFBUSx1REFBYTs7QUFFckI7O0FB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OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsaUNBQWlDOzs7QUFHakM7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7OztBQUdBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLGlDQUFpQzs7O0FBR2pDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQSx1REFBdUQsc0VBQWM7OztBQUdyRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQzs7QUFFckM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxpQ0FBaUM7O0FBRWpDOztBQUVBOzs7QUFHQTs7OztB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QUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLDZEQUE2RDs7OztBQUk3RDs7QUFFQTs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLDZEQUE2RDs7QUFFN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlEQUF5RDs7QUFFekQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0YsK0JBQStCO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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RUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxpREFBaUQ7O0FBRWpEO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBLG1GQUFtRixzRUFBYzs7QUFFakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDs7OztBQUl6RDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxpREFBaUQ7O0FBRWpEO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBLGdEQUFnRCw0RUFBYzs7QUFFOUQsZ0RBQWdELDRFQUFjOzs7QUFHOUQ7QUFDQTtBQUNBLHFDQUFxQzs7QUFFckMsaUNBQWlDO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwYmhDOztBQUVrRTs7QUFFSzs7QUFFdkU7O0FBRUE7Ozs7O0FBS0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7O0FBR0E7OztBQUdBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7QUFNQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQSxJQUFJLHlFQUFvQjs7QUFFeEIsSUFBSSxtRkFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7O0FDdEg2Qjs7QUFFNUQ7O0FBRUEsMkJBQTJCLHFFQUFjOztBQUV6Qyx1QkFBdUIscUVBQWM7O0FBRXJDOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJrQzs7QUFFNUQ7O0FBRUE7O0FBRUEsb0NBQW9DLHFFQUFjOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLHFFQUFjOzs7QUFHN0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1DQUFtQyxxRUFBYzs7O0FBR2pEO0FBQ0E7O0FBRUEsMkNBQTJDLHFFQUFjOztBQUV6RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFFQUFjOztBQUVyRDs7Ozs7O0FBTUE7O0FBRUE7OztBQUdBLFlBQVk7O0FBRVo7O0FBRUE7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFa0M7O0FBRTVEOztBQUVBLDJCQUEyQixxRUFBYztBQUN6Qyw0QkFBNEIscUVBQWM7O0FBRTFDO0FBQ0E7QUFDQSxvQ0FBb0MscUVBQWM7O0FBRWxEOzs7QUFHQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7VUN6QjFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7O0FBRXFDOztBQUVKOztBQUVNOzs7OztBQUs1RDs7QUFFQTtBQUNBLHdFQUFhOztBQUViO0FBQ0Esd0VBQVM7O0FBRVQ7QUFDQSwyRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVRvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUFjdGl2aXRpZXMvc29ydGluZ01ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL2FsbE5vdGVzRE9NQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL2FsbFRvZG9ET01DcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tQ3JlYXRpb24vZm9ybURPTUNyZWF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21DcmVhdGlvbi9tYWluRE9NQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL3BvcHVsYXRlRE9NTm90ZUNvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL3BvcHVsYXRlRE9NUHJvamVjdENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL3BvcHVsYXRlRE9NVG9kb0NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL3Byb2plY3RzRE9NQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RhYk9iamVjdHMvYWxsTm90ZXNUYWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RhYk9iamVjdHMvYWxsUHJvamVjdHNUYWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RhYk9iamVjdHMvYWxsVG9kb3NUYWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuXG5cblxuLm1haW4tY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmciA0MHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJ0b3AtY29udGFpbmVyIHRvcC1jb250YWluZXJcIiBcbiAgICBcIm5vdGUtbWVudSBkaXNwbGF5LWNvbnRhaW5lclwiXG4gICAgXCJ0b2RvLWNvbnRhaW5lci1mb290ZXIgdG9kby1jb250YWluZXItZm9vdGVyXCI7XG5cbiAgICBcblxufVxuXG5cbi5ub3RlLW1lbnV7XG4gICAgZ3JpZC1hcmVhOiBub3RlLW1lbnU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcbn1cblxuLm5vdGUtbWVudSA+IGRpdiA+IGgxIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG5cbi50b3AtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgZ3JpZC1hcmVhOiB0b3AtY29udGFpbmVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmlvbGV0O1xufVxuXG4udG9wLWNvbnRhaW5lci1zcGFjaW5nIHtcbiAgICBmbGV4OiAxO1xufVxuXG4uYnJhbmQtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgICB3aWR0aDogMjUwcHg7XG59XG5cblxuLmhhbWJ1cmdlci1tZW51IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0ZWFsO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qZGlzcGxheTogYmxvY2sgd2hlbiBkaXNwbGF5IGlzIGJlbG93IDYwMHB4ICovIFxufVxuXG4uZGlzcGxheS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgZ3JpZC1hcmVhOiBkaXNwbGF5LWNvbnRhaW5lcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcblxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgIFwidG9kby1jb250YWluZXItdGl0bGVcIlxuICAgIFwiY29sbGVjdGlvbi1jb250YWluZXJcIjtcblxufVxuXG5cblxuXG5cbi50b2RvLWNvbnRhaW5lci10aXRsZXtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiB0b2RvLWNvbnRhaW5lci10aXRsZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWJsdWU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIFxufVxuLnByaW9yaXR5LWJ1dHRvbnN7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcblxufVxuXG4ucHJpb3JpdHktYnV0dG9ucyA+IGJ1dHRvbntcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5jaG9zZW4tcHJpb3JpdHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xufVxuXG4udGFiLXRpdGxle1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4udG9kby1jb250YWluZXItZm9vdGVye1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IHRvZG8tY29udGFpbmVyLWZvb3RlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWJsdWU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLyogVGhpcyBpcyB0aGUgdHJpY2t5IHBhcnQgKi9cbi5jb2xsZWN0aW9uLWNvbnRhaW5lcntcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC1hcmVhOiBjb2xsZWN0aW9uLWNvbnRhaW5lcjtcbiAgICBcblxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LDFmcikpOyAqL1xuXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcblxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDM1MHB4KTsgKi9cbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjsgKi9cbiAgICAvKiBvdmVyZmxvdy15OiBhdXRvOyAqL1xuICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cbiAgICAvKiBvYmplY3QtZml0OiBjb3ZlcjsgKi9cbiAgICBcblxufVxuXG4vKiAudmVydGljYWwtc2Nyb2xse1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsdWU7XG59ICovXG5cbi5zdGF0dXMtY29udGFpbmVye1xuXG4gICAgYm9yZGVyOiAycHggc29saWQgZnVjaHNpYTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBoZWlnaHQ6IDM1MHB4O1xuXG59XG5cblxuXG5cblxuLm92ZXJkdWUtY29udGFpbmVyLFxuLmR1ZS1zb29uLWNvbnRhaW5lcixcbi51cGNvbWluZy1jb250YWluZXIsXG4uY29tcGxldGUtY29udGFpbmVye1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCBnb2xkO1xuICAgIGhlaWdodDogMzIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5kaWdvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XG4gICAgXG4gICAgb3ZlcmZsb3c6IGF1dG87XG5cbn1cblxuXG4uc2Nyb2xsYWJsZS1jb250YWluZXJ7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGNvbHVtbi1nYXA6IDEwcHg7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjsgLypUaGlzIHdhcyB3aGF0IGkgd2FudGVkIHRvIGRvKi9cbiAgICBcbiAgICBib3JkZXI6IDRweCBzb2xpZCBicm93bjtcblxufVxuXG4udG9kby1jb250YWluZXJ7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMjIwcHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgcGluaztcbiAgICBcbn1cblxuLnRvZG8tZGlzcGxheS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjAsIDE0NSwgMC40NzMpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDI7XG59XG5cbi50b2RvLWRpc3BsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbn1cblxuXG5cblxuXG5cbi5wcm9qZWN0LWNvbnRhaW5lcntcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCBwaW5rO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIFxufVxuXG5cblxuXG4ucHJvamVjdC10b2RvLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE4LCAxMTIsIDIxNCwgMC41ODIpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMjtcbn1cblxuLnByb2plY3QtZGV0YWlsc3tcblxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGRhcmtvcmFuZ2U7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogNzAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xuICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xufVxuXG4ucHJvamVjdC10b2Rvc3tcblxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGN5YW47XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVibHVlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuXG59XG5cbi50b2RvLXN0YXR1cy1jb250YWluZXJ7XG5cbiAgICBib3JkZXI6IDJweCBzb2xpZCBmdWNoc2lhO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC8qIGhlaWdodDogMzUwcHg7ICovXG5cbn1cblxuLm92ZXJkdWUtdG9kb3MsXG4uZHVlLXNvb24tdG9kb3MsXG4udXBjb21pbmctdG9kb3MsXG4uY29tcGxldGUtdG9kb3N7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIGdvbGQ7XG4gICAgLyogaGVpZ2h0OiAzMjBweDsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTYsIDU2LCAyNTUpO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXG5cbn1cblxuXG4uc2Nyb2xsYWJsZS10b2RvLWNvbnRhaW5lcntcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcm93LWdhcDogMTBweDtcbiAgICAvKiBoZWlnaHQ6IDQwMHB4OyAqL1xuICAgIGdyaWQtYXV0by1mbG93OiByb3c7IC8qVGhpcyB3YXMgd2hhdCBpIHdhbnRlZCB0byBkbyovXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJyb3duO1xuXG59XG5cblxuXG5cblxuXG5cbi5ub3Rlcy1jb2xsZWN0aW9ue1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCBnb2xkO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBnYXA6IDE1cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsMWZyKSk7IFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJyb3duO1xuXG59XG5cblxuLm5vdGVzLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHBpbms7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgXG59XG5cblxuXG5cbi8qIEZPUk0gQlVUVE9OICovXG5cbi5mb3JtLWJ1dHRvbi1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNTBweDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgMCUgMCUgNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbn1cblxuLmZvcm0tYnV0dG9ue1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4vKiBUT0RPIENSRUFUSU9OIEZPUk0gKi9cblxuXG4uZm9ybS1jb250YWluZXJ7XG5cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MjcpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbn1cblxuLnNob3ctZm9ybXtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4udG9kby1jcmVhdGlvbi1mb3JtIHtcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIC8qIGhlaWdodDogNzAwcHg7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xuICAgIFxufVxuXG4uY3JlYXRlLW5ldy10b2Rve1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGZvcmVzdGdyZWVuO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zZWxlY3QtZXhpc3RpbmctcHJvamVjdHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBza3libHVlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jcmVhdGUtbmV3LXByb2plY3R7XG4gICAgYm9yZGVyOiAzcHggc29saWQgY3JpbXNvbjtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uZGlzcGxheS1mb3JtLWl0ZW1ze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cblxuLyogTW9iaWxlIHZlcnNpb24gKi9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBcblxuICAgIC5oYW1idXJnZXItbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAxZnIgNDBweDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzAwcHg7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICBcInRvcC1jb250YWluZXIgdG9wLWNvbnRhaW5lclwiIFxuICAgICAgICBcImRpc3BsYXktY29udGFpbmVyIGRpc3BsYXktY29udGFpbmVyXCJcbiAgICAgICAgXCJ0b2RvLWNvbnRhaW5lci1mb290ZXIgdG9kby1jb250YWluZXItZm9vdGVyXCI7XG4gICAgXG4gICAgXG4gICAgXG4gICAgfVxuXG4gICAgXG5cbiAgICAubm90ZS1tZW51IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xuICAgICAgICBncmlkLXJvdzogMi8zO1xuICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgICAgICAvKiBoZWlnaHQ6IDkwJTsgKi9cbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIC5tZW51LWFjdGl2ZSB7IC8qdHJpZ2dlcnMgd2hlbiBoYW1idXJnZXIgbWVudSBpcyBjbGlja2VkKi9cbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7QUFDaEI7Ozs7O0FBS0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lB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QUFtQjs7QUFFbkI7OztJQUdJO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IsaUNBQWlDO1FBQ2pDLGdDQUFnQztRQUNoQzs7O3FEQUc2Qzs7OztJQUlqRDs7OztJQUlBO1FBQ0ksa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixZQUFZO1FBQ1osVUFBVTtJQUNkOztJQUVBLGVBQWUsMENBQTBDO1FBQ3JELGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuXFxuXFxuLm1haW4tY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmciA0MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwidG9wLWNvbnRhaW5lciB0b3AtY29udGFpbmVyXFxcIiBcXG4gICAgXFxcIm5vdGUtbWVudSBkaXNwbGF5LWNvbnRhaW5lclxcXCJcXG4gICAgXFxcInRvZG8tY29udGFpbmVyLWZvb3RlciB0b2RvLWNvbnRhaW5lci1mb290ZXJcXFwiO1xcblxcbiAgICBcXG5cXG59XFxuXFxuXFxuLm5vdGUtbWVudXtcXG4gICAgZ3JpZC1hcmVhOiBub3RlLW1lbnU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xcbn1cXG5cXG4ubm90ZS1tZW51ID4gZGl2ID4gaDEge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuXFxuLnRvcC1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIGdyaWQtYXJlYTogdG9wLWNvbnRhaW5lcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmlvbGV0O1xcbn1cXG5cXG4udG9wLWNvbnRhaW5lci1zcGFjaW5nIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmJyYW5kLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgICB3aWR0aDogMjUwcHg7XFxufVxcblxcblxcbi5oYW1idXJnZXItbWVudSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRlYWw7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBkaXNwbGF5OiBub25lOyAvKmRpc3BsYXk6IGJsb2NrIHdoZW4gZGlzcGxheSBpcyBiZWxvdyA2MDBweCAqLyBcXG59XFxuXFxuLmRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBncmlkLWFyZWE6IGRpc3BsYXktY29udGFpbmVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwidG9kby1jb250YWluZXItdGl0bGVcXFwiXFxuICAgIFxcXCJjb2xsZWN0aW9uLWNvbnRhaW5lclxcXCI7XFxuXFxufVxcblxcblxcblxcblxcblxcbi50b2RvLWNvbnRhaW5lci10aXRsZXtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiB0b2RvLWNvbnRhaW5lci10aXRsZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVibHVlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIFxcbn1cXG4ucHJpb3JpdHktYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG5cXG59XFxuXFxuLnByaW9yaXR5LWJ1dHRvbnMgPiBidXR0b257XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLmNob3Nlbi1wcmlvcml0eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xcbn1cXG5cXG4udGFiLXRpdGxle1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lci1mb290ZXJ7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogdG9kby1jb250YWluZXItZm9vdGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWJsdWU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLyogVGhpcyBpcyB0aGUgdHJpY2t5IHBhcnQgKi9cXG4uY29sbGVjdGlvbi1jb250YWluZXJ7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtYXJlYTogY29sbGVjdGlvbi1jb250YWluZXI7XFxuICAgIFxcblxcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNTBweCwxZnIpKTsgKi9cXG5cXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG5cXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMzUwcHgpOyAqL1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjsgKi9cXG4gICAgLyogb3ZlcmZsb3cteTogYXV0bzsgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxuICAgIC8qIG9iamVjdC1maXQ6IGNvdmVyOyAqL1xcbiAgICBcXG5cXG59XFxuXFxuLyogLnZlcnRpY2FsLXNjcm9sbHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsdWU7XFxufSAqL1xcblxcbi5zdGF0dXMtY29udGFpbmVye1xcblxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBmdWNoc2lhO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG5cXG59XFxuXFxuXFxuXFxuXFxuXFxuLm92ZXJkdWUtY29udGFpbmVyLFxcbi5kdWUtc29vbi1jb250YWluZXIsXFxuLnVwY29taW5nLWNvbnRhaW5lcixcXG4uY29tcGxldGUtY29udGFpbmVye1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBnb2xkO1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5kaWdvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcblxcbn1cXG5cXG5cXG4uc2Nyb2xsYWJsZS1jb250YWluZXJ7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47IC8qVGhpcyB3YXMgd2hhdCBpIHdhbnRlZCB0byBkbyovXFxuICAgIFxcbiAgICBib3JkZXI6IDRweCBzb2xpZCBicm93bjtcXG5cXG59XFxuXFxuLnRvZG8tY29udGFpbmVye1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMjIwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHBpbms7XFxuICAgIFxcbn1cXG5cXG4udG9kby1kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIwLCAxNDUsIDAuNDczKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4udG9kby1kaXNwbGF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxufVxcblxcblxcblxcblxcblxcblxcbi5wcm9qZWN0LWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBwaW5rO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgXFxufVxcblxcblxcblxcblxcbi5wcm9qZWN0LXRvZG8tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxOCwgMTEyLCAyMTQsIDAuNTgyKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxze1xcblxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBkYXJrb3JhbmdlO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogNzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcXG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXFxufVxcblxcbi5wcm9qZWN0LXRvZG9ze1xcblxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBjeWFuO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlYmx1ZTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxufVxcblxcbi50b2RvLXN0YXR1cy1jb250YWluZXJ7XFxuXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGZ1Y2hzaWE7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAvKiBoZWlnaHQ6IDM1MHB4OyAqL1xcblxcbn1cXG5cXG4ub3ZlcmR1ZS10b2RvcyxcXG4uZHVlLXNvb24tdG9kb3MsXFxuLnVwY29taW5nLXRvZG9zLFxcbi5jb21wbGV0ZS10b2Rvc3tcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgZ29sZDtcXG4gICAgLyogaGVpZ2h0OiAzMjBweDsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNTYsIDI1NSk7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXFxuXFxufVxcblxcblxcbi5zY3JvbGxhYmxlLXRvZG8tY29udGFpbmVye1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICByb3ctZ2FwOiAxMHB4O1xcbiAgICAvKiBoZWlnaHQ6IDQwMHB4OyAqL1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93OyAvKlRoaXMgd2FzIHdoYXQgaSB3YW50ZWQgdG8gZG8qL1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIFxcbiAgICBib3JkZXI6IDRweCBzb2xpZCBicm93bjtcXG5cXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLm5vdGVzLWNvbGxlY3Rpb257XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGdvbGQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluZGlnbztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGdhcDogMTVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsMWZyKSk7IFxcbiAgICBib3JkZXI6IDRweCBzb2xpZCBicm93bjtcXG5cXG59XFxuXFxuXFxuLm5vdGVzLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHBpbms7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuXFxuLyogRk9STSBCVVRUT04gKi9cXG5cXG4uZm9ybS1idXR0b24tY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogNTBweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDAlIDAlIDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLmZvcm0tYnV0dG9ue1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLyogVE9ETyBDUkVBVElPTiBGT1JNICovXFxuXFxuXFxuLmZvcm0tY29udGFpbmVye1xcblxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MjcpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcblxcbn1cXG5cXG4uc2hvdy1mb3Jte1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4udG9kby1jcmVhdGlvbi1mb3JtIHtcXG4gICAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIC8qIGhlaWdodDogNzAwcHg7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcXG4gICAgXFxufVxcblxcbi5jcmVhdGUtbmV3LXRvZG97XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGZvcmVzdGdyZWVuO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VsZWN0LWV4aXN0aW5nLXByb2plY3R7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHNreWJsdWU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jcmVhdGUtbmV3LXByb2plY3R7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGNyaW1zb247XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kaXNwbGF5LWZvcm0taXRlbXN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcblxcbi8qIE1vYmlsZSB2ZXJzaW9uICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgXFxuXFxuICAgIC5oYW1idXJnZXItbWVudSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbiAgICAubWFpbi1jb250YWluZXIge1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyIDQwcHg7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzMDBweDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgXFxcInRvcC1jb250YWluZXIgdG9wLWNvbnRhaW5lclxcXCIgXFxuICAgICAgICBcXFwiZGlzcGxheS1jb250YWluZXIgZGlzcGxheS1jb250YWluZXJcXFwiXFxuICAgICAgICBcXFwidG9kby1jb250YWluZXItZm9vdGVyIHRvZG8tY29udGFpbmVyLWZvb3RlclxcXCI7XFxuICAgIFxcbiAgICBcXG4gICAgXFxuICAgIH1cXG5cXG4gICAgXFxuXFxuICAgIC5ub3RlLW1lbnUge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICAgICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgICAgICAvKiBoZWlnaHQ6IDkwJTsgKi9cXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB3aWR0aDogMTUwcHg7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgIC5tZW51LWFjdGl2ZSB7IC8qdHJpZ2dlcnMgd2hlbiBoYW1idXJnZXIgbWVudSBpcyBjbGlja2VkKi9cXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB0b2RvTW9kdWxlIGZyb20gXCIuL2NyZWF0ZVRvZG9zXCI7XG5cblxuXG5mdW5jdGlvbiBwcm9qZWN0TW9kdWxlICgpIHtcblxuICAgIC8vIEZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIHByb2plY3RzXG4gICAgZnVuY3Rpb24gcHJvamVjdEZhY3RvcnkgKHRpdGxlLGRlc2MsZHVlRGF0ZSxwcmlvcml0eSxyZW1pbmRJbixzdGF0dXMpe1xuXG5cbiAgICAgICAgcmV0dXJuIHt0aXRsZSxkZXNjLGR1ZURhdGUscHJpb3JpdHkscmVtaW5kSW4sc3RhdHVzfVxuICAgIH1cblxuXG4gICAgLy8gVGhpcyBpcyB3aGVyZSB1bnNvcnRlZCBwcm9qZWN0IGFycmF5cyBhcmUgc3RvcmVkXG4gICAgY29uc3QgcHJvamVjdEFycmF5ID0gW107XG5cblxuXG4gICAgZnVuY3Rpb24gZ2V0U3RvcmVkUHJvamVjdHMgKCl7XG5cbiAgICAgICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkUHJvamVjdHMnKTtcblxuICAgICAgICBpZighc3RvcmVkUHJvamVjdHMpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlU3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKHN0b3JlZFByb2plY3RzKTtcblxuICAgICAgICBwYXJzZVN0b3JlZFByb2plY3RzLmZvckVhY2gocHJvamVjdHMgPT4ge1xuICAgICAgICAgICAgcHJvamVjdEFycmF5LnB1c2gocHJvamVjdHMpXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy8gZ2V0IHN0b3JlZCBwcm9qZWN0cyBvbiBib290XG4gICAgZ2V0U3RvcmVkUHJvamVjdHMoKTtcblxuICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzdG9yZWRQcm9qZWN0cycpO1xuXG5cbiAgICBcblxuICAgIGZ1bmN0aW9uIGxvY2FsU3RvcmFnZVVwZGF0ZSgpe1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdTRVQgTE9DQUwgU1RPUkFHRScpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZWRQcm9qZWN0cycsSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KSk7XG5cbiAgICB9XG5cblxuXG5cblxuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0ICh0aXRsZSxkZXNjLGR1ZURhdGUscHJpb3JpdHkscmVtaW5kSW4sc3RhdHVzKXtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHRpdGxlLGRlc2MsZHVlRGF0ZSxwcmlvcml0eSxyZW1pbmRJbixzdGF0dXMpOyAvL2NoYW5nZSB0aGlzIGxhdGVyIGlmIHlvdSBuZWVkIHRvXG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICBsb2NhbFN0b3JhZ2VVcGRhdGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgLy8gOCBoaWdoIHByaW9yaXR5XG5cbiAgICAvLyBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAvLyBjb25zdCBkYXkgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XG5cbiAgICAvLyBjb25zdCBtb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG5cbiAgICAvLyBjb25zdCB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcblxuICAgIC8vIGxldCByZW1pbmQgPSAtMjtcblxuICAgIC8vIGxldCByZW1pbmQxID0gMDtcblxuICAgIC8vIGZvciAobGV0IGluZGV4ID0gNDsgaW5kZXggPiAwOyBpbmRleC0tKSB7XG5cbiAgICAgICAgXG5cbiAgICAvLyAgICAgY3JlYXRlUHJvamVjdChgcHJvamVjdCR7aW5kZXh9dGVzdGAsYGRlc2Mke2luZGV4fWAsYCR7eWVhciArIHJlbWluZH0tJHttb250aCArIHJlbWluZH0tJHtkYXkgKyByZW1pbmR9YCxgaGlnaGAscmVtaW5kLCdjb21wbGV0ZScpO1xuXG4gICAgLy8gICAgIGNyZWF0ZVByb2plY3QoYHByb2plY3Qke2luZGV4fXRlc3QyYCxgZGVzYyR7aW5kZXh9YCxgJHt5ZWFyICsgcmVtaW5kfS0ke21vbnRoICsgcmVtaW5kfS0ke2RheSArIHJlbWluZH1gLGBoaWdoYCxyZW1pbmQraW5kZXgsJ3BlbmRpbmcnKTtcblxuICAgIC8vICAgICByZW1pbmQgPSByZW1pbmQgKyBpbmRleDtcblxuICAgICAgICBcbiAgICAvLyB9XG5cblxuICAgIC8vIC8vIDEwIGxvdyBwcmlvcml0eVxuICAgIC8vIGZvciAobGV0IGluZGV4ID0gNjsgaW5kZXggPiAwOyBpbmRleC0tKSB7XG5cbiAgICAgICAgXG5cbiAgICAvLyAgICAgY3JlYXRlUHJvamVjdChgcHJvamVjdCAke2luZGV4fWAsYGRlc2Mke2luZGV4fWAsYCR7eWVhciArIHJlbWluZDF9LSR7bW9udGggKyByZW1pbmQxfS0ke2RheSArIHJlbWluZDF9YCxgbG93YCxyZW1pbmQxLCdjb21wbGV0ZScpO1xuICAgIC8vICAgICBjcmVhdGVQcm9qZWN0KGBwcm9qZWN0JHtpbmRleH13d2AsYGRlc2Mke2luZGV4fWAsYCR7eWVhciArIHJlbWluZDF9LSR7bW9udGggKyByZW1pbmQxfS0ke2RheSAtIHJlbWluZDF9YCxgbG93YCxyZW1pbmQxLCdwZW5kaW5nJyk7XG4gICAgLy8gICAgIGNyZWF0ZVByb2plY3QoYHByb2plY3Qke2luZGV4fXVwYCxgZGVzYyR7aW5kZXh9YCxgJHt5ZWFyICsgcmVtaW5kMX0tJHttb250aCArIHJlbWluZDF9LSR7ZGF5ICsgcmVtaW5kMX1gLGBsb3dgLHJlbWluZDEtMSwncGVuZGluZycpO1xuICAgICAgICBcbiAgICAvLyAgICAgcmVtaW5kMSA9IHJlbWluZDEgLSBpbmRleDtcbiAgICAvLyB9XG5cblxuXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0IChvbGREZXRhaWxzLG5ld0RldGFpbHMpe1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdDSEFOR0UgV09SS1MhJylcblxuICAgICAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChwcm9qZWN0ID0+IHtcblxuXG4gICAgICAgICAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gb2xkRGV0YWlscy50aXRsZSAmJiBcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmRlc2MgPT09IG9sZERldGFpbHMuZGVzYyAmJiBcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmR1ZURhdGUgPT09IG9sZERldGFpbHMuZHVlRGF0ZSAmJiBcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnJlbWluZEluID09PSBvbGREZXRhaWxzLnJlbWluZEluICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3QucHJpb3JpdHkgPT09IG9sZERldGFpbHMucHJpb3JpdHkgJiYgXG4gICAgICAgICAgICAgICAgcHJvamVjdC5zdGF0dXMgPT09IG9sZERldGFpbHMuc3RhdHVzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NIQU5HRSBXT1JLUyEnKVxuXG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0LnRpdGxlID0gbmV3RGV0YWlscy5uZXdUaXRsZTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmRlc2MgPSBuZXdEZXRhaWxzLm5ld0Rlc2M7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5kdWVEYXRlID0gbmV3RGV0YWlscy5uZXdEdWU7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5yZW1pbmRJbiA9IG5ld0RldGFpbHMubmV3UmVtaW5kZXI7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5wcmlvcml0eSA9IG5ld0RldGFpbHMubmV3UHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5zdGF0dXMgPSBuZXdEZXRhaWxzLm5ld1N0YXR1cztcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2VVcGRhdGUoKTtcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdCAob2xkRGV0YWlscyl7XG5cbiAgICAgICAgdG9kb01vZHVsZS5kZWxldGVUb2RvT2ZQcm9qZWN0KG9sZERldGFpbHMpO1xuXG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHByb2plY3RBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblxuXG4gICAgICAgICAgICBpZiAocHJvamVjdEFycmF5W2luZGV4XS50aXRsZSA9PT0gb2xkRGV0YWlscy50aXRsZSAmJiBcbiAgICAgICAgICAgICAgICBwcm9qZWN0QXJyYXlbaW5kZXhdLmRlc2MgPT09IG9sZERldGFpbHMuZGVzYyAmJiBcbiAgICAgICAgICAgICAgICBwcm9qZWN0QXJyYXlbaW5kZXhdLmR1ZURhdGUgPT09IG9sZERldGFpbHMuZHVlRGF0ZSAmJiBcbiAgICAgICAgICAgICAgICBwcm9qZWN0QXJyYXlbaW5kZXhdLnJlbWluZEluID09PSBvbGREZXRhaWxzLnJlbWluZEluICYmIFxuICAgICAgICAgICAgICAgIHByb2plY3RBcnJheVtpbmRleF0ucHJpb3JpdHkgPT09IG9sZERldGFpbHMucHJpb3JpdHkgJiYgXG4gICAgICAgICAgICAgICAgcHJvamVjdEFycmF5W2luZGV4XS5zdGF0dXMgPT09IG9sZERldGFpbHMuc3RhdHVzKSB7XG5cblxuICAgICAgICAgICAgICAgIHByb2plY3RBcnJheS5zcGxpY2UoaW5kZXgsMSlcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2VVcGRhdGUoKTtcblxuICAgIH1cblxuIFxuXG4gICAgcmV0dXJuIHtwcm9qZWN0QXJyYXksY3JlYXRlUHJvamVjdCx1cGRhdGVQcm9qZWN0LGRlbGV0ZVByb2plY3R9O1xuXG59XG5cbmNvbnN0IGluaXRpYWxpemVkUHJvamVjdE1vZHVsZSA9IHByb2plY3RNb2R1bGUoKTtcblxuICAgXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplZFByb2plY3RNb2R1bGU7IiwiXG5cbmZ1bmN0aW9uIHRvZG9Nb2R1bGUgKCl7XG5cbiAgICAvLyBGYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBub3Rlc1xuXG4gICAgZnVuY3Rpb24gdG9kb0ZhY3RvcnkgKHRpdGxlLGRlc2MsZHVlRGF0ZSxyZW1pbmRJbixwcmlvcml0eSxzdGF0dXMscHJvamVjdCl7XG5cbiAgICAgICAgLy8gdG9kb1xuICAgICAgICBpZihkdWVEYXRlKXtcbiAgICAgICAgICAgIHJldHVybiB7dGl0bGUsZGVzYyxkdWVEYXRlLHJlbWluZEluLHByaW9yaXR5LHN0YXR1cyxwcm9qZWN0fVxuICAgICAgICB9XG4gICAgICAgIC8vIG5vdGVcbiAgICAgICAgaWYoIWR1ZURhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIHt0aXRsZSxkZXNjfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBUaGlzIGlzIHdoZXJlIHVuc29ydGVkIHRvZG8gYXJyYXlzIGFyZSBzdG9yZWRcbiAgICBjb25zdCB0b2RvQXJyYXkgPSBbXTtcblxuICAgIFxuICAgIGZ1bmN0aW9uIGdldFN0b3JlZFRvZG9zICgpe1xuXG4gICAgICAgIGNvbnN0IHN0b3JlZFRvZG9zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlZFRvZG9zJyk7XG5cbiAgICAgICAgaWYoIXN0b3JlZFRvZG9zKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZVN0b3JlZFRvZG9zID0gSlNPTi5wYXJzZShzdG9yZWRUb2Rvcyk7XG5cbiAgICAgICAgcGFyc2VTdG9yZWRUb2Rvcy5mb3JFYWNoKHRvZG9zID0+IHtcbiAgICAgICAgICAgIHRvZG9BcnJheS5wdXNoKHRvZG9zKVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8vIGdldCBzdG9yZWQgdG9kb3Mgb24gYm9vdFxuICAgIGdldFN0b3JlZFRvZG9zKCk7XG5cblxuXG5cbiAgICBmdW5jdGlvbiBsb2NhbFN0b3JhZ2VVcGRhdGUoKXtcblxuICAgICAgICBjb25zb2xlLmxvZygnU0VUIExPQ0FMIFNUT1JBR0UnKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkVG9kb3MnLEpTT04uc3RyaW5naWZ5KHRvZG9BcnJheSkpO1xuXG4gICAgfVxuXG5cbiAgICAvLyB0aGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdXNlZCB0byBjcmVhdGUgVG9kb3NcbiAgICBmdW5jdGlvbiBjcmVhdGVUb2RvICh0aXRsZSxkZXNjLGR1ZURhdGUscmVtaW5kSW4scHJpb3JpdHksc3RhdHVzLHByb2plY3Qpe1xuICAgICAgICBjb25zdCBuZXdUb0RvID0gdG9kb0ZhY3RvcnkodGl0bGUsZGVzYyxkdWVEYXRlLHJlbWluZEluLHByaW9yaXR5LHN0YXR1cyxwcm9qZWN0KTtcbiAgICAgICAgdG9kb0FycmF5LnB1c2gobmV3VG9Ebyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICAvLyBUaGlzIG11c3QgYmUgZGVsZXRlZCBsYXRlciBhcyBpdCBpcyBjcmVhdGVkIHByaW1hcmlseSBmb3IgdGVzdGluZ1xuXG4gICAgLy8gY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgLy8gY29uc3QgZGF5ID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgLy8gY29uc3QgbW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuXG4gICAgLy8gY29uc3QgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG5cblxuICAgIC8vIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPD0gMTA7IGluZGV4KyspIHtcblxuICAgIC8vICAgICBjcmVhdGVUb2RvKGB0aXRsZSR7aW5kZXh9YCxgZGVzYyR7aW5kZXh9YCxgJHt5ZWFyICsgaW5kZXh9LSR7bW9udGggKyBpbmRleH0tJHtkYXkgKyBpbmRleH1gLGluZGV4LGBoaWdoYCxgcGVuZGluZ2AsJ3Byb2plY3QgMicpO1xuXG4gICAgLy8gICAgIGNyZWF0ZVRvZG8oYHRpdGxlJHtpbmRleH1gLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyBpbmRleH0tJHttb250aCArIGluZGV4fS0ke2RheSArIGluZGV4fWAsaW5kZXgsYGxvd2AsYHBlbmRpbmdgLCdwcm9qZWN0IDInKTtcblxuICAgIC8vICAgICBjcmVhdGVUb2RvKGB0aXRsZSR7aW5kZXh9YCxgZGVzYyR7aW5kZXh9YCk7XG5cblxuICAgXG4gICAgICAgIFxuICAgIC8vIH1cblxuICAgIC8vIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPD0gNTsgaW5kZXgrKykge1xuXG4gICAgLy8gICAgIGNyZWF0ZVRvZG8oYHRpdGxlJHtpbmRleH1gLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyBpbmRleH0tJHttb250aCArIGluZGV4fS0ke2RheSArIGluZGV4fWAsaW5kZXgsYGhpZ2hgLGBjb21wbGV0ZWAsJ3Byb2plY3QxdGVzdCcpO1xuXG4gICAgLy8gICAgIGNyZWF0ZVRvZG8oYHRpdGxlJHtpbmRleH1gLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyBpbmRleH0tJHttb250aCArIGluZGV4fS0ke2RheSArIGluZGV4fWAsaW5kZXgsYG1lZGl1bWAsYHBlbmRpbmdgLCdwcm9qZWN0MXRlc3QnKTtcblxuICAgXG4gICAgICAgIFxuICAgIC8vIH1cblxuICAgIC8vIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuICAgIC8vIGxvY2FsU3RvcmFnZVVwZGF0ZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdHRVQgTE9DQUwgU1RPUkFHRScpO1xuICAgIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9BcnJheScpKSlcbiAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3RvcmVkVG9kb3MnKTtcbiAgICBcbiAgICAvLyBvbGREZXRhaWxzXG4gICAgLy8gbmV3RGV0YWlsc1xuICAgIC8vIG5ld1RpdGxlLG5ld0Rlc2MsbmV3RHVlRGF0ZSxuZXdSZW1pbmRJbixuZXdQcmlvcml0eSxuZXdTdGF0dXMsbmV3UHJvamVjdFxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVG9kbyAob2xkRGV0YWlscyxuZXdEZXRhaWxzKXtcblxuICAgICAgICB0b2RvQXJyYXkuZm9yRWFjaCh0b2RvID0+IHtcblxuXG4gICAgICAgICAgICBpZiAodG9kby50aXRsZSA9PT0gb2xkRGV0YWlscy50aXRsZSAmJiBcbiAgICAgICAgICAgICAgICB0b2RvLmRlc2MgPT09IG9sZERldGFpbHMuZGVzYyAmJiBcbiAgICAgICAgICAgICAgICB0b2RvLmR1ZURhdGUgPT09IG9sZERldGFpbHMuZHVlRGF0ZSAmJiBcbiAgICAgICAgICAgICAgICB0b2RvLnJlbWluZEluID09PSBvbGREZXRhaWxzLnJlbWluZEluICYmIFxuICAgICAgICAgICAgICAgIHRvZG8ucHJpb3JpdHkgPT09IG9sZERldGFpbHMucHJpb3JpdHkgJiYgXG4gICAgICAgICAgICAgICAgdG9kby5zdGF0dXMgPT09IG9sZERldGFpbHMuc3RhdHVzICYmIFxuICAgICAgICAgICAgICAgIHRvZG8ucHJvamVjdCA9PT0gb2xkRGV0YWlscy5wcm9qZWN0KSB7XG5cblxuICAgICAgICAgICAgICAgIHRvZG8udGl0bGUgPSBuZXdEZXRhaWxzLm5ld1RpdGxlO1xuICAgICAgICAgICAgICAgIHRvZG8uZGVzYyA9IG5ld0RldGFpbHMubmV3RGVzYztcbiAgICAgICAgICAgICAgICB0b2RvLmR1ZURhdGUgPSBuZXdEZXRhaWxzLm5ld0R1ZTtcbiAgICAgICAgICAgICAgICB0b2RvLnJlbWluZEluID0gbmV3RGV0YWlscy5uZXdSZW1pbmRlcjtcbiAgICAgICAgICAgICAgICB0b2RvLnByaW9yaXR5ID0gbmV3RGV0YWlscy5uZXdQcmlvcml0eTtcbiAgICAgICAgICAgICAgICB0b2RvLnN0YXR1cyA9IG5ld0RldGFpbHMubmV3U3RhdHVzO1xuICAgICAgICAgICAgICAgIHRvZG8ucHJvamVjdCA9IG5ld0RldGFpbHMubmV3UHJvamVjdDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2VVcGRhdGUoKTtcblxuICAgIH1cblxuXG5cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRvZG8gKG9sZERldGFpbHMpe1xuXG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvZG9BcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblxuXG4gICAgICAgICAgICBpZiAodG9kb0FycmF5W2luZGV4XS50aXRsZSA9PT0gb2xkRGV0YWlscy50aXRsZSAmJiBcbiAgICAgICAgICAgICAgICB0b2RvQXJyYXlbaW5kZXhdLmRlc2MgPT09IG9sZERldGFpbHMuZGVzYyAmJiBcbiAgICAgICAgICAgICAgICB0b2RvQXJyYXlbaW5kZXhdLmR1ZURhdGUgPT09IG9sZERldGFpbHMuZHVlRGF0ZSAmJiBcbiAgICAgICAgICAgICAgICB0b2RvQXJyYXlbaW5kZXhdLnJlbWluZEluID09PSBvbGREZXRhaWxzLnJlbWluZEluICYmIFxuICAgICAgICAgICAgICAgIHRvZG9BcnJheVtpbmRleF0ucHJpb3JpdHkgPT09IG9sZERldGFpbHMucHJpb3JpdHkgJiYgXG4gICAgICAgICAgICAgICAgdG9kb0FycmF5W2luZGV4XS5zdGF0dXMgPT09IG9sZERldGFpbHMuc3RhdHVzICYmIFxuICAgICAgICAgICAgICAgIHRvZG9BcnJheVtpbmRleF0ucHJvamVjdCA9PT0gb2xkRGV0YWlscy5wcm9qZWN0KSB7XG5cblxuICAgICAgICAgICAgICAgIHRvZG9BcnJheS5zcGxpY2UoaW5kZXgsMSlcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2VVcGRhdGUoKTtcblxuICAgIH1cblxuXG5cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRvZG9PZlByb2plY3QgKHByb2plY3Qpe1xuXG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvZG9BcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblxuXG4gICAgICAgICAgICBpZiAodG9kb0FycmF5W2luZGV4XS5wcm9qZWN0ID09PSBwcm9qZWN0LnRpdGxlKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVE9ETyBERUxFVEVEJylcblxuICAgICAgICAgICAgICAgIHRvZG9BcnJheS5zcGxpY2UoaW5kZXgsMSlcblxuICAgICAgICAgICAgICAgIC0taW5kZXg7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlVXBkYXRlKCk7XG5cbiAgICB9XG5cbiAgICBcblxuICAgIC8vIEVuZCBvZiB0ZXN0IG9iamVjdHNcblxuICAgIHJldHVybiB7dG9kb0FycmF5LCBjcmVhdGVUb2RvLCB1cGRhdGVUb2RvLCBkZWxldGVUb2RvLCBkZWxldGVUb2RvT2ZQcm9qZWN0fTtcblxuXG59XG5cblxuY29uc3QgaW5pdGlhbGl6ZWRUb2RvTW9kdWxlID0gdG9kb01vZHVsZSgpO1xuXG5cbi8vIGluaXRpYWxpemVkIHZlcnNpb24gaXMgc2VudCBiZWNhdXNlIHRoZSBpcyBubyByZWFzb24gdG8gcmUtaW5pdGlhbGlzZSBsYXRlciBvblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZWRUb2RvTW9kdWxlO1xuIiwiLy8gQWxsIERPTSBBY3Rpdml0aWVzIGFyZSBjZW50cmFsaXNlZCBoZXJlIGV4Y2VwdCBET00gQ3JlYXRpb25cblxuaW1wb3J0IHRvZG9Nb2R1bGUgZnJvbSBcIi4uL2NyZWF0ZVRvZG9zXCI7XG5cbmltcG9ydCBwcm9qZWN0TW9kdWxlIGZyb20gXCIuLi9jcmVhdGVQcm9qZWN0c1wiO1xuXG5pbXBvcnQgbm90ZXNPYmplY3QgZnJvbSBcIi4uL3RhYk9iamVjdHMvYWxsTm90ZXNUYWJcIjtcblxuXG5pbXBvcnQgdG9kb09iamVjdCBmcm9tIFwiLi4vdGFiT2JqZWN0cy9hbGxUb2Rvc1RhYlwiO1xuXG5pbXBvcnQgcHJvamVjdE9iamVjdCBmcm9tIFwiLi4vdGFiT2JqZWN0cy9hbGxQcm9qZWN0c1RhYlwiO1xuXG5pbXBvcnQgZm9ybURvbU1vZHVsZSBmcm9tIFwiLi4vZG9tQ3JlYXRpb24vZm9ybURPTUNyZWF0aW9uXCI7XG5cbmltcG9ydCBjcmVhdGVUb2RvRE9NIGZyb20gXCIuLi9kb21DcmVhdGlvbi9hbGxUb2RvRE9NQ3JlYXRpb25cIjtcblxuaW1wb3J0IGNyZWF0ZVByb2plY3RET00gZnJvbSBcIi4uL2RvbUNyZWF0aW9uL3Byb2plY3RzRE9NQ3JlYXRpb25cIjtcblxuaW1wb3J0IGNyZWF0ZU5vdGVzRE9NIGZyb20gXCIuLi9kb21DcmVhdGlvbi9hbGxOb3Rlc0RPTUNyZWF0aW9uXCI7XG5cbmltcG9ydCBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uIGZyb20gXCIuLi9kb21DcmVhdGlvbi9wb3B1bGF0ZURPTVRvZG9Db2xsZWN0aW9uXCI7XG5cbmltcG9ydCBhcHBlbmRQcm9qZWN0T2JqZWN0cyBmcm9tIFwiLi4vZG9tQ3JlYXRpb24vcG9wdWxhdGVET01Qcm9qZWN0Q29sbGVjdGlvblwiO1xuXG5pbXBvcnQgYXBwZW5kTm90ZXNPYmplY3QgZnJvbSBcIi4uL2RvbUNyZWF0aW9uL3BvcHVsYXRlRE9NTm90ZUNvbGxlY3Rpb25cIjtcblxuLy8gQmVjYXVzZSBkaXNwbGF5aW5nIHRvZG9Db2xsZWN0aW9uIGluIGhpZ2ggcHJpb3JpdHkgaXMgdGhlIGRlZmF1bHRcbi8vIGxldCByZWNlbnRDb2xsZWN0aW9uQ29udGFpbmVyRm4gPSBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uO1xuXG4vLyBsZXQgcmVjZW50Q29sbGVjdGlvbkNvbnRhaW5lckFyZyA9ICdoaWdoJztcblxuXG5cbmxldCBtZW51SW5EaXNwbGF5ID0gJ3RvZG9zJ1xuXG5sZXQgcHJpb3JpdHlJbkRpc3BsYXkgPSAnaGlnaCdcblxuXG5mdW5jdGlvbiB1cGRhdGVEaXNwbGF5ICgpe1xuXG4gICAgaWYobWVudUluRGlzcGxheSA9PT0gJ3RvZG9zJyl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUT0RPUyBESVNQTEFZIFVQREFURUQnKTtcblxuICAgICAgICBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uKHByaW9yaXR5SW5EaXNwbGF5KTtcblxuICAgIH1cblxuICAgIGlmKG1lbnVJbkRpc3BsYXkgPT09ICdwcm9qZWN0cycpe1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdUT0RPUyBQUk9KRUNUUyBVUERBVEVEJyk7XG5cbiAgICAgICAgYXBwZW5kUHJvamVjdE9iamVjdHMocHJpb3JpdHlJbkRpc3BsYXkpO1xuXG4gICAgfVxuXG4gICAgaWYgKG1lbnVJbkRpc3BsYXkgPT09ICdub3RlcycpIHtcblxuICAgICAgICBjb25zb2xlLmxvZygnVE9ET1MgTk9URVMgVVBEQVRFRCcpO1xuICAgICAgICBcbiAgICAgICAgYXBwZW5kTm90ZXNPYmplY3QoKTtcblxuICAgIH1cbn1cblxuXG5cblxuZnVuY3Rpb24gZG9tQWN0aXZpdGllc01vZHVsZSAoKXtcblxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcblxuICAgIG1haW5Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIFxuXG4gICAgICAgIGlmKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudS1hY3RpdmVcIikpe1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS1hY3RpdmVcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgIH0pXG5cblxuICAgIC8vIGhhbWJ1cmdlciBidXR0b25cbiAgICBjb25zdCBoYW1idXJnZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyLW1lbnUnKTtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZS1tZW51Jyk7XG5cbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KVxuXG5cbiAgICBoYW1idXJnZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYoIW1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudS1hY3RpdmVcIikpe1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudS1hY3RpdmVcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudS1hY3RpdmVcIikpe1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS1hY3RpdmVcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgIH0pXG5cblxuICAgIC8vIEZPUk0gQUNUSVZJVElFU1xuXG4gICAgLy8gRk9STSBJTlBVVCBBQ1RJVklUSUVTIEJFR0lOIEhFUkVcblxuXG4gICAgLy8gZm9ybSBjb250YWluZXJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBlbnRyeUNyZWF0aW9uRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNyZWF0aW9uLWZvcm0nKTtcblxuICAgIC8vIHRvZG8gb3Igbm90ZSBidXR0b25cblxuICAgIGxldCBpc05vdGUgPSB0cnVlO1xuXG4gICAgY29uc3Qgc2VsZWN0VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpcy10b2RvJyk7XG5cbiAgICBjb25zdCBzZWxlY3ROb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lzLW5vdGUnKTtcblxuICAgIGNvbnN0IHRvZG9DcmVhdGlvbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtbmV3LXRvZG8nKTtcblxuXG5cblxuICAgIC8vIHNhbWUgdmFyaWFibGUsIG5lZWQgdG8gcmVmYWN0b3JcbiAgICBjb25zdCBzZWxlY3RFeGlzdGluZ1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhpc3RpbmctcHJvamVjdCcpO1xuXG4gICAgY29uc3Qgc2VsZWN0TmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpO1xuXG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0UmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhpc3RpbmctcHJvamVjdCcpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdFJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0Jyk7XG5cblxuXG5cbiAgICBjb25zdCBleGlzdGluZ1Byb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWV4aXN0aW5nLXByb2plY3QnKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLW5ldy1wcm9qZWN0Jyk7XG5cblxuXG5cbiAgICAvLyBUby1kbyBpbnB1dHNcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby10aXRsZScpO1xuXG4gICAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kZXNjJyk7XG5cbiAgICBjb25zdCBlbnRyeVR5cGUgPSBpc05vdGU7XG5cbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRhdGUnKTtcblxuICAgIGNvbnN0IHRvZG9SZW1pbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXJlbWluZC1pbicpO1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tcHJpb3JpdHknKTtcblxuICAgIFxuXG5cbiAgICBjb25zdCB0b2RvSW5wdXRzID0gW3RvZG9EYXRlLHRvZG9SZW1pbmRlcl07XG5cblxuXG4gICAgY29uc3QgcHJvamVjdHNDaG9pY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtY2hvaWNlcycpO1xuXG4gICAgLy8gbmV3IHByb2plY3QgaW5wdXRzXG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpO1xuXG4gICAgY29uc3QgcHJvamVjdERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1kZXNjJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRhdGUnKTtcblxuICAgIGNvbnN0IHByb2plY3RSZW1pbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXJlbWluZC1pbicpO1xuXG5cbiAgICAvLyBpcyBhIGJ1dHRvblxuICAgIGNvbnN0IHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXByaW9yaXR5Jyk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0SW5wdXRzID0gW3Byb2plY3RUaXRsZSxwcm9qZWN0RGVzYyxwcm9qZWN0RGF0ZSxwcm9qZWN0UmVtaW5kZXJdO1xuXG5cbiAgICBzZWxlY3RUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgdG9kb0NyZWF0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuXG4gICAgICAgIHRvZG9JbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzZWxlY3RFeGlzdGluZ1Byb2plY3QuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHNlbGVjdE5ld1Byb2plY3QuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNlbGVjdEV4aXN0aW5nUHJvamVjdC5jaGVja2VkICYmICFzZWxlY3ROZXdQcm9qZWN0LmNoZWNrZWQpICB7XG4gICAgICAgICAgICBzZWxlY3RFeGlzdGluZ1Byb2plY3QuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChzZWxlY3RFeGlzdGluZ1Byb2plY3QuY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hlY2tlZEV4aXN0aW5nUHJvamVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdE5ld1Byb2plY3QuY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hlY2tlZE5ld1Byb2plY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBpc05vdGUgPSBmYWxzZTtcblxuICAgIH0pXG5cbiAgICBzZWxlY3ROb3RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgdG9kb0NyZWF0aW9uRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuICAgICAgICBleGlzdGluZ1Byb2plY3REaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1mb3JtLWl0ZW1zJyk7XG4gICAgICAgIG5ld1Byb2plY3REaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1mb3JtLWl0ZW1zJyk7XG5cbiAgICAgICAgc2VsZWN0TmV3UHJvamVjdC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHNlbGVjdEV4aXN0aW5nUHJvamVjdC5jaGVja2VkID0gZmFsc2U7XG5cbiAgICAgICAgdG9kb0lucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgncmVxdWlyZWQnKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RzQ2hvaWNlcy5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJyk7XG5cbiAgICAgICAgbmV3UHJvamVjdElucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgncmVxdWlyZWQnKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlzTm90ZT0gdHJ1ZTtcbiAgICB9KVxuXG4gICAgLy8gZXhpc3RpbmcgcHJvamVjdCBvciBuZXcgcHJvamVjdFxuXG4gICAgbGV0IGlzTmV3UHJvamVjdCA9IGZhbHNlO1xuXG5cblxuICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBpc05ld1Byb2plY3Q7XG5cbiAgICAvLyBleGlzdGluZyBwcm9qZWN0IGlucHV0XG5cblxuXG4gICAgc2VsZWN0RXhpc3RpbmdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICBjaGVja2VkRXhpc3RpbmdQcm9qZWN0KCk7XG4gICAgICAgIFxuICAgIH0pO1xuXG5cblxuICAgIHNlbGVjdE5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgIGNoZWNrZWROZXdQcm9qZWN0KCk7XG5cbiAgICB9KVxuXG5cbiAgICBmdW5jdGlvbiBjaGVja2VkRXhpc3RpbmdQcm9qZWN0ICgpe1xuICAgICAgICBleGlzdGluZ1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1mb3JtLWl0ZW1zJyk7XG4gICAgICAgIG5ld1Byb2plY3REaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1mb3JtLWl0ZW1zJyk7XG5cbiAgICAgICAgaXNOZXdQcm9qZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgcHJvamVjdHNDaG9pY2VzLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICBuZXdQcm9qZWN0SW5wdXRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcbiAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja2VkTmV3UHJvamVjdCAoKXtcbiAgICAgICAgXG4gICAgICAgIGV4aXN0aW5nUHJvamVjdERpdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LWZvcm0taXRlbXMnKTtcbiAgICAgICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LWZvcm0taXRlbXMnKTtcblxuICAgICAgICBpc05ld1Byb2plY3QgPSB0cnVlO1xuXG4gICAgICAgIHByb2plY3RzQ2hvaWNlcy5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJyk7XG5cbiAgICAgICAgbmV3UHJvamVjdElucHV0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG5cbiAgICAvLyByZWNlaXZlIGFsbCBmb3JtIGlucHV0IGRhdGFcblxuXG4gICAgY29uc3QgZm9ybVN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLXN1Ym1pdCcpO1xuXG5cbiAgICBcblxuXG4gICAgLy8gY29uc3QgdGVzdEFycmF5ID0gW3RvZG9UaXRsZSx0b2RvRGVzYyxlbnRyeVR5cGUsdG9kb0RhdGUsdG9kb1JlbWluZGVyLHRvZG9Qcmlvcml0eSxwcm9qZWN0T3B0aW9uLHByb2plY3RzQ2hvaWNlcyxwcm9qZWN0VGl0bGUscHJvamVjdERlc2MscHJvamVjdERhdGUscHJvamVjdFJlbWluZGVyLHByb2plY3RQcmlvcml0eV07XG5cblxuICAgIGNvbnN0IGFsbEZvcm1JbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1pbnB1dCcpO1xuICAgIFxuXG4gICAgXG5cbiAgICBmb3JtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cbiAgICAgICBcblxuICAgICAgICAvLyBjbGVhciBjb2xvciBvbiBwcmlvcml0eSBidXR0b25cbiAgICAgICAgXG5cbiAgICAgICAgY29uc3QgcmVxdWlyZWRJbnB1dCA9IFtdO1xuXG4gICAgICAgIGxldCByZXF1aXJlZElucHV0RmlsbGVkID0gdHJ1ZTtcblxuXG4gICAgICAgIGFsbEZvcm1JbnB1dHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgncmVxdWlyZWQnKSkge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkSW5wdXQucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIHJlcXVpcmVkSW5wdXQpIHtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBpZighZWFjaC52YWx1ZSl7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRJbnB1dEZpbGxlZCA9IGZhbHNlOyAgIFxuXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHJlcXVpcmVkSW5wdXRGaWxsZWQpe1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaGlkZUZvcm0oKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIHRvZG8gd2l0aCBmb3JtXG5cblxuICAgICAgICAgICAgY29uc3QgcmVzZXRBcnJheSA9IFtwcm9qZWN0VGl0bGUscHJvamVjdERlc2MscHJvamVjdERhdGUscHJvamVjdFJlbWluZGVyLHRvZG9UaXRsZSx0b2RvRGVzYyx0b2RvRGF0ZSx0b2RvUmVtaW5kZXJdO1xuXG5cbiAgICAgICAgICAgIGlmKG5ld1Byb2plY3RSYWRpby5jaGVja2VkKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnd2h5IGFyZSB5b3UgcnVubmluZz8nKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHByb2plY3RNb2R1bGUuY3JlYXRlUHJvamVjdChwcm9qZWN0VGl0bGUudmFsdWUscHJvamVjdERlc2MudmFsdWUscHJvamVjdERhdGUudmFsdWUscHJvamVjdFByaW9yaXR5LnZhbHVlLHByb2plY3RSZW1pbmRlci52YWx1ZSxgcGVuZGluZ2ApO1xuXG5cbiAgICAgICAgICAgICAgICB0b2RvTW9kdWxlLmNyZWF0ZVRvZG8odG9kb1RpdGxlLnZhbHVlLHRvZG9EZXNjLnZhbHVlLHRvZG9EYXRlLnZhbHVlLE51bWJlcih0b2RvUmVtaW5kZXIudmFsdWUpLHRvZG9Qcmlvcml0eS52YWx1ZSxgcGVuZGluZ2AscHJvamVjdFRpdGxlLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgIHRvZG9PYmplY3QoKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RPYmplY3QoKTtcblxuICAgICAgICAgICAgICAgIG5vdGVzT2JqZWN0KCk7XG5cbiAgICAgICAgICAgICAgICByZXNldEFycmF5LmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy9ldmVyeXRpbWUgc3VibWl0IGJ1dHRvbiBpcyBjbGlja2VkIGZyZXNoIGRyb3Bkb3duIGlzIGNyZWF0ZWQgXG4gICAgICAgICAgICAgICAgZm9ybURvbU1vZHVsZS5leGlzdGluZ1Byb2plY3RPcHRpb25zKCk7XG5cbiAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0RE9NKClcblxuICAgICAgICAgICAgICAgIGFwcGVuZFByb2plY3RPYmplY3RzKHByb2plY3RQcmlvcml0eS52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBoaWdoUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaC1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lZGl1bS1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvdy1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWJ1dHRvbnMnKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlCdXR0b25zLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nob3Nlbi1wcmlvcml0eScpXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5LnZhbHVlID09PSAnaGlnaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3RQcmlvcml0eS52YWx1ZSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1wcmlvcml0eScpXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5LnZhbHVlID09PSAnbG93Jykge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hvc2VuLXByaW9yaXR5JylcblxuICAgICAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY3JlYXRlIHRvLWRvcyBhbmQgbm90ZXNcblxuICAgICAgICAgICAgdG9kb01vZHVsZS5jcmVhdGVUb2RvKHRvZG9UaXRsZS52YWx1ZSx0b2RvRGVzYy52YWx1ZSx0b2RvRGF0ZS52YWx1ZSxOdW1iZXIodG9kb1JlbWluZGVyLnZhbHVlKSx0b2RvUHJpb3JpdHkudmFsdWUsYHBlbmRpbmdgLHByb2plY3RzQ2hvaWNlcy52YWx1ZSk7XG5cbiAgICAgICAgICAgIC8vIHRvZG9PYmplY3QoKTtcblxuICAgICAgICAgICAgLy8gcHJvamVjdE9iamVjdCgpO1xuXG4gICAgICAgICAgICAvLyBub3Rlc09iamVjdCgpO1xuXG4gICAgICAgICAgICByZXNldEFycmF5LmZvckVhY2goaW5wdXQgPT4ge1xuXG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL2V2ZXJ5dGltZSBzdWJtaXQgYnV0dG9uIGlzIGNsaWNrZWQgZnJlc2ggZHJvcGRvd24gaXMgY3JlYXRlZCBcbiAgICAgICAgICAgIGZvcm1Eb21Nb2R1bGUuZXhpc3RpbmdQcm9qZWN0T3B0aW9ucygpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0VG9kby5jaGVja2VkKSB7XG5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG9ET00oKTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uKHRvZG9Qcmlvcml0eS52YWx1ZSk7XG5cblxuICAgICAgICAgICAgICAgIC8vIHR1cm4gdGhpcyB0byBhIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2gtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtZWRpdW1Qcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWRpdW0tcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb3dQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3ctcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1idXR0b25zJyk7XG4gIFxuICAgICAgICAgICAgICAgIHByaW9yaXR5QnV0dG9ucy5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaG9zZW4tcHJpb3JpdHknKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBpZiAodG9kb1ByaW9yaXR5LnZhbHVlID09PSAnaGlnaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRvZG9Qcmlvcml0eS52YWx1ZSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1wcmlvcml0eScpO1xuXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodG9kb1ByaW9yaXR5LnZhbHVlID09PSAnbG93Jykge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hvc2VuLXByaW9yaXR5JylcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgaWYgKHNlbGVjdE5vdGUuY2hlY2tlZCkge1xuXG4gICAgICAgICAgICAgICAgY3JlYXRlTm90ZXNET00oKTtcbiAgICAgICAgICAgICAgICBhcHBlbmROb3Rlc09iamVjdCgpXG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIEZPUk0gSU5QVVQgQUNUSVZJVElFUyBFTkQgSEVSRVxuICAgICAgICBcblxuXG4gICAgfSk7XG5cblxuXG4gICAgLy8gRk9STSBBUFBFQVJBTkNFIEFDVElWSVRFUyBCRUdJTiBIRVJFXG5cblxuICAgIGZ1bmN0aW9uIGhpZGVGb3JtICgpe1xuXG5cbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LWZvcm0nKVxuXG4gICAgICAgIFxuXG4gICAgfVxuXG5cbiAgICAvLyBzdG9wIGV2ZW50IGJ1YmJsaW5nLlxuICAgIGVudHJ5Q3JlYXRpb25Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgfSlcblxuXG4gICAgZm9ybUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIGhpZGVGb3JtKCk7XG4gICAgICAgICAgICBcbiAgICB9KVxuXG4gICAgY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWJ1dHRvbicpO1xuXG4gICAgZm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Nob3ctZm9ybScpO1xuXG4gICAgICAgIGZvcm1Eb21Nb2R1bGUuZXhpc3RpbmdQcm9qZWN0T3B0aW9ucygpO1xuXG4gICAgICAgIGlmKHNlbGVjdE5vdGUuY2hlY2tlZCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0VG9kby5jaGVja2VkICYmIHNlbGVjdEV4aXN0aW5nUHJvamVjdC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgc2VsZWN0TmV3UHJvamVjdC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHNlbGVjdE5ld1Byb2plY3QuY2hlY2tlZCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTkVXIFBST0pFQ1QnKVxuICAgICAgICAgICAgY2hlY2tlZE5ld1Byb2plY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHNlbGVjdEV4aXN0aW5nUHJvamVjdC5jaGVja2VkKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFWElTVElORyBQUk9KRUNUJylcbiAgICAgICAgICAgIGNoZWNrZWRFeGlzdGluZ1Byb2plY3QoKTtcbiAgICAgICAgfVxuXG4gICAgfSlcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICBjb25zdCBhbGxUb2Rvc1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtdG9kb3MtdGFiJyk7XG5cbiAgICBhbGxUb2Rvc1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBjb25zb2xlLmxvZygnVE8gRE8gTElTVCcpO1xuXG4gICAgICAgIG1lbnVJbkRpc3BsYXkgPSAndG9kb3MnO1xuXG4gICAgICAgIGNyZWF0ZVRvZG9ET00oKTtcblxuICAgIH0pO1xuXG4gICAgY29uc3QgYWxsUHJvamVjdHNUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzLXRhYicpXG5cbiAgICBhbGxQcm9qZWN0c1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBjb25zb2xlLmxvZygnUFJPSkVDVFMgVEFCJyk7XG5cbiAgICAgICAgbWVudUluRGlzcGxheSA9ICdwcm9qZWN0cyc7XG5cbiAgICAgICAgY3JlYXRlUHJvamVjdERPTSgpXG5cbiAgICB9KVxuXG5cbiAgICBjb25zdCBhbGxOb3Rlc1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtbm90ZXMtdGFiJyk7XG5cbiAgICBhbGxOb3Rlc1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBjb25zb2xlLmxvZygnTk9URVMgTElTVCcpO1xuXG4gICAgICAgIG1lbnVJbkRpc3BsYXkgPSAnbm90ZXMnO1xuXG4gICAgICAgIGNyZWF0ZU5vdGVzRE9NKCk7XG5cbiAgICB9KVxuXG5cblxuXG4gICAgXG5cbn1cblxuXG4gLy8gUFJJT1JJVFkgQlVUVE9OIC0gVE9ET1NcblxuIGZ1bmN0aW9uIGNoYW5nZVRvZG9Qcmlvcml0eSgpe1xuICAgIGNvbnN0IGhpZ2hQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoLXByaW9yaXR5Jyk7XG4gICAgY29uc3QgbWVkaXVtUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVkaXVtLXByaW9yaXR5Jyk7XG4gICAgY29uc3QgbG93UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93LXByaW9yaXR5Jyk7XG5cbiAgICBpZiAoIWhpZ2hQcmlvcml0eUJ1dHRvbnx8IW1lZGl1bVByaW9yaXR5QnV0dG9ufHwhbG93UHJpb3JpdHlCdXR0b24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgaGlnaFByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWJ1dHRvbnMnKTtcbiAgXG4gICAgICAgIHByaW9yaXR5QnV0dG9ucy5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2hvc2VuLXByaW9yaXR5JylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1wcmlvcml0eScpO1xuXG4gICAgICAgIHBvcHVsYXRlVG9kb0NvbGxlY3Rpb24oJ2hpZ2gnKTtcblxuICAgICAgICBwcmlvcml0eUluRGlzcGxheSA9ICdoaWdoJztcbiAgICAgICAgY29uc29sZS5sb2coJ0xPT1BJTkcnKVxuXG4gICAgfSk7XG5cbiAgICBcblxuICAgIG1lZGl1bVByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWJ1dHRvbnMnKTtcbiAgICAgICAgXG4gICAgICAgIHByaW9yaXR5QnV0dG9ucy5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2hvc2VuLXByaW9yaXR5JylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaXVtUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hvc2VuLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgcG9wdWxhdGVUb2RvQ29sbGVjdGlvbignbWVkaXVtJyk7XG5cbiAgICAgICAgcHJpb3JpdHlJbkRpc3BsYXkgPSAnbWVkaXVtJztcbiAgICAgICAgY29uc29sZS5sb2coJ0xPT1BJTkcnKVxuICAgIH0pO1xuXG5cbiAgIFxuICAgIGxvd1ByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1idXR0b25zJyk7XG5cbiAgICAgICAgcHJpb3JpdHlCdXR0b25zLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nob3Nlbi1wcmlvcml0eScpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvd1ByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1wcmlvcml0eScpO1xuXG4gICAgICAgIHBvcHVsYXRlVG9kb0NvbGxlY3Rpb24oJ2xvdycpO1xuXG4gICAgICAgIHByaW9yaXR5SW5EaXNwbGF5ID0gJ2xvdyc7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMT09QSU5HJylcbiAgICB9KTtcbiAgIH1cblxuXG5cblxuICAgZnVuY3Rpb24gY2hhbmdlUHJvamVjdFByaW9yaXR5KCl7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2gtcHJpb3JpdHknKTtcbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWRpdW0tcHJpb3JpdHknKTtcbiAgICBjb25zdCBsb3dQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3ctcHJpb3JpdHknKTtcblxuICAgIGlmICghaGlnaFByaW9yaXR5QnV0dG9ufHwhbWVkaXVtUHJpb3JpdHlCdXR0b258fCFsb3dQcmlvcml0eUJ1dHRvbikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICBoaWdoUHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYnV0dG9ucycpO1xuICBcbiAgICAgICAgcHJpb3JpdHlCdXR0b25zLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaG9zZW4tcHJpb3JpdHknKVxuICAgICAgICB9KTtcblxuICAgICAgICBoaWdoUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hvc2VuLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgYXBwZW5kUHJvamVjdE9iamVjdHMoJ2hpZ2gnKTtcblxuICAgICAgICBwcmlvcml0eUluRGlzcGxheSA9ICdoaWdoJztcbiAgICAgICAgY29uc29sZS5sb2coJ0xPT1BJTkcnKVxuXG4gICAgfSk7XG5cbiAgICBcblxuICAgIG1lZGl1bVByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWJ1dHRvbnMnKTtcbiAgICAgICAgXG4gICAgICAgIHByaW9yaXR5QnV0dG9ucy5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2hvc2VuLXByaW9yaXR5JylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaXVtUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hvc2VuLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgYXBwZW5kUHJvamVjdE9iamVjdHMoJ21lZGl1bScpO1xuXG4gICAgICAgIHByaW9yaXR5SW5EaXNwbGF5ID0gJ21lZGl1bSc7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMT09QSU5HJylcbiAgICB9KTtcblxuXG4gICBcbiAgICBsb3dQcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYnV0dG9ucycpO1xuXG4gICAgICAgIHByaW9yaXR5QnV0dG9ucy5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaG9zZW4tcHJpb3JpdHknKVxuICAgICAgICB9KTtcblxuICAgICAgICBsb3dQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKTtcblxuICAgICAgICBhcHBlbmRQcm9qZWN0T2JqZWN0cygnbG93Jyk7XG5cbiAgICAgICAgcHJpb3JpdHlJbkRpc3BsYXkgPSAnbG93JztcbiAgICAgICAgY29uc29sZS5sb2coJ0xPT1BJTkcnKVxuICAgIH0pO1xuICAgfVxuXG5cbiAgIGZ1bmN0aW9uIHVwZGF0ZVRvZG9JdGVtIChvYmplY3Qpe1xuXG4gICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGlzcGxheS1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCB0b2RvRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRpc3BsYXknKTtcblxuICAgICAgICBjb25zdCB0b2RvVXBkYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgdG9kb1VwZGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBjb25zdCBuZXdUb2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LXRpdGxlJylcbiAgICAgICAgY29uc3QgbmV3VG9kb0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LWRlc2MnKTtcbiAgICAgICAgY29uc3QgbmV3VG9kb0R1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRpc3BsYXktZGF0ZScpO1xuICAgICAgICBjb25zdCBuZXdUb2RvUmVtaW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LXJlbWluZC1pbicpO1xuICAgICAgICBjb25zdCBuZXdUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LXByaW9yaXR5Jyk7XG4gICAgICAgIGNvbnN0IG5ld1RvZG9TdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LXN0YXR1cycpO1xuICAgICAgICBjb25zdCBuZXdUb2RvUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRpc3BsYXktY2hvaWNlcycpO1xuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgbGV0IG5ld0RldGFpbHMgPSB7XG4gICAgICAgICAgICBuZXdUaXRsZTogbmV3VG9kb1RpdGxlLnZhbHVlLFxuICAgICAgICAgICAgbmV3RGVzYzogbmV3VG9kb0Rlc2MudmFsdWUsXG4gICAgICAgICAgICBuZXdEdWU6IG5ld1RvZG9EdWUudmFsdWUsXG4gICAgICAgICAgICBuZXdSZW1pbmRlcjogbmV3VG9kb1JlbWluZGVyLnZhbHVlLFxuICAgICAgICAgICAgbmV3UHJpb3JpdHk6IG5ld1RvZG9Qcmlvcml0eS52YWx1ZSxcbiAgICAgICAgICAgIG5ld1N0YXR1czogbmV3VG9kb1N0YXR1cy52YWx1ZSxcbiAgICAgICAgICAgIG5ld1Byb2plY3Q6IG5ld1RvZG9Qcm9qZWN0LnZhbHVlLFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0b2RvTW9kdWxlLnVwZGF0ZVRvZG8ob2JqZWN0LG5ld0RldGFpbHMpO1xuXG4gICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcblxuICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIFxuICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRvZG9EaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pXG5cblxuXG4gICAgfVxuXG5cblxuXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVOb3RlSXRlbSAob2JqZWN0KXtcblxuICAgICAgICBjb25zdCB0b2RvRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRpc3BsYXktY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaXNwbGF5Jyk7XG5cbiAgICAgICAgY29uc3QgdG9kb1VwZGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgIHRvZG9VcGRhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgY29uc3QgbmV3VG9kb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGlzcGxheS10aXRsZScpXG4gICAgICAgIGNvbnN0IG5ld1RvZG9EZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGlzcGxheS1kZXNjJyk7XG4gICAgICAgIFxuXG4gICAgICAgIGxldCBuZXdEZXRhaWxzID0ge1xuICAgICAgICAgICAgbmV3VGl0bGU6IG5ld1RvZG9UaXRsZS52YWx1ZSxcbiAgICAgICAgICAgIG5ld0Rlc2M6IG5ld1RvZG9EZXNjLnZhbHVlLFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0b2RvTW9kdWxlLnVwZGF0ZVRvZG8ob2JqZWN0LG5ld0RldGFpbHMpO1xuXG4gICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcblxuICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIFxuICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRvZG9EaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pXG5cblxuXG4gICAgfVxuXG5cblxuXG5cblxuXG5cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RJdGVtIChwcm9qZWN0KXtcblxuXG4gICAgICAgIGNvbnN0IHByb2plY3REaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdG9kby1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRldGFpbHMnKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VXBkYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdXBkYXRlJyk7XG5cbiAgICAgICAgcHJvamVjdFVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgLy8gcHJvamVjdC1zdGF0dXMtdXBkYXRlXG5cbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUtdXBkYXRlJylcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1kZXNjLXVwZGF0ZScpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0RHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGF0ZS11cGRhdGUnKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFJlbWluZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtcmVtaW5kZXItdXBkYXRlJyk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXByaW9yaXR5LXVwZGF0ZScpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0U3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3Qtc3RhdHVzLXVwZGF0ZScpO1xuXG4gICAgICAgIFxuICAgICAgICBcblxuICAgICAgICBsZXQgbmV3RGV0YWlscyA9IHtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGlzXG4gICAgICAgICAgICBuZXdUaXRsZTogbmV3UHJvamVjdFRpdGxlLnZhbHVlLFxuICAgICAgICAgICAgbmV3RGVzYzogbmV3UHJvamVjdERlc2MudmFsdWUsXG4gICAgICAgICAgICBuZXdEdWU6IG5ld1Byb2plY3REdWUudmFsdWUsXG4gICAgICAgICAgICBuZXdSZW1pbmRlcjogbmV3UHJvamVjdFJlbWluZGVyLnZhbHVlLFxuICAgICAgICAgICAgbmV3UHJpb3JpdHk6IG5ld1Byb2plY3RQcmlvcml0eS52YWx1ZSxcbiAgICAgICAgICAgIG5ld1N0YXR1czogbmV3UHJvamVjdFN0YXR1cy52YWx1ZSxcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcHJvamVjdE1vZHVsZS51cGRhdGVQcm9qZWN0KHByb2plY3QsbmV3RGV0YWlscyk7XG5cbiAgICAgICAgdXBkYXRlRGlzcGxheSgpXG5cbiAgICAgICAgcHJvamVjdERpc3BsYXlDb250YWluZXIucmVtb3ZlKCk7XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBcbiAgICAgICAgcHJvamVjdERpc3BsYXlDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBwcm9qZWN0RGlzcGxheUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBwcm9qZWN0RGlzcGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KVxuXG5cblxuICAgIH1cblxuXG5cblxuXG5cbiAgICBmdW5jdGlvbiBkZWxldGVUb2RvSXRlbSAob2JqZWN0KXtcblxuICAgICAgICBjb25zdCB0b2RvRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRpc3BsYXktY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaXNwbGF5Jyk7XG5cbiAgICAgICAgY29uc3QgdG9kb0RlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRlbGV0ZScpO1xuXG4gICAgICAgIHRvZG9EZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgXG4gICAgICAgIHRvZG9Nb2R1bGUuZGVsZXRlVG9kbyhvYmplY3QpO1xuXG4gICAgICAgIHVwZGF0ZURpc3BsYXkoKVxuXG4gICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgdG9kb0Rpc3BsYXlDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0b2RvRGlzcGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KVxuXG5cblxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0SXRlbSAob2JqZWN0KXtcblxuXG4gICAgICAgIGNvbnN0IHByb2plY3REaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdG9kby1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRldGFpbHMnKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0RGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGVsZXRlJyk7XG5cbiAgICAgICAgXG5cbiAgICAgICAgcHJvamVjdERlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBcbiAgICAgICAgcHJvamVjdE1vZHVsZS5kZWxldGVQcm9qZWN0KG9iamVjdCk7XG5cbiAgICAgICAgdXBkYXRlRGlzcGxheSgpO1xuXG4gICAgICAgIHByb2plY3REaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgcHJvamVjdERpc3BsYXlDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBwcm9qZWN0RGlzcGxheUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBwcm9qZWN0RGlzcGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KVxuXG5cblxuICAgIH1cblxuICBcblxuICAgXG5cblxuXG5leHBvcnQgZGVmYXVsdCBkb21BY3Rpdml0aWVzTW9kdWxlO1xuXG5leHBvcnQge2NoYW5nZVRvZG9Qcmlvcml0eSwgY2hhbmdlUHJvamVjdFByaW9yaXR5LCB1cGRhdGVUb2RvSXRlbSwgdXBkYXRlUHJvamVjdEl0ZW0sIHVwZGF0ZU5vdGVJdGVtLCBkZWxldGVUb2RvSXRlbSwgZGVsZXRlUHJvamVjdEl0ZW19O1xuXG4iLCJpbXBvcnQgdG9kb01vZHVsZSBmcm9tIFwiLi4vY3JlYXRlVG9kb3NcIjtcblxuaW1wb3J0IHByb2plY3RNb2R1bGUgZnJvbSBcIi4uL2NyZWF0ZVByb2plY3RzXCI7XG5cbmZ1bmN0aW9uIHNvcnRpbmdNb2R1bGUgKCl7XG5cblxuICAgICAvLyBTbyB0aGF0IGl0IGRvZXMgbm90IG1lc3Mgd2l0aCB0aGUgb3JpZ2luYWwgYXJyYXlcblxuICAgIGZ1bmN0aW9uIGNsb25lT2JqZWN0KCl7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdEFycmF5UmVmZXJlbmNlID0gcHJvamVjdE1vZHVsZS5wcm9qZWN0QXJyYXk7XG5cbiAgICAgICAgY29uc3QgY2xvbmVQcm9qZWN0QXJyYXkgPSBbXTtcblxuXG4gICAgICAgIGNvbnN0IHRvZG9BcnJheVJlZmVyZW5jZSA9IHRvZG9Nb2R1bGUudG9kb0FycmF5O1xuXG4gICAgICAgIGNvbnN0IGNsb25lVG9kb0FycmF5ID0gW107XG4gICAgICAgIFxuXG4gICAgICAgIHRvZG9BcnJheVJlZmVyZW5jZS5mb3JFYWNoKHRvZG9PYmplY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xvbmVkVG9EbyA9IE9iamVjdC5hc3NpZ24oe30sdG9kb09iamVjdCk7XG4gICAgICAgICAgICBjbG9uZVRvZG9BcnJheS5wdXNoKGNsb25lZFRvRG8pO1xuICAgICAgICB9KTtcblxuICAgICAgICBwcm9qZWN0QXJyYXlSZWZlcmVuY2UuZm9yRWFjaChwcm9qZWN0T2JqZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsb25lZFByb2plY3QgPSBPYmplY3QuYXNzaWduKHt9LHByb2plY3RPYmplY3QpO1xuICAgICAgICAgICAgY2xvbmVQcm9qZWN0QXJyYXkucHVzaChjbG9uZWRQcm9qZWN0KTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICByZXR1cm4ge2Nsb25lUHJvamVjdEFycmF5LGNsb25lVG9kb0FycmF5fVxuXG5cbiAgICB9XG5cbiAgICBcblxuICAgIC8vIHNvcnRzIHRoZSB0byBkb3MgYWNjb3JkaW5nIHRvIHRoZSBwcm9qZWN0IG5hbWUgaXMgaGFzIGJlZW4gYXNzaWduZWQgdG9cbiAgICAvLyBSZW5hbWUgdGhpcyB0byBwcm9qZWN0IHNvcnRlclxuICAgIGZ1bmN0aW9uIHNvcnRCeVByb2plY3ROYW1lKCl7XG5cblxuICAgICAgICBjb25zdCBjbG9uZVByb2plY3RBcnJheSA9IGNsb25lT2JqZWN0KCkuY2xvbmVQcm9qZWN0QXJyYXlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNsb25lVG9kb0FycmF5ID0gY2xvbmVPYmplY3QoKS5jbG9uZVRvZG9BcnJheVxuXG4gICAgICAgIGxldCBwcm9jZXNzZWRQcm9qZWN0QXJyYXlCeU5hbWUgPSBbXTtcblxuICAgICAgICBjbG9uZVByb2plY3RBcnJheS5mb3JFYWNoKHByb2plY3RPYmplY3QgPT4ge1xuXG4gICAgICAgICAgICBwcm9qZWN0T2JqZWN0LnRvZG9Db2xsZWN0aW9uID0gW107XG5cbiAgICAgICAgICAgIGNsb25lVG9kb0FycmF5LmZvckVhY2godG9kb09iamVjdCA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdE9iamVjdC50aXRsZSA9PT0gdG9kb09iamVjdC5wcm9qZWN0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RPYmplY3QudG9kb0NvbGxlY3Rpb24ucHVzaCh0b2RvT2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcHJvY2Vzc2VkUHJvamVjdEFycmF5QnlOYW1lLnB1c2gocHJvamVjdE9iamVjdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG5cblxuICAgICAgICByZXR1cm4ge3Byb2Nlc3NlZFByb2plY3RBcnJheUJ5TmFtZX07XG5cbiAgICB9XG5cblxuXG5cblxuXG5cblxuICAgIGZ1bmN0aW9uIHByaW9yaXR5U29ydGVyKHVucHJvY2Vzc2VkQXJyYXkpe1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXRpZXMgPSBbJ2hpZ2gnLCdtZWRpdW0nLCdsb3cnXTtcblxuICAgICAgICBjb25zdCBvYmplY3RzQnlQcmlvcml0eSA9IHtoaWdoOltdLG1lZGl1bTpbXSxsb3c6W119O1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcmlvcml0aWVzLmxlbmd0aDsgaW5kZXgrKykge1xuXG4gICAgICAgICAgICB1bnByb2Nlc3NlZEFycmF5LmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0LnByaW9yaXR5ID09PSBwcmlvcml0aWVzW2luZGV4XSl7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdHNCeVByaW9yaXR5W3ByaW9yaXRpZXNbaW5kZXhdXS5wdXNoKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmplY3RzQnlQcmlvcml0eTtcblxuXG4gICAgfVxuXG5cblxuXG4gICAgZnVuY3Rpb24gc29ydER1ZURhdGUgKEFycmF5KXtcblxuICAgICAgICAvLyBVc2UgdGhpcyB0byBzb3J0IHByb2plY3RzIGFuZCB0b2Rvc1xuXG4gICAgICAgIC8vIHNvcnRzIGFycmF5IGluIGFzY2VuZGluZyBvcmRlciBhY2NvcmRpbmcgdG8gZHVlIGRhdGVcbiAgICAgICAgYXNjZW5kaW5nU29ydChBcnJheSk7XG5cbiAgICAgICAgY29uc3QgZHVlU29ydGVkQXJyYXkgPSB7XG4gICAgICAgICAgICBub3RlczpbXSxcbiAgICAgICAgICAgIG92ZXJkdWU6W10sXG4gICAgICAgICAgICBkdWU6W10sXG4gICAgICAgICAgICB1cGNvbWluZzpbXSxcbiAgICAgICAgICAgIGNvbXBsZXRlOltdXG4gICAgICAgIH07XG5cbiAgICAgICAgQXJyYXkuZm9yRWFjaChvYmplY3QgPT4ge1xuXG5cbiAgICAgICAgICAgIC8vIE5vdGVzIC0gdG8gYmUgaXNvbGF0ZWQgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoIW9iamVjdC5kdWVEYXRlKXtcblxuICAgICAgICAgICAgICAgIGR1ZVNvcnRlZEFycmF5Lm5vdGVzLnB1c2gob2JqZWN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQ29tcGxldGVcbiAgICAgICAgICAgIGlmKG9iamVjdC5zdGF0dXMgPT09ICdjb21wbGV0ZScpe1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgZHVlU29ydGVkQXJyYXkuY29tcGxldGUucHVzaChvYmplY3QpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPdmVyZHVlXG4gICAgICAgICAgICBpZigob2JqZWN0LmR1cmF0aW9uTGVmdC5kYXlMZWZ0KSA8IDApe1xuXG4gICAgICAgICAgICAgICAgZHVlU29ydGVkQXJyYXkub3ZlcmR1ZS5wdXNoKG9iamVjdCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRHVlXG4gICAgICAgICAgICBpZiAoKChvYmplY3QuZHVyYXRpb25MZWZ0LmRheUxlZnQpIDw9IG9iamVjdC5yZW1pbmRJbikgJiYgKChvYmplY3QuZHVyYXRpb25MZWZ0LmRheUxlZnQpID49IDApKXtcblxuICAgICAgICAgICAgICAgIGR1ZVNvcnRlZEFycmF5LmR1ZS5wdXNoKG9iamVjdCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwY29taW5nXG4gICAgICAgICAgICBpZigob2JqZWN0LmR1cmF0aW9uTGVmdC5kYXlMZWZ0KSA+IG9iamVjdC5yZW1pbmRJbil7XG5cbiAgICAgICAgICAgICAgICBkdWVTb3J0ZWRBcnJheS51cGNvbWluZy5wdXNoKG9iamVjdCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGR1ZVNvcnRlZEFycmF5KTtcblxuICAgICAgICAgICAgXG4gICAgICAgIHJldHVybiBkdWVTb3J0ZWRBcnJheTsgICAgXG4gICAgIFxuXG4gICAgfVxuXG5cblxuICAgIC8vIFNvcnRzIG9iamVjdHMgaW4gQXJyYXkgdG8gYXNjZW5kaW5nIG9yZGVyIGFjY29yZGluZyB0byBkdWUgZGF0ZVxuICAgIGZ1bmN0aW9uIGFzY2VuZGluZ1NvcnQgKEFycmF5KXtcblxuICAgICAgICAvLyBBc3NpZ24gZHVyYXRpb24gbGVmdFxuICAgICAgICBBcnJheS5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXRPYmplY3REdWVEYXRlID0gaW50ZXJ2YWwob2JqZWN0LmR1ZURhdGUpO1xuICAgICAgICAgICAgb2JqZWN0LmR1cmF0aW9uTGVmdCA9IGZvcm1hdE9iamVjdER1ZURhdGU7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgY29uc3QgZGF0ZUFycmF5ID0gW107XG4gICAgICAgIGNvbnN0IHNvcnRlZEFycmF5ID0gW107XG5cblxuICAgICAgICBBcnJheS5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICAvLyBvYmplY3QuZHVyYXRpb25MZWZ0LmRheUxlZnRcbiAgICAgICAgICAgIGRhdGVBcnJheS5wdXNoKG9iamVjdC5kdXJhdGlvbkxlZnQuZGF5TGVmdClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGF0ZUFycmF5LnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS1ifSk7XG5cbiAgICAgICAgZGF0ZUFycmF5LmZvckVhY2goZGF0ZSA9PiB7XG5cblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IEFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChkYXRlID09PSBBcnJheVtpbmRleF0uZHVyYXRpb25MZWZ0LmRheUxlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkQXJyYXkucHVzaChBcnJheVtpbmRleF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LnNwbGljZShpbmRleCwxKVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUHVzaCBzb3J0ZWQgYXJyYXkgdG8gb3JpZ2luYWwgYXJyYXlcbiAgICAgICAgc29ydGVkQXJyYXkuZm9yRWFjaChzb3J0ZWRPYmogPT4ge1xuICAgICAgICAgICAgQXJyYXkucHVzaChzb3J0ZWRPYmopXG4gICAgICAgIH0pO1xuICAgICAgICBcblxuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBpbnRlcnZhbChkYXRlKXtcblxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudERheSA9IGN1cnJlbnREYXRlLmdldERhdGUoKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50TW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcblxuXG5cbiAgICAgICAgLy8gY29uc3QgZm9ybWF0dGVkQ3VycmVudERhdGUgPSBbeWVhcixtb250aCxkYXldO1xuXG5cbiAgICAgICAgLy8gW3l5eXksbW0sZGRdXG4gICAgICAgIGNvbnN0IHNwbGl0T2JqRGF0ZSA9IGRhdGUuc3BsaXQoJy0nKTtcblxuICAgICAgICBjb25zdCB5ZWFyc0xlZnQgPSBzcGxpdE9iakRhdGVbMF0gLSBjdXJyZW50WWVhcjtcblxuICAgICAgICBjb25zdCBtb250aHNMZWZ0ID0gc3BsaXRPYmpEYXRlWzFdIC0gY3VycmVudE1vbnRoO1xuXG4gICAgICAgIGNvbnN0IGRheUxlZnQgPSBzcGxpdE9iakRhdGVbMl0gLSBjdXJyZW50RGF5O1xuXG5cbiAgICAgICAgY29uc3QgaW50ZXJ2YWxPYmogPSB7ZGF5TGVmdCxtb250aHNMZWZ0LHllYXJzTGVmdH07XG5cblxuXG4gICAgXG4gICAgICAgIHJldHVybiBpbnRlcnZhbE9ialxuICAgIH1cblxuXG5cbiAgICAgICAgXG5cbiAgICBmdW5jdGlvbiBub3RlU29ydGVyKHVucHJvY2Vzc2VkQXJyYXkpe1xuXG4gICAgICAgIGNvbnN0IG5vdGVPYmplY3RzID0gW11cblxuICAgICAgICB1bnByb2Nlc3NlZEFycmF5LmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoIW9iai5kdWVEYXRlKXtcblxuICAgICAgICAgICAgICAgIG5vdGVPYmplY3RzLnB1c2gob2JqKVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5vdGVPYmplY3RzO1xuXG5cbiAgICB9XG5cblxuXG4gICBcblxuICAgIHJldHVybiB7Y2xvbmVPYmplY3Qsc29ydEJ5UHJvamVjdE5hbWUscHJpb3JpdHlTb3J0ZXIsc29ydER1ZURhdGUsbm90ZVNvcnRlcn1cblxufVxuXG5jb25zdCBpbml0aWFsaXplZFNvcnRUb0RvTW9kdWxlID0gc29ydGluZ01vZHVsZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplZFNvcnRUb0RvTW9kdWxlOyIsIi8vIGltcG9ydCBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uIGZyb20gXCIuL3BvcHVsYXRlRE9NVG9kb0NvbGxlY3Rpb25cIlxuXG5pbXBvcnQgYXBwZW5kTm90ZXNPYmplY3QgZnJvbSBcIi4vcG9wdWxhdGVET01Ob3RlQ29sbGVjdGlvblwiO1xuXG5mdW5jdGlvbiBhbGxOb3RlRE9NTW9kdWxlICgpe1xuXG4gICAgY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG5cblxuXG4gICAgLy8gbW92ZSB0byBkb21BY3Rpdml0eVxuICAgIGZ1bmN0aW9uIHJlbW92ZUV4aXN0aW5nRGlzcGxheURPTSAoKXtcblxuICAgICAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktY29udGFpbmVyJyk7XG5cbiAgICAgICAgZGlzcGxheUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICB9KTtcblxuICAgIH1cblxuICAgIHJlbW92ZUV4aXN0aW5nRGlzcGxheURPTSgpO1xuXG5cbiAgICBcblxuXG4gICAgXG5cblxuICAgIGNvbnN0IHRvZG9Db250YWluZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdG9kb0NvbnRhaW5lclRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyLXRpdGxlJyk7XG5cbiAgICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZCh0b2RvQ29udGFpbmVyVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHRhYlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdGFiVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFiLXRpdGxlJyk7XG5cbiAgICAgICAgdG9kb0NvbnRhaW5lclRpdGxlLmFwcGVuZCh0YWJUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgICAgICB0b2RvSGVhZGVyLnRleHRDb250ZW50ID0gJ05vdGVzJztcblxuICAgICAgICAgICAgdGFiVGl0bGUuYXBwZW5kKHRvZG9IZWFkZXIpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgICAgIHRvZG9QYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnWW91ciBjb2xsZWN0aW9uIG9mIE5vdGVzIGFyZSBkaXNwbGF5ZWQgaGVyZSc7XG5cbiAgICAgICAgICAgIHRhYlRpdGxlLmFwcGVuZCh0b2RvUGFyYWdyYXBoKTtcblxuICAgICAgICBcblxuXG5cblxuXG5cbiAgICBcbiAgICBjb25zdCBjb2xsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb2xsZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbGxlY3Rpb24tY29udGFpbmVyJyk7XG5cbiAgICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZChjb2xsZWN0aW9uQ29udGFpbmVyKTtcblxuICAgICAgICAvLyBjcmVhdGUgYSBwb3B1bGF0ZSBub3RlcyBtb2R1bGVcblxuICAgICAgICAvLyBDcmVhdGUgaXQgaGVyZSBmaXJzdCB0aGVuIHNlbmQgaXQgc29tZXdoZXJlIGVsc2UuXG4gICAgICAgIGFwcGVuZE5vdGVzT2JqZWN0KCk7XG5cbiAgICAgICAgXG5cblxuXG5cbiAgICAgICBcblxuICAgIFxuICAgIFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGFsbE5vdGVET01Nb2R1bGU7IiwiaW1wb3J0IHBvcHVsYXRlVG9kb0NvbGxlY3Rpb24gZnJvbSBcIi4vcG9wdWxhdGVET01Ub2RvQ29sbGVjdGlvblwiO1xuXG5pbXBvcnQgeyBjaGFuZ2VUb2RvUHJpb3JpdHkgfSBmcm9tIFwiLi4vZG9tQWN0aXZpdGllcy9kb21BY3Rpdml0aWVzXCI7XG5cbmZ1bmN0aW9uIGFsbFRvZG9ET01Nb2R1bGUgKCl7XG5cbiAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktY29udGFpbmVyJyk7XG5cblxuXG5cbiAgICAvLyBtb3ZlIHRvIGRvbUFjdGl2aXR5XG4gICAgZnVuY3Rpb24gcmVtb3ZlRXhpc3RpbmdEaXNwbGF5RE9NICgpe1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1jb250YWluZXInKTtcblxuICAgICAgICBkaXNwbGF5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcblxuICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcmVtb3ZlRXhpc3RpbmdEaXNwbGF5RE9NKCk7XG5cblxuICAgIFxuXG5cbiAgICBcblxuXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0b2RvQ29udGFpbmVyVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItdGl0bGUnKTtcblxuICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kKHRvZG9Db250YWluZXJUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgdGFiVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0YWJUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YWItdGl0bGUnKTtcblxuICAgICAgICB0b2RvQ29udGFpbmVyVGl0bGUuYXBwZW5kKHRhYlRpdGxlKTtcblxuICAgICAgICAgICAgY29uc3QgdG9kb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICAgICAgICAgIHRvZG9IZWFkZXIudGV4dENvbnRlbnQgPSAnVG8tZG9zJztcblxuICAgICAgICAgICAgdGFiVGl0bGUuYXBwZW5kKHRvZG9IZWFkZXIpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgICAgIHRvZG9QYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnWW91ciBjb2xsZWN0aW9uIG9mIHRvZG9zIGFyZSBkaXNwbGF5ZWQgaGVyZSc7XG5cbiAgICAgICAgICAgIHRhYlRpdGxlLmFwcGVuZCh0b2RvUGFyYWdyYXBoKTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgcHJpb3JpdHlCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWJ1dHRvbnMnKTtcblxuICAgICAgICB0b2RvQ29udGFpbmVyVGl0bGUuYXBwZW5kKHByaW9yaXR5QnV0dG9ucyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnY2hvc2VuLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9ICdIaWdoJztcblxuICAgICAgICAgICAgcHJpb3JpdHlCdXR0b25zLmFwcGVuZChoaWdoUHJpb3JpdHkpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ21lZGl1bS1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICBtZWRpdW1Qcmlvcml0eS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuXG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kKG1lZGl1bVByaW9yaXR5KTtcblxuXG4gICAgICAgICAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBsb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdsb3ctcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgcHJpb3JpdHlCdXR0b25zLmFwcGVuZChsb3dQcmlvcml0eSk7XG5cbiAgICAgICAgICAgIFxuXG5cblxuXG5cbiAgICBcbiAgICBjb25zdCBjb2xsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb2xsZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbGxlY3Rpb24tY29udGFpbmVyJyk7XG5cbiAgICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZChjb2xsZWN0aW9uQ29udGFpbmVyKTtcblxuICAgIHBvcHVsYXRlVG9kb0NvbGxlY3Rpb24oJ2hpZ2gnKTtcblxuICAgIGNoYW5nZVRvZG9Qcmlvcml0eSgpO1xuICAgIFxuICAgIC8vIGRvbUFjdGlvbigpXG5cblxuXG5cblxuICAgXG5cblxuICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuXG5cblxuICAgICAgICBcblxuXG5cblxuXG4gICAgXG4gICAgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgYWxsVG9kb0RPTU1vZHVsZTsiLCIvLyBmb3Igc2VsZWN0aW9uIG9wdGlvbnNcbmltcG9ydCBwcm9qZWN0T2JqZWN0cyBmcm9tICcuLi90YWJPYmplY3RzL2FsbFByb2plY3RzVGFiJ1xuXG5mdW5jdGlvbiBmb3JtRG9tTW9kdWxlICgpe1xuXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuXG5cblxuLy8gICAgRk9STSBCVVRUT05cblxuXG4gICAgY29uc3QgZm9ybUJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZm9ybUJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbi1jb250YWluZXInKTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKGZvcm1CdXR0b25Db250YWluZXIpO1xuXG5cbiAgICAgICAgY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIGZvcm1CdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nKTtcblxuICAgICAgICBmb3JtQnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xuXG4gICAgICAgIGZvcm1CdXR0b25Db250YWluZXIuYXBwZW5kKGZvcm1CdXR0b24pO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdtYWluIGRPbScpO1xuICAgIFxuXG5cbiAgICBcblxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKGZvcm1Db250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9DcmVhdGlvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0b2RvQ3JlYXRpb25Gb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY3JlYXRpb24tZm9ybScpO1xuXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kKHRvZG9DcmVhdGlvbkZvcm0pO1xuXG4gICAgICAgICAgICBjb25zdCBlbnRyeUNyZWF0aW9uRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgICAgICAgICAgdG9kb0NyZWF0aW9uRm9ybS5hcHBlbmQoZW50cnlDcmVhdGlvbkZvcm0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuXG4gICAgICAgICAgICAgICAgZW50cnlDcmVhdGlvbkZvcm0uYXBwZW5kKGZpZWxkc2V0KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcblxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQudGV4dENvbnRlbnQgPSAnQ3JlYXRlIGFuIGVudHJ5J1xuXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZChsZWdlbmQpO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kKGlucHV0Q29udGFpbmVyMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3RvZG8tdGl0bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEuYXBwZW5kKHRvZG9UaXRsZUxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlTGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMS5hcHBlbmQodG9kb1RpdGxlTGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLXRpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEuYXBwZW5kKHRvZG9UaXRsZUlucHV0KTtcblxuICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmQoaW5wdXRDb250YWluZXIyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3RvZG8tZGVzYycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NMYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIyLmFwcGVuZCh0b2RvRGVzY0xhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rlc2NMaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIyLmFwcGVuZCh0b2RvRGVzY0xpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY1RleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRlc2MnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdjb2xzJywnMzAnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywnMTAnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjIuYXBwZW5kKHRvZG9EZXNjVGV4dEFyZWEpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjMuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZChpbnB1dENvbnRhaW5lcjMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNOb3RlUmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOb3RlUmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTm90ZVJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCdpcy1ub3RlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc05vdGVSYWRpby5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdlbnRyeS10eXBlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc05vdGVSYWRpby5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTm90ZVJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMy5hcHBlbmQoaXNOb3RlUmFkaW8pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3RlUmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RlUmFkaW9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2lzLW5vdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVSYWRpb0xhYmVsLnRleHRDb250ZW50ID0gJ05vdGUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIzLmFwcGVuZChub3RlUmFkaW9MYWJlbCk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNUb2RvUmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUb2RvUmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9kb1JhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCdpcy10b2RvJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1RvZG9SYWRpby5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdlbnRyeS10eXBlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1RvZG9SYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjMuYXBwZW5kKGlzVG9kb1JhZGlvKTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmFkaW9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2lzLXRvZG8nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9SYWRpb0xhYmVsLnRleHRDb250ZW50ID0gJ1RvLWRvJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMy5hcHBlbmQodG9kb1JhZGlvTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZU5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3VG9kby5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtbmV3LXRvZG8nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kKGNyZWF0ZU5ld1RvZG8pO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3VG9kby5hcHBlbmQoaW5wdXRDb250YWluZXI0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9kby1kYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZTonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNC5hcHBlbmQodG9kb0RhdGVMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGF0ZUxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI0LmFwcGVuZCh0b2RvRGF0ZUxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNC5hcHBlbmQodG9kb0RhdGVJbnB1dCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWUgY3JlYXRpbmcgZm9ybSBlbGVtZW50c1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1RvZG8uYXBwZW5kKGlucHV0Q29udGFpbmVyNSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1JlbWluZEluTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9SZW1pbmRJbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9kby1yZW1pbmQtaW4nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmVtaW5kSW5MYWJlbC50ZXh0Q29udGVudCA9ICdSZW1pbmQtaW4oZGF5cyk6JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjUuYXBwZW5kKHRvZG9SZW1pbmRJbkxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9SZW1pbmRJbkxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI1LmFwcGVuZCh0b2RvUmVtaW5kSW5MaW5lQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUmVtaW5kSW5JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnbnVtYmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tcmVtaW5kLWluJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JlbWluZEluSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNS5hcHBlbmQodG9kb1JlbWluZEluSW5wdXQpO1xuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXI2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjYuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdUb2RvLmFwcGVuZChpbnB1dENvbnRhaW5lcjYpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI2LmFwcGVuZCh0b2RvUHJpb3JpdHlMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHlMaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNi5hcHBlbmQodG9kb1ByaW9yaXR5TGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdsb3cnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjYuYXBwZW5kKHRvZG9Qcmlvcml0eUJ1dHRvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGNsYXNzZXMgZm9yIGRpZmZlcmVudCBwcmlvcml0aWVzIChkaWZmZXJlbnQgY29sb3VycylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9Qcmlvcml0eUJ1dHRvbi52YWx1ZSA9PT0gJ2xvdycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi52YWx1ZSA9ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb1ByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnbWVkaXVtJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ2hpZ2gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIaWdoJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9Qcmlvcml0eUJ1dHRvbi52YWx1ZSA9PT0gJ2hpZ2gnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24udmFsdWUgPSAnbG93JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNy5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1RvZG8uYXBwZW5kKGlucHV0Q29udGFpbmVyNyk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1Byb2plY3RSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywnZXhpc3RpbmctcHJvamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4aXN0aW5nUHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0UmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNy5hcHBlbmQoZXhpc3RpbmdQcm9qZWN0UmFkaW8pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdFJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdleGlzdGluZy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0UmFkaW9MYWJlbC50ZXh0Q29udGVudCA9ICdFeGlzdGluZyBwcm9qZWN0JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjcuYXBwZW5kKGV4aXN0aW5nUHJvamVjdFJhZGlvTGFiZWwpO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0UmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywnbmV3LXByb2plY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKCduYW1lJywncHJvamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3RSYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI3LmFwcGVuZChuZXdQcm9qZWN0UmFkaW8pO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0UmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdFJhZGlvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCduZXctcHJvamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3RSYWRpb0xhYmVsLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjcuYXBwZW5kKG5ld1Byb2plY3RSYWRpb0xhYmVsKTtcblxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEV4aXN0aW5nUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RFeGlzdGluZ1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LWV4aXN0aW5nLXByb2plY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kKHNlbGVjdEV4aXN0aW5nUHJvamVjdCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI4LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0RXhpc3RpbmdQcm9qZWN0LmFwcGVuZChpbnB1dENvbnRhaW5lcjgpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdENob2ljZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENob2ljZXNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Byb2plY3QtY2hvaWNlcycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDaG9pY2VzTGFiZWwudGV4dENvbnRlbnQgPSAnV2hpY2ggcHJvamVjdCBpcyB0aGlzIGZvcj8nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyOC5hcHBlbmQocHJvamVjdENob2ljZXNMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2hvaWNlc0Ryb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENob2ljZXNEcm9wRG93bi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcm9qZWN0LWNob2ljZXMnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENob2ljZXNEcm9wRG93bi5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1jaG9pY2VzJyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDaG9pY2VzRHJvcERvd24uY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjguYXBwZW5kKHByb2plY3RDaG9pY2VzRHJvcERvd24pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRpdGxlcyBmcm9tIGV4aXN0aW5nIHByb2plY3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgd2hlbiBuZXcgcHJvamVjdHMgYXJlIGNyZWF0ZWRcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtbmV3LXByb2plY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kKGNyZWF0ZU5ld1Byb2plY3QpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyOS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QuYXBwZW5kKGlucHV0Q29udGFpbmVyOSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywncHJvamVjdC10aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI5LmFwcGVuZChwcm9qZWN0VGl0bGVMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVMaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyOS5hcHBlbmQocHJvamVjdFRpdGxlTGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC10aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjkuYXBwZW5kKHByb2plY3RUaXRsZUlucHV0KTtcblxuICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIxMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QuYXBwZW5kKGlucHV0Q29udGFpbmVyMTApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdwcm9qZWN0LWRlc2MnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0xhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMC5hcHBlbmQocHJvamVjdERlc2NMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY0xpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMC5hcHBlbmQocHJvamVjdERlc2NMaW5lQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY1RleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtZGVzYycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdjb2xzJywnMzAnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncm93cycsJzEwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NUZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMC5hcHBlbmQocHJvamVjdERlc2NUZXh0QXJlYSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjExLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdC5hcHBlbmQoaW5wdXRDb250YWluZXIxMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Byb2plY3QtZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIGRhdGU6JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjExLmFwcGVuZChwcm9qZWN0RGF0ZUxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REYXRlTGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjExLmFwcGVuZChwcm9qZWN0RGF0ZUxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTEuYXBwZW5kKHByb2plY3REYXRlSW5wdXQpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIGNyZWF0aW5nIGZvcm0gZWxlbWVudHNcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIxMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QuYXBwZW5kKGlucHV0Q29udGFpbmVyMTIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RSZW1pbmRJbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UmVtaW5kSW5MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Byb2plY3QtcmVtaW5kLWluJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluTGFiZWwudGV4dENvbnRlbnQgPSAnUmVtaW5kLWluKGRheXMpOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMi5hcHBlbmQocHJvamVjdFJlbWluZEluTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFJlbWluZEluTGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEyLmFwcGVuZChwcm9qZWN0UmVtaW5kSW5MaW5lQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0UmVtaW5kSW5JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnbnVtYmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtcmVtaW5kLWluJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTIuYXBwZW5kKHByb2plY3RSZW1pbmRJbklucHV0KTtcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyMTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTMuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0LmFwcGVuZChpbnB1dENvbnRhaW5lcjEzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTMuYXBwZW5kKHByb2plY3RQcmlvcml0eUxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eUxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMy5hcHBlbmQocHJvamVjdFByaW9yaXR5TGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdsb3cnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEzLmFwcGVuZChwcm9qZWN0UHJpb3JpdHlCdXR0b24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc2VzIGZvciBkaWZmZXJlbnQgcHJpb3JpdGllcyAoZGlmZmVyZW50IGNvbG91cnMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPT09ICdsb3cnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPSAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9PT0gJ21lZGl1bScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9ICdoaWdoJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnSGlnaCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPT09ICdoaWdoJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ2xvdyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ2Zvcm0tc3VibWl0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmQoc3VibWl0QnV0dG9uKTtcblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBleGlzdGluZ1Byb2plY3RPcHRpb25zICgpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdFJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4aXN0aW5nLXByb2plY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3RSYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpO1xuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5wcm9jZXNzZWRQcm9qZWN0ID0gcHJvamVjdE9iamVjdHMoKS51bnByb2Nlc3NlZFByb2plY3RBcnJheVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5wcm9jZXNzZWRQcm9qZWN0Lmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcsJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RSYWRpby5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXdQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5ld1Byb2plY3RSYWRpby5jaGVja2VkID0gdHJ1ZTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVucHJvY2Vzc2VkUHJvamVjdC5sZW5ndGggPiAwICl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0UmFkaW8uZGlzYWJsZWQgPSBmYWxzZTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnNOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9uc05vZGUpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zTm9kZS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbjAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24wLnRleHRDb250ZW50ID0gJ0Nob29zZSBvbmUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjAudmFsdWUgPSAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q2hvaWNlc0Ryb3BEb3duLmFwcGVuZChvcHRpb24wKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucHJvY2Vzc2VkUHJvamVjdC5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmplY3QudGl0bGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBvYmplY3QudGl0bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBvYmplY3QudGl0bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDaG9pY2VzRHJvcERvd24uYXBwZW5kKHByb2plY3RPcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnVuY3Rpb24gZXhpc3RpbmdQcm9qZWN0T3B0aW9ucyAoKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHVucHJvY2Vzc2VkUHJvamVjdCA9IHByb2plY3RPYmplY3RzKCkudW5wcm9jZXNzZWRQcm9qZWN0QXJyYXlcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IG9wdGlvbnNOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZihvcHRpb25zTm9kZSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgb3B0aW9uc05vZGUuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgb3B0aW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IG9wdGlvbjAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG9wdGlvbjAudGV4dENvbnRlbnQgPSAnQ2hvb3NlIG9uZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBvcHRpb24wLnZhbHVlID0gJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwcm9qZWN0Q2hvaWNlc0Ryb3BEb3duLmFwcGVuZChvcHRpb24wKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdW5wcm9jZXNzZWRQcm9qZWN0LmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqZWN0LnRpdGxlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IG9iamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0T3B0aW9uLnZhbHVlID0gb2JqZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3RDaG9pY2VzRHJvcERvd24uYXBwZW5kKHByb2plY3RPcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdE9wdGlvbnMoKTtcblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge2V4aXN0aW5nUHJvamVjdE9wdGlvbnN9O1xuXG5cbn1cblxuY29uc3QgY3JlYXRlRm9ybURPTSA9IGZvcm1Eb21Nb2R1bGUoKTtcblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb3JtRE9NOyIsIlxuXG5mdW5jdGlvbiBtYWluRG9tTW9kdWxlICgpe1xuXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgXG4gICAgLy8gRk9STSBPUEVOSU5HIEJVVFRPTlxuICAgIFxuXG5cblxuICAgIC8vIFRPUCBDT05UQUlORVJcbiAgICBjb25zdCB0b3BDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRvcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b3AtY29udGFpbmVyJyk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZCh0b3BDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGJyYW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgYnJhbmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnJhbmQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgdG9wQ29udGFpbmVyLmFwcGVuZChicmFuZENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGNvbnN0IGJyYW5kSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgICAgICAgICAgYnJhbmRIZWFkZXIudGV4dENvbnRlbnQgPSAnU2FnZUVudHJpZXMnO1xuXG4gICAgICAgICAgICBicmFuZENvbnRhaW5lci5hcHBlbmQoYnJhbmRIZWFkZXIpO1xuXG5cbiAgICAgICAgY29uc3QgdG9wQ29udGFpbmVyU3BhY2luZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRvcENvbnRhaW5lclNwYWNpbmcuY2xhc3NMaXN0LmFkZCgndG9wLWNvbnRhaW5lci1zcGFjaW5nJyk7XG5cbiAgICAgICAgdG9wQ29udGFpbmVyLmFwcGVuZCh0b3BDb250YWluZXJTcGFjaW5nKTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LmFkZCgnaGFtYnVyZ2VyLW1lbnUnKTtcblxuICAgICAgICBoYW1idXJnZXJNZW51LnRleHRDb250ZW50ID0gJy8vLyc7XG5cbiAgICAgICAgdG9wQ29udGFpbmVyLmFwcGVuZChoYW1idXJnZXJNZW51KTtcblxuXG4gICAgLy8gTUVOVVxuXG4gICAgY29uc3Qgbm90ZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG5vdGVNZW51LmNsYXNzTGlzdC5hZGQoJ25vdGUtbWVudScpO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQobm90ZU1lbnUpO1xuXG4gICAgICAgIGNvbnN0IGFsbFRvZG9zVGFiRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgYWxsVG9kb3NUYWJET00uY2xhc3NMaXN0LmFkZCgnYWxsLXRvZG9zLXRhYicpO1xuXG4gICAgICAgIG5vdGVNZW51LmFwcGVuZChhbGxUb2Rvc1RhYkRPTSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFsbFRvZG9zSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgICAgICAgICAgYWxsVG9kb3NIZWFkZXIudGV4dENvbnRlbnQgPSAnQWxsIFRvZG9zJztcblxuICAgICAgICAgICAgYWxsVG9kb3NUYWJET00uYXBwZW5kKGFsbFRvZG9zSGVhZGVyKVxuXG5cbiAgICAgICAgY29uc3QgYWxsUHJvamVjdHNUYWJET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBhbGxQcm9qZWN0c1RhYkRPTS5jbGFzc0xpc3QuYWRkKCdhbGwtcHJvamVjdHMtdGFiJyk7XG5cbiAgICAgICAgbm90ZU1lbnUuYXBwZW5kKGFsbFByb2plY3RzVGFiRE9NKTtcblxuICAgICAgICAgICAgY29uc3QgYWxsUHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgICAgICBhbGxQcm9qZWN0c0hlYWRlci50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG5cbiAgICAgICAgICAgIGFsbFByb2plY3RzVGFiRE9NLmFwcGVuZChhbGxQcm9qZWN0c0hlYWRlcik7XG5cblxuICAgICAgICBjb25zdCBhbGxOb3Rlc1RhYkRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGFsbE5vdGVzVGFiRE9NLmNsYXNzTGlzdC5hZGQoJ2FsbC1ub3Rlcy10YWInKTtcblxuICAgICAgICBub3RlTWVudS5hcHBlbmQoYWxsTm90ZXNUYWJET00pO1xuXG4gICAgICAgICAgICBjb25zdCBhbGxOb3Rlc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICAgICAgICAgIGFsbE5vdGVzSGVhZGVyLnRleHRDb250ZW50ID0gJ05vdGVzJztcblxuICAgICAgICAgICAgYWxsTm90ZXNUYWJET00uYXBwZW5kKGFsbE5vdGVzSGVhZGVyKTtcblxuXG5cblxuICAgIC8vIEZPT1RFUlxuICAgIGNvbnN0IHRvZG9Db250YWluZXJGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRvZG9Db250YWluZXJGb290ZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItZm9vdGVyJyk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZCh0b2RvQ29udGFpbmVyRm9vdGVyKTtcblxuICAgICAgICBjb25zdCBsaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgbGlua0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaW5rLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIHRvZG9Db250YWluZXJGb290ZXIuYXBwZW5kKGxpbmtDb250YWluZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgICAgICAgICBmb290ZXJMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsJycpO1xuXG4gICAgICAgICAgICBmb290ZXJMaW5rLnRleHRDb250ZW50ID0gJ01hZGUgYnkgUmlzc2hpZ2FuZXNoIFZpbGxhbGFuJztcblxuICAgICAgICAgICAgbGlua0NvbnRhaW5lci5hcHBlbmQoZm9vdGVyTGluayk7XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBtYWluRG9tTW9kdWxlOyIsImltcG9ydCBub3Rlc09iamVjdCBmcm9tIFwiLi4vdGFiT2JqZWN0cy9hbGxOb3Rlc1RhYlwiO1xuaW1wb3J0IHsgdXBkYXRlTm90ZUl0ZW0sIGRlbGV0ZVRvZG9JdGVtIH0gZnJvbSBcIi4uL2RvbUFjdGl2aXRpZXMvZG9tQWN0aXZpdGllc1wiO1xuXG5mdW5jdGlvbiBhcHBlbmROb3Rlc09iamVjdCgpe1xuICAgICAgICAgICAgXG4gICAgY29uc3QgY29sbGVjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uLWNvbnRhaW5lcicpO1xuXG4gICAgY29sbGVjdGlvbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICB9KTtcblxuXG4gICAgY29uc3Qgbm90ZXNDb2xsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBub3Rlc0NvbGxlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbm90ZXMtY29sbGVjdGlvbicpO1xuXG4gICAgY29sbGVjdGlvbkNvbnRhaW5lci5hcHBlbmQobm90ZXNDb2xsZWN0aW9uKTtcblxuICAgIGNvbnN0IG5vdGVzQXJyYXkgPSBub3Rlc09iamVjdCgpLnJldmVyc2UoKTtcblxuICAgIG5vdGVzQXJyYXkuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICBjb25zdCBub3Rlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBub3Rlc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdub3Rlcy1jb250YWluZXInKTtcbiAgICAgICAgbm90ZXNDb2xsZWN0aW9uLmFwcGVuZChub3Rlc0NvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGNvbnN0IG5vdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbm90ZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ25vdGUtdGl0bGUnKTtcbiAgICAgICAgICAgIG5vdGVUaXRsZS50ZXh0Q29udGVudCA9IG9iamVjdC50aXRsZTtcbiAgICAgICAgICAgIG5vdGVzQ29udGFpbmVyLmFwcGVuZChub3RlVGl0bGUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBub3RlRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbm90ZURlc2MuY2xhc3NMaXN0LmFkZCgnbm90ZS1kZXNjJyk7XG4gICAgICAgICAgICBub3RlRGVzYy50ZXh0Q29udGVudCA9IG9iamVjdC5kZXNjO1xuICAgICAgICAgICAgbm90ZXNDb250YWluZXIuYXBwZW5kKG5vdGVEZXNjKTtcblxuXG5cbiAgICAgICAgbm90ZXNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcblxuICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZCh0b2RvRGlzcGxheUNvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5jbGFzc0xpc3QuYWRkKCd0b2RvLWRpc3BsYXknKTtcblxuICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLmFwcGVuZCh0b2RvRGlzcGxheSk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1RpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LXRpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS52YWx1ZSA9IG9iamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlUaXRsZSk7XG5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY1RleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS1kZXNjJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnRGVzY3JpcHRpb24nKVxuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdjb2xzJywnMzAnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncm93cycsJzEwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS52YWx1ZSA9IG9iamVjdC5kZXNjO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rlc2NUZXh0QXJlYSk7XG5cblxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lQnJlYWsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazEpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1VwZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnRleHRDb250ZW50ID0gJ1VwZGF0ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvVXBkYXRlKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVCcmVhazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazIpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZWxldGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZWxldGUuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kZWxldGUnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGVsZXRlKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZU5vdGVJdGVtKG9iamVjdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlVG9kb0l0ZW0ob2JqZWN0KTtcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9KTtcblxuXG5cblxufVxuXG4vLyBhcHBlbmROb3Rlc09iamVjdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHBlbmROb3Rlc09iamVjdCIsImltcG9ydCBwcm9qZWN0T2JqZWN0cyBmcm9tIFwiLi4vdGFiT2JqZWN0cy9hbGxQcm9qZWN0c1RhYlwiO1xuXG5pbXBvcnQgeyB1cGRhdGVQcm9qZWN0SXRlbSx1cGRhdGVUb2RvSXRlbSwgZGVsZXRlUHJvamVjdEl0ZW0gfSBmcm9tIFwiLi4vZG9tQWN0aXZpdGllcy9kb21BY3Rpdml0aWVzXCI7XG5cblxuLy8gUE9QVUxBVEUgVE9ETyBDT0xMRUNUSU9OIENPTlRBSU5FUlxuXG4vLyBoaWdoXG4vLyBwdXQgdGhpcyBpbiBhIGRpZmZlcmVudCBtb2R1bGVcbmZ1bmN0aW9uIGFwcGVuZFByb2plY3RPYmplY3RzKHByaW9yaXR5KXtcblxuICAgIGNvbnN0IGNvbGxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbi1jb250YWluZXInKVxuXG4gICAgY29sbGVjdGlvbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICB9KTtcblxuXG5cbiAgICBjb25zdCBhbGxQcm9qZWN0T2JqZWN0ID0gcHJvamVjdE9iamVjdHMoKS5wcm9qZWN0c0J5UHJpb3JpdHk7XG4gICAgLy8gY29uc29sZS5sb2coYWxsUHJvamVjdE9iamVjdCk7XG5cbiAgICBjb25zdCBkdWVTdGF0dXNBcnJheSA9IFsnb3ZlcmR1ZScsJ2R1ZScsJ3VwY29taW5nJywnY29tcGxldGUnXTtcblxuICAgIGNvbnN0IHRpdGxlQXJyYXkgPSBbJ09WRVJEVUUnLCdEVUUgU09PTicsJ1VQQ09NSU5HJywnQ09NUExFVEVEJ107XG5cbiAgICBjb25zdCBjbGFzc0FycmF5ID0gWydvdmVyZHVlLWNvbnRhaW5lcicsJ2R1ZS1zb29uLWNvbnRhaW5lcicsJ3VwY29taW5nLWNvbnRhaW5lcicsJ2NvbXBsZXRlLWNvbnRhaW5lciddO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gYWxsUHJvamVjdE9iamVjdCkge1xuXG4gICAgICAgIGlmIChrZXkgPT09IHByaW9yaXR5KSB7XG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZHVlU3RhdHVzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gZHVlU3RhdHVzQXJyYXlbaW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWVkT2JqQnlQcmlvcml0eSA9IGFsbFByb2plY3RPYmplY3Rba2V5XTtcblxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBzcGVjaWZpZWRPYmpCeVByaW9yaXR5KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IHByb3BlcnR5KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5zIGFycmF5IG9mIHRvZG8gb2JqZWN0cyBvZiBlYWNoIGR1ZSBzdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnlEdWVTdGF0dXMgPSBzcGVjaWZpZWRPYmpCeVByaW9yaXR5W3Byb3BdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlCeUR1ZVN0YXR1cy5sZW5ndGggPT09IDApe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N0YXR1cy1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25Db250YWluZXIuYXBwZW5kKHN0YXR1c0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlRGl2LnRleHRDb250ZW50ID0gdGl0bGVBcnJheVtpbmRleF07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0VGl0bGVEaXYpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1ZVN0YXR1c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZVN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzQXJyYXlbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVEaXYuYXBwZW5kKGR1ZVN0YXR1c0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbGFibGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzY3JvbGxhYmxlLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVTdGF0dXNDb250YWluZXIuYXBwZW5kKHNjcm9sbGFibGVDb250YWluZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvb3BzIG92ZXIgZWFjaCBwcm9qZWN0IG9iamVjdCBhbmQgYXBwZW5kcyB0aGVtIHRvIHNjcm9sbGFibGUgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5QnlEdWVTdGF0dXMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVDb250YWluZXIuYXBwZW5kKHByb2plY3RDb250YWluZXIpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlLWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlRGl2LnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3RUaXRsZURpdik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlc2MtZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0Rpdi50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzYztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3REZXNjRGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGF0ZS1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlRGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5kdWVEYXRlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdERhdGVEaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RHVyYXRpb25MZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RHVyYXRpb25MZWZ0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZHVyLWxlZnQtZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RHVyYXRpb25MZWZ0RGl2LnRleHRDb250ZW50ID0gYCR7cHJvamVjdC5kdXJhdGlvbkxlZnQuZGF5TGVmdH0gZGF5cywgJHtwcm9qZWN0LmR1cmF0aW9uTGVmdC5tb250aHNMZWZ0fSBtb250aHMgYW5kICR7cHJvamVjdC5kdXJhdGlvbkxlZnQueWVhcnNMZWZ0fSB5ZWFycyBsZWZ0YDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3REdXJhdGlvbkxlZnREaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHl0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtcHJpb3JpdHktZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHl0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3RQcmlvcml0eXREaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBESVNQTEFZIFBST0pFQ1QgVE9ET1MgLSBzZW5kIHByb2plY3QgY29udGFpbmVyIGFzIGFuIGFyZ3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQk9PTSBCT09NIScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRvZG9zQnlQcmlvcml0eSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10b2RvLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmQocHJvamVjdFRvZG9Db250YWluZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERldGFpbHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZXRhaWxzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9Db250YWluZXIuYXBwZW5kKHByb2plY3REZXRhaWxzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtdGl0bGUtdXBkYXRlJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlSW5wdXQudmFsdWUgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBUaXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdFRpdGxlSW5wdXQpO1xuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERldGFpbHNMaW5lQnJlYWsxKTtcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtZGVzYy11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NJbnB1dC52YWx1ZSA9IHByb2plY3QuZGVzYztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IERlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdyb3dzJywnNCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnY29scycsJzQwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGVzY0lucHV0KTtcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERldGFpbHNMaW5lQnJlYWsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3REZXRhaWxzTGluZUJyZWFrMik7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWRhdGUtdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQudmFsdWUgPSBwcm9qZWN0LmR1ZURhdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERhdGVJbnB1dCk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzTGluZUJyZWFrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazMpO1xuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RSZW1pbmRJbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtcmVtaW5kZXItdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ251bWJlcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluSW5wdXQudmFsdWUgPSBwcm9qZWN0LnJlbWluZEluO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdFJlbWluZEluSW5wdXQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERldGFpbHNMaW5lQnJlYWs0KTtcblxuXG4gICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtcHJpb3JpdHktdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxwcm9qZWN0LnByaW9yaXR5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnByaW9yaXR5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdFByaW9yaXR5QnV0dG9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc2VzIGZvciBkaWZmZXJlbnQgcHJpb3JpdGllcyAoZGlmZmVyZW50IGNvbG91cnMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnbG93Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9PT0gJ21lZGl1bScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPSAnaGlnaCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIaWdoJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9PT0gJ2hpZ2gnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ2xvdyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsc0xpbmVCcmVhazUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERldGFpbHNMaW5lQnJlYWs1KTtcblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGlzcGxheVN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGlzcGxheVN0YXR1cy5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1zdGF0dXMtdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgndmFsdWUnLHByb2plY3Quc3RhdHVzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnRleHRDb250ZW50ID0gcHJvamVjdC5zdGF0dXM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGlzcGxheVN0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc2VzIGZvciBkaWZmZXJlbnQgcHJpb3JpdGllcyAoZGlmZmVyZW50IGNvbG91cnMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdERpc3BsYXlTdGF0dXMudmFsdWUgPT09ICdwZW5kaW5nJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5U3RhdHVzLnZhbHVlID0gJ2NvbXBsZXRlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdERpc3BsYXlTdGF0dXMudmFsdWUgPT09ICdjb21wbGV0ZScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGlzcGxheVN0YXR1cy52YWx1ZSA9ICdwZW5kaW5nJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSAnUGVuZGluZyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUb2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2Rvcy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG9zJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kKHByb2plY3RUb2Rvcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxsUHJvamVjdFRvZG9zID0gcHJvamVjdC50b2Rvc0J5UHJpb3JpdHk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlBcnJheSA9IFsnaGlnaCcsJ21lZGl1bScsJ2xvdyddXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHVlU3RhdHVzQXJyYXkgPSBbJ292ZXJkdWUnLCdkdWUnLCd1cGNvbWluZycsJ2NvbXBsZXRlJ107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVBcnJheSA9IFsnT1ZFUkRVRScsJ0RVRSBTT09OJywnVVBDT01JTkcnLCdDT01QTEVURUQnXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc0FycmF5ID0gWydvdmVyZHVlLXRvZG9zJywnZHVlLXNvb24tdG9kb3MnLCd1cGNvbWluZy10b2RvcycsJ2NvbXBsZXRlLXRvZG9zJ107XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUFycmF5LmZvckVhY2gocHJpb3JpdHkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBhbGxQcm9qZWN0VG9kb3MpIHtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWxsUHJvamVjdFRvZG9zW2tleV0ub3ZlcmR1ZS5sZW5ndGggPT09IDAgJiYgYWxsUHJvamVjdFRvZG9zW2tleV0uZHVlLmxlbmd0aCA9PT0gMCAmJiBhbGxQcm9qZWN0VG9kb3Nba2V5XS51cGNvbWluZy5sZW5ndGggPT09IDAgJiYgYWxsUHJvamVjdFRvZG9zW2tleV0uY29tcGxldGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtb3ZlIHRvIG5leHQgbG9vcCBpZiBlbXB0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBwcmlvcml0eSkge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlUaXRsZS50ZXh0Q29udGVudCA9IHByaW9yaXR5LnRvVXBwZXJDYXNlKCkgK2AgUFJJT1JJVFlgO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2Rvcy5hcHBlbmQocHJpb3JpdHlUaXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkdWVTdGF0dXNBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSBkdWVTdGF0dXNBcnJheVtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWVkT2JqQnlQcmlvcml0eSA9IGFsbFByb2plY3RUb2Rvc1trZXldO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3BlY2lmaWVkT2JqQnlQcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHNwZWNpZmllZE9iakJ5UHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250YWlucyBhcnJheSBvZiB0b2RvIG9iamVjdHMgb2YgZWFjaCBkdWUgc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnlEdWVTdGF0dXMgPSBzcGVjaWZpZWRPYmpCeVByaW9yaXR5W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5QnlEdWVTdGF0dXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3J1bnMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tc3RhdHVzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2Rvcy5hcHBlbmQoc3RhdHVzQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZURpdi50ZXh0Q29udGVudCA9IHRpdGxlQXJyYXlbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb250YWluZXIuYXBwZW5kKHRvZG9UaXRsZURpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHVlU3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZVN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzQXJyYXlbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGl2LmFwcGVuZChkdWVTdGF0dXNDb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxhYmxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGFibGUtdG9kby1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZVN0YXR1c0NvbnRhaW5lci5hcHBlbmQoc2Nyb2xsYWJsZUNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsb29wcyBvdmVyIGVhY2ggdG9kbyBvYmplY3QgYW5kIGFwcGVuZHMgdGhlbSB0byBzY3JvbGxhYmxlIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5QnlEdWVTdGF0dXMuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRhaW5lci5hcHBlbmQodG9kb0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlLWRpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZURpdi50ZXh0Q29udGVudCA9IG9iamVjdC50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvVGl0bGVEaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVzYy1kaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY0Rpdi50ZXh0Q29udGVudCA9IG9iamVjdC5kZXNjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9EZXNjRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRhdGUtZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVEaXYudGV4dENvbnRlbnQgPSBvYmplY3QuZHVlRGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvRGF0ZURpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EdXJhdGlvbkxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRHVyYXRpb25MZWZ0RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVyLWxlZnQtZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0R1cmF0aW9uTGVmdERpdi50ZXh0Q29udGVudCA9IGAke29iamVjdC5kdXJhdGlvbkxlZnQuZGF5TGVmdH0gZGF5cywgJHtvYmplY3QuZHVyYXRpb25MZWZ0Lm1vbnRoc0xlZnR9IG1vbnRocyBhbmQgJHtvYmplY3QuZHVyYXRpb25MZWZ0LnllYXJzTGVmdH0geWVhcnMgbGVmdGA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0R1cmF0aW9uTGVmdERpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Qcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZCgndG9kby1wcm9qZWN0LWRpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcm9qZWN0RGl2LnRleHRDb250ZW50ID0gb2JqZWN0LnByb2plY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb1Byb2plY3REaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5dERpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLXByaW9yaXR5LWRpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eXREaXYudGV4dENvbnRlbnQgPSBvYmplY3QucHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb1ByaW9yaXR5dERpdik7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXlzIHRvZG8gaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuXG5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGlzcGxheS1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmQodG9kb0Rpc3BsYXlDb250YWluZXIpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgndG9kby1kaXNwbGF5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5hcHBlbmQodG9kb0Rpc3BsYXkpO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdUaXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS10aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUudmFsdWUgPSBvYmplY3QudGl0bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvZG9EaXNwbGF5VGl0bGUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rlc2NUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktZGVzYycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ0Rlc2NyaXB0aW9uJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnY29scycsJzMwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCcxMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEudmFsdWUgPSBvYmplY3QuZGVzYztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvZG9EZXNjVGV4dEFyZWEpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5RGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LWRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheURhdGUudmFsdWUgPSBvYmplY3QuZHVlRGF0ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheURhdGUuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlEYXRlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lQnJlYWsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrMSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheVJlbWluZEluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnNldEF0dHJpYnV0ZSgndHlwZScsJ251bWJlcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4uc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS1yZW1pbmQtaW4nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvYmplY3QuZHVlRGF0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlSZW1pbmRJbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnUmVtaW5kIGluIGhvdyBtYW55IGRheXM/Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlSZW1pbmRJbi52YWx1ZSA9IG9iamVjdC5yZW1pbmRJbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvZG9EaXNwbGF5UmVtaW5kSW4pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVCcmVhazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrMik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxvYmplY3QucHJpb3JpdHkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS50ZXh0Q29udGVudCA9IG9iamVjdC5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvZG9EaXNwbGF5UHJpb3JpdHkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc2VzIGZvciBkaWZmZXJlbnQgcHJpb3JpdGllcyAoZGlmZmVyZW50IGNvbG91cnMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID09PSAnbG93Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPT09ICdtZWRpdW0nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID0gJ2hpZ2gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnSGlnaCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID09PSAnaGlnaCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPSAnbG93JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lQnJlYWszID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazMpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdHNEcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzRHJvcERvd24uc2V0QXR0cmlidXRlKCduYW1lJywncHJvamVjdC1kaXNwbGF5LWNob2ljZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1kaXNwbGF5LWNob2ljZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZChwcm9qZWN0c0Ryb3BEb3duKTtcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVucHJvY2Vzc2VkUHJvamVjdCA9IHByb2plY3RPYmplY3RzKCkudW5wcm9jZXNzZWRQcm9qZWN0QXJyYXlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnNOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9uc05vZGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zTm9kZS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uMC50ZXh0Q29udGVudCA9IG9iamVjdC5wcm9qZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjAudmFsdWUgPSBvYmplY3QucHJvamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLmFwcGVuZChvcHRpb24wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnByb2Nlc3NlZFByb2plY3QuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmplY3QudGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBvYmoudGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzRHJvcERvd24uYXBwZW5kKHByb2plY3RPcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lQnJlYWs0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBsaW5lIGJyZWFrIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5U3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMuc2V0QXR0cmlidXRlKCd2YWx1ZScsb2JqZWN0LnN0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS1zdGF0dXMnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy50ZXh0Q29udGVudCA9IG9iamVjdC5zdGF0dXM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlTdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGNsYXNzZXMgZm9yIGRpZmZlcmVudCBwcmlvcml0aWVzIChkaWZmZXJlbnQgY29sb3VycylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9EaXNwbGF5U3RhdHVzLnZhbHVlID09PSAncGVuZGluZycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnZhbHVlID0gJ2NvbXBsZXRlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy50ZXh0Q29udGVudCA9ICdDb21wbGV0ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRGlzcGxheVN0YXR1cy52YWx1ZSA9PT0gJ2NvbXBsZXRlJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMudmFsdWUgPSAncGVuZGluZyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSAnUGVuZGluZyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lQnJlYWs1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1VwZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnRleHRDb250ZW50ID0gJ1VwZGF0ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvVXBkYXRlKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRvZG9JdGVtKG9iamVjdCk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFVwZGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RVcGRhdGVCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RVcGRhdGVCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFVwZGF0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VXBkYXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1VwZGF0ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFVwZGF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0VXBkYXRlQnV0dG9uKTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERldGFpbHNMaW5lQnJlYWs2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmQocHJvamVjdERldGFpbHNMaW5lQnJlYWs2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVsZXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVsZXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZWxldGUuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtZGVsZXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlbGV0ZS50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZChwcm9qZWN0RGVsZXRlKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVByb2plY3RJdGVtKHByb2plY3QpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3RJdGVtKHByb2plY3QpXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RJdGVtIChwcm9qZWN0KXtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHByb2plY3REaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdG9kby1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRldGFpbHMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBwcm9qZWN0VXBkYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdXBkYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcHJvamVjdFVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gcHJvamVjdC1zdGF0dXMtdXBkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUtdXBkYXRlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgbmV3UHJvamVjdERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1kZXNjLXVwZGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBuZXdQcm9qZWN0RHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGF0ZS11cGRhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgbmV3UHJvamVjdFJlbWluZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtcmVtaW5kZXItdXBkYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IG5ld1Byb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXByaW9yaXR5LXVwZGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBuZXdQcm9qZWN0U3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3Qtc3RhdHVzLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKG5ld1Byb2plY3RSZW1pbmRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgbmV3RGV0YWlscyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIHVwZGF0ZSB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBuZXdUaXRsZTogbmV3UHJvamVjdFRpdGxlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbmV3RGVzYzogbmV3UHJvamVjdERlc2MudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBuZXdEdWU6IG5ld1Byb2plY3REdWUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBuZXdSZW1pbmRlcjogbmV3UHJvamVjdFJlbWluZGVyLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbmV3UHJpb3JpdHk6IG5ld1Byb2plY3RQcmlvcml0eS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5ld1N0YXR1czogbmV3UHJvamVjdFN0YXR1cy52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGNyZWF0ZSBhIHByb2plY3QgdXBkYXRlIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyB0b2RvTW9kdWxlLnVwZGF0ZVRvZG8ocHJvamVjdCxuZXdEZXRhaWxzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwcm9qZWN0TW9kdWxlLnVwZGF0ZVByb2plY3QocHJvamVjdCxuZXdEZXRhaWxzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyByZWNlbnRDb2xsZWN0aW9uQ29udGFpbmVyRm4ocmVjZW50Q29sbGVjdGlvbkNvbnRhaW5lckFyZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcHJvamVjdERpc3BsYXlDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcHJvamVjdERpc3BsYXlDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0RGlzcGxheUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwcm9qZWN0RGlzcGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnd29ya3MhJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cblxuXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG5cblxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuLy8gU0VORCBUSElTIFRPIGFsbFRvZG9ET01DcmVhdGlvbi5qc1xuLy8gYXBwZW5kVG9kb09iamVjdHMoJ2hpZ2gnKVxuXG5leHBvcnQgZGVmYXVsdCBhcHBlbmRQcm9qZWN0T2JqZWN0czsiLCJpbXBvcnQgdG9kb09iamVjdCBmcm9tIFwiLi4vdGFiT2JqZWN0cy9hbGxUb2Rvc1RhYlwiO1xuLy8gZm9yIHNlbGVjdGlvbiBvcHRpb25zXG5pbXBvcnQgcHJvamVjdE9iamVjdHMgZnJvbSAnLi4vdGFiT2JqZWN0cy9hbGxQcm9qZWN0c1RhYic7XG5cbi8vIGRvZXNuJ3Qgd29yayBiZWNhdXNlIG9mIGNpcmN1bGFyIGRlcGVuZGVuY3lcbi8vIGltcG9ydCB1cGRhdGVUb2RvSXRlbSAgZnJvbSAnLi4vZG9tQWN0aXZpdGllcy91cGRhdGVUb2RvRE9NJztcblxuaW1wb3J0IHsgdXBkYXRlVG9kb0l0ZW0sIGRlbGV0ZVRvZG9JdGVtIH0gZnJvbSBcIi4uL2RvbUFjdGl2aXRpZXMvZG9tQWN0aXZpdGllc1wiO1xuXG5cbi8vIFBPUFVMQVRFIFRPRE8gQ09MTEVDVElPTiBDT05UQUlORVJcblxuLy8gaGlnaFxuLy8gcHV0IHRoaXMgaW4gYSBkaWZmZXJlbnQgbW9kdWxlXG5mdW5jdGlvbiBhcHBlbmRUb2RvT2JqZWN0cyhwcmlvcml0eSl7XG5cbiAgICBcblxuICAgIGNvbnN0IGNvbGxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbi1jb250YWluZXInKVxuXG4gICAgY29sbGVjdGlvbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICB9KTtcblxuXG5cbiAgICBjb25zdCBhbGxUb2RvT2JqZWN0ID0gdG9kb09iamVjdCgpO1xuXG4gICAgY29uc3QgZHVlU3RhdHVzQXJyYXkgPSBbJ292ZXJkdWUnLCdkdWUnLCd1cGNvbWluZycsJ2NvbXBsZXRlJ107XG5cbiAgICBjb25zdCB0aXRsZUFycmF5ID0gWydPVkVSRFVFJywnRFVFIFNPT04nLCdVUENPTUlORycsJ0NPTVBMRVRFRCddO1xuXG4gICAgY29uc3QgY2xhc3NBcnJheSA9IFsnb3ZlcmR1ZS1jb250YWluZXInLCdkdWUtc29vbi1jb250YWluZXInLCd1cGNvbWluZy1jb250YWluZXInLCdjb21wbGV0ZS1jb250YWluZXInXTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIGFsbFRvZG9PYmplY3QpIHtcblxuICAgICAgICBpZiAoa2V5ID09PSBwcmlvcml0eSkge1xuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGR1ZVN0YXR1c0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGR1ZVN0YXR1c0FycmF5W2luZGV4XTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNwZWNpZmllZE9iakJ5UHJpb3JpdHkgPSBhbGxUb2RvT2JqZWN0W2tleV07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gc3BlY2lmaWVkT2JqQnlQcmlvcml0eSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBwcm9wZXJ0eSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250YWlucyBhcnJheSBvZiB0b2RvIG9iamVjdHMgb2YgZWFjaCBkdWUgc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJheUJ5RHVlU3RhdHVzID0gc3BlY2lmaWVkT2JqQnlQcmlvcml0eVtwcm9wXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5QnlEdWVTdGF0dXMubGVuZ3RoID09PSAwKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdGF0dXMtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uQ29udGFpbmVyLmFwcGVuZChzdGF0dXNDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZURpdi50ZXh0Q29udGVudCA9IHRpdGxlQXJyYXlbaW5kZXhdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmQodG9kb1RpdGxlRGl2KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkdWVTdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVTdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc0FycmF5W2luZGV4XSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGl2LmFwcGVuZChkdWVTdGF0dXNDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxhYmxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsYWJsZS1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVlU3RhdHVzQ29udGFpbmVyLmFwcGVuZChzY3JvbGxhYmxlQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsb29wcyBvdmVyIGVhY2ggdG9kbyBvYmplY3QgYW5kIGFwcGVuZHMgdGhlbSB0byBzY3JvbGxhYmxlIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheUJ5RHVlU3RhdHVzLmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVDb250YWluZXIuYXBwZW5kKHRvZG9Db250YWluZXIpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlLWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGl2LnRleHRDb250ZW50ID0gb2JqZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb1RpdGxlRGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVzYy1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjRGl2LnRleHRDb250ZW50ID0gb2JqZWN0LmRlc2M7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvRGVzY0Rpdik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRhdGUtZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGF0ZURpdi50ZXh0Q29udGVudCA9IG9iamVjdC5kdWVEYXRlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0RhdGVEaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRHVyYXRpb25MZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRHVyYXRpb25MZWZ0RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVyLWxlZnQtZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRHVyYXRpb25MZWZ0RGl2LnRleHRDb250ZW50ID0gYCR7b2JqZWN0LmR1cmF0aW9uTGVmdC5kYXlMZWZ0fSBkYXlzLCAke29iamVjdC5kdXJhdGlvbkxlZnQubW9udGhzTGVmdH0gbW9udGhzIGFuZCAke29iamVjdC5kdXJhdGlvbkxlZnQueWVhcnNMZWZ0fSB5ZWFycyBsZWZ0YDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9EdXJhdGlvbkxlZnREaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZCgndG9kby1wcm9qZWN0LWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1Byb2plY3REaXYudGV4dENvbnRlbnQgPSBvYmplY3QucHJvamVjdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9Qcm9qZWN0RGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5dERpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLXByaW9yaXR5LWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5dERpdi50ZXh0Q29udGVudCA9IG9iamVjdC5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9Qcmlvcml0eXREaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNFTkQgVE8gQSBTRVBBUkFURSBNT0RVTEUgLSBPUEVOUyBUT0RPIElURU1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmQodG9kb0Rpc3BsYXlDb250YWluZXIpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5jbGFzc0xpc3QuYWRkKCd0b2RvLWRpc3BsYXknKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5hcHBlbmQodG9kb0Rpc3BsYXkpO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1RpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS10aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVRpdGxlLnZhbHVlID0gb2JqZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlUaXRsZSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rlc2NUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS1kZXNjJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ0Rlc2NyaXB0aW9uJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCczMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncm93cycsJzEwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnZhbHVlID0gb2JqZWN0LmRlc2M7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvZG9EZXNjVGV4dEFyZWEpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5RGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5RGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LWRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlEYXRlLnZhbHVlID0gb2JqZWN0LmR1ZURhdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5RGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlEYXRlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZUJyZWFrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWsxKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheVJlbWluZEluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlSZW1pbmRJbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdudW1iZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlSZW1pbmRJbi5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LXJlbWluZC1pbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdSZW1pbmQgaW4gaG93IG1hbnkgZGF5cz8nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlSZW1pbmRJbi52YWx1ZSA9IG9iamVjdC5yZW1pbmRJbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlSZW1pbmRJbi5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlSZW1pbmRJbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVCcmVhazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazIpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxvYmplY3QucHJpb3JpdHkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS50ZXh0Q29udGVudCA9IG9iamVjdC5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlQcmlvcml0eSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGNsYXNzZXMgZm9yIGRpZmZlcmVudCBwcmlvcml0aWVzIChkaWZmZXJlbnQgY29sb3VycylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID09PSAnbG93Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPSAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9PT0gJ21lZGl1bScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID0gJ2hpZ2gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9PT0gJ2hpZ2gnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9ICdsb3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZUJyZWFrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrMyk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdHNEcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Byb2plY3QtZGlzcGxheS1jaG9pY2VzJyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1kaXNwbGF5LWNob2ljZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQocHJvamVjdHNEcm9wRG93bik7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5wcm9jZXNzZWRQcm9qZWN0ID0gcHJvamVjdE9iamVjdHMoKS51bnByb2Nlc3NlZFByb2plY3RBcnJheVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnNOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihvcHRpb25zTm9kZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc05vZGUuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uMC50ZXh0Q29udGVudCA9IG9iamVjdC5wcm9qZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uMC52YWx1ZSA9IG9iamVjdC5wcm9qZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5hcHBlbmQob3B0aW9uMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5wcm9jZXNzZWRQcm9qZWN0LmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnZhbHVlID0gb2JqLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzRHJvcERvd24uYXBwZW5kKHByb2plY3RPcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVCcmVhazQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgbGluZSBicmVhayBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMuc2V0QXR0cmlidXRlKCd2YWx1ZScsb2JqZWN0LnN0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LXN0YXR1cycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy50ZXh0Q29udGVudCA9IG9iamVjdC5zdGF0dXM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheVN0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc2VzIGZvciBkaWZmZXJlbnQgcHJpb3JpdGllcyAoZGlmZmVyZW50IGNvbG91cnMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0Rpc3BsYXlTdGF0dXMudmFsdWUgPT09ICdwZW5kaW5nJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnZhbHVlID0gJ2NvbXBsZXRlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0Rpc3BsYXlTdGF0dXMudmFsdWUgPT09ICdjb21wbGV0ZScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy52YWx1ZSA9ICdwZW5kaW5nJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSAnUGVuZGluZyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZUJyZWFrNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrNSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1VwZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS50ZXh0Q29udGVudCA9ICdVcGRhdGUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvVXBkYXRlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lQnJlYWs2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWs2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZWxldGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRlbGV0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZWxldGUuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvZG9EZWxldGUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRvZG9JdGVtKG9iamVjdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRvZG9JdGVtKG9iamVjdCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBhcHBlbmRUb2RvT2JqZWN0czsiLCIvLyBpbXBvcnQgcG9wdWxhdGVUb2RvQ29sbGVjdGlvbiBmcm9tIFwiLi9wb3B1bGF0ZURPTVRvZG9Db2xsZWN0aW9uXCI7XG5cbmltcG9ydCBhcHBlbmRQcm9qZWN0T2JqZWN0cyBmcm9tIFwiLi9wb3B1bGF0ZURPTVByb2plY3RDb2xsZWN0aW9uXCI7XG5cbmltcG9ydCB7IGNoYW5nZVByb2plY3RQcmlvcml0eSB9IGZyb20gXCIuLi9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXNcIjtcblxuZnVuY3Rpb24gcHJvamVjdERPTU1vZHVsZSAoKXtcblxuICAgIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1jb250YWluZXInKTtcblxuXG5cblxuICAgIC8vIG1vdmUgdG8gZG9tQWN0aXZpdHlcbiAgICBmdW5jdGlvbiByZW1vdmVFeGlzdGluZ0Rpc3BsYXlET00gKCl7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGRpc3BsYXlDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIFxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgfSk7XG5cbiAgICB9XG5cbiAgICByZW1vdmVFeGlzdGluZ0Rpc3BsYXlET00oKTtcblxuXG4gICAgXG5cblxuICAgIFxuXG5cbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHByb2plY3RDb250YWluZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lci10aXRsZScpO1xuXG4gICAgZGlzcGxheUNvbnRhaW5lci5hcHBlbmQocHJvamVjdENvbnRhaW5lclRpdGxlKTtcblxuICAgICAgICBjb25zdCB0YWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRhYlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RhYi10aXRsZScpO1xuXG4gICAgICAgIHByb2plY3RDb250YWluZXJUaXRsZS5hcHBlbmQodGFiVGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgICAgICAgICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG5cbiAgICAgICAgICAgIHRhYlRpdGxlLmFwcGVuZChwcm9qZWN0SGVhZGVyKTtcblxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgICAgICBwcm9qZWN0UGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ1lvdXIgY29sbGVjdGlvbiBvZiBQcm9qZWN0cyBhcmUgZGlzcGxheWVkIGhlcmUnO1xuXG4gICAgICAgICAgICB0YWJUaXRsZS5hcHBlbmQocHJvamVjdFBhcmFncmFwaCk7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHByaW9yaXR5QnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1idXR0b25zJyk7XG5cbiAgICAgICAgcHJvamVjdENvbnRhaW5lclRpdGxlLmFwcGVuZChwcmlvcml0eUJ1dHRvbnMpO1xuXG4gICAgICAgICAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgaGlnaFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgaGlnaFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICBoaWdoUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnSGlnaCc7XG5cbiAgICAgICAgICAgIHByaW9yaXR5QnV0dG9ucy5hcHBlbmQoaGlnaFByaW9yaXR5KTtcblxuXG4gICAgICAgICAgICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBtZWRpdW1Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcblxuICAgICAgICAgICAgcHJpb3JpdHlCdXR0b25zLmFwcGVuZChtZWRpdW1Qcmlvcml0eSk7XG5cblxuICAgICAgICAgICAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgbG93UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbG93LXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgICAgICAgICAgIHByaW9yaXR5QnV0dG9ucy5hcHBlbmQobG93UHJpb3JpdHkpO1xuXG4gICAgICAgICAgICBcblxuXG5cblxuXG4gICAgXG4gICAgY29uc3QgY29sbGVjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29sbGVjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2xsZWN0aW9uLWNvbnRhaW5lcicpO1xuXG4gICAgZGlzcGxheUNvbnRhaW5lci5hcHBlbmQoY29sbGVjdGlvbkNvbnRhaW5lcik7XG5cblxuICAgIGFwcGVuZFByb2plY3RPYmplY3RzKCdoaWdoJyk7XG5cbiAgICBjaGFuZ2VQcm9qZWN0UHJpb3JpdHkoKTtcbiAgICBcbiAgICBcbiAgICBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0RE9NTW9kdWxlOyIsImltcG9ydCBzb3J0aW5nTWV0aG9kcyBmcm9tICcuLi9kb21BY3Rpdml0aWVzL3NvcnRpbmdNZXRob2RzJ1xuXG5mdW5jdGlvbiBhbGxOb3Rlc1RhYiAoKXtcblxuICAgIGNvbnN0IGNsb25lVG9kb0FycmF5ID0gc29ydGluZ01ldGhvZHMuY2xvbmVPYmplY3QoKS5jbG9uZVRvZG9BcnJheTtcblxuICAgIGNvbnN0IG5vdGVzQXJyYXkgPSBzb3J0aW5nTWV0aG9kcy5ub3RlU29ydGVyKGNsb25lVG9kb0FycmF5KTtcblxuICAgIGNvbnNvbGUubG9nKCdOT1RFUyBUQUInKTtcblxuICAgIGNvbnNvbGUubG9nKG5vdGVzQXJyYXkpO1xuXG4gICAgcmV0dXJuIG5vdGVzQXJyYXk7XG5cblxuXG59XG5cbmFsbE5vdGVzVGFiKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFsbE5vdGVzVGFiOyIsImltcG9ydCBzb3J0aW5nTWV0aG9kcyBmcm9tICcuLi9kb21BY3Rpdml0aWVzL3NvcnRpbmdNZXRob2RzJ1xuXG5mdW5jdGlvbiBwcm9qZWN0c1RhYiAoKXtcblxuICAgICAgICBcblxuICAgIGNvbnN0IHVucHJvY2Vzc2VkUHJvamVjdEFycmF5ID0gc29ydGluZ01ldGhvZHMuc29ydEJ5UHJvamVjdE5hbWUoKS5wcm9jZXNzZWRQcm9qZWN0QXJyYXlCeU5hbWU7XG5cbiAgICBcblxuICAgIC8vIEFsbCBwcm9qZWN0cyBhcmUgc3RvcmVkIGhlcmVcbiAgICAvLyBGaXJzdCBzb3J0IHRoZSBwcm9qZWN0cyBieSBwcmlvcml0eVxuICAgIGNvbnN0IHByb2plY3RzQnlQcmlvcml0eSA9IHNvcnRpbmdNZXRob2RzLnByaW9yaXR5U29ydGVyKHVucHJvY2Vzc2VkUHJvamVjdEFycmF5KTtcblxuXG4gICAgXG5cbiAgICAvLyBUaGVuIHNvcnQgdGhlIG5vdGVzIGluIHRob3NlIHByb2plY3RzIGJ5IHByaW9yaXR5XG4gICAgZm9yIChjb25zdCBwcmlvcml0eUxldmVsIGluIHByb2plY3RzQnlQcmlvcml0eSkge1xuXG4gICAgICAgIHByb2plY3RzQnlQcmlvcml0eVtwcmlvcml0eUxldmVsXS5mb3JFYWNoKHByb2plY3QgPT4ge1xuXG4gICAgICAgICAgICAvLyBzb3J0IHByaW9yaXR5IG9mIHRvZG9Db2xsZWN0aW9uXG4gICAgICAgICAgICBjb25zdCBzb3J0QnlQcmlvcml0eSA9IHNvcnRpbmdNZXRob2RzLnByaW9yaXR5U29ydGVyKHByb2plY3QudG9kb0NvbGxlY3Rpb24pXG5cblxuICAgICAgICAgICAgLy8gU29ydCB0b2RvcyBieSBkdWUgZGF0ZVxuICAgICAgICAgICAgZm9yIChjb25zdCBwcmlvcml0eSBpbiBzb3J0QnlQcmlvcml0eSkge1xuXG4gICAgICAgICAgICAgICAgc29ydEJ5UHJpb3JpdHlbcHJpb3JpdHldID0gc29ydGluZ01ldGhvZHMuc29ydER1ZURhdGUoc29ydEJ5UHJpb3JpdHlbcHJpb3JpdHldKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBlbXB0eSB0b2RvQ29sbGVjdGlvblxuICAgICAgICAgICAgcHJvamVjdC50b2RvQ29sbGVjdGlvbiA9IFtdO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgbmV3IGtleSBhbmQgYXR0YWNoIHRoZSBzb3J0ZWQgb2JqZWN0XG4gICAgICAgICAgICBwcm9qZWN0LnRvZG9zQnlQcmlvcml0eSA9IHNvcnRCeVByaW9yaXR5O1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG5cbiAgICAvLyBTb3J0IHByb2plY3RzIGJ5IGR1ZSBkYXRlc1xuICAgIGZvciAoY29uc3QgcHJpb3JpdHkgaW4gcHJvamVjdHNCeVByaW9yaXR5KSB7XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0c0J5UHJpb3JpdHlbcHJpb3JpdHldID0gc29ydGluZ01ldGhvZHMuc29ydER1ZURhdGUocHJvamVjdHNCeVByaW9yaXR5W3ByaW9yaXR5XSk7XG5cbiAgICB9XG5cblxuXG5cblxuICAgIGNvbnNvbGUubG9nKCdQUk9KRUNUUyBUQUInKTtcblxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzQnlQcmlvcml0eSk7XG5cblxuICAgIHJldHVybiB7cHJvamVjdHNCeVByaW9yaXR5LHVucHJvY2Vzc2VkUHJvamVjdEFycmF5fTtcblxufVxuXG5wcm9qZWN0c1RhYigpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0c1RhYjsiLCJcbmltcG9ydCBzb3J0aW5nTWV0aG9kcyBmcm9tICcuLi9kb21BY3Rpdml0aWVzL3NvcnRpbmdNZXRob2RzJ1xuXG5mdW5jdGlvbiBhbGxUb2Rvc1RhYiAoKXtcblxuICAgIGNvbnN0IGNsb25lVG9kb0FycmF5ID0gc29ydGluZ01ldGhvZHMuY2xvbmVPYmplY3QoKS5jbG9uZVRvZG9BcnJheTtcbiAgICBjb25zdCBzb3J0ZWRUb2RvQXJyYXkgPSBzb3J0aW5nTWV0aG9kcy5wcmlvcml0eVNvcnRlcihjbG9uZVRvZG9BcnJheSk7XG5cbiAgICBmb3IgKGNvbnN0IHByaW9yaXR5IGluIHNvcnRlZFRvZG9BcnJheSkge1xuICAgICAgICBcbiAgICAgICAgc29ydGVkVG9kb0FycmF5W3ByaW9yaXR5XSA9IHNvcnRpbmdNZXRob2RzLnNvcnREdWVEYXRlKHNvcnRlZFRvZG9BcnJheVtwcmlvcml0eV0pO1xuXG4gICAgfVxuXG5cbiAgICBjb25zb2xlLmxvZyhzb3J0ZWRUb2RvQXJyYXkpO1xuXG4gICAgcmV0dXJuIHNvcnRlZFRvZG9BcnJheTtcblxuXG59XG5cbmNvbnNvbGUubG9nKCdUT0RPIFRBQicpO1xuYWxsVG9kb3NUYWIoKTtcblxuZXhwb3J0IGRlZmF1bHQgYWxsVG9kb3NUYWI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IGNyZWF0ZU1haW5ET00gZnJvbSBcIi4vZG9tQ3JlYXRpb24vbWFpbkRPTUNyZWF0aW9uXCI7XG5cbmltcG9ydCBkb21BY3Rpb24gZnJvbSBcIi4vZG9tQWN0aXZpdGllcy9kb21BY3Rpdml0aWVzXCI7XG5cbmltcG9ydCBjcmVhdGVUb2RvRE9NIGZyb20gXCIuL2RvbUNyZWF0aW9uL2FsbFRvZG9ET01DcmVhdGlvblwiXG5cblxuXG5cbi8vIEFsbCBtb2R1bGVzIHNob3VsZCBzdGFydCBoZXJlXG5cbi8vIEhPTUVQQUdFXG5jcmVhdGVNYWluRE9NKCk7XG5cbi8vIEF0dGFjaGVzIGFsbCBldmVudGxpc3RlbmVycyB0byBIT01FUEFHRVxuZG9tQWN0aW9uKCk7XG5cbi8vIExvYWRzIHRvZG8gZmlyc3RcbmNyZWF0ZVRvZG9ET00oKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=