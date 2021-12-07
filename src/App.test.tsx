import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Smoke test", () => {
  render(<App />);
  const desc = screen.getByText(/Ant-d Table Filter/i);
  expect(desc).toBeInTheDocument();
});
