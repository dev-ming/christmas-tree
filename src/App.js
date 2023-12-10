import logo from "./logo.svg";
import christmasTree from "./christmas_tree.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ fontWeight: "bold" }}>Merry Christmas!</p>
        <img src={christmasTree} style={{ height: "500px" }} />
      </header>
    </div>
  );
}

export default App;
