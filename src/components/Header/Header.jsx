import React from 'react'
import styles from './Header.module.scss'
import { HashLink as Link } from 'react-router-hash-link'
import { HiBars3 } from 'react-icons/hi2'

const linksArray = [
  { link: '/#welcomeAnchor', title: 'Главная страница' },
  { link: '/#middleAnchor', title: 'Обо мне' },
  { link: '/#sitesAnchor', title: 'Примеры работ' },
  { link: '/#bottomAnchor', title: 'Мои преимущества' },
]

// Добей бургер по старому проекту с суши.

export const Header = ({ setBurgerOpen, burgerIsOpen }) => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {linksArray.map(el => (
            <Link to={el.link} smooth={true}><li>{el.title}</li></Link>
          ))}
        </ul >


      </nav >
      <div className={styles.burger} onClick={() => { setBurgerOpen(!burgerIsOpen) }}>
        <HiBars3 />
      </div>
    </header>
  )
}
