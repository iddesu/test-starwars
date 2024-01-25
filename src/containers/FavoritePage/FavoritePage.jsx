import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import PeopleList from '@components/PeoplePage/PeopleList/PeopleList.jsx';
import { withErrorApi } from '@hoc/withErrorApi';

import styles from './FavoritePage.module.css';

const FavoritePage = ({setErrorApi}) => {
    const [people, setPeople] = useState([]);
    const storeData = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        const arr = Object.entries(storeData);
        if (arr.length) { 
            const res = arr.map(item =>{
                return {
                    id:item[0],
                    ...item[1]
                }
            })
            setPeople(res);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }, []);
    return(
        <div className={styles.favorite__container}>
            <h1 className={styles.favorite__heading}>Favorite Characters</h1>
            <PeopleList 
            people={people}
            />
        </div>
    )
}

export default withErrorApi(FavoritePage);