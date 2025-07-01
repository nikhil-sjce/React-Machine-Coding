import * as React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Loading from "./Loading";

const Home = React.lazy(() => import("./Home"));
const Newsletters = React.lazy(() => import("./Newsletter"));
const Dashboard = React.lazy(() => import("./Dashboard"));

export default function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/newsletters">Newsletters</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />

      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newsletters" element={<Newsletters />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
}
