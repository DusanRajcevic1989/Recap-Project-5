import React from "react";
import ArtPieces from "../../Components/ArtPieces/ArtPieces";

export default function index({ artPiecesInfo, data }) {
  console.log("something", data);
  console.log("pieces: ", artPiecesInfo);
  //   const something = artPiecesInfo.map((favorites) => favorites.clickedSlug);
  //   console.log("add: ", something);
  const filteredArray = data.map((e, i) => {
    if (arr2.some((e2) => e2.slug === e1.slug)) return "";
  });

  // ? { ...favorite, isFavorite: !isFavorite }
  // : favorite;
  console.log("are you there?? ", filteredArray);
  return (
    <div>
      <li>
        {" "}
        <ArtPieces pieces={filteredArray} />{" "}
      </li>
    </div>
  );
}
