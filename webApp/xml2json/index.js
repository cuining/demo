import React, { Component } from 'react';
import { render } from 'react-dom';
import { Tree } from 'antd';

const TreeNode = Tree.TreeNode;


function loadXML(xmlFile) {
    let xmlDoc;
    if (window.ActiveXObject) {
        xmlDoc = new ActiveXObject('Microsoft.XMLDOM');//IE浏览器
        xmlDoc.async = false;
        xmlDoc.load(xmlFile);
    }
    else if (navigator.userAgent.indexOf("Firefox")>0) { //火狐浏览器
    //else if (document.implementation && document.implementation.createDocument) {//这里主要是对谷歌浏览器进行处理
        xmlDoc = document.implementation.createDocument('', '', null);
        xmlDoc.load(xmlFile);
    }
    else{ //谷歌浏览器
      let xmlhttp = new window.XMLHttpRequest();
        xmlhttp.open("GET",xmlFile,false);
        xmlhttp.send(null);
        if(xmlhttp.readyState == 4){
        xmlDoc = xmlhttp.responseXML.documentElement;
        }
    }

    return xmlDoc;
}

    // 首先对xml对象进行判断
function checkXMLDocObj(xmlFile) {
    let xmlDoc = loadXML(xmlFile);
    if (xmlDoc == null) {
        alert('您的浏览器不支持xml文件读取,于是本页面禁止您的操作,推荐使用IE5.0以上可以解决此问题!');
        window.location.href = '../err.html';

    }
    return xmlDoc;
}
//读取到xml文件中的数据
let xmlDoc = checkXMLDocObj('./tree.xml');
let titleArr = [];// 所有节点的title
let keyArr = []; // 所有节点的key
let arr = [];// 匹配结果需要展开的key ，最后跟expandedKeys 数组进行合并
class Treeee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            expandedKeys:['0-0','0-0-0'],
            json:{},
        };
    }

    haschild(item) {
    	let child = item.childNodes;
     	for (var i = 0; i < child.length; i++) {
         	if (child[i].nodeType === 1) {
	            return  true;
	        }
        }
        return false;
    }

    gettitle(item) {
    	let name  = item.getAttribute("name") === null ? (" ") : (" name:" + item.getAttribute("name"));
    	let title = item.getAttribute("title") === null ? (" ") : (" title:" + item.getAttribute("title"))
        let isCircle = item.getAttribute("isCircle") === null?  (" ") : (" isCircle:" + item.getAttribute("isCircle"));
    	return item.nodeName + name + title + isCircle;
    }

    loop(item,_preKey) {
     	let child = item.childNodes;
 		let arr = [];
        const preKey = _preKey || '0';
     	for (var i = 0; i < child.length; i++) {
         	if (child[i].nodeType === 1) {
	            arr.push(child[i]);
	        }
        }
        return arr.map((item,index) =>{
            let title = this.gettitle(item);
            const key = `${preKey}-${index}`;
        	if (this.haschild(item) ) {
                if (keyArr.indexOf(key) === -1) {
                    keyArr.push(key);
                    titleArr.push(title);
                }
             	return <TreeNode key={key} title={ title } level={index}>{this.loop(item,key)}</TreeNode>
	        }
            if (keyArr.indexOf(key) === -1) {
                keyArr.push(key);
                titleArr.push(title);
            }
	        return <TreeNode key={key} title={ title } level={index} />;
        })
    }

    onExpand(treeNode, expand, expandedKeys) {
        const index = expandedKeys.indexOf(treeNode.props.eventKey);
        if (expand) {
          if (index > -1) {
            expandedKeys.splice(index, 1);
          }
        } else {
          if (index === -1) {
            expandedKeys.push(treeNode.props.eventKey);
          }
        }
        this.setState({ expandedKeys });
    }
    // 根据input输入的title值 遍历titleArr ，找到第一个匹配结果
    // 拿到匹配结果的key值，执行loopkeys函数
    filterExpandedKeys(title) {

        for (var i = 0; i < titleArr.length; i++) {
            if (titleArr[i].indexOf(title) > -1) {
                this.loopkeys(keyArr[i]);
                console.log(arr);
                break;
            }
        }
    }
    // 从子key开始向上遍历，直到找到一个父key存在与expandedKeys中
    loopkeys(key) {
        let expandedKeys = this.state.expandedKeys;
        if (expandedKeys.indexOf(key) === -1) {
            var parentKey = key.substr(0, key.length - 2);
            if (arr.indexOf(key) === -1) {
                arr.push(key);
            }
            this.loopkeys(parentKey);
        }
    }

    onChange(e) {
        this.filterExpandedKeys(e.target.value)
        this.setState({
            inputValue: e.target.value,
            expandedKeys:arr.concat(this.state.expandedKeys)
        });
    }
    // tree组件自带的函数 ,当返回结果为true时，节点会设置“filter-node”样式
    filterTreeNode(treeNode) {
        // 根据 title 进行搜索
        return this.state.inputValue && treeNode.props.title.toLowerCase().indexOf(this.state.inputValue) > -1;
    }
    render(){

        return (
            <div>
                <input placeholder="请筛选" value={this.state.inputValue} onChange={this.onChange.bind(this)} />
                <Tree defaultExpandAll expandedKeys={this.state.expandedKeys}  onExpand={this.onExpand.bind(this)} filterTreeNode={this.filterTreeNode.bind(this)}>
                    {this.loop(xmlDoc)}
                </Tree>
            </div>
        )
    }
}


render(<Treeee/>, document.getElementById("container"));
