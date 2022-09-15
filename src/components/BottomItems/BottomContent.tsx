import React from 'react'
import { css } from '@emotion/css'
import Tree from './Tree-sample.jpeg';



const BottomContent = () => {
  return (
    <div>
       <img src={Tree} alt="peach-sample" 
             className={css` 
                         width:100%;
                         height:100vh;`}/>
    </div>
  )
}

export default BottomContent
