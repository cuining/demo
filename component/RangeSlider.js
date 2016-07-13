import React from 'react';
import ReactDOM from 'react-dom';

const propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  value: React.PropTypes.number,
  onChange: React.PropTypes.func,
  className: React.PropTypes.string,
};

const defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  value: 0,
};

class RangeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 0,
      grab: 0,
    }
    // 不能在addEventListener中直接使用this.handleEnd.bind(this),
    // 原因是bind方法会创建一个新函数。调用两次bind会返回两个不同的方法，虽然表面上看起来一样
    // 实际上在内存中的地址是不一样的。会导致removeEventListener失败。
    this.mouseup = this.handleEnd.bind(this); 
    this.mousemove = this.handleDrag.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleSlide);
    this.handleSlide();
  }
  
  handleSlide() {
    const dimension = 'offsetWidth';
    const sliderPos = ReactDOM.findDOMNode(this.refs.slider)[dimension];
    const handlePos = ReactDOM.findDOMNode(this.refs.handle)[dimension];
    this.setState({
      limit: sliderPos - handlePos,
      grab: handlePos / 2,
    })
  }

  handleStart() {
    document.addEventListener('mousemove', this.mousemove, false);
    document.addEventListener('mouseup', this.mouseup, false)
  }

  handleEnd(e) {
    document.removeEventListener('mousemove', this.mousemove, false);
    document.removeEventListener('mouseup', this.mouseup, false);
  }

  handleDrag(e) {
    this.handleNoop(e);

    let { onChange } = this.props;
    if (onChange){
      onChange(this.position(e));
    }
  }

  handleNoop(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  getPositionFromValue(value) {
    let percentage, pos;
    let { limit } = this.state;
    let { min, max } = this.props;
    percentage = (value - min) / (max - min);
    pos = Math.round(percentage * limit);

    return pos;
  }

  getValueFromPosition(pos) {
    let percentage;
    const { limit } = this.state;
    const { min, max, step } = this.props;
    percentage = (this.maxmin(pos, 0, limit) / (limit || 1));

    return  step * Math.round(percentage * (max - min) / step) + min;
  }

  maxmin(pos, min, max) {
    if (pos < min) { return min; }
    if (pos > max) { return max; }
    return pos;
  }

  position(e) {
    let pos, { grab } = this.state;
    const slider = ReactDOM.findDOMNode(this.refs.slider);
    const coordinate = e.touches ? e.touces[0]['clientX'] : e['clientX'];
    const direction = slider.getBoundingClientRect().left;

    pos = coordinate - direction - grab;
    return this.getValueFromPosition(pos);
  }

  coordinates(pos) {
    let value, fillPos, handlePos;
    let { limit, grab } = this.state;
    value = this.getValueFromPosition(pos);
    handlePos = this.getPositionFromValue(value);
    fillPos = handlePos + grab;
    return {
      fill: fillPos,
      handle: handlePos,
    };
  }

  render() {
    let position, coords, trackStyle, handleStyle;
    let { min, max, value, className } = this.props;

    position = this.getPositionFromValue(value);

    coords = this.coordinates(position);

    trackStyle = {['width']: `${coords.fill}px`};
    handleStyle = {['left']: `${coords.handle}px`};
    
    className = className ? `slider ${className}` : 'slider';
    return (
      <div 
        className={className}
        ref="slider"
        onMouseDown={e => this.handleDrag(e)}
        onClick={e => this.handleNoop(e)} 
      >
        <div className="handle" ref="handle" onClick={e => this.handleNoop(e)} onMouseDown={e => this.handleStart(e)} style={handleStyle}></div>
        <div className="track" ref="track" style={trackStyle}></div>
        <div className="mask">
          <span style={{left:'0%'}}>{min}</span>
          <span style={{left:'100%'}}>{max}</span>
        </div>
      </div>
    );
  }
}

RangeSlider.propTypes = propTypes;

RangeSlider.defaultProps = defaultProps;

export default RangeSlider;

