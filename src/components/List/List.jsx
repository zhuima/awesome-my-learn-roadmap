/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ItemDetails from "./ListDetails";
import "./index.scss";

const Items = ({ data }) => {
  const [active, setActive] = useState(0);
  const [items, setItems] = useState(data[active].content);

  if (data) {
    return (
      <>
        <div className="nav">
          {data.map((domain, index) => {
            const { tit, content } = domain;
            return (
              <div
                className={`nav-tab ${active === index ? "active" : ""}`}
                key={index}
                accessKey={index}
                onClick={() => {
                  setActive(index);
                  setItems(content);
                }}
              >
                <span>{tit}</span>
              </div>
            );
          })}
        </div>
        <div className="items">
          <ItemDetails items={items} />
        </div>
      </>
    );
  } else {
    return <div>暂无数据</div>;
  }
};

export default Items;
