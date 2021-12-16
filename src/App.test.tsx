import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Smoke test", () => {
  render(<App />);
});

test("Snapshot test", () => {
  const { container } = render(<App />);

  expect(container.firstChild).toMatchSnapshot("should render <App/>");
});
