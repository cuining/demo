import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
require('../../css/components/tab.css');

const Tabs = React.createClass({

    PropTypes:{
        onBeforeChange: React.PropTypes.func,
        onAfterChange: React.PropTypes.func,
        onMount: React.PropTypes.func,
        tabActive:PropTypes.number
    },

    getDefaultProps () {
          return { tabActive: 1 };
    },

    getInitialState () {
        return {
          tabActive: this.props.tabActive
        };
    },

    componentDidMount() {
        var index = this.state.tabActive;
        var $selectedPanel = this.refs['tab-panel'];
        var $selectedMenu = this.refs[`tab-menu-${index}`];

        if (this.props.onMount) {
          this.props.onMount(index, $selectedPanel, $selectedMenu);
        }
    },
    componentWillReceiveProps(newProps) {
        if(newProps.tabActive && newProps.tabActive !== this.props.tabActive){
          this.setState({tabActive: newProps.tabActive});
        }
    },
    setActive(index, e) {
      e.preventDefault();

      var onAfterChange = this.props.onAfterChange;
      var onBeforeChange = this.props.onBeforeChange;
      var $selectedPanel = this.refs['tab-panel'];
      var $selectedTabMenu = this.refs[`tab-menu-${index}`];

      if (onBeforeChange) {
        var cancel = onBeforeChange(index, $selectedPanel, $selectedTabMenu);
        if(cancel === false){ return }
      }
      if (this.state.tabActive !== index) {
        this.setState({ tabActive: index }, () => {
          if (onAfterChange) {
            onAfterChange(index, $selectedPanel, $selectedTabMenu);
          }
        });
      }
    },
    _getMenuItems () {
      if (!this.props.children) {
        throw new Error('Tabs must contain at least one Tabs.Panel');
      }
      if (!Array.isArray(this.props.children)) {
        this.props.children = [this.props.children];
      }
      const styleWidth = (100/this.props.children.length).toFixed(2)+"%";
      var $menuItems = this.props.children
        .map($panel => typeof $panel === 'function' ? $panel() : $panel)
        .filter($panel => $panel)
        .map(($panel, index) => {
          var ref = `tab-menu-${index + 1}`;
          var title = $panel.props.title;
          var classes = classnames(this.state.tabActive === (index + 1) && 'active');

        return (
          <li ref={ref} key={index} style={ {width:styleWidth}} className={classes} onClick={this.setActive.bind(this, index + 1)}>
             {title}
          </li>
        );
    });

    return (
       <ul className='tabs-menu'>{$menuItems}</ul>
    );
  },

  _getSelectedPanel () {
    var index = this.state.tabActive - 1;
    var $panel = this.props.children[index];
    return (
      <div ref='tab-panel'>
        {$panel}
      </div>
    );
  },
  render () {
    const cls = classnames('tabs', this.props.className);
    return (
      <div className={cls}>
        {this._getMenuItems()}
        {this._getSelectedPanel()}
      </div>
    );
  }
});


export default Tabs;
