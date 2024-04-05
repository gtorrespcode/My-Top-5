import React, { useState } from "react";
import ContentButton from "./ContentButton";
import ContentItem from "./ContentItem";
import { ContentData } from "../data";

const ContentTable = () => {
  const [selectedContent, setSelectedContent] = useState(null);

  return (
    <div className="flex flex-col items-center pt-4">
      <div className="w-[1000px] flex gap-x-4 ">
        <ContentButton isSelected={selectedContent == "technologies" } onClick={() => setSelectedContent("technologies")}>
          Technologies
        </ContentButton>
        <ContentButton isSelected={selectedContent == "movies" } onClick={() => setSelectedContent("movies")}>Movies</ContentButton>
        <ContentButton isSelected={selectedContent == "games" } onClick={() => setSelectedContent("games")}>Games</ContentButton>
      </div>
      <div className="w-[1000px] my-4 border-[1px] border-golden">
      {!selectedContent ? (
        <p className="text-white p-4 text-center">Choose a category</p>
      ) : (
        <div className="grid grid-cols-5 gap-2 p-6 justify-items-center ">
          {ContentData[selectedContent].map((item, index) => <ContentItem key={index} rank={index + 1} {...item}/>)}
        </div>
      )}
      </div>
    </div>
  );
};

export default ContentTable;
