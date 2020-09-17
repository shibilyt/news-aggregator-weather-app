import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Filter from "./Filter";
import useNews from "../hooks/useNews";
import useSwapi from "../hooks/useSwapi";
import NewsCard from "./NewsCard";
import CardSkeleton from "./CardSkeleton";

export default function Content() {
  const [lang, setLang] = useState("ml");
  const [search, setSearch] = useState("");
  const { status, data, error, } = useNews();
  console.log("news data :>> ", data);
  return (
    <Box mt={8} p={3}>
      <Filter
        lang={lang}
        setLang={setLang}
        search={search}
        setSearch={setSearch}
      />
      {status === "loading" && (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      )}
      {status === "error" && <NewsError error={error}/>}
      {status === "success" &&
        data.data.articles.map((article) => <NewsCard data={article} />)}
    </Box>
  );
}


function NewsError({error}){

    return (
        <div>
            Something went wrong. Retrying...
        </div>
    )
}