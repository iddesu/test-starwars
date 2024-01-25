import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UIButton from '@UI/UIButton/UIButton.jsx';
import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({
    getResource,
    prevPage,
    nextPage,
    counterPage
}) => {
    const handleChangeNext = () => getResource(nextPage);
    const handleChangePrev = () => getResource(prevPage);

    return(
        <div className={styles.pn__group}>
            <h2 className={styles.people__title}>Characters</h2>
            <Link to={`/people/?page=${counterPage-1}`}>
                <UIButton 
                    text="Previous"
                    onClick={handleChangePrev}
                    disabled={!prevPage}
                />
            </Link>
            <Link to={`/people/?page=${Number(counterPage)+1}`}>
            <UIButton 
                    text="Next"
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                />
            </Link>
        </div>
    )
}

PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number,
}

export default PeopleNavigation;