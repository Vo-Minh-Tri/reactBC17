import logo from "./logo.svg";
import "./App.css";
import HeaderClass from "./components/HeaderClass";
import HeaderFunc from "./components/HeaderFunc";
import HomeComponent from "./BaiTapLayout/HomeComponent";
import HeaderComponent from "./BaiTapLayout/HeaderComponent";
import NavigationComponent from "./BaiTapLayout/NavigationComponent";
import Databinding from "./Databinding/Databinding";
import HandleEven from "./HandleEvent/HandleEven";

function App() {
  return (
    <div className="App">
    
    {/* <Databinding/> */}
    <HandleEven/>
    
    </div>
  );
}

export default App;
