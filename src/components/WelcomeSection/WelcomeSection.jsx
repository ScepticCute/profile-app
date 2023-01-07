import React, { useEffect, useRef, useState } from 'react'
import styles from './WelcomeSection.module.scss'

// import { HashLink as Link } from 'react-router-hash-link'
// import { HiArrowDown } from "react-icons/hi2";

export const WelcomeSection = ({ arrowIsActive }) => {
  const typewritter = useRef(null)
  const [textForTypewritter, setTextForTypewritter] = useState('Я - FrontEnd разработчик.')

  useEffect(() => {
    setTimeout(() => {
      for (let i = 0; i < textForTypewritter.length; i++) {
        setTimeout(() => {
          typewritter.current.innerText = textForTypewritter
            .split('')
            .slice(0, i + 1)
            .join('')
        }, 100 * i)
      }
    }, 2300)
  }, [textForTypewritter])

  // const onClickArrowHandler = () => {
  //   window.scrollTo(0, 1000)
  // }

  return (
    <>
      <section className={styles.welcome__wrapper} id='welcomeAnchor'>
        <div className={styles.welcome__block}><span ref={typewritter}> </span></div>
      </section>
      {/* {
        !arrowIsActive
          ?
          <Link to='/#sitesAnchor' smooth>
            <div className={styles.arrow} onClick={onClickArrowHandler}>
              <HiArrowDown />

            </div>
          </Link>
          : ''
      }*/}

      {/* Починить смуф у стрелки. Догадок в чём проблема у меня нет. */}
    </>
  )
}
