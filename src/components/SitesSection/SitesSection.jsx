import React from 'react'
import styles from './SitesSection.module.scss'

import sushiShopPreview from '../../assets/sites_preview/sushi-shop/full-size/sushi-shop1.png'
import todoAppPreview from '../../assets/sites_preview/todo-app/full-size/todo.png'
import fillerPreview from '../../assets/sites_preview/filler_img.png'

import { SocialIcon } from 'react-social-icons';

const orangeTheme = `${styles.orange_theme} ${styles.sites__image}`
const whiteTheme = `${styles.white_theme} ${styles.sites__image}`

export const SitesSection = () => {
  return (
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
  )
}
