import React from 'react';
import { render, fireEvent, getByTestId, screen } from '@testing-library/react'

import App from './App';

describe('App', () => {
  test('renders App component', () => {
	render(<App />);
	
  }); 
});


