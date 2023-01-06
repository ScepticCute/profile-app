import React from 'react'
import styles from './Footer.module.scss'
import {SocialIcon} from 'react-social-icons'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}> 
        <div className={styles.contact_text}> Рад, что вы решили прочесть футер! </div>
        <div className={styles.icons}>
          <span className={styles.icon}> 
            <SocialIcon 
              bgColor='white' 
              url='https://github.com/ScepticCute'
              rel="noreferrer"
              target="_blank" 
              bgColor='white' />
          </span>
          <span className={styles.icon}> 
            <SocialIcon 
              bgColor='white' 
              url='https://t.me/termocup'
              rel="noreferrer"
              target="_blank" 
              bgColor='white' />
          </span>
        </div>
      </div>
    </footer>
  )
}
