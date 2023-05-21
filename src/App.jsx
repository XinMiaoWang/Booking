import "./app.scss"
import Home from "./pages/Home"
import HotelsList from './pages/HotelsList'
import Hotel from './pages/Hotel'
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotelsList" element={<HotelsList/>} />
        <Route path="/hotels/:id" element={<Hotel/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
