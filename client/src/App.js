import './App.css';
import Navbar from './components/Navbar.js';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div className="App">
      <div className="container border-start border-end">
        <Navbar />
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  );
}

export default App;
