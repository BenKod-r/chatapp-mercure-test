(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/store */ "./assets/js/store/store.js");
/* harmony import */ var _components_App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/App.vue */ "./assets/js/components/App.vue");
/* harmony import */ var _components_Right_Blank__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Right/Blank */ "./assets/js/components/Right/Blank.vue");
/* harmony import */ var _components_Right_Right__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Right/Right */ "./assets/js/components/Right/Right.vue");








vue__WEBPACK_IMPORTED_MODULE_2__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_3__["default"]);
var routes = [{
  name: 'blank',
  path: '/',
  component: _components_Right_Blank__WEBPACK_IMPORTED_MODULE_6__["default"]
}, {
  name: 'conversation',
  path: '/conversation/:id',
  component: _components_Right_Right__WEBPACK_IMPORTED_MODULE_7__["default"]
}];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_3__["default"]({
  mode: "abstract",
  routes: routes
});
_store_store__WEBPACK_IMPORTED_MODULE_4__["default"].commit("SET_USERNAME", document.querySelector('#app').dataset.username);
new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
  store: _store_store__WEBPACK_IMPORTED_MODULE_4__["default"],
  router: router,
  render: function render(h) {
    return h(_components_App_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);
  }
}).$mount('#app');
router.replace('/');

/***/ }),

/***/ "./assets/js/components/App.vue":
/*!**************************************!*\
  !*** ./assets/js/components/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0dd47e10& */ "./assets/js/components/App.vue?vue&type=template&id=0dd47e10&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./assets/js/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/App.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./assets/js/components/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/App.vue?vue&type=template&id=0dd47e10&":
/*!*********************************************************************!*\
  !*** ./assets/js/components/App.vue?vue&type=template&id=0dd47e10& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=0dd47e10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/App.vue?vue&type=template&id=0dd47e10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Left/Conversation.vue":
/*!****************************************************!*\
  !*** ./assets/js/components/Left/Conversation.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Conversation_vue_vue_type_template_id_1139f05a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Conversation.vue?vue&type=template&id=1139f05a& */ "./assets/js/components/Left/Conversation.vue?vue&type=template&id=1139f05a&");
/* harmony import */ var _Conversation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Conversation.vue?vue&type=script&lang=js& */ "./assets/js/components/Left/Conversation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Conversation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Conversation_vue_vue_type_template_id_1139f05a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Conversation_vue_vue_type_template_id_1139f05a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Left/Conversation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Left/Conversation.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./assets/js/components/Left/Conversation.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Conversation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Left/Conversation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Left/Conversation.vue?vue&type=template&id=1139f05a&":
/*!***********************************************************************************!*\
  !*** ./assets/js/components/Left/Conversation.vue?vue&type=template&id=1139f05a& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_template_id_1139f05a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Conversation.vue?vue&type=template&id=1139f05a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Left/Conversation.vue?vue&type=template&id=1139f05a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_template_id_1139f05a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_template_id_1139f05a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Left/Left.vue":
/*!********************************************!*\
  !*** ./assets/js/components/Left/Left.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Left_vue_vue_type_template_id_51f8fe44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Left.vue?vue&type=template&id=51f8fe44& */ "./assets/js/components/Left/Left.vue?vue&type=template&id=51f8fe44&");
/* harmony import */ var _Left_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Left.vue?vue&type=script&lang=js& */ "./assets/js/components/Left/Left.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Left_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Left_vue_vue_type_template_id_51f8fe44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Left_vue_vue_type_template_id_51f8fe44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Left/Left.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Left/Left.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./assets/js/components/Left/Left.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Left_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Left.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Left/Left.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Left_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Left/Left.vue?vue&type=template&id=51f8fe44&":
/*!***************************************************************************!*\
  !*** ./assets/js/components/Left/Left.vue?vue&type=template&id=51f8fe44& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Left_vue_vue_type_template_id_51f8fe44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Left.vue?vue&type=template&id=51f8fe44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Left/Left.vue?vue&type=template&id=51f8fe44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Left_vue_vue_type_template_id_51f8fe44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Left_vue_vue_type_template_id_51f8fe44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Right/Blank.vue":
/*!**********************************************!*\
  !*** ./assets/js/components/Right/Blank.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blank_vue_vue_type_template_id_7794b070___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blank.vue?vue&type=template&id=7794b070& */ "./assets/js/components/Right/Blank.vue?vue&type=template&id=7794b070&");
/* harmony import */ var _Blank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blank.vue?vue&type=script&lang=js& */ "./assets/js/components/Right/Blank.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Blank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Blank_vue_vue_type_template_id_7794b070___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Blank_vue_vue_type_template_id_7794b070___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Right/Blank.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Right/Blank.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./assets/js/components/Right/Blank.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Blank.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Blank.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Right/Blank.vue?vue&type=template&id=7794b070&":
/*!*****************************************************************************!*\
  !*** ./assets/js/components/Right/Blank.vue?vue&type=template&id=7794b070& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blank_vue_vue_type_template_id_7794b070___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Blank.vue?vue&type=template&id=7794b070& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Blank.vue?vue&type=template&id=7794b070&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blank_vue_vue_type_template_id_7794b070___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blank_vue_vue_type_template_id_7794b070___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Right/Input.vue":
/*!**********************************************!*\
  !*** ./assets/js/components/Right/Input.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input_vue_vue_type_template_id_7b244be6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input.vue?vue&type=template&id=7b244be6& */ "./assets/js/components/Right/Input.vue?vue&type=template&id=7b244be6&");
/* harmony import */ var _Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.vue?vue&type=script&lang=js& */ "./assets/js/components/Right/Input.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Input_vue_vue_type_template_id_7b244be6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Input_vue_vue_type_template_id_7b244be6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Right/Input.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Right/Input.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./assets/js/components/Right/Input.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Input.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Input.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Right/Input.vue?vue&type=template&id=7b244be6&":
/*!*****************************************************************************!*\
  !*** ./assets/js/components/Right/Input.vue?vue&type=template&id=7b244be6& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_7b244be6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Input.vue?vue&type=template&id=7b244be6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Input.vue?vue&type=template&id=7b244be6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_7b244be6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_7b244be6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Right/Message.vue":
/*!************************************************!*\
  !*** ./assets/js/components/Right/Message.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Message_vue_vue_type_template_id_6067fca3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message.vue?vue&type=template&id=6067fca3& */ "./assets/js/components/Right/Message.vue?vue&type=template&id=6067fca3&");
/* harmony import */ var _Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message.vue?vue&type=script&lang=js& */ "./assets/js/components/Right/Message.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Message_vue_vue_type_template_id_6067fca3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Message_vue_vue_type_template_id_6067fca3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Right/Message.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Right/Message.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./assets/js/components/Right/Message.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Message.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Message.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Right/Message.vue?vue&type=template&id=6067fca3&":
/*!*******************************************************************************!*\
  !*** ./assets/js/components/Right/Message.vue?vue&type=template&id=6067fca3& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_6067fca3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Message.vue?vue&type=template&id=6067fca3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Message.vue?vue&type=template&id=6067fca3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_6067fca3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_6067fca3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Right/Right.vue":
/*!**********************************************!*\
  !*** ./assets/js/components/Right/Right.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Right_vue_vue_type_template_id_90418590___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Right.vue?vue&type=template&id=90418590& */ "./assets/js/components/Right/Right.vue?vue&type=template&id=90418590&");
/* harmony import */ var _Right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Right.vue?vue&type=script&lang=js& */ "./assets/js/components/Right/Right.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Right_vue_vue_type_template_id_90418590___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Right_vue_vue_type_template_id_90418590___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Right/Right.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Right/Right.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./assets/js/components/Right/Right.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Right.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Right.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Right/Right.vue?vue&type=template&id=90418590&":
/*!*****************************************************************************!*\
  !*** ./assets/js/components/Right/Right.vue?vue&type=template&id=90418590& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Right_vue_vue_type_template_id_90418590___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Right.vue?vue&type=template&id=90418590& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Right.vue?vue&type=template&id=90418590&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Right_vue_vue_type_template_id_90418590___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Right_vue_vue_type_template_id_90418590___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/store/modules/conversation.js":
/*!*************************************************!*\
  !*** ./assets/js/store/modules/conversation.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");







/* harmony default export */ __webpack_exports__["default"] = ({
  state: {
    conversations: [],
    hubUrl: null
  },
  getters: {
    CONVERSATIONS: function CONVERSATIONS(state) {
      return state.conversations.sort(function (a, b) {
        return a.createdAt < b.createdAt;
      });
    },
    MESSAGES: function MESSAGES(state) {
      return function (conversationId) {
        return state.conversations.find(function (i) {
          return i.conversationId === conversationId;
        }).messages;
      };
    },
    HUBURL: function HUBURL(state) {
      return state.hubUrl;
    }
  },
  mutations: {
    SET_CONVERSATIONS: function SET_CONVERSATIONS(state, payload) {
      state.conversations = payload;
    },
    SET_MESSAGES: function SET_MESSAGES(state, _ref) {
      var conversationId = _ref.conversationId,
          payload = _ref.payload;
      vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(state.conversations.find(function (i) {
        return i.conversationId === conversationId;
      }), 'messages', payload);
    },
    ADD_MESSAGE: function ADD_MESSAGE(state, _ref2) {
      var conversationId = _ref2.conversationId,
          payload = _ref2.payload;
      state.conversations.find(function (i) {
        return i.conversationId === conversationId;
      }).messages.push(payload);
    },
    SET_CONVERSATION_LAST_MESSAGE: function SET_CONVERSATION_LAST_MESSAGE(state, _ref3) {
      var conversationId = _ref3.conversationId,
          payload = _ref3.payload;
      var rs = state.conversations.find(function (i) {
        return i.conversationId === conversationId;
      });
      rs.content = payload.content;
      rs.createdAt = payload.createdAt;
    },
    SET_HUBURL: function SET_HUBURL(state, payload) {
      return state.hubUrl = payload;
    },
    UPDATE_CONVERSATIONS: function UPDATE_CONVERSATIONS(state, payload) {
      var rs = state.conversations.find(function (i) {
        return i.conversationId === payload.conversation.id;
      });
      rs.content = payload.content;
      rs.createdAt = payload.createdAt;
    }
  },
  actions: {
    GET_CONVERSATIONS: function GET_CONVERSATIONS(_ref4) {
      var commit = _ref4.commit;
      return fetch("/conversations").then(function (result) {
        var hubUrl = result.headers.get('Link').match(/<([^>]+)>;\s+rel=(?:mercure|"[^"]*mercure[^"]*")/)[1];
        commit("SET_HUBURL", hubUrl);
        return result.json();
      }).then(function (result) {
        commit("SET_CONVERSATIONS", result);
      });
    },
    GET_MESSAGES: function GET_MESSAGES(_ref5, conversationId) {
      var commit = _ref5.commit,
          getters = _ref5.getters;

      if (getters.MESSAGES(conversationId) === undefined) {
        return fetch("/messages/".concat(conversationId)).then(function (result) {
          return result.json();
        }).then(function (result) {
          commit("SET_MESSAGES", {
            conversationId: conversationId,
            payload: result
          });
        });
      }
    },
    POST_MESSAGE: function POST_MESSAGE(_ref6, _ref7) {
      var commit = _ref6.commit;
      var conversationId = _ref7.conversationId,
          content = _ref7.content;
      var formData = new FormData();
      formData.append('content', content);
      return fetch("/messages/".concat(conversationId), {
        method: "POST",
        body: formData
      }).then(function (result) {
        return result.json();
      }).then(function (result) {
        commit("ADD_MESSAGE", {
          conversationId: conversationId,
          payload: result
        });
        commit("SET_CONVERSATION_LAST_MESSAGE", {
          conversationId: conversationId,
          payload: result
        });
      });
    }
  }
});

/***/ }),

/***/ "./assets/js/store/modules/user.js":
/*!*****************************************!*\
  !*** ./assets/js/store/modules/user.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  state: {
    username: null
  },
  getters: {
    USERNAME: function USERNAME(state) {
      return state.username;
    }
  },
  mutations: {
    SET_USERNAME: function SET_USERNAME(state, payload) {
      return state.username = payload;
    }
  },
  actions: {}
});

/***/ }),

/***/ "./assets/js/store/store.js":
/*!**********************************!*\
  !*** ./assets/js/store/store.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _modules_conversation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/conversation */ "./assets/js/store/modules/conversation.js");
/* harmony import */ var _modules_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/user */ "./assets/js/store/modules/user.js");


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  modules: {
    conversation: _modules_conversation__WEBPACK_IMPORTED_MODULE_2__["default"],
    user: _modules_user__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Left_Left__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Left/Left */ "./assets/js/components/Left/Left.vue");
/* harmony import */ var _Right_Right__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Right/Right */ "./assets/js/components/Right/Right.vue");
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Left: _Left_Left__WEBPACK_IMPORTED_MODULE_0__["default"],
    Right: _Right_Right__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Left/Conversation.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Left/Conversation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    conversation: Object
  },
  computed: {
    date: function date() {
      return new Date(this.conversation.createdAt).toLocaleString();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Left/Left.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Left/Left.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Conversation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Conversation */ "./assets/js/components/Left/Conversation.vue");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Conversation: _Conversation__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapGetters"])(["CONVERSATIONS", "HUBURL", "USERNAME"])),
  methods: {
    updateConversations: function updateConversations(data) {
      this.$store.commit("UPDATE_CONVERSATIONS", data);
    }
  },
  mounted: function mounted() {
    var _this = this;

    var vm = this;
    this.$store.dispatch("GET_CONVERSATIONS").then(function () {
      var url = new URL(_this.HUBURL);
      url.searchParams.append('topic', "/conversations/".concat(_this.USERNAME));
      var eventSource = new EventSource(url, {
        withCredentials: true
      });

      eventSource.onmessage = function (event) {
        vm.updateConversations(JSON.parse(event.data));
      };
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Blank.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Right/Blank.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Input.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Right/Input.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      content: ''
    };
  },
  methods: {
    sendMessage: function sendMessage() {
      var _this = this;

      this.$store.dispatch("POST_MESSAGE", {
        conversationId: this.$route.params.id,
        content: this.content
      }).then(function () {
        _this.content = '';
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Message.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Right/Message.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    message: Object
  },
  computed: {
    date: function date() {
      return new Date(this.message.createdAt).toLocaleTimeString();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Right.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Right/Right.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Message */ "./assets/js/components/Right/Message.vue");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Input */ "./assets/js/components/Right/Input.vue");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      eventSource: null
    };
  },
  components: {
    Message: _Message__WEBPACK_IMPORTED_MODULE_7__["default"],
    Input: _Input__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapGetters"])(["HUBURL"])), {}, {
    MESSAGES: function MESSAGES() {
      return this.$store.getters.MESSAGES(this.$route.params.id);
    }
  }),
  methods: {
    scrollDown: function scrollDown() {
      this.$refs.messagesBody.scrollTop = this.$refs.messagesBody.scrollHeight;
    },
    addMessage: function addMessage(data) {
      this.$store.commit("ADD_MESSAGE", {
        conversationId: this.$route.params.id,
        payload: data
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    var vm = this;
    this.$store.dispatch("GET_MESSAGES", this.$route.params.id).then(function () {
      _this.scrollDown();

      if (_this.eventSource === null) {
        var url = new URL(_this.HUBURL);
        url.searchParams.append('topic', "/conversations/".concat(_this.$route.params.id));
        _this.eventSource = new EventSource(url, {
          withCredentials: true
        });

        _this.eventSource.onmessage = function (event) {
          vm.addMessage(JSON.parse(event.data));
        };
      }
    });
  },
  watch: {
    MESSAGES: function MESSAGES(val) {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.scrollDown();
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.eventSource instanceof EventSource) {
      this.eventSource.close();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/App.vue?vue&type=template&id=0dd47e10&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/App.vue?vue&type=template&id=0dd47e10& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c(
      "div",
      { staticClass: "row justify-content-center" },
      [
        _c("Left"),
        _vm._v(" "),
        _c("router-view", { key: _vm.$route.fullPath })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Left/Conversation.vue?vue&type=template&id=1139f05a&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Left/Conversation.vue?vue&type=template&id=1139f05a& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "router-link",
    {
      staticClass: "contacts",
      attrs: {
        to: {
          name: "conversation",
          params: { id: _vm.conversation.conversationId }
        }
      }
    },
    [
      _c("li", { staticClass: "active" }, [
        _c("div", { staticClass: "d-flex bd-highlight" }, [
          _c("div", { staticClass: "img_cont" }, [
            _c("img", {
              staticClass: "rounded-circle user_img",
              attrs: {
                src:
                  "https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "online_icon" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "user_info" }, [
            _c("span", [_vm._v(_vm._s(_vm.conversation.username))]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(_vm.date))]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(_vm.conversation.content))])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Left/Left.vue?vue&type=template&id=51f8fe44&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Left/Left.vue?vue&type=template&id=51f8fe44& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-4 col-xl-3 chat" }, [
    _c("div", { staticClass: "card mb-sm-3 mb-md-0 contacts_card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body contacts_body" },
        [
          _vm._l(_vm.CONVERSATIONS, function(conversation, index, key) {
            return [
              _c("Conversation", { attrs: { conversation: conversation } })
            ]
          })
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card-footer" })
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h5", { staticClass: "text-white" }, [_vm._v("Recents")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Blank.vue?vue&type=template&id=7794b070&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Right/Blank.vue?vue&type=template&id=7794b070& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-8 col-xl-6 chat" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body msg_card_body" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Input.vue?vue&type=template&id=7b244be6&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Right/Input.vue?vue&type=template&id=7b244be6& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("form", { staticClass: "card-footer", attrs: { action: "" } }, [
    _c("div", { staticClass: "input-group" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.content,
            expression: "content"
          }
        ],
        staticClass: "form-control type_msg",
        attrs: {
          type: "text",
          placeholder: "Type your message...",
          "aria-describedby": "button-addon2"
        },
        domProps: { value: _vm.content },
        on: {
          keyup: function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            return _vm.sendMessage($event)
          },
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.content = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _vm._m(1)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("span", { staticClass: "input-group-text attach_btn" }, [
        _c("i", { staticClass: "fas fa-paperclip" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "button",
        { staticClass: "input-group-text send_btn", attrs: { type: "submit" } },
        [_c("i", { staticClass: "fas fa-location-arrow" })]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Message.vue?vue&type=template&id=6067fca3&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Right/Message.vue?vue&type=template&id=6067fca3& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "d-flex justify-content-start mb-4",
      class: [
        _vm.message.mine
          ? "d-flex justify-content-end mb-4"
          : "d-flex justify-content-start mb-4"
      ]
    },
    [
      !_vm.message.mine
        ? _c("div", { staticClass: "img_cont_msg" }, [
            _c("img", {
              staticClass: "rounded-circle user_img_msg",
              attrs: {
                src:
                  "https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
              }
            })
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.message.mine
        ? _c("div", { staticClass: "msg_cotainer" }, [
            _vm._v("\n    " + _vm._s(_vm.message.content) + "\n    "),
            _c("span", { staticClass: "msg_time" }, [_vm._v(_vm._s(_vm.date))])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.message.mine
        ? _c("div", { staticClass: "msg_cotainer_send" }, [
            _vm._v("\n    " + _vm._s(_vm.message.content) + "\n    "),
            _c("span", { staticClass: "msg_time_send" }, [
              _vm._v(_vm._s(_vm.date))
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.message.mine
        ? _c("div", { staticClass: "img_cont_msg" }, [
            _c("img", {
              staticClass: "rounded-circle user_img_msg",
              attrs: {
                src:
                  "data:image/jpeg;base64,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"
              }
            })
          ])
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Right.vue?vue&type=template&id=90418590&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Right/Right.vue?vue&type=template&id=90418590& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-8 col-xl-6 chat" }, [
    _c(
      "div",
      { staticClass: "card" },
      [
        _c(
          "div",
          { ref: "messagesBody", staticClass: "card-body msg_card_body" },
          [
            _vm._l(_vm.MESSAGES, function(message, index, key) {
              return [_c("Message", { attrs: { message: message } })]
            })
          ],
          2
        ),
        _vm._v(" "),
        _c("Input")
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT9iZWRhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC52dWU/MDk2OCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9MZWZ0L0NvbnZlcnNhdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGVmdC9Db252ZXJzYXRpb24udnVlPzhjOGEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGVmdC9Db252ZXJzYXRpb24udnVlP2FjODAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGVmdC9MZWZ0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9MZWZ0L0xlZnQudnVlPzg2ZDQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGVmdC9MZWZ0LnZ1ZT82ZTE4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JpZ2h0L0JsYW5rLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9CbGFuay52dWU/N2NlZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9CbGFuay52dWU/NmZiZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9JbnB1dC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUmlnaHQvSW5wdXQudnVlP2Q5ZmYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUmlnaHQvSW5wdXQudnVlP2MxYjciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUmlnaHQvTWVzc2FnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUmlnaHQvTWVzc2FnZS52dWU/N2Q5ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9NZXNzYWdlLnZ1ZT8wNjAxIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JpZ2h0L1JpZ2h0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9SaWdodC52dWU/OWRmYyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9SaWdodC52dWU/MjQxNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9jb252ZXJzYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xlZnQvQ29udmVyc2F0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGVmdC9MZWZ0LnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvUmlnaHQvQmxhbmsudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9JbnB1dC52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JpZ2h0L01lc3NhZ2UudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9SaWdodC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT9hN2JlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xlZnQvQ29udmVyc2F0aW9uLnZ1ZT81NWYyIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xlZnQvTGVmdC52dWU/ZDFlYyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9CbGFuay52dWU/NDg5MyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9JbnB1dC52dWU/MTE4NSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9NZXNzYWdlLnZ1ZT9iZWRhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JpZ2h0L1JpZ2h0LnZ1ZT85MTJjIl0sIm5hbWVzIjpbIlZ1ZSIsInVzZSIsIlZ1ZVJvdXRlciIsInJvdXRlcyIsIm5hbWUiLCJwYXRoIiwiY29tcG9uZW50IiwiQmxhbmsiLCJSaWdodCIsInJvdXRlciIsIm1vZGUiLCJzdG9yZSIsImNvbW1pdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRhdGFzZXQiLCJ1c2VybmFtZSIsInJlbmRlciIsImgiLCJBcHAiLCIkbW91bnQiLCJyZXBsYWNlIiwic3RhdGUiLCJjb252ZXJzYXRpb25zIiwiaHViVXJsIiwiZ2V0dGVycyIsIkNPTlZFUlNBVElPTlMiLCJzb3J0IiwiYSIsImIiLCJjcmVhdGVkQXQiLCJNRVNTQUdFUyIsImNvbnZlcnNhdGlvbklkIiwiZmluZCIsImkiLCJtZXNzYWdlcyIsIkhVQlVSTCIsIm11dGF0aW9ucyIsIlNFVF9DT05WRVJTQVRJT05TIiwicGF5bG9hZCIsIlNFVF9NRVNTQUdFUyIsInNldCIsIkFERF9NRVNTQUdFIiwicHVzaCIsIlNFVF9DT05WRVJTQVRJT05fTEFTVF9NRVNTQUdFIiwicnMiLCJjb250ZW50IiwiU0VUX0hVQlVSTCIsIlVQREFURV9DT05WRVJTQVRJT05TIiwiY29udmVyc2F0aW9uIiwiaWQiLCJhY3Rpb25zIiwiR0VUX0NPTlZFUlNBVElPTlMiLCJmZXRjaCIsInRoZW4iLCJyZXN1bHQiLCJoZWFkZXJzIiwiZ2V0IiwibWF0Y2giLCJqc29uIiwiR0VUX01FU1NBR0VTIiwidW5kZWZpbmVkIiwiUE9TVF9NRVNTQUdFIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm1ldGhvZCIsImJvZHkiLCJVU0VSTkFNRSIsIlNFVF9VU0VSTkFNRSIsIlZ1ZXgiLCJTdG9yZSIsIm1vZHVsZXMiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBQSwyQ0FBRyxDQUFDQyxHQUFKLENBQVFDLGtEQUFSO0FBRUEsSUFBTUMsTUFBTSxHQUFHLENBQ1g7QUFDSUMsTUFBSSxFQUFFLE9BRFY7QUFFSUMsTUFBSSxFQUFFLEdBRlY7QUFHSUMsV0FBUyxFQUFFQywrREFBS0E7QUFIcEIsQ0FEVyxFQU1YO0FBQ0lILE1BQUksRUFBRSxjQURWO0FBRUlDLE1BQUksRUFBRSxtQkFGVjtBQUdJQyxXQUFTLEVBQUVFLCtEQUFLQTtBQUhwQixDQU5XLENBQWY7QUFhQSxJQUFNQyxNQUFNLEdBQUcsSUFBSVAsa0RBQUosQ0FBYztBQUN6QlEsTUFBSSxFQUFFLFVBRG1CO0FBRXpCUCxRQUFNLEVBQU5BO0FBRnlCLENBQWQsQ0FBZjtBQUtBUSxvREFBSyxDQUFDQyxNQUFOLENBQWEsY0FBYixFQUE2QkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLEVBQStCQyxPQUEvQixDQUF1Q0MsUUFBcEU7QUFFQSxJQUFJaEIsMkNBQUosQ0FBUTtBQUNKVyxPQUFLLEVBQUxBLG9EQURJO0FBRUpGLFFBQU0sRUFBTkEsTUFGSTtBQUdKUSxRQUFNLEVBQUUsZ0JBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLDJEQUFELENBQUw7QUFBQTtBQUhMLENBQVIsRUFJR0MsTUFKSCxDQUlVLE1BSlY7QUFNQVgsTUFBTSxDQUFDWSxPQUFQLENBQWUsR0FBZixFOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQUE7QUFBa0Y7QUFDM0I7QUFDTDs7O0FB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QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUNBQW1DO0FBQ3hEO0FBQ0Esd0JBQXdCLCtCQUErQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOEJBQThCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3Q0FBd0M7QUFDNUQ7QUFDQTtBQUNBLE9BQU8sc0JBQXNCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOERBQThEO0FBQ3pFO0FBQ0E7QUFDQSxxQ0FBcUMsU0FBUyxtQkFBbUIsRUFBRTtBQUNuRSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vc3RvcmUvc3RvcmVcIjtcblxuaW1wb3J0IEFwcCBmcm9tIFwiLi9jb21wb25lbnRzL0FwcC52dWVcIjtcbmltcG9ydCBCbGFuayBmcm9tIFwiLi9jb21wb25lbnRzL1JpZ2h0L0JsYW5rXCI7XG5pbXBvcnQgUmlnaHQgZnJvbSBcIi4vY29tcG9uZW50cy9SaWdodC9SaWdodFwiO1xuXG5WdWUudXNlKFZ1ZVJvdXRlcilcblxuY29uc3Qgcm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ2JsYW5rJyxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICBjb21wb25lbnQ6IEJsYW5rXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdjb252ZXJzYXRpb24nLFxuICAgICAgICBwYXRoOiAnL2NvbnZlcnNhdGlvbi86aWQnLFxuICAgICAgICBjb21wb25lbnQ6IFJpZ2h0XG4gICAgfVxuXTtcblxuY29uc3Qgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gICAgbW9kZTogXCJhYnN0cmFjdFwiLFxuICAgIHJvdXRlc1xufSlcblxuc3RvcmUuY29tbWl0KFwiU0VUX1VTRVJOQU1FXCIsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKS5kYXRhc2V0LnVzZXJuYW1lKTtcblxubmV3IFZ1ZSh7XG4gICAgc3RvcmUsXG4gICAgcm91dGVyLFxuICAgIHJlbmRlcjogaCA9PiBoKEFwcClcbn0pLiRtb3VudCgnI2FwcCcpXG5cbnJvdXRlci5yZXBsYWNlKCcvJykiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGRkNDdlMTAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvYmVua29kL21lcmN1cmUtY2hhdC10dXRvcmlhbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwZGQ0N2UxMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwZGQ0N2UxMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwZGQ0N2UxMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZGQ0N2UxMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwZGQ0N2UxMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGRkNDdlMTAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NvbnZlcnNhdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTEzOWYwNWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29udmVyc2F0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ29udmVyc2F0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvYmVua29kL21lcmN1cmUtY2hhdC10dXRvcmlhbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxMTM5ZjA1YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxMTM5ZjA1YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxMTM5ZjA1YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29udmVyc2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMTM5ZjA1YSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxMTM5ZjA1YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvTGVmdC9Db252ZXJzYXRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db252ZXJzYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbnZlcnNhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29udmVyc2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMTM5ZjA1YSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTGVmdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTFmOGZlNDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTGVmdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xlZnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9iZW5rb2QvbWVyY3VyZS1jaGF0LXR1dG9yaWFsL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzUxZjhmZTQ0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUxZjhmZTQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUxZjhmZTQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9MZWZ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MWY4ZmU0NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MWY4ZmU0NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvTGVmdC9MZWZ0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGVmdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGVmdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGVmdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTFmOGZlNDQmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0JsYW5rLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Nzk0YjA3MCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9CbGFuay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0JsYW5rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvYmVua29kL21lcmN1cmUtY2hhdC10dXRvcmlhbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3Nzk0YjA3MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3Nzk0YjA3MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3Nzk0YjA3MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQmxhbmsudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3OTRiMDcwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc3OTRiMDcwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9CbGFuay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0JsYW5rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CbGFuay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmxhbmsudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3OTRiMDcwJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JbnB1dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2IyNDRiZTYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5wdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2JlbmtvZC9tZXJjdXJlLWNoYXQtdHV0b3JpYWwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2IyNDRiZTYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2IyNDRiZTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2IyNDRiZTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0lucHV0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YjI0NGJlNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3YjI0NGJlNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvUmlnaHQvSW5wdXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5wdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0lucHV0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YjI0NGJlNiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWVzc2FnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjA2N2ZjYTMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWVzc2FnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9iZW5rb2QvbWVyY3VyZS1jaGF0LXR1dG9yaWFsL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzYwNjdmY2EzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzYwNjdmY2EzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzYwNjdmY2EzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NZXNzYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MDY3ZmNhMyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MDY3ZmNhMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvUmlnaHQvTWVzc2FnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYwNjdmY2EzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9SaWdodC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTA0MTg1OTAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmlnaHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SaWdodC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2JlbmtvZC9tZXJjdXJlLWNoYXQtdHV0b3JpYWwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOTA0MTg1OTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTA0MTg1OTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTA0MTg1OTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1JpZ2h0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MDQxODU5MCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5MDQxODU5MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvUmlnaHQvUmlnaHQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SaWdodC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmlnaHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JpZ2h0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MDQxODU5MCZcIiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHN0YXRlOiB7XG4gICAgICAgIGNvbnZlcnNhdGlvbnM6IFtdLFxuICAgICAgICBodWJVcmw6IG51bGxcbiAgICB9LFxuICAgIGdldHRlcnM6IHtcbiAgICAgICAgQ09OVkVSU0FUSU9OUzogc3RhdGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmNvbnZlcnNhdGlvbnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLmNyZWF0ZWRBdCA8IGIuY3JlYXRlZEF0O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgTUVTU0FHRVM6IHN0YXRlID0+IGNvbnZlcnNhdGlvbklkID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5jb252ZXJzYXRpb25zLmZpbmQoaSA9PiBpLmNvbnZlcnNhdGlvbklkID09PSBjb252ZXJzYXRpb25JZCkubWVzc2FnZXNcbiAgICAgICAgfSxcbiAgICAgICAgSFVCVVJMOiBzdGF0ZSA9PiBzdGF0ZS5odWJVcmxcbiAgICB9LFxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBTRVRfQ09OVkVSU0FUSU9OUzogKHN0YXRlLCBwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5jb252ZXJzYXRpb25zID0gcGF5bG9hZFxuICAgICAgICB9LFxuICAgICAgICBTRVRfTUVTU0FHRVM6IChzdGF0ZSwge2NvbnZlcnNhdGlvbklkLCBwYXlsb2FkfSkgPT4ge1xuICAgICAgICAgICAgVnVlLnNldChcbiAgICAgICAgICAgICAgICBzdGF0ZS5jb252ZXJzYXRpb25zLmZpbmQoaSA9PiBpLmNvbnZlcnNhdGlvbklkID09PSBjb252ZXJzYXRpb25JZCksXG4gICAgICAgICAgICAgICAgJ21lc3NhZ2VzJyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkXG4gICAgICAgICAgICApXG4gICAgICAgIH0sXG4gICAgICAgIEFERF9NRVNTQUdFOiAoc3RhdGUsIHtjb252ZXJzYXRpb25JZCwgcGF5bG9hZH0pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLmNvbnZlcnNhdGlvbnMuZmluZChpID0+IGkuY29udmVyc2F0aW9uSWQgPT09IGNvbnZlcnNhdGlvbklkKS5tZXNzYWdlcy5wdXNoKHBheWxvYWQpXG4gICAgICAgIH0sXG4gICAgICAgIFNFVF9DT05WRVJTQVRJT05fTEFTVF9NRVNTQUdFOiAoc3RhdGUsIHtjb252ZXJzYXRpb25JZCwgcGF5bG9hZH0pID0+IHtcbiAgICAgICAgICAgIGxldCBycyA9IHN0YXRlLmNvbnZlcnNhdGlvbnMuZmluZChpID0+IGkuY29udmVyc2F0aW9uSWQgPT09IGNvbnZlcnNhdGlvbklkKTtcbiAgICAgICAgICAgIHJzLmNvbnRlbnQgPSBwYXlsb2FkLmNvbnRlbnQ7XG4gICAgICAgICAgICBycy5jcmVhdGVkQXQgPSBwYXlsb2FkLmNyZWF0ZWRBdDtcbiAgICAgICAgfSxcbiAgICAgICAgU0VUX0hVQlVSTDogKHN0YXRlLCBwYXlsb2FkKSA9PiBzdGF0ZS5odWJVcmwgPSBwYXlsb2FkLFxuICAgICAgICBVUERBVEVfQ09OVkVSU0FUSU9OUzogKHN0YXRlLCBwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICBsZXQgcnMgPSBzdGF0ZS5jb252ZXJzYXRpb25zLmZpbmQoaSA9PiBpLmNvbnZlcnNhdGlvbklkID09PSBwYXlsb2FkLmNvbnZlcnNhdGlvbi5pZCk7XG4gICAgICAgICAgICBycy5jb250ZW50ID0gcGF5bG9hZC5jb250ZW50O1xuICAgICAgICAgICAgcnMuY3JlYXRlZEF0ID0gcGF5bG9hZC5jcmVhdGVkQXQ7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgR0VUX0NPTlZFUlNBVElPTlM6ICh7Y29tbWl0fSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKGAvY29udmVyc2F0aW9uc2ApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaHViVXJsID0gcmVzdWx0LmhlYWRlcnMuZ2V0KCdMaW5rJykubWF0Y2goLzwoW14+XSspPjtcXHMrcmVsPSg/Om1lcmN1cmV8XCJbXlwiXSptZXJjdXJlW15cIl0qXCIpLylbMV1cbiAgICAgICAgICAgICAgICAgICAgY29tbWl0KFwiU0VUX0hVQlVSTFwiLCBodWJVcmwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuanNvbigpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1pdChcIlNFVF9DT05WRVJTQVRJT05TXCIsIHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBHRVRfTUVTU0FHRVM6ICh7Y29tbWl0LCBnZXR0ZXJzfSwgY29udmVyc2F0aW9uSWQpID0+IHtcbiAgICAgICAgICAgIGlmIChnZXR0ZXJzLk1FU1NBR0VTKGNvbnZlcnNhdGlvbklkKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoKGAvbWVzc2FnZXMvJHtjb252ZXJzYXRpb25JZH1gKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gcmVzdWx0Lmpzb24oKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWl0KFwiU0VUX01FU1NBR0VTXCIsIHtjb252ZXJzYXRpb25JZCwgcGF5bG9hZDogcmVzdWx0fSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcbiAgICAgICAgUE9TVF9NRVNTQUdFOiAoe2NvbW1pdH0sIHtjb252ZXJzYXRpb25JZCwgY29udGVudH0pID0+IHtcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdjb250ZW50JywgY29udGVudCk7XG5cbiAgICAgICAgICAgIHJldHVybiBmZXRjaChgL21lc3NhZ2VzLyR7Y29udmVyc2F0aW9uSWR9YCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb21taXQoXCJBRERfTUVTU0FHRVwiLCB7Y29udmVyc2F0aW9uSWQsIHBheWxvYWQ6IHJlc3VsdH0pXG4gICAgICAgICAgICAgICAgICAgIGNvbW1pdChcIlNFVF9DT05WRVJTQVRJT05fTEFTVF9NRVNTQUdFXCIsIHtjb252ZXJzYXRpb25JZCwgcGF5bG9hZDogcmVzdWx0fSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdGF0ZToge1xuICAgICAgICB1c2VybmFtZTogbnVsbFxuICAgIH0sXG4gICAgZ2V0dGVyczoge1xuICAgICAgICBVU0VSTkFNRTogc3RhdGUgPT4gc3RhdGUudXNlcm5hbWVcbiAgICB9LFxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBTRVRfVVNFUk5BTUU6IChzdGF0ZSwgcGF5bG9hZCkgPT4gc3RhdGUudXNlcm5hbWUgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBhY3Rpb25zOiB7fVxufSIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnO1xuXG5WdWUudXNlKFZ1ZXgpO1xuXG5pbXBvcnQgY29udmVyc2F0aW9uIGZyb20gXCIuL21vZHVsZXMvY29udmVyc2F0aW9uXCI7XG5pbXBvcnQgdXNlciBmcm9tIFwiLi9tb2R1bGVzL3VzZXJcIjtcbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcbiAgICBtb2R1bGVzOiB7XG4gICAgICAgIGNvbnZlcnNhdGlvbixcbiAgICAgICAgdXNlclxuICAgIH1cbn0pIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICA8IS0tIFVzZXJzIGJveC0tPlxuICAgICAgICAgICA8TGVmdCAvPlxuICAgICAgICAgICAgPCEtLSBDaGF0IEJveC0tPlxuICAgICAgICAgICA8cm91dGVyLXZpZXcgOmtleT1cIiRyb3V0ZS5mdWxsUGF0aFwiPjwvcm91dGVyLXZpZXc+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgTGVmdCBmcm9tIFwiLi9MZWZ0L0xlZnRcIjtcbiAgICBpbXBvcnQgUmlnaHQgZnJvbSBcIi4vUmlnaHQvUmlnaHRcIjtcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtMZWZ0LCBSaWdodH1cbiAgICB9XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHJvdXRlci1saW5rIDp0bz1cIntuYW1lOiAnY29udmVyc2F0aW9uJywgcGFyYW1zOiB7aWQ6IGNvbnZlcnNhdGlvbi5jb252ZXJzYXRpb25JZH19XCIgY2xhc3M9XCJjb250YWN0c1wiPlxuICAgIDxsaSBjbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBiZC1oaWdobGlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImltZ19jb250XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3N0YXRpYy50dXJib3NxdWlkLmNvbS9QcmV2aWV3LzAwMTI5Mi80ODEvV1YvX0QuanBnXCIgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZSB1c2VyX2ltZ1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwib25saW5lX2ljb25cIj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidXNlcl9pbmZvXCI+XG4gICAgICAgICAgPHNwYW4+e3sgY29udmVyc2F0aW9uLnVzZXJuYW1lIH19PC9zcGFuPlxuICAgICAgICAgIDxwPnt7IGRhdGUgfX08L3A+XG4gICAgICAgICAgPHA+e3sgY29udmVyc2F0aW9uLmNvbnRlbnQgfX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgPC9yb3V0ZXItbGluaz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgY29udmVyc2F0aW9uOiBPYmplY3RcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGRhdGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuY29udmVyc2F0aW9uLmNyZWF0ZWRBdCkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLXhsLTMgY2hhdFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkIG1iLXNtLTMgbWItbWQtMCBjb250YWN0c19jYXJkXCI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+UmVjZW50czwvaDU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBjb250YWN0c19ib2R5XCI+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGNvbnZlcnNhdGlvbiwgaW5kZXgsIGtleSkgaW4gQ09OVkVSU0FUSU9OU1wiPlxuICAgICAgICAgICAgPENvbnZlcnNhdGlvbiA6Y29udmVyc2F0aW9uPVwiY29udmVyc2F0aW9uXCIgLz5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHttYXBHZXR0ZXJzfSBmcm9tICd2dWV4JztcbiAgICBpbXBvcnQgQ29udmVyc2F0aW9uIGZyb20gXCIuL0NvbnZlcnNhdGlvblwiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7Q29udmVyc2F0aW9ufSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAuLi5tYXBHZXR0ZXJzKFtcIkNPTlZFUlNBVElPTlNcIiwgXCJIVUJVUkxcIiwgXCJVU0VSTkFNRVwiXSlcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgdXBkYXRlQ29udmVyc2F0aW9ucyhkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwiVVBEQVRFX0NPTlZFUlNBVElPTlNcIiwgZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHZtID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwiR0VUX0NPTlZFUlNBVElPTlNcIilcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSBuZXcgVVJMKHRoaXMuSFVCVVJMKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoJ3RvcGljJywgYC9jb252ZXJzYXRpb25zLyR7dGhpcy5VU0VSTkFNRX1gKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudFNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSh1cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50U291cmNlLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0udXBkYXRlQ29udmVyc2F0aW9ucyhKU09OLnBhcnNlKGV2ZW50LmRhdGEpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLXhsLTYgY2hhdFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IG1zZ19jYXJkX2JvZHlcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDwhLS0gVHlwaW5nIGFyZWEgLS0+XG4gICAgPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzPVwiYmctbGlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlR5cGUgYSBtZXNzYWdlXCIgdi1tb2RlbD1cImNvbnRlbnRcIiBAa2V5dXAuZW50ZXI9XCJzZW5kTWVzc2FnZVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJidXR0b24tYWRkb24yXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wIGJvcmRlci0wIHB5LTQgYmctbGlnaHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYnV0dG9uLWFkZG9uMlwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tbGlua1wiPiA8aSBjbGFzcz1cImZhIGZhLXBhcGVyLXBsYW5lXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbjwvdGVtcGxhdGU+XG5cbjx0ZW1wbGF0ZT5cbiAgPCEtLSBUeXBpbmcgYXJlYSAtLT5cbiAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHQgYXR0YWNoX2J0blwiPjxpIGNsYXNzPVwiZmFzIGZhLXBhcGVyY2xpcFwiPjwvaT48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UuLi5cIiB2LW1vZGVsPVwiY29udGVudFwiIEBrZXl1cC5lbnRlcj1cInNlbmRNZXNzYWdlXCIgYXJpYS1kZXNjcmliZWRieT1cImJ1dHRvbi1hZGRvbjJcIiBjbGFzcz1cImZvcm0tY29udHJvbCB0eXBlX21zZ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHQgc2VuZF9idG5cIj48aSBjbGFzcz1cImZhcyBmYS1sb2NhdGlvbi1hcnJvd1wiPjwvaT48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Zvcm0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YTogKCkgPT4gKHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnXG4gICAgICAgIH0pLFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzZW5kTWVzc2FnZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcIlBPU1RfTUVTU0FHRVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnNhdGlvbklkOiB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudFxuICAgICAgICAgICAgICAgIH0pLlxuICAgICAgICAgICAgICAgICAgICB0aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCA9ICcnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8IS0tIFNlbmRlciBNZXNzYWdlLS0+XG4gIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IG1iLTRcIiA6Y2xhc3M9XCJbbWVzc2FnZS5taW5lID8gJ2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIG1iLTQnIDogJ2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgbWItNCddXCI+XG4gICAgPGRpdiB2LWlmPVwiIW1lc3NhZ2UubWluZVwiIGNsYXNzPVwiaW1nX2NvbnRfbXNnXCI+XG4gICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zdGF0aWMudHVyYm9zcXVpZC5jb20vUHJldmlldy8wMDEyOTIvNDgxL1dWL19ELmpwZ1wiXG4gICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZSB1c2VyX2ltZ19tc2dcIlxuICAgICAgPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgdi1pZj1cIiFtZXNzYWdlLm1pbmVcIiBjbGFzcz1cIm1zZ19jb3RhaW5lclwiPlxuICAgICAge3sgbWVzc2FnZS5jb250ZW50IH19XG4gICAgICA8c3BhbiBjbGFzcz1cIm1zZ190aW1lXCI+e3sgZGF0ZSB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHYtaWY9XCJtZXNzYWdlLm1pbmVcIiBjbGFzcz1cIm1zZ19jb3RhaW5lcl9zZW5kXCI+XG4gICAgICB7eyBtZXNzYWdlLmNvbnRlbnQgfX1cbiAgICAgIDxzcGFuIGNsYXNzPVwibXNnX3RpbWVfc2VuZFwiPnt7IGRhdGUgfX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiB2LWlmPVwibWVzc2FnZS5taW5lXCIgY2xhc3M9XCJpbWdfY29udF9tc2dcIj5cbiAgICAgIDxpbWcgc3JjPVwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBa0dCeE1URWhVVEV4TVdGaFVYR0JnYUdCY1hGeGdYRnhnZEZ4Y1hIUmNYR2hjWUhTZ2dHQm9sSFJZVklURWhKU2tyTGk0dUZ4OHpPRE10TnlndExpc0JDZ29LRGcwT0doQVFHeXNsSHlVdExTMHRMUzB0TFMwdExTMHRMUzB0S3kwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMZi9BQUJFSUFPRUE0UU1CSWdBQ0VRRURFUUgveEFBY0FBQUNBZ01CQVFBQUFBQUFBQUFBQUFBRUJRTUdBQUVDQndqL3hBQkJFQUFCQXdJREJBZ0ZBZ1FEQ0FNQUFBQUJBQUlSQXlFRUVqRUZRVkZoQmhNaWNZR1JvYkV5VXNIUjhFTGhCeFFqY2pPUzhSVVdORU5pZ3FLeVUzT0UvOFFBR2dFQUFnTUJBUUFBQUFBQUFBQUFBQUFBQUFFQ0F3UUZCdi9FQUNrUkFBSUNBZ0VEQkFJQkJRQUFBQUFBQUFBQkFoRURJUklFTVVFRkV5SlJNak5oRkNOeGdlSC8yZ0FNQXdFQUFoRURFUUEvQVBRcTlQTTBnYnh6MTNieHY1cnhuYitjMTNrVktiWE5Panc0VkFMQUNOWHRPWTI0Q2JDRmZOb2RMWDFBQXdaWlk0TWlJTGhFRHNpWnR4T25OVWZwUGlLZFdNUXdBTy9XMEZyU2RUZVhrdUlKMURSS21wcGxma3RmOEpSV2JXYzBnUHB0WTY0dVdrdVpiWDRTUThSdWpncnIwaHE1ZzVyZzQ2UmJTSTA4SlhqblF6cGc3QVZuMUdzRlJ0UmtPWVhFR3hrRUc5N25pcm1PbXh4YmJZZDFLU1hTYXJSMlFaekJvRW1BRHlLaEtxMmFjZVJ4a245Q25wb0dPeXRib0FkTDhQVmVZVldRVHhrKzY5RTZTdWxqS29zSGtnQ1pNYTM1Z3FuZnk3YWxTb0M2TDI1d3MrSjZvMDlUSlRseWlBYk5EdXRhQnFUYVBQNkZmU0dIT1JvREtOQVdGOGdNMjFuZXZuMmhUNnB6WDVoTFRMZUl0N0VXSzlpNktkSjZOZWpUYWFqQlZhME5jMG1EWVJJbldWWlJrWlljVmlDNmpWRDIwMmdzY0lBalVFUVR3dVY0cnRERm1sWnBoMnMyaWVIZVlQa3J4MHl4cG5xbWs2U2VGNWkyaDNhOFY1N2pnS2pvaVFEYWJreElKOUNoTGRoZWtLNjJLclB1NlhSeG1ZOE5WSlJxUEdrRHZHaWtvVlFIUTJiYnROK2hCS2txMTJ6RGpyYTE0bjJVaEE3c1EvaUo3a05YYTQ4U1R5UjczQUdNcGthNlFQWDJYSFd1dmticHZRQUpSMmM0OXB4RGU4d3BIc3BDd09ZOGhiek52SlJWNmpuR0NRWTNXUDNSV0d3T2JVd09JaVBaQUE3V3VKK0VOSEV3UHI5RjBlcUdzdVBKR0haemVUdVJkcjVpUFZZM0JIY3lPY0EyUUFPR00xYXcrUSt5eXJpUTIxeHlDSWRzOHpKZEhmSTlpb3F6TFJEVDRuNnBpQXp0RnMyRC9NTG4vYUxkQUhEbVkraTV4TkVIUzM1eVFWUVhqMnVnQW1yaXAzKzMyVVpmT29Fb2R6WS9kRllCZ0xtdGNRR2tnRTZ3Q2RiSk1hTEQwWHBaaTkzL0FFdEhxNVhUWmRkN2FOZWt3Q0hnRjE3d0pGdk9WSFQ2RU93YkJWWlZiV3B1YU0wQWdDWWdnekRocncxUmV6NldaN1dCb0dZRWJ4YUR2Sk5yQlZXcElzcHhrZ0YxV3AxYlhOZEVEcXJhd08wSVVPQ3BPTldtVEpPZHR6ek1henpSYlhacVZPb0FNanFqMnRjQjJDNE5pQnhQWlBrdFU2cm1rT0JBZ2c2RGNweGszQm9KdjVJSTZwLzRGaVlaaHdIK1lMYXpjV2F2Y1JSTVpXTDZEUzF6SFE1cGdBZ2h6anFYVDJiMmpXNjZwVURUcXQ2eHptVTN1QXFnU1Mwa3crd054RndFL1owYlpRdzFWalNYRndrazZ5MjdkTFNPTzlDN1pkU3AwcWJ4bUpxTWwzYTVnK2hPdk5XN2lVdVN5dWxHa0M0cm9saFRYL280c0NsQkpmVllkUmZMRElJblNUd0tTNCtwVG9ORk5wZVJtSk1PSkkrVUFtemVNRGR4WGRTZytSMWRDb0MrTWhjRGxrbjRwYlluUzVRbTFjRlVhOTFPcVlMWU9nTnVNalh2VXFmbGxVWXRTb2JZT3AxMnp6ZTlDdDNuTFVFKzVjUEJWbkVuSzV6aHg5OVUwMkRVTGV2cFhBZGxNUjhtYjZFZVNXN1N3OFhCc1RCNzRsQ1ZTWTB2aUF1eEJPOVM0U3Njd3Z2SHVoSHMxQ24yWmhuVktqV3RtU1I3cTByWGN2ZTBxemkwT0JtQWJrazVpMFdFbmRvcTJLeGhnQnUySk84ZWRqb25tMUhob1lOY3IyZzMzRU85NVZiMnRoU3ljcnN6U1JCNGduc24xamtRVWdiSldpUzRrdU1uY0RweEozSWhoYUJaczkwNWZHQkI4VXFwNW1rQnhPWGk3TkIzNmpjbXJNS0NBV2wyN1FsN2I4SEM0OFFVTURIMUhFMmFkM0lDTzdjb3poM3YrSjJVY0NIWmZUNnJvTk0ybWY4QU1QQWIvQmNpbzRUMnIzMEJIb1FoQWRFT2I4SmJISWtUeTRGRFY4WFYrYjFqNkxWU1RmS1R6QWo3QkRWcVpGaVQ1VDZvQTc2d2Fscmh4Z3o5UW8zMW1mTWZJL3VzRkFTSURyNlRaY25EOHU4WG45MHhIWFh1L1RWdDRqM0NocVltb2YxekhNZTBMc1lQaDlRdXpnNWJiNGdmTk1BUjJLZG84WDVrL1ZjZForSC9BRVUxU2k0VzFIQ0VMazVKQWQ1eHZINTVydHRZL045RnpSYU42NWRUNW9BdW5SUHBEWGF3MG5GMVNoR1dJTHVxSmt0SStWc2toTjloYlFaV1lHenEzUW1KM0VjMVJOajdVZFFjYldjQzA5MzFWMXdXek1ObG81Nm1ScGFEbkI3WWVJbThIVzI3ZXErTk95eHl0SWUxcUFJYUNKRFBoQkpJYmFMRFFHQ1JiaXRkVzFkVU5zMFRJN0ZqRFNhWWwvTURqeDA0d2lzTGo4NE1RSTFHVm9QTFFKMmlwdGcrYm1mTlltSFh1K1piUm9mSm0zNHRqeSttd2d3U0w2eHVNZHlYNFhEVTZ0RnJYTUpMRFVwbUNOQTRPWVltUjM5eW91TjJ2V2JVK1V6SUFhQm9kSUEvSlZvMlgwaGV5N1dqTFVPWjV5L0NZZ3VFanVrS012c2xoYnVoOVZaVURJWXdFaXd6dnl4enNES3AzVHh6NlpwMUhCbWFJSW1RUTBnZ0VhaWJqdTdsYzhWdEtXdGNLbWJmYUJBMExyZDZWWXJaN0tqeTk3R3ZmeGQydE5OYkp3cDdKNU9jSFQwVktrenJOb3RMMlpHMW1OMWR1cVVobGNJM1pnZzl2NEoxQnoyT2h3RHRSdnRBUGZCRTl4WG9GUERnUUF4dHR3amR5amNsL1RpalJxWVV0WmxGU200T2dDRHJEdDI4RWVTakp2a2lyazRubHNrNnF5OUVNT0FYUE9vQUE0d1RKOFRCOGxYM1U3d3JMMFN0VGUvaTd4aHJUSHVWYU01MmhMM1BFd0M2ZStJaFFNWUFNcjNqUzJobWRZTW1lNWQxNlRuUEJCdHowMTlEQ3pFYk5nZGt6RzR5ZSsyN2RmbWdRWGlNR0F5QzNNMDNCR3Q1MC9ONVFHSHBnTmNHa2dnQXRQaGxNbmhacDhVZGcydmlIT3RsdHFZNVgwaTNtaGFtSUFiTVNHa2h3R29HK083ODNJQUhiWG16b1BNMzlRdVhQSU5pU1A3Z1I1RVNGRFhlMlFSWmNQcWNEdTh4M0lHZ3ltMFFUYmR1L09ha0VUT241dVNxbFVMak0yUmVkdzNqdUtWam9McXVhYmZuZ295UnZ2NmVhRk5jYjlPOWE2MGFnd21GSGRUWHN3ZTY4aER1ckhoOUZ5NnNEcVI5dWRseTR6bzRKa2FOMUtrcUJ4NUxxb3dqZTM2K2lHcU5RQk00Vy9DaDNIY3VnREV4QzBYeWdEbk1tR0N4SFp5eWJhY0kvWXBZOFFwY0hVeXZhZHdJU1l5OWJEMmNTRFVxUEplZmhFLzRZNURjVCt5Wk1yT3B1ekRVZW80TFd5OFoxak4yWVJQTzFsRGpLeE55cTcyREhQOEF2Q3o1WGVpeFZuT2VJOGxpZGlvQTIySlpScnR0b1RIL0FGZ2ZWcFJteHNWVERSbUl1YmszNWc4ZDY3MmNIT3c1WTRkdW1YQ0hmTlRJcU5CNDNCSG1wdWwrQVpWWlR4bUhocmFrR28wR01qN2cyN3dRZWNIUXA2WXNrZm83Mmx0VU5xQU5MU1h0eXlIQU5neUIycGdhcHBzM2JOTXNhSG4rcEVGclJjRVR6Z3lMcnpldExTSTQrRXdwNnpXdWRuelRFVHhkYmdmaE83WGNrbFhZbHh1RjMyTGs3YnhiVURnRGJOSWxwSUJFYUM1SnNnc2ZpZjVsbVp6MjIxQU11SkZ3SGNodVZlcVU1cEY3TnpobTRqaDRTb2FtSk9qU1FOL0FmZFI0dTdOZVBQQ1VIQ2Evd2I2djRuSGhEZkcwK3FzSFI4WkdqbGMrMzFDcnpxanYxSFVXbjNWbndReTBRQURNRWt4ZVQrZXl0TWpWTUl4T0Vrc2l3T1U4K1gxVVdKYUJVbUJKRWJ3SEMrdk93SGdqZXNEZXJKMzIrdnBNSlJ0UEV3UUorRXh1dEIxNzdIelFJbW9zZ2tnbUMwNVpBa2NqeDNLdTdTckZyeTVzUTZaSEg5NUJVemNkdUZpSjNlRGx3WFp3UVJ2N1Ezam1FQUFod082VnRyRHJwOUUzMkZzdHRSK1YwOTloNnBqak9qTlFYQWtIZUJaUWVSSjBXeHhOcXl0MHBHZyt5TGRTYzBTVHJ3Q2E0UFpUbUgrcXdqaDl4eC9kSHV3QXFBK2t5b2M5azFBcWJIaVlpL2ZDeXRWbjlJSHFtMkoyV1pqOVhEY2YyUUdKMmVjcEkrSWF0L1pUVWlFb3NYT2o5cmZWYXpmOUlqalA0RnpVWWRDUFJRbG8zbFRJTkV0Vjl2eUIzTGltVCtmbk5hTUxYV3dtUlpza2I1VXpBTzVEOWFOM25DbHc5S1NQZEFXY1Y2Skhjb2Flbzd3aXNjZWVtNVFNWVpFOFFrTXNPQnhicWJ0ZkRpRTdOVE1BNEZWdVpIUGNpOEJqQTB3NDIzcUFEWFB5V0tYcnFmek5XMGdvWVlpaDFlSU9oRlNuU3F5TkhGdlllUjM2K0tIcjBtRVBZNkEzSU1wZ1pnNXZ3alNTMGlBWTc5eWtKTG0wWE9FRnRSOUl4b0cxUkxZLzdncE1UaDh4RnJrRDl4NWhTOGcrd3FGR20yayttV2dseEpEeXpRUUxBbS9FNnBKVTJWVXk1bWpNNG45SnRISDNWclpSYTNXMHJZYzFvN01lV25laFJTSnl5eWxCUitpdllMWjVhSHNkSno1QTZKZ2FuVWN5RXl3L1IvcW5oN2FnYUdtd2MyU1J2QjR6SlREcnllSHI5VnJVaTVPbGtNcVMyTXRvOUg2R0t3anFqYWVXcXp0QndzU0d1T1pwQTFsb1BtcXRpcXhhNlpzSE5CNFdGeDZyMExvd1RsY0F3aHM3NTN4OWl2Tjlxa0ZsUnVra2tlSUh0OUZLN0g1R0JyQitzZ1NDQkVIVGdxeHRldWVzZGZYMzMrb254VG4rWnptMnVVRWJwZ1IrZUtTN1RkbUpQRS9YL1JBeFlhNTFsTjZXRkw4cjJ6THZ0ZEptdEpNQzVYcmZRL29zYW1HYTRkaDR1Q1FkWTBQRUd5cnlUVVVXNG9jbUt0aDdIZURKa2N3QjdRcjloR01wTW1wSmFCdjM4Z0FFWHNqQUVEdHR5bHBNaVpISXp2c2x2U1BFU1ltd3RBa2UzY3NibHllellvMHFSWGVrZTJoVUphR0JqQnl1ZWZMZXFuVXg3bS9DNHozblRuK3llNHlrWEd6QjNmZ1NuRjdKemF1QUhBeDlZV2lMVkZNb3V4Ymk5c2d3SENTT0J2SzNUMnNIRVNSUGtlNmQ2a2QwZGJ1ZFBjZm9vSDdFeThWTGxFZ29TQ0g0RXY3VFludkhDeWdxYkx6U0hBQnczd1Q2dFJ1Qm9rRVhzckZTd3djQkkrNmk4alJhc1NaNXhpOE1XbUNPNVFDbU5mWmVqWXJaN1NDSENlOVY3SGJIcENUQThMS2F5MlZ6d1ZzclRRMGIvVlNtcmF3OGRTaWExT20zVDZvR3JCMEt0VHN6eVZFdEtrMFhjYmNEdldxY09xQzI4SUdVeDJhSmUyeDMreCs2VEVodmlzUCtvYUtObDl5YVlTbVNOSkNoeEdFeW1RSVVSZ3ZWdCtVZVN4VDVEeVdJRlpaYVRpOXIyNVk3SWUzam1ZNEVXOFhLWEhnRU5jT1JCMzlvVDlWM2hhUnpBZ0dORHVzUVFmZGJiUWluSi9TNHRNNzhqdnNRbSs0bDJGcHVkWktKdyt6bnV2WnZmUHNuR1ZyZElIY0ZvMSthbVJCNld5bWo0alBtUHFwMjBHTmlBQjdxTjFmbW9oWGt3TDl3SlNZKzRhSytYUWtkeGhVcnBKczhzYlRkQmg1ZjVOY1dhOHdQUlc0VTNuZEhlamRxN05GV2poR2tBLzRna2Yzays4cXFjK05NMDRNTG5KeFo1VTZ2bGUwOG9udkVqM1J0YkROY3kzNnJqejA5Q3JkMDI2RDlXMWhvdUdZTjdUVGE4YnVDcCt6bXZrTUlNM2dFeGZoNWoxVGprVWxvakxGS0puUTdZejYrTW90YTJRSEI1L3RhZTFyM3I2UXdlRERXd0F2Sy93Q0UyRW5GMUhnZGtVekhlNHRrZCtxOWZwTFBtZHlMWWZHQXMybmhERXRzVlROc1lYRUM3YVhXZHk5SmN5VVBYb3pvcWVQa3NobDhNOEoydnN2YUR2MEZqZUF0YmlZdVZWdHRiTXJVWFNjNWFRSWNSMlR4dUxXNzE5RTR2Q3ZNNVk3aXFWdFhadFJyaWVyZTJabkpkcDhORmJETFhnY3Nha2VlYkEyQyt0UmRVSkxiOWc3akF1WWk0bUxybkM0aDlONXB2TStvUGNUY0syMW1PMGwvK1NQWlEwK2o0ZTRsMU4yc3pKSG9GTnpzSTRtdklMcytpQ1lnK1N0ZUQyWkxaMVdZUFpNUVk1YzQ1cTE3SndrTmp3VkxleTlhUjU3dHFsa2txbjQ1em43NFhwL1RqWjU2cDVHdjdoZVBiU3puUEVqTG9EcWIzTUszRnNwelMwUlZkbTV0SDM0SU90cytvM1VlS0kyYUtsU28xZ1B4R05BUUJ2T2lPcjFhbEYvVjFlMERvUk1IN0ZhTGFNdEppRjlOTTloc21YUnBZYzUxK2lLMjFoUUtaZU44UjRrSjkwWDZNRitFWlVEdTI1NU1FOW5LSkhuYVU3dEVKTGlRdXdjZ0RNUnkzSnRzclpEcXJnSERzalU3aUJ1NzA5d1d3S2Jidk9kMy9pUERmNHBxd0FhZVNWTXJjeUwrVFo4alZpSmxhVHBrTEVyNnY0RUhpYXBEbk4zT2grdnpDSGVxbnhHMThIU3Mrc0hrYm05ci93QkI3bFZ6YlBTeGozVFRwbUlpWEJyZWU0RStxYlJORHlrSE9hSWJ1dWRCYlc1V3FyUTBTNTRBNWZjMlZHcmJhcTNoK1VIV1B1ZkZRNGZEMWF4R1ZyM2tteGduL3dBamIxVDdDb3VHSTJ4aDJOelNYZ21CRndTTlJ1SHVnaDB0cTVYQ2kxckdnU2M1a2NvQWlYYStSUSt6dWpJZTMrcGlXMHlMQmdwMUtydlBzdEhtbjJ5ZGpVS2JTSFllazhuOWRUTzQ5K1F1eWo5OTZoeXZzaVNYa3JUYStPeFFuK3NXWHUybThVL05nZ0RtWlhxblEvQkJ1RXc3VFVaVjZ1bzRabTVvN1pMc3ZhQU5zMFR5U2ZEMGNyY2djL0w4dVoyWHV5enB5Vmc2UEVGcjZXbWptK0ZqNDZLckxHVGpzMDlQT3BnWFNvT3FZazAyeVozSmxzem95eW5oS2pYTkJlN000RTZpMWlPR2hURForREZWNHFPdFVBSW5jVVhRRHY2alhURWZnV1ZXamJsbDhlQzhVVlArR1dITEhZbVJFdWFXbmRCQjMrU3YxSjkxVWVpUkxYMWFaRUdRZExFRFErVVdWb3c3NzNUbS9rWjNIUXhhSlhmVjJVTkp5S0RWT096TEswQVY4UHlTNnRSQlQrcUJGMERYYTFTbEV1eFpHSTNiTmFkUXUyWUZvM2ZSR1BBVVRzVTBiMURzYVZiN0dtYlBuZFpIc3cwYUtMRFl4cmoyVTJwTUVKeFNabnk1SlIweXM5SmNGbXBQSEZwWGxqdG5UZmY5bDdWdGVuTFN2TTMwNHFPSE5KdHhaZmkrY05sVXJiUElKTGV3NDZrTkZ4d05wUUdKMkwxcmdYT0pQZEVmbDE2QTNEeW82MkJINStjL1JQM1dONGtVVGFlekl3NzV2a2E1dzd3eDBlVno0SzdkSHNKMVdGb1V5SUxhYlo3eUFUNmtwZHRMWmhxdGN3T0RaQnVkKzdMM21ZVmh6Ymd0T0YyakoxZGFTT3cxYUFXZzUyZ0M1eWs4VmFZeVd5eER6eVdrQ3M4aW9iS3IxQm1aU2VXekJNV0hmS3MyemVqTk5yUTU5VXVxWDdMYU01WmJIeE9kRnBPNU9hV0Rhd3VHK2UwWkJCUEcxajNvMm15eWkwMldXVi9CZEg4cjg3aFRMcGtFaDl1OFRrUDdwNzFUM2orcFVkVTRBdUliSDl1bmhvcG9YWUhOUGloV3lObEVORmdCM1FGa25ORVdpZmY5dk5TMldad21JNmF1WDdXR0dpc1pBWVJJK2FkV2ptYnJoOVlRcWgwMHJFNUdrMnZBK3ZNd2sxcWlVVzB6M3ZaNHBWbU5xMGlNcjJnZ2plQ0VXN0o4QTFqODkxNEQwRDIvamFiaGhxUDlSamlaYVo3RW03ZzRhQytpOWMyRlFxdHhBZFVkT2FtYmJoZHAraXhUK0xvMmNPVVhLd3RteWd5cG5hZTlURk1Lb1F0VmlybWlVSjMzTW8xSVJaeFBOQUZDVjhSQ1NsUkwybEpqR3ZqZ1JxbHRmR2dYbExNWHRDTjZSNDNhZk5QazJYUXhSaU9NZnRiaDVwUlF4UnJWVzA5emo1Ny9BS0pYUWMrdStKc3JLTUIxYld1cGp0TXVPZHJ6NWxCZGFTTFRnOW45V0JEYkpyaGhiVzNzdktzVi9FQ3ZUcVpYWWR4QS9MY1ZaZGc5Tm1Wd1lPVncxYTRRUjRjT2FzaTFIWml5NHB5OGxuMm02QXZOOXJraXFITkV0RTVvNTcxWk5vN2NhVEJJVlJxYldZS3BrMmhSbExrOUYrR0hDT3hwaEhBb21xeXlyK0cyb013WUd1dVREZ0xEaEtjSEVTRkNpd1hWb0ZScDUvUW8yZDZVN1NxOXBzY2ZvVmFxT3dIbTVlMERsSldyQzZSZzZ5TzB4WDF2TmE2MVBHOUhHNzNud0FDS3BiRHBEVUU5NSt5djVHTGlWanJ1U3hXei9aTkg1QjVuN3JFdVFjVHp5bGh3QkVXVXphYUo2b3JmVkt3QWJJVm1VS2JxbG5WbElDT3loY3pYZ2luTnNvWUpRQkMxaVFkSzhBWHRZNEM3WEhkdUlWbDZrOGZCZEhDenUrNkd4b0IvaERnNHJWWHhIWkRUenZQMlhzWFZEWGYrZllxb2RFZG1pa0M0Q0M4a3hwcGFmUlhHZENzRTNjalZLMUZFUnFpWTNnU29hcmx1cVlNSVNwVnZDcmt5MkVTS3RWaExNWldPcUp4TDB0eHJ4RVdsUU5DMFZ2YXVPSU5rbkRYVkRlUTFQY1ZoUVozbElzYzk4RU1hU2VYc3JZVUUyL0JZOWp2cHNnRDhLc3RPdU5GNWxnRGlxUnpWY084N3dXRnJvOExGUGFQU0dvSXk0U3E3dkVleWswUlNreDV0UENOZnFPOHd2UHRzZ01xZGlRNFdEaFkraXM5WHBuVkZuMEF3Y0hCemZVaExhdU93OVIyWnd5SFV6Y0hpQkNhSk9Eb1JWTVpXL1VkVVJzbkQ5dk03dE81MzkwVmpjWlFKQWFSMzZlNmlmVURORGJqWk5rZnhHV2NCMG9oMkxnV1NPdGlwRFlOMUpubUJ4U29uRjhuU0RUWHpHU2k4Si9GTHFxanNOWHBYWTdJMm9EWWdSbGxzVE1RbHpMRlZmYkd5YWpzZm55bnEzRmp5N2QyV3R6Q2VNaFc0bXRoNmhpNHVNRDJQL2JlSWNKYXhvSGNUN2xEdTJ2V2Qrc2p1Z1I2SlhoOGFZYVd5T1NPcVZKSk1lU3VnN2paeWNxNHlwRW44L1YvK1IvbVZpaHo4bGlaWGJOUnpXTmJPZ251dXJZM1o5SUVSVGJyT2ttM2Z6UjFtamNCNUpjeWFnVTFtejZwMHB1OG85MU8zWVZZL0tPOTMyQlZqcTQra05YdDg1OWtKVjI1U0h6SHVIMU1JNU1kSUFwOUhDUjJxbmszN2xFVXVqbElhbDd2R0I2S005SWdiTnBuL0FMaVBvRkM3YmxRN21qd0o5MGJZV2tOYWV5YVFqc0R4djdvcHRGcmJCb0hjQXEwY2ZXZWZqTjlBTGVVS3diS3dqbWlYa2x4NGttT1dxcXl5NG9zZ3JKYWRQMEtZVW5XaER4RDQzRUxiK3lZOGxqVWk2VzlBMkllVE5yajFRZFY4Z1hVK1BjWXpEZHFrMWJHdEVHZXlmUlFrOW1qSEhSbGVyRzlMY1JXa2MxUGlLb0lzbGpnWmpYbW1peWlHNUtZN0p3UW1YQlJVcUU3azV3REFMRUZPd0ozNGR1dGtCaU1jMm1lMHp4Q2NHbkFTVGFkS1FiVDRKcGpUSWEyMWFOUUVGelhEZzREMktydU8yVmgzbVEyUDdIRm84aFpBN1YyT1NUQWNQTkpxbUdyTXRtZUI0cTViSmM2OEJ1ME5rVVJab2ZQTjVTdG14M2tmNGpvbXdtMzdvL0RZWjVkMm5FK2FhTlpsYW55b3JrbElYN1B3a0NYR1kwWGJOU2ZKYXF2Sk9VZU4xSTBXU2JPajZkMC9LZk45a2RqVk84UGdCVm9FeUJEclROanpNV0Z5a2dOdVlLZjdCZVMxelpNRVQ1cXpFazViTW5xMXhtMlE3TmJKTjVEUWI2YWIxMmNRZVBxdGorbTEwL3E3TGVQTTl5Q0xndGpTU3BIQXR5ZHNMNjFiUWZXZDZ4UW9LTFBWMmhWZHE5M2dZOWtNOXpqcVNaNHJrcmJqQ2RFaklVVmVHZ3VjUTBEVWttQjVJVGFXMVcwOTh1K1VmVTdsWE5xN1ZxVlJCRFFBWmlUNm9vRWhxL3BGU2FUbERuZHdnZVpLanA5TDZWZzVqMmlibnN1ampZRVNxcFZxRzhnZUJRZFdEb2ZCT2lSNzMwVXhHRXF0elllcTJvNzlXNTdlUllidDhrOWM2Rjh4NGZFdnBQRDJQY3g3ZEhOSkJIaVBaZWxkRHY0bFp5MmhqQ0E0MmJYRUFFN2hVR2pTZm1GdVFXTE5obDNXelJCcDZQVGEzYUZ0Um9wR3Y2MW5CdzlDRUxUcVFWbFhzbk8zUTYvZFpiTFhEL2dPYXR5RFlqVWZtNUlOdFlMVjFQeGJQc3JGaTJDb0pGbkRUbnlLUTRxb2JnaUNOUnZVR2FZT3lwamFaYklNMjQySThPQzIzYVlGL3JLbDJ2Z3c0VG9lSS9McW80b1ZLWkkvUEpXeGltRW5SNkRnZHBOTzlOOE5pZ1lncnlLanRndE55VTB3L1NVamZidy9BcCswL0JYN2lQVzZWWUhlcEtqZ3ZPY0gwckIxY0VjT2tnajRyZDZYQmo1SXNtS2NPUitpVjE4SzA2Z0pUVTIySFdrcUYrMXJXVDRNZkpCMVRDdGJvQWttMHF0OHJSSjVMakU3WUpzMlo5MEVjUFVjY3hkbFV1TmR6VjAzVHl6UFMwVFVLRVR2SjFVajJ3SjBDanE0MXJCQWg3dVdnNzBCVXhqM2ZFZkJGSG9JOE1VZU1RMHZoam5rMkFueTNxTFovU05oZDFiSms2T3NCWUVuVy9CVE5vWnFUbTczTkk4d2lPaVd3OE5UQjYwNW51QkU2RnVud2pjZmRYNHBSaW0zM09INnRpbE9TUytqZjh5WFhNazd2dDdMdGtxV3RnUXgwVFBBalFqY1F1Z0F0QzJlYmNXblJGQjVyYUl5OTZ4UzRzZnR5K2hjZW1kTUg0Q1IvY0ovOVNnY2QwcWMrUTF4WTNnTmY4MzJTaHoxQzRvb1lYL01zTTlvbnhoUTFIYzNEeG42b1I0SEFMV2ZpUEpNRHA3M2pRejNxRTFtazNrRkYwMnRkbzZEd2RjZUNocjRXZDBjeG9nQ010dHhDZ3EwdkpjdWE1dWhXQ3Z4U0haZitoZjhRVFFhS0dLRG4wMjJaVUhhZXdmSzRFOXNEanIzcjFMWmUxYU5kbWVqVWJVWm9jcG1PUkJ1MDhpRjg0U0R5VSt6OW9WYUR4VW92ZFRlTjdURThpTkhEa1pXWEoweWx0RjhNM2huMFU3czkzdHlRRzBhYmFnNE9Hamh1KzQ1S2xkSC93Q0pqWHhUeGJjaDA2eGdKWWY3bWF0N3hJVmxxNHhyZ0hzY0hOY0pEbWtFSHhDeFRoS0hjMjQ1S1cwSnNXSE5PVjRoMjdlMTNjVWx4akFaa1FWWmNWVWE5dVYxL2RWL0dOTGRlMDNqdjhlYUlrbVZ2R1lHNU1mWkxhbUVoV2FxRURYcDhsb2pJenlpSStxSzZheDI0bnpUTHF3dWd3S2ZKa09JSFRZLzVpaXNQaDNHNWVZOGwzbEdnUkxJQWhKeU52UjRGbHlKUHNqdWlNdncyNTZueksyNWdQeEV1NzFIMWkxMW5DL2RkVm5wWVJVVlNWQk5LazBhRHdDNmJnUTQyc3NvWUp4dTQ1Rzg5VnZFYlVZd1pHR2VhQ1VuRkw1Qm5XaHJtdEIwMThGSHRla0RVRDI2dUhyL0FLSVRCalBlOTV1aUt0TXRMV0E5cVFXdU5tM0doUEhWVFNPUDEwdVUwLzRHdXptdHFNRk11RG5nU3plWFpqZG84aVFPU0Zkam1CNVlJbjZqVUR1dDZxSEMxK3JEcWhEV1ZxVXV6RDlmSnZFYWR5UlVRUWVzY2UzTnA3NUxqN3JkMHFiMnpCSERIbnpMTm1mdzlGaTU2dy9JUE1yYTZWbTNYMFVaM2VvM1BLMjVSdUs1N1BNR2RaTys2NWY1TGx3QlVaa2N4NnBCWkoxc2ErWVJkS3Z6UzdOUDJYVER3UU1QY0FVSFZvY0ZJeXF1aStlOUFBQkN3VmVLSXFEajVxQjlKQWpaTWl5SjJWdHV0aG5UVGQyVHF4MGxqdkRjZVl1bHpnUXN6ZzZxTFNlbVNqSnA2UFVOazdmcDRoc3NrT0h4TVB4TjlPME9ZVTFlcnF2S3FWVjFOd2V3bHJob1IrYUs2N0UyNDJ1MGc5bXFCZHZ6UnZiOXR5eFpNRGp0ZGpianpxV24zQ3E3T0ZrQlZKQnVqM2MxRlVZb0lzYUFDVnkyazVNV1VnYlI1b2xtRUhCVHNqeEZnRFdDWGVLbk8wNkIxWWZCcCt5bExXekJJN2x0K0dKMFVXN1BRK200WlF4OGwzWU03YTJISDZENGdyUjZRQ1A2YlBJUXBoczRDNTFXL3dDVkEwQ1dqYy9kKzBMblk1OVg0M09BNEFJM0M0QnB1RFBlcGptSHdocUdxVTNPTjNYNUtSVS9qdDdHMkFJRlJyWXNKMDdrMHBiUEZXV1BKSUh3M0FpMnZLSktXN0d3aGd2TzRIeDRsTldPSDNWMFlYRTg1MTNXZjN4WnQrR01aU2NCSU15TkhBQUFIMTlFZ2ZYYTFycWovaEZvNDhrWHR5b090eXQzUTN4MytwVlQ2UlkyU0tiZmhIdXQrTmNJRW5sNHc1RG4vZTF2eXUvekxTcG1aWW43cktmNnFRK2NTRnpuSGNVUVNvS2pKVlRPV2N2WEJLNEpJc2RGamlrQnA0OEN1UlU0NnJDVkc0N2o0SUFJYTlkNTBMVHFianF1eTVBd2tQV2kyTkZDSExwdFJBR3lWRFVvQkVTQ3VYVWpxRUNBYmhkVTNrRU9ZUzF6VElPOEtaenVJWEJZMDZHRURSWk1IMG1ZUUJWYVd1M3VhSmIzeHFPNjZjc2UxN1E1amc1dTRneU83djVLZ0dtZVJVbUF4dFNnL015NC9VM2M0YytmTlpwNEYzUm9obmZhUjZGUW95UVR1OUVYWDdMU1VEc2phVk9xek13OTRPclR3UDVkZGJheHdaUnFPNE5QcUxlc0xMVDVVYkxWV1E0cWc1anNyMjdnUVpHamdDRHoxV1U2Ui9TNDl5VGJGMnVQNVVkYTRnMFNHVEJKeVBrc0JnYmlIZ2VDS2IwaXd3LzVqajNNY3JaUWQ5anU5TDFtRjRsY2t2OEFZMGE5MjhIeVdPU1dwMG9vYmhVZC93Qm9IdVV0eFhTcy93RExwQnZOeEo5QkFRc1V2b25rOVQ2YUMvS3l5a1R4UEpRMHF3ZlVGR21RNm9kWXVHRGU1eCtuRlVuRmJWclZQaXFHT0RleVBJSnQvRCtzVzRzQ0p6Tkk3b2d5RmJIRDluSDZuMWR6VFdOVi9KNmhTWmxzUDA2Zm4wVzNQQUJPNkpPZ3NCK3k2dWwrM0ttU2k4emQwTkhqcjdGWHhXemlRdWMwdnNxT054UHgxVHhKSGVkRlNhenlUSlZoNlIxc3JXc0hlZlJWdHl1bjlHM3FKYlVmbzVXTGNyRkV6YkxEaDFwMnEyc1NaU0QxbERUVzFpUUdsRFdXTEVDTnZYZTVZc1FNNksyc1dJR2JSREZpeEFFV0tRSzJzUUIxVFdqcXNXSUdPK2hmK083L0FPcys2YjlNUDhNZm5CWXNXUi9zUnFoK29SYk0vd0NEeHY4QStiLzJxSkE3VmJXTFY0TWk3czJGelUxVzFpR0pISVZrNkFmOGEzKzEzMFdsaVF6MWo5MG02VGY0YmY3eDdPV0xGTEgrUlowMzdFZWI5SmY4WHdTUllzVTVkeTdQK2JPVml4WW9rRC8vMlE9PVwiIGNsYXNzPVwicm91bmRlZC1jaXJjbGUgdXNlcl9pbWdfbXNnXCI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBtZXNzYWdlOiBPYmplY3RcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGRhdGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMubWVzc2FnZS5jcmVhdGVkQXQpLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wteGwtNiBjaGF0XCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgbXNnX2NhcmRfYm9keVwiIHJlZj1cIm1lc3NhZ2VzQm9keVwiPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihtZXNzYWdlLCBpbmRleCwga2V5KSBpbiBNRVNTQUdFU1wiPlxuICAgICAgICAgIDxNZXNzYWdlIDptZXNzYWdlPVwibWVzc2FnZVwiLz5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxJbnB1dC8+XG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7bWFwR2V0dGVyc30gZnJvbSAndnVleCc7XG4gICAgaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4vTWVzc2FnZVwiO1xuICAgIGltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhOiAoKSA9PiAoe1xuICAgICAgICAgICAgZXZlbnRTb3VyY2U6IG51bGxcbiAgICAgICAgfSksXG4gICAgICAgIGNvbXBvbmVudHM6IHtNZXNzYWdlLCBJbnB1dH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKFtcIkhVQlVSTFwiXSksXG4gICAgICAgICAgICBNRVNTQUdFUygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5NRVNTQUdFUyh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzY3JvbGxEb3duKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMubWVzc2FnZXNCb2R5LnNjcm9sbFRvcCA9IHRoaXMuJHJlZnMubWVzc2FnZXNCb2R5LnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRNZXNzYWdlKGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoXCJBRERfTUVTU0FHRVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnNhdGlvbklkOiB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgY29uc3Qgdm0gPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJHRVRfTUVTU0FHRVNcIiwgdGhpcy4kcm91dGUucGFyYW1zLmlkKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxEb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmV2ZW50U291cmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gbmV3IFVSTCh0aGlzLkhVQlVSTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgndG9waWMnLCBgL2NvbnZlcnNhdGlvbnMvJHt0aGlzLiRyb3V0ZS5wYXJhbXMuaWR9YClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRTb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UodXJsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50U291cmNlLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmFkZE1lc3NhZ2UoSlNPTi5wYXJzZShldmVudC5kYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIE1FU1NBR0VTOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbERvd24oKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZXZlbnRTb3VyY2UgaW5zdGFuY2VvZiBFdmVudFNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRTb3VyY2UuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJMZWZ0XCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInJvdXRlci12aWV3XCIsIHsga2V5OiBfdm0uJHJvdXRlLmZ1bGxQYXRoIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwicm91dGVyLWxpbmtcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjb250YWN0c1wiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdG86IHtcbiAgICAgICAgICBuYW1lOiBcImNvbnZlcnNhdGlvblwiLFxuICAgICAgICAgIHBhcmFtczogeyBpZDogX3ZtLmNvbnZlcnNhdGlvbi5jb252ZXJzYXRpb25JZCB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJhY3RpdmVcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGJkLWhpZ2hsaWdodFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImltZ19jb250XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLWNpcmNsZSB1c2VyX2ltZ1wiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9zdGF0aWMudHVyYm9zcXVpZC5jb20vUHJldmlldy8wMDEyOTIvNDgxL1dWL19ELmpwZ1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm9ubGluZV9pY29uXCIgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXNlcl9pbmZvXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5jb252ZXJzYXRpb24udXNlcm5hbWUpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGF0ZSkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5jb252ZXJzYXRpb24uY29udGVudCkpXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTQgY29sLXhsLTMgY2hhdFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgbWItc20tMyBtYi1tZC0wIGNvbnRhY3RzX2NhcmRcIiB9LCBbXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5IGNvbnRhY3RzX2JvZHlcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9sKF92bS5DT05WRVJTQVRJT05TLCBmdW5jdGlvbihjb252ZXJzYXRpb24sIGluZGV4LCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIF9jKFwiQ29udmVyc2F0aW9uXCIsIHsgYXR0cnM6IHsgY29udmVyc2F0aW9uOiBjb252ZXJzYXRpb24gfSB9KVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWZvb3RlclwiIH0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sIFtfdm0uX3YoXCJSZWNlbnRzXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLl9tKDApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC04IGNvbC14bC02IGNoYXRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5IG1zZ19jYXJkX2JvZHlcIiB9KVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJmb3JtXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1mb290ZXJcIiwgYXR0cnM6IHsgYWN0aW9uOiBcIlwiIH0gfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIiB9LCBbXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uY29udGVudCxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29udGVudFwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgdHlwZV9tc2dcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJUeXBlIHlvdXIgbWVzc2FnZS4uLlwiLFxuICAgICAgICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiBcImJ1dHRvbi1hZGRvbjJcIlxuICAgICAgICB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNvbnRlbnQgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBrZXl1cDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMywgJGV2ZW50LmtleSwgXCJFbnRlclwiKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX3ZtLnNlbmRNZXNzYWdlKCRldmVudClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF92bS5jb250ZW50ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDEpXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtYXBwZW5kXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtdGV4dCBhdHRhY2hfYnRuXCIgfSwgW1xuICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcGFwZXJjbGlwXCIgfSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hcHBlbmRcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC10ZXh0IHNlbmRfYnRuXCIsIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSB9LFxuICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWxvY2F0aW9uLWFycm93XCIgfSldXG4gICAgICApXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBtYi00XCIsXG4gICAgICBjbGFzczogW1xuICAgICAgICBfdm0ubWVzc2FnZS5taW5lXG4gICAgICAgICAgPyBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIG1iLTRcIlxuICAgICAgICAgIDogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IG1iLTRcIlxuICAgICAgXVxuICAgIH0sXG4gICAgW1xuICAgICAgIV92bS5tZXNzYWdlLm1pbmVcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImltZ19jb250X21zZ1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm91bmRlZC1jaXJjbGUgdXNlcl9pbWdfbXNnXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgXCJodHRwczovL3N0YXRpYy50dXJib3NxdWlkLmNvbS9QcmV2aWV3LzAwMTI5Mi80ODEvV1YvX0QuanBnXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICFfdm0ubWVzc2FnZS5taW5lXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtc2dfY290YWluZXJcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgXCIgKyBfdm0uX3MoX3ZtLm1lc3NhZ2UuY29udGVudCkgKyBcIlxcbiAgICBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtc2dfdGltZVwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5kYXRlKSldKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLm1lc3NhZ2UubWluZVxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnX2NvdGFpbmVyX3NlbmRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgXCIgKyBfdm0uX3MoX3ZtLm1lc3NhZ2UuY29udGVudCkgKyBcIlxcbiAgICBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtc2dfdGltZV9zZW5kXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kYXRlKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ubWVzc2FnZS5taW5lXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbWdfY29udF9tc2dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWQtY2lyY2xlIHVzZXJfaW1nX21zZ1wiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgIFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBa0dCeE1URWhVVEV4TVdGaFVYR0JnYUdCY1hGeGdYRnhnZEZ4Y1hIUmNYR2hjWUhTZ2dHQm9sSFJZVklURWhKU2tyTGk0dUZ4OHpPRE10TnlndExpc0JDZ29LRGcwT0doQVFHeXNsSHlVdExTMHRMUzB0TFMwdExTMHRMUzB0S3kwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMZi9BQUJFSUFPRUE0UU1CSWdBQ0VRRURFUUgveEFBY0FBQUNBZ01CQVFBQUFBQUFBQUFBQUFBRUJRTUdBQUVDQndqL3hBQkJFQUFCQXdJREJBZ0ZBZ1FEQ0FNQUFBQUJBQUlSQXlFRUVqRUZRVkZoQmhNaWNZR1JvYkV5VXNIUjhFTGhCeFFqY2pPUzhSVVdORU5pZ3FLeVUzT0UvOFFBR2dFQUFnTUJBUUFBQUFBQUFBQUFBQUFBQUFFQ0F3UUZCdi9FQUNrUkFBSUNBZ0VEQkFJQkJRQUFBQUFBQUFBQkFoRURJUklFTVVFRkV5SlJNak5oRkNOeGdlSC8yZ0FNQXdFQUFoRURFUUEvQVBRcTlQTTBnYnh6MTNieHY1cnhuYitjMTNrVktiWE5Panc0VkFMQUNOWHRPWTI0Q2JDRmZOb2RMWDFBQXdaWlk0TWlJTGhFRHNpWnR4T25OVWZwUGlLZFdNUXdBTy9XMEZyU2RUZVhrdUlKMURSS21wcGxma3RmOEpSV2JXYzBnUHB0WTY0dVdrdVpiWDRTUThSdWpncnIwaHE1ZzVyZzQ2UmJTSTA4SlhqblF6cGc3QVZuMUdzRlJ0UmtPWVhFR3hrRUc5N25pcm1PbXh4YmJZZDFLU1hTYXJSMlFaekJvRW1BRHlLaEtxMmFjZVJ4a245Q25wb0dPeXRib0FkTDhQVmVZVldRVHhrKzY5RTZTdWxqS29zSGtnQ1pNYTM1Z3FuZnk3YWxTb0M2TDI1d3MrSjZvMDlUSlRseWlBYk5EdXRhQnFUYVBQNkZmU0dIT1JvREtOQVdGOGdNMjFuZXZuMmhUNnB6WDVoTFRMZUl0N0VXSzlpNktkSjZOZWpUYWFqQlZhME5jMG1EWVJJbldWWlJrWlljVmlDNmpWRDIwMmdzY0lBalVFUVR3dVY0cnRERm1sWnBoMnMyaWVIZVlQa3J4MHl4cG5xbWs2U2VGNWkyaDNhOFY1N2pnS2pvaVFEYWJreElKOUNoTGRoZWtLNjJLclB1NlhSeG1ZOE5WSlJxUEdrRHZHaWtvVlFIUTJiYnROK2hCS2txMTJ6RGpyYTE0bjJVaEE3c1EvaUo3a05YYTQ4U1R5UjczQUdNcGthNlFQWDJYSFd1dmticHZRQUpSMmM0OXB4RGU4d3BIc3BDd09ZOGhiek52SlJWNmpuR0NRWTNXUDNSV0d3T2JVd09JaVBaQUE3V3VKK0VOSEV3UHI5RjBlcUdzdVBKR0haemVUdVJkcjVpUFZZM0JIY3lPY0EyUUFPR00xYXcrUSt5eXJpUTIxeHlDSWRzOHpKZEhmSTlpb3F6TFJEVDRuNnBpQXp0RnMyRC9NTG4vYUxkQUhEbVkraTV4TkVIUzM1eVFWUVhqMnVnQW1yaXAzKzMyVVpmT29Fb2R6WS9kRllCZ0xtdGNRR2tnRTZ3Q2RiSk1hTEQwWHBaaTkzL0FFdEhxNVhUWmRkN2FOZWt3Q0hnRjE3d0pGdk9WSFQ2RU93YkJWWlZiV3B1YU0wQWdDWWdnekRocncxUmV6NldaN1dCb0dZRWJ4YUR2Sk5yQlZXcElzcHhrZ0YxV3AxYlhOZEVEcXJhd08wSVVPQ3BPTldtVEpPZHR6ek1henpSYlhacVZPb0FNanFqMnRjQjJDNE5pQnhQWlBrdFU2cm1rT0JBZ2c2RGNweGszQm9KdjVJSTZwLzRGaVlaaHdIK1lMYXpjV2F2Y1JSTVpXTDZEUzF6SFE1cGdBZ2h6anFYVDJiMmpXNjZwVURUcXQ2eHptVTN1QXFnU1Mwa3crd054RndFL1owYlpRdzFWalNYRndrazZ5MjdkTFNPTzlDN1pkU3AwcWJ4bUpxTWwzYTVnK2hPdk5XN2lVdVN5dWxHa0M0cm9saFRYL280c0NsQkpmVllkUmZMRElJblNUd0tTNCtwVG9ORk5wZVJtSk1PSkkrVUFtemVNRGR4WGRTZytSMWRDb0MrTWhjRGxrbjRwYlluUzVRbTFjRlVhOTFPcVlMWU9nTnVNalh2VXFmbGxVWXRTb2JZT3AxMnp6ZTlDdDNuTFVFKzVjUEJWbkVuSzV6aHg5OVUwMkRVTGV2cFhBZGxNUjhtYjZFZVNXN1N3OFhCc1RCNzRsQ1ZTWTB2aUF1eEJPOVM0U3Njd3Z2SHVoSHMxQ24yWmhuVktqV3RtU1I3cTByWGN2ZTBxemkwT0JtQWJrazVpMFdFbmRvcTJLeGhnQnUySk84ZWRqb25tMUhob1lOY3IyZzMzRU85NVZiMnRoU3ljcnN6U1JCNGduc24xamtRVWdiSldpUzRrdU1uY0RweEozSWhoYUJaczkwNWZHQkI4VXFwNW1rQnhPWGk3TkIzNmpjbXJNS0NBV2wyN1FsN2I4SEM0OFFVTURIMUhFMmFkM0lDTzdjb3poM3YrSjJVY0NIWmZUNnJvTk0ybWY4QU1QQWIvQmNpbzRUMnIzMEJIb1FoQWRFT2I4SmJISWtUeTRGRFY4WFYrYjFqNkxWU1RmS1R6QWo3QkRWcVpGaVQ1VDZvQTc2d2Fscmh4Z3o5UW8zMW1mTWZJL3VzRkFTSURyNlRaY25EOHU4WG45MHhIWFh1L1RWdDRqM0NocVltb2YxekhNZTBMc1lQaDlRdXpnNWJiNGdmTk1BUjJLZG84WDVrL1ZjZForSC9BRVUxU2k0VzFIQ0VMazVKQWQ1eHZINTVydHRZL045RnpSYU42NWRUNW9BdW5SUHBEWGF3MG5GMVNoR1dJTHVxSmt0SStWc2toTjloYlFaV1lHenEzUW1KM0VjMVJOajdVZFFjYldjQzA5MzFWMXdXek1ObG81Nm1ScGFEbkI3WWVJbThIVzI3ZXErTk95eHl0SWUxcUFJYUNKRFBoQkpJYmFMRFFHQ1JiaXRkVzFkVU5zMFRJN0ZqRFNhWWwvTURqeDA0d2lzTGo4NE1RSTFHVm9QTFFKMmlwdGcrYm1mTlltSFh1K1piUm9mSm0zNHRqeSttd2d3U0w2eHVNZHlYNFhEVTZ0RnJYTUpMRFVwbUNOQTRPWVltUjM5eW91TjJ2V2JVK1V6SUFhQm9kSUEvSlZvMlgwaGV5N1dqTFVPWjV5L0NZZ3VFanVrS012c2xoYnVoOVZaVURJWXdFaXd6dnl4enNES3AzVHh6NlpwMUhCbWFJSW1RUTBnZ0VhaWJqdTdsYzhWdEtXdGNLbWJmYUJBMExyZDZWWXJaN0tqeTk3R3ZmeGQydE5OYkp3cDdKNU9jSFQwVktrenJOb3RMMlpHMW1OMWR1cVVobGNJM1pnZzl2NEoxQnoyT2h3RHRSdnRBUGZCRTl4WG9GUERnUUF4dHR3amR5amNsL1RpalJxWVV0WmxGU200T2dDRHJEdDI4RWVTakp2a2lyazRubHNrNnF5OUVNT0FYUE9vQUE0d1RKOFRCOGxYM1U3d3JMMFN0VGUvaTd4aHJUSHVWYU01MmhMM1BFd0M2ZStJaFFNWUFNcjNqUzJobWRZTW1lNWQxNlRuUEJCdHowMTlEQ3pFYk5nZGt6RzR5ZSsyN2RmbWdRWGlNR0F5QzNNMDNCR3Q1MC9ONVFHSHBnTmNHa2dnQXRQaGxNbmhacDhVZGcydmlIT3RsdHFZNVgwaTNtaGFtSUFiTVNHa2h3R29HK083ODNJQUhiWG16b1BNMzlRdVhQSU5pU1A3Z1I1RVNGRFhlMlFSWmNQcWNEdTh4M0lHZ3ltMFFUYmR1L09ha0VUT241dVNxbFVMak0yUmVkdzNqdUtWam9McXVhYmZuZ295UnZ2NmVhRk5jYjlPOWE2MGFnd21GSGRUWHN3ZTY4aER1ckhoOUZ5NnNEcVI5dWRseTR6bzRKa2FOMUtrcUJ4NUxxb3dqZTM2K2lHcU5RQk00Vy9DaDNIY3VnREV4QzBYeWdEbk1tR0N4SFp5eWJhY0kvWXBZOFFwY0hVeXZhZHdJU1l5OWJEMmNTRFVxUEplZmhFLzRZNURjVCt5Wk1yT3B1ekRVZW80TFd5OFoxak4yWVJQTzFsRGpLeE55cTcyREhQOEF2Q3o1WGVpeFZuT2VJOGxpZGlvQTIySlpScnR0b1RIL0FGZ2ZWcFJteHNWVERSbUl1YmszNWc4ZDY3MmNIT3c1WTRkdW1YQ0hmTlRJcU5CNDNCSG1wdWwrQVpWWlR4bUhocmFrR28wR01qN2cyN3dRZWNIUXA2WXNrZm83Mmx0VU5xQU5MU1h0eXlIQU5neUIycGdhcHBzM2JOTXNhSG4rcEVGclJjRVR6Z3lMcnpldExTSTQrRXdwNnpXdWRuelRFVHhkYmdmaE83WGNrbFhZbHh1RjMyTGs3YnhiVURnRGJOSWxwSUJFYUM1SnNnc2ZpZjVsbVp6MjIxQU11SkZ3SGNodVZlcVU1cEY3TnpobTRqaDRTb2FtSk9qU1FOL0FmZFI0dTdOZVBQQ1VIQ2Evd2I2djRuSGhEZkcwK3FzSFI4WkdqbGMrMzFDcnpxanYxSFVXbjNWbndReTBRQURNRWt4ZVQrZXl0TWpWTUl4T0Vrc2l3T1U4K1gxVVdKYUJVbUJKRWJ3SEMrdk93SGdqZXNEZXJKMzIrdnBNSlJ0UEV3UUorRXh1dEIxNzdIelFJbW9zZ2tnbUMwNVpBa2NqeDNLdTdTckZyeTVzUTZaSEg5NUJVemNkdUZpSjNlRGx3WFp3UVJ2N1Ezam1FQUFod082VnRyRHJwOUUzMkZzdHRSK1YwOTloNnBqak9qTlFYQWtIZUJaUWVSSjBXeHhOcXl0MHBHZyt5TGRTYzBTVHJ3Q2E0UFpUbUgrcXdqaDl4eC9kSHV3QXFBK2t5b2M5azFBcWJIaVlpL2ZDeXRWbjlJSHFtMkoyV1pqOVhEY2YyUUdKMmVjcEkrSWF0L1pUVWlFb3NYT2o5cmZWYXpmOUlqalA0RnpVWWRDUFJRbG8zbFRJTkV0Vjl2eUIzTGltVCtmbk5hTUxYV3dtUlpza2I1VXpBTzVEOWFOM25DbHc5S1NQZEFXY1Y2Skhjb2Flbzd3aXNjZWVtNVFNWVpFOFFrTXNPQnhicWJ0ZkRpRTdOVE1BNEZWdVpIUGNpOEJqQTB3NDIzcUFEWFB5V0tYcnFmek5XMGdvWVlpaDFlSU9oRlNuU3F5TkhGdlllUjM2K0tIcjBtRVBZNkEzSU1wZ1pnNXZ3alNTMGlBWTc5eWtKTG0wWE9FRnRSOUl4b0cxUkxZLzdncE1UaDh4RnJrRDl4NWhTOGcrd3FGR20yayttV2dseEpEeXpRUUxBbS9FNnBKVTJWVXk1bWpNNG45SnRISDNWclpSYTNXMHJZYzFvN01lV25laFJTSnl5eWxCUitpdllMWjVhSHNkSno1QTZKZ2FuVWN5RXl3L1IvcW5oN2FnYUdtd2MyU1J2QjR6SlREcnllSHI5VnJVaTVPbGtNcVMyTXRvOUg2R0t3anFqYWVXcXp0QndzU0d1T1pwQTFsb1BtcXRpcXhhNlpzSE5CNFdGeDZyMExvd1RsY0F3aHM3NTN4OWl2Tjlxa0ZsUnVra2tlSUh0OUZLN0g1R0JyQitzZ1NDQkVIVGdxeHRldWVzZGZYMzMrb254VG4rWnptMnVVRWJwZ1IrZUtTN1RkbUpQRS9YL1JBeFlhNTFsTjZXRkw4cjJ6THZ0ZEptdEpNQzVYcmZRL29zYW1HYTRkaDR1Q1FkWTBQRUd5cnlUVVVXNG9jbUt0aDdIZURKa2N3QjdRcjloR01wTW1wSmFCdjM4Z0FFWHNqQUVEdHR5bHBNaVpISXp2c2x2U1BFU1ltd3RBa2UzY3NibHllellvMHFSWGVrZTJoVUphR0JqQnl1ZWZMZXFuVXg3bS9DNHozblRuK3llNHlrWEd6QjNmZ1NuRjdKemF1QUhBeDlZV2lMVkZNb3V4Ymk5c2d3SENTT0J2SzNUMnNIRVNSUGtlNmQ2a2QwZGJ1ZFBjZm9vSDdFeThWTGxFZ29TQ0g0RXY3VFludkhDeWdxYkx6U0hBQnczd1Q2dFJ1Qm9rRVhzckZTd3djQkkrNmk4alJhc1NaNXhpOE1XbUNPNVFDbU5mWmVqWXJaN1NDSENlOVY3SGJIcENUQThMS2F5MlZ6d1ZzclRRMGIvVlNtcmF3OGRTaWExT20zVDZvR3JCMEt0VHN6eVZFdEtrMFhjYmNEdldxY09xQzI4SUdVeDJhSmUyeDMreCs2VEVodmlzUCtvYUtObDl5YVlTbVNOSkNoeEdFeW1RSVVSZ3ZWdCtVZVN4VDVEeVdJRlpaYVRpOXIyNVk3SWUzam1ZNEVXOFhLWEhnRU5jT1JCMzlvVDlWM2hhUnpBZ0dORHVzUVFmZGJiUWluSi9TNHRNNzhqdnNRbSs0bDJGcHVkWktKdyt6bnV2WnZmUHNuR1ZyZElIY0ZvMSthbVJCNld5bWo0alBtUHFwMjBHTmlBQjdxTjFmbW9oWGt3TDl3SlNZKzRhSytYUWtkeGhVcnBKczhzYlRkQmg1ZjVOY1dhOHdQUlc0VTNuZEhlamRxN05GV2poR2tBLzRna2Yzays4cXFjK05NMDRNTG5KeFo1VTZ2bGUwOG9udkVqM1J0YkROY3kzNnJqejA5Q3JkMDI2RDlXMWhvdUdZTjdUVGE4YnVDcCt6bXZrTUlNM2dFeGZoNWoxVGprVWxvakxGS0puUTdZejYrTW90YTJRSEI1L3RhZTFyM3I2UXdlRERXd0F2Sy93Q0UyRW5GMUhnZGtVekhlNHRrZCtxOWZwTFBtZHlMWWZHQXMybmhERXRzVlROc1lYRUM3YVhXZHk5SmN5VVBYb3pvcWVQa3NobDhNOEoydnN2YUR2MEZqZUF0YmlZdVZWdHRiTXJVWFNjNWFRSWNSMlR4dUxXNzE5RTR2Q3ZNNVk3aXFWdFhadFJyaWVyZTJabkpkcDhORmJETFhnY3Nha2VlYkEyQyt0UmRVSkxiOWc3akF1WWk0bUxybkM0aDlONXB2TStvUGNUY0syMW1PMGwvK1NQWlEwK2o0ZTRsMU4yc3pKSG9GTnpzSTRtdklMcytpQ1lnK1N0ZUQyWkxaMVdZUFpNUVk1YzQ1cTE3SndrTmp3VkxleTlhUjU3dHFsa2txbjQ1em43NFhwL1RqWjU2cDVHdjdoZVBiU3puUEVqTG9EcWIzTUszRnNwelMwUlZkbTV0SDM0SU90cytvM1VlS0kyYUtsU28xZ1B4R05BUUJ2T2lPcjFhbEYvVjFlMERvUk1IN0ZhTGFNdEppRjlOTTloc21YUnBZYzUxK2lLMjFoUUtaZU44UjRrSjkwWDZNRitFWlVEdTI1NU1FOW5LSkhuYVU3dEVKTGlRdXdjZ0RNUnkzSnRzclpEcXJnSERzalU3aUJ1NzA5d1d3S2Jidk9kMy9pUERmNHBxd0FhZVNWTXJjeUwrVFo4alZpSmxhVHBrTEVyNnY0RUhpYXBEbk4zT2grdnpDSGVxbnhHMThIU3Mrc0hrYm05ci93QkI3bFZ6YlBTeGozVFRwbUlpWEJyZWU0RStxYlJORHlrSE9hSWJ1dWRCYlc1V3FyUTBTNTRBNWZjMlZHcmJhcTNoK1VIV1B1ZkZRNGZEMWF4R1ZyM2tteGduL3dBamIxVDdDb3VHSTJ4aDJOelNYZ21CRndTTlJ1SHVnaDB0cTVYQ2kxckdnU2M1a2NvQWlYYStSUSt6dWpJZTMrcGlXMHlMQmdwMUtydlBzdEhtbjJ5ZGpVS2JTSFllazhuOWRUTzQ5K1F1eWo5OTZoeXZzaVNYa3JUYStPeFFuK3NXWHUybThVL05nZ0RtWlhxblEvQkJ1RXc3VFVaVjZ1bzRabTVvN1pMc3ZhQU5zMFR5U2ZEMGNyY2djL0w4dVoyWHV5enB5Vmc2UEVGcjZXbWptK0ZqNDZLckxHVGpzMDlQT3BnWFNvT3FZazAyeVozSmxzem95eW5oS2pYTkJlN000RTZpMWlPR2hURForREZWNHFPdFVBSW5jVVhRRHY2alhURWZnV1ZXamJsbDhlQzhVVlArR1dITEhZbVJFdWFXbmRCQjMrU3YxSjkxVWVpUkxYMWFaRUdRZExFRFErVVdWb3c3NzNUbS9rWjNIUXhhSlhmVjJVTkp5S0RWT096TEswQVY4UHlTNnRSQlQrcUJGMERYYTFTbEV1eFpHSTNiTmFkUXUyWUZvM2ZSR1BBVVRzVTBiMURzYVZiN0dtYlBuZFpIc3cwYUtMRFl4cmoyVTJwTUVKeFNabnk1SlIweXM5SmNGbXBQSEZwWGxqdG5UZmY5bDdWdGVuTFN2TTMwNHFPSE5KdHhaZmkrY05sVXJiUElKTGV3NDZrTkZ4d05wUUdKMkwxcmdYT0pQZEVmbDE2QTNEeW82MkJINStjL1JQM1dONGtVVGFlekl3NzV2a2E1dzd3eDBlVno0SzdkSHNKMVdGb1V5SUxhYlo3eUFUNmtwZHRMWmhxdGN3T0RaQnVkKzdMM21ZVmh6Ymd0T0YyakoxZGFTT3cxYUFXZzUyZ0M1eWs4VmFZeVd5eER6eVdrQ3M4aW9iS3IxQm1aU2VXekJNV0hmS3MyemVqTk5yUTU5VXVxWDdMYU01WmJIeE9kRnBPNU9hV0Rhd3VHK2UwWkJCUEcxajNvMm15eWkwMldXVi9CZEg4cjg3aFRMcGtFaDl1OFRrUDdwNzFUM2orcFVkVTRBdUliSDl1bmhvcG9YWUhOUGloV3lObEVORmdCM1FGa25ORVdpZmY5dk5TMldad21JNmF1WDdXR0dpc1pBWVJJK2FkV2ptYnJoOVlRcWgwMHJFNUdrMnZBK3ZNd2sxcWlVVzB6M3ZaNHBWbU5xMGlNcjJnZ2plQ0VXN0o4QTFqODkxNEQwRDIvamFiaGhxUDlSamlaYVo3RW03ZzRhQytpOWMyRlFxdHhBZFVkT2FtYmJoZHAraXhUK0xvMmNPVVhLd3RteWd5cG5hZTlURk1Lb1F0VmlybWlVSjMzTW8xSVJaeFBOQUZDVjhSQ1NsUkwybEpqR3ZqZ1JxbHRmR2dYbExNWHRDTjZSNDNhZk5QazJYUXhSaU9NZnRiaDVwUlF4UnJWVzA5emo1Ny9BS0pYUWMrdStKc3JLTUIxYld1cGp0TXVPZHJ6NWxCZGFTTFRnOW45V0JEYkpyaGhiVzNzdktzVi9FQ3ZUcVpYWWR4QS9MY1ZaZGc5Tm1Wd1lPVncxYTRRUjRjT2FzaTFIWml5NHB5OGxuMm02QXZOOXJraXFITkV0RTVvNTcxWk5vN2NhVEJJVlJxYldZS3BrMmhSbExrOUYrR0hDT3hwaEhBb21xeXlyK0cyb013WUd1dVREZ0xEaEtjSEVTRkNpd1hWb0ZScDUvUW8yZDZVN1NxOXBzY2ZvVmFxT3dIbTVlMERsSldyQzZSZzZ5TzB4WDF2TmE2MVBHOUhHNzNud0FDS3BiRHBEVUU5NSt5djVHTGlWanJ1U3hXei9aTkg1QjVuN3JFdVFjVHp5bGh3QkVXVXphYUo2b3JmVkt3QWJJVm1VS2JxbG5WbElDT3loY3pYZ2luTnNvWUpRQkMxaVFkSzhBWHRZNEM3WEhkdUlWbDZrOGZCZEhDenUrNkd4b0IvaERnNHJWWHhIWkRUenZQMlhzWFZEWGYrZllxb2RFZG1pa0M0Q0M4a3hwcGFmUlhHZENzRTNjalZLMUZFUnFpWTNnU29hcmx1cVlNSVNwVnZDcmt5MkVTS3RWaExNWldPcUp4TDB0eHJ4RVdsUU5DMFZ2YXVPSU5rbkRYVkRlUTFQY1ZoUVozbElzYzk4RU1hU2VYc3JZVUUyL0JZOWp2cHNnRDhLc3RPdU5GNWxnRGlxUnpWY084N3dXRnJvOExGUGFQU0dvSXk0U3E3dkVleWswUlNreDV0UENOZnFPOHd2UHRzZ01xZGlRNFdEaFkraXM5WHBuVkZuMEF3Y0hCemZVaExhdU93OVIyWnd5SFV6Y0hpQkNhSk9Eb1JWTVpXL1VkVVJzbkQ5dk03dE81MzkwVmpjWlFKQWFSMzZlNmlmVURORGJqWk5rZnhHV2NCMG9oMkxnV1NPdGlwRFlOMUpubUJ4U29uRjhuU0RUWHpHU2k4Si9GTHFxanNOWHBYWTdJMm9EWWdSbGxzVE1RbHpMRlZmYkd5YWpzZm55bnEzRmp5N2QyV3R6Q2VNaFc0bXRoNmhpNHVNRDJQL2JlSWNKYXhvSGNUN2xEdTJ2V2Qrc2p1Z1I2SlhoOGFZYVd5T1NPcVZKSk1lU3VnN2paeWNxNHlwRW44L1YvK1IvbVZpaHo4bGlaWGJOUnpXTmJPZ251dXJZM1o5SUVSVGJyT2ttM2Z6UjFtamNCNUpjeWFnVTFtejZwMHB1OG85MU8zWVZZL0tPOTMyQlZqcTQra05YdDg1OWtKVjI1U0h6SHVIMU1JNU1kSUFwOUhDUjJxbmszN2xFVXVqbElhbDd2R0I2S005SWdiTnBuL0FMaVBvRkM3YmxRN21qd0o5MGJZV2tOYWV5YVFqc0R4djdvcHRGcmJCb0hjQXEwY2ZXZWZqTjlBTGVVS3diS3dqbWlYa2x4NGttT1dxcXl5NG9zZ3JKYWRQMEtZVW5XaER4RDQzRUxiK3lZOGxqVWk2VzlBMkllVE5yajFRZFY4Z1hVK1BjWXpEZHFrMWJHdEVHZXlmUlFrOW1qSEhSbGVyRzlMY1JXa2MxUGlLb0lzbGpnWmpYbW1peWlHNUtZN0p3UW1YQlJVcUU3azV3REFMRUZPd0ozNGR1dGtCaU1jMm1lMHp4Q2NHbkFTVGFkS1FiVDRKcGpUSWEyMWFOUUVGelhEZzREMktydU8yVmgzbVEyUDdIRm84aFpBN1YyT1NUQWNQTkpxbUdyTXRtZUI0cTViSmM2OEJ1ME5rVVJab2ZQTjVTdG14M2tmNGpvbXdtMzdvL0RZWjVkMm5FK2FhTlpsYW55b3JrbElYN1B3a0NYR1kwWGJOU2ZKYXF2Sk9VZU4xSTBXU2JPajZkMC9LZk45a2RqVk84UGdCVm9FeUJEclROanpNV0Z5a2dOdVlLZjdCZVMxelpNRVQ1cXpFazViTW5xMXhtMlE3TmJKTjVEUWI2YWIxMmNRZVBxdGorbTEwL3E3TGVQTTl5Q0xndGpTU3BIQXR5ZHNMNjFiUWZXZDZ4UW9LTFBWMmhWZHE5M2dZOWtNOXpqcVNaNHJrcmJqQ2RFaklVVmVHZ3VjUTBEVWttQjVJVGFXMVcwOTh1K1VmVTdsWE5xN1ZxVlJCRFFBWmlUNm9vRWhxL3BGU2FUbERuZHdnZVpLanA5TDZWZzVqMmlibnN1ampZRVNxcFZxRzhnZUJRZFdEb2ZCT2lSNzMwVXhHRXF0elllcTJvNzlXNTdlUllidDhrOWM2Rjh4NGZFdnBQRDJQY3g3ZEhOSkJIaVBaZWxkRHY0bFp5MmhqQ0E0MmJYRUFFN2hVR2pTZm1GdVFXTE5obDNXelJCcDZQVGEzYUZ0Um9wR3Y2MW5CdzlDRUxUcVFWbFhzbk8zUTYvZFpiTFhEL2dPYXR5RFlqVWZtNUlOdFlMVjFQeGJQc3JGaTJDb0pGbkRUbnlLUTRxb2JnaUNOUnZVR2FZT3lwamFaYklNMjQySThPQzIzYVlGL3JLbDJ2Z3c0VG9lSS9McW80b1ZLWkkvUEpXeGltRW5SNkRnZHBOTzlOOE5pZ1lncnlLanRndE55VTB3L1NVamZidy9BcCswL0JYN2lQVzZWWUhlcEtqZ3ZPY0gwckIxY0VjT2tnajRyZDZYQmo1SXNtS2NPUitpVjE4SzA2Z0pUVTIySFdrcUYrMXJXVDRNZkpCMVRDdGJvQWttMHF0OHJSSjVMakU3WUpzMlo5MEVjUFVjY3hkbFV1TmR6VjAzVHl6UFMwVFVLRVR2SjFVajJ3SjBDanE0MXJCQWg3dVdnNzBCVXhqM2ZFZkJGSG9JOE1VZU1RMHZoam5rMkFueTNxTFovU05oZDFiSms2T3NCWUVuVy9CVE5vWnFUbTczTkk4d2lPaVd3OE5UQjYwNW51QkU2RnVud2pjZmRYNHBSaW0zM09INnRpbE9TUytqZjh5WFhNazd2dDdMdGtxV3RnUXgwVFBBalFqY1F1Z0F0QzJlYmNXblJGQjVyYUl5OTZ4UzRzZnR5K2hjZW1kTUg0Q1IvY0ovOVNnY2QwcWMrUTF4WTNnTmY4MzJTaHoxQzRvb1lYL01zTTlvbnhoUTFIYzNEeG42b1I0SEFMV2ZpUEpNRHA3M2pRejNxRTFtazNrRkYwMnRkbzZEd2RjZUNocjRXZDBjeG9nQ010dHhDZ3EwdkpjdWE1dWhXQ3Z4U0haZitoZjhRVFFhS0dLRG4wMjJaVUhhZXdmSzRFOXNEanIzcjFMWmUxYU5kbWVqVWJVWm9jcG1PUkJ1MDhpRjg0U0R5VSt6OW9WYUR4VW92ZFRlTjdURThpTkhEa1pXWEoweWx0RjhNM2huMFU3czkzdHlRRzBhYmFnNE9Hamh1KzQ1S2xkSC93Q0pqWHhUeGJjaDA2eGdKWWY3bWF0N3hJVmxxNHhyZ0hzY0hOY0pEbWtFSHhDeFRoS0hjMjQ1S1cwSnNXSE5PVjRoMjdlMTNjVWx4akFaa1FWWmNWVWE5dVYxL2RWL0dOTGRlMDNqdjhlYUlrbVZ2R1lHNU1mWkxhbUVoV2FxRURYcDhsb2pJenlpSStxSzZheDI0bnpUTHF3dWd3S2ZKa09JSFRZLzVpaXNQaDNHNWVZOGwzbEdnUkxJQWhKeU52UjRGbHlKUHNqdWlNdncyNTZueksyNWdQeEV1NzFIMWkxMW5DL2RkVm5wWVJVVlNWQk5LazBhRHdDNmJnUTQyc3NvWUp4dTQ1Rzg5VnZFYlVZd1pHR2VhQ1VuRkw1Qm5XaHJtdEIwMThGSHRla0RVRDI2dUhyL0FLSVRCalBlOTV1aUt0TXRMV0E5cVFXdU5tM0doUEhWVFNPUDEwdVUwLzRHdXptdHFNRk11RG5nU3plWFpqZG84aVFPU0Zkam1CNVlJbjZqVUR1dDZxSEMxK3JEcWhEV1ZxVXV6RDlmSnZFYWR5UlVRUWVzY2UzTnA3NUxqN3JkMHFiMnpCSERIbnpMTm1mdzlGaTU2dy9JUE1yYTZWbTNYMFVaM2VvM1BLMjVSdUs1N1BNR2RaTys2NWY1TGx3QlVaa2N4NnBCWkoxc2ErWVJkS3Z6UzdOUDJYVER3UU1QY0FVSFZvY0ZJeXF1aStlOUFBQkN3VmVLSXFEajVxQjlKQWpaTWl5SjJWdHV0aG5UVGQyVHF4MGxqdkRjZVl1bHpnUXN6ZzZxTFNlbVNqSnA2UFVOazdmcDRoc3NrT0h4TVB4TjlPME9ZVTFlcnF2S3FWVjFOd2V3bHJob1IrYUs2N0UyNDJ1MGc5bXFCZHZ6UnZiOXR5eFpNRGp0ZGpianpxV24zQ3E3T0ZrQlZKQnVqM2MxRlVZb0lzYUFDVnkyazVNV1VnYlI1b2xtRUhCVHNqeEZnRFdDWGVLbk8wNkIxWWZCcCt5bExXekJJN2x0K0dKMFVXN1BRK200WlF4OGwzWU03YTJISDZENGdyUjZRQ1A2YlBJUXBoczRDNTFXL3dDVkEwQ1dqYy9kKzBMblk1OVg0M09BNEFJM0M0QnB1RFBlcGptSHdocUdxVTNPTjNYNUtSVS9qdDdHMkFJRlJyWXNKMDdrMHBiUEZXV1BKSUh3M0FpMnZLSktXN0d3aGd2TzRIeDRsTldPSDNWMFlYRTg1MTNXZjN4WnQrR01aU2NCSU15TkhBQUFIMTlFZ2ZYYTFycWovaEZvNDhrWHR5b090eXQzUTN4MytwVlQ2UlkyU0tiZmhIdXQrTmNJRW5sNHc1RG4vZTF2eXUvekxTcG1aWW43cktmNnFRK2NTRnpuSGNVUVNvS2pKVlRPV2N2WEJLNEpJc2RGamlrQnA0OEN1UlU0NnJDVkc0N2o0SUFJYTlkNTBMVHFianF1eTVBd2tQV2kyTkZDSExwdFJBR3lWRFVvQkVTQ3VYVWpxRUNBYmhkVTNrRU9ZUzF6VElPOEtaenVJWEJZMDZHRURSWk1IMG1ZUUJWYVd1M3VhSmIzeHFPNjZjc2UxN1E1amc1dTRneU83djVLZ0dtZVJVbUF4dFNnL015NC9VM2M0YytmTlpwNEYzUm9obmZhUjZGUW95UVR1OUVYWDdMU1VEc2phVk9xek13OTRPclR3UDVkZGJheHdaUnFPNE5QcUxlc0xMVDVVYkxWV1E0cWc1anNyMjdnUVpHamdDRHoxV1U2Ui9TNDl5VGJGMnVQNVVkYTRnMFNHVEJKeVBrc0JnYmlIZ2VDS2IwaXd3LzVqajNNY3JaUWQ5anU5TDFtRjRsY2t2OEFZMGE5MjhIeVdPU1dwMG9vYmhVZC93Qm9IdVV0eFhTcy93RExwQnZOeEo5QkFRc1V2b25rOVQ2YUMvS3l5a1R4UEpRMHF3ZlVGR21RNm9kWXVHRGU1eCtuRlVuRmJWclZQaXFHT0RleVBJSnQvRCtzVzRzQ0p6Tkk3b2d5RmJIRDluSDZuMWR6VFdOVi9KNmhTWmxzUDA2Zm4wVzNQQUJPNkpPZ3NCK3k2dWwrM0ttU2k4emQwTkhqcjdGWHhXemlRdWMwdnNxT054UHgxVHhKSGVkRlNhenlUSlZoNlIxc3JXc0hlZlJWdHl1bjlHM3FKYlVmbzVXTGNyRkV6YkxEaDFwMnEyc1NaU0QxbERUVzFpUUdsRFdXTEVDTnZYZTVZc1FNNksyc1dJR2JSREZpeEFFV0tRSzJzUUIxVFdqcXNXSUdPK2hmK083L0FPcys2YjlNUDhNZm5CWXNXUi9zUnFoK29SYk0vd0NEeHY4QStiLzJxSkE3VmJXTFY0TWk3czJGelUxVzFpR0pISVZrNkFmOGEzKzEzMFdsaVF6MWo5MG02VGY0YmY3eDdPV0xGTEgrUlowMzdFZWI5SmY4WHdTUllzVTVkeTdQK2JPVml4WW9rRC8vMlE9PVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtOCBjb2wteGwtNiBjaGF0XCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyByZWY6IFwibWVzc2FnZXNCb2R5XCIsIHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keSBtc2dfY2FyZF9ib2R5XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX2woX3ZtLk1FU1NBR0VTLCBmdW5jdGlvbihtZXNzYWdlLCBpbmRleCwga2V5KSB7XG4gICAgICAgICAgICAgIHJldHVybiBbX2MoXCJNZXNzYWdlXCIsIHsgYXR0cnM6IHsgbWVzc2FnZTogbWVzc2FnZSB9IH0pXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJJbnB1dFwiKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==