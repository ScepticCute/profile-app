import React from 'react'
import styles from './Header.module.scss'
import { HashLink as Link } from 'react-router-hash-link'

export const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <Link to="/#welcomeAnchor" smooth={true}><li>Главная страница</li></Link>
        <Link to="/#middleAnchor" smooth={true}><li>Контакты</li></Link>
      </ul >
    </nav >
  )
}
