import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Favorite from '../Favorite/Favorite';
import img_light from './img/yoda.svg';
import img_dark from './img/dark.svg';
import img_neutral from './img/solo.svg';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider.jsx'
import styles from './Header.module.css';


const Header = () => {
    const [icon, setIcon] = useState(img_light);
    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme){
            case THEME_LIGHT: setIcon(img_light); break;
            case THEME_DARK: setIcon(img_dark); break;
            case THEME_NEUTRAL: setIcon(img_neutral); break;
            default: break;
        }
    }, [isTheme])

    return(
        <div className={styles.header__container}>
            <img src={icon} alt="icon" />
            <ul className={styles.header__nav}>
                <Link to='/' className={styles.header__link}>Home</Link>
                <Link to='/people/?page=1' className={styles.header__link} exact='false'>People</Link>
                <Link to='/search' className={styles.header__link}>Search</Link>
                <Link to='/not-found-page' className={styles.header__link}>Not Found</Link>
                <Link to='/fail' className={styles.header__link}>Fail</Link>
            </ul>
            <Favorite />
        </div>
    )
}

export default Header;

