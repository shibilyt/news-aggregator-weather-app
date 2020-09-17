import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Filter from "./Filter";
import useNews from "../hooks/useNews";
import NewsCard from "./NewsCard";
import CardSkeleton from "./CardSkeleton";

export default function Content({search ="", setSearch}) {
  const [lang, setLang] = useState("all");
  const { status, data, error } = useNews(lang, search);
  console.log("news data :>> ", data);
  return (
    <Box mt={8} p={3}>
      <Filter lang={lang} setLang={setLang} search={search} setSearch={setSearch}/>
      {status === "loading" && (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      )}
      {status === "error" && <NewsError error={error} />}
      {status === "success" &&
        (lang === "all" && !search
          ? data.data.articles.map((article) => <NewsCard data={article} />)
          // : data.data.articles.map((article) => <NewsCard data={article} />))}
          : data.articles.map((article) => <NewsCard data={article} />))}
    </Box>
  );
}

function NewsError({ error }) {
  return <div>Something went wrong. Retrying...</div>;
}
