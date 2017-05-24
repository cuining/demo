import React from 'react';
import { render } from 'react-dom';
import Tab from './src/module/Tab/Tab';
import Rank from './src/module/Rank/Rank';
import PlayList from './src/module/PlayList/PlayList';
const options = [
  { name: '发现音乐', value: '0' },
  { name: '我的音乐', value: '1' },
  { name: '朋友', value: '2' },
  { name: '下载客户端', value: '3' }
];
const ranks = [
  { name: '北海', author: 'me', value: '0', count: 19 },
  { name: '夜空', author: 'you', value: '1', count: 7 },
  { name: '途中', author: 'she', value: '2', count: 8 },
  { name: '绅士', author: 'he', value: '3', count: 16 }
];
const playlists = [
  {
    title: '我创建的歌单',
    list: [
      {
        src: 'http://p3.music.126.net/UHYYRh3zEIy_Ww120osrGw==/3254554419407996.jpg?param=140y140',
        desc: '我喜欢的音乐1'
      },
      {
        src: 'http://p3.music.126.net/UHYYRh3zEIy_Ww120osrGw==/3254554419407996.jpg?param=140y140',
        desc: '我喜欢的音乐2'
      },
      {
        src: 'http://p3.music.126.net/UHYYRh3zEIy_Ww120osrGw==/3254554419407996.jpg?param=140y140',
        desc: '我喜欢的音乐3'
      }
    ]
  },
  {
    title: '我收藏的歌单',
    list: [
      {
        src: 'http://p3.music.126.net/UHYYRh3zEIy_Ww120osrGw==/3254554419407996.jpg?param=140y140',
        desc: '我喜欢的音乐4'
      },
      {
        src: 'http://p3.music.126.net/UHYYRh3zEIy_Ww120osrGw==/3254554419407996.jpg?param=140y140',
        desc: '我喜欢的音乐5'
      },
      {
        src: 'http://p3.music.126.net/UHYYRh3zEIy_Ww120osrGw==/3254554419407996.jpg?param=140y140',
        desc: '我喜欢的音乐6'
      }
    ]
  }
];
render(
  <div className="g-bd">
    <Tab selected={1} options={options} />
    <Rank data={ranks} />
    {playlists.map((item, index) => <PlayList data={item} key={index} />)}

  </div>,
  document.querySelector('#app')
);
