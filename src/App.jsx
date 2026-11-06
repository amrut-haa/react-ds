import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Movies from './pages/Movies'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
     <Route path='/movies' element={<Movies/>}/>
     
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
