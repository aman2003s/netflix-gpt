import React, { useState } from "react";

const LogInForm = () => {
  const [newUser, setNewUser] = useState(false);
  const handleUserType = () => {
    setNewUser(!newUser);
  };

  return (
    <div className="w-full justify-center flex">
      <form className="max-w-md w-full bg-black/65 text-white px-16 py-6 rounded-xl text-left">
        <h2 className="text-4xl my-4">{newUser ? "Sign Up" : "Sign In"}</h2>
        {newUser && (
          <input
            type="Name"
            placeholder="Your name"
            className="w-full border border-white p-2 rounded-sm my-2"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-white p-2 rounded-sm my-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-white p-2 rounded-sm my-2"
        />
        <button className="bg-red-700 w-full py-2 rounded-sm my-4">
          {newUser ? "Sign up" : "Sign In"}
        </button>
        <p className="my-4" onClick={handleUserType}>
          {newUser
            ? "Already have account? Sign in here"
            : "New to Netflix? Sign up now"}
        </p>
      </form>
    </div>
  );
};

export default LogInForm;
