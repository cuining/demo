import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./src/js/components/header";
import List from "./src/js/components/list";
import TabPane from "./src/js/components/tabPane";
import Tabs from "./src/js/components/tabs";
import xml2json from "./src/js/helper/xml2json";
import platform from "./platform";
import {res1, res2, res3} from "./mock/rank";

require("./src/css/index.css");
//require("./src/css/index-android.css");

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: "",
			ranks: [],
			myinfo: {},
			norankMsg: [
				["还没有人上榜哦", "快去回答问题，让大家看到你~"],
				["还没有人上榜哦", "贡献优质回答，有机会获得现金奖励哦~"],
				["每个月贡献精品回答数前5名的用户", "将会获得丰厚奖励哦~"],
			],
			preMonthRanks: null,
			currentTabIndex: 1,
		};
	}
	componentWillMount() {
		// 加载今日实时榜的数据
		this.handleAfter(1);
	  let myinfo = res1.root.myinfo;
	  this.setState({
		  ranks: [res1.root,[],res3.root],
		  myinfo: myinfo
	  })
	}
	componentDidMount() {
		let self = this;
		$(".tabs").on("swipeLeft",function(e){
			let selectedIndex = self.state.currentTabIndex;
			if (selectedIndex < 3) {
				self.handleAfter(selectedIndex + 1);
				self.setState({
					currentTabIndex: selectedIndex + 1
				})
			} else {
				return false;
			}
		})
		$(".tabs").on("swipeRight",function(e){
			let selectedIndex = self.state.currentTabIndex;
			if (selectedIndex > 1) {
				self.handleAfter(selectedIndex - 1);
				self.setState({
					currentTabIndex: selectedIndex - 1
				})
			} else {
				return false;
			}
		})
	}

	handleAfter(selectedIndex) {

		if (this.state.currentTabIndex === selectedIndex) return;

		this.setState({
					currentTabIndex: selectedIndex
				})
		return;
		if (selectedIndex === 3 && this.state.preMonthRanks !== null) {
			this.setState({	ranks: [{}, {}, this.state.preMonthRanks] });
		} else { // 获取接口数据
			let opt = {
				url: "", data: { messagename: "SFBangrankinglist", groupid: 0, sort: selectedIndex, UserId: "$$", city: "$$" }
			};
			let me = this;
			opt.success = function (xml, results) {
				const root = xml2json(xml).root;
				// 构建需要设置的状态
				let temp = { "type": "success", currentTabIndex: selectedIndex, ranks: [{}, {}, {}] };
				// 设置 myinfo
				if(!me.state.myinfo.myuserid) {
					temp.myinfo = root.myinfo;
				}
				// 设置 ranks
				temp.ranks[selectedIndex - 1] = root;
				// 缓存月份数据
				if (selectedIndex === 3) { me.state.preMonthRanks = root; }
				me.setState(temp);
			};
			opt.error = function (e) {
				e = JSON.stringify(e);
				if (e.indexOf("Unable to resolve host") > -1) {
					// alert("网络断开了");
					me.setState({ "type": "error" });
				} else {
					alert("error：" + e);
				}
			};
			serviceAgent.requestApi([opt], "正在加载...");
		}
	}


	render(){
		const imgpath = "./src/img/" + platform;

		// 引入图片
		const nobodyon = require(imgpath + "/nobodyon.png");

		const reload = require(imgpath + "/loading_error.png");

		// 判断有无网络
		const offline = this.state.type === "error";
		// 渲染list
		let [list1 = [], list2 = [], list3 = []] = this.state.ranks.map((item, index) => {
			if (offline) {
				return <img src={reload} className="reload" width="50%" onClick={this.handleAfter.bind(this, index + 1)} />;
			} else if (item && item.userinfo && item.userinfo.length){
				return <List data={item} mainKey={index} />;
			} else {
				return (
					<div className="nobodyon">
						<img src={nobodyon} className="nobodyimg" />
						<p>{this.state.norankMsg[index][0]}</p>
						<p>{this.state.norankMsg[index][1]}</p>
					</div>
				);
			}
		});
		// 渲染底部用户信息
		const myinfo = this.state.myinfo;
		let	myinfoContent;

		if (!offline && Object.keys(myinfo).length) {
			let info,myranking;
			myranking = parseInt(myinfo.myanswercount) === 0 ? "暂无" : myinfo.myranking;
			if (this.state.currentTabIndex === 1) {
				info = (
					<dd className="fl rank">
						<p className="infor">回答数：{myinfo.myanswercount}</p>
						<p className="place">我的排名：{myranking}</p>
					</dd>
				)
			} else if (this.state.currentTabIndex === 2) {
				info = (
					<dd className="fl rank">
						<p className="infor">精品回答数：{myinfo.myanswercount}</p>
						<p className="place">我的排名：{myranking}</p>
					</dd>
				)
			} else {
				info = (
					<dd className="fl rank">
						<p className="place">我的排名：{myranking}</p>
						<p className="infor">精品回答数：{myinfo.myanswercount}</p>
					</dd>
				)
			}
			myinfoContent = (
				<div className="nobodybottom">
					<dl>
						<dt className="fl"><img src={myinfo.MyPhotoUrl} /></dt>
						<dd className="fl inforwrap">
							<p className="infor">{myinfo.MyAgentName || myinfo.username}丨 {myinfo.MyComName}</p>
							<p className="place">{myinfo.MyMendianName}</p>
						</dd>
							{info}

					</dl>
				</div>
			);
		}

		return (
			<div>
				<Header title={"排行榜"} />
				<Tabs className="wrap" tabActive={this.state.currentTabIndex} onAfterChange={this.handleAfter.bind(this)}>
					<TabPane title="今日实时榜" key="0">
						{list1}
					</TabPane>
					<TabPane title="本月实时榜" key="1">
						{list2}
					</TabPane>
					<TabPane title="上月奖金榜" key="2">
						{list3}
					</TabPane>
				</Tabs>
				{myinfoContent}
			</div>
		);
	}
}

render(<App />, document.querySelector("#app"));
