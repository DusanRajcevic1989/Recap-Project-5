//import React from "react";
import Image from "next/image";
import styled from "styled-components";

const StyledPieces = styled.div`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 72px;
  padding: 20;
  margin: 20;
  justify-content: left;
`;
const StyledImage = styled.img`
  width: 20%;
  height: 20%;
  list-style-type: none;
`;

export default function ArtPiecesPreview({
  image,
  title,
  artist,
  width,
  height,
  onToggleFavorite,
}) {
  return (
    <StyledPieces>
      <StyledImage src={image} alt={"image"} width={width} height={height} />
      <ul>
        <li>{artist} </li>
        <li>{title}</li>
      </ul>
    </StyledPieces>
  );
}
