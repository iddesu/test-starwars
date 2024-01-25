import UIVideo from '@UI/UIVideo/UIVideo';
import video from './han-solo.mp4'

import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return(
        <div className={styles.Error__container}>
            <h3 className={styles.text}>
                The dark side of the force has won.<br />
                We can not display data.<br />
                Come back when we fix everything.
            </h3>
            <UIVideo src={video} playbackRate='1' classes={styles.video}/>
        </div>
    )
}

export default ErrorMessage;