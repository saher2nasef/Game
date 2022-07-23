/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/background.png":
/*!***********************************!*\
  !*** ./src/images/background.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/images/flag.png":
/*!*****************************!*\
  !*** ./src/images/flag.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "44db3530787432c540fd06aeb482e006.png");

/***/ }),

/***/ "./src/images/hills.png":
/*!******************************!*\
  !*** ./src/images/hills.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/images/platform.png":
/*!*********************************!*\
  !*** ./src/images/platform.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/images/platformSmallTall.png":
/*!******************************************!*\
  !*** ./src/images/platformSmallTall.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/images/spriteRunLeft.png":
/*!**************************************!*\
  !*** ./src/images/spriteRunLeft.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/images/spriteRunRight.png":
/*!***************************************!*\
  !*** ./src/images/spriteRunRight.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/images/spriteStandLeft.png":
/*!****************************************!*\
  !*** ./src/images/spriteStandLeft.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/images/spriteStandRight.png":
/*!*****************************************!*\
  !*** ./src/images/spriteStandRight.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/platform.png */ "./src/images/platform.png");
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/background.png */ "./src/images/background.png");
/* harmony import */ var _images_hills_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/hills.png */ "./src/images/hills.png");
/* harmony import */ var _images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/platformSmallTall.png */ "./src/images/platformSmallTall.png");
/* harmony import */ var _images_flag_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/flag.png */ "./src/images/flag.png");
/* harmony import */ var _images_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/spriteRunLeft.png */ "./src/images/spriteRunLeft.png");
/* harmony import */ var _images_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/spriteRunRight.png */ "./src/images/spriteRunRight.png");
/* harmony import */ var _images_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/spriteStandLeft.png */ "./src/images/spriteStandLeft.png");
/* harmony import */ var _images_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/spriteStandRight.png */ "./src/images/spriteStandRight.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var canvas = document.querySelector("#canvas");
var success = document.querySelector(".success");
var c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
var gravity = 1;

var Palyer = /*#__PURE__*/function () {
  function Palyer() {
    _classCallCheck(this, Palyer);

    this.position = {
      x: 100,
      y: 400
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 66;
    this.height = 150;
    this.speed = 10;
    this.Image = CreateImage(_images_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
    this.frames = 0;
    this.Sprite = {
      Stand: {
        right: CreateImage(_images_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
        left: CreateImage(_images_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        CropWidth: 177,
        width: 66
      },
      Run: {
        right: CreateImage(_images_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        left: CreateImage(_images_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        CropWidth: 340,
        width: 127.875
      }
    };
    this.currentSprite = this.Sprite.Stand.right;
    this.CurrentCropWidth = 177;
  }

  _createClass(Palyer, [{
    key: "darw",
    value: function darw() {
      c.drawImage(this.currentSprite, this.CurrentCropWidth * this.frames, 0, this.CurrentCropWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames > 59 && (this.currentSprite === this.Sprite.Stand.right || this.currentSprite === this.Sprite.Stand.left)) this.frames = 0;else if (this.frames > 29 && (this.currentSprite === this.Sprite.Run.right || this.currentSprite === this.Sprite.Run.left)) this.frames = 0;
      this.darw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      } else {
        this.velocity.y = 0;
      }
    }
  }]);

  return Palyer;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        Image = _ref.Image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.width = Image.width;
    this.height = Image.height;
    this.Image = Image;
  }

  _createClass(Platform, [{
    key: "darw",
    value: function darw() {
      c.drawImage(this.Image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        Image = _ref2.Image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.width = Image.width;
    this.height = Image.height;
    this.Image = Image;
  }

  _createClass(GenericObject, [{
    key: "darw",
    value: function darw() {
      c.drawImage(this.Image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return GenericObject;
}();

function CreateImage(ImageSrc) {
  var image = new Image();
  image.src = ImageSrc;
  return image;
}

var ImageplatformSrc = CreateImage(_images_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var player = new Palyer();
var platforms = [];
var GenericObjects = [];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;

function init() {
  ImageplatformSrc = CreateImage(_images_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new Palyer();
  player.position.y = 270;
  platforms = [new Platform({
    x: ImageplatformSrc.width * 4 + 590,
    y: 270,
    Image: CreateImage(_images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: ImageplatformSrc.width * 5 + 600,
    y: 270,
    Image: CreateImage(_images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: ImageplatformSrc.width * 8 + 594,
    y: 270,
    Image: CreateImage(_images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: 0,
    y: 480,
    Image: ImageplatformSrc
  }), new Platform({
    x: ImageplatformSrc.width + 100,
    y: 480,
    Image: ImageplatformSrc
  }), new Platform({
    x: ImageplatformSrc.width * 2 + 300,
    y: 480,
    Image: ImageplatformSrc
  }), new Platform({
    x: ImageplatformSrc.width * 3 + 500 - 2,
    y: 480,
    Image: ImageplatformSrc
  }), new Platform({
    x: ImageplatformSrc.width * 4 + 300 - 2,
    y: 480,
    Image: ImageplatformSrc
  }), new Platform({
    x: ImageplatformSrc.width * 5 + 400 - 2,
    y: 480,
    Image: ImageplatformSrc
  }), new Platform({
    x: ImageplatformSrc.width * 6 + 400 - 2,
    y: 480,
    Image: ImageplatformSrc
  }), new Platform({
    x: ImageplatformSrc.width * 7 + 400 - 2,
    y: 480,
    Image: ImageplatformSrc
  }), new Platform({
    x: ImageplatformSrc.width * 8 + 600 - 2,
    y: 480,
    Image: ImageplatformSrc
  }), new Platform({
    x: ImageplatformSrc.width * 9 + 800 - 2,
    y: 480,
    Image: ImageplatformSrc
  }), new Platform({
    x: ImageplatformSrc.width * 10 + 1000 - 2,
    y: 480,
    Image: ImageplatformSrc
  }), new Platform({
    x: 7300,
    y: 320,
    Image: CreateImage(_images_flag_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  })];
  var BackgroundLength = 11640;
  var hillslength = 11640;
  GenericObjects = [new GenericObject({
    x: 0,
    y: 0,
    Image: CreateImage(_images_background_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new GenericObject({
    x: 0,
    y: 0,
    Image: CreateImage(_images_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: BackgroundLength,
    y: 0,
    Image: CreateImage(_images_background_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new GenericObject({
    x: hillslength,
    y: 0,
    Image: CreateImage(_images_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: BackgroundLength * 2,
    y: 0,
    Image: CreateImage(_images_background_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new GenericObject({
    x: hillslength * 2,
    y: 0,
    Image: CreateImage(_images_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: BackgroundLength * 3,
    y: 0,
    Image: CreateImage(_images_background_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new GenericObject({
    x: hillslength * 3,
    y: 0,
    Image: CreateImage(_images_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: BackgroundLength * 4,
    y: 0,
    Image: CreateImage(_images_background_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new GenericObject({
    x: hillslength * 4,
    y: 0,
    Image: CreateImage(_images_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  })];
  keys = {
    right: {
      pressed: false
    },
    left: {
      pressed: false
    }
  };
  scrollOffset = 0;
}

function animate() {
  var FinalNumber = 102000;
  var NumMoveing = player.speed;
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  GenericObjects.forEach(function (GenericObject) {
    GenericObject.darw();
  });
  player.update();
  platforms.forEach(function (platform) {
    platform.darw();

    if (keys.right.pressed && player.position.x < 400) {
      player.velocity.x = NumMoveing;
    } else if (keys.left.pressed && player.position.x > 100) {
      player.velocity.x = -NumMoveing;
    } else {
      player.velocity.x = 0;

      if (keys.right.pressed) {
        if (scrollOffset <= FinalNumber) {
          scrollOffset += NumMoveing;
          platform.position.x -= NumMoveing;
          GenericObjects.forEach(function (GenericObject) {
            GenericObject.position.x -= 5;
          });
        }
      }

      if (keys.left.pressed) {
        if (scrollOffset > 0) {
          scrollOffset -= NumMoveing;
          platform.position.x += NumMoveing;
          GenericObjects.forEach(function (GenericObject) {
            GenericObject.position.x += 5;
          });
        }
      }
    }

    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });

  if (scrollOffset > FinalNumber) {
    console.log("You Win");
    success.classList.add("active");
  } else {
    success.classList.remove("active");
  }

  if (player.position.y + player.height >= canvas.height) {
    init();
  }
}

animate();
addEventListener("keyup", function (_ref3) {
  var keyCode = _ref3.keyCode;

  switch (keyCode) {
    case 40:
      {
        // console.log("Down");
        break;
      }

    case 38:
      {
        // console.log("Top");
        if (player.position.y >= 0) {
          player.velocity.y -= 10;
        }

        break;
      }

    case 39:
      {
        // console.log("Right");
        keys.right.pressed = false;
        player.currentSprite = player.Sprite.Stand.right;
        player.CurrentCropWidth = player.Sprite.Stand.CropWidth;
        player.width = player.Sprite.Stand.width;
        break;
      }

    case 37:
      {
        // console.log("Left");
        keys.left.pressed = false;
        player.currentSprite = player.Sprite.Stand.left;
        player.CurrentCropWidth = player.Sprite.Stand.CropWidth;
        player.width = player.Sprite.Stand.width;
        break;
      }
  }
});
addEventListener("keydown", function (_ref4) {
  var keyCode = _ref4.keyCode;

  switch (keyCode) {
    case 40:
      {
        // console.log("Down");
        break;
      }

    case 38:
      {
        // console.log("Top");
        if (player.position.y >= 0) {
          player.velocity.y -= 10;
        }

        break;
      }

    case 39:
      {
        // console.log("Right");
        keys.right.pressed = true;
        player.currentSprite = player.Sprite.Run.right;
        player.CurrentCropWidth = player.Sprite.Run.CropWidth;
        player.width = player.Sprite.Run.width;
        break;
      }

    case 37:
      {
        // console.log("Left");
        keys.left.pressed = true;
        player.currentSprite = player.Sprite.Run.left;
        player.CurrentCropWidth = player.Sprite.Run.CropWidth;
        player.width = player.Sprite.Run.width;
        break;
      }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map