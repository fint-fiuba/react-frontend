import React, { useState, useRef, useMemo, useEffect } from "react";
import { MatchButtons } from "./MatchButtons";
import MatchCard from "./MatchCard";
import NavBar from "./NavBar";
import "../css/MatchList.css";
import { getAnimales } from "../interfaces/animales";

const MatchList = () => {

  const [matches, setMatches] = useState<getAnimales>({
    message: [],
  });
  
  const [currentIndex, setCurrentIndex] = useState(6 - 1);
  

  useEffect(() => {
    fetch("http://localhost:6060/animales")
      .then((res) => res.json())
      .then(setMatches);
  }, []);


  const currentIndexRef = useRef(currentIndex);

  const childRefs: Array<any> = useMemo(
    () =>
      Array(6)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canSwipe = currentIndex >= 0;

  const swiped = (dir: string, idx: number) => {
    updateCurrentIndex(idx - 1);
    if(dir === "left"){
      console.log("se fue rechazado")
    }
    if(dir === "right"){
      console.log("se fue aceptado")
    }
  };

  const outOfFrame = (idx: number) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir: string) => {
    if (canSwipe && currentIndex < 6) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };



  return (
    <>
      <NavBar></NavBar>
      <div className="match_cards">
        {matches.message.map((animal, index: number) => (
          <MatchCard
            key={animal.name}
            animal={animal}
            index={index}
            functions={
              [swiped,outOfFrame]
            }
            childRefs={childRefs}
          />
        ))}
      </div>

      <MatchButtons swipe={swipe} />
    </>
  );
};

export default MatchList;
