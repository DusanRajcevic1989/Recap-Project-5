import ArtPieces from "./ArtPieces";
import React from "react";

export default function RenderArtPieces({ data }) {
  return (
    <div>
      <ArtPieces pieces={data} />
    </div>
  );
}
