import React from 'react'
import { css } from '@emotion/css'

const textColor = 'white'
const themeColor ='#FF33FF'


const LeftContainer = () => {
  return (
    <div className={css`
                     display:inline`}>
        <h4 className={css`
                        color:${textColor};
                        letter-spacing:2px;
                        font-size:20px;`}>
                        桃で稼ごう</h4>
        <h1 className={css`
                        color:${textColor};
                        font-size:75px;
                        margin:20px 0 20px;`}>
                        MOMO<span className={css`
                                              color: ${themeColor};`}>
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              ZANMAI</span></h1>
        <h3 className={css`
                        color:${textColor};
                        font-size:25px;
                        margin-bottom:50px;
                        `}>
                        トルコ学生ワーホリプロジェクト</h3>
        <div>
            <form className={css`
                              width:380px;
                              position: relative;
            `}>
                <input
                    className={css`
                                padding:15px 130px15px 15px;
                                width:100%;
                                outline:none;
                                border:2px solid pink;
                                border-radius:10px;`}
                    type="email"
                    placeholder='"メールアドレスを入力'/>
                <input
                    className={css`
                                position: absolute;
                                border:none;
                                color:${textColor};
                                top:3px;
                                right:0px;
                                background-color:${themeColor};
                                border-radius:10px;`}
                    type="submit"
                    value="お問合せ"/>
            </form>
        </div>
    </div>
  )
}

export default LeftContainer
