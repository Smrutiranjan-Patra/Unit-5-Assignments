import "./App.css";

function App() {
  const OS = ["Andorid", "BlackBarry", "iphone", "Window Phone"];
  const brand = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div className="App">
      <h1 className="heading">Mobile Operating System</h1>
      <ul>
        {OS.map((e) => (
          <Lists op={e} />
        ))}
      </ul>
      ;<h1 className="heading">Mobile Manufatures</h1>
      <ul>
        {brand.map((e) => (
          <Lists op={e} />
        ))}
      </ul>
    </div>
  );
}
function Lists({ op }) {
  return <li> {op} </li>;
}

export default App;
