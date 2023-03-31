import React from "react";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <div>
      <button onClick={() => onToggleFavorite(isFavorite)}>Favorite</button>
    </div>
  );
}
