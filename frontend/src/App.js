import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import RecordList from "./components/RecordList";
import Edit from "./components/Edit";
import Create from "./components/Create";
import Login from "./components/Login";

const App = () => {
  return (
    <Router> {/* Wrap your entire application with <Router> */}
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<RecordList />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
