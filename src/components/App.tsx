import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { NotFoundPage } from "../pages/NotFound/NotFoundPage";
import { MainPage } from "../pages/Main/MainPage";
import { GlobalStyle } from "../styled/GlobalStyle";
import { CreatePage } from "../pages/Create/CreatePage";

import { Header } from "./Header/Header";
import { Container } from "../styled/Container.styled";

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  

  useEffect(() => {
    let lastScrollTop = 0;
    
    const handleScroll = () => {
      const headerHeight = document.getElementById('header')?.offsetHeight || 0;
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      
      if (currentScroll > lastScrollTop && currentScroll > headerHeight) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      <Header visible={isHeaderVisible}/>
      <Container>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>

      <GlobalStyle />
    </>
  );
}

export default App;
