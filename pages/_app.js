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

  function handleFavorite() {
    // const arr = data.map((piece) => piece.slug);
    // artPiecesInfo = { ...arr, isFavorite: false };
    // setArtPiecesInfo(artPiecesInfo);
    console.log("data");
  }

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
