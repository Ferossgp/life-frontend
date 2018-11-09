import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageHeading = styled.h1`
  margin-bottom: 50px;
  text-align: center;
  color: #ec1752;
`;

export const Grid = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const GridItem = styled(Link)`
  width: 260px;
  height: 360px;
  position: relative;
  padding: 2.75rem;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
  margin-bottom: 5rem;
  cursor: pointer;
`;

export const GridItemBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f1f1f1;
`;

export const GridItemWrap = styled.div`
  position: relative;
  transform: 'matrix(0.99756, -0.06976, 0.06976, 0.99756, 0, 0)';
`;

export const GridItemImg = styled.img`
  pointer-events: none;
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  display: block;
  outline: 1px solid transparent;
`;

export const GridItemTitle = styled.h3`
  font-weight: normal;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0 0 0 -0.25rem;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  transform-origin: 0 50%;
`;

export const GridItemId = styled.h4`
  font-weight: bold;
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 2.65rem;
  margin: 0 0 0.15rem;
`;
