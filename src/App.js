import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import "./App.css";
import Header from "./components/Header";
import theme, { darkTheme } from "./theme";

import { ReactQueryDevtools } from "react-query-devtools";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import Content from "./components/Content";

function App() {
  const queryCache = new QueryCache();

  const [search, setSearch] = useState("");
  const [weatherOpen, setWeatherOpen] = useState(false);

  function handleWeatherOpen() {
    setWeatherOpen(true);
  }

  function handleWeatherClose() {
    setWeatherOpen(false);
  }
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ReactQueryCacheProvider queryCache={queryCache}>
          <Container maxWidth="md">
            <Header
              setSearch={setSearch}
              weatherOpen={weatherOpen}
              handleWeatherOpen={handleWeatherOpen}
              handleWeatherClose={handleWeatherClose}
            />
            <Content
              search={search}
              setSearch={setSearch}
              weatherOpen={weatherOpen}
              handleWeatherOpen={handleWeatherOpen}
              handleWeatherClose={handleWeatherClose}
            />
          </Container>
          <ReactQueryDevtools />
        </ReactQueryCacheProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
