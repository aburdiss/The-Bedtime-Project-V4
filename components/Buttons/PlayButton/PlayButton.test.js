import { render, screen } from "@testing-library/react";
import PlayButton from "./PlayButton";

test("renders PlayButton", () => {
  render(<PlayButton link="/">Hello</PlayButton>);
  const label = screen.queryByText(/Hello/);
  expect(label).not.toBeNull();
});
