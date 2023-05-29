import {createBrowserRouter, Route, BrowserRouter, Routes} from "react-router-dom"
import PageShop from './Component/PageShop/PageShop.jsx';
import PageCart from './Component/PageCart/PageCart.jsx';
import './App.css';
import Header from "./Component/Header/Header.jsx";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <PageShop/>
  //   },
  //   {
  //     path: "/cart",
  //     element: <PageCart/>
  //   }
  // ])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<PageShop/>}/>
          <Route path="/cart" element={<PageCart/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  )

  // return (
  //   <div className="App">
  //     <Header/>
  //     <RouterProvider router={router}/>
  //     {/* <PageShop/> */}
  //   </div>
  // );
}

export default App;
