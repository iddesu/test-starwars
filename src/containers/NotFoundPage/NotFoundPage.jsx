import { useLocation } from 'react-router';
import img from './img.png'
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
    let location = useLocation();

    return(
        <div className={styles.nfp__container}>
            <img className={styles.nfp__image} src={img} alt="Not Found" />
            <h3 className={styles.nfp__h3}>No match for {location.pathname}</h3>
        </div>
    )
}

export default NotFoundPage;