import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const CreateButton = () => {
  const [newId, setNewId] = React.useState(uuidv4());
  const handleClick = () => setNewId(uuidv4());
  return (
    <Button to={`/order/${newId}`} onClick={handleClick}>
      New Order
    </Button>
  );
};

const Button = styled(NavLink)`
  align-self: flex-end;
  font-size: 1rem;
  height: 2rem;
  line-height: 2rem;
  -webkit-background-clip: padding-box;
  background-image: linear-gradient(
    to left,
    rgb(255, 21, 211),
    rgb(245, 72, 125) 10%,
    rgb(246, 105, 108) 50%,
    rgb(246, 147, 85)
  );
  background-clip: padding-box;
  padding: 0rem 0.75rem;
  margin: 0.75rem 0.5rem 0 0;
  border-radius: 1rem;
  color: white;
  &:hover {
    transform: translate(-1%, -2%);
  }
  &:active {
    transform: translate(-1%, 1%);
  }
  transition: all 0.1s;
  backface-visibility: hidden;

  // remove styles of <NavLink>
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
Button.displayName = 'Button';
export default CreateButton;
