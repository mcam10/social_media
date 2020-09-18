import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

test('Testing our App Component', () => {
   const tree = renderer.create(<App/>).toJSON();
   expect(tree).toMatchSnapshot();	
});
