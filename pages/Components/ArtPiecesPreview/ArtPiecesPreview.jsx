//import React from "react";
import Image from "next/image";

export default function ArtPiecesPreview({ image, title, artist }) {
  return (
    <div>
      <Image src={image} alt={"image"} width={200} height={200} />
      {artist} {title}
    </div>
  );
}
