import logo from "./logo.svg";
import Hello from "./Hello";
import "./App.css";

function App() {
  const users = [
    {
      firstname: "younes",
      lastname: "ghorbany",
    },
  ];

  const element = <h1>{users[0].firstname}</h1>;
  return (
    <div className="App">
      {element}
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
