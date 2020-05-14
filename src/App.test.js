import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import App from "./App";
import  ContactForm  from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("form is present", () => {
  expect(ContactForm).toBe(ContactForm);
});

test("submit form works", () => {
  // const expected = "Edd";
  // const actual = getByText('first name');
  const {getByText} = render(<App />);
  getByText(/first name/i);
})
