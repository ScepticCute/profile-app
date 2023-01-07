import React, { useEffect, useRef, useState } from 'react'
import styles from './WelcomeSection.module.scss'

export const WelcomeSection = ({ arrowIsActive }) => {
  const typewritter = useRef(null)
  const [textForTypewritter] = useState('Я - FrontEnd разработчик.')

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

  return (
    <>
      <section className={styles.wrapper} id='welcomeAnchor'>
        <div className={styles.block}><span ref={typewritter}> </span></div>
      </section>
    </>
  )
}
