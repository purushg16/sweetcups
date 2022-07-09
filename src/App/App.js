import './App.css';
import HomePage from '../components/Home/HomePage';
import "swiper/css/bundle";
import {  Routes, Route} from "react-router-dom";
import Single from '../components/Home/SingleCake/Single';


function App() {
  
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cakes/:cakename"  element={<Single/>} />
      </Routes>

    </div>
  );
}

export default App;
