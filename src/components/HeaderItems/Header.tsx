import { Link } from 'react-router-dom'
import { css } from '@emotion/css'

const themeColor = '#FF33FF'

const Header = () => {
  return (
    <header className={css`
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        color: aliceblue;
                        width: 100%;
                        z-index: 10;`}>
      <h3 className={css`
                      margin: 0;
                      padding: 0;
                      letter-spacing: 1px;
                      color: white;`}>
                        MOMO<span className={css`
                                              color:${themeColor}`}>
                                              ZANMAI</span></h3>
      <nav>
        <ul>
            <li className={css`
                            list-style: none;
                            display: inline-block;
                            margin-right: 30px;`}>
              <Link to="/" 
                    className={css`
                                text-decoration: none;
                                color: aliceblue;
                                transition: all 0.2s;
                                  ;&:hover {color: ${themeColor};}`}>
                                      ホーム</Link>
            </li>
            <li className={css`
                            list-style: none;
                            display: inline-block;
                            margin-right: 30px;`}>
              <Link to="/" 
                    className={css`
                                text-decoration: none;
                                color: aliceblue;
                                transition: all 0.2s;
                                  ;&:hover {color: ${themeColor};}`}>
                                      ブログ</Link>
            </li>
            <li className={css`
                            list-style: none;
                            display: inline-block;
                            margin-right: 30px;`}>
              <Link to="/" 
                    className={css`
                                text-decoration: none;
                                color: aliceblue;
                                transition: all 0.2s;
                                  ;&:hover {color: ${themeColor};}`}>
                                      SNS</Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
