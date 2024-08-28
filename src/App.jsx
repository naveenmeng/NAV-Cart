import NavBar from "./NavBar";
import Home from "./Home";
import { Outlet } from "react-router-dom";
import ThemeContext from "./utility/ThemeContext";
function App() {
  return (
    <>
      <ThemeContext>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </ThemeContext>
    </>
  );
}

export default App;
