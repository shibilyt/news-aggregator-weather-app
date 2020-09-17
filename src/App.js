import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import "./App.css";
import Header from "./components/Header";
import Weather from "./components/Weather";
import theme, { darkTheme } from "./theme";

import { ReactQueryDevtools } from "react-query-devtools";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import Content from "./components/Content";

function App() {

  const queryCache = new QueryCache();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ReactQueryCacheProvider queryCache={queryCache}>
          <Container maxWidth="md">
            <Header />
            <Content />
          </Container>
          <ReactQueryDevtools />
        </ReactQueryCacheProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
