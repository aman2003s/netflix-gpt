import React from "react";
import Header from "./Header";
import LogInForm from "./LogInForm";

const Body = () => {
  return (
    <div className="bg-black relative h-screen">
      <div className='w-full justify-center flex before:inset-0 before:bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg")] before:w-full before:h-screen before:opacity-50 before:bg-cover before:absolute'>
        <div className="z-10 max-w-6xl justify-items-start w-full">
          <Header />
          <LogInForm />
        </div>
      </div>
    </div>
  );
};

export default Body;
