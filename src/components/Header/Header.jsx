import React from 'react'
import styles from './Header.module.scss'
import { HashLink as Link } from 'react-router-hash-link'

const linksArray = [
  { link: '/#welcomeAnchor', title: 'Начало' },
  { link: '/#sitesAnchor', title: 'Работы' },
  { link: '/#bottomAnchor', title: 'Навыки' },
]

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
    </header>
  )
}
