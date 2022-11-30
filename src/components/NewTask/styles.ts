import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: calc(0px - 1.5rem - 3px);
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 3.37rem;
  background-color: ${({ theme }) => theme.colors.gray_500};
  padding: 0 1rem;
  border-radius: 8px;
  border: inset 1px ${({ theme }) => theme.colors.gray_700};
  margin-right: 8px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue_dark};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  border-radius: 8px;
  border: none;
  padding: 1rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    transition: all 0.5s;
  }
`;
