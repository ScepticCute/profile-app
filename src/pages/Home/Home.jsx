import React, { useEffect, useRef, useState } from 'react'
import styles from './Home.module.scss';
import { HiArrowDown } from "react-icons/hi2";
import { HashLink as Link } from 'react-router-hash-link'
import sushiSitePreview from '../../assets/sites_preview/sushi-shop/full-size/sushi-shop1.png'
import { SocialIcon } from 'react-social-icons';

export const Home = ({ arrowIsActive }) => {
  const typewritter = useRef(null)
  const [textForTypewritter, setTextForTypewritter] = useState('Я - FrontEnd разработчик.')
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
      <section className={styles.welcome__wrapper} id='welcomeAnchor'>
        <div className={styles.welcome__block}><span ref={typewritter}> </span></div>
      </section>
      {!arrowIsActive
        ?
        <Link to='/#middleAnchor' smooth={true}>
          <div className={styles.arrow} onClick={onClickArrowHandler}>
            <HiArrowDown />

          </div>
        </Link>
        : ''}

      <div className={styles.filler}></div>


      <section className={styles.middle__wrapper} id='middleAnchor'>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus distinctio ratione eligendi totam dignissimos voluptatibus! Alias odit, tempora a optio impedit maiores quia, ipsa, dolorum tenetur laboriosam sit eius?
          </div>
        </div>
      </section>

      <section className={styles.sites__wrapper}>
        <div className={styles.sites__flex_wrapper}>
          <div className={styles.sites__description}>
            <span>Данный проект построен на стеке RTK, RTK Query, React, Typescript, SCSS Modules. В качестве бэка здесь используется mockapi, у которого ограничен функционал, в виду отсутствия оного пагинация была "захардкожена". Проект представляет из себя быстрый, кэширующий запросы на бэк, сервис для продажи суши. Код проекта я считаю легкочитаемым, архитектура и типизация позволяют легко масштабировать проект. Увы, проект не дал возможности реализовать фичи, выделяющие тривиальный концепт интернет-магазина.
            </span>
            <div className={styles.sites__icon}>
              <SocialIcon url='https://github.com/ScepticCute' target="_blank" bgColor='white' />
            </div>
          </div>
          <div className={styles.sites__image}> <a href="https://sushi-shop2.onrender.com" target='_blank'> <img src={sushiSitePreview} alt="sushi shop preview" /></a></div>
        </div>
      </section>



      <section className={styles.bottom__wrapper} id='bottomAnchor'>

      </section>
    </>
  )
}
