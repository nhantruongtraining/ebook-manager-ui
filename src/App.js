import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './components/header/Header';
import NotFound from './NotFound';
import EbookList from './components/EbookList';
import AddEbook from './components/AddEbook';
// import SearchResults from './components/SearchResults';
import './App.scss';

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
            {/* <Route exact path="/search" element={<SearchResults />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        {/* <FooterComponent /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
