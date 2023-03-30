import React from "react";

export default function FavoriteButton({ onHandleFavorite }) {
  console.log("please: ", onHandleFavorite);
  return (
    <div>
      <span></span>
      <button onClick={() => onHandleFavorite()}>Favorite</button>
    </div>
  );
}
