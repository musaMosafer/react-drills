import logo from "./logo.svg";
import Hello from "./Hello";
import "./App.css";

function App() {
  const user = "younes";

  return (
    <div className="App">
      {user ? <h1>Hello, {user}</h1> : <h1>Hello, user</h1>}

      <Hello />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
