import { useParams } from 'react-router';
import React, { useEffect, useState, Suspense } from 'react';
import { PropTypes } from 'prop-types';
import { useSelector, UseSelector } from 'react-redux';

import { getApiResource } from '@utils/network';
import { SWAPI_PERSON } from '@consts/root';
import { withErrorApi } from '@hoc/withErrorApi';
import { getPeopleImg } from '@services/getPeopleData';
import PersonInfo from '@components/PersonPage/PersonInfo/PersonInfo';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack/PersonLinkBack';
import UILoading from '@UI/UILoading/UILoading';
import PersonToggle from '@components/PersonPage/PersonToggle/PersonToggle';

import styles from './PersonPage.module.css';


const PersonFilms = React.lazy(() => import ('@components/PersonPage/PersonFilms/PersonFilms'))

const PersonPage = ({ setErrorApi }) => {
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personFilm, setPersonFilms] = useState(null);
    const [personFav, setPersonFav] = useState(false);

    const storeData = useSelector(state => state.favoriteReducer);

    const { id } = useParams();
    useEffect(() => {
        (async () => {
            const res = await getApiResource(SWAPI_PERSON+'/'+id);

            storeData[id] ? setPersonFav(true) : setPersonFav(false);

            if (res) {
                setPersonInfo([
                    {title: 'Height', data: res.height},
                    {title: 'Mass', data: res.mass},
                    {title: 'Hair color', data: res.hair_color},
                    {title: 'Skin color', data: res.skin_color},
                    {title: 'Eye color', data: res.eye_color},
                    {title: 'Birth year', data: res.birth_year},
                    {title: 'Gender', data: res.gender},
                ]);
                setPersonName(res.name);
                res.films.length && setPersonFilms(res.films);

                setErrorApi(false);
            } else {
                setErrorApi (true);
            }
        })();
    }, []);

    
    
    return (
    <>
        <div className={styles.person__container}>
            <PersonLinkBack />
            <div className={styles.person__heading}>
                <h1 className={styles.person__name}>{personName}</h1>
                <PersonToggle 
                name = {personName}
                id = {id}
                personFav = {personFav}
                setPersonFav = {setPersonFav}
                />
            </div>
            <div className={styles.person__desc}>
                <img className={styles.person__img} src={getPeopleImg(id)} alt="Person picture" />
                {personInfo && <PersonInfo personInfo = {personInfo}/>}
                {personFilm && (
                    <Suspense fallback={<UILoading />}>
                        <PersonFilms personFilm = {personFilm}/>
                    </Suspense>
                )}
            </div>
            
        </div>
        
    </>

    );
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage);
