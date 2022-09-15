import React from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
import { css } from '@emotion/css'

const TopContent = () => {
  return (
    <div className={css`
                      padding-top:100px;
                      padding-bottom: 200px;
                      display:flex;
                      align-items:center;
                      justify-content:space-evenly;
                      `}>
      <LeftContainer />
      <RightContainer />
    </div>
  )
}

export default TopContent
