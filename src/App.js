import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";

const App = () => {
  return (
    <Router>
      <main className="p-3">
        <Route path="/" component={LoginScreen} exact />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/dashboard" component={DashboardScreen} exact />
        <Redirect to="/" />
      </main>
    </Router>
  );
};

export default App;
