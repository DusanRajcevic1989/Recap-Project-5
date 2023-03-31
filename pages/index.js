import Spotlight from "../Components/Spotlight/spotlight.jsx";

export default function SpotlightPage({ data, onToggleFavorite }) {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  const randomObject = getRandomElement(data);

  return (
    <div>
      <Spotlight
        image={randomObject.imageSource}
        artist={randomObject.artist}
        onToggleFavorite={onToggleFavorite}
        slug={randomObject.slug}
      />
    </div>
  );
}
