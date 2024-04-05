import React from "react";

const ContentButton = ({ children, isSelected, ...props }) => {
  return (
    <button
      {...props}
      className={
        isSelected
          ? "text-white font-bold text-base bg-golden border-[1px] border-golden px-4 py-2 rounded-sm"
          : "text-white font-bold text-base bg-black border-[1px] border-golden px-4 py-2 rounded-sm"
      }
    >
      {children}
    </button>
  );
};

export default ContentButton;
