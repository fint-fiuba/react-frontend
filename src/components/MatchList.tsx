import React, { useState, useRef, useMemo, useEffect } from "react";
import { MatchButtons } from "./MatchButtons";
import MatchCard from "./MatchCard";
import NavBar from "./NavBar";
import "../css/MatchList.css";
import { Animal } from "../interfaces/animales";
import axios from "axios";

const MatchList = () => {
  
  const [matches, setMatches] = useState<Animal>({
    name: "",
    image: "",
    petSex: "",
    petCategory: "",
  });

  const [currentIndex, setCurrentIndex] = useState(2 - 1);

  const [currentRef, setcurrentRef] = useState( [ useRef(1)  , useRef(2) ]);


  useEffect(() => nextMatch1() , []);

  const nextMatch1 = () => {
    try {
      axios
        .get("http://localhost:3001/user/nextmatch", {
          params: {
            mail: "tdelpup@fi.uba.ar",
          },
        })
        .then((res) =>
          setMatches({
            image: res.data.image,
            name: res.data.petName,
            petSex: res.data.petSex,
            petCategory: res.data.petCategory,
          })
        );
    } catch (error) {
      setMatches({
        image: "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg",
        name: "",
        petSex: "",
        petCategory: "",
      })
    }
  };

  const nextMatch2 = () => {
    try {
      axios
        .get("http://localhost:3001/user/nextmatch", {
          params: {
            mail: "namigo@fi.uba.ar",
          },
        })
        .then((res) =>
          setMatches({
            image: res.data.image,
            name: res.data.petName,
            petSex: res.data.petSex,
            petCategory: res.data.petCategory,
          })
        );
    } catch (error) {
      console.log("error al traer nextmatch");
    }
  };


  const currentIndexRef = useRef(currentIndex);

  const childRefs: Array<any> = useMemo(
    () =>
      Array(2)
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
    if (dir === "left") {
      console.log("se fue rechazado");
    }
    if (dir === "right") {
      console.log("se fue aceptado");
    }
  };

  const outOfFrame = (idx: number) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    nextMatch2();
  };

  const swipe = async (dir: string) => {
    if (canSwipe && currentIndex < 2) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="match_cards">
        {
          <MatchCard
            key={matches.name}
            animal={matches}
            index={1}
            functions={[swiped, outOfFrame]}
            currRef={currentRef}
          />
        }
      </div>

      <MatchButtons 
        swipe={swipe} 
        otherMail={matches.message[0].mail}
      />
    </>
  );
};

export default MatchList;
