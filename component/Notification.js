import React from 'react';
import ReactDOM from 'react-dom';

let defaultDuration = 3000;

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { type, content } = this.props;
    let iconType = ({
      info: 'glyphicon-info-sign',
      success: 'glyphicon-ok-sign',
      error: 'glyphicon-remove-sign',
    })[type];
    return (
      <div className="notification">
        <div className="notification-content">
          <i className={`glyphicon ${iconType}`}></i>
          <span>{content}</span>
        </div>
      </div>
    )
  }
}

class notify {
  constructor() {
    const div = document.createElement('div');
    document.body.appendChild(div);
    this.el = div;
  }

  open(content, duration = defaultDuration, type) {
    this.close();

    if (duration) {
      setTimeout(() => this.close(), duration);
    }

    ReactDOM.render(
      <Notification type={ type } content={ content } obj={ this } />,
      this.el
    );
  }

  close() {
    ReactDOM.unmountComponentAtNode(this.el);
  }

  destroy() {
    if (this.el) {
      document.body.removeChild(this.el);
    }
  }
}

export default {
  success(content, duration){
    return new notify().open(content, duration, 'success');
  },
  error(content, duration){
    return new notify().open(content, duration, 'error');
  },
  info(content, duration){
    return new notify().open(content, duration, 'info');
  }, 
};
