import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Metadata = () => {
  const [quizMeta, setQuizMeta] = useState(null);

  useEffect(() => {
    axios
      .get("/api")
      .then((response) => setQuizMeta(response.data))
      .catch((error) => console.error("Failed to load Data: ", error));
  }, []);

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src="IME-Blog-Headers-8.jpg" alt="Quiz" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {quizMeta ? quizMeta.title : "Loading..."}
        </h2>
        <p>
          <span className="font-bold text-base">Topic:</span>{" "}
          {quizMeta?.topic || "loading..."}
        </p>
        <p>
          <span className="font-bold text-base">Duration:</span>{" "}
          <span className="text-base">
            {quizMeta?.duration || "loading..."} minutes
          </span>
        </p>
        <p>
          <span className="font-bold text-base">Total Questions:</span>{" "}
          {quizMeta?.questions_count || "loading..."}
        </p>
        <div className="card-actions justify-end">
        <Link to={"/quiz"}>
          <button className="btn btn-primary border-emerald-700 text-emerald-700">
            Start Quiz
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Metadata;
