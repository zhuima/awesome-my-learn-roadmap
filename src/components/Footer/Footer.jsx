import React from 'react';
import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
import '@/components/Footer/index.scss';

const Footer = () => (
  <footer className="footer">
    <p> &copy; {new Date().getFullYear()} Copyright: zhuima</p>
    <div className="icons">
      <a href="https://github.com/zhuima/awesome-my-learn-roadmap">
        <AiFillGithub style={{ color: '#333333', fontSize: '30px' }} />
      </a>{' '}
      <a href="mailto:zhuima314@gmail.com">
        <AiFillGoogleCircle style={{ color: '#dd4b39', fontSize: '30px' }} />
      </a>
    </div>
  </footer>
);

export default Footer;
