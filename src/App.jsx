import React, { useState, useEffect } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import TextTransition, { presets } from 'react-text-transition';
import ReactSearchBox from 'react-search-box';
import rocket from '@/assets/rocket.svg';
import data from '@/data/data.json';
import Items from '@/components/List/List';
import Footer from '@/components/Footer/Footer';
import Scroll from '@/components//Scroll/Scroll';
import SearchList from '@/components/SearchList/SearchList';
import '@/App.scss';

const TEXTS = [
  '欢迎提交你认为的优质站点或文档',
  '日常收集优质站点',
  '期待你的参与',
];

function App() {
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleString());
  const [searchField, setSearchField] = useState('');
  const [searchShow, setSearchShow] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  useEffect(() => {
    const interval = setInterval(
      showCurrTime,
      1000 // every 1 second
    );
    return () => clearInterval(interval);
  }, []);

  const showCurrTime = () => {
    setTime(new Date().toLocaleString());
  };

  const filteredPosts = data.filter((post) => {
    console.log('过滤的post是', post, searchField);
    return (
      post?.msg?.toLowerCase().includes(searchField.toLowerCase()) ||
      post?.comments?.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (value) => {
    setSearchField(value);
    if (value === '') {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  console.log('过滤的post是', filteredPosts);

  return (
    <div className='App'>
      <div className='header'>
        <div className='left'>
          <img className='logo' src={rocket} alt='' data-v-37dfd6fc='' />
          <span className='scolltext'>
            <TextTransition springConfig={presets.slow} className='big' inline>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </span>
        </div>
        <div className='right'>
          <div className='topright'>
            <ReactSearchBox
              className='Search'
              placeholder='Search...'
              data={data}
              onFocus={() => {
                console.log('This function is called when is focussed');
              }}
              onChange={(value) => handleChange(value)}
              autoFocus
            />
            <p className='Time'>{time}</p>
          </div>
        </div>
      </div>

      <div className='container'>
        {searchShow ? (
          <Scroll>
            <SearchList filteredPosts={filteredPosts} />
          </Scroll>
        ) : (
          <Items data={data} />
        )}
        <ScrollToTop smooth />
        <Footer />
      </div>
    </div>
  );
}

export default App;
