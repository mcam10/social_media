import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';


import { HomeScreen } from '../../src/screens/index';

describe('HomeScreen', () => {
  test('renders HomeScreen component', () => {
	render(<HomeScreen />);
	
  }); 
});

