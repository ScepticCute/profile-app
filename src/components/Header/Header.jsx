import React from 'react'
import styles from './Header.module.scss'
import { HashLink as Link } from 'react-router-hash-link'
import { HiBars3 } from 'react-icons/hi2'

const linksArray = [
  { link: '/#welcomeAnchor', title: 'Начало' },
  { link: '/#sitesAnchor', title: 'Примеры работ' },
  { link: '/#bottomAnchor', title: 'Мои навыки' },
]

// Добей бургер по старому проекту с суши.

export const Header = ({ setBurgerOpen, burgerIsOpen }) => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {linksArray.map((el, i) => (
            <Link
              to={el.link}
              smooth={true}
              key={i}>
              <li>{el.title}</li>
            </Link>
          ))}
        </ul >


      </nav >
      <div className={styles.burger} onClick={() => { setBurgerOpen(!burgerIsOpen) }}>
        <HiBars3 />
      </div>
    </header>
  )
}
