webpackHotUpdate("main",{

/***/ "./src/store/modules/orders.js":
/*!*************************************!*\
  !*** ./src/store/modules/orders.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst state = {\r\n    orders: [\r\n        {\r\n            id: 1,\r\n            title: 'Order One',\r\n            price: '10.00',\r\n            restaurant: 'Restaurant1',\r\n            status: 'Done boi',\r\n            quantity: '1'\r\n        },\r\n        {\r\n            id: 2,\r\n            title: 'Order Two',\r\n            price: '15.00',\r\n            restaurant: 'Restaurant2',\r\n            status: 'Processing',\r\n            quantity: '1'\r\n        }\r\n    ]\r\n};\r\n\r\nconst getters = {\r\n    allOrders: (state) => state.orders\r\n};\r\n\r\nconst actions = {\r\n    addToCaart(context, order) {\r\n        // Get item\r\n        const cartItem = context.state.orders.find(item => item === order.id)\r\n        // If not in cart, add to cart\r\n        if (!cartItem) {\r\n            context.commit('pushOrderToCart', order.id)\r\n        } else {\r\n        // If in cart, increment quantity\r\n        context.commit('incrementOrderQuantity')\r\n        }\r\n        \r\n\r\n    }\r\n};\r\n\r\nconst mutations = {};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    state,\r\n    getters,\r\n    actions,\r\n    mutations\r\n});\n\n//# sourceURL=webpack:///./src/store/modules/orders.js?");

/***/ })

})