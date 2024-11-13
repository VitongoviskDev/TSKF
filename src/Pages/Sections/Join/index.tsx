import React from 'react'
import ButtonCta from '../../../Components/ButtonCta'

import styles from './join.module.css';
import check_img from '../../../assets/images/verifica.png'

const JoinSection = () => {
  return (
    <section className={styles.join_section}>
      <div className={`${styles.container} container`}>
        <h1 className={styles.join_title}>Matricule-se</h1>
        <h2 className={styles.subtitle}>Faça parte da família TSKF</h2>
        <p className={styles.text}>Aqui você pode treinar em qualquer uma de nossas academias!</p>
        <ul className={styles.list}>
            <li className={styles.list_item}><span><img src={check_img} alt="check" /></span>Ginástica</li>
            <li className={styles.list_item}><span><img src={check_img} alt="check" /></span>Posições básicas</li>
            <li className={styles.list_item}><span><img src={check_img} alt="check" /></span>Formas</li>
            <li className={styles.list_item}><span><img src={check_img} alt="check" /></span>Defesa pessoal</li>
            <li className={styles.list_item}><span><img src={check_img} alt="check" /></span>Tai Chi Chuan</li>
        </ul>
        <div className={styles.cta_buttons}>
          <ButtonCta primary>Matricule-se</ButtonCta>
          <ButtonCta>Aula experimental</ButtonCta>
        </div>
      </div>
    </section>
  )
}

export default JoinSection