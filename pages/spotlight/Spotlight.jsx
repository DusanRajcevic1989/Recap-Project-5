import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "../../Components/Favorite Button/Favorite Button";

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

export default function Spotlight({ image, artist }) {
  console.log(image);
  return (
    <StyledPieces>
      <StyledImage src={image} alt={"image"} width={300} height={300} />
      <FavoriteButton />
      {artist}
    </StyledPieces>
  );
}
