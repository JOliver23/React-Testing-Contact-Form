import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import App from "./App";
import  ContactForm  from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("form is present", () => { 
  const {getByText} = render(<App />);
  getByText(/first name/i);
  getByText(/last name/i);
  getByText(/email/i);
  getByText(/message/i);
})

test("form entries work as expected", () => {
  const { getByTestId } = render(<App />);
  const nameEntryElement = getByTestId("fName");
  console.log("jo: App.test.js: form: nameEntry", nameEntryElement);

})
