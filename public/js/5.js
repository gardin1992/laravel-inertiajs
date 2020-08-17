(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Placeholder/Key.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Placeholder/Key.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/MainLayout */ \"./resources/js/Layouts/MainLayout.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar components = {\n  MainLayout: _Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  metaInfo: function metaInfo() {\n    return {\n      title: this.metaTag.title,\n      titleTemplate: function titleTemplate(title) {\n        return title ? \"\".concat(title, \" - Testando InertiaJS\") : 'Testando InertiaJS';\n      },\n      meta: [{\n        name: 'description',\n        content: this.metaTag.description\n      }, {\n        name: 'image',\n        content: this.metaTag.image\n      }, // facebook\n      {\n        property: 'og:type',\n        content: this.metaTag.type\n      }, {\n        property: 'og:title',\n        content: title\n      }, {\n        property: 'og:description',\n        content: this.metaTag.description\n      }, {\n        property: 'og:image',\n        content: this.metaTag.image\n      }, {\n        property: 'og:url',\n        content: this.metaTag.url\n      }, {\n        property: 'og:site_name',\n        content: this.metaTag.site_name\n      }, // twitter\n      {\n        name: 'twitter:url',\n        content: this.metaTag.url\n      }, {\n        name: 'twitter:title',\n        content: this.metaTag.title\n      }, {\n        name: 'twitter:description',\n        content: this.metaTag.description\n      }, {\n        name: 'twitter:image',\n        content: this.metaTag.image\n      }]\n    };\n  },\n  data: function data() {\n    return {\n      metaTag: {\n        type: \"article\",\n        title: \"\",\n        description: \"\",\n        image: \"\",\n        url: \"\",\n        site_name: \"\"\n      }\n    };\n  },\n  components: components,\n  props: {\n    placeholder: Object,\n    event: [],\n    id: 0\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    fetch(\"https://jsonplaceholder.typicode.com/posts/\".concat(this.id)).then(function (response) {\n      return response.json();\n    }).then(function (json) {\n      console.log(json);\n      _this.placeholder = json;\n      _this.metaTag.title = _this.placeholder.title;\n      _this.metaTag.author = \"João Antonio Gardin Vieira\";\n      _this.metaTag.description = \"Essa é uma descrição longa da pagina que vai ser exibida\";\n      _this.metaTag.image = \"https://via.placeholder.com/600x315\";\n\n      _this.metaTag.meta.push({\n        property: \"og:image\",\n        content: _this.metaTag.image\n      });\n\n      _this.metaTag.meta.push({\n        name: 'twitter:image',\n        content: _this.metaTag.image\n      });\n\n      var a = _this.metaTag.meta.find(function (a) {\n        return a.name == 'twitter:image';\n      });\n\n      console.log(a);\n\n      _this.metaTag.meta.push({\n        property: \"og:image:width\",\n        content: \"600\"\n      });\n\n      _this.metaTag.meta.push({\n        property: \"og:image:height\",\n        content: \"315\"\n      });\n\n      _this.metaTag.meta.push({\n        property: \"og:type\",\n        content: \"article\"\n      });\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL1BhZ2VzL1BsYWNlaG9sZGVyL0tleS52dWU/NWQ5OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFDQSxVQURBLHNCQUNBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBO0FBQUE7QUFBQSxPQUZBO0FBR0EsYUFDQTtBQUFBO0FBQUE7QUFBQSxPQURBLEVBRUE7QUFBQTtBQUFBO0FBQUEsT0FGQSxFQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUEsT0FKQSxFQUtBO0FBQUE7QUFBQTtBQUFBLE9BTEEsRUFNQTtBQUFBO0FBQUE7QUFBQSxPQU5BLEVBT0E7QUFBQTtBQUFBO0FBQUEsT0FQQSxFQVFBO0FBQUE7QUFBQTtBQUFBLE9BUkEsRUFTQTtBQUFBO0FBQUE7QUFBQSxPQVRBLEVBV0E7QUFDQTtBQUFBO0FBQUE7QUFBQSxPQVpBLEVBYUE7QUFBQTtBQUFBO0FBQUEsT0FiQSxFQWNBO0FBQUE7QUFBQTtBQUFBLE9BZEEsRUFlQTtBQUFBO0FBQUE7QUFBQSxPQWZBO0FBSEE7QUFxQkEsR0F2QkE7QUF3QkEsTUF4QkEsa0JBd0JBO0FBQ0E7QUFDQTtBQUNBLHVCQURBO0FBRUEsaUJBRkE7QUFHQSx1QkFIQTtBQUlBLGlCQUpBO0FBS0EsZUFMQTtBQU1BO0FBTkE7QUFEQTtBQVVBLEdBbkNBO0FBb0NBLHdCQXBDQTtBQXFDQTtBQUNBLHVCQURBO0FBRUEsYUFGQTtBQUdBO0FBSEEsR0FyQ0E7QUEwQ0EsU0ExQ0EscUJBMENBO0FBQUE7O0FBQ0EseUVBQ0EsSUFEQSxDQUNBO0FBQUE7QUFBQSxLQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FDQSwwREFEQTtBQUdBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTs7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLEtBdEJBLFdBdUJBO0FBQUE7QUFBQSxLQXZCQTtBQXdCQTtBQW5FQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvUGFnZXMvUGxhY2Vob2xkZXIvS2V5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPG1haW4tbGF5b3V0IHRpdGxlPVwiUGxhY2Vob2xkZXJcIj5cclxuICAgIDxkaXYgdi1pZj1cIiEhcGxhY2Vob2xkZXJcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7eyBwbGFjZWhvbGRlci50aXRsZSB9fSAtXHJcbiAgICAgICAgPHNtYWxsPnt7IHBsYWNlaG9sZGVyLnVzZXJJZCB9fTwvc21hbGw+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82MDB4MzE1XCJcclxuICAgICAgLz5cclxuICAgICAgPGRpdj57eyBwbGFjZWhvbGRlci5ib2R5fX08L2Rpdj5cclxuICAgICAge3twbGFjZWhvbGRlci5pZH19XHJcbiAgICA8L2Rpdj5cclxuICA8L21haW4tbGF5b3V0PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIkAvTGF5b3V0cy9NYWluTGF5b3V0XCI7XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0ge1xyXG4gIE1haW5MYXlvdXQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbWV0YUluZm8oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogdGhpcy5tZXRhVGFnLnRpdGxlLFxyXG4gICAgICB0aXRsZVRlbXBsYXRlOiAodGl0bGUpID0+IHRpdGxlID8gYCR7dGl0bGV9IC0gVGVzdGFuZG8gSW5lcnRpYUpTYCA6ICdUZXN0YW5kbyBJbmVydGlhSlMnLFxyXG4gICAgICBtZXRhOiBbXHJcbiAgICAgICAgeyBuYW1lOiAnZGVzY3JpcHRpb24nLCBjb250ZW50OiB0aGlzLm1ldGFUYWcuZGVzY3JpcHRpb24gfSxcclxuICAgICAgICB7IG5hbWU6ICdpbWFnZScsIGNvbnRlbnQ6IHRoaXMubWV0YVRhZy5pbWFnZSB9LFxyXG4gICAgICAgIC8vIGZhY2Vib29rXHJcbiAgICAgICAgeyBwcm9wZXJ0eTogJ29nOnR5cGUnLCBjb250ZW50OiB0aGlzLm1ldGFUYWcudHlwZSB9LFxyXG4gICAgICAgIHsgcHJvcGVydHk6ICdvZzp0aXRsZScsIGNvbnRlbnQ6IHRpdGxlIH0sXHJcbiAgICAgICAgeyBwcm9wZXJ0eTogJ29nOmRlc2NyaXB0aW9uJywgY29udGVudDogdGhpcy5tZXRhVGFnLmRlc2NyaXB0aW9uIH0sXHJcbiAgICAgICAgeyBwcm9wZXJ0eTogJ29nOmltYWdlJywgY29udGVudDogdGhpcy5tZXRhVGFnLmltYWdlIH0sXHJcbiAgICAgICAgeyBwcm9wZXJ0eTogJ29nOnVybCcsIGNvbnRlbnQ6IHRoaXMubWV0YVRhZy51cmwgfSxcclxuICAgICAgICB7IHByb3BlcnR5OiAnb2c6c2l0ZV9uYW1lJywgY29udGVudDogdGhpcy5tZXRhVGFnLnNpdGVfbmFtZSB9LFxyXG5cclxuICAgICAgICAvLyB0d2l0dGVyXHJcbiAgICAgICAgeyBuYW1lOiAndHdpdHRlcjp1cmwnLCBjb250ZW50OiB0aGlzLm1ldGFUYWcudXJsIH0sXHJcbiAgICAgICAgeyBuYW1lOiAndHdpdHRlcjp0aXRsZScsIGNvbnRlbnQ6IHRoaXMubWV0YVRhZy50aXRsZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ3R3aXR0ZXI6ZGVzY3JpcHRpb24nLCBjb250ZW50OiB0aGlzLm1ldGFUYWcuZGVzY3JpcHRpb24gfSxcclxuICAgICAgICB7IG5hbWU6ICd0d2l0dGVyOmltYWdlJywgY29udGVudDogdGhpcy5tZXRhVGFnLmltYWdlIH0sXHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWV0YVRhZzoge1xyXG4gICAgICAgIHR5cGU6IFwiYXJ0aWNsZVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgIHVybDogXCJcIixcclxuICAgICAgICBzaXRlX25hbWU6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY29tcG9uZW50cyxcclxuICBwcm9wczoge1xyXG4gICAgcGxhY2Vob2xkZXI6IE9iamVjdCxcclxuICAgIGV2ZW50OiBbXSxcclxuICAgIGlkOiAwLFxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvJHt0aGlzLmlkfWApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0ganNvbjtcclxuICAgICAgICB0aGlzLm1ldGFUYWcudGl0bGUgPSB0aGlzLnBsYWNlaG9sZGVyLnRpdGxlO1xyXG4gICAgICAgIHRoaXMubWV0YVRhZy5hdXRob3IgPSBcIkpvw6NvIEFudG9uaW8gR2FyZGluIFZpZWlyYVwiO1xyXG4gICAgICAgIHRoaXMubWV0YVRhZy5kZXNjcmlwdGlvbiA9XHJcbiAgICAgICAgICBcIkVzc2Egw6kgdW1hIGRlc2NyacOnw6NvIGxvbmdhIGRhIHBhZ2luYSBxdWUgdmFpIHNlciBleGliaWRhXCI7XHJcblxyXG4gICAgICAgIHRoaXMubWV0YVRhZy5pbWFnZSA9IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzYwMHgzMTVcIjtcclxuXHJcbiAgICAgICAgdGhpcy5tZXRhVGFnLm1ldGEucHVzaCh7IHByb3BlcnR5OiBcIm9nOmltYWdlXCIsIGNvbnRlbnQ6IHRoaXMubWV0YVRhZy5pbWFnZSB9KTtcclxuICAgICAgICB0aGlzLm1ldGFUYWcubWV0YS5wdXNoKHsgbmFtZTogJ3R3aXR0ZXI6aW1hZ2UnLCBjb250ZW50OiB0aGlzLm1ldGFUYWcuaW1hZ2UgfSk7XHJcblxyXG4gICAgICAgIHZhciBhID0gdGhpcy5tZXRhVGFnLm1ldGEuZmluZChhID0+IGEubmFtZSA9PSAndHdpdHRlcjppbWFnZScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGEpXHJcblxyXG4gICAgICAgIHRoaXMubWV0YVRhZy5tZXRhLnB1c2goeyBwcm9wZXJ0eTogXCJvZzppbWFnZTp3aWR0aFwiLCBjb250ZW50OiBcIjYwMFwiIH0pO1xyXG4gICAgICAgIHRoaXMubWV0YVRhZy5tZXRhLnB1c2goeyBwcm9wZXJ0eTogXCJvZzppbWFnZTpoZWlnaHRcIiwgY29udGVudDogXCIzMTVcIiB9KTtcclxuICAgICAgICB0aGlzLm1ldGFUYWcubWV0YS5wdXNoKHsgcHJvcGVydHk6IFwib2c6dHlwZVwiLCBjb250ZW50OiBcImFydGljbGVcIiB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Placeholder/Key.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Placeholder/Key.vue?vue&type=template&id=d73cb0ec&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Placeholder/Key.vue?vue&type=template&id=d73cb0ec& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"main-layout\", { attrs: { title: \"Placeholder\" } }, [\n    !!_vm.placeholder\n      ? _c(\"div\", [\n          _c(\"div\", [\n            _vm._v(\"\\n      \" + _vm._s(_vm.placeholder.title) + \" -\\n      \"),\n            _c(\"small\", [_vm._v(_vm._s(_vm.placeholder.userId))])\n          ]),\n          _vm._v(\" \"),\n          _c(\"img\", { attrs: { src: \"https://via.placeholder.com/600x315\" } }),\n          _vm._v(\" \"),\n          _c(\"div\", [_vm._v(_vm._s(_vm.placeholder.body))]),\n          _vm._v(\"\\n    \" + _vm._s(_vm.placeholder.id) + \"\\n  \")\n        ])\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvUGxhY2Vob2xkZXIvS2V5LnZ1ZT9hNWU1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFNBQVMsdUJBQXVCLEVBQUU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUyw2Q0FBNkMsRUFBRTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL1BhZ2VzL1BsYWNlaG9sZGVyL0tleS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDczY2IwZWMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcIm1haW4tbGF5b3V0XCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiUGxhY2Vob2xkZXJcIiB9IH0sIFtcbiAgICAhIV92bS5wbGFjZWhvbGRlclxuICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoX3ZtLnBsYWNlaG9sZGVyLnRpdGxlKSArIFwiIC1cXG4gICAgICBcIiksXG4gICAgICAgICAgICBfYyhcInNtYWxsXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5wbGFjZWhvbGRlci51c2VySWQpKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNjAweDMxNVwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucGxhY2Vob2xkZXIuYm9keSkpXSksXG4gICAgICAgICAgX3ZtLl92KFwiXFxuICAgIFwiICsgX3ZtLl9zKF92bS5wbGFjZWhvbGRlci5pZCkgKyBcIlxcbiAgXCIpXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Placeholder/Key.vue?vue&type=template&id=d73cb0ec&\n");

/***/ }),

/***/ "./resources/js/Pages/Placeholder/Key.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Placeholder/Key.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Key_vue_vue_type_template_id_d73cb0ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Key.vue?vue&type=template&id=d73cb0ec& */ \"./resources/js/Pages/Placeholder/Key.vue?vue&type=template&id=d73cb0ec&\");\n/* harmony import */ var _Key_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Key.vue?vue&type=script&lang=js& */ \"./resources/js/Pages/Placeholder/Key.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Key_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Key_vue_vue_type_template_id_d73cb0ec___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Key_vue_vue_type_template_id_d73cb0ec___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/Pages/Placeholder/Key.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvUGxhY2Vob2xkZXIvS2V5LnZ1ZT8wYTU5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtGO0FBQzNCO0FBQ0w7OztBQUdsRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSx5RUFBTTtBQUNSLEVBQUUsOEVBQU07QUFDUixFQUFFLHVGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL1BhZ2VzL1BsYWNlaG9sZGVyL0tleS52dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0tleS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDczY2IwZWMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vS2V5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vS2V5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcam9hby5nYXJkaW5cXFxcRG9jdW1lbnRzXFxcXFdvcmtzcGFjZVxcXFxsYXJhdmVsLWluZXJ0aWFqc1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkNzNjYjBlYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkNzNjYjBlYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkNzNjYjBlYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vS2V5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNzNjYjBlYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkNzNjYjBlYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL1BhZ2VzL1BsYWNlaG9sZGVyL0tleS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/Pages/Placeholder/Key.vue\n");

/***/ }),

/***/ "./resources/js/Pages/Placeholder/Key.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Placeholder/Key.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Key_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Key.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Placeholder/Key.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Key_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvUGxhY2Vob2xkZXIvS2V5LnZ1ZT9mZjJkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSx3Q0FBeUwsQ0FBZ0IsK09BQUcsRUFBQyIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9QYWdlcy9QbGFjZWhvbGRlci9LZXkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vS2V5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9LZXkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/Pages/Placeholder/Key.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/Pages/Placeholder/Key.vue?vue&type=template&id=d73cb0ec&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Placeholder/Key.vue?vue&type=template&id=d73cb0ec& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Key_vue_vue_type_template_id_d73cb0ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Key.vue?vue&type=template&id=d73cb0ec& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Placeholder/Key.vue?vue&type=template&id=d73cb0ec&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Key_vue_vue_type_template_id_d73cb0ec___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Key_vue_vue_type_template_id_d73cb0ec___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvUGxhY2Vob2xkZXIvS2V5LnZ1ZT9mYmUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9QYWdlcy9QbGFjZWhvbGRlci9LZXkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ3M2NiMGVjJi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9LZXkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ3M2NiMGVjJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/Pages/Placeholder/Key.vue?vue&type=template&id=d73cb0ec&\n");

/***/ })

}]);