import Index from './pages/Index';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Berita from './pages/Berita';
import Add from './pages/Add';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/news/:id' element={<Berita/>} />
        <Route path='/add' element={ <Add /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
