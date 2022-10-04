import HomePage from './pages/home';
import LoginPage from './pages/login';
import ContestPage from './pages/contest';
import ProblemPage from './pages/problem';
import SubmissionPage from './pages/submission'
import NotFoundPages from './pages/notfoundpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutPage } from './pages/about';

function App() {
  return (
    <BrowserRouter>
      <Routes>
  
         

            <Route index element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='contest/:contestId' element={<ContestPage />} />
            <Route path='problem/:debugProblemId' element={<ProblemPage />} /> 
            <Route path='submission/:debugSubmissionId' element={<SubmissionPage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='*' element={<NotFoundPages /> } />
          
          

      </Routes>
    </BrowserRouter>
  );
}

export default App;



