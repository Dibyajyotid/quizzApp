import React, { useState, useEffect } from "react";
import { fetchQuizData } from "../store/quizStore.js";
import { Link } from "react-router-dom";
import { Timer, ServerCrash } from "lucide-react";

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    const loadQuizData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await fetchQuizData();
        console.log("Formatted Quiz Data:", data);

        if (!data || !data.questions || data.questions.length === 0) {
          throw new Error("Invalid quiz data received");
        }

        setQuizData(data.questions);
      } catch (err) {
        console.error("Error loading quiz data:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadQuizData();
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion(0); // Auto-skip to the next question with 0 points
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer
  }, [timeLeft]);

  const handleAnswerClick = (isCorrect) => {
    setScore((prev) => prev + (isCorrect ? 4 : -1));
    handleNextQuestion();
  };

  const handleNextQuestion = (points = null) => {
    if (points !== null) {
      setScore((prev) => prev + points); // Assign score if timer hits 0
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(15); // Reset timer for the next question
    } else {
      setShowScore(true);
    }
  };

  if (isLoading) return <div className="text-center text-lg">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500 flex justify-center items-center gap-2">
        <p>
          <ServerCrash /> Error: {error}
        </p>
        <button
          className="btn btn-primary mt-4"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );

  const currentQuestionData = quizData[currentQuestion] || {};
  const options = currentQuestionData.options || [];

  return (
    <div className="quiz bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto my-24">
      {showScore ? (
        <div className="text-center text-xl font-semibold">
          You scored <span className="text-green-500">{score}</span> out of{" "}
          <span className="text-blue-500">{quizData.length * 4}</span>
          <br />
          <Link to={"/answers"}>
            <div className="btn bg-green-400 mt-5 border-none shadow-md hover:-translate-y-1">
              Show Answers
            </div>
          </Link>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <p className="text-lg font-bold">
              Question {currentQuestion + 1} / {quizData.length}
            </p>
            <h2 className="text-2xl mt-2 font-bold text-blue-900">
              {currentQuestionData.questionText}
            </h2>
          </div>

          {/* Live Timer */}
          <div className="text-center text-lg font-semibold mb-4 flex gap-2">
            <Timer /> Time Left:{" "}
            <span className={timeLeft <= 5 ? "text-red-500" : "text-blue-500"}>
              {timeLeft}s
            </span>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {options.length > 0 ? (
              options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option.isCorrect)}
                  className="w-full bg-gray-100 hover:bg-emerald-500 hover:text-white transition-all p-3 rounded-lg text-left"
                >
                  {option.answerText}
                </button>
              ))
            ) : (
              <p className="text-red-500">⚠ No answer options available</p>
            )}
          </div>

          {/* Displaying Live Scores */}
          <div className="mt-6 text-lg font-semibold text-center">
            Live Score: <span className="text-green-500">{score}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
