import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from '../src/components/Home/Home';
import About from '../src/components/About/About';
import NotFound from '../src/components/NotFound/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="about" element={ <About />} />
        </Route>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
