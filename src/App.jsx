import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPageForm from './components/mainpage/MainPage.jsx';
import PDFUploadPage from './components/pdfuploadpage/PDFUploadPage.jsx';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< MainPageForm />} />
        <Route path="/upload" element={< PDFUploadPage />} />
      </Routes>
    </div>
  );
}

export default App;
