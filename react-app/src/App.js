// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import Galery from './Galery'
import About from './About'

import {Loading} from './components/Loading';
import "./components/style.css"
import Contact from './Contact'



const App = () => {
 return (
    <>
       <Routes>
        
          <Route  path="/" element={<Home/>}/>
          <Route path="/galery" element={<Galery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
       </Routes>
    </>
 );
};

export default App;