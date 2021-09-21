import PropTypes from 'prop-types';

function Button ({text, ...rest}) {
    return (
        <button style={{backgroundColor: 'yellow'}} {...rest} >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired
};

export default Button;