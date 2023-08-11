import React from "react";

import "./asset/css/custom.css";

import CreatePage from "./pages/CreatePage";
import ReadPage from "./pages/ReadPage";
import UpdatePage from "./pages/UpdatePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ReadPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/update/:id" element={<UpdatePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
