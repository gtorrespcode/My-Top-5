import React from "react";

const CategoryItem = ({title, info, image, imageInfo}) => {
  return (
    <div className=" text-white w-[233px] flex flex-col gap-y-2 items-center">
      <img className=" w-24 h-24" src={image} alt={imageInfo} />
      <h3 className="font-bold text-2xl">{title}</h3>
      <p className="text-center text-base">{info}</p>
    </div>
  );
};

export default CategoryItem;
