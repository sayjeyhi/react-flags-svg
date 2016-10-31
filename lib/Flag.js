'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Flag = function (_Component) {
  _inherits(Flag, _Component);

  function Flag() {
    _classCallCheck(this, Flag);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Flag).apply(this, arguments));
  }

  _createClass(Flag, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var formFactor = _props.formFactor;
      var countryCode = _props.countryCode;
      var size = _props.size;

      var flagFile = require('../flags/' + formFactor + '/' + countryCode + '.svg');
      var styles = {
        base: {
          backgroundSize: 'contain',
          backgroundPosition: '50%',
          backgroundRepeast: 'no-repeat',
          display: 'inline-block',
          verticalAlign: 'middle',
          width: size
        },
        square: {
          height: size
        },
        normal: {
          height: Math.round(size / 1.333333 * 1)
        },
        currentFlag: {
          backgroundImage: 'url(' + flagFile + ')'
        }
      };

      return _react2.default.createElement('span', { style: Object.assign({}, styles.base, styles[formFactor], styles.currentFlag) });
    }
  }]);

  return Flag;
}(_react.Component);

Flag.propTypes = {
  formFactor: _react.PropTypes.oneOf(['square', 'normal']).isRequired,
  countryCode: _react.PropTypes.string.isRequired,
  size: _react.PropTypes.number
};
exports.default = Flag;


Flag.defaultProps = {
  formFactor: 'normal',
  size: 24
};