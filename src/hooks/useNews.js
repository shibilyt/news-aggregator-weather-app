import { useQuery } from "react-query";
import axios from "axios";

/*
 API keys are taken from environment variables

 Using gnews API and newsApi to allow for rate limit exceeded issue

 language and search params are passed to hook.

 based on the params passed, we call from either search endpoint or top-headlines endpoint
*/
export default function useNews(lang, search) {
  function fetchNews(key, { lang, search }) {
      if (lang === "all" && !search) {
        return axios.get(
          `https://gnews.io/api/v4/top-headlines?token=${process.env.REACT_APP_API_KEY}`
        );
      }

      return axios
        .get(
          `https://gnews.io/api/v4/${!!search ? "search" : "top-headlines"}?${
            lang !== "all" ? "lang=" + lang + "&" : ""
          }${!!search ? "q=" + search + "&" : ""}&token=${
            process.env.REACT_APP_API_KEY
          }`
        )
        .then((res) => res.data);
    }

  return useQuery(["news", { lang, search }], fetchNews);
}
