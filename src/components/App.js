import React from 'react';
import "./App.css";
import SignUp from './SignUp';
import Login from './Login';
import UserProfile from './UserProfile';
import Dashboard from './Dashboard';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes as Switch, Route,} from "react-router-dom";


function App() {
  return (
    <div className="app">
        <Router>
      <AuthProvider>
        <Switch>
        <Route exact path="/" element={<Dashboard />} />
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
