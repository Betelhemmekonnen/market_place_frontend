import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Slider from 'react-slick';
import { Link } from 'react-router-dom'; // Import Link for navigation
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
