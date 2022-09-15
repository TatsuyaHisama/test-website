import React from 'react'
import { css } from '@emotion/css'
import instagram from './instagram-icon.jpg';
import twitter from './twitter-icon.jpg'

const Footer = () => {
  return (
    <div className={css`
                    background-color: white;
                    width: 100%;
                    height: 20vh;
    `}>
      <div className={css`
                      display: flex;
                      justify-content: center;
      `}>
        <a href='https://twitter.com/home'>
          <img src={instagram} alt="instagram"
             className={css`
                         height:80px;
                         width:80px;
             `} />
        </a>
        <a href='https://twitter.com/home'>
          <img src={twitter} alt="twitter"
             className={css`
                         height:80px;
                         width:80px;
 `}  />
        </a>
      </div>
    </div>
  )
}

export default Footer;
