import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar shadow-2xl">
      <div className="flex justify-between items-center container mx-auto px-4 h-20 w-4/5">
        <Link to={"/"}>
          <div className="flex">
            <h3 className=" text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-emerald-600">
            
                Quizz App
              
            </h3>
          </div>
        </Link>
        <div className="flex-none">
          <button
            className="btn bg-slate-100 border-2 border-emerald-700 shadow-xl px-20 text-blue-900 text-l font-bold rounded-none"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            About
          </button>
          <dialog id="my_modal_4" className="modal bg-slate-100">
            <div className="modal-box w-11/12 max-w-5xl">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4 text-black">
                This is an Assignment project given by Testline
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn text-emerald-700 ">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
