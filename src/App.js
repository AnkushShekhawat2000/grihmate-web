
import './App.css';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import Rent from './pages/Rent';


function App() {
  return (
    <BrowserRouter>
     <div className="App">
       {/* <Home/> */}
       <Rent/>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
