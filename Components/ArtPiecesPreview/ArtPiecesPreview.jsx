//import React from "react";
import Image from "next/image";
import styled from "styled-components";

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

export default function ArtPiecesPreview({
  image,
  title,
  artist,
  width,
  height,
}) {
  return (
    <StyledPieces>
      <StyledImage src={image} alt={"image"} width={width} height={height} />
      {artist} {title}
    </StyledPieces>
  );
}
