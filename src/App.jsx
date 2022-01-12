import { Link, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import BloggPage from './pages/BloggPage';
import Homepage from './pages/Homepage';
import Notfoundpage from './pages/Notfoundpage';


function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Homepage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/posts' element={<BloggPage />} />
          <Route path='*' element={<Notfoundpage />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
