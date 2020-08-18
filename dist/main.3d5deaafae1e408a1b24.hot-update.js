webpackHotUpdate("main",{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Restaurant.vue?vue&type=template&id=40399677&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Restaurant.vue?vue&type=template&id=40399677& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"body\", [\n    _c(\n      \"nav\",\n      { staticClass: \"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\" },\n      [\n        _c(\n          \"div\",\n          { staticClass: \"container\" },\n          [\n            _c(\n              \"router-link\",\n              { staticClass: \"navbar-brand\", attrs: { to: \"/\" } },\n              [_vm._v(\"Fetch\")]\n            ),\n            _vm._v(\" \"),\n            _vm._m(0),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"collapse navbar-collapse\",\n                attrs: { id: \"navbarResponsive\" }\n              },\n              [\n                _c(\"ul\", { staticClass: \"navbar-nav ml-auto\" }, [\n                  _vm._m(1),\n                  _vm._v(\" \"),\n                  _c(\n                    \"li\",\n                    { staticClass: \"nav-item\" },\n                    [\n                      _c(\n                        \"router-link\",\n                        { staticClass: \"nav-link\", attrs: { to: \"/orders\" } },\n                        [_vm._v(\"Orders\")]\n                      )\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"li\",\n                    { staticClass: \"nav-item\" },\n                    [\n                      _c(\n                        \"router-link\",\n                        { staticClass: \"nav-link\", attrs: { to: \"/cart\" } },\n                        [_vm._v(\"Cart\")]\n                      )\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"li\",\n                    [\n                      _c(\n                        \"router-link\",\n                        { staticClass: \"nav-link\", attrs: { to: \"/admin\" } },\n                        [_vm._v(\"Admin\")]\n                      )\n                    ],\n                    1\n                  )\n                ])\n              ]\n            )\n          ],\n          1\n        )\n      ]\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"container\" },\n      [\n        _c(\"h1\", { staticClass: \"my-4 pt-5\" }, [_vm._v(\"Restaurant\")]),\n        _vm._v(\" \"),\n        _vm._l(_vm.allProducts, function(product) {\n          return _c(\"div\", { key: product.key, staticClass: \"row\" }, [\n            _vm._m(2, true),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"col-md-5\" }, [\n              _c(\"h3\", [_vm._v(_vm._s(product.title))]),\n              _vm._v(\" \"),\n              _c(\"p\", [_vm._v(_vm._s(product.description))]),\n              _vm._v(\" \"),\n              _c(\"p\", [_vm._v(_vm._s(product.price))]),\n              _vm._v(\" \"),\n              _c(\n                \"button\",\n                {\n                  staticClass: \"btn btn-primary\",\n                  on: {\n                    click: function($event) {\n                      return _vm.addProductToCart(product)\n                    }\n                  }\n                },\n                [_vm._v(\"Order\")]\n              )\n            ])\n          ])\n        }),\n        _vm._v(\" \"),\n        _c(\"hr\"),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"row\" }, [\n          _vm._m(3),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"col-md-5\" }, [\n            _c(\"h3\", [_vm._v(\"Meal Two\")]),\n            _vm._v(\" \"),\n            _c(\"p\", [_vm._v(\"Meal Description\")]),\n            _vm._v(\" \"),\n            _c(\"p\", [_vm._v(\"Price:\")]),\n            _vm._v(\" \"),\n            _c(\n              \"a\",\n              {\n                staticClass: \"btn btn-primary\",\n                attrs: { href: \"#\" },\n                on: {\n                  click: function($event) {\n                    _vm.counter += 1\n                  }\n                }\n              },\n              [_vm._v(\"Order\")]\n            )\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\"hr\"),\n        _vm._v(\" \"),\n        _vm._m(4),\n        _vm._v(\" \"),\n        _c(\"hr\"),\n        _vm._v(\" \"),\n        _vm._m(5)\n      ],\n      2\n    ),\n    _vm._v(\" \"),\n    _vm._m(6)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"button\",\n      {\n        staticClass: \"navbar-toggler\",\n        attrs: {\n          type: \"button\",\n          \"data-toggle\": \"collapse\",\n          \"data-target\": \"#navbarResponsive\",\n          \"aria-controls\": \"navbarResponsive\",\n          \"aria-expanded\": \"false\",\n          \"aria-label\": \"Toggle navigation\"\n        }\n      },\n      [_c(\"span\", { staticClass: \"navbar-toggler-icon\" })]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"li\", { staticClass: \"nav-item avatar dropdown\" }, [\n      _c(\n        \"a\",\n        {\n          staticClass: \"nav-link dropdown-toggle\",\n          attrs: {\n            id: \"navbarDropdownMenuLink-5\",\n            \"data-toggle\": \"dropdown\",\n            \"aria-haspopup\": \"true\",\n            \"aria-expanded\": \"true\"\n          }\n        },\n        [\n          _c(\"span\", { staticClass: \"badge badge-danger ml-2\" }, [_vm._v(\"1\")]),\n          _vm._v(\" \"),\n          _c(\"i\", { staticClass: \"fas fa-envelope\" })\n        ]\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        {\n          staticClass:\n            \"dropdown-menu dropdown-menu-lg-right dropdown-secondary\",\n          attrs: { \"aria-labelledby\": \"navbarDropdownMenuLink-5\" }\n        },\n        [\n          _c(\n            \"a\",\n            {\n              staticClass: \"dropdown-item\",\n              attrs: { href: \"customer_orders.html\" }\n            },\n            [_vm._v(\"Order delivered \")]\n          )\n        ]\n      )\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"col-md-7\" }, [\n      _c(\"a\", { attrs: { href: \"#\" } }, [\n        _c(\"img\", {\n          staticClass: \"img-fluid rounded mb-3 mb-md-0\",\n          attrs: { src: \"http://placehold.it/700x300\", alt: \"\" }\n        })\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"col-md-7\" }, [\n      _c(\"a\", { attrs: { href: \"#\" } }, [\n        _c(\"img\", {\n          staticClass: \"img-fluid rounded mb-3 mb-md-0\",\n          attrs: { src: \"http://placehold.it/700x300\", alt: \"\" }\n        })\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"row\" }, [\n      _c(\"div\", { staticClass: \"col-md-7\" }, [\n        _c(\"a\", { attrs: { href: \"#\" } }, [\n          _c(\"img\", {\n            staticClass: \"img-fluid rounded mb-3 mb-md-0\",\n            attrs: { src: \"http://placehold.it/700x300\", alt: \"\" }\n          })\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"col-md-5\" }, [\n        _c(\"h3\", [_vm._v(\"Meal Three\")]),\n        _vm._v(\" \"),\n        _c(\"p\", [_vm._v(\"Meal Description\")]),\n        _vm._v(\" \"),\n        _c(\"p\", [_vm._v(\"Price:\")]),\n        _vm._v(\" \"),\n        _c(\"a\", { staticClass: \"btn btn-primary\", attrs: { href: \"#\" } }, [\n          _vm._v(\"Order\")\n        ])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"row\" }, [\n      _c(\"div\", { staticClass: \"col-md-7 pb-5\" }, [\n        _c(\"a\", { attrs: { href: \"#\" } }, [\n          _c(\"img\", {\n            staticClass: \"img-fluid rounded mb-3 mb-md-0\",\n            attrs: { src: \"http://placehold.it/700x300\", alt: \"\" }\n          })\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"col-md-5\" }, [\n        _c(\"h3\", [_vm._v(\"Meal Four\")]),\n        _vm._v(\" \"),\n        _c(\"p\", [_vm._v(\"Meal Description\")]),\n        _vm._v(\" \"),\n        _c(\"p\", [_vm._v(\"Price:\")]),\n        _vm._v(\" \"),\n        _c(\"a\", { staticClass: \"btn btn-primary\", attrs: { href: \"#\" } }, [\n          _vm._v(\"Order\")\n        ])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"section\", { staticClass: \"py-5 page-content-1\" }, [\n      _c(\"div\", { staticClass: \"container\" }, [\n        _c(\"div\", { staticClass: \"col-sm\" }, [\n          _c(\"label\", [_vm._v(\"Contact us, etc. here\")])\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/Restaurant.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})