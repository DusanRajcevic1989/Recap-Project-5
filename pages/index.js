import useSWR from "swr";
import React from "react";
// import ArtPieces from "./Components/ArtPieces/ArtPieces.jsx";
import Spotlight from "./Components/Spotlight/Spotlight.jsx";

export default function SpotlightPage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading..</div>;
  if (!data) return <div>no data</div>;
  // console.log(data);
  function getRandomElement(array) {
    console.log("something", array[Math.floor(Math.random() * array.length)]);
    return array[Math.floor(Math.random() * array.length)];
  }
  const randomObject = getRandomElement(data);
  console.log(randomObject);
  return (
    <div>
      <Spotlight
        image={randomObject.imageSource}
        artist={randomObject.artist}
      ></Spotlight>
    </div>
  );
}
