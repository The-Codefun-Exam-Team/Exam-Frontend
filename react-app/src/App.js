import HomePage from './pages/home';
import LoginPage from './pages/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;



