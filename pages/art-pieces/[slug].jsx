import React from "react";
import ArtPieceDetails from "../../Components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";
import RenderArtPieces from "./";

export default function ArtPieceDetailsSlug({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  //console.log(pieceIndex);
  console.log(data);
  const pieceIndex = data.find((piece) => piece.slug === slug);
  console.log(pieceIndex);

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
      />
    </div>
  );
}
