import React from "react";
import ArtPiecesPreview from "../ArtPiecesPreview/ArtPiecesPreview";
import { useRouter } from "next/router";
//import Spotlight from "../Spotlight/Spotlight";
import Link from "next/link";

export default function ArtPieces({ pieces }) {
  return (
    <div>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <Link href={`../art-pieces/${piece.slug}`}>
              <ArtPiecesPreview
                image={piece.imageSource}
                title={piece.slug}
                artist={piece.artist}
                width={piece.dimensions.width}
                height={piece.dimensions.height}
              />
            </Link>
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
