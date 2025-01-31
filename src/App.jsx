import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Quiz from "./pages/QuizPage";
import Answers from "./pages/AnswerPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/answers" element={<Answers />} />
      </Routes>
    </div>
  );
};

export default App;
