import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './Favorite.module.css';

const Favorite = () => {
    const [count, setCount] = useState();
    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        const length = Object.keys(storeData).length;
        length.toString().length > 2 ? setCount('...') : setCount(length);
    });

    return(
        <div className={styles.favorite__container}>
        <Link to='/favorites' className={styles.favorite__link}>
            Favorites
        </Link>
        <span className={styles.favorite__counter}>{count}</span>
        </div>
    )
}

export default Favorite;