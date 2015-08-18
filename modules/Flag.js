import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

@Radium
class Flag extends Component {

  static propTypes = {
    formFactor: PropTypes.oneOf(['square', 'normal']).isRequired,
    countryCode: PropTypes.string.isRequired,
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
        backgroundImage: `url(../flags/${this.props.formFactor}/${this.props.countryCode}.svg)`
      }
    }

    return (
      <div>
        <span style={[styles.base, styles[this.props.formFactor], styles.currentFlag]} />
      </div>
      );
  }

}
