// src/App.tsx

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CoffeeList from './components/CoffeeList';
import NavBar from './components/NavBar';
function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/CoffeeList" element={ <CoffeeList /> } />
    </Routes>
    </>
  )
}

export default App;
