import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { NotFoundPage } from "../pages/NotFound/NotFoundPage";
import { MainPage } from "../pages/Main/MainPage";
import { GlobalStyle } from "../styled/GlobalStyle";

import { Header } from "./Header/Header";
import { Container } from "../styled/Container.styled";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>

      <GlobalStyle />
    </>
  );
}

export default App;
