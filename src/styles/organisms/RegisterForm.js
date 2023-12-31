import { styled } from "styled-components";
import inputGroup from "../../components/molecules/InputGroup";
import container from "../../components/atoms/Container";
import Links from "../../components/atoms/Links";

export const Container = styled(container)`
  margin-top: 15vh;
  width: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled(inputGroup)`
  height: 2rem;
  border-radius: 4px;
  border-style: solid;
  border-color: gray;
  border-width: 1px;
  text-indent: 0.5rem;
  vertical-align: middle;
  margin-bottom: 1rem;
  width: 50rem;
`;

export const Button = styled.button`
  margin-top: 1.5rem;
  width: 50rem;
  background-color: #ffe500;
  border: none;
  height: 3rem;
  border-radius: 4px;
`;

export const Link = styled(Links)`
  padding-top: 1rem;
  text-decoration: none;
  color: black;
`;
