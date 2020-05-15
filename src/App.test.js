import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import App from "./App";
import  ContactForm  from "./components/ContactForm";
import { act } from "react-dom/test-utils";

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
  const fName = getByTestId("fName");
  const lName = getByTestId("lName")
  //console.log("jo: App.test.js: form: nameEntry", fName);
  expect(fName.placeholder).toBe("Edd");
  expect(lName.placeholder).toBe("Burke");
})

test("form entries other than placeholder", () => {
  const { getByTestId} = render(<ContactForm />);
  const firstName = getByTestId("fName");
  const lastName = getByTestId("lName");
  const emailField = getByTestId("eMail");
  const msgField = getByTestId("msg");
  //console.log(firstName);
  fireEvent.input(firstName, { target: {value: "Jordan"}});
  fireEvent.input(lastName, {target: {value: "Oliver"}});
  fireEvent.input(emailField, {target: {value: "scoop@cat.com"}})
  fireEvent.input(msgField, {target: {value: "hi"}})

  expect(firstName).toHaveValue("Jordan");
  expect(lastName.value).toBe("Oliver");
  expect(emailField.value).toBe("scoop@cat.com");
  expect(msgField.value).toBe("hi");
})

test("submit complete form", () => {
  const onSub = jest.fn();
 
  const { getByTestId } = render(<ContactForm onSubmit={onSub}/>);
  const btn = getByTestId("sub")
  const firstName = getByTestId("fName");
  const lastName = getByTestId("lName");
  const emailField = getByTestId("eMail");
  const msgField = getByTestId("msg");
//console.log(firstName);

  fireEvent.input(firstName, { target: {value: "Jordan"}});
  fireEvent.input(lastName, {target: {value: "Oliver"}});
  fireEvent.input(emailField, {target: {value: "scoop@cat.com"}})
  fireEvent.input(msgField, {target: {value: "hi"}})

  fireEvent.click(btn);
  expect(onSub).toBeCalled();
})
