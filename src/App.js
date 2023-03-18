import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { HomePage, Auth, Recommendations } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;