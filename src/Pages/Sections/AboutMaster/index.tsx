import React from 'react'

import Master_image from '../../../assets/images/master.jpg';
import styles from './AboutMaster.module.css';

const AboustMaseterSeciton = () => {
  return (
    <section className={styles.about_master_section} id='about_master'>
      <div className={`${styles.container} container`}>
                <div className={styles.content_container}>
                    <h2 className={styles.content_title}>Grão-Mestre <br /> Gabriel Amorim</h2>
                    <p className={styles.content_text}>
                        Grão-Mestre Gabriel Amorim, fundador da TSKF, dedicou-se ao Kung Fu após praticar outras artes marciais na infância. Encantado com a filosofia e a sabedoria oriental, ele mergulhou profundamente na cultura, filosofia e medicina chinesas ao longo de <strong>mais de 20 anos</strong> de prática. Para ele, o Kung Fu é muito mais que uma arte marcial; é um estilo de vida que transforma. Como primeiro brasileiro a alcançar o <strong>7º Tuen</strong> conferido por uma organização mundial, ele compartilha seus conhecimento e disciplina com seus alunos.
                    </p>
                </div>
                <div className={styles.image_container}>
                    <img src={Master_image} alt="faxada tskf mooca" />
                </div>
            </div>
    </section>
  )
}

export default AboustMaseterSeciton