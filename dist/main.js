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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml,\nbody{\n    width: 100%;\n    height: 100%;\n}\n\n\n\n\n.main-container{\n    position: relative;\n    height: 100%;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    grid-template-rows: 70px 1fr 40px;\n    grid-template-areas:\n    \"top-container top-container\" \n    \"note-menu display-container\"\n    \"todo-container-footer todo-container-footer\";\n\n    \n\n}\n\n\n.note-menu{\n    grid-area: note-menu;\n    height: 100%;\n    background-color: royalblue;\n}\n\n.note-menu > div > h1 {\n    cursor: pointer;\n    display: inline;\n}\n\n\n.top-container {\n    border: 1px solid red;\n    grid-area: top-container;\n    display: flex;\n    background-color: violet;\n}\n\n.top-container-spacing {\n    flex: 1;\n}\n\n.brand-container {\n    border: 1px solid green;\n    width: 250px;\n}\n\n\n.hamburger-menu {\n    border: 1px solid teal;\n    width: 70px;\n    display: none; /*display: block when display is below 600px */ \n}\n\n.display-container {\n    display: grid;\n    position: relative;\n\n    grid-area: display-container;\n    background-color: cornflowerblue;\n    width: 100%;\n    height: 100%;\n\n    grid-template-rows: 100px 1fr;\n\n    grid-template-areas: \n    \"todo-container-title\"\n    \"collection-container\";\n\n}\n\n\n\n\n\n.todo-container-title{\n\n    display: grid;\n    grid-area: todo-container-title;\n    background-color: slateblue;\n    border: 1px solid red;\n    \n}\n.priority-buttons{\n    display: grid;\n    border: 1px solid blue;\n    grid-template-columns: repeat(3,1fr);\n    grid-template-rows: 1fr;\n\n}\n\n.priority-buttons > button{\n    height: 25px;\n}\n\n.chosen-priority{\n    background-color: maroon;\n}\n\n.tab-title{\n    padding: 10px;\n    align-self: center;\n}\n\n.todo-container-footer{\n\n    display: grid;\n    grid-area: todo-container-footer;\n    background-color: slateblue;\n    align-items: center;\n    justify-items: center;\n}\n\n\n/* This is the tricky part */\n.collection-container{\n\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    border: 3px solid red;\n    background-color: darkcyan;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-area: collection-container;\n    \n\n    /* grid-template-rows: repeat(auto-fill, minmax(350px,1fr)); */\n\n    grid-auto-flow: row;\n\n    /* grid-template-rows: repeat(4, 350px); */\n    /* grid-template-rows: 1fr; */\n    /* overflow-y: auto; */\n    overflow: auto;\n\n    /* display: none; */\n    /* object-fit: cover; */\n    \n\n}\n\n/* .vertical-scroll{\n    overflow: auto;\n    border: 5px solid blue;\n} */\n\n.status-container{\n\n    border: 2px solid fuchsia;\n    overflow: auto;\n    height: 350px;\n\n}\n\n\n\n\n\n.overdue-container,\n.due-soon-container,\n.upcoming-container,\n.complete-container{\n\n    display: grid;\n    border: 4px solid gold;\n    height: 320px;\n    width: 100%;\n    background-color: indigo;\n    align-items: center;\n    justify-items: start;\n    \n    overflow: auto;\n\n}\n\n\n.scrollable-container{\n\n    display: grid;\n    column-gap: 10px;\n    grid-auto-flow: column; /*This was what i wanted to do*/\n    \n    border: 4px solid brown;\n\n}\n\n.todo-container{\n    width: 300px;\n    height: 220px;\n    border: 5px solid pink;\n    \n}\n\n.todo-display-container {\n    display: grid;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(255, 20, 145, 0.473);\n    align-items: center;\n    justify-items: center;\n    z-index: 2;\n}\n\n.todo-display {\n    background-color: purple;\n    width: 350px;\n    height: 500px;\n}\n\n\n\n\n\n\n.project-container{\n    width: 350px;\n    height: 250px;\n    border: 5px solid pink;\n    flex-shrink: 0;\n    \n}\n\n\n\n\n.project-todo-container {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    border: 2px solid dodgerblue;\n    background-color: rgba(218, 112, 214, 0.582);\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    z-index: 2;\n}\n\n.project-todos{\n\n    border: 3px solid cyan;\n    width: 350px;\n    height: 500px;\n    background-color: slateblue;\n    overflow: auto;\n\n}\n\n.todo-status-container{\n\n    border: 2px solid fuchsia;\n    overflow: auto;\n    /* height: 350px; */\n\n}\n\n.overdue-todos,\n.due-soon-todos,\n.upcoming-todos,\n.complete-todos{\n\n    display: grid;\n    border: 4px solid gold;\n    /* height: 320px; */\n    width: 100%;\n    background-color: rgb(56, 56, 255);\n    align-items: start;\n    justify-items: center;\n    \n    /* overflow: auto; */\n\n}\n\n\n.scrollable-todo-container{\n\n    display: grid;\n    row-gap: 10px;\n    /* height: 400px; */\n    grid-auto-flow: row; /*This was what i wanted to do*/\n    color: white;\n    \n    border: 4px solid brown;\n\n}\n\n\n\n\n\n\n\n.notes-collection{\n\n    display: grid;\n    border: 4px solid gold;\n    height: 100%;\n    width: 100%;\n    background-color: indigo;\n    align-items: center;\n    overflow: auto;\n    gap: 15px;\n    grid-template-columns: repeat(auto-fill, minmax(300px,1fr)); \n    border: 4px solid brown;\n\n}\n\n\n.notes-container{\n    width: 100%;\n    height: 300px;\n    border: 5px solid pink;\n    flex-shrink: 0;\n    \n}\n\n\n\n\n/* FORM BUTTON */\n\n.form-button-container{\n    position: fixed;\n    bottom: 50px;\n    right: 0;\n    width: 100px;\n    height: 100px;\n    border-radius: 50% 0% 0% 50%;\n    background-color: black;\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    \n}\n\n.form-button{\n    width: 70px;\n    height: 70px;\n    border-radius: 50%;\n    font-size: 50px;\n}\n\n/* TODO CREATION FORM */\n\n\n.form-container{\n\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(128, 128, 128, 0.527);\n    display: grid;\n    padding-top: 100px;\n    align-items: start;\n    justify-items: center;\n    overflow: auto;\n    padding-bottom: 100px;\n    display: none;\n\n}\n\n.show-form{\n    display: grid;\n}\n\n.todo-creation-form {\n    /* position: fixed; */\n    width: 400px;\n    /* height: 700px; */\n    background-color: maroon;\n    \n}\n\n.create-new-todo{\n    border: 3px solid forestgreen;\n    display: none;\n}\n\n.select-existing-project{\n    border: 3px solid skyblue;\n    display: none;\n}\n\n.create-new-project{\n    border: 3px solid crimson;\n    display: none;\n}\n\n.display-form-items{\n    display: grid;\n}\n\n\n/* Mobile version */\n\n@media screen and (max-width: 600px) {\n    \n\n    .hamburger-menu {\n        display: block;\n    }\n\n    .main-container {\n        border: 1px solid blue;\n        display: grid;\n        grid-template-rows: 70px 1fr 40px;\n        grid-template-columns: 1fr 300px;\n        grid-template-areas: \n        \"top-container top-container\" \n        \"display-container display-container\"\n        \"todo-container-footer todo-container-footer\";\n    \n    \n    \n    }\n\n    \n\n    .note-menu {\n        position: absolute;\n        display: grid;\n        justify-self: end;\n        align-self: end;\n        grid-row: 2/3;\n        grid-column: 2/3;\n        /* height: 90%; */\n        display: none;\n        width: 150px;\n        z-index: 1;\n    }\n\n    .menu-active { /*triggers when hamburger menu is clicked*/\n        display: grid;\n    }\n}"],"sourceRoot":""}]);
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

function projectModule () {

    // Factory function to create projects
    function projectFactory (title,desc,dueDate,priority,remindIn,status){


        return {title,desc,dueDate,priority,remindIn,status}
    }


    // This is where unsorted project arrays are stored
    const projectArray = [];


    function createProject (title,desc,dueDate,priority,remindIn,status){
        const newProject = projectFactory(title,desc,dueDate,priority,remindIn,status); //change this later if you need to
        projectArray.push(newProject);
        return;
    }


    // 8 high priority

    const currentDate = new Date();

    const day = currentDate.getDate();

    const month = currentDate.getMonth();

    const year = currentDate.getFullYear();

    let remind = -2;

    let remind1 = 0;

    for (let index = 4; index > 0; index--) {

        

        createProject(`project${index}test`,`desc${index}`,`${year + remind}-${month + remind}-${day + remind}`,`high`,remind,'complete');

        createProject(`project${index}test2`,`desc${index}`,`${year + remind}-${month + remind}-${day + remind}`,`high`,remind+index,'incomplete');

        remind = remind + index;

        
    }


    // 10 low priority
    for (let index = 6; index > 0; index--) {

        

        createProject(`project ${index}`,`desc${index}`,`${year + remind1}-${month + remind1}-${day + remind1}`,`low`,remind1,'complete');
        createProject(`project${index}ww`,`desc${index}`,`${year + remind1}-${month + remind1}-${day - remind1}`,`low`,remind1,'incomplete');
        createProject(`project${index}up`,`desc${index}`,`${year + remind1}-${month + remind1}-${day + remind1}`,`low`,remind1-1,'incomplete');
        
        remind1 = remind1 - index;
    }

        
    



    return {projectArray,createProject};

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
        
        return {title,desc,dueDate,remindIn,priority,status,project}
    }

    // This is where unsorted todo arrays are stored
    const todoArray = [];


    // this is the function that will be used to create Todos
    function createTodo (title,desc,dueDate,remindIn,priority,status,project = 'none'){
        const newToDo = todoFactory(title,desc,dueDate,remindIn,priority,status,project);
        todoArray.push(newToDo);
        return;
    }


    // This must be deleted later as it is created primarily for testing

    const currentDate = new Date();

    const day = currentDate.getDate();

    const month = currentDate.getMonth();

    const year = currentDate.getFullYear();


    for (let index = 1; index <= 10; index++) {

        createTodo(`title${index}`,`desc${index}`,`${year + index}-${month + index}-${day + index}`,index,`high`,`pending`,'project 2');

        createTodo(`title${index}`,`desc${index}`,`${year + index}-${month + index}-${day + index}`,index,`low`,`pending`,'project 2');

        createTodo(`title${index}`,`desc${index}`,'',index,`low`,`pending`,'project 2');


   
        
    }

    for (let index = 1; index <= 5; index++) {

        createTodo(`title${index}`,`desc${index}`,`${year + index}-${month + index}-${day + index}`,index,`high`,`complete`,'project1test');

        createTodo(`title${index}`,`desc${index}`,`${year + index}-${month + index}-${day + index}`,index,`medium`,`pending`,'project1test');

   
        
    }
    
    // oldDetails
    // newDetails
    // newTitle,newDesc,newDueDate,newRemindIn,newPriority,newStatus,newProject

    function updateTodo (oldDetails,newDetails){

        todoArray.forEach(todo => {

            // oldTitle: object.title,
            // oldDesc: object.desc,
            // oldDue: object.dueDate,
            // oldReminder: object.remindIn,
            // oldPriority: object.priority,
            // oldStatus: object.status,
            // oldProject: object.project,


            // newTitle: todoDisplayTitle.value,
            // newDesc: todoDescTextArea.value,
            // newDue: todoDisplayDate.value,
            // newReminder: todoDisplayRemindIn.value,
            // newPriority: todoDisplayPriority.value,
            // newStatus: todoDisplayStatus.value,
            // newProject: projectsDropDown.value, 

            // console.log(todo.title);
            // console.log(oldDetails.title)

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

        // console.log(newDetails.newProject)



    }

    

    // End of test objects

    return {todoArray, createTodo, updateTodo};


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
/* harmony export */   updateNoteItem: () => (/* binding */ updateNoteItem),
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
let recentCollectionContainerFn = _domCreation_populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_9__["default"];

let recentCollectionContainerArg = 'high';

function domActivitiesModule (){

    const mainContainer = document.querySelector('.main-container');

    mainContainer.addEventListener('click',function(e){

        

        if(menu.classList.contains("menu-active")){
            menu.classList.remove("menu-active");
            console.log('hamburgerrrr-remove')
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
        console.log('hamburger')

        if(!menu.classList.contains("menu-active")){
            menu.classList.add("menu-active");
            console.log('hamburgerrrr-addd')
            return;
        }


        if(menu.classList.contains("menu-active")){
            menu.classList.remove("menu-active");
            console.log('hamburgerrrr-remove')
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

    const selectExistingProject = document.querySelector('#existing-project');

    const selectNewProject = document.querySelector('#new-project');

    const existingProjectDiv = document.querySelector('.select-existing-project');

    const newProjectDiv = document.querySelector('.create-new-project');




    // To-do inputs
    const todoTitle = document.querySelector('#todo-title');

    const todoDesc = document.querySelector('#todo-desc');

    const entryType = isNote;

    const todoDate = document.querySelector('#todo-date');

    const todoReminder = document.querySelector('#todo-remind-in');

    const todoPriority = document.querySelector('#todo-priority');

    const existingProjectRadio = document.querySelector('#existing-project');

    const newProjectRadio = document.querySelector('#new-project');


    const todoInputs = [todoDate,todoReminder,todoPriority,existingProjectRadio];



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

        // console.log(existingProject);

        
        todoInputs.forEach(input => {
            input.setAttribute('required','');
        });
        

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
        // console.log('works!');
        
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
        const requiredInput = [];

        let requiredInputFilled = true;

        console.log(requiredInput);




        allFormInputs.forEach(element => {
            // console.log(element);
            if (element.hasAttribute('required')) {
                requiredInput.push(element);
            }
        });

        for (const each of requiredInput) {
            

            if(!each.value){
                requiredInputFilled = false;   
                console.log('false works');   
                break;      
            }

        }

        if(requiredInputFilled){

            console.log('preventDefault works!');

            e.preventDefault();

            
            hideForm();

            // create todo with form


            const resetArray = [projectTitle,projectDesc,projectDate,projectReminder,todoTitle,todoDesc,todoDate,todoReminder];


            if(newProjectRadio.checked){

                console.log('new project works');

                // title,desc,dueDate,priority,remindIn,status
                
                _createProjects__WEBPACK_IMPORTED_MODULE_1__["default"].createProject(projectTitle.value,projectDesc.value,projectDate.value,projectPriority.value,projectReminder.value,`pending`);


                // title,desc,dueDate,remindIn,priority,status,project

                _createTodos__WEBPACK_IMPORTED_MODULE_0__["default"].createTodo(todoTitle.value,todoDesc.value,todoDate.value,Number(todoReminder.value),todoPriority.value,`pending`,projectTitle.value);

                (0,_tabObjects_allTodosTab__WEBPACK_IMPORTED_MODULE_3__["default"])();

                (0,_tabObjects_allProjectsTab__WEBPACK_IMPORTED_MODULE_4__["default"])();

                (0,_tabObjects_allNotesTab__WEBPACK_IMPORTED_MODULE_2__["default"])();

                resetArray.forEach(input => {
                    input.value = '';
                });

                //everytime submit button is clicked fresh dropdown is created 
                _domCreation_formDOMCreation__WEBPACK_IMPORTED_MODULE_5__["default"].existingProjectOptions();

                recentCollectionContainerFn(recentCollectionContainerArg)



                return;

            }

            // create to-dos and notes

            _createTodos__WEBPACK_IMPORTED_MODULE_0__["default"].createTodo(todoTitle.value,todoDesc.value,todoDate.value,Number(todoReminder.value),todoPriority.value,`pending`,projectsChoices.value);

            (0,_tabObjects_allTodosTab__WEBPACK_IMPORTED_MODULE_3__["default"])();

            (0,_tabObjects_allProjectsTab__WEBPACK_IMPORTED_MODULE_4__["default"])();

            (0,_tabObjects_allNotesTab__WEBPACK_IMPORTED_MODULE_2__["default"])();

            resetArray.forEach(input => {

                input.value = '';
            });

            //everytime submit button is clicked fresh dropdown is created 
            _domCreation_formDOMCreation__WEBPACK_IMPORTED_MODULE_5__["default"].existingProjectOptions();

            if (selectNote.checked) {
                (0,_domCreation_populateDOMNoteCollection__WEBPACK_IMPORTED_MODULE_11__["default"])();
                return;
            }

            recentCollectionContainerFn(recentCollectionContainerArg);


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

        
        console.log('click works')
        hideForm();
            
    })

    const formButton = document.querySelector('.form-button');

    formButton.addEventListener('click',function(){

        formContainer.classList.add('show-form');

        console.log('test');

    })












    const allTodosTab = document.querySelector('.all-todos-tab');

    allTodosTab.addEventListener('click',function(){

        console.log('TO DO LIST');
        (0,_domCreation_allTodoDOMCreation__WEBPACK_IMPORTED_MODULE_6__["default"])();

    });

    const allProjectsTab = document.querySelector('.all-projects-tab')

    allProjectsTab.addEventListener('click',function(){

        console.log('PROJECTS TAB');
        (0,_domCreation_projectsDOMCreation__WEBPACK_IMPORTED_MODULE_7__["default"])()

    })


    const allNotesTab = document.querySelector('.all-notes-tab');

    allNotesTab.addEventListener('click',function(){

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

        recentCollectionContainerFn = _domCreation_populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_9__["default"];
        recentCollectionContainerArg = 'high';
        console.log('LOOPING')

        // console.log(recentCollectionContainerFn);
    });

    

    mediumPriorityButton.addEventListener('click',function(){
        
        const priorityButtons = document.querySelector('.priority-buttons');
        
        priorityButtons.querySelectorAll('*').forEach(element => {
            element.classList.remove('chosen-priority')
        });

        mediumPriorityButton.classList.add('chosen-priority');

        (0,_domCreation_populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_9__["default"])('medium');

        recentCollectionContainerFn = _domCreation_populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_9__["default"];
        recentCollectionContainerArg = 'medium';
        console.log('LOOPING')
    });


   
    lowPriorityButton.addEventListener('click',function(){

        const priorityButtons = document.querySelector('.priority-buttons');

        priorityButtons.querySelectorAll('*').forEach(element => {
            
            element.classList.remove('chosen-priority')
        });

        lowPriorityButton.classList.add('chosen-priority');

        (0,_domCreation_populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_9__["default"])('low');

        recentCollectionContainerFn = _domCreation_populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_9__["default"];
        recentCollectionContainerArg = 'low';
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

        recentCollectionContainerFn = _domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__["default"];
        recentCollectionContainerArg = 'high';
        console.log('LOOPING')

        // console.log(recentCollectionContainerFn);
    });

    

    mediumPriorityButton.addEventListener('click',function(){
        
        const priorityButtons = document.querySelector('.priority-buttons');
        
        priorityButtons.querySelectorAll('*').forEach(element => {
            element.classList.remove('chosen-priority')
        });

        mediumPriorityButton.classList.add('chosen-priority');

        (0,_domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__["default"])('medium');

        recentCollectionContainerFn = _domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__["default"];
        recentCollectionContainerArg = 'medium';
        console.log('LOOPING')
    });


   
    lowPriorityButton.addEventListener('click',function(){

        const priorityButtons = document.querySelector('.priority-buttons');

        priorityButtons.querySelectorAll('*').forEach(element => {
            
            element.classList.remove('chosen-priority')
        });

        lowPriorityButton.classList.add('chosen-priority');

        (0,_domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__["default"])('low');

        recentCollectionContainerFn = _domCreation_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_10__["default"];
        recentCollectionContainerArg = 'low';
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

        recentCollectionContainerFn(recentCollectionContainerArg);

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
        // const newTodoDue = document.querySelector('#todo-display-date');
        // const newTodoReminder = document.querySelector('#todo-display-remind-in');
        // const newTodoPriority = document.querySelector('#todo-display-priority');
        // const newTodoStatus = document.querySelector('#todo-display-status');
        // const newTodoProject = document.querySelector('#project-display-choices');
        
        

        let newDetails = {
            newTitle: newTodoTitle.value,
            newDesc: newTodoDesc.value,
            // newDue: newTodoDue.value,
            // newReminder: newTodoReminder.value,
            // newPriority: newTodoPriority.value,
            // newStatus: newTodoStatus.value,
            // newProject: newTodoProject.value,
        }
        
        _createTodos__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(object,newDetails);

        recentCollectionContainerFn(recentCollectionContainerArg);

        todoDisplayContainer.remove();

        });


        
        todoDisplayContainer.addEventListener('click',function(){
            todoDisplayContainer.remove();
        })

        todoDisplay.addEventListener('click',function(e){
            e.stopPropagation();
        })



    }

  

   


//    changePriority();

// et recentCollectionContainerFn = populateTodoCollection;

// let recentCollectionContainerArg = 'high';

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

        console.log('main dOm');
    


    

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

                                existingProjectRadio.setAttribute('name','project');

                                existingProjectRadio.setAttribute('checked','');

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

                            // console.log(unprocessedProject.title);

                                const unprocessedProject = (0,_tabObjects_allProjectsTab__WEBPACK_IMPORTED_MODULE_0__["default"])().unprocessedProjectArray

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


                                

                        }

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

    console.log(notesArray);

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


                    // const todoDisplayDate = document.createElement('input');

                    // todoDisplayDate.setAttribute('type','date');

                    // todoDisplayDate.setAttribute('id','todo-display-date');

                    // todoDisplayDate.value = object.dueDate;

                    // todoDisplayDate.classList.add('todo-update');

                    // todoDisplay.append(todoDisplayDate);

                    // const lineBreak1 = document.createElement('br');                                               
                    // todoDisplay.append(lineBreak1);


                    // const todoDisplayRemindIn = document.createElement('input');

                    // todoDisplayRemindIn.setAttribute('type','number');

                    // todoDisplayRemindIn.setAttribute('id','todo-display-remind-in');

                    // console.log(object.dueDate);

                    // todoDisplayRemindIn.setAttribute('placeholder','Remind in how many days?');

                    // todoDisplayRemindIn.value = object.remindIn;

                    // todoDisplayRemindIn.classList.add('todo-update');

                    // todoDisplay.append(todoDisplayRemindIn);

                    // const lineBreak2 = document.createElement('br');
                    // todoDisplay.append(lineBreak2);


                    // const todoDisplayPriority = document.createElement('button');

                    // todoDisplayPriority.setAttribute('value',object.priority);

                    // todoDisplayPriority.setAttribute('type','button');

                    // todoDisplayPriority.setAttribute('id','todo-display-priority');

                    // todoDisplayPriority.textContent = object.priority;

                    // todoDisplayPriority.classList.add('todo-update');

                    // todoDisplay.append(todoDisplayPriority);

                    // todoDisplayPriority.addEventListener('click', function(){

                        
                    //     console.log(todoDisplayPriority.value)

                    //     // Add classes for different priorities (different colours)

                    //     if (todoDisplayPriority.value === 'low'){
                    //         todoDisplayPriority.value = 'medium';
                    //         todoDisplayPriority.textContent = 'Medium';

                    //         return;
                    //     }

                    //     if (todoDisplayPriority.value === 'medium'){
                    //         todoDisplayPriority.value = 'high';
                    //         todoDisplayPriority.textContent = 'High';

                    //         return;
                    //     }

                    //     if (todoDisplayPriority.value === 'high'){
                    //         todoDisplayPriority.value = 'low';
                    //         todoDisplayPriority.textContent = 'Low';

                    //         return;
                    //     }


                    // });

                    // const lineBreak3 = document.createElement('br');
                    // todoDisplay.append(lineBreak3);


                    // const projectsDropDown = document.createElement('select');

                    // projectsDropDown.setAttribute('name','project-display-choices');

                    // projectsDropDown.setAttribute('id','project-display-choices');

                    // projectsDropDown.classList.add('form-input');

                    // todoDisplay.append(projectsDropDown);




                    //         const unprocessedProject = projectObjects().unprocessedProjectArray

                    //         const optionsNode = document.querySelectorAll('option');
                
                    //         if(optionsNode){
                
                    //             optionsNode.forEach(option => {
                    //                 option.remove();
                    //             });
                
                    //         }
                
                    //         const option0 = document.createElement('option');
                
                    //         option0.textContent = object.project;
                
                    //         option0.value = object.project;
                
                    //         projectsDropDown.append(option0);
                
                
                    //         unprocessedProject.forEach(obj => {
                    //             // console.log(object.title);
                
                    //             const projectOption = document.createElement('option');
                
                    //             projectOption.textContent = obj.title;
                
                    //             projectOption.value = obj.title;
                
                    //             projectsDropDown.append(projectOption);
                    //         });



                    // const lineBreak4 = document.createElement('br');
                    // todoDisplay.append(lineBreak4);

                    // create line break 

                    // const todoDisplayStatus = document.createElement('button');

                    // todoDisplayStatus.setAttribute('value',object.status);

                    // todoDisplayStatus.setAttribute('type','button');

                    // todoDisplayStatus.setAttribute('id','todo-display-status');

                    // todoDisplayStatus.textContent = object.status;

                    // todoDisplayStatus.classList.add('todo-update');

                    // todoDisplay.append(todoDisplayStatus);

                    // todoDisplayStatus.addEventListener('click', function(){

                    //     // Add classes for different priorities (different colours)

                    //     if (todoDisplayStatus.value === 'pending'){
                    //         todoDisplayStatus.value = 'complete';
                    //         todoDisplayStatus.textContent = 'Complete';

                    //         return;
                    //     }

                    //     if (todoDisplayStatus.value === 'complete'){
                    //         todoDisplayStatus.value = 'pending';
                    //         todoDisplayStatus.textContent = 'Pending';

                    //         return;
                    //     }


                    // });

                    const lineBreak5 = document.createElement('br');
                    todoDisplay.append(lineBreak5);


                    const todoUpdate = document.createElement('button');

                    todoUpdate.setAttribute('value','');

                    todoUpdate.setAttribute('type','button');

                    todoUpdate.setAttribute('id','todo-update');

                    todoUpdate.textContent = 'Update';

                    todoUpdate.classList.add('todo-update');

                    todoDisplay.append(todoUpdate);


                    (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__.updateNoteItem)(object);
                
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

    console.log('WORKKK!')

    

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
                                arrayByDueStatus.forEach(object => {
                                    
                                    const projectContainer = document.createElement('div');

                                    projectContainer.classList.add('project-container');

                                    scrollableContainer.append(projectContainer);


                                        const projectTitleDiv = document.createElement('div');

                                        projectTitleDiv.classList.add('project-title-div');

                                        projectTitleDiv.textContent = object.title;

                                        projectContainer.append(projectTitleDiv);


                                        const projectDescDiv = document.createElement('div');

                                        projectDescDiv.classList.add('project-desc-div');

                                        projectDescDiv.textContent = object.desc;

                                        projectContainer.append(projectDescDiv);


                                        const projectDateDiv = document.createElement('div');

                                        projectDateDiv.classList.add('project-date-div');

                                        projectDateDiv.textContent = object.dueDate;

                                        projectContainer.append(projectDateDiv);


                                        const projectDurationLeftDiv = document.createElement('div');

                                        projectDurationLeftDiv.classList.add('project-dur-left-div');

                                        projectDurationLeftDiv.textContent = `${object.durationLeft.dayLeft} days, ${object.durationLeft.monthsLeft} months and ${object.durationLeft.yearsLeft} years left`;

                                        projectContainer.append(projectDurationLeftDiv);


                                        const projectPrioritytDiv = document.createElement('div');

                                        projectPrioritytDiv.classList.add('project-priority-div');

                                        projectPrioritytDiv.textContent = object.priority;

                                        projectContainer.append(projectPrioritytDiv);


                                        // DISPLAY PROJECT TODOS - send project container as an argument
                                            projectContainer.addEventListener('click',function(){
                                                console.log('BOOM BOOM!');

                                                console.log(object.todosByPriority);    

                                                const mainContainer = document.querySelector('.main-container');

                                                    const projectTodoContainer = document.createElement('div');

                                                    projectTodoContainer.classList.add('project-todo-container');

                                                    mainContainer.append(projectTodoContainer);

                                                        const projectTodos = document.createElement('div');

                                                        projectTodos.classList.add('project-todos');

                                                        projectTodoContainer.append(projectTodos);

                                                        projectTodos.addEventListener('click',function(e){
                                                            e.stopPropagation();
                                                        })

                                                        const allProjectTodos = object.todosByPriority;

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
/* harmony import */ var _createTodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createTodos */ "./src/createTodos.js");
/* harmony import */ var _tabObjects_allProjectsTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tabObjects/allProjectsTab */ "./src/tabObjects/allProjectsTab.js");
/* harmony import */ var _domActivities_domActivities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domActivities/domActivities */ "./src/domActivities/domActivities.js");


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




                                                        const unprocessedProject = (0,_tabObjects_allProjectsTab__WEBPACK_IMPORTED_MODULE_2__["default"])().unprocessedProjectArray

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


                                                (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_3__.updateTodoItem)(object);
                                            
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

    // populateTodoCollection('high');
    (0,_populateDOMProjectCollection__WEBPACK_IMPORTED_MODULE_0__["default"])('high');

    (0,_domActivities_domActivities__WEBPACK_IMPORTED_MODULE_1__.changeProjectPriority)();
    
    // domAction()

    
    
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

    // console.log(notesArray);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBaUU7O0FBRWpFOztBQUVBLDZDQUE2QztBQUM3QyxnQ0FBZ0M7QUFDaEMseUJBQXlCO0FBQ3pCOztBQUVBLHNCQUFzQjtBQUN0QiwwQkFBMEI7QUFDMUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFRQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBLFlBQVk7OztBQUdaOzs7QUFHQTs7O0FBR0E7QUFDQSxpRUFBZSxxQkFBcUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hJckM7O0FBRXdDOztBQUVNOztBQUVNOzs7QUFHRDs7QUFFTTs7QUFFRTs7QUFFRzs7QUFFSTs7QUFFRjs7QUFFYzs7QUFFQzs7QUFFTjs7QUFFekU7QUFDQSxrQ0FBa0MsOEVBQXNCOztBQUV4RDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOzs7QUFHTDs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxLQUFLOztBQUVMOztBQUVBOzs7O0FBSUE7O0FBRUE7Ozs7QUFJ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QUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7O0FBSUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLGlDQUFpQzs7O0FBR2pDOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOzs7QUFHQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxpQ0FBaUM7OztBQUdqQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7O0FBTUE7O0FBRUE7O0FBRUEsMkRBQTJELHNFQUFjOztBQUV6RTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDOztBQUVyQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGlDQUFpQzs7O0FBR2pDOztBQUVBOztBQUVBOzs7OztBQUtBLGdDQUFnQzs7O0FBR2hDOztBQUVBOzs7QUFHQSxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7O0FDdHRCNUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQSxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7O0FDekh3QjtBQUNZOztBQUVoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7OztBQUdMOztBQUVBOztBQUVBOztBQUVBLHVCQUF1QixtRUFBVzs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxSUFBcUksNkJBQTZCLFFBQVEsZ0NBQWdDLGFBQWEsK0JBQStCO0FBQ3RQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLHlHQUF5Rzs7QUFFekc7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0EsMklBQTJJLHNFQUFjOztBQUV6SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxSEFBcUg7QUFDckg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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RUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVRvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUFjdGl2aXRpZXMvc29ydGluZ01ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL2FsbE5vdGVzRE9NQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL2FsbFRvZG9ET01DcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tQ3JlYXRpb24vZm9ybURPTUNyZWF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21DcmVhdGlvbi9tYWluRE9NQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL3BvcHVsYXRlRE9NTm90ZUNvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL3BvcHVsYXRlRE9NUHJvamVjdENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL3BvcHVsYXRlRE9NVG9kb0NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNyZWF0aW9uL3Byb2plY3RzRE9NQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RhYk9iamVjdHMvYWxsTm90ZXNUYWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RhYk9iamVjdHMvYWxsUHJvamVjdHNUYWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RhYk9iamVjdHMvYWxsVG9kb3NUYWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuXG5cblxuLm1haW4tY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmciA0MHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJ0b3AtY29udGFpbmVyIHRvcC1jb250YWluZXJcIiBcbiAgICBcIm5vdGUtbWVudSBkaXNwbGF5LWNvbnRhaW5lclwiXG4gICAgXCJ0b2RvLWNvbnRhaW5lci1mb290ZXIgdG9kby1jb250YWluZXItZm9vdGVyXCI7XG5cbiAgICBcblxufVxuXG5cbi5ub3RlLW1lbnV7XG4gICAgZ3JpZC1hcmVhOiBub3RlLW1lbnU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcbn1cblxuLm5vdGUtbWVudSA+IGRpdiA+IGgxIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG5cbi50b3AtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgZ3JpZC1hcmVhOiB0b3AtY29udGFpbmVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmlvbGV0O1xufVxuXG4udG9wLWNvbnRhaW5lci1zcGFjaW5nIHtcbiAgICBmbGV4OiAxO1xufVxuXG4uYnJhbmQtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgICB3aWR0aDogMjUwcHg7XG59XG5cblxuLmhhbWJ1cmdlci1tZW51IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0ZWFsO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qZGlzcGxheTogYmxvY2sgd2hlbiBkaXNwbGF5IGlzIGJlbG93IDYwMHB4ICovIFxufVxuXG4uZGlzcGxheS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgZ3JpZC1hcmVhOiBkaXNwbGF5LWNvbnRhaW5lcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcblxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgIFwidG9kby1jb250YWluZXItdGl0bGVcIlxuICAgIFwiY29sbGVjdGlvbi1jb250YWluZXJcIjtcblxufVxuXG5cblxuXG5cbi50b2RvLWNvbnRhaW5lci10aXRsZXtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiB0b2RvLWNvbnRhaW5lci10aXRsZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWJsdWU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIFxufVxuLnByaW9yaXR5LWJ1dHRvbnN7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcblxufVxuXG4ucHJpb3JpdHktYnV0dG9ucyA+IGJ1dHRvbntcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5jaG9zZW4tcHJpb3JpdHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xufVxuXG4udGFiLXRpdGxle1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4udG9kby1jb250YWluZXItZm9vdGVye1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IHRvZG8tY29udGFpbmVyLWZvb3RlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWJsdWU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLyogVGhpcyBpcyB0aGUgdHJpY2t5IHBhcnQgKi9cbi5jb2xsZWN0aW9uLWNvbnRhaW5lcntcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC1hcmVhOiBjb2xsZWN0aW9uLWNvbnRhaW5lcjtcbiAgICBcblxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LDFmcikpOyAqL1xuXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcblxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDM1MHB4KTsgKi9cbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjsgKi9cbiAgICAvKiBvdmVyZmxvdy15OiBhdXRvOyAqL1xuICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cbiAgICAvKiBvYmplY3QtZml0OiBjb3ZlcjsgKi9cbiAgICBcblxufVxuXG4vKiAudmVydGljYWwtc2Nyb2xse1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsdWU7XG59ICovXG5cbi5zdGF0dXMtY29udGFpbmVye1xuXG4gICAgYm9yZGVyOiAycHggc29saWQgZnVjaHNpYTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBoZWlnaHQ6IDM1MHB4O1xuXG59XG5cblxuXG5cblxuLm92ZXJkdWUtY29udGFpbmVyLFxuLmR1ZS1zb29uLWNvbnRhaW5lcixcbi51cGNvbWluZy1jb250YWluZXIsXG4uY29tcGxldGUtY29udGFpbmVye1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCBnb2xkO1xuICAgIGhlaWdodDogMzIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5kaWdvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XG4gICAgXG4gICAgb3ZlcmZsb3c6IGF1dG87XG5cbn1cblxuXG4uc2Nyb2xsYWJsZS1jb250YWluZXJ7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGNvbHVtbi1nYXA6IDEwcHg7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjsgLypUaGlzIHdhcyB3aGF0IGkgd2FudGVkIHRvIGRvKi9cbiAgICBcbiAgICBib3JkZXI6IDRweCBzb2xpZCBicm93bjtcblxufVxuXG4udG9kby1jb250YWluZXJ7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMjIwcHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgcGluaztcbiAgICBcbn1cblxuLnRvZG8tZGlzcGxheS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjAsIDE0NSwgMC40NzMpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDI7XG59XG5cbi50b2RvLWRpc3BsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbn1cblxuXG5cblxuXG5cbi5wcm9qZWN0LWNvbnRhaW5lcntcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCBwaW5rO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIFxufVxuXG5cblxuXG4ucHJvamVjdC10b2RvLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE4LCAxMTIsIDIxNCwgMC41ODIpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMjtcbn1cblxuLnByb2plY3QtdG9kb3N7XG5cbiAgICBib3JkZXI6IDNweCBzb2xpZCBjeWFuO1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlYmx1ZTtcbiAgICBvdmVyZmxvdzogYXV0bztcblxufVxuXG4udG9kby1zdGF0dXMtY29udGFpbmVye1xuXG4gICAgYm9yZGVyOiAycHggc29saWQgZnVjaHNpYTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAvKiBoZWlnaHQ6IDM1MHB4OyAqL1xuXG59XG5cbi5vdmVyZHVlLXRvZG9zLFxuLmR1ZS1zb29uLXRvZG9zLFxuLnVwY29taW5nLXRvZG9zLFxuLmNvbXBsZXRlLXRvZG9ze1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCBnb2xkO1xuICAgIC8qIGhlaWdodDogMzIwcHg7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA1NiwgMjU1KTtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIFxuICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xuXG59XG5cblxuLnNjcm9sbGFibGUtdG9kby1jb250YWluZXJ7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHJvdy1nYXA6IDEwcHg7XG4gICAgLyogaGVpZ2h0OiA0MDBweDsgKi9cbiAgICBncmlkLWF1dG8tZmxvdzogcm93OyAvKlRoaXMgd2FzIHdoYXQgaSB3YW50ZWQgdG8gZG8qL1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBcbiAgICBib3JkZXI6IDRweCBzb2xpZCBicm93bjtcblxufVxuXG5cblxuXG5cblxuXG4ubm90ZXMtY29sbGVjdGlvbntcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYm9yZGVyOiA0cHggc29saWQgZ29sZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5kaWdvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZ2FwOiAxNXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LDFmcikpOyBcbiAgICBib3JkZXI6IDRweCBzb2xpZCBicm93bjtcblxufVxuXG5cbi5ub3Rlcy1jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCBwaW5rO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIFxufVxuXG5cblxuXG4vKiBGT1JNIEJVVFRPTiAqL1xuXG4uZm9ybS1idXR0b24tY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDUwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDAlIDAlIDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG59XG5cbi5mb3JtLWJ1dHRvbntcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLyogVE9ETyBDUkVBVElPTiBGT1JNICovXG5cblxuLmZvcm0tY29udGFpbmVye1xuXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTI3KTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuXG59XG5cbi5zaG93LWZvcm17XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLnRvZG8tY3JlYXRpb24tZm9ybSB7XG4gICAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICAvKiBoZWlnaHQ6IDcwMHB4OyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcbiAgICBcbn1cblxuLmNyZWF0ZS1uZXctdG9kb3tcbiAgICBib3JkZXI6IDNweCBzb2xpZCBmb3Jlc3RncmVlbjtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2VsZWN0LWV4aXN0aW5nLXByb2plY3R7XG4gICAgYm9yZGVyOiAzcHggc29saWQgc2t5Ymx1ZTtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uY3JlYXRlLW5ldy1wcm9qZWN0e1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGNyaW1zb247XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRpc3BsYXktZm9ybS1pdGVtc3tcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG5cbi8qIE1vYmlsZSB2ZXJzaW9uICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgXG5cbiAgICAuaGFtYnVyZ2VyLW1lbnUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAubWFpbi1jb250YWluZXIge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyIDQwcHg7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDMwMHB4O1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgXCJ0b3AtY29udGFpbmVyIHRvcC1jb250YWluZXJcIiBcbiAgICAgICAgXCJkaXNwbGF5LWNvbnRhaW5lciBkaXNwbGF5LWNvbnRhaW5lclwiXG4gICAgICAgIFwidG9kby1jb250YWluZXItZm9vdGVyIHRvZG8tY29udGFpbmVyLWZvb3RlclwiO1xuICAgIFxuICAgIFxuICAgIFxuICAgIH1cblxuICAgIFxuXG4gICAgLm5vdGUtbWVudSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgICAgICAgZ3JpZC1yb3c6IDIvMztcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICAgICAgLyogaGVpZ2h0OiA5MCU7ICovXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAubWVudS1hY3RpdmUgeyAvKnRyaWdnZXJzIHdoZW4gaGFtYnVyZ2VyIG1lbnUgaXMgY2xpY2tlZCovXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10s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YTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0EsbUJBQW1COztBQUVuQjs7O0lBR0k7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLGFBQWE7UUFDYixpQ0FBaUM7UUFDakMsZ0NBQWdDO1FBQ2hDOzs7cURBRzZDOzs7O0lBSWpEOzs7O0lBSUE7UUFDSSxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLFlBQVk7UUFDWixVQUFVO0lBQ2Q7O0lBRUEsZUFBZSwwQ0FBMEM7UUFDckQsYUFBYTtJQUNqQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG5cXG5cXG4ubWFpbi1jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyIDQwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0b3AtY29udGFpbmVyIHRvcC1jb250YWluZXJcXFwiIFxcbiAgICBcXFwibm90ZS1tZW51IGRpc3BsYXktY29udGFpbmVyXFxcIlxcbiAgICBcXFwidG9kby1jb250YWluZXItZm9vdGVyIHRvZG8tY29udGFpbmVyLWZvb3RlclxcXCI7XFxuXFxuICAgIFxcblxcbn1cXG5cXG5cXG4ubm90ZS1tZW51e1xcbiAgICBncmlkLWFyZWE6IG5vdGUtbWVudTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XFxufVxcblxcbi5ub3RlLW1lbnUgPiBkaXYgPiBoMSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG5cXG4udG9wLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgZ3JpZC1hcmVhOiB0b3AtY29udGFpbmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2aW9sZXQ7XFxufVxcblxcbi50b3AtY29udGFpbmVyLXNwYWNpbmcge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uYnJhbmQtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgIHdpZHRoOiAyNTBweDtcXG59XFxuXFxuXFxuLmhhbWJ1cmdlci1tZW51IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdGVhbDtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qZGlzcGxheTogYmxvY2sgd2hlbiBkaXNwbGF5IGlzIGJlbG93IDYwMHB4ICovIFxcbn1cXG5cXG4uZGlzcGxheS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIGdyaWQtYXJlYTogZGlzcGxheS1jb250YWluZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJ0b2RvLWNvbnRhaW5lci10aXRsZVxcXCJcXG4gICAgXFxcImNvbGxlY3Rpb24tY29udGFpbmVyXFxcIjtcXG5cXG59XFxuXFxuXFxuXFxuXFxuXFxuLnRvZG8tY29udGFpbmVyLXRpdGxle1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IHRvZG8tY29udGFpbmVyLXRpdGxlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWJsdWU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgXFxufVxcbi5wcmlvcml0eS1idXR0b25ze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcblxcbn1cXG5cXG4ucHJpb3JpdHktYnV0dG9ucyA+IGJ1dHRvbntcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uY2hvc2VuLXByaW9yaXR5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXJvb247XFxufVxcblxcbi50YWItdGl0bGV7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyLWZvb3RlcntcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiB0b2RvLWNvbnRhaW5lci1mb290ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlYmx1ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4vKiBUaGlzIGlzIHRoZSB0cmlja3kgcGFydCAqL1xcbi5jb2xsZWN0aW9uLWNvbnRhaW5lcntcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC1hcmVhOiBjb2xsZWN0aW9uLWNvbnRhaW5lcjtcXG4gICAgXFxuXFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LDFmcikpOyAqL1xcblxcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcblxcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAzNTBweCk7ICovXFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogMWZyOyAqL1xcbiAgICAvKiBvdmVyZmxvdy15OiBhdXRvOyAqL1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG5cXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cXG4gICAgLyogb2JqZWN0LWZpdDogY292ZXI7ICovXFxuICAgIFxcblxcbn1cXG5cXG4vKiAudmVydGljYWwtc2Nyb2xse1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmx1ZTtcXG59ICovXFxuXFxuLnN0YXR1cy1jb250YWluZXJ7XFxuXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGZ1Y2hzaWE7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcblxcbn1cXG5cXG5cXG5cXG5cXG5cXG4ub3ZlcmR1ZS1jb250YWluZXIsXFxuLmR1ZS1zb29uLWNvbnRhaW5lcixcXG4udXBjb21pbmctY29udGFpbmVyLFxcbi5jb21wbGV0ZS1jb250YWluZXJ7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGdvbGQ7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxufVxcblxcblxcbi5zY3JvbGxhYmxlLWNvbnRhaW5lcntcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjsgLypUaGlzIHdhcyB3aGF0IGkgd2FudGVkIHRvIGRvKi9cXG4gICAgXFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJyb3duO1xcblxcbn1cXG5cXG4udG9kby1jb250YWluZXJ7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAyMjBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcGluaztcXG4gICAgXFxufVxcblxcbi50b2RvLWRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjAsIDE0NSwgMC40NzMpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi50b2RvLWRpc3BsYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLnByb2plY3QtY29udGFpbmVye1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHBpbms7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuXFxuLnByb2plY3QtdG9kby1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGRvZGdlcmJsdWU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE4LCAxMTIsIDIxNCwgMC41ODIpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5wcm9qZWN0LXRvZG9ze1xcblxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBjeWFuO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlYmx1ZTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxufVxcblxcbi50b2RvLXN0YXR1cy1jb250YWluZXJ7XFxuXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGZ1Y2hzaWE7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAvKiBoZWlnaHQ6IDM1MHB4OyAqL1xcblxcbn1cXG5cXG4ub3ZlcmR1ZS10b2RvcyxcXG4uZHVlLXNvb24tdG9kb3MsXFxuLnVwY29taW5nLXRvZG9zLFxcbi5jb21wbGV0ZS10b2Rvc3tcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgZ29sZDtcXG4gICAgLyogaGVpZ2h0OiAzMjBweDsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNTYsIDI1NSk7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXFxuXFxufVxcblxcblxcbi5zY3JvbGxhYmxlLXRvZG8tY29udGFpbmVye1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICByb3ctZ2FwOiAxMHB4O1xcbiAgICAvKiBoZWlnaHQ6IDQwMHB4OyAqL1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93OyAvKlRoaXMgd2FzIHdoYXQgaSB3YW50ZWQgdG8gZG8qL1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIFxcbiAgICBib3JkZXI6IDRweCBzb2xpZCBicm93bjtcXG5cXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLm5vdGVzLWNvbGxlY3Rpb257XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGdvbGQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluZGlnbztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGdhcDogMTVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsMWZyKSk7IFxcbiAgICBib3JkZXI6IDRweCBzb2xpZCBicm93bjtcXG5cXG59XFxuXFxuXFxuLm5vdGVzLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHBpbms7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuXFxuLyogRk9STSBCVVRUT04gKi9cXG5cXG4uZm9ybS1idXR0b24tY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogNTBweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDAlIDAlIDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLmZvcm0tYnV0dG9ue1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLyogVE9ETyBDUkVBVElPTiBGT1JNICovXFxuXFxuXFxuLmZvcm0tY29udGFpbmVye1xcblxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MjcpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcblxcbn1cXG5cXG4uc2hvdy1mb3Jte1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4udG9kby1jcmVhdGlvbi1mb3JtIHtcXG4gICAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIC8qIGhlaWdodDogNzAwcHg7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcXG4gICAgXFxufVxcblxcbi5jcmVhdGUtbmV3LXRvZG97XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGZvcmVzdGdyZWVuO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VsZWN0LWV4aXN0aW5nLXByb2plY3R7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHNreWJsdWU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jcmVhdGUtbmV3LXByb2plY3R7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGNyaW1zb247XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kaXNwbGF5LWZvcm0taXRlbXN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcblxcbi8qIE1vYmlsZSB2ZXJzaW9uICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgXFxuXFxuICAgIC5oYW1idXJnZXItbWVudSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbiAgICAubWFpbi1jb250YWluZXIge1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyIDQwcHg7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzMDBweDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgXFxcInRvcC1jb250YWluZXIgdG9wLWNvbnRhaW5lclxcXCIgXFxuICAgICAgICBcXFwiZGlzcGxheS1jb250YWluZXIgZGlzcGxheS1jb250YWluZXJcXFwiXFxuICAgICAgICBcXFwidG9kby1jb250YWluZXItZm9vdGVyIHRvZG8tY29udGFpbmVyLWZvb3RlclxcXCI7XFxuICAgIFxcbiAgICBcXG4gICAgXFxuICAgIH1cXG5cXG4gICAgXFxuXFxuICAgIC5ub3RlLW1lbnUge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICAgICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgICAgICAvKiBoZWlnaHQ6IDkwJTsgKi9cXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB3aWR0aDogMTUwcHg7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgIC5tZW51LWFjdGl2ZSB7IC8qdHJpZ2dlcnMgd2hlbiBoYW1idXJnZXIgbWVudSBpcyBjbGlja2VkKi9cXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuZnVuY3Rpb24gcHJvamVjdE1vZHVsZSAoKSB7XG5cbiAgICAvLyBGYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBwcm9qZWN0c1xuICAgIGZ1bmN0aW9uIHByb2plY3RGYWN0b3J5ICh0aXRsZSxkZXNjLGR1ZURhdGUscHJpb3JpdHkscmVtaW5kSW4sc3RhdHVzKXtcblxuXG4gICAgICAgIHJldHVybiB7dGl0bGUsZGVzYyxkdWVEYXRlLHByaW9yaXR5LHJlbWluZEluLHN0YXR1c31cbiAgICB9XG5cblxuICAgIC8vIFRoaXMgaXMgd2hlcmUgdW5zb3J0ZWQgcHJvamVjdCBhcnJheXMgYXJlIHN0b3JlZFxuICAgIGNvbnN0IHByb2plY3RBcnJheSA9IFtdO1xuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0ICh0aXRsZSxkZXNjLGR1ZURhdGUscHJpb3JpdHkscmVtaW5kSW4sc3RhdHVzKXtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHRpdGxlLGRlc2MsZHVlRGF0ZSxwcmlvcml0eSxyZW1pbmRJbixzdGF0dXMpOyAvL2NoYW5nZSB0aGlzIGxhdGVyIGlmIHlvdSBuZWVkIHRvXG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICAvLyA4IGhpZ2ggcHJpb3JpdHlcblxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgIGNvbnN0IGRheSA9IGN1cnJlbnREYXRlLmdldERhdGUoKTtcblxuICAgIGNvbnN0IG1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcblxuICAgIGNvbnN0IHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgbGV0IHJlbWluZCA9IC0yO1xuXG4gICAgbGV0IHJlbWluZDEgPSAwO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSA0OyBpbmRleCA+IDA7IGluZGV4LS0pIHtcblxuICAgICAgICBcblxuICAgICAgICBjcmVhdGVQcm9qZWN0KGBwcm9qZWN0JHtpbmRleH10ZXN0YCxgZGVzYyR7aW5kZXh9YCxgJHt5ZWFyICsgcmVtaW5kfS0ke21vbnRoICsgcmVtaW5kfS0ke2RheSArIHJlbWluZH1gLGBoaWdoYCxyZW1pbmQsJ2NvbXBsZXRlJyk7XG5cbiAgICAgICAgY3JlYXRlUHJvamVjdChgcHJvamVjdCR7aW5kZXh9dGVzdDJgLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyByZW1pbmR9LSR7bW9udGggKyByZW1pbmR9LSR7ZGF5ICsgcmVtaW5kfWAsYGhpZ2hgLHJlbWluZCtpbmRleCwnaW5jb21wbGV0ZScpO1xuXG4gICAgICAgIHJlbWluZCA9IHJlbWluZCArIGluZGV4O1xuXG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgLy8gMTAgbG93IHByaW9yaXR5XG4gICAgZm9yIChsZXQgaW5kZXggPSA2OyBpbmRleCA+IDA7IGluZGV4LS0pIHtcblxuICAgICAgICBcblxuICAgICAgICBjcmVhdGVQcm9qZWN0KGBwcm9qZWN0ICR7aW5kZXh9YCxgZGVzYyR7aW5kZXh9YCxgJHt5ZWFyICsgcmVtaW5kMX0tJHttb250aCArIHJlbWluZDF9LSR7ZGF5ICsgcmVtaW5kMX1gLGBsb3dgLHJlbWluZDEsJ2NvbXBsZXRlJyk7XG4gICAgICAgIGNyZWF0ZVByb2plY3QoYHByb2plY3Qke2luZGV4fXd3YCxgZGVzYyR7aW5kZXh9YCxgJHt5ZWFyICsgcmVtaW5kMX0tJHttb250aCArIHJlbWluZDF9LSR7ZGF5IC0gcmVtaW5kMX1gLGBsb3dgLHJlbWluZDEsJ2luY29tcGxldGUnKTtcbiAgICAgICAgY3JlYXRlUHJvamVjdChgcHJvamVjdCR7aW5kZXh9dXBgLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyByZW1pbmQxfS0ke21vbnRoICsgcmVtaW5kMX0tJHtkYXkgKyByZW1pbmQxfWAsYGxvd2AscmVtaW5kMS0xLCdpbmNvbXBsZXRlJyk7XG4gICAgICAgIFxuICAgICAgICByZW1pbmQxID0gcmVtaW5kMSAtIGluZGV4O1xuICAgIH1cblxuICAgICAgICBcbiAgICBcblxuXG5cbiAgICByZXR1cm4ge3Byb2plY3RBcnJheSxjcmVhdGVQcm9qZWN0fTtcblxufVxuXG5jb25zdCBpbml0aWFsaXplZFByb2plY3RNb2R1bGUgPSBwcm9qZWN0TW9kdWxlKCk7XG5cbiAgIFxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZWRQcm9qZWN0TW9kdWxlOyIsIlxuXG5mdW5jdGlvbiB0b2RvTW9kdWxlICgpe1xuXG4gICAgLy8gRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgbm90ZXNcblxuICAgIGZ1bmN0aW9uIHRvZG9GYWN0b3J5ICh0aXRsZSxkZXNjLGR1ZURhdGUscmVtaW5kSW4scHJpb3JpdHksc3RhdHVzLHByb2plY3Qpe1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHt0aXRsZSxkZXNjLGR1ZURhdGUscmVtaW5kSW4scHJpb3JpdHksc3RhdHVzLHByb2plY3R9XG4gICAgfVxuXG4gICAgLy8gVGhpcyBpcyB3aGVyZSB1bnNvcnRlZCB0b2RvIGFycmF5cyBhcmUgc3RvcmVkXG4gICAgY29uc3QgdG9kb0FycmF5ID0gW107XG5cblxuICAgIC8vIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNyZWF0ZSBUb2Rvc1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvZG8gKHRpdGxlLGRlc2MsZHVlRGF0ZSxyZW1pbmRJbixwcmlvcml0eSxzdGF0dXMscHJvamVjdCA9ICdub25lJyl7XG4gICAgICAgIGNvbnN0IG5ld1RvRG8gPSB0b2RvRmFjdG9yeSh0aXRsZSxkZXNjLGR1ZURhdGUscmVtaW5kSW4scHJpb3JpdHksc3RhdHVzLHByb2plY3QpO1xuICAgICAgICB0b2RvQXJyYXkucHVzaChuZXdUb0RvKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgLy8gVGhpcyBtdXN0IGJlIGRlbGV0ZWQgbGF0ZXIgYXMgaXQgaXMgY3JlYXRlZCBwcmltYXJpbHkgZm9yIHRlc3RpbmdcblxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgIGNvbnN0IGRheSA9IGN1cnJlbnREYXRlLmdldERhdGUoKTtcblxuICAgIGNvbnN0IG1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcblxuICAgIGNvbnN0IHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuXG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IDEwOyBpbmRleCsrKSB7XG5cbiAgICAgICAgY3JlYXRlVG9kbyhgdGl0bGUke2luZGV4fWAsYGRlc2Mke2luZGV4fWAsYCR7eWVhciArIGluZGV4fS0ke21vbnRoICsgaW5kZXh9LSR7ZGF5ICsgaW5kZXh9YCxpbmRleCxgaGlnaGAsYHBlbmRpbmdgLCdwcm9qZWN0IDInKTtcblxuICAgICAgICBjcmVhdGVUb2RvKGB0aXRsZSR7aW5kZXh9YCxgZGVzYyR7aW5kZXh9YCxgJHt5ZWFyICsgaW5kZXh9LSR7bW9udGggKyBpbmRleH0tJHtkYXkgKyBpbmRleH1gLGluZGV4LGBsb3dgLGBwZW5kaW5nYCwncHJvamVjdCAyJyk7XG5cbiAgICAgICAgY3JlYXRlVG9kbyhgdGl0bGUke2luZGV4fWAsYGRlc2Mke2luZGV4fWAsJycsaW5kZXgsYGxvd2AsYHBlbmRpbmdgLCdwcm9qZWN0IDInKTtcblxuXG4gICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PSA1OyBpbmRleCsrKSB7XG5cbiAgICAgICAgY3JlYXRlVG9kbyhgdGl0bGUke2luZGV4fWAsYGRlc2Mke2luZGV4fWAsYCR7eWVhciArIGluZGV4fS0ke21vbnRoICsgaW5kZXh9LSR7ZGF5ICsgaW5kZXh9YCxpbmRleCxgaGlnaGAsYGNvbXBsZXRlYCwncHJvamVjdDF0ZXN0Jyk7XG5cbiAgICAgICAgY3JlYXRlVG9kbyhgdGl0bGUke2luZGV4fWAsYGRlc2Mke2luZGV4fWAsYCR7eWVhciArIGluZGV4fS0ke21vbnRoICsgaW5kZXh9LSR7ZGF5ICsgaW5kZXh9YCxpbmRleCxgbWVkaXVtYCxgcGVuZGluZ2AsJ3Byb2plY3QxdGVzdCcpO1xuXG4gICBcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8vIG9sZERldGFpbHNcbiAgICAvLyBuZXdEZXRhaWxzXG4gICAgLy8gbmV3VGl0bGUsbmV3RGVzYyxuZXdEdWVEYXRlLG5ld1JlbWluZEluLG5ld1ByaW9yaXR5LG5ld1N0YXR1cyxuZXdQcm9qZWN0XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUb2RvIChvbGREZXRhaWxzLG5ld0RldGFpbHMpe1xuXG4gICAgICAgIHRvZG9BcnJheS5mb3JFYWNoKHRvZG8gPT4ge1xuXG4gICAgICAgICAgICAvLyBvbGRUaXRsZTogb2JqZWN0LnRpdGxlLFxuICAgICAgICAgICAgLy8gb2xkRGVzYzogb2JqZWN0LmRlc2MsXG4gICAgICAgICAgICAvLyBvbGREdWU6IG9iamVjdC5kdWVEYXRlLFxuICAgICAgICAgICAgLy8gb2xkUmVtaW5kZXI6IG9iamVjdC5yZW1pbmRJbixcbiAgICAgICAgICAgIC8vIG9sZFByaW9yaXR5OiBvYmplY3QucHJpb3JpdHksXG4gICAgICAgICAgICAvLyBvbGRTdGF0dXM6IG9iamVjdC5zdGF0dXMsXG4gICAgICAgICAgICAvLyBvbGRQcm9qZWN0OiBvYmplY3QucHJvamVjdCxcblxuXG4gICAgICAgICAgICAvLyBuZXdUaXRsZTogdG9kb0Rpc3BsYXlUaXRsZS52YWx1ZSxcbiAgICAgICAgICAgIC8vIG5ld0Rlc2M6IHRvZG9EZXNjVGV4dEFyZWEudmFsdWUsXG4gICAgICAgICAgICAvLyBuZXdEdWU6IHRvZG9EaXNwbGF5RGF0ZS52YWx1ZSxcbiAgICAgICAgICAgIC8vIG5ld1JlbWluZGVyOiB0b2RvRGlzcGxheVJlbWluZEluLnZhbHVlLFxuICAgICAgICAgICAgLy8gbmV3UHJpb3JpdHk6IHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUsXG4gICAgICAgICAgICAvLyBuZXdTdGF0dXM6IHRvZG9EaXNwbGF5U3RhdHVzLnZhbHVlLFxuICAgICAgICAgICAgLy8gbmV3UHJvamVjdDogcHJvamVjdHNEcm9wRG93bi52YWx1ZSwgXG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRvZG8udGl0bGUpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2xkRGV0YWlscy50aXRsZSlcblxuICAgICAgICAgICAgaWYgKHRvZG8udGl0bGUgPT09IG9sZERldGFpbHMudGl0bGUgJiYgXG4gICAgICAgICAgICAgICAgdG9kby5kZXNjID09PSBvbGREZXRhaWxzLmRlc2MgJiYgXG4gICAgICAgICAgICAgICAgdG9kby5kdWVEYXRlID09PSBvbGREZXRhaWxzLmR1ZURhdGUgJiYgXG4gICAgICAgICAgICAgICAgdG9kby5yZW1pbmRJbiA9PT0gb2xkRGV0YWlscy5yZW1pbmRJbiAmJiBcbiAgICAgICAgICAgICAgICB0b2RvLnByaW9yaXR5ID09PSBvbGREZXRhaWxzLnByaW9yaXR5ICYmIFxuICAgICAgICAgICAgICAgIHRvZG8uc3RhdHVzID09PSBvbGREZXRhaWxzLnN0YXR1cyAmJiBcbiAgICAgICAgICAgICAgICB0b2RvLnByb2plY3QgPT09IG9sZERldGFpbHMucHJvamVjdCkge1xuXG5cbiAgICAgICAgICAgICAgICB0b2RvLnRpdGxlID0gbmV3RGV0YWlscy5uZXdUaXRsZTtcbiAgICAgICAgICAgICAgICB0b2RvLmRlc2MgPSBuZXdEZXRhaWxzLm5ld0Rlc2M7XG4gICAgICAgICAgICAgICAgdG9kby5kdWVEYXRlID0gbmV3RGV0YWlscy5uZXdEdWU7XG4gICAgICAgICAgICAgICAgdG9kby5yZW1pbmRJbiA9IG5ld0RldGFpbHMubmV3UmVtaW5kZXI7XG4gICAgICAgICAgICAgICAgdG9kby5wcmlvcml0eSA9IG5ld0RldGFpbHMubmV3UHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgdG9kby5zdGF0dXMgPSBuZXdEZXRhaWxzLm5ld1N0YXR1cztcbiAgICAgICAgICAgICAgICB0b2RvLnByb2plY3QgPSBuZXdEZXRhaWxzLm5ld1Byb2plY3Q7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3RGV0YWlscy5uZXdQcm9qZWN0KVxuXG5cblxuICAgIH1cblxuICAgIFxuXG4gICAgLy8gRW5kIG9mIHRlc3Qgb2JqZWN0c1xuXG4gICAgcmV0dXJuIHt0b2RvQXJyYXksIGNyZWF0ZVRvZG8sIHVwZGF0ZVRvZG99O1xuXG5cbn1cblxuXG5jb25zdCBpbml0aWFsaXplZFRvZG9Nb2R1bGUgPSB0b2RvTW9kdWxlKCk7XG5cblxuLy8gaW5pdGlhbGl6ZWQgdmVyc2lvbiBpcyBzZW50IGJlY2F1c2UgdGhlIGlzIG5vIHJlYXNvbiB0byByZS1pbml0aWFsaXNlIGxhdGVyIG9uXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplZFRvZG9Nb2R1bGU7XG4iLCIvLyBBbGwgRE9NIEFjdGl2aXRpZXMgYXJlIGNlbnRyYWxpc2VkIGhlcmUgZXhjZXB0IERPTSBDcmVhdGlvblxuXG5pbXBvcnQgdG9kb01vZHVsZSBmcm9tIFwiLi4vY3JlYXRlVG9kb3NcIjtcblxuaW1wb3J0IHByb2plY3RNb2R1bGUgZnJvbSBcIi4uL2NyZWF0ZVByb2plY3RzXCI7XG5cbmltcG9ydCBub3Rlc09iamVjdCBmcm9tIFwiLi4vdGFiT2JqZWN0cy9hbGxOb3Rlc1RhYlwiO1xuXG5cbmltcG9ydCB0b2RvT2JqZWN0IGZyb20gXCIuLi90YWJPYmplY3RzL2FsbFRvZG9zVGFiXCI7XG5cbmltcG9ydCBwcm9qZWN0T2JqZWN0IGZyb20gXCIuLi90YWJPYmplY3RzL2FsbFByb2plY3RzVGFiXCI7XG5cbmltcG9ydCBtYWluRG9tTW9kdWxlIGZyb20gXCIuLi9kb21DcmVhdGlvbi9mb3JtRE9NQ3JlYXRpb25cIjtcblxuaW1wb3J0IGNyZWF0ZVRvZG9ET00gZnJvbSBcIi4uL2RvbUNyZWF0aW9uL2FsbFRvZG9ET01DcmVhdGlvblwiO1xuXG5pbXBvcnQgY3JlYXRlUHJvamVjdERPTSBmcm9tIFwiLi4vZG9tQ3JlYXRpb24vcHJvamVjdHNET01DcmVhdGlvblwiO1xuXG5pbXBvcnQgY3JlYXRlTm90ZXNET00gZnJvbSBcIi4uL2RvbUNyZWF0aW9uL2FsbE5vdGVzRE9NQ3JlYXRpb25cIjtcblxuaW1wb3J0IHBvcHVsYXRlVG9kb0NvbGxlY3Rpb24gZnJvbSBcIi4uL2RvbUNyZWF0aW9uL3BvcHVsYXRlRE9NVG9kb0NvbGxlY3Rpb25cIjtcblxuaW1wb3J0IGFwcGVuZFByb2plY3RPYmplY3RzIGZyb20gXCIuLi9kb21DcmVhdGlvbi9wb3B1bGF0ZURPTVByb2plY3RDb2xsZWN0aW9uXCI7XG5cbmltcG9ydCBhcHBlbmROb3Rlc09iamVjdCBmcm9tIFwiLi4vZG9tQ3JlYXRpb24vcG9wdWxhdGVET01Ob3RlQ29sbGVjdGlvblwiO1xuXG4vLyBCZWNhdXNlIGRpc3BsYXlpbmcgdG9kb0NvbGxlY3Rpb24gaW4gaGlnaCBwcmlvcml0eSBpcyB0aGUgZGVmYXVsdFxubGV0IHJlY2VudENvbGxlY3Rpb25Db250YWluZXJGbiA9IHBvcHVsYXRlVG9kb0NvbGxlY3Rpb247XG5cbmxldCByZWNlbnRDb2xsZWN0aW9uQ29udGFpbmVyQXJnID0gJ2hpZ2gnO1xuXG5mdW5jdGlvbiBkb21BY3Rpdml0aWVzTW9kdWxlICgpe1xuXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgXG5cbiAgICAgICAgaWYobWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51LWFjdGl2ZVwiKSl7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYW1idXJnZXJycnItcmVtb3ZlJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgfSlcblxuXG4gICAgLy8gaGFtYnVyZ2VyIGJ1dHRvblxuICAgIGNvbnN0IGhhbWJ1cmdlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXItbWVudScpO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlLW1lbnUnKTtcblxuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pXG5cblxuICAgIGhhbWJ1cmdlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2hhbWJ1cmdlcicpXG5cbiAgICAgICAgaWYoIW1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudS1hY3RpdmVcIikpe1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudS1hY3RpdmVcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGFtYnVyZ2VycnJyLWFkZGQnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZihtZW51LmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnUtYWN0aXZlXCIpKXtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtYWN0aXZlXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hhbWJ1cmdlcnJyci1yZW1vdmUnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICB9KVxuXG5cbiAgICAvLyBGT1JNIEFDVElWSVRJRVNcblxuICAgIC8vIEZPUk0gSU5QVVQgQUNUSVZJVElFUyBCRUdJTiBIRVJFXG5cblxuICAgIC8vIGZvcm0gY29udGFpbmVyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgZW50cnlDcmVhdGlvbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jcmVhdGlvbi1mb3JtJyk7XG5cbiAgICAvLyB0b2RvIG9yIG5vdGUgYnV0dG9uXG5cbiAgICBsZXQgaXNOb3RlID0gdHJ1ZTtcblxuICAgIGNvbnN0IHNlbGVjdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXMtdG9kbycpO1xuXG4gICAgY29uc3Qgc2VsZWN0Tm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpcy1ub3RlJyk7XG5cbiAgICBjb25zdCB0b2RvQ3JlYXRpb25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLW5ldy10b2RvJyk7XG5cbiAgICBjb25zdCBzZWxlY3RFeGlzdGluZ1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhpc3RpbmctcHJvamVjdCcpO1xuXG4gICAgY29uc3Qgc2VsZWN0TmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpO1xuXG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdC1leGlzdGluZy1wcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1uZXctcHJvamVjdCcpO1xuXG5cblxuXG4gICAgLy8gVG8tZG8gaW5wdXRzXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tdGl0bGUnKTtcblxuICAgIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGVzYycpO1xuXG4gICAgY29uc3QgZW50cnlUeXBlID0gaXNOb3RlO1xuXG4gICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kYXRlJyk7XG5cbiAgICBjb25zdCB0b2RvUmVtaW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1yZW1pbmQtaW4nKTtcblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXByaW9yaXR5Jyk7XG5cbiAgICBjb25zdCBleGlzdGluZ1Byb2plY3RSYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleGlzdGluZy1wcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0UmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKTtcblxuXG4gICAgY29uc3QgdG9kb0lucHV0cyA9IFt0b2RvRGF0ZSx0b2RvUmVtaW5kZXIsdG9kb1ByaW9yaXR5LGV4aXN0aW5nUHJvamVjdFJhZGlvXTtcblxuXG5cbiAgICBjb25zdCBwcm9qZWN0c0Nob2ljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1jaG9pY2VzJyk7XG5cbiAgICAvLyBuZXcgcHJvamVjdCBpbnB1dHNcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0RGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRlc2MnKTtcblxuICAgIGNvbnN0IHByb2plY3REYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGF0ZScpO1xuXG4gICAgY29uc3QgcHJvamVjdFJlbWluZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtcmVtaW5kLWluJyk7XG5cblxuICAgIC8vIGlzIGEgYnV0dG9uXG4gICAgY29uc3QgcHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtcHJpb3JpdHknKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RJbnB1dHMgPSBbcHJvamVjdFRpdGxlLHByb2plY3REZXNjLHByb2plY3REYXRlLHByb2plY3RSZW1pbmRlcl07XG5cblxuICAgIHNlbGVjdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICB0b2RvQ3JlYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1mb3JtLWl0ZW1zJyk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0KTtcblxuICAgICAgICBcbiAgICAgICAgdG9kb0lucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuXG4gICAgICAgIGlmIChzZWxlY3RFeGlzdGluZ1Byb2plY3QuY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hlY2tlZEV4aXN0aW5nUHJvamVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdE5ld1Byb2plY3QuY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hlY2tlZE5ld1Byb2plY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBpc05vdGUgPSBmYWxzZTtcblxuICAgIH0pXG5cbiAgICBzZWxlY3ROb3RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgdG9kb0NyZWF0aW9uRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuICAgICAgICBleGlzdGluZ1Byb2plY3REaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1mb3JtLWl0ZW1zJyk7XG4gICAgICAgIG5ld1Byb2plY3REaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1mb3JtLWl0ZW1zJyk7XG5cbiAgICAgICAgdG9kb0lucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgncmVxdWlyZWQnKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RzQ2hvaWNlcy5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJyk7XG5cbiAgICAgICAgbmV3UHJvamVjdElucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgncmVxdWlyZWQnKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlzTm90ZT0gdHJ1ZTtcbiAgICB9KVxuXG4gICAgLy8gZXhpc3RpbmcgcHJvamVjdCBvciBuZXcgcHJvamVjdFxuXG4gICAgbGV0IGlzTmV3UHJvamVjdCA9IGZhbHNlO1xuXG5cblxuICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBpc05ld1Byb2plY3Q7XG5cbiAgICAvLyBleGlzdGluZyBwcm9qZWN0IGlucHV0XG5cblxuXG4gICAgc2VsZWN0RXhpc3RpbmdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3dvcmtzIScpO1xuICAgICAgICBcbiAgICAgICAgY2hlY2tlZEV4aXN0aW5nUHJvamVjdCgpO1xuICAgICAgICBcbiAgICB9KTtcblxuXG5cbiAgICBzZWxlY3ROZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICBjaGVja2VkTmV3UHJvamVjdCgpO1xuXG4gICAgfSlcblxuXG4gICAgZnVuY3Rpb24gY2hlY2tlZEV4aXN0aW5nUHJvamVjdCAoKXtcbiAgICAgICAgZXhpc3RpbmdQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuICAgICAgICBuZXdQcm9qZWN0RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuXG4gICAgICAgIGlzTmV3UHJvamVjdCA9IGZhbHNlO1xuXG4gICAgICAgIHByb2plY3RzQ2hvaWNlcy5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgbmV3UHJvamVjdElucHV0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG4gICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tlZE5ld1Byb2plY3QgKCl7XG4gICAgICAgIFxuICAgICAgICBleGlzdGluZ1Byb2plY3REaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1mb3JtLWl0ZW1zJyk7XG4gICAgICAgIG5ld1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1mb3JtLWl0ZW1zJyk7XG5cbiAgICAgICAgaXNOZXdQcm9qZWN0ID0gdHJ1ZTtcblxuICAgICAgICBwcm9qZWN0c0Nob2ljZXMucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xuXG4gICAgICAgIG5ld1Byb2plY3RJbnB1dHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuXG4gICAgLy8gcmVjZWl2ZSBhbGwgZm9ybSBpbnB1dCBkYXRhXG5cblxuICAgIGNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1zdWJtaXQnKTtcblxuXG4gICAgLy8gY29uc3QgdGVzdEFycmF5ID0gW3RvZG9UaXRsZSx0b2RvRGVzYyxlbnRyeVR5cGUsdG9kb0RhdGUsdG9kb1JlbWluZGVyLHRvZG9Qcmlvcml0eSxwcm9qZWN0T3B0aW9uLHByb2plY3RzQ2hvaWNlcyxwcm9qZWN0VGl0bGUscHJvamVjdERlc2MscHJvamVjdERhdGUscHJvamVjdFJlbWluZGVyLHByb2plY3RQcmlvcml0eV07XG5cblxuICAgIGNvbnN0IGFsbEZvcm1JbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1pbnB1dCcpO1xuICAgIFxuXG4gICAgXG5cbiAgICBmb3JtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkSW5wdXQgPSBbXTtcblxuICAgICAgICBsZXQgcmVxdWlyZWRJbnB1dEZpbGxlZCA9IHRydWU7XG5cbiAgICAgICAgY29uc29sZS5sb2cocmVxdWlyZWRJbnB1dCk7XG5cblxuXG5cbiAgICAgICAgYWxsRm9ybUlucHV0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3JlcXVpcmVkJykpIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZElucHV0LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAoY29uc3QgZWFjaCBvZiByZXF1aXJlZElucHV0KSB7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgaWYoIWVhY2gudmFsdWUpe1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkSW5wdXRGaWxsZWQgPSBmYWxzZTsgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmFsc2Ugd29ya3MnKTsgICBcbiAgICAgICAgICAgICAgICBicmVhazsgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYocmVxdWlyZWRJbnB1dEZpbGxlZCl7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcmV2ZW50RGVmYXVsdCB3b3JrcyEnKTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGhpZGVGb3JtKCk7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0b2RvIHdpdGggZm9ybVxuXG5cbiAgICAgICAgICAgIGNvbnN0IHJlc2V0QXJyYXkgPSBbcHJvamVjdFRpdGxlLHByb2plY3REZXNjLHByb2plY3REYXRlLHByb2plY3RSZW1pbmRlcix0b2RvVGl0bGUsdG9kb0Rlc2MsdG9kb0RhdGUsdG9kb1JlbWluZGVyXTtcblxuXG4gICAgICAgICAgICBpZihuZXdQcm9qZWN0UmFkaW8uY2hlY2tlZCl7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbmV3IHByb2plY3Qgd29ya3MnKTtcblxuICAgICAgICAgICAgICAgIC8vIHRpdGxlLGRlc2MsZHVlRGF0ZSxwcmlvcml0eSxyZW1pbmRJbixzdGF0dXNcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwcm9qZWN0TW9kdWxlLmNyZWF0ZVByb2plY3QocHJvamVjdFRpdGxlLnZhbHVlLHByb2plY3REZXNjLnZhbHVlLHByb2plY3REYXRlLnZhbHVlLHByb2plY3RQcmlvcml0eS52YWx1ZSxwcm9qZWN0UmVtaW5kZXIudmFsdWUsYHBlbmRpbmdgKTtcblxuXG4gICAgICAgICAgICAgICAgLy8gdGl0bGUsZGVzYyxkdWVEYXRlLHJlbWluZEluLHByaW9yaXR5LHN0YXR1cyxwcm9qZWN0XG5cbiAgICAgICAgICAgICAgICB0b2RvTW9kdWxlLmNyZWF0ZVRvZG8odG9kb1RpdGxlLnZhbHVlLHRvZG9EZXNjLnZhbHVlLHRvZG9EYXRlLnZhbHVlLE51bWJlcih0b2RvUmVtaW5kZXIudmFsdWUpLHRvZG9Qcmlvcml0eS52YWx1ZSxgcGVuZGluZ2AscHJvamVjdFRpdGxlLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgIHRvZG9PYmplY3QoKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RPYmplY3QoKTtcblxuICAgICAgICAgICAgICAgIG5vdGVzT2JqZWN0KCk7XG5cbiAgICAgICAgICAgICAgICByZXNldEFycmF5LmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy9ldmVyeXRpbWUgc3VibWl0IGJ1dHRvbiBpcyBjbGlja2VkIGZyZXNoIGRyb3Bkb3duIGlzIGNyZWF0ZWQgXG4gICAgICAgICAgICAgICAgbWFpbkRvbU1vZHVsZS5leGlzdGluZ1Byb2plY3RPcHRpb25zKCk7XG5cbiAgICAgICAgICAgICAgICByZWNlbnRDb2xsZWN0aW9uQ29udGFpbmVyRm4ocmVjZW50Q29sbGVjdGlvbkNvbnRhaW5lckFyZylcblxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY3JlYXRlIHRvLWRvcyBhbmQgbm90ZXNcblxuICAgICAgICAgICAgdG9kb01vZHVsZS5jcmVhdGVUb2RvKHRvZG9UaXRsZS52YWx1ZSx0b2RvRGVzYy52YWx1ZSx0b2RvRGF0ZS52YWx1ZSxOdW1iZXIodG9kb1JlbWluZGVyLnZhbHVlKSx0b2RvUHJpb3JpdHkudmFsdWUsYHBlbmRpbmdgLHByb2plY3RzQ2hvaWNlcy52YWx1ZSk7XG5cbiAgICAgICAgICAgIHRvZG9PYmplY3QoKTtcblxuICAgICAgICAgICAgcHJvamVjdE9iamVjdCgpO1xuXG4gICAgICAgICAgICBub3Rlc09iamVjdCgpO1xuXG4gICAgICAgICAgICByZXNldEFycmF5LmZvckVhY2goaW5wdXQgPT4ge1xuXG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL2V2ZXJ5dGltZSBzdWJtaXQgYnV0dG9uIGlzIGNsaWNrZWQgZnJlc2ggZHJvcGRvd24gaXMgY3JlYXRlZCBcbiAgICAgICAgICAgIG1haW5Eb21Nb2R1bGUuZXhpc3RpbmdQcm9qZWN0T3B0aW9ucygpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0Tm90ZS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgYXBwZW5kTm90ZXNPYmplY3QoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlY2VudENvbGxlY3Rpb25Db250YWluZXJGbihyZWNlbnRDb2xsZWN0aW9uQ29udGFpbmVyQXJnKTtcblxuXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIEZPUk0gSU5QVVQgQUNUSVZJVElFUyBFTkQgSEVSRVxuICAgICAgICBcblxuXG4gICAgfSk7XG5cblxuXG4gICAgLy8gRk9STSBBUFBFQVJBTkNFIEFDVElWSVRFUyBCRUdJTiBIRVJFXG5cblxuICAgIGZ1bmN0aW9uIGhpZGVGb3JtICgpe1xuXG5cbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LWZvcm0nKVxuXG4gICAgICAgIFxuXG4gICAgfVxuXG5cbiAgICAvLyBzdG9wIGV2ZW50IGJ1YmJsaW5nLlxuICAgIGVudHJ5Q3JlYXRpb25Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgfSlcblxuXG4gICAgZm9ybUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2sgd29ya3MnKVxuICAgICAgICBoaWRlRm9ybSgpO1xuICAgICAgICAgICAgXG4gICAgfSlcblxuICAgIGNvbnN0IGZvcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1idXR0b24nKTtcblxuICAgIGZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaG93LWZvcm0nKTtcblxuICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuXG4gICAgfSlcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICBjb25zdCBhbGxUb2Rvc1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtdG9kb3MtdGFiJyk7XG5cbiAgICBhbGxUb2Rvc1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBjb25zb2xlLmxvZygnVE8gRE8gTElTVCcpO1xuICAgICAgICBjcmVhdGVUb2RvRE9NKCk7XG5cbiAgICB9KTtcblxuICAgIGNvbnN0IGFsbFByb2plY3RzVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9qZWN0cy10YWInKVxuXG4gICAgYWxsUHJvamVjdHNUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ1BST0pFQ1RTIFRBQicpO1xuICAgICAgICBjcmVhdGVQcm9qZWN0RE9NKClcblxuICAgIH0pXG5cblxuICAgIGNvbnN0IGFsbE5vdGVzVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1ub3Rlcy10YWInKTtcblxuICAgIGFsbE5vdGVzVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgIGNyZWF0ZU5vdGVzRE9NKCk7XG5cbiAgICB9KVxuXG5cblxuXG4gICAgXG5cbn1cblxuXG4gLy8gUFJJT1JJVFkgQlVUVE9OIC0gVE9ET1NcblxuIGZ1bmN0aW9uIGNoYW5nZVRvZG9Qcmlvcml0eSgpe1xuICAgIGNvbnN0IGhpZ2hQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoLXByaW9yaXR5Jyk7XG4gICAgY29uc3QgbWVkaXVtUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVkaXVtLXByaW9yaXR5Jyk7XG4gICAgY29uc3QgbG93UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93LXByaW9yaXR5Jyk7XG5cbiAgICBpZiAoIWhpZ2hQcmlvcml0eUJ1dHRvbnx8IW1lZGl1bVByaW9yaXR5QnV0dG9ufHwhbG93UHJpb3JpdHlCdXR0b24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgaGlnaFByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWJ1dHRvbnMnKTtcbiAgXG4gICAgICAgIHByaW9yaXR5QnV0dG9ucy5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2hvc2VuLXByaW9yaXR5JylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1wcmlvcml0eScpO1xuXG4gICAgICAgIHBvcHVsYXRlVG9kb0NvbGxlY3Rpb24oJ2hpZ2gnKTtcblxuICAgICAgICByZWNlbnRDb2xsZWN0aW9uQ29udGFpbmVyRm4gPSBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uO1xuICAgICAgICByZWNlbnRDb2xsZWN0aW9uQ29udGFpbmVyQXJnID0gJ2hpZ2gnO1xuICAgICAgICBjb25zb2xlLmxvZygnTE9PUElORycpXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVjZW50Q29sbGVjdGlvbkNvbnRhaW5lckZuKTtcbiAgICB9KTtcblxuICAgIFxuXG4gICAgbWVkaXVtUHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYnV0dG9ucycpO1xuICAgICAgICBcbiAgICAgICAgcHJpb3JpdHlCdXR0b25zLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaG9zZW4tcHJpb3JpdHknKVxuICAgICAgICB9KTtcblxuICAgICAgICBtZWRpdW1Qcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKTtcblxuICAgICAgICBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uKCdtZWRpdW0nKTtcblxuICAgICAgICByZWNlbnRDb2xsZWN0aW9uQ29udGFpbmVyRm4gPSBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uO1xuICAgICAgICByZWNlbnRDb2xsZWN0aW9uQ29udGFpbmVyQXJnID0gJ21lZGl1bSc7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMT09QSU5HJylcbiAgICB9KTtcblxuXG4gICBcbiAgICBsb3dQcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYnV0dG9ucycpO1xuXG4gICAgICAgIHByaW9yaXR5QnV0dG9ucy5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaG9zZW4tcHJpb3JpdHknKVxuICAgICAgICB9KTtcblxuICAgICAgICBsb3dQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKTtcblxuICAgICAgICBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uKCdsb3cnKTtcblxuICAgICAgICByZWNlbnRDb2xsZWN0aW9uQ29udGFpbmVyRm4gPSBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uO1xuICAgICAgICByZWNlbnRDb2xsZWN0aW9uQ29udGFpbmVyQXJnID0gJ2xvdyc7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMT09QSU5HJylcbiAgICB9KTtcbiAgIH1cblxuXG5cblxuICAgZnVuY3Rpb24gY2hhbmdlUHJvamVjdFByaW9yaXR5KCl7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2gtcHJpb3JpdHknKTtcbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWRpdW0tcHJpb3JpdHknKTtcbiAgICBjb25zdCBsb3dQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3ctcHJpb3JpdHknKTtcblxuICAgIGlmICghaGlnaFByaW9yaXR5QnV0dG9ufHwhbWVkaXVtUHJpb3JpdHlCdXR0b258fCFsb3dQcmlvcml0eUJ1dHRvbikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICBoaWdoUHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYnV0dG9ucycpO1xuICBcbiAgICAgICAgcHJpb3JpdHlCdXR0b25zLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaG9zZW4tcHJpb3JpdHknKVxuICAgICAgICB9KTtcblxuICAgICAgICBoaWdoUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hvc2VuLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgYXBwZW5kUHJvamVjdE9iamVjdHMoJ2hpZ2gnKTtcblxuICAgICAgICByZWNlbnRDb2xsZWN0aW9uQ29udGFpbmVyRm4gPSBhcHBlbmRQcm9qZWN0T2JqZWN0cztcbiAgICAgICAgcmVjZW50Q29sbGVjdGlvbkNvbnRhaW5lckFyZyA9ICdoaWdoJztcbiAgICAgICAgY29uc29sZS5sb2coJ0xPT1BJTkcnKVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlY2VudENvbGxlY3Rpb25Db250YWluZXJGbik7XG4gICAgfSk7XG5cbiAgICBcblxuICAgIG1lZGl1bVByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWJ1dHRvbnMnKTtcbiAgICAgICAgXG4gICAgICAgIHByaW9yaXR5QnV0dG9ucy5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2hvc2VuLXByaW9yaXR5JylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaXVtUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hvc2VuLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgYXBwZW5kUHJvamVjdE9iamVjdHMoJ21lZGl1bScpO1xuXG4gICAgICAgIHJlY2VudENvbGxlY3Rpb25Db250YWluZXJGbiA9IGFwcGVuZFByb2plY3RPYmplY3RzO1xuICAgICAgICByZWNlbnRDb2xsZWN0aW9uQ29udGFpbmVyQXJnID0gJ21lZGl1bSc7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMT09QSU5HJylcbiAgICB9KTtcblxuXG4gICBcbiAgICBsb3dQcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYnV0dG9ucycpO1xuXG4gICAgICAgIHByaW9yaXR5QnV0dG9ucy5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaG9zZW4tcHJpb3JpdHknKVxuICAgICAgICB9KTtcblxuICAgICAgICBsb3dQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKTtcblxuICAgICAgICBhcHBlbmRQcm9qZWN0T2JqZWN0cygnbG93Jyk7XG5cbiAgICAgICAgcmVjZW50Q29sbGVjdGlvbkNvbnRhaW5lckZuID0gYXBwZW5kUHJvamVjdE9iamVjdHM7XG4gICAgICAgIHJlY2VudENvbGxlY3Rpb25Db250YWluZXJBcmcgPSAnbG93JztcbiAgICAgICAgY29uc29sZS5sb2coJ0xPT1BJTkcnKVxuICAgIH0pO1xuICAgfVxuXG5cbiAgIGZ1bmN0aW9uIHVwZGF0ZVRvZG9JdGVtIChvYmplY3Qpe1xuXG4gICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGlzcGxheS1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCB0b2RvRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRpc3BsYXknKTtcblxuICAgICAgICBjb25zdCB0b2RvVXBkYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgdG9kb1VwZGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBjb25zdCBuZXdUb2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LXRpdGxlJylcbiAgICAgICAgY29uc3QgbmV3VG9kb0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LWRlc2MnKTtcbiAgICAgICAgY29uc3QgbmV3VG9kb0R1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRpc3BsYXktZGF0ZScpO1xuICAgICAgICBjb25zdCBuZXdUb2RvUmVtaW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LXJlbWluZC1pbicpO1xuICAgICAgICBjb25zdCBuZXdUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LXByaW9yaXR5Jyk7XG4gICAgICAgIGNvbnN0IG5ld1RvZG9TdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LXN0YXR1cycpO1xuICAgICAgICBjb25zdCBuZXdUb2RvUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRpc3BsYXktY2hvaWNlcycpO1xuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgbGV0IG5ld0RldGFpbHMgPSB7XG4gICAgICAgICAgICBuZXdUaXRsZTogbmV3VG9kb1RpdGxlLnZhbHVlLFxuICAgICAgICAgICAgbmV3RGVzYzogbmV3VG9kb0Rlc2MudmFsdWUsXG4gICAgICAgICAgICBuZXdEdWU6IG5ld1RvZG9EdWUudmFsdWUsXG4gICAgICAgICAgICBuZXdSZW1pbmRlcjogbmV3VG9kb1JlbWluZGVyLnZhbHVlLFxuICAgICAgICAgICAgbmV3UHJpb3JpdHk6IG5ld1RvZG9Qcmlvcml0eS52YWx1ZSxcbiAgICAgICAgICAgIG5ld1N0YXR1czogbmV3VG9kb1N0YXR1cy52YWx1ZSxcbiAgICAgICAgICAgIG5ld1Byb2plY3Q6IG5ld1RvZG9Qcm9qZWN0LnZhbHVlLFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0b2RvTW9kdWxlLnVwZGF0ZVRvZG8ob2JqZWN0LG5ld0RldGFpbHMpO1xuXG4gICAgICAgIHJlY2VudENvbGxlY3Rpb25Db250YWluZXJGbihyZWNlbnRDb2xsZWN0aW9uQ29udGFpbmVyQXJnKTtcblxuICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIFxuICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRvZG9EaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pXG5cblxuXG4gICAgfVxuXG5cblxuXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVOb3RlSXRlbSAob2JqZWN0KXtcblxuICAgICAgICBjb25zdCB0b2RvRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRpc3BsYXktY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaXNwbGF5Jyk7XG5cbiAgICAgICAgY29uc3QgdG9kb1VwZGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgIHRvZG9VcGRhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgY29uc3QgbmV3VG9kb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGlzcGxheS10aXRsZScpXG4gICAgICAgIGNvbnN0IG5ld1RvZG9EZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGlzcGxheS1kZXNjJyk7XG4gICAgICAgIC8vIGNvbnN0IG5ld1RvZG9EdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kaXNwbGF5LWRhdGUnKTtcbiAgICAgICAgLy8gY29uc3QgbmV3VG9kb1JlbWluZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGlzcGxheS1yZW1pbmQtaW4nKTtcbiAgICAgICAgLy8gY29uc3QgbmV3VG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGlzcGxheS1wcmlvcml0eScpO1xuICAgICAgICAvLyBjb25zdCBuZXdUb2RvU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGlzcGxheS1zdGF0dXMnKTtcbiAgICAgICAgLy8gY29uc3QgbmV3VG9kb1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1kaXNwbGF5LWNob2ljZXMnKTtcbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgICAgIGxldCBuZXdEZXRhaWxzID0ge1xuICAgICAgICAgICAgbmV3VGl0bGU6IG5ld1RvZG9UaXRsZS52YWx1ZSxcbiAgICAgICAgICAgIG5ld0Rlc2M6IG5ld1RvZG9EZXNjLnZhbHVlLFxuICAgICAgICAgICAgLy8gbmV3RHVlOiBuZXdUb2RvRHVlLnZhbHVlLFxuICAgICAgICAgICAgLy8gbmV3UmVtaW5kZXI6IG5ld1RvZG9SZW1pbmRlci52YWx1ZSxcbiAgICAgICAgICAgIC8vIG5ld1ByaW9yaXR5OiBuZXdUb2RvUHJpb3JpdHkudmFsdWUsXG4gICAgICAgICAgICAvLyBuZXdTdGF0dXM6IG5ld1RvZG9TdGF0dXMudmFsdWUsXG4gICAgICAgICAgICAvLyBuZXdQcm9qZWN0OiBuZXdUb2RvUHJvamVjdC52YWx1ZSxcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdG9kb01vZHVsZS51cGRhdGVUb2RvKG9iamVjdCxuZXdEZXRhaWxzKTtcblxuICAgICAgICByZWNlbnRDb2xsZWN0aW9uQ29udGFpbmVyRm4ocmVjZW50Q29sbGVjdGlvbkNvbnRhaW5lckFyZyk7XG5cbiAgICAgICAgdG9kb0Rpc3BsYXlDb250YWluZXIucmVtb3ZlKCk7XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBcbiAgICAgICAgdG9kb0Rpc3BsYXlDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0b2RvRGlzcGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KVxuXG5cblxuICAgIH1cblxuICBcblxuICAgXG5cblxuLy8gICAgY2hhbmdlUHJpb3JpdHkoKTtcblxuLy8gZXQgcmVjZW50Q29sbGVjdGlvbkNvbnRhaW5lckZuID0gcG9wdWxhdGVUb2RvQ29sbGVjdGlvbjtcblxuLy8gbGV0IHJlY2VudENvbGxlY3Rpb25Db250YWluZXJBcmcgPSAnaGlnaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFjdGl2aXRpZXNNb2R1bGU7XG5cbmV4cG9ydCB7Y2hhbmdlVG9kb1ByaW9yaXR5LCBjaGFuZ2VQcm9qZWN0UHJpb3JpdHksIHVwZGF0ZVRvZG9JdGVtLCB1cGRhdGVOb3RlSXRlbX07XG5cbiIsImltcG9ydCB0b2RvTW9kdWxlIGZyb20gXCIuLi9jcmVhdGVUb2Rvc1wiO1xuXG5pbXBvcnQgcHJvamVjdE1vZHVsZSBmcm9tIFwiLi4vY3JlYXRlUHJvamVjdHNcIjtcblxuZnVuY3Rpb24gc29ydGluZ01vZHVsZSAoKXtcblxuXG4gICAgIC8vIFNvIHRoYXQgaXQgZG9lcyBub3QgbWVzcyB3aXRoIHRoZSBvcmlnaW5hbCBhcnJheVxuXG4gICAgZnVuY3Rpb24gY2xvbmVPYmplY3QoKXtcblxuICAgICAgICBjb25zdCBwcm9qZWN0QXJyYXlSZWZlcmVuY2UgPSBwcm9qZWN0TW9kdWxlLnByb2plY3RBcnJheTtcblxuICAgICAgICBjb25zdCBjbG9uZVByb2plY3RBcnJheSA9IFtdO1xuXG5cbiAgICAgICAgY29uc3QgdG9kb0FycmF5UmVmZXJlbmNlID0gdG9kb01vZHVsZS50b2RvQXJyYXk7XG5cbiAgICAgICAgY29uc3QgY2xvbmVUb2RvQXJyYXkgPSBbXTtcbiAgICAgICAgXG5cbiAgICAgICAgdG9kb0FycmF5UmVmZXJlbmNlLmZvckVhY2godG9kb09iamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZWRUb0RvID0gT2JqZWN0LmFzc2lnbih7fSx0b2RvT2JqZWN0KTtcbiAgICAgICAgICAgIGNsb25lVG9kb0FycmF5LnB1c2goY2xvbmVkVG9Ebyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RBcnJheVJlZmVyZW5jZS5mb3JFYWNoKHByb2plY3RPYmplY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xvbmVkUHJvamVjdCA9IE9iamVjdC5hc3NpZ24oe30scHJvamVjdE9iamVjdCk7XG4gICAgICAgICAgICBjbG9uZVByb2plY3RBcnJheS5wdXNoKGNsb25lZFByb2plY3QpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIHJldHVybiB7Y2xvbmVQcm9qZWN0QXJyYXksY2xvbmVUb2RvQXJyYXl9XG5cblxuICAgIH1cblxuICAgIFxuXG4gICAgLy8gc29ydHMgdGhlIHRvIGRvcyBhY2NvcmRpbmcgdG8gdGhlIHByb2plY3QgbmFtZSBpcyBoYXMgYmVlbiBhc3NpZ25lZCB0b1xuICAgIC8vIFJlbmFtZSB0aGlzIHRvIHByb2plY3Qgc29ydGVyXG4gICAgZnVuY3Rpb24gc29ydEJ5UHJvamVjdE5hbWUoKXtcblxuXG4gICAgICAgIGNvbnN0IGNsb25lUHJvamVjdEFycmF5ID0gY2xvbmVPYmplY3QoKS5jbG9uZVByb2plY3RBcnJheVxuICAgICAgICBcbiAgICAgICAgY29uc3QgY2xvbmVUb2RvQXJyYXkgPSBjbG9uZU9iamVjdCgpLmNsb25lVG9kb0FycmF5XG5cbiAgICAgICAgbGV0IHByb2Nlc3NlZFByb2plY3RBcnJheUJ5TmFtZSA9IFtdO1xuXG4gICAgICAgIGNsb25lUHJvamVjdEFycmF5LmZvckVhY2gocHJvamVjdE9iamVjdCA9PiB7XG5cbiAgICAgICAgICAgIHByb2plY3RPYmplY3QudG9kb0NvbGxlY3Rpb24gPSBbXTtcblxuICAgICAgICAgICAgY2xvbmVUb2RvQXJyYXkuZm9yRWFjaCh0b2RvT2JqZWN0ID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0T2JqZWN0LnRpdGxlID09PSB0b2RvT2JqZWN0LnByb2plY3QpIHtcblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE9iamVjdC50b2RvQ29sbGVjdGlvbi5wdXNoKHRvZG9PYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwcm9jZXNzZWRQcm9qZWN0QXJyYXlCeU5hbWUucHVzaChwcm9qZWN0T2JqZWN0KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHJldHVybiB7cHJvY2Vzc2VkUHJvamVjdEFycmF5QnlOYW1lfTtcblxuICAgIH1cblxuXG5cblxuXG5cblxuXG4gICAgZnVuY3Rpb24gcHJpb3JpdHlTb3J0ZXIodW5wcm9jZXNzZWRBcnJheSl7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdGllcyA9IFsnaGlnaCcsJ21lZGl1bScsJ2xvdyddO1xuXG4gICAgICAgIGNvbnN0IG9iamVjdHNCeVByaW9yaXR5ID0ge2hpZ2g6W10sbWVkaXVtOltdLGxvdzpbXX07XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHByaW9yaXRpZXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cbiAgICAgICAgICAgIHVucHJvY2Vzc2VkQXJyYXkuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QucHJpb3JpdHkgPT09IHByaW9yaXRpZXNbaW5kZXhdKXtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0c0J5UHJpb3JpdHlbcHJpb3JpdGllc1tpbmRleF1dLnB1c2gob2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iamVjdHNCeVByaW9yaXR5O1xuXG5cbiAgICB9XG5cblxuXG5cbiAgICBmdW5jdGlvbiBzb3J0RHVlRGF0ZSAoQXJyYXkpe1xuXG4gICAgICAgIC8vIFVzZSB0aGlzIHRvIHNvcnQgcHJvamVjdHMgYW5kIHRvZG9zXG5cbiAgICAgICAgLy8gc29ydHMgYXJyYXkgaW4gYXNjZW5kaW5nIG9yZGVyIGFjY29yZGluZyB0byBkdWUgZGF0ZVxuICAgICAgICBhc2NlbmRpbmdTb3J0KEFycmF5KTtcblxuICAgICAgICBjb25zdCBkdWVTb3J0ZWRBcnJheSA9IHtcbiAgICAgICAgICAgIG5vdGVzOltdLFxuICAgICAgICAgICAgb3ZlcmR1ZTpbXSxcbiAgICAgICAgICAgIGR1ZTpbXSxcbiAgICAgICAgICAgIHVwY29taW5nOltdLFxuICAgICAgICAgICAgY29tcGxldGU6W11cbiAgICAgICAgfTtcblxuICAgICAgICBBcnJheS5mb3JFYWNoKG9iamVjdCA9PiB7XG5cblxuICAgICAgICAgICAgLy8gTm90ZXMgLSB0byBiZSBpc29sYXRlZCAgICAgICAgICAgXG4gICAgICAgICAgICBpZighb2JqZWN0LmR1ZURhdGUpe1xuXG4gICAgICAgICAgICAgICAgZHVlU29ydGVkQXJyYXkubm90ZXMucHVzaChvYmplY3QpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDb21wbGV0ZVxuICAgICAgICAgICAgaWYob2JqZWN0LnN0YXR1cyA9PT0gJ2NvbXBsZXRlJyl7XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBkdWVTb3J0ZWRBcnJheS5jb21wbGV0ZS5wdXNoKG9iamVjdCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE92ZXJkdWVcbiAgICAgICAgICAgIGlmKChvYmplY3QuZHVyYXRpb25MZWZ0LmRheUxlZnQpIDwgMCl7XG5cbiAgICAgICAgICAgICAgICBkdWVTb3J0ZWRBcnJheS5vdmVyZHVlLnB1c2gob2JqZWN0KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEdWVcbiAgICAgICAgICAgIGlmICgoKG9iamVjdC5kdXJhdGlvbkxlZnQuZGF5TGVmdCkgPD0gb2JqZWN0LnJlbWluZEluKSAmJiAoKG9iamVjdC5kdXJhdGlvbkxlZnQuZGF5TGVmdCkgPj0gMCkpe1xuXG4gICAgICAgICAgICAgICAgZHVlU29ydGVkQXJyYXkuZHVlLnB1c2gob2JqZWN0KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBjb21pbmdcbiAgICAgICAgICAgIGlmKChvYmplY3QuZHVyYXRpb25MZWZ0LmRheUxlZnQpID4gb2JqZWN0LnJlbWluZEluKXtcblxuICAgICAgICAgICAgICAgIGR1ZVNvcnRlZEFycmF5LnVwY29taW5nLnB1c2gob2JqZWN0KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coZHVlU29ydGVkQXJyYXkpO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIGR1ZVNvcnRlZEFycmF5OyAgICBcbiAgICAgXG5cbiAgICB9XG5cblxuXG4gICAgLy8gU29ydHMgb2JqZWN0cyBpbiBBcnJheSB0byBhc2NlbmRpbmcgb3JkZXIgYWNjb3JkaW5nIHRvIGR1ZSBkYXRlXG4gICAgZnVuY3Rpb24gYXNjZW5kaW5nU29ydCAoQXJyYXkpe1xuXG4gICAgICAgIC8vIEFzc2lnbiBkdXJhdGlvbiBsZWZ0XG4gICAgICAgIEFycmF5LmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdE9iamVjdER1ZURhdGUgPSBpbnRlcnZhbChvYmplY3QuZHVlRGF0ZSk7XG4gICAgICAgICAgICBvYmplY3QuZHVyYXRpb25MZWZ0ID0gZm9ybWF0T2JqZWN0RHVlRGF0ZTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBjb25zdCBkYXRlQXJyYXkgPSBbXTtcbiAgICAgICAgY29uc3Qgc29ydGVkQXJyYXkgPSBbXTtcblxuXG4gICAgICAgIEFycmF5LmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgIC8vIG9iamVjdC5kdXJhdGlvbkxlZnQuZGF5TGVmdFxuICAgICAgICAgICAgZGF0ZUFycmF5LnB1c2gob2JqZWN0LmR1cmF0aW9uTGVmdC5kYXlMZWZ0KVxuICAgICAgICB9KTtcblxuICAgICAgICBkYXRlQXJyYXkuc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBhLWJ9KTtcblxuICAgICAgICBkYXRlQXJyYXkuZm9yRWFjaChkYXRlID0+IHtcblxuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGRhdGUgPT09IEFycmF5W2luZGV4XS5kdXJhdGlvbkxlZnQuZGF5TGVmdCkge1xuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRBcnJheS5wdXNoKEFycmF5W2luZGV4XSk7XG5cbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuc3BsaWNlKGluZGV4LDEpXG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICBcblxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBQdXNoIHNvcnRlZCBhcnJheSB0byBvcmlnaW5hbCBhcnJheVxuICAgICAgICBzb3J0ZWRBcnJheS5mb3JFYWNoKHNvcnRlZE9iaiA9PiB7XG4gICAgICAgICAgICBBcnJheS5wdXNoKHNvcnRlZE9iailcbiAgICAgICAgfSk7XG4gICAgICAgIFxuXG5cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGludGVydmFsKGRhdGUpe1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50RGF5ID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRNb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuXG5cblxuICAgICAgICAvLyBjb25zdCBmb3JtYXR0ZWRDdXJyZW50RGF0ZSA9IFt5ZWFyLG1vbnRoLGRheV07XG5cblxuICAgICAgICAvLyBbeXl5eSxtbSxkZF1cbiAgICAgICAgY29uc3Qgc3BsaXRPYmpEYXRlID0gZGF0ZS5zcGxpdCgnLScpO1xuXG4gICAgICAgIGNvbnN0IHllYXJzTGVmdCA9IHNwbGl0T2JqRGF0ZVswXSAtIGN1cnJlbnRZZWFyO1xuXG4gICAgICAgIGNvbnN0IG1vbnRoc0xlZnQgPSBzcGxpdE9iakRhdGVbMV0gLSBjdXJyZW50TW9udGg7XG5cbiAgICAgICAgY29uc3QgZGF5TGVmdCA9IHNwbGl0T2JqRGF0ZVsyXSAtIGN1cnJlbnREYXk7XG5cblxuICAgICAgICBjb25zdCBpbnRlcnZhbE9iaiA9IHtkYXlMZWZ0LG1vbnRoc0xlZnQseWVhcnNMZWZ0fTtcblxuXG5cbiAgICBcbiAgICAgICAgcmV0dXJuIGludGVydmFsT2JqXG4gICAgfVxuXG5cblxuICAgICAgICBcblxuICAgIGZ1bmN0aW9uIG5vdGVTb3J0ZXIodW5wcm9jZXNzZWRBcnJheSl7XG5cbiAgICAgICAgY29uc3Qgbm90ZU9iamVjdHMgPSBbXVxuXG4gICAgICAgIHVucHJvY2Vzc2VkQXJyYXkuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZighb2JqLmR1ZURhdGUpe1xuXG4gICAgICAgICAgICAgICAgbm90ZU9iamVjdHMucHVzaChvYmopXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbm90ZU9iamVjdHM7XG5cblxuICAgIH1cblxuXG5cbiAgIFxuXG4gICAgcmV0dXJuIHtjbG9uZU9iamVjdCxzb3J0QnlQcm9qZWN0TmFtZSxwcmlvcml0eVNvcnRlcixzb3J0RHVlRGF0ZSxub3RlU29ydGVyfVxuXG59XG5cbmNvbnN0IGluaXRpYWxpemVkU29ydFRvRG9Nb2R1bGUgPSBzb3J0aW5nTW9kdWxlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVkU29ydFRvRG9Nb2R1bGU7IiwiLy8gaW1wb3J0IHBvcHVsYXRlVG9kb0NvbGxlY3Rpb24gZnJvbSBcIi4vcG9wdWxhdGVET01Ub2RvQ29sbGVjdGlvblwiXG5cbmltcG9ydCBhcHBlbmROb3Rlc09iamVjdCBmcm9tIFwiLi9wb3B1bGF0ZURPTU5vdGVDb2xsZWN0aW9uXCI7XG5cbmZ1bmN0aW9uIGFsbE5vdGVET01Nb2R1bGUgKCl7XG5cbiAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktY29udGFpbmVyJyk7XG5cblxuXG5cbiAgICAvLyBtb3ZlIHRvIGRvbUFjdGl2aXR5XG4gICAgZnVuY3Rpb24gcmVtb3ZlRXhpc3RpbmdEaXNwbGF5RE9NICgpe1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1jb250YWluZXInKTtcblxuICAgICAgICBkaXNwbGF5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcblxuICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcmVtb3ZlRXhpc3RpbmdEaXNwbGF5RE9NKCk7XG5cblxuICAgIFxuXG5cbiAgICBcblxuXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0b2RvQ29udGFpbmVyVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItdGl0bGUnKTtcblxuICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kKHRvZG9Db250YWluZXJUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgdGFiVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0YWJUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YWItdGl0bGUnKTtcblxuICAgICAgICB0b2RvQ29udGFpbmVyVGl0bGUuYXBwZW5kKHRhYlRpdGxlKTtcblxuICAgICAgICAgICAgY29uc3QgdG9kb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICAgICAgICAgIHRvZG9IZWFkZXIudGV4dENvbnRlbnQgPSAnTm90ZXMnO1xuXG4gICAgICAgICAgICB0YWJUaXRsZS5hcHBlbmQodG9kb0hlYWRlcik7XG5cblxuICAgICAgICAgICAgY29uc3QgdG9kb1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICAgICAgdG9kb1BhcmFncmFwaC50ZXh0Q29udGVudCA9ICdZb3VyIGNvbGxlY3Rpb24gb2YgTm90ZXMgYXJlIGRpc3BsYXllZCBoZXJlJztcblxuICAgICAgICAgICAgdGFiVGl0bGUuYXBwZW5kKHRvZG9QYXJhZ3JhcGgpO1xuXG4gICAgICAgIFxuXG5cblxuXG5cblxuICAgIFxuICAgIGNvbnN0IGNvbGxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbGxlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sbGVjdGlvbi1jb250YWluZXInKTtcblxuICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kKGNvbGxlY3Rpb25Db250YWluZXIpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhIHBvcHVsYXRlIG5vdGVzIG1vZHVsZVxuXG4gICAgICAgIC8vIENyZWF0ZSBpdCBoZXJlIGZpcnN0IHRoZW4gc2VuZCBpdCBzb21ld2hlcmUgZWxzZS5cbiAgICAgICAgYXBwZW5kTm90ZXNPYmplY3QoKTtcblxuICAgICAgICBcblxuXG5cblxuICAgICAgIFxuXG4gICAgXG4gICAgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgYWxsTm90ZURPTU1vZHVsZTsiLCJpbXBvcnQgcG9wdWxhdGVUb2RvQ29sbGVjdGlvbiBmcm9tIFwiLi9wb3B1bGF0ZURPTVRvZG9Db2xsZWN0aW9uXCI7XG5cbmltcG9ydCB7IGNoYW5nZVRvZG9Qcmlvcml0eSB9IGZyb20gXCIuLi9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXNcIjtcblxuZnVuY3Rpb24gYWxsVG9kb0RPTU1vZHVsZSAoKXtcblxuICAgIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1jb250YWluZXInKTtcblxuXG5cblxuICAgIC8vIG1vdmUgdG8gZG9tQWN0aXZpdHlcbiAgICBmdW5jdGlvbiByZW1vdmVFeGlzdGluZ0Rpc3BsYXlET00gKCl7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGRpc3BsYXlDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIFxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgfSk7XG5cbiAgICB9XG5cbiAgICByZW1vdmVFeGlzdGluZ0Rpc3BsYXlET00oKTtcblxuXG4gICAgXG5cblxuICAgIFxuXG5cbiAgICBjb25zdCB0b2RvQ29udGFpbmVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRvZG9Db250YWluZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lci10aXRsZScpO1xuXG4gICAgZGlzcGxheUNvbnRhaW5lci5hcHBlbmQodG9kb0NvbnRhaW5lclRpdGxlKTtcblxuICAgICAgICBjb25zdCB0YWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRhYlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RhYi10aXRsZScpO1xuXG4gICAgICAgIHRvZG9Db250YWluZXJUaXRsZS5hcHBlbmQodGFiVGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCB0b2RvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgICAgICAgICAgdG9kb0hlYWRlci50ZXh0Q29udGVudCA9ICdUby1kb3MnO1xuXG4gICAgICAgICAgICB0YWJUaXRsZS5hcHBlbmQodG9kb0hlYWRlcik7XG5cblxuICAgICAgICAgICAgY29uc3QgdG9kb1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICAgICAgdG9kb1BhcmFncmFwaC50ZXh0Q29udGVudCA9ICdZb3VyIGNvbGxlY3Rpb24gb2YgdG9kb3MgYXJlIGRpc3BsYXllZCBoZXJlJztcblxuICAgICAgICAgICAgdGFiVGl0bGUuYXBwZW5kKHRvZG9QYXJhZ3JhcGgpO1xuXG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBwcmlvcml0eUJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYnV0dG9ucycpO1xuXG4gICAgICAgIHRvZG9Db250YWluZXJUaXRsZS5hcHBlbmQocHJpb3JpdHlCdXR0b25zKTtcblxuICAgICAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdoaWdoLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kKGhpZ2hQcmlvcml0eSk7XG5cblxuICAgICAgICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG5cbiAgICAgICAgICAgIHByaW9yaXR5QnV0dG9ucy5hcHBlbmQobWVkaXVtUHJpb3JpdHkpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2xvdy1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kKGxvd1ByaW9yaXR5KTtcblxuICAgICAgICAgICAgXG5cblxuXG5cblxuICAgIFxuICAgIGNvbnN0IGNvbGxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbGxlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sbGVjdGlvbi1jb250YWluZXInKTtcblxuICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kKGNvbGxlY3Rpb25Db250YWluZXIpO1xuXG4gICAgcG9wdWxhdGVUb2RvQ29sbGVjdGlvbignaGlnaCcpO1xuXG4gICAgY2hhbmdlVG9kb1ByaW9yaXR5KCk7XG4gICAgXG4gICAgLy8gZG9tQWN0aW9uKClcblxuXG5cblxuXG4gICBcblxuXG4gICAgICAgXG5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG5cblxuXG4gICAgICAgIFxuXG5cblxuXG5cbiAgICBcbiAgICBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBhbGxUb2RvRE9NTW9kdWxlOyIsIi8vIGZvciBzZWxlY3Rpb24gb3B0aW9uc1xuaW1wb3J0IHByb2plY3RPYmplY3RzIGZyb20gJy4uL3RhYk9iamVjdHMvYWxsUHJvamVjdHNUYWInXG5cbmZ1bmN0aW9uIGZvcm1Eb21Nb2R1bGUgKCl7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cblxuXG4vLyAgICBGT1JNIEJVVFRPTlxuXG5cbiAgICBjb25zdCBmb3JtQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb3JtQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uLWNvbnRhaW5lcicpO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoZm9ybUJ1dHRvbkNvbnRhaW5lcik7XG5cblxuICAgICAgICBjb25zdCBmb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgZm9ybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicpO1xuXG4gICAgICAgIGZvcm1CdXR0b24udGV4dENvbnRlbnQgPSAnKyc7XG5cbiAgICAgICAgZm9ybUJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZm9ybUJ1dHRvbik7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ21haW4gZE9tJyk7XG4gICAgXG5cblxuICAgIFxuXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoZm9ybUNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgdG9kb0NyZWF0aW9uRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRvZG9DcmVhdGlvbkZvcm0uY2xhc3NMaXN0LmFkZCgndG9kby1jcmVhdGlvbi1mb3JtJyk7XG5cbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmQodG9kb0NyZWF0aW9uRm9ybSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGVudHJ5Q3JlYXRpb25Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgICAgICAgICB0b2RvQ3JlYXRpb25Gb3JtLmFwcGVuZChlbnRyeUNyZWF0aW9uRm9ybSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG5cbiAgICAgICAgICAgICAgICBlbnRyeUNyZWF0aW9uRm9ybS5hcHBlbmQoZmllbGRzZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9ICdDcmVhdGUgYW4gZW50cnknXG5cbiAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kKGxlZ2VuZCk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmQoaW5wdXRDb250YWluZXIxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9kby10aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGU6JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMS5hcHBlbmQodG9kb1RpdGxlTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVGl0bGVMaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxLmFwcGVuZCh0b2RvVGl0bGVMaW5lQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tdGl0bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMS5hcHBlbmQodG9kb1RpdGxlSW5wdXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZChpbnB1dENvbnRhaW5lcjIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9kby1kZXNjJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY0xhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjIuYXBwZW5kKHRvZG9EZXNjTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY0xpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjIuYXBwZW5kKHRvZG9EZXNjTGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGVzYycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCczMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCcxMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMi5hcHBlbmQodG9kb0Rlc2NUZXh0QXJlYSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMy5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kKGlucHV0Q29udGFpbmVyMyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc05vdGVSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc05vdGVSYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOb3RlUmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsJ2lzLW5vdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTm90ZVJhZGlvLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2VudHJ5LXR5cGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTm90ZVJhZGlvLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOb3RlUmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIzLmFwcGVuZChpc05vdGVSYWRpbyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vdGVSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVSYWRpb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnaXMtbm90ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90ZVJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSAnTm90ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjMuYXBwZW5kKG5vdGVSYWRpb0xhYmVsKTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1RvZG9SYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1RvZG9SYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUb2RvUmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsJ2lzLXRvZG8nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9kb1JhZGlvLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2VudHJ5LXR5cGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9kb1JhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMy5hcHBlbmQoaXNUb2RvUmFkaW8pO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9SYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9SYWRpb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnaXMtdG9kbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JhZGlvTGFiZWwudGV4dENvbnRlbnQgPSAnVG8tZG8nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIzLmFwcGVuZCh0b2RvUmFkaW9MYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlTmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdUb2RvLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1uZXctdG9kbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmQoY3JlYXRlTmV3VG9kbyk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdUb2RvLmFwcGVuZChpbnB1dENvbnRhaW5lcjQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0b2RvLWRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBkYXRlOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI0LmFwcGVuZCh0b2RvRGF0ZUxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlTGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjQuYXBwZW5kKHRvZG9EYXRlTGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI0LmFwcGVuZCh0b2RvRGF0ZUlucHV0KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51ZSBjcmVhdGluZyBmb3JtIGVsZW1lbnRzXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI1LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3VG9kby5hcHBlbmQoaW5wdXRDb250YWluZXI1KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUmVtaW5kSW5MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JlbWluZEluTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0b2RvLXJlbWluZC1pbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9SZW1pbmRJbkxhYmVsLnRleHRDb250ZW50ID0gJ1JlbWluZC1pbihkYXlzKTonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNS5hcHBlbmQodG9kb1JlbWluZEluTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1JlbWluZEluTGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjUuYXBwZW5kKHRvZG9SZW1pbmRJbkxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9SZW1pbmRJbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdudW1iZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1yZW1pbmQtaW4nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmVtaW5kSW5JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI1LmFwcGVuZCh0b2RvUmVtaW5kSW5JbnB1dCk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1RvZG8uYXBwZW5kKGlucHV0Q29udGFpbmVyNik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjYuYXBwZW5kKHRvZG9Qcmlvcml0eUxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eUxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI2LmFwcGVuZCh0b2RvUHJpb3JpdHlMaW5lQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ2xvdycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNi5hcHBlbmQodG9kb1ByaW9yaXR5QnV0dG9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgY2xhc3NlcyBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXMgKGRpZmZlcmVudCBjb2xvdXJzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb1ByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnbG93Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvUHJpb3JpdHlCdXR0b24udmFsdWUgPT09ICdtZWRpdW0nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24udmFsdWUgPSAnaGlnaCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb1ByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnaGlnaCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi52YWx1ZSA9ICdsb3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI3LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3VG9kby5hcHBlbmQoaW5wdXRDb250YWluZXI3KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdFJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCdleGlzdGluZy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKCduYW1lJywncHJvamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjcuYXBwZW5kKGV4aXN0aW5nUHJvamVjdFJhZGlvKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1Byb2plY3RSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RSYWRpb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZXhpc3RpbmctcHJvamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSAnRXhpc3RpbmcgcHJvamVjdCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI3LmFwcGVuZChleGlzdGluZ1Byb2plY3RSYWRpb0xhYmVsKTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdFJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsJ25ldy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Byb2plY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0UmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNy5hcHBlbmQobmV3UHJvamVjdFJhZGlvKTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdFJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3RSYWRpb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnbmV3LXByb2plY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0UmFkaW9MYWJlbC50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI3LmFwcGVuZChuZXdQcm9qZWN0UmFkaW9MYWJlbCk7XG5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RFeGlzdGluZ1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0RXhpc3RpbmdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC1leGlzdGluZy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZChzZWxlY3RFeGlzdGluZ1Byb2plY3QpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyOC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEV4aXN0aW5nUHJvamVjdC5hcHBlbmQoaW5wdXRDb250YWluZXI4KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RDaG9pY2VzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDaG9pY2VzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdwcm9qZWN0LWNob2ljZXMnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q2hvaWNlc0xhYmVsLnRleHRDb250ZW50ID0gJ1doaWNoIHByb2plY3QgaXMgdGhpcyBmb3I/JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjguYXBwZW5kKHByb2plY3RDaG9pY2VzTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdENob2ljZXNEcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDaG9pY2VzRHJvcERvd24uc2V0QXR0cmlidXRlKCduYW1lJywncHJvamVjdC1jaG9pY2VzJyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDaG9pY2VzRHJvcERvd24uc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtY2hvaWNlcycpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q2hvaWNlc0Ryb3BEb3duLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI4LmFwcGVuZChwcm9qZWN0Q2hvaWNlc0Ryb3BEb3duKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aXRsZXMgZnJvbSBleGlzdGluZyBwcm9qZWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHdoZW4gbmV3IHByb2plY3RzIGFyZSBjcmVhdGVkXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLW5ldy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZChjcmVhdGVOZXdQcm9qZWN0KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXI5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjkuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0LmFwcGVuZChpbnB1dENvbnRhaW5lcjkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Byb2plY3QtdGl0bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyOS5hcHBlbmQocHJvamVjdFRpdGxlTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlTGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjkuYXBwZW5kKHByb2plY3RUaXRsZUxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtdGl0bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI5LmFwcGVuZChwcm9qZWN0VGl0bGVJbnB1dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyMTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTAuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0LmFwcGVuZChpbnB1dENvbnRhaW5lcjEwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywncHJvamVjdC1kZXNjJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NMYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTAuYXBwZW5kKHByb2plY3REZXNjTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NMaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTAuYXBwZW5kKHByb2plY3REZXNjTGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWRlc2MnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnY29scycsJzMwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCcxMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjVGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTAuYXBwZW5kKHByb2plY3REZXNjVGV4dEFyZWEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QuYXBwZW5kKGlucHV0Q29udGFpbmVyMTEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdwcm9qZWN0LWRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBkYXRlOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMS5hcHBlbmQocHJvamVjdERhdGVMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGF0ZUxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMS5hcHBlbmQocHJvamVjdERhdGVMaW5lQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjExLmFwcGVuZChwcm9qZWN0RGF0ZUlucHV0KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51ZSBjcmVhdGluZyBmb3JtIGVsZW1lbnRzXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyMTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0LmFwcGVuZChpbnB1dENvbnRhaW5lcjEyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0UmVtaW5kSW5MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdwcm9qZWN0LXJlbWluZC1pbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbkxhYmVsLnRleHRDb250ZW50ID0gJ1JlbWluZC1pbihkYXlzKTonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTIuYXBwZW5kKHByb2plY3RSZW1pbmRJbkxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RSZW1pbmRJbkxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMi5hcHBlbmQocHJvamVjdFJlbWluZEluTGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFJlbWluZEluSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ251bWJlcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LXJlbWluZC1pbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEyLmFwcGVuZChwcm9qZWN0UmVtaW5kSW5JbnB1dCk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEzLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdC5hcHBlbmQoaW5wdXRDb250YWluZXIxMyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEzLmFwcGVuZChwcm9qZWN0UHJpb3JpdHlMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlMaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTMuYXBwZW5kKHByb2plY3RQcmlvcml0eUxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnbG93Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMy5hcHBlbmQocHJvamVjdFByaW9yaXR5QnV0dG9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgY2xhc3NlcyBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXMgKGRpZmZlcmVudCBjb2xvdXJzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnbG93Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPT09ICdtZWRpdW0nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPSAnaGlnaCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnaGlnaCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9ICdsb3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdmb3JtLXN1Ym1pdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kKHN1Ym1pdEJ1dHRvbik7XG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZXhpc3RpbmdQcm9qZWN0T3B0aW9ucyAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1bnByb2Nlc3NlZFByb2plY3QudGl0bGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVucHJvY2Vzc2VkUHJvamVjdCA9IHByb2plY3RPYmplY3RzKCkudW5wcm9jZXNzZWRQcm9qZWN0QXJyYXlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnNOb2RlKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc05vZGUuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uMC50ZXh0Q29udGVudCA9ICdDaG9vc2Ugb25lJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24wLnZhbHVlID0gJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENob2ljZXNEcm9wRG93bi5hcHBlbmQob3B0aW9uMCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnByb2Nlc3NlZFByb2plY3QuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqZWN0LnRpdGxlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gb2JqZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnZhbHVlID0gb2JqZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q2hvaWNlc0Ryb3BEb3duLmFwcGVuZChwcm9qZWN0T3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RPcHRpb25zKCk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7ZXhpc3RpbmdQcm9qZWN0T3B0aW9uc307XG5cblxufVxuXG5jb25zdCBjcmVhdGVGb3JtRE9NID0gZm9ybURvbU1vZHVsZSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvcm1ET007IiwiXG5cbmZ1bmN0aW9uIG1haW5Eb21Nb2R1bGUgKCl7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICBcbiAgICAvLyBGT1JNIE9QRU5JTkcgQlVUVE9OXG4gICAgXG5cblxuXG4gICAgLy8gVE9QIENPTlRBSU5FUlxuICAgIGNvbnN0IHRvcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdG9wQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvcC1jb250YWluZXInKTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKHRvcENvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgYnJhbmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBicmFuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdicmFuZC1jb250YWluZXInKTtcblxuICAgICAgICB0b3BDb250YWluZXIuYXBwZW5kKGJyYW5kQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgY29uc3QgYnJhbmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgICAgICBicmFuZEhlYWRlci50ZXh0Q29udGVudCA9ICdTYWdlRW50cmllcyc7XG5cbiAgICAgICAgICAgIGJyYW5kQ29udGFpbmVyLmFwcGVuZChicmFuZEhlYWRlcik7XG5cblxuICAgICAgICBjb25zdCB0b3BDb250YWluZXJTcGFjaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdG9wQ29udGFpbmVyU3BhY2luZy5jbGFzc0xpc3QuYWRkKCd0b3AtY29udGFpbmVyLXNwYWNpbmcnKTtcblxuICAgICAgICB0b3BDb250YWluZXIuYXBwZW5kKHRvcENvbnRhaW5lclNwYWNpbmcpO1xuXG4gICAgICAgIFxuICAgICAgICBjb25zdCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QuYWRkKCdoYW1idXJnZXItbWVudScpO1xuXG4gICAgICAgIGhhbWJ1cmdlck1lbnUudGV4dENvbnRlbnQgPSAnLy8vJztcblxuICAgICAgICB0b3BDb250YWluZXIuYXBwZW5kKGhhbWJ1cmdlck1lbnUpO1xuXG5cbiAgICAvLyBNRU5VXG5cbiAgICBjb25zdCBub3RlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbm90ZU1lbnUuY2xhc3NMaXN0LmFkZCgnbm90ZS1tZW51Jyk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChub3RlTWVudSk7XG5cbiAgICAgICAgY29uc3QgYWxsVG9kb3NUYWJET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBhbGxUb2Rvc1RhYkRPTS5jbGFzc0xpc3QuYWRkKCdhbGwtdG9kb3MtdGFiJyk7XG5cbiAgICAgICAgbm90ZU1lbnUuYXBwZW5kKGFsbFRvZG9zVGFiRE9NKTtcblxuICAgICAgICAgICAgY29uc3QgYWxsVG9kb3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgICAgICBhbGxUb2Rvc0hlYWRlci50ZXh0Q29udGVudCA9ICdBbGwgVG9kb3MnO1xuXG4gICAgICAgICAgICBhbGxUb2Rvc1RhYkRPTS5hcHBlbmQoYWxsVG9kb3NIZWFkZXIpXG5cblxuICAgICAgICBjb25zdCBhbGxQcm9qZWN0c1RhYkRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGFsbFByb2plY3RzVGFiRE9NLmNsYXNzTGlzdC5hZGQoJ2FsbC1wcm9qZWN0cy10YWInKTtcblxuICAgICAgICBub3RlTWVudS5hcHBlbmQoYWxsUHJvamVjdHNUYWJET00pO1xuXG4gICAgICAgICAgICBjb25zdCBhbGxQcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICAgICAgICAgIGFsbFByb2plY3RzSGVhZGVyLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcblxuICAgICAgICAgICAgYWxsUHJvamVjdHNUYWJET00uYXBwZW5kKGFsbFByb2plY3RzSGVhZGVyKTtcblxuXG4gICAgICAgIGNvbnN0IGFsbE5vdGVzVGFiRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgYWxsTm90ZXNUYWJET00uY2xhc3NMaXN0LmFkZCgnYWxsLW5vdGVzLXRhYicpO1xuXG4gICAgICAgIG5vdGVNZW51LmFwcGVuZChhbGxOb3Rlc1RhYkRPTSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFsbE5vdGVzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgICAgICAgICAgYWxsTm90ZXNIZWFkZXIudGV4dENvbnRlbnQgPSAnTm90ZXMnO1xuXG4gICAgICAgICAgICBhbGxOb3Rlc1RhYkRPTS5hcHBlbmQoYWxsTm90ZXNIZWFkZXIpO1xuXG5cblxuXG4gICAgLy8gRk9PVEVSXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lckZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdG9kb0NvbnRhaW5lckZvb3Rlci5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lci1mb290ZXInKTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKHRvZG9Db250YWluZXJGb290ZXIpO1xuXG4gICAgICAgIGNvbnN0IGxpbmtDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBsaW5rQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpbmstY29udGFpbmVyJyk7XG5cbiAgICAgICAgdG9kb0NvbnRhaW5lckZvb3Rlci5hcHBlbmQobGlua0NvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvb3RlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICAgICAgICAgIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywnJyk7XG5cbiAgICAgICAgICAgIGZvb3RlckxpbmsudGV4dENvbnRlbnQgPSAnTWFkZSBieSBSaXNzaGlnYW5lc2ggVmlsbGFsYW4nO1xuXG4gICAgICAgICAgICBsaW5rQ29udGFpbmVyLmFwcGVuZChmb290ZXJMaW5rKTtcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG1haW5Eb21Nb2R1bGU7IiwiaW1wb3J0IG5vdGVzT2JqZWN0IGZyb20gXCIuLi90YWJPYmplY3RzL2FsbE5vdGVzVGFiXCI7XG5pbXBvcnQgeyB1cGRhdGVOb3RlSXRlbSB9IGZyb20gXCIuLi9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXNcIjtcblxuZnVuY3Rpb24gYXBwZW5kTm90ZXNPYmplY3QoKXtcbiAgICAgICAgICAgIFxuICAgIGNvbnN0IGNvbGxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbi1jb250YWluZXInKTtcblxuICAgIGNvbGxlY3Rpb25Db250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIFxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgfSk7XG5cblxuICAgIGNvbnN0IG5vdGVzQ29sbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbm90ZXNDb2xsZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ25vdGVzLWNvbGxlY3Rpb24nKTtcblxuICAgIGNvbGxlY3Rpb25Db250YWluZXIuYXBwZW5kKG5vdGVzQ29sbGVjdGlvbik7XG5cbiAgICBjb25zdCBub3Rlc0FycmF5ID0gbm90ZXNPYmplY3QoKS5yZXZlcnNlKCk7XG5cbiAgICBjb25zb2xlLmxvZyhub3Rlc0FycmF5KTtcblxuICAgIG5vdGVzQXJyYXkuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICBjb25zdCBub3Rlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBub3Rlc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdub3Rlcy1jb250YWluZXInKTtcbiAgICAgICAgbm90ZXNDb2xsZWN0aW9uLmFwcGVuZChub3Rlc0NvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGNvbnN0IG5vdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbm90ZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ25vdGUtdGl0bGUnKTtcbiAgICAgICAgICAgIG5vdGVUaXRsZS50ZXh0Q29udGVudCA9IG9iamVjdC50aXRsZTtcbiAgICAgICAgICAgIG5vdGVzQ29udGFpbmVyLmFwcGVuZChub3RlVGl0bGUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBub3RlRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbm90ZURlc2MuY2xhc3NMaXN0LmFkZCgnbm90ZS1kZXNjJyk7XG4gICAgICAgICAgICBub3RlRGVzYy50ZXh0Q29udGVudCA9IG9iamVjdC5kZXNjO1xuICAgICAgICAgICAgbm90ZXNDb250YWluZXIuYXBwZW5kKG5vdGVEZXNjKTtcblxuXG5cbiAgICAgICAgbm90ZXNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcblxuICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgdG9kb0Rpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZCh0b2RvRGlzcGxheUNvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5jbGFzc0xpc3QuYWRkKCd0b2RvLWRpc3BsYXknKTtcblxuICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5Q29udGFpbmVyLmFwcGVuZCh0b2RvRGlzcGxheSk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1RpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LXRpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS52YWx1ZSA9IG9iamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlUaXRsZSk7XG5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY1RleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS1kZXNjJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnRGVzY3JpcHRpb24nKVxuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdjb2xzJywnMzAnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncm93cycsJzEwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS52YWx1ZSA9IG9iamVjdC5kZXNjO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rlc2NUZXh0QXJlYSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0b2RvRGlzcGxheURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5RGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb0Rpc3BsYXlEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5RGF0ZS52YWx1ZSA9IG9iamVjdC5kdWVEYXRlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5RGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheURhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGxpbmVCcmVhazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWsxKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9EaXNwbGF5UmVtaW5kSW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5UmVtaW5kSW4uc2V0QXR0cmlidXRlKCd0eXBlJywnbnVtYmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb0Rpc3BsYXlSZW1pbmRJbi5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LXJlbWluZC1pbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iamVjdC5kdWVEYXRlKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheVJlbWluZEluLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdSZW1pbmQgaW4gaG93IG1hbnkgZGF5cz8nKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheVJlbWluZEluLnZhbHVlID0gb2JqZWN0LnJlbWluZEluO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5UmVtaW5kSW4uY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlSZW1pbmRJbik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgbGluZUJyZWFrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWsyKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9EaXNwbGF5UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheVByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLG9iamVjdC5wcmlvcml0eSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb0Rpc3BsYXlQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheVByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheVByaW9yaXR5LnRleHRDb250ZW50ID0gb2JqZWN0LnByaW9yaXR5O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlQcmlvcml0eSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb0Rpc3BsYXlQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2codG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSlcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gQWRkIGNsYXNzZXMgZm9yIGRpZmZlcmVudCBwcmlvcml0aWVzIChkaWZmZXJlbnQgY29sb3VycylcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPT09ICdsb3cnKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID0gJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAodG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9PT0gJ21lZGl1bScpe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPSAnaGlnaCc7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS50ZXh0Q29udGVudCA9ICdIaWdoJztcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPT09ICdoaWdoJyl7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9ICdsb3cnO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGxpbmVCcmVhazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrMyk7XG5cblxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBwcm9qZWN0c0Ryb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvamVjdHNEcm9wRG93bi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcm9qZWN0LWRpc3BsYXktY2hvaWNlcycpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHByb2plY3RzRHJvcERvd24uc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtZGlzcGxheS1jaG9pY2VzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvamVjdHNEcm9wRG93bi5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb0Rpc3BsYXkuYXBwZW5kKHByb2plY3RzRHJvcERvd24pO1xuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgdW5wcm9jZXNzZWRQcm9qZWN0ID0gcHJvamVjdE9iamVjdHMoKS51bnByb2Nlc3NlZFByb2plY3RBcnJheVxuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3Qgb3B0aW9uc05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpZihvcHRpb25zTm9kZSl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG9wdGlvbnNOb2RlLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IG9wdGlvbjAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBvcHRpb24wLnRleHRDb250ZW50ID0gb2JqZWN0LnByb2plY3Q7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgb3B0aW9uMC52YWx1ZSA9IG9iamVjdC5wcm9qZWN0O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3RzRHJvcERvd24uYXBwZW5kKG9wdGlvbjApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHVucHJvY2Vzc2VkUHJvamVjdC5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iamVjdC50aXRsZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IG9iai50aXRsZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5hcHBlbmQocHJvamVjdE9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGxpbmVCcmVhazQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrNCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIGxpbmUgYnJlYWsgXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdG9kb0Rpc3BsYXlTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheVN0YXR1cy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxvYmplY3Quc3RhdHVzKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheVN0YXR1cy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheVN0YXR1cy5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LXN0YXR1cycpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5U3RhdHVzLnRleHRDb250ZW50ID0gb2JqZWN0LnN0YXR1cztcblxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvRGlzcGxheVN0YXR1cy5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheVN0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kb0Rpc3BsYXlTdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBBZGQgY2xhc3NlcyBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXMgKGRpZmZlcmVudCBjb2xvdXJzKVxuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAodG9kb0Rpc3BsYXlTdGF0dXMudmFsdWUgPT09ICdwZW5kaW5nJyl7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMudmFsdWUgPSAnY29tcGxldGUnO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJztcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHRvZG9EaXNwbGF5U3RhdHVzLnZhbHVlID09PSAnY29tcGxldGUnKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy52YWx1ZSA9ICdwZW5kaW5nJztcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy50ZXh0Q29udGVudCA9ICdQZW5kaW5nJztcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVCcmVhazUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrNSk7XG5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVXBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUudGV4dENvbnRlbnQgPSAnVXBkYXRlJztcblxuICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvZG9VcGRhdGUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTm90ZUl0ZW0ob2JqZWN0KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cblxuXG5cbn1cblxuLy8gYXBwZW5kTm90ZXNPYmplY3QoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwZW5kTm90ZXNPYmplY3QiLCJpbXBvcnQgcHJvamVjdE9iamVjdHMgZnJvbSBcIi4uL3RhYk9iamVjdHMvYWxsUHJvamVjdHNUYWJcIjtcblxuaW1wb3J0IHsgdXBkYXRlVG9kb0l0ZW0gfSBmcm9tIFwiLi4vZG9tQWN0aXZpdGllcy9kb21BY3Rpdml0aWVzXCI7XG5cblxuLy8gUE9QVUxBVEUgVE9ETyBDT0xMRUNUSU9OIENPTlRBSU5FUlxuXG4vLyBoaWdoXG4vLyBwdXQgdGhpcyBpbiBhIGRpZmZlcmVudCBtb2R1bGVcbmZ1bmN0aW9uIGFwcGVuZFByb2plY3RPYmplY3RzKHByaW9yaXR5KXtcblxuICAgIGNvbnNvbGUubG9nKCdXT1JLS0shJylcblxuICAgIFxuXG4gICAgY29uc3QgY29sbGVjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uLWNvbnRhaW5lcicpXG5cbiAgICBjb2xsZWN0aW9uQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcblxuICAgIH0pO1xuXG5cblxuICAgIGNvbnN0IGFsbFByb2plY3RPYmplY3QgPSBwcm9qZWN0T2JqZWN0cygpLnByb2plY3RzQnlQcmlvcml0eTtcbiAgICAvLyBjb25zb2xlLmxvZyhhbGxQcm9qZWN0T2JqZWN0KTtcblxuICAgIGNvbnN0IGR1ZVN0YXR1c0FycmF5ID0gWydvdmVyZHVlJywnZHVlJywndXBjb21pbmcnLCdjb21wbGV0ZSddO1xuXG4gICAgY29uc3QgdGl0bGVBcnJheSA9IFsnT1ZFUkRVRScsJ0RVRSBTT09OJywnVVBDT01JTkcnLCdDT01QTEVURUQnXTtcblxuICAgIGNvbnN0IGNsYXNzQXJyYXkgPSBbJ292ZXJkdWUtY29udGFpbmVyJywnZHVlLXNvb24tY29udGFpbmVyJywndXBjb21pbmctY29udGFpbmVyJywnY29tcGxldGUtY29udGFpbmVyJ107XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhbGxQcm9qZWN0T2JqZWN0KSB7XG5cbiAgICAgICAgaWYgKGtleSA9PT0gcHJpb3JpdHkpIHtcblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkdWVTdGF0dXNBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSBkdWVTdGF0dXNBcnJheVtpbmRleF07XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzcGVjaWZpZWRPYmpCeVByaW9yaXR5ID0gYWxsUHJvamVjdE9iamVjdFtrZXldO1xuXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHNwZWNpZmllZE9iakJ5UHJpb3JpdHkpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gcHJvcGVydHkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udGFpbnMgYXJyYXkgb2YgdG9kbyBvYmplY3RzIG9mIGVhY2ggZHVlIHN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCeUR1ZVN0YXR1cyA9IHNwZWNpZmllZE9iakJ5UHJpb3JpdHlbcHJvcF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJheUJ5RHVlU3RhdHVzLmxlbmd0aCA9PT0gMCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3RhdHVzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbkNvbnRhaW5lci5hcHBlbmQoc3RhdHVzQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVEaXYudGV4dENvbnRlbnQgPSB0aXRsZUFycmF5W2luZGV4XTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb250YWluZXIuYXBwZW5kKHByb2plY3RUaXRsZURpdik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHVlU3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVlU3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NBcnJheVtpbmRleF0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZURpdi5hcHBlbmQoZHVlU3RhdHVzQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGFibGUtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZVN0YXR1c0NvbnRhaW5lci5hcHBlbmQoc2Nyb2xsYWJsZUNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9vcHMgb3ZlciBlYWNoIHByb2plY3Qgb2JqZWN0IGFuZCBhcHBlbmRzIHRoZW0gdG8gc2Nyb2xsYWJsZSBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlCeUR1ZVN0YXR1cy5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0Q29udGFpbmVyKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZS1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZURpdi50ZXh0Q29udGVudCA9IG9iamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3RUaXRsZURpdik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlc2MtZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0Rpdi50ZXh0Q29udGVudCA9IG9iamVjdC5kZXNjO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdERlc2NEaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERhdGVEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kYXRlLWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERhdGVEaXYudGV4dENvbnRlbnQgPSBvYmplY3QuZHVlRGF0ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3REYXRlRGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdER1cmF0aW9uTGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdER1cmF0aW9uTGVmdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWR1ci1sZWZ0LWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdER1cmF0aW9uTGVmdERpdi50ZXh0Q29udGVudCA9IGAke29iamVjdC5kdXJhdGlvbkxlZnQuZGF5TGVmdH0gZGF5cywgJHtvYmplY3QuZHVyYXRpb25MZWZ0Lm1vbnRoc0xlZnR9IG1vbnRocyBhbmQgJHtvYmplY3QuZHVyYXRpb25MZWZ0LnllYXJzTGVmdH0geWVhcnMgbGVmdGA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0RHVyYXRpb25MZWZ0RGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5dERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXByaW9yaXR5LWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5dERpdi50ZXh0Q29udGVudCA9IG9iamVjdC5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3RQcmlvcml0eXREaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBESVNQTEFZIFBST0pFQ1QgVE9ET1MgLSBzZW5kIHByb2plY3QgY29udGFpbmVyIGFzIGFuIGFyZ3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQk9PTSBCT09NIScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvYmplY3QudG9kb3NCeVByaW9yaXR5KTsgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG8tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0VG9kb0NvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9zLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdG9kb3MnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb0NvbnRhaW5lci5hcHBlbmQocHJvamVjdFRvZG9zKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbGxQcm9qZWN0VG9kb3MgPSBvYmplY3QudG9kb3NCeVByaW9yaXR5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5QXJyYXkgPSBbJ2hpZ2gnLCdtZWRpdW0nLCdsb3cnXVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1ZVN0YXR1c0FycmF5ID0gWydvdmVyZHVlJywnZHVlJywndXBjb21pbmcnLCdjb21wbGV0ZSddO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlQXJyYXkgPSBbJ09WRVJEVUUnLCdEVUUgU09PTicsJ1VQQ09NSU5HJywnQ09NUExFVEVEJ107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NBcnJheSA9IFsnb3ZlcmR1ZS10b2RvcycsJ2R1ZS1zb29uLXRvZG9zJywndXBjb21pbmctdG9kb3MnLCdjb21wbGV0ZS10b2RvcyddO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlBcnJheS5mb3JFYWNoKHByaW9yaXR5ID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYWxsUHJvamVjdFRvZG9zKSB7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFsbFByb2plY3RUb2Rvc1trZXldLm92ZXJkdWUubGVuZ3RoID09PSAwICYmIGFsbFByb2plY3RUb2Rvc1trZXldLmR1ZS5sZW5ndGggPT09IDAgJiYgYWxsUHJvamVjdFRvZG9zW2tleV0udXBjb21pbmcubGVuZ3RoID09PSAwICYmIGFsbFByb2plY3RUb2Rvc1trZXldLmNvbXBsZXRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbW92ZSB0byBuZXh0IGxvb3AgaWYgZW1wdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gcHJpb3JpdHkpIHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5VGl0bGUudGV4dENvbnRlbnQgPSBwcmlvcml0eS50b1VwcGVyQ2FzZSgpICtgIFBSSU9SSVRZYDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb3MuYXBwZW5kKHByaW9yaXR5VGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZHVlU3RhdHVzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gZHVlU3RhdHVzQXJyYXlbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwZWNpZmllZE9iakJ5UHJpb3JpdHkgPSBhbGxQcm9qZWN0VG9kb3Nba2V5XTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNwZWNpZmllZE9iakJ5UHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBzcGVjaWZpZWRPYmpCeVByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udGFpbnMgYXJyYXkgb2YgdG9kbyBvYmplY3RzIG9mIGVhY2ggZHVlIHN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJheUJ5RHVlU3RhdHVzID0gc3BlY2lmaWVkT2JqQnlQcmlvcml0eVtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJheUJ5RHVlU3RhdHVzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdydW5zJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLXN0YXR1cy1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb3MuYXBwZW5kKHN0YXR1c0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVEaXYudGV4dENvbnRlbnQgPSB0aXRsZUFycmF5W2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29udGFpbmVyLmFwcGVuZCh0b2RvVGl0bGVEaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1ZVN0YXR1c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVTdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc0FycmF5W2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZURpdi5hcHBlbmQoZHVlU3RhdHVzQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzY3JvbGxhYmxlLXRvZG8tY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVTdGF0dXNDb250YWluZXIuYXBwZW5kKHNjcm9sbGFibGVDb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9vcHMgb3ZlciBlYWNoIHRvZG8gb2JqZWN0IGFuZCBhcHBlbmRzIHRoZW0gdG8gc2Nyb2xsYWJsZSBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheUJ5RHVlU3RhdHVzLmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVDb250YWluZXIuYXBwZW5kKHRvZG9Db250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZS1kaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVEaXYudGV4dENvbnRlbnQgPSBvYmplY3QudGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb1RpdGxlRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2MtZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NEaXYudGV4dENvbnRlbnQgPSBvYmplY3QuZGVzYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvRGVzY0Rpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVEaXYuY2xhc3NMaXN0LmFkZCgndG9kby1kYXRlLWRpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlRGl2LnRleHRDb250ZW50ID0gb2JqZWN0LmR1ZURhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0RhdGVEaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRHVyYXRpb25MZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0R1cmF0aW9uTGVmdERpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ci1sZWZ0LWRpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EdXJhdGlvbkxlZnREaXYudGV4dENvbnRlbnQgPSBgJHtvYmplY3QuZHVyYXRpb25MZWZ0LmRheUxlZnR9IGRheXMsICR7b2JqZWN0LmR1cmF0aW9uTGVmdC5tb250aHNMZWZ0fSBtb250aHMgYW5kICR7b2JqZWN0LmR1cmF0aW9uTGVmdC55ZWFyc0xlZnR9IHllYXJzIGxlZnRgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9EdXJhdGlvbkxlZnREaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJvamVjdC1kaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJvamVjdERpdi50ZXh0Q29udGVudCA9IG9iamVjdC5wcm9qZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9Qcm9qZWN0RGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eXREaXYuY2xhc3NMaXN0LmFkZCgndG9kby1wcmlvcml0eS1kaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHl0RGl2LnRleHRDb250ZW50ID0gb2JqZWN0LnByaW9yaXR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9Qcmlvcml0eXREaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5cblxuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWRpc3BsYXktY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKHRvZG9EaXNwbGF5Q29udGFpbmVyKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGlzcGxheScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlDb250YWluZXIuYXBwZW5kKHRvZG9EaXNwbGF5KTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlUaXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnVGl0bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktdGl0bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVRpdGxlLnZhbHVlID0gb2JqZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheVRpdGxlKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LWRlc2MnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdEZXNjcmlwdGlvbicpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCczMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywnMTAnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnZhbHVlID0gb2JqZWN0LmRlc2M7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGVzY1RleHRBcmVhKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheURhdGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS1kYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlEYXRlLnZhbHVlID0gb2JqZWN0LmR1ZURhdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvZG9EaXNwbGF5RGF0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZUJyZWFrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazEpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlSZW1pbmRJbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlSZW1pbmRJbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdudW1iZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktcmVtaW5kLWluJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2JqZWN0LmR1ZURhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1JlbWluZCBpbiBob3cgbWFueSBkYXlzPycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4udmFsdWUgPSBvYmplY3QucmVtaW5kSW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlSZW1pbmRJbi5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheVJlbWluZEluKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lQnJlYWsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazIpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsb2JqZWN0LnByaW9yaXR5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudGV4dENvbnRlbnQgPSBvYmplY3QucHJpb3JpdHk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheVByaW9yaXR5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgY2xhc3NlcyBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXMgKGRpZmZlcmVudCBjb2xvdXJzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9PT0gJ2xvdycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPSAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID09PSAnbWVkaXVtJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9ICdoaWdoJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9PT0gJ2hpZ2gnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID0gJ2xvdyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZUJyZWFrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWszKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RzRHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Byb2plY3QtZGlzcGxheS1jaG9pY2VzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzRHJvcERvd24uc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtZGlzcGxheS1jaG9pY2VzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzRHJvcERvd24uY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQocHJvamVjdHNEcm9wRG93bik7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bnByb2Nlc3NlZFByb2plY3QgPSBwcm9qZWN0T2JqZWN0cygpLnVucHJvY2Vzc2VkUHJvamVjdEFycmF5XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnNOb2RlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc05vZGUuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjAudGV4dENvbnRlbnQgPSBvYmplY3QucHJvamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24wLnZhbHVlID0gb2JqZWN0LnByb2plY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5hcHBlbmQob3B0aW9uMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5wcm9jZXNzZWRQcm9qZWN0LmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqZWN0LnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnZhbHVlID0gb2JqLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLmFwcGVuZChwcm9qZWN0T3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZUJyZWFrNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWs0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgbGluZSBicmVhayBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheVN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgndmFsdWUnLG9iamVjdC5zdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2RvLWRpc3BsYXktc3RhdHVzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSBvYmplY3Quc3RhdHVzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvZG9EaXNwbGF5U3RhdHVzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBjbGFzc2VzIGZvciBkaWZmZXJlbnQgcHJpb3JpdGllcyAoZGlmZmVyZW50IGNvbG91cnMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRGlzcGxheVN0YXR1cy52YWx1ZSA9PT0gJ3BlbmRpbmcnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy52YWx1ZSA9ICdjb21wbGV0ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0Rpc3BsYXlTdGF0dXMudmFsdWUgPT09ICdjb21wbGV0ZScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnZhbHVlID0gJ3BlbmRpbmcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnRleHRDb250ZW50ID0gJ1BlbmRpbmcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZUJyZWFrNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWs1KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9VcGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVXBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS50ZXh0Q29udGVudCA9ICdVcGRhdGUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb1VwZGF0ZSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVUb2RvSXRlbShvYmplY3QpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9Db250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3b3JrcyEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuXG5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcblxuXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG4vLyBTRU5EIFRISVMgVE8gYWxsVG9kb0RPTUNyZWF0aW9uLmpzXG4vLyBhcHBlbmRUb2RvT2JqZWN0cygnaGlnaCcpXG5cbmV4cG9ydCBkZWZhdWx0IGFwcGVuZFByb2plY3RPYmplY3RzOyIsImltcG9ydCB0b2RvT2JqZWN0IGZyb20gXCIuLi90YWJPYmplY3RzL2FsbFRvZG9zVGFiXCI7XG5pbXBvcnQgdG9kb01vZHVsZSBmcm9tIFwiLi4vY3JlYXRlVG9kb3NcIjtcbi8vIGZvciBzZWxlY3Rpb24gb3B0aW9uc1xuaW1wb3J0IHByb2plY3RPYmplY3RzIGZyb20gJy4uL3RhYk9iamVjdHMvYWxsUHJvamVjdHNUYWInO1xuXG4vLyBkb2Vzbid0IHdvcmsgYmVjYXVzZSBvZiBjaXJjdWxhciBkZXBlbmRlbmN5XG4vLyBpbXBvcnQgdXBkYXRlVG9kb0l0ZW0gIGZyb20gJy4uL2RvbUFjdGl2aXRpZXMvdXBkYXRlVG9kb0RPTSc7XG5cbmltcG9ydCB7IHVwZGF0ZVRvZG9JdGVtIH0gZnJvbSBcIi4uL2RvbUFjdGl2aXRpZXMvZG9tQWN0aXZpdGllc1wiO1xuXG5cbi8vIFBPUFVMQVRFIFRPRE8gQ09MTEVDVElPTiBDT05UQUlORVJcblxuLy8gaGlnaFxuLy8gcHV0IHRoaXMgaW4gYSBkaWZmZXJlbnQgbW9kdWxlXG5mdW5jdGlvbiBhcHBlbmRUb2RvT2JqZWN0cyhwcmlvcml0eSl7XG5cbiAgICBcblxuICAgIGNvbnN0IGNvbGxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbi1jb250YWluZXInKVxuXG4gICAgY29sbGVjdGlvbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICB9KTtcblxuXG5cbiAgICBjb25zdCBhbGxUb2RvT2JqZWN0ID0gdG9kb09iamVjdCgpO1xuXG4gICAgY29uc3QgZHVlU3RhdHVzQXJyYXkgPSBbJ292ZXJkdWUnLCdkdWUnLCd1cGNvbWluZycsJ2NvbXBsZXRlJ107XG5cbiAgICBjb25zdCB0aXRsZUFycmF5ID0gWydPVkVSRFVFJywnRFVFIFNPT04nLCdVUENPTUlORycsJ0NPTVBMRVRFRCddO1xuXG4gICAgY29uc3QgY2xhc3NBcnJheSA9IFsnb3ZlcmR1ZS1jb250YWluZXInLCdkdWUtc29vbi1jb250YWluZXInLCd1cGNvbWluZy1jb250YWluZXInLCdjb21wbGV0ZS1jb250YWluZXInXTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIGFsbFRvZG9PYmplY3QpIHtcblxuICAgICAgICBpZiAoa2V5ID09PSBwcmlvcml0eSkge1xuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGR1ZVN0YXR1c0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGR1ZVN0YXR1c0FycmF5W2luZGV4XTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNwZWNpZmllZE9iakJ5UHJpb3JpdHkgPSBhbGxUb2RvT2JqZWN0W2tleV07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gc3BlY2lmaWVkT2JqQnlQcmlvcml0eSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSBwcm9wZXJ0eSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250YWlucyBhcnJheSBvZiB0b2RvIG9iamVjdHMgb2YgZWFjaCBkdWUgc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJheUJ5RHVlU3RhdHVzID0gc3BlY2lmaWVkT2JqQnlQcmlvcml0eVtwcm9wXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5QnlEdWVTdGF0dXMubGVuZ3RoID09PSAwKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdGF0dXMtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uQ29udGFpbmVyLmFwcGVuZChzdGF0dXNDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZURpdi50ZXh0Q29udGVudCA9IHRpdGxlQXJyYXlbaW5kZXhdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvbnRhaW5lci5hcHBlbmQodG9kb1RpdGxlRGl2KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkdWVTdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVTdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc0FycmF5W2luZGV4XSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGl2LmFwcGVuZChkdWVTdGF0dXNDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxhYmxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsYWJsZS1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVlU3RhdHVzQ29udGFpbmVyLmFwcGVuZChzY3JvbGxhYmxlQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsb29wcyBvdmVyIGVhY2ggdG9kbyBvYmplY3QgYW5kIGFwcGVuZHMgdGhlbSB0byBzY3JvbGxhYmxlIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheUJ5RHVlU3RhdHVzLmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVDb250YWluZXIuYXBwZW5kKHRvZG9Db250YWluZXIpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlLWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGl2LnRleHRDb250ZW50ID0gb2JqZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb1RpdGxlRGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVzYy1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjRGl2LnRleHRDb250ZW50ID0gb2JqZWN0LmRlc2M7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvRGVzY0Rpdik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRhdGUtZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGF0ZURpdi50ZXh0Q29udGVudCA9IG9iamVjdC5kdWVEYXRlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0RhdGVEaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRHVyYXRpb25MZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRHVyYXRpb25MZWZ0RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVyLWxlZnQtZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRHVyYXRpb25MZWZ0RGl2LnRleHRDb250ZW50ID0gYCR7b2JqZWN0LmR1cmF0aW9uTGVmdC5kYXlMZWZ0fSBkYXlzLCAke29iamVjdC5kdXJhdGlvbkxlZnQubW9udGhzTGVmdH0gbW9udGhzIGFuZCAke29iamVjdC5kdXJhdGlvbkxlZnQueWVhcnNMZWZ0fSB5ZWFycyBsZWZ0YDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9EdXJhdGlvbkxlZnREaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZCgndG9kby1wcm9qZWN0LWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1Byb2plY3REaXYudGV4dENvbnRlbnQgPSBvYmplY3QucHJvamVjdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9Qcm9qZWN0RGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5dERpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLXByaW9yaXR5LWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5dERpdi50ZXh0Q29udGVudCA9IG9iamVjdC5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9Qcmlvcml0eXREaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNFTkQgVE8gQSBTRVBBUkFURSBNT0RVTEUgLSBPUEVOUyBUT0RPIElURU1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmQodG9kb0Rpc3BsYXlDb250YWluZXIpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5jbGFzc0xpc3QuYWRkKCd0b2RvLWRpc3BsYXknKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheUNvbnRhaW5lci5hcHBlbmQodG9kb0Rpc3BsYXkpO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1RpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS10aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVRpdGxlLnZhbHVlID0gb2JqZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlUaXRsZSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rlc2NUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS1kZXNjJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ0Rlc2NyaXB0aW9uJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCczMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgncm93cycsJzEwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLnZhbHVlID0gb2JqZWN0LmRlc2M7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgndG9kby11cGRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvZG9EZXNjVGV4dEFyZWEpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5RGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5RGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LWRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlEYXRlLnZhbHVlID0gb2JqZWN0LmR1ZURhdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5RGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlEYXRlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZUJyZWFrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWsxKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheVJlbWluZEluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlSZW1pbmRJbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdudW1iZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlSZW1pbmRJbi5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kaXNwbGF5LXJlbWluZC1pbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvYmplY3QuZHVlRGF0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UmVtaW5kSW4uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1JlbWluZCBpbiBob3cgbWFueSBkYXlzPycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLnZhbHVlID0gb2JqZWN0LnJlbWluZEluO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVJlbWluZEluLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheVJlbWluZEluKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZUJyZWFrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrMik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXlQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLG9iamVjdC5wcmlvcml0eSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnRleHRDb250ZW50ID0gb2JqZWN0LnByaW9yaXR5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZCh0b2RvRGlzcGxheVByaW9yaXR5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGNsYXNzZXMgZm9yIGRpZmZlcmVudCBwcmlvcml0aWVzIChkaWZmZXJlbnQgY29sb3VycylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID09PSAnbG93Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5UHJpb3JpdHkudmFsdWUgPSAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9PT0gJ21lZGl1bScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnZhbHVlID0gJ2hpZ2gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9PT0gJ2hpZ2gnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlQcmlvcml0eS52YWx1ZSA9ICdsb3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVByaW9yaXR5LnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZUJyZWFrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQobGluZUJyZWFrMyk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdHNEcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Byb2plY3QtZGlzcGxheS1jaG9pY2VzJyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1kaXNwbGF5LWNob2ljZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQocHJvamVjdHNEcm9wRG93bik7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5wcm9jZXNzZWRQcm9qZWN0ID0gcHJvamVjdE9iamVjdHMoKS51bnByb2Nlc3NlZFByb2plY3RBcnJheVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnNOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihvcHRpb25zTm9kZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc05vZGUuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uMC50ZXh0Q29udGVudCA9IG9iamVjdC5wcm9qZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uMC52YWx1ZSA9IG9iamVjdC5wcm9qZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNEcm9wRG93bi5hcHBlbmQob3B0aW9uMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5wcm9jZXNzZWRQcm9qZWN0LmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iamVjdC50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IG9iai50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0Ryb3BEb3duLmFwcGVuZChwcm9qZWN0T3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lQnJlYWs0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZChsaW5lQnJlYWs0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIGxpbmUgYnJlYWsgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5U3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnNldEF0dHJpYnV0ZSgndmFsdWUnLG9iamVjdC5zdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGlzcGxheS1zdGF0dXMnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMudGV4dENvbnRlbnQgPSBvYmplY3Quc3RhdHVzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb0Rpc3BsYXlTdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgY2xhc3NlcyBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXMgKGRpZmZlcmVudCBjb2xvdXJzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9EaXNwbGF5U3RhdHVzLnZhbHVlID09PSAncGVuZGluZycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheVN0YXR1cy52YWx1ZSA9ICdjb21wbGV0ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9EaXNwbGF5U3RhdHVzLnZhbHVlID09PSAnY29tcGxldGUnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXlTdGF0dXMudmFsdWUgPSAncGVuZGluZyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5U3RhdHVzLnRleHRDb250ZW50ID0gJ1BlbmRpbmcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVCcmVhazUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKGxpbmVCcmVhazUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9VcGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tdXBkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9VcGRhdGUudGV4dENvbnRlbnQgPSAnVXBkYXRlJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1VwZGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9kb1VwZGF0ZSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVG9kb0l0ZW0ob2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGFwcGVuZFRvZG9PYmplY3RzOyIsIi8vIGltcG9ydCBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uIGZyb20gXCIuL3BvcHVsYXRlRE9NVG9kb0NvbGxlY3Rpb25cIjtcblxuaW1wb3J0IGFwcGVuZFByb2plY3RPYmplY3RzIGZyb20gXCIuL3BvcHVsYXRlRE9NUHJvamVjdENvbGxlY3Rpb25cIjtcblxuaW1wb3J0IHsgY2hhbmdlUHJvamVjdFByaW9yaXR5IH0gZnJvbSBcIi4uL2RvbUFjdGl2aXRpZXMvZG9tQWN0aXZpdGllc1wiO1xuXG5mdW5jdGlvbiBwcm9qZWN0RE9NTW9kdWxlICgpe1xuXG4gICAgY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG5cblxuXG4gICAgLy8gbW92ZSB0byBkb21BY3Rpdml0eVxuICAgIGZ1bmN0aW9uIHJlbW92ZUV4aXN0aW5nRGlzcGxheURPTSAoKXtcblxuICAgICAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktY29udGFpbmVyJyk7XG5cbiAgICAgICAgZGlzcGxheUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICB9KTtcblxuICAgIH1cblxuICAgIHJlbW92ZUV4aXN0aW5nRGlzcGxheURPTSgpO1xuXG5cbiAgICBcblxuXG4gICAgXG5cblxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgcHJvamVjdENvbnRhaW5lclRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyLXRpdGxlJyk7XG5cbiAgICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0Q29udGFpbmVyVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHRhYlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdGFiVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFiLXRpdGxlJyk7XG5cbiAgICAgICAgcHJvamVjdENvbnRhaW5lclRpdGxlLmFwcGVuZCh0YWJUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgICAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcblxuICAgICAgICAgICAgdGFiVGl0bGUuYXBwZW5kKHByb2plY3RIZWFkZXIpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgICAgIHByb2plY3RQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnWW91ciBjb2xsZWN0aW9uIG9mIFByb2plY3RzIGFyZSBkaXNwbGF5ZWQgaGVyZSc7XG5cbiAgICAgICAgICAgIHRhYlRpdGxlLmFwcGVuZChwcm9qZWN0UGFyYWdyYXBoKTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgcHJpb3JpdHlCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWJ1dHRvbnMnKTtcblxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyVGl0bGUuYXBwZW5kKHByaW9yaXR5QnV0dG9ucyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnY2hvc2VuLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9ICdIaWdoJztcblxuICAgICAgICAgICAgcHJpb3JpdHlCdXR0b25zLmFwcGVuZChoaWdoUHJpb3JpdHkpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ21lZGl1bS1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICBtZWRpdW1Qcmlvcml0eS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuXG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kKG1lZGl1bVByaW9yaXR5KTtcblxuXG4gICAgICAgICAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBsb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdsb3ctcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgcHJpb3JpdHlCdXR0b25zLmFwcGVuZChsb3dQcmlvcml0eSk7XG5cbiAgICAgICAgICAgIFxuXG5cblxuXG5cbiAgICBcbiAgICBjb25zdCBjb2xsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb2xsZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbGxlY3Rpb24tY29udGFpbmVyJyk7XG5cbiAgICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZChjb2xsZWN0aW9uQ29udGFpbmVyKTtcblxuICAgIC8vIHBvcHVsYXRlVG9kb0NvbGxlY3Rpb24oJ2hpZ2gnKTtcbiAgICBhcHBlbmRQcm9qZWN0T2JqZWN0cygnaGlnaCcpO1xuXG4gICAgY2hhbmdlUHJvamVjdFByaW9yaXR5KCk7XG4gICAgXG4gICAgLy8gZG9tQWN0aW9uKClcblxuICAgIFxuICAgIFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RET01Nb2R1bGU7IiwiaW1wb3J0IHNvcnRpbmdNZXRob2RzIGZyb20gJy4uL2RvbUFjdGl2aXRpZXMvc29ydGluZ01ldGhvZHMnXG5cbmZ1bmN0aW9uIGFsbE5vdGVzVGFiICgpe1xuXG4gICAgY29uc3QgY2xvbmVUb2RvQXJyYXkgPSBzb3J0aW5nTWV0aG9kcy5jbG9uZU9iamVjdCgpLmNsb25lVG9kb0FycmF5O1xuXG4gICAgY29uc3Qgbm90ZXNBcnJheSA9IHNvcnRpbmdNZXRob2RzLm5vdGVTb3J0ZXIoY2xvbmVUb2RvQXJyYXkpO1xuXG4gICAgY29uc29sZS5sb2coJ05PVEVTIFRBQicpO1xuXG4gICAgLy8gY29uc29sZS5sb2cobm90ZXNBcnJheSk7XG5cbiAgICByZXR1cm4gbm90ZXNBcnJheTtcblxuXG5cbn1cblxuYWxsTm90ZXNUYWIoKTtcblxuZXhwb3J0IGRlZmF1bHQgYWxsTm90ZXNUYWI7IiwiaW1wb3J0IHNvcnRpbmdNZXRob2RzIGZyb20gJy4uL2RvbUFjdGl2aXRpZXMvc29ydGluZ01ldGhvZHMnXG5cbmZ1bmN0aW9uIHByb2plY3RzVGFiICgpe1xuXG4gICAgICAgIFxuXG4gICAgY29uc3QgdW5wcm9jZXNzZWRQcm9qZWN0QXJyYXkgPSBzb3J0aW5nTWV0aG9kcy5zb3J0QnlQcm9qZWN0TmFtZSgpLnByb2Nlc3NlZFByb2plY3RBcnJheUJ5TmFtZTtcblxuICAgIFxuXG4gICAgLy8gQWxsIHByb2plY3RzIGFyZSBzdG9yZWQgaGVyZVxuICAgIC8vIEZpcnN0IHNvcnQgdGhlIHByb2plY3RzIGJ5IHByaW9yaXR5XG4gICAgY29uc3QgcHJvamVjdHNCeVByaW9yaXR5ID0gc29ydGluZ01ldGhvZHMucHJpb3JpdHlTb3J0ZXIodW5wcm9jZXNzZWRQcm9qZWN0QXJyYXkpO1xuXG5cbiAgICBcblxuICAgIC8vIFRoZW4gc29ydCB0aGUgbm90ZXMgaW4gdGhvc2UgcHJvamVjdHMgYnkgcHJpb3JpdHlcbiAgICBmb3IgKGNvbnN0IHByaW9yaXR5TGV2ZWwgaW4gcHJvamVjdHNCeVByaW9yaXR5KSB7XG5cbiAgICAgICAgcHJvamVjdHNCeVByaW9yaXR5W3ByaW9yaXR5TGV2ZWxdLmZvckVhY2gocHJvamVjdCA9PiB7XG5cbiAgICAgICAgICAgIC8vIHNvcnQgcHJpb3JpdHkgb2YgdG9kb0NvbGxlY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHNvcnRCeVByaW9yaXR5ID0gc29ydGluZ01ldGhvZHMucHJpb3JpdHlTb3J0ZXIocHJvamVjdC50b2RvQ29sbGVjdGlvbilcblxuXG4gICAgICAgICAgICAvLyBTb3J0IHRvZG9zIGJ5IGR1ZSBkYXRlXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByaW9yaXR5IGluIHNvcnRCeVByaW9yaXR5KSB7XG5cbiAgICAgICAgICAgICAgICBzb3J0QnlQcmlvcml0eVtwcmlvcml0eV0gPSBzb3J0aW5nTWV0aG9kcy5zb3J0RHVlRGF0ZShzb3J0QnlQcmlvcml0eVtwcmlvcml0eV0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGVtcHR5IHRvZG9Db2xsZWN0aW9uXG4gICAgICAgICAgICBwcm9qZWN0LnRvZG9Db2xsZWN0aW9uID0gW107XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcga2V5IGFuZCBhdHRhY2ggdGhlIHNvcnRlZCBvYmplY3RcbiAgICAgICAgICAgIHByb2plY3QudG9kb3NCeVByaW9yaXR5ID0gc29ydEJ5UHJpb3JpdHk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cblxuICAgIC8vIFNvcnQgcHJvamVjdHMgYnkgZHVlIGRhdGVzXG4gICAgZm9yIChjb25zdCBwcmlvcml0eSBpbiBwcm9qZWN0c0J5UHJpb3JpdHkpIHtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RzQnlQcmlvcml0eVtwcmlvcml0eV0gPSBzb3J0aW5nTWV0aG9kcy5zb3J0RHVlRGF0ZShwcm9qZWN0c0J5UHJpb3JpdHlbcHJpb3JpdHldKTtcblxuICAgIH1cblxuXG5cblxuXG4gICAgY29uc29sZS5sb2coJ1BST0pFQ1RTIFRBQicpO1xuXG4gICAgY29uc29sZS5sb2cocHJvamVjdHNCeVByaW9yaXR5KTtcblxuXG4gICAgcmV0dXJuIHtwcm9qZWN0c0J5UHJpb3JpdHksdW5wcm9jZXNzZWRQcm9qZWN0QXJyYXl9O1xuXG59XG5cbnByb2plY3RzVGFiKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RzVGFiOyIsIlxuaW1wb3J0IHNvcnRpbmdNZXRob2RzIGZyb20gJy4uL2RvbUFjdGl2aXRpZXMvc29ydGluZ01ldGhvZHMnXG5cbmZ1bmN0aW9uIGFsbFRvZG9zVGFiICgpe1xuXG4gICAgY29uc3QgY2xvbmVUb2RvQXJyYXkgPSBzb3J0aW5nTWV0aG9kcy5jbG9uZU9iamVjdCgpLmNsb25lVG9kb0FycmF5O1xuICAgIGNvbnN0IHNvcnRlZFRvZG9BcnJheSA9IHNvcnRpbmdNZXRob2RzLnByaW9yaXR5U29ydGVyKGNsb25lVG9kb0FycmF5KTtcblxuICAgIGZvciAoY29uc3QgcHJpb3JpdHkgaW4gc29ydGVkVG9kb0FycmF5KSB7XG4gICAgICAgIFxuICAgICAgICBzb3J0ZWRUb2RvQXJyYXlbcHJpb3JpdHldID0gc29ydGluZ01ldGhvZHMuc29ydER1ZURhdGUoc29ydGVkVG9kb0FycmF5W3ByaW9yaXR5XSk7XG5cbiAgICB9XG5cblxuICAgIGNvbnNvbGUubG9nKHNvcnRlZFRvZG9BcnJheSk7XG5cbiAgICByZXR1cm4gc29ydGVkVG9kb0FycmF5O1xuXG5cbn1cblxuY29uc29sZS5sb2coJ1RPRE8gVEFCJyk7XG5hbGxUb2Rvc1RhYigpO1xuXG5leHBvcnQgZGVmYXVsdCBhbGxUb2Rvc1RhYjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgY3JlYXRlTWFpbkRPTSBmcm9tIFwiLi9kb21DcmVhdGlvbi9tYWluRE9NQ3JlYXRpb25cIjtcblxuaW1wb3J0IGRvbUFjdGlvbiBmcm9tIFwiLi9kb21BY3Rpdml0aWVzL2RvbUFjdGl2aXRpZXNcIjtcblxuaW1wb3J0IGNyZWF0ZVRvZG9ET00gZnJvbSBcIi4vZG9tQ3JlYXRpb24vYWxsVG9kb0RPTUNyZWF0aW9uXCJcblxuXG5cblxuLy8gQWxsIG1vZHVsZXMgc2hvdWxkIHN0YXJ0IGhlcmVcblxuLy8gSE9NRVBBR0VcbmNyZWF0ZU1haW5ET00oKTtcblxuLy8gQXR0YWNoZXMgYWxsIGV2ZW50bGlzdGVuZXJzIHRvIEhPTUVQQUdFXG5kb21BY3Rpb24oKTtcblxuLy8gTG9hZHMgdG9kbyBmaXJzdFxuY3JlYXRlVG9kb0RPTSgpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==