import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { makeConcurrentRequest } from '@utils/network';
import { changeHTTP } from '@utils/network';
import styles from './PersonFilms.module.css';

const PersonFilms = ({personFilm}) => {
    const [filmsName, setFilmsName] = useState([]);
    useEffect(() => {
        (async () => {
            const filmsHTTPS = personFilm.map(url => changeHTTP(url));
            const response = await makeConcurrentRequest(filmsHTTPS);
            setFilmsName(response);
        })();
    }, []);
    return(
        <div>
            <ul className={styles.films__list}>
                {filmsName
                .sort((a, b) => a.episode_id - b.episode_id)
                .map(({title, episode_id}) => 
                    <li className={styles.films__item} key = {episode_id}>
                        <span className={styles.films__id}>Episode {episode_id}</span>
                        <span className={styles.films__title}>{title}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}

PersonFilms.propTypes = {
    personFilms: PropTypes.array
}

export default PersonFilms;