import PropTypes from 'prop-types';
import styles from './PersonInfo.module.css';

const PersonInfo = ({personInfo}) => {
    return(
        <>
            {personInfo && (
            <ul className={styles.person__list}>
                {personInfo.map(({title, data}) => (
                    data && (
                        <li className={styles.person__item} key = {title}>
                            <span className={styles.item__title}>{title}</span>
                            <span className={styles.item__desc}>{data}</span>
                        </li>
                    )
                ))}
            </ul>
            )}
        </>
    )
}

PersonInfo.propTypes = {
    personInfo: PropTypes.array
}

export default PersonInfo;