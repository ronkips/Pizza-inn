import styled from "styled-components";

export const Toggle = styled.div`
  display: flex;
  justify-content: space-between;
  border: 3px solid orange;
  border-radius: 1rem;
  position: relative;
  padding: 2px;
  cursor: pointer;

  > * {
    width: 1rem;
    height: 1rem;
    color: orange;
  }
`;

export const ToggleButton = styled.button`
  border-radius: 0%;
  background: orange;
  position: absolute;
`;
