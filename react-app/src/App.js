import HomePage from './pages/home';
import LoginPage from './pages/login';
import ContestPage from './pages/contest';
import ProblemPage from './pages/problem';
import SubmissionPage from './pages/submission'
import RankingPage from './pages/ranking';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutPage } from './pages/about';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='contest/:contestId' element={<ContestPage />} />
          <Route path='problem/:debugProblemId' element={<ProblemPage />} /> 
          <Route path='submission/:debugSubmissionId' element={<SubmissionPage />} />
          <Route path='ranking/all' element={<RankingPage />} />
          <Route path='about' element={<AboutPage />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;



