import React, { useEffect, useRef, useState } from 'react'
import styles from './Home.module.scss';
import { HiArrowDown } from "react-icons/hi2";
import { HashLink as Link } from 'react-router-hash-link'


export const Home = ({ arrowIsActive }) => {
  const typewritter = useRef(null)
  const [textForTypewritter, setTextForTypewritter] = useState('Я FrontEnd разработчик.')
  useEffect(() => {
    setTimeout(() => {
      for (let i = 0; i < textForTypewritter.length; i++) {
        setTimeout(() => {
          console.log(textForTypewritter.split('').slice(0, i + 1).join(''))
          typewritter.current.innerText = textForTypewritter.split('').slice(0, i + 1).join('')
        }, 100 * i)
      }
    }, 2300)
  }, [textForTypewritter])

  const onClickArrowHandler = () => {
    window.scrollTo(0, 1000)
  }
  return (
    <>
      <div className={styles.welcome__wrapper} id='welcomeAnchor'>
        <div className={styles.welcome__block}><span ref={typewritter}> </span></div>
      </div>
      {!arrowIsActive
        ?
        <Link to='/#middleAnchor' smooth={true}>
          <div className={styles.arrow} onClick={onClickArrowHandler}>
            <HiArrowDown />

          </div>
        </Link>
        : ''}

      <div className={styles.middle__wrapper} id='middleAnchor'>
        <div className={styles.middle__block_wrapper}>
          <div className={styles.middle__block}>
            <h1>Lorem ipsum dolor sit amet</h1>
            Consectetur adipisicing elit. Error ducimus repellat nisi aspernatur, quia molestias voluptatibus quod impedit reiciendis omnis, vel nostrum perspiciatis. Doloribus quasi fugit reiciendis exercitationem autem sapiente!
          </div>
          <div className={styles.middle__block}>
            <h1>Lorem ipsum dolor sit amet</h1>
            Consectetur adipisicing elit. Error ducimus repellat nisi aspernatur, quia molestias voluptatibus quod impedit reiciendis omnis, vel nostrum perspiciatis. Doloribus quasi fugit reiciendis exercitationem autem sapiente!
          </div>
        </div>
        <div className={styles.middle__block_wrapper}>
          <div className={styles.middle__block}>
            <h1>Lorem ipsum dolor sit amet</h1>
            Consectetur adipisicing elit. Error ducimus repellat nisi aspernatur, quia molestias voluptatibus quod impedit reiciendis omnis, vel nostrum perspiciatis. Doloribus quasi fugit reiciendis exercitationem autem sapiente!
          </div>
          <div className={styles.middle__block}>
            <h1>Lorem ipsum dolor sit amet</h1>
            Consectetur adipisicing elit. Error ducimus repellat nisi aspernatur, quia molestias voluptatibus quod impedit reiciendis omnis, vel nostrum perspiciatis. Doloribus quasi fugit reiciendis exercitationem autem sapiente!
          </div>
        </div>
        <div className={styles.middle__block_wrapper}>
          <div className={styles.middle__block}>
            <h1>Lorem ipsum dolor sit amet</h1>
            Consectetur adipisicing elit. Error ducimus repellat nisi aspernatur, quia molestias voluptatibus quod impedit reiciendis omnis, vel nostrum perspiciatis. Doloribus quasi fugit reiciendis exercitationem autem sapiente!
          </div>
          <div className={styles.middle__block}>
            <h1>Lorem ipsum dolor sit amet</h1>
            Consectetur adipisicing elit. Error ducimus repellat nisi aspernatur, quia molestias voluptatibus quod impedit reiciendis omnis, vel nostrum perspiciatis. Doloribus quasi fugit reiciendis exercitationem autem sapiente!
          </div>
        </div>
      </div>

      <div className={styles.bottom__wrapper} id='bottomAnchor'>
        1
      </div>
    </>
  )
}
