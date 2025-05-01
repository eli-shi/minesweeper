import './App.css';
// import { Game } from './components/Game';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { Signup } from './components/Singup';

function App() {


  return (
    <div className="App">
      {/* <Game rows={10} columns={10} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
