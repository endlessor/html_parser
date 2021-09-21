import PropTypes from 'prop-types';

import Result from '../components/Result';
import Button from '../components/Button';

function OutputContainer ({onRunAgain, results}) {
    return (
        <div style={{width: '100%', padding: 50, boxSizing: 'border-box'}}>
            <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between'}}>
                <h2>Results</h2>
                <Button text='Run again' onClick={onRunAgain} />
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 10}}>
                {results.map((item, index) => (<Result key={index} {...item} />))}
            </div>
        </div>
    );
};

OutputContainer.propTypes = {
    onRunAgain: PropTypes.func.isRequired,
    results: PropTypes.array.isRequired
};

export default OutputContainer;