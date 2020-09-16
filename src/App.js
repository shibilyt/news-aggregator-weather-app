import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./App.css";
import Header from './components/Header'
import NewsCard from "./components/NewsCard";
import { Box } from "@material-ui/core";
import Weather from "./components/Weather";

function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <Container maxWidth="md">
          <Header/>
          <Box mt={8} p={3}>
            <NewsCard />
          </Box>
          <Weather/>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
