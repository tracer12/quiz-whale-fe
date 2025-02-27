import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPageForm from './components/mainpage/MainPage.jsx';
import FileUploadPage from './components/pdfuploadpage/FileUploadPage.jsx';
import ProblemListPage from './components/problemlistpage/ProblemListPage.jsx';
import SignupForm from './components/signup/Signup.jsx';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< MainPageForm />} />
        <Route path="/upload" element={< FileUploadPage />} />
        <Route path="/problem" element={< ProblemListPage />} />
        <Route path="/signup" element={< SignupForm />} />
      </Routes>
    </div >
  );
}

export default App;
