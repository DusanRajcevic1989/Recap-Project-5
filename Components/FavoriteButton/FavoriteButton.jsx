import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 10px 30px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <div>
      <Button onClick={() => onToggleFavorite(isFavorite)}>Favorite</Button>
    </div>
  );
}
