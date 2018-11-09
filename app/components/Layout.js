import styled from 'styled-components';

export const MainLayout = styled.div`
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  &::before,
  &::after {
    display: table;
    content: '';
    clear: both;
  }
`;
