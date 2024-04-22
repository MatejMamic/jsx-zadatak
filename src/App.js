import logo from "./logo.svg";
import "./App.css";

function App() {
  const ime = "Matej";
  const prezime = "Mamic";

  return (
    <div className="App">
      <p>Ovo je moj prvi jsx zadatak</p>
      <p>Moje ime je:{ime}</p>
      <p>
        Moje ime i prezime je {ime} {prezime}
      </p>
    </div>
  );
}

export default App;
