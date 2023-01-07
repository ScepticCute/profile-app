import React from 'react'
import styles from './SitesSection.module.scss'

import sushiShopPreview from '../../assets/sites_preview/sushi-shop/full-size/sushi-shop1.png'
import todoAppPreview from '../../assets/sites_preview/todo-app/full-size/todo.png'
import fillerPreview from '../../assets/sites_preview/filler_img.png'

import { SocialIcon } from 'react-social-icons';

const orangeTheme = `${styles.orange_theme} ${styles.image}`
const whiteTheme = `${styles.white_theme} ${styles.image}`

export const SitesSection = () => {
  return (
    <section className={styles.wrapper} id='sitesAnchor'>
      <div className={styles.flex_wrapper}>
        <div className={styles.description}>
          <span>Данный проект построен на стеке RTK, RTK Query, React, Typescript, SCSS Modules. В качестве бэка здесь используется mockapi, у которого ограничен функционал, в виду отсутствия оного пагинация была "захардкожена". Проект представляет из себя быстрый, кэширующий запросы на бэк, сервис для продажи суши. Код проекта я считаю легкочитаемым, архитектура и типизация позволяют легко масштабировать проект. Увы, проект не дал возможности реализовать фичи, выделяющие тривиальный концепт интернет-магазина.
          </span>
          <div className={styles.icon}>
            <SocialIcon
              url='https://github.com/ScepticCute/sushi-shop'
              rel="noreferrer"
              target="_blank" bgColor='white' />
          </div>
        </div>
        <div className={orangeTheme}> <a href="https://sushi-shop2.onrender.com" target='_blank'> <img src={sushiShopPreview} alt="sushi shop preview" /></a></div>
      </div>
      <div className={styles.flex_wrapper}>
        <div className={styles.description}>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ut aspernatur expedita omnis saepe! Qui omnis perspiciatis rerum voluptatum quos at, distinctio deserunt ducimus, ad aut nulla nesciunt assumenda! Fuga.
            Incidunt, assumenda iure illo veniam adipisci a molestias earum at delectus, cumque id iusto aliquid nostrum odio cupiditate esse aliquam impedit amet doloremque necessitatibus velit voluptatibus ea repellendus. Impedit, sunt?
            Eos, pariatur! Minus, hic aliquam doloremque, voluptas soluta dolores corrupti delectus, vero asperiores ad blanditiis? Modi doloribus quasi beatae placeat veritatis, quidem velit similique non? Repellat ab ipsam praesentium deleniti.</span>
          <div className={styles.icon}>
            <SocialIcon
              url='https://github.com/ScepticCute/todo-ts-redux'
              rel="noreferrer"
              target="_blank" bgColor='white' />
          </div>
        </div>

        <div className={whiteTheme}> <a href="https://todo-qq12.onrender.com/" target='_blank'> <img src={todoAppPreview} alt="todo app preview" /></a></div>
      </div>

      <div className={styles.flex_wrapper}>
        <div className={styles.description}>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, neque repellendus. Dolore, quia fugit facere quas voluptatibus quae exercitationem, suscipit nemo accusamus itaque quisquam! Sequi nobis ut sunt praesentium magni!
            Tempora temporibus deleniti aspernatur est beatae totam voluptatem tempore cum esse. Sit placeat labore explicabo blanditiis dolorem. Fugiat in suscipit, quibusdam culpa odio quam eligendi! Exercitationem quis doloremque aperiam id!</span>
          <div className={styles.icon}>
            <SocialIcon
              url='https://github.com/ScepticCute/todo-ts'
              rel="noreferrer"
              target="_blank" bgColor='white' />
          </div>
        </div>

        <div className={whiteTheme}> <a href="https://todo-qq12.onrender.com/" target='_blank'> <img src={fillerPreview} alt="todo app preview" /></a></div>
      </div>
    </section>
  )
}
