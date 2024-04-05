import React from "react";
import reactImg from "../../public/reactImg.png";


const ContentItem = ({title, image, rank}) => {
  return (
    <div className="flex flex-col gap-y-2 items-center ">
      <p className="text-golden text-xl">{rank}.</p>
      <img className=" w-28 h-28" src={image} alt="" />
      <p className="text-white text-center">{title}</p>
    </div>
  );
};

export default ContentItem;
