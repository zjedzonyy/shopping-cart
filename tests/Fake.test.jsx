
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Fake from "../components/Fake.jsx";

describe("Fake component", () => {
  it("renders correct heading", () => {
    render(<Fake />);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
});

