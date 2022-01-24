import styled from "styled-components";

export const Dot = styled.div`
  height: 50px;
  width: 50px;
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;
