import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledPieces = styled.div`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 20;
  margin: 20;
  justify-content: center;
`;
const StyledImage = styled.img`
  width: 20%;
  height: 20%;
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  width,
  height,
}) {
  console.log(title);
  return (
    <div>
      <StyledPieces>
        <StyledImage src={image} alt={"image"} width={width} height={height} />
        {artist} {title}
        {year}
        {genre}
      </StyledPieces>
      <Link href="./">
        <button>back</button>
      </Link>
    </div>
  );
}
