import React, { useState, useEffect } from 'react'
import rocket from './assets/rocket.svg'
import TextTransition, { presets } from 'react-text-transition'
import data from './data/data.json'
import Items from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.scss'

function App() {
  const [index, setIndex] = useState(0)
  const [time, setTime] = useState(new Date().toLocaleString())
  const TEXTS = [
    '欢迎提交你认为的优质站点或文档',
    '日常收集优质站点',
    '期待你的参与',
  ]

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])

  useEffect(() => {
    const interval = setInterval(
      showCurrTime,
      1000 // every 1 second
    )
    return () => clearInterval(interval)
  }, [])

  const showCurrTime = () => {
    setTime(new Date().toLocaleString())
  }

  return (
    <div className="App">
      <h6 className="statistical_h6">
        <img className="logo" src={rocket} alt="" data-v-37dfd6fc="" />
        <span>
          <TextTransition springConfig={presets.slow} className="big" inline>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </span>
        <p className="Time">{time}</p>
      </h6>

      <Items data={data} />
      <Footer />
    </div>
  )
}

export default App
