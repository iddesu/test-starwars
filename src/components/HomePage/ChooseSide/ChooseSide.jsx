import { PropTypes } from 'prop-types';

import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider.jsx'
import light from './img/light.png';
import dark from './img/dark.png';
import neutral from './img/neutral.png';

import styles from './ChooseSide.module.css';

const ChooseSide = () => {
    const isTheme = useTheme();

    return(
        <div className={styles.theme__container}>
            <button className={styles.theme__btn} onClick={() => isTheme.change(THEME_LIGHT)}>
                <img className={styles.theme__card} src={light} alt="light" />
                <p className={styles.theme__name} >I'm Jedi</p>
                </button>
            <button className={styles.theme__btn} onClick={() => isTheme.change(THEME_DARK)}>
            <img className={styles.theme__card} src={dark} alt="dark" />
                <p className={styles.theme__name} >I'm Sith</p>
                </button>
            <button className={styles.theme__btn} onClick={() => isTheme.change(THEME_NEUTRAL)}>
            <img className={styles.theme__card} src={neutral} alt="neutral" />
                <p className={styles.theme__name} >I'm Nicki Minaj</p>
            </button>
        </div>
    )
}

ChooseSide.propTypes = {

}

export default ChooseSide;