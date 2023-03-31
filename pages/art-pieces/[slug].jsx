import React from "react";
import ArtPieceDetails from "../../Components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsSlug({ data, onToggleFavorite }) {
  const router = useRouter();
  const { slug } = router.query;
  const pieceIndex = data.find((piece) => piece.slug === slug);

  return (
    <div>
      <ArtPieceDetails
        image={pieceIndex.imageSource}
        title={pieceIndex.name}
        artist={pieceIndex.artist}
        year={pieceIndex.year}
        genre={pieceIndex.genre}
        width={pieceIndex.dimensions.width}
        height={pieceIndex.dimensions.height}
        onToggleFavorite={onToggleFavorite}
        slug={pieceIndex.slug}
      />
    </div>
  );
}
