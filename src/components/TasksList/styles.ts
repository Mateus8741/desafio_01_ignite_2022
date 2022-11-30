import styled from "styled-components";

export const Container = styled.div`
  width: 46rem;
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4rem;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CreatedTasks = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter_400};
  color: ${({ theme }) => theme.colors.blue};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;

export const EndedTasks = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter_400};
  color: ${({ theme }) => theme.colors.purple};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;

export const Counter = styled.p`
  width: 1.5625rem;
  height: 1.1875rem;
  background-color: ${({ theme }) => theme.colors.gray_400};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.inter_400};
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 10px;
  padding: 0.1rem 0.5rem;
  margin-left: 0.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  margin-top: 24px;
  border-top: inset 1px ${({ theme }) => theme.colors.gray_300};
  border-radius: 8px;
`;

export const Strong = styled.strong`
  font-family: ${({ theme }) => theme.fonts.inter_400};
  color: ${({ theme }) => theme.colors.gray_300};
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  text-align: center;
  `;

export const Span = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter_400};
  color: ${({ theme }) => theme.colors.gray_300};
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
`;
