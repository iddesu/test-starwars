import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from '@hoc/withErrorApi';
import PeopleList from '@components/PeoplePage/PeopleList/PeopleList.jsx';
import { getApiResource, changeHTTP } from '@utils/network';
import { getPeopleId, getPeopleImg, getPeoplePageId } from '@services/getPeopleData';
import { SWAPI_PEOPLE_LIST } from '@consts/root';
import { useQueryParams } from '@hooks/UseQueryParams';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation/PeopleNavigation.jsx';

import styles from './PeoplePage.module.css';


const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page');

    const getResource = async (url) => {
        const res = await getApiResource(url);

        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url);
                const img = getPeopleImg(id);
                return {
                        id,
                        name,
                        img
                }
            })
            setPeople(peopleList);
            setPrevPage(changeHTTP(res.previous));
            setNextPage(changeHTTP(res.next));
            setCounterPage(getPeoplePageId(url));
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
        
    }

    useEffect(() => {
        getResource(SWAPI_PEOPLE_LIST+queryPage);
    }, []);

    return(
        <div className={styles.container}>
            <PeopleNavigation 
                getResource={getResource}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {people && <PeopleList people={people} />}
        </div>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);