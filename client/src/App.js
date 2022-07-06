import './App.css';
import Navbar from './components/pages/Navbar.js';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from './context/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="Register" element={<Register />} />
              <Route path="Login" element={<Login />} />
              <Route path="Profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
