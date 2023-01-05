/* eslint-disable react/prop-types */
import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { bgcolor } from '@/utils/bgcolor';
import '@/components/List/index.scss';

const ItemDetails = ({ items }) => {
  console.log(a);

  return (
    <>
      {items.map((item, index) => {
        const { msg, href } = item;
        const randomColor = bgcolor();

        return (
          <div
            key={index}
            className='item'
            style={{ background: randomColor }}
            id={index}
          >
            <a href={href}>
              <i>{msg}</i>
            </a>
            {item?.comments ? (
              <ReactTooltip
                anchorId={index}
                place='top'
                variant='success'
                content={item?.comments}
              />
            ) : (
              ''
            )}
          </div>
        );
      })}
    </>
  );
};

export default React.memo(ItemDetails);
