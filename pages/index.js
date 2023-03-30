import useSWR from "swr";
import React from "react";
// import ArtPieces from "./Components/ArtPieces/ArtPieces.jsx";
import Spotlight from "./spotlight/Spotlight.jsx";

export default function SpotlightPage({ data }) {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  const randomObject = getRandomElement(data);

  return (
    <div>
      <Spotlight
        image={randomObject.imageSource}
        artist={randomObject.artist}
      ></Spotlight>
    </div>
  );
}
