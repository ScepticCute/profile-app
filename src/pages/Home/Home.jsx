import React, { useEffect, useRef, useState } from 'react'
import styles from './Home.module.scss';
import { HashLink as Link } from 'react-router-hash-link'

import sushiShopPreview from '../../assets/sites_preview/sushi-shop/full-size/sushi-shop1.png'
import todoAppPreview from '../../assets/sites_preview/todo-app/full-size/todo.png'
import fillerPreview from '../../assets/sites_preview/filler_img.png'

import { HiArrowDown } from "react-icons/hi2";
import { SocialIcon } from 'react-social-icons';

// Использую данный способ соединения классов заместо библиотеки classnames по причине того, что это быстрее.

const orangeTheme = `${styles.orange_theme} ${styles.sites__image}`
const whiteTheme = `${styles.white_theme} ${styles.sites__image}`

//  

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
      {/* НАЧАЛО ПЕРВОЙ СЕКЦИИ, ВСТУПИТЕЛЬНОЙ. */}
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

      {/* КОНЕЦ ПЕРВОЙ СЕКЦИИ, ВСТУПИТЕЛЬНОЙ. */}
      {/* НАЧАЛО ВТОРОЙ СЕКЦИИ, С БЛОКАМИ ТЕКСТА. */}

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

      {/* КОНЕЦ ВТОРОЙ СЕКЦИИ, С БЛОКАМИ ТЕКСТА. */}
      {/* НАЧАЛО ТРЕТЬЕЙ СЕКЦИИ, С ПРИМЕРАМИ САЙТОВ. */}

      <section className={styles.sites__wrapper} id='sitesAnchor'>
        <div className={styles.sites__flex_wrapper}>
          <div className={styles.sites__description}>
            <span>Данный проект построен на стеке RTK, RTK Query, React, Typescript, SCSS Modules. В качестве бэка здесь используется mockapi, у которого ограничен функционал, в виду отсутствия оного пагинация была "захардкожена". Проект представляет из себя быстрый, кэширующий запросы на бэк, сервис для продажи суши. Код проекта я считаю легкочитаемым, архитектура и типизация позволяют легко масштабировать проект. Увы, проект не дал возможности реализовать фичи, выделяющие тривиальный концепт интернет-магазина.
            </span>
            <div className={styles.sites__icon}>
              <SocialIcon
                url='https://github.com/ScepticCute'
                rel="noreferrer"
                target="_blank" bgColor='white' />
            </div>
          </div>
          <div className={orangeTheme}> <a href="https://sushi-shop2.onrender.com" target='_blank'> <img src={sushiShopPreview} alt="sushi shop preview" /></a></div>
        </div>
        <div className={styles.sites__flex_wrapper}>
          <div className={styles.sites__description}>
            <span>Данный проект построен на стеке RTK, RTK Query, React, Typescript, SCSS Modules. В качестве бэка здесь используется mockapi, у которого ограничен функционал, в виду отсутствия оного пагинация была "захардкожена". Проект представляет из себя быстрый, кэширующий запросы на бэк, сервис для продажи суши. Код проекта я считаю легкочитаемым, архитектура и типизация позволяют легко масштабировать проект. Увы, проект не дал возможности реализовать фичи, выделяющие тривиальный концепт интернет-магазина.
            </span>
            <div className={styles.sites__icon}>
              <SocialIcon
                url='https://github.com/ScepticCute'
                rel="noreferrer"
                target="_blank" bgColor='white' />
            </div>
          </div>

          <div className={whiteTheme}> <a href="https://todo-qq12.onrender.com/" target='_blank'> <img src={todoAppPreview} alt="todo app preview" /></a></div>
        </div>

        <div className={styles.sites__flex_wrapper}>
          <div className={styles.sites__description}>
            <span>Данный проект построен на стеке RTK, RTK Query, React, Typescript, SCSS Modules. В качестве бэка здесь используется mockapi, у которого ограничен функционал, в виду отсутствия оного пагинация была "захардкожена". Проект представляет из себя быстрый, кэширующий запросы на бэк, сервис для продажи суши. Код проекта я считаю легкочитаемым, архитектура и типизация позволяют легко масштабировать проект. Увы, проект не дал возможности реализовать фичи, выделяющие тривиальный концепт интернет-магазина.
            </span>
            <div className={styles.sites__icon}>
              <SocialIcon
                url='https://github.com/ScepticCute'
                rel="noreferrer"
                target="_blank" bgColor='white' />
            </div>
          </div>

          <div className={whiteTheme}> <a href="https://todo-qq12.onrender.com/" target='_blank'> <img src={fillerPreview} alt="todo app preview" /></a></div>
        </div>
      </section>

      {/* КОНЕЦ ТРЕТЬЕЙ СЕКЦИИ, С ПРИМЕРАМИ САЙТОВ. */}
      {/* НАЧАЛО СЕКЦИИ С ОПИСАНИЕМ СКИЛЛОВ. */}

      <section className={styles.bottom__wrapper} id='bottomAnchor'>
        <div className={styles.bottom__wrap}>
          <div className={styles.bottom__content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia officiis similique, debitis ex quibusdam quam esse neque minima deleniti, hic iusto officia fuga id expedita alias eum ea nobis suscipit?</div>
        </div>
      </section>
    </>
  )
}
