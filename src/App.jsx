import { useContext } from "react";
import "./App.css";
import Routers from "./components/pages/Routers";
import ThemeContext from "./context/ThemeContext";

function App() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme}>
       <Routers/>

    </div>
   
  );
}

export default App;
