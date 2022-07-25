/* eslint-disable react/prop-types */
import React from 'react'
import './List.scss'
const ItemDetails = ({ items }) => {
  return (
    <>
      {items.map((item, index) => {
        const { msg, href } = item
        return (
          <div key={index} className="item">
            <a href={href}>
              <i>{msg}</i>
            </a>
          </div>
        )
      })}
    </>
  )
}

export default ItemDetails
