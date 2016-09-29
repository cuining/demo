import React, { Component, PropTypes } from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked,
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: !!nextProps.checked,
      });
    }
  }

  setToggled(newToggledValue) {
    this.setState({
      checked: newToggledValue,
    });
    this.props.onChange(newToggledValue);
  }

  render() {
    const { checked } = this.state;
    const classname = checked ? 'atfc-toggle atfc-toggle-checked' : 'atfc-toggle';
    return (
      <div
        className={classname}
        onClick={() => this.setToggled(!checked)}>
      </div>
    )
  }
}

Toggle.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
}

Toggle.defaultProps = {
  onChange() {},
  checked: false,
}

export default Toggle;
