import React from 'react';
import "./App.css";
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Movies from './Pages/Movies';
import Series from './Pages/Series';
import UserProfile from './Pages/UserProfile';
import Dashboard from './Pages/Dashboard';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes as Switch, Route,} from "react-router-dom";


function App() {
  return (
    <div className="app">
        <Router>
      <AuthProvider>
        <Switch>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/series" element={<Series />} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="login" element={<Login/>} />
        <Route path="profile" element={<UserProfile/>} />
        </Switch>
      </AuthProvider>
      </Router>
    </div>
  );
}
 
export default App;
