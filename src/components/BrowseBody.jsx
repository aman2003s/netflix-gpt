import React from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const BrowseBody = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth, () => {
      navigate("/");
      console.log("signed out successfully");
    });
  };
  return (
    <div className="flex justify-between">
      <Header />
      <div className="m-6" onClick={handleSignOut}>
        Sign Out
      </div>
    </div>
  );
};

export default BrowseBody;
