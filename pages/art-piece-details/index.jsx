import ArtPieceDetails from "../../Components/ArtPieceDetails/ArtPieceDetails";
import React from "react";

export default function RenderArtPieces({ data }) {
  return (
    <div>
      <ArtPieceDetails data={data} />
    </div>
  );
}
