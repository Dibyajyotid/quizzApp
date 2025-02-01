import React, { useState, useEffect } from "react";
import { fetchQuizData } from "../store/quizStore.js";
import { useNavigate } from "react-router-dom";
import { Rewind, NotebookPen, CircleCheckBig } from "lucide-react";

const Answers = () => {
  const [quizData, setQuizData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadQuizData = async () => {
      const data = await fetchQuizData();
      console.log("Fetched Quiz Data:", data);

      setQuizData(data.questions);
    };

    loadQuizData();
  }, []);

  return (
    <div className="container max-w-5xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6 flex justify-center items-center gap-2 bg-gradient-to-r from-blue-500 to-emerald-400 h-20 rounded-lg">
        <NotebookPen /> Answer Explanations
      </h1>

      {quizData.length > 0 ? (
        quizData.map((question, index) => {
          return (
            <div key={question.id || index} className="mb-6 border-b pb-4">
              <p className="text-lg font-semibold text-blue-900">
                {index + 1}. {question.questionText}{" "}
              </p>

              <p className="mt-2 flex gap-2">
                <CircleCheckBig className="text-emerald-700" />
                <strong className="text-emerald-700">Correct Answer:</strong>
                {question.options?.find((opt) => opt.isCorrect)?.answerText ||
                  "No correct answer"}
              </p>

              <p className="mt-4 text-gray-600">
                {question.detailedSolution || "No solution available"}
              </p>
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}

      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/quiz")}
          className="btn btn-primary text-emerald-700"
        >
          <Rewind /> Retry Quiz
        </button>
      </div>
    </div>
  );
};

export default Answers;
