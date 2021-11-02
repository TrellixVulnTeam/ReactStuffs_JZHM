"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

//handle pick pass down to action and setup onClick -bind here
//randomly pikc an option and alert it
var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_assertThisInitialized(_this));
    _this.handlePick = _this.handlePick.bind(_assertThisInitialized(_this));
    _this.state = {
      options: ['first', 'second', 'third']
    };
    return _this;
  }

  _createClass(App, [{
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      this.setState(function () {// return{
        //     pick: 
        // }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = 'React App';
      var subtitle = 'sub react app';
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        title: title,
        subtitle: subtitle
      }), /*#__PURE__*/React.createElement(Action, {
        hasOptions: this.state.options.length > 0
      }), /*#__PURE__*/React.createElement(Options, {
        options: this.state.options,
        handleDeleteOptions: this.handleDeleteOptions
      }), /*#__PURE__*/React.createElement(AddOption, null));
    }
  }]);

  return App;
}(React.Component);

var Action = /*#__PURE__*/function (_React$Component2) {
  _inherits(Action, _React$Component2);

  var _super2 = _createSuper(Action);

  function Action() {
    _classCallCheck(this, Action);

    return _super2.apply(this, arguments);
  }

  _createClass(Action, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: this.handlePick,
        disabled: !this.props.hasOptions
      }, "what to do?"));
    }
  }]);

  return Action;
}(React.Component);

var Options = /*#__PURE__*/function (_React$Component3) {
  _inherits(Options, _React$Component3);

  var _super3 = _createSuper(Options);

  function Options() {
    _classCallCheck(this, Options);

    return _super3.apply(this, arguments);
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: this.props.handleDeleteOptions
      }, "Remove All"), this.props.options.map(function (option) {
        return /*#__PURE__*/React.createElement(Option, {
          key: option,
          optionText: option
        });
      }));
    }
  }]);

  return Options;
}(React.Component);

var Option = /*#__PURE__*/function (_React$Component4) {
  _inherits(Option, _React$Component4);

  var _super4 = _createSuper(Option);

  function Option() {
    _classCallCheck(this, Option);

    return _super4.apply(this, arguments);
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.props.optionText);
    }
  }]);

  return Option;
}(React.Component);

var Header = /*#__PURE__*/function (_React$Component5) {
  _inherits(Header, _React$Component5);

  var _super5 = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super5.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.props.title), /*#__PURE__*/React.createElement("h2", null, this.props.subtitle));
    }
  }]);

  return Header;
}(React.Component);

var AddOption = /*#__PURE__*/function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  var _super6 = _createSuper(AddOption);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _super6.apply(this, arguments);
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();

      if (option) {
        alert(option);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
        onSubmit: this.handleAddOption
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "option"
      }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
