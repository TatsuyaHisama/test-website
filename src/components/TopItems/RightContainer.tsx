import React from 'react'
import Peach from './peach-sample.jpeg';
import { css } from '@emotion/css'

const RightContainer = () => {
  return (
    <>
        <img src={Peach} alt="peach-sample" 
             className={css` 
                         width:400px;
                         height:300px;`}/>
    </>
  )
}

export default RightContainer
