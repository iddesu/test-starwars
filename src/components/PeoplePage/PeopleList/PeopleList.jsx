import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './PeopleList.module.css';

const PeopleList = ({people}) => {
    return(
            <ul className={styles.list__container}>
            {people.map(({id, name, img}) => 
                <li className={styles.list__item} key={id}>
                    <Link to={`/people/${id}`}>
                        <img className={styles.list__img} src={img} alt="картинка персонажа"/>
                        <b className={styles.list__title}>{name}</b>
                    </Link>
                </li>
            )}
            </ul>
    )
}

PeopleList.propTypes = {
    people: PropTypes.array
}

export default PeopleList;