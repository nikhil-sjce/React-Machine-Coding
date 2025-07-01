import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

/* reactchallenges.live */

/* Instruction: 
Implment a catch route for all routes which are not under defined routes scope*/

const Home = () => <h1>Home</h1>;
const Settings = () => <h1>Settings</h1>;
const NotFound = () => <h1>Not Found Error 404</h1>;

export default function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
