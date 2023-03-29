import React from "react";
import ArtPiecesPreview from "../ArtPiecesPreview/ArtPiecesPreview";

export default function ArtPieces({ pieces }) {
  return (
    <div>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecesPreview
              image={piece.imageSource}
              title={piece.slug}
              artist={piece.artist}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
