import React from 'react'
import styles from './SkillsSection.module.scss'

import { SiJavascript, SiTypescript, SiCss3, SiHtml5, SiExpress, SiNodedotjs, SiReact, SiSass, SiRedux, SiJest, SiGit, SiStyledcomponents, SiNextdotjs, SiNpm, SiMongodb, SiPostgresql, SiWebpack } from "react-icons/si";

const skillSvgs = [
  { title: 'HTML5', description: 'Язык разметки. Я соблюдаю правильную семантику и accessability (в виду чего вы можете переходить по иконкам с помощью Tab) во всех проектах которые увидит кто-либо помимо меня.', svg: SiHtml5, progress: 90 },
  { title: 'CSS3', description: 'Каскадные таблицы стилей. Считаю свои навыки достаточными для реализации любой стандартной операции или базовой анимации.', svg: SiCss3, progress: 75 },
  { title: 'SASS/SCSS', description: 'Препроцессор CSS. Мой основной инструмент для работы со стилями.', svg: SiSass, progress: 50 },
  { title: 'JavaScript', description: 'Высокоуровневый язык программирования. Имею крепкий теоретический базис.', svg: SiJavascript, progress: 80 },
  { title: 'TypeScript', description: 'Типизированный язык программирования. Из тем которые я пока не изучал: продвинутые типы, обработка ошибок.', svg: SiTypescript, progress: 80 },
  { title: 'Node.js', description: 'Приложение расширяющее потенциал JS в среде серверной разработки. Теоритическое знание части библиотек и синтаксиса. ', svg: SiNodedotjs, progress: 15 },
  { title: 'Express', description: 'Фреймворк Node.js. Был опыт создания нескольких тривиальных REST-API серверов.', svg: SiExpress, progress: 30 },
  { title: 'React', description: 'Фреймворк JS в web-среде. ', svg: SiReact, progress: 75 },
  { title: 'Redux/ReduxTK', description: 'Инструмент для управления глобальным состоянием. Есть опыт исключительно с RTK.', svg: SiRedux, progress: 50 },
  {title: 'Jest', description: 'Инструмент тестирования веб-приложений.', svg: SiJest, progress: 10},
  { title: 'Git', description: `Система контроля версий. Использую интерфейсы из-за маленьких pet-project'ов`, svg: SiGit, progress: 15 },
  { title: 'StyledComponents', description: 'Инструмент для удобной и быстрой работы с CSS с большим акцентом на взаимодействие со значениями CSS.', svg: SiStyledcomponents, progress: 40 },
  { title: 'Next', description: 'React фреймворк. В процессе активного изучения.', svg: SiNextdotjs, progress: 15 },
  { title: 'NPM', description: 'Менеджер пакетов.', svg: SiNpm, progress: 80 },
  { title: 'MongoDB', description: 'Нереляционная документоориентированная база данных. Пользовался исключительно через mongoose.', svg: SiMongodb, progress: 20 },
  { title: 'PostgreSQL', description: 'Реляционная база данных. Можно сказать, что иконка тут на далёкое будущее :)', svg: SiPostgresql, progress: 10 },
  {title: 'Webpack', description: 'Бандлер приложений на JS.', svg: SiWebpack, progress: 0},
]

export const SkillsSection = () => {

  const [currentSkill, setCurrentSkill] = React.useState('')
  const [progressBarStyle, setProgressBarStyle] = React.useState('100%')

  const onClickHadler = (index) => {
    setProgressBarStyle(`${skillSvgs[index].progress}%`)
    setCurrentSkill(skillSvgs[index])
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
                {skillSvgs.map((el, i) => (
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
