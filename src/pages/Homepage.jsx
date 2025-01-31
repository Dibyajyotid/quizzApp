import React from "react";
import Metadata from "../components/Metadata";

const Homepage = () => {
  return (
    <div className="hero w-3/4 container items-center m-auto h-lvw mt-24 bg-white rounded-xl shadow-[0_35px_35px_rgba(0,0,0,0.25)] px-0 py-32 mb-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-emerald-600">Quizz Test</h1>
          <p className="py-6">
            Test Your Knowledge on this particular Topic and get to know how
            much you are able to answer
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl hover:-translate-y-2 transition-all">
          <Metadata />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
