import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPageForm from './components/mainpage/MainPage.jsx';
import PDFUploadPage from './components/pdfuploadpage/PDFUploadPage.jsx';
import ProblemListPage from './components/problemlistpage/ProblemListPage.jsx';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< MainPageForm />} />
        <Route path="/upload" element={< PDFUploadPage />} />
        <Route path="/problem" element={< ProblemListPage />} />
      </Routes>
    </div>
  );
}

export default App;
