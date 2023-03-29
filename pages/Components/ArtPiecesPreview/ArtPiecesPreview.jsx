import React from "react";
import Image from "next/image";

export default function ArtPiecesPreview({ image, title, artist }) {
  return (
    <div>
      <Image scr={image} alt={"image"} width={230} height={140} />
      {artist} {title}
    </div>
  );
}
