import logo from "./logo.svg";
import "./App.css";
import ListMovie from "./Components/ListMovie";
import AddMovie from "./Components/AddMovie";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <AppRoutes/>
      {/* <NavBar /> */}
    </div>
  );
}

export default App;
