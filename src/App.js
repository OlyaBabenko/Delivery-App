import { Route, BrowserRouter, Routes} from "react-router-dom"
import PageShop from './Component/PageShop/PageShop.jsx';
import PageCart from './Component/PageCart/PageCart.jsx';
import Header from "./Component/Header/Header.jsx";
import Footer from "./Component/Footer/Footer.jsx";

import './App.css';


function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div style={{height: "100px"}}></div>
        <Routes>
          <Route path="/" element={<PageShop/>}/>
          <Route path="/cart" element={<PageCart/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;
