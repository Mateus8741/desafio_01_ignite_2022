import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: calc(0px - 1.5rem - 3px);
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.gray_500};
  padding: 0 1rem;
  height: 3.37rem;
  border-radius: 8px;
  border: inset 1px ${({ theme }) => theme.colors.gray_700};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue_dark};
  color: ${({ theme }) => theme.colors.white};
  
  border-radius: 8px;
  padding: 1rem 1rem;
`;
