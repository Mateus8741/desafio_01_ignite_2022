import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray_500};
  border-radius: 8px;

  margin-bottom: 0.75rem;

  [type="checkbox"] {
    width: 1.0906rem;
    height: 1.0906rem;
    color: dodgerblue;
    vertical-align: middle;
    -webkit-appearance: none;
    background: none;
    border: 0;
    outline: 0;
    flex-grow: 0;
    border-radius: 50%;
    background-color: transparent;
    transition: background 300ms;
    cursor: pointer;
  }
  [type="checkbox"]::before {
    content: "";
    color: transparent;
    display: block;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    border: 0;
    background-color: transparent;
    background-size: contain;
    box-shadow: inset 0 0 0 1px ${({theme})=> theme.colors.blue};
  }
  [type="checkbox"]:checked {
    background-color: ${({theme})=> theme.colors.purple_dark};
    color: red;
  }
  [type="checkbox"]:checked::before {
    box-shadow: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cpath d='M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z' fill='%23fff'/%3E %3C/svg%3E");
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
`;

export const DivText = styled.div`
  width: 100%;
  padding: 0 0.75rem;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.inter_400};
  font-weight: 400;
  font-size: 0.875rem;
  text-align: left;
`;
