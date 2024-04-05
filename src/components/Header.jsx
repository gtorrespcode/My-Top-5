import React from "react";

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-6 pt-12">
      <h1 className="text-golden font-display text-6xl">My Top 5</h1>
      <p className=" text-white w-[890px] text-center text-3xl">
        Here you will find my top 5 lists. My favorite choices from each
        category that are part of my story.
      </p>
    </div>
  );
};

export default Header;
