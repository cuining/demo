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

  handleStart(e) {
    // console.log(e + 'handleStart')
    document.addEventListener('mousemove', this.handleDrag.bind(this), false);
    document.addEventListener('mouseup', this.handleEnd.bind(this), false)
  }

  handleEnd(e) {
    // console.log(e + 'invoke handleEnd')
    document.removeEventListener('mousemove', this.handleDrag.bind(this),false);
    document.removeEventListener('mouseup', this.handleEnd.bind(this),false);
  }

  handleDrag(e) {
    this.handleNoop(e);

    // console.log(e + 'handleDrag')
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
    return (
      <div 
        className="slider"
        ref="slider"
        onMouseDown={e => this.handleDrag(e)}
        onDragStart={e => console.log('start')}
        onDragOver= {e => console.log('over')}
        onClick={e => this.handleNoop(e)} 
      >
        <div className="handle" ref="handle" style={handleStyle}></div>
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

