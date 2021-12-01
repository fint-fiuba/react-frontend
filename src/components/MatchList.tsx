import React, { useState, useRef, useMemo } from "react";
import { MatchButtons } from "./MatchButtons";
import animales from "../data/getAnimals.jsx";
import MatchCard from "./MatchCard";
import NavBar from "./NavBar";
import "../css/MatchList.css";

const MatchList = () => {

  const [currentIndex, setCurrentIndex] = useState(animales.length - 1);

  const currentIndexRef = useRef(currentIndex);

  const childRefs: Array<any> = useMemo(
    () =>
      Array(animales.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canSwipe = currentIndex >= 0;

  const swiped = (idx: number) => {
    updateCurrentIndex(idx - 1);
  };

  const outOfFrame = (idx: number) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir: string) => {
    if (canSwipe && currentIndex < animales.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="match_cards">
        {animales.map((animal, index: number) => (
          <MatchCard
            key={animal.name}
            name={animal.name}
            image={animal.image}
            index={index}
            swiped={swiped}
            outOfFrame={outOfFrame}
            childRefs={childRefs}
          />
        ))}
      </div>

      <MatchButtons swipe={swipe} />
    </>
  );
};

export default MatchList;
