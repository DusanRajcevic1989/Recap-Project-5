import React from "react";
import ArtPieces from "../../Components/ArtPieces/ArtPieces";

export default function index({ artPiecesInfo, data }) {
  const filteredData = [];

  for (let i = 0; i < data.length; ++i) {
    for (let j = 0; j < artPiecesInfo.length; ++j) {
      //console.log(artPiecesInfo[0]);
      if (artPiecesInfo[j].clickedSlug === data[i].slug)
        if (artPiecesInfo[j].isFavorite === true) {
          filteredData.push(data[i]);
        }
    }
  }
  //console.log("filtered", filteredData);
  return (
    <div>
      <li style={{ listStyle: "none" }}>
        {" "}
        {<ArtPieces pieces={filteredData} />}
      </li>
    </div>
  );
}
