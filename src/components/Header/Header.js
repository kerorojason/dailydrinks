import React from 'react';
import styled from 'styled-components';

import CreateButton from './CreateButton';

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Daily Drinks</Title>
      <CreateButton />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2.5rem 0 0 0;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  text-align: center;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    to left,
    rgb(255, 21, 211),
    rgb(245, 72, 125) 10%,
    rgb(246, 105, 108) 50%,
    rgb(246, 147, 85)
  );
`;
Title.displayName = 'Title';
export default Header;
