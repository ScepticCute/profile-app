import React from 'react'
import styles from './SkillsSection.module.scss'

export const SkillsSection = () => {
  return (
    <section className={styles.wrapper} id='bottomAnchor'>
        <div className={styles.wrap}>
          <div className={styles.content}>
            <div className={styles.left_side}>
              <h1> lorem lorem lorem lorem lorem lorem </h1>
              <p> lorem lorem lorem lorem lorem lorem lorem lorem  </p>
            </div>
            <div className={styles.skill_panel}>
              <div className={styles.skill_grid}>1 </div>
              <div className={styles.progress_bar}> 1</div>
            </div>
          </div>
        </div>
      </section>
  )
}
