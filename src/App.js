import clown from './clown.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          You Are A Clown
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <img src={clown} className="App-logo" alt="logo" />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
