import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const iframeElement = screen.getByTitle(/s/i);
  expect(iframeElement).toBeInTheDocument();
});
