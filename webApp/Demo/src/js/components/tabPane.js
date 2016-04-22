import React, {Component, PropTypes} from 'react';

export default class TabPane extends Component{
    render(){
        const props = this.props;
        return (
            <div>
                {props.children}
            </div>
        )
    }
}
