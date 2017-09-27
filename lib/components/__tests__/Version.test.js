import React from 'react';
import { create } from 'react-test-renderer';

import Version from '../Version';

describe('Version SFC', () => {
  const testProps = {
    version: '0.0.0'
  };

  it('renders without crashing', () => {
    const tree = create(<Version {...testProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
