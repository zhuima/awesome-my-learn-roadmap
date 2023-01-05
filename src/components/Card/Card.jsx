import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { bgcolor } from '@/utils/bgcolor';
import '@/components/List/index.scss';

function Card({ post }) {
  const randomColor = bgcolor();
  return (
    <div className='item' style={{ background: randomColor }}>
      <a href={post.href}>
        <i>{post.msg}</i>
      </a>
    </div>
  );
}

export default Card;
