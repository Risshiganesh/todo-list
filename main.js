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
    /* height: 400px; */
    grid-auto-flow: column; /*This was what i wanted to do*/
    
    border: 4px solid brown;

}

.todo-container{
    width: 300px;
    height: 220px;
    border: 5px solid pink;
    flex-shrink: 0;
    
}

.project-container{
    width: 350px;
    height: 250px;
    border: 5px solid pink;
    flex-shrink: 0;
    
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml,\nbody{\n    width: 100%;\n    height: 100%;\n}\n\n\n\n\n.main-container{\n    position: relative;\n    height: 100%;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    grid-template-rows: 70px 1fr 40px;\n    grid-template-areas:\n    \"top-container top-container\" \n    \"note-menu display-container\"\n    \"todo-container-footer todo-container-footer\";\n\n    \n\n}\n\n\n.note-menu{\n    grid-area: note-menu;\n    height: 100%;\n    background-color: royalblue;\n}\n\n.note-menu > div > h1 {\n    cursor: pointer;\n    display: inline;\n}\n\n\n.top-container {\n    border: 1px solid red;\n    grid-area: top-container;\n    display: flex;\n    background-color: violet;\n}\n\n.top-container-spacing {\n    flex: 1;\n}\n\n.brand-container {\n    border: 1px solid green;\n    width: 250px;\n}\n\n\n.hamburger-menu {\n    border: 1px solid teal;\n    width: 70px;\n    display: none; /*display: block when display is below 600px */ \n}\n\n.display-container {\n    display: grid;\n    position: relative;\n\n    grid-area: display-container;\n    background-color: cornflowerblue;\n    width: 100%;\n    height: 100%;\n\n    grid-template-rows: 100px 1fr;\n\n    grid-template-areas: \n    \"todo-container-title\"\n    \"collection-container\";\n\n}\n\n\n\n\n\n.todo-container-title{\n\n    display: grid;\n    grid-area: todo-container-title;\n    background-color: slateblue;\n    border: 1px solid red;\n    \n}\n.priority-buttons{\n    display: grid;\n    border: 1px solid blue;\n    grid-template-columns: repeat(3,1fr);\n    grid-template-rows: 1fr;\n\n}\n\n.priority-buttons > button{\n    height: 25px;\n}\n\n.chosen-priority{\n    background-color: maroon;\n}\n\n.tab-title{\n    padding: 10px;\n    align-self: center;\n}\n\n.todo-container-footer{\n\n    display: grid;\n    grid-area: todo-container-footer;\n    background-color: slateblue;\n    align-items: center;\n    justify-items: center;\n}\n\n\n/* This is the tricky part */\n.collection-container{\n\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    border: 3px solid red;\n    background-color: darkcyan;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-area: collection-container;\n    \n\n    /* grid-template-rows: repeat(auto-fill, minmax(350px,1fr)); */\n\n    grid-auto-flow: row;\n\n    /* grid-template-rows: repeat(4, 350px); */\n    /* grid-template-rows: 1fr; */\n    /* overflow-y: auto; */\n    overflow: auto;\n\n    /* display: none; */\n    /* object-fit: cover; */\n    \n\n}\n\n/* .vertical-scroll{\n    overflow: auto;\n    border: 5px solid blue;\n} */\n\n.status-container{\n\n    border: 2px solid fuchsia;\n    overflow: auto;\n    height: 350px;\n\n}\n\n\n\n\n\n.overdue-container,\n.due-soon-container,\n.upcoming-container,\n.complete-container{\n\n    display: grid;\n    border: 4px solid gold;\n    height: 320px;\n    width: 100%;\n    background-color: indigo;\n    align-items: center;\n    justify-items: start;\n    \n    overflow: auto;\n\n}\n\n.scrollable-container{\n\n    display: grid;\n    column-gap: 10px;\n    /* height: 400px; */\n    grid-auto-flow: column; /*This was what i wanted to do*/\n    \n    border: 4px solid brown;\n\n}\n\n.todo-container{\n    width: 300px;\n    height: 220px;\n    border: 5px solid pink;\n    flex-shrink: 0;\n    \n}\n\n.project-container{\n    width: 350px;\n    height: 250px;\n    border: 5px solid pink;\n    flex-shrink: 0;\n    \n}\n\n\n\n.notes-collection{\n\n    display: grid;\n    border: 4px solid gold;\n    height: 100%;\n    width: 100%;\n    background-color: indigo;\n    align-items: center;\n    overflow: auto;\n    gap: 15px;\n    grid-template-columns: repeat(auto-fill, minmax(300px,1fr)); \n    border: 4px solid brown;\n\n}\n\n\n.notes-container{\n    width: 100%;\n    height: 300px;\n    border: 5px solid pink;\n    flex-shrink: 0;\n    \n}\n\n\n\n\n/* FORM BUTTON */\n\n.form-button-container{\n    position: fixed;\n    bottom: 50px;\n    right: 0;\n    width: 100px;\n    height: 100px;\n    border-radius: 50% 0% 0% 50%;\n    background-color: black;\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    \n}\n\n.form-button{\n    width: 70px;\n    height: 70px;\n    border-radius: 50%;\n    font-size: 50px;\n}\n\n/* TODO CREATION FORM */\n\n\n.form-container{\n\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(128, 128, 128, 0.527);\n    display: grid;\n    padding-top: 100px;\n    align-items: start;\n    justify-items: center;\n    overflow: auto;\n    padding-bottom: 100px;\n    display: none;\n\n}\n\n.show-form{\n    display: grid;\n}\n\n.todo-creation-form {\n    /* position: fixed; */\n    width: 400px;\n    /* height: 700px; */\n    background-color: maroon;\n    \n}\n\n.create-new-todo{\n    border: 3px solid forestgreen;\n    display: none;\n}\n\n.select-existing-project{\n    border: 3px solid skyblue;\n    display: none;\n}\n\n.create-new-project{\n    border: 3px solid crimson;\n    display: none;\n}\n\n.display-form-items{\n    display: grid;\n}\n\n\n/* Mobile version */\n\n@media screen and (max-width: 600px) {\n    \n\n    .hamburger-menu {\n        display: block;\n    }\n\n    .main-container {\n        border: 1px solid blue;\n        display: grid;\n        grid-template-rows: 70px 1fr 40px;\n        grid-template-columns: 1fr 300px;\n        grid-template-areas: \n        \"top-container top-container\" \n        \"display-container display-container\"\n        \"todo-container-footer todo-container-footer\";\n    \n    \n    \n    }\n\n    \n\n    .note-menu {\n        position: absolute;\n        display: grid;\n        justify-self: end;\n        align-self: end;\n        grid-row: 2/3;\n        grid-column: 2/3;\n        /* height: 90%; */\n        display: none;\n        width: 150px;\n        z-index: 1;\n    }\n\n    .menu-active { /*triggers when hamburger menu is clicked*/\n        display: grid;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/allNotesDOMCreation.js":
/*!************************************!*\
  !*** ./src/allNotesDOMCreation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domActivities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domActivities */ "./src/domActivities.js");
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

    // populateTodoCollection('high');

    // domAction()

       

    
    
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allNoteDOMModule);

/***/ }),

/***/ "./src/allNotesTab.js":
/*!****************************!*\
  !*** ./src/allNotesTab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sortingMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortingMethods */ "./src/sortingMethods.js");


function allNotesTab (){

    const cloneTodoArray = _sortingMethods__WEBPACK_IMPORTED_MODULE_0__["default"].cloneObject().cloneTodoArray;

    const notesArray = _sortingMethods__WEBPACK_IMPORTED_MODULE_0__["default"].noteSorter(cloneTodoArray);

    console.log('NOTES TAB');

    console.log(notesArray);

    return notesArray;



}

allNotesTab();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allNotesTab);

/***/ }),

/***/ "./src/allTodoDOMCreation.js":
/*!***********************************!*\
  !*** ./src/allTodoDOMCreation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populateDOMTodoCollection */ "./src/populateDOMTodoCollection.js");
/* harmony import */ var _domActivities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domActivities */ "./src/domActivities.js");






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

    (0,_domActivities__WEBPACK_IMPORTED_MODULE_1__.changePriority)();
    
    // domAction()





   


       


                
               



        





    
    
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allTodoDOMModule);

/***/ }),

/***/ "./src/allTodosTab.js":
/*!****************************!*\
  !*** ./src/allTodosTab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sortingMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortingMethods */ "./src/sortingMethods.js");



function allTodosTab (){

    const cloneTodoArray = _sortingMethods__WEBPACK_IMPORTED_MODULE_0__["default"].cloneObject().cloneTodoArray;
    const sortedTodoArray = _sortingMethods__WEBPACK_IMPORTED_MODULE_0__["default"].prioritySorter(cloneTodoArray);

    for (const priority in sortedTodoArray) {
        
        sortedTodoArray[priority] = _sortingMethods__WEBPACK_IMPORTED_MODULE_0__["default"].sortDueDate(sortedTodoArray[priority]);

    }


    console.log(sortedTodoArray);

    return sortedTodoArray;


}

console.log('TODO TAB');
allTodosTab();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allTodosTab);

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

        createTodo(`title${index}`,`desc${index}`,`${year + index}-${month + index}-${day + index}`,index,`high`,`pending`,'project2');

        createTodo(`title${index}`,`desc${index}`,`${year + index}-${month + index}-${day + index}`,index,`low`,`pending`,'project2');

        createTodo(`title${index}`,`desc${index}`,'',index,`low`,`pending`,'project2');


   
        
    }

    for (let index = 1; index <= 5; index++) {

        createTodo(`title${index}`,`desc${index}`,`${year + index}-${month + index}-${day + index}`,index,`high`,`complete`,'project1test');

        createTodo(`title${index}`,`desc${index}`,`${year + index}-${month + index}-${day + index}`,index,`medium`,`pending`,'project1test');

   
        
    }

    

    // End of test objects

    return {todoArray, createTodo};


}


const initializedTodoModule = todoModule();


// initialized version is sent because the is no reason to re-initialise later on
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializedTodoModule);


/***/ }),

/***/ "./src/domActivities.js":
/*!******************************!*\
  !*** ./src/domActivities.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changePriority: () => (/* binding */ changePriority),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodos */ "./src/createTodos.js");
/* harmony import */ var _createProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProjects */ "./src/createProjects.js");
/* harmony import */ var _allNotesTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allNotesTab */ "./src/allNotesTab.js");
/* harmony import */ var _allTodosTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allTodosTab */ "./src/allTodosTab.js");
/* harmony import */ var _projectTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectTab */ "./src/projectTab.js");
/* harmony import */ var _formDOMCreation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formDOMCreation */ "./src/formDOMCreation.js");
/* harmony import */ var _allTodoDOMCreation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./allTodoDOMCreation */ "./src/allTodoDOMCreation.js");
/* harmony import */ var _allNotesDOMCreation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./allNotesDOMCreation */ "./src/allNotesDOMCreation.js");
/* harmony import */ var _populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./populateDOMTodoCollection */ "./src/populateDOMTodoCollection.js");
// All DOM Activities are centralised here except DOM Creation




















let recentCollectionContainerFn = '';

let recentCollectionContainerArg = '';

function domActivitiesModule (){


    // hamburger button
    const hamburgerButton = document.querySelector('.hamburger-menu');

    const menu = document.querySelector('.note-menu');


    hamburgerButton.addEventListener('click',function(){
        
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

                (0,_allTodosTab__WEBPACK_IMPORTED_MODULE_3__["default"])();

                (0,_projectTab__WEBPACK_IMPORTED_MODULE_4__["default"])();

                (0,_allNotesTab__WEBPACK_IMPORTED_MODULE_2__["default"])();

                resetArray.forEach(input => {
                    input.value = '';
                });

                //everytime submit button is clicked fresh dropdown is created 
                _formDOMCreation__WEBPACK_IMPORTED_MODULE_5__["default"].existingProjectOptions();

                recentCollectionContainerFn(recentCollectionContainerArg)



                return;

            }

            // create to-dos and notes

            _createTodos__WEBPACK_IMPORTED_MODULE_0__["default"].createTodo(todoTitle.value,todoDesc.value,todoDate.value,Number(todoReminder.value),todoPriority.value,`pending`,projectsChoices.value);

            (0,_allTodosTab__WEBPACK_IMPORTED_MODULE_3__["default"])();

            (0,_projectTab__WEBPACK_IMPORTED_MODULE_4__["default"])();

            (0,_allNotesTab__WEBPACK_IMPORTED_MODULE_2__["default"])();

            resetArray.forEach(input => {

                input.value = '';
            });

            //everytime submit button is clicked fresh dropdown is created 
            _formDOMCreation__WEBPACK_IMPORTED_MODULE_5__["default"].existingProjectOptions();

            recentCollectionContainerFn(recentCollectionContainerArg)

            console.log(recentCollectionContainerFn);


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

        (0,_allTodoDOMCreation__WEBPACK_IMPORTED_MODULE_6__["default"])();
        console.log('GDGDGDGDGG')

    });


    const allNotesTab = document.querySelector('.all-notes-tab');

    allNotesTab.addEventListener('click',function(){

        (0,_allNotesDOMCreation__WEBPACK_IMPORTED_MODULE_7__["default"])();

    })




    

}


 // PRIORITY BUTTON - TODOS

 function changePriority(){
    const highPriorityButton = document.querySelector('.high-priority');
    const mediumPriorityButton = document.querySelector('.medium-priority');
    const lowPriorityButton = document.querySelector('.low-priority');

    if (!highPriorityButton||!mediumPriorityButton||!lowPriorityButton) {
        return;
    }


    highPriorityButton.addEventListener('click',function(){

        console.log('TEST22133')
        
        const priorityButtons = document.querySelector('.priority-buttons');
  
        priorityButtons.querySelectorAll('*').forEach(element => {
            element.classList.remove('chosen-priority')
        });

        highPriorityButton.classList.add('chosen-priority');

        (0,_populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_8__["default"])('high');

        recentCollectionContainerFn = _populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_8__["default"];
        recentCollectionContainerArg = 'high';

        // console.log(recentCollectionContainerFn);
    });

    

    mediumPriorityButton.addEventListener('click',function(){
        
        const priorityButtons = document.querySelector('.priority-buttons');
        
        priorityButtons.querySelectorAll('*').forEach(element => {
            element.classList.remove('chosen-priority')
        });

        mediumPriorityButton.classList.add('chosen-priority');

        (0,_populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_8__["default"])('medium');

        recentCollectionContainerFn = _populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_8__["default"];
        recentCollectionContainerArg = 'medium';
    });


   
    lowPriorityButton.addEventListener('click',function(){

        const priorityButtons = document.querySelector('.priority-buttons');

        priorityButtons.querySelectorAll('*').forEach(element => {
            
            element.classList.remove('chosen-priority')
        });

        lowPriorityButton.classList.add('chosen-priority');

        (0,_populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_8__["default"])('low');

        recentCollectionContainerFn = _populateDOMTodoCollection__WEBPACK_IMPORTED_MODULE_8__["default"];
        recentCollectionContainerArg = 'low';
    });
   }

   changePriority();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domActivitiesModule);





/***/ }),

/***/ "./src/formDOMCreation.js":
/*!********************************!*\
  !*** ./src/formDOMCreation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectTab */ "./src/projectTab.js");
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

                                const unprocessedProject = (0,_projectTab__WEBPACK_IMPORTED_MODULE_0__["default"])().unprocessedProjectArray

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

/***/ "./src/mainDOMCreation.js":
/*!********************************!*\
  !*** ./src/mainDOMCreation.js ***!
  \********************************/
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

            brandHeader.textContent = 'SageNotes';

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

/***/ "./src/populateDOMTodoCollection.js":
/*!******************************************!*\
  !*** ./src/populateDOMTodoCollection.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _allTodosTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allTodosTab */ "./src/allTodosTab.js");



// POPULATE TODO COLLECTION CONTAINER

// high
// put this in a different module
function appendTodoObjects(priority){

    

    const collectionContainer = document.querySelector('.collection-container')

    collectionContainer.querySelectorAll('*').forEach(element => {
        
        element.remove();

    });



    const allTodoObject = (0,_allTodosTab__WEBPACK_IMPORTED_MODULE_0__["default"])();

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

                                        todoPrioritytDiv.classList.add('todo-project-div');

                                        todoPrioritytDiv.textContent = object.priority;

                                        todoContainer.append(todoPrioritytDiv);


                                        

                                });
                                
                            }

                }




                
            }

            


        }

    }

}

// SEND THIS TO allTodoDOMCreation.js
// appendTodoObjects('high')

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendTodoObjects);

/***/ }),

/***/ "./src/projectTab.js":
/*!***************************!*\
  !*** ./src/projectTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sortingMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortingMethods */ "./src/sortingMethods.js");


function projectsTab (){

        

    const unprocessedProjectArray = _sortingMethods__WEBPACK_IMPORTED_MODULE_0__["default"].sortByProjectName().processedProjectArrayByName;

    

    // All projects are stored here
    // First sort the projects by priority
    const projectsByPriority = _sortingMethods__WEBPACK_IMPORTED_MODULE_0__["default"].prioritySorter(unprocessedProjectArray);


    

    // Then sort the notes in those projects by priority
    for (const priorityLevel in projectsByPriority) {

        projectsByPriority[priorityLevel].forEach(project => {

            // sort priority of todoCollection
            const sortByPriority = _sortingMethods__WEBPACK_IMPORTED_MODULE_0__["default"].prioritySorter(project.todoCollection)


            // Sort todos by due date
            for (const priority in sortByPriority) {

                sortByPriority[priority] = _sortingMethods__WEBPACK_IMPORTED_MODULE_0__["default"].sortDueDate(sortByPriority[priority]);

            }

            // empty todoCollection
            project.todoCollection = [];

            // create new key and attach the sorted object
            project.todosByPriority = sortByPriority;

        });

    }


    // Sort projects by due dates
    for (const priority in projectsByPriority) {
        
        projectsByPriority[priority] = _sortingMethods__WEBPACK_IMPORTED_MODULE_0__["default"].sortDueDate(projectsByPriority[priority]);

    }





    console.log('PROJECTS TAB');

    console.log(projectsByPriority);


    return {projectsByPriority,unprocessedProjectArray};

}

projectsTab();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectsTab);

/***/ }),

/***/ "./src/sortingMethods.js":
/*!*******************************!*\
  !*** ./src/sortingMethods.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodos */ "./src/createTodos.js");
/* harmony import */ var _createProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProjects */ "./src/createProjects.js");




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
/* harmony import */ var _mainDOMCreation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainDOMCreation */ "./src/mainDOMCreation.js");
/* harmony import */ var _allTodoDOMCreation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allTodoDOMCreation */ "./src/allTodoDOMCreation.js");
/* harmony import */ var _formDOMCreation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formDOMCreation */ "./src/formDOMCreation.js");
/* harmony import */ var _allTodosTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./allTodosTab */ "./src/allTodosTab.js");
/* harmony import */ var _projectTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectTab */ "./src/projectTab.js");
/* harmony import */ var _allNotesTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./allNotesTab */ "./src/allNotesTab.js");
/* harmony import */ var _domActivities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domActivities */ "./src/domActivities.js");


// import todoModule from "./create-todos";

// import projectModule from "./create-projects";

















// All modules should start here

// HOMEPAGE
(0,_mainDOMCreation__WEBPACK_IMPORTED_MODULE_1__["default"])();

// Loads todo first
(0,_allTodoDOMCreation__WEBPACK_IMPORTED_MODULE_2__["default"])();

// Attaches all eventlisteners to HOMEPAGE
(0,_domActivities__WEBPACK_IMPORTED_MODULE_7__["default"])();





// console.log('test');

// todoModule.createTodo('mamaaaa','ooooouuuu','yyeyeye','asdasd','project1');

// todoModule.createTodo('lalalalalallalalla','ooooouuuu','yyeyeye','asdasd','gagagagaga','wadawda','project1');


// console.log(todoModule.todoArray);

// console.log(projectModule.projectArray);

// console.log(sortingModule.sortByProjectName());



// DATE TEST!!!

// const todoDate = document.querySelector('#todoDate')

// const testButton = document.querySelector('.testing')

// testButton.addEventListener('click',function(){
//     console.log(todoDate.value);

//     const formattedDueDateOfObject = todoDate.value.split("-");

//     console.log(formattedDueDateOfObject);

// })





// console.log(`${year}-${month}-${day} = created`)







// sortingModule.sortByPriority();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBaUU7O0FBRWpFOztBQUVBLDZDQUE2QztBQUM3QyxnQ0FBZ0M7QUFDaEMseUJBQXlCO0FBQ3pCOztBQUVBLHNCQUFzQjtBQUN0QiwwQkFBMEI7QUFDMUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLDRCQUE0QjtBQUM1QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFFBQVEsVUFBVSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFFBQVEsS0FBSyxZQUFZLFdBQVcsc0JBQXNCLE9BQU8sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLFdBQVcsV0FBVyxhQUFhLE9BQU8sUUFBUSxXQUFXLE1BQU0sVUFBVSxZQUFZLGFBQWEsY0FBYyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxZQUFZLE9BQU8sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxlQUFlLGNBQWMsY0FBYyxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksZUFBZSxPQUFPLE9BQU8sTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFdBQVcsU0FBUyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLDBCQUEwQixjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLFNBQVMsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxjQUFjLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLFVBQVUsYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxjQUFjLE9BQU8sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFFBQVEsYUFBYSxRQUFRLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxRQUFRLFVBQVUsU0FBUyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxpQkFBaUIsV0FBVyxNQUFNLDJCQUEyQixnQkFBZ0IsaUJBQWlCLDZCQUE2QixHQUFHLGdCQUFnQixrQkFBa0IsbUJBQW1CLEdBQUcsMEJBQTBCLHlCQUF5QixtQkFBbUIsbUJBQW1CLG9CQUFvQix1Q0FBdUMsd0NBQXdDLDJKQUEySixhQUFhLGlCQUFpQiwyQkFBMkIsbUJBQW1CLGtDQUFrQyxHQUFHLDJCQUEyQixzQkFBc0Isc0JBQXNCLEdBQUcsc0JBQXNCLDRCQUE0QiwrQkFBK0Isb0JBQW9CLCtCQUErQixHQUFHLDRCQUE0QixjQUFjLEdBQUcsc0JBQXNCLDhCQUE4QixtQkFBbUIsR0FBRyx1QkFBdUIsNkJBQTZCLGtCQUFrQixxQkFBcUIsbURBQW1ELHdCQUF3QixvQkFBb0IseUJBQXlCLHFDQUFxQyx1Q0FBdUMsa0JBQWtCLG1CQUFtQixzQ0FBc0MsMEZBQTBGLEtBQUssa0NBQWtDLHNCQUFzQixzQ0FBc0Msa0NBQWtDLDRCQUE0QixTQUFTLG9CQUFvQixvQkFBb0IsNkJBQTZCLDJDQUEyQyw4QkFBOEIsS0FBSywrQkFBK0IsbUJBQW1CLEdBQUcscUJBQXFCLCtCQUErQixHQUFHLGVBQWUsb0JBQW9CLHlCQUF5QixHQUFHLDJCQUEyQixzQkFBc0IsdUNBQXVDLGtDQUFrQywwQkFBMEIsNEJBQTRCLEdBQUcsMkRBQTJELDJCQUEyQixtQkFBbUIsa0JBQWtCLDRCQUE0QixpQ0FBaUMsb0JBQW9CLGlDQUFpQyxzQ0FBc0MsMkVBQTJFLDhCQUE4QixpREFBaUQsb0NBQW9DLDZCQUE2Qix1QkFBdUIsMEJBQTBCLDhCQUE4QixhQUFhLHdCQUF3QixxQkFBcUIsNkJBQTZCLElBQUksd0JBQXdCLGtDQUFrQyxxQkFBcUIsb0JBQW9CLEtBQUssaUdBQWlHLHNCQUFzQiw2QkFBNkIsb0JBQW9CLGtCQUFrQiwrQkFBK0IsMEJBQTBCLDJCQUEyQiwyQkFBMkIsS0FBSywwQkFBMEIsc0JBQXNCLHVCQUF1Qix3QkFBd0IsZ0NBQWdDLG9FQUFvRSxLQUFLLG9CQUFvQixtQkFBbUIsb0JBQW9CLDZCQUE2QixxQkFBcUIsU0FBUyx1QkFBdUIsbUJBQW1CLG9CQUFvQiw2QkFBNkIscUJBQXFCLFNBQVMsMEJBQTBCLHNCQUFzQiw2QkFBNkIsbUJBQW1CLGtCQUFrQiwrQkFBK0IsMEJBQTBCLHFCQUFxQixnQkFBZ0IsbUVBQW1FLDhCQUE4QixLQUFLLHVCQUF1QixrQkFBa0Isb0JBQW9CLDZCQUE2QixxQkFBcUIsU0FBUyxzREFBc0Qsc0JBQXNCLG1CQUFtQixlQUFlLG1CQUFtQixvQkFBb0IsbUNBQW1DLDhCQUE4QixvQkFBb0IsMEJBQTBCLDhCQUE4QixTQUFTLGlCQUFpQixrQkFBa0IsbUJBQW1CLHlCQUF5QixzQkFBc0IsR0FBRyxrREFBa0Qsd0JBQXdCLGtCQUFrQixtQkFBbUIsbURBQW1ELG9CQUFvQix5QkFBeUIseUJBQXlCLDRCQUE0QixxQkFBcUIsNEJBQTRCLG9CQUFvQixLQUFLLGVBQWUsb0JBQW9CLEdBQUcseUJBQXlCLDBCQUEwQixxQkFBcUIsd0JBQXdCLGlDQUFpQyxTQUFTLHFCQUFxQixvQ0FBb0Msb0JBQW9CLEdBQUcsNkJBQTZCLGdDQUFnQyxvQkFBb0IsR0FBRyx3QkFBd0IsZ0NBQWdDLG9CQUFvQixHQUFHLHdCQUF3QixvQkFBb0IsR0FBRyxvRUFBb0UsK0JBQStCLHlCQUF5QixPQUFPLHlCQUF5QixpQ0FBaUMsd0JBQXdCLDRDQUE0QywyQ0FBMkMsb0xBQW9MLHlCQUF5Qiw0QkFBNEIsNkJBQTZCLHdCQUF3Qiw0QkFBNEIsMEJBQTBCLHdCQUF3QiwyQkFBMkIsMEJBQTBCLDBCQUEwQix1QkFBdUIscUJBQXFCLE9BQU8sdUJBQXVCLG1FQUFtRSxPQUFPLEdBQUcsbUJBQW1CO0FBQ3A4UTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQy9XMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JBOztBQUV3Qzs7QUFFeEM7O0FBRUE7Ozs7O0FBS0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7O0FBR0E7OztBQUdBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUFPQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWUsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7QUNuRmM7O0FBRTdDOztBQUVBLDJCQUEyQix1REFBYzs7QUFFekMsdUJBQXVCLHVEQUFjOztBQUVyQzs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQnVDOztBQUV6Qjs7QUFFUzs7QUFFakQ7O0FBRUE7Ozs7O0FBS0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7O0FBR0E7OztBQUdBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7QUFNQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLElBQUksc0VBQXNCOztBQUUxQixJQUFJLDhEQUFjO0FBQ2xCO0FBQ0E7Ozs7OztBQU1BOzs7QUFHQTs7O0FBR0E7QUFDQTs7OztBQUlBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7OztBQzNJYzs7QUFFN0M7O0FBRUEsMkJBQTJCLHVEQUFjO0FBQ3pDLDRCQUE0Qix1REFBYzs7QUFFMUM7QUFDQTtBQUNBLG9DQUFvQyx1REFBYzs7QUFFbEQ7OztBQUdBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ3hCMUI7O0FBRUE7QUFDQTs7O0FBR0EsZ0JBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBLHdGQUF3RjtBQUN4RjtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHdCQUF3QixXQUFXOztBQUVuQzs7QUFFQSxnQ0FBZ0MsTUFBTSxhQUFhLE1BQU0sS0FBSyxjQUFjLEdBQUcsZUFBZSxHQUFHLGFBQWE7O0FBRTlHLGdDQUFnQyxNQUFNLGNBQWMsTUFBTSxLQUFLLGNBQWMsR0FBRyxlQUFlLEdBQUcsYUFBYTs7QUFFL0c7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQSx3QkFBd0IsV0FBVzs7QUFFbkM7O0FBRUEsaUNBQWlDLE1BQU0sU0FBUyxNQUFNLEtBQUssZUFBZSxHQUFHLGdCQUFnQixHQUFHLGNBQWM7QUFDOUcsZ0NBQWdDLE1BQU0sV0FBVyxNQUFNLEtBQUssZUFBZSxHQUFHLGdCQUFnQixHQUFHLGNBQWM7QUFDL0csZ0NBQWdDLE1BQU0sV0FBVyxNQUFNLEtBQUssZUFBZSxHQUFHLGdCQUFnQixHQUFHLGNBQWM7QUFDL0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQSxZQUFZOztBQUVaOztBQUVBOztBQUVBO0FBQ0EsaUVBQWUsd0JBQXdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEV2Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBLHdCQUF3QixhQUFhOztBQUVyQywyQkFBMkIsTUFBTSxTQUFTLE1BQU0sS0FBSyxhQUFhLEdBQUcsY0FBYyxHQUFHLFlBQVk7O0FBRWxHLDJCQUEyQixNQUFNLFNBQVMsTUFBTSxLQUFLLGFBQWEsR0FBRyxjQUFjLEdBQUcsWUFBWTs7QUFFbEcsMkJBQTJCLE1BQU0sU0FBUyxNQUFNOzs7QUFHaEQ7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixZQUFZOztBQUVwQywyQkFBMkIsTUFBTSxTQUFTLE1BQU0sS0FBSyxhQUFhLEdBQUcsY0FBYyxHQUFHLFlBQVk7O0FBRWxHLDJCQUEyQixNQUFNLFNBQVMsTUFBTSxLQUFLLGFBQWEsR0FBRyxjQUFjLEdBQUcsWUFBWTs7QUFFbEc7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLFlBQVk7OztBQUdaOzs7QUFHQTs7O0FBR0E7QUFDQSxpRUFBZSxxQkFBcUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFckM7O0FBRXVDOztBQUVNOztBQUVOOzs7QUFHQTs7QUFFRTs7QUFFSzs7QUFFRTs7QUFFRzs7QUFFYzs7QUFFakU7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7OztBQUdMOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7O0FBSUw7O0FBRUE7O0FBRUEsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7OztBQUdBOzs7QUFHQTs7O0FBR0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFD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QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsaUNBQWlDOzs7QUFHakM7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7OztBQUdBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLGlDQUFpQzs7O0FBR2pDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQSwyREFBMkQsdURBQWM7O0FBRXpFOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsaUNBQWlDOzs7QUFHakM7O0FBRUE7O0FBRUE7Ozs7O0FBS0EsZ0NBQWdDOzs7QUFHaEM7O0FBRUE7OztBQUdBLGlFQUFlLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0dEI1Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBLGlFQUFlLGFB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OztBQU1KLGtCQUFrQixLQUFLLEdBQUcsTUFBTSxHQUFHLEtBQUs7Ozs7Ozs7O0FBUXhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hbGxOb3Rlc0RPTUNyZWF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hbGxOb3Rlc1RhYi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWxsVG9kb0RPTUNyZWF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hbGxUb2Rvc1RhYi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVRvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21BY3Rpdml0aWVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3JtRE9NQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW5ET01DcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcG9wdWxhdGVET01Ub2RvQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdFRhYi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc29ydGluZ01ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuXG5cblxuLm1haW4tY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmciA0MHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJ0b3AtY29udGFpbmVyIHRvcC1jb250YWluZXJcIiBcbiAgICBcIm5vdGUtbWVudSBkaXNwbGF5LWNvbnRhaW5lclwiXG4gICAgXCJ0b2RvLWNvbnRhaW5lci1mb290ZXIgdG9kby1jb250YWluZXItZm9vdGVyXCI7XG5cbiAgICBcblxufVxuXG5cbi5ub3RlLW1lbnV7XG4gICAgZ3JpZC1hcmVhOiBub3RlLW1lbnU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcbn1cblxuLm5vdGUtbWVudSA+IGRpdiA+IGgxIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG5cbi50b3AtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgZ3JpZC1hcmVhOiB0b3AtY29udGFpbmVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmlvbGV0O1xufVxuXG4udG9wLWNvbnRhaW5lci1zcGFjaW5nIHtcbiAgICBmbGV4OiAxO1xufVxuXG4uYnJhbmQtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgICB3aWR0aDogMjUwcHg7XG59XG5cblxuLmhhbWJ1cmdlci1tZW51IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0ZWFsO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qZGlzcGxheTogYmxvY2sgd2hlbiBkaXNwbGF5IGlzIGJlbG93IDYwMHB4ICovIFxufVxuXG4uZGlzcGxheS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgZ3JpZC1hcmVhOiBkaXNwbGF5LWNvbnRhaW5lcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcblxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgIFwidG9kby1jb250YWluZXItdGl0bGVcIlxuICAgIFwiY29sbGVjdGlvbi1jb250YWluZXJcIjtcblxufVxuXG5cblxuXG5cbi50b2RvLWNvbnRhaW5lci10aXRsZXtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiB0b2RvLWNvbnRhaW5lci10aXRsZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWJsdWU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIFxufVxuLnByaW9yaXR5LWJ1dHRvbnN7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcblxufVxuXG4ucHJpb3JpdHktYnV0dG9ucyA+IGJ1dHRvbntcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5jaG9zZW4tcHJpb3JpdHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xufVxuXG4udGFiLXRpdGxle1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4udG9kby1jb250YWluZXItZm9vdGVye1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IHRvZG8tY29udGFpbmVyLWZvb3RlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWJsdWU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLyogVGhpcyBpcyB0aGUgdHJpY2t5IHBhcnQgKi9cbi5jb2xsZWN0aW9uLWNvbnRhaW5lcntcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC1hcmVhOiBjb2xsZWN0aW9uLWNvbnRhaW5lcjtcbiAgICBcblxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LDFmcikpOyAqL1xuXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcblxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDM1MHB4KTsgKi9cbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjsgKi9cbiAgICAvKiBvdmVyZmxvdy15OiBhdXRvOyAqL1xuICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cbiAgICAvKiBvYmplY3QtZml0OiBjb3ZlcjsgKi9cbiAgICBcblxufVxuXG4vKiAudmVydGljYWwtc2Nyb2xse1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsdWU7XG59ICovXG5cbi5zdGF0dXMtY29udGFpbmVye1xuXG4gICAgYm9yZGVyOiAycHggc29saWQgZnVjaHNpYTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBoZWlnaHQ6IDM1MHB4O1xuXG59XG5cblxuXG5cblxuLm92ZXJkdWUtY29udGFpbmVyLFxuLmR1ZS1zb29uLWNvbnRhaW5lcixcbi51cGNvbWluZy1jb250YWluZXIsXG4uY29tcGxldGUtY29udGFpbmVye1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCBnb2xkO1xuICAgIGhlaWdodDogMzIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5kaWdvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XG4gICAgXG4gICAgb3ZlcmZsb3c6IGF1dG87XG5cbn1cblxuLnNjcm9sbGFibGUtY29udGFpbmVye1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xuICAgIC8qIGhlaWdodDogNDAwcHg7ICovXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjsgLypUaGlzIHdhcyB3aGF0IGkgd2FudGVkIHRvIGRvKi9cbiAgICBcbiAgICBib3JkZXI6IDRweCBzb2xpZCBicm93bjtcblxufVxuXG4udG9kby1jb250YWluZXJ7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMjIwcHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgcGluaztcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBcbn1cblxuLnByb2plY3QtY29udGFpbmVye1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHBpbms7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgXG59XG5cblxuXG4ubm90ZXMtY29sbGVjdGlvbntcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYm9yZGVyOiA0cHggc29saWQgZ29sZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5kaWdvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZ2FwOiAxNXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LDFmcikpOyBcbiAgICBib3JkZXI6IDRweCBzb2xpZCBicm93bjtcblxufVxuXG5cbi5ub3Rlcy1jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCBwaW5rO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIFxufVxuXG5cblxuXG4vKiBGT1JNIEJVVFRPTiAqL1xuXG4uZm9ybS1idXR0b24tY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDUwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDAlIDAlIDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG59XG5cbi5mb3JtLWJ1dHRvbntcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLyogVE9ETyBDUkVBVElPTiBGT1JNICovXG5cblxuLmZvcm0tY29udGFpbmVye1xuXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTI3KTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuXG59XG5cbi5zaG93LWZvcm17XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLnRvZG8tY3JlYXRpb24tZm9ybSB7XG4gICAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICAvKiBoZWlnaHQ6IDcwMHB4OyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcbiAgICBcbn1cblxuLmNyZWF0ZS1uZXctdG9kb3tcbiAgICBib3JkZXI6IDNweCBzb2xpZCBmb3Jlc3RncmVlbjtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2VsZWN0LWV4aXN0aW5nLXByb2plY3R7XG4gICAgYm9yZGVyOiAzcHggc29saWQgc2t5Ymx1ZTtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uY3JlYXRlLW5ldy1wcm9qZWN0e1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGNyaW1zb247XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRpc3BsYXktZm9ybS1pdGVtc3tcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG5cbi8qIE1vYmlsZSB2ZXJzaW9uICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgXG5cbiAgICAuaGFtYnVyZ2VyLW1lbnUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAubWFpbi1jb250YWluZXIge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyIDQwcHg7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDMwMHB4O1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgXCJ0b3AtY29udGFpbmVyIHRvcC1jb250YWluZXJcIiBcbiAgICAgICAgXCJkaXNwbGF5LWNvbnRhaW5lciBkaXNwbGF5LWNvbnRhaW5lclwiXG4gICAgICAgIFwidG9kby1jb250YWluZXItZm9vdGVyIHRvZG8tY29udGFpbmVyLWZvb3RlclwiO1xuICAgIFxuICAgIFxuICAgIFxuICAgIH1cblxuICAgIFxuXG4gICAgLm5vdGUtbWVudSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgICAgICAgZ3JpZC1yb3c6IDIvMztcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICAgICAgLyogaGVpZ2h0OiA5MCU7ICovXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAubWVudS1hY3RpdmUgeyAvKnRyaWdnZXJzIHdoZW4gaGFtYnVyZ2VyIG1lbnUgaXMgY2xpY2tlZCovXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOzs7OztBQUtBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakM7OztpREFHNkM7Ozs7QUFJakQ7OztBQUdBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGFBQWEsRUFBRSw4Q0FBOEM7QUFDakU7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCOztJQUVsQiw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxZQUFZOztJQUVaLDZCQUE2Qjs7SUFFN0I7OzBCQUVzQjs7QUFFMUI7Ozs7OztBQU1BOztJQUVJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsMkJBQTJCO0lBQzNCLHFCQUFxQjs7QUFFekI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVB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O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHl7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcblxcblxcbi5tYWluLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAxZnIgNDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcInRvcC1jb250YWluZXIgdG9wLWNvbnRhaW5lclxcXCIgXFxuICAgIFxcXCJub3RlLW1lbnUgZGlzcGxheS1jb250YWluZXJcXFwiXFxuICAgIFxcXCJ0b2RvLWNvbnRhaW5lci1mb290ZXIgdG9kby1jb250YWluZXItZm9vdGVyXFxcIjtcXG5cXG4gICAgXFxuXFxufVxcblxcblxcbi5ub3RlLW1lbnV7XFxuICAgIGdyaWQtYXJlYTogbm90ZS1tZW51O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcXG59XFxuXFxuLm5vdGUtbWVudSA+IGRpdiA+IGgxIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcblxcbi50b3AtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBncmlkLWFyZWE6IHRvcC1jb250YWluZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZpb2xldDtcXG59XFxuXFxuLnRvcC1jb250YWluZXItc3BhY2luZyB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5icmFuZC1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG5cXG4uaGFtYnVyZ2VyLW1lbnUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0ZWFsO1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgZGlzcGxheTogbm9uZTsgLypkaXNwbGF5OiBibG9jayB3aGVuIGRpc3BsYXkgaXMgYmVsb3cgNjAwcHggKi8gXFxufVxcblxcbi5kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgZ3JpZC1hcmVhOiBkaXNwbGF5LWNvbnRhaW5lcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcInRvZG8tY29udGFpbmVyLXRpdGxlXFxcIlxcbiAgICBcXFwiY29sbGVjdGlvbi1jb250YWluZXJcXFwiO1xcblxcbn1cXG5cXG5cXG5cXG5cXG5cXG4udG9kby1jb250YWluZXItdGl0bGV7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogdG9kby1jb250YWluZXItdGl0bGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlYmx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBcXG59XFxuLnByaW9yaXR5LWJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuXFxufVxcblxcbi5wcmlvcml0eS1idXR0b25zID4gYnV0dG9ue1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5jaG9zZW4tcHJpb3JpdHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcXG59XFxuXFxuLnRhYi10aXRsZXtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udG9kby1jb250YWluZXItZm9vdGVye1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IHRvZG8tY29udGFpbmVyLWZvb3RlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVibHVlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi8qIFRoaXMgaXMgdGhlIHRyaWNreSBwYXJ0ICovXFxuLmNvbGxlY3Rpb24tY29udGFpbmVye1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLWFyZWE6IGNvbGxlY3Rpb24tY29udGFpbmVyO1xcbiAgICBcXG5cXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzUwcHgsMWZyKSk7ICovXFxuXFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuXFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDM1MHB4KTsgKi9cXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7ICovXFxuICAgIC8qIG92ZXJmbG93LXk6IGF1dG87ICovXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcblxcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbiAgICAvKiBvYmplY3QtZml0OiBjb3ZlcjsgKi9cXG4gICAgXFxuXFxufVxcblxcbi8qIC52ZXJ0aWNhbC1zY3JvbGx7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibHVlO1xcbn0gKi9cXG5cXG4uc3RhdHVzLWNvbnRhaW5lcntcXG5cXG4gICAgYm9yZGVyOiAycHggc29saWQgZnVjaHNpYTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGhlaWdodDogMzUwcHg7XFxuXFxufVxcblxcblxcblxcblxcblxcbi5vdmVyZHVlLWNvbnRhaW5lcixcXG4uZHVlLXNvb24tY29udGFpbmVyLFxcbi51cGNvbWluZy1jb250YWluZXIsXFxuLmNvbXBsZXRlLWNvbnRhaW5lcntcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgZ29sZDtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluZGlnbztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICAgIFxcbiAgICBvdmVyZmxvdzogYXV0bztcXG5cXG59XFxuXFxuLnNjcm9sbGFibGUtY29udGFpbmVye1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgICAvKiBoZWlnaHQ6IDQwMHB4OyAqL1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uOyAvKlRoaXMgd2FzIHdoYXQgaSB3YW50ZWQgdG8gZG8qL1xcbiAgICBcXG4gICAgYm9yZGVyOiA0cHggc29saWQgYnJvd247XFxuXFxufVxcblxcbi50b2RvLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDIyMHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBwaW5rO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgXFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBwaW5rO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgXFxufVxcblxcblxcblxcbi5ub3Rlcy1jb2xsZWN0aW9ue1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBnb2xkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LDFmcikpOyBcXG4gICAgYm9yZGVyOiA0cHggc29saWQgYnJvd247XFxuXFxufVxcblxcblxcbi5ub3Rlcy1jb250YWluZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBwaW5rO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgXFxufVxcblxcblxcblxcblxcbi8qIEZPUk0gQlVUVE9OICovXFxuXFxuLmZvcm0tYnV0dG9uLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDUwcHg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAwJSAwJSA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5mb3JtLWJ1dHRvbntcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbi8qIFRPRE8gQ1JFQVRJT04gRk9STSAqL1xcblxcblxcbi5mb3JtLWNvbnRhaW5lcntcXG5cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTI3KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG59XFxuXFxuLnNob3ctZm9ybXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnRvZG8tY3JlYXRpb24tZm9ybSB7XFxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICAvKiBoZWlnaHQ6IDcwMHB4OyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXJvb247XFxuICAgIFxcbn1cXG5cXG4uY3JlYXRlLW5ldy10b2Rve1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBmb3Jlc3RncmVlbjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNlbGVjdC1leGlzdGluZy1wcm9qZWN0e1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBza3libHVlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY3JlYXRlLW5ldy1wcm9qZWN0e1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBjcmltc29uO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZGlzcGxheS1mb3JtLWl0ZW1ze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG5cXG4vKiBNb2JpbGUgdmVyc2lvbiAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIFxcblxcbiAgICAuaGFtYnVyZ2VyLW1lbnUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tY29udGFpbmVyIHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmciA0MHB4O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzAwcHg7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgIFxcXCJ0b3AtY29udGFpbmVyIHRvcC1jb250YWluZXJcXFwiIFxcbiAgICAgICAgXFxcImRpc3BsYXktY29udGFpbmVyIGRpc3BsYXktY29udGFpbmVyXFxcIlxcbiAgICAgICAgXFxcInRvZG8tY29udGFpbmVyLWZvb3RlciB0b2RvLWNvbnRhaW5lci1mb290ZXJcXFwiO1xcbiAgICBcXG4gICAgXFxuICAgIFxcbiAgICB9XFxuXFxuICAgIFxcblxcbiAgICAubm90ZS1tZW51IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgICAgIGdyaWQtcm93OiAyLzM7XFxuICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICAgICAgLyogaGVpZ2h0OiA5MCU7ICovXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcblxcbiAgICAubWVudS1hY3RpdmUgeyAvKnRyaWdnZXJzIHdoZW4gaGFtYnVyZ2VyIG1lbnUgaXMgY2xpY2tlZCovXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBpbXBvcnQgcG9wdWxhdGVUb2RvQ29sbGVjdGlvbiBmcm9tIFwiLi9wb3B1bGF0ZURPTVRvZG9Db2xsZWN0aW9uXCJcblxuaW1wb3J0IGRvbUFjdGlvbiBmcm9tIFwiLi9kb21BY3Rpdml0aWVzXCI7XG5cbmZ1bmN0aW9uIGFsbE5vdGVET01Nb2R1bGUgKCl7XG5cbiAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktY29udGFpbmVyJyk7XG5cblxuXG5cbiAgICAvLyBtb3ZlIHRvIGRvbUFjdGl2aXR5XG4gICAgZnVuY3Rpb24gcmVtb3ZlRXhpc3RpbmdEaXNwbGF5RE9NICgpe1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1jb250YWluZXInKTtcblxuICAgICAgICBkaXNwbGF5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcblxuICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcmVtb3ZlRXhpc3RpbmdEaXNwbGF5RE9NKCk7XG5cblxuICAgIFxuXG5cbiAgICBcblxuXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0b2RvQ29udGFpbmVyVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItdGl0bGUnKTtcblxuICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kKHRvZG9Db250YWluZXJUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgdGFiVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0YWJUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YWItdGl0bGUnKTtcblxuICAgICAgICB0b2RvQ29udGFpbmVyVGl0bGUuYXBwZW5kKHRhYlRpdGxlKTtcblxuICAgICAgICAgICAgY29uc3QgdG9kb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICAgICAgICAgIHRvZG9IZWFkZXIudGV4dENvbnRlbnQgPSAnTm90ZXMnO1xuXG4gICAgICAgICAgICB0YWJUaXRsZS5hcHBlbmQodG9kb0hlYWRlcik7XG5cblxuICAgICAgICAgICAgY29uc3QgdG9kb1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICAgICAgdG9kb1BhcmFncmFwaC50ZXh0Q29udGVudCA9ICdZb3VyIGNvbGxlY3Rpb24gb2YgTm90ZXMgYXJlIGRpc3BsYXllZCBoZXJlJztcblxuICAgICAgICAgICAgdGFiVGl0bGUuYXBwZW5kKHRvZG9QYXJhZ3JhcGgpO1xuXG4gICAgICAgIFxuXG5cblxuXG5cblxuICAgIFxuICAgIGNvbnN0IGNvbGxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbGxlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sbGVjdGlvbi1jb250YWluZXInKTtcblxuICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kKGNvbGxlY3Rpb25Db250YWluZXIpO1xuXG4gICAgLy8gcG9wdWxhdGVUb2RvQ29sbGVjdGlvbignaGlnaCcpO1xuXG4gICAgLy8gZG9tQWN0aW9uKClcblxuICAgICAgIFxuXG4gICAgXG4gICAgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgYWxsTm90ZURPTU1vZHVsZTsiLCJpbXBvcnQgc29ydGluZ01ldGhvZHMgZnJvbSAnLi9zb3J0aW5nTWV0aG9kcydcblxuZnVuY3Rpb24gYWxsTm90ZXNUYWIgKCl7XG5cbiAgICBjb25zdCBjbG9uZVRvZG9BcnJheSA9IHNvcnRpbmdNZXRob2RzLmNsb25lT2JqZWN0KCkuY2xvbmVUb2RvQXJyYXk7XG5cbiAgICBjb25zdCBub3Rlc0FycmF5ID0gc29ydGluZ01ldGhvZHMubm90ZVNvcnRlcihjbG9uZVRvZG9BcnJheSk7XG5cbiAgICBjb25zb2xlLmxvZygnTk9URVMgVEFCJyk7XG5cbiAgICBjb25zb2xlLmxvZyhub3Rlc0FycmF5KTtcblxuICAgIHJldHVybiBub3Rlc0FycmF5O1xuXG5cblxufVxuXG5hbGxOb3Rlc1RhYigpO1xuXG5leHBvcnQgZGVmYXVsdCBhbGxOb3Rlc1RhYjsiLCJpbXBvcnQgcG9wdWxhdGVUb2RvQ29sbGVjdGlvbiBmcm9tIFwiLi9wb3B1bGF0ZURPTVRvZG9Db2xsZWN0aW9uXCI7XG5cbmltcG9ydCBkb21BY3Rpb24gZnJvbSBcIi4vZG9tQWN0aXZpdGllc1wiO1xuXG5pbXBvcnQgeyBjaGFuZ2VQcmlvcml0eSB9IGZyb20gXCIuL2RvbUFjdGl2aXRpZXNcIjtcblxuZnVuY3Rpb24gYWxsVG9kb0RPTU1vZHVsZSAoKXtcblxuICAgIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1jb250YWluZXInKTtcblxuXG5cblxuICAgIC8vIG1vdmUgdG8gZG9tQWN0aXZpdHlcbiAgICBmdW5jdGlvbiByZW1vdmVFeGlzdGluZ0Rpc3BsYXlET00gKCl7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGRpc3BsYXlDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIFxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgfSk7XG5cbiAgICB9XG5cbiAgICByZW1vdmVFeGlzdGluZ0Rpc3BsYXlET00oKTtcblxuXG4gICAgXG5cblxuICAgIFxuXG5cbiAgICBjb25zdCB0b2RvQ29udGFpbmVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRvZG9Db250YWluZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lci10aXRsZScpO1xuXG4gICAgZGlzcGxheUNvbnRhaW5lci5hcHBlbmQodG9kb0NvbnRhaW5lclRpdGxlKTtcblxuICAgICAgICBjb25zdCB0YWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRhYlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RhYi10aXRsZScpO1xuXG4gICAgICAgIHRvZG9Db250YWluZXJUaXRsZS5hcHBlbmQodGFiVGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCB0b2RvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgICAgICAgICAgdG9kb0hlYWRlci50ZXh0Q29udGVudCA9ICdUby1kb3MnO1xuXG4gICAgICAgICAgICB0YWJUaXRsZS5hcHBlbmQodG9kb0hlYWRlcik7XG5cblxuICAgICAgICAgICAgY29uc3QgdG9kb1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICAgICAgdG9kb1BhcmFncmFwaC50ZXh0Q29udGVudCA9ICdZb3VyIGNvbGxlY3Rpb24gb2YgdG9kb3MgYXJlIGRpc3BsYXllZCBoZXJlJztcblxuICAgICAgICAgICAgdGFiVGl0bGUuYXBwZW5kKHRvZG9QYXJhZ3JhcGgpO1xuXG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBwcmlvcml0eUJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYnV0dG9ucycpO1xuXG4gICAgICAgIHRvZG9Db250YWluZXJUaXRsZS5hcHBlbmQocHJpb3JpdHlCdXR0b25zKTtcblxuICAgICAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdoaWdoLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kKGhpZ2hQcmlvcml0eSk7XG5cblxuICAgICAgICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG5cbiAgICAgICAgICAgIHByaW9yaXR5QnV0dG9ucy5hcHBlbmQobWVkaXVtUHJpb3JpdHkpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2xvdy1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kKGxvd1ByaW9yaXR5KTtcblxuICAgICAgICAgICAgXG5cblxuXG5cblxuICAgIFxuICAgIGNvbnN0IGNvbGxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbGxlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sbGVjdGlvbi1jb250YWluZXInKTtcblxuICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kKGNvbGxlY3Rpb25Db250YWluZXIpO1xuXG4gICAgcG9wdWxhdGVUb2RvQ29sbGVjdGlvbignaGlnaCcpO1xuXG4gICAgY2hhbmdlUHJpb3JpdHkoKTtcbiAgICBcbiAgICAvLyBkb21BY3Rpb24oKVxuXG5cblxuXG5cbiAgIFxuXG5cbiAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBcblxuXG5cbiAgICAgICAgXG5cblxuXG5cblxuICAgIFxuICAgIFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGFsbFRvZG9ET01Nb2R1bGU7IiwiXG5pbXBvcnQgc29ydGluZ01ldGhvZHMgZnJvbSAnLi9zb3J0aW5nTWV0aG9kcydcblxuZnVuY3Rpb24gYWxsVG9kb3NUYWIgKCl7XG5cbiAgICBjb25zdCBjbG9uZVRvZG9BcnJheSA9IHNvcnRpbmdNZXRob2RzLmNsb25lT2JqZWN0KCkuY2xvbmVUb2RvQXJyYXk7XG4gICAgY29uc3Qgc29ydGVkVG9kb0FycmF5ID0gc29ydGluZ01ldGhvZHMucHJpb3JpdHlTb3J0ZXIoY2xvbmVUb2RvQXJyYXkpO1xuXG4gICAgZm9yIChjb25zdCBwcmlvcml0eSBpbiBzb3J0ZWRUb2RvQXJyYXkpIHtcbiAgICAgICAgXG4gICAgICAgIHNvcnRlZFRvZG9BcnJheVtwcmlvcml0eV0gPSBzb3J0aW5nTWV0aG9kcy5zb3J0RHVlRGF0ZShzb3J0ZWRUb2RvQXJyYXlbcHJpb3JpdHldKTtcblxuICAgIH1cblxuXG4gICAgY29uc29sZS5sb2coc29ydGVkVG9kb0FycmF5KTtcblxuICAgIHJldHVybiBzb3J0ZWRUb2RvQXJyYXk7XG5cblxufVxuXG5jb25zb2xlLmxvZygnVE9ETyBUQUInKTtcbmFsbFRvZG9zVGFiKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFsbFRvZG9zVGFiOyIsIlxuZnVuY3Rpb24gcHJvamVjdE1vZHVsZSAoKSB7XG5cbiAgICAvLyBGYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBwcm9qZWN0c1xuICAgIGZ1bmN0aW9uIHByb2plY3RGYWN0b3J5ICh0aXRsZSxkZXNjLGR1ZURhdGUscHJpb3JpdHkscmVtaW5kSW4sc3RhdHVzKXtcblxuXG4gICAgICAgIHJldHVybiB7dGl0bGUsZGVzYyxkdWVEYXRlLHByaW9yaXR5LHJlbWluZEluLHN0YXR1c31cbiAgICB9XG5cblxuICAgIC8vIFRoaXMgaXMgd2hlcmUgdW5zb3J0ZWQgcHJvamVjdCBhcnJheXMgYXJlIHN0b3JlZFxuICAgIGNvbnN0IHByb2plY3RBcnJheSA9IFtdO1xuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0ICh0aXRsZSxkZXNjLGR1ZURhdGUscHJpb3JpdHkscmVtaW5kSW4sc3RhdHVzKXtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHRpdGxlLGRlc2MsZHVlRGF0ZSxwcmlvcml0eSxyZW1pbmRJbixzdGF0dXMpOyAvL2NoYW5nZSB0aGlzIGxhdGVyIGlmIHlvdSBuZWVkIHRvXG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICAvLyA4IGhpZ2ggcHJpb3JpdHlcblxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgIGNvbnN0IGRheSA9IGN1cnJlbnREYXRlLmdldERhdGUoKTtcblxuICAgIGNvbnN0IG1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcblxuICAgIGNvbnN0IHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgbGV0IHJlbWluZCA9IC0yO1xuXG4gICAgbGV0IHJlbWluZDEgPSAwO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSA0OyBpbmRleCA+IDA7IGluZGV4LS0pIHtcblxuICAgICAgICBcblxuICAgICAgICBjcmVhdGVQcm9qZWN0KGBwcm9qZWN0JHtpbmRleH10ZXN0YCxgZGVzYyR7aW5kZXh9YCxgJHt5ZWFyICsgcmVtaW5kfS0ke21vbnRoICsgcmVtaW5kfS0ke2RheSArIHJlbWluZH1gLGBoaWdoYCxyZW1pbmQsJ2NvbXBsZXRlJyk7XG5cbiAgICAgICAgY3JlYXRlUHJvamVjdChgcHJvamVjdCR7aW5kZXh9dGVzdDJgLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyByZW1pbmR9LSR7bW9udGggKyByZW1pbmR9LSR7ZGF5ICsgcmVtaW5kfWAsYGhpZ2hgLHJlbWluZCtpbmRleCwnaW5jb21wbGV0ZScpO1xuXG4gICAgICAgIHJlbWluZCA9IHJlbWluZCArIGluZGV4O1xuXG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgLy8gMTAgbG93IHByaW9yaXR5XG4gICAgZm9yIChsZXQgaW5kZXggPSA2OyBpbmRleCA+IDA7IGluZGV4LS0pIHtcblxuICAgICAgICBcblxuICAgICAgICBjcmVhdGVQcm9qZWN0KGBwcm9qZWN0ICR7aW5kZXh9YCxgZGVzYyR7aW5kZXh9YCxgJHt5ZWFyICsgcmVtaW5kMX0tJHttb250aCArIHJlbWluZDF9LSR7ZGF5ICsgcmVtaW5kMX1gLGBsb3dgLHJlbWluZDEsJ2NvbXBsZXRlJyk7XG4gICAgICAgIGNyZWF0ZVByb2plY3QoYHByb2plY3Qke2luZGV4fXd3YCxgZGVzYyR7aW5kZXh9YCxgJHt5ZWFyICsgcmVtaW5kMX0tJHttb250aCArIHJlbWluZDF9LSR7ZGF5IC0gcmVtaW5kMX1gLGBsb3dgLHJlbWluZDEsJ2luY29tcGxldGUnKTtcbiAgICAgICAgY3JlYXRlUHJvamVjdChgcHJvamVjdCR7aW5kZXh9dXBgLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyByZW1pbmQxfS0ke21vbnRoICsgcmVtaW5kMX0tJHtkYXkgKyByZW1pbmQxfWAsYGxvd2AscmVtaW5kMS0xLCdpbmNvbXBsZXRlJyk7XG4gICAgICAgIFxuICAgICAgICByZW1pbmQxID0gcmVtaW5kMSAtIGluZGV4O1xuICAgIH1cblxuICAgICAgICBcbiAgICBcblxuXG5cbiAgICByZXR1cm4ge3Byb2plY3RBcnJheSxjcmVhdGVQcm9qZWN0fTtcblxufVxuXG5jb25zdCBpbml0aWFsaXplZFByb2plY3RNb2R1bGUgPSBwcm9qZWN0TW9kdWxlKCk7XG5cbiAgIFxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZWRQcm9qZWN0TW9kdWxlOyIsIlxuXG5mdW5jdGlvbiB0b2RvTW9kdWxlICgpe1xuXG4gICAgLy8gRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgbm90ZXNcblxuICAgIGZ1bmN0aW9uIHRvZG9GYWN0b3J5ICh0aXRsZSxkZXNjLGR1ZURhdGUscmVtaW5kSW4scHJpb3JpdHksc3RhdHVzLHByb2plY3Qpe1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHt0aXRsZSxkZXNjLGR1ZURhdGUscmVtaW5kSW4scHJpb3JpdHksc3RhdHVzLHByb2plY3R9XG4gICAgfVxuXG4gICAgLy8gVGhpcyBpcyB3aGVyZSB1bnNvcnRlZCB0b2RvIGFycmF5cyBhcmUgc3RvcmVkXG4gICAgY29uc3QgdG9kb0FycmF5ID0gW107XG5cblxuICAgIC8vIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNyZWF0ZSBUb2Rvc1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvZG8gKHRpdGxlLGRlc2MsZHVlRGF0ZSxyZW1pbmRJbixwcmlvcml0eSxzdGF0dXMscHJvamVjdCA9ICdub25lJyl7XG4gICAgICAgIGNvbnN0IG5ld1RvRG8gPSB0b2RvRmFjdG9yeSh0aXRsZSxkZXNjLGR1ZURhdGUscmVtaW5kSW4scHJpb3JpdHksc3RhdHVzLHByb2plY3QpO1xuICAgICAgICB0b2RvQXJyYXkucHVzaChuZXdUb0RvKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgLy8gVGhpcyBtdXN0IGJlIGRlbGV0ZWQgbGF0ZXIgYXMgaXQgaXMgY3JlYXRlZCBwcmltYXJpbHkgZm9yIHRlc3RpbmdcblxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgIGNvbnN0IGRheSA9IGN1cnJlbnREYXRlLmdldERhdGUoKTtcblxuICAgIGNvbnN0IG1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcblxuICAgIGNvbnN0IHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuXG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IDEwOyBpbmRleCsrKSB7XG5cbiAgICAgICAgY3JlYXRlVG9kbyhgdGl0bGUke2luZGV4fWAsYGRlc2Mke2luZGV4fWAsYCR7eWVhciArIGluZGV4fS0ke21vbnRoICsgaW5kZXh9LSR7ZGF5ICsgaW5kZXh9YCxpbmRleCxgaGlnaGAsYHBlbmRpbmdgLCdwcm9qZWN0MicpO1xuXG4gICAgICAgIGNyZWF0ZVRvZG8oYHRpdGxlJHtpbmRleH1gLGBkZXNjJHtpbmRleH1gLGAke3llYXIgKyBpbmRleH0tJHttb250aCArIGluZGV4fS0ke2RheSArIGluZGV4fWAsaW5kZXgsYGxvd2AsYHBlbmRpbmdgLCdwcm9qZWN0MicpO1xuXG4gICAgICAgIGNyZWF0ZVRvZG8oYHRpdGxlJHtpbmRleH1gLGBkZXNjJHtpbmRleH1gLCcnLGluZGV4LGBsb3dgLGBwZW5kaW5nYCwncHJvamVjdDInKTtcblxuXG4gICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PSA1OyBpbmRleCsrKSB7XG5cbiAgICAgICAgY3JlYXRlVG9kbyhgdGl0bGUke2luZGV4fWAsYGRlc2Mke2luZGV4fWAsYCR7eWVhciArIGluZGV4fS0ke21vbnRoICsgaW5kZXh9LSR7ZGF5ICsgaW5kZXh9YCxpbmRleCxgaGlnaGAsYGNvbXBsZXRlYCwncHJvamVjdDF0ZXN0Jyk7XG5cbiAgICAgICAgY3JlYXRlVG9kbyhgdGl0bGUke2luZGV4fWAsYGRlc2Mke2luZGV4fWAsYCR7eWVhciArIGluZGV4fS0ke21vbnRoICsgaW5kZXh9LSR7ZGF5ICsgaW5kZXh9YCxpbmRleCxgbWVkaXVtYCxgcGVuZGluZ2AsJ3Byb2plY3QxdGVzdCcpO1xuXG4gICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG5cbiAgICAvLyBFbmQgb2YgdGVzdCBvYmplY3RzXG5cbiAgICByZXR1cm4ge3RvZG9BcnJheSwgY3JlYXRlVG9kb307XG5cblxufVxuXG5cbmNvbnN0IGluaXRpYWxpemVkVG9kb01vZHVsZSA9IHRvZG9Nb2R1bGUoKTtcblxuXG4vLyBpbml0aWFsaXplZCB2ZXJzaW9uIGlzIHNlbnQgYmVjYXVzZSB0aGUgaXMgbm8gcmVhc29uIHRvIHJlLWluaXRpYWxpc2UgbGF0ZXIgb25cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVkVG9kb01vZHVsZTtcbiIsIi8vIEFsbCBET00gQWN0aXZpdGllcyBhcmUgY2VudHJhbGlzZWQgaGVyZSBleGNlcHQgRE9NIENyZWF0aW9uXG5cbmltcG9ydCB0b2RvTW9kdWxlIGZyb20gXCIuL2NyZWF0ZVRvZG9zXCI7XG5cbmltcG9ydCBwcm9qZWN0TW9kdWxlIGZyb20gXCIuL2NyZWF0ZVByb2plY3RzXCI7XG5cbmltcG9ydCBub3Rlc09iamVjdCBmcm9tIFwiLi9hbGxOb3Rlc1RhYlwiXG5cblxuaW1wb3J0IHRvZG9PYmplY3QgZnJvbSBcIi4vYWxsVG9kb3NUYWJcIjtcblxuaW1wb3J0IHByb2plY3RPYmplY3QgZnJvbSBcIi4vcHJvamVjdFRhYlwiO1xuXG5pbXBvcnQgbWFpbkRvbU1vZHVsZSBmcm9tIFwiLi9mb3JtRE9NQ3JlYXRpb25cIjtcblxuaW1wb3J0IGNyZWF0ZVRvZG9ET00gZnJvbSBcIi4vYWxsVG9kb0RPTUNyZWF0aW9uXCJcblxuaW1wb3J0IGNyZWF0ZU5vdGVzRE9NIGZyb20gXCIuL2FsbE5vdGVzRE9NQ3JlYXRpb25cIjtcblxuaW1wb3J0IHBvcHVsYXRlVG9kb0NvbGxlY3Rpb24gZnJvbSBcIi4vcG9wdWxhdGVET01Ub2RvQ29sbGVjdGlvblwiO1xuXG5sZXQgcmVjZW50Q29sbGVjdGlvbkNvbnRhaW5lckZuID0gJyc7XG5cbmxldCByZWNlbnRDb2xsZWN0aW9uQ29udGFpbmVyQXJnID0gJyc7XG5cbmZ1bmN0aW9uIGRvbUFjdGl2aXRpZXNNb2R1bGUgKCl7XG5cblxuICAgIC8vIGhhbWJ1cmdlciBidXR0b25cbiAgICBjb25zdCBoYW1idXJnZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyLW1lbnUnKTtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZS1tZW51Jyk7XG5cblxuICAgIGhhbWJ1cmdlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdoYW1idXJnZXInKVxuXG4gICAgICAgIGlmKCFtZW51LmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnUtYWN0aXZlXCIpKXtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnUtYWN0aXZlXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hhbWJ1cmdlcnJyci1hZGRkJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYobWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51LWFjdGl2ZVwiKSl7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYW1idXJnZXJycnItcmVtb3ZlJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgfSlcblxuXG4gICAgLy8gRk9STSBBQ1RJVklUSUVTXG5cbiAgICAvLyBGT1JNIElOUFVUIEFDVElWSVRJRVMgQkVHSU4gSEVSRVxuXG5cbiAgICAvLyBmb3JtIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGVudHJ5Q3JlYXRpb25Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY3JlYXRpb24tZm9ybScpO1xuXG4gICAgLy8gdG9kbyBvciBub3RlIGJ1dHRvblxuXG4gICAgbGV0IGlzTm90ZSA9IHRydWU7XG5cbiAgICBjb25zdCBzZWxlY3RUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lzLXRvZG8nKTtcblxuICAgIGNvbnN0IHNlbGVjdE5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXMtbm90ZScpO1xuXG4gICAgY29uc3QgdG9kb0NyZWF0aW9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1uZXctdG9kbycpO1xuXG4gICAgY29uc3Qgc2VsZWN0RXhpc3RpbmdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4aXN0aW5nLXByb2plY3QnKTtcblxuICAgIGNvbnN0IHNlbGVjdE5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKTtcblxuICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtZXhpc3RpbmctcHJvamVjdCcpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtbmV3LXByb2plY3QnKTtcblxuXG5cblxuICAgIC8vIFRvLWRvIGlucHV0c1xuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXRpdGxlJyk7XG5cbiAgICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRlc2MnKTtcblxuICAgIGNvbnN0IGVudHJ5VHlwZSA9IGlzTm90ZTtcblxuICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGF0ZScpO1xuXG4gICAgY29uc3QgdG9kb1JlbWluZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tcmVtaW5kLWluJyk7XG5cbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1wcmlvcml0eScpO1xuXG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0UmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhpc3RpbmctcHJvamVjdCcpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdFJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0Jyk7XG5cblxuICAgIGNvbnN0IHRvZG9JbnB1dHMgPSBbdG9kb0RhdGUsdG9kb1JlbWluZGVyLHRvZG9Qcmlvcml0eSxleGlzdGluZ1Byb2plY3RSYWRpb107XG5cblxuXG4gICAgY29uc3QgcHJvamVjdHNDaG9pY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtY2hvaWNlcycpO1xuXG4gICAgLy8gbmV3IHByb2plY3QgaW5wdXRzXG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpO1xuXG4gICAgY29uc3QgcHJvamVjdERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1kZXNjJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRhdGUnKTtcblxuICAgIGNvbnN0IHByb2plY3RSZW1pbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXJlbWluZC1pbicpO1xuXG5cbiAgICAvLyBpcyBhIGJ1dHRvblxuICAgIGNvbnN0IHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXByaW9yaXR5Jyk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0SW5wdXRzID0gW3Byb2plY3RUaXRsZSxwcm9qZWN0RGVzYyxwcm9qZWN0RGF0ZSxwcm9qZWN0UmVtaW5kZXJdO1xuXG5cbiAgICBzZWxlY3RUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgdG9kb0NyZWF0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdCk7XG5cbiAgICAgICAgXG4gICAgICAgIHRvZG9JbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBcblxuICAgICAgICBpZiAoc2VsZWN0RXhpc3RpbmdQcm9qZWN0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNoZWNrZWRFeGlzdGluZ1Byb2plY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3ROZXdQcm9qZWN0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNoZWNrZWROZXdQcm9qZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaXNOb3RlID0gZmFsc2U7XG5cbiAgICB9KVxuXG4gICAgc2VsZWN0Tm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHRvZG9DcmVhdGlvbkRpdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LWZvcm0taXRlbXMnKTtcbiAgICAgICAgZXhpc3RpbmdQcm9qZWN0RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuICAgICAgICBuZXdQcm9qZWN0RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuXG4gICAgICAgIHRvZG9JbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB9KTtcblxuICAgICAgICBwcm9qZWN0c0Nob2ljZXMucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xuXG4gICAgICAgIG5ld1Byb2plY3RJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB9KTtcblxuICAgICAgICBpc05vdGU9IHRydWU7XG4gICAgfSlcblxuICAgIC8vIGV4aXN0aW5nIHByb2plY3Qgb3IgbmV3IHByb2plY3RcblxuICAgIGxldCBpc05ld1Byb2plY3QgPSBmYWxzZTtcblxuXG5cbiAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gaXNOZXdQcm9qZWN0O1xuXG4gICAgLy8gZXhpc3RpbmcgcHJvamVjdCBpbnB1dFxuXG5cblxuICAgIHNlbGVjdEV4aXN0aW5nUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd3b3JrcyEnKTtcbiAgICAgICAgXG4gICAgICAgIGNoZWNrZWRFeGlzdGluZ1Byb2plY3QoKTtcbiAgICAgICAgXG4gICAgfSk7XG5cblxuXG4gICAgc2VsZWN0TmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgY2hlY2tlZE5ld1Byb2plY3QoKTtcblxuICAgIH0pXG5cblxuICAgIGZ1bmN0aW9uIGNoZWNrZWRFeGlzdGluZ1Byb2plY3QgKCl7XG4gICAgICAgIGV4aXN0aW5nUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LWZvcm0taXRlbXMnKTtcbiAgICAgICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LWZvcm0taXRlbXMnKTtcblxuICAgICAgICBpc05ld1Byb2plY3QgPSBmYWxzZTtcblxuICAgICAgICBwcm9qZWN0c0Nob2ljZXMuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuXG4gICAgICAgIG5ld1Byb2plY3RJbnB1dHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrZWROZXdQcm9qZWN0ICgpe1xuICAgICAgICBcbiAgICAgICAgZXhpc3RpbmdQcm9qZWN0RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuICAgICAgICBuZXdQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktZm9ybS1pdGVtcycpO1xuXG4gICAgICAgIGlzTmV3UHJvamVjdCA9IHRydWU7XG5cbiAgICAgICAgcHJvamVjdHNDaG9pY2VzLnJlbW92ZUF0dHJpYnV0ZSgncmVxdWlyZWQnKTtcblxuICAgICAgICBuZXdQcm9qZWN0SW5wdXRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cblxuICAgIC8vIHJlY2VpdmUgYWxsIGZvcm0gaW5wdXQgZGF0YVxuXG5cbiAgICBjb25zdCBmb3JtU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tc3VibWl0Jyk7XG5cblxuICAgIC8vIGNvbnN0IHRlc3RBcnJheSA9IFt0b2RvVGl0bGUsdG9kb0Rlc2MsZW50cnlUeXBlLHRvZG9EYXRlLHRvZG9SZW1pbmRlcix0b2RvUHJpb3JpdHkscHJvamVjdE9wdGlvbixwcm9qZWN0c0Nob2ljZXMscHJvamVjdFRpdGxlLHByb2plY3REZXNjLHByb2plY3REYXRlLHByb2plY3RSZW1pbmRlcixwcm9qZWN0UHJpb3JpdHldO1xuXG5cbiAgICBjb25zdCBhbGxGb3JtSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0taW5wdXQnKTtcbiAgICBcblxuICAgIFxuXG4gICAgZm9ybVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBjb25zdCByZXF1aXJlZElucHV0ID0gW107XG5cbiAgICAgICAgbGV0IHJlcXVpcmVkSW5wdXRGaWxsZWQgPSB0cnVlO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcXVpcmVkSW5wdXQpO1xuXG5cblxuXG4gICAgICAgIGFsbEZvcm1JbnB1dHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdyZXF1aXJlZCcpKSB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRJbnB1dC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2YgcmVxdWlyZWRJbnB1dCkge1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmKCFlYWNoLnZhbHVlKXtcbiAgICAgICAgICAgICAgICByZXF1aXJlZElucHV0RmlsbGVkID0gZmFsc2U7ICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZhbHNlIHdvcmtzJyk7ICAgXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHJlcXVpcmVkSW5wdXRGaWxsZWQpe1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJldmVudERlZmF1bHQgd29ya3MhJyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBoaWRlRm9ybSgpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgdG9kbyB3aXRoIGZvcm1cblxuXG4gICAgICAgICAgICBjb25zdCByZXNldEFycmF5ID0gW3Byb2plY3RUaXRsZSxwcm9qZWN0RGVzYyxwcm9qZWN0RGF0ZSxwcm9qZWN0UmVtaW5kZXIsdG9kb1RpdGxlLHRvZG9EZXNjLHRvZG9EYXRlLHRvZG9SZW1pbmRlcl07XG5cblxuICAgICAgICAgICAgaWYobmV3UHJvamVjdFJhZGlvLmNoZWNrZWQpe1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25ldyBwcm9qZWN0IHdvcmtzJyk7XG5cbiAgICAgICAgICAgICAgICAvLyB0aXRsZSxkZXNjLGR1ZURhdGUscHJpb3JpdHkscmVtaW5kSW4sc3RhdHVzXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcHJvamVjdE1vZHVsZS5jcmVhdGVQcm9qZWN0KHByb2plY3RUaXRsZS52YWx1ZSxwcm9qZWN0RGVzYy52YWx1ZSxwcm9qZWN0RGF0ZS52YWx1ZSxwcm9qZWN0UHJpb3JpdHkudmFsdWUscHJvamVjdFJlbWluZGVyLnZhbHVlLGBwZW5kaW5nYCk7XG5cblxuICAgICAgICAgICAgICAgIC8vIHRpdGxlLGRlc2MsZHVlRGF0ZSxyZW1pbmRJbixwcmlvcml0eSxzdGF0dXMscHJvamVjdFxuXG4gICAgICAgICAgICAgICAgdG9kb01vZHVsZS5jcmVhdGVUb2RvKHRvZG9UaXRsZS52YWx1ZSx0b2RvRGVzYy52YWx1ZSx0b2RvRGF0ZS52YWx1ZSxOdW1iZXIodG9kb1JlbWluZGVyLnZhbHVlKSx0b2RvUHJpb3JpdHkudmFsdWUsYHBlbmRpbmdgLHByb2plY3RUaXRsZS52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICB0b2RvT2JqZWN0KCk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0T2JqZWN0KCk7XG5cbiAgICAgICAgICAgICAgICBub3Rlc09iamVjdCgpO1xuXG4gICAgICAgICAgICAgICAgcmVzZXRBcnJheS5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vZXZlcnl0aW1lIHN1Ym1pdCBidXR0b24gaXMgY2xpY2tlZCBmcmVzaCBkcm9wZG93biBpcyBjcmVhdGVkIFxuICAgICAgICAgICAgICAgIG1haW5Eb21Nb2R1bGUuZXhpc3RpbmdQcm9qZWN0T3B0aW9ucygpO1xuXG4gICAgICAgICAgICAgICAgcmVjZW50Q29sbGVjdGlvbkNvbnRhaW5lckZuKHJlY2VudENvbGxlY3Rpb25Db250YWluZXJBcmcpXG5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0by1kb3MgYW5kIG5vdGVzXG5cbiAgICAgICAgICAgIHRvZG9Nb2R1bGUuY3JlYXRlVG9kbyh0b2RvVGl0bGUudmFsdWUsdG9kb0Rlc2MudmFsdWUsdG9kb0RhdGUudmFsdWUsTnVtYmVyKHRvZG9SZW1pbmRlci52YWx1ZSksdG9kb1ByaW9yaXR5LnZhbHVlLGBwZW5kaW5nYCxwcm9qZWN0c0Nob2ljZXMudmFsdWUpO1xuXG4gICAgICAgICAgICB0b2RvT2JqZWN0KCk7XG5cbiAgICAgICAgICAgIHByb2plY3RPYmplY3QoKTtcblxuICAgICAgICAgICAgbm90ZXNPYmplY3QoKTtcblxuICAgICAgICAgICAgcmVzZXRBcnJheS5mb3JFYWNoKGlucHV0ID0+IHtcblxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9ldmVyeXRpbWUgc3VibWl0IGJ1dHRvbiBpcyBjbGlja2VkIGZyZXNoIGRyb3Bkb3duIGlzIGNyZWF0ZWQgXG4gICAgICAgICAgICBtYWluRG9tTW9kdWxlLmV4aXN0aW5nUHJvamVjdE9wdGlvbnMoKTtcblxuICAgICAgICAgICAgcmVjZW50Q29sbGVjdGlvbkNvbnRhaW5lckZuKHJlY2VudENvbGxlY3Rpb25Db250YWluZXJBcmcpXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlY2VudENvbGxlY3Rpb25Db250YWluZXJGbik7XG5cblxuICAgICAgICB9XG5cblxuICAgICAgICAvLyBGT1JNIElOUFVUIEFDVElWSVRJRVMgRU5EIEhFUkVcbiAgICAgICAgXG5cblxuICAgIH0pO1xuXG5cblxuICAgIC8vIEZPUk0gQVBQRUFSQU5DRSBBQ1RJVklURVMgQkVHSU4gSEVSRVxuXG5cbiAgICBmdW5jdGlvbiBoaWRlRm9ybSAoKXtcblxuXG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1mb3JtJylcblxuICAgICAgICBcblxuICAgIH1cblxuXG4gICAgLy8gc3RvcCBldmVudCBidWJibGluZy5cbiAgICBlbnRyeUNyZWF0aW9uRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIH0pXG5cblxuICAgIGZvcm1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcblxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrIHdvcmtzJylcbiAgICAgICAgaGlkZUZvcm0oKTtcbiAgICAgICAgICAgIFxuICAgIH0pXG5cbiAgICBjb25zdCBmb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tYnV0dG9uJyk7XG5cbiAgICBmb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hvdy1mb3JtJyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcblxuICAgIH0pXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgY29uc3QgYWxsVG9kb3NUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXRvZG9zLXRhYicpO1xuXG4gICAgYWxsVG9kb3NUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgY3JlYXRlVG9kb0RPTSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnR0RHREdER0RHRycpXG5cbiAgICB9KTtcblxuXG4gICAgY29uc3QgYWxsTm90ZXNUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLW5vdGVzLXRhYicpO1xuXG4gICAgYWxsTm90ZXNUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgY3JlYXRlTm90ZXNET00oKTtcblxuICAgIH0pXG5cblxuXG5cbiAgICBcblxufVxuXG5cbiAvLyBQUklPUklUWSBCVVRUT04gLSBUT0RPU1xuXG4gZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkoKXtcbiAgICBjb25zdCBoaWdoUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaC1wcmlvcml0eScpO1xuICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lZGl1bS1wcmlvcml0eScpO1xuICAgIGNvbnN0IGxvd1ByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvdy1wcmlvcml0eScpO1xuXG4gICAgaWYgKCFoaWdoUHJpb3JpdHlCdXR0b258fCFtZWRpdW1Qcmlvcml0eUJ1dHRvbnx8IWxvd1ByaW9yaXR5QnV0dG9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBjb25zb2xlLmxvZygnVEVTVDIyMTMzJylcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1idXR0b25zJyk7XG4gIFxuICAgICAgICBwcmlvcml0eUJ1dHRvbnMucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nob3Nlbi1wcmlvcml0eScpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKTtcblxuICAgICAgICBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uKCdoaWdoJyk7XG5cbiAgICAgICAgcmVjZW50Q29sbGVjdGlvbkNvbnRhaW5lckZuID0gcG9wdWxhdGVUb2RvQ29sbGVjdGlvbjtcbiAgICAgICAgcmVjZW50Q29sbGVjdGlvbkNvbnRhaW5lckFyZyA9ICdoaWdoJztcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZWNlbnRDb2xsZWN0aW9uQ29udGFpbmVyRm4pO1xuICAgIH0pO1xuXG4gICAgXG5cbiAgICBtZWRpdW1Qcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1idXR0b25zJyk7XG4gICAgICAgIFxuICAgICAgICBwcmlvcml0eUJ1dHRvbnMucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nob3Nlbi1wcmlvcml0eScpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGl1bVByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nob3Nlbi1wcmlvcml0eScpO1xuXG4gICAgICAgIHBvcHVsYXRlVG9kb0NvbGxlY3Rpb24oJ21lZGl1bScpO1xuXG4gICAgICAgIHJlY2VudENvbGxlY3Rpb25Db250YWluZXJGbiA9IHBvcHVsYXRlVG9kb0NvbGxlY3Rpb247XG4gICAgICAgIHJlY2VudENvbGxlY3Rpb25Db250YWluZXJBcmcgPSAnbWVkaXVtJztcbiAgICB9KTtcblxuXG4gICBcbiAgICBsb3dQcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktYnV0dG9ucycpO1xuXG4gICAgICAgIHByaW9yaXR5QnV0dG9ucy5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaG9zZW4tcHJpb3JpdHknKVxuICAgICAgICB9KTtcblxuICAgICAgICBsb3dQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaG9zZW4tcHJpb3JpdHknKTtcblxuICAgICAgICBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uKCdsb3cnKTtcblxuICAgICAgICByZWNlbnRDb2xsZWN0aW9uQ29udGFpbmVyRm4gPSBwb3B1bGF0ZVRvZG9Db2xsZWN0aW9uO1xuICAgICAgICByZWNlbnRDb2xsZWN0aW9uQ29udGFpbmVyQXJnID0gJ2xvdyc7XG4gICAgfSk7XG4gICB9XG5cbiAgIGNoYW5nZVByaW9yaXR5KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFjdGl2aXRpZXNNb2R1bGU7XG5cbmV4cG9ydCB7Y2hhbmdlUHJpb3JpdHl9O1xuXG4iLCIvLyBmb3Igc2VsZWN0aW9uIG9wdGlvbnNcbmltcG9ydCBwcm9qZWN0T2JqZWN0cyBmcm9tICcuL3Byb2plY3RUYWInXG5cbmZ1bmN0aW9uIGZvcm1Eb21Nb2R1bGUgKCl7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cblxuXG4vLyAgICBGT1JNIEJVVFRPTlxuXG5cbiAgICBjb25zdCBmb3JtQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb3JtQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uLWNvbnRhaW5lcicpO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoZm9ybUJ1dHRvbkNvbnRhaW5lcik7XG5cblxuICAgICAgICBjb25zdCBmb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgZm9ybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicpO1xuXG4gICAgICAgIGZvcm1CdXR0b24udGV4dENvbnRlbnQgPSAnKyc7XG5cbiAgICAgICAgZm9ybUJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZm9ybUJ1dHRvbik7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ21haW4gZE9tJyk7XG4gICAgXG5cblxuICAgIFxuXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoZm9ybUNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgdG9kb0NyZWF0aW9uRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRvZG9DcmVhdGlvbkZvcm0uY2xhc3NMaXN0LmFkZCgndG9kby1jcmVhdGlvbi1mb3JtJyk7XG5cbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmQodG9kb0NyZWF0aW9uRm9ybSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGVudHJ5Q3JlYXRpb25Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgICAgICAgICB0b2RvQ3JlYXRpb25Gb3JtLmFwcGVuZChlbnRyeUNyZWF0aW9uRm9ybSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG5cbiAgICAgICAgICAgICAgICBlbnRyeUNyZWF0aW9uRm9ybS5hcHBlbmQoZmllbGRzZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9ICdDcmVhdGUgYW4gZW50cnknXG5cbiAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kKGxlZ2VuZCk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmQoaW5wdXRDb250YWluZXIxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9kby10aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGU6JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMS5hcHBlbmQodG9kb1RpdGxlTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvVGl0bGVMaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxLmFwcGVuZCh0b2RvVGl0bGVMaW5lQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tdGl0bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMS5hcHBlbmQodG9kb1RpdGxlSW5wdXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZChpbnB1dENvbnRhaW5lcjIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9kby1kZXNjJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY0xhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjIuYXBwZW5kKHRvZG9EZXNjTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY0xpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjIuYXBwZW5kKHRvZG9EZXNjTGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tZGVzYycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCczMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCcxMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY1RleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMi5hcHBlbmQodG9kb0Rlc2NUZXh0QXJlYSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMy5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kKGlucHV0Q29udGFpbmVyMyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc05vdGVSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc05vdGVSYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOb3RlUmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsJ2lzLW5vdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTm90ZVJhZGlvLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2VudHJ5LXR5cGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTm90ZVJhZGlvLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOb3RlUmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIzLmFwcGVuZChpc05vdGVSYWRpbyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vdGVSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVSYWRpb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnaXMtbm90ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90ZVJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSAnTm90ZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjMuYXBwZW5kKG5vdGVSYWRpb0xhYmVsKTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1RvZG9SYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1RvZG9SYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUb2RvUmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsJ2lzLXRvZG8nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9kb1JhZGlvLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2VudHJ5LXR5cGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9kb1JhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMy5hcHBlbmQoaXNUb2RvUmFkaW8pO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9SYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9SYWRpb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnaXMtdG9kbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JhZGlvTGFiZWwudGV4dENvbnRlbnQgPSAnVG8tZG8nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIzLmFwcGVuZCh0b2RvUmFkaW9MYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlTmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdUb2RvLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1uZXctdG9kbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmQoY3JlYXRlTmV3VG9kbyk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdUb2RvLmFwcGVuZChpbnB1dENvbnRhaW5lcjQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0b2RvLWRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBkYXRlOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI0LmFwcGVuZCh0b2RvRGF0ZUxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlTGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjQuYXBwZW5kKHRvZG9EYXRlTGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1kYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI0LmFwcGVuZCh0b2RvRGF0ZUlucHV0KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51ZSBjcmVhdGluZyBmb3JtIGVsZW1lbnRzXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI1LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3VG9kby5hcHBlbmQoaW5wdXRDb250YWluZXI1KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUmVtaW5kSW5MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1JlbWluZEluTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0b2RvLXJlbWluZC1pbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9SZW1pbmRJbkxhYmVsLnRleHRDb250ZW50ID0gJ1JlbWluZC1pbihkYXlzKTonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNS5hcHBlbmQodG9kb1JlbWluZEluTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1JlbWluZEluTGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjUuYXBwZW5kKHRvZG9SZW1pbmRJbkxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9SZW1pbmRJbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdudW1iZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmVtaW5kSW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kby1yZW1pbmQtaW4nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUmVtaW5kSW5JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI1LmFwcGVuZCh0b2RvUmVtaW5kSW5JbnB1dCk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1RvZG8uYXBwZW5kKGlucHV0Q29udGFpbmVyNik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjYuYXBwZW5kKHRvZG9Qcmlvcml0eUxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eUxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI2LmFwcGVuZCh0b2RvUHJpb3JpdHlMaW5lQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ2xvdycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG8tcHJpb3JpdHknKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNi5hcHBlbmQodG9kb1ByaW9yaXR5QnV0dG9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgY2xhc3NlcyBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXMgKGRpZmZlcmVudCBjb2xvdXJzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb1ByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnbG93Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvUHJpb3JpdHlCdXR0b24udmFsdWUgPT09ICdtZWRpdW0nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlCdXR0b24udmFsdWUgPSAnaGlnaCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb1ByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnaGlnaCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi52YWx1ZSA9ICdsb3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI3LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3VG9kby5hcHBlbmQoaW5wdXRDb250YWluZXI3KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdFJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCdleGlzdGluZy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKCduYW1lJywncHJvamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjcuYXBwZW5kKGV4aXN0aW5nUHJvamVjdFJhZGlvKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1Byb2plY3RSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RSYWRpb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZXhpc3RpbmctcHJvamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdFJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSAnRXhpc3RpbmcgcHJvamVjdCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI3LmFwcGVuZChleGlzdGluZ1Byb2plY3RSYWRpb0xhYmVsKTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdFJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsJ25ldy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Byb2plY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0UmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyNy5hcHBlbmQobmV3UHJvamVjdFJhZGlvKTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdFJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3RSYWRpb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnbmV3LXByb2plY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0UmFkaW9MYWJlbC50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI3LmFwcGVuZChuZXdQcm9qZWN0UmFkaW9MYWJlbCk7XG5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RFeGlzdGluZ1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0RXhpc3RpbmdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC1leGlzdGluZy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZChzZWxlY3RFeGlzdGluZ1Byb2plY3QpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyOC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEV4aXN0aW5nUHJvamVjdC5hcHBlbmQoaW5wdXRDb250YWluZXI4KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RDaG9pY2VzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDaG9pY2VzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdwcm9qZWN0LWNob2ljZXMnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q2hvaWNlc0xhYmVsLnRleHRDb250ZW50ID0gJ1doaWNoIHByb2plY3QgaXMgdGhpcyBmb3I/JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjguYXBwZW5kKHByb2plY3RDaG9pY2VzTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdENob2ljZXNEcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDaG9pY2VzRHJvcERvd24uc2V0QXR0cmlidXRlKCduYW1lJywncHJvamVjdC1jaG9pY2VzJyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDaG9pY2VzRHJvcERvd24uc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtY2hvaWNlcycpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q2hvaWNlc0Ryb3BEb3duLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI4LmFwcGVuZChwcm9qZWN0Q2hvaWNlc0Ryb3BEb3duKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aXRsZXMgZnJvbSBleGlzdGluZyBwcm9qZWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHdoZW4gbmV3IHByb2plY3RzIGFyZSBjcmVhdGVkXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLW5ldy1wcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZChjcmVhdGVOZXdQcm9qZWN0KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXI5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjkuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0LmFwcGVuZChpbnB1dENvbnRhaW5lcjkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Byb2plY3QtdGl0bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyOS5hcHBlbmQocHJvamVjdFRpdGxlTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlTGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjkuYXBwZW5kKHByb2plY3RUaXRsZUxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtdGl0bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXI5LmFwcGVuZChwcm9qZWN0VGl0bGVJbnB1dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyMTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTAuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0LmFwcGVuZChpbnB1dENvbnRhaW5lcjEwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywncHJvamVjdC1kZXNjJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NMYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTAuYXBwZW5kKHByb2plY3REZXNjTGFiZWwpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NMaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTAuYXBwZW5kKHByb2plY3REZXNjTGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWRlc2MnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY1RleHRBcmVhLnNldEF0dHJpYnV0ZSgnY29scycsJzMwJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERlc2NUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCcxMCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjVGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTAuYXBwZW5kKHByb2plY3REZXNjVGV4dEFyZWEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QuYXBwZW5kKGlucHV0Q29udGFpbmVyMTEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdwcm9qZWN0LWRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBkYXRlOic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMS5hcHBlbmQocHJvamVjdERhdGVMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGF0ZUxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMS5hcHBlbmQocHJvamVjdERhdGVMaW5lQnJlYWspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjExLmFwcGVuZChwcm9qZWN0RGF0ZUlucHV0KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51ZSBjcmVhdGluZyBmb3JtIGVsZW1lbnRzXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyMTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0LmFwcGVuZChpbnB1dENvbnRhaW5lcjEyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0UmVtaW5kSW5MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFJlbWluZEluTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdwcm9qZWN0LXJlbWluZC1pbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbkxhYmVsLnRleHRDb250ZW50ID0gJ1JlbWluZC1pbihkYXlzKTonO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTIuYXBwZW5kKHByb2plY3RSZW1pbmRJbkxhYmVsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RSZW1pbmRJbkxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMi5hcHBlbmQocHJvamVjdFJlbWluZEluTGluZUJyZWFrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFJlbWluZEluSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ251bWJlcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LXJlbWluZC1pbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RSZW1pbmRJbklucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEyLmFwcGVuZChwcm9qZWN0UmVtaW5kSW5JbnB1dCk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lcjEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEzLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdC5hcHBlbmQoaW5wdXRDb250YWluZXIxMyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lcjEzLmFwcGVuZChwcm9qZWN0UHJpb3JpdHlMYWJlbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlMaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyMTMuYXBwZW5kKHByb2plY3RQcmlvcml0eUxpbmVCcmVhayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnbG93Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdC1wcmlvcml0eScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIxMy5hcHBlbmQocHJvamVjdFByaW9yaXR5QnV0dG9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgY2xhc3NlcyBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXMgKGRpZmZlcmVudCBjb2xvdXJzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnbG93Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID0gJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPT09ICdtZWRpdW0nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UHJpb3JpdHlCdXR0b24udmFsdWUgPSAnaGlnaCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFByaW9yaXR5QnV0dG9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdFByaW9yaXR5QnV0dG9uLnZhbHVlID09PSAnaGlnaCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi52YWx1ZSA9ICdsb3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQcmlvcml0eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdmb3JtLXN1Ym1pdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kKHN1Ym1pdEJ1dHRvbik7XG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZXhpc3RpbmdQcm9qZWN0T3B0aW9ucyAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1bnByb2Nlc3NlZFByb2plY3QudGl0bGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVucHJvY2Vzc2VkUHJvamVjdCA9IHByb2plY3RPYmplY3RzKCkudW5wcm9jZXNzZWRQcm9qZWN0QXJyYXlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnNOb2RlKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc05vZGUuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uMC50ZXh0Q29udGVudCA9ICdDaG9vc2Ugb25lJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24wLnZhbHVlID0gJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENob2ljZXNEcm9wRG93bi5hcHBlbmQob3B0aW9uMCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnByb2Nlc3NlZFByb2plY3QuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqZWN0LnRpdGxlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gb2JqZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnZhbHVlID0gb2JqZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q2hvaWNlc0Ryb3BEb3duLmFwcGVuZChwcm9qZWN0T3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RPcHRpb25zKCk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7ZXhpc3RpbmdQcm9qZWN0T3B0aW9uc307XG5cblxufVxuXG5jb25zdCBjcmVhdGVGb3JtRE9NID0gZm9ybURvbU1vZHVsZSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvcm1ET007IiwiXG5cbmZ1bmN0aW9uIG1haW5Eb21Nb2R1bGUgKCl7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICBcbiAgICAvLyBGT1JNIE9QRU5JTkcgQlVUVE9OXG4gICAgXG5cblxuXG4gICAgLy8gVE9QIENPTlRBSU5FUlxuICAgIGNvbnN0IHRvcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdG9wQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvcC1jb250YWluZXInKTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKHRvcENvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgYnJhbmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBicmFuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdicmFuZC1jb250YWluZXInKTtcblxuICAgICAgICB0b3BDb250YWluZXIuYXBwZW5kKGJyYW5kQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgY29uc3QgYnJhbmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgICAgICBicmFuZEhlYWRlci50ZXh0Q29udGVudCA9ICdTYWdlTm90ZXMnO1xuXG4gICAgICAgICAgICBicmFuZENvbnRhaW5lci5hcHBlbmQoYnJhbmRIZWFkZXIpO1xuXG5cbiAgICAgICAgY29uc3QgdG9wQ29udGFpbmVyU3BhY2luZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRvcENvbnRhaW5lclNwYWNpbmcuY2xhc3NMaXN0LmFkZCgndG9wLWNvbnRhaW5lci1zcGFjaW5nJyk7XG5cbiAgICAgICAgdG9wQ29udGFpbmVyLmFwcGVuZCh0b3BDb250YWluZXJTcGFjaW5nKTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LmFkZCgnaGFtYnVyZ2VyLW1lbnUnKTtcblxuICAgICAgICBoYW1idXJnZXJNZW51LnRleHRDb250ZW50ID0gJy8vLyc7XG5cbiAgICAgICAgdG9wQ29udGFpbmVyLmFwcGVuZChoYW1idXJnZXJNZW51KTtcblxuXG4gICAgLy8gTUVOVVxuXG4gICAgY29uc3Qgbm90ZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG5vdGVNZW51LmNsYXNzTGlzdC5hZGQoJ25vdGUtbWVudScpO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQobm90ZU1lbnUpO1xuXG4gICAgICAgIGNvbnN0IGFsbFRvZG9zVGFiRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgYWxsVG9kb3NUYWJET00uY2xhc3NMaXN0LmFkZCgnYWxsLXRvZG9zLXRhYicpO1xuXG4gICAgICAgIG5vdGVNZW51LmFwcGVuZChhbGxUb2Rvc1RhYkRPTSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFsbFRvZG9zSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgICAgICAgICAgYWxsVG9kb3NIZWFkZXIudGV4dENvbnRlbnQgPSAnQWxsIFRvZG9zJztcblxuICAgICAgICAgICAgYWxsVG9kb3NUYWJET00uYXBwZW5kKGFsbFRvZG9zSGVhZGVyKVxuXG5cbiAgICAgICAgY29uc3QgYWxsUHJvamVjdHNUYWJET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBhbGxQcm9qZWN0c1RhYkRPTS5jbGFzc0xpc3QuYWRkKCdhbGwtcHJvamVjdHMtdGFiJyk7XG5cbiAgICAgICAgbm90ZU1lbnUuYXBwZW5kKGFsbFByb2plY3RzVGFiRE9NKTtcblxuICAgICAgICAgICAgY29uc3QgYWxsUHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgICAgICBhbGxQcm9qZWN0c0hlYWRlci50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG5cbiAgICAgICAgICAgIGFsbFByb2plY3RzVGFiRE9NLmFwcGVuZChhbGxQcm9qZWN0c0hlYWRlcik7XG5cblxuICAgICAgICBjb25zdCBhbGxOb3Rlc1RhYkRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGFsbE5vdGVzVGFiRE9NLmNsYXNzTGlzdC5hZGQoJ2FsbC1ub3Rlcy10YWInKTtcblxuICAgICAgICBub3RlTWVudS5hcHBlbmQoYWxsTm90ZXNUYWJET00pO1xuXG4gICAgICAgICAgICBjb25zdCBhbGxOb3Rlc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICAgICAgICAgIGFsbE5vdGVzSGVhZGVyLnRleHRDb250ZW50ID0gJ05vdGVzJztcblxuICAgICAgICAgICAgYWxsTm90ZXNUYWJET00uYXBwZW5kKGFsbE5vdGVzSGVhZGVyKTtcblxuXG5cblxuICAgIC8vIEZPT1RFUlxuICAgIGNvbnN0IHRvZG9Db250YWluZXJGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRvZG9Db250YWluZXJGb290ZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItZm9vdGVyJyk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZCh0b2RvQ29udGFpbmVyRm9vdGVyKTtcblxuICAgICAgICBjb25zdCBsaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgbGlua0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaW5rLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIHRvZG9Db250YWluZXJGb290ZXIuYXBwZW5kKGxpbmtDb250YWluZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgICAgICAgICBmb290ZXJMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsJycpO1xuXG4gICAgICAgICAgICBmb290ZXJMaW5rLnRleHRDb250ZW50ID0gJ01hZGUgYnkgUmlzc2hpZ2FuZXNoIFZpbGxhbGFuJztcblxuICAgICAgICAgICAgbGlua0NvbnRhaW5lci5hcHBlbmQoZm9vdGVyTGluayk7XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBtYWluRG9tTW9kdWxlOyIsImltcG9ydCB0b2RvT2JqZWN0IGZyb20gXCIuL2FsbFRvZG9zVGFiXCI7XG5cblxuLy8gUE9QVUxBVEUgVE9ETyBDT0xMRUNUSU9OIENPTlRBSU5FUlxuXG4vLyBoaWdoXG4vLyBwdXQgdGhpcyBpbiBhIGRpZmZlcmVudCBtb2R1bGVcbmZ1bmN0aW9uIGFwcGVuZFRvZG9PYmplY3RzKHByaW9yaXR5KXtcblxuICAgIFxuXG4gICAgY29uc3QgY29sbGVjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uLWNvbnRhaW5lcicpXG5cbiAgICBjb2xsZWN0aW9uQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcblxuICAgIH0pO1xuXG5cblxuICAgIGNvbnN0IGFsbFRvZG9PYmplY3QgPSB0b2RvT2JqZWN0KCk7XG5cbiAgICBjb25zdCBkdWVTdGF0dXNBcnJheSA9IFsnb3ZlcmR1ZScsJ2R1ZScsJ3VwY29taW5nJywnY29tcGxldGUnXTtcblxuICAgIGNvbnN0IHRpdGxlQXJyYXkgPSBbJ09WRVJEVUUnLCdEVUUgU09PTicsJ1VQQ09NSU5HJywnQ09NUExFVEVEJ107XG5cbiAgICBjb25zdCBjbGFzc0FycmF5ID0gWydvdmVyZHVlLWNvbnRhaW5lcicsJ2R1ZS1zb29uLWNvbnRhaW5lcicsJ3VwY29taW5nLWNvbnRhaW5lcicsJ2NvbXBsZXRlLWNvbnRhaW5lciddO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gYWxsVG9kb09iamVjdCkge1xuXG4gICAgICAgIGlmIChrZXkgPT09IHByaW9yaXR5KSB7XG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZHVlU3RhdHVzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gZHVlU3RhdHVzQXJyYXlbaW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWVkT2JqQnlQcmlvcml0eSA9IGFsbFRvZG9PYmplY3Rba2V5XTtcblxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBzcGVjaWZpZWRPYmpCeVByaW9yaXR5KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IHByb3BlcnR5KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5zIGFycmF5IG9mIHRvZG8gb2JqZWN0cyBvZiBlYWNoIGR1ZSBzdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnlEdWVTdGF0dXMgPSBzcGVjaWZpZWRPYmpCeVByaW9yaXR5W3Byb3BdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlCeUR1ZVN0YXR1cy5sZW5ndGggPT09IDApe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N0YXR1cy1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25Db250YWluZXIuYXBwZW5kKHN0YXR1c0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGl2LnRleHRDb250ZW50ID0gdGl0bGVBcnJheVtpbmRleF07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29udGFpbmVyLmFwcGVuZCh0b2RvVGl0bGVEaXYpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1ZVN0YXR1c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZVN0YXR1c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzQXJyYXlbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVEaXYuYXBwZW5kKGR1ZVN0YXR1c0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbGFibGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzY3JvbGxhYmxlLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVTdGF0dXNDb250YWluZXIuYXBwZW5kKHNjcm9sbGFibGVDb250YWluZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvb3BzIG92ZXIgZWFjaCB0b2RvIG9iamVjdCBhbmQgYXBwZW5kcyB0aGVtIHRvIHNjcm9sbGFibGUgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5QnlEdWVTdGF0dXMuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRhaW5lci5hcHBlbmQodG9kb0NvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUtZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVEaXYudGV4dENvbnRlbnQgPSBvYmplY3QudGl0bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvVGl0bGVEaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NEaXYuY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjLWRpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NEaXYudGV4dENvbnRlbnQgPSBvYmplY3QuZGVzYztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9EZXNjRGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGF0ZS1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlRGl2LnRleHRDb250ZW50ID0gb2JqZWN0LmR1ZURhdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvRGF0ZURpdik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EdXJhdGlvbkxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EdXJhdGlvbkxlZnREaXYuY2xhc3NMaXN0LmFkZCgndG9kby1kdXItbGVmdC1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EdXJhdGlvbkxlZnREaXYudGV4dENvbnRlbnQgPSBgJHtvYmplY3QuZHVyYXRpb25MZWZ0LmRheUxlZnR9IGRheXMsICR7b2JqZWN0LmR1cmF0aW9uTGVmdC5tb250aHNMZWZ0fSBtb250aHMgYW5kICR7b2JqZWN0LmR1cmF0aW9uTGVmdC55ZWFyc0xlZnR9IHllYXJzIGxlZnRgO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0R1cmF0aW9uTGVmdERpdik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Qcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLXByb2plY3QtZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJvamVjdERpdi50ZXh0Q29udGVudCA9IG9iamVjdC5wcm9qZWN0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb1Byb2plY3REaXYpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHl0RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJvamVjdC1kaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eXREaXYudGV4dENvbnRlbnQgPSBvYmplY3QucHJpb3JpdHk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvUHJpb3JpdHl0RGl2KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuXG5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcblxuXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG4vLyBTRU5EIFRISVMgVE8gYWxsVG9kb0RPTUNyZWF0aW9uLmpzXG4vLyBhcHBlbmRUb2RvT2JqZWN0cygnaGlnaCcpXG5cbmV4cG9ydCBkZWZhdWx0IGFwcGVuZFRvZG9PYmplY3RzOyIsImltcG9ydCBzb3J0aW5nTWV0aG9kcyBmcm9tICcuL3NvcnRpbmdNZXRob2RzJ1xuXG5mdW5jdGlvbiBwcm9qZWN0c1RhYiAoKXtcblxuICAgICAgICBcblxuICAgIGNvbnN0IHVucHJvY2Vzc2VkUHJvamVjdEFycmF5ID0gc29ydGluZ01ldGhvZHMuc29ydEJ5UHJvamVjdE5hbWUoKS5wcm9jZXNzZWRQcm9qZWN0QXJyYXlCeU5hbWU7XG5cbiAgICBcblxuICAgIC8vIEFsbCBwcm9qZWN0cyBhcmUgc3RvcmVkIGhlcmVcbiAgICAvLyBGaXJzdCBzb3J0IHRoZSBwcm9qZWN0cyBieSBwcmlvcml0eVxuICAgIGNvbnN0IHByb2plY3RzQnlQcmlvcml0eSA9IHNvcnRpbmdNZXRob2RzLnByaW9yaXR5U29ydGVyKHVucHJvY2Vzc2VkUHJvamVjdEFycmF5KTtcblxuXG4gICAgXG5cbiAgICAvLyBUaGVuIHNvcnQgdGhlIG5vdGVzIGluIHRob3NlIHByb2plY3RzIGJ5IHByaW9yaXR5XG4gICAgZm9yIChjb25zdCBwcmlvcml0eUxldmVsIGluIHByb2plY3RzQnlQcmlvcml0eSkge1xuXG4gICAgICAgIHByb2plY3RzQnlQcmlvcml0eVtwcmlvcml0eUxldmVsXS5mb3JFYWNoKHByb2plY3QgPT4ge1xuXG4gICAgICAgICAgICAvLyBzb3J0IHByaW9yaXR5IG9mIHRvZG9Db2xsZWN0aW9uXG4gICAgICAgICAgICBjb25zdCBzb3J0QnlQcmlvcml0eSA9IHNvcnRpbmdNZXRob2RzLnByaW9yaXR5U29ydGVyKHByb2plY3QudG9kb0NvbGxlY3Rpb24pXG5cblxuICAgICAgICAgICAgLy8gU29ydCB0b2RvcyBieSBkdWUgZGF0ZVxuICAgICAgICAgICAgZm9yIChjb25zdCBwcmlvcml0eSBpbiBzb3J0QnlQcmlvcml0eSkge1xuXG4gICAgICAgICAgICAgICAgc29ydEJ5UHJpb3JpdHlbcHJpb3JpdHldID0gc29ydGluZ01ldGhvZHMuc29ydER1ZURhdGUoc29ydEJ5UHJpb3JpdHlbcHJpb3JpdHldKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBlbXB0eSB0b2RvQ29sbGVjdGlvblxuICAgICAgICAgICAgcHJvamVjdC50b2RvQ29sbGVjdGlvbiA9IFtdO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgbmV3IGtleSBhbmQgYXR0YWNoIHRoZSBzb3J0ZWQgb2JqZWN0XG4gICAgICAgICAgICBwcm9qZWN0LnRvZG9zQnlQcmlvcml0eSA9IHNvcnRCeVByaW9yaXR5O1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG5cbiAgICAvLyBTb3J0IHByb2plY3RzIGJ5IGR1ZSBkYXRlc1xuICAgIGZvciAoY29uc3QgcHJpb3JpdHkgaW4gcHJvamVjdHNCeVByaW9yaXR5KSB7XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0c0J5UHJpb3JpdHlbcHJpb3JpdHldID0gc29ydGluZ01ldGhvZHMuc29ydER1ZURhdGUocHJvamVjdHNCeVByaW9yaXR5W3ByaW9yaXR5XSk7XG5cbiAgICB9XG5cblxuXG5cblxuICAgIGNvbnNvbGUubG9nKCdQUk9KRUNUUyBUQUInKTtcblxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzQnlQcmlvcml0eSk7XG5cblxuICAgIHJldHVybiB7cHJvamVjdHNCeVByaW9yaXR5LHVucHJvY2Vzc2VkUHJvamVjdEFycmF5fTtcblxufVxuXG5wcm9qZWN0c1RhYigpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0c1RhYjsiLCJpbXBvcnQgdG9kb01vZHVsZSBmcm9tIFwiLi9jcmVhdGVUb2Rvc1wiO1xuXG5pbXBvcnQgcHJvamVjdE1vZHVsZSBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0c1wiO1xuXG5mdW5jdGlvbiBzb3J0aW5nTW9kdWxlICgpe1xuXG5cbiAgICAgLy8gU28gdGhhdCBpdCBkb2VzIG5vdCBtZXNzIHdpdGggdGhlIG9yaWdpbmFsIGFycmF5XG5cbiAgICBmdW5jdGlvbiBjbG9uZU9iamVjdCgpe1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RBcnJheVJlZmVyZW5jZSA9IHByb2plY3RNb2R1bGUucHJvamVjdEFycmF5O1xuXG4gICAgICAgIGNvbnN0IGNsb25lUHJvamVjdEFycmF5ID0gW107XG5cblxuICAgICAgICBjb25zdCB0b2RvQXJyYXlSZWZlcmVuY2UgPSB0b2RvTW9kdWxlLnRvZG9BcnJheTtcblxuICAgICAgICBjb25zdCBjbG9uZVRvZG9BcnJheSA9IFtdO1xuICAgICAgICBcblxuICAgICAgICB0b2RvQXJyYXlSZWZlcmVuY2UuZm9yRWFjaCh0b2RvT2JqZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsb25lZFRvRG8gPSBPYmplY3QuYXNzaWduKHt9LHRvZG9PYmplY3QpO1xuICAgICAgICAgICAgY2xvbmVUb2RvQXJyYXkucHVzaChjbG9uZWRUb0RvKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvamVjdEFycmF5UmVmZXJlbmNlLmZvckVhY2gocHJvamVjdE9iamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZWRQcm9qZWN0ID0gT2JqZWN0LmFzc2lnbih7fSxwcm9qZWN0T2JqZWN0KTtcbiAgICAgICAgICAgIGNsb25lUHJvamVjdEFycmF5LnB1c2goY2xvbmVkUHJvamVjdCk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgcmV0dXJuIHtjbG9uZVByb2plY3RBcnJheSxjbG9uZVRvZG9BcnJheX1cblxuXG4gICAgfVxuXG4gICAgXG5cbiAgICAvLyBzb3J0cyB0aGUgdG8gZG9zIGFjY29yZGluZyB0byB0aGUgcHJvamVjdCBuYW1lIGlzIGhhcyBiZWVuIGFzc2lnbmVkIHRvXG4gICAgLy8gUmVuYW1lIHRoaXMgdG8gcHJvamVjdCBzb3J0ZXJcbiAgICBmdW5jdGlvbiBzb3J0QnlQcm9qZWN0TmFtZSgpe1xuXG5cbiAgICAgICAgY29uc3QgY2xvbmVQcm9qZWN0QXJyYXkgPSBjbG9uZU9iamVjdCgpLmNsb25lUHJvamVjdEFycmF5XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjbG9uZVRvZG9BcnJheSA9IGNsb25lT2JqZWN0KCkuY2xvbmVUb2RvQXJyYXlcblxuICAgICAgICBsZXQgcHJvY2Vzc2VkUHJvamVjdEFycmF5QnlOYW1lID0gW107XG5cbiAgICAgICAgY2xvbmVQcm9qZWN0QXJyYXkuZm9yRWFjaChwcm9qZWN0T2JqZWN0ID0+IHtcblxuICAgICAgICAgICAgcHJvamVjdE9iamVjdC50b2RvQ29sbGVjdGlvbiA9IFtdO1xuXG4gICAgICAgICAgICBjbG9uZVRvZG9BcnJheS5mb3JFYWNoKHRvZG9PYmplY3QgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3RPYmplY3QudGl0bGUgPT09IHRvZG9PYmplY3QucHJvamVjdCkge1xuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0T2JqZWN0LnRvZG9Db2xsZWN0aW9uLnB1c2godG9kb09iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHByb2Nlc3NlZFByb2plY3RBcnJheUJ5TmFtZS5wdXNoKHByb2plY3RPYmplY3QpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgcmV0dXJuIHtwcm9jZXNzZWRQcm9qZWN0QXJyYXlCeU5hbWV9O1xuXG4gICAgfVxuXG5cblxuXG5cblxuXG5cbiAgICBmdW5jdGlvbiBwcmlvcml0eVNvcnRlcih1bnByb2Nlc3NlZEFycmF5KXtcblxuICAgICAgICBjb25zdCBwcmlvcml0aWVzID0gWydoaWdoJywnbWVkaXVtJywnbG93J107XG5cbiAgICAgICAgY29uc3Qgb2JqZWN0c0J5UHJpb3JpdHkgPSB7aGlnaDpbXSxtZWRpdW06W10sbG93OltdfTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJpb3JpdGllcy5sZW5ndGg7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgdW5wcm9jZXNzZWRBcnJheS5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5wcmlvcml0eSA9PT0gcHJpb3JpdGllc1tpbmRleF0pe1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RzQnlQcmlvcml0eVtwcmlvcml0aWVzW2luZGV4XV0ucHVzaChvYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqZWN0c0J5UHJpb3JpdHk7XG5cblxuICAgIH1cblxuXG5cblxuICAgIGZ1bmN0aW9uIHNvcnREdWVEYXRlIChBcnJheSl7XG5cbiAgICAgICAgLy8gVXNlIHRoaXMgdG8gc29ydCBwcm9qZWN0cyBhbmQgdG9kb3NcblxuICAgICAgICAvLyBzb3J0cyBhcnJheSBpbiBhc2NlbmRpbmcgb3JkZXIgYWNjb3JkaW5nIHRvIGR1ZSBkYXRlXG4gICAgICAgIGFzY2VuZGluZ1NvcnQoQXJyYXkpO1xuXG4gICAgICAgIGNvbnN0IGR1ZVNvcnRlZEFycmF5ID0ge1xuICAgICAgICAgICAgbm90ZXM6W10sXG4gICAgICAgICAgICBvdmVyZHVlOltdLFxuICAgICAgICAgICAgZHVlOltdLFxuICAgICAgICAgICAgdXBjb21pbmc6W10sXG4gICAgICAgICAgICBjb21wbGV0ZTpbXVxuICAgICAgICB9O1xuXG4gICAgICAgIEFycmF5LmZvckVhY2gob2JqZWN0ID0+IHtcblxuXG4gICAgICAgICAgICAvLyBOb3RlcyAtIHRvIGJlIGlzb2xhdGVkICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCFvYmplY3QuZHVlRGF0ZSl7XG5cbiAgICAgICAgICAgICAgICBkdWVTb3J0ZWRBcnJheS5ub3Rlcy5wdXNoKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENvbXBsZXRlXG4gICAgICAgICAgICBpZihvYmplY3Quc3RhdHVzID09PSAnY29tcGxldGUnKXtcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGR1ZVNvcnRlZEFycmF5LmNvbXBsZXRlLnB1c2gob2JqZWN0KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3ZlcmR1ZVxuICAgICAgICAgICAgaWYoKG9iamVjdC5kdXJhdGlvbkxlZnQuZGF5TGVmdCkgPCAwKXtcblxuICAgICAgICAgICAgICAgIGR1ZVNvcnRlZEFycmF5Lm92ZXJkdWUucHVzaChvYmplY3QpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIER1ZVxuICAgICAgICAgICAgaWYgKCgob2JqZWN0LmR1cmF0aW9uTGVmdC5kYXlMZWZ0KSA8PSBvYmplY3QucmVtaW5kSW4pICYmICgob2JqZWN0LmR1cmF0aW9uTGVmdC5kYXlMZWZ0KSA+PSAwKSl7XG5cbiAgICAgICAgICAgICAgICBkdWVTb3J0ZWRBcnJheS5kdWUucHVzaChvYmplY3QpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGNvbWluZ1xuICAgICAgICAgICAgaWYoKG9iamVjdC5kdXJhdGlvbkxlZnQuZGF5TGVmdCkgPiBvYmplY3QucmVtaW5kSW4pe1xuXG4gICAgICAgICAgICAgICAgZHVlU29ydGVkQXJyYXkudXBjb21pbmcucHVzaChvYmplY3QpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkdWVTb3J0ZWRBcnJheSk7XG5cbiAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4gZHVlU29ydGVkQXJyYXk7ICAgIFxuICAgICBcblxuICAgIH1cblxuXG5cbiAgICAvLyBTb3J0cyBvYmplY3RzIGluIEFycmF5IHRvIGFzY2VuZGluZyBvcmRlciBhY2NvcmRpbmcgdG8gZHVlIGRhdGVcbiAgICBmdW5jdGlvbiBhc2NlbmRpbmdTb3J0IChBcnJheSl7XG5cbiAgICAgICAgLy8gQXNzaWduIGR1cmF0aW9uIGxlZnRcbiAgICAgICAgQXJyYXkuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0T2JqZWN0RHVlRGF0ZSA9IGludGVydmFsKG9iamVjdC5kdWVEYXRlKTtcbiAgICAgICAgICAgIG9iamVjdC5kdXJhdGlvbkxlZnQgPSBmb3JtYXRPYmplY3REdWVEYXRlO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IGRhdGVBcnJheSA9IFtdO1xuICAgICAgICBjb25zdCBzb3J0ZWRBcnJheSA9IFtdO1xuXG5cbiAgICAgICAgQXJyYXkuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICAgICAgLy8gb2JqZWN0LmR1cmF0aW9uTGVmdC5kYXlMZWZ0XG4gICAgICAgICAgICBkYXRlQXJyYXkucHVzaChvYmplY3QuZHVyYXRpb25MZWZ0LmRheUxlZnQpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRhdGVBcnJheS5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGEtYn0pO1xuXG4gICAgICAgIGRhdGVBcnJheS5mb3JFYWNoKGRhdGUgPT4ge1xuXG5cbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZSA9PT0gQXJyYXlbaW5kZXhdLmR1cmF0aW9uTGVmdC5kYXlMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRlZEFycmF5LnB1c2goQXJyYXlbaW5kZXhdKTtcblxuICAgICAgICAgICAgICAgICAgICBBcnJheS5zcGxpY2UoaW5kZXgsMSlcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgIFxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFB1c2ggc29ydGVkIGFycmF5IHRvIG9yaWdpbmFsIGFycmF5XG4gICAgICAgIHNvcnRlZEFycmF5LmZvckVhY2goc29ydGVkT2JqID0+IHtcbiAgICAgICAgICAgIEFycmF5LnB1c2goc29ydGVkT2JqKVxuICAgICAgICB9KTtcbiAgICAgICAgXG5cblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gaW50ZXJ2YWwoZGF0ZSl7XG5cbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXkgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudE1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50WWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG5cblxuXG4gICAgICAgIC8vIGNvbnN0IGZvcm1hdHRlZEN1cnJlbnREYXRlID0gW3llYXIsbW9udGgsZGF5XTtcblxuXG4gICAgICAgIC8vIFt5eXl5LG1tLGRkXVxuICAgICAgICBjb25zdCBzcGxpdE9iakRhdGUgPSBkYXRlLnNwbGl0KCctJyk7XG5cbiAgICAgICAgY29uc3QgeWVhcnNMZWZ0ID0gc3BsaXRPYmpEYXRlWzBdIC0gY3VycmVudFllYXI7XG5cbiAgICAgICAgY29uc3QgbW9udGhzTGVmdCA9IHNwbGl0T2JqRGF0ZVsxXSAtIGN1cnJlbnRNb250aDtcblxuICAgICAgICBjb25zdCBkYXlMZWZ0ID0gc3BsaXRPYmpEYXRlWzJdIC0gY3VycmVudERheTtcblxuXG4gICAgICAgIGNvbnN0IGludGVydmFsT2JqID0ge2RheUxlZnQsbW9udGhzTGVmdCx5ZWFyc0xlZnR9O1xuXG5cblxuICAgIFxuICAgICAgICByZXR1cm4gaW50ZXJ2YWxPYmpcbiAgICB9XG5cblxuXG4gICAgICAgIFxuXG4gICAgZnVuY3Rpb24gbm90ZVNvcnRlcih1bnByb2Nlc3NlZEFycmF5KXtcblxuICAgICAgICBjb25zdCBub3RlT2JqZWN0cyA9IFtdXG5cbiAgICAgICAgdW5wcm9jZXNzZWRBcnJheS5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCFvYmouZHVlRGF0ZSl7XG5cbiAgICAgICAgICAgICAgICBub3RlT2JqZWN0cy5wdXNoKG9iailcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBub3RlT2JqZWN0cztcblxuXG4gICAgfVxuXG5cblxuICAgXG5cbiAgICByZXR1cm4ge2Nsb25lT2JqZWN0LHNvcnRCeVByb2plY3ROYW1lLHByaW9yaXR5U29ydGVyLHNvcnREdWVEYXRlLG5vdGVTb3J0ZXJ9XG5cbn1cblxuY29uc3QgaW5pdGlhbGl6ZWRTb3J0VG9Eb01vZHVsZSA9IHNvcnRpbmdNb2R1bGUoKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZWRTb3J0VG9Eb01vZHVsZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG4vLyBpbXBvcnQgdG9kb01vZHVsZSBmcm9tIFwiLi9jcmVhdGUtdG9kb3NcIjtcblxuLy8gaW1wb3J0IHByb2plY3RNb2R1bGUgZnJvbSBcIi4vY3JlYXRlLXByb2plY3RzXCI7XG5cbmltcG9ydCBjcmVhdGVNYWluRE9NIGZyb20gXCIuL21haW5ET01DcmVhdGlvblwiO1xuXG5pbXBvcnQgY3JlYXRlVG9kb0RPTSBmcm9tIFwiLi9hbGxUb2RvRE9NQ3JlYXRpb25cIlxuXG5pbXBvcnQgY3JlYXRlRm9ybURPTSBmcm9tIFwiLi9mb3JtRE9NQ3JlYXRpb25cIjtcblxuaW1wb3J0IHRvZG9zVGFiT2JqZWN0IGZyb20gXCIuL2FsbFRvZG9zVGFiXCI7XG5cbmltcG9ydCBwcm9qZWNUYWJPYmplY3QgZnJvbSBcIi4vcHJvamVjdFRhYlwiO1xuXG5pbXBvcnQgbm90ZXNUYWJPYmplY3QgZnJvbSBcIi4vYWxsTm90ZXNUYWJcIjtcblxuaW1wb3J0IGRvbUFjdGlvbiBmcm9tIFwiLi9kb21BY3Rpdml0aWVzXCI7XG5cblxuXG4vLyBBbGwgbW9kdWxlcyBzaG91bGQgc3RhcnQgaGVyZVxuXG4vLyBIT01FUEFHRVxuY3JlYXRlTWFpbkRPTSgpO1xuXG4vLyBMb2FkcyB0b2RvIGZpcnN0XG5jcmVhdGVUb2RvRE9NKCk7XG5cbi8vIEF0dGFjaGVzIGFsbCBldmVudGxpc3RlbmVycyB0byBIT01FUEFHRVxuZG9tQWN0aW9uKCk7XG5cblxuXG5cblxuLy8gY29uc29sZS5sb2coJ3Rlc3QnKTtcblxuLy8gdG9kb01vZHVsZS5jcmVhdGVUb2RvKCdtYW1hYWFhJywnb29vb291dXV1JywneXlleWV5ZScsJ2FzZGFzZCcsJ3Byb2plY3QxJyk7XG5cbi8vIHRvZG9Nb2R1bGUuY3JlYXRlVG9kbygnbGFsYWxhbGFsYWxsYWxhbGxhJywnb29vb291dXV1JywneXlleWV5ZScsJ2FzZGFzZCcsJ2dhZ2FnYWdhZ2EnLCd3YWRhd2RhJywncHJvamVjdDEnKTtcblxuXG4vLyBjb25zb2xlLmxvZyh0b2RvTW9kdWxlLnRvZG9BcnJheSk7XG5cbi8vIGNvbnNvbGUubG9nKHByb2plY3RNb2R1bGUucHJvamVjdEFycmF5KTtcblxuLy8gY29uc29sZS5sb2coc29ydGluZ01vZHVsZS5zb3J0QnlQcm9qZWN0TmFtZSgpKTtcblxuXG5cbi8vIERBVEUgVEVTVCEhIVxuXG4vLyBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvRGF0ZScpXG5cbi8vIGNvbnN0IHRlc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVzdGluZycpXG5cbi8vIHRlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4vLyAgICAgY29uc29sZS5sb2codG9kb0RhdGUudmFsdWUpO1xuXG4vLyAgICAgY29uc3QgZm9ybWF0dGVkRHVlRGF0ZU9mT2JqZWN0ID0gdG9kb0RhdGUudmFsdWUuc3BsaXQoXCItXCIpO1xuXG4vLyAgICAgY29uc29sZS5sb2coZm9ybWF0dGVkRHVlRGF0ZU9mT2JqZWN0KTtcblxuLy8gfSlcblxuXG5cblxuXG4vLyBjb25zb2xlLmxvZyhgJHt5ZWFyfS0ke21vbnRofS0ke2RheX0gPSBjcmVhdGVkYClcblxuXG5cblxuXG5cblxuLy8gc29ydGluZ01vZHVsZS5zb3J0QnlQcmlvcml0eSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9