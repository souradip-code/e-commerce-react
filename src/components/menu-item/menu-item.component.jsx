import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({
  title,
  imageUrl,
  size,
  linkUrl,
  location,
  history,
  match,
}) => {
  return (
    <div className={`menu-item ${size}`} onClick={() => { return history.push(`${match.url}${linkUrl}`)}}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
