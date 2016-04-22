import React, {Component, PropTypes} from 'react';
import platform from '../../../platform';
require('../../css/components/list.css');

export default class List extends Component{

    constructor(props){
        super(props);
    }
    _getLastli(){
        if (this.props.data) {
            let content = [],
                children = [],
                data = this.props.data;
            if(data && data.content){
                content = data.content.split(/\d\./);
            }

            for (var i = 0; i < content.length; i++) {
                let desc = `${i}.${content[i]}`
                content[i] && children.push(<p key={i} >{ desc }</p>);
            }
            if (children.length) {
                return (
                    <li className="alert">
                        {
                            children
                        }
                    </li>
                )
            }
        }
    }

    render(){
        // key 用来判断是哪一个排行榜，控制dl的展示内容
        const { data, mainKey } = this.props;

        // 图片小于10kb的 会自动转成base64的方式内嵌进去，这样可以减少一个HTTP的请求
        const nopic = require( `../../img/${platform}/nopic.png`);
        const imgTop3 = [];
        for (var i = 1; i < 4; i++) {
            imgTop3.push(require(`../../img/${platform}/numb${i}.png`))
        }
        return(
            <div className="ranks">
                <ul >
                {
                    data && data.userinfo && data.userinfo.map((item,index)=>
                        {
                            let info;
                            if (mainKey === 0) {
                               info = <dd className="answernum">回答数：{item.answercount}</dd>
                            } else if (mainKey === 1) {
                               info = <dd className="answernum">精品回答数：{item.answercount}</dd>
                            } else {
                               info = (<dd className="rank mt5">
                                    <p className="infor">奖励现金：{item.rewardnumber}</p>
                                    <p className="place">精品回答数：{item.answercount}</p>
                                </dd>)
                            }

                            let indexNum;
                            if (index < 3) {
                                indexNum = <img src={ imgTop3[index] }/>
                            } else {
                                indexNum = <span>{ index +1 }</span>
                            }
                            if (!item.PhotoUrl) {
                                item.PhotoUrl = nopic;
                            }
                            return (
                                <li key={index}  className={item.userid === data.myinfo.myuserid ? "selectediv" : ""}>
                                    <dl className="clearfix">
                                        <dt className="number">{indexNum}</dt>
                                        <dd className="photo"><img src={item.PhotoUrl} /></dd>
                                        <dd className="inforwrap mlr3_5">
                                            <p className="infor ft26">{item.AgentName || item.username}丨{item.ComName || "暂无信息"}</p>
                                            <p className="place">{item.MendianName || "暂无信息"}</p>
                                        </dd>
                                        {
                                          info
                                        }
                                    </dl>
                                </li>
                            )
                        }
                    )


                }
                 {this._getLastli()}
                </ul>
            </div>
        )
    }
}
export default List
