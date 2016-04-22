/*
* @Author: cncc
* @Date:   2016-04-06 14:19:10
* @Last Modified by:   cncc
* @Last Modified time: 2016-04-22 10:41:19
*/

import React, {Component, PropTypes} from 'react';
import platform from '../../../platform';
require('../../css/components/header.css');

function Header({title}){
	function handlerClick(e){
		return alert("点击了返回按钮");
    //serviceAgent.requestNative([{'url':'toNativeUI'}], '');
	}
	let arrowback;
	if (platform === 'ios') {
  		arrowback = require('../../img/'+ platform + '/backButton.png')
  	}
    return(
        <header className="sfheader">
        	{
        		platform === 'ios' && <img src={ arrowback } onClick={handlerClick.bind(this)} />
        	}
          <span className="back" onClick={handlerClick.bind(this)}>返回</span>
          <span className="title">{title}</span>
        </header>
    )
}
export default Header
