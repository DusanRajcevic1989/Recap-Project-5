import React from "react";

export default function FavoriteButton({ onHandleFavorite }) {
  console.log("onClick", onHandleFavorite);

  return (
    <div>
      <button onClick={onHandleFavorite}>Favorite</button>
    </div>
  );
}
