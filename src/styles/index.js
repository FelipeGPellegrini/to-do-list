import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
  }
`;

export const Container = styled.div`

  width: 100%;
  min-height: 895px;

  background: rgba(0, 0, 0, 0.1);
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 25px;

  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;

    color: #DA2535;

  }
`

export const Input = styled.input`
  padding: 8px 24px;
  width: 224px;
  height: 50px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #DA2535;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  gap: ${(props) => props.gap || "16px"};
`;

export const Spacer = styled.div`
  width: 100%;
  margin: ${(props) => props.margin || "20px"};
`;

export const Button = styled.button`
padding: 10px;
width: 112px;
height: 50px;
background: #DA2535;
border-radius: 10px;
border: none;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #FBFBFB;
&:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }

`

export const Item = styled.li`

  padding: 13px 10px 13px 24px;
  width: 354px;
  height: 50px;
  background: ${(props) => props.checked ? '#DA2535' : '#FFF'};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  list-style: none;
  display: flex;
  justify-content: space-between;

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: ${(props) => props.checked ? 'line-through' : ''};;
    color: ${(props) => props.checked ? '#FFF' : '#000'};
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
  }

  i{
    font-size: 24px;
    color: ${(props) => props.checked ? '#FFF' : '#000'};
  }
`;

