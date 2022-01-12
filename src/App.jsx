import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import BloggPage from './pages/BloggPage';
import CreatePost from './pages/CreatePost';
import EditPage from './pages/EditPage';
import Homepage from './pages/Homepage';
import Notfoundpage from './pages/Notfoundpage';
import SinglePage from './pages/SinglePage';


function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Homepage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/posts' element={<BloggPage />} />
          <Route path='/posts/:id' element={<SinglePage />} />
          <Route path='/posts/:id/edit' element={<EditPage />} />
          <Route path='/posts/new' element={<CreatePost />} />
          <Route path='*' element={<Notfoundpage />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
