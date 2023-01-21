import React from 'react'
import styles from './SkillsSection.module.scss'

import { SiJavascript, SiTypescript, SiCss3, SiHtml5, SiExpress, SiNodedotjs, SiReact, SiSass, SiRedux, SiJest, SiGit, SiStyledcomponents, SiNextdotjs, SiNpm, SiMongodb, SiPostgresql, SiWebpack } from "react-icons/si";

// Skills are encapsulated in a cloud-hosting environment variable.
// I use it because i don't need garbage commits with little changes of my  progression skill in my github.
const skillsArray = process.env.SKILLS_ARRAY

export const SkillsSection = () => {

  const [currentSkill, setCurrentSkill] = React.useState('')
  const [progressBarStyle, setProgressBarStyle] = React.useState('100%')

  const onClickHadler = (index) => {
    setProgressBarStyle(`${skillSvgs[index].progress}%`)
    setCurrentSkill(skillsArray[index])
  }

  return (
    <section className={styles.wrapper} id='bottomAnchor'>
          <div className={styles.content}>
            <div className={styles.left_side}>
          <h1> Мои навыки </h1>
          <p className={styles.description}>
            В таблице справа можно узнать то, насколько я считаю свои знания углубленными в определенной технологии. <br />
            В вопросе способа получения информации я предпочитаю книги, документации, статьи и практику. <br />
            Данные обновляются еженедельно.
          </p>
            </div>
            <div className={styles.right_side}>
              <h1> Интерактивная скилл-панель </h1>
            <div className={styles.skill_panel}>
              <div className={styles.skill_grid}>
                {skillsArray.map((el, i) => (
                  <button 
                    key={i}
                    className={styles.skill_element}
                    onClick={() => {onClickHadler(i)}}
                  > <el.svg /> </button>
                ))}
            </div>
            <div className={styles.progress_wrapper}>  
              <h2 className={styles.progress_bar_text}>{currentSkill.title}</h2>
                <div 
                  className={styles.progress_bar}
                  style={{width: progressBarStyle}}
              /> 
            </div>
            </div>
            {currentSkill ? <div className={styles.progress_description}> {currentSkill.description}  </div> : ''}
          </div>
          </div>
      </section>
  )
}
