import React, { Component, PropTypes } from 'react';

function PlayList({ data }) {
  const { title, list } = data;
  return (
    <div>
      <div className="u-title f-cb">
        <h3>{title + ' (' + list.length + ')'}</h3>
      </div>
      <ul className="m-cvrlst f-cb">
        {list.map((item, index) => (
          <li key={index}>
            <div>
              <img src={item.src} />
            </div>
            <p className="desc">{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PlayList;
