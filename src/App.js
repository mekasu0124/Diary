import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';

// auth routes
import SignUp from './pages/auth/signup';
import Login from './pages/auth/login';

import NewEntry from './pages/newEntry';


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/auth">
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/new-entry" element={<NewEntry />} />
      </Routes>
    </div>
  );
};
