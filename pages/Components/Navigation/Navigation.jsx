import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <Link href="../Components/ArtPieces">Pieces</Link>
      <Link href="../Components/Spotlight">Spotlight</Link>
    </div>
  );
}
