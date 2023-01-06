import React from 'react'
import styles from './SkillsSection.module.scss'
import {SiJavascript, SiTypescript, SiCss3, SiHtml5, SiExpress, SiNodedotjs, SiReact, SiSass, SiRedux, SiJest, SiGit, SiStyledcomponents, SiNextdotjs, SiNpm, SiMongodb, SiPostgresql, SiWebpack} from  "react-icons/si";

const skillSvgs = [
  {title: 'HTML5', description: 'Язык разметки.', svg: SiHtml5, progress: 90},
  {title: 'CSS3', description: 'Каскадные таблицы стилей.', svg: SiCss3, progress: 80},
  {title: 'SASS/SCSS', description: 'Препроцессор CSS.', svg: SiSass, progress: 50},
  {title: 'JavaScript', description: 'Высокоуровневый язык программирования.', svg: SiJavascript, progress: 70},
  {title: 'TypeScript', description: 'Типизированный язык программирования.', svg: SiTypescript, progress: 80},
  {title: 'Node.js', description: 'Приложение расширяющее потенциал JS в среде серверной разработки.', svg: SiNodedotjs, progress: 20},
  {title: 'Express', description: 'Фреймворк Node.js.', svg: SiExpress, progress: 30},
  {title: 'React', description: 'Фреймворк JS в web-среде.', svg: SiReact, progress: 75},
  {title: 'Redux/ReduxTK', description: 'Инструмент для управления глобальным состоянием.', svg: SiRedux, progress: 50},
  {title: 'Jest', description: 'Инструмент тестирования веб-приложений.', svg: SiJest, progress: 10},
  {title: 'Git', description: 'Система контроля версий.', svg: SiGit, progress: 15},
  {title: 'StyledComponents', description: 'Инструмент для удобной и быстрой работы с CSS с большим акцентом на взаимодействие с значениями CSS.', svg: SiStyledcomponents, progress: 40},
  {title: 'Next', description: 'React фреймворк.', svg: SiNextdotjs, progress: 15},
  {title: 'NPM', description: 'Менеджер пакетов.', svg: SiNpm, progress: 90},
  {title: 'MongoDB', description: 'Нереляционная документоориентированная база данных.', svg: SiMongodb, progress: 20},
  {title: 'PostgreSQL', description: 'Реляционная база данных.', svg: SiPostgresql, progress: 10},
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
              <h1> Заголовок заголовок! </h1>
              <p> Опыт опыт опыт... Опыт опыт опыт... Опыт опыт опыт...  </p>
            </div>
            <div className={styles.right_side}>
              <h1> Интерактивная скилл-панель </h1>
            <div className={styles.skill_panel}>
              <div className={styles.skill_grid}>
                {skillSvgs.map((el, i) => (
                  <div 
                    key={i}
                    className={styles.skill_element}
                    onClick={() => {onClickHadler(i)}}
                    > <el.svg /> </div>
                ))}
              </div>
              {currentSkill.title ?   <h1 className={styles.current_title}> {currentSkill.title} </h1> : <h1 className={styles.current_title}> Прогресс навыка. </h1>} 
              <div className={styles.progress_wrapper}>  
                <div 
                  className={styles.progress_bar}
                  style={{width: progressBarStyle}}
                  > </div> 
              </div>
                
              
            </div>
            {currentSkill ? <div className={styles.progress_description}> {currentSkill.description}  </div> : ''}
          </div>
          </div>
      </section>
  )
}
