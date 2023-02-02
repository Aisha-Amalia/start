"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavMenu = exports.Bars = exports.NavLink = exports.Nav = void 0;

var _fa = require("react-icons/fa");

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\nalign-items: center;\nmargin-right: -24px;\n/* Second Nav */\n/* margin-right: 24px; */\n/* Third Nav */\n/* width: 100vw;\nwhite-space: nowrap; */\n@media screen and (max-width: 768px) {\n\tdisplay: none;\n}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\ndisplay: none;\ncolor: #808080;\n@media screen and (max-width: 768px) {\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\ttransform: translate(-100%, 75%);\n\tfont-size: 1.8rem;\n\tcursor: pointer;\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\ncolor: #808080;\ndisplay: flex;\nalign-items: center;\ntext-decoration: none;\npadding: 0 1rem;\nheight: 100%;\ncursor: pointer;\n&.active {\n\tcolor: #4d4dff;\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nbackground: #ffb3ff;\nheight: 85px;\ndisplay: flex;\njustify-content: space-between;\npadding: 0.2rem calc((100vw - 1000px) / 2);\nz-index: 12;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Nav = _styledComponents["default"].nav(_templateObject());

exports.Nav = Nav;
var NavLink = (0, _styledComponents["default"])(_reactRouterDom.NavLink)(_templateObject2());
exports.NavLink = NavLink;
var Bars = (0, _styledComponents["default"])(_fa.FaBars)(_templateObject3());
exports.Bars = Bars;

var NavMenu = _styledComponents["default"].div(_templateObject4());

exports.NavMenu = NavMenu;