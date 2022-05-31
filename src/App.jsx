import Intro from "./components/intro/intro";
import About from "./components/about/About";
import ProductList from "./components/productList/productList";
import Contacts from "./components/contacts/contacts";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";


const App = () => {
  const theme =useContext(ThemeContext)
  const darkMode=theme.state.darkMode
  return (

    <div style={{ backgroundColor: darkMode?  'rgb(30, 30, 30)' : 'bisque' , color: darkMode && "white"  }}>
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contacts/>
    </div>
  );
  
};

export default App;