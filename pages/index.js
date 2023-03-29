import useSWR from "swr";
import ArtPieces from "./Components/ArtPieces/ArtPieces.jsx";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading..</div>;
  if (!data) return <div>no data</div>;
  console.log(data);
  return (
    <div>
      <ArtPieces pieces={data} />
    </div>
  );
}
