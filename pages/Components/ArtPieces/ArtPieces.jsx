import React from "react";
import ArtPiecesPreview from "../ArtPiecesPreview/ArtPiecesPreview";
import Spotlight from "../Spotlight/Spotlight";

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
              width={piece.dimensions.width}
              height={piece.dimensions.height}
            />
          </li>
        ))}
      </ul>

      {/* <Spotlight
        image={randomObject.imageSource}
        artist={randomObject.artist}
      ></Spotlight> */}
    </div>
  );
}
