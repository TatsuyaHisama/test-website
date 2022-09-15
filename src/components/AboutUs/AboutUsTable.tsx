import React from 'react'
import { css } from '@emotion/css'

const textColor = 'white'

const AboutUsTable = () => {
  return (
    <div className={css`
                      padding-top:100px;
                      align-items:center;
                      justify-content: space-around;
                      background-color: gray;
                      height: 60vh;
                      padding-left: 20%;
                      padding-right: 20%;
    `}>
      <h2 className={css`
                      color:${textColor};
      `}>About us</h2>
      <p className={css`
                      color:${textColor};
      `}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  )
}

export default AboutUsTable
