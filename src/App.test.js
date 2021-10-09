
import MainRender from './MainRender';
import React from 'react';
import ReactDOM from 'react-dom';

it('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainRender/>,div);
  ReactDOM.unmountComponentAtNode(div);

});
