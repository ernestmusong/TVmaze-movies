/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faHeart.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faHeart.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'heart';
var width = 512;
var height = 512;
var aliases = [128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578];
var unicode = 'f004';
var svgPathData = 'M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faHeart = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbody {\r\n  background: #fff;\r\n}\r\n\r\n/* -------------------------------------------HEADER--------------------- */\r\n\r\nheader {\r\n  width: 100%;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n  margin-top: 0;\r\n}\r\n\r\nnav {\r\n  height: 70px;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.logo {\r\n  border: 2px solid black;\r\n  border-radius: 100%;\r\n  width: 50px;\r\n  height: 50px;\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\n.menu-wrap {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  list-style-type: none;\r\n  gap: 0.5rem;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #333;\r\n  font-weight: bold;\r\n}\r\n\r\n/* -------------------------------------------MAIN CONTENT-------------------------- */\r\n\r\nmain {\r\n  padding: 2rem 1rem;\r\n}\r\n\r\n.shows-container {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\r\n  grid-column-gap: 1.5rem;\r\n  grid-row-gap: 1.5rem;\r\n}\r\n\r\n.show {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  align-items: center;\r\n  width: 150px;\r\n  padding-top: 2px;\r\n  padding-bottom: 2px;\r\n  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.img-wrap {\r\n  width: 85%;\r\n  height: 100px;\r\n}\r\n\r\n.show-img {\r\n  max-width: 100%;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.heart {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n.likes-conatainer,\r\n.likes-value-wrap {\r\n  width: 85%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.likes-value-wrap {\r\n  justify-content: flex-end;\r\n  width: 100%;\r\n  padding-right: 2px;\r\n}\r\n\r\n.likes-value-wrap p {\r\n  display: flex;\r\n  gap: 5px;\r\n}\r\n\r\n.like-btn {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.likes-btn {\r\n  border: none;\r\n  outline: none;\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n\r\n.comment-btn {\r\n  width: 85%;\r\n  text-transform: capitalize;\r\n}\r\n\r\n/* ------------------------------------Popup---------------------------------------------------- */\r\n\r\n.popup-overlay {\r\n  background: rgba(193, 199, 208, 0.9);\r\n  backdrop-filter: blur(5px);\r\n  padding-top: 20px;\r\n  padding-left: 16px;\r\n  padding-right: 16px;\r\n  width: 100%;\r\n  top: 0;\r\n  bottom: 0;\r\n  position: fixed;\r\n  z-index: 999;\r\n  margin: 0 auto;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.remove-popup {\r\n  display: none;\r\n}\r\n\r\n.popup-card {\r\n  width: 100%;\r\n  background: #fff;\r\n  padding-top: 16px;\r\n  padding-bottom: 20px;\r\n  padding-left: 16px;\r\n  padding-right: 16px;\r\n  border-radius: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  align-items: flex-start;\r\n  margin: 2rem 0;\r\n}\r\n\r\n#popup-close {\r\n  top: 8px;\r\n  right: 8px;\r\n  position: absolute;\r\n  width: 40px;\r\n  height: 40px;\r\n  display: grid;\r\n  place-items: center;\r\n  background: transparent;\r\n  border: none;\r\n}\r\n\r\n.popup-img-wrap img {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  height: 100%;\r\n  border-radius: 8px;\r\n}\r\n\r\n.popup-btn-wrap img {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n#popup-close img {\r\n  height: 12px;\r\n  width: 12px;\r\n}\r\n\r\n.popup-img-wrap {\r\n  width: 100%;\r\n  height: 216px;\r\n  border-radius: 8px;\r\n  position: relative;\r\n}\r\n\r\n.origin {\r\n  text-transform: capitalize;\r\n  font-weight: bold;\r\n}\r\n\r\n.title-wrap,\r\n.comment-wrap,\r\n.add-comment {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-weight: bold;\r\n  width: 100%;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.title-wrap h3 {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.more-details-wrap {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.more-details {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.align-right {\r\n  text-align: right;\r\n}\r\n\r\n.commentors {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.form {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  align-items: center;\r\n}\r\n\r\ninput:focus:invalid {\r\n  outline: none;\r\n}\r\n\r\n.form textarea {\r\n  font-size: 0.94rem;\r\n  height: 90px;\r\n  width: 100%;\r\n  padding-left: 12px;\r\n  padding-top: 12px;\r\n  vertical-align: top !important;\r\n  resize: vertical;\r\n}\r\n\r\n.form input {\r\n  width: 80%;\r\n}\r\n\r\n.form input,\r\n.form textarea {\r\n  border: 3px solid black;\r\n}\r\n\r\n.form input:focus,\r\n.form textarea:focus {\r\n  border: 1px solid #333;\r\n}\r\n\r\n.form label {\r\n  width: 50%;\r\n}\r\n\r\n.form input::placeholder,\r\n.form textarea::placeholder {\r\n  font-weight: bold;\r\n  color: #333;\r\n}\r\n\r\n.btn-container {\r\n  width: 50%;\r\n}\r\n\r\n.btn {\r\n  background: transparent;\r\n  color: black;\r\n  text-transform: capitalize;\r\n  font-weight: bold;\r\n  font-size: 0.94rem;\r\n  padding-left: 12px;\r\n  padding-right: 12px;\r\n  border: 3px solid black;\r\n  border-bottom: 4px solid black;\r\n  border-right: 4px solid black;\r\n}\r\n\r\n/* -------------------------------------------FOOTER---------------------------------- */\r\n\r\nfooter {\r\n  font-size: 14px;\r\n  border: 1px solid black;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n/* ---------------------------------------------------MEDIA QUERIES--------------------------- */\r\n@media only screen and (max-width: 768px) {\r\n  nav {\r\n    gap: 2rem;\r\n  }\r\n\r\n  #desktop-popup-btns {\r\n    display: none;\r\n  }\r\n\r\n  #desktop-popup-close {\r\n    display: none;\r\n  }\r\n\r\n  footer {\r\n    text-align: center;\r\n    padding: 20px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  header {\r\n    padding: 0 4rem;\r\n  }\r\n\r\n  nav {\r\n    gap: 2rem;\r\n  }\r\n\r\n  .menu-wrap {\r\n    gap: 1.5rem;\r\n  }\r\n\r\n  main {\r\n    padding: 4rem;\r\n  }\r\n\r\n  .shows-container {\r\n    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));\r\n  }\r\n\r\n  .show {\r\n    width: 325px;\r\n  }\r\n\r\n  .img-wrap {\r\n    height: 200px;\r\n  }\r\n\r\n  /* Popup */\r\n\r\n  .popup-overlay {\r\n    padding-top: 122px;\r\n    padding-bottom: 86px;\r\n    padding-left: 260px;\r\n    padding-right: 260px;\r\n  }\r\n\r\n  .popup-card {\r\n    padding-top: 78px;\r\n    padding-left: 24px;\r\n    padding-right: 24px;\r\n    padding-bottom: 44px;\r\n    border-radius: 8px;\r\n    gap: 12px;\r\n    position: relative;\r\n  }\r\n\r\n  #desktop-popup-close {\r\n    top: 24px;\r\n    right: 24px;\r\n    position: absolute;\r\n    width: 40px;\r\n    height: 40px;\r\n    display: grid;\r\n    place-items: center;\r\n    background: transparent;\r\n    border: none;\r\n  }\r\n\r\n  #popup-close {\r\n    display: none;\r\n  }\r\n\r\n  .popup-img-wrap {\r\n    width: 100%;\r\n    height: 400px;\r\n  }\r\n\r\n  .popup-title-wrap {\r\n    width: 100%;\r\n    padding: 0;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    justify-content: space-between;\r\n    gap: 12px;\r\n  }\r\n\r\n  .popup-title-wrap h3 {\r\n    font-size: 2rem;\r\n    font-weight: 700;\r\n    line-height: 44px;\r\n    width: 589px;\r\n  }\r\n\r\n  .popup-btn-wrap {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 12px;\r\n    height: 56px;\r\n  }\r\n\r\n  .popup-btn-wrap li a {\r\n    background: #36b37f;\r\n    border-radius: 4px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 12px;\r\n    gap: 12px;\r\n    font-weight: 500;\r\n    font-size: 15px;\r\n    text-transform: capitalize;\r\n    color: #fff;\r\n    border: none;\r\n    height: 48px;\r\n  }\r\n\r\n  .popup-btn-wrap img {\r\n    width: 24px;\r\n    height: 24px;\r\n  }\r\n\r\n  #popup-mobile-btns {\r\n    display: none;\r\n  }\r\n\r\n  .popup-tech {\r\n    width: 500px;\r\n  }\r\n\r\n  footer {\r\n    padding: 20px;\r\n    padding-left: 1rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\r\n\r\n*,\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbody {\r\n  background: #fff;\r\n}\r\n\r\n/* -------------------------------------------HEADER--------------------- */\r\n\r\nheader {\r\n  width: 100%;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n  margin-top: 0;\r\n}\r\n\r\nnav {\r\n  height: 70px;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.logo {\r\n  border: 2px solid black;\r\n  border-radius: 100%;\r\n  width: 50px;\r\n  height: 50px;\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\n.menu-wrap {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  list-style-type: none;\r\n  gap: 0.5rem;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #333;\r\n  font-weight: bold;\r\n}\r\n\r\n/* -------------------------------------------MAIN CONTENT-------------------------- */\r\n\r\nmain {\r\n  padding: 2rem 1rem;\r\n}\r\n\r\n.shows-container {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\r\n  grid-column-gap: 1.5rem;\r\n  grid-row-gap: 1.5rem;\r\n}\r\n\r\n.show {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  align-items: center;\r\n  width: 150px;\r\n  padding-top: 2px;\r\n  padding-bottom: 2px;\r\n  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.img-wrap {\r\n  width: 85%;\r\n  height: 100px;\r\n}\r\n\r\n.show-img {\r\n  max-width: 100%;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.heart {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n.likes-conatainer,\r\n.likes-value-wrap {\r\n  width: 85%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.likes-value-wrap {\r\n  justify-content: flex-end;\r\n  width: 100%;\r\n  padding-right: 2px;\r\n}\r\n\r\n.likes-value-wrap p {\r\n  display: flex;\r\n  gap: 5px;\r\n}\r\n\r\n.like-btn {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.likes-btn {\r\n  border: none;\r\n  outline: none;\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n\r\n.comment-btn {\r\n  width: 85%;\r\n  text-transform: capitalize;\r\n}\r\n\r\n/* ------------------------------------Popup---------------------------------------------------- */\r\n\r\n.popup-overlay {\r\n  background: rgba(193, 199, 208, 0.9);\r\n  backdrop-filter: blur(5px);\r\n  padding-top: 20px;\r\n  padding-left: 16px;\r\n  padding-right: 16px;\r\n  width: 100%;\r\n  top: 0;\r\n  bottom: 0;\r\n  position: fixed;\r\n  z-index: 999;\r\n  margin: 0 auto;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.remove-popup {\r\n  display: none;\r\n}\r\n\r\n.popup-card {\r\n  width: 100%;\r\n  background: #fff;\r\n  padding-top: 16px;\r\n  padding-bottom: 20px;\r\n  padding-left: 16px;\r\n  padding-right: 16px;\r\n  border-radius: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  align-items: flex-start;\r\n  margin: 2rem 0;\r\n}\r\n\r\n#popup-close {\r\n  top: 8px;\r\n  right: 8px;\r\n  position: absolute;\r\n  width: 40px;\r\n  height: 40px;\r\n  display: grid;\r\n  place-items: center;\r\n  background: transparent;\r\n  border: none;\r\n}\r\n\r\n.popup-img-wrap img {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  height: 100%;\r\n  border-radius: 8px;\r\n}\r\n\r\n.popup-btn-wrap img {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n#popup-close img {\r\n  height: 12px;\r\n  width: 12px;\r\n}\r\n\r\n.popup-img-wrap {\r\n  width: 100%;\r\n  height: 216px;\r\n  border-radius: 8px;\r\n  position: relative;\r\n}\r\n\r\n.origin {\r\n  text-transform: capitalize;\r\n  font-weight: bold;\r\n}\r\n\r\n.title-wrap,\r\n.comment-wrap,\r\n.add-comment {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-weight: bold;\r\n  width: 100%;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.title-wrap h3 {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.more-details-wrap {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.more-details {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.align-right {\r\n  text-align: right;\r\n}\r\n\r\n.commentors {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.form {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  align-items: center;\r\n}\r\n\r\ninput:focus:invalid {\r\n  outline: none;\r\n}\r\n\r\n.form textarea {\r\n  font-size: 0.94rem;\r\n  height: 90px;\r\n  width: 100%;\r\n  padding-left: 12px;\r\n  padding-top: 12px;\r\n  vertical-align: top !important;\r\n  resize: vertical;\r\n}\r\n\r\n.form input {\r\n  width: 80%;\r\n}\r\n\r\n.form input,\r\n.form textarea {\r\n  border: 3px solid black;\r\n}\r\n\r\n.form input:focus,\r\n.form textarea:focus {\r\n  border: 1px solid #333;\r\n}\r\n\r\n.form label {\r\n  width: 50%;\r\n}\r\n\r\n.form input::placeholder,\r\n.form textarea::placeholder {\r\n  font-weight: bold;\r\n  color: #333;\r\n}\r\n\r\n.btn-container {\r\n  width: 50%;\r\n}\r\n\r\n.btn {\r\n  background: transparent;\r\n  color: black;\r\n  text-transform: capitalize;\r\n  font-weight: bold;\r\n  font-size: 0.94rem;\r\n  padding-left: 12px;\r\n  padding-right: 12px;\r\n  border: 3px solid black;\r\n  border-bottom: 4px solid black;\r\n  border-right: 4px solid black;\r\n}\r\n\r\n/* -------------------------------------------FOOTER---------------------------------- */\r\n\r\nfooter {\r\n  font-size: 14px;\r\n  border: 1px solid black;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n/* ---------------------------------------------------MEDIA QUERIES--------------------------- */\r\n@media only screen and (max-width: 768px) {\r\n  nav {\r\n    gap: 2rem;\r\n  }\r\n\r\n  #desktop-popup-btns {\r\n    display: none;\r\n  }\r\n\r\n  #desktop-popup-close {\r\n    display: none;\r\n  }\r\n\r\n  footer {\r\n    text-align: center;\r\n    padding: 20px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  header {\r\n    padding: 0 4rem;\r\n  }\r\n\r\n  nav {\r\n    gap: 2rem;\r\n  }\r\n\r\n  .menu-wrap {\r\n    gap: 1.5rem;\r\n  }\r\n\r\n  main {\r\n    padding: 4rem;\r\n  }\r\n\r\n  .shows-container {\r\n    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));\r\n  }\r\n\r\n  .show {\r\n    width: 325px;\r\n  }\r\n\r\n  .img-wrap {\r\n    height: 200px;\r\n  }\r\n\r\n  /* Popup */\r\n\r\n  .popup-overlay {\r\n    padding-top: 122px;\r\n    padding-bottom: 86px;\r\n    padding-left: 260px;\r\n    padding-right: 260px;\r\n  }\r\n\r\n  .popup-card {\r\n    padding-top: 78px;\r\n    padding-left: 24px;\r\n    padding-right: 24px;\r\n    padding-bottom: 44px;\r\n    border-radius: 8px;\r\n    gap: 12px;\r\n    position: relative;\r\n  }\r\n\r\n  #desktop-popup-close {\r\n    top: 24px;\r\n    right: 24px;\r\n    position: absolute;\r\n    width: 40px;\r\n    height: 40px;\r\n    display: grid;\r\n    place-items: center;\r\n    background: transparent;\r\n    border: none;\r\n  }\r\n\r\n  #popup-close {\r\n    display: none;\r\n  }\r\n\r\n  .popup-img-wrap {\r\n    width: 100%;\r\n    height: 400px;\r\n  }\r\n\r\n  .popup-title-wrap {\r\n    width: 100%;\r\n    padding: 0;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    justify-content: space-between;\r\n    gap: 12px;\r\n  }\r\n\r\n  .popup-title-wrap h3 {\r\n    font-size: 2rem;\r\n    font-weight: 700;\r\n    line-height: 44px;\r\n    width: 589px;\r\n  }\r\n\r\n  .popup-btn-wrap {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 12px;\r\n    height: 56px;\r\n  }\r\n\r\n  .popup-btn-wrap li a {\r\n    background: #36b37f;\r\n    border-radius: 4px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 12px;\r\n    gap: 12px;\r\n    font-weight: 500;\r\n    font-size: 15px;\r\n    text-transform: capitalize;\r\n    color: #fff;\r\n    border: none;\r\n    height: 48px;\r\n  }\r\n\r\n  .popup-btn-wrap img {\r\n    width: 24px;\r\n    height: 24px;\r\n  }\r\n\r\n  #popup-mobile-btns {\r\n    display: none;\r\n  }\r\n\r\n  .popup-tech {\r\n    width: 500px;\r\n  }\r\n\r\n  footer {\r\n    padding: 20px;\r\n    padding-left: 1rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/assets/images/closeIcon.png":
/*!*****************************************!*\
  !*** ./src/assets/images/closeIcon.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHKSURBVHgB7ZgxUsJQEIZ3H6FTJAUFHZxAjyClNlDhARh7ZzyAcgBntHY8gFTQaKlH4AbQUeBMIkgFZn0bGI2ZQOJ7mfiKfE0IeZl8s8luJj9CiOnUOQYQTRTUIoIaZAHCEAmHy6XXrVbt8e9DG0Yjp7xXEldAdAH/CeKtJbyubduuvwvfcvgCBEdgArKilqAGSwreX1fOEDlGuqw86STBycSpWUUcgYGsiBqiWFybmkgBoSUIyZxbG0IgNnH65hIYjADDyQV1yQV1sUCBm/uev+20T6B8sL9zrfs+h4fes//78rwNf0W5gs7sw78wC0CMHK9VRUmwc3YKdmlvp2RQjtfyOZkJljcX3CYZJcfnqKD1JnFZ7vHpR0Q+k0xactqCUZJMWnKpCIYlmbTkmHTmIFGy/xTQFgw3RFx3ZyoY1a1JRlAmgttGSdwIykQwbs6lKakkmGTORUlmJsgkGSVBSVXybxJdckFdckFdZLoAYzAVGcMJj2gAhsKpq0CCPhgKR8KiUrFfEegODIOkE+fVfpMUCnDN9xsMgaTLYi6dYNPFnAVzJmxCJblyixk16vVAiB6EI2GuKBbwMKvcmieJ90kDue3zIxc89gUYoyhywRTOlwAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/assets/images/heart.png":
/*!*************************************!*\
  !*** ./src/assets/images/heart.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7N13uGRVlf7x79uSMwYUyQ6CioDAkJEkSUQUJIgiQUFM+BMTmMY4IyZmDIAMKEEUFRAFJOccBpWgAiaigIjk2E2v3x/7dNPd3FB1b1Wtc+q8n+e5D4buu9/ups9atc8OigjMzMysXaZkBzAzM7PBcwNgZmbWQm4AzMzMWsgNgJmZWQu5ATAzM2shNwBmZmYt5AbAzMyshdwAmJmZtZAbADMzsxZyA2BmZtZCbgDMzMxayA2AmZlZC7kBMDMzayE3AGZmZi3kBsDMzKyF3ACYmZm1kBsAMzOzFnIDYGZm1kJuAMzMzFrIDYCZmVkLuQEwMzNrITcAZmZmLeQGwMzMrIXcAJiZmbWQGwAzM7MWcgNgZmbWQm4AzMzMWmiu7ACWQ5KApYFXAIsCC1dfi8zyn8f6WoTSQD4BPF7984lR/vsTwP3AbcDt1dedETG1779Qs5qTNDewDLBc9bU88BJggTm+Fhzlv08HHgEe7eBr1h/3MPBX4K6IiL7/Qq125D/34SZpIWDlEb5Wojw8skwH/k5pBm7jucbgb8D1EfGPvGhmvSVpCWB1YAVmL/TLAS8ndzb2CeBW4JY5vyLiscRc1mduAIZA9Wl+eUYu9EvlJZuU24FrgWuqf14XEY/mRjIbn6SFgbWAtYF1qn8ulxpq4u5mhMYAuM2zBs3nBqChJL0CeAOwefW1RG6ivpsO3MxzDcE1lJkCv0awNNX0/eo8V+jXAV7F8K+v+gdwQfV1fkT8NTmPTYAbgIaQ9DJKoX9D9dXUTxS99ChwDnA6cIZfG9ggVNP52wLbAVtR1sS03e3A+dXXBRFxb3Ie64AbgJqStBiwKc99yn9NaqD6m06ZGTgdOD0ifpecx4aIpNdRCv52lE/6w/4Jf7L+QDU7AFwUEQ8l57ERuAGokeohsyuwBbAmfshMxl3ArykNwfkR8WRyHmsQSfNTmu/tgDdRdszYxEwHfgOcB/zMzXl9uAFIVk0nvhPYk/Iu0XrvUeAE4KiIuDY7jNWXpLWBfYDd8NR+v1wPHAv82K/tcrkBSCBpHsoni72AN+LzGAbpeuAo4HhPSxrMfN22O6XwuwkfnGnAmcAxlNd2z+TGaR83AAMkaS1K0d8NeFFumtZ7EjiJMitwSXYYGzxJG1OK/k7A/Mlx2u4ByizdMRFxXXaYtnAD0GfV6v3dKYV/ldw0NopbKLMCx0TEP7PDWP9IejHl7+I+lHMyrH5+T5kVON67CfrLDUCfSNoa+DCwNfCC5DjWmSeA7wPf8INnuFSN+CeA95F7AqZ17lngbOA7EXF2dphh5AagxyRtA3weWC87i03Yk8ARwNcj4p7sMDZxkpYEPgnsh6f5m+wq4IsRcVZ2kGHiBqBHXPiH0lPAkcDXIuLu7DDWOUlLAQcC+wLzJcex3nEj0ENuACbJhb8VnqasETg4Iu7KDmOjk7Q0cBDlHf+8yXGsf9wI9IAbgAly4W+lZ4AfAl/yq4F6qab6/wN4NzBPchwbHDcCk+AGoEsu/EY5WOgLlMVJ05KztJqkuYD9KX8ei+SmsURuBCbADUCHJG0FfBEXfnvO74EPRcRF2UHaSNImwPeA12Znsdq4Cvh8RJyTHaQJ3ACMo5pa/B6wY3YWq62fAh+LiL9nB2mD6u/kNyhHaJuN5BeU5tyv6sbgy2ZGoeK9wB9x8bexvR24RdLHq/vhrQ8kzSXpAOBmXPxtbDsCf5T0XknKDlNXngEYgaSVKdu/Xp+dxRrnj8D+EXF+dpBh4ul+m4RLgX0j4pbsIHXjGYBZSJpb0mcpF8a4+NtEvBo4T9LxkhbNDtN0khaWdDRwES7+NjGvB66X9FnP0M3OMwAVSetRPvX7IWO9chuwe0Rcnh2kiSStC/wY+LfsLDY0bqLMBlyVHaQOWj8DUH3C+A5wOS7+1lvLAxdL+rwk3wfRIUlTqpm4y3Dxt956LXC5pO9IWjg7TLZWzwBI2g44DFgmO4sNvcspswG3ZQepM0nLAsfjV3DWf3cCH4iI07ODZGnlDICkRSSdAJyGi78NxobA7yTtlh2kriTtitff2OAsA5wm6QRJrTxEqnUzAJJeA5wCrJSdxVrrOMoe5Uezg9SBpIUoK/z3zM5irXUrsENE/CE7yCC1qgGQ9DbgGGCh5ChmfwF2i4hrs4NkkrQ2cAJ+12/5HgP2ioiTs4MMSiteAVSLir4KnISLv9XDvwGXSto9O0iW6td+KS7+Vg8LASdJOlhSO2rjsM8ASHoR5RPGltlZzEbxVeAzMex/GSvVyWz/CXwqO4vZKM6lzNA9kB2kn4a6AZC0BuVM6OWTo9TZdOB24Bbgz8BDlKmwRzv453RgQWCBEf65AOV2tqWB5eb48izM8/2Sskvg8ewg/SRpQcoq/7dmZ6mhxyh/F2f9ugt4BHii+np8hH9OARam/L0a75+LASsCK1P+Lrbik+4E3QbsGBG/zQ7SL0PbAEh6F3AEMH92lpp4mFLkZ/26GfhzRDw1yCCSXshzzcDrgLWrr5cMMkcNXQ9sHxF3ZAfph2qL36nA6tlZkt0PXFt9/Y6q2EfEvwYZQtJ8lGbgVZSGYNYvn2JZPAnsFxE/yg7SD0PXAFRHPX6Lckd4Wz0NXAGcT9l/fnNE3JsbaXySlgfWqb7WBtaizCi0yX2U1chXZgfpJUnrU3bfvDQ7y4A9DlxHKfbXANc04SwISS+jNAYbAm8ANgDmTQ2V67uUGz+nZgfppaFqAKp/aX9O+/YRP0t5wFxQfV0+6E/1/VCdnrcB8Obq61W5iQbmaWCfiDg+O0gvVIv9jqI9BeRmyhkjpwFXRMSzyXkmrZot2BDYvPpaG2jb6ZaXArs04cNUp4amAZC0KnAW8PLsLAMQwI2UYn8+cElEPJIbqf8krUhpBLYHNgLmyk3Ud41eHNiixX7TKMcWnwqcFhF/Ts7Td9XBORtTZgc2B1YF2nDt7t+BbSLixuwgvTAUDYCk1wHnAS/KztJnN1DOMfhJRNyXnCWVpMWAbSmHx2zB8C5mOgHYIyKmZQfphqS5KAceDevJh9Mpz5xjgTMi4qHkPKkkvRR4B7AXsFpumr57ANgiIn6XHWSyGt8ASFqLsmVj8ewsfXI/8BPgmGH4F64fJC0H7A28m+E82vkXwNub8v6xWofzU2DH7Cx9cCfwQ+DoiLg9O0wdVR/I9qI0BMO6sPdBYMuIuC47yGQ0ugGQtA5wNmVryzCZCpzOc58uGvHgz1Yd3rEVsA/lNcEw3f19OrBTRDydHWQskualHLi1XXaWHppKmd4/CjgnIqYn52mEqhGcMUu3HcP19xHKlumtI+Ka7CAT1dgGoFpVfBZlr/mw+A1liv+EiPhncpZGk7QE8B7go8CLk+P0yjnAWyPiyewgI5E0P+U8g62ys/TIP4FDgB9ExD+ywzSZpBdTXgftBayZm6anHqGsCWjkrp1GNgCSXg/8mnK4xTA4H/hCRFyWHWTYVAfPfBD4OMMxHXkh8Oa6HRhU/T6fBmyWnaUH7ge+CRxat9/nYSBpI+ALlAWEw+BR4E0RcWl2kG41rgGQtCllOnQY9oe78A9IVaA+AHyC5jcClwPb1mXnR7Ui/AzKNrEmux/4BnCYC3//DVkj8DiwXURclB2kG41qACS9gfIuboHsLJPkwp+kagTeT2kElkiOMxnXUN4/pq4+r3ZjnE05vKmp/kEp/Ie78A/eEDUCT1BO8jw/O0inGtMASNqa8n5xvuwsk+DCXxOSFgA+TXk10NQDan5LWYmccmFJddHWucAaGeP3wNOUqf7/iognssO03ZA0Ak9R1umcnR2kE41oACRtS9kK1dQHtQt/TUl6JfAdYJvsLBN0PbBJRDw8yEElLQpcTHPP9T8L+HBE/Ck7iM1uCBqBpymXCJ2RHWQ8tW8AquJ/CjBPdpYJuAv4YEScmh3ExibprcD/UC4oapoLKSuRnxnEYJLmoRTQJi74ux34SET8MjuIjU3S9sChlBtFm+YZyp0etW4Can16mqTVgJ/RvOI/Hfge8BoX/2aoCsKrga9QOvgm2Qw4tjp6t6+qMY6lecX/acqf7atd/Juhena+hvIsbdrZC/MAP6tqWG3Vdgag2sd9Dc37RHYjsG9EXJ0dxCamunPgKGCT7CxdOiQiPtbPASR9i3K2QpNcTLlcaejP6B9WktYFjqTcOdAktwPr1PUciVrOAFSniZ1Cs4r/U8BngLVc/JutKhSbUxYJNukUxo9KOqBf37z63k0q/lMpf4abu/g3W/VMXYvyjG3STafLAadUNa12ajkDIOlYYI/sHF24ENjPC4qGj6S1KXcxrJidpUMB7BYRP+vlN5W0K+Vioqbc+PZn4B0RcW12EOutauHuETTrNdRxEbFndog51W4GQNKBNKf4/wt4d0Rs7uI/nKoCsgbliOYmEGU9wKY9+4blex1Lc4r/McAaLv7DKSL+FBGbUy7/+ld2ng7tUdW2WqnVDICkt1C2+9WuMRnBdZStHndkB7HBkLQL5ZNHEy6fehh4/WTvLZe0KnApsGhPUvXXQ5SZuJ9nB7HBkLQspWaslZ2lA9MpNeNX2UFmqE0DIGl14DJgoewsHTgWeF9ENOldlPVA9cA5CVg7O0sH7gbWj4g7J/KTJS0DXAks1dNU/XEt5bZEN+QtI2k+4PuUWwfr7jFgo4i4PjsI1OSTtqSXUo74rXvxnwp8KCL2cvFvp6rAbEq5+KbulgJOq27p60r1c06jGcX/NGBTF/92ioinImIv4EPUf9HuQsCpVc1Ll94AzLLif9nsLOO4l7Ka+NDsIJarOjZ2B+Dw7CwdWJ2J5TycZpzydzjlwBUf5dty1bN5c8qzus6WpSY7A9IbAMp+6/WzQ4zjKsr2Ph/lawBExLMR8QHgIMrK+zrbU9J+nf7g6sfWfTo1gIMi4gMR8Wx2GKuH6hm9FuWZXWfrU2pfqtQ1ANWqyIPTAnTmCMqZ4QM5ZtWaR9I7gKOp94mVT1PePf7fWD9I0r9T1uKkfzoZwzPA3hHxk+wgVk/VcdXfATpufJMcFBFfyxo8rQGQNKNLmyslwPieprzvT+/SrP6qrXKnUO8dArdTZrJGvD2wut3vOup9ANdDlCn/i7KDWP1J2odylHBdG9ppwHoRcV3G4CkNQPXu4zeUc57r6EnKlY7nZAex5pC0CnAmsEx2ljGcDWwbEbOdrS5pCnAGsHVKqs7cCbwxIn6fHcSaQ9JWlKvku14MOyB/ANaMiIHfQZK1BuDL1Lf4Pw68ycXfulUVpvWA32VnGcPWwOdH+N8/T72L/+8on5Rc/K0r1bP8TZRnex29hlITB27gMwCSNqAcLFKHBYhzeozy6ejS7CDWXJIWppwVsFV2llEEpck9E0DSG4FfU9+T/s6h7PF/NDuINZek11Nmueq43Xw65eCuKwY56EAbAEkLUDr5Vw5s0M49QrlT/crsINZ8kuai3F62V3KU0fyL505Puw54YWKWsRxDuV1zWnYQaz5J6wNnAYtkZxnBn4DXDXJL66A/hR9MPYv/g8AWLv7WKxExLSL2Br6anWUUL6TMUpxEfYv/VyNibxd/65XqGb8F5ZlfN69kwLviBjYDUK2SvoD6TTM+AGwZEb/NDmLDSdJhwPuzczTM4dU5C2Y9J2kN4FzgRdlZ5hCUA+cuGsRgA2kAqneiNwDL932w7txP+eR/Q3YQG17VCvufATtlZ2mIk4Bd59ypYNZLklYDzgNekp1lDrcBqw1izcugXgF8i/oV//so54e7+FtfVYVsd+DC7CwNcCGwu4u/9Vv17N+UUgvqZHlKzey7vs8ASNqGsje6Tp6krLhMOXzB2knSIsDFwOuys9TU74BNIuKR7CDWHtWhdJdSv3MC3hgRZ/VzgL42AJIWA26ifjeK7eo7wy1DdQvYFcArsrPUzF+BDSKibp/GrAUk7UJ5TVcndwOvjYiH+jVAv18B/A/1K/5fcvG3LFWB24r6TTtmug/YysXfslQ14UvZOeawFKWG9k3fZgAkrQ1cTb1W/Z8E7BKZNyCZMXMV8sXAwtlZkj1Kmfb3LhxLJUnAz6nXYt0A1o2Ia/vxzfvZAFxIWWBRF7+l3Ibme8OtFiRtTlkfU+dbBPvpGcp7zguyg5jBzMPqLgPWyM4yi4siYrN+fOO+vAKQtC31Kv73Atu7+FudVIVvd8oxoG0znbLa38XfaqOqEdtTakZdbFrV1J7reQNQ7Xke6GlG43iacn3oXdlBzOYUEScC+2fnSLB/9Ws3q5WqVuxAqR11cXBVW3uqHzMAewCr9uH7TtQ+EXFVdgiz0UTEYZQ7y9vie9Wv2ayWqpqxT3aOWaxKqa091dM1AJLmA26lPvehHxwRn8oOYTYeSfNQtgeuNd6PbbjrKNv9nskOYjYeSV8FDsrOUbkTWCkinurVN+z1DMD+1Kf4Xw18NjuEWSeqgrgz8HB2lj56GNjZxd8a5LOUWlIHy9Dj14U9mwGQtDjlMI/FevINJ+cpyrWKt2QHMeuGpB2AX2Tn6JMdI+KU7BBm3ZC0MuWUyvmyswAPAa+IiJ7cZtjLGYBPU4/iD/AZF39roqpAfjs7Rx9828XfmqiqJZ/JzlFZjFJre6InMwCSlqW8+5930t9s8i6jHCzSxq1VNgSq9QCXAutkZ+mRayh3b3jq3xqpWoF/MbBRdhbK7oSVIuKOyX6jXs0AfJl6FP/Hgb1c/K3JqkK5K9CTab5kD1Lu3nDxt8aqaspelBqTbV5KzZ20STcA1Z3Ku/cgSy8cGBF/yQ5hNlkRcRuwd3aOHti7+rWYNVpVWw7MzlHZvaq9k9KLGYD/6tH3mawLAO8ttqEREb8CDsnOMQmHVL8Gs2FxGKXWZJtCqb2TMqk1ANXqyD+Sf+HPo8CqEXF7cg6znpI0N3AJsF52li5dBWwcEVOzg5j1kqTlgBvJv8grgFdPZsH7ZD+5f5D84g/wMRd/G0ZVAX078Fh2li48Brzdxd+GUVVrPpadg1J7PzipbzDRGQBJCwN3k98FnRsRWyVnMOsrSR8Cvpudo0P7R0Sbjja2FpJ0DrBlcoxHgaUi4tGJ/OTJzADsSX7xn049OjGzfjuMclRw3V2B1+JYO3yM/Js8F6bU4gmZUAMgScCHJjpoDx0fETdmhzDrt2ob0j5AnbfTPUO5fCv7oWjWd1XtOT47B/ChqiZ3baIzAFsAK0/w5/bK08B/JGcwG5iI+CPwlewcY/hKldGsLf6D/GuDV6bU5K5NtAGow/3lh3nhn7XQwcBN2SFGcBMlm1lrVDWoDq+8JlSTu14EKGkF4M/k7v1/hHIhwgOJGcxSSFoHuJJ6nL8B5T3o+hFxTXYQs0GT9CLKRXiLJMaYDqwYEX/r5idN5AHywQn+vF76uou/tVVVaOt0YdC3Xfytrapa9PXkGFOYwJbArmYAJC0A3AUs3u1APXQPpdN5IjGDWSpJC1IOI1khOcrfKIdw1eGMdLMUVW38M7BkYowHgaW7qY3dfpJ/J7nFH+BLLv7WdlXB3ZfcbUjTgX1d/K3tqpr0peQYi1NqdMe6nQG4AVi1y1C9dCuwSkRMS8xgVhuSPg98IWn4L0TEF5PGNqsVSXMBvwdWSoxxY0R0fElQxzMAkjYht/gDfMbF32w2XwbOTBj3THp0JanZMKhq02eSY6xa1eqOdPMK4N0TCNNLtwInJ2cwq5Xq0J3dgdsGOOxtwO4+8MfseU6m1KpMHdfqjhqA6kayN084Tm8cFpO5utBsSEXEv4AdKHdz9NvdwA7VmGY2i6pGZZ8L8OaqZo+r0xmAzchd/Pc4cEzi+Ga1FhG/A14HnNXHYc4CXleNZWYjO4ZSs7IsTqnZ4+q0Adhx4ll64viIeDg5g1mtRcQ/gW2BTwG9XCszrfqe21ZjmNkoqlqVfUdARzV73F0AkqYAfwde2oNQE7WaL/0x61x1WuAngbcAc03w20wDfkU5eMsH/Zh1SNKqwA2JEe4DXj7eOp1OGoDXA5f0MFi3LomIjlc1mtlzJL2ccl7AvsBSHf60u4EjgSMj4u/9ymY2zCRdDGycGGHjiLh0rB/QySeD7On/Q5PHN2usqoB/UdJ/UtYIrDDL1/LVD7uNcqLfjK/febut2aQdSm4DsCMwZgPQyQzA7cCyPQzVjXuAZf0wMjOzJqkOBrqDvOOB74iI5cb6AWMuApT07+QVf4AjXPzNzKxpqtp1RGKEZasaPqrxdgFkTv9PBf43cXwzM7PJ+F9KLcsyZg2vcwNwSkTckzi+mZnZhFU17JTECBNrACStAqzc8zidOzZxbDMzs17IrGUrV7V8RGPNAGR++n8UOC9xfDMzs144j1LTsoxay+vaAJwREc8kjm9mZjZpVS07IzFCdw2ApKUoe4azZL4zMTMz66XMmva6qqY/z2gzABv0Mcx4nia3WzIzM+ulMyi1LcuINX20BmD9PgYZz/kRkfm+xMzMrGeqmnZ+YoQRa3odGwBP/5uZ2bDJrG0j1vTnHQUsaV7gEWCeAYSa03RgyYj4R8LYZmZmfSFpCcrx9uOdv9MPzwCLRMRsryFGCrImOcUf4HIXfzMzGzZVbbs8afh5KLV9NiM1AJ7+NzMz671avQZwA2BmZjYYbgBGcUNE3JY0tpmZWV9VNe6GpOHHbgAkLQ2MeGDAAFyaNK6ZmdmgZNW6paoaP9OcMwCZ0/9XJY5tZmY2CJm1brYaX6cG4MrEsc3MzAYhs9bVsgG4PyL+kjS2mZnZQFS17v6k4UduAKoDgJ63T3BAPP1vZmZtkVXz1qxqPTD7DEDmAUBuAMzMrC2yat5sBwLN2gCsNvgsM/n9v5mZtUVmzZtZ62dtAF6REATgWeDapLHNzMwG7VpK7csws9bXoQG4KSIeSxrbzMxsoKqad1PS8CM2ACskBAG//zczs/bJqn0za30dZgD8/t/MzNomq/bNPgMgaVFg8aQwVyeNa2ZmliWr9i1e1fyZMwBZn/6nAz4AyMzM2uYvlBqY4RWQ3wDcHRFTk8Y2MzNLUdW+u5OGn60ByFoA+Lekcc3MzLJl1cAVIH8GwA2AmZm1VVYNrMUrgNuSxjUzM8t2W9K4fgVgZmaWKPcVgKQpwPJJIdwAmJlZW2XVwOUlTZkCLEXeLYBuAMzMrK2yauA8wFJTyJv+z9wCYWZmlu1uSi3MsMKMGYAMd0RE1iEIZmZmqaoaeEfS8EtNARZKGtzT/2Zm1nZZtXChKcCCSYO7ATAzs7bLqoULTgEWSBr8vqRxzczM6iKrFi6QOQPweNK4ZmZmdZFVCxfMbACeSBrXzMysLrJqYWoD4BkAMzNru9QZgKw1AG4AzMys7bJqYeoaAL8CMDOztvMrADMzsxbyIkAzM7MWSp0B8BoAMzOzHK1cA+AGwMzM2s6vAMzMzFrIiwDNzMxaKG0GQJS7iOdKGHzuiJiWMK6ZmVktSJqLUocHbdoU4NmEgQFekDSumZlZXWTVwmenAI8lDb5Q0rhmZmZ1kVULH3MDYGZmlqeVDUDW4kMzM7O6yKqFngEwMzNL1MoZADcAZmbWdm4AzMzMWsgNgJmZWQu5ATAzM2shNwBmZmYt1MoGwNsAzcys7VK3AWZdROAZADMza7usWvi4XwGYmZnlaeUrgMWTxjUzM6uLrFqY2gCsmDSumZlZXWTVwtQG4JVJ45qZmdVFVi18bApwd9Lgi0l6SdLYZmZmqaoauFjS8HdPAf4CTE8K4FkAMzNrq6waOB34y5SIeBq4MynESknjmpmZZcuqgXdGxNNTqv9ya1IIzwCYmVlbZdXAWwFmNAB/SgrhGQAzM2urrBr4J3iuAfAMgJmZ2WC1egbglZKUNLaZmVmKqvZlNQC1mAFYAHh50thmZmZZXk6pgRlmmwG4DZiWFMTrAMzMrG2yat80Ss0vDUBETAP+mhTG6wDMzKxtsmrfX6uaP3MGAPLWAbwqaVwzM7MsWbVvZq2vQwOwUdK4ZmZmWbJq34gNQNZCwDUlLZo0tpmZ2UBVNW/NpOFn1vo6zAC8ANg4aWwzM7NB25hS+zLUagYAYLPEsc3MzAYps+aNOANwJ/Dk4LMAbgDMzKw9smrek8xy+d/MBiAiArgmIxGwmqQXJo1tZmY2EFWtWy1p+GuqWg/MPgMAcNFgs8w0BdgkaWwzM7NB2YTn195BuWjW/zJniIsHl+N5/BrAzMyGXWatm63Ga5bZACTNBzwEzDvgUAA3RcSqCeOamZkNhKQbgdcmDP00sFhEPDXjf5htBqD6P64edKrKKpJekjS2mZlZX1U1bpWk4a+etfjDyO8hsl4DCNg0aWwzM7N+25RS6zI8r7aP1ABc1P8co/I6ADMzG1aZNe6iOf+H2dYAAEian7IOYJ7BZJrNrRGxcsK4ZmZmfSXpFnKuAX6G8v5/trN+njcDUP2ArPMAVpL0uqSxzczM+qKqbRnFH8r+/+cd9DfaXsSL+ptlTO9KHNvMzKwfMmvbRSP9j6M1AJnnAewmKeuSBDMzs56qatpuiRFGrOmjNQBXAFP7l2VMSwJvSBrbzMys195AqW0ZplJq+vOM2ABExBPkrQMAvwYwM7PhkVnTrqlq+vOMdR5x5muAHSQtmDi+mZnZpFW1bIfECKPW8rEagIt6n6Nj2b9hZmZmvbADpaZluWi0/2OsBuByYMRpgwHZPXFsMzOzXsisZU9QavmIRm0AqncGp/YjUYe2kPSyxPHNzMwmrKphWyRGOHW09/8w/p3EP+5xmG5kb5swMzObjN0otSzLmDX8eUcBz/Z/SnMD9wAv6nGoTv02ItZMGtvMzGzCJP0GWCNp+AeAJSNi1C39Y84AVD/xxF6n6sIakl6TOL6ZmVnXqtqVVfwBThyr+MP4rwAAftKjMBO1Z/L4ZmZm3cquXePW7jFfAQBIEnAbsGxvMnXtIWDZiHg0aXwzM7OOSVoYuANYLCnCHcDyMU6BH3cGoPoGJ/Qq1QQsBrwvcXwzM7NuvI+84g9wwnjFHzqYdgQ9aAAAIABJREFUAQCQtCpwQy9STdA9wAoR8XRiBjMzszFJmhf4G3ln/wOsFhE3jveDOlkDQPWNbpp0pIlbEtgjcXwzM7NO7EFu8b+pk+IPHTYAlcwzAQA+KambvGZmZgNT1ahPJsfouFZ3U1BPAMZ/X9A/KwI7JY5vZmY2lp0otSpLV2v2Om4AIuJ2xjhTeEAOSh7fzMxsNNk16vKqVnek2yn17DMB1pC0dXIGMzOz2VS1KfPgH+iyRne0C2DmD5ZeRFmRP3eXoXrpoojYLHF8MzOz2Ui6ENg0McJUytG/D3T6E7qaAai+8dndpuqxTSWtm5zBzMwMgKombZoc4+xuij90/woA4LsT+Dm9lv2exczMbIY61KSua3NXrwBm/iTpd8DqXf/E3glglYj4Y2IGMzNrOUmvBn4PKDHG9RHxum5/0kT31X99gj+vVwR8OjmDmZnZp8kt/jDBmjzRGYC5gD8Dy01k0B4JYJ2I+L/EDGZm1lKS/h24htwG4HZgxYiY1u1PnNAMQDXQIRP5uT0k4NvJGczMrL2+Tf6n/0MmUvxhgjMAAJIWpFw5+MIJfYPeeWdEZJ9PYGZmLSLpHeQfkf8vYNmIeHwiP3nCZ+tXAx460Z/fQ1+TtEB2CDMza4eq5nwtOwdw6ESLP0yiAah8F3hykt9jspamHlswzMysHQ6i1J5MTzLJbfmTagAi4n7g6Ml8jx75uKTMBYlmZtYCVa35eHYO4OiqBk9YL67X/RbwbA++z2TMT/7WRDMzG35fp9ScTM9Sau+kTLoBiIi/AidP9vv0wC6SNs4OYWZmw6mqMbtk5wBOrmrvpEx4F8Bs30RaC6jDfvzfAv8eEdOzg5iZ2fCQNIVS57Jv/INS566b7DfpxSsAqiAX9OJ7TdIawHuyQ5iZ2dB5D/Uo/hf0ovhDj2YAYOZdyGf15JtNzj+AlSLi4ewgZmbWfJIWBW4FlsjOAmwTET25lbcnMwAAVaDre/X9JmEJ4D+yQ5iZ2dD4D+pR/K/vVfGHHs4AAEjakXosCJwKrBYRN2cHMTOz5pL0KuAGYO7sLMDbIuIXvfpmPW0AACRdDNRhNf7VwIYRkb1F0czMGkjSC4DLgXWzswCXRMQmvfyGPXsFMIsDgDqswl8XODA7hJmZNdaB1KP4T6fU1p7q+QwAgKSjgb16/o27NxVYOyLqsDbBzMwaQtLqwLXUY+r/mIjYu9fftF8NwJLAn4AFe/7Nu3cjZc/kM9lBzMys/iTNQ9nzv2p2FuBx4JURcU+vv3E/XgFQBT24H997AlYFvpQdwszMGuNL1KP4Axzcj+IPfZoBAJA0P3ALsExfBujOdOD1EXFFdhAzM6svSRsAl9KnD8hduhNYOSL6cutu336BVeC6XNM7BTi2usPZzMzseaoacSz1KP4AB/Wr+EP/f5EnULbj1cGKwDeyQ5iZWW19g1Ir6uBqSg3tm769Apg5gLQ+UJep9wC2johzs4OYmVl9SNoSOBtQdpbKBhFxZT8H6Ps0R/UL6GsX0wUBP5S0WHYQMzOrh6om/JD6FP8T+l38YXDvOQ4CnhrQWONZGvhOdggzM6uN71BqQx08xYDWzw2kAYiIO4BvDWKsDr1L0g7ZIczMLFdVC96VnWMW36pqZt/1fQ3AzIGkhSiHA71sIAOO737gtRHxj+wgZmY2eJKWAG4CXpKdpXIv5dCfxwYx2MC2OlS/oM8MarwOvAT4cXXZg5mZtUj17P8x9Sn+AJ8ZVPGHwe91PAa4bsBjjmUL4MvZIczMbOC+TKkBdXEdpUYOzMBeAcwcUHot5Rc6z0AHHl0AO0TEr7KDmJlZ/0l6C3AK9Vn1/wywVkTcNMhBB37aUfUL/MKgxx2DgOMkvTI7iJmZ9Vf1rD+O+hR/gC8MuvhDwgwAzHz3cgWwzsAHH91NwHoR8Xh2EDMz6z1JCwJXAa/NzjKLayiH/jw76IFTzjuufqF7Up+zAaD8C3FkdggzM+ubI6lX8X8K2DOj+EPihQcRcTPw2azxR7GbpA9nhzAzs96qnu27ZeeYw2erWpgi5RXAzMGlKcDFwEZpIZ5vKrBZRFyeHcTMzCZP0obAhcDc2VlmcRmwSURMzwqQ2gAASFoRuB6o01W99wBrRsS92UHMzGziJL0M+A2wZHaWWTwBrB4Rf84MkX7ncfUbcGB2jjksCfxM0lzZQczMbGKqZ/jPqFfxBzgwu/hDDRqAyqGU6Zk62Rj4enYIMzObsK9TnuV1ciGl5qVLfwUwg6TlgRuBhXKTPM+uEfHz7BBmZtY5SbtQPv3XyWPAqhFxW3YQqM8MANVvyMeyc4zgB5Jekx3CzMw6Uz2zf5CdYwQfq0vxhxrNAMwg6Wxgq+wcc7iFckjQQ9lBzMxsdJIWoxz2s3J2ljmcExFbZ4eYVR0bgKUpp/Itmp1lDhcBW0fEM9lBzMzs+STNA5wNbJocZU4PU66fvys7yKxq8wpghuo36CPZOUawKfDD7BBmZjaqH1K/4g/wkboVf6hhAwAQEccAp2fnGME7JX0lO4SZmc2ueja/MzvHCE6valrt1O4VwAySlqAc3rBUdpYR7BMRdVxgYmbWOpLeAxyVnWMEd1MOlftHdpCR1LYBAJC0PuWo4Dod3wgwDdguIs7ODmJm1maStqbMGNft4LapwMYRcVV2kNHU8hXADBFxJfDR7BwjmAs4UdLq2UHMzNqqegafSP2KP8ABdS7+UPMZgBkk/Rh4R3aOEdxN2R5Yu8UdZmbDrNoxdhX1fE18fES8KzvEeJrSACwAXE297nGe4Qbg9RHxSHYQM7M2kLQIcCmwWnaWEdxI+WD4RHaQ8dT6FcAM1W/kjkAdi+xqwEm+OMjMrP+qZ+1J1LP4Pwzs2ITiDw1pAAAi4k/AXtk5RrElcER2CDOzFjiC8sytmwD2qMMtf51qTAMAEBGnUN8b+t4t6XPZIczMhlX1jH13do5RHBwRp2aH6EYj1gDMStILgHOBzbKzjGKPiPhRdggzs2Ei6V3Acdk5RnEesE1EPJsdpBuNawCg9ocEPUP5F+HC7CBmZsNA0mbAWcA82VlGcCflsJ9/ZgfpVqNeAcxQnaq0M+WghbqZB/iVpLWzg5iZNV31LP0V9Sz+zwA7NbH4Q0MbAJh5SNDHsnOMYmHgLEmrZgcxM2uq6hl6FuWZWkf/LyKuyQ4xUY18BTCrGh8SBHAf5SjIW7ODmJk1iaSVgEuAl2ZnGcVxEbFndojJGIYGYEHKaVB1PCQIyvuh10fE7dlBzMyaQNJylIN+lsnOMorrgfUj4snsIJPR+AYAZnaK1wKLZGcZxV8oTcA92UHMzOpM0pKU4v9v2VlG8RCwVkT8NTvIZDV2DcCsqin2PSkHMdTRvwHnSXpxdhAzs7qqnpHnUd/iPx3YfRiKPwxJAwAQEb8EPpmdYwyvAc6WtGh2EDOzuqmejWdTnpV19ZGI+HV2iF4ZmgYAICK+CRyWnWMMawJnVOsWzMyMmWu5zqA8I+vqvyPiu9khemko1gDMqjop8JfAdtlZxnA+sF1EPJUdxMwsk6T5gNOBN2RnGcMvgJ0jYnp2kF4augYAZnaTFwNrZWcZw+mUW6PqeJiRmVnfSZqbUlzr/IHtKmDzpq/4H8lQvQKYISIep/wLVeetd9sBx0sayj8DM7OxVM++46l38f8LsP0wFn8Y0gYAICLuBbalbNmoq12AoyQpO4iZ2aBUz7yjKM/AunoA2DYi7s8O0i9D2wAARMQfgB0p5zXX1d7At7NDmJkN0Lcpz766ehp4y7Cf4jrUDQBAdSvfe7JzjGN/SV/LDmFm1m/Vs27/7BxjCMq17pdnB+m3oW8AACLieOBz2TnG8UlJ38wOYWbWL9Uzrs7ntQAcGBE/zw4xCEO5C2A0kn4AvDs7xzj+JyIOyA5hZtZLkv4b+Eh2jnEcHhEfyA4xKG1rAOaiHDaxZXaWcXwvIuo8RWZm1jFJ3wU+lJ1jHL+mvPd/NjvIoLSqAQCQtAjloonVsrOM4/vAB6Jtf0BmNjSq1f6HAe/LzjKO31Cubn88O8ggta4BAJC0NOVwh6Wys4zjSGA/NwFm1jRV8T8C2Dc7yzhuB9arto63SisWAc4pIu4C3gQ8kp1lHPsCP/BhQWbWJNUz6wfUv/g/SNnr37riDy1tAAAi4npKE/BEdpZx7A0c7SbAzJqgelYdTb33+QM8BryxOi+mlVpdVCLiMmAH6n1QEMAewI+qi47MzGqpekb9iPLMqrOnKEf8Xp0dJFOrGwCAiDgH2BWYlp1lHO8AflztZDAzq5Xq2fRjyrOqzqYCO1WHxLVa6xsAgIj4JbAXUPerHncFTnATYGZ1Uj2TTqA8o+psOrB7RPw6O0gduAGoRMSPgSYcALETcGJ1jaaZWarqWXQi5dlUZwHs25ZT/jrhBmAWEXEE8PHsHB14K3CypHmyg5hZe1XPoJMpz6S6OyAifpgdok7cAMwhIr4FfDE7RwfeDJwiad7sIGbWPtWz5xTKs6juPhcRvnV1Dq08CKgTkr4FfDQ7RwfOAXaIiLpvZzSzISFpAUrx3yo7Swe+ERF1v4AohRuAMUg6Anhvdo4OXAG8KSIeyg5iZsNN0mKUc/M3yM7Sge9HxPuzQ9SVG4AxVAda/Ij6b2sBuAHYKiLuyw5iZsNJ0ksps451v0sF4HhgDx+lPjo3AOOotrecBLwlO0sH/gxsERG3Zwcxs+EiaTngPGDF7CwdOAXYuU03+02EG4AOVItdTqP+1wgD3AVsGRE3Zwcxs+Eg6VXAucDS2Vk6cA7w5oio+wmv6dwAdKha9HI2sFF2lg78E9gmIq7LDmJmzSZpLeAs4MXZWTpwGbC1F0V3xtsAO1T9C/UmoAlF9cXABZI2yQ5iZs1VPUMuoBnF/zrKYmgX/w65AehCRDxCeQ3QhCZgEeAsSdtlBzGz5qmeHWdRniV1dx3l1Wfdr3ivFTcAXYqIB4EtgGuzs3RgPsphQU3YxWBmNVE9M06hPEPq7lrK4ucHs4M0jRuACaj2228JXJWdpQNzUa4S9l5YMxtX9az4EeXZUXdXUz75+wyUCXADMEER8TCwNeUQnrqbAhwm6VPZQcysvqpnxGE0ozZcRTn75OHsIE3lXQCTJGlh4AyasTsAfCymmY1A0teBT2Tn6NAVlJ1Oj2YHaTI3AD0gaUFKE7BxdpYOHQm8LyKmZwcxs1zViaffB/bNztKhy4A3RsRj2UGazg1Aj1TnBJwObJadpUM/B3aPiKnZQcwsh6S5KUfm7pKdpUOXULb6ufj3gBuAHqqagFOBN2Rn6dDZwE7+y2TWPpIWohxzvnV2lg5dBGwXEY9nBxkWbgB6TNL8wC9pxjWZ8NzhGb5EyKwlqkt9fg2slZ2lQxdQjvf1IT895AagDyTNR9lDu012lg79jbKg5tbsIGbWX5JWohzws0J2lg6dB2wfEU9mBxk2Tdjq0TgR8RTwVkqH3QQrAFdIWj87iJn1j6T1KCvom1L8Z1zs4+LfB24A+iQingZ2pNwi2AQvAs6X9NbsIGbWe5LeQplKf1F2lg6dBbyl+kBlfeAGoI+q6yjfRlkT0ATzAydL+kB2EDPrnep0v5Mpf8eb4AzgrS7+/eUGoM+qbXa7AL/IztKhKcChkr4qSdlhzGxyJP0n5XS/F2Rn6dDpwA7VLKr1kRcBDoikuYDjgN2ys3TheODdPivArHmqPf5HAXtkZ+nCycA7qtlT6zM3AANUnbh1KPC+7CxdOA94m6/ZNGuO6ojykymXljXFD4H3RsSz2UHawq8ABigipkfE+4GDs7N0YQvgEkkvzw5iZuOTtCTlxLwmFf9DgH1c/AfLDUCCiPgUcFB2ji6sDlwp6TXZQcxsdJJeBVwJvC47Sxc+FxEfC09HD5xfASSStB/NuXoT4EHKtpxLs4OY2ewkbUg5ivyF2Vk6FMCHI+J72UHaqimFZyhFxBHAO4GmLLJbHDhX0s7ZQczsOZJ2pKzXaUrxnwbs4eKfyw1Asoj4KbAD0JSTruYFfibpI9lBzAwk7Q+cCMyXnaVDT1EWFh+fHaTt/AqgJiRtTDk1cJHsLF04BPi4392ZDV51TsfXgE9kZ+nCo5TXiBdmBzE3ALUiaS3K8Zcvzs7ShZ9TpvJ8aIfZgEiaBzgaeEd2li48ALwxIq7NDmKFG4CakfRq4FxgqewsXbiYcmznQ9lBzIadpEUpJ4tunp2lC38HtoyIP2QHsee4AaghSctTmoAVc5N05feU7v7O7CBmw0rSUsCZwKrZWbrwF0rx/1t2EJudFwHWUETcBrweuCE5SjdWoZwVsFp2ELNhJGkVyh7/JhX/G4GNXPzryQ1ATUXEvcCmwFXJUbqxFHCppCZNTZrVnqRNgMuAZbKzdOEqYJPqWWY15AagxiLiQcpRvOdlZ+nCIsCZkpq0OMmstiTtApwNLJadpQvnAVtUzzCrKTcANRcRjwPbAadkZ+nCPMDxkj6ZHcSsySQdAPyUcv5GU5wCbFc9u6zG3AA0QLXFbmfg8OwsXRDwNUnfrW5BNLMOqTiEctaGsvN04XBgZ28LbgbvAmgYSZ8G/jM7R5dOodzx/VR2ELO6kzQvcBywS3aWLn0mIv4rO4R1zg1AA0naAzgKmDs7SxeuAN4cEf/KDmJWV5IWA34FbJydpQtTKVf5HpcdxLrjBqChJG0FnAQsnJ2lC7cA21TbHM1sFpKWoezxXyU7SxceBXaKiHOyg1j33AA0mKQ1gDOAl2Vn6cK9wJsi4jfZQczqojo/4wyadQLovcC2EfHb7CA2MV6c1WDVX7z1gZuzs3ThZcDFkrbODmJWB9W5GZfSrOJ/M7C+i3+zuQFouGo6fUPKO/amWAg4XdJe2UHMMlXnZZxJs24BvQLY0K/yms8NwBCoFta9gWadFTAXcLSkz2UHMctQnZNxPOXcjKY4BXiDF/MOB68BGCLVfvvvAB/MztKlo4H9ImJqdhCzfpM0F/A9YL/sLF06FPhwREzPDmK94QZgCEk6EPgqzTpA5EJgR18pbMNM0iLAz4EmrYEJ4FMR8bXsINZbbgCGlKTdgR/SrLMCbqbsEPhrdhCzXpO0LPBr4LXZWbowFXh3RByfHcR6zw3AEJO0BXAyzVpgdD/wloi4MjuIWa9IWhs4lWZt2X0EeFtENOkyMuuCFwEOseov7sbAPdlZuvAS4AJJu2YHMesFSTsCF9Os4n8PsLGL/3BzAzDkIuJ6YD3gj9lZujAfcEJ174FZY0n6BOXEzvmzs3Thj8B61bPDhphfAbSEpMUpU5AbZWfpkncIWONUK/0PBd6bnaVLlwHbR8SD2UGs/9wAtIik+Sj7jt+WnaVL3iFgjSFpUeBEYMvsLF06Gdjdt3a2h18BtEj1F3sX4LvZWbq0GXClpFdkBzEbi6TlgMtpXvH/LrCLi3+7uAFomYiYHhEfBj5J2d/bFK8CrpK0QXYQs5FIWge4mmbd5hfAJyPCB/y0kF8BtFh1DvnRNOso0qeAvSLiZ9lBzGaQ9DbgRzRrsd8zwN4R8ZPsIJbDMwAtVv3FfyNlv29TzNgh8JnsIGYw80z/E2lW8X8EeKOLf7t5BsCaehc5wDHAe71DwDJUK/0PB/bJztKlu4FtI+KG7CCWyw2AASBpGeAs4DXZWbp0IeW0Mm9bsoGpVvqfBGyRnaVLfwC2iYg7s4NYPjcANpOkxYBfUU4PbBLfIWADI2l5ypn+TWuWL6Ecs+3ttAZ4DYDNonowbEV5n9kk3iFgAyFpXcpK/6YV/xOBrVz8bVZuAGw2EfE08Hbgf7KzdOklwPmS3p4dxIaTpJ2Bi4AlkqN063+At1d/t81mcgNgz1OdFXAA8HGadVbAfMBPvEPAek3SQcDPKP+ONUUAH4+IA7zH30biNQA2puoT9bE066wA8A4B6wFJcwPfB96dnaVLzwB7RsRPs4NYfbkBsHFJ2hT4JbBocpRuXUS5Q8A7BKxr1aLYk4HNs7N06WHgrRFxUXYQqzc3ANYRSa8FzgSWzs7SpVsoe569Q8A6JmkFykr/V2dn6dJdlAN+bsoOYvXnNQDWkeqBsj7QtAfLysDV3iFgnZK0PmWlf9OK/03A+i7+1ik3ANaxiLgL2Ag4LztLl14MXOAdAjYeSbsAF1B2lTTJecBG1d9Rs464AbCuRMTDlPsDjsrO0qV5KTsEPpsdxOpJ0qeBn9Kslf4AR1Km/R/ODmLN4jUANmHVJSgHA8rO0qVjgX29Q8Bg5kr/I4C9s7N0KYCDIuLr2UGsmdwA2KQ09BpU8A4BAyQtTlnpv1l2li49CbwrIk7ODmLN5QbAJk3SOsCpwEuzs3TpFsodAn/JDmKDJ+kVlJX+r8rO0qX7gO0j4prsINZsXgNgk1Y9iNYFfp+dpUsr4zsEWqn6M7+a5hX/3wPruvhbL7gBsJ6IiNuBDYFzs7N0yTsEWqb6s76A8mffJOcCG1Z/18wmzQ2A9Uy1CnlbyqrkJvEOgZao/ox/Qvkzb5L/pRxo5ZX+1jNeA2B9IekTwNdo5g6B90bEM9lBrHckzUMpontmZ+lSAAdGxDeyg9jwcQNgfSNpR+B4mrdD4ALgbb47fThUK/1/AWyaHKVbTwK7R8QvsoPYcHIDYH3V4B0Cf6RMud6WHcQmrlrpfwZlwWeT3Ae8OSKuzQ5iw8trAKyvGrxD4NWUOwTWzQ5iEzPLSv+mFf+bKCv9Xfytr9wAWN9Vq5Y3AM7JztKlJYALq8OOrEEk7QqcT/NW+p+DV/rbgLgBsIGIiEeAN1EWYjXJ/MCJ1aJGa4DqTP8TaN6Z/kdQDqZ6JDuItYPXANjASfo48HWat0Pgf4EPRsS07CD2fA0+0386ZaX/N7ODWLu4AbAU1Q6BHwELZGfp0jnAzv6UVi+SFqOc6b95dpYuPUFZ6X9KdhBrHzcAlkbS2pQdAi/LztKlmyhTtXdkBzGQtALlTP9XZ2fp0r2UM/292M9SeA2ApakefOtSCmqTvJayQ+Dfs4O0XbVL4yqaV/y90t/SuQGwVNWn6A1p3g6BlwEXS3prdpC2krQTcCFlt0aTnE1Z6e8ZJEvlBsDSzbJD4IjsLF1aADhZ0gHZQdpG0oHAz2neKZPfB7bzGhKrA68BsFqR9DHKDoGmNaeHAR+OiGezgwwzSXMBhwP7ZGfp0nTgkxHxrewgZjO4AbDakbQD5Q6Bpu0QOAPYNSIeyw4yjCQtCpwIbJmdpUtPAO+MiF9mBzGblRsAq6Vqgd1pNG+HwPWUKd67soMME0nLUVb6r5KdpUv3Us70/7/sIGZzato0q7VE9cBcF7gxO0uXVqfsEFgjO8iwqLaLXk3ziv+NwDou/lZXbgCstqpV0htRVk03ycuBSyRtlx2k6arXQRfTvNskz6Ks9L8zO4jZaNwAWK1Vq6W3o6yebpKFgF9K2j87SFNVC0JPonkr/Q+nvAZ6NDuI2Vi8BsAao8E7BL4DHBAR07ODNEG10v97wH7ZWbo0HfhERBySHcSsE24ArFGqg3d+TPN2CJwG7BYRj2cHqTNJC1NW+m+dnaVLTwDviIhfZQcx65QbAGucBu8Q+A1lRfjfs4PUkaRlKCv9V83O0qV7KH+u12UHMetG06ZSzWbsEFiH5u0QWBO4StJq2UHqRtJalJX+TSv+N1DO9Hfxt8ZxA2CNVK2u3pCy2rpJlgEuk7RNdpC6kPQW4BJgyewsXToT2Mgr/a2p3ABYY1WrrLejrLpukoWB0yW9LztINkkfAX5B89Z0HEaZ9vdKf2ssNwDWaBHxbER8APh/lFXYTfEC4HBJ35TUur+Hkl4g6XvAf9Os59B04KMR8UHf+2BN50WANjQkvRk4AVgwO0uXTgF2j4gnsoMMgqSFgJ8B22Zn6ZLP9Leh4gbAhoqkNSk7BF6enaVL11KmlO/LDtJPkpYGTqccmdwkPtPfho4bABs6VZH5NdC01fa3A2+KiN9nB+mH6n6E02lec3YT5c/ljuwgZr3UpHdvZh2pbuLbiLJKu0mWAy6X1LTrbsdV3YtwKc0r/udSzvR38beh4wbAhlK1OvvNNG+HwKLAGZL2yQ7SK9V9CL+keWszjgS2re6jMBs6bgBsaM2yQ+DjNGuHwFzAkZIOlqTsMBMlaYqkb1PuQnhBdp4uBHBQRLw3IqZlhzHrF68BsFaorpU9nubtNz8R2CMinsoO0g1JCwI/pZzT0CRPAe+KiJOyg5j1mxsAaw1Ja1N2CDTtbvmrgO0j4v7sIJ2Q9HLKYr81srN06X7K7/NV2UHMBsENgLWKpOUoOwRWyc7Spb9R3kffnB1kLJJWpxT/pbOzdOlmyu/v37KDmA2K1wBYq0TE7ZQ7BM7NztKlFYArJW2WHWQ0krYFLqN5xf9CYH0Xf2sbNwDWOhHxMOUUuqOys3RpMeBsSXtlB5mTpA8ApwILZWfp0jHA1hHxUHYQs0FzA2CtFBHTImJf4CDKqu+mmBs4WtJX6rBDoFrpfwhwKM1b6f+5iNg7IqZmhzHL4DUA1nqSdgaOA+bLztKlE4C9I+LpjMElLQD8BHhLxviT8DTl9+2E7CBmmdwAmAGS1qNMYb8kO0uXLgfeGhH/HOSgkpak7KhYa5Dj9sADlN+vy7KDmGVzA2BWkfQKyg6BV2Vn6dKfKWfV3zqIwSStSlnpv+wgxuuhP1FW+v85O4hZHXgNgFklIv4KbEBZFd4kK1J2CGzc74EkbU1Z6d+04n8pZaW/i79ZxQ2A2Swi4kFga+DY7CxdeiFwrqTd+zWApP0on/wX6dcYffJjYMuIeCA7iFmduAEwm0NETI2IvYDP0awdAvMAP5L0+V5+UxXfAL5PuaegSb4cEbtnLZQ0qzOvATAbg6R3AD8E5s3O0qUfAftExDOT+SaS5qfcobBjT1INzjPAvhFxXHYQs7pyA2A2DkkbUa6zfVF2li5dAuwQEf+ayE+W9FLKzoh1epqq/x4EdoyIi7KDmNWZGwCzDkhaETgDeGV2li7dSln5/pdufpJc4pkNAAAEtElEQVSkVSg7IpbrS6r++StlR0St70wwqwOvATDrQLV6fH3KavImWQm4StKGnf4ESVtQzhdoWvG/EljPxd+sM24AzDpUrSLfkrKqvEleDJwv6e3j/UBJ+wBnAov2PVVv/RzYvClXJpvVgRsAsy5ExNMRsTvwpewsXZoX+Imkz4z0f1Yr/Q8GjqR5K/0PBt4eEU9lBzFrEq8BMJsgSXtQCuY82Vm6dDSw34xLcCTNR7kLYefUVN2bBrw/Ipp2q6NZLbgBMJsESZsCvwAWT47SrQuAt1Gal18B6+XG6drDwE4RcV52ELOmcgNgNkmSVqbsEHhFdpYu/ZFyA+IK2UG6dDtlpf/vs4OYNZkbALMekPQSyifp9bOzDLlrgTdHxH3ZQcyazosAzXqgWn2+OWU1uvXHKcCmLv5mveEGwKxHqlXobwe+mp1lCB1Ceef/RHYQs2HhVwBmfSDpPcDhwNzZWRruWWD/iDg8O4jZsHEDYNYn1Yl6J9G8Q3Xq4lFg14g4MzuI2TByA2DWR5JeQzlTf/nkKE1zF2Wl/w3ZQcyGldcAmPVRRPyBssf+muwsDfJbYF0Xf7P+cgNg1mfVqvVNKQcG2dhOB14fEX/PDmI27NwAmA1ARDxJOWr3m9lZauy7wFsj4vHsIGZt4DUAZgMmaT/gezTv0p1+mQ4cEBHfyQ5i1iZuAMwSSNqGcmjQwtlZkj0O7BYRp2UHMWsbNwBmSSStStkhsEx2liT3ANtFxG+yg5i1kdcAmCWJiBuBdYE2FsAbKCv92/hrN6sFNwBmiSLiHmBj4NTsLAN0FrBRRNyZHcSszdwAmCWrVr3vAHw7O8sAfJ8y7f9odhCztnMDYFYDETE9Ij4C7E85/37YBPCJiHh/RAzjr8+scbwI0KxmJG0HnAAslJ2lR54Edo8IH4RkViNuAMxqSNIalFPxXp6dZZLuA7aPCB+FbFYzbgDMakrS0pQmYPXsLBP0B8qFPrdlBzGz5/MaALOaioi7gI2AM7KzTMD5wAYu/mb15QbArMYi4jFge+Cw7Cxd+CHwxoh4ODuImY3ODYBZzUXEsxHxQeCjlHPz6yqAT0fEeyJianYYMxub1wCYNYikrYDjgJdmZ5nDA8BeEXF6dhAz64wbALOGkbQEpQnYOjtL5ULKNr+/Zwcxs875FYBZw0TEP4A3Ah8HMqfapwGfBbZw8TdrHs8AmDWYpNWBL1IWCmqAQ58JfD4irh3gmGbWQ24AzIZAdbXwp4Fd6N/M3nTgF8B/RcRv+zSGmQ2IGwCzISJpJeCA/9/eHdo2EINhGP4MInWCoGyQQUo6XNY5mh0CykvaCcoccOxQwEWR8j2PZHiW4Qvut5N8JTnttO1P1guJLnPO7532BF5MAMCbGmOcs/4o+Jn1yeGPBz/9T3JNsiRZ5py355wQeCUBAAXGGIeso4PHzUqSv836NccP708AAEAhY4AAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhe7TmzBXeX3nkgAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/comments.js":
/*!*************************!*\
  !*** ./src/comments.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ COMMENTS)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _assets_images_closeIcon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/closeIcon.png */ "./src/assets/images/closeIcon.png");
/* eslint import/no-cycle: 0 */



const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const appsEndPoint = '/apps/';
const commentsEndPoint = '/comments/';
const CommentEndPt = '/comments?item_id=';
const id = 'sRPHgjJhQMGqpfqhsriS';
const popUpOverlay = document.querySelector('.popup-overlay');

const comment = {
  item_id: String,
  username: String,
  comment: String,
};

class COMMENTS {
  
    static createNewComment = async (e) => {
          const input = document.querySelector('.input')
          const text = document.querySelector('.comment')
          if(input.value != '' && text.value != '' ){
            comment.username = input.value 
            comment.comment = text.value
            comment.item_id = e.target.id;
          }  
            
      try {
          const response = await fetch(baseUrl + appsEndPoint + id + commentsEndPoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(comment),
          });
          const data = await response.text();
          console.log(data)
          return data;
      } catch (error) {
        return error;
      }
      
    }

      static postComment = (e) => {
        if(e.target.type === "submit") {
          COMMENTS.createNewComment(e)
        }else{e.preventDefault()}
      }

      static getComments = async (itemId) => {
        try {
          const res = await fetch(baseUrl + appsEndPoint + id + CommentEndPt + itemId, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await res.text();
          return data;
        } catch (error) {
          return error;
        }
      }

      static displayPopUp = (e, data) => {
        let result = '';
        let detail;
        if(e.target.classList.contains('comment-btn')) {
          detail = data.find((item) => Number(item.id) === Number(e.target.id));
          popUpOverlay.classList.remove('remove-popup');
          COMMENTS.getComments(detail.id.toString()).then(comments => {
            if(comments.length){
              console.log(comments)
              detail.comments = comments.length || 0
              result += `
              <div class="popup-card">
              <button id="desktop-popup-close">
                  <img src= ${_assets_images_closeIcon_png__WEBPACK_IMPORTED_MODULE_1__["default"]} alt="close">
             </button>
              <div class="popup-img-wrap">
                  <img src=${detail.image.medium} alt="popup">
                  <button id="popup-close">
                      <img id="close-img" src=${_assets_images_closeIcon_png__WEBPACK_IMPORTED_MODULE_1__["default"]} alt="close">
                 </button>
              </div>
              <div class="title-wrap">
                  <h2>${detail.name}</h2>
              </div>
              <div class="more-details-wrap">
                  <div class="more-details">
                      <p class="comment"><span class="origin">premiered</span>: ${detail.premiered}</p>
                      <p class="comment"><span class="origin">status</span>: ${detail.status}</p>
                  </div>
                  <div class="more-details align-right">
                      <p class="comment"><span class="origin">Country</span>: ${detail.network.country.name}</p>
                      <p class="comment"><span class="origin">Language</span>: ${detail.language}</p>
                  </div>
              </div>
              <div class="comment-wrap">
                  <p>comments <span id="comments-count">${detail.comments}</span></p>
              </div>
              <ul class="commentors"></ul>
              <div class="add-comment">
                  <p>Add a comment</p>
              </div>
              <form id=${detail.id} class="form" action="">
                  <label for=${detail.id}>
                      <input class="input" type="text" name=${detail.id}" required id=${detail.id} placeholder="Your name">
                  </label>
                  <label for="comment">
                      <textarea class="comment" id="comment" name="user_message" maxlength="500" placeholder="Message" required></textarea>
                  </label>
                  <div class="btn-container">
                      <button id=${detail.id} type="submit" class="btn">comment</button>
                  </div>
              </form>
            </div>
              `;
              popUpOverlay.innerHTML = result
               
            }
          })
        }
      }
    }
      


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SHOWS)
/* harmony export */ });
/* harmony import */ var _assets_images_heart_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/heart.png */ "./src/assets/images/heart.png");
/* harmony import */ var _interations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interations.js */ "./src/interations.js");
/* eslint import/no-cycle: 0 */



const url = 'https://api.tvmaze.com/shows';
const showsContainer = document.querySelector('.shows-container');
const count = document.querySelector('#count');

class SHOWS {
  static allShows = [];

    static getShows = async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }

    static renderMovies = (movies) => {
      let result = '';
      movies.forEach((movie) => {
        result += `
        <article class="show">
        <div class="img-wrap">
            <img class="show-img" src="${movie.image.medium}" alt="image">
        </div>
        <div class="likes-conatainer">
            <p class="name">${movie.name}</p>
               <img id=${movie.id} class="heart"src=${_assets_images_heart_png__WEBPACK_IMPORTED_MODULE_0__["default"]} alt="image">
        </div>
        <div class="likes-value-wrap">
            <p class=value-wrap><span class="value">${movie.likes}</span><span>likes</span></p>
        </div>
        <button id=${movie.id} class="comment-btn comment-button">comments</button>
    </article>
        `;
      });
      showsContainer.innerHTML = result;
    }

      static newMovies = (likes, movies) => {
        const mappedMovies = movies.map((movie) => {
          const likedMovie = likes.find((like) => Number(like.item_id) === Number(movie.id));
          return {
            ...movie,
            likes: likedMovie ? likedMovie.likes : 0,
          };
        });
        SHOWS.allShows = mappedMovies;
        SHOWS.renderMovies(mappedMovies);
      }

      static displayShows() {
        SHOWS.getShows().then((data) => {
          this.allShows = data;
          count.textContent = `(${data.length})`;
          _interations_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLikes().then((likes) => {
            if (likes.length) {
              SHOWS.newMovies(likes, data);
            }
          });
        });
      }
}

/***/ }),

/***/ "./src/interations.js":
/*!****************************!*\
  !*** ./src/interations.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ INTERACTIONS)
/* harmony export */ });
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ "./src/comments.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* eslint import/no-cycle: 0 */



const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const appsEndPoint = '/apps/';
const likesEndPoint = '/likes/';
const id = 'sRPHgjJhQMGqpfqhsriS';
const popUpOverlay = document.querySelector('.popup-overlay');

class INTERACTIONS {
    static createAppId = async () => {
      try {
        const response = await fetch(baseUrl + appsEndPoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.text();
        return data;
      } catch (error) {
        return error;
      }
    }

      static postLike = async (movieId) => {
        try {
          const response = await fetch(baseUrl + appsEndPoint + id + likesEndPoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },

            body: JSON.stringify({
              item_id: movieId,
            }),
          });
          const data = await response.text();
          return data;
        } catch (error) {
          return error;
        }
      }

      static createNewLike = (e) => {
        if (e.target.classList.contains('heart')) {
          popUpOverlay.classList.add('remove-popup')
          const id = e.target.getAttribute('id');
          INTERACTIONS.postLike(id).then((data) => {
            if (data === 'Created') {
              if (_home_js__WEBPACK_IMPORTED_MODULE_1__["default"].allShows.length) {
                const likedShow = _home_js__WEBPACK_IMPORTED_MODULE_1__["default"].allShows.find((show) => Number(show.id) === Number(id));
                if (likedShow) {
                  likedShow.likes += 1;
                }
                _home_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderMovies(_home_js__WEBPACK_IMPORTED_MODULE_1__["default"].allShows);
              }
            }
          });
        }
      }

      // static showPopUp = (e) => {
      //   SHOWS.getShows().then((data) => {
      //     for (let i = 0; i < data.length; i += 1) {
      //       if (e.target.id.toString() === data[i].id.toString()) {
      //         popUpOverlay.classList.remove('remove-popup');
      //         COMMENTS.displayPopUp(e);
      //       }
      //     }
      //   });
      // }

      static removePopUp = (e) => {
        if (e.target.alt === 'close') {
          popUpOverlay.classList.add('remove-popup');
        }
      }

      static getLikes = async () => {
        try {
          const response = await fetch(baseUrl + appsEndPoint + id + likesEndPoint, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },

          });
          const data = await response.json();
          return data;
        } catch (error) {
          return error;
        }
      }
}

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api": () => (/* binding */ api),
/* harmony export */   "config": () => (/* binding */ config$1),
/* harmony export */   "counter": () => (/* binding */ counter),
/* harmony export */   "dom": () => (/* binding */ dom$1),
/* harmony export */   "findIconDefinition": () => (/* binding */ findIconDefinition$1),
/* harmony export */   "icon": () => (/* binding */ icon),
/* harmony export */   "layer": () => (/* binding */ layer),
/* harmony export */   "library": () => (/* binding */ library$1),
/* harmony export */   "noAuto": () => (/* binding */ noAuto$1),
/* harmony export */   "parse": () => (/* binding */ parse$1),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "toHtml": () => (/* binding */ toHtml$1)
/* harmony export */ });
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _wrapRegExp() {
  _wrapRegExp = function (re, groups) {
    return new BabelRegExp(re, void 0, groups);
  };

  var _super = RegExp.prototype,
      _groups = new WeakMap();

  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);

    return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype);
  }

  function buildGroups(result, re) {
    var g = _groups.get(re);

    return Object.keys(g).reduce(function (groups, name) {
      return groups[name] = result[g[name]], groups;
    }, Object.create(null));
  }

  return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) {
    var result = _super.exec.call(this, str);

    return result && (result.groups = buildGroups(result, this)), result;
  }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
    if ("string" == typeof substitution) {
      var groups = _groups.get(this);

      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
        return "$" + groups[name];
      }));
    }

    if ("function" == typeof substitution) {
      var _this = this;

      return _super[Symbol.replace].call(this, str, function () {
        var args = arguments;
        return "object" != typeof args[args.length - 1] && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
      });
    }

    return _super[Symbol.replace].call(this, str, substitution);
  }, _wrapRegExp.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5;

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_CSS_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();
var FAMILY_CLASSIC = 'classic';
var FAMILY_SHARP = 'sharp';
var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];

function familyProxy(obj) {
  // Defaults to the classic family if family is not available
  return new Proxy(obj, {
    get: function get(target, prop) {
      return prop in target ? target[prop] : target[FAMILY_CLASSIC];
    }
  });
}
var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty(_familyProxy, FAMILY_CLASSIC, {
  'fa': 'solid',
  'fas': 'solid',
  'fa-solid': 'solid',
  'far': 'regular',
  'fa-regular': 'regular',
  'fal': 'light',
  'fa-light': 'light',
  'fat': 'thin',
  'fa-thin': 'thin',
  'fad': 'duotone',
  'fa-duotone': 'duotone',
  'fab': 'brands',
  'fa-brands': 'brands',
  'fak': 'kit',
  'fa-kit': 'kit'
}), _defineProperty(_familyProxy, FAMILY_SHARP, {
  'fa': 'solid',
  'fass': 'solid',
  'fa-solid': 'solid',
  'fasr': 'regular',
  'fa-regular': 'regular'
}), _familyProxy));
var STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty(_familyProxy2, FAMILY_CLASSIC, {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'thin': 'fat',
  'duotone': 'fad',
  'brands': 'fab',
  'kit': 'fak'
}), _defineProperty(_familyProxy2, FAMILY_SHARP, {
  'solid': 'fass',
  'regular': 'fasr'
}), _familyProxy2));
var PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty(_familyProxy3, FAMILY_CLASSIC, {
  'fab': 'fa-brands',
  'fad': 'fa-duotone',
  'fak': 'fa-kit',
  'fal': 'fa-light',
  'far': 'fa-regular',
  'fas': 'fa-solid',
  'fat': 'fa-thin'
}), _defineProperty(_familyProxy3, FAMILY_SHARP, {
  'fass': 'fa-solid',
  'fasr': 'fa-regular'
}), _familyProxy3));
var LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty(_familyProxy4, FAMILY_CLASSIC, {
  'fa-brands': 'fab',
  'fa-duotone': 'fad',
  'fa-kit': 'fak',
  'fa-light': 'fal',
  'fa-regular': 'far',
  'fa-solid': 'fas',
  'fa-thin': 'fat'
}), _defineProperty(_familyProxy4, FAMILY_SHARP, {
  'fa-solid': 'fass',
  'fa-regular': 'fasr'
}), _familyProxy4));
var ICON_SELECTION_SYNTAX_PATTERN = /fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/; // eslint-disable-line no-useless-escape

var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i;
var FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty(_familyProxy5, FAMILY_CLASSIC, {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal',
  '100': 'fat'
}), _defineProperty(_familyProxy5, FAMILY_SHARP, {
  '900': 'fass',
  '400': 'fasr'
}), _familyProxy5));
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'duotone-group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var prefixes = new Set();
Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray(prefixes), ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', 'beat', 'border', 'fade', 'beat-fade', 'bounce', 'flip-both', 'flip-horizontal', 'flip-vertical', 'flip', 'fw', 'inverse', 'layers-counter', 'layers-text', 'layers', 'li', 'pull-left', 'pull-right', 'pulse', 'rotate-180', 'rotate-270', 'rotate-90', 'rotate-by', 'shake', 'spin-pulse', 'spin-reverse', 'spin', 'stack-1x', 'stack-2x', 'stack', 'ul', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-css-prefix', 'cssPrefix'], ['data-family-default', 'familyDefault'], ['data-style-default', 'styleDefault'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: DEFAULT_CSS_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
}; // familyPrefix is deprecated but we must still support it if present

if (initial.familyPrefix) {
  initial.cssPrefix = initial.familyPrefix;
}

var _config = _objectSpread2(_objectSpread2({}, _default), initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;
var config = {};
Object.keys(_default).forEach(function (key) {
  Object.defineProperty(config, key, {
    enumerable: true,
    set: function set(val) {
      _config[key] = val;

      _onChangeCb.forEach(function (cb) {
        return cb(config);
      });
    },
    get: function get() {
      return _config[key];
    }
  });
}); // familyPrefix is deprecated as of 6.2.0 and should be removed in 7.0.0

Object.defineProperty(config, 'familyPrefix', {
  enumerable: true,
  set: function set(val) {
    _config.cssPrefix = val;

    _onChangeCb.forEach(function (cb) {
      return cb(config);
    });
  },
  get: function get() {
    return _config.cssPrefix;
  }
});
WINDOW.FontAwesomeConfig = config;
var _onChangeCb = [];
function onChange(cb) {
  _onChangeCb.push(cb);

  return function () {
    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
  };
}

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var baseStyles = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 6 Solid\";\n  --fa-font-regular: normal 400 1em/1 \"Font Awesome 6 Regular\";\n  --fa-font-light: normal 300 1em/1 \"Font Awesome 6 Light\";\n  --fa-font-thin: normal 100 1em/1 \"Font Awesome 6 Thin\";\n  --fa-font-duotone: normal 900 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-sharp-solid: normal 900 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-regular: normal 400 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-brands: normal 400 1em/1 \"Font Awesome 6 Brands\";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}";

function css() {
  var dcp = DEFAULT_CSS_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.cssPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dcp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dcp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var _cssInserted = false;

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}

var InjectCSS = {
  mixout: function mixout() {
    return {
      dom: {
        css: css,
        insertCss: ensureCss
      }
    };
  },
  hooks: function hooks() {
    return {
      beforeDOMElementCreation: function beforeDOMElementCreation() {
        ensureCss();
      },
      beforeI2svg: function beforeI2svg() {
        ensureCss();
      }
    };
  }
};

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

/**
 * ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
 *
 * Copyright Mathias Bynens <https://mathiasbynens.be/>

 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
function ucs2decode(string) {
  var output = [];
  var counter = 0;
  var length = string.length;

  while (counter < length) {
    var value = string.charCodeAt(counter++);

    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      var extra = string.charCodeAt(counter++);

      if ((extra & 0xFC00) == 0xDC00) {
        // eslint-disable-line eqeqeq
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }

  return output;
}

function toHex(unicode) {
  var decoded = ucs2decode(unicode);
  return decoded.length === 1 ? decoded[0].toString(16) : null;
}
function codePointAt(string, index) {
  var size = string.length;
  var first = string.charCodeAt(index);
  var second;

  if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
    second = string.charCodeAt(index + 1);

    if (second >= 0xDC00 && second <= 0xDFFF) {
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }

  return first;
}

function normalizeIcons(icons) {
  return Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = normalizeIcons(icons);

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalizeIcons(icons));
  } else {
    namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll ease the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var duotonePathRe = [/*#__PURE__*/_wrapRegExp(/path d="((?:(?!")[\s\S])+)".*path d="((?:(?!")[\s\S])+)"/, {
  d1: 1,
  d2: 2
}), /*#__PURE__*/_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)".*path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
  cls1: 1,
  d1: 2,
  cls2: 3,
  d2: 4
}), /*#__PURE__*/_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
  cls1: 1,
  d1: 2
})];

var _LONG_STYLE, _PREFIXES, _PREFIXES_FOR_FAMILY;
var styles = namespace.styles,
    shims = namespace.shims;
var LONG_STYLE = (_LONG_STYLE = {}, _defineProperty(_LONG_STYLE, FAMILY_CLASSIC, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty(_LONG_STYLE, FAMILY_SHARP, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _LONG_STYLE);
var _defaultUsablePrefix = null;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var _byOldUnicode = {};
var _byAlias = {};
var PREFIXES = (_PREFIXES = {}, _defineProperty(_PREFIXES, FAMILY_CLASSIC, Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC])), _defineProperty(_PREFIXES, FAMILY_SHARP, Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP])), _PREFIXES);

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}

function getIconName(cssPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === cssPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    if (icon[2]) {
      var aliases = icon[2].filter(function (a) {
        return typeof a === 'number';
      });
      aliases.forEach(function (alias) {
        acc[alias.toString(16)] = iconName;
      });
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    acc[iconName] = iconName;

    if (icon[2]) {
      var aliases = icon[2].filter(function (a) {
        return typeof a === 'string';
      });
      aliases.forEach(function (alias) {
        acc[alias] = iconName;
      });
    }

    return acc;
  });
  _byAlias = lookup(function (acc, icon, iconName) {
    var aliases = icon[2];
    acc[iconName] = iconName;
    aliases.forEach(function (alias) {
      acc[alias] = iconName;
    });
    return acc;
  }); // If we have a Kit, we can't determine if regular is available since we
  // could be auto-fetching it. We'll have to assume that it is available.

  var hasRegular = 'far' in styles || config.autoFetchSvg;
  var shimLookups = reduce(shims, function (acc, shim) {
    var maybeNameMaybeUnicode = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    if (typeof maybeNameMaybeUnicode === 'string') {
      acc.names[maybeNameMaybeUnicode] = {
        prefix: prefix,
        iconName: iconName
      };
    }

    if (typeof maybeNameMaybeUnicode === 'number') {
      acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
        prefix: prefix,
        iconName: iconName
      };
    }

    return acc;
  }, {
    names: {},
    unicodes: {}
  });
  _byOldName = shimLookups.names;
  _byOldUnicode = shimLookups.unicodes;
  _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
    family: config.familyDefault
  });
};
onChange(function (c) {
  _defaultUsablePrefix = getCanonicalPrefix(c.styleDefault, {
    family: config.familyDefault
  });
});
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byAlias(prefix, alias) {
  return (_byAlias[prefix] || {})[alias];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}
function byOldUnicode(unicode) {
  var oldUnicode = _byOldUnicode[unicode];
  var newUnicode = byUnicode('fas', unicode);
  return oldUnicode || (newUnicode ? {
    prefix: 'fas',
    iconName: newUnicode
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function getDefaultUsablePrefix() {
  return _defaultUsablePrefix;
}
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalPrefix(styleOrPrefix) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$family = params.family,
      family = _params$family === void 0 ? FAMILY_CLASSIC : _params$family;
  var style = PREFIX_TO_STYLE[family][styleOrPrefix];
  var prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
  var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
  return prefix || defined || null;
}
var PREFIXES_FOR_FAMILY = (_PREFIXES_FOR_FAMILY = {}, _defineProperty(_PREFIXES_FOR_FAMILY, FAMILY_CLASSIC, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty(_PREFIXES_FOR_FAMILY, FAMILY_SHARP, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _PREFIXES_FOR_FAMILY);
function getCanonicalIcon(values) {
  var _famProps;

  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$skipLookups = params.skipLookups,
      skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
  var famProps = (_famProps = {}, _defineProperty(_famProps, FAMILY_CLASSIC, "".concat(config.cssPrefix, "-").concat(FAMILY_CLASSIC)), _defineProperty(_famProps, FAMILY_SHARP, "".concat(config.cssPrefix, "-").concat(FAMILY_SHARP)), _famProps);
  var givenPrefix = null;
  var family = FAMILY_CLASSIC;

  if (values.includes(famProps[FAMILY_CLASSIC]) || values.some(function (v) {
    return PREFIXES_FOR_FAMILY[FAMILY_CLASSIC].includes(v);
  })) {
    family = FAMILY_CLASSIC;
  }

  if (values.includes(famProps[FAMILY_SHARP]) || values.some(function (v) {
    return PREFIXES_FOR_FAMILY[FAMILY_SHARP].includes(v);
  })) {
    family = FAMILY_SHARP;
  }

  var canonical = values.reduce(function (acc, cls) {
    var iconName = getIconName(config.cssPrefix, cls);

    if (styles[cls]) {
      cls = LONG_STYLE[family].includes(cls) ? LONG_STYLE_TO_PREFIX[family][cls] : cls;
      givenPrefix = cls;
      acc.prefix = cls;
    } else if (PREFIXES[family].indexOf(cls) > -1) {
      givenPrefix = cls;
      acc.prefix = getCanonicalPrefix(cls, {
        family: family
      });
    } else if (iconName) {
      acc.iconName = iconName;
    } else if (cls !== config.replacementClass && cls !== famProps[FAMILY_CLASSIC] && cls !== famProps[FAMILY_SHARP]) {
      acc.rest.push(cls);
    }

    if (!skipLookups && acc.prefix && acc.iconName) {
      var shim = givenPrefix === 'fa' ? byOldName(acc.iconName) : {};
      var aliasIconName = byAlias(acc.prefix, acc.iconName);

      if (shim.prefix) {
        givenPrefix = null;
      }

      acc.iconName = shim.iconName || aliasIconName || acc.iconName;
      acc.prefix = shim.prefix || acc.prefix;

      if (acc.prefix === 'far' && !styles['far'] && styles['fas'] && !config.autoFetchSvg) {
        // Allow a fallback from the regular style to solid if regular is not available
        // but only if we aren't auto-fetching SVGs
        acc.prefix = 'fas';
      }
    }

    return acc;
  }, emptyCanonicalIcon());

  if (values.includes('fa-brands') || values.includes('fab')) {
    canonical.prefix = 'fab';
  }

  if (values.includes('fa-duotone') || values.includes('fad')) {
    canonical.prefix = 'fad';
  }

  if (!canonical.prefix && family === FAMILY_SHARP && (styles['fass'] || config.autoFetchSvg)) {
    canonical.prefix = 'fass';
    canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
  }

  if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
    // The fa prefix is not canonical. So if it has made it through until this point
    // we will shift it to the correct prefix.
    canonical.prefix = getDefaultUsablePrefix() || 'fas';
  }

  return canonical;
}

var Library = /*#__PURE__*/function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread2(_objectSpread2({}, _this.definitions[key] || {}), additions[key]);
        defineIcons(key, additions[key]); // TODO can we stop doing this? We can't get the icons by 'fa-solid' any longer so this probably needs to change

        var longPrefix = PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC][key];
        if (longPrefix) defineIcons(longPrefix, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        var aliases = icon[2];
        if (!additions[prefix]) additions[prefix] = {};

        if (aliases.length > 0) {
          aliases.forEach(function (alias) {
            if (typeof alias === 'string') {
              additions[prefix][alias] = icon;
            }
          });
        }

        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

var _plugins = [];
var _hooks = {};
var providers = {};
var defaultProviderKeys = Object.keys(providers);
function registerPlugins(nextPlugins, _ref) {
  var obj = _ref.mixoutsTo;
  _plugins = nextPlugins;
  _hooks = {};
  Object.keys(providers).forEach(function (k) {
    if (defaultProviderKeys.indexOf(k) === -1) {
      delete providers[k];
    }
  });

  _plugins.forEach(function (plugin) {
    var mixout = plugin.mixout ? plugin.mixout() : {};
    Object.keys(mixout).forEach(function (tk) {
      if (typeof mixout[tk] === 'function') {
        obj[tk] = mixout[tk];
      }

      if (_typeof(mixout[tk]) === 'object') {
        Object.keys(mixout[tk]).forEach(function (sk) {
          if (!obj[tk]) {
            obj[tk] = {};
          }

          obj[tk][sk] = mixout[tk][sk];
        });
      }
    });

    if (plugin.hooks) {
      var hooks = plugin.hooks();
      Object.keys(hooks).forEach(function (hook) {
        if (!_hooks[hook]) {
          _hooks[hook] = [];
        }

        _hooks[hook].push(hooks[hook]);
      });
    }

    if (plugin.provides) {
      plugin.provides(providers);
    }
  });

  return obj;
}
function chainHooks(hook, accumulator) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function (hookFn) {
    accumulator = hookFn.apply(null, [accumulator].concat(args)); // eslint-disable-line no-useless-call
  });
  return accumulator;
}
function callHooks(hook) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function (hookFn) {
    hookFn.apply(null, args);
  });
  return undefined;
}
function callProvided() {
  var hook = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
  return providers[hook] ? providers[hook].apply(null, args) : undefined;
}

function findIconDefinition(iconLookup) {
  if (iconLookup.prefix === 'fa') {
    iconLookup.prefix = 'fas';
  }

  var iconName = iconLookup.iconName;
  var prefix = iconLookup.prefix || getDefaultUsablePrefix();
  if (!iconName) return;
  iconName = byAlias(prefix, iconName) || iconName;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}
var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  callHooks('noAuto');
};
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      callHooks('beforeI2svg', params);
      callProvided('pseudoElements2svg', params);
      return callProvided('i2svg', params);
    } else {
      return Promise.reject('Operation requires a DOM of some kind.');
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      callHooks('watch', params);
    });
  }
};
var parse = {
  icon: function icon(_icon) {
    if (_icon === null) {
      return null;
    }

    if (_typeof(_icon) === 'object' && _icon.prefix && _icon.iconName) {
      return {
        prefix: _icon.prefix,
        iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
      };
    }

    if (Array.isArray(_icon) && _icon.length === 2) {
      var iconName = _icon[1].indexOf('fa-') === 0 ? _icon[1].slice(3) : _icon[1];
      var prefix = getCanonicalPrefix(_icon[0]);
      return {
        prefix: prefix,
        iconName: byAlias(prefix, iconName) || iconName
      };
    }

    if (typeof _icon === 'string' && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
      var canonicalIcon = getCanonicalIcon(_icon.split(' '), {
        skipLookups: true
      });
      return {
        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
      };
    }

    if (typeof _icon === 'string') {
      var _prefix = getDefaultUsablePrefix();

      return {
        prefix: _prefix,
        iconName: byAlias(_prefix, _icon) || _icon
      };
    }
  }
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  parse: parse,
  library: library,
  findIconDefinition: findIconDefinition,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};

function domVariants(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread2(_objectSpread2({}, styles), {}, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var isUploadedIcon = prefix === 'fak';
  var attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ''].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function (c) {
    return c !== '' || !!c;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) {
    content.children.push({
      tag: 'title',
      attributes: {
        id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });
    delete content.attributes.title;
  }

  var args = _objectSpread2(_objectSpread2({}, content), {}, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
  });

  var _ref2 = mask.found && main.found ? callProvided('generateAbstractMask', args) || {
    children: [],
    attributes: {}
  } : callProvided('generateAbstractIcon', args) || {
    children: [],
    attributes: {}
  },
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread2({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var styles$1 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}
var missingIconResolutionMixin = {
  found: false,
  width: 512,
  height: 512
};

function maybeNotifyMissing(iconName, prefix) {
  if (!PRODUCTION && !config.showMissingIcons && iconName) {
    console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
  }
}

function findIcon(iconName, prefix) {
  var givenPrefix = prefix;

  if (prefix === 'fa' && config.styleDefault !== null) {
    prefix = getDefaultUsablePrefix();
  }

  return new Promise(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: callProvided('missingIconAbstract') || {}
    };

    if (givenPrefix === 'fa') {
      var shim = byOldName(iconName) || {};
      iconName = shim.iconName || iconName;
      prefix = shim.prefix || prefix;
    }

    if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
      var icon = styles$1[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    maybeNotifyMissing(iconName, prefix);
    resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
      icon: config.showMissingIcons && iconName ? callProvided('missingIconAbstract') || {} : {}
    }));
  });
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"6.3.0\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function hasPrefixAndIcon(node) {
  var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
  var icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
  return prefix && icon;
}

function hasBeenReplaced(node) {
  return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

function createElementNS(tag) {
  return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag);
}

function createElement(tag) {
  return DOCUMENT.createElement(tag);
}

function convertSVG(abstractObj) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$ceFn = params.ceFn,
      ceFn = _params$ceFn === void 0 ? abstractObj.tag === 'svg' ? createElementNS : createElement : _params$ceFn;

  if (typeof abstractObj === 'string') {
    return DOCUMENT.createTextNode(abstractObj);
  }

  var tag = ceFn(abstractObj.tag);
  Object.keys(abstractObj.attributes || []).forEach(function (key) {
    tag.setAttribute(key, abstractObj.attributes[key]);
  });
  var children = abstractObj.children || [];
  children.forEach(function (child) {
    tag.appendChild(convertSVG(child, {
      ceFn: ceFn
    }));
  });
  return tag;
}

function nodeAsComment(node) {
  var comment = " ".concat(node.outerHTML, " ");
  /* BEGIN.ATTRIBUTION */

  comment = "".concat(comment, "Font Awesome fontawesome.com ");
  /* END.ATTRIBUTION */

  return comment;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];

    if (node.parentNode) {
      mutation[1].forEach(function (_abstract) {
        node.parentNode.insertBefore(convertSVG(_abstract), node);
      });

      if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
        var comment = DOCUMENT.createComment(nodeAsComment(node));
        node.parentNode.replaceChild(comment, node);
      } else {
        node.remove();
      }
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var _abstract2 = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
    delete _abstract2[0].attributes.id;

    if (_abstract2[0].attributes.class) {
      var splitClasses = _abstract2[0].attributes.class.split(' ').reduce(function (acc, cls) {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }

        return acc;
      }, {
        toNode: [],
        toSvg: []
      });

      _abstract2[0].attributes.class = splitClasses.toSvg.join(' ');

      if (splitClasses.toNode.length === 0) {
        node.removeAttribute('class');
      } else {
        node.setAttribute('class', splitClasses.toNode.join(' '));
      }
    }

    var newInnerHTML = _abstract2.map(function (a) {
      return toHtml(a);
    }).join('\n');

    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var _options$treeCallback = options.treeCallback,
      treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback,
      _options$nodeCallback = options.nodeCallback,
      nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback,
      _options$pseudoElemen = options.pseudoElementsCallback,
      pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    var defaultPrefix = getDefaultUsablePrefix();
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class' && hasPrefixAndIcon(mutationRecord.target)) {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
          if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
        } else if (hasBeenReplaced(mutationRecord.target)) {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (!val.prefix) {
    val.prefix = getDefaultUsablePrefix();
  }

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.iconName && val.prefix) {
    return val;
  }

  if (val.prefix && innerText.length > 0) {
    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
  }

  if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
    val.iconName = node.firstChild.data;
  }

  return val;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');
  var titleId = node.getAttribute('data-fa-title-id');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    styleParser: true
  };

  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraAttributes = attributesParser(node);
  var pluginMeta = chainHooks('parseNodeAttributes', {}, node);
  var extraStyles = parser.styleParser ? styleParser(node) : [];
  return _objectSpread2({
    iconName: iconName,
    title: node.getAttribute('title'),
    titleId: node.getAttribute('data-fa-title-id'),
    prefix: prefix,
    transform: meaninglessTransform,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  }, pluginMeta);
}

var styles$2 = namespace.styles;

function generateMutation(node) {
  var nodeMeta = config.autoReplaceSvg === 'nest' ? parseMeta(node, {
    styleParser: false
  }) : parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return callProvided('generateLayersText', node, nodeMeta);
  } else {
    return callProvided('generateSvgReplacementMutation', node, nodeMeta);
  }
}

var knownPrefixes = new Set();
FAMILIES.map(function (family) {
  knownPrefixes.add("fa-".concat(family));
});
Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC]).map(knownPrefixes.add.bind(knownPrefixes));
Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP]).map(knownPrefixes.add.bind(knownPrefixes));
knownPrefixes = _toConsumableArray(knownPrefixes);

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return Promise.resolve();
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? knownPrefixes : FAMILIES.map(function (f) {
    return "fa-".concat(f);
  }).concat(Object.keys(styles$2));

  if (!prefixes.includes('fa')) {
    prefixes.push('fa');
  }

  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return Promise.resolve();
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return Promise.resolve();
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e.name === 'MissingIcon') {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new Promise(function (resolve, reject) {
    Promise.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function (e) {
      mark();
      reject(e);
    });
  });
}

function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
      mask: mask
    }));
  };
}

var render = function render(iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return domVariants(_objectSpread2({
    type: 'icon'
  }, iconDefinition), function () {
    callHooks('beforeDOMElementCreation', {
      iconDefinition: iconDefinition,
      params: params
    });

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
};
var ReplaceElements = {
  mixout: function mixout() {
    return {
      icon: resolveIcons(render)
    };
  },
  hooks: function hooks() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.treeCallback = onTree;
        accumulator.nodeCallback = onNode;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.i2svg = function (params) {
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;
      return onTree(node, callback);
    };

    providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
      var iconName = nodeMeta.iconName,
          title = nodeMeta.title,
          titleId = nodeMeta.titleId,
          prefix = nodeMeta.prefix,
          transform = nodeMeta.transform,
          symbol = nodeMeta.symbol,
          mask = nodeMeta.mask,
          maskId = nodeMeta.maskId,
          extra = nodeMeta.extra;
      return new Promise(function (resolve, reject) {
        Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
          found: false,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              main = _ref2[0],
              mask = _ref2[1];

          resolve([node, makeInlineSvgAbstract({
            icons: {
              main: main,
              mask: mask
            },
            prefix: prefix,
            iconName: iconName,
            transform: transform,
            symbol: symbol,
            maskId: maskId,
            title: title,
            titleId: titleId,
            extra: extra,
            watchable: true
          })]);
        }).catch(reject);
      });
    };

    providers$$1.generateAbstractIcon = function (_ref3) {
      var children = _ref3.children,
          attributes = _ref3.attributes,
          main = _ref3.main,
          transform = _ref3.transform,
          styles = _ref3.styles;
      var styleString = joinStyles(styles);

      if (styleString.length > 0) {
        attributes['style'] = styleString;
      }

      var nextChild;

      if (transformIsMeaningful(transform)) {
        nextChild = callProvided('generateAbstractTransformGrouping', {
          main: main,
          transform: transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
      }

      children.push(nextChild || main.icon);
      return {
        children: children,
        attributes: attributes
      };
    };
  }
};

var Layers = {
  mixout: function mixout() {
    return {
      layer: function layer(assembler) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes;
        return domVariants({
          type: 'layer'
        }, function () {
          callHooks('beforeDOMElementCreation', {
            assembler: assembler,
            params: params
          });
          var children = [];
          assembler(function (args) {
            Array.isArray(args) ? args.map(function (a) {
              children = children.concat(a.abstract);
            }) : children = children.concat(args.abstract);
          });
          return [{
            tag: 'span',
            attributes: {
              class: ["".concat(config.cssPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
            },
            children: children
          }];
        });
      }
    };
  }
};

var LayersCounter = {
  mixout: function mixout() {
    return {
      counter: function counter(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$title = params.title,
            title = _params$title === void 0 ? null : _params$title,
            _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes = _params$attributes === void 0 ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: 'counter',
          content: content
        }, function () {
          callHooks('beforeDOMElementCreation', {
            content: content,
            params: params
          });
          return makeLayersCounterAbstract({
            content: content.toString(),
            title: title,
            extra: {
              attributes: attributes,
              styles: styles,
              classes: ["".concat(config.cssPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  }
};

var LayersText = {
  mixout: function mixout() {
    return {
      text: function text(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$transform = params.transform,
            transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
            _params$title = params.title,
            title = _params$title === void 0 ? null : _params$title,
            _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes = _params$attributes === void 0 ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: 'text',
          content: content
        }, function () {
          callHooks('beforeDOMElementCreation', {
            content: content,
            params: params
          });
          return makeLayersTextAbstract({
            content: content,
            transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
            title: title,
            extra: {
              attributes: attributes,
              styles: styles,
              classes: ["".concat(config.cssPrefix, "-layers-text")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.generateLayersText = function (node, nodeMeta) {
      var title = nodeMeta.title,
          transform = nodeMeta.transform,
          extra = nodeMeta.extra;
      var width = null;
      var height = null;

      if (IS_IE) {
        var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
        var boundingClientRect = node.getBoundingClientRect();
        width = boundingClientRect.width / computedFontSize;
        height = boundingClientRect.height / computedFontSize;
      }

      if (config.autoA11y && !title) {
        extra.attributes['aria-hidden'] = 'true';
      }

      return Promise.resolve([node, makeLayersTextAbstract({
        content: node.innerHTML,
        width: width,
        height: height,
        transform: transform,
        title: title,
        extra: extra,
        watchable: true
      })]);
    };
  }
};

var CLEAN_CONTENT_PATTERN = new RegExp("\"", 'ug');
var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
function hexValueFromContent(content) {
  var cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
  var codePoint = codePointAt(cleaned, 0);
  var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
  var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
  return {
    value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
    isSecondary: isPrependTen || isDoubled
  };
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new Promise(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');
    var content = styles.getPropertyValue('content');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== 'none' && content !== '') {
      var _content = styles.getPropertyValue('content');

      var family = ~['Sharp'].indexOf(fontFamily[2]) ? FAMILY_SHARP : FAMILY_CLASSIC;
      var prefix = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[family][fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[family][fontWeight];

      var _hexValueFromContent = hexValueFromContent(_content),
          hexValue = _hexValueFromContent.value,
          isSecondary = _hexValueFromContent.isSecondary;

      var isV4 = fontFamily[0].startsWith('FontAwesome');
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName;

      if (isV4) {
        var iconName4 = byOldUnicode(hexValue);

        if (iconName4.iconName && iconName4.prefix) {
          iconName = iconName4.iconName;
          prefix = iconName4.prefix;
        }
      } // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
      // already done so with the same prefix and iconName


      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var _abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));

          var element = DOCUMENT.createElement('svg');

          if (position === '::before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = _abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return Promise.all([replaceForPosition(node, '::before'), replaceForPosition(node, '::after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements(root) {
  if (!IS_DOM) return;
  return new Promise(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    Promise.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var PseudoElements = {
  hooks: function hooks() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.pseudoElementsCallback = searchPseudoElements;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.pseudoElements2svg = function (params) {
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }
    };
  }
};

var _unwatched = false;
var MutationObserver$1 = {
  mixout: function mixout() {
    return {
      dom: {
        unwatch: function unwatch() {
          disableObservation();
          _unwatched = true;
        }
      }
    };
  },
  hooks: function hooks() {
    return {
      bootstrap: function bootstrap() {
        observe(chainHooks('mutationObserverCallbacks', {}));
      },
      noAuto: function noAuto() {
        disconnect();
      },
      watch: function watch(params) {
        var observeMutationsRoot = params.observeMutationsRoot;

        if (_unwatched) {
          enableObservation();
        } else {
          observe(chainHooks('mutationObserverCallbacks', {
            observeMutationsRoot: observeMutationsRoot
          }));
        }
      }
    };
  }
};

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
    var parts = n.toLowerCase().split('-');
    var first = parts[0];
    var rest = parts.slice(1).join('-');

    if (first && rest === 'h') {
      acc.flipX = true;
      return acc;
    }

    if (first && rest === 'v') {
      acc.flipY = true;
      return acc;
    }

    rest = parseFloat(rest);

    if (isNaN(rest)) {
      return acc;
    }

    switch (first) {
      case 'grow':
        acc.size = acc.size + rest;
        break;

      case 'shrink':
        acc.size = acc.size - rest;
        break;

      case 'left':
        acc.x = acc.x - rest;
        break;

      case 'right':
        acc.x = acc.x + rest;
        break;

      case 'up':
        acc.y = acc.y - rest;
        break;

      case 'down':
        acc.y = acc.y + rest;
        break;

      case 'rotate':
        acc.rotate = acc.rotate + rest;
        break;
    }

    return acc;
  }, transform);
};
var PowerTransforms = {
  mixout: function mixout() {
    return {
      parse: {
        transform: function transform(transformString) {
          return parseTransformString(transformString);
        }
      }
    };
  },
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var transformString = node.getAttribute('data-fa-transform');

        if (transformString) {
          accumulator.transform = parseTransformString(transformString);
        }

        return accumulator;
      }
    };
  },
  provides: function provides(providers) {
    providers.generateAbstractTransformGrouping = function (_ref) {
      var main = _ref.main,
          transform = _ref.transform,
          containerWidth = _ref.containerWidth,
          iconWidth = _ref.iconWidth;
      var outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      var inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      var path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      var operations = {
        outer: outer,
        inner: inner,
        path: path
      };
      return {
        tag: 'g',
        attributes: _objectSpread2({}, operations.outer),
        children: [{
          tag: 'g',
          attributes: _objectSpread2({}, operations.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
          }]
        }]
      };
    };
  }
};

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(_abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (_abstract.attributes && (_abstract.attributes.fill || force)) {
    _abstract.attributes.fill = 'black';
  }

  return _abstract;
}

function deGroup(_abstract2) {
  if (_abstract2.tag === 'g') {
    return _abstract2.children;
  } else {
    return [_abstract2];
  }
}

var Masks = {
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var maskData = node.getAttribute('data-fa-mask');
        var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map(function (i) {
          return i.trim();
        }));

        if (!mask.prefix) {
          mask.prefix = getDefaultUsablePrefix();
        }

        accumulator.mask = mask;
        accumulator.maskId = node.getAttribute('data-fa-mask-id');
        return accumulator;
      }
    };
  },
  provides: function provides(providers) {
    providers.generateAbstractMask = function (_ref) {
      var children = _ref.children,
          attributes = _ref.attributes,
          main = _ref.main,
          mask = _ref.mask,
          explicitMaskId = _ref.maskId,
          transform = _ref.transform;
      var mainWidth = main.width,
          mainPath = main.icon;
      var maskWidth = mask.width,
          maskPath = mask.icon;
      var trans = transformForSvg({
        transform: transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      var maskRect = {
        tag: 'rect',
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          fill: 'white'
        })
      };
      var maskInnerGroupChildrenMixin = mainPath.children ? {
        children: mainPath.children.map(fillBlack)
      } : {};
      var maskInnerGroup = {
        tag: 'g',
        attributes: _objectSpread2({}, trans.inner),
        children: [fillBlack(_objectSpread2({
          tag: mainPath.tag,
          attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
        }, maskInnerGroupChildrenMixin))]
      };
      var maskOuterGroup = {
        tag: 'g',
        attributes: _objectSpread2({}, trans.outer),
        children: [maskInnerGroup]
      };
      var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
      var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
      var maskTag = {
        tag: 'mask',
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          id: maskId,
          maskUnits: 'userSpaceOnUse',
          maskContentUnits: 'userSpaceOnUse'
        }),
        children: [maskRect, maskOuterGroup]
      };
      var defs = {
        tag: 'defs',
        children: [{
          tag: 'clipPath',
          attributes: {
            id: clipId
          },
          children: deGroup(maskPath)
        }, maskTag]
      };
      children.push(defs, {
        tag: 'rect',
        attributes: _objectSpread2({
          fill: 'currentColor',
          'clip-path': "url(#".concat(clipId, ")"),
          mask: "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children: children,
        attributes: attributes
      };
    };
  }
};

var MissingIconIndicator = {
  provides: function provides(providers) {
    var reduceMotion = false;

    if (WINDOW.matchMedia) {
      reduceMotion = WINDOW.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    providers.missingIconAbstract = function () {
      var gChildren = [];
      var FILL = {
        fill: 'currentColor'
      };
      var ANIMATION_BASE = {
        attributeType: 'XML',
        repeatCount: 'indefinite',
        dur: '2s'
      }; // Ring

      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
        })
      });

      var OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
        attributeName: 'opacity'
      });

      var dot = {
        tag: 'circle',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          cx: '256',
          cy: '364',
          r: '28'
        }),
        children: []
      };

      if (!reduceMotion) {
        dot.children.push({
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
            attributeName: 'r',
            values: '28;14;28;28;14;28;'
          })
        }, {
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: '1;0;1;1;0;1;'
          })
        });
      }

      gChildren.push(dot);
      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          opacity: '1',
          d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
        }),
        children: reduceMotion ? [] : [{
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: '1;0;0;0;0;1;'
          })
        }]
      });

      if (!reduceMotion) {
        // Exclamation
        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: '0',
            d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
          }),
          children: [{
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '0;0;1;1;0;0;'
            })
          }]
        });
      }

      return {
        tag: 'g',
        attributes: {
          'class': 'missing'
        },
        children: gChildren
      };
    };
  }
};

var SvgSymbols = {
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var symbolData = node.getAttribute('data-fa-symbol');
        var symbol = symbolData === null ? false : symbolData === '' ? true : symbolData;
        accumulator['symbol'] = symbol;
        return accumulator;
      }
    };
  }
};

var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];

registerPlugins(plugins, {
  mixoutsTo: api
});
var noAuto$1 = api.noAuto;
var config$1 = api.config;
var library$1 = api.library;
var dom$1 = api.dom;
var parse$1 = api.parse;
var findIconDefinition$1 = api.findIconDefinition;
var toHtml$1 = api.toHtml;
var icon = api.icon;
var layer = api.layer;
var text = api.text;
var counter = api.counter;




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
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.mjs");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faHeart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faHeart */ "./node_modules/@fortawesome/free-solid-svg-icons/faHeart.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _interations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interations.js */ "./src/interations.js");
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comments.js */ "./src/comments.js");
/* eslint import/extensions: 0 */
 





_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__.library.add(_fortawesome_free_solid_svg_icons_faHeart__WEBPACK_IMPORTED_MODULE_5__.faHeart);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__.dom.watch();

window.addEventListener('DOMContentLoaded', () => {
  _home_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayShows();
  _interations_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLikes();
  _comments_js__WEBPACK_IMPORTED_MODULE_4__["default"].getComments();
});

window.addEventListener('click', (e) => {
  e.preventDefault()
  _interations_js__WEBPACK_IMPORTED_MODULE_3__["default"].createNewLike(e);
  _interations_js__WEBPACK_IMPORTED_MODULE_3__["default"].removePopUp(e);

   _home_js__WEBPACK_IMPORTED_MODULE_2__["default"].getShows().then(data => {
    _comments_js__WEBPACK_IMPORTED_MODULE_4__["default"].displayPopUp(e, data)
   })
   _comments_js__WEBPACK_IMPORTED_MODULE_4__["default"].postComment(e) 
});

  


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQW9CO0FBQy9CLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsc0VBQXNFOztBQUV0RTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxpQ0FBaUM7QUFDN0UsNEZBQTRGO0FBQzVGLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUssSUFBSTtBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLFdBQVc7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCwyRUFBMkU7QUFDOUg7O0FBRUE7QUFDQSx3QkFBd0IsNkNBQTZDO0FBQ3JFOztBQUVBLGdFQUFnRSxhQUFhO0FBQzdFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLFdBQVc7QUFDM0Y7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFELE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RCxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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YUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNxQixDQUFrRTtBQUNuQjtBQUN0QztBQUNjO0FBQ1A7O0FBRXJDLDBFQUFXLENBQUMsOEVBQU87QUFDbkIsd0VBQVM7O0FBRVQ7QUFDQSxFQUFFLDZEQUFrQjtBQUNwQixFQUFFLGdFQUFxQjtBQUN2QixFQUFFLGdFQUFvQjtBQUN0QixDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLHFFQUEwQjtBQUM1QixFQUFFLG1FQUF3Qjs7QUFFMUIsR0FBRyx5REFBYztBQUNqQixJQUFJLGlFQUFxQjtBQUN6QixJQUFJO0FBQ0osR0FBRyxnRUFBb0I7QUFDdkIsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhSGVhcnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY2xvc2VJY29uLnBuZyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaGVhcnQucG5nIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvaW50ZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvaW5kZXgubWpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdoZWFydCc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGFsaWFzZXMgPSBbMTI4MTUzLDEyODE1NCwxMjgxNTUsMTI4MTU2LDEyODQyMCwxMjkyOTMsMTI5Mjk0LDEyOTUwNSw5ODI5LDEwMDg0LDYxNTc4XTtcbnZhciB1bmljb2RlID0gJ2YwMDQnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ000Ny42IDMwMC40TDIyOC4zIDQ2OS4xYzcuNSA3IDE3LjQgMTAuOSAyNy43IDEwLjlzMjAuMi0zLjkgMjcuNy0xMC45TDQ2NC40IDMwMC40YzMwLjQtMjguMyA0Ny42LTY4IDQ3LjYtMTA5LjV2LTUuOGMwLTY5LjktNTAuNS0xMjkuNS0xMTkuNC0xNDFDMzQ3IDM2LjUgMzAwLjYgNTEuNCAyNjggODRMMjU2IDk2IDI0NCA4NGMtMzIuNi0zMi42LTc5LTQ3LjUtMTI0LjYtMzkuOUM1MC41IDU1LjYgMCAxMTUuMiAwIDE4NS4xdjUuOGMwIDQxLjUgMTcuMiA4MS4yIDQ3LjYgMTA5LjV6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGFsaWFzZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUhlYXJ0ID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gYWxpYXNlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7XG5leHBvcnRzLmFsaWFzZXMgPSBhbGlhc2VzOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUhFQURFUi0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtd3JhcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU1BSU4gQ09OVEVOVC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBwYWRkaW5nOiAycmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zaG93cy1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxyXFxuICBncmlkLWNvbHVtbi1nYXA6IDEuNXJlbTtcXHJcXG4gIGdyaWQtcm93LWdhcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAycHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy13cmFwIHtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1pbWcge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5oZWFydCB7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLWNvbmF0YWluZXIsXFxyXFxuLmxpa2VzLXZhbHVlLXdyYXAge1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtdmFsdWUtd3JhcCB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlcy12YWx1ZS13cmFwIHAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1idG4ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLWJ0biB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ0biB7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVBvcHVwLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5wb3B1cC1vdmVybGF5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTkzLCAxOTksIDIwOCwgMC45KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcclxcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZS1wb3B1cCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY2FyZCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBwYWRkaW5nLXRvcDogMTZweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgbWFyZ2luOiAycmVtIDA7XFxyXFxufVxcclxcblxcclxcbiNwb3B1cC1jbG9zZSB7XFxyXFxuICB0b3A6IDhweDtcXHJcXG4gIHJpZ2h0OiA4cHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1pbWctd3JhcCBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1idG4td3JhcCBpbWcge1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbiNwb3B1cC1jbG9zZSBpbWcge1xcclxcbiAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgd2lkdGg6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1pbWctd3JhcCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjE2cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5vcmlnaW4ge1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLXdyYXAsXFxyXFxuLmNvbW1lbnQtd3JhcCxcXHJcXG4uYWRkLWNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLXdyYXAgaDMge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5tb3JlLWRldGFpbHMtd3JhcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9yZS1kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxpZ24tcmlnaHQge1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50b3JzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpmb2N1czppbnZhbGlkIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHRleHRhcmVhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC45NHJlbTtcXHJcXG4gIGhlaWdodDogOTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xcclxcbiAgcGFkZGluZy10b3A6IDEycHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wICFpbXBvcnRhbnQ7XFxyXFxuICByZXNpemU6IHZlcnRpY2FsO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBpbnB1dCB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBpbnB1dCxcXHJcXG4uZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gaW5wdXQ6Zm9jdXMsXFxyXFxuLmZvcm0gdGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gbGFiZWwge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxcclxcbi5mb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMC45NHJlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTJweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRk9PVEVSLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTUVESUEgUVVFUklFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIG5hdiB7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNkZXNrdG9wLXBvcHVwLWJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2Rlc2t0b3AtcG9wdXAtY2xvc2Uge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAwIDRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBuYXYge1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS13cmFwIHtcXHJcXG4gICAgZ2FwOiAxLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIHtcXHJcXG4gICAgcGFkZGluZzogNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaG93cy1jb250YWluZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyNXB4LCAxZnIpKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaG93IHtcXHJcXG4gICAgd2lkdGg6IDMyNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmltZy13cmFwIHtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIFBvcHVwICovXFxyXFxuXFxyXFxuICAucG9wdXAtb3ZlcmxheSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMjJweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDg2cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjYwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDI2MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWNhcmQge1xcclxcbiAgICBwYWRkaW5nLXRvcDogNzhweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNDRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNkZXNrdG9wLXBvcHVwLWNsb3NlIHtcXHJcXG4gICAgdG9wOiAyNHB4O1xcclxcbiAgICByaWdodDogMjRweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3BvcHVwLWNsb3NlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1pbWctd3JhcCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLXRpdGxlLXdyYXAge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLXRpdGxlLXdyYXAgaDMge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xcclxcbiAgICB3aWR0aDogNTg5cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtYnRuLXdyYXAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxuICAgIGhlaWdodDogNTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1idG4td3JhcCBsaSBhIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzM2YjM3ZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1idG4td3JhcCBpbWcge1xcclxcbiAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI3BvcHVwLW1vYmlsZS1idG5zIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC10ZWNoIHtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsMkVBQTJFOztBQUUzRTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBLHNGQUFzRjs7QUFFdEY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCx1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdEQUFnRDtFQUNoRCx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBOztFQUVFLFVBQVU7RUFDVixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCOztBQUVBLGtHQUFrRzs7QUFFbEc7RUFDRSxvQ0FBb0M7RUFDcEMsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxNQUFNO0VBQ04sU0FBUztFQUNULGVBQWU7RUFDZixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsNkJBQTZCO0FBQy9COztBQUVBLHdGQUF3Rjs7QUFFeEY7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUVBLGdHQUFnRztBQUNoRztFQUNFO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsMkRBQTJEO0VBQzdEOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBLFVBQVU7O0VBRVY7SUFDRSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7RUFDZDs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsU0FBUztJQUNULGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbiosXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSEVBREVSLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS13cmFwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTUFJTiBDT05URU5ULS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3dzLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXHJcXG4gIGdyaWQtY29sdW1uLWdhcDogMS41cmVtO1xcclxcbiAgZ3JpZC1yb3ctZ2FwOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zaG93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDJweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLXdyYXAge1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0IHtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtY29uYXRhaW5lcixcXHJcXG4ubGlrZXMtdmFsdWUtd3JhcCB7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saWtlcy12YWx1ZS13cmFwIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLXZhbHVlLXdyYXAgcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWJ0biB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtYnRuIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuIHtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tUG9wdXAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuLnBvcHVwLW92ZXJsYXkge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgxOTMsIDE5OSwgMjA4LCAwLjkpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxyXFxuICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTZweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlLXBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jYXJkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMnB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBtYXJnaW46IDJyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuI3BvcHVwLWNsb3NlIHtcXHJcXG4gIHRvcDogOHB4O1xcclxcbiAgcmlnaHQ6IDhweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltZy13cmFwIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWJ0bi13cmFwIGltZyB7XFxyXFxuICB3aWR0aDogMjRweDtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuI3BvcHVwLWNsb3NlIGltZyB7XFxyXFxuICBoZWlnaHQ6IDEycHg7XFxyXFxuICB3aWR0aDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltZy13cmFwIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyMTZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm9yaWdpbiB7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtd3JhcCxcXHJcXG4uY29tbWVudC13cmFwLFxcclxcbi5hZGQtY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtd3JhcCBoMyB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vcmUtZGV0YWlscy13cmFwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tb3JlLWRldGFpbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5hbGlnbi1yaWdodCB7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRvcnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3VzOmludmFsaWQge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gdGV4dGFyZWEge1xcclxcbiAgZm9udC1zaXplOiAwLjk0cmVtO1xcclxcbiAgaGVpZ2h0OiA5MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEycHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMTJweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3AgIWltcG9ydGFudDtcXHJcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIGlucHV0IHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIGlucHV0LFxcclxcbi5mb3JtIHRleHRhcmVhIHtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBpbnB1dDpmb2N1cyxcXHJcXG4uZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBsYWJlbCB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXFxyXFxuLmZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5idG4tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAwLjk0cmVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTJweDtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1GT09URVItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1NRURJQSBRVUVSSUVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgbmF2IHtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2Rlc2t0b3AtcG9wdXAtYnRucyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZGVza3RvcC1wb3B1cC1jbG9zZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb290ZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDAgNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG5hdiB7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LXdyYXAge1xcclxcbiAgICBnYXA6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4ge1xcclxcbiAgICBwYWRkaW5nOiA0cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNob3dzLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzI1cHgsIDFmcikpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNob3cge1xcclxcbiAgICB3aWR0aDogMzI1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW1nLXdyYXAge1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogUG9wdXAgKi9cXHJcXG5cXHJcXG4gIC5wb3B1cC1vdmVybGF5IHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEyMnB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogODZweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyNjBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjYwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtY2FyZCB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA3OHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA0NHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2Rlc2t0b3AtcG9wdXAtY2xvc2Uge1xcclxcbiAgICB0b3A6IDI0cHg7XFxyXFxuICAgIHJpZ2h0OiAyNHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcG9wdXAtY2xvc2Uge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWltZy13cmFwIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNDAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtdGl0bGUtd3JhcCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtdGl0bGUtd3JhcCBoMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxyXFxuICAgIHdpZHRoOiA1ODlweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1idG4td3JhcCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG4gICAgaGVpZ2h0OiA1NnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWJ0bi13cmFwIGxpIGEge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzZiMzdmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIHBhZGRpbmc6IDEycHg7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiA0OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWJ0bi13cmFwIGltZyB7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcG9wdXAtbW9iaWxlLWJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLXRlY2gge1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb290ZXIge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDZ0FBQUFvQ0FZQUFBQ00vcmh0QUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUhLU1VSQlZIZ0I3Wmd4VXNKUUVJWjNINkZUSkFVRkhaeEFqeUNsTmxEaEFSaDdaenlBY2dCbnRIWThnRlRRYUtsSDRBYlFVZUJNSWtnRlpuMGJHSTJaUU9KN21maUtmRTBJZVpsOHM4bHVKajlDaU9uVU9RWVFUUlRVSW9JYVpBSENFQW1IeTZYWHJWYnQ4ZTlERzBZanA3eFhFbGRBZEFIL0NlS3RKYnl1YmR1dXZ3dmZjdmdDQkVkZ0FyS2lscUFHU3dyZVgxZk9FRGxHdXF3ODZTVEJ5Y1NwV1VVY2dZR3NpQnFpV0Z5Ym1rZ0JvU1VJeVp4YkcwSWdObkg2NWhJWWpBRER5UVYxeVFWMXNVQ0JtL3VldisyMFQ2QjhzTDl6cmZzK2g0ZmVzLy83OHJ3TmYwVzVnczdzdzc4d0MwQ01ISzlWUlVtd2MzWUtkbWx2cDJSUWp0ZnlPWmtKbGpjWDNDWVpKY2ZucUtEMUpuRlo3dkhwUjBRK2sweGFjdHFDVVpKTVduS3BDSVlsbWJUa21IVG1JRkd5L3hUUUZndzNSRngzWnlvWTFhMUpSbEFtZ3R0R1Nkd0l5a1F3YnM2bEtha2ttR1RPUlVsbUpzZ2tHU1ZCU1ZYeWJ4SmRja0ZkY2tGZFpMb0FZekFWR2NNSmoyZ0Foc0twcTBDQ1BoZ0tSOEtpVXJGZkVlZ09ESU9rRStmVmZwTVVDbkROOXhzTWdhVExZaTZkWU5QRm5BVnpKbXhDSmJseWl4azE2dlZBaUI2RUkyR3VLQmJ3TUt2Y21pZUo5MGtEdWUzekl4Yzg5Z1VZb3loeXdSVE9sd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQWdBQUFBSUFDQVlBQUFEMGVOVDZBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQU4xd0FBRGRjQlFpaWJlQUFBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUNBQVNVUkJWSGljN04xM3VHUlZsZjd4Nzl1U013WVV5UTZDaW9EQWtKRWtTVVFVSklnaVFVRk0rQk1UbU1ZNEl5Wm1ESUFNS0VFVUZSQUZKT2NjQnBXZ0FpYWlnSWprMkUydjN4LzdkTlBkM0ZCMWIxV3RjK3E4bitlNUQ0YnV1OS91cHM5YXRjOE9pZ2pNek15c1hhWmtCekF6TTdQQmN3TmdabWJXUW00QXpNek1Xc2dOZ0ptWldRdTVBVEF6TTJzaE53Qm1abVl0NUFiQXpNeXNoZHdBbUptWnRaQWJBRE16c3haeUEyQm1adFpDYmdETXpNeGF5QTJBbVpsWkM3a0JNRE16YXlFM0FHWm1aaTNrQnNETXpLeUYzQUNZbVptMWtCc0FNek96Rm5JRFlHWm0xa0p1QU16TXpGcklEWUNabVZrTHVRRXdNek5ySVRjQVptWm1MZVFHd016TXJJWGNBSmlabWJXUUd3QXpNN01XY2dOZ1ptYldRbTRBek16TVdtaXU3QUNXUTVLQXBZRlhBSXNDQzFkZmk4enluOGY2V29UU1FENEJQRjc5ODRsUi92c1R3UDNBYmNEdDFkZWRFVEcxNzc5UXM1cVRORGV3RExCYzliVTg4QkpnZ1RtK0Zoemx2MDhISGdFZTdlQnIxaC8zTVBCWDRLNklpTDcvUXExMjVELzM0U1pwSVdEbEViNVdvanc4c2t3SC9rNXBCbTdqdWNiZ2I4RDFFZkdQdkdobXZTVnBDV0IxWUFWbUwvVExBUzhuZHpiMkNlQlc0Slk1dnlMaXNjUmMxbWR1QUlaQTlXbCtlVVl1OUV2bEpadVUyNEZyZ1d1cWYxNFhFWS9tUmpJYm42U0ZnYldBdFlGMXFuOHVseHBxNHU1bWhNWUF1TTJ6QnMzbkJxQ2hKTDBDZUFPd2VmVzFSRzZpdnBzTzNNeHpEY0UxbEprQ3YwYXdOTlgwL2VvOFYralhBVjdGOEsrditnZHdRZlYxZmtUOE5UbVBUWUFiZ0lhUTlESktvWDlEOWRYVVR4Uzk5Q2h3RG5BNmNJWmZHOWdnVk5QNTJ3TGJBVnRSMXNTMDNlM0ErZFhYQlJGeGIzSWU2NEFiZ0pxU3RCaXdLYzk5eW45TmFxRDZtMDZaR1RnZE9EMGlmcGVjeDRhSXBOZFJDdjUybEUvNncvNEpmN0wrUURVN0FGd1VFUThsNTdFUnVBR29rZW9oc3l1d0JiQW1mc2hNeGwzQXJ5a053ZmtSOFdSeUhtc1FTZk5UbXUvdGdEZFJkc3pZeEV3SGZnT2NCL3pNelhsOXVBRklWazBudmhQWWsvSXUwWHJ2VWVBRTRLaUl1RFk3ak5XWHBMV0JmWURkOE5SK3Yxd1BIQXY4MksvdGNya0JTQ0JwSHNvbmk3MkFOK0x6R0FicGV1QW80SGhQU3hyTWZOMjJPNlh3dXdrZm5HbkFtY0F4bE5kMnorVEdhUjgzQUFNa2FTMUswZDhOZUZGdW10WjdFamlKTWl0d1NYWVlHenhKRzFPSy9rN0EvTWx4MnU0QnlpemRNUkZ4WFhhWXRuQUQwR2ZWNnYzZEtZVi9sZHcwTm9wYktMTUN4MFRFUDdQRFdQOUllakhsNytJK2xITXlySDUrVDVrVk9ONjdDZnJMRFVDZlNOb2ErREN3TmZDQzVEaldtU2VBN3dQZjhJTm51RlNOK0NlQTk1RjdBcVoxN2xuZ2JPQTdFWEYyZHBoaDVBYWd4eVJ0QTN3ZVdDODdpMDNZazhBUndOY2o0cDdzTURaeGtwWUVQZ25zaDZmNW0rd3E0SXNSY1ZaMmtHSGlCcUJIWFBpSDBsUEFrY0RYSXVMdTdERFdPVWxMQVFjQyt3THpKY2V4M25FajBFTnVBQ2JKaGI4Vm5xYXNFVGc0SXU3S0RtT2prN1EwY0JEbEhmKzh5WEdzZjl3STlJQWJnQWx5NFcrbFo0QWZBbC95cTRGNnFhYjYvd040TnpCUGNod2JIRGNDaytBR29Fc3UvRVk1V09nTGxNVkowNUt6dEpxa3VZRDlLWDhlaStTbXNVUnVCQ2JBRFVDSEpHMEZmQkVYZm52Tzc0RVBSY1JGMlVIYVNOSW13UGVBMTJabnNkcTRDdmg4Ukp5VEhhUUozQUNNbzVwYS9CNndZM1lXcTYyZkFoK0xpTDluQjJtRDZ1L2tOeWhIYUp1TjVCZVU1dHl2NnNiZ3kyWkdvZUs5d0I5eDhiZXh2UjI0UmRMSHEvdmhyUThrelNYcEFPQm1YUHh0YkRzQ2Y1VDBYa25LRGxOWG5nRVlnYVNWS2R1L1hwK2R4UnJuajhEK0VYRitkcEJoNHVsK200UkxnWDBqNHBic0lIWGpHWUJaU0pwYjBtY3BGOGE0K050RXZCbzRUOUx4a2hiTkR0TjBraGFXZERSd0VTNytOakd2QjY2WDlGblAwTTNPTXdBVlNldFJQdlg3SVdPOWNodXdlMFJjbmgya2lTU3RDL3dZK0xmc0xEWTBicUxNQmx5VkhhUU9XajhEVUgzQytBNXdPUzcrMWx2TEF4ZEwrcndrM3dmUklVbFRxcG00eTNEeHQ5NTZMWEM1cE85SVdqZzdUTFpXendCSTJnNDRERmdtTzRzTnZjc3Bzd0czWlFlcE0wbkxBc2ZqVjNEV2YzY0NINGlJMDdPRFpHbmxESUNrUlNTZEFKeUdpNzhOeG9iQTd5VHRsaDJrcmlUdGl0ZmYyT0FzQTV3bTZRUkpyVHhFcW5VekFKSmVBNXdDckpTZHhWcnJPTW9lNVVlemc5U0JwSVVvSy96M3pNNWlyWFVyc0VORS9DRTd5Q0MxcWdHUTlEYmdHR0NoNUNobWZ3RjJpNGhyczROa2tyUTJjQUorMTIvNUhnUDJpb2lUczRNTVNpdGVBVlNMaXI0S25JU0x2OVhEdndHWFN0bzlPMGlXNnRkK0tTNytWZzhMQVNkSk9saFNPMnJqc004QVNIb1I1UlBHbHRsWnpFYnhWZUF6TWV4L0dTdlZ5V3ovQ1h3cU80dlpLTTZsek5BOWtCMmtuNGE2QVpDMEJ1Vk02T1dUbzlUWmRPQjI0QmJnejhCRGxLbXdSenY0NTNSZ1FXQ0JFZjY1QU9WMnRxV0I1ZWI0OGl6TTgvMlNza3ZnOGV3Zy9TUnBRY29xLzdkbVo2bWh4eWgvRjJmOXVndDRCSGlpK25wOGhIOU9BUmFtL0wwYTc1K0xBU3NDSzFQK0xyYmlrKzRFM1Fic0dCRy96UTdTTDBQYkFFaDZGM0FFTUg5MmxwcDRtRkxrWi8yNkdmaHpSRHcxeUNDU1hzaHp6Y0RyZ0xXcnI1Y01Na2NOWFE5c0h4RjNaQWZwaDJxTDM2bkE2dGxaa3QwUFhGdDkvWTZxMkVmRXZ3WVpRdEo4bEdiZ1ZaU0dZTll2bjJKWlBBbnNGeEUveWc3U0QwUFhBRlJIUFg2TGNrZDRXejBOWEFHY1Q5bC9mbk5FM0pzYmFYeVNsZ2ZXcWI3V0J0YWl6Q2kweVgyVTFjaFhaZ2ZwSlVuclUzYmZ2RFE3eTRBOURseEhLZmJYQU5jMDRTd0lTUytqTkFZYkFtOEFOZ0RtVFEyVjY3dVVHeituWmdmcHBhRnFBS3AvYVg5TysvWVJQMHQ1d0Z4UWZWMCs2RS8xL1ZDZG5yY0I4T2JxNjFXNWlRYm1hV0NmaURnK08wZ3ZWSXY5anFJOUJlUm15aGtqcHdGWFJNU3p5WGttclpvdDJCRFl2UHBhRzJqYjZaYVhBcnMwNGNOVXA0YW1BWkMwS25BVzhQTHNMQU1Rd0kyVVluOCtjRWxFUEpJYnFmOGtyVWhwQkxZSE5nTG15azNVZDQxZUhOaWl4WDdUS01jV253cWNGaEYvVHM3VGQ5WEJPUnRUWmdjMkIxWUYybkR0N3QrQmJTTGl4dXdndlRBVURZQ2sxd0huQVMvS3p0Sm5OMURPTWZoSlJOeVhuQ1dWcE1XQWJTbUh4MnpCOEM1bU9nSFlJeUttWlFmcGhxUzVLQWNlRGV2Smg5TXB6NXhqZ1RNaTRxSGtQS2trdlJSNEI3QVhzRnB1bXI1N0FOZ2lJbjZYSFdTeUd0OEFTRnFMc21Wajhld3NmWEkvOEJQZ21HSDRGNjRmSkMwSDdBMjhtK0U4MnZrWHdOdWI4djZ4V29melUyREg3Q3g5Y0Nmd1ErRG9pTGc5TzB3ZFZSL0k5cUkwQk1PNnNQZEJZTXVJdUM0N3lHUTB1Z0dRdEE1d05tVnJ5ekNaQ3B6T2M1OHVHdkhnejFZZDNyRVZzQS9sTmNFdzNmMTlPckJUUkR5ZEhXUXNrdWFsSExpMVhYYVdIcHBLbWQ0L0NqZ25JcVluNTJtRXFoR2NNVXUzSGNQMTl4SEtsdW10SStLYTdDQVQxZGdHb0ZwVmZCWmxyL213K0ExbGl2K0VpUGhuY3BaR2s3UUU4QjdnbzhDTGsrUDB5am5BV3lQaXlld2dJNUUwUCtVOGc2MnlzL1RJUDRGRGdCOUV4RCt5d3pTWnBCZFRYZ2Z0QmF5Wm02YW5IcUdzQ1dqa3JwMUdOZ0NTWGcvOG1uSzR4VEE0SC9oQ1JGeVdIV1RZVkFmUGZCRDRPTU14SFhraDhPYTZIUmhVL1Q2ZkJteVduYVVIN2dlK0NSeGF0OS9uWVNCcEkrQUxsQVdFdytCUjRFMFJjV2wya0c0MXJnR1F0Q2xsT25RWTlvZTc4QTlJVmFBK0FIeUM1amNDbHdQYjFtWG5SN1VpL0F6S05yRW11eC80Qm5DWUMzLy9EVmtqOERpd1hVUmNsQjJrRzQxcUFDUzlnZkl1Ym9Ic0xKUGt3cCtrYWdUZVQya0Vsa2lPTXhuWFVONC9wcTQrcjNaam5FMDV2S21wL2tFcC9JZTc4QS9lRURVQ1QxQk84ancvTzBpbkd0TUFTTnFhOG41eHZ1d3NrK0RDWHhPU0ZnQStUWGsxME5RRGFuNUxXWW1jY21GSmRkSFd1Y0FhR2VQM3dOT1VxZjcvaW9nbnNzTzAzWkEwQWs5UjF1bWNuUjJrRTQxb0FDUnRTOWtLMWRRSHRRdC9UVWw2SmZBZFlKdnNMQk4wUGJCSlJEdzh5RUVsTFFwY1RIUFA5VDhMK0hCRS9DazdpTTF1Q0JxQnB5bVhDSjJSSFdROHRXOEFxdUovQ2pCUGRwWUp1QXY0WUVTY21oM0V4aWJwcmNEL1VDNG9hcG9MS1N1Um54bkVZSkxtb1JUUUppNzR1eDM0U0VUOE1qdUlqVTNTOXNDaGxCdEZtK1laeXAwZXRXNENhbjE2bXFUVmdKL1J2T0kvSGZnZThCb1gvMmFvQ3NLcmdhOVFPdmdtMlF3NHRqcDZ0NitxTVk2bGVjWC9hY3FmN2F0ZC9KdWhlbmEraHZJc2JkclpDL01BUDZ0cVdHM1ZkZ2FnMnNkOURjMzdSSFlqc0c5RVhKMGR4Q2FtdW5QZ0tHQ1Q3Q3hkT2lRaVB0YlBBU1I5aTNLMlFwTmNUTGxjYWVqUDZCOVdrdFlGanFUY09kQWt0d1ByMVBVY2lWck9BRlNuaVoxQ3M0ci9VOEJuZ0xWYy9KdXRLaFNiVXhZSk51a1V4bzlLT3FCZjM3ejYzazBxL2xNcGY0YWJ1L2czVy9WTVhZdnlqRzNTVGFmTEFhZFVOYTEyYWprRElPbFlZSS9zSEYyNEVOalBDNHFHajZTMUtYY3hySmlkcFVNQjdCWVJQK3ZsTjVXMEsrVmlvcWJjK1BabjRCMFJjVzEyRU91dGF1SHVFVFRyTmRSeEViRm5kb2c1MVc0R1FOS0JOS2Y0L3d0NGQwUnM3dUkvbktvQ3NnYmxpT1ltRUdVOXdLWTkrNGJsZXgxTGM0ci9NY0FhTHY3REtTTCtGQkdiVXk3LytsZDJuZzd0VWRXMldxblZESUNrdDFDMis5V3VNUm5CZFpTdEhuZGtCN0hCa0xRTDVaTkhFeTZmZWhoNC9XVHZMWmUwS25BcHNHaFBVdlhYUTVTWnVKOW5CN0hCa0xRc3BXYXNsWjJsQTlNcE5lTlgyVUZtcUUwRElHbDE0REpnb2V3c0hUZ1dlRjlFTk9sZGxQVkE5Y0E1Q1ZnN08wc0g3Z2JXajRnN0ovS1RKUzBEWEFrczFkTlUvWEV0NWJaRU4rUXRJMmsrNFB1VVd3ZnI3akZnbzRpNFBqc0kxT1NUdHFTWFVvNzRyWHZ4bndwOEtDTDJjdkZ2cDZyQWJFcTUrS2J1bGdKT3EyN3A2MHIxYzA2akdjWC9OR0JURi85MmlvaW5JbUl2NEVQVWY5SHVRc0NwVmMxTGw5NEF6TExpZjluc0xPTzRsN0thK05Ec0lKYXJPaloyQitEdzdDd2RXSjJKNVR5Y1pwenlkempsd0JVZjVkdHkxYk41YzhxenVzNldwU1k3QTlJYkFNcCs2L1d6UTR6aktzcjJQaC9sYXdCRXhMTVI4UUhnSU1ySyt6cmJVOUorbmY3ZzZzZldmVG8xZ0lNaTRnTVI4V3gyR0t1SDZobTlGdVdaWFdmclUycGZxdFExQU5XcXlJUFRBblRtQ01xWjRRTTVadFdhUjlJN2dLT3A5NG1WVDFQZVBmN2ZXRDlJMHI5VDF1S2tmem9ad3pQQTNoSHhrK3dnVmsvVmNkWGZBVHB1ZkpNY0ZCRmZ5eG84clFHUU5LTkxteXNsd1BpZXByenZUKy9TclA2cXJYS25VTzhkQXJkVFpySkd2RDJ3dXQzdk91cDlBTmREbENuL2k3S0RXUDFKMm9keWxIQmRHOXBwd0hvUmNWM0c0Q2tOUVBYdTR6ZVVjNTdyNkVuS2xZN25aQWV4NXBDMENuQW1zRXgybGpHY0RXd2JFYk9kclM1cENuQUdzSFZLcXM3Y0Nid3hJbjZmSGNTYVE5SldsS3ZrdTE0TU95Qi9BTmFNaUlIZlFaSzFCdURMMUxmNFB3Njh5Y1hmdWxVVnB2V0EzMlZuR2NQV3dPZEgrTjgvVDcyTC8rOG9uNVJjL0swcjFiUDhUWlJuZXgyOWhsSVRCMjdnTXdDU05xQWNMRktIQlloemVvenk2ZWpTN0NEV1hKSVdwcHdWc0ZWMmxsRUVwY2s5RTBEU0c0RmZVOStUL3M2aDdQRi9ORHVJTlplazExTm11ZXE0M1h3NjVlQ3VLd1k1NkVBYkFFa0xVRHI1Vnc1czBNNDlRcmxUL2Nyc0lOWjhrdWFpM0Y2MlYzS1UwZnlMNTA1UHV3NTRZV0tXc1J4RHVWMXpXbllRYXo1SjZ3Tm5BWXRrWnhuQm40RFhEWEpMNjZBL2hSOU1QWXYvZzhBV0x2N1dLeEV4TFNMMkJyNmFuV1VVTDZUTVVweEVmWXYvVnlOaWJ4ZC82NVhxR2I4RjVabGZONjlrd0x2aUJqWURVSzJTdm9ENlRUTStBR3daRWIvTkRtTERTZEpod1B1emN6VE00ZFU1QzJZOUoya040RnpnUmRsWjVoQ1VBK2N1R3NSZ0Eya0FxbmVpTndETDkzMnc3dHhQK2VSL1EzWVFHMTdWQ3Z1ZkFUdGxaMm1JazRCZDU5eXBZTlpMa2xZRHpnTmVrcDFsRHJjQnF3MWl6Y3VnWGdGOGkvb1YvL3NvNTRlNytGdGZWWVZzZCtEQzdDd05jQ0d3dTR1LzlWdjE3TitVVWd2cVpIbEt6ZXk3dnM4QVNOcUdzamU2VHA2a3JMaE1PWHpCMmtuU0lzREZ3T3V5czlUVTc0Qk5JdUtSN0NEV0h0V2hkSmRTdjNNQzNoZ1JaL1Z6Z0w0MkFKSVdBMjZpZmplSzdlbzd3eTFEZFF2WUZjQXJzclBVekYrQkRTS2licC9HckFVazdVSjVUVmNuZHdPdmpZaUgralZBdjE4Qi9BLzFLLzVmY3ZHM0xGV0IyNHI2VFR0bXVnL1l5c1hmc2xRMTRVdlpPZWF3RktXRzlrM2ZaZ0FrclExY1RiMVcvWjhFN0JLWk55Q1pNWE1WOHNYQXd0bFprajFLbWZiM0xoeExKVW5BejZuWFl0MEExbzJJYS92eHpmdlpBRnhJV1dCUkY3K2wzSWJtZThPdEZpUnRUbGtmVStkYkJQdnBHY3A3emd1eWc1akJ6TVBxTGdQV3lNNHlpNHNpWXJOK2ZPTyt2QUtRdEMzMUt2NzNBdHU3K0Z1ZFZJVnZkOG94b0cwem5iTGEzOFhmYXFPcUVkdFRha1pkYkZyVjFKN3JlUU5RN1hrZTZHbEc0M2lhY24zb1hkbEJ6T1lVRVNjQysyZm5TTEIvOVdzM3E1V3FWdXhBcVIxMWNYQlZXM3VxSHpNQWV3Q3I5dUg3VHRRK0VYRlZkZ2l6MFVURVlaUTd5OXZpZTlXdjJheVdxcHF4VDNhT1dheEtxYTA5MWRNMUFKTG1BMjZsUHZlaEh4d1JuOG9PWVRZZVNmTlF0Z2V1TmQ2UGJianJLTnY5bnNrT1lqWWVTVjhGRHNyT1Via1RXQ2tpbnVyVk4rejFETUQrMUtmNFh3MThOanVFV1NlcWdyZ3o4SEIybGo1NkdOalp4ZDhhNUxPVVdsSUh5OURqMTRVOW13R1F0RGpsTUkvRmV2SU5KK2NweXJXS3QyUUhNZXVHcEIyQVgyVG42Sk1kSStLVTdCQm0zWkMwTXVXVXl2bXlzd0FQQWErSWlKN2NadGpMR1lCUFU0L2lEL0FaRjM5cm9xcEFmanM3Ung5ODI4WGZtcWlxSlovSnpsRlpqRkpyZTZJbk13Q1NscVc4KzU5MzB0OXM4aTZqSEN6U3hxMVZOZ1NxOVFDWEF1dGtaK21SYXloM2IzanEzeHFwV29GL01iQlJkaGJLN29TVkl1S095WDZqWHMwQWZKbDZGUC9IZ2IxYy9LM0pxa0s1SzlDVGFiNWtEMUx1M25EeHQ4YXFhc3BlbEJxVGJWNUt6WjIwU1RjQTFaM0t1L2NnU3k4Y0dCRi95UTVoTmxrUmNSdXdkM2FPSHRpNytyV1lOVnBWV3c3TXpsSFp2YXE5azlLTEdZRC82dEgzbWF3TEFPOHR0cUVSRWI4Q0Rzbk9NUW1IVkw4R3MyRnhHS1hXWkp0Q3FiMlRNcWsxQU5YcXlEK1NmK0hQbzhDcUVYRjdjZzZ6bnBJME4zQUpzRjUybGk1ZEJXd2NFVk96ZzVqMWtxVGxnQnZKdjhncmdGZFBac0g3WkQrNWY1RDg0Zy93TVJkL0cwWlZBWDA3OEZoMmxpNDhCcnpkeGQrR1VWVnJQcGFkZzFKN1B6aXBiekRSR1FCSkN3TjNrOThGblJzUld5Vm5NT3NyU1I4Q3ZwdWRvMFA3UjBTYmpqYTJGcEowRHJCbGNveEhnYVVpNHRHSi9PVEp6QURzU1g3eG4wNDlPakd6Zmp1TWNsUnczVjJCMStKWU8zeU0vSnM4RjZiVTRnbVpVQU1nU2NDSEpqcG9EeDBmRVRkbWh6RHJ0Mm9iMGo1QW5iZlRQVU81ZkN2N29XaldkMVh0T1Q0N0IvQ2hxaVozYmFJekFGc0FLMC93NS9iSzA4Qi9KR2N3RzVpSStDUHdsZXdjWS9oS2xkR3NMZjZEL0d1RFY2YlU1SzVOdEFHb3cvM2xoM25objdYUXdjQk4yU0ZHY0JNbG0xbHJWRFdvRHErOEpsU1R1MTRFS0drRjRNL2s3djEvaEhJaHdnT0pHY3hTU0ZvSHVKSjZuTDhCNVQzbytoRnhUWFlRczBHVDlDTEtSWGlMSk1hWURxd1lFWC9yNWlkTjVBSHl3UW4rdkY3NnVvdS90VlZWYU90MFlkQzNYZnl0cmFwYTlQWGtHRk9Zd0piQXJtWUFKQzBBM0FVczN1MUFQWFFQcGRONUlqR0RXU3BKQzFJT0kxa2hPY3JmS0lkdzFlR01kTE1VVlczOE03QmtZb3dIZ2FXN3FZM2RmcEovSjduRkgrQkxMdjdXZGxYQjNaZmNiVWpUZ1gxZC9LM3RxcHIwcGVRWWkxTnFkTWU2blFHNEFWaTF5MUM5ZEN1d1NrUk1TOHhnVmh1U1BnOThJV240TDBURUY1UEdOcXNWU1hNQnZ3ZFdTb3h4WTBSMGZFbFF4ek1Ba2pZaHQvZ0RmTWJGMzJ3Mlh3Yk9UQmozVEhwMEphblpNS2hxMDJlU1k2eGExZXFPZFBNSzROMFRDTk5MdHdJbkoyY3dxNVhxMEozZGdkc0dPT3h0d080KzhNZnNlVTZtMUtwTUhkZnFqaHFBNmtheU4wODRUbThjRnBPNXV0QnNTRVhFdjRBZEtIZHo5TnZkd0E3Vm1HWTJpNnBHWlo4TDhPYXFabytyMHhtQXpjaGQvUGM0Y0V6aStHYTFGaEcvQTE0SG5OWEhZYzRDWGxlTlpXWWpPNFpTczdJc1Rxblo0K3EwQWRoeDRsbDY0dmlJZURnNWcxbXRSY1EvZ1cyQlR3RzlYQ3N6cmZxZTIxWmptTmtvcWxxVmZVZEFSelY3M0YwQWtxWUFmd2RlMm9OUUU3V2FMLzB4NjF4MVd1QW5nYmNBYzAzdzIwd0Rma1U1ZU1zSC9aaDFTTktxd0EySkVlNERYajdlT3AxT0dvRFhBNWYwTUZpM0xvbUlqbGMxbXRsekpMMmNjbDdBdnNCU0hmNjB1NEVqZ1NNajR1Lzl5bVkyekNSZERHeWNHR0hqaUxoMHJCL1F5U2VEN09uL1E1UEhOMnVzcW9CL1VkSi9VdFlJckRETDEvTFZEN3VOY3FMZmpLL2ZlYnV0MmFRZFNtNERzQ013WmdQUXlRekE3Y0N5UFF6VmpYdUFaZjB3TWpPekpxa09CcnFEdk9PQjc0aUk1Y2I2QVdNdUFwVDA3K1FWZjRBalhQek56S3hwcXRwMVJHS0VaYXNhUHFyeGRnRmtUdjlQQmY0M2NYd3pNN1BKK0Y5S0xjc3laZzJ2Y3dOd1NrVGNremkrbVpuWmhGVTE3SlRFQ0JOckFDU3RBcXpjOHppZE96WnhiRE16czE3SXJHVXJWN1Y4UkdQTkFHUisrbjhVT0M5eGZETXpzMTQ0ajFMVHNveGF5K3ZhQUp3UkVjOGtqbTltWmpacFZTMDdJekZDZHcyQXBLVW9lNGF6Wkw0ek1UTXo2NlhNbXZhNnFxWS96Mmd6QUJ2ME1jeDRuaWEzV3pJek0rdWxNeWkxTGN1SU5YMjBCbUQ5UGdZWnova1JrZm0reE16TXJHZXFtblorWW9RUmEzb2RHd0JQLzV1WjJiREpyRzBqMXZUbkhRVXNhVjdnRVdDZUFZU2EwM1JneVlqNFI4TFlabVptZlNGcENjcng5dU9kdjlNUHp3Q0xSTVJzcnlGR0NySW1PY1VmNEhJWGZ6TXpHelpWYmJzOGFmaDVLTFY5TmlNMUFKNytOek16NjcxYXZRWndBMkJtWmpZWWJnQkdjVU5FM0pZMHRwbVpXVjlWTmU2R3BPSEhiZ0FrTFEyTWVHREFBRnlhTks2Wm1kbWdaTlc2cGFvYVA5T2NNd0NaMC85WEpZNXRabVkyQ0ptMWJyWWFYNmNHNE1yRXNjM016QVloczliVnNnRzRQeUwra2pTMm1ablpRRlMxN3Y2azRVZHVBS29EZ0o2M1QzQkFQUDF2Wm1adGtWWHoxcXhxUFREN0RFRG1BVUJ1QU16TXJDMnlhdDVzQndMTjJnQ3NOdmdzTS9uOXY1bVp0VVZtelp0WjYyZHRBRjZSRUFUZ1dlRGFwTEhOek13RzdWcEs3Y3N3czliWG9RRzRLU0llU3hyYnpNeHNvS3FhZDFQUzhDTTJBQ3NrQkFHLy96Y3pzL2JKcW4wemEzMGRaZ0Q4L3QvTXpOb21xL2JOUGdNZ2FWRmc4YVF3VnllTmEyWm1saVdyOWkxZTFmeVpNd0Jabi82bkF6NEF5TXpNMnVZdmxCcVk0UldRM3dEY0hSRlRrOFkyTXpOTFVkVyt1NU9HbjYwQnlGb0ErTGVrY2MzTXpMSmwxY0FWSUg4R3dBMkFtWm0xVlZZTnJNVXJnTnVTeGpVek04dDJXOUs0ZmdWZ1ptYVdLUGNWZ0tRcHdQSkpJZHdBbUpsWlcyWFZ3T1VsVFprQ0xFWGVMWUJ1QU16TXJLMnlhdUE4d0ZKVHlKdit6OXdDWVdabWx1MXVTaTNNc01LTUdZQU1kMFJFMWlFSVptWm1xYW9hZUVmUzhFdE5BUlpLR3R6VC8yWm0xblpadFhDaEtjQ0NTWU83QVRBenM3Ykxxb1VMVGdFV1NCcjh2cVJ4emN6TTZpS3JGaTZRT1FQd2VOSzRabVptZFpGVkN4Zk1iQUNlU0JyWHpNeXNMckpxWVdvRDRCa0FNek5ydTlRWmdLdzFBRzRBek15czdiSnFZZW9hQUw4Q01ET3p0dk1yQURNenN4YnlJa0F6TTdNV1NwMEI4Qm9BTXpPekhLMWNBK0FHd016TTJzNnZBTXpNekZySWl3RE56TXhhS0cwR1FKUzdpT2RLR0h6dWlKaVdNSzZabVZrdFNKcUxVb2NIYmRvVTRObUVnUUZla0RTdW1abFpYV1RWd21lbkFJOGxEYjVRMHJobVptWjFrVlVMSDNNRFlHWm1scWVWRFVEVzRrTXpNN082eUtxRm5nRXdNek5MMU1vWkFEY0FabWJXZG00QXpNek1Xc2dOZ0ptWldRdTVBVEF6TTJzaE53Qm1abVl0MU1vR3dOc0F6Y3lzN1ZLM0FXWmRST0FaQURNemE3dXNXdmk0WHdHWW1abmxhZVVyZ01XVHhqVXpNNnVMckZxWTJnQ3NtRFN1bVpsWlhXVFZ3dFFHNEpWSjQ1cVptZFZGVmkxOGJBcHdkOUxnaTBsNlNkTFlabVptcWFvYXVGalM4SGRQQWY0Q1RFOEs0RmtBTXpOcnE2d2FPQjM0eTVTSWVCcTRNeW5FU2tuam1wbVpaY3VxZ1hkR3hOTlRxdjl5YTFJSXp3Q1ltVmxiWmRYQVd3Rm1OQUIvU2dyaEdRQXpNMnVyckJyNEozaXVBZkFNZ0ptWjJXQzFlZ2JnbFpLVU5MYVptVm1LcXZabE5RQzFtQUZZQUhoNTB0aG1abVpaWGs2cGdSbG1td0c0RFppV0ZNVHJBTXpNckcyeWF0ODBTczB2RFVCRVRBUCttaFRHNndETXpLeHRzbXJmWDZ1YVAzTUdBUExXQWJ3cWFWd3pNN01zV2JWdlpxMnZRd093VWRLNFptWm1XYkpxMzRnTlFOWkN3RFVsTFpvMHRwbVoyVUJWTlcvTnBPRm4xdm82ekFDOEFOZzRhV3d6TTdOQjI1aFMrekxVYWdZQVlMUEVzYzNNekFZcHMrYU5PQU53Si9EazRMTUFiZ0RNekt3OXNtcmVrOHh5K2QvTUJpQWlBcmdtSXhHd21xUVhKbzF0Wm1ZMkVGV3RXeTFwK0d1cVdnL01QZ01BY05GZ3M4dzBCZGdrYVd3ek03TkIyWVRuMTk1QnVXalcvekpuaUlzSGwrTjUvQnJBek15R1hXYXRtNjNHYTViWkFDVE5CendFekR2Z1VBQTNSY1NxQ2VPYW1aa05oS1FiZ2RjbURQMDBzRmhFUERYamY1aHRCcUQ2UDY0ZWRLcktLcEpla2pTMm1abFpYMVUxYnBXazRhK2V0ZmpEeU84aHNsNERDTmcwYVd3ek03TisyNVJTNnpJOHI3YVAxQUJjMVA4Y28vSTZBRE16RzFhWk5lNmlPZitIMmRZQUFFaWFuN0lPWUo3QlpKck5yUkd4Y3NLNFptWm1mU1hwRm5LdUFYNkc4djUvdHJOK25qY0RVUDJBclBNQVZwTDB1cVN4emN6TStxS3FiUm5GSDhyKy8rY2Q5RGZhWHNTTCtwdGxUTzlLSE52TXpLd2ZNbXZiUlNQOWo2TTFBSm5uQWV3bUtldVNCRE16czU2cWF0cHVpUkZHck9tak5RQlhBRlA3bDJWTVN3SnZTQnJiek15czE5NUFxVzBacGxKcSt2T00yQUJFeEJQa3JRTUF2d1l3TTdQaGtWblRycWxxK3ZPTWRSNXg1bXVBSFNRdG1EaSttWm5acEZXMWJJZkVDS1BXOHJFYWdJdDZuNk5qMmI5aFptWm12YkFEcGFabHVXaTAvMk9zQnVCeVlNUnBnd0haUFhGc016T3pYc2lzWlU5UWF2bUlSbTBBcW5jR3AvWWpVWWUya1BTeXhQSE56TXdtcktwaFd5UkdPSFcwOS84dy9wM0VQKzV4bUc1a2I1c3dNek9iak4wb3RTekxtRFg4ZVVjQnovWi9Tbk1EOXdBdjZuR29UdjAySXRaTUd0dk16R3pDSlAwR1dDTnArQWVBSlNOaTFDMzlZODRBVkQveHhGNm42c0lha2w2VE9MNlptVm5YcXRxVlZmd0JUaHlyK01QNHJ3QUFmdEtqTUJPMVovTDRabVptM2NxdVhlUFc3akZmQVFCSUVuQWJzR3h2TW5YdElXRFppSGcwYVh3ek03T09TVm9ZdUFOWUxDbkNIY0R5TVU2QkgzY0dvUG9HSi9RcTFRUXNCcnd2Y1h3ek03TnV2SSs4NGc5d3duakZIenFZZGdROWFBQUFJQUJKUkVGVUFRQ1F0Q3B3UXk5U1RkQTl3QW9SOFhSaUJqTXpzekZKbWhmNEczbG4vd09zRmhFM2p2ZURPbGtEUVBXTmJwcDBwSWxiRXRnamNYd3pNN05PN0VGdThiK3BrK0lQSFRZQWxjd3pBUUErS2FtYnZHWm1aZ05UMWFoUEpzZm91RlozVTFCUEFNWi9YOUEvS3dJN0pZNXZabVkybHAwb3RTcExWMnYyT200QUl1SjJ4amhUZUVBT1NoN2Z6TXhzTk5rMTZ2S3FWbmVrMnluMTdETUIxcEMwZFhJR016T3oyVlMxS2ZQZ0graXlSbmUwQzJEbUQ1WmVSRm1SUDNlWG9YcnBvb2pZTEhGOE16T3oyVWk2RU5nME1jSlV5dEcvRDNUNkU3cWFBYWkrOGRuZHB1cXhUU1d0bTV6QnpNd01nS29tYlpvYzQreHVpajkwL3dvQTRMc1QrRG05bHYyZXhjek1iSVk2MUtTdWEzTlhyd0JtL2lUcGQ4RHFYZi9FM2dsZ2xZajRZMklHTXpOck9VbXZCbjRQS0RIRzlSSHh1bTUvMGtUMzFYOTlnait2VndSOE9qbURtWm5acDhrdC9qREJtanpSR1lDNWdEOER5MDFrMEI0SllKMkkrTC9FREdabTFsS1MvaDI0aHR3RzRIWmd4WWlZMXUxUG5OQU1RRFhRSVJQNXVUMGs0TnZKR2N6TXJMMitUZjZuLzBNbVV2eGhnak1BQUpJV3BGdzUrTUlKZllQZWVXZEVaSjlQWUdabUxTTHBIZVFma2Y4dllObUllSHdpUDNuQ1ordFhBeDQ2MFovZlExK1R0RUIyQ0RNemE0ZXE1bnd0T3dkdzZFU0xQMHlpQWFoOEYzaHlrdDlqc3BhbUhsc3d6TXlzSFE2aTFKNU1UekxKYmZtVGFnQWk0bjdnNk1sOGp4NzV1S1RNQllsbVp0WUNWYTM1ZUhZTzRPaXFCazlZTDY3WC9SYndiQSsrejJUTVQvN1dSRE16RzM1ZnA5U2NUTTlTYXUra1RMb0JpSWkvQWlkUDl2djB3QzZTTnM0T1lXWm13Nm1xTWJ0azV3Qk9ybXJ2cEV4NEY4QnMzMFJhQzZqRGZ2emZBdjhlRWRPemc1aVoyZkNRTklWUzU3SnYvSU5TNTY2YjdEZnB4U3NBcWlBWDlPSjdUZElhd0h1eVE1aVoyZEI1RC9Vby9oZjBvdmhEajJZQVlPWmR5R2YxNUp0TnpqK0FsU0xpNGV3Z1ptYldmSklXQlc0Rmxzak9BbXdURVQyNWxiY25Nd0FBVmFEcmUvWDlKbUVKNEQreVE1aVoyZEQ0RCtwUi9LL3ZWZkdISHM0QUFFamFrWG9zQ0p3S3JCWVJOMmNITVRPejVwTDBLdUFHWU83c0xNRGJJdUlYdmZwbVBXMEFBQ1JkRE5SaE5mN1Z3SVlSa2IxRjBjek1Ha2pTQzRETGdYV3pzd0NYUk1RbXZmeUdQWHNGTUlzRGdEcXN3bDhYT0RBN2hKbVpOZGFCMUtQNFQ2ZlUxcDdxK1F3QWdLU2pnYjE2L28yN054VllPeUxxc0RiQnpNd2FRdExxd0xYVVkrci9tSWpZdTlmZnRGOE53SkxBbjRBRmUvN051M2NqWmMva005bEJ6TXlzL2lUTlE5bnp2MnAyRnVCeDRKVVJjVSt2djNFL1hnRlFCVDI0SDk5N0FsWUZ2cFFkd3N6TUd1TkwxS1A0QXh6Y2orSVBmWm9CQUpBMFAzQUxzRXhmQnVqT2RPRDFFWEZGZGhBek02c3ZTUnNBbDlLbkQ4aGR1aE5ZT1NMNmN1dHUzMzZCVmVDNlhOTTdCVGkydXNQWnpNenNlYW9hY1N6MUtQNEFCL1dyK0VQL2Y1RW5VTGJqMWNHS3dEZXlRNWlaV1cxOWcxSXI2dUJxU2czdG03NjlBcGc1Z0xRK1VKZXA5d0Myam9oenM0T1ltVmw5U05vU09CdFFkcGJLQmhGeFpUOEg2UHMwUi9VTDZHc1gwd1VCUDVTMFdIWVFNek9yaDZvbS9KRDZGUDhUK2wzOFlYRHZPUTRDbmhyUVdPTlpHdmhPZGdnek02dU43MUJxUXgwOHhZRFd6dzJrQVlpSU80QnZEV0tzRHIxTDBnN1pJY3pNTEZkVkM5NlZuV01XMzZwcVp0LzFmUTNBeklHa2hTaUhBNzFzSUFPTzczN2d0Ukh4ait3Z1ptWTJlSktXQUc0Q1hwS2RwWEl2NWRDZnh3WXgyTUMyT2xTL29NOE1hcndPdkFUNGNYWFpnNW1adFVqMTdQOHg5U24rQUo4WlZQR0h3ZTkxUEFhNGJzQmpqbVVMNE12Wkljek1iT0MrVEtrQmRYRWRwVVlPek1CZUFjd2NVSG90NVJjNnowQUhIbDBBTzBURXI3S0RtSmxaLzBsNkMzQUs5Vm4xL3d5d1ZrVGNOTWhCQjM3YVVmVUwvTUtneHgyRGdPTWt2VEk3aUptWjlWZjFyRCtPK2hSL2dDOE11dmhEd2d3QXpIejNjZ1d3enNBSEg5MU53SG9SOFhoMkVETXo2ejFKQ3dKWEFhL056aktMYXlpSC9qdzc2SUZUemp1dWZxRjdVcCt6QWFEOEMzRmtkZ2d6TSt1Ykk2bFg4WDhLMkRPaitFUGloUWNSY1RQdzJhenhSN0dicEE5bmh6QXpzOTZxbnUyN1plZVl3MmVyV3BnaTVSWEF6TUdsS2NERndFWnBJWjV2S3JCWlJGeWVIY1RNekNaUDBvYkFoY0RjMlZsbWNSbXdTVVJNendxUTJnQUFTRm9SdUI2bzAxVzk5d0JyUnNTOTJVSE16R3ppSkwwTStBMndaSGFXV1R3QnJCNFJmODRNa1g3bmNmVWJjR0Iyamprc0NmeE0wbHpaUWN6TWJHS3FaL2pQcUZmeEJ6Z3d1L2hERFJxQXlxR1U2Wms2MlJqNGVuWUlNek9ic0s5VG51VjFjaUdsNXFWTGZ3VXdnNlRsZ1J1QmhYS1RQTSt1RWZIejdCQm1adFk1U2J0UVB2M1h5V1BBcWhGeFczWVFxTThNQU5WdnlNZXljNHpnQjVKZWt4M0N6TXc2VXoyemY1Q2RZd1FmcTB2eGh4ck5BTXdnNld4Z3Erd2NjN2lGY2tqUVE5bEJ6TXhzZEpJV294ejJzM0oybGptY0V4RmJaNGVZVlIwYmdLVXBwL0l0bXAxbERoY0JXMGZFTTlsQnpNenMrU1ROQTV3TmJKb2NaVTRQVTY2ZnZ5czd5S3hxOHdwZ2h1bzM2Q1BaT1Vhd0tmREQ3QkJtWmphcUgxSy80Zy93a2JvVmY2aGhBd0FRRWNjQXAyZm5HTUU3SlgwbE80U1ptYzJ1ZWphL016dkhDRTZ2YWxydDFPNFZ3QXlTbHFBYzNyQlVkcFlSN0JNUmRWeGdZbWJXT3BMZUF4eVZuV01FZDFNT2xmdEhkcENSMUxZQkFKQzBQdVdvNERvZDN3Z3dEZGd1SXM3T0RtSm0xbWFTdHFiTUdOZnQ0TGFwd01ZUmNWVjJrTkhVOGhYQURCRnhKZkRSN0J3am1BczRVZExxMlVITXpOcXFlZ2FmU1AyS1A4QUJkUzcrVVBNWmdCa2svUmg0UjNhT0VkeE4yUjVZdThVZFptYkRyTm94ZGhYMWZFMThmRVM4S3p2RWVKclNBQ3dBWEUyOTduR2U0UWJnOVJIeFNIWVFNN00ya0xRSWNDbXdXbmFXRWR4SStXRDRSSGFROGRUNkZjQU0xVy9ramtBZGkreHF3RW0rT01qTXJQK3FaKzFKMUxQNFB3enMySVRpRHcxcEFBQWk0ay9BWHRrNVJyRWxjRVIyQ0RPekZqaUM4c3l0bXdEMnFNTXRmNTFxVEFNQUVCR25VTjhiK3Q0dDZYUFpJY3pNaGxYMWpIMTNkbzVSSEJ3UnAyYUg2RVlqMWdETVN0SUxnSE9CemJLempHS1BpUGhSZGdnenMyRWk2VjNBY2RrNVJuRWVzRTFFUEpzZHBCdU5hd0NnOW9jRVBVUDVGK0hDN0NCbVpzTkEwbWJBV2NBODJWbEdjQ2Zsc0o5L1pnZnBWcU5lQWN4UW5hcTBNK1dnaGJxWkIvaVZwTFd6ZzVpWk5WMzFMUDBWOVN6K3p3QTdOYkg0UTBNYkFKaDVTTkRIc25PTVltSGdMRW1yWmdjeE0ydXE2aGw2RnVXWldrZi9MeUt1eVE0eFVZMThCVENyR2g4U0JIQWY1U2pJVzdPRG1KazFpYVNWZ0V1QWwyWm5HY1Z4RWJGbmRvakpHSVlHWUVIS2FWQjFQQ1FJeXZ1aDEwZkU3ZGxCek15YVFOSnlsSU4rbHNuT01vcnJnZlVqNHNuc0lKUFIrQVlBWm5hSzF3S0xaR2NaeFY4b1RjQTkyVUhNek9wTTBwS1U0djl2MlZsRzhSQ3dWa1Q4TlR2SVpEVjJEY0NzcWluMlBTa0hNZFRSdndIblNYcHhkaEF6czdxcW5wSG5VZC9pUHgzWWZSaUtQd3hKQXdBUUViOEVQcG1kWXd5dkFjNld0R2gyRURPenVxbWVqV2RUbnBWMTlaR0krSFYyaUY0Wm1nWUFJQ0srQ1J5V25XTU1hd0puVk9zV3pNeU1tV3U1enFBOEkrdnF2eVBpdTlraGVta28xZ0RNcWpvcDhKZkFkdGxaeG5BK3NGMUVQSlVkeE13c2s2VDVnTk9CTjJSbkdjTXZnSjBqWW5wMmtGNGF1Z1lBWm5hVEZ3TnJaV2NadyttVVc2UHFlSmlSbVZuZlNacWJVbHpyL0lIdEttRHpwcS80SDhsUXZRS1lJU0llcC93TFZlZXRkOXNCeDBzYXlqOERNN094Vk0rKzQ2bDM4ZjhMc1Awd0ZuOFkwZ1lBSUNMdUJiYWxiTm1vcTEyQW95UXBPNGlaMmFCVXo3eWpLTS9BdW5vQTJEWWk3czhPMGk5RDJ3QUFSTVFmZ0IwcDV6WFgxZDdBdDdORG1Ka04wTGNwejc2NmVocDR5N0NmNGpyVURRQkFkU3ZmZTdKempHTi9TVi9MRG1GbTFtL1ZzMjcvN0J4akNNcTE3cGRuQittM29XOEFBQ0xpZU9CejJUbkc4VWxKMzh3T1lXYldMOVV6cnM3bnRRQWNHQkUvenc0eENFTzVDMkEwa240QXZEczd4emorSnlJT3lBNWhadFpMa3Y0YitFaDJqbkVjSGhFZnlBNHhLRzFyQU9haUhEYXhaWGFXY1h3dkl1bzhSV1ptMWpGSjN3VStsSjFqSEwrbXZQZC9OanZJb0xTcUFRQ1F0QWpsb29uVnNyT000L3ZBQjZKdGYwQm1OalNxMWY2SEFlL0x6aktPMzFDdWJuODhPOGdndGE0QkFKQzBOT1Z3aDZXeXM0empTR0EvTndGbTFqUlY4VDhDMkRjN3l6aHVCOWFydG82M1Npc1dBYzRwSXU0QzNnUThrcDFsSFBzQ1AvQmhRV2JXSk5VejZ3ZlV2L2cvU05ucjM3cmlEeTF0QUFBaTRucEtFL0JFZHBaeDdBMGM3U2JBekpxZ2VsWWRUYjMzK1FNOEJyeXhPaSttbFZwZFZDTGlNbUFINm4xUUVNQWV3SStxaTQ3TXpHcXBla2I5aVBMTXFyT25LRWY4WHAwZEpGT3JHd0NBaURnSDJCV1lscDFsSE84QWZsenRaREF6cTVYcTJmUmp5ck9xenFZQ08xV0h4TFZhNnhzQWdJajRKYkFYVVBlckhuY0ZUbkFUWUdaMVVqMlRUcUE4bytwc09yQjdSUHc2TzBnZHVBR29STVNQZ1NZY0FMRVRjR0oxamFhWldhcnFXWFFpNWRsVVp3SHMyNVpUL2pyaEJtQVdFWEVFOFBIc0hCMTRLM0N5cEhteWc1aFplMVhQb0pNcHo2UzZPeUFpZnBnZG9rN2NBTXdoSXI0RmZERTdSd2ZlREp3aWFkN3NJR2JXUHRXejV4VEtzNmp1UGhjUnZuVjFEcTA4Q0tnVGtyNEZmRFE3UndmT0FYYUlpTHB2WnpTeklTRnBBVXJ4M3lvN1N3ZStFUkYxdjRBb2hSdUFNVWc2QW5odmRvNE9YQUc4S1NJZXlnNWlac05OMG1LVWMvTTN5TTdTZ2U5SHhQdXpROVNWRzRBeFZBZGEvSWo2YjJzQnVBSFlLaUx1eXc1aVpzTkowa3NwczQ1MXYwc0Y0SGhnRHgrbFBqbzNBT09vdHJlY0JMd2xPMHNIL2d4c0VSRzNad2N4cytFaWFUbmdQR0RGN0N3ZE9BWFl1VTAzKzAyRUc0QU9WSXRkVHFQKzF3Z0QzQVZzR1JFM1p3Y3hzK0VnNlZYQXVjRFMyVms2Y0E3dzVvaW8rd212NmR3QWRLaGE5SEkyc0ZGMmxnNzhFOWdtSXE3TERtSm16U1pwTGVBczRNWFpXVHB3R2JDMUYwVjN4dHNBTzFUOUMvVW1vQWxGOWNYQUJaSTJ5UTVpWnMxVlBVTXVvQm5GL3pyS1ltZ1gvdzY1QWVoQ1JEeENlUTNRaENaZ0VlQXNTZHRsQnpHejVxbWVIV2RSbmlWMWR4M2wxV2ZkcjNpdkZUY0FYWXFJQjRFdGdHdXpzM1JnUHNwaFFVM1l4V0JtTlZFOU0wNmhQRVBxN2xySzR1Y0hzNE0walJ1QUNhajIyMjhKWEpXZHBRTnpVYTRTOWw1WU14dFg5YXo0RWVYWlVYZFhVejc1K3d5VUNYQURNRUVSOFRDd05lVVFucnFiQWh3bTZWUFpRY3lzdnFwbnhHRTBvelpjUlRuNzVPSHNJRTNsWFFDVEpHbGg0QXlhc1RzQWZDeW1tWTFBMHRlQlQyVG42TkFWbEoxT2oyWUhhVEkzQUQwZ2FVRktFN0J4ZHBZT0hRbThMeUttWndjeHMxelZpYWZmQi9iTnp0S2h5NEEzUnNSajJVR2F6ZzFBajFUbkJKd09iSmFkcFVNL0IzYVBpS25aUWN3c2g2UzVLVWZtN3BLZHBVT1hVTGI2dWZqM2dCdUFIcXFhZ0ZPQk4yUm42ZERad0U3K3kyVFdQcElXb2h4enZuVjJsZzVkQkd3WEVZOW5CeGtXYmdCNlROTDh3QzlweGpXWjhOemhHYjVFeUt3bHFrdDlmZzJzbFoybFF4ZFFqdmYxSVQ4OTVBYWdEeVROUjlsRHUwMTJsZzc5amJLZzV0YnNJR2JXWDVKV29oendzMEoybGc2ZEIyd2ZFVTltQnhrMlRkanEwVGdSOFJUd1ZrcUgzUVFyQUZkSVdqODdpSm4xajZUMUtDdm9tMUw4WjF6czQrTGZCMjRBK2lRaW5nWjJwTndpMkFRdkFzNlg5TmJzSUdiV2U1TGVRcGxLZjFGMmxnNmRCYnlsK2tCbGZlQUdvSStxNnlqZlJsa1QwQVR6QXlkTCtrQjJFRFBybmVwMHY1TXBmOGViNEF6Z3JTNysvZVVHb00rcWJYYTdBTC9JenRLaEtjQ2hrcjRxU2RsaHpHeHlKUDBuNVhTL0YyUm42ZERwd0E3VkxLcjFrUmNCRG9pa3VZRGpnTjJ5czNUaGVPRGRQaXZBckhtcVBmNUhBWHRrWituQ3ljQTdxdGxUNnpNM0FBTlVuYmgxS1BDKzdDeGRPQTk0bTYvWk5HdU82b2p5a3ltWGxqWEZENEgzUnNTejJVSGF3cThBQmlnaXBrZkUrNEdEczdOMFlRdmdFa2t2enc1aVp1T1R0Q1RseEx3bUZmOURnSDFjL0FmTERVQ0NpUGdVY0ZCMmppNnNEbHdwNlRYWlFjeHNkSkplQlZ3SnZDNDdTeGMrRnhFZkMwOUhENXhmQVNTU3RCL051WG9UNEVIS3RweExzNE9ZMmV3a2JVZzVpdnlGMlZrNkZNQ0hJK0o3MlVIYXFpbUZaeWhGeEJIQU80R21MTEpiSERoWDBzN1pRY3pzT1pKMnBLelhhVXJ4bndiczRlS2Z5dzFBc29qNEtiQUQwSlNUcnVZRmZpYnBJOWxCekF3azdRK2NDTXlYbmFWRFQxRVdGaCtmSGFUdC9BcWdKaVJ0VERrMWNKSHNMRjA0QlBpNDM5MlpEVjUxVHNmWGdFOWtaK25DbzVUWGlCZG1CekUzQUxVaWFTM0s4WmN2enM3U2haOVRwdko4YUlmWmdFaWFCemdhZUVkMmxpNDhBTHd4SXE3TkRtS0ZHNENha2ZScTRGeGdxZXdzWGJpWWNtem5ROWxCeklhZHBFVXBKNHR1bnAybEMzOEh0b3lJUDJRSHNlZTRBYWdoU2N0VG1vQVZjNU4wNWZlVTd2N083Q0JtdzByU1VzQ1p3S3JaV2Jyd0YwcngvMXQyRUp1ZEZ3SFdVRVRjQnJ3ZXVDRTVTamRXb1p3VnNGcDJFTE5oSkdrVnloNy9KaFgvRzRHTlhQenJ5UTFBVFVYRXZjQ213RlhKVWJxeEZIQ3BwQ1pOVFpyVm5xUk5nTXVBWmJLemRPRXFZSlBxV1dZMTVBYWd4aUxpUWNwUnZPZGxaK25DSXNDWmtwcTBPTW1zdGlUdEFwd05MSmFkcFF2bkFWdFV6ekNyS1RjQU5SY1Jqd1BiQWFka1orbkNQTUR4a2o2WkhjU3N5U1FkQVB5VWN2NUdVNXdDYkZjOXU2ekczQUEwUUxYRmJtZmc4T3dzWFJEd05VbmZyVzVCTkxNT3FUaUVjdGFHc3ZOMDRYQmdaMjhMYmdidkFtZ1lTWjhHL2pNN1I1ZE9vZHp4L1ZSMkVMTzZrelF2Y0J5d1MzYVdMbjBtSXY0ck80UjF6ZzFBQTBuYUF6Z0ttRHM3U3hldUFONGNFZi9LRG1KV1Y1SVdBMzRGYkp5ZHBRdFRLVmY1SHBjZHhMcmpCcUNoSkcwRm5BUXNuSjJsQzdjQTIxVGJITTFzRnBLV29lenhYeVU3U3hjZUJYYUtpSE95ZzFqMzNBQTBtS1ExZ0RPQWwyVm42Y0s5d0pzaTRqZlpRY3pxb2pvLzR3eWFkUUxvdmNDMkVmSGI3Q0EyTVY2YzFXRFZYN3oxZ1p1enMzVGhaY0RGa3JiT0RtSldCOVc1R1pmU3JPSi9NN0MraTMrenVRRm91R282ZlVQS08vYW1XQWc0WGRKZTJVSE1NbFhuWlp4SnMyNEJ2UUxZMEsveW1zOE53QkNvRnRhOWdXYWRGVEFYY0xTa3oyVUhNY3RRblpOeFBPWGNqS1k0QlhpREYvTU9CNjhCR0NMVmZ2dnZBQi9NenRLbG80SDlJbUpxZGhDemZwTTBGL0E5WUwvc0xGMDZGUGh3UkV6UERtSzk0UVpnQ0VrNkVQZ3F6VHBBNUVKZ1IxOHBiTU5NMGlMQXo0RW1yWUVKNEZNUjhiWHNJTlpiYmdDR2xLVGRnUi9TckxNQ2JxYnNFUGhyZGhDelhwTzBMUEJyNExYWldib3dGWGgzUkJ5ZkhjUjZ6dzNBRUpPMEJYQXl6VnBnZEQvd2xvaTRNanVJV2E5SVdoczRsV1p0MlgwRWVGdEVOT2t5TXV1Q0Z3RU9zZW92N3NiQVBkbFp1dkFTNEFKSnUyWUhNZXNGU1RzQ0Y5T3M0bjhQc0xHTC8zQnpBekRrSXVKNllEM2dqOWxadWpBZmNFSjE3NEZaWTBuNkJPWEV6dm16czNUaGo4QjYxYlBEaHBoZkFiU0VwTVVwVTVBYlpXZnBrbmNJV09OVUsvMFBCZDZibmFWTGx3SGJSOFNEMlVHcy85d0F0SWlrK1NqN2p0K1duYVZMM2lGZ2pTRnBVZUJFWU12c0xGMDZHZGpkdDNhMmgxOEJ0RWoxRjNzWDRMdlpXYnEwR1hDbHBGZGtCekViaTZUbGdNdHBYdkgvTHJDTGkzKzd1QUZvbVlpWUhoRWZCajVKMmQvYkZLOENycEswUVhZUXM1RklXZ2U0bW1iZDVoZkFKeVBDQi95MGtGOEJ0RmgxRHZuUk5Pc28wcWVBdlNMaVo5bEJ6R2FROURiZ1J6UnJzZDh6d040UjhaUHNJSmJETXdBdFZ2M0ZmeU5sdjI5VHpOZ2g4Sm5zSUdZdzgwei9FMmxXOFg4RWVLT0xmN3Q1QnNDYWVoYzV3REhBZTcxRHdESlVLLzBQQi9iSnp0S2x1NEZ0SStLRzdDQ1d5dzJBQVNCcEdlQXM0RFhaV2JwMEllVzBNbTlic29HcFZ2cWZCR3lSbmFWTGZ3QzJpWWc3czROWVBqY0FOcE9reFlCZlVVNFBiQkxmSVdBREkybDV5cG4rVFd1V0w2RWNzKzN0dEFaNERZRE5vbm93YkVWNW45a2szaUZnQXlGcFhjcEsvNllWL3hPQnJWejhiVlp1QUd3MkVmRTA4SGJnZjdLemRPa2x3UG1TM3A0ZHhJYVRwSjJCaTRBbGtxTjA2MytBdDFkL3Q4MW1jZ05nejFPZEZYQUE4SEdhZFZiQWZNQlB2RVBBZWszU1FjRFBLUCtPTlVVQUg0K0lBN3pIMzBiaU5RQTJwdW9UOWJFMDY2d0E4QTRCNndGSmN3UGZCOTZkbmFWTHp3QjdSc1JQczROWWZia0JzSEZKMmhUNEpiQm9jcFJ1WFVTNVE4QTdCS3hyMWFMWWs0SE5zN04wNldIZ3JSRnhVWFlRcXpjM0FOWVJTYThGemdTV3pzN1NwVnNvZTU2OVE4QTZKbWtGeWtyL1YyZG42ZEpkbEFOK2Jzb09ZdlhuTlFEV2tlcUJzajdRdEFmTHlzRFYzaUZnblpLMFBtV2xmOU9LLzAzQStpNysxaWszQU5heGlMZ0wyQWc0THp0TGwxNE1YT0FkQWpZZVNic0FGMUIybFRUSmVjQkcxZDlSczQ2NEFiQ3VSTVREbFBzRGpzck8wcVY1S1RzRVBwc2R4T3BKMHFlQm45S3NsZjRBUjFLbS9SL09EbUxONGpVQU5tSFZKU2dIQThyTzBxVmpnWDI5UThCZzVrci9JNEM5czdOMEtZQ0RJdUxyMlVHc21kd0EyS1EwOUJwVThBNEJBeVF0VGxucHYxbDJsaTQ5Q2J3cklrN09EbUxONVFiQUprM1NPc0Nwd0V1enMzVHBGc29kQW4vSkRtS0RKK2tWbEpYK3I4ck8wcVg3Z08wajRwcnNJTlpzWGdOZ2sxWTlpTllGZnArZHBVc3I0enNFV3FuNk03K2E1aFgvM3dQcnV2aGJMN2dCc0o2SWlOdUJEWUZ6czdOMHlUc0VXcWI2czc2QThtZmZKT2NDRzFaLzE4d216UTJBOVV5MUNubGJ5cXJrSnZFT2daYW8vb3gvUXZremI1TC9wUnhvNVpYKzFqTmVBMkI5SWVrVHdOZG81ZzZCOTBiRU05bEJySGNrelVNcG9udG1aK2xTQUFkR3hEZXlnOWp3Y1FOZ2ZTTnBSK0I0bXJkRDRBTGdiYjQ3ZlRoVUsvMS9BV3lhSEtWYlR3SzdSOFF2c29QWWNISURZSDNWNEIwQ2Y2Uk11ZDZXSGNRbXJscnBmd1psd1dlVDNBZThPU0t1elE1aXc4dHJBS3l2R3J4RDROV1VPd1RXelE1aUV6UExTdittRmYrYktDdjlYZnl0cjl3QVdOOVZxNVkzQU03Snp0S2xKWUFMcThPT3JFRWs3UXFjVC9OVytwK0RWL3JiZ0xnQnNJR0lpRWVBTjFFV1lqWEovTUNKMWFKR2E0RHFUUDhUYU42Wi9rZFFEcVo2SkR1SXRZUFhBTmpBU2ZvNDhIV2F0MFBnZjRFUFJzUzA3Q0QyZkEwKzAzODZaYVgvTjdPRFdMdTRBYkFVMVE2Qkh3RUxaR2ZwMGpuQXp2NlVWaStTRnFPYzZiOTVkcFl1UFVGWjZYOUtkaEJySHpjQWxrYlMycFFkQWkvTHp0S2xteWhUdFhka0J6R1F0QUxsVFA5WFoyZnAwcjJVTS8yOTJNOVNlQTJBcGFrZWZPdFNDbXFUdkpheVErRGZzNE8wWGJWTDR5cWFWL3k5MHQvU3VRR3dWTlduNkExcDNnNkJsd0VYUzNwcmRwQzJrclFUY0NGbHQwYVRuRTFaNmU4WkpFdmxCc0RTemJKRDRJanNMRjFhQURoWjBnSFpRZHBHMG9IQXoybmVLWlBmQjdiekdoS3JBNjhCc0ZxUjlESEtEb0dtTmFlSEFSK09pR2V6Z3d3elNYTUJod1A3WkdmcDBuVGdreEh4cmV3Z1pqTzRBYkRha2JRRDVRNkJwdTBRT0FQWU5TSWV5dzR5akNRdENwd0liSm1kcFV0UEFPK01pRjltQnpHYmxSc0FxNlZxZ2QxcE5HK0h3UFdVS2Q2N3NvTU1FMG5MVVZiNnI1S2RwVXYzVXM3MC83L3NJR1p6YXRvMHE3VkU5Y0JjRjdneE8wdVhWcWZzRUZnak84aXdxTGFMWGszeml2K053RG91L2xaWGJnQ3N0cXBWMGh0UlZrMDN5Y3VCU3lSdGx4Mms2YXJYUVJmVHZOc2t6NktzOUw4ek80alphTndBV0sxVnE2VzNvNnllYnBLRmdGOUsyajg3U0ZOVkMwSlBvbmtyL1ErbnZBWjZORHVJMlZpOEJzQWFvOEU3Qkw0REhCQVIwN09ETkVHMTB2OTd3SDdaV2JvMEhmaEVSQnlTSGNTc0UyNEFyRkdxZzNkK1RQTjJDSndHN0JZUmoyY0hxVE5KQzFOVyttK2RuYVZMVHdEdmlJaGZaUWN4NjVRYkFHdWNCdThRK0ExbFJmamZzNFBVa2FSbEtDdjlWODNPMHFWN0tIK3UxMlVITWV0RzA2WlN6V2JzRUZpSDV1MFFXQk80U3RKcTJVSHFSdEphbEpYK1RTditOMURPOUhmeHQ4WnhBMkNOVksydTNwQ3kycnBKbGdFdWs3Uk5kcEM2a1BRVzRCSmd5ZXdzWFRvVDJNZ3IvYTJwM0FCWVkxV3JyTGVqckxwdWtvV0IweVc5THp0SU5ra2ZBWDVCODlaMEhFYVo5dmRLZjJzc053RFdhQkh4YkVSOEFQaC9sRlhZVGZFQzRIQkozNVRVdXIrSGtsNGc2WHZBZjlPczU5QjA0S01SOFVIZisyQk41MFdBTmpRa3ZSazRBVmd3TzB1WFRnRjJqNGduc29NTWdxU0ZnSjhCMjJabjZaTFA5TGVoNGdiQWhvcWtOU2s3QkY2ZW5hVkwxMUttbE8vTER0SlBrcFlHVHFjY21kd2tQdFBmaG80YkFCczZWWkg1TmRDMDFmYTNBMitLaU45bkIrbUg2bjZFMDJsZWMzWVQ1Yy9sanV3Z1pyM1VwSGR2WmgycGJ1TGJpTEpLdTBtV0F5NlgxTFRyYnNkVjNZdHdLYzByL3VkU3p2UjM4YmVoNHdiQWhsSzFPdnZOTkcrSHdLTEFHWkwyeVE3U0s5VjlDTCtrZVdzempnUzJyZTZqTUJzNmJnQnNhTTJ5UStEak5HdUh3RnpBa1pJT2xxVHNNQk1sYVlxa2IxUHVRbmhCZHA0dUJIQlFSTHczSXFabGh6SHJGNjhCc0Zhb3JwVTludWJ0Tno4UjJDTWluc29PMGcxSkN3SS9wWnpUMENSUEFlK0tpSk95ZzVqMW14c0FhdzFKYTFOMkNEVHRidm1yZ08wajR2N3NJSjJROUhMS1lyODFzck4wNlg3SzcvTlYyVUhNQnNFTmdMV0twT1VvT3dSV3ljN1NwYjlSM2tmZm5CMWtMSkpXcHhUL3BiT3pkT2xteXUvdjM3S0RtQTJLMXdCWXEwVEU3WlE3Qk03Tnp0S2xGWUFySlcyV0hXUTBrcllGTHFONXhmOUNZSDBYZjJzYk53RFdPaEh4TU9VVXVxT3lzM1JwTWVCc1NYdGxCNW1UcEE4QXB3SUxaV2ZwMGpIQTFoSHhVSFlRczBGekEyQ3RGQkhUSW1KZjRDREtxdSttbUJzNFd0Slg2ckJEb0ZycGZ3aHdLTTFiNmYrNWlOZzdJcVptaHpITDREVUExbnFTZGdhT0ErYkx6dEtsRTRDOUkrTHBqTUVsTFFEOEJIaEx4dmlUOERUbDkrMkU3Q0JtbWR3QW1BR1MxcU5NWWI4a08wdVhMZ2ZlR2hIL0hPU2drcGFrN0toWWE1RGo5c0FEbE4rdnk3S0RtR1Z6QTJCV2tmUUt5ZzZCVjJWbjZkS2ZLV2ZWM3pxSXdTU3RTbG5wdit3Z3h1dWhQMUZXK3Y4NU80aFpIWGdOZ0ZrbEl2NEtiRUJaRmQ0a0sxSjJDR3pjNzRFa2JVMVo2ZCswNG44cFphVy9pNzlaeFEyQTJTd2k0a0ZnYStEWTdDeGRlaUZ3cnFUZCt6V0FwUDBvbi93WDZkY1lmZkpqWU11SWVDQTdpRm1kdUFFd20wTkVUSTJJdllEUDBhd2RBdk1BUDVMMCtWNStVeFhmQUw1UHVhZWdTYjRjRWJ0bkxaUTBxek92QVRBYmc2UjNBRDhFNXMzTzBxVWZBZnRFeERPVCtTYVM1cWZjb2JCalQxSU56alBBdmhGeFhIWVFzN3B5QTJBMkRra2JVYTZ6ZlZGMmxpNWRBdXdRRWYrYXlFK1c5RkxLem9oMWVwcXEveDRFZG95SWk3S0RtTldaR3dDekRraGFFVGdEZUdWMmxpN2RTbG41L3BkdWZwSmM0cGtOQUFBRXRFbEVRVlNrVlNnN0lwYnJTNnIrK1N0bFIwU3Q3MHd3cXdPdkFURHJRTFY2ZkgzS2F2SW1XUW00U3RLR25mNEVTVnRRemhkb1d2Ry9FbGpQeGQrc00yNEF6RHBVclNMZmtyS3F2RWxlREp3djZlM2ovVUJKK3dCbkFvdjJQVlZ2L1J6WXZDbFhKcHZWZ1JzQXN5NUV4Tk1Sc1R2d3Bld3NYWm9YK0lta3o0ejBmMVlyL1E4R2pxUjVLLzBQQnQ0ZUVVOWxCekZyRXE4Qk1Kc2dTWHRRQ3VZODJWbTZkRFN3MzR4TGNDVE5SN2tMWWVmVVZOMmJCcncvSXBwMnE2TlpMYmdCTUpzRVNac0N2d0FXVDQ3U3JRdUF0MUdhbDE4QjYrWEc2ZHJEd0U0UmNWNTJFTE9tY2dOZ05rbVNWcWJzRUhoRmRwWXUvWkZ5QStJSzJVRzZkRHRscGYvdnM0T1lOWmtiQUxNZWtQUVN5aWZwOWJPekRMbHJnVGRIeEgzWlFjeWF6b3NBelhxZ1duMitPV1UxdXZYSEtjQ21MdjVtdmVFR3dLeEhxbFhvYndlK21wMWxDQjFDZWVmL1JIWVFzMkhoVndCbWZTRHBQY0Rod056WldScnVXV0QvaURnOE80alpzSEVEWU5ZbjFZbDZKOUc4UTNYcTRsRmcxNGc0TXp1STJUQnlBMkRXUjVKZVF6bFRmL25rS0UxekYyV2wvdzNaUWN5R2xkY0FtUFZSUlB5QnNzZittdXdzRGZKYllGMFhmN1ArY2dOZzFtZlZxdlZOS1FjRzJkaE9CMTRmRVgvUERtSTI3TndBbUExQVJEeEpPV3IzbTlsWmF1eTd3RnNqNHZIc0lHWnQ0RFVBWmdNbWFUL2dlelR2MHAxK21RNGNFQkhmeVE1aTFpWnVBTXdTU05xR2NtalF3dGxaa2owTzdCWVJwMlVITVdzYk53Qm1TU1N0U3RraHNFeDJsaVQzQU50RnhHK3lnNWkxa2RjQW1DV0ppQnVCZFlFMkZzQWJLQ3Y5Mi9ock42c0ZOd0JtaVNMaUhtQmo0TlRzTEFOMEZyQlJSTnlaSGNTc3pkd0FtQ1dyVnIzdkFIdzdPOHNBZko4eTdmOW9kaEN6dG5NRFlGWURFVEU5SWo0QzdFODUvMzdZQlBDSmlIaC9SQXpqcjgrc2Nid0kwS3htSkcwSG5BQXNsSjJsUjU0RWRvOElINFJrVmlOdUFNeHFTTklhbEZQeFhwNmRaWkx1QTdhUENCK0ZiRll6YmdETWFrclMwcFFtWVBYc0xCUDBCOHFGUHJkbEJ6R3o1L01hQUxPYWlvaTdnSTJBTTdLelRNRDV3QVl1L21iMTVRYkFyTVlpNGpGZ2UrQ3c3Q3hkK0NId3hvaDRPRHVJbVkzT0RZQlp6VVhFc3hIeFFlQ2psSFB6NnlxQVQwZkVleUppYW5ZWU14dWIxd0NZTllpa3JZRGpnSmRtWjVuREE4QmVFWEY2ZGhBejY0d2JBTE9Ha2JRRXBRbllPanRMNVVMS05yKy9ad2N4czg3NUZZQlp3MFRFUDRBM0FoOEhNcWZhcHdHZkJiWnc4VGRySHM4QW1EV1lwTldCTDFJV0NtcUFRNThKZkQ0aXJoM2dtR2JXUTI0QXpJWkFkYlh3cDRGZDZOL00zblRnRjhCL1JjUnYrelNHbVEySUd3Q3pJU0pwSmVDQS85L2VIZG8yRUlOaEdQNE1JbldDb0d5UVFVbzZYTlk1bWgwQ3lrdmFDY29jY094UXdFV1I4ajJQWkhpVzRRdnV0NU44SlRudHRPMVAxZ3VKTG5QTzc1MzJCRjVNQU1DYkdtT2NzLzRvK0puMXllR1BCei85VDNKTnNpUlo1cHkzNTV3UWVDVUJBQVhHR0llc280UEh6VXFTdjgzNk5jY1A3MDhBQUVBaFk0QUFVRWdBQUVBaEFRQUFoUVFBQUJRU0FBQlFTQUFBUUNFQkFBQ0ZCQUFBRkJJQUFGQklBQUJBSVFFQUFJVUVBQUFVRWdBQVVFZ0FBRUFoQVFBQWhRUUFBQlFTQUFCUVNBQUFRQ0VCQUFDRkJBQUFGQklBQUZCSUFBQkFJUUVBQUlVRUFBQVVFZ0FBVUVnQUFFQWhBUUFBaGU3VG16QlhlWDNua2dBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIi8qIGVzbGludCBpbXBvcnQvbm8tY3ljbGU6IDAgKi9cbmltcG9ydCBTSE9XUyBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvY2xvc2VJY29uLnBuZyc7XG5cbmNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpJztcbmNvbnN0IGFwcHNFbmRQb2ludCA9ICcvYXBwcy8nO1xuY29uc3QgY29tbWVudHNFbmRQb2ludCA9ICcvY29tbWVudHMvJztcbmNvbnN0IENvbW1lbnRFbmRQdCA9ICcvY29tbWVudHM/aXRlbV9pZD0nO1xuY29uc3QgaWQgPSAnc1JQSGdqSmhRTUdxcGZxaHNyaVMnO1xuY29uc3QgcG9wVXBPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLW92ZXJsYXknKTtcblxuY29uc3QgY29tbWVudCA9IHtcbiAgaXRlbV9pZDogU3RyaW5nLFxuICB1c2VybmFtZTogU3RyaW5nLFxuICBjb21tZW50OiBTdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDT01NRU5UUyB7XG4gIFxuICAgIHN0YXRpYyBjcmVhdGVOZXdDb21tZW50ID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCcpXG4gICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50JylcbiAgICAgICAgICBpZihpbnB1dC52YWx1ZSAhPSAnJyAmJiB0ZXh0LnZhbHVlICE9ICcnICl7XG4gICAgICAgICAgICBjb21tZW50LnVzZXJuYW1lID0gaW5wdXQudmFsdWUgXG4gICAgICAgICAgICBjb21tZW50LmNvbW1lbnQgPSB0ZXh0LnZhbHVlXG4gICAgICAgICAgICBjb21tZW50Lml0ZW1faWQgPSBlLnRhcmdldC5pZDtcbiAgICAgICAgICB9ICBcbiAgICAgICAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGJhc2VVcmwgKyBhcHBzRW5kUG9pbnQgKyBpZCArIGNvbW1lbnRzRW5kUG9pbnQsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbW1lbnQpLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cblxuICAgICAgc3RhdGljIHBvc3RDb21tZW50ID0gKGUpID0+IHtcbiAgICAgICAgaWYoZS50YXJnZXQudHlwZSA9PT0gXCJzdWJtaXRcIikge1xuICAgICAgICAgIENPTU1FTlRTLmNyZWF0ZU5ld0NvbW1lbnQoZSlcbiAgICAgICAgfWVsc2V7ZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgfVxuXG4gICAgICBzdGF0aWMgZ2V0Q29tbWVudHMgPSBhc3luYyAoaXRlbUlkKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYmFzZVVybCArIGFwcHNFbmRQb2ludCArIGlkICsgQ29tbWVudEVuZFB0ICsgaXRlbUlkLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLnRleHQoKTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RhdGljIGRpc3BsYXlQb3BVcCA9IChlLCBkYXRhKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgbGV0IGRldGFpbDtcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21tZW50LWJ0bicpKSB7XG4gICAgICAgICAgZGV0YWlsID0gZGF0YS5maW5kKChpdGVtKSA9PiBOdW1iZXIoaXRlbS5pZCkgPT09IE51bWJlcihlLnRhcmdldC5pZCkpO1xuICAgICAgICAgIHBvcFVwT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmUtcG9wdXAnKTtcbiAgICAgICAgICBDT01NRU5UUy5nZXRDb21tZW50cyhkZXRhaWwuaWQudG9TdHJpbmcoKSkudGhlbihjb21tZW50cyA9PiB7XG4gICAgICAgICAgICBpZihjb21tZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21tZW50cylcbiAgICAgICAgICAgICAgZGV0YWlsLmNvbW1lbnRzID0gY29tbWVudHMubGVuZ3RoIHx8IDBcbiAgICAgICAgICAgICAgcmVzdWx0ICs9IGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWNhcmRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImRlc2t0b3AtcG9wdXAtY2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSAke2Nsb3NlSWNvbn0gYWx0PVwiY2xvc2VcIj5cbiAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWltZy13cmFwXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz0ke2RldGFpbC5pbWFnZS5tZWRpdW19IGFsdD1cInBvcHVwXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicG9wdXAtY2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwiY2xvc2UtaW1nXCIgc3JjPSR7Y2xvc2VJY29ufSBhbHQ9XCJjbG9zZVwiPlxuICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS13cmFwXCI+XG4gICAgICAgICAgICAgICAgICA8aDI+JHtkZXRhaWwubmFtZX08L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vcmUtZGV0YWlscy13cmFwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9yZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb21tZW50XCI+PHNwYW4gY2xhc3M9XCJvcmlnaW5cIj5wcmVtaWVyZWQ8L3NwYW4+OiAke2RldGFpbC5wcmVtaWVyZWR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29tbWVudFwiPjxzcGFuIGNsYXNzPVwib3JpZ2luXCI+c3RhdHVzPC9zcGFuPjogJHtkZXRhaWwuc3RhdHVzfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vcmUtZGV0YWlscyBhbGlnbi1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29tbWVudFwiPjxzcGFuIGNsYXNzPVwib3JpZ2luXCI+Q291bnRyeTwvc3Bhbj46ICR7ZGV0YWlsLm5ldHdvcmsuY291bnRyeS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbW1lbnRcIj48c3BhbiBjbGFzcz1cIm9yaWdpblwiPkxhbmd1YWdlPC9zcGFuPjogJHtkZXRhaWwubGFuZ3VhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICA8cD5jb21tZW50cyA8c3BhbiBpZD1cImNvbW1lbnRzLWNvdW50XCI+JHtkZXRhaWwuY29tbWVudHN9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvbW1lbnRvcnNcIj48L3VsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWNvbW1lbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxwPkFkZCBhIGNvbW1lbnQ8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Zm9ybSBpZD0ke2RldGFpbC5pZH0gY2xhc3M9XCJmb3JtXCIgYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSR7ZGV0YWlsLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT0ke2RldGFpbC5pZH1cIiByZXF1aXJlZCBpZD0ke2RldGFpbC5pZH0gcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImNvbW1lbnRcIiBpZD1cImNvbW1lbnRcIiBuYW1lPVwidXNlcl9tZXNzYWdlXCIgbWF4bGVuZ3RoPVwiNTAwXCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9JHtkZXRhaWwuaWR9IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0blwiPmNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgcG9wVXBPdmVybGF5LmlubmVySFRNTCA9IHJlc3VsdFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAgIFxuIiwiLyogZXNsaW50IGltcG9ydC9uby1jeWNsZTogMCAqL1xuaW1wb3J0IGhlYXJ0IGZyb20gJy4vYXNzZXRzL2ltYWdlcy9oZWFydC5wbmcnO1xuaW1wb3J0IElOVEVSQUNUSU9OUyBmcm9tICcuL2ludGVyYXRpb25zLmpzJztcblxuY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnO1xuY29uc3Qgc2hvd3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvd3MtY29udGFpbmVyJyk7XG5jb25zdCBjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3VudCcpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTSE9XUyB7XG4gIHN0YXRpYyBhbGxTaG93cyA9IFtdO1xuXG4gICAgc3RhdGljIGdldFNob3dzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmRlck1vdmllcyA9IChtb3ZpZXMpID0+IHtcbiAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgIG1vdmllcy5mb3JFYWNoKChtb3ZpZSkgPT4ge1xuICAgICAgICByZXN1bHQgKz0gYFxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInNob3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImltZy13cmFwXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwic2hvdy1pbWdcIiBzcmM9XCIke21vdmllLmltYWdlLm1lZGl1bX1cIiBhbHQ9XCJpbWFnZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxpa2VzLWNvbmF0YWluZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPiR7bW92aWUubmFtZX08L3A+XG4gICAgICAgICAgICAgICA8aW1nIGlkPSR7bW92aWUuaWR9IGNsYXNzPVwiaGVhcnRcInNyYz0ke2hlYXJ0fSBhbHQ9XCJpbWFnZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxpa2VzLXZhbHVlLXdyYXBcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPXZhbHVlLXdyYXA+PHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiR7bW92aWUubGlrZXN9PC9zcGFuPjxzcGFuPmxpa2VzPC9zcGFuPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gaWQ9JHttb3ZpZS5pZH0gY2xhc3M9XCJjb21tZW50LWJ0biBjb21tZW50LWJ1dHRvblwiPmNvbW1lbnRzPC9idXR0b24+XG4gICAgPC9hcnRpY2xlPlxuICAgICAgICBgO1xuICAgICAgfSk7XG4gICAgICBzaG93c0NvbnRhaW5lci5pbm5lckhUTUwgPSByZXN1bHQ7XG4gICAgfVxuXG4gICAgICBzdGF0aWMgbmV3TW92aWVzID0gKGxpa2VzLCBtb3ZpZXMpID0+IHtcbiAgICAgICAgY29uc3QgbWFwcGVkTW92aWVzID0gbW92aWVzLm1hcCgobW92aWUpID0+IHtcbiAgICAgICAgICBjb25zdCBsaWtlZE1vdmllID0gbGlrZXMuZmluZCgobGlrZSkgPT4gTnVtYmVyKGxpa2UuaXRlbV9pZCkgPT09IE51bWJlcihtb3ZpZS5pZCkpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5tb3ZpZSxcbiAgICAgICAgICAgIGxpa2VzOiBsaWtlZE1vdmllID8gbGlrZWRNb3ZpZS5saWtlcyA6IDAsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIFNIT1dTLmFsbFNob3dzID0gbWFwcGVkTW92aWVzO1xuICAgICAgICBTSE9XUy5yZW5kZXJNb3ZpZXMobWFwcGVkTW92aWVzKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIGRpc3BsYXlTaG93cygpIHtcbiAgICAgICAgU0hPV1MuZ2V0U2hvd3MoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbGxTaG93cyA9IGRhdGE7XG4gICAgICAgICAgY291bnQudGV4dENvbnRlbnQgPSBgKCR7ZGF0YS5sZW5ndGh9KWA7XG4gICAgICAgICAgSU5URVJBQ1RJT05TLmdldExpa2VzKCkudGhlbigobGlrZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChsaWtlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgU0hPV1MubmV3TW92aWVzKGxpa2VzLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG59IiwiLyogZXNsaW50IGltcG9ydC9uby1jeWNsZTogMCAqL1xuaW1wb3J0IENPTU1FTlRTIGZyb20gJy4vY29tbWVudHMuanMnO1xuaW1wb3J0IFNIT1dTIGZyb20gJy4vaG9tZS5qcyc7XG5cbmNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpJztcbmNvbnN0IGFwcHNFbmRQb2ludCA9ICcvYXBwcy8nO1xuY29uc3QgbGlrZXNFbmRQb2ludCA9ICcvbGlrZXMvJztcbmNvbnN0IGlkID0gJ3NSUEhnakpoUU1HcXBmcWhzcmlTJztcbmNvbnN0IHBvcFVwT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1vdmVybGF5Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElOVEVSQUNUSU9OUyB7XG4gICAgc3RhdGljIGNyZWF0ZUFwcElkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChiYXNlVXJsICsgYXBwc0VuZFBvaW50LCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgICBzdGF0aWMgcG9zdExpa2UgPSBhc3luYyAobW92aWVJZCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYmFzZVVybCArIGFwcHNFbmRQb2ludCArIGlkICsgbGlrZXNFbmRQb2ludCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIGl0ZW1faWQ6IG1vdmllSWQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzdGF0aWMgY3JlYXRlTmV3TGlrZSA9IChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYXJ0JykpIHtcbiAgICAgICAgICBwb3BVcE92ZXJsYXkuY2xhc3NMaXN0LmFkZCgncmVtb3ZlLXBvcHVwJylcbiAgICAgICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICBJTlRFUkFDVElPTlMucG9zdExpa2UoaWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhID09PSAnQ3JlYXRlZCcpIHtcbiAgICAgICAgICAgICAgaWYgKFNIT1dTLmFsbFNob3dzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpa2VkU2hvdyA9IFNIT1dTLmFsbFNob3dzLmZpbmQoKHNob3cpID0+IE51bWJlcihzaG93LmlkKSA9PT0gTnVtYmVyKGlkKSk7XG4gICAgICAgICAgICAgICAgaWYgKGxpa2VkU2hvdykge1xuICAgICAgICAgICAgICAgICAgbGlrZWRTaG93Lmxpa2VzICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFNIT1dTLnJlbmRlck1vdmllcyhTSE9XUy5hbGxTaG93cyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBzdGF0aWMgc2hvd1BvcFVwID0gKGUpID0+IHtcbiAgICAgIC8vICAgU0hPV1MuZ2V0U2hvd3MoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAvLyAgICAgICBpZiAoZS50YXJnZXQuaWQudG9TdHJpbmcoKSA9PT0gZGF0YVtpXS5pZC50b1N0cmluZygpKSB7XG4gICAgICAvLyAgICAgICAgIHBvcFVwT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmUtcG9wdXAnKTtcbiAgICAgIC8vICAgICAgICAgQ09NTUVOVFMuZGlzcGxheVBvcFVwKGUpO1xuICAgICAgLy8gICAgICAgfVxuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgfSk7XG4gICAgICAvLyB9XG5cbiAgICAgIHN0YXRpYyByZW1vdmVQb3BVcCA9IChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5hbHQgPT09ICdjbG9zZScpIHtcbiAgICAgICAgICBwb3BVcE92ZXJsYXkuY2xhc3NMaXN0LmFkZCgncmVtb3ZlLXBvcHVwJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RhdGljIGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYmFzZVVybCArIGFwcHNFbmRQb2ludCArIGlkICsgbGlrZXNFbmRQb2ludCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxufSIsImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX3dyYXBSZWdFeHAoKSB7XG4gIF93cmFwUmVnRXhwID0gZnVuY3Rpb24gKHJlLCBncm91cHMpIHtcbiAgICByZXR1cm4gbmV3IEJhYmVsUmVnRXhwKHJlLCB2b2lkIDAsIGdyb3Vwcyk7XG4gIH07XG5cbiAgdmFyIF9zdXBlciA9IFJlZ0V4cC5wcm90b3R5cGUsXG4gICAgICBfZ3JvdXBzID0gbmV3IFdlYWtNYXAoKTtcblxuICBmdW5jdGlvbiBCYWJlbFJlZ0V4cChyZSwgZmxhZ3MsIGdyb3Vwcykge1xuICAgIHZhciBfdGhpcyA9IG5ldyBSZWdFeHAocmUsIGZsYWdzKTtcblxuICAgIHJldHVybiBfZ3JvdXBzLnNldChfdGhpcywgZ3JvdXBzIHx8IF9ncm91cHMuZ2V0KHJlKSksIF9zZXRQcm90b3R5cGVPZihfdGhpcywgQmFiZWxSZWdFeHAucHJvdG90eXBlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkR3JvdXBzKHJlc3VsdCwgcmUpIHtcbiAgICB2YXIgZyA9IF9ncm91cHMuZ2V0KHJlKTtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhnKS5yZWR1Y2UoZnVuY3Rpb24gKGdyb3VwcywgbmFtZSkge1xuICAgICAgcmV0dXJuIGdyb3Vwc1tuYW1lXSA9IHJlc3VsdFtnW25hbWVdXSwgZ3JvdXBzO1xuICAgIH0sIE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICB9XG5cbiAgcmV0dXJuIF9pbmhlcml0cyhCYWJlbFJlZ0V4cCwgUmVnRXhwKSwgQmFiZWxSZWdFeHAucHJvdG90eXBlLmV4ZWMgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgdmFyIHJlc3VsdCA9IF9zdXBlci5leGVjLmNhbGwodGhpcywgc3RyKTtcblxuICAgIHJldHVybiByZXN1bHQgJiYgKHJlc3VsdC5ncm91cHMgPSBidWlsZEdyb3VwcyhyZXN1bHQsIHRoaXMpKSwgcmVzdWx0O1xuICB9LCBCYWJlbFJlZ0V4cC5wcm90b3R5cGVbU3ltYm9sLnJlcGxhY2VdID0gZnVuY3Rpb24gKHN0ciwgc3Vic3RpdHV0aW9uKSB7XG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHN1YnN0aXR1dGlvbikge1xuICAgICAgdmFyIGdyb3VwcyA9IF9ncm91cHMuZ2V0KHRoaXMpO1xuXG4gICAgICByZXR1cm4gX3N1cGVyW1N5bWJvbC5yZXBsYWNlXS5jYWxsKHRoaXMsIHN0ciwgc3Vic3RpdHV0aW9uLnJlcGxhY2UoL1xcJDwoW14+XSspPi9nLCBmdW5jdGlvbiAoXywgbmFtZSkge1xuICAgICAgICByZXR1cm4gXCIkXCIgKyBncm91cHNbbmFtZV07XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygc3Vic3RpdHV0aW9uKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gX3N1cGVyW1N5bWJvbC5yZXBsYWNlXS5jYWxsKHRoaXMsIHN0ciwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIFwib2JqZWN0XCIgIT0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSAmJiAoYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJncykpLnB1c2goYnVpbGRHcm91cHMoYXJncywgX3RoaXMpKSwgc3Vic3RpdHV0aW9uLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9zdXBlcltTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCBzdHIsIHN1YnN0aXR1dGlvbik7XG4gIH0sIF93cmFwUmVnRXhwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuXG4gIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuXG4gIHZhciBfcywgX2U7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG52YXIgX1dJTkRPVyA9IHt9O1xudmFyIF9ET0NVTUVOVCA9IHt9O1xudmFyIF9NVVRBVElPTl9PQlNFUlZFUiA9IG51bGw7XG52YXIgX1BFUkZPUk1BTkNFID0ge1xuICBtYXJrOiBub29wLFxuICBtZWFzdXJlOiBub29wXG59O1xuXG50cnkge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIF9XSU5ET1cgPSB3aW5kb3c7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSBfRE9DVU1FTlQgPSBkb2N1bWVudDtcbiAgaWYgKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJykgX01VVEFUSU9OX09CU0VSVkVSID0gTXV0YXRpb25PYnNlcnZlcjtcbiAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcpIF9QRVJGT1JNQU5DRSA9IHBlcmZvcm1hbmNlO1xufSBjYXRjaCAoZSkge31cblxudmFyIF9yZWYgPSBfV0lORE9XLm5hdmlnYXRvciB8fCB7fSxcbiAgICBfcmVmJHVzZXJBZ2VudCA9IF9yZWYudXNlckFnZW50LFxuICAgIHVzZXJBZ2VudCA9IF9yZWYkdXNlckFnZW50ID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkdXNlckFnZW50O1xudmFyIFdJTkRPVyA9IF9XSU5ET1c7XG52YXIgRE9DVU1FTlQgPSBfRE9DVU1FTlQ7XG52YXIgTVVUQVRJT05fT0JTRVJWRVIgPSBfTVVUQVRJT05fT0JTRVJWRVI7XG52YXIgUEVSRk9STUFOQ0UgPSBfUEVSRk9STUFOQ0U7XG52YXIgSVNfQlJPV1NFUiA9ICEhV0lORE9XLmRvY3VtZW50O1xudmFyIElTX0RPTSA9ICEhRE9DVU1FTlQuZG9jdW1lbnRFbGVtZW50ICYmICEhRE9DVU1FTlQuaGVhZCAmJiB0eXBlb2YgRE9DVU1FTlQuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgRE9DVU1FTlQuY3JlYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJztcbnZhciBJU19JRSA9IH51c2VyQWdlbnQuaW5kZXhPZignTVNJRScpIHx8IH51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudC8nKTtcblxudmFyIF9mYW1pbHlQcm94eSwgX2ZhbWlseVByb3h5MiwgX2ZhbWlseVByb3h5MywgX2ZhbWlseVByb3h5NCwgX2ZhbWlseVByb3h5NTtcblxudmFyIE5BTUVTUEFDRV9JREVOVElGSUVSID0gJ19fX0ZPTlRfQVdFU09NRV9fXyc7XG52YXIgVU5JVFNfSU5fR1JJRCA9IDE2O1xudmFyIERFRkFVTFRfQ1NTX1BSRUZJWCA9ICdmYSc7XG52YXIgREVGQVVMVF9SRVBMQUNFTUVOVF9DTEFTUyA9ICdzdmctaW5saW5lLS1mYSc7XG52YXIgREFUQV9GQV9JMlNWRyA9ICdkYXRhLWZhLWkyc3ZnJztcbnZhciBEQVRBX0ZBX1BTRVVET19FTEVNRU5UID0gJ2RhdGEtZmEtcHNldWRvLWVsZW1lbnQnO1xudmFyIERBVEFfRkFfUFNFVURPX0VMRU1FTlRfUEVORElORyA9ICdkYXRhLWZhLXBzZXVkby1lbGVtZW50LXBlbmRpbmcnO1xudmFyIERBVEFfUFJFRklYID0gJ2RhdGEtcHJlZml4JztcbnZhciBEQVRBX0lDT04gPSAnZGF0YS1pY29uJztcbnZhciBIVE1MX0NMQVNTX0kyU1ZHX0JBU0VfQ0xBU1MgPSAnZm9udGF3ZXNvbWUtaTJzdmcnO1xudmFyIE1VVEFUSU9OX0FQUFJPQUNIX0FTWU5DID0gJ2FzeW5jJztcbnZhciBUQUdOQU1FU19UT19TS0lQX0ZPUl9QU0VVRE9FTEVNRU5UUyA9IFsnSFRNTCcsICdIRUFEJywgJ1NUWUxFJywgJ1NDUklQVCddO1xudmFyIFBST0RVQ1RJT04gPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0oKTtcbnZhciBGQU1JTFlfQ0xBU1NJQyA9ICdjbGFzc2ljJztcbnZhciBGQU1JTFlfU0hBUlAgPSAnc2hhcnAnO1xudmFyIEZBTUlMSUVTID0gW0ZBTUlMWV9DTEFTU0lDLCBGQU1JTFlfU0hBUlBdO1xuXG5mdW5jdGlvbiBmYW1pbHlQcm94eShvYmopIHtcbiAgLy8gRGVmYXVsdHMgdG8gdGhlIGNsYXNzaWMgZmFtaWx5IGlmIGZhbWlseSBpcyBub3QgYXZhaWxhYmxlXG4gIHJldHVybiBuZXcgUHJveHkob2JqLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQodGFyZ2V0LCBwcm9wKSB7XG4gICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQgPyB0YXJnZXRbcHJvcF0gOiB0YXJnZXRbRkFNSUxZX0NMQVNTSUNdO1xuICAgIH1cbiAgfSk7XG59XG52YXIgUFJFRklYX1RPX1NUWUxFID0gZmFtaWx5UHJveHkoKF9mYW1pbHlQcm94eSA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2ZhbWlseVByb3h5LCBGQU1JTFlfQ0xBU1NJQywge1xuICAnZmEnOiAnc29saWQnLFxuICAnZmFzJzogJ3NvbGlkJyxcbiAgJ2ZhLXNvbGlkJzogJ3NvbGlkJyxcbiAgJ2Zhcic6ICdyZWd1bGFyJyxcbiAgJ2ZhLXJlZ3VsYXInOiAncmVndWxhcicsXG4gICdmYWwnOiAnbGlnaHQnLFxuICAnZmEtbGlnaHQnOiAnbGlnaHQnLFxuICAnZmF0JzogJ3RoaW4nLFxuICAnZmEtdGhpbic6ICd0aGluJyxcbiAgJ2ZhZCc6ICdkdW90b25lJyxcbiAgJ2ZhLWR1b3RvbmUnOiAnZHVvdG9uZScsXG4gICdmYWInOiAnYnJhbmRzJyxcbiAgJ2ZhLWJyYW5kcyc6ICdicmFuZHMnLFxuICAnZmFrJzogJ2tpdCcsXG4gICdmYS1raXQnOiAna2l0J1xufSksIF9kZWZpbmVQcm9wZXJ0eShfZmFtaWx5UHJveHksIEZBTUlMWV9TSEFSUCwge1xuICAnZmEnOiAnc29saWQnLFxuICAnZmFzcyc6ICdzb2xpZCcsXG4gICdmYS1zb2xpZCc6ICdzb2xpZCcsXG4gICdmYXNyJzogJ3JlZ3VsYXInLFxuICAnZmEtcmVndWxhcic6ICdyZWd1bGFyJ1xufSksIF9mYW1pbHlQcm94eSkpO1xudmFyIFNUWUxFX1RPX1BSRUZJWCA9IGZhbWlseVByb3h5KChfZmFtaWx5UHJveHkyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfZmFtaWx5UHJveHkyLCBGQU1JTFlfQ0xBU1NJQywge1xuICAnc29saWQnOiAnZmFzJyxcbiAgJ3JlZ3VsYXInOiAnZmFyJyxcbiAgJ2xpZ2h0JzogJ2ZhbCcsXG4gICd0aGluJzogJ2ZhdCcsXG4gICdkdW90b25lJzogJ2ZhZCcsXG4gICdicmFuZHMnOiAnZmFiJyxcbiAgJ2tpdCc6ICdmYWsnXG59KSwgX2RlZmluZVByb3BlcnR5KF9mYW1pbHlQcm94eTIsIEZBTUlMWV9TSEFSUCwge1xuICAnc29saWQnOiAnZmFzcycsXG4gICdyZWd1bGFyJzogJ2Zhc3InXG59KSwgX2ZhbWlseVByb3h5MikpO1xudmFyIFBSRUZJWF9UT19MT05HX1NUWUxFID0gZmFtaWx5UHJveHkoKF9mYW1pbHlQcm94eTMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9mYW1pbHlQcm94eTMsIEZBTUlMWV9DTEFTU0lDLCB7XG4gICdmYWInOiAnZmEtYnJhbmRzJyxcbiAgJ2ZhZCc6ICdmYS1kdW90b25lJyxcbiAgJ2Zhayc6ICdmYS1raXQnLFxuICAnZmFsJzogJ2ZhLWxpZ2h0JyxcbiAgJ2Zhcic6ICdmYS1yZWd1bGFyJyxcbiAgJ2Zhcyc6ICdmYS1zb2xpZCcsXG4gICdmYXQnOiAnZmEtdGhpbidcbn0pLCBfZGVmaW5lUHJvcGVydHkoX2ZhbWlseVByb3h5MywgRkFNSUxZX1NIQVJQLCB7XG4gICdmYXNzJzogJ2ZhLXNvbGlkJyxcbiAgJ2Zhc3InOiAnZmEtcmVndWxhcidcbn0pLCBfZmFtaWx5UHJveHkzKSk7XG52YXIgTE9OR19TVFlMRV9UT19QUkVGSVggPSBmYW1pbHlQcm94eSgoX2ZhbWlseVByb3h5NCA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2ZhbWlseVByb3h5NCwgRkFNSUxZX0NMQVNTSUMsIHtcbiAgJ2ZhLWJyYW5kcyc6ICdmYWInLFxuICAnZmEtZHVvdG9uZSc6ICdmYWQnLFxuICAnZmEta2l0JzogJ2ZhaycsXG4gICdmYS1saWdodCc6ICdmYWwnLFxuICAnZmEtcmVndWxhcic6ICdmYXInLFxuICAnZmEtc29saWQnOiAnZmFzJyxcbiAgJ2ZhLXRoaW4nOiAnZmF0J1xufSksIF9kZWZpbmVQcm9wZXJ0eShfZmFtaWx5UHJveHk0LCBGQU1JTFlfU0hBUlAsIHtcbiAgJ2ZhLXNvbGlkJzogJ2Zhc3MnLFxuICAnZmEtcmVndWxhcic6ICdmYXNyJ1xufSksIF9mYW1pbHlQcm94eTQpKTtcbnZhciBJQ09OX1NFTEVDVElPTl9TWU5UQVhfUEFUVEVSTiA9IC9mYShzfHJ8bHx0fGR8YnxrfHNzfHNyKT9bXFwtXFwgXS87IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcblxudmFyIExBWUVSU19URVhUX0NMQVNTTkFNRSA9ICdmYS1sYXllcnMtdGV4dCc7XG52YXIgRk9OVF9GQU1JTFlfUEFUVEVSTiA9IC9Gb250ID9Bd2Vzb21lID8oWzU2IF0qKShTb2xpZHxSZWd1bGFyfExpZ2h0fFRoaW58RHVvdG9uZXxCcmFuZHN8RnJlZXxQcm98U2hhcnB8S2l0KT8uKi9pO1xudmFyIEZPTlRfV0VJR0hUX1RPX1BSRUZJWCA9IGZhbWlseVByb3h5KChfZmFtaWx5UHJveHk1ID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfZmFtaWx5UHJveHk1LCBGQU1JTFlfQ0xBU1NJQywge1xuICAnOTAwJzogJ2ZhcycsXG4gICc0MDAnOiAnZmFyJyxcbiAgJ25vcm1hbCc6ICdmYXInLFxuICAnMzAwJzogJ2ZhbCcsXG4gICcxMDAnOiAnZmF0J1xufSksIF9kZWZpbmVQcm9wZXJ0eShfZmFtaWx5UHJveHk1LCBGQU1JTFlfU0hBUlAsIHtcbiAgJzkwMCc6ICdmYXNzJyxcbiAgJzQwMCc6ICdmYXNyJ1xufSksIF9mYW1pbHlQcm94eTUpKTtcbnZhciBvbmVUb1RlbiA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF07XG52YXIgb25lVG9Ud2VudHkgPSBvbmVUb1Rlbi5jb25jYXQoWzExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwXSk7XG52YXIgQVRUUklCVVRFU19XQVRDSEVEX0ZPUl9NVVRBVElPTiA9IFsnY2xhc3MnLCAnZGF0YS1wcmVmaXgnLCAnZGF0YS1pY29uJywgJ2RhdGEtZmEtdHJhbnNmb3JtJywgJ2RhdGEtZmEtbWFzayddO1xudmFyIERVT1RPTkVfQ0xBU1NFUyA9IHtcbiAgR1JPVVA6ICdkdW90b25lLWdyb3VwJyxcbiAgU1dBUF9PUEFDSVRZOiAnc3dhcC1vcGFjaXR5JyxcbiAgUFJJTUFSWTogJ3ByaW1hcnknLFxuICBTRUNPTkRBUlk6ICdzZWNvbmRhcnknXG59O1xudmFyIHByZWZpeGVzID0gbmV3IFNldCgpO1xuT2JqZWN0LmtleXMoU1RZTEVfVE9fUFJFRklYW0ZBTUlMWV9DTEFTU0lDXSkubWFwKHByZWZpeGVzLmFkZC5iaW5kKHByZWZpeGVzKSk7XG5PYmplY3Qua2V5cyhTVFlMRV9UT19QUkVGSVhbRkFNSUxZX1NIQVJQXSkubWFwKHByZWZpeGVzLmFkZC5iaW5kKHByZWZpeGVzKSk7XG52YXIgUkVTRVJWRURfQ0xBU1NFUyA9IFtdLmNvbmNhdChGQU1JTElFUywgX3RvQ29uc3VtYWJsZUFycmF5KHByZWZpeGVzKSwgWycyeHMnLCAneHMnLCAnc20nLCAnbGcnLCAneGwnLCAnMnhsJywgJ2JlYXQnLCAnYm9yZGVyJywgJ2ZhZGUnLCAnYmVhdC1mYWRlJywgJ2JvdW5jZScsICdmbGlwLWJvdGgnLCAnZmxpcC1ob3Jpem9udGFsJywgJ2ZsaXAtdmVydGljYWwnLCAnZmxpcCcsICdmdycsICdpbnZlcnNlJywgJ2xheWVycy1jb3VudGVyJywgJ2xheWVycy10ZXh0JywgJ2xheWVycycsICdsaScsICdwdWxsLWxlZnQnLCAncHVsbC1yaWdodCcsICdwdWxzZScsICdyb3RhdGUtMTgwJywgJ3JvdGF0ZS0yNzAnLCAncm90YXRlLTkwJywgJ3JvdGF0ZS1ieScsICdzaGFrZScsICdzcGluLXB1bHNlJywgJ3NwaW4tcmV2ZXJzZScsICdzcGluJywgJ3N0YWNrLTF4JywgJ3N0YWNrLTJ4JywgJ3N0YWNrJywgJ3VsJywgRFVPVE9ORV9DTEFTU0VTLkdST1VQLCBEVU9UT05FX0NMQVNTRVMuU1dBUF9PUEFDSVRZLCBEVU9UT05FX0NMQVNTRVMuUFJJTUFSWSwgRFVPVE9ORV9DTEFTU0VTLlNFQ09OREFSWV0pLmNvbmNhdChvbmVUb1Rlbi5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KG4sIFwieFwiKTtcbn0pKS5jb25jYXQob25lVG9Ud2VudHkubWFwKGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiBcInctXCIuY29uY2F0KG4pO1xufSkpO1xuXG52YXIgaW5pdGlhbCA9IFdJTkRPVy5Gb250QXdlc29tZUNvbmZpZyB8fCB7fTtcblxuZnVuY3Rpb24gZ2V0QXR0ckNvbmZpZyhhdHRyKSB7XG4gIHZhciBlbGVtZW50ID0gRE9DVU1FTlQucXVlcnlTZWxlY3Rvcignc2NyaXB0WycgKyBhdHRyICsgJ10nKTtcblxuICBpZiAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIC8vIEdldHRpbmcgYW4gZW1wdHkgc3RyaW5nIHdpbGwgb2NjdXIgaWYgdGhlIGF0dHJpYnV0ZSBpcyBzZXQgb24gdGhlIEhUTUwgdGFnIGJ1dCB3aXRob3V0IGEgdmFsdWVcbiAgLy8gV2UnbGwgYXNzdW1lIHRoYXQgdGhpcyBpcyBhbiBpbmRpY2F0aW9uIHRoYXQgaXQgc2hvdWxkIGJlIHRvZ2dsZWQgdG8gdHJ1ZVxuICBpZiAodmFsID09PSAnJykgcmV0dXJuIHRydWU7XG4gIGlmICh2YWwgPT09ICdmYWxzZScpIHJldHVybiBmYWxzZTtcbiAgaWYgKHZhbCA9PT0gJ3RydWUnKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHZhbDtcbn1cblxuaWYgKERPQ1VNRU5UICYmIHR5cGVvZiBET0NVTUVOVC5xdWVyeVNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gIHZhciBhdHRycyA9IFtbJ2RhdGEtZmFtaWx5LXByZWZpeCcsICdmYW1pbHlQcmVmaXgnXSwgWydkYXRhLWNzcy1wcmVmaXgnLCAnY3NzUHJlZml4J10sIFsnZGF0YS1mYW1pbHktZGVmYXVsdCcsICdmYW1pbHlEZWZhdWx0J10sIFsnZGF0YS1zdHlsZS1kZWZhdWx0JywgJ3N0eWxlRGVmYXVsdCddLCBbJ2RhdGEtcmVwbGFjZW1lbnQtY2xhc3MnLCAncmVwbGFjZW1lbnRDbGFzcyddLCBbJ2RhdGEtYXV0by1yZXBsYWNlLXN2ZycsICdhdXRvUmVwbGFjZVN2ZyddLCBbJ2RhdGEtYXV0by1hZGQtY3NzJywgJ2F1dG9BZGRDc3MnXSwgWydkYXRhLWF1dG8tYTExeScsICdhdXRvQTExeSddLCBbJ2RhdGEtc2VhcmNoLXBzZXVkby1lbGVtZW50cycsICdzZWFyY2hQc2V1ZG9FbGVtZW50cyddLCBbJ2RhdGEtb2JzZXJ2ZS1tdXRhdGlvbnMnLCAnb2JzZXJ2ZU11dGF0aW9ucyddLCBbJ2RhdGEtbXV0YXRlLWFwcHJvYWNoJywgJ211dGF0ZUFwcHJvYWNoJ10sIFsnZGF0YS1rZWVwLW9yaWdpbmFsLXNvdXJjZScsICdrZWVwT3JpZ2luYWxTb3VyY2UnXSwgWydkYXRhLW1lYXN1cmUtcGVyZm9ybWFuY2UnLCAnbWVhc3VyZVBlcmZvcm1hbmNlJ10sIFsnZGF0YS1zaG93LW1pc3NpbmctaWNvbnMnLCAnc2hvd01pc3NpbmdJY29ucyddXTtcbiAgYXR0cnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpLFxuICAgICAgICBhdHRyID0gX3JlZjJbMF0sXG4gICAgICAgIGtleSA9IF9yZWYyWzFdO1xuXG4gICAgdmFyIHZhbCA9IGNvZXJjZShnZXRBdHRyQ29uZmlnKGF0dHIpKTtcblxuICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgIGluaXRpYWxba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xufVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIHN0eWxlRGVmYXVsdDogJ3NvbGlkJyxcbiAgZmFtaWx5RGVmYXVsdDogJ2NsYXNzaWMnLFxuICBjc3NQcmVmaXg6IERFRkFVTFRfQ1NTX1BSRUZJWCxcbiAgcmVwbGFjZW1lbnRDbGFzczogREVGQVVMVF9SRVBMQUNFTUVOVF9DTEFTUyxcbiAgYXV0b1JlcGxhY2VTdmc6IHRydWUsXG4gIGF1dG9BZGRDc3M6IHRydWUsXG4gIGF1dG9BMTF5OiB0cnVlLFxuICBzZWFyY2hQc2V1ZG9FbGVtZW50czogZmFsc2UsXG4gIG9ic2VydmVNdXRhdGlvbnM6IHRydWUsXG4gIG11dGF0ZUFwcHJvYWNoOiAnYXN5bmMnLFxuICBrZWVwT3JpZ2luYWxTb3VyY2U6IHRydWUsXG4gIG1lYXN1cmVQZXJmb3JtYW5jZTogZmFsc2UsXG4gIHNob3dNaXNzaW5nSWNvbnM6IHRydWVcbn07IC8vIGZhbWlseVByZWZpeCBpcyBkZXByZWNhdGVkIGJ1dCB3ZSBtdXN0IHN0aWxsIHN1cHBvcnQgaXQgaWYgcHJlc2VudFxuXG5pZiAoaW5pdGlhbC5mYW1pbHlQcmVmaXgpIHtcbiAgaW5pdGlhbC5jc3NQcmVmaXggPSBpbml0aWFsLmZhbWlseVByZWZpeDtcbn1cblxudmFyIF9jb25maWcgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgX2RlZmF1bHQpLCBpbml0aWFsKTtcblxuaWYgKCFfY29uZmlnLmF1dG9SZXBsYWNlU3ZnKSBfY29uZmlnLm9ic2VydmVNdXRhdGlvbnMgPSBmYWxzZTtcbnZhciBjb25maWcgPSB7fTtcbk9iamVjdC5rZXlzKF9kZWZhdWx0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbmZpZywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWwpIHtcbiAgICAgIF9jb25maWdba2V5XSA9IHZhbDtcblxuICAgICAgX29uQ2hhbmdlQ2IuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgcmV0dXJuIGNiKGNvbmZpZyk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jb25maWdba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7IC8vIGZhbWlseVByZWZpeCBpcyBkZXByZWNhdGVkIGFzIG9mIDYuMi4wIGFuZCBzaG91bGQgYmUgcmVtb3ZlZCBpbiA3LjAuMFxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoY29uZmlnLCAnZmFtaWx5UHJlZml4Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWwpIHtcbiAgICBfY29uZmlnLmNzc1ByZWZpeCA9IHZhbDtcblxuICAgIF9vbkNoYW5nZUNiLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICByZXR1cm4gY2IoY29uZmlnKTtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb25maWcuY3NzUHJlZml4O1xuICB9XG59KTtcbldJTkRPVy5Gb250QXdlc29tZUNvbmZpZyA9IGNvbmZpZztcbnZhciBfb25DaGFuZ2VDYiA9IFtdO1xuZnVuY3Rpb24gb25DaGFuZ2UoY2IpIHtcbiAgX29uQ2hhbmdlQ2IucHVzaChjYik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBfb25DaGFuZ2VDYi5zcGxpY2UoX29uQ2hhbmdlQ2IuaW5kZXhPZihjYiksIDEpO1xuICB9O1xufVxuXG52YXIgZCA9IFVOSVRTX0lOX0dSSUQ7XG52YXIgbWVhbmluZ2xlc3NUcmFuc2Zvcm0gPSB7XG4gIHNpemU6IDE2LFxuICB4OiAwLFxuICB5OiAwLFxuICByb3RhdGU6IDAsXG4gIGZsaXBYOiBmYWxzZSxcbiAgZmxpcFk6IGZhbHNlXG59O1xuZnVuY3Rpb24gaW5zZXJ0Q3NzKGNzcykge1xuICBpZiAoIWNzcyB8fCAhSVNfRE9NKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHN0eWxlID0gRE9DVU1FTlQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gIHN0eWxlLmlubmVySFRNTCA9IGNzcztcbiAgdmFyIGhlYWRDaGlsZHJlbiA9IERPQ1VNRU5ULmhlYWQuY2hpbGROb2RlcztcbiAgdmFyIGJlZm9yZUNoaWxkID0gbnVsbDtcblxuICBmb3IgKHZhciBpID0gaGVhZENoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XG4gICAgdmFyIGNoaWxkID0gaGVhZENoaWxkcmVuW2ldO1xuICAgIHZhciB0YWdOYW1lID0gKGNoaWxkLnRhZ05hbWUgfHwgJycpLnRvVXBwZXJDYXNlKCk7XG5cbiAgICBpZiAoWydTVFlMRScsICdMSU5LJ10uaW5kZXhPZih0YWdOYW1lKSA+IC0xKSB7XG4gICAgICBiZWZvcmVDaGlsZCA9IGNoaWxkO1xuICAgIH1cbiAgfVxuXG4gIERPQ1VNRU5ULmhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBiZWZvcmVDaGlsZCk7XG4gIHJldHVybiBjc3M7XG59XG52YXIgaWRQb29sID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcbmZ1bmN0aW9uIG5leHRVbmlxdWVJZCgpIHtcbiAgdmFyIHNpemUgPSAxMjtcbiAgdmFyIGlkID0gJyc7XG5cbiAgd2hpbGUgKHNpemUtLSA+IDApIHtcbiAgICBpZCArPSBpZFBvb2xbTWF0aC5yYW5kb20oKSAqIDYyIHwgMF07XG4gIH1cblxuICByZXR1cm4gaWQ7XG59XG5mdW5jdGlvbiB0b0FycmF5KG9iaikge1xuICB2YXIgYXJyYXkgPSBbXTtcblxuICBmb3IgKHZhciBpID0gKG9iaiB8fCBbXSkubGVuZ3RoID4+PiAwOyBpLS07KSB7XG4gICAgYXJyYXlbaV0gPSBvYmpbaV07XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG5mdW5jdGlvbiBjbGFzc0FycmF5KG5vZGUpIHtcbiAgaWYgKG5vZGUuY2xhc3NMaXN0KSB7XG4gICAgcmV0dXJuIHRvQXJyYXkobm9kZS5jbGFzc0xpc3QpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAobm9kZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpLnNwbGl0KCcgJykuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gaHRtbEVzY2FwZShzdHIpIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KHN0cikucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykucmVwbGFjZSgvJy9nLCAnJiMzOTsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xufVxuZnVuY3Rpb24gam9pbkF0dHJpYnV0ZXMoYXR0cmlidXRlcykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cmlidXRlcyB8fCB7fSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICByZXR1cm4gYWNjICsgXCJcIi5jb25jYXQoYXR0cmlidXRlTmFtZSwgXCI9XFxcIlwiKS5jb25jYXQoaHRtbEVzY2FwZShhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSwgXCJcXFwiIFwiKTtcbiAgfSwgJycpLnRyaW0oKTtcbn1cbmZ1bmN0aW9uIGpvaW5TdHlsZXMoc3R5bGVzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZXMgfHwge30pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzdHlsZU5hbWUpIHtcbiAgICByZXR1cm4gYWNjICsgXCJcIi5jb25jYXQoc3R5bGVOYW1lLCBcIjogXCIpLmNvbmNhdChzdHlsZXNbc3R5bGVOYW1lXS50cmltKCksIFwiO1wiKTtcbiAgfSwgJycpO1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkge1xuICByZXR1cm4gdHJhbnNmb3JtLnNpemUgIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnNpemUgfHwgdHJhbnNmb3JtLnggIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnggfHwgdHJhbnNmb3JtLnkgIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnkgfHwgdHJhbnNmb3JtLnJvdGF0ZSAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0ucm90YXRlIHx8IHRyYW5zZm9ybS5mbGlwWCB8fCB0cmFuc2Zvcm0uZmxpcFk7XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1Gb3JTdmcoX3JlZikge1xuICB2YXIgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm0sXG4gICAgICBjb250YWluZXJXaWR0aCA9IF9yZWYuY29udGFpbmVyV2lkdGgsXG4gICAgICBpY29uV2lkdGggPSBfcmVmLmljb25XaWR0aDtcbiAgdmFyIG91dGVyID0ge1xuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIuY29uY2F0KGNvbnRhaW5lcldpZHRoIC8gMiwgXCIgMjU2KVwiKVxuICB9O1xuICB2YXIgaW5uZXJUcmFuc2xhdGUgPSBcInRyYW5zbGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnggKiAzMiwgXCIsIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgKiAzMiwgXCIpIFwiKTtcbiAgdmFyIGlubmVyU2NhbGUgPSBcInNjYWxlKFwiLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIDE2ICogKHRyYW5zZm9ybS5mbGlwWCA/IC0xIDogMSksIFwiLCBcIikuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gMTYgKiAodHJhbnNmb3JtLmZsaXBZID8gLTEgOiAxKSwgXCIpIFwiKTtcbiAgdmFyIGlubmVyUm90YXRlID0gXCJyb3RhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS5yb3RhdGUsIFwiIDAgMClcIik7XG4gIHZhciBpbm5lciA9IHtcbiAgICB0cmFuc2Zvcm06IFwiXCIuY29uY2F0KGlubmVyVHJhbnNsYXRlLCBcIiBcIikuY29uY2F0KGlubmVyU2NhbGUsIFwiIFwiKS5jb25jYXQoaW5uZXJSb3RhdGUpXG4gIH07XG4gIHZhciBwYXRoID0ge1xuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIuY29uY2F0KGljb25XaWR0aCAvIDIgKiAtMSwgXCIgLTI1NilcIilcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBvdXRlcjogb3V0ZXIsXG4gICAgaW5uZXI6IGlubmVyLFxuICAgIHBhdGg6IHBhdGhcbiAgfTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUZvckNzcyhfcmVmMikge1xuICB2YXIgdHJhbnNmb3JtID0gX3JlZjIudHJhbnNmb3JtLFxuICAgICAgX3JlZjIkd2lkdGggPSBfcmVmMi53aWR0aCxcbiAgICAgIHdpZHRoID0gX3JlZjIkd2lkdGggPT09IHZvaWQgMCA/IFVOSVRTX0lOX0dSSUQgOiBfcmVmMiR3aWR0aCxcbiAgICAgIF9yZWYyJGhlaWdodCA9IF9yZWYyLmhlaWdodCxcbiAgICAgIGhlaWdodCA9IF9yZWYyJGhlaWdodCA9PT0gdm9pZCAwID8gVU5JVFNfSU5fR1JJRCA6IF9yZWYyJGhlaWdodCxcbiAgICAgIF9yZWYyJHN0YXJ0Q2VudGVyZWQgPSBfcmVmMi5zdGFydENlbnRlcmVkLFxuICAgICAgc3RhcnRDZW50ZXJlZCA9IF9yZWYyJHN0YXJ0Q2VudGVyZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIkc3RhcnRDZW50ZXJlZDtcbiAgdmFyIHZhbCA9ICcnO1xuXG4gIGlmIChzdGFydENlbnRlcmVkICYmIElTX0lFKSB7XG4gICAgdmFsICs9IFwidHJhbnNsYXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ueCAvIGQgLSB3aWR0aCAvIDIsIFwiZW0sIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgLyBkIC0gaGVpZ2h0IC8gMiwgXCJlbSkgXCIpO1xuICB9IGVsc2UgaWYgKHN0YXJ0Q2VudGVyZWQpIHtcbiAgICB2YWwgKz0gXCJ0cmFuc2xhdGUoY2FsYygtNTAlICsgXCIuY29uY2F0KHRyYW5zZm9ybS54IC8gZCwgXCJlbSksIGNhbGMoLTUwJSArIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgLyBkLCBcImVtKSkgXCIpO1xuICB9IGVsc2Uge1xuICAgIHZhbCArPSBcInRyYW5zbGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnggLyBkLCBcImVtLCBcIikuY29uY2F0KHRyYW5zZm9ybS55IC8gZCwgXCJlbSkgXCIpO1xuICB9XG5cbiAgdmFsICs9IFwic2NhbGUoXCIuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gZCAqICh0cmFuc2Zvcm0uZmxpcFggPyAtMSA6IDEpLCBcIiwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIGQgKiAodHJhbnNmb3JtLmZsaXBZID8gLTEgOiAxKSwgXCIpIFwiKTtcbiAgdmFsICs9IFwicm90YXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ucm90YXRlLCBcImRlZykgXCIpO1xuICByZXR1cm4gdmFsO1xufVxuXG52YXIgYmFzZVN0eWxlcyA9IFwiOnJvb3QsIDpob3N0IHtcXG4gIC0tZmEtZm9udC1zb2xpZDogbm9ybWFsIDkwMCAxZW0vMSBcXFwiRm9udCBBd2Vzb21lIDYgU29saWRcXFwiO1xcbiAgLS1mYS1mb250LXJlZ3VsYXI6IG5vcm1hbCA0MDAgMWVtLzEgXFxcIkZvbnQgQXdlc29tZSA2IFJlZ3VsYXJcXFwiO1xcbiAgLS1mYS1mb250LWxpZ2h0OiBub3JtYWwgMzAwIDFlbS8xIFxcXCJGb250IEF3ZXNvbWUgNiBMaWdodFxcXCI7XFxuICAtLWZhLWZvbnQtdGhpbjogbm9ybWFsIDEwMCAxZW0vMSBcXFwiRm9udCBBd2Vzb21lIDYgVGhpblxcXCI7XFxuICAtLWZhLWZvbnQtZHVvdG9uZTogbm9ybWFsIDkwMCAxZW0vMSBcXFwiRm9udCBBd2Vzb21lIDYgRHVvdG9uZVxcXCI7XFxuICAtLWZhLWZvbnQtc2hhcnAtc29saWQ6IG5vcm1hbCA5MDAgMWVtLzEgXFxcIkZvbnQgQXdlc29tZSA2IFNoYXJwXFxcIjtcXG4gIC0tZmEtZm9udC1zaGFycC1yZWd1bGFyOiBub3JtYWwgNDAwIDFlbS8xIFxcXCJGb250IEF3ZXNvbWUgNiBTaGFycFxcXCI7XFxuICAtLWZhLWZvbnQtYnJhbmRzOiBub3JtYWwgNDAwIDFlbS8xIFxcXCJGb250IEF3ZXNvbWUgNiBCcmFuZHNcXFwiO1xcbn1cXG5cXG5zdmc6bm90KDpyb290KS5zdmctaW5saW5lLS1mYSwgc3ZnOm5vdCg6aG9zdCkuc3ZnLWlubGluZS0tZmEge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhIHtcXG4gIGRpc3BsYXk6IHZhcigtLWZhLWRpc3BsYXksIGlubGluZS1ibG9jayk7XFxuICBoZWlnaHQ6IDFlbTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgdmVydGljYWwtYWxpZ246IC0wLjEyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtMnhzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiAwLjFlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXhzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiAwZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1zbSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMDcxNDI4NTcwNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtbGcge1xcbiAgdmVydGljYWwtYWxpZ246IC0wLjJlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXhsIHtcXG4gIHZlcnRpY2FsLWFsaWduOiAtMC4yNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtMnhsIHtcXG4gIHZlcnRpY2FsLWFsaWduOiAtMC4zMTI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1wdWxsLWxlZnQge1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1mYS1wdWxsLW1hcmdpbiwgMC4zZW0pO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1wdWxsLXJpZ2h0IHtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1mYS1wdWxsLW1hcmdpbiwgMC4zZW0pO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1saSB7XFxuICB3aWR0aDogdmFyKC0tZmEtbGktd2lkdGgsIDJlbSk7XFxuICB0b3A6IDAuMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLWZ3IHtcXG4gIHdpZHRoOiB2YXIoLS1mYS1mdy13aWR0aCwgMS4yNWVtKTtcXG59XFxuXFxuLmZhLWxheWVycyBzdmcuc3ZnLWlubGluZS0tZmEge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4uZmEtbGF5ZXJzLWNvdW50ZXIsIC5mYS1sYXllcnMtdGV4dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mYS1sYXllcnMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMTI1ZW07XFxuICB3aWR0aDogMWVtO1xcbn1cXG4uZmEtbGF5ZXJzIHN2Zy5zdmctaW5saW5lLS1mYSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5mYS1sYXllcnMtdGV4dCB7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4uZmEtbGF5ZXJzLWNvdW50ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmEtY291bnRlci1iYWNrZ3JvdW5kLWNvbG9yLCAjZmYyNTNhKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWZhLWNvdW50ZXItYm9yZGVyLXJhZGl1cywgMWVtKTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogdmFyKC0tZmEtaW52ZXJzZSwgI2ZmZik7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tZmEtY291bnRlci1saW5lLWhlaWdodCwgMSk7XFxuICBtYXgtd2lkdGg6IHZhcigtLWZhLWNvdW50ZXItbWF4LXdpZHRoLCA1ZW0pO1xcbiAgbWluLXdpZHRoOiB2YXIoLS1mYS1jb3VudGVyLW1pbi13aWR0aCwgMS41ZW0pO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IHZhcigtLWZhLWNvdW50ZXItcGFkZGluZywgMC4yNWVtIDAuNWVtKTtcXG4gIHJpZ2h0OiB2YXIoLS1mYS1yaWdodCwgMCk7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHRvcDogdmFyKC0tZmEtdG9wLCAwKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1mYS1jb3VudGVyLXNjYWxlLCAwLjI1KSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tZmEtY291bnRlci1zY2FsZSwgMC4yNSkpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcXG59XFxuXFxuLmZhLWxheWVycy1ib3R0b20tcmlnaHQge1xcbiAgYm90dG9tOiB2YXIoLS1mYS1ib3R0b20sIDApO1xcbiAgcmlnaHQ6IHZhcigtLWZhLXJpZ2h0LCAwKTtcXG4gIHRvcDogYXV0bztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1mYS1sYXllcnMtc2NhbGUsIDAuMjUpKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1mYS1sYXllcnMtc2NhbGUsIDAuMjUpKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XFxufVxcblxcbi5mYS1sYXllcnMtYm90dG9tLWxlZnQge1xcbiAgYm90dG9tOiB2YXIoLS1mYS1ib3R0b20sIDApO1xcbiAgbGVmdDogdmFyKC0tZmEtbGVmdCwgMCk7XFxuICByaWdodDogYXV0bztcXG4gIHRvcDogYXV0bztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1mYS1sYXllcnMtc2NhbGUsIDAuMjUpKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1mYS1sYXllcnMtc2NhbGUsIDAuMjUpKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbn1cXG5cXG4uZmEtbGF5ZXJzLXRvcC1yaWdodCB7XFxuICB0b3A6IHZhcigtLWZhLXRvcCwgMCk7XFxuICByaWdodDogdmFyKC0tZmEtcmlnaHQsIDApO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKHZhcigtLWZhLWxheWVycy1zY2FsZSwgMC4yNSkpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLWZhLWxheWVycy1zY2FsZSwgMC4yNSkpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcXG59XFxuXFxuLmZhLWxheWVycy10b3AtbGVmdCB7XFxuICBsZWZ0OiB2YXIoLS1mYS1sZWZ0LCAwKTtcXG4gIHJpZ2h0OiBhdXRvO1xcbiAgdG9wOiB2YXIoLS1mYS10b3AsIDApO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKHZhcigtLWZhLWxheWVycy1zY2FsZSwgMC4yNSkpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLWZhLWxheWVycy1zY2FsZSwgMC4yNSkpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxufVxcblxcbi5mYS0xeCB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLmZhLTJ4IHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4uZmEtM3gge1xcbiAgZm9udC1zaXplOiAzZW07XFxufVxcblxcbi5mYS00eCB7XFxuICBmb250LXNpemU6IDRlbTtcXG59XFxuXFxuLmZhLTV4IHtcXG4gIGZvbnQtc2l6ZTogNWVtO1xcbn1cXG5cXG4uZmEtNngge1xcbiAgZm9udC1zaXplOiA2ZW07XFxufVxcblxcbi5mYS03eCB7XFxuICBmb250LXNpemU6IDdlbTtcXG59XFxuXFxuLmZhLTh4IHtcXG4gIGZvbnQtc2l6ZTogOGVtO1xcbn1cXG5cXG4uZmEtOXgge1xcbiAgZm9udC1zaXplOiA5ZW07XFxufVxcblxcbi5mYS0xMHgge1xcbiAgZm9udC1zaXplOiAxMGVtO1xcbn1cXG5cXG4uZmEtMnhzIHtcXG4gIGZvbnQtc2l6ZTogMC42MjVlbTtcXG4gIGxpbmUtaGVpZ2h0OiAwLjFlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiAwLjIyNWVtO1xcbn1cXG5cXG4uZmEteHMge1xcbiAgZm9udC1zaXplOiAwLjc1ZW07XFxuICBsaW5lLWhlaWdodDogMC4wODMzMzMzMzM3ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogMC4xMjVlbTtcXG59XFxuXFxuLmZhLXNtIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcXG4gIGxpbmUtaGVpZ2h0OiAwLjA3MTQyODU3MThlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiAwLjA1MzU3MTQyOTVlbTtcXG59XFxuXFxuLmZhLWxnIHtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgbGluZS1oZWlnaHQ6IDAuMDVlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiAtMC4wNzVlbTtcXG59XFxuXFxuLmZhLXhsIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBsaW5lLWhlaWdodDogMC4wNDE2NjY2NjgyZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMTI1ZW07XFxufVxcblxcbi5mYS0yeGwge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBsaW5lLWhlaWdodDogMC4wMzEyNWVtO1xcbiAgdmVydGljYWwtYWxpZ246IC0wLjE4NzVlbTtcXG59XFxuXFxuLmZhLWZ3IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxLjI1ZW07XFxufVxcblxcbi5mYS11bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tZmEtbGktbWFyZ2luLCAyLjVlbSk7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcbi5mYS11bCA+IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZhLWxpIHtcXG4gIGxlZnQ6IGNhbGModmFyKC0tZmEtbGktd2lkdGgsIDJlbSkgKiAtMSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogdmFyKC0tZmEtbGktd2lkdGgsIDJlbSk7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLmZhLWJvcmRlciB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWZhLWJvcmRlci1jb2xvciwgI2VlZSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1mYS1ib3JkZXItcmFkaXVzLCAwLjFlbSk7XFxuICBib3JkZXItc3R5bGU6IHZhcigtLWZhLWJvcmRlci1zdHlsZSwgc29saWQpO1xcbiAgYm9yZGVyLXdpZHRoOiB2YXIoLS1mYS1ib3JkZXItd2lkdGgsIDAuMDhlbSk7XFxuICBwYWRkaW5nOiB2YXIoLS1mYS1ib3JkZXItcGFkZGluZywgMC4yZW0gMC4yNWVtIDAuMTVlbSk7XFxufVxcblxcbi5mYS1wdWxsLWxlZnQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWZhLXB1bGwtbWFyZ2luLCAwLjNlbSk7XFxufVxcblxcbi5mYS1wdWxsLXJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1mYS1wdWxsLW1hcmdpbiwgMC4zZW0pO1xcbn1cXG5cXG4uZmEtYmVhdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYS1iZWF0O1xcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmEtYmVhdDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1mYS1hbmltYXRpb24tZGVsYXksIDBzKTtcXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1mYS1hbmltYXRpb24tZGVsYXksIDBzKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogdmFyKC0tZmEtYW5pbWF0aW9uLWRpcmVjdGlvbiwgbm9ybWFsKTtcXG4gICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogdmFyKC0tZmEtYW5pbWF0aW9uLWRpcmVjdGlvbiwgbm9ybWFsKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tZHVyYXRpb24sIDFzKTtcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tZHVyYXRpb24sIDFzKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogdmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCwgaW5maW5pdGUpO1xcbiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiB2YXIoLS1mYS1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LCBpbmZpbml0ZSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsIGVhc2UtaW4tb3V0KTtcXG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tZmEtYW5pbWF0aW9uLXRpbWluZywgZWFzZS1pbi1vdXQpO1xcbn1cXG5cXG4uZmEtYm91bmNlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhLWJvdW5jZTtcXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhLWJvdW5jZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1mYS1hbmltYXRpb24tZGVsYXksIDBzKTtcXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1mYS1hbmltYXRpb24tZGVsYXksIDBzKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogdmFyKC0tZmEtYW5pbWF0aW9uLWRpcmVjdGlvbiwgbm9ybWFsKTtcXG4gICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogdmFyKC0tZmEtYW5pbWF0aW9uLWRpcmVjdGlvbiwgbm9ybWFsKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tZHVyYXRpb24sIDFzKTtcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tZHVyYXRpb24sIDFzKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogdmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCwgaW5maW5pdGUpO1xcbiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiB2YXIoLS1mYS1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LCBpbmZpbml0ZSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsIGN1YmljLWJlemllcigwLjI4LCAwLjg0LCAwLjQyLCAxKSk7XFxuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsIGN1YmljLWJlemllcigwLjI4LCAwLjg0LCAwLjQyLCAxKSk7XFxufVxcblxcbi5mYS1mYWRlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhLWZhZGU7XFxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYS1mYWRlO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IHZhcigtLWZhLWFuaW1hdGlvbi1kZWxheSwgMHMpO1xcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IHZhcigtLWZhLWFuaW1hdGlvbi1kZWxheSwgMHMpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tZGlyZWN0aW9uLCBub3JtYWwpO1xcbiAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tZGlyZWN0aW9uLCBub3JtYWwpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IHZhcigtLWZhLWFuaW1hdGlvbi1kdXJhdGlvbiwgMXMpO1xcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IHZhcigtLWZhLWFuaW1hdGlvbi1kdXJhdGlvbiwgMXMpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiB2YXIoLS1mYS1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LCBpbmZpbml0ZSk7XFxuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IHZhcigtLWZhLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsIGluZmluaXRlKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tZmEtYW5pbWF0aW9uLXRpbWluZywgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSk7XFxuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkpO1xcbn1cXG5cXG4uZmEtYmVhdC1mYWRlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhLWJlYXQtZmFkZTtcXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhLWJlYXQtZmFkZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1mYS1hbmltYXRpb24tZGVsYXksIDBzKTtcXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1mYS1hbmltYXRpb24tZGVsYXksIDBzKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogdmFyKC0tZmEtYW5pbWF0aW9uLWRpcmVjdGlvbiwgbm9ybWFsKTtcXG4gICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogdmFyKC0tZmEtYW5pbWF0aW9uLWRpcmVjdGlvbiwgbm9ybWFsKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tZHVyYXRpb24sIDFzKTtcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tZHVyYXRpb24sIDFzKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogdmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCwgaW5maW5pdGUpO1xcbiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiB2YXIoLS1mYS1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LCBpbmZpbml0ZSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkpO1xcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tdGltaW5nLCBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpKTtcXG59XFxuXFxuLmZhLWZsaXAge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmEtZmxpcDtcXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhLWZsaXA7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogdmFyKC0tZmEtYW5pbWF0aW9uLWRlbGF5LCAwcyk7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogdmFyKC0tZmEtYW5pbWF0aW9uLWRlbGF5LCAwcyk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi1kaXJlY3Rpb24sIG5vcm1hbCk7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi1kaXJlY3Rpb24sIG5vcm1hbCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tZmEtYW5pbWF0aW9uLWR1cmF0aW9uLCAxcyk7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tZmEtYW5pbWF0aW9uLWR1cmF0aW9uLCAxcyk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IHZhcigtLWZhLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsIGluZmluaXRlKTtcXG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogdmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCwgaW5maW5pdGUpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tdGltaW5nLCBlYXNlLWluLW91dCk7XFxuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsIGVhc2UtaW4tb3V0KTtcXG59XFxuXFxuLmZhLXNoYWtlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhLXNoYWtlO1xcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmEtc2hha2U7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogdmFyKC0tZmEtYW5pbWF0aW9uLWRlbGF5LCAwcyk7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogdmFyKC0tZmEtYW5pbWF0aW9uLWRlbGF5LCAwcyk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi1kaXJlY3Rpb24sIG5vcm1hbCk7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi1kaXJlY3Rpb24sIG5vcm1hbCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tZmEtYW5pbWF0aW9uLWR1cmF0aW9uLCAxcyk7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tZmEtYW5pbWF0aW9uLWR1cmF0aW9uLCAxcyk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IHZhcigtLWZhLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsIGluZmluaXRlKTtcXG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogdmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCwgaW5maW5pdGUpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tdGltaW5nLCBsaW5lYXIpO1xcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tdGltaW5nLCBsaW5lYXIpO1xcbn1cXG5cXG4uZmEtc3BpbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYS1zcGluO1xcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmEtc3BpbjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1mYS1hbmltYXRpb24tZGVsYXksIDBzKTtcXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1mYS1hbmltYXRpb24tZGVsYXksIDBzKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogdmFyKC0tZmEtYW5pbWF0aW9uLWRpcmVjdGlvbiwgbm9ybWFsKTtcXG4gICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogdmFyKC0tZmEtYW5pbWF0aW9uLWRpcmVjdGlvbiwgbm9ybWFsKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tZHVyYXRpb24sIDJzKTtcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tZHVyYXRpb24sIDJzKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogdmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCwgaW5maW5pdGUpO1xcbiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiB2YXIoLS1mYS1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LCBpbmZpbml0ZSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsIGxpbmVhcik7XFxuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsIGxpbmVhcik7XFxufVxcblxcbi5mYS1zcGluLXJldmVyc2Uge1xcbiAgLS1mYS1hbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xcbn1cXG5cXG4uZmEtcHVsc2UsXFxuLmZhLXNwaW4tcHVsc2Uge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmEtc3BpbjtcXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhLXNwaW47XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi1kaXJlY3Rpb24sIG5vcm1hbCk7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi1kaXJlY3Rpb24sIG5vcm1hbCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tZmEtYW5pbWF0aW9uLWR1cmF0aW9uLCAxcyk7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tZmEtYW5pbWF0aW9uLWR1cmF0aW9uLCAxcyk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IHZhcigtLWZhLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsIGluZmluaXRlKTtcXG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogdmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCwgaW5maW5pdGUpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tdGltaW5nLCBzdGVwcyg4KSk7XFxuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsIHN0ZXBzKDgpKTtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIC5mYS1iZWF0LFxcbi5mYS1ib3VuY2UsXFxuLmZhLWZhZGUsXFxuLmZhLWJlYXQtZmFkZSxcXG4uZmEtZmxpcCxcXG4uZmEtcHVsc2UsXFxuLmZhLXNoYWtlLFxcbi5mYS1zcGluLFxcbi5mYS1zcGluLXB1bHNlIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xbXM7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMW1zO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMW1zO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMW1zO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhLWJlYXQge1xcbiAgMCUsIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgNDUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKHZhcigtLWZhLWJlYXQtc2NhbGUsIDEuMjUpKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLWZhLWJlYXQtc2NhbGUsIDEuMjUpKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYS1iZWF0IHtcXG4gIDAlLCA5MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDQ1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1mYS1iZWF0LXNjYWxlLCAxLjI1KSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1mYS1iZWF0LXNjYWxlLCAxLjI1KSk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmYS1ib3VuY2Uge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuICAxMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUodmFyKC0tZmEtYm91bmNlLXN0YXJ0LXNjYWxlLXgsIDEuMSksIHZhcigtLWZhLWJvdW5jZS1zdGFydC1zY2FsZS15LCAwLjkpKSB0cmFuc2xhdGVZKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tZmEtYm91bmNlLXN0YXJ0LXNjYWxlLXgsIDEuMSksIHZhcigtLWZhLWJvdW5jZS1zdGFydC1zY2FsZS15LCAwLjkpKSB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbiAgMzAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKHZhcigtLWZhLWJvdW5jZS1qdW1wLXNjYWxlLXgsIDAuOSksIHZhcigtLWZhLWJvdW5jZS1qdW1wLXNjYWxlLXksIDEuMSkpIHRyYW5zbGF0ZVkodmFyKC0tZmEtYm91bmNlLWhlaWdodCwgLTAuNWVtKSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1mYS1ib3VuY2UtanVtcC1zY2FsZS14LCAwLjkpLCB2YXIoLS1mYS1ib3VuY2UtanVtcC1zY2FsZS15LCAxLjEpKSB0cmFuc2xhdGVZKHZhcigtLWZhLWJvdW5jZS1oZWlnaHQsIC0wLjVlbSkpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKHZhcigtLWZhLWJvdW5jZS1sYW5kLXNjYWxlLXgsIDEuMDUpLCB2YXIoLS1mYS1ib3VuY2UtbGFuZC1zY2FsZS15LCAwLjk1KSkgdHJhbnNsYXRlWSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLWZhLWJvdW5jZS1sYW5kLXNjYWxlLXgsIDEuMDUpLCB2YXIoLS1mYS1ib3VuY2UtbGFuZC1zY2FsZS15LCAwLjk1KSkgdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG4gIDU3JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKHZhcigtLWZhLWJvdW5jZS1yZWJvdW5kLCAtMC4xMjVlbSkpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSh2YXIoLS1mYS1ib3VuY2UtcmVib3VuZCwgLTAuMTI1ZW0pKTtcXG4gIH1cXG4gIDY0JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmEtYm91bmNlIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbiAgMTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKHZhcigtLWZhLWJvdW5jZS1zdGFydC1zY2FsZS14LCAxLjEpLCB2YXIoLS1mYS1ib3VuY2Utc3RhcnQtc2NhbGUteSwgMC45KSkgdHJhbnNsYXRlWSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLWZhLWJvdW5jZS1zdGFydC1zY2FsZS14LCAxLjEpLCB2YXIoLS1mYS1ib3VuY2Utc3RhcnQtc2NhbGUteSwgMC45KSkgdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG4gIDMwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1mYS1ib3VuY2UtanVtcC1zY2FsZS14LCAwLjkpLCB2YXIoLS1mYS1ib3VuY2UtanVtcC1zY2FsZS15LCAxLjEpKSB0cmFuc2xhdGVZKHZhcigtLWZhLWJvdW5jZS1oZWlnaHQsIC0wLjVlbSkpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tZmEtYm91bmNlLWp1bXAtc2NhbGUteCwgMC45KSwgdmFyKC0tZmEtYm91bmNlLWp1bXAtc2NhbGUteSwgMS4xKSkgdHJhbnNsYXRlWSh2YXIoLS1mYS1ib3VuY2UtaGVpZ2h0LCAtMC41ZW0pKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1mYS1ib3VuY2UtbGFuZC1zY2FsZS14LCAxLjA1KSwgdmFyKC0tZmEtYm91bmNlLWxhbmQtc2NhbGUteSwgMC45NSkpIHRyYW5zbGF0ZVkoMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1mYS1ib3VuY2UtbGFuZC1zY2FsZS14LCAxLjA1KSwgdmFyKC0tZmEtYm91bmNlLWxhbmQtc2NhbGUteSwgMC45NSkpIHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuICA1NyUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSh2YXIoLS1mYS1ib3VuY2UtcmVib3VuZCwgLTAuMTI1ZW0pKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkodmFyKC0tZmEtYm91bmNlLXJlYm91bmQsIC0wLjEyNWVtKSk7XFxuICB9XFxuICA2NCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmEtZmFkZSB7XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1mYS1mYWRlLW9wYWNpdHksIDAuNCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmEtZmFkZSB7XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1mYS1mYWRlLW9wYWNpdHksIDAuNCk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmYS1iZWF0LWZhZGUge1xcbiAgMCUsIDEwMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1mYS1iZWF0LWZhZGUtb3BhY2l0eSwgMC40KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUodmFyKC0tZmEtYmVhdC1mYWRlLXNjYWxlLCAxLjEyNSkpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tZmEtYmVhdC1mYWRlLXNjYWxlLCAxLjEyNSkpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhLWJlYXQtZmFkZSB7XFxuICAwJSwgMTAwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLWZhLWJlYXQtZmFkZS1vcGFjaXR5LCAwLjQpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1mYS1iZWF0LWZhZGUtc2NhbGUsIDEuMTI1KSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1mYS1iZWF0LWZhZGUtc2NhbGUsIDEuMTI1KSk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmYS1mbGlwIHtcXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCh2YXIoLS1mYS1mbGlwLXgsIDApLCB2YXIoLS1mYS1mbGlwLXksIDEpLCB2YXIoLS1mYS1mbGlwLXosIDApLCB2YXIoLS1mYS1mbGlwLWFuZ2xlLCAtMTgwZGVnKSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCh2YXIoLS1mYS1mbGlwLXgsIDApLCB2YXIoLS1mYS1mbGlwLXksIDEpLCB2YXIoLS1mYS1mbGlwLXosIDApLCB2YXIoLS1mYS1mbGlwLWFuZ2xlLCAtMTgwZGVnKSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmEtZmxpcCB7XFxuICA1MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QodmFyKC0tZmEtZmxpcC14LCAwKSwgdmFyKC0tZmEtZmxpcC15LCAxKSwgdmFyKC0tZmEtZmxpcC16LCAwKSwgdmFyKC0tZmEtZmxpcC1hbmdsZSwgLTE4MGRlZykpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QodmFyKC0tZmEtZmxpcC14LCAwKSwgdmFyKC0tZmEtZmxpcC15LCAxKSwgdmFyKC0tZmEtZmxpcC16LCAwKSwgdmFyKC0tZmEtZmxpcC1hbmdsZSwgLTE4MGRlZykpO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmEtc2hha2Uge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcXG4gIH1cXG4gIDQlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xcbiAgfVxcbiAgOCUsIDI0JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE4ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMThkZWcpO1xcbiAgfVxcbiAgMTIlLCAyOCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxOGRlZyk7XFxuICB9XFxuICAxNiUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0yMmRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTIyZGVnKTtcXG4gIH1cXG4gIDIwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjJkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIyZGVnKTtcXG4gIH1cXG4gIDMyJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEyZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTJkZWcpO1xcbiAgfVxcbiAgMzYlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMmRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTJkZWcpO1xcbiAgfVxcbiAgNDAlLCAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYS1zaGFrZSB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xcbiAgfVxcbiAgNCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XFxuICB9XFxuICA4JSwgMjQlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMThkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xOGRlZyk7XFxuICB9XFxuICAxMiUsIDI4JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMThkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4ZGVnKTtcXG4gIH1cXG4gIDE2JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTIyZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjJkZWcpO1xcbiAgfVxcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMmRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjJkZWcpO1xcbiAgfVxcbiAgMzIlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTJkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMmRlZyk7XFxuICB9XFxuICAzNiUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEyZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMmRlZyk7XFxuICB9XFxuICA0MCUsIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmEtc3BpbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmEtc3BpbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbi5mYS1yb3RhdGUtOTAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLmZhLXJvdGF0ZS0xODAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uZmEtcm90YXRlLTI3MCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxufVxcblxcbi5mYS1mbGlwLWhvcml6b250YWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxufVxcblxcbi5mYS1mbGlwLXZlcnRpY2FsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xcbn1cXG5cXG4uZmEtZmxpcC1ib3RoLFxcbi5mYS1mbGlwLWhvcml6b250YWwuZmEtZmxpcC12ZXJ0aWNhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIC0xKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgLTEpO1xcbn1cXG5cXG4uZmEtcm90YXRlLWJ5IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUodmFyKC0tZmEtcm90YXRlLWFuZ2xlLCBub25lKSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKHZhcigtLWZhLXJvdGF0ZS1hbmdsZSwgbm9uZSkpO1xcbn1cXG5cXG4uZmEtc3RhY2sge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGhlaWdodDogMmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIuNWVtO1xcbn1cXG5cXG4uZmEtc3RhY2stMXgsXFxuLmZhLXN0YWNrLTJ4IHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IHZhcigtLWZhLXN0YWNrLXotaW5kZXgsIGF1dG8pO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEuZmEtc3RhY2stMXgge1xcbiAgaGVpZ2h0OiAxZW07XFxuICB3aWR0aDogMS4yNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtc3RhY2stMngge1xcbiAgaGVpZ2h0OiAyZW07XFxuICB3aWR0aDogMi41ZW07XFxufVxcblxcbi5mYS1pbnZlcnNlIHtcXG4gIGNvbG9yOiB2YXIoLS1mYS1pbnZlcnNlLCAjZmZmKTtcXG59XFxuXFxuLnNyLW9ubHksXFxuLmZhLXNyLW9ubHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJvcmRlci13aWR0aDogMDtcXG59XFxuXFxuLnNyLW9ubHktZm9jdXNhYmxlOm5vdCg6Zm9jdXMpLFxcbi5mYS1zci1vbmx5LWZvY3VzYWJsZTpub3QoOmZvY3VzKSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEgLmZhLXByaW1hcnkge1xcbiAgZmlsbDogdmFyKC0tZmEtcHJpbWFyeS1jb2xvciwgY3VycmVudENvbG9yKTtcXG4gIG9wYWNpdHk6IHZhcigtLWZhLXByaW1hcnktb3BhY2l0eSwgMSk7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYSAuZmEtc2Vjb25kYXJ5IHtcXG4gIGZpbGw6IHZhcigtLWZhLXNlY29uZGFyeS1jb2xvciwgY3VycmVudENvbG9yKTtcXG4gIG9wYWNpdHk6IHZhcigtLWZhLXNlY29uZGFyeS1vcGFjaXR5LCAwLjQpO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEuZmEtc3dhcC1vcGFjaXR5IC5mYS1wcmltYXJ5IHtcXG4gIG9wYWNpdHk6IHZhcigtLWZhLXNlY29uZGFyeS1vcGFjaXR5LCAwLjQpO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEuZmEtc3dhcC1vcGFjaXR5IC5mYS1zZWNvbmRhcnkge1xcbiAgb3BhY2l0eTogdmFyKC0tZmEtcHJpbWFyeS1vcGFjaXR5LCAxKTtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhIG1hc2sgLmZhLXByaW1hcnksXFxuLnN2Zy1pbmxpbmUtLWZhIG1hc2sgLmZhLXNlY29uZGFyeSB7XFxuICBmaWxsOiBibGFjaztcXG59XFxuXFxuLmZhZC5mYS1pbnZlcnNlLFxcbi5mYS1kdW90b25lLmZhLWludmVyc2Uge1xcbiAgY29sb3I6IHZhcigtLWZhLWludmVyc2UsICNmZmYpO1xcbn1cIjtcblxuZnVuY3Rpb24gY3NzKCkge1xuICB2YXIgZGNwID0gREVGQVVMVF9DU1NfUFJFRklYO1xuICB2YXIgZHJjID0gREVGQVVMVF9SRVBMQUNFTUVOVF9DTEFTUztcbiAgdmFyIGZwID0gY29uZmlnLmNzc1ByZWZpeDtcbiAgdmFyIHJjID0gY29uZmlnLnJlcGxhY2VtZW50Q2xhc3M7XG4gIHZhciBzID0gYmFzZVN0eWxlcztcblxuICBpZiAoZnAgIT09IGRjcCB8fCByYyAhPT0gZHJjKSB7XG4gICAgdmFyIGRQYXR0ID0gbmV3IFJlZ0V4cChcIlxcXFwuXCIuY29uY2F0KGRjcCwgXCJcXFxcLVwiKSwgJ2cnKTtcbiAgICB2YXIgY3VzdG9tUHJvcFBhdHQgPSBuZXcgUmVnRXhwKFwiXFxcXC0tXCIuY29uY2F0KGRjcCwgXCJcXFxcLVwiKSwgJ2cnKTtcbiAgICB2YXIgclBhdHQgPSBuZXcgUmVnRXhwKFwiXFxcXC5cIi5jb25jYXQoZHJjKSwgJ2cnKTtcbiAgICBzID0gcy5yZXBsYWNlKGRQYXR0LCBcIi5cIi5jb25jYXQoZnAsIFwiLVwiKSkucmVwbGFjZShjdXN0b21Qcm9wUGF0dCwgXCItLVwiLmNvbmNhdChmcCwgXCItXCIpKS5yZXBsYWNlKHJQYXR0LCBcIi5cIi5jb25jYXQocmMpKTtcbiAgfVxuXG4gIHJldHVybiBzO1xufVxuXG52YXIgX2Nzc0luc2VydGVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGVuc3VyZUNzcygpIHtcbiAgaWYgKGNvbmZpZy5hdXRvQWRkQ3NzICYmICFfY3NzSW5zZXJ0ZWQpIHtcbiAgICBpbnNlcnRDc3MoY3NzKCkpO1xuICAgIF9jc3NJbnNlcnRlZCA9IHRydWU7XG4gIH1cbn1cblxudmFyIEluamVjdENTUyA9IHtcbiAgbWl4b3V0OiBmdW5jdGlvbiBtaXhvdXQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbToge1xuICAgICAgICBjc3M6IGNzcyxcbiAgICAgICAgaW5zZXJ0Q3NzOiBlbnN1cmVDc3NcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICBob29rczogZnVuY3Rpb24gaG9va3MoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJlZm9yZURPTUVsZW1lbnRDcmVhdGlvbjogZnVuY3Rpb24gYmVmb3JlRE9NRWxlbWVudENyZWF0aW9uKCkge1xuICAgICAgICBlbnN1cmVDc3MoKTtcbiAgICAgIH0sXG4gICAgICBiZWZvcmVJMnN2ZzogZnVuY3Rpb24gYmVmb3JlSTJzdmcoKSB7XG4gICAgICAgIGVuc3VyZUNzcygpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG5cbnZhciB3ID0gV0lORE9XIHx8IHt9O1xuaWYgKCF3W05BTUVTUEFDRV9JREVOVElGSUVSXSkgd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0gPSB7fTtcbmlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc3R5bGVzKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zdHlsZXMgPSB7fTtcbmlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uaG9va3MpIHdbTkFNRVNQQUNFX0lERU5USUZJRVJdLmhvb2tzID0ge307XG5pZiAoIXdbTkFNRVNQQUNFX0lERU5USUZJRVJdLnNoaW1zKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zaGltcyA9IFtdO1xudmFyIG5hbWVzcGFjZSA9IHdbTkFNRVNQQUNFX0lERU5USUZJRVJdO1xuXG52YXIgZnVuY3Rpb25zID0gW107XG5cbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICBET0NVTUVOVC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbGlzdGVuZXIpO1xuICBsb2FkZWQgPSAxO1xuICBmdW5jdGlvbnMubWFwKGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiBmbigpO1xuICB9KTtcbn07XG5cbnZhciBsb2FkZWQgPSBmYWxzZTtcblxuaWYgKElTX0RPTSkge1xuICBsb2FkZWQgPSAoRE9DVU1FTlQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsID8gL15sb2FkZWR8XmMvIDogL15sb2FkZWR8Xml8XmMvKS50ZXN0KERPQ1VNRU5ULnJlYWR5U3RhdGUpO1xuICBpZiAoIWxvYWRlZCkgRE9DVU1FTlQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGxpc3RlbmVyKTtcbn1cblxuZnVuY3Rpb24gZG9tcmVhZHkgKGZuKSB7XG4gIGlmICghSVNfRE9NKSByZXR1cm47XG4gIGxvYWRlZCA/IHNldFRpbWVvdXQoZm4sIDApIDogZnVuY3Rpb25zLnB1c2goZm4pO1xufVxuXG5mdW5jdGlvbiB0b0h0bWwoYWJzdHJhY3ROb2Rlcykge1xuICB2YXIgdGFnID0gYWJzdHJhY3ROb2Rlcy50YWcsXG4gICAgICBfYWJzdHJhY3ROb2RlcyRhdHRyaWIgPSBhYnN0cmFjdE5vZGVzLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzID0gX2Fic3RyYWN0Tm9kZXMkYXR0cmliID09PSB2b2lkIDAgPyB7fSA6IF9hYnN0cmFjdE5vZGVzJGF0dHJpYixcbiAgICAgIF9hYnN0cmFjdE5vZGVzJGNoaWxkciA9IGFic3RyYWN0Tm9kZXMuY2hpbGRyZW4sXG4gICAgICBjaGlsZHJlbiA9IF9hYnN0cmFjdE5vZGVzJGNoaWxkciA9PT0gdm9pZCAwID8gW10gOiBfYWJzdHJhY3ROb2RlcyRjaGlsZHI7XG5cbiAgaWYgKHR5cGVvZiBhYnN0cmFjdE5vZGVzID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBodG1sRXNjYXBlKGFic3RyYWN0Tm9kZXMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIjxcIi5jb25jYXQodGFnLCBcIiBcIikuY29uY2F0KGpvaW5BdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpLCBcIj5cIikuY29uY2F0KGNoaWxkcmVuLm1hcCh0b0h0bWwpLmpvaW4oJycpLCBcIjwvXCIpLmNvbmNhdCh0YWcsIFwiPlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpY29uRnJvbU1hcHBpbmcobWFwcGluZywgcHJlZml4LCBpY29uTmFtZSkge1xuICBpZiAobWFwcGluZyAmJiBtYXBwaW5nW3ByZWZpeF0gJiYgbWFwcGluZ1twcmVmaXhdW2ljb25OYW1lXSkge1xuICAgIHJldHVybiB7XG4gICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICAgIGljb246IG1hcHBpbmdbcHJlZml4XVtpY29uTmFtZV1cbiAgICB9O1xuICB9XG59XG5cbi8qKlxuICogSW50ZXJuYWwgaGVscGVyIHRvIGJpbmQgYSBmdW5jdGlvbiBrbm93biB0byBoYXZlIDQgYXJndW1lbnRzXG4gKiB0byBhIGdpdmVuIGNvbnRleHQuXG4gKi9cblxudmFyIGJpbmRJbnRlcm5hbDQgPSBmdW5jdGlvbiBiaW5kSW50ZXJuYWw0KGZ1bmMsIHRoaXNDb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0NvbnRleHQsIGEsIGIsIGMsIGQpO1xuICB9O1xufTtcblxuLyoqXG4gKiAjIFJlZHVjZVxuICpcbiAqIEEgZmFzdCBvYmplY3QgYC5yZWR1Y2UoKWAgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHN1YmplY3QgICAgICBUaGUgb2JqZWN0IHRvIHJlZHVjZSBvdmVyLlxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuICAgICAgICAgICBUaGUgcmVkdWNlciBmdW5jdGlvbi5cbiAqIEBwYXJhbSAge21peGVkfSAgICBpbml0aWFsVmFsdWUgVGhlIGluaXRpYWwgdmFsdWUgZm9yIHRoZSByZWR1Y2VyLCBkZWZhdWx0cyB0byBzdWJqZWN0WzBdLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHRoaXNDb250ZXh0ICBUaGUgY29udGV4dCBmb3IgdGhlIHJlZHVjZXIuXG4gKiBAcmV0dXJuIHttaXhlZH0gICAgICAgICAgICAgICAgIFRoZSBmaW5hbCByZXN1bHQuXG4gKi9cblxuXG52YXIgcmVkdWNlID0gZnVuY3Rpb24gZmFzdFJlZHVjZU9iamVjdChzdWJqZWN0LCBmbiwgaW5pdGlhbFZhbHVlLCB0aGlzQ29udGV4dCkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHN1YmplY3QpLFxuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGgsXG4gICAgICBpdGVyYXRvciA9IHRoaXNDb250ZXh0ICE9PSB1bmRlZmluZWQgPyBiaW5kSW50ZXJuYWw0KGZuLCB0aGlzQ29udGV4dCkgOiBmbixcbiAgICAgIGksXG4gICAgICBrZXksXG4gICAgICByZXN1bHQ7XG5cbiAgaWYgKGluaXRpYWxWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaSA9IDE7XG4gICAgcmVzdWx0ID0gc3ViamVjdFtrZXlzWzBdXTtcbiAgfSBlbHNlIHtcbiAgICBpID0gMDtcbiAgICByZXN1bHQgPSBpbml0aWFsVmFsdWU7XG4gIH1cblxuICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0ga2V5c1tpXTtcbiAgICByZXN1bHQgPSBpdGVyYXRvcihyZXN1bHQsIHN1YmplY3Rba2V5XSwga2V5LCBzdWJqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIHVjczJkZWNvZGUoKSBhbmQgY29kZVBvaW50QXQoKSBhcmUgYm90aCB3b3JrcyBvZiBNYXRoaWFzIEJ5bmVucyBhbmQgbGljZW5zZWQgdW5kZXIgTUlUXG4gKlxuICogQ29weXJpZ2h0IE1hdGhpYXMgQnluZW5zIDxodHRwczovL21hdGhpYXNieW5lbnMuYmUvPlxuXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcbiAqIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuICogXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4gKiB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4gKiBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cbiAqIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xuICogdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICogaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFXG4gKiBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OXG4gKiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT05cbiAqIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5mdW5jdGlvbiB1Y3MyZGVjb2RlKHN0cmluZykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIHZhciBjb3VudGVyID0gMDtcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXG4gICAgaWYgKHZhbHVlID49IDB4RDgwMCAmJiB2YWx1ZSA8PSAweERCRkYgJiYgY291bnRlciA8IGxlbmd0aCkge1xuICAgICAgdmFyIGV4dHJhID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblxuICAgICAgaWYgKChleHRyYSAmIDB4RkMwMCkgPT0gMHhEQzAwKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgICAgIG91dHB1dC5wdXNoKCgodmFsdWUgJiAweDNGRikgPDwgMTApICsgKGV4dHJhICYgMHgzRkYpICsgMHgxMDAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQucHVzaCh2YWx1ZSk7XG4gICAgICAgIGNvdW50ZXItLTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIHRvSGV4KHVuaWNvZGUpIHtcbiAgdmFyIGRlY29kZWQgPSB1Y3MyZGVjb2RlKHVuaWNvZGUpO1xuICByZXR1cm4gZGVjb2RlZC5sZW5ndGggPT09IDEgPyBkZWNvZGVkWzBdLnRvU3RyaW5nKDE2KSA6IG51bGw7XG59XG5mdW5jdGlvbiBjb2RlUG9pbnRBdChzdHJpbmcsIGluZGV4KSB7XG4gIHZhciBzaXplID0gc3RyaW5nLmxlbmd0aDtcbiAgdmFyIGZpcnN0ID0gc3RyaW5nLmNoYXJDb2RlQXQoaW5kZXgpO1xuICB2YXIgc2Vjb25kO1xuXG4gIGlmIChmaXJzdCA+PSAweEQ4MDAgJiYgZmlyc3QgPD0gMHhEQkZGICYmIHNpemUgPiBpbmRleCArIDEpIHtcbiAgICBzZWNvbmQgPSBzdHJpbmcuY2hhckNvZGVBdChpbmRleCArIDEpO1xuXG4gICAgaWYgKHNlY29uZCA+PSAweERDMDAgJiYgc2Vjb25kIDw9IDB4REZGRikge1xuICAgICAgcmV0dXJuIChmaXJzdCAtIDB4RDgwMCkgKiAweDQwMCArIHNlY29uZCAtIDB4REMwMCArIDB4MTAwMDA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpcnN0O1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVJY29ucyhpY29ucykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoaWNvbnMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBpY29uTmFtZSkge1xuICAgIHZhciBpY29uID0gaWNvbnNbaWNvbk5hbWVdO1xuICAgIHZhciBleHBhbmRlZCA9ICEhaWNvbi5pY29uO1xuXG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICBhY2NbaWNvbi5pY29uTmFtZV0gPSBpY29uLmljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjY1tpY29uTmFtZV0gPSBpY29uO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lSWNvbnMocHJlZml4LCBpY29ucykge1xuICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgdmFyIF9wYXJhbXMkc2tpcEhvb2tzID0gcGFyYW1zLnNraXBIb29rcyxcbiAgICAgIHNraXBIb29rcyA9IF9wYXJhbXMkc2tpcEhvb2tzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wYXJhbXMkc2tpcEhvb2tzO1xuICB2YXIgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUljb25zKGljb25zKTtcblxuICBpZiAodHlwZW9mIG5hbWVzcGFjZS5ob29rcy5hZGRQYWNrID09PSAnZnVuY3Rpb24nICYmICFza2lwSG9va3MpIHtcbiAgICBuYW1lc3BhY2UuaG9va3MuYWRkUGFjayhwcmVmaXgsIG5vcm1hbGl6ZUljb25zKGljb25zKSk7XG4gIH0gZWxzZSB7XG4gICAgbmFtZXNwYWNlLnN0eWxlc1twcmVmaXhdID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIG5hbWVzcGFjZS5zdHlsZXNbcHJlZml4XSB8fCB7fSksIG5vcm1hbGl6ZWQpO1xuICB9XG4gIC8qKlxuICAgKiBGb250IEF3ZXNvbWUgNCB1c2VkIHRoZSBwcmVmaXggb2YgYGZhYCBmb3IgYWxsIGljb25zLiBXaXRoIHRoZSBpbnRyb2R1Y3Rpb25cbiAgICogb2YgbmV3IHN0eWxlcyB3ZSBuZWVkZWQgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIHRoZW0uIFByZWZpeCBgZmFgIGlzIG5vdyBhbiBhbGlhc1xuICAgKiBmb3IgYGZhc2Agc28gd2UnbGwgZWFzZSB0aGUgdXBncmFkZSBwcm9jZXNzIGZvciBvdXIgdXNlcnMgYnkgYXV0b21hdGljYWxseSBkZWZpbmluZ1xuICAgKiB0aGlzIGFzIHdlbGwuXG4gICAqL1xuXG5cbiAgaWYgKHByZWZpeCA9PT0gJ2ZhcycpIHtcbiAgICBkZWZpbmVJY29ucygnZmEnLCBpY29ucyk7XG4gIH1cbn1cblxudmFyIGR1b3RvbmVQYXRoUmUgPSBbLyojX19QVVJFX18qL193cmFwUmVnRXhwKC9wYXRoIGQ9XCIoKD86KD8hXCIpW1xcc1xcU10pKylcIi4qcGF0aCBkPVwiKCg/Oig/IVwiKVtcXHNcXFNdKSspXCIvLCB7XG4gIGQxOiAxLFxuICBkMjogMlxufSksIC8qI19fUFVSRV9fKi9fd3JhcFJlZ0V4cCgvcGF0aCBjbGFzcz1cIigoPzooPyFcIilbXFxzXFxTXSkrKVwiLipkPVwiKCg/Oig/IVwiKVtcXHNcXFNdKSspXCIuKnBhdGggY2xhc3M9XCIoKD86KD8hXCIpW1xcc1xcU10pKylcIi4qZD1cIigoPzooPyFcIilbXFxzXFxTXSkrKVwiLywge1xuICBjbHMxOiAxLFxuICBkMTogMixcbiAgY2xzMjogMyxcbiAgZDI6IDRcbn0pLCAvKiNfX1BVUkVfXyovX3dyYXBSZWdFeHAoL3BhdGggY2xhc3M9XCIoKD86KD8hXCIpW1xcc1xcU10pKylcIi4qZD1cIigoPzooPyFcIilbXFxzXFxTXSkrKVwiLywge1xuICBjbHMxOiAxLFxuICBkMTogMlxufSldO1xuXG52YXIgX0xPTkdfU1RZTEUsIF9QUkVGSVhFUywgX1BSRUZJWEVTX0ZPUl9GQU1JTFk7XG52YXIgc3R5bGVzID0gbmFtZXNwYWNlLnN0eWxlcyxcbiAgICBzaGltcyA9IG5hbWVzcGFjZS5zaGltcztcbnZhciBMT05HX1NUWUxFID0gKF9MT05HX1NUWUxFID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfTE9OR19TVFlMRSwgRkFNSUxZX0NMQVNTSUMsIE9iamVjdC52YWx1ZXMoUFJFRklYX1RPX0xPTkdfU1RZTEVbRkFNSUxZX0NMQVNTSUNdKSksIF9kZWZpbmVQcm9wZXJ0eShfTE9OR19TVFlMRSwgRkFNSUxZX1NIQVJQLCBPYmplY3QudmFsdWVzKFBSRUZJWF9UT19MT05HX1NUWUxFW0ZBTUlMWV9TSEFSUF0pKSwgX0xPTkdfU1RZTEUpO1xudmFyIF9kZWZhdWx0VXNhYmxlUHJlZml4ID0gbnVsbDtcbnZhciBfYnlVbmljb2RlID0ge307XG52YXIgX2J5TGlnYXR1cmUgPSB7fTtcbnZhciBfYnlPbGROYW1lID0ge307XG52YXIgX2J5T2xkVW5pY29kZSA9IHt9O1xudmFyIF9ieUFsaWFzID0ge307XG52YXIgUFJFRklYRVMgPSAoX1BSRUZJWEVTID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfUFJFRklYRVMsIEZBTUlMWV9DTEFTU0lDLCBPYmplY3Qua2V5cyhQUkVGSVhfVE9fU1RZTEVbRkFNSUxZX0NMQVNTSUNdKSksIF9kZWZpbmVQcm9wZXJ0eShfUFJFRklYRVMsIEZBTUlMWV9TSEFSUCwgT2JqZWN0LmtleXMoUFJFRklYX1RPX1NUWUxFW0ZBTUlMWV9TSEFSUF0pKSwgX1BSRUZJWEVTKTtcblxuZnVuY3Rpb24gaXNSZXNlcnZlZChuYW1lKSB7XG4gIHJldHVybiB+UkVTRVJWRURfQ0xBU1NFUy5pbmRleE9mKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRJY29uTmFtZShjc3NQcmVmaXgsIGNscykge1xuICB2YXIgcGFydHMgPSBjbHMuc3BsaXQoJy0nKTtcbiAgdmFyIHByZWZpeCA9IHBhcnRzWzBdO1xuICB2YXIgaWNvbk5hbWUgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCctJyk7XG5cbiAgaWYgKHByZWZpeCA9PT0gY3NzUHJlZml4ICYmIGljb25OYW1lICE9PSAnJyAmJiAhaXNSZXNlcnZlZChpY29uTmFtZSkpIHtcbiAgICByZXR1cm4gaWNvbk5hbWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbnZhciBidWlsZCA9IGZ1bmN0aW9uIGJ1aWxkKCkge1xuICB2YXIgbG9va3VwID0gZnVuY3Rpb24gbG9va3VwKHJlZHVjZXIpIHtcbiAgICByZXR1cm4gcmVkdWNlKHN0eWxlcywgZnVuY3Rpb24gKG8sIHN0eWxlLCBwcmVmaXgpIHtcbiAgICAgIG9bcHJlZml4XSA9IHJlZHVjZShzdHlsZSwgcmVkdWNlciwge30pO1xuICAgICAgcmV0dXJuIG87XG4gICAgfSwge30pO1xuICB9O1xuXG4gIF9ieVVuaWNvZGUgPSBsb29rdXAoZnVuY3Rpb24gKGFjYywgaWNvbiwgaWNvbk5hbWUpIHtcbiAgICBpZiAoaWNvblszXSkge1xuICAgICAgYWNjW2ljb25bM11dID0gaWNvbk5hbWU7XG4gICAgfVxuXG4gICAgaWYgKGljb25bMl0pIHtcbiAgICAgIHZhciBhbGlhc2VzID0gaWNvblsyXS5maWx0ZXIoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSAnbnVtYmVyJztcbiAgICAgIH0pO1xuICAgICAgYWxpYXNlcy5mb3JFYWNoKGZ1bmN0aW9uIChhbGlhcykge1xuICAgICAgICBhY2NbYWxpYXMudG9TdHJpbmcoMTYpXSA9IGljb25OYW1lO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSk7XG4gIF9ieUxpZ2F0dXJlID0gbG9va3VwKGZ1bmN0aW9uIChhY2MsIGljb24sIGljb25OYW1lKSB7XG4gICAgYWNjW2ljb25OYW1lXSA9IGljb25OYW1lO1xuXG4gICAgaWYgKGljb25bMl0pIHtcbiAgICAgIHZhciBhbGlhc2VzID0gaWNvblsyXS5maWx0ZXIoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSAnc3RyaW5nJztcbiAgICAgIH0pO1xuICAgICAgYWxpYXNlcy5mb3JFYWNoKGZ1bmN0aW9uIChhbGlhcykge1xuICAgICAgICBhY2NbYWxpYXNdID0gaWNvbk5hbWU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9KTtcbiAgX2J5QWxpYXMgPSBsb29rdXAoZnVuY3Rpb24gKGFjYywgaWNvbiwgaWNvbk5hbWUpIHtcbiAgICB2YXIgYWxpYXNlcyA9IGljb25bMl07XG4gICAgYWNjW2ljb25OYW1lXSA9IGljb25OYW1lO1xuICAgIGFsaWFzZXMuZm9yRWFjaChmdW5jdGlvbiAoYWxpYXMpIHtcbiAgICAgIGFjY1thbGlhc10gPSBpY29uTmFtZTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWNjO1xuICB9KTsgLy8gSWYgd2UgaGF2ZSBhIEtpdCwgd2UgY2FuJ3QgZGV0ZXJtaW5lIGlmIHJlZ3VsYXIgaXMgYXZhaWxhYmxlIHNpbmNlIHdlXG4gIC8vIGNvdWxkIGJlIGF1dG8tZmV0Y2hpbmcgaXQuIFdlJ2xsIGhhdmUgdG8gYXNzdW1lIHRoYXQgaXQgaXMgYXZhaWxhYmxlLlxuXG4gIHZhciBoYXNSZWd1bGFyID0gJ2ZhcicgaW4gc3R5bGVzIHx8IGNvbmZpZy5hdXRvRmV0Y2hTdmc7XG4gIHZhciBzaGltTG9va3VwcyA9IHJlZHVjZShzaGltcywgZnVuY3Rpb24gKGFjYywgc2hpbSkge1xuICAgIHZhciBtYXliZU5hbWVNYXliZVVuaWNvZGUgPSBzaGltWzBdO1xuICAgIHZhciBwcmVmaXggPSBzaGltWzFdO1xuICAgIHZhciBpY29uTmFtZSA9IHNoaW1bMl07XG5cbiAgICBpZiAocHJlZml4ID09PSAnZmFyJyAmJiAhaGFzUmVndWxhcikge1xuICAgICAgcHJlZml4ID0gJ2Zhcyc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBtYXliZU5hbWVNYXliZVVuaWNvZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBhY2MubmFtZXNbbWF5YmVOYW1lTWF5YmVVbmljb2RlXSA9IHtcbiAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgIGljb25OYW1lOiBpY29uTmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG1heWJlTmFtZU1heWJlVW5pY29kZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGFjYy51bmljb2Rlc1ttYXliZU5hbWVNYXliZVVuaWNvZGUudG9TdHJpbmcoMTYpXSA9IHtcbiAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgIGljb25OYW1lOiBpY29uTmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7XG4gICAgbmFtZXM6IHt9LFxuICAgIHVuaWNvZGVzOiB7fVxuICB9KTtcbiAgX2J5T2xkTmFtZSA9IHNoaW1Mb29rdXBzLm5hbWVzO1xuICBfYnlPbGRVbmljb2RlID0gc2hpbUxvb2t1cHMudW5pY29kZXM7XG4gIF9kZWZhdWx0VXNhYmxlUHJlZml4ID0gZ2V0Q2Fub25pY2FsUHJlZml4KGNvbmZpZy5zdHlsZURlZmF1bHQsIHtcbiAgICBmYW1pbHk6IGNvbmZpZy5mYW1pbHlEZWZhdWx0XG4gIH0pO1xufTtcbm9uQ2hhbmdlKGZ1bmN0aW9uIChjKSB7XG4gIF9kZWZhdWx0VXNhYmxlUHJlZml4ID0gZ2V0Q2Fub25pY2FsUHJlZml4KGMuc3R5bGVEZWZhdWx0LCB7XG4gICAgZmFtaWx5OiBjb25maWcuZmFtaWx5RGVmYXVsdFxuICB9KTtcbn0pO1xuYnVpbGQoKTtcbmZ1bmN0aW9uIGJ5VW5pY29kZShwcmVmaXgsIHVuaWNvZGUpIHtcbiAgcmV0dXJuIChfYnlVbmljb2RlW3ByZWZpeF0gfHwge30pW3VuaWNvZGVdO1xufVxuZnVuY3Rpb24gYnlMaWdhdHVyZShwcmVmaXgsIGxpZ2F0dXJlKSB7XG4gIHJldHVybiAoX2J5TGlnYXR1cmVbcHJlZml4XSB8fCB7fSlbbGlnYXR1cmVdO1xufVxuZnVuY3Rpb24gYnlBbGlhcyhwcmVmaXgsIGFsaWFzKSB7XG4gIHJldHVybiAoX2J5QWxpYXNbcHJlZml4XSB8fCB7fSlbYWxpYXNdO1xufVxuZnVuY3Rpb24gYnlPbGROYW1lKG5hbWUpIHtcbiAgcmV0dXJuIF9ieU9sZE5hbWVbbmFtZV0gfHwge1xuICAgIHByZWZpeDogbnVsbCxcbiAgICBpY29uTmFtZTogbnVsbFxuICB9O1xufVxuZnVuY3Rpb24gYnlPbGRVbmljb2RlKHVuaWNvZGUpIHtcbiAgdmFyIG9sZFVuaWNvZGUgPSBfYnlPbGRVbmljb2RlW3VuaWNvZGVdO1xuICB2YXIgbmV3VW5pY29kZSA9IGJ5VW5pY29kZSgnZmFzJywgdW5pY29kZSk7XG4gIHJldHVybiBvbGRVbmljb2RlIHx8IChuZXdVbmljb2RlID8ge1xuICAgIHByZWZpeDogJ2ZhcycsXG4gICAgaWNvbk5hbWU6IG5ld1VuaWNvZGVcbiAgfSA6IG51bGwpIHx8IHtcbiAgICBwcmVmaXg6IG51bGwsXG4gICAgaWNvbk5hbWU6IG51bGxcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldERlZmF1bHRVc2FibGVQcmVmaXgoKSB7XG4gIHJldHVybiBfZGVmYXVsdFVzYWJsZVByZWZpeDtcbn1cbnZhciBlbXB0eUNhbm9uaWNhbEljb24gPSBmdW5jdGlvbiBlbXB0eUNhbm9uaWNhbEljb24oKSB7XG4gIHJldHVybiB7XG4gICAgcHJlZml4OiBudWxsLFxuICAgIGljb25OYW1lOiBudWxsLFxuICAgIHJlc3Q6IFtdXG4gIH07XG59O1xuZnVuY3Rpb24gZ2V0Q2Fub25pY2FsUHJlZml4KHN0eWxlT3JQcmVmaXgpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfcGFyYW1zJGZhbWlseSA9IHBhcmFtcy5mYW1pbHksXG4gICAgICBmYW1pbHkgPSBfcGFyYW1zJGZhbWlseSA9PT0gdm9pZCAwID8gRkFNSUxZX0NMQVNTSUMgOiBfcGFyYW1zJGZhbWlseTtcbiAgdmFyIHN0eWxlID0gUFJFRklYX1RPX1NUWUxFW2ZhbWlseV1bc3R5bGVPclByZWZpeF07XG4gIHZhciBwcmVmaXggPSBTVFlMRV9UT19QUkVGSVhbZmFtaWx5XVtzdHlsZU9yUHJlZml4XSB8fCBTVFlMRV9UT19QUkVGSVhbZmFtaWx5XVtzdHlsZV07XG4gIHZhciBkZWZpbmVkID0gc3R5bGVPclByZWZpeCBpbiBuYW1lc3BhY2Uuc3R5bGVzID8gc3R5bGVPclByZWZpeCA6IG51bGw7XG4gIHJldHVybiBwcmVmaXggfHwgZGVmaW5lZCB8fCBudWxsO1xufVxudmFyIFBSRUZJWEVTX0ZPUl9GQU1JTFkgPSAoX1BSRUZJWEVTX0ZPUl9GQU1JTFkgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9QUkVGSVhFU19GT1JfRkFNSUxZLCBGQU1JTFlfQ0xBU1NJQywgT2JqZWN0LmtleXMoUFJFRklYX1RPX0xPTkdfU1RZTEVbRkFNSUxZX0NMQVNTSUNdKSksIF9kZWZpbmVQcm9wZXJ0eShfUFJFRklYRVNfRk9SX0ZBTUlMWSwgRkFNSUxZX1NIQVJQLCBPYmplY3Qua2V5cyhQUkVGSVhfVE9fTE9OR19TVFlMRVtGQU1JTFlfU0hBUlBdKSksIF9QUkVGSVhFU19GT1JfRkFNSUxZKTtcbmZ1bmN0aW9uIGdldENhbm9uaWNhbEljb24odmFsdWVzKSB7XG4gIHZhciBfZmFtUHJvcHM7XG5cbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfcGFyYW1zJHNraXBMb29rdXBzID0gcGFyYW1zLnNraXBMb29rdXBzLFxuICAgICAgc2tpcExvb2t1cHMgPSBfcGFyYW1zJHNraXBMb29rdXBzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wYXJhbXMkc2tpcExvb2t1cHM7XG4gIHZhciBmYW1Qcm9wcyA9IChfZmFtUHJvcHMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9mYW1Qcm9wcywgRkFNSUxZX0NMQVNTSUMsIFwiXCIuY29uY2F0KGNvbmZpZy5jc3NQcmVmaXgsIFwiLVwiKS5jb25jYXQoRkFNSUxZX0NMQVNTSUMpKSwgX2RlZmluZVByb3BlcnR5KF9mYW1Qcm9wcywgRkFNSUxZX1NIQVJQLCBcIlwiLmNvbmNhdChjb25maWcuY3NzUHJlZml4LCBcIi1cIikuY29uY2F0KEZBTUlMWV9TSEFSUCkpLCBfZmFtUHJvcHMpO1xuICB2YXIgZ2l2ZW5QcmVmaXggPSBudWxsO1xuICB2YXIgZmFtaWx5ID0gRkFNSUxZX0NMQVNTSUM7XG5cbiAgaWYgKHZhbHVlcy5pbmNsdWRlcyhmYW1Qcm9wc1tGQU1JTFlfQ0xBU1NJQ10pIHx8IHZhbHVlcy5zb21lKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIFBSRUZJWEVTX0ZPUl9GQU1JTFlbRkFNSUxZX0NMQVNTSUNdLmluY2x1ZGVzKHYpO1xuICB9KSkge1xuICAgIGZhbWlseSA9IEZBTUlMWV9DTEFTU0lDO1xuICB9XG5cbiAgaWYgKHZhbHVlcy5pbmNsdWRlcyhmYW1Qcm9wc1tGQU1JTFlfU0hBUlBdKSB8fCB2YWx1ZXMuc29tZShmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBQUkVGSVhFU19GT1JfRkFNSUxZW0ZBTUlMWV9TSEFSUF0uaW5jbHVkZXModik7XG4gIH0pKSB7XG4gICAgZmFtaWx5ID0gRkFNSUxZX1NIQVJQO1xuICB9XG5cbiAgdmFyIGNhbm9uaWNhbCA9IHZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY2xzKSB7XG4gICAgdmFyIGljb25OYW1lID0gZ2V0SWNvbk5hbWUoY29uZmlnLmNzc1ByZWZpeCwgY2xzKTtcblxuICAgIGlmIChzdHlsZXNbY2xzXSkge1xuICAgICAgY2xzID0gTE9OR19TVFlMRVtmYW1pbHldLmluY2x1ZGVzKGNscykgPyBMT05HX1NUWUxFX1RPX1BSRUZJWFtmYW1pbHldW2Nsc10gOiBjbHM7XG4gICAgICBnaXZlblByZWZpeCA9IGNscztcbiAgICAgIGFjYy5wcmVmaXggPSBjbHM7XG4gICAgfSBlbHNlIGlmIChQUkVGSVhFU1tmYW1pbHldLmluZGV4T2YoY2xzKSA+IC0xKSB7XG4gICAgICBnaXZlblByZWZpeCA9IGNscztcbiAgICAgIGFjYy5wcmVmaXggPSBnZXRDYW5vbmljYWxQcmVmaXgoY2xzLCB7XG4gICAgICAgIGZhbWlseTogZmFtaWx5XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGljb25OYW1lKSB7XG4gICAgICBhY2MuaWNvbk5hbWUgPSBpY29uTmFtZTtcbiAgICB9IGVsc2UgaWYgKGNscyAhPT0gY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MgJiYgY2xzICE9PSBmYW1Qcm9wc1tGQU1JTFlfQ0xBU1NJQ10gJiYgY2xzICE9PSBmYW1Qcm9wc1tGQU1JTFlfU0hBUlBdKSB7XG4gICAgICBhY2MucmVzdC5wdXNoKGNscyk7XG4gICAgfVxuXG4gICAgaWYgKCFza2lwTG9va3VwcyAmJiBhY2MucHJlZml4ICYmIGFjYy5pY29uTmFtZSkge1xuICAgICAgdmFyIHNoaW0gPSBnaXZlblByZWZpeCA9PT0gJ2ZhJyA/IGJ5T2xkTmFtZShhY2MuaWNvbk5hbWUpIDoge307XG4gICAgICB2YXIgYWxpYXNJY29uTmFtZSA9IGJ5QWxpYXMoYWNjLnByZWZpeCwgYWNjLmljb25OYW1lKTtcblxuICAgICAgaWYgKHNoaW0ucHJlZml4KSB7XG4gICAgICAgIGdpdmVuUHJlZml4ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgYWNjLmljb25OYW1lID0gc2hpbS5pY29uTmFtZSB8fCBhbGlhc0ljb25OYW1lIHx8IGFjYy5pY29uTmFtZTtcbiAgICAgIGFjYy5wcmVmaXggPSBzaGltLnByZWZpeCB8fCBhY2MucHJlZml4O1xuXG4gICAgICBpZiAoYWNjLnByZWZpeCA9PT0gJ2ZhcicgJiYgIXN0eWxlc1snZmFyJ10gJiYgc3R5bGVzWydmYXMnXSAmJiAhY29uZmlnLmF1dG9GZXRjaFN2Zykge1xuICAgICAgICAvLyBBbGxvdyBhIGZhbGxiYWNrIGZyb20gdGhlIHJlZ3VsYXIgc3R5bGUgdG8gc29saWQgaWYgcmVndWxhciBpcyBub3QgYXZhaWxhYmxlXG4gICAgICAgIC8vIGJ1dCBvbmx5IGlmIHdlIGFyZW4ndCBhdXRvLWZldGNoaW5nIFNWR3NcbiAgICAgICAgYWNjLnByZWZpeCA9ICdmYXMnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIGVtcHR5Q2Fub25pY2FsSWNvbigpKTtcblxuICBpZiAodmFsdWVzLmluY2x1ZGVzKCdmYS1icmFuZHMnKSB8fCB2YWx1ZXMuaW5jbHVkZXMoJ2ZhYicpKSB7XG4gICAgY2Fub25pY2FsLnByZWZpeCA9ICdmYWInO1xuICB9XG5cbiAgaWYgKHZhbHVlcy5pbmNsdWRlcygnZmEtZHVvdG9uZScpIHx8IHZhbHVlcy5pbmNsdWRlcygnZmFkJykpIHtcbiAgICBjYW5vbmljYWwucHJlZml4ID0gJ2ZhZCc7XG4gIH1cblxuICBpZiAoIWNhbm9uaWNhbC5wcmVmaXggJiYgZmFtaWx5ID09PSBGQU1JTFlfU0hBUlAgJiYgKHN0eWxlc1snZmFzcyddIHx8IGNvbmZpZy5hdXRvRmV0Y2hTdmcpKSB7XG4gICAgY2Fub25pY2FsLnByZWZpeCA9ICdmYXNzJztcbiAgICBjYW5vbmljYWwuaWNvbk5hbWUgPSBieUFsaWFzKGNhbm9uaWNhbC5wcmVmaXgsIGNhbm9uaWNhbC5pY29uTmFtZSkgfHwgY2Fub25pY2FsLmljb25OYW1lO1xuICB9XG5cbiAgaWYgKGNhbm9uaWNhbC5wcmVmaXggPT09ICdmYScgfHwgZ2l2ZW5QcmVmaXggPT09ICdmYScpIHtcbiAgICAvLyBUaGUgZmEgcHJlZml4IGlzIG5vdCBjYW5vbmljYWwuIFNvIGlmIGl0IGhhcyBtYWRlIGl0IHRocm91Z2ggdW50aWwgdGhpcyBwb2ludFxuICAgIC8vIHdlIHdpbGwgc2hpZnQgaXQgdG8gdGhlIGNvcnJlY3QgcHJlZml4LlxuICAgIGNhbm9uaWNhbC5wcmVmaXggPSBnZXREZWZhdWx0VXNhYmxlUHJlZml4KCkgfHwgJ2Zhcyc7XG4gIH1cblxuICByZXR1cm4gY2Fub25pY2FsO1xufVxuXG52YXIgTGlicmFyeSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExpYnJhcnkoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpYnJhcnkpO1xuXG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IHt9O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExpYnJhcnksIFt7XG4gICAga2V5OiBcImFkZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZGVmaW5pdGlvbnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGRlZmluaXRpb25zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWRkaXRpb25zID0gZGVmaW5pdGlvbnMucmVkdWNlKHRoaXMuX3B1bGxEZWZpbml0aW9ucywge30pO1xuICAgICAgT2JqZWN0LmtleXMoYWRkaXRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX3RoaXMuZGVmaW5pdGlvbnNba2V5XSA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBfdGhpcy5kZWZpbml0aW9uc1trZXldIHx8IHt9KSwgYWRkaXRpb25zW2tleV0pO1xuICAgICAgICBkZWZpbmVJY29ucyhrZXksIGFkZGl0aW9uc1trZXldKTsgLy8gVE9ETyBjYW4gd2Ugc3RvcCBkb2luZyB0aGlzPyBXZSBjYW4ndCBnZXQgdGhlIGljb25zIGJ5ICdmYS1zb2xpZCcgYW55IGxvbmdlciBzbyB0aGlzIHByb2JhYmx5IG5lZWRzIHRvIGNoYW5nZVxuXG4gICAgICAgIHZhciBsb25nUHJlZml4ID0gUFJFRklYX1RPX0xPTkdfU1RZTEVbRkFNSUxZX0NMQVNTSUNdW2tleV07XG4gICAgICAgIGlmIChsb25nUHJlZml4KSBkZWZpbmVJY29ucyhsb25nUHJlZml4LCBhZGRpdGlvbnNba2V5XSk7XG4gICAgICAgIGJ1aWxkKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLmRlZmluaXRpb25zID0ge307XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9wdWxsRGVmaW5pdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3B1bGxEZWZpbml0aW9ucyhhZGRpdGlvbnMsIGRlZmluaXRpb24pIHtcbiAgICAgIHZhciBub3JtYWxpemVkID0gZGVmaW5pdGlvbi5wcmVmaXggJiYgZGVmaW5pdGlvbi5pY29uTmFtZSAmJiBkZWZpbml0aW9uLmljb24gPyB7XG4gICAgICAgIDA6IGRlZmluaXRpb25cbiAgICAgIH0gOiBkZWZpbml0aW9uO1xuICAgICAgT2JqZWN0LmtleXMobm9ybWFsaXplZCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIF9ub3JtYWxpemVkJGtleSA9IG5vcm1hbGl6ZWRba2V5XSxcbiAgICAgICAgICAgIHByZWZpeCA9IF9ub3JtYWxpemVkJGtleS5wcmVmaXgsXG4gICAgICAgICAgICBpY29uTmFtZSA9IF9ub3JtYWxpemVkJGtleS5pY29uTmFtZSxcbiAgICAgICAgICAgIGljb24gPSBfbm9ybWFsaXplZCRrZXkuaWNvbjtcbiAgICAgICAgdmFyIGFsaWFzZXMgPSBpY29uWzJdO1xuICAgICAgICBpZiAoIWFkZGl0aW9uc1twcmVmaXhdKSBhZGRpdGlvbnNbcHJlZml4XSA9IHt9O1xuXG4gICAgICAgIGlmIChhbGlhc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBhbGlhc2VzLmZvckVhY2goZnVuY3Rpb24gKGFsaWFzKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFsaWFzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBhZGRpdGlvbnNbcHJlZml4XVthbGlhc10gPSBpY29uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkaXRpb25zW3ByZWZpeF1baWNvbk5hbWVdID0gaWNvbjtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFkZGl0aW9ucztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGlicmFyeTtcbn0oKTtcblxudmFyIF9wbHVnaW5zID0gW107XG52YXIgX2hvb2tzID0ge307XG52YXIgcHJvdmlkZXJzID0ge307XG52YXIgZGVmYXVsdFByb3ZpZGVyS2V5cyA9IE9iamVjdC5rZXlzKHByb3ZpZGVycyk7XG5mdW5jdGlvbiByZWdpc3RlclBsdWdpbnMobmV4dFBsdWdpbnMsIF9yZWYpIHtcbiAgdmFyIG9iaiA9IF9yZWYubWl4b3V0c1RvO1xuICBfcGx1Z2lucyA9IG5leHRQbHVnaW5zO1xuICBfaG9va3MgPSB7fTtcbiAgT2JqZWN0LmtleXMocHJvdmlkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgaWYgKGRlZmF1bHRQcm92aWRlcktleXMuaW5kZXhPZihrKSA9PT0gLTEpIHtcbiAgICAgIGRlbGV0ZSBwcm92aWRlcnNba107XG4gICAgfVxuICB9KTtcblxuICBfcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICB2YXIgbWl4b3V0ID0gcGx1Z2luLm1peG91dCA/IHBsdWdpbi5taXhvdXQoKSA6IHt9O1xuICAgIE9iamVjdC5rZXlzKG1peG91dCkuZm9yRWFjaChmdW5jdGlvbiAodGspIHtcbiAgICAgIGlmICh0eXBlb2YgbWl4b3V0W3RrXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvYmpbdGtdID0gbWl4b3V0W3RrXTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90eXBlb2YobWl4b3V0W3RrXSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG1peG91dFt0a10pLmZvckVhY2goZnVuY3Rpb24gKHNrKSB7XG4gICAgICAgICAgaWYgKCFvYmpbdGtdKSB7XG4gICAgICAgICAgICBvYmpbdGtdID0ge307XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb2JqW3RrXVtza10gPSBtaXhvdXRbdGtdW3NrXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocGx1Z2luLmhvb2tzKSB7XG4gICAgICB2YXIgaG9va3MgPSBwbHVnaW4uaG9va3MoKTtcbiAgICAgIE9iamVjdC5rZXlzKGhvb2tzKS5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgICAgIGlmICghX2hvb2tzW2hvb2tdKSB7XG4gICAgICAgICAgX2hvb2tzW2hvb2tdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBfaG9va3NbaG9va10ucHVzaChob29rc1tob29rXSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocGx1Z2luLnByb3ZpZGVzKSB7XG4gICAgICBwbHVnaW4ucHJvdmlkZXMocHJvdmlkZXJzKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBjaGFpbkhvb2tzKGhvb2ssIGFjY3VtdWxhdG9yKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBob29rRm5zID0gX2hvb2tzW2hvb2tdIHx8IFtdO1xuICBob29rRm5zLmZvckVhY2goZnVuY3Rpb24gKGhvb2tGbikge1xuICAgIGFjY3VtdWxhdG9yID0gaG9va0ZuLmFwcGx5KG51bGwsIFthY2N1bXVsYXRvcl0uY29uY2F0KGFyZ3MpKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWNhbGxcbiAgfSk7XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cbmZ1bmN0aW9uIGNhbGxIb29rcyhob29rKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHZhciBob29rRm5zID0gX2hvb2tzW2hvb2tdIHx8IFtdO1xuICBob29rRm5zLmZvckVhY2goZnVuY3Rpb24gKGhvb2tGbikge1xuICAgIGhvb2tGbi5hcHBseShudWxsLCBhcmdzKTtcbiAgfSk7XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBjYWxsUHJvdmlkZWQoKSB7XG4gIHZhciBob29rID0gYXJndW1lbnRzWzBdO1xuICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHJldHVybiBwcm92aWRlcnNbaG9va10gPyBwcm92aWRlcnNbaG9va10uYXBwbHkobnVsbCwgYXJncykgOiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJY29uRGVmaW5pdGlvbihpY29uTG9va3VwKSB7XG4gIGlmIChpY29uTG9va3VwLnByZWZpeCA9PT0gJ2ZhJykge1xuICAgIGljb25Mb29rdXAucHJlZml4ID0gJ2Zhcyc7XG4gIH1cblxuICB2YXIgaWNvbk5hbWUgPSBpY29uTG9va3VwLmljb25OYW1lO1xuICB2YXIgcHJlZml4ID0gaWNvbkxvb2t1cC5wcmVmaXggfHwgZ2V0RGVmYXVsdFVzYWJsZVByZWZpeCgpO1xuICBpZiAoIWljb25OYW1lKSByZXR1cm47XG4gIGljb25OYW1lID0gYnlBbGlhcyhwcmVmaXgsIGljb25OYW1lKSB8fCBpY29uTmFtZTtcbiAgcmV0dXJuIGljb25Gcm9tTWFwcGluZyhsaWJyYXJ5LmRlZmluaXRpb25zLCBwcmVmaXgsIGljb25OYW1lKSB8fCBpY29uRnJvbU1hcHBpbmcobmFtZXNwYWNlLnN0eWxlcywgcHJlZml4LCBpY29uTmFtZSk7XG59XG52YXIgbGlicmFyeSA9IG5ldyBMaWJyYXJ5KCk7XG52YXIgbm9BdXRvID0gZnVuY3Rpb24gbm9BdXRvKCkge1xuICBjb25maWcuYXV0b1JlcGxhY2VTdmcgPSBmYWxzZTtcbiAgY29uZmlnLm9ic2VydmVNdXRhdGlvbnMgPSBmYWxzZTtcbiAgY2FsbEhvb2tzKCdub0F1dG8nKTtcbn07XG52YXIgZG9tID0ge1xuICBpMnN2ZzogZnVuY3Rpb24gaTJzdmcoKSB7XG4gICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBpZiAoSVNfRE9NKSB7XG4gICAgICBjYWxsSG9va3MoJ2JlZm9yZUkyc3ZnJywgcGFyYW1zKTtcbiAgICAgIGNhbGxQcm92aWRlZCgncHNldWRvRWxlbWVudHMyc3ZnJywgcGFyYW1zKTtcbiAgICAgIHJldHVybiBjYWxsUHJvdmlkZWQoJ2kyc3ZnJywgcGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdPcGVyYXRpb24gcmVxdWlyZXMgYSBET00gb2Ygc29tZSBraW5kLicpO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IGZ1bmN0aW9uIHdhdGNoKCkge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHZhciBhdXRvUmVwbGFjZVN2Z1Jvb3QgPSBwYXJhbXMuYXV0b1JlcGxhY2VTdmdSb290O1xuXG4gICAgaWYgKGNvbmZpZy5hdXRvUmVwbGFjZVN2ZyA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbmZpZy5hdXRvUmVwbGFjZVN2ZyA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uZmlnLm9ic2VydmVNdXRhdGlvbnMgPSB0cnVlO1xuICAgIGRvbXJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgIGF1dG9SZXBsYWNlKHtcbiAgICAgICAgYXV0b1JlcGxhY2VTdmdSb290OiBhdXRvUmVwbGFjZVN2Z1Jvb3RcbiAgICAgIH0pO1xuICAgICAgY2FsbEhvb2tzKCd3YXRjaCcsIHBhcmFtcyk7XG4gICAgfSk7XG4gIH1cbn07XG52YXIgcGFyc2UgPSB7XG4gIGljb246IGZ1bmN0aW9uIGljb24oX2ljb24pIHtcbiAgICBpZiAoX2ljb24gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChfdHlwZW9mKF9pY29uKSA9PT0gJ29iamVjdCcgJiYgX2ljb24ucHJlZml4ICYmIF9pY29uLmljb25OYW1lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcmVmaXg6IF9pY29uLnByZWZpeCxcbiAgICAgICAgaWNvbk5hbWU6IGJ5QWxpYXMoX2ljb24ucHJlZml4LCBfaWNvbi5pY29uTmFtZSkgfHwgX2ljb24uaWNvbk5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoX2ljb24pICYmIF9pY29uLmxlbmd0aCA9PT0gMikge1xuICAgICAgdmFyIGljb25OYW1lID0gX2ljb25bMV0uaW5kZXhPZignZmEtJykgPT09IDAgPyBfaWNvblsxXS5zbGljZSgzKSA6IF9pY29uWzFdO1xuICAgICAgdmFyIHByZWZpeCA9IGdldENhbm9uaWNhbFByZWZpeChfaWNvblswXSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgaWNvbk5hbWU6IGJ5QWxpYXMocHJlZml4LCBpY29uTmFtZSkgfHwgaWNvbk5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfaWNvbiA9PT0gJ3N0cmluZycgJiYgKF9pY29uLmluZGV4T2YoXCJcIi5jb25jYXQoY29uZmlnLmNzc1ByZWZpeCwgXCItXCIpKSA+IC0xIHx8IF9pY29uLm1hdGNoKElDT05fU0VMRUNUSU9OX1NZTlRBWF9QQVRURVJOKSkpIHtcbiAgICAgIHZhciBjYW5vbmljYWxJY29uID0gZ2V0Q2Fub25pY2FsSWNvbihfaWNvbi5zcGxpdCgnICcpLCB7XG4gICAgICAgIHNraXBMb29rdXBzOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByZWZpeDogY2Fub25pY2FsSWNvbi5wcmVmaXggfHwgZ2V0RGVmYXVsdFVzYWJsZVByZWZpeCgpLFxuICAgICAgICBpY29uTmFtZTogYnlBbGlhcyhjYW5vbmljYWxJY29uLnByZWZpeCwgY2Fub25pY2FsSWNvbi5pY29uTmFtZSkgfHwgY2Fub25pY2FsSWNvbi5pY29uTmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIF9pY29uID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIF9wcmVmaXggPSBnZXREZWZhdWx0VXNhYmxlUHJlZml4KCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByZWZpeDogX3ByZWZpeCxcbiAgICAgICAgaWNvbk5hbWU6IGJ5QWxpYXMoX3ByZWZpeCwgX2ljb24pIHx8IF9pY29uXG4gICAgICB9O1xuICAgIH1cbiAgfVxufTtcbnZhciBhcGkgPSB7XG4gIG5vQXV0bzogbm9BdXRvLFxuICBjb25maWc6IGNvbmZpZyxcbiAgZG9tOiBkb20sXG4gIHBhcnNlOiBwYXJzZSxcbiAgbGlicmFyeTogbGlicmFyeSxcbiAgZmluZEljb25EZWZpbml0aW9uOiBmaW5kSWNvbkRlZmluaXRpb24sXG4gIHRvSHRtbDogdG9IdG1sXG59O1xuXG52YXIgYXV0b1JlcGxhY2UgPSBmdW5jdGlvbiBhdXRvUmVwbGFjZSgpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBfcGFyYW1zJGF1dG9SZXBsYWNlU3YgPSBwYXJhbXMuYXV0b1JlcGxhY2VTdmdSb290LFxuICAgICAgYXV0b1JlcGxhY2VTdmdSb290ID0gX3BhcmFtcyRhdXRvUmVwbGFjZVN2ID09PSB2b2lkIDAgPyBET0NVTUVOVCA6IF9wYXJhbXMkYXV0b1JlcGxhY2VTdjtcbiAgaWYgKChPYmplY3Qua2V5cyhuYW1lc3BhY2Uuc3R5bGVzKS5sZW5ndGggPiAwIHx8IGNvbmZpZy5hdXRvRmV0Y2hTdmcpICYmIElTX0RPTSAmJiBjb25maWcuYXV0b1JlcGxhY2VTdmcpIGFwaS5kb20uaTJzdmcoe1xuICAgIG5vZGU6IGF1dG9SZXBsYWNlU3ZnUm9vdFxuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGRvbVZhcmlhbnRzKHZhbCwgYWJzdHJhY3RDcmVhdG9yKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWwsICdhYnN0cmFjdCcsIHtcbiAgICBnZXQ6IGFic3RyYWN0Q3JlYXRvclxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbCwgJ2h0bWwnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdmFsLmFic3RyYWN0Lm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gdG9IdG1sKGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbCwgJ25vZGUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAoIUlTX0RPTSkgcmV0dXJuO1xuICAgICAgdmFyIGNvbnRhaW5lciA9IERPQ1VNRU5ULmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHZhbC5odG1sO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lci5jaGlsZHJlbjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiBhc0ljb24gKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIG1haW4gPSBfcmVmLm1haW4sXG4gICAgICBtYXNrID0gX3JlZi5tYXNrLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIHN0eWxlcyA9IF9yZWYuc3R5bGVzLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm07XG5cbiAgaWYgKHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pICYmIG1haW4uZm91bmQgJiYgIW1hc2suZm91bmQpIHtcbiAgICB2YXIgd2lkdGggPSBtYWluLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBtYWluLmhlaWdodDtcbiAgICB2YXIgb2Zmc2V0ID0ge1xuICAgICAgeDogd2lkdGggLyBoZWlnaHQgLyAyLFxuICAgICAgeTogMC41XG4gICAgfTtcbiAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gam9pblN0eWxlcyhfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgc3R5bGVzKSwge30sIHtcbiAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogXCJcIi5jb25jYXQob2Zmc2V0LnggKyB0cmFuc2Zvcm0ueCAvIDE2LCBcImVtIFwiKS5jb25jYXQob2Zmc2V0LnkgKyB0cmFuc2Zvcm0ueSAvIDE2LCBcImVtXCIpXG4gICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIFt7XG4gICAgdGFnOiAnc3ZnJyxcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9XTtcbn1cblxuZnVuY3Rpb24gYXNTeW1ib2wgKF9yZWYpIHtcbiAgdmFyIHByZWZpeCA9IF9yZWYucHJlZml4LFxuICAgICAgaWNvbk5hbWUgPSBfcmVmLmljb25OYW1lLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIHN5bWJvbCA9IF9yZWYuc3ltYm9sO1xuICB2YXIgaWQgPSBzeW1ib2wgPT09IHRydWUgPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiLVwiKS5jb25jYXQoY29uZmlnLmNzc1ByZWZpeCwgXCItXCIpLmNvbmNhdChpY29uTmFtZSkgOiBzeW1ib2w7XG4gIHJldHVybiBbe1xuICAgIHRhZzogJ3N2ZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgc3R5bGU6ICdkaXNwbGF5OiBub25lOydcbiAgICB9LFxuICAgIGNoaWxkcmVuOiBbe1xuICAgICAgdGFnOiAnc3ltYm9sJyxcbiAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBhdHRyaWJ1dGVzKSwge30sIHtcbiAgICAgICAgaWQ6IGlkXG4gICAgICB9KSxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgIH1dXG4gIH1dO1xufVxuXG5mdW5jdGlvbiBtYWtlSW5saW5lU3ZnQWJzdHJhY3QocGFyYW1zKSB7XG4gIHZhciBfcGFyYW1zJGljb25zID0gcGFyYW1zLmljb25zLFxuICAgICAgbWFpbiA9IF9wYXJhbXMkaWNvbnMubWFpbixcbiAgICAgIG1hc2sgPSBfcGFyYW1zJGljb25zLm1hc2ssXG4gICAgICBwcmVmaXggPSBwYXJhbXMucHJlZml4LFxuICAgICAgaWNvbk5hbWUgPSBwYXJhbXMuaWNvbk5hbWUsXG4gICAgICB0cmFuc2Zvcm0gPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgc3ltYm9sID0gcGFyYW1zLnN5bWJvbCxcbiAgICAgIHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgbWFza0lkID0gcGFyYW1zLm1hc2tJZCxcbiAgICAgIHRpdGxlSWQgPSBwYXJhbXMudGl0bGVJZCxcbiAgICAgIGV4dHJhID0gcGFyYW1zLmV4dHJhLFxuICAgICAgX3BhcmFtcyR3YXRjaGFibGUgPSBwYXJhbXMud2F0Y2hhYmxlLFxuICAgICAgd2F0Y2hhYmxlID0gX3BhcmFtcyR3YXRjaGFibGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyR3YXRjaGFibGU7XG5cbiAgdmFyIF9yZWYgPSBtYXNrLmZvdW5kID8gbWFzayA6IG1haW4sXG4gICAgICB3aWR0aCA9IF9yZWYud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodDtcblxuICB2YXIgaXNVcGxvYWRlZEljb24gPSBwcmVmaXggPT09ICdmYWsnO1xuICB2YXIgYXR0ckNsYXNzID0gW2NvbmZpZy5yZXBsYWNlbWVudENsYXNzLCBpY29uTmFtZSA/IFwiXCIuY29uY2F0KGNvbmZpZy5jc3NQcmVmaXgsIFwiLVwiKS5jb25jYXQoaWNvbk5hbWUpIDogJyddLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBleHRyYS5jbGFzc2VzLmluZGV4T2YoYykgPT09IC0xO1xuICB9KS5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYyAhPT0gJycgfHwgISFjO1xuICB9KS5jb25jYXQoZXh0cmEuY2xhc3Nlcykuam9pbignICcpO1xuICB2YXIgY29udGVudCA9IHtcbiAgICBjaGlsZHJlbjogW10sXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGV4dHJhLmF0dHJpYnV0ZXMpLCB7fSwge1xuICAgICAgJ2RhdGEtcHJlZml4JzogcHJlZml4LFxuICAgICAgJ2RhdGEtaWNvbic6IGljb25OYW1lLFxuICAgICAgJ2NsYXNzJzogYXR0ckNsYXNzLFxuICAgICAgJ3JvbGUnOiBleHRyYS5hdHRyaWJ1dGVzLnJvbGUgfHwgJ2ltZycsXG4gICAgICAneG1sbnMnOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICAgICAgJ3ZpZXdCb3gnOiBcIjAgMCBcIi5jb25jYXQod2lkdGgsIFwiIFwiKS5jb25jYXQoaGVpZ2h0KVxuICAgIH0pXG4gIH07XG4gIHZhciB1cGxvYWRlZEljb25XaWR0aFN0eWxlID0gaXNVcGxvYWRlZEljb24gJiYgIX5leHRyYS5jbGFzc2VzLmluZGV4T2YoJ2ZhLWZ3JykgPyB7XG4gICAgd2lkdGg6IFwiXCIuY29uY2F0KHdpZHRoIC8gaGVpZ2h0ICogMTYgKiAwLjA2MjUsIFwiZW1cIilcbiAgfSA6IHt9O1xuXG4gIGlmICh3YXRjaGFibGUpIHtcbiAgICBjb250ZW50LmF0dHJpYnV0ZXNbREFUQV9GQV9JMlNWR10gPSAnJztcbiAgfVxuXG4gIGlmICh0aXRsZSkge1xuICAgIGNvbnRlbnQuY2hpbGRyZW4ucHVzaCh7XG4gICAgICB0YWc6ICd0aXRsZScsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGlkOiBjb250ZW50LmF0dHJpYnV0ZXNbJ2FyaWEtbGFiZWxsZWRieSddIHx8IFwidGl0bGUtXCIuY29uY2F0KHRpdGxlSWQgfHwgbmV4dFVuaXF1ZUlkKCkpXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFt0aXRsZV1cbiAgICB9KTtcbiAgICBkZWxldGUgY29udGVudC5hdHRyaWJ1dGVzLnRpdGxlO1xuICB9XG5cbiAgdmFyIGFyZ3MgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgY29udGVudCksIHt9LCB7XG4gICAgcHJlZml4OiBwcmVmaXgsXG4gICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgIG1haW46IG1haW4sXG4gICAgbWFzazogbWFzayxcbiAgICBtYXNrSWQ6IG1hc2tJZCxcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICBzeW1ib2w6IHN5bWJvbCxcbiAgICBzdHlsZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCB1cGxvYWRlZEljb25XaWR0aFN0eWxlKSwgZXh0cmEuc3R5bGVzKVxuICB9KTtcblxuICB2YXIgX3JlZjIgPSBtYXNrLmZvdW5kICYmIG1haW4uZm91bmQgPyBjYWxsUHJvdmlkZWQoJ2dlbmVyYXRlQWJzdHJhY3RNYXNrJywgYXJncykgfHwge1xuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBhdHRyaWJ1dGVzOiB7fVxuICB9IDogY2FsbFByb3ZpZGVkKCdnZW5lcmF0ZUFic3RyYWN0SWNvbicsIGFyZ3MpIHx8IHtcbiAgICBjaGlsZHJlbjogW10sXG4gICAgYXR0cmlidXRlczoge31cbiAgfSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZjIuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZjIuYXR0cmlidXRlcztcblxuICBhcmdzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIGFyZ3MuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG5cbiAgaWYgKHN5bWJvbCkge1xuICAgIHJldHVybiBhc1N5bWJvbChhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXNJY29uKGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBtYWtlTGF5ZXJzVGV4dEFic3RyYWN0KHBhcmFtcykge1xuICB2YXIgY29udGVudCA9IHBhcmFtcy5jb250ZW50LFxuICAgICAgd2lkdGggPSBwYXJhbXMud2lkdGgsXG4gICAgICBoZWlnaHQgPSBwYXJhbXMuaGVpZ2h0LFxuICAgICAgdHJhbnNmb3JtID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgZXh0cmEgPSBwYXJhbXMuZXh0cmEsXG4gICAgICBfcGFyYW1zJHdhdGNoYWJsZTIgPSBwYXJhbXMud2F0Y2hhYmxlLFxuICAgICAgd2F0Y2hhYmxlID0gX3BhcmFtcyR3YXRjaGFibGUyID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wYXJhbXMkd2F0Y2hhYmxlMjtcblxuICB2YXIgYXR0cmlidXRlcyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBleHRyYS5hdHRyaWJ1dGVzKSwgdGl0bGUgPyB7XG4gICAgJ3RpdGxlJzogdGl0bGVcbiAgfSA6IHt9KSwge30sIHtcbiAgICAnY2xhc3MnOiBleHRyYS5jbGFzc2VzLmpvaW4oJyAnKVxuICB9KTtcblxuICBpZiAod2F0Y2hhYmxlKSB7XG4gICAgYXR0cmlidXRlc1tEQVRBX0ZBX0kyU1ZHXSA9ICcnO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IF9vYmplY3RTcHJlYWQyKHt9LCBleHRyYS5zdHlsZXMpO1xuXG4gIGlmICh0cmFuc2Zvcm1Jc01lYW5pbmdmdWwodHJhbnNmb3JtKSkge1xuICAgIHN0eWxlc1sndHJhbnNmb3JtJ10gPSB0cmFuc2Zvcm1Gb3JDc3Moe1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICBzdGFydENlbnRlcmVkOiB0cnVlLFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICB9KTtcbiAgICBzdHlsZXNbJy13ZWJraXQtdHJhbnNmb3JtJ10gPSBzdHlsZXNbJ3RyYW5zZm9ybSddO1xuICB9XG5cbiAgdmFyIHN0eWxlU3RyaW5nID0gam9pblN0eWxlcyhzdHlsZXMpO1xuXG4gIGlmIChzdHlsZVN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IHN0eWxlU3RyaW5nO1xuICB9XG5cbiAgdmFyIHZhbCA9IFtdO1xuICB2YWwucHVzaCh7XG4gICAgdGFnOiAnc3BhbicsXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICBjaGlsZHJlbjogW2NvbnRlbnRdXG4gIH0pO1xuXG4gIGlmICh0aXRsZSkge1xuICAgIHZhbC5wdXNoKHtcbiAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjbGFzczogJ3NyLW9ubHknXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFt0aXRsZV1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5mdW5jdGlvbiBtYWtlTGF5ZXJzQ291bnRlckFic3RyYWN0KHBhcmFtcykge1xuICB2YXIgY29udGVudCA9IHBhcmFtcy5jb250ZW50LFxuICAgICAgdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICBleHRyYSA9IHBhcmFtcy5leHRyYTtcblxuICB2YXIgYXR0cmlidXRlcyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBleHRyYS5hdHRyaWJ1dGVzKSwgdGl0bGUgPyB7XG4gICAgJ3RpdGxlJzogdGl0bGVcbiAgfSA6IHt9KSwge30sIHtcbiAgICAnY2xhc3MnOiBleHRyYS5jbGFzc2VzLmpvaW4oJyAnKVxuICB9KTtcblxuICB2YXIgc3R5bGVTdHJpbmcgPSBqb2luU3R5bGVzKGV4dHJhLnN0eWxlcyk7XG5cbiAgaWYgKHN0eWxlU3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gc3R5bGVTdHJpbmc7XG4gIH1cblxuICB2YXIgdmFsID0gW107XG4gIHZhbC5wdXNoKHtcbiAgICB0YWc6ICdzcGFuJyxcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgIGNoaWxkcmVuOiBbY29udGVudF1cbiAgfSk7XG5cbiAgaWYgKHRpdGxlKSB7XG4gICAgdmFsLnB1c2goe1xuICAgICAgdGFnOiAnc3BhbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiAnc3Itb25seSdcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW3RpdGxlXVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIHN0eWxlcyQxID0gbmFtZXNwYWNlLnN0eWxlcztcbmZ1bmN0aW9uIGFzRm91bmRJY29uKGljb24pIHtcbiAgdmFyIHdpZHRoID0gaWNvblswXTtcbiAgdmFyIGhlaWdodCA9IGljb25bMV07XG5cbiAgdmFyIF9pY29uJHNsaWNlID0gaWNvbi5zbGljZSg0KSxcbiAgICAgIF9pY29uJHNsaWNlMiA9IF9zbGljZWRUb0FycmF5KF9pY29uJHNsaWNlLCAxKSxcbiAgICAgIHZlY3RvckRhdGEgPSBfaWNvbiRzbGljZTJbMF07XG5cbiAgdmFyIGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZlY3RvckRhdGEpKSB7XG4gICAgZWxlbWVudCA9IHtcbiAgICAgIHRhZzogJ2cnLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjbGFzczogXCJcIi5jb25jYXQoY29uZmlnLmNzc1ByZWZpeCwgXCItXCIpLmNvbmNhdChEVU9UT05FX0NMQVNTRVMuR1JPVVApXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgY2xhc3M6IFwiXCIuY29uY2F0KGNvbmZpZy5jc3NQcmVmaXgsIFwiLVwiKS5jb25jYXQoRFVPVE9ORV9DTEFTU0VTLlNFQ09OREFSWSksXG4gICAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICAgZDogdmVjdG9yRGF0YVswXVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgY2xhc3M6IFwiXCIuY29uY2F0KGNvbmZpZy5jc3NQcmVmaXgsIFwiLVwiKS5jb25jYXQoRFVPVE9ORV9DTEFTU0VTLlBSSU1BUlkpLFxuICAgICAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICAgIGQ6IHZlY3RvckRhdGFbMV1cbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQgPSB7XG4gICAgICB0YWc6ICdwYXRoJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgIGQ6IHZlY3RvckRhdGFcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmb3VuZDogdHJ1ZSxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgaWNvbjogZWxlbWVudFxuICB9O1xufVxudmFyIG1pc3NpbmdJY29uUmVzb2x1dGlvbk1peGluID0ge1xuICBmb3VuZDogZmFsc2UsXG4gIHdpZHRoOiA1MTIsXG4gIGhlaWdodDogNTEyXG59O1xuXG5mdW5jdGlvbiBtYXliZU5vdGlmeU1pc3NpbmcoaWNvbk5hbWUsIHByZWZpeCkge1xuICBpZiAoIVBST0RVQ1RJT04gJiYgIWNvbmZpZy5zaG93TWlzc2luZ0ljb25zICYmIGljb25OYW1lKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkljb24gd2l0aCBuYW1lIFxcXCJcIi5jb25jYXQoaWNvbk5hbWUsIFwiXFxcIiBhbmQgcHJlZml4IFxcXCJcIikuY29uY2F0KHByZWZpeCwgXCJcXFwiIGlzIG1pc3NpbmcuXCIpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSWNvbihpY29uTmFtZSwgcHJlZml4KSB7XG4gIHZhciBnaXZlblByZWZpeCA9IHByZWZpeDtcblxuICBpZiAocHJlZml4ID09PSAnZmEnICYmIGNvbmZpZy5zdHlsZURlZmF1bHQgIT09IG51bGwpIHtcbiAgICBwcmVmaXggPSBnZXREZWZhdWx0VXNhYmxlUHJlZml4KCk7XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciB2YWwgPSB7XG4gICAgICBmb3VuZDogZmFsc2UsXG4gICAgICB3aWR0aDogNTEyLFxuICAgICAgaGVpZ2h0OiA1MTIsXG4gICAgICBpY29uOiBjYWxsUHJvdmlkZWQoJ21pc3NpbmdJY29uQWJzdHJhY3QnKSB8fCB7fVxuICAgIH07XG5cbiAgICBpZiAoZ2l2ZW5QcmVmaXggPT09ICdmYScpIHtcbiAgICAgIHZhciBzaGltID0gYnlPbGROYW1lKGljb25OYW1lKSB8fCB7fTtcbiAgICAgIGljb25OYW1lID0gc2hpbS5pY29uTmFtZSB8fCBpY29uTmFtZTtcbiAgICAgIHByZWZpeCA9IHNoaW0ucHJlZml4IHx8IHByZWZpeDtcbiAgICB9XG5cbiAgICBpZiAoaWNvbk5hbWUgJiYgcHJlZml4ICYmIHN0eWxlcyQxW3ByZWZpeF0gJiYgc3R5bGVzJDFbcHJlZml4XVtpY29uTmFtZV0pIHtcbiAgICAgIHZhciBpY29uID0gc3R5bGVzJDFbcHJlZml4XVtpY29uTmFtZV07XG4gICAgICByZXR1cm4gcmVzb2x2ZShhc0ZvdW5kSWNvbihpY29uKSk7XG4gICAgfVxuXG4gICAgbWF5YmVOb3RpZnlNaXNzaW5nKGljb25OYW1lLCBwcmVmaXgpO1xuICAgIHJlc29sdmUoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIG1pc3NpbmdJY29uUmVzb2x1dGlvbk1peGluKSwge30sIHtcbiAgICAgIGljb246IGNvbmZpZy5zaG93TWlzc2luZ0ljb25zICYmIGljb25OYW1lID8gY2FsbFByb3ZpZGVkKCdtaXNzaW5nSWNvbkFic3RyYWN0JykgfHwge30gOiB7fVxuICAgIH0pKTtcbiAgfSk7XG59XG5cbnZhciBub29wJDEgPSBmdW5jdGlvbiBub29wKCkge307XG5cbnZhciBwID0gY29uZmlnLm1lYXN1cmVQZXJmb3JtYW5jZSAmJiBQRVJGT1JNQU5DRSAmJiBQRVJGT1JNQU5DRS5tYXJrICYmIFBFUkZPUk1BTkNFLm1lYXN1cmUgPyBQRVJGT1JNQU5DRSA6IHtcbiAgbWFyazogbm9vcCQxLFxuICBtZWFzdXJlOiBub29wJDFcbn07XG52YXIgcHJlYW1ibGUgPSBcIkZBIFxcXCI2LjMuMFxcXCJcIjtcblxudmFyIGJlZ2luID0gZnVuY3Rpb24gYmVnaW4obmFtZSkge1xuICBwLm1hcmsoXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSwgXCIgYmVnaW5zXCIpKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZW5kKG5hbWUpO1xuICB9O1xufTtcblxudmFyIGVuZCA9IGZ1bmN0aW9uIGVuZChuYW1lKSB7XG4gIHAubWFyayhcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBlbmRzXCIpKTtcbiAgcC5tZWFzdXJlKFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUpLCBcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBiZWdpbnNcIiksIFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUsIFwiIGVuZHNcIikpO1xufTtcblxudmFyIHBlcmYgPSB7XG4gIGJlZ2luOiBiZWdpbixcbiAgZW5kOiBlbmRcbn07XG5cbnZhciBub29wJDIgPSBmdW5jdGlvbiBub29wKCkge307XG5cbmZ1bmN0aW9uIGlzV2F0Y2hlZChub2RlKSB7XG4gIHZhciBpMnN2ZyA9IG5vZGUuZ2V0QXR0cmlidXRlID8gbm9kZS5nZXRBdHRyaWJ1dGUoREFUQV9GQV9JMlNWRykgOiBudWxsO1xuICByZXR1cm4gdHlwZW9mIGkyc3ZnID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gaGFzUHJlZml4QW5kSWNvbihub2RlKSB7XG4gIHZhciBwcmVmaXggPSBub2RlLmdldEF0dHJpYnV0ZSA/IG5vZGUuZ2V0QXR0cmlidXRlKERBVEFfUFJFRklYKSA6IG51bGw7XG4gIHZhciBpY29uID0gbm9kZS5nZXRBdHRyaWJ1dGUgPyBub2RlLmdldEF0dHJpYnV0ZShEQVRBX0lDT04pIDogbnVsbDtcbiAgcmV0dXJuIHByZWZpeCAmJiBpY29uO1xufVxuXG5mdW5jdGlvbiBoYXNCZWVuUmVwbGFjZWQobm9kZSkge1xuICByZXR1cm4gbm9kZSAmJiBub2RlLmNsYXNzTGlzdCAmJiBub2RlLmNsYXNzTGlzdC5jb250YWlucyAmJiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhjb25maWcucmVwbGFjZW1lbnRDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIGdldE11dGF0b3IoKSB7XG4gIGlmIChjb25maWcuYXV0b1JlcGxhY2VTdmcgPT09IHRydWUpIHtcbiAgICByZXR1cm4gbXV0YXRvcnMucmVwbGFjZTtcbiAgfVxuXG4gIHZhciBtdXRhdG9yID0gbXV0YXRvcnNbY29uZmlnLmF1dG9SZXBsYWNlU3ZnXTtcbiAgcmV0dXJuIG11dGF0b3IgfHwgbXV0YXRvcnMucmVwbGFjZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudE5TKHRhZykge1xuICByZXR1cm4gRE9DVU1FTlQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHRhZyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnKSB7XG4gIHJldHVybiBET0NVTUVOVC5jcmVhdGVFbGVtZW50KHRhZyk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRTVkcoYWJzdHJhY3RPYmopIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfcGFyYW1zJGNlRm4gPSBwYXJhbXMuY2VGbixcbiAgICAgIGNlRm4gPSBfcGFyYW1zJGNlRm4gPT09IHZvaWQgMCA/IGFic3RyYWN0T2JqLnRhZyA9PT0gJ3N2ZycgPyBjcmVhdGVFbGVtZW50TlMgOiBjcmVhdGVFbGVtZW50IDogX3BhcmFtcyRjZUZuO1xuXG4gIGlmICh0eXBlb2YgYWJzdHJhY3RPYmogPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIERPQ1VNRU5ULmNyZWF0ZVRleHROb2RlKGFic3RyYWN0T2JqKTtcbiAgfVxuXG4gIHZhciB0YWcgPSBjZUZuKGFic3RyYWN0T2JqLnRhZyk7XG4gIE9iamVjdC5rZXlzKGFic3RyYWN0T2JqLmF0dHJpYnV0ZXMgfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHRhZy5zZXRBdHRyaWJ1dGUoa2V5LCBhYnN0cmFjdE9iai5hdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcbiAgdmFyIGNoaWxkcmVuID0gYWJzdHJhY3RPYmouY2hpbGRyZW4gfHwgW107XG4gIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgdGFnLmFwcGVuZENoaWxkKGNvbnZlcnRTVkcoY2hpbGQsIHtcbiAgICAgIGNlRm46IGNlRm5cbiAgICB9KSk7XG4gIH0pO1xuICByZXR1cm4gdGFnO1xufVxuXG5mdW5jdGlvbiBub2RlQXNDb21tZW50KG5vZGUpIHtcbiAgdmFyIGNvbW1lbnQgPSBcIiBcIi5jb25jYXQobm9kZS5vdXRlckhUTUwsIFwiIFwiKTtcbiAgLyogQkVHSU4uQVRUUklCVVRJT04gKi9cblxuICBjb21tZW50ID0gXCJcIi5jb25jYXQoY29tbWVudCwgXCJGb250IEF3ZXNvbWUgZm9udGF3ZXNvbWUuY29tIFwiKTtcbiAgLyogRU5ELkFUVFJJQlVUSU9OICovXG5cbiAgcmV0dXJuIGNvbW1lbnQ7XG59XG5cbnZhciBtdXRhdG9ycyA9IHtcbiAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShtdXRhdGlvbikge1xuICAgIHZhciBub2RlID0gbXV0YXRpb25bMF07XG5cbiAgICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICBtdXRhdGlvblsxXS5mb3JFYWNoKGZ1bmN0aW9uIChfYWJzdHJhY3QpIHtcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjb252ZXJ0U1ZHKF9hYnN0cmFjdCksIG5vZGUpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZShEQVRBX0ZBX0kyU1ZHKSA9PT0gbnVsbCAmJiBjb25maWcua2VlcE9yaWdpbmFsU291cmNlKSB7XG4gICAgICAgIHZhciBjb21tZW50ID0gRE9DVU1FTlQuY3JlYXRlQ29tbWVudChub2RlQXNDb21tZW50KG5vZGUpKTtcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjb21tZW50LCBub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBuZXN0OiBmdW5jdGlvbiBuZXN0KG11dGF0aW9uKSB7XG4gICAgdmFyIG5vZGUgPSBtdXRhdGlvblswXTtcbiAgICB2YXIgX2Fic3RyYWN0MiA9IG11dGF0aW9uWzFdOyAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgYSByZXBsYWNlZCBub2RlIHdlIGRvIG5vdCB3YW50IHRvIGNvbnRpbnVlIG5lc3Rpbmcgd2l0aGluIGl0LlxuICAgIC8vIFNob3J0LWNpcmN1aXQgdG8gdGhlIHN0YW5kYXJkIHJlcGxhY2VtZW50XG5cbiAgICBpZiAofmNsYXNzQXJyYXkobm9kZSkuaW5kZXhPZihjb25maWcucmVwbGFjZW1lbnRDbGFzcykpIHtcbiAgICAgIHJldHVybiBtdXRhdG9ycy5yZXBsYWNlKG11dGF0aW9uKTtcbiAgICB9XG5cbiAgICB2YXIgZm9yU3ZnID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdChjb25maWcuY3NzUHJlZml4LCBcIi0uKlwiKSk7XG4gICAgZGVsZXRlIF9hYnN0cmFjdDJbMF0uYXR0cmlidXRlcy5pZDtcblxuICAgIGlmIChfYWJzdHJhY3QyWzBdLmF0dHJpYnV0ZXMuY2xhc3MpIHtcbiAgICAgIHZhciBzcGxpdENsYXNzZXMgPSBfYWJzdHJhY3QyWzBdLmF0dHJpYnV0ZXMuY2xhc3Muc3BsaXQoJyAnKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY2xzKSB7XG4gICAgICAgIGlmIChjbHMgPT09IGNvbmZpZy5yZXBsYWNlbWVudENsYXNzIHx8IGNscy5tYXRjaChmb3JTdmcpKSB7XG4gICAgICAgICAgYWNjLnRvU3ZnLnB1c2goY2xzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhY2MudG9Ob2RlLnB1c2goY2xzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7XG4gICAgICAgIHRvTm9kZTogW10sXG4gICAgICAgIHRvU3ZnOiBbXVxuICAgICAgfSk7XG5cbiAgICAgIF9hYnN0cmFjdDJbMF0uYXR0cmlidXRlcy5jbGFzcyA9IHNwbGl0Q2xhc3Nlcy50b1N2Zy5qb2luKCcgJyk7XG5cbiAgICAgIGlmIChzcGxpdENsYXNzZXMudG9Ob2RlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIHNwbGl0Q2xhc3Nlcy50b05vZGUuam9pbignICcpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbmV3SW5uZXJIVE1MID0gX2Fic3RyYWN0Mi5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgfSkuam9pbignXFxuJyk7XG5cbiAgICBub2RlLnNldEF0dHJpYnV0ZShEQVRBX0ZBX0kyU1ZHLCAnJyk7XG4gICAgbm9kZS5pbm5lckhUTUwgPSBuZXdJbm5lckhUTUw7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHBlcmZvcm1PcGVyYXRpb25TeW5jKG9wKSB7XG4gIG9wKCk7XG59XG5cbmZ1bmN0aW9uIHBlcmZvcm0obXV0YXRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgY2FsbGJhY2tGdW5jdGlvbiA9IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogbm9vcCQyO1xuXG4gIGlmIChtdXRhdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgY2FsbGJhY2tGdW5jdGlvbigpO1xuICB9IGVsc2Uge1xuICAgIHZhciBmcmFtZSA9IHBlcmZvcm1PcGVyYXRpb25TeW5jO1xuXG4gICAgaWYgKGNvbmZpZy5tdXRhdGVBcHByb2FjaCA9PT0gTVVUQVRJT05fQVBQUk9BQ0hfQVNZTkMpIHtcbiAgICAgIGZyYW1lID0gV0lORE9XLnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBwZXJmb3JtT3BlcmF0aW9uU3luYztcbiAgICB9XG5cbiAgICBmcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbXV0YXRvciA9IGdldE11dGF0b3IoKTtcbiAgICAgIHZhciBtYXJrID0gcGVyZi5iZWdpbignbXV0YXRlJyk7XG4gICAgICBtdXRhdGlvbnMubWFwKG11dGF0b3IpO1xuICAgICAgbWFyaygpO1xuICAgICAgY2FsbGJhY2tGdW5jdGlvbigpO1xuICAgIH0pO1xuICB9XG59XG52YXIgZGlzYWJsZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIGRpc2FibGVPYnNlcnZhdGlvbigpIHtcbiAgZGlzYWJsZWQgPSB0cnVlO1xufVxuZnVuY3Rpb24gZW5hYmxlT2JzZXJ2YXRpb24oKSB7XG4gIGRpc2FibGVkID0gZmFsc2U7XG59XG52YXIgbW8gPSBudWxsO1xuZnVuY3Rpb24gb2JzZXJ2ZShvcHRpb25zKSB7XG4gIGlmICghTVVUQVRJT05fT0JTRVJWRVIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIWNvbmZpZy5vYnNlcnZlTXV0YXRpb25zKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF9vcHRpb25zJHRyZWVDYWxsYmFjayA9IG9wdGlvbnMudHJlZUNhbGxiYWNrLFxuICAgICAgdHJlZUNhbGxiYWNrID0gX29wdGlvbnMkdHJlZUNhbGxiYWNrID09PSB2b2lkIDAgPyBub29wJDIgOiBfb3B0aW9ucyR0cmVlQ2FsbGJhY2ssXG4gICAgICBfb3B0aW9ucyRub2RlQ2FsbGJhY2sgPSBvcHRpb25zLm5vZGVDYWxsYmFjayxcbiAgICAgIG5vZGVDYWxsYmFjayA9IF9vcHRpb25zJG5vZGVDYWxsYmFjayA9PT0gdm9pZCAwID8gbm9vcCQyIDogX29wdGlvbnMkbm9kZUNhbGxiYWNrLFxuICAgICAgX29wdGlvbnMkcHNldWRvRWxlbWVuID0gb3B0aW9ucy5wc2V1ZG9FbGVtZW50c0NhbGxiYWNrLFxuICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjayA9IF9vcHRpb25zJHBzZXVkb0VsZW1lbiA9PT0gdm9pZCAwID8gbm9vcCQyIDogX29wdGlvbnMkcHNldWRvRWxlbWVuLFxuICAgICAgX29wdGlvbnMkb2JzZXJ2ZU11dGF0ID0gb3B0aW9ucy5vYnNlcnZlTXV0YXRpb25zUm9vdCxcbiAgICAgIG9ic2VydmVNdXRhdGlvbnNSb290ID0gX29wdGlvbnMkb2JzZXJ2ZU11dGF0ID09PSB2b2lkIDAgPyBET0NVTUVOVCA6IF9vcHRpb25zJG9ic2VydmVNdXRhdDtcbiAgbW8gPSBuZXcgTVVUQVRJT05fT0JTRVJWRVIoZnVuY3Rpb24gKG9iamVjdHMpIHtcbiAgICBpZiAoZGlzYWJsZWQpIHJldHVybjtcbiAgICB2YXIgZGVmYXVsdFByZWZpeCA9IGdldERlZmF1bHRVc2FibGVQcmVmaXgoKTtcbiAgICB0b0FycmF5KG9iamVjdHMpLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uUmVjb3JkKSB7XG4gICAgICBpZiAobXV0YXRpb25SZWNvcmQudHlwZSA9PT0gJ2NoaWxkTGlzdCcgJiYgbXV0YXRpb25SZWNvcmQuYWRkZWROb2Rlcy5sZW5ndGggPiAwICYmICFpc1dhdGNoZWQobXV0YXRpb25SZWNvcmQuYWRkZWROb2Rlc1swXSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5zZWFyY2hQc2V1ZG9FbGVtZW50cykge1xuICAgICAgICAgIHBzZXVkb0VsZW1lbnRzQ2FsbGJhY2sobXV0YXRpb25SZWNvcmQudGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyZWVDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAobXV0YXRpb25SZWNvcmQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uUmVjb3JkLnRhcmdldC5wYXJlbnROb2RlICYmIGNvbmZpZy5zZWFyY2hQc2V1ZG9FbGVtZW50cykge1xuICAgICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBpc1dhdGNoZWQobXV0YXRpb25SZWNvcmQudGFyZ2V0KSAmJiB+QVRUUklCVVRFU19XQVRDSEVEX0ZPUl9NVVRBVElPTi5pbmRleE9mKG11dGF0aW9uUmVjb3JkLmF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICAgIGlmIChtdXRhdGlvblJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnY2xhc3MnICYmIGhhc1ByZWZpeEFuZEljb24obXV0YXRpb25SZWNvcmQudGFyZ2V0KSkge1xuICAgICAgICAgIHZhciBfZ2V0Q2Fub25pY2FsSWNvbiA9IGdldENhbm9uaWNhbEljb24oY2xhc3NBcnJheShtdXRhdGlvblJlY29yZC50YXJnZXQpKSxcbiAgICAgICAgICAgICAgcHJlZml4ID0gX2dldENhbm9uaWNhbEljb24ucHJlZml4LFxuICAgICAgICAgICAgICBpY29uTmFtZSA9IF9nZXRDYW5vbmljYWxJY29uLmljb25OYW1lO1xuXG4gICAgICAgICAgbXV0YXRpb25SZWNvcmQudGFyZ2V0LnNldEF0dHJpYnV0ZShEQVRBX1BSRUZJWCwgcHJlZml4IHx8IGRlZmF1bHRQcmVmaXgpO1xuICAgICAgICAgIGlmIChpY29uTmFtZSkgbXV0YXRpb25SZWNvcmQudGFyZ2V0LnNldEF0dHJpYnV0ZShEQVRBX0lDT04sIGljb25OYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNCZWVuUmVwbGFjZWQobXV0YXRpb25SZWNvcmQudGFyZ2V0KSkge1xuICAgICAgICAgIG5vZGVDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBpZiAoIUlTX0RPTSkgcmV0dXJuO1xuICBtby5vYnNlcnZlKG9ic2VydmVNdXRhdGlvbnNSb290LCB7XG4gICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICBzdWJ0cmVlOiB0cnVlXG4gIH0pO1xufVxuZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgaWYgKCFtbykgcmV0dXJuO1xuICBtby5kaXNjb25uZWN0KCk7XG59XG5cbmZ1bmN0aW9uIHN0eWxlUGFyc2VyIChub2RlKSB7XG4gIHZhciBzdHlsZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuICB2YXIgdmFsID0gW107XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgdmFsID0gc3R5bGUuc3BsaXQoJzsnKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc3R5bGUpIHtcbiAgICAgIHZhciBzdHlsZXMgPSBzdHlsZS5zcGxpdCgnOicpO1xuICAgICAgdmFyIHByb3AgPSBzdHlsZXNbMF07XG4gICAgICB2YXIgdmFsdWUgPSBzdHlsZXMuc2xpY2UoMSk7XG5cbiAgICAgIGlmIChwcm9wICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYWNjW3Byb3BdID0gdmFsdWUuam9pbignOicpLnRyaW0oKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiBjbGFzc1BhcnNlciAobm9kZSkge1xuICB2YXIgZXhpc3RpbmdQcmVmaXggPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmVmaXgnKTtcbiAgdmFyIGV4aXN0aW5nSWNvbk5hbWUgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pY29uJyk7XG4gIHZhciBpbm5lclRleHQgPSBub2RlLmlubmVyVGV4dCAhPT0gdW5kZWZpbmVkID8gbm9kZS5pbm5lclRleHQudHJpbSgpIDogJyc7XG4gIHZhciB2YWwgPSBnZXRDYW5vbmljYWxJY29uKGNsYXNzQXJyYXkobm9kZSkpO1xuXG4gIGlmICghdmFsLnByZWZpeCkge1xuICAgIHZhbC5wcmVmaXggPSBnZXREZWZhdWx0VXNhYmxlUHJlZml4KCk7XG4gIH1cblxuICBpZiAoZXhpc3RpbmdQcmVmaXggJiYgZXhpc3RpbmdJY29uTmFtZSkge1xuICAgIHZhbC5wcmVmaXggPSBleGlzdGluZ1ByZWZpeDtcbiAgICB2YWwuaWNvbk5hbWUgPSBleGlzdGluZ0ljb25OYW1lO1xuICB9XG5cbiAgaWYgKHZhbC5pY29uTmFtZSAmJiB2YWwucHJlZml4KSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGlmICh2YWwucHJlZml4ICYmIGlubmVyVGV4dC5sZW5ndGggPiAwKSB7XG4gICAgdmFsLmljb25OYW1lID0gYnlMaWdhdHVyZSh2YWwucHJlZml4LCBub2RlLmlubmVyVGV4dCkgfHwgYnlVbmljb2RlKHZhbC5wcmVmaXgsIHRvSGV4KG5vZGUuaW5uZXJUZXh0KSk7XG4gIH1cblxuICBpZiAoIXZhbC5pY29uTmFtZSAmJiBjb25maWcuYXV0b0ZldGNoU3ZnICYmIG5vZGUuZmlyc3RDaGlsZCAmJiBub2RlLmZpcnN0Q2hpbGQubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgdmFsLmljb25OYW1lID0gbm9kZS5maXJzdENoaWxkLmRhdGE7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVzUGFyc2VyIChub2RlKSB7XG4gIHZhciBleHRyYUF0dHJpYnV0ZXMgPSB0b0FycmF5KG5vZGUuYXR0cmlidXRlcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGF0dHIpIHtcbiAgICBpZiAoYWNjLm5hbWUgIT09ICdjbGFzcycgJiYgYWNjLm5hbWUgIT09ICdzdHlsZScpIHtcbiAgICAgIGFjY1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHZhciB0aXRsZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuICB2YXIgdGl0bGVJZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLXRpdGxlLWlkJyk7XG5cbiAgaWYgKGNvbmZpZy5hdXRvQTExeSkge1xuICAgIGlmICh0aXRsZSkge1xuICAgICAgZXh0cmFBdHRyaWJ1dGVzWydhcmlhLWxhYmVsbGVkYnknXSA9IFwiXCIuY29uY2F0KGNvbmZpZy5yZXBsYWNlbWVudENsYXNzLCBcIi10aXRsZS1cIikuY29uY2F0KHRpdGxlSWQgfHwgbmV4dFVuaXF1ZUlkKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHRyYUF0dHJpYnV0ZXNbJ2FyaWEtaGlkZGVuJ10gPSAndHJ1ZSc7XG4gICAgICBleHRyYUF0dHJpYnV0ZXNbJ2ZvY3VzYWJsZSddID0gJ2ZhbHNlJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXh0cmFBdHRyaWJ1dGVzO1xufVxuXG5mdW5jdGlvbiBibGFua01ldGEoKSB7XG4gIHJldHVybiB7XG4gICAgaWNvbk5hbWU6IG51bGwsXG4gICAgdGl0bGU6IG51bGwsXG4gICAgdGl0bGVJZDogbnVsbCxcbiAgICBwcmVmaXg6IG51bGwsXG4gICAgdHJhbnNmb3JtOiBtZWFuaW5nbGVzc1RyYW5zZm9ybSxcbiAgICBzeW1ib2w6IGZhbHNlLFxuICAgIG1hc2s6IHtcbiAgICAgIGljb25OYW1lOiBudWxsLFxuICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgcmVzdDogW11cbiAgICB9LFxuICAgIG1hc2tJZDogbnVsbCxcbiAgICBleHRyYToge1xuICAgICAgY2xhc3NlczogW10sXG4gICAgICBzdHlsZXM6IHt9LFxuICAgICAgYXR0cmlidXRlczoge31cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBwYXJzZU1ldGEobm9kZSkge1xuICB2YXIgcGFyc2VyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7XG4gICAgc3R5bGVQYXJzZXI6IHRydWVcbiAgfTtcblxuICB2YXIgX2NsYXNzUGFyc2VyID0gY2xhc3NQYXJzZXIobm9kZSksXG4gICAgICBpY29uTmFtZSA9IF9jbGFzc1BhcnNlci5pY29uTmFtZSxcbiAgICAgIHByZWZpeCA9IF9jbGFzc1BhcnNlci5wcmVmaXgsXG4gICAgICBleHRyYUNsYXNzZXMgPSBfY2xhc3NQYXJzZXIucmVzdDtcblxuICB2YXIgZXh0cmFBdHRyaWJ1dGVzID0gYXR0cmlidXRlc1BhcnNlcihub2RlKTtcbiAgdmFyIHBsdWdpbk1ldGEgPSBjaGFpbkhvb2tzKCdwYXJzZU5vZGVBdHRyaWJ1dGVzJywge30sIG5vZGUpO1xuICB2YXIgZXh0cmFTdHlsZXMgPSBwYXJzZXIuc3R5bGVQYXJzZXIgPyBzdHlsZVBhcnNlcihub2RlKSA6IFtdO1xuICByZXR1cm4gX29iamVjdFNwcmVhZDIoe1xuICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICB0aXRsZTogbm9kZS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyksXG4gICAgdGl0bGVJZDogbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtdGl0bGUtaWQnKSxcbiAgICBwcmVmaXg6IHByZWZpeCxcbiAgICB0cmFuc2Zvcm06IG1lYW5pbmdsZXNzVHJhbnNmb3JtLFxuICAgIG1hc2s6IHtcbiAgICAgIGljb25OYW1lOiBudWxsLFxuICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgcmVzdDogW11cbiAgICB9LFxuICAgIG1hc2tJZDogbnVsbCxcbiAgICBzeW1ib2w6IGZhbHNlLFxuICAgIGV4dHJhOiB7XG4gICAgICBjbGFzc2VzOiBleHRyYUNsYXNzZXMsXG4gICAgICBzdHlsZXM6IGV4dHJhU3R5bGVzLFxuICAgICAgYXR0cmlidXRlczogZXh0cmFBdHRyaWJ1dGVzXG4gICAgfVxuICB9LCBwbHVnaW5NZXRhKTtcbn1cblxudmFyIHN0eWxlcyQyID0gbmFtZXNwYWNlLnN0eWxlcztcblxuZnVuY3Rpb24gZ2VuZXJhdGVNdXRhdGlvbihub2RlKSB7XG4gIHZhciBub2RlTWV0YSA9IGNvbmZpZy5hdXRvUmVwbGFjZVN2ZyA9PT0gJ25lc3QnID8gcGFyc2VNZXRhKG5vZGUsIHtcbiAgICBzdHlsZVBhcnNlcjogZmFsc2VcbiAgfSkgOiBwYXJzZU1ldGEobm9kZSk7XG5cbiAgaWYgKH5ub2RlTWV0YS5leHRyYS5jbGFzc2VzLmluZGV4T2YoTEFZRVJTX1RFWFRfQ0xBU1NOQU1FKSkge1xuICAgIHJldHVybiBjYWxsUHJvdmlkZWQoJ2dlbmVyYXRlTGF5ZXJzVGV4dCcsIG5vZGUsIG5vZGVNZXRhKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY2FsbFByb3ZpZGVkKCdnZW5lcmF0ZVN2Z1JlcGxhY2VtZW50TXV0YXRpb24nLCBub2RlLCBub2RlTWV0YSk7XG4gIH1cbn1cblxudmFyIGtub3duUHJlZml4ZXMgPSBuZXcgU2V0KCk7XG5GQU1JTElFUy5tYXAoZnVuY3Rpb24gKGZhbWlseSkge1xuICBrbm93blByZWZpeGVzLmFkZChcImZhLVwiLmNvbmNhdChmYW1pbHkpKTtcbn0pO1xuT2JqZWN0LmtleXMoUFJFRklYX1RPX1NUWUxFW0ZBTUlMWV9DTEFTU0lDXSkubWFwKGtub3duUHJlZml4ZXMuYWRkLmJpbmQoa25vd25QcmVmaXhlcykpO1xuT2JqZWN0LmtleXMoUFJFRklYX1RPX1NUWUxFW0ZBTUlMWV9TSEFSUF0pLm1hcChrbm93blByZWZpeGVzLmFkZC5iaW5kKGtub3duUHJlZml4ZXMpKTtcbmtub3duUHJlZml4ZXMgPSBfdG9Db25zdW1hYmxlQXJyYXkoa25vd25QcmVmaXhlcyk7XG5cbmZ1bmN0aW9uIG9uVHJlZShyb290KSB7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgaWYgKCFJU19ET00pIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgdmFyIGh0bWxDbGFzc0xpc3QgPSBET0NVTUVOVC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0O1xuXG4gIHZhciBoY2xBZGQgPSBmdW5jdGlvbiBoY2xBZGQoc3VmZml4KSB7XG4gICAgcmV0dXJuIGh0bWxDbGFzc0xpc3QuYWRkKFwiXCIuY29uY2F0KEhUTUxfQ0xBU1NfSTJTVkdfQkFTRV9DTEFTUywgXCItXCIpLmNvbmNhdChzdWZmaXgpKTtcbiAgfTtcblxuICB2YXIgaGNsUmVtb3ZlID0gZnVuY3Rpb24gaGNsUmVtb3ZlKHN1ZmZpeCkge1xuICAgIHJldHVybiBodG1sQ2xhc3NMaXN0LnJlbW92ZShcIlwiLmNvbmNhdChIVE1MX0NMQVNTX0kyU1ZHX0JBU0VfQ0xBU1MsIFwiLVwiKS5jb25jYXQoc3VmZml4KSk7XG4gIH07XG5cbiAgdmFyIHByZWZpeGVzID0gY29uZmlnLmF1dG9GZXRjaFN2ZyA/IGtub3duUHJlZml4ZXMgOiBGQU1JTElFUy5tYXAoZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gXCJmYS1cIi5jb25jYXQoZik7XG4gIH0pLmNvbmNhdChPYmplY3Qua2V5cyhzdHlsZXMkMikpO1xuXG4gIGlmICghcHJlZml4ZXMuaW5jbHVkZXMoJ2ZhJykpIHtcbiAgICBwcmVmaXhlcy5wdXNoKCdmYScpO1xuICB9XG5cbiAgdmFyIHByZWZpeGVzRG9tUXVlcnkgPSBbXCIuXCIuY29uY2F0KExBWUVSU19URVhUX0NMQVNTTkFNRSwgXCI6bm90KFtcIikuY29uY2F0KERBVEFfRkFfSTJTVkcsIFwiXSlcIildLmNvbmNhdChwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gXCIuXCIuY29uY2F0KHAsIFwiOm5vdChbXCIpLmNvbmNhdChEQVRBX0ZBX0kyU1ZHLCBcIl0pXCIpO1xuICB9KSkuam9pbignLCAnKTtcblxuICBpZiAocHJlZml4ZXNEb21RdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICB2YXIgY2FuZGlkYXRlcyA9IFtdO1xuXG4gIHRyeSB7XG4gICAgY2FuZGlkYXRlcyA9IHRvQXJyYXkocm9vdC5xdWVyeVNlbGVjdG9yQWxsKHByZWZpeGVzRG9tUXVlcnkpKTtcbiAgfSBjYXRjaCAoZSkgey8vIG5vb3BcbiAgfVxuXG4gIGlmIChjYW5kaWRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICBoY2xBZGQoJ3BlbmRpbmcnKTtcbiAgICBoY2xSZW1vdmUoJ2NvbXBsZXRlJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgdmFyIG1hcmsgPSBwZXJmLmJlZ2luKCdvblRyZWUnKTtcbiAgdmFyIG11dGF0aW9ucyA9IGNhbmRpZGF0ZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5vZGUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIG11dGF0aW9uID0gZ2VuZXJhdGVNdXRhdGlvbihub2RlKTtcblxuICAgICAgaWYgKG11dGF0aW9uKSB7XG4gICAgICAgIGFjYy5wdXNoKG11dGF0aW9uKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIVBST0RVQ1RJT04pIHtcbiAgICAgICAgaWYgKGUubmFtZSA9PT0gJ01pc3NpbmdJY29uJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSk7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgUHJvbWlzZS5hbGwobXV0YXRpb25zKS50aGVuKGZ1bmN0aW9uIChyZXNvbHZlZE11dGF0aW9ucykge1xuICAgICAgcGVyZm9ybShyZXNvbHZlZE11dGF0aW9ucywgZnVuY3Rpb24gKCkge1xuICAgICAgICBoY2xBZGQoJ2FjdGl2ZScpO1xuICAgICAgICBoY2xBZGQoJ2NvbXBsZXRlJyk7XG4gICAgICAgIGhjbFJlbW92ZSgncGVuZGluZycpO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjaygpO1xuICAgICAgICBtYXJrKCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBtYXJrKCk7XG4gICAgICByZWplY3QoZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvbk5vZGUobm9kZSkge1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIGdlbmVyYXRlTXV0YXRpb24obm9kZSkudGhlbihmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICBpZiAobXV0YXRpb24pIHtcbiAgICAgIHBlcmZvcm0oW211dGF0aW9uXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVJY29ucyhuZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAobWF5YmVJY29uRGVmaW5pdGlvbikge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBpY29uRGVmaW5pdGlvbiA9IChtYXliZUljb25EZWZpbml0aW9uIHx8IHt9KS5pY29uID8gbWF5YmVJY29uRGVmaW5pdGlvbiA6IGZpbmRJY29uRGVmaW5pdGlvbihtYXliZUljb25EZWZpbml0aW9uIHx8IHt9KTtcbiAgICB2YXIgbWFzayA9IHBhcmFtcy5tYXNrO1xuXG4gICAgaWYgKG1hc2spIHtcbiAgICAgIG1hc2sgPSAobWFzayB8fCB7fSkuaWNvbiA/IG1hc2sgOiBmaW5kSWNvbkRlZmluaXRpb24obWFzayB8fCB7fSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQoaWNvbkRlZmluaXRpb24sIF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBwYXJhbXMpLCB7fSwge1xuICAgICAgbWFzazogbWFza1xuICAgIH0pKTtcbiAgfTtcbn1cblxudmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihpY29uRGVmaW5pdGlvbikge1xuICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIF9wYXJhbXMkdHJhbnNmb3JtID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIHRyYW5zZm9ybSA9IF9wYXJhbXMkdHJhbnNmb3JtID09PSB2b2lkIDAgPyBtZWFuaW5nbGVzc1RyYW5zZm9ybSA6IF9wYXJhbXMkdHJhbnNmb3JtLFxuICAgICAgX3BhcmFtcyRzeW1ib2wgPSBwYXJhbXMuc3ltYm9sLFxuICAgICAgc3ltYm9sID0gX3BhcmFtcyRzeW1ib2wgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyRzeW1ib2wsXG4gICAgICBfcGFyYW1zJG1hc2sgPSBwYXJhbXMubWFzayxcbiAgICAgIG1hc2sgPSBfcGFyYW1zJG1hc2sgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJG1hc2ssXG4gICAgICBfcGFyYW1zJG1hc2tJZCA9IHBhcmFtcy5tYXNrSWQsXG4gICAgICBtYXNrSWQgPSBfcGFyYW1zJG1hc2tJZCA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkbWFza0lkLFxuICAgICAgX3BhcmFtcyR0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgIHRpdGxlID0gX3BhcmFtcyR0aXRsZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkdGl0bGUsXG4gICAgICBfcGFyYW1zJHRpdGxlSWQgPSBwYXJhbXMudGl0bGVJZCxcbiAgICAgIHRpdGxlSWQgPSBfcGFyYW1zJHRpdGxlSWQgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJHRpdGxlSWQsXG4gICAgICBfcGFyYW1zJGNsYXNzZXMgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXMgPT09IHZvaWQgMCA/IFtdIDogX3BhcmFtcyRjbGFzc2VzLFxuICAgICAgX3BhcmFtcyRhdHRyaWJ1dGVzID0gcGFyYW1zLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzID0gX3BhcmFtcyRhdHRyaWJ1dGVzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkYXR0cmlidXRlcyxcbiAgICAgIF9wYXJhbXMkc3R5bGVzID0gcGFyYW1zLnN0eWxlcyxcbiAgICAgIHN0eWxlcyA9IF9wYXJhbXMkc3R5bGVzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkc3R5bGVzO1xuICBpZiAoIWljb25EZWZpbml0aW9uKSByZXR1cm47XG4gIHZhciBwcmVmaXggPSBpY29uRGVmaW5pdGlvbi5wcmVmaXgsXG4gICAgICBpY29uTmFtZSA9IGljb25EZWZpbml0aW9uLmljb25OYW1lLFxuICAgICAgaWNvbiA9IGljb25EZWZpbml0aW9uLmljb247XG4gIHJldHVybiBkb21WYXJpYW50cyhfb2JqZWN0U3ByZWFkMih7XG4gICAgdHlwZTogJ2ljb24nXG4gIH0sIGljb25EZWZpbml0aW9uKSwgZnVuY3Rpb24gKCkge1xuICAgIGNhbGxIb29rcygnYmVmb3JlRE9NRWxlbWVudENyZWF0aW9uJywge1xuICAgICAgaWNvbkRlZmluaXRpb246IGljb25EZWZpbml0aW9uLFxuICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICB9KTtcblxuICAgIGlmIChjb25maWcuYXV0b0ExMXkpIHtcbiAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICBhdHRyaWJ1dGVzWydhcmlhLWxhYmVsbGVkYnknXSA9IFwiXCIuY29uY2F0KGNvbmZpZy5yZXBsYWNlbWVudENsYXNzLCBcIi10aXRsZS1cIikuY29uY2F0KHRpdGxlSWQgfHwgbmV4dFVuaXF1ZUlkKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXR0cmlidXRlc1snYXJpYS1oaWRkZW4nXSA9ICd0cnVlJztcbiAgICAgICAgYXR0cmlidXRlc1snZm9jdXNhYmxlJ10gPSAnZmFsc2UnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYWtlSW5saW5lU3ZnQWJzdHJhY3Qoe1xuICAgICAgaWNvbnM6IHtcbiAgICAgICAgbWFpbjogYXNGb3VuZEljb24oaWNvbiksXG4gICAgICAgIG1hc2s6IG1hc2sgPyBhc0ZvdW5kSWNvbihtYXNrLmljb24pIDoge1xuICAgICAgICAgIGZvdW5kOiBmYWxzZSxcbiAgICAgICAgICB3aWR0aDogbnVsbCxcbiAgICAgICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICAgICAgaWNvbjoge31cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgdHJhbnNmb3JtOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgbWVhbmluZ2xlc3NUcmFuc2Zvcm0pLCB0cmFuc2Zvcm0pLFxuICAgICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBtYXNrSWQ6IG1hc2tJZCxcbiAgICAgIHRpdGxlSWQ6IHRpdGxlSWQsXG4gICAgICBleHRyYToge1xuICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgICAgY2xhc3NlczogY2xhc3Nlc1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG52YXIgUmVwbGFjZUVsZW1lbnRzID0ge1xuICBtaXhvdXQ6IGZ1bmN0aW9uIG1peG91dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWNvbjogcmVzb2x2ZUljb25zKHJlbmRlcilcbiAgICB9O1xuICB9LFxuICBob29rczogZnVuY3Rpb24gaG9va3MoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG11dGF0aW9uT2JzZXJ2ZXJDYWxsYmFja3M6IGZ1bmN0aW9uIG11dGF0aW9uT2JzZXJ2ZXJDYWxsYmFja3MoYWNjdW11bGF0b3IpIHtcbiAgICAgICAgYWNjdW11bGF0b3IudHJlZUNhbGxiYWNrID0gb25UcmVlO1xuICAgICAgICBhY2N1bXVsYXRvci5ub2RlQ2FsbGJhY2sgPSBvbk5vZGU7XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICBwcm92aWRlczogZnVuY3Rpb24gcHJvdmlkZXMocHJvdmlkZXJzJCQxKSB7XG4gICAgcHJvdmlkZXJzJCQxLmkyc3ZnID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgdmFyIF9wYXJhbXMkbm9kZSA9IHBhcmFtcy5ub2RlLFxuICAgICAgICAgIG5vZGUgPSBfcGFyYW1zJG5vZGUgPT09IHZvaWQgMCA/IERPQ1VNRU5UIDogX3BhcmFtcyRub2RlLFxuICAgICAgICAgIF9wYXJhbXMkY2FsbGJhY2sgPSBwYXJhbXMuY2FsbGJhY2ssXG4gICAgICAgICAgY2FsbGJhY2sgPSBfcGFyYW1zJGNhbGxiYWNrID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoKSB7fSA6IF9wYXJhbXMkY2FsbGJhY2s7XG4gICAgICByZXR1cm4gb25UcmVlKG5vZGUsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgcHJvdmlkZXJzJCQxLmdlbmVyYXRlU3ZnUmVwbGFjZW1lbnRNdXRhdGlvbiA9IGZ1bmN0aW9uIChub2RlLCBub2RlTWV0YSkge1xuICAgICAgdmFyIGljb25OYW1lID0gbm9kZU1ldGEuaWNvbk5hbWUsXG4gICAgICAgICAgdGl0bGUgPSBub2RlTWV0YS50aXRsZSxcbiAgICAgICAgICB0aXRsZUlkID0gbm9kZU1ldGEudGl0bGVJZCxcbiAgICAgICAgICBwcmVmaXggPSBub2RlTWV0YS5wcmVmaXgsXG4gICAgICAgICAgdHJhbnNmb3JtID0gbm9kZU1ldGEudHJhbnNmb3JtLFxuICAgICAgICAgIHN5bWJvbCA9IG5vZGVNZXRhLnN5bWJvbCxcbiAgICAgICAgICBtYXNrID0gbm9kZU1ldGEubWFzayxcbiAgICAgICAgICBtYXNrSWQgPSBub2RlTWV0YS5tYXNrSWQsXG4gICAgICAgICAgZXh0cmEgPSBub2RlTWV0YS5leHRyYTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIFByb21pc2UuYWxsKFtmaW5kSWNvbihpY29uTmFtZSwgcHJlZml4KSwgbWFzay5pY29uTmFtZSA/IGZpbmRJY29uKG1hc2suaWNvbk5hbWUsIG1hc2sucHJlZml4KSA6IFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgZm91bmQ6IGZhbHNlLFxuICAgICAgICAgIHdpZHRoOiA1MTIsXG4gICAgICAgICAgaGVpZ2h0OiA1MTIsXG4gICAgICAgICAgaWNvbjoge31cbiAgICAgICAgfSldKS50aGVuKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgICAgIG1haW4gPSBfcmVmMlswXSxcbiAgICAgICAgICAgICAgbWFzayA9IF9yZWYyWzFdO1xuXG4gICAgICAgICAgcmVzb2x2ZShbbm9kZSwgbWFrZUlubGluZVN2Z0Fic3RyYWN0KHtcbiAgICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICAgIG1haW46IG1haW4sXG4gICAgICAgICAgICAgIG1hc2s6IG1hc2tcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICAgICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgICAgICAgICBtYXNrSWQ6IG1hc2tJZCxcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIHRpdGxlSWQ6IHRpdGxlSWQsXG4gICAgICAgICAgICBleHRyYTogZXh0cmEsXG4gICAgICAgICAgICB3YXRjaGFibGU6IHRydWVcbiAgICAgICAgICB9KV0pO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHByb3ZpZGVycyQkMS5nZW5lcmF0ZUFic3RyYWN0SWNvbiA9IGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgdmFyIGNoaWxkcmVuID0gX3JlZjMuY2hpbGRyZW4sXG4gICAgICAgICAgYXR0cmlidXRlcyA9IF9yZWYzLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgbWFpbiA9IF9yZWYzLm1haW4sXG4gICAgICAgICAgdHJhbnNmb3JtID0gX3JlZjMudHJhbnNmb3JtLFxuICAgICAgICAgIHN0eWxlcyA9IF9yZWYzLnN0eWxlcztcbiAgICAgIHZhciBzdHlsZVN0cmluZyA9IGpvaW5TdHlsZXMoc3R5bGVzKTtcblxuICAgICAgaWYgKHN0eWxlU3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IHN0eWxlU3RyaW5nO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV4dENoaWxkO1xuXG4gICAgICBpZiAodHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkpIHtcbiAgICAgICAgbmV4dENoaWxkID0gY2FsbFByb3ZpZGVkKCdnZW5lcmF0ZUFic3RyYWN0VHJhbnNmb3JtR3JvdXBpbmcnLCB7XG4gICAgICAgICAgbWFpbjogbWFpbixcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICBjb250YWluZXJXaWR0aDogbWFpbi53aWR0aCxcbiAgICAgICAgICBpY29uV2lkdGg6IG1haW4ud2lkdGhcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkcmVuLnB1c2gobmV4dENoaWxkIHx8IG1haW4uaWNvbik7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXNcbiAgICAgIH07XG4gICAgfTtcbiAgfVxufTtcblxudmFyIExheWVycyA9IHtcbiAgbWl4b3V0OiBmdW5jdGlvbiBtaXhvdXQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxheWVyOiBmdW5jdGlvbiBsYXllcihhc3NlbWJsZXIpIHtcbiAgICAgICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICAgIHZhciBfcGFyYW1zJGNsYXNzZXMgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgICAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXMgPT09IHZvaWQgMCA/IFtdIDogX3BhcmFtcyRjbGFzc2VzO1xuICAgICAgICByZXR1cm4gZG9tVmFyaWFudHMoe1xuICAgICAgICAgIHR5cGU6ICdsYXllcidcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhbGxIb29rcygnYmVmb3JlRE9NRWxlbWVudENyZWF0aW9uJywge1xuICAgICAgICAgICAgYXNzZW1ibGVyOiBhc3NlbWJsZXIsXG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhciBjaGlsZHJlbiA9IFtdO1xuICAgICAgICAgIGFzc2VtYmxlcihmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgQXJyYXkuaXNBcnJheShhcmdzKSA/IGFyZ3MubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4uY29uY2F0KGEuYWJzdHJhY3QpO1xuICAgICAgICAgICAgfSkgOiBjaGlsZHJlbiA9IGNoaWxkcmVuLmNvbmNhdChhcmdzLmFic3RyYWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICBjbGFzczogW1wiXCIuY29uY2F0KGNvbmZpZy5jc3NQcmVmaXgsIFwiLWxheWVyc1wiKV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjbGFzc2VzKSkuam9pbignICcpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICAgICAgfV07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG5cbnZhciBMYXllcnNDb3VudGVyID0ge1xuICBtaXhvdXQ6IGZ1bmN0aW9uIG1peG91dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY291bnRlcjogZnVuY3Rpb24gY291bnRlcihjb250ZW50KSB7XG4gICAgICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgICB2YXIgX3BhcmFtcyR0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgICAgICAgIHRpdGxlID0gX3BhcmFtcyR0aXRsZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkdGl0bGUsXG4gICAgICAgICAgICBfcGFyYW1zJGNsYXNzZXMgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgICAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXMgPT09IHZvaWQgMCA/IFtdIDogX3BhcmFtcyRjbGFzc2VzLFxuICAgICAgICAgICAgX3BhcmFtcyRhdHRyaWJ1dGVzID0gcGFyYW1zLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gX3BhcmFtcyRhdHRyaWJ1dGVzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkYXR0cmlidXRlcyxcbiAgICAgICAgICAgIF9wYXJhbXMkc3R5bGVzID0gcGFyYW1zLnN0eWxlcyxcbiAgICAgICAgICAgIHN0eWxlcyA9IF9wYXJhbXMkc3R5bGVzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkc3R5bGVzO1xuICAgICAgICByZXR1cm4gZG9tVmFyaWFudHMoe1xuICAgICAgICAgIHR5cGU6ICdjb3VudGVyJyxcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYWxsSG9va3MoJ2JlZm9yZURPTUVsZW1lbnRDcmVhdGlvbicsIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBtYWtlTGF5ZXJzQ291bnRlckFic3RyYWN0KHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIGV4dHJhOiB7XG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgICAgICAgICBjbGFzc2VzOiBbXCJcIi5jb25jYXQoY29uZmlnLmNzc1ByZWZpeCwgXCItbGF5ZXJzLWNvdW50ZXJcIildLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY2xhc3NlcykpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG5cbnZhciBMYXllcnNUZXh0ID0ge1xuICBtaXhvdXQ6IGZ1bmN0aW9uIG1peG91dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogZnVuY3Rpb24gdGV4dChjb250ZW50KSB7XG4gICAgICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgICB2YXIgX3BhcmFtcyR0cmFuc2Zvcm0gPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgICAgICAgdHJhbnNmb3JtID0gX3BhcmFtcyR0cmFuc2Zvcm0gPT09IHZvaWQgMCA/IG1lYW5pbmdsZXNzVHJhbnNmb3JtIDogX3BhcmFtcyR0cmFuc2Zvcm0sXG4gICAgICAgICAgICBfcGFyYW1zJHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgICAgICAgdGl0bGUgPSBfcGFyYW1zJHRpdGxlID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyR0aXRsZSxcbiAgICAgICAgICAgIF9wYXJhbXMkY2xhc3NlcyA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlcyA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXMsXG4gICAgICAgICAgICBfcGFyYW1zJGF0dHJpYnV0ZXMgPSBwYXJhbXMuYXR0cmlidXRlcyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSBfcGFyYW1zJGF0dHJpYnV0ZXMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRhdHRyaWJ1dGVzLFxuICAgICAgICAgICAgX3BhcmFtcyRzdHlsZXMgPSBwYXJhbXMuc3R5bGVzLFxuICAgICAgICAgICAgc3R5bGVzID0gX3BhcmFtcyRzdHlsZXMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRzdHlsZXM7XG4gICAgICAgIHJldHVybiBkb21WYXJpYW50cyh7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhbGxIb29rcygnYmVmb3JlRE9NRWxlbWVudENyZWF0aW9uJywge1xuICAgICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIG1ha2VMYXllcnNUZXh0QWJzdHJhY3Qoe1xuICAgICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIG1lYW5pbmdsZXNzVHJhbnNmb3JtKSwgdHJhbnNmb3JtKSxcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIGV4dHJhOiB7XG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgICAgICAgICBjbGFzc2VzOiBbXCJcIi5jb25jYXQoY29uZmlnLmNzc1ByZWZpeCwgXCItbGF5ZXJzLXRleHRcIildLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY2xhc3NlcykpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIHByb3ZpZGVzOiBmdW5jdGlvbiBwcm92aWRlcyhwcm92aWRlcnMkJDEpIHtcbiAgICBwcm92aWRlcnMkJDEuZ2VuZXJhdGVMYXllcnNUZXh0ID0gZnVuY3Rpb24gKG5vZGUsIG5vZGVNZXRhKSB7XG4gICAgICB2YXIgdGl0bGUgPSBub2RlTWV0YS50aXRsZSxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBub2RlTWV0YS50cmFuc2Zvcm0sXG4gICAgICAgICAgZXh0cmEgPSBub2RlTWV0YS5leHRyYTtcbiAgICAgIHZhciB3aWR0aCA9IG51bGw7XG4gICAgICB2YXIgaGVpZ2h0ID0gbnVsbDtcblxuICAgICAgaWYgKElTX0lFKSB7XG4gICAgICAgIHZhciBjb21wdXRlZEZvbnRTaXplID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5mb250U2l6ZSwgMTApO1xuICAgICAgICB2YXIgYm91bmRpbmdDbGllbnRSZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgd2lkdGggPSBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggLyBjb21wdXRlZEZvbnRTaXplO1xuICAgICAgICBoZWlnaHQgPSBib3VuZGluZ0NsaWVudFJlY3QuaGVpZ2h0IC8gY29tcHV0ZWRGb250U2l6ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5hdXRvQTExeSAmJiAhdGl0bGUpIHtcbiAgICAgICAgZXh0cmEuYXR0cmlidXRlc1snYXJpYS1oaWRkZW4nXSA9ICd0cnVlJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbbm9kZSwgbWFrZUxheWVyc1RleHRBYnN0cmFjdCh7XG4gICAgICAgIGNvbnRlbnQ6IG5vZGUuaW5uZXJIVE1MLFxuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBleHRyYTogZXh0cmEsXG4gICAgICAgIHdhdGNoYWJsZTogdHJ1ZVxuICAgICAgfSldKTtcbiAgICB9O1xuICB9XG59O1xuXG52YXIgQ0xFQU5fQ09OVEVOVF9QQVRURVJOID0gbmV3IFJlZ0V4cChcIlxcXCJcIiwgJ3VnJyk7XG52YXIgU0VDT05EQVJZX1VOSUNPREVfUkFOR0UgPSBbMTEwNTkyMCwgMTExMjMxOV07XG5mdW5jdGlvbiBoZXhWYWx1ZUZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgdmFyIGNsZWFuZWQgPSBjb250ZW50LnJlcGxhY2UoQ0xFQU5fQ09OVEVOVF9QQVRURVJOLCAnJyk7XG4gIHZhciBjb2RlUG9pbnQgPSBjb2RlUG9pbnRBdChjbGVhbmVkLCAwKTtcbiAgdmFyIGlzUHJlcGVuZFRlbiA9IGNvZGVQb2ludCA+PSBTRUNPTkRBUllfVU5JQ09ERV9SQU5HRVswXSAmJiBjb2RlUG9pbnQgPD0gU0VDT05EQVJZX1VOSUNPREVfUkFOR0VbMV07XG4gIHZhciBpc0RvdWJsZWQgPSBjbGVhbmVkLmxlbmd0aCA9PT0gMiA/IGNsZWFuZWRbMF0gPT09IGNsZWFuZWRbMV0gOiBmYWxzZTtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogaXNEb3VibGVkID8gdG9IZXgoY2xlYW5lZFswXSkgOiB0b0hleChjbGVhbmVkKSxcbiAgICBpc1NlY29uZGFyeTogaXNQcmVwZW5kVGVuIHx8IGlzRG91YmxlZFxuICB9O1xufVxuXG5mdW5jdGlvbiByZXBsYWNlRm9yUG9zaXRpb24obm9kZSwgcG9zaXRpb24pIHtcbiAgdmFyIHBlbmRpbmdBdHRyaWJ1dGUgPSBcIlwiLmNvbmNhdChEQVRBX0ZBX1BTRVVET19FTEVNRU5UX1BFTkRJTkcpLmNvbmNhdChwb3NpdGlvbi5yZXBsYWNlKCc6JywgJy0nKSk7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKHBlbmRpbmdBdHRyaWJ1dGUpICE9PSBudWxsKSB7XG4gICAgICAvLyBUaGlzIG5vZGUgaXMgYWxyZWFkeSBiZWluZyBwcm9jZXNzZWRcbiAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gdG9BcnJheShub2RlLmNoaWxkcmVuKTtcbiAgICB2YXIgYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQgPSBjaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjLmdldEF0dHJpYnV0ZShEQVRBX0ZBX1BTRVVET19FTEVNRU5UKSA9PT0gcG9zaXRpb247XG4gICAgfSlbMF07XG4gICAgdmFyIHN0eWxlcyA9IFdJTkRPVy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIHBvc2l0aW9uKTtcbiAgICB2YXIgZm9udEZhbWlseSA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LWZhbWlseScpLm1hdGNoKEZPTlRfRkFNSUxZX1BBVFRFUk4pO1xuICAgIHZhciBmb250V2VpZ2h0ID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtd2VpZ2h0Jyk7XG4gICAgdmFyIGNvbnRlbnQgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnY29udGVudCcpO1xuXG4gICAgaWYgKGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50ICYmICFmb250RmFtaWx5KSB7XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IHByb2Nlc3NlZCBpdCBidXQgdGhlIGN1cnJlbnQgY29tcHV0ZWQgc3R5bGUgZG9lcyBub3QgcmVzdWx0IGluIGEgZm9udC1mYW1pbHksXG4gICAgICAvLyB0aGF0IHByb2JhYmx5IG1lYW5zIHRoYXQgYSBjbGFzcyBuYW1lIHRoYXQgd2FzIHByZXZpb3VzbHkgcHJlc2VudCB0byBtYWtlIHRoZSBpY29uIGhhcyBiZWVuXG4gICAgICAvLyByZW1vdmVkLiBTbyB3ZSBub3cgc2hvdWxkIGRlbGV0ZSB0aGUgaWNvbi5cbiAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQpO1xuICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICB9IGVsc2UgaWYgKGZvbnRGYW1pbHkgJiYgY29udGVudCAhPT0gJ25vbmUnICYmIGNvbnRlbnQgIT09ICcnKSB7XG4gICAgICB2YXIgX2NvbnRlbnQgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnY29udGVudCcpO1xuXG4gICAgICB2YXIgZmFtaWx5ID0gflsnU2hhcnAnXS5pbmRleE9mKGZvbnRGYW1pbHlbMl0pID8gRkFNSUxZX1NIQVJQIDogRkFNSUxZX0NMQVNTSUM7XG4gICAgICB2YXIgcHJlZml4ID0gflsnU29saWQnLCAnUmVndWxhcicsICdMaWdodCcsICdUaGluJywgJ0R1b3RvbmUnLCAnQnJhbmRzJywgJ0tpdCddLmluZGV4T2YoZm9udEZhbWlseVsyXSkgPyBTVFlMRV9UT19QUkVGSVhbZmFtaWx5XVtmb250RmFtaWx5WzJdLnRvTG93ZXJDYXNlKCldIDogRk9OVF9XRUlHSFRfVE9fUFJFRklYW2ZhbWlseV1bZm9udFdlaWdodF07XG5cbiAgICAgIHZhciBfaGV4VmFsdWVGcm9tQ29udGVudCA9IGhleFZhbHVlRnJvbUNvbnRlbnQoX2NvbnRlbnQpLFxuICAgICAgICAgIGhleFZhbHVlID0gX2hleFZhbHVlRnJvbUNvbnRlbnQudmFsdWUsXG4gICAgICAgICAgaXNTZWNvbmRhcnkgPSBfaGV4VmFsdWVGcm9tQ29udGVudC5pc1NlY29uZGFyeTtcblxuICAgICAgdmFyIGlzVjQgPSBmb250RmFtaWx5WzBdLnN0YXJ0c1dpdGgoJ0ZvbnRBd2Vzb21lJyk7XG4gICAgICB2YXIgaWNvbk5hbWUgPSBieVVuaWNvZGUocHJlZml4LCBoZXhWYWx1ZSk7XG4gICAgICB2YXIgaWNvbklkZW50aWZpZXIgPSBpY29uTmFtZTtcblxuICAgICAgaWYgKGlzVjQpIHtcbiAgICAgICAgdmFyIGljb25OYW1lNCA9IGJ5T2xkVW5pY29kZShoZXhWYWx1ZSk7XG5cbiAgICAgICAgaWYgKGljb25OYW1lNC5pY29uTmFtZSAmJiBpY29uTmFtZTQucHJlZml4KSB7XG4gICAgICAgICAgaWNvbk5hbWUgPSBpY29uTmFtZTQuaWNvbk5hbWU7XG4gICAgICAgICAgcHJlZml4ID0gaWNvbk5hbWU0LnByZWZpeDtcbiAgICAgICAgfVxuICAgICAgfSAvLyBPbmx5IGNvbnZlcnQgdGhlIHBzZXVkbyBlbGVtZW50IGluIHRoaXMgOjpiZWZvcmUvOjphZnRlciBwb3NpdGlvbiBpbnRvIGFuIGljb24gaWYgd2UgaGF2ZW4ndFxuICAgICAgLy8gYWxyZWFkeSBkb25lIHNvIHdpdGggdGhlIHNhbWUgcHJlZml4IGFuZCBpY29uTmFtZVxuXG5cbiAgICAgIGlmIChpY29uTmFtZSAmJiAhaXNTZWNvbmRhcnkgJiYgKCFhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCB8fCBhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudC5nZXRBdHRyaWJ1dGUoREFUQV9QUkVGSVgpICE9PSBwcmVmaXggfHwgYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQuZ2V0QXR0cmlidXRlKERBVEFfSUNPTikgIT09IGljb25JZGVudGlmaWVyKSkge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShwZW5kaW5nQXR0cmlidXRlLCBpY29uSWRlbnRpZmllcik7XG5cbiAgICAgICAgaWYgKGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50KSB7XG4gICAgICAgICAgLy8gRGVsZXRlIHRoZSBvbGQgb25lLCBzaW5jZSB3ZSdyZSByZXBsYWNpbmcgaXQgd2l0aCBhIG5ldyBvbmVcbiAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtZXRhID0gYmxhbmtNZXRhKCk7XG4gICAgICAgIHZhciBleHRyYSA9IG1ldGEuZXh0cmE7XG4gICAgICAgIGV4dHJhLmF0dHJpYnV0ZXNbREFUQV9GQV9QU0VVRE9fRUxFTUVOVF0gPSBwb3NpdGlvbjtcbiAgICAgICAgZmluZEljb24oaWNvbk5hbWUsIHByZWZpeCkudGhlbihmdW5jdGlvbiAobWFpbikge1xuICAgICAgICAgIHZhciBfYWJzdHJhY3QgPSBtYWtlSW5saW5lU3ZnQWJzdHJhY3QoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIG1ldGEpLCB7fSwge1xuICAgICAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICAgICAgbWFpbjogbWFpbixcbiAgICAgICAgICAgICAgbWFzazogZW1wdHlDYW5vbmljYWxJY29uKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgIGljb25OYW1lOiBpY29uSWRlbnRpZmllcixcbiAgICAgICAgICAgIGV4dHJhOiBleHRyYSxcbiAgICAgICAgICAgIHdhdGNoYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIHZhciBlbGVtZW50ID0gRE9DVU1FTlQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG5cbiAgICAgICAgICBpZiAocG9zaXRpb24gPT09ICc6OmJlZm9yZScpIHtcbiAgICAgICAgICAgIG5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIG5vZGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWxlbWVudC5vdXRlckhUTUwgPSBfYWJzdHJhY3QubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9IdG1sKGEpO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKHBlbmRpbmdBdHRyaWJ1dGUpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2Uobm9kZSkge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoW3JlcGxhY2VGb3JQb3NpdGlvbihub2RlLCAnOjpiZWZvcmUnKSwgcmVwbGFjZUZvclBvc2l0aW9uKG5vZGUsICc6OmFmdGVyJyldKTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc2FibGUobm9kZSkge1xuICByZXR1cm4gbm9kZS5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5oZWFkICYmICF+VEFHTkFNRVNfVE9fU0tJUF9GT1JfUFNFVURPRUxFTUVOVFMuaW5kZXhPZihub2RlLnRhZ05hbWUudG9VcHBlckNhc2UoKSkgJiYgIW5vZGUuZ2V0QXR0cmlidXRlKERBVEFfRkFfUFNFVURPX0VMRU1FTlQpICYmICghbm9kZS5wYXJlbnROb2RlIHx8IG5vZGUucGFyZW50Tm9kZS50YWdOYW1lICE9PSAnc3ZnJyk7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaFBzZXVkb0VsZW1lbnRzKHJvb3QpIHtcbiAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgb3BlcmF0aW9ucyA9IHRvQXJyYXkocm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcqJykpLmZpbHRlcihwcm9jZXNzYWJsZSkubWFwKHJlcGxhY2UpO1xuICAgIHZhciBlbmQgPSBwZXJmLmJlZ2luKCdzZWFyY2hQc2V1ZG9FbGVtZW50cycpO1xuICAgIGRpc2FibGVPYnNlcnZhdGlvbigpO1xuICAgIFByb21pc2UuYWxsKG9wZXJhdGlvbnMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgZW5kKCk7XG4gICAgICBlbmFibGVPYnNlcnZhdGlvbigpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGVuZCgpO1xuICAgICAgZW5hYmxlT2JzZXJ2YXRpb24oKTtcbiAgICAgIHJlamVjdCgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxudmFyIFBzZXVkb0VsZW1lbnRzID0ge1xuICBob29rczogZnVuY3Rpb24gaG9va3MoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG11dGF0aW9uT2JzZXJ2ZXJDYWxsYmFja3M6IGZ1bmN0aW9uIG11dGF0aW9uT2JzZXJ2ZXJDYWxsYmFja3MoYWNjdW11bGF0b3IpIHtcbiAgICAgICAgYWNjdW11bGF0b3IucHNldWRvRWxlbWVudHNDYWxsYmFjayA9IHNlYXJjaFBzZXVkb0VsZW1lbnRzO1xuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgcHJvdmlkZXM6IGZ1bmN0aW9uIHByb3ZpZGVzKHByb3ZpZGVycyQkMSkge1xuICAgIHByb3ZpZGVycyQkMS5wc2V1ZG9FbGVtZW50czJzdmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICB2YXIgX3BhcmFtcyRub2RlID0gcGFyYW1zLm5vZGUsXG4gICAgICAgICAgbm9kZSA9IF9wYXJhbXMkbm9kZSA9PT0gdm9pZCAwID8gRE9DVU1FTlQgOiBfcGFyYW1zJG5vZGU7XG5cbiAgICAgIGlmIChjb25maWcuc2VhcmNoUHNldWRvRWxlbWVudHMpIHtcbiAgICAgICAgc2VhcmNoUHNldWRvRWxlbWVudHMobm9kZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcblxudmFyIF91bndhdGNoZWQgPSBmYWxzZTtcbnZhciBNdXRhdGlvbk9ic2VydmVyJDEgPSB7XG4gIG1peG91dDogZnVuY3Rpb24gbWl4b3V0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBkb206IHtcbiAgICAgICAgdW53YXRjaDogZnVuY3Rpb24gdW53YXRjaCgpIHtcbiAgICAgICAgICBkaXNhYmxlT2JzZXJ2YXRpb24oKTtcbiAgICAgICAgICBfdW53YXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIGhvb2tzOiBmdW5jdGlvbiBob29rcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYm9vdHN0cmFwOiBmdW5jdGlvbiBib290c3RyYXAoKSB7XG4gICAgICAgIG9ic2VydmUoY2hhaW5Ib29rcygnbXV0YXRpb25PYnNlcnZlckNhbGxiYWNrcycsIHt9KSk7XG4gICAgICB9LFxuICAgICAgbm9BdXRvOiBmdW5jdGlvbiBub0F1dG8oKSB7XG4gICAgICAgIGRpc2Nvbm5lY3QoKTtcbiAgICAgIH0sXG4gICAgICB3YXRjaDogZnVuY3Rpb24gd2F0Y2gocGFyYW1zKSB7XG4gICAgICAgIHZhciBvYnNlcnZlTXV0YXRpb25zUm9vdCA9IHBhcmFtcy5vYnNlcnZlTXV0YXRpb25zUm9vdDtcblxuICAgICAgICBpZiAoX3Vud2F0Y2hlZCkge1xuICAgICAgICAgIGVuYWJsZU9ic2VydmF0aW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JzZXJ2ZShjaGFpbkhvb2tzKCdtdXRhdGlvbk9ic2VydmVyQ2FsbGJhY2tzJywge1xuICAgICAgICAgICAgb2JzZXJ2ZU11dGF0aW9uc1Jvb3Q6IG9ic2VydmVNdXRhdGlvbnNSb290XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcblxudmFyIHBhcnNlVHJhbnNmb3JtU3RyaW5nID0gZnVuY3Rpb24gcGFyc2VUcmFuc2Zvcm1TdHJpbmcodHJhbnNmb3JtU3RyaW5nKSB7XG4gIHZhciB0cmFuc2Zvcm0gPSB7XG4gICAgc2l6ZTogMTYsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGZsaXBYOiBmYWxzZSxcbiAgICBmbGlwWTogZmFsc2UsXG4gICAgcm90YXRlOiAwXG4gIH07XG4gIHJldHVybiB0cmFuc2Zvcm1TdHJpbmcudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBuKSB7XG4gICAgdmFyIHBhcnRzID0gbi50b0xvd2VyQ2FzZSgpLnNwbGl0KCctJyk7XG4gICAgdmFyIGZpcnN0ID0gcGFydHNbMF07XG4gICAgdmFyIHJlc3QgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCctJyk7XG5cbiAgICBpZiAoZmlyc3QgJiYgcmVzdCA9PT0gJ2gnKSB7XG4gICAgICBhY2MuZmxpcFggPSB0cnVlO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG5cbiAgICBpZiAoZmlyc3QgJiYgcmVzdCA9PT0gJ3YnKSB7XG4gICAgICBhY2MuZmxpcFkgPSB0cnVlO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG5cbiAgICByZXN0ID0gcGFyc2VGbG9hdChyZXN0KTtcblxuICAgIGlmIChpc05hTihyZXN0KSkge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGZpcnN0KSB7XG4gICAgICBjYXNlICdncm93JzpcbiAgICAgICAgYWNjLnNpemUgPSBhY2Muc2l6ZSArIHJlc3Q7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzaHJpbmsnOlxuICAgICAgICBhY2Muc2l6ZSA9IGFjYy5zaXplIC0gcmVzdDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBhY2MueCA9IGFjYy54IC0gcmVzdDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgYWNjLnggPSBhY2MueCArIHJlc3Q7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd1cCc6XG4gICAgICAgIGFjYy55ID0gYWNjLnkgLSByZXN0O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgIGFjYy55ID0gYWNjLnkgKyByZXN0O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncm90YXRlJzpcbiAgICAgICAgYWNjLnJvdGF0ZSA9IGFjYy5yb3RhdGUgKyByZXN0O1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB0cmFuc2Zvcm0pO1xufTtcbnZhciBQb3dlclRyYW5zZm9ybXMgPSB7XG4gIG1peG91dDogZnVuY3Rpb24gbWl4b3V0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJzZToge1xuICAgICAgICB0cmFuc2Zvcm06IGZ1bmN0aW9uIHRyYW5zZm9ybSh0cmFuc2Zvcm1TdHJpbmcpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VUcmFuc2Zvcm1TdHJpbmcodHJhbnNmb3JtU3RyaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIGhvb2tzOiBmdW5jdGlvbiBob29rcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyc2VOb2RlQXR0cmlidXRlczogZnVuY3Rpb24gcGFyc2VOb2RlQXR0cmlidXRlcyhhY2N1bXVsYXRvciwgbm9kZSkge1xuICAgICAgICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtdHJhbnNmb3JtJyk7XG5cbiAgICAgICAgaWYgKHRyYW5zZm9ybVN0cmluZykge1xuICAgICAgICAgIGFjY3VtdWxhdG9yLnRyYW5zZm9ybSA9IHBhcnNlVHJhbnNmb3JtU3RyaW5nKHRyYW5zZm9ybVN0cmluZyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgcHJvdmlkZXM6IGZ1bmN0aW9uIHByb3ZpZGVzKHByb3ZpZGVycykge1xuICAgIHByb3ZpZGVycy5nZW5lcmF0ZUFic3RyYWN0VHJhbnNmb3JtR3JvdXBpbmcgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIG1haW4gPSBfcmVmLm1haW4sXG4gICAgICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm0sXG4gICAgICAgICAgY29udGFpbmVyV2lkdGggPSBfcmVmLmNvbnRhaW5lcldpZHRoLFxuICAgICAgICAgIGljb25XaWR0aCA9IF9yZWYuaWNvbldpZHRoO1xuICAgICAgdmFyIG91dGVyID0ge1xuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiLmNvbmNhdChjb250YWluZXJXaWR0aCAvIDIsIFwiIDI1NilcIilcbiAgICAgIH07XG4gICAgICB2YXIgaW5uZXJUcmFuc2xhdGUgPSBcInRyYW5zbGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnggKiAzMiwgXCIsIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgKiAzMiwgXCIpIFwiKTtcbiAgICAgIHZhciBpbm5lclNjYWxlID0gXCJzY2FsZShcIi5jb25jYXQodHJhbnNmb3JtLnNpemUgLyAxNiAqICh0cmFuc2Zvcm0uZmxpcFggPyAtMSA6IDEpLCBcIiwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIDE2ICogKHRyYW5zZm9ybS5mbGlwWSA/IC0xIDogMSksIFwiKSBcIik7XG4gICAgICB2YXIgaW5uZXJSb3RhdGUgPSBcInJvdGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnJvdGF0ZSwgXCIgMCAwKVwiKTtcbiAgICAgIHZhciBpbm5lciA9IHtcbiAgICAgICAgdHJhbnNmb3JtOiBcIlwiLmNvbmNhdChpbm5lclRyYW5zbGF0ZSwgXCIgXCIpLmNvbmNhdChpbm5lclNjYWxlLCBcIiBcIikuY29uY2F0KGlubmVyUm90YXRlKVxuICAgICAgfTtcbiAgICAgIHZhciBwYXRoID0ge1xuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiLmNvbmNhdChpY29uV2lkdGggLyAyICogLTEsIFwiIC0yNTYpXCIpXG4gICAgICB9O1xuICAgICAgdmFyIG9wZXJhdGlvbnMgPSB7XG4gICAgICAgIG91dGVyOiBvdXRlcixcbiAgICAgICAgaW5uZXI6IGlubmVyLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGFnOiAnZycsXG4gICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKHt9LCBvcGVyYXRpb25zLm91dGVyKSxcbiAgICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgICAgdGFnOiAnZycsXG4gICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoe30sIG9wZXJhdGlvbnMuaW5uZXIpLFxuICAgICAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICAgICAgdGFnOiBtYWluLmljb24udGFnLFxuICAgICAgICAgICAgY2hpbGRyZW46IG1haW4uaWNvbi5jaGlsZHJlbixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBtYWluLmljb24uYXR0cmlidXRlcyksIG9wZXJhdGlvbnMucGF0aClcbiAgICAgICAgICB9XVxuICAgICAgICB9XVxuICAgICAgfTtcbiAgICB9O1xuICB9XG59O1xuXG52YXIgQUxMX1NQQUNFID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJ1xufTtcblxuZnVuY3Rpb24gZmlsbEJsYWNrKF9hYnN0cmFjdCkge1xuICB2YXIgZm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG5cbiAgaWYgKF9hYnN0cmFjdC5hdHRyaWJ1dGVzICYmIChfYWJzdHJhY3QuYXR0cmlidXRlcy5maWxsIHx8IGZvcmNlKSkge1xuICAgIF9hYnN0cmFjdC5hdHRyaWJ1dGVzLmZpbGwgPSAnYmxhY2snO1xuICB9XG5cbiAgcmV0dXJuIF9hYnN0cmFjdDtcbn1cblxuZnVuY3Rpb24gZGVHcm91cChfYWJzdHJhY3QyKSB7XG4gIGlmIChfYWJzdHJhY3QyLnRhZyA9PT0gJ2cnKSB7XG4gICAgcmV0dXJuIF9hYnN0cmFjdDIuY2hpbGRyZW47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFtfYWJzdHJhY3QyXTtcbiAgfVxufVxuXG52YXIgTWFza3MgPSB7XG4gIGhvb2tzOiBmdW5jdGlvbiBob29rcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyc2VOb2RlQXR0cmlidXRlczogZnVuY3Rpb24gcGFyc2VOb2RlQXR0cmlidXRlcyhhY2N1bXVsYXRvciwgbm9kZSkge1xuICAgICAgICB2YXIgbWFza0RhdGEgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS1tYXNrJyk7XG4gICAgICAgIHZhciBtYXNrID0gIW1hc2tEYXRhID8gZW1wdHlDYW5vbmljYWxJY29uKCkgOiBnZXRDYW5vbmljYWxJY29uKG1hc2tEYXRhLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgcmV0dXJuIGkudHJpbSgpO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKCFtYXNrLnByZWZpeCkge1xuICAgICAgICAgIG1hc2sucHJlZml4ID0gZ2V0RGVmYXVsdFVzYWJsZVByZWZpeCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWNjdW11bGF0b3IubWFzayA9IG1hc2s7XG4gICAgICAgIGFjY3VtdWxhdG9yLm1hc2tJZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLW1hc2staWQnKTtcbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIHByb3ZpZGVzOiBmdW5jdGlvbiBwcm92aWRlcyhwcm92aWRlcnMpIHtcbiAgICBwcm92aWRlcnMuZ2VuZXJhdGVBYnN0cmFjdE1hc2sgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgICAgIG1haW4gPSBfcmVmLm1haW4sXG4gICAgICAgICAgbWFzayA9IF9yZWYubWFzayxcbiAgICAgICAgICBleHBsaWNpdE1hc2tJZCA9IF9yZWYubWFza0lkLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IF9yZWYudHJhbnNmb3JtO1xuICAgICAgdmFyIG1haW5XaWR0aCA9IG1haW4ud2lkdGgsXG4gICAgICAgICAgbWFpblBhdGggPSBtYWluLmljb247XG4gICAgICB2YXIgbWFza1dpZHRoID0gbWFzay53aWR0aCxcbiAgICAgICAgICBtYXNrUGF0aCA9IG1hc2suaWNvbjtcbiAgICAgIHZhciB0cmFucyA9IHRyYW5zZm9ybUZvclN2Zyh7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICBjb250YWluZXJXaWR0aDogbWFza1dpZHRoLFxuICAgICAgICBpY29uV2lkdGg6IG1haW5XaWR0aFxuICAgICAgfSk7XG4gICAgICB2YXIgbWFza1JlY3QgPSB7XG4gICAgICAgIHRhZzogJ3JlY3QnLFxuICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgQUxMX1NQQUNFKSwge30sIHtcbiAgICAgICAgICBmaWxsOiAnd2hpdGUnXG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgICAgdmFyIG1hc2tJbm5lckdyb3VwQ2hpbGRyZW5NaXhpbiA9IG1haW5QYXRoLmNoaWxkcmVuID8ge1xuICAgICAgICBjaGlsZHJlbjogbWFpblBhdGguY2hpbGRyZW4ubWFwKGZpbGxCbGFjaylcbiAgICAgIH0gOiB7fTtcbiAgICAgIHZhciBtYXNrSW5uZXJHcm91cCA9IHtcbiAgICAgICAgdGFnOiAnZycsXG4gICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKHt9LCB0cmFucy5pbm5lciksXG4gICAgICAgIGNoaWxkcmVuOiBbZmlsbEJsYWNrKF9vYmplY3RTcHJlYWQyKHtcbiAgICAgICAgICB0YWc6IG1haW5QYXRoLnRhZyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgbWFpblBhdGguYXR0cmlidXRlcyksIHRyYW5zLnBhdGgpXG4gICAgICAgIH0sIG1hc2tJbm5lckdyb3VwQ2hpbGRyZW5NaXhpbikpXVxuICAgICAgfTtcbiAgICAgIHZhciBtYXNrT3V0ZXJHcm91cCA9IHtcbiAgICAgICAgdGFnOiAnZycsXG4gICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKHt9LCB0cmFucy5vdXRlciksXG4gICAgICAgIGNoaWxkcmVuOiBbbWFza0lubmVyR3JvdXBdXG4gICAgICB9O1xuICAgICAgdmFyIG1hc2tJZCA9IFwibWFzay1cIi5jb25jYXQoZXhwbGljaXRNYXNrSWQgfHwgbmV4dFVuaXF1ZUlkKCkpO1xuICAgICAgdmFyIGNsaXBJZCA9IFwiY2xpcC1cIi5jb25jYXQoZXhwbGljaXRNYXNrSWQgfHwgbmV4dFVuaXF1ZUlkKCkpO1xuICAgICAgdmFyIG1hc2tUYWcgPSB7XG4gICAgICAgIHRhZzogJ21hc2snLFxuICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgQUxMX1NQQUNFKSwge30sIHtcbiAgICAgICAgICBpZDogbWFza0lkLFxuICAgICAgICAgIG1hc2tVbml0czogJ3VzZXJTcGFjZU9uVXNlJyxcbiAgICAgICAgICBtYXNrQ29udGVudFVuaXRzOiAndXNlclNwYWNlT25Vc2UnXG4gICAgICAgIH0pLFxuICAgICAgICBjaGlsZHJlbjogW21hc2tSZWN0LCBtYXNrT3V0ZXJHcm91cF1cbiAgICAgIH07XG4gICAgICB2YXIgZGVmcyA9IHtcbiAgICAgICAgdGFnOiAnZGVmcycsXG4gICAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICAgIHRhZzogJ2NsaXBQYXRoJyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICBpZDogY2xpcElkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaGlsZHJlbjogZGVHcm91cChtYXNrUGF0aClcbiAgICAgICAgfSwgbWFza1RhZ11cbiAgICAgIH07XG4gICAgICBjaGlsZHJlbi5wdXNoKGRlZnMsIHtcbiAgICAgICAgdGFnOiAncmVjdCcsXG4gICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKHtcbiAgICAgICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgICAnY2xpcC1wYXRoJzogXCJ1cmwoI1wiLmNvbmNhdChjbGlwSWQsIFwiKVwiKSxcbiAgICAgICAgICBtYXNrOiBcInVybCgjXCIuY29uY2F0KG1hc2tJZCwgXCIpXCIpXG4gICAgICAgIH0sIEFMTF9TUEFDRSlcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG4gICAgICB9O1xuICAgIH07XG4gIH1cbn07XG5cbnZhciBNaXNzaW5nSWNvbkluZGljYXRvciA9IHtcbiAgcHJvdmlkZXM6IGZ1bmN0aW9uIHByb3ZpZGVzKHByb3ZpZGVycykge1xuICAgIHZhciByZWR1Y2VNb3Rpb24gPSBmYWxzZTtcblxuICAgIGlmIChXSU5ET1cubWF0Y2hNZWRpYSkge1xuICAgICAgcmVkdWNlTW90aW9uID0gV0lORE9XLm1hdGNoTWVkaWEoJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJykubWF0Y2hlcztcbiAgICB9XG5cbiAgICBwcm92aWRlcnMubWlzc2luZ0ljb25BYnN0cmFjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBnQ2hpbGRyZW4gPSBbXTtcbiAgICAgIHZhciBGSUxMID0ge1xuICAgICAgICBmaWxsOiAnY3VycmVudENvbG9yJ1xuICAgICAgfTtcbiAgICAgIHZhciBBTklNQVRJT05fQkFTRSA9IHtcbiAgICAgICAgYXR0cmlidXRlVHlwZTogJ1hNTCcsXG4gICAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZScsXG4gICAgICAgIGR1cjogJzJzJ1xuICAgICAgfTsgLy8gUmluZ1xuXG4gICAgICBnQ2hpbGRyZW4ucHVzaCh7XG4gICAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRklMTCksIHt9LCB7XG4gICAgICAgICAgZDogJ00xNTYuNSw0NDcuN2wtMTIuNiwyOS41Yy0xOC43LTkuNS0zNS45LTIxLjItNTEuNS0zNC45bDIyLjctMjIuN0MxMjcuNiw0MzAuNSwxNDEuNSw0NDAsMTU2LjUsNDQ3Ljd6IE00MC42LDI3Mkg4LjUgYzEuNCwyMS4yLDUuNCw0MS43LDExLjcsNjEuMUw1MCwzMjEuMkM0NS4xLDMwNS41LDQxLjgsMjg5LDQwLjYsMjcyeiBNNDAuNiwyNDBjMS40LTE4LjgsNS4yLTM3LDExLjEtNTQuMWwtMjkuNS0xMi42IEMxNC43LDE5NC4zLDEwLDIxNi43LDguNSwyNDBINDAuNnogTTY0LjMsMTU2LjVjNy44LTE0LjksMTcuMi0yOC44LDI4LjEtNDEuNUw2OS43LDkyLjNjLTEzLjcsMTUuNi0yNS41LDMyLjgtMzQuOSw1MS41IEw2NC4zLDE1Ni41eiBNMzk3LDQxOS42Yy0xMy45LDEyLTI5LjQsMjIuMy00Ni4xLDMwLjRsMTEuOSwyOS44YzIwLjctOS45LDM5LjgtMjIuNiw1Ni45LTM3LjZMMzk3LDQxOS42eiBNMTE1LDkyLjQgYzEzLjktMTIsMjkuNC0yMi4zLDQ2LjEtMzAuNGwtMTEuOS0yOS44Yy0yMC43LDkuOS0zOS44LDIyLjYtNTYuOCwzNy42TDExNSw5Mi40eiBNNDQ3LjcsMzU1LjVjLTcuOCwxNC45LTE3LjIsMjguOC0yOC4xLDQxLjUgbDIyLjcsMjIuN2MxMy43LTE1LjYsMjUuNS0zMi45LDM0LjktNTEuNUw0NDcuNywzNTUuNXogTTQ3MS40LDI3MmMtMS40LDE4LjgtNS4yLDM3LTExLjEsNTQuMWwyOS41LDEyLjYgYzcuNS0yMS4xLDEyLjItNDMuNSwxMy42LTY2LjhINDcxLjR6IE0zMjEuMiw0NjJjLTE1LjcsNS0zMi4yLDguMi00OS4yLDkuNHYzMi4xYzIxLjItMS40LDQxLjctNS40LDYxLjEtMTEuN0wzMjEuMiw0NjJ6IE0yNDAsNDcxLjRjLTE4LjgtMS40LTM3LTUuMi01NC4xLTExLjFsLTEyLjYsMjkuNWMyMS4xLDcuNSw0My41LDEyLjIsNjYuOCwxMy42VjQ3MS40eiBNNDYyLDE5MC44YzUsMTUuNyw4LjIsMzIuMiw5LjQsNDkuMmgzMi4xIGMtMS40LTIxLjItNS40LTQxLjctMTEuNy02MS4xTDQ2MiwxOTAuOHogTTkyLjQsMzk3Yy0xMi0xMy45LTIyLjMtMjkuNC0zMC40LTQ2LjFsLTI5LjgsMTEuOWM5LjksMjAuNywyMi42LDM5LjgsMzcuNiw1Ni45IEw5Mi40LDM5N3ogTTI3Miw0MC42YzE4LjgsMS40LDM2LjksNS4yLDU0LjEsMTEuMWwxMi42LTI5LjVDMzE3LjcsMTQuNywyOTUuMywxMCwyNzIsOC41VjQwLjZ6IE0xOTAuOCw1MCBjMTUuNy01LDMyLjItOC4yLDQ5LjItOS40VjguNWMtMjEuMiwxLjQtNDEuNyw1LjQtNjEuMSwxMS43TDE5MC44LDUweiBNNDQyLjMsOTIuM0w0MTkuNiwxMTVjMTIsMTMuOSwyMi4zLDI5LjQsMzAuNSw0Ni4xIGwyOS44LTExLjlDNDcwLDEyOC41LDQ1Ny4zLDEwOS40LDQ0Mi4zLDkyLjN6IE0zOTcsOTIuNGwyMi43LTIyLjdjLTE1LjYtMTMuNy0zMi44LTI1LjUtNTEuNS0zNC45bC0xMi42LDI5LjUgQzM3MC40LDcyLjEsMzg0LjQsODEuNSwzOTcsOTIuNHonXG4gICAgICAgIH0pXG4gICAgICB9KTtcblxuICAgICAgdmFyIE9QQUNJVFlfQU5JTUFURSA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBBTklNQVRJT05fQkFTRSksIHt9LCB7XG4gICAgICAgIGF0dHJpYnV0ZU5hbWU6ICdvcGFjaXR5J1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBkb3QgPSB7XG4gICAgICAgIHRhZzogJ2NpcmNsZScsXG4gICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBGSUxMKSwge30sIHtcbiAgICAgICAgICBjeDogJzI1NicsXG4gICAgICAgICAgY3k6ICczNjQnLFxuICAgICAgICAgIHI6ICcyOCdcbiAgICAgICAgfSksXG4gICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgfTtcblxuICAgICAgaWYgKCFyZWR1Y2VNb3Rpb24pIHtcbiAgICAgICAgZG90LmNoaWxkcmVuLnB1c2goe1xuICAgICAgICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBBTklNQVRJT05fQkFTRSksIHt9LCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiAncicsXG4gICAgICAgICAgICB2YWx1ZXM6ICcyODsxNDsyODsyODsxNDsyODsnXG4gICAgICAgICAgfSlcbiAgICAgICAgfSwge1xuICAgICAgICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBPUEFDSVRZX0FOSU1BVEUpLCB7fSwge1xuICAgICAgICAgICAgdmFsdWVzOiAnMTswOzE7MTswOzE7J1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBnQ2hpbGRyZW4ucHVzaChkb3QpO1xuICAgICAgZ0NoaWxkcmVuLnB1c2goe1xuICAgICAgICB0YWc6ICdwYXRoJyxcbiAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZJTEwpLCB7fSwge1xuICAgICAgICAgIG9wYWNpdHk6ICcxJyxcbiAgICAgICAgICBkOiAnTTI2My43LDMxMmgtMTZjLTYuNiwwLTEyLTUuNC0xMi0xMmMwLTcxLDc3LjQtNjMuOSw3Ny40LTEwNy44YzAtMjAtMTcuOC00MC4yLTU3LjQtNDAuMmMtMjkuMSwwLTQ0LjMsOS42LTU5LjIsMjguNyBjLTMuOSw1LTExLjEsNi0xNi4yLDIuNGwtMTMuMS05LjJjLTUuNi0zLjktNi45LTExLjgtMi42LTE3LjJjMjEuMi0yNy4yLDQ2LjQtNDQuNyw5MS4yLTQ0LjdjNTIuMywwLDk3LjQsMjkuOCw5Ny40LDgwLjIgYzAsNjcuNi03Ny40LDYzLjUtNzcuNCwxMDcuOEMyNzUuNywzMDYuNiwyNzAuMywzMTIsMjYzLjcsMzEyeidcbiAgICAgICAgfSksXG4gICAgICAgIGNoaWxkcmVuOiByZWR1Y2VNb3Rpb24gPyBbXSA6IFt7XG4gICAgICAgICAgdGFnOiAnYW5pbWF0ZScsXG4gICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIE9QQUNJVFlfQU5JTUFURSksIHt9LCB7XG4gICAgICAgICAgICB2YWx1ZXM6ICcxOzA7MDswOzA7MTsnXG4gICAgICAgICAgfSlcbiAgICAgICAgfV1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlZHVjZU1vdGlvbikge1xuICAgICAgICAvLyBFeGNsYW1hdGlvblxuICAgICAgICBnQ2hpbGRyZW4ucHVzaCh7XG4gICAgICAgICAgdGFnOiAncGF0aCcsXG4gICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZJTEwpLCB7fSwge1xuICAgICAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICAgICAgZDogJ00yMzIuNSwxMzQuNWw3LDE2OGMwLjMsNi40LDUuNiwxMS41LDEyLDExLjVoOWM2LjQsMCwxMS43LTUuMSwxMi0xMS41bDctMTY4YzAuMy02LjgtNS4yLTEyLjUtMTItMTIuNWgtMjMgQzIzNy43LDEyMiwyMzIuMiwxMjcuNywyMzIuNSwxMzQuNXonXG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgICAgICB0YWc6ICdhbmltYXRlJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBPUEFDSVRZX0FOSU1BVEUpLCB7fSwge1xuICAgICAgICAgICAgICB2YWx1ZXM6ICcwOzA7MTsxOzA7MDsnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1dXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0YWc6ICdnJyxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICdjbGFzcyc6ICdtaXNzaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogZ0NoaWxkcmVuXG4gICAgICB9O1xuICAgIH07XG4gIH1cbn07XG5cbnZhciBTdmdTeW1ib2xzID0ge1xuICBob29rczogZnVuY3Rpb24gaG9va3MoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcnNlTm9kZUF0dHJpYnV0ZXM6IGZ1bmN0aW9uIHBhcnNlTm9kZUF0dHJpYnV0ZXMoYWNjdW11bGF0b3IsIG5vZGUpIHtcbiAgICAgICAgdmFyIHN5bWJvbERhdGEgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS1zeW1ib2wnKTtcbiAgICAgICAgdmFyIHN5bWJvbCA9IHN5bWJvbERhdGEgPT09IG51bGwgPyBmYWxzZSA6IHN5bWJvbERhdGEgPT09ICcnID8gdHJ1ZSA6IHN5bWJvbERhdGE7XG4gICAgICAgIGFjY3VtdWxhdG9yWydzeW1ib2wnXSA9IHN5bWJvbDtcbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG5cbnZhciBwbHVnaW5zID0gW0luamVjdENTUywgUmVwbGFjZUVsZW1lbnRzLCBMYXllcnMsIExheWVyc0NvdW50ZXIsIExheWVyc1RleHQsIFBzZXVkb0VsZW1lbnRzLCBNdXRhdGlvbk9ic2VydmVyJDEsIFBvd2VyVHJhbnNmb3JtcywgTWFza3MsIE1pc3NpbmdJY29uSW5kaWNhdG9yLCBTdmdTeW1ib2xzXTtcblxucmVnaXN0ZXJQbHVnaW5zKHBsdWdpbnMsIHtcbiAgbWl4b3V0c1RvOiBhcGlcbn0pO1xudmFyIG5vQXV0byQxID0gYXBpLm5vQXV0bztcbnZhciBjb25maWckMSA9IGFwaS5jb25maWc7XG52YXIgbGlicmFyeSQxID0gYXBpLmxpYnJhcnk7XG52YXIgZG9tJDEgPSBhcGkuZG9tO1xudmFyIHBhcnNlJDEgPSBhcGkucGFyc2U7XG52YXIgZmluZEljb25EZWZpbml0aW9uJDEgPSBhcGkuZmluZEljb25EZWZpbml0aW9uO1xudmFyIHRvSHRtbCQxID0gYXBpLnRvSHRtbDtcbnZhciBpY29uID0gYXBpLmljb247XG52YXIgbGF5ZXIgPSBhcGkubGF5ZXI7XG52YXIgdGV4dCA9IGFwaS50ZXh0O1xudmFyIGNvdW50ZXIgPSBhcGkuY291bnRlcjtcblxuZXhwb3J0IHsgbm9BdXRvJDEgYXMgbm9BdXRvLCBjb25maWckMSBhcyBjb25maWcsIGxpYnJhcnkkMSBhcyBsaWJyYXJ5LCBkb20kMSBhcyBkb20sIHBhcnNlJDEgYXMgcGFyc2UsIGZpbmRJY29uRGVmaW5pdGlvbiQxIGFzIGZpbmRJY29uRGVmaW5pdGlvbiwgdG9IdG1sJDEgYXMgdG9IdG1sLCBpY29uLCBsYXllciwgdGV4dCwgY291bnRlciwgYXBpIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQgaW1wb3J0L2V4dGVuc2lvbnM6IDAgKi9cbmltcG9ydCAnLi9zdHlsZS5jc3MnOyBpbXBvcnQgeyBsaWJyYXJ5LCBkb20gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHsgZmFIZWFydCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUhlYXJ0JztcbmltcG9ydCBTSE9XUyBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IElOVEVSQUNUSU9OUyBmcm9tICcuL2ludGVyYXRpb25zLmpzJztcbmltcG9ydCBDT01NRU5UUyBmcm9tICcuL2NvbW1lbnRzLmpzJztcblxubGlicmFyeS5hZGQoZmFIZWFydCk7XG5kb20ud2F0Y2goKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIFNIT1dTLmRpc3BsYXlTaG93cygpO1xuICBJTlRFUkFDVElPTlMuZ2V0TGlrZXMoKTtcbiAgQ09NTUVOVFMuZ2V0Q29tbWVudHMoKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgSU5URVJBQ1RJT05TLmNyZWF0ZU5ld0xpa2UoZSk7XG4gIElOVEVSQUNUSU9OUy5yZW1vdmVQb3BVcChlKTtcblxuICAgU0hPV1MuZ2V0U2hvd3MoKS50aGVuKGRhdGEgPT4ge1xuICAgIENPTU1FTlRTLmRpc3BsYXlQb3BVcChlLCBkYXRhKVxuICAgfSlcbiAgIENPTU1FTlRTLnBvc3RDb21tZW50KGUpIFxufSk7XG5cbiAgXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==