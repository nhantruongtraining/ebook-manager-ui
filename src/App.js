import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './components/header/Header';
import FooterComponent from './components/footer/Footer';
import EbookList from './components/EbookList';
import AddEbook from './components/AddEbook';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <HeaderComponent />
        <div>
          <Routes>
            <Route exact path="/" element={<EbookList />} />
            <Route exact path="/add" element={<AddEbook />} />
            <Route exact path="/ebooks/edit/:id" element={<AddEbook />} />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
