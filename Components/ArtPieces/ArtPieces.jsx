import React from "react";
import ArtPiecesPreview from "../ArtPiecesPreview/ArtPiecesPreview";
import FavoriteButton from "../FavoriteButton/FavoriteButton.jsx";
import Link from "next/link";

export default function ArtPieces({ pieces, onToggleFavorite }) {
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
                onToggleFavorite={onToggleFavorite}
                slug={piece.slug}
              />
            </Link>
            <FavoriteButton
              onToggleFavorite={onToggleFavorite}
              isFavorite={piece.slug}
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
