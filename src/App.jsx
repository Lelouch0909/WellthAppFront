import './App.css';
import { Route, Routes } from 'react-router-dom';
import Authentication from './Routes/Authentication/Authentication';
import HomePage from './Routes/HomePage/HomePage';

function App() {
  return (
    <div className="App  ">
      <Routes>
        <Route path='/*' element={true?<Authentication/>:<HomePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
