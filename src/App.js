import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.js'
import Movies from './components/Movies.js'

function App() {
  return (

    <div className="App">
      <Nav />
      <Routes>
      <Route path="/" element={<Movies/>} />
      </Routes>
    </div>
  );
}

export default App;
