import { useCallback, useState } from 'react';
import { debounce } from 'lodash';

import { getApiResource } from '@utils/network';
import { SWAPI_SEARCH_LIST } from '@consts/root.js';
import { withErrorApi } from '@hoc/withErrorApi';
import { getPeopleId, getPeopleImg } from '@services/getPeopleData';
import PeopleList from '@components/PeoplePage/PeopleList/PeopleList.jsx';

import styles from './SearchPage.module.css';

const SearchPage = ({setErrorApi}) => {
    const [people, setPeople] = useState([]);
    const [inputSearchValue, setInputSearchValue] = useState('');

    const getResponse = async param => {
        const res = await getApiResource(SWAPI_SEARCH_LIST+param);
        if (res){
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url);
                const img = getPeopleImg(id);
                return {
                    id,
                    name,
                    img,
                }
            });
            setPeople(peopleList);
            setErrorApi(false);
        } else{
            setErrorApi(true);
        }
    }

    const debounceGetResponce = useCallback(
        debounce(value => getResponse(value), 300), []
    );


    const handleInputChange = (event) => {
        const value=event.target.value;
        setInputSearchValue(value);
        debounceGetResponce(value);
    }

    return(
        <div className={styles.search__container}>
            <div className={styles.search__heading}>
                <h1 className={styles.search__title}>Search</h1>
                <input 
                type="text"
                value={inputSearchValue}
                onChange={handleInputChange}
                placeholder="Input character's name"
                className={styles.search__input}
                />
            </div>
            
            <PeopleList  people={people}/>
        </div>
    )
}

export default withErrorApi(SearchPage);