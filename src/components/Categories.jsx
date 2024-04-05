import React from "react";
import CategoryItem from "./CategoryItem";
import { CategoryData } from "../data";

const Categories = () => {
  return (
    <div className="flex justify-center items-center pt-12">
      <div className="w-[1000px] bg-table grid grid-cols-3 gap-4 justify-items-center content-center grid-flow-row p-8">
        {CategoryData.map(item => <CategoryItem key={item.id} {...item}/>)}
      </div>
    </div>
  );
};

export default Categories;
