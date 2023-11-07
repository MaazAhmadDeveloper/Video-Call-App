import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import RoomPage from "./RoomPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room/:roomId" element={<RoomPage />} />
    </Routes>
  );
}

export default App;
