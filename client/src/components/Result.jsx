import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';

function Result({html, tag, count}) {
    const parser = new Parser();

    return (
        <div style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: 5, width: 300, height: 300, boxShadow: '2px 2px 3px gray', border: '1px solid gray'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: 150, backgroundColor: 'gray', overflow: 'auto'}}>
                {parser.parse(html)}
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '10px'}}>
                <b>Name</b>
                <span>{tag}</span>
                <br />
                <b>Occurrences</b>
                <span>{count}</span>
            </div>
        </div>
    );
};

Result.propTypes = {
    html: PropTypes.node.isRequired,
    tag: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
};

export default Result;