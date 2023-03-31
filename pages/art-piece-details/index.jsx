import ArtPieceDetails from "../../Components/ArtPieceDetails/ArtPieceDetails";
import React from "react";

export default function RenderArtPieces({ data, onToggleFavorite }) {
  return (
    <div>
      <ArtPieceDetails data={data} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
