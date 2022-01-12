import { Link, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import BloggPage from './pages/BloggPage';
import Homepage from './pages/Homepage';
import Notfoundpage from './pages/Notfoundpage';


function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>
     
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/posts' element={<BloggPage />} />
        <Route path='*' element={<Notfoundpage />} />
      </Routes>

    </>
  );
}

export default App;
