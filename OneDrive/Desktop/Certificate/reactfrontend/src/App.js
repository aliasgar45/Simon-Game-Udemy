import './App.css';
import { BrowserRouter as Router, Switch,Routes, Route } from "react-router-dom";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/Home';
import axios from 'axios';


axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function  (config){
 const token = localStorage.getItem('auth_token');
 config.headers.Authorization = token ? `Bearer ${token}` : '';
 return config;
});



function App() {
  return (
    <div>
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        
        
        </Routes>
    </Router>
  </div>
  );
}

export default App;
