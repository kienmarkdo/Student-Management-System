import "./App.css";
import Appbar from "./components/Appbar";
import Student from "./components/Student";

function App() {
  return (
    <div className="App">
      <Appbar />
      <div style={{ marginTop: "50px" }} />
      <Student />
    </div>
  );
}

export default App;
