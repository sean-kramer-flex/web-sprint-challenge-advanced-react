import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);

  const header = screen.getByText(/checkout form/i);
});

test("form shows success message on submit with form details", () =>  {
  render(<CheckoutForm />);

  const fnInput = screen.getByLabelText(/first name/i);
  const lnInput = screen.getByLabelText(/last name/i);
  const addInput = screen.getByLabelText(/address/i);
  const cInput = screen.getByLabelText(/city/i);
  const sInput = screen.getByLabelText(/state/i);
  const zInput = screen.getByLabelText(/zip/i);
  const button = screen.getByRole('button', {name: /checkout/i});

  userEvent.type(fnInput, 'Sean');
  userEvent.type(lnInput, "Kramer");
  userEvent.type(addInput, '411 Middle Street, Apt. 3A');
  userEvent.type(cInput, 'Portsmouth');
  userEvent.type(sInput, 'NH');
  userEvent.type(zInput, '03801');
 

  userEvent.click(button);

  const message = screen.getByText(/You have ordered some plants/i);
  expect(message).toBeInTheDocument();


}
);
