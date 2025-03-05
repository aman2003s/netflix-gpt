import React, { useRef, useState } from "react";
import validateData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const LogInForm = () => {
  const [newUser, setNewUser] = useState(false);
  const [errMessage, setErrMessage] = useState(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = validateData(
      emailRef.current.value,
      passwordRef.current.value,
      nameRef.current ? nameRef.current.value : null
    );
    setErrMessage(message);
    if (message) return;
    if (newUser) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, { displayName: nameRef.current.value }).then(
            () => {
              const { uid, displayName, email } = auth.currentUser;
              dispatch(addUser({ uid, displayName, email }));
            }
          );
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " : " + errMessage);
        });
    }
  };

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
            ref={nameRef}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-white p-2 rounded-sm my-2"
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-white p-2 rounded-sm my-2"
          ref={passwordRef}
        />
        {errMessage && <p className="text-red-700 text-lg"> {errMessage}</p>}
        <button
          className="bg-red-700 w-full py-2 rounded-sm my-4"
          onClick={handleSubmit}
        >
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
