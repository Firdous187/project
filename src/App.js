import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from  'react-router-dom' ;
import Mainpage from './components/Mainpage';
import Dropdown1 from './components/Dropdown1';
function App() {
  return (
    <div>
     

      <div>
        
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage/>}></Route>
          
          <Route></Route>
          <Route></Route>
        </Routes>
        </BrowserRouter>
      </div>
    
    </div>
  );
}

export default App;
