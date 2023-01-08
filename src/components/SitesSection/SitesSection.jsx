import React from 'react'
import styles from './SitesSection.module.scss'

import sushiShopPreview from '../../assets/sites_preview/sushi-shop/full-size/sushi-shop1.png'
import todoAppPreview from '../../assets/sites_preview/todo-app/full-size/todo.png'
import fillerPreview from '../../assets/sites_preview/filler_img.png'

import { SocialIcon } from 'react-social-icons';
import { SiReact, SiRedux, SiSass, SiTypescript } from 'react-icons/si'
import { BsFillClockFill } from "react-icons/bs";


const orangeTheme = `${styles.orange_theme} ${styles.image}`
const whiteTheme = `${styles.white_theme} ${styles.image}`

export const SitesSection = () => {
  return (
    <section className={styles.wrapper} id='sitesAnchor'>

      <div className={styles.flex_wrapper}>
        <div className={styles.description}>
          <span> Интернет-магазин суши. Для фетча использовался RTK Query. </span>
          <div className={styles.icons_wrapper}>
            <div className={styles.stack_icons}>
              <div className={styles.stack_icon}>
                <SiTypescript />
              </div>
              <div className={styles.stack_icon}>
                <SiReact />
              </div>
              <div className={styles.stack_icon}>
                <SiRedux />
              </div>
              <div className={styles.stack_icon}>
                <SiSass />
              </div>
            </div>
            <div className={styles.icon}>
              <SocialIcon
                url='https://github.com/ScepticCute/sushi-shop'
                rel="noreferrer"
                target="_blank" bgColor='white' />
            </div>
          </div>
        </div>
        <div className={orangeTheme}> <a href="https://sushi-shop2.onrender.com" target='_blank'> <img src={sushiShopPreview} alt="sushi shop preview" /></a></div>
      </div>

      <div className={styles.flex_wrapper}>
        <div className={styles.description}>
          <span> ToDo с Drag&Drop функционалом на нескольких бордах. </span>
          <div className={styles.icons_wrapper}>
            <div className={styles.stack_icons}>
              <div className={styles.stack_icon}>
                <SiTypescript />
              </div>
              <div className={styles.stack_icon}>
                <SiReact />
              </div>
              <div className={styles.stack_icon}>
                <SiRedux />
              </div>
              <div className={styles.stack_icon}>
                <SiSass />
              </div>
            </div>
            <div className={styles.icon}>
              <SocialIcon
                url='https://github.com/ScepticCute/sushi-shop'
                rel="noreferrer"
                target="_blank" bgColor='white' />
            </div>
          </div>
        </div>
        <div className={whiteTheme}> <a href="https://todo-qq12.onrender.com/" target='_blank'> <img src={todoAppPreview} alt="todo app preview" /></a></div>
      </div>

      <div className={styles.flex_wrapper}>
        <div className={styles.description}>
          <span> Скоро здесь обязательно что-то появится. </span>
          <div className={styles.icons_wrapper}>
            <div className={styles.stack_icons}>
              <div className={styles.stack_icon}>
                <BsFillClockFill />
              </div>
            </div>
            <div className={styles.icon}>
              <SocialIcon
                url=''
                rel="noreferrer"
                bgColor='white' />
            </div>
          </div>
        </div>
        <div className={whiteTheme}> <a href="https://todo-qq12.onrender.com/" target='_blank'> <img src={fillerPreview} alt="todo app preview" /></a></div>
      </div>
    </section>
  )
}
