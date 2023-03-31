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

  function onToggleFavorite(clickedSlug) {
    setArtPiecesInfo((artPiecesInfo) => {
      // find the piece with the clicked slug
      const favorite = artPiecesInfo.find(
        (favorite) => favorite.clickedSlug === clickedSlug
      );
      // if artPiecesInfo already contains
      //console.log("NOT THERE ADDING A NEW ENTRY");
      if (favorite) {
        // we need to create a new array with all the content
        // but with the object that has the clicked slug changed
        return artPiecesInfo.map((favorite) =>
          favorite.clickedSlug === clickedSlug
            ? { ...favorite, isFavorite: !favorite.isFavorite }
            : favorite
        );
      }
      return [...artPiecesInfo, { clickedSlug, isFavorite: true }];
    });
  }

  console.log(artPiecesInfo);
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <Layout />
        <GlobalStyle />
        <Component
          {...pageProps}
          data={data}
          onToggleFavorite={onToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
      </SWRConfig>
    </>
  );
}
