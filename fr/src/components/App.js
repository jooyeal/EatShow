import React, { useState, useEffect } from "react";
import GlobalStyle from "./GlobalStyle";
import Router from "./Router";

export default function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
}
