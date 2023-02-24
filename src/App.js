import React from "react";
import "./App.css";
//1. Import our other components
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import NavHeader from "./components/NavHeader";
import Home from "./pages/Home";
import HelpComponent from "./components/HelpComponent";
//Docs = https://reactrouter.com/en/main/start/overview
//2. Step one add npm i react-router-dom@6.4.4
//https://www.npmjs.com/package/react-router-dom/v/6.4.4
import Login from './components/Login'


//3. Add the import for our router.
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//3. add our create Browser router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavHeader />}>
  
      <Route index element={<Home />} />

      <Route path="about" element={<AboutUs />} />

      <Route path='login' element={<Login />} />

      <Route path="help" element={<HelpComponent />}>
        <Route path="faq" element={<FAQ /> } />
      </Route>
    </Route>
  )
);

class App extends React.Component {
  render() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
}

export default App;
