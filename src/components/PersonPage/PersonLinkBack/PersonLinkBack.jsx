import { useNavigate } from 'react-router-dom';
import styles from './PersonLinkBack.module.css';

const PersonLinkBack = () => {
    const navigate = useNavigate();
	const handleGoBack = e => {
		e.preventDefault();
		navigate(-1);
	}
    return(
        <>
            <a href="#"
            onClick={handleGoBack}
            className={styles.plb__link}>
                ← Go back       
            </a>
        </>
    )
}

export default PersonLinkBack;