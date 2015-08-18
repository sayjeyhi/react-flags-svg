import { Component } from 'react';
import Radium from 'radium';

@Radium
class Flag extends Component {

  static propTypes = {
    formFactor: PropTypes.oneOf(['square', 'normal']).isRequired,
    countryCode: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = this.props;
  }

  render() {
    const styles = {
      base:{
        backgroundSize: 'contain',
        backgroundPosition: '50%',
        backgroundRepeast: 'no-repeat',
        position: 'relative',
        display: 'inline-block',
        lineHeight: '1em',

        ':before': {
          content: '',
        }
      },
      square: {
        width: '1em',
      },
      normal: {
        width: '1.333333em',
      },
      currentFlag: {
        backgroundImage: url(`../flags/${this.state.formFactor}/${this.state.countryCode}.svg`)
      }
    }

    return (
      <span style={[styles.base, styles[this.state.formFactor], styles.currentFlag]} />
    );
  }

}
