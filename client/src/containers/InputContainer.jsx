import { useRef } from 'react';
import PropTypes from 'prop-types';

import Button from '../components/Button';

function InputContainer ({onProcessCode}) {
    const ref = useRef(null);

    return (
        <div style={{width: 'calc(100%-100px)', margin: 50}}>
            <h2>Find Similar Nodes</h2>
            <p>Paste HTML in textbox below</p>
            <textarea style={{width: '100%'}} rows={20} ref={ref} />
            <Button text='Process Code' onClick={() => onProcessCode(ref.current.value)} />
        </div>
    );
};

InputContainer.propTypes = {
    onProcessCode: PropTypes.func.isRequired
};

export default InputContainer;