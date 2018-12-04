import React from 'react';

import {
  Button,
  Heading
} from 'react-bulma-components/full';

const HeaderButtonGroup = ({ style, headerTitle, buttonText, buttonOnClick }) => (
  <div
    className="is-flex"
    style={{ marginBottom: '1rem', alignItems: 'center', justifyContent: 'space-between', ...style }}
  >
    <Heading size={5} style={{ marginBottom: 0 }}>{headerTitle}</Heading>
    <Button
      color="info"
      style={{ marginLeft: '1rem' }}
      onClick={buttonOnClick}
    >
      {buttonText}
    </Button>
  </div>
);

export default HeaderButtonGroup;
