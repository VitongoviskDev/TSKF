// HeroSection.js
import React from 'react';
import styles from './Hero.module.css';
import ButtonCta from '../../../Components/ButtonCta';

const HeroSection = () => {
    return (
        <div className={styles.hero_section}>
      <div className={`${styles.container} container`}>
                <div className={styles.container_left}>
                    <h1 className={styles.hero_title}>TSKF</h1>
                    <p className={styles.hero_subtitle}>TEMPLO SHAOLIN DE KUNG FU</p>
                    <p className={styles.hero_text}>Equilíbrio, Saúde <br></br>e Autoconhecimento</p>
                    <div className={styles.cta_buttons}>
                        <ButtonCta primary>Aula Experimental</ButtonCta>
                        <ButtonCta>Conheça a TSKF</ButtonCta>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
