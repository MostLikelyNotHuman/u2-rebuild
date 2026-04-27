import './App.css'
import Header from './components/basic/Header';
import Footer from './components/basic/Footer';
import { Route, Routes } from 'react-router';
import HomePage from './components/HomePage';

function App() {
  
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer></Footer>
    </>  
  );
    
}

export default App;