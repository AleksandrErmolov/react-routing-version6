import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { AuthProvider } from './hoc/AuthProvider';
import RequireAuth from './hoc/RequireAuth';
import AboutPage from './pages/AboutPage';
import BloggPage from './pages/BloggPage';
import CreatePost from './pages/CreatePost';
import EditPage from './pages/EditPage';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import Notfoundpage from './pages/Notfoundpage';
import SinglePage from './pages/SinglePage';


function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Homepage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/about-us' element={<Navigate to='/about' replace />} />
            <Route path='/posts' element={<BloggPage />} />
            <Route path='/posts/:id' element={<SinglePage />} />
            <Route path='/posts/:id/edit' element={<EditPage />} />
            <Route path='/posts/new' element={

              <RequireAuth>
                <CreatePost />
              </RequireAuth>

            } />
            <Route path='/login' element={<LoginPage />} />
            <Route path='*' element={<Notfoundpage />} />
          </Route>
        </Routes>
      </AuthProvider>

    </>
  );
}

export default App;
