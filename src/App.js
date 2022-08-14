import './App.css';



function App() {

  const isDone = true;
  const strikeThrough = { textDecoration : "line-through"}
  return (
    <div className="App">

      <p style={ isDone === true ? strikeThrough : null}>Buy Milk</p>
    </div>
  );
}

export default App;
