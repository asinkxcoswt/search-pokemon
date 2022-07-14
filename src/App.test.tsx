import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("Sanity test App", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
