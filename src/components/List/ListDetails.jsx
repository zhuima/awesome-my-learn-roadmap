/* eslint-disable react/prop-types */
import React from "react";
import { bgcolor } from "../../utils/bgcolor";
import { Tooltip as ReactTooltip } from "react-tooltip";

import "react-tooltip/dist/react-tooltip.css";
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
            id={index}
          >
            <a href={href}>
              <i>{msg}</i>
            </a>
            {item?.comments ? (
              <ReactTooltip
                anchorId={index}
                place="top"
                variant="success"
                content={item?.comments}
              />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </>
  );
};

export default React.memo(ItemDetails);
