import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Film from './pages/Film';
import FilmDetail from './pages/FilmDetail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Film' element={<Film />} />
          <Route path='/Film/:id' element={<FilmDetail />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
