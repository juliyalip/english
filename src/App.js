import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Container from './component/Container/Container.jsx';
import AppBar from './component/header/AppBar/AppBar.jsx';

import './App.css';

function App() {
  return (
    <>
      <AppBar />
      <Container>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
