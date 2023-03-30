import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Layout from "../Components/Layout/Layout";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading..</div>;
  if (!data) return <div>no data</div>;

  const arr = artPiecesInfo.map((piece) => piece.slug);

  function handleFavorite() {
    // const info = { ...arr, isFavorite: !false };
    // setArtPiecesInfo();
    console.log("hallo world");
  }
  console.log("data", handleFavorite);
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <Layout />
        <GlobalStyle />
        <Component
          {...pageProps}
          data={data}
          onHandleFavorite={handleFavorite}
        />
      </SWRConfig>
    </>
  );
}
