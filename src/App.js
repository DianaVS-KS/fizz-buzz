import './App.css';
import Number from './components/Number';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <div className="App"> 
        <div className="title">
          <h1>Fizz Buzz Exercise</h1>
          <h2>By Diana Villalvazo</h2>
        </div>       
          <Number/>
      </div>
    </Fragment>
  );
}

export default App;
