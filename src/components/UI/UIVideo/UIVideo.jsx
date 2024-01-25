import cn from 'classnames';

import styles from './UIVideo.module.css';

const UIVideo = ({src, classes, playbackRate}) => {
    return(
        <video 
        loop
        autoPlay
        muted
        className={cn(styles.error__video, classes)}
        playbackRate = {playbackRate}>
            <source src={src}/>
        </video>
    )
}

export default UIVideo;