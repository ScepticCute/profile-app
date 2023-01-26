import React from 'react'
import styles from './SkillsSection.module.scss'

import { SiJavascript, SiTypescript, SiCss3, SiHtml5, SiExpress, SiNodedotjs, SiReact, SiSass, SiRedux, SiJest, SiGit, 
         SiStyledcomponents, SiNextdotjs, SiNpm, SiMongodb, SiPostgresql, SiWebpack, SiPython, SiDjango } from "react-icons/si";

import {HiComputerDesktop} from "react-icons/hi2";
const skillSvgs = [
  { title: 'HTML5', description: 'Язык разметки. Я соблюдаю правильную семантику и accessability (в виду чего вы можете переходить по иконкам с помощью Tab) во всех проектах которые увидит кто-либо помимо меня.', svg: SiHtml5, progress: 90 },
  { title: 'CSS3', description: 'Каскадные таблицы стилей.', svg: SiCss3, progress: 75 },
  { title: 'SASS/SCSS', description: 'Препроцессор CSS. Мой основной инструмент для работы со стилями.', svg: SiSass, progress: 60 },
  { title: 'JavaScript', description: 'Высокоуровневый язык программирования. Имею крепкие теоретические знания.', svg: SiJavascript, progress: 85 },
  { title: 'TypeScript', description: 'Высокоуровневый строго типизированный язык программирования. Уверенное понимание большей части языка.', svg: SiTypescript, progress: 80 },
  { title: 'Node.js', description: 'Транслятор JS в машинный код, расширяет потенциал JS и TS в среде серверной разработки. ', svg: SiNodedotjs, progress: 25 },
  { title: 'Express', description: 'Фреймворк Node.js. Есть опыт создания REST-API приложений.', svg: SiExpress, progress: 60 },
  { title: 'React', description: 'Фреймворк JS в web-среде. ', svg: SiReact, progress: 80 },
  { title: 'Redux/ReduxTK', description: 'Инструмент для управления глобальным состоянием. Есть опыт работы с RTK и RTKQuery.', svg: SiRedux, progress: 50 },
  {title: 'Jest', description: 'Инструмент тестирования приложений на JS и TS.', svg: SiJest, progress: 10},
  { title: 'Git', description: `Система контроля версий. Преимущественно использую GUI интерфейсы Git'а.`, svg: SiGit, progress: 15 },
  { title: 'StyledComponents', description: 'Инструмент для удобной и быстрой работы с CSS с большим акцентом на взаимодействие с динамичными значениями CSS.', svg: SiStyledcomponents, progress: 40 },
  { title: 'Next', description: 'React фреймворк. В процессе активного изучения.', svg: SiNextdotjs, progress: 15 },
  { title: 'NPM', description: 'Менеджер пакетов.', svg: SiNpm, progress: 80 },
  { title: 'MongoDB', description: 'Нереляционная документоориентированная база данных.', svg: SiMongodb, progress: 40 },
  { title: 'PostgreSQL', description: 'Реляционная база данных. Можно сказать, что иконка тут на далёкое будущее :)', svg: SiPostgresql, progress: 10 },
  {title: 'Webpack', description: 'Бандлер приложений на JS.', svg: SiWebpack, progress: 10},
  {title: 'Python', description: 'Высокоуровневый интерпретируемый язык программирования.', svg: SiPython, progress: 30},
  {title: 'Django', description: 'Веб-бэкенд фреймворк поверх Python.', svg: SiDjango, progress: 10},

  {title: 'Computer Science', description: 'Наука об автоматизации, диджитализации и способах хранения информации. Поверхностные знания. Углубленно изучаю компьютерные сети.', svg: HiComputerDesktop, progress: 10},
]

export const SkillsSection = () => {

  const [currentSkill, setCurrentSkill] = React.useState('')
  const [progressBarStyle, setProgressBarStyle] = React.useState('100%')

  const onClickSkillHandler = (index) => {
    setProgressBarStyle(`${skillSvgs[index].progress}%`)
    setCurrentSkill(skillSvgs[index])
  }
  return (
    <section className={styles.wrapper} id='bottomAnchor' >
          <div className={styles.content}>
            <div className={styles.left_side}>
              <h1> Мои навыки </h1>
              <p className={styles.description}>
                В таблице справа можно узнать то, насколько я считаю свои знания углубленными в определенной технологии. <br />
                В вопросе способа получения информации я предпочитаю книги, документации, статьи и практику. <br />
                Данные обновляются примерно раз в месяц. <br />
                {/*Мои теоретические знания можно увидеть на второй странице просто нажав на кнопку ниже.  <br />*/}
              </p>
            </div>
            <div className={styles.right_side}>
              <h1> Интерактивная скилл-панель </h1>
            <div className={styles.skill_panel}>
              <div className={styles.skill_grid}>
                {skillSvgs.map((el, i) => (
                  <button 
                    key={i}
                    className={styles.skill_element}
                    onClick={() => {onClickSkillHandler(i)}}
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
          <div className={styles.second_page}>
          </div>


      </section>
  )
}
