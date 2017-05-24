import React, { Component, PropTypes } from 'react';
require('./Rank.css');
function Rank({ data }) {
  const ranks = data.sort(function(a, b) {
    return b.count - a.count; //从大到小
  });
  const max = ranks[0].count;

  return (
    <div>
      <div className="u-title">
        <h3>听歌排行</h3>
      </div>
      <div className="m-record">
        <ul className>
          {ranks.map((item, index) => (
            <li key={index} className={index % 2 === 0 ? '' : 'even'}>
              <div>
                <span className="num">{index + 1 + '.'}</span>
              </div>
              <div className="song">
                <span>
                  <a href="#"><strong title={item.name}>{item.name}</strong></a>
                </span>
                <span title={item.author}>
                  <em>-</em><a className="s-fc8" href="#">{item.author}</a>
                </span>
              </div>

              <div className="tops">
                <span
                  className="bg"
                  style={{ width: Math.round(item.count / max * 100) + '%' }}
                />
                <span className="times">{item.count + '次'}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Rank;
