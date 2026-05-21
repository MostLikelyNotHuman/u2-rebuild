import './App.css'
import Header from './components/basic/Header';
import Footer from './components/basic/Footer';
import { Route, Routes } from 'react-router';
import HomePage from './components/HomePage';
import HelpPage from './components/HelpPage';

function App() {
  
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
      <Footer></Footer>
    </>  
  );
    
}

export default App;