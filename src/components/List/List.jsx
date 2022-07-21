import React, { useState, useEffect } from 'react'
import ItemDetails from './ListDetails'
import './List.scss'

const Items = ({ data }) => {
  const [active, setActive] = useState(0)
  const [items, setItems] = useState(data[active].content)

  if (data) {
    return (
      <>
        <div className="container">
          {data.map((domain, index) => {
            let { tit, content } = domain
            return (
              <div
                className={`container tab ${active === index ? 'active' : ''}`}
                key={index}
                accessKey={index}
                onClick={() => {
                  setActive(index)
                  setItems(content)
                }}
              >
                <span>{tit}</span>
              </div>
            )
          })}
        </div>
        <ItemDetails items={items} />
      </>
    )
  } else {
    return <div>暂无数据</div>
  }
}

export default Items
