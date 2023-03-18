import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, ToastContainer } from './components';
import { HomePage, Auth, ProfilePage, Recommendations } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path='/profile/:username' element={<ProfilePage />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;