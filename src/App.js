import { Routes, Route } from 'react-router-dom';

import { GlobalStyles } from './styles/globalStyles';
import Home from './pages/home';
import NewEntry from './pages/newEntry';


export default function App() {
  return (
    <div className="App">
      <GlobalStyles />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-entry" element={<NewEntry />} />
      </Routes>
    </div>
  );
};
