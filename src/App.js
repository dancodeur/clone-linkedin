
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Section/Header';
import Home from './Pages/Home';
import Me from './Pages/Me';
import MyNetwork from './Pages/MyNetwork';

function App() {
  return (
    <div>
          <Header/>

         <div className='px-[14rem] bg-[#f3f2ef] max-h-max'>
               <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/Me" element={<Me/>} />
                   <Route path="/MyNetwork" element={<MyNetwork/>} />
                   

               </Routes>
         </div>
    </div>
  );
}

export default App;
