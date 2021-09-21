import { useState } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import InputContainer from './containers/InputContainer';
import OutputContainer from './containers/OutputContainer';

function App() {
  const [result, setResult] = useState(null);

  const onProcessCode = async (html) => {
    if (!html) return false;
    axios.post('http://localhost:8000/api/get_repeated_elements/', {html})
      .then(({data}) => {
        setResult(data);
      })
      .catch((err) => console.log(err));
  };
  const onRunAgain = () => setResult(null);

  return (
    <div className="App">
      {result ? <OutputContainer onRunAgain={onRunAgain} results={result} /> : <InputContainer onProcessCode={onProcessCode} />}
    </div>
  );
}

export default App;
