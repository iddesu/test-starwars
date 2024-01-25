import PropTypes from 'prop-types';
import styles from './UIInput.module.css';

const UIInput = (
    value,
    handleInputChange,
    placeholder,
    classes
) => {
    return(
        <div>
            <input 
            type="text" 
            value={value}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={placeholder}
            className={styles.input}
            />
        </div>
    )
}

UIInput.propTypes = {
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    placeholder: PropTypes.string,
    classes: PropTypes.string
}

export default UIInput;