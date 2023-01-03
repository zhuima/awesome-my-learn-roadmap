/* eslint-disable react/prop-types */
import React from "react";
import { bgcolor } from "../../utils/bgcolor";

import "./index.scss";
const ItemDetails = ({ items }) => {
  return (
    <>
      {items.map((item, index) => {
        const { msg, href } = item;
        const random_bg_color = bgcolor();
        return (
          <div
            key={index}
            className="item"
            style={{ background: random_bg_color }}
          >
            <a href={href}>
              <i>{msg}</i>
            </a>
          </div>
        );
      })}
    </>
  );
};

export default React.memo(ItemDetails);
