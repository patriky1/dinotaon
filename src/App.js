import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarContainer from "./components/Navbar";
import Slider from "./slider";
import Home from "./components/Home";

function App() {
  return (
    <>
      <NavbarContainer />
      <Home/>
      <Slider/>
    </>
  );
}

export default App;
