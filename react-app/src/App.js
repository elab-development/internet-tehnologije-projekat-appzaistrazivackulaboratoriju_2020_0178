// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import Galery from './Galery'
import {Loading} from './components/Loading';
import "./components/style.css"



const App = () => {
 return (
    <>
       <Routes>
        
          <Route  path="/" element={<Home/>}/>
          <Route path="/galery" element={<Galery />} />
       </Routes>
    </>
 );
};

export default App;