import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { setFavorite, removeFavorite } from '@store/actions';
import { getPeopleImg } from '@services/getPeopleData';
import icon from './star.svg';
import icon_pressed from './star1.svg';

import styles from './PersonToggle.module.css';

const PersonToggle = ({name, id, personFav, setPersonFav}) => {
    const dispatch = useDispatch();

    const dispatchFavPeople = () => {
        if (personFav) {
            dispatch(removeFavorite(id));
            setPersonFav (false);
        } else {
            dispatch(setFavorite({
            [id]: {
                name: name,
                img: getPeopleImg(id)
            }
            }));
            setPersonFav(true);
        }
    }

    return(
        <>
            <button className={styles.toggle__btn} onClick={dispatchFavPeople}>
                <img src={personFav ? icon_pressed : icon} alt="" />
                
            </button>
        </>
    )
}

PersonToggle.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    personFav: PropTypes.bool,
    setPersonFav: PropTypes.func
}

export default PersonToggle;