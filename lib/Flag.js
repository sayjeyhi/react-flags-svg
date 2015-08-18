'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var Flag = (function (_Component) {
  _inherits(Flag, _Component);

  _createClass(Flag, null, [{
    key: 'propTypes',
    value: {
      formFactor: PropTypes.oneOf(['square', 'normal']).isRequired,
      countryCode: PropTypes.string.isRequired
    },
    enumerable: true
  }]);

  function Flag(props) {
    _classCallCheck(this, _Flag);

    _Component.call(this, props);
    this.state = this.props;
  }

  Flag.prototype.render = function render() {
    var styles = {
      base: {
        backgroundSize: 'contain',
        backgroundPosition: '50%',
        backgroundRepeast: 'no-repeat',
        position: 'relative',
        display: 'inline-block',
        lineHeight: '1em',

        ':before': {
          content: ''
        }
      },
      square: {
        width: '1em'
      },
      normal: {
        width: '1.333333em'
      },
      currentFlag: {
        backgroundImage: url('../flags/' + this.state.formFactor + '/' + this.state.countryCode + '.svg')
      }
    };

    return React.createElement('span', { style: [styles.base, styles[this.state.formFactor], styles.currentFlag] });
  };

  var _Flag = Flag;
  Flag = _radium2['default'](Flag) || Flag;
  return Flag;
})(_react.Component);