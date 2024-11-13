import React from 'react';

import styles from './About.module.css';

import TSKF_Image from '../../../assets/images/TSKF MOOCA.jpg'
import TSKF_Image_Top_Decoration from '../../../assets/images/top decoration.png'

const AboutSection = () => {
    return (
        <section className={styles.about_section}>
            <div className={`${styles.container} container`}>
                <div className={styles.image_container}>
                    <img src={TSKF_Image} alt="faxada tskf mooca" />
                </div>
                <div className={styles.content_container}>
                    <h2 className={styles.content_title}>Templo Shaolin</h2>
                    <h3 className={styles.content_title}>de Kung Fu</h3>
                    <p className={styles.content_text}>
                        Fundada pelo <a href="#about_master">Mestre Gabriel Pires</a> de Amorim em 1996, a TSKF se estabeleceu como a maior academia de Kung Fu estilo Louva-a-Deus da América Latina. Com unidades em várias regiões de São Paulo, nossa academia oferece um ensino que respeita as individualidades de cada aluno, atendendo tanto aqueles que buscam condicionamento físico quanto os que almejam se tornar campeões.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
