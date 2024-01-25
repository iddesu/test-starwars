import styles from './HomePage.module.css';

import ChooseSide from "@components/HomePage/ChooseSide/ChooseSide";

const HomePage = () => {
    return(
        <div className={styles.home__container}>
            <h1 className={styles.home__heading}>Choose your side</h1>
            <ChooseSide />
        </div>
    )
}

export default HomePage;