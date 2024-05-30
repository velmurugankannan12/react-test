import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from './App';

test('submits the form with name and email', () => {
  // Render the ExampleForm component
  render(<Form />);

  // Get the input elements by their placeholder text
  const nameInput = screen.getByPlaceholderText('name');
  const emailInput = screen.getByPlaceholderText('email');
  const submitButton = screen.getByTestId('submit');

  // Simulate user typing into the input fields
  fireEvent.change(nameInput, { target: { value: 'testName' } });
  fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } });

  // Assert that the input values have been updated
  expect(nameInput.value).toBe('testName');
  expect(emailInput.value).toBe('test@gmail.com');

  // Simulate form submission
  fireEvent.click(submitButton);

});
