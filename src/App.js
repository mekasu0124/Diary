import { Routes, Route } from 'react-router-dom';

import { GlobalStyles } from './styles/globalStyles';
import Home from './pages/home';


export default function App() {
  return (
    <div className="App">
      <GlobalStyles />
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
