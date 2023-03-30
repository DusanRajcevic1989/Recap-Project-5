import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <Link href="../art-pieces">Pieces</Link>
      <Link href="../spotlight">Spotlight</Link>
    </div>
  );
}
