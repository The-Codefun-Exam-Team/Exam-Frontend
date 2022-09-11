import HomePage from './pages/home';
import LoginPage from './pages/login';
import ContestPage from './pages/contest';
import ProblemPage from './pages/problem';
import SubmissionPage from './pages/submission'
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;



